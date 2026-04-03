#!/usr/bin/env tsx
/**
 * Generates Webiny SDK reference documentation from TypeScript source files.
 *
 * Usage: yarn generate:sdk-reference
 * Source: /Users/adrian/dev/wby-next2/packages/sdk/src/
 * Output: docs/developer-docs/6.x/reference/sdk/
 *
 * Re-run whenever the SDK source changes.
 */

import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join } from "path";

// ─── Configuration ────────────────────────────────────────────────────────────

const SDK_SRC = "/Users/adrian/dev/wby-next2/packages/sdk/src";
const DOCS_OUT = join(process.cwd(), "docs/developer-docs/6.x/reference/sdk");

// ─── Types ────────────────────────────────────────────────────────────────────

interface Field {
  name: string;
  type: string;
  required: boolean;
  description: string;
}

interface MethodInfo {
  name: string;
  description: string;
  isGeneric: boolean;
  genericParam: string;
  paramsType: string;
  params: Field[];
  paramsOptional: boolean;
  returnType: string;
}

// ─── Parsing helpers ──────────────────────────────────────────────────────────

function readFile(path: string): string {
  return readFileSync(path, "utf-8");
}

/**
 * Extract the JSDoc block that immediately precedes a regex match in source.
 */
function extractJsDocBefore(source: string, pattern: RegExp): string {
  const match = source.match(pattern);
  if (!match || match.index === undefined) return "";
  const before = source.slice(0, match.index);
  const endIdx = before.lastIndexOf("*/");
  if (endIdx === -1) return "";
  const startIdx = before.lastIndexOf("/**", endIdx);
  if (startIdx === -1) return "";
  return before.slice(startIdx + 3, endIdx);
}

/**
 * Parse raw JSDoc content into description, @param map, and @returns.
 */
function parseJsDoc(raw: string): {
  description: string;
  paramDocs: Record<string, string>;
  returns: string;
} {
  const lines = raw.split("\n").map(l => l.replace(/^\s*\*\s?/, "").trimEnd());

  // Drop the first line if it's noise immediately after /** (e.g. "/**1`" artifacts)
  if (lines.length > 0 && !lines[0].match(/[a-zA-Z@]/)) {
    lines.shift();
  }

  const descLines: string[] = [];
  const paramDocs: Record<string, string> = {};
  let returns = "";
  let pastDescription = false;

  for (const line of lines) {
    if (line.startsWith("@template") || line.startsWith("@param") || line.startsWith("@returns")) {
      pastDescription = true;
    }
    if (!pastDescription) {
      if (line) descLines.push(line);
      continue;
    }
    const paramMatch = line.match(/^@param\s+([\w.]+)\s+-\s+(.*)/);
    if (paramMatch) {
      paramDocs[paramMatch[1]] = paramMatch[2].trim();
    }
    const returnsMatch = line.match(/^@returns\s+(.*)/);
    if (returnsMatch) {
      returns = returnsMatch[1].trim();
    }
  }

  return { description: descLines.join(" ").trim(), paramDocs, returns };
}

/**
 * Find what's inside Promise<...> by balancing angle brackets.
 */
function extractReturnType(source: string): string {
  const idx = source.indexOf("): Promise<");
  if (idx === -1) return "";
  const start = idx + 11; // skip `): Promise<`
  let depth = 1;
  let pos = start;
  while (pos < source.length && depth > 0) {
    if (source[pos] === "<") depth++;
    else if (source[pos] === ">") depth--;
    pos++;
  }
  return source.slice(start, pos - 1).trim();
}

/**
 * Extract the first type parameter name from the function signature (e.g. TValues).
 */
function extractGenericParam(source: string): string | null {
  const m = source.match(/export\s+async\s+function\s+\w+<(\w+)/);
  return m ? m[1] : null;
}

/**
 * Find the params type from the implementation function signature.
 */
function extractParamsType(source: string): { type: string; optional: boolean } | null {
  const m = source.match(/\bparams(\?)?:\s*(\w+(?:<[^>]*>)?)/);
  if (!m) return null;
  return { type: m[2], optional: !!m[1] };
}

/**
 * Parse an interface body (between the outer braces) into Field[].
 * Handles: simple fields, inline nested objects, Array<{...}> types.
 */
function parseInterfaceBody(body: string): Field[] {
  const fields: Field[] = [];
  const lines = body.split("\n");
  let jsDocLines: string[] = [];
  let inJsDoc = false;
  let depth = 0;
  let pendingField: Field | null = null;

  for (const line of lines) {
    const t = line.trim();

    // When inside a nested object/array-of-objects, track depth and skip
    if (depth > 0) {
      const opens = (t.match(/\{/g) || []).length;
      const closes = (t.match(/\}/g) || []).length;
      depth += opens - closes;
      if (depth <= 0) {
        depth = 0;
        if (pendingField) {
          fields.push(pendingField);
          pendingField = null;
        }
        jsDocLines = [];
      }
      continue;
    }

    // JSDoc block
    if (t.startsWith("/**")) {
      inJsDoc = true;
      jsDocLines = [];
      continue;
    }
    if (inJsDoc) {
      if (t.startsWith("*/")) {
        inJsDoc = false;
      } else {
        jsDocLines.push(t.replace(/^\*\s?/, ""));
      }
      continue;
    }

    // Single-line comment
    if (t.startsWith("//")) {
      jsDocLines = [t.replace(/^\/\/\s*/, "")];
      continue;
    }

    // Index signature [key: string]: any — skip
    if (t.startsWith("[")) {
      jsDocLines = [];
      continue;
    }

    // Detect opening of inline nested object or Array<{...}>
    const opens = (t.match(/\{/g) || []).length;
    const closes = (t.match(/\}/g) || []).length;
    if (opens > closes) {
      depth = opens - closes;
      const nestMatch = t.match(/^(\w+)(\?)?:/);
      if (nestMatch) {
        const typeStr = t.includes("Array<{") ? "Array<object>" : "object";
        pendingField = {
          name: nestMatch[1],
          type: typeStr,
          required: !nestMatch[2],
          description: jsDocLines.join(" ").trim()
        };
      }
      jsDocLines = [];
      continue;
    }

    // Regular field: name?: type;
    const fieldMatch = t.match(/^(\w+)(\?)?\s*:\s*(.+?)(?:;)?\s*$/);
    if (fieldMatch && t !== "{" && t !== "}") {
      fields.push({
        name: fieldMatch[1],
        type: fieldMatch[3].trim(),
        required: !fieldMatch[2],
        description: jsDocLines.join(" ").trim()
      });
      jsDocLines = [];
    } else if (t && !t.match(/^[{}]/) && !t.startsWith("export") && !t.startsWith("import")) {
      jsDocLines = [];
    }
  }

  return fields;
}

/**
 * Extract all named interfaces from source, returning name → Field[].
 * Uses brace-balancing to correctly find interface boundaries.
 */
function extractInterfaces(source: string): Record<string, Field[]> {
  const result: Record<string, Field[]> = {};
  const headerRegex = /export\s+interface\s+(\w+)(?:<[^>]*>)?(?:\s+extends[^{]+)?\s*\{/g;
  let m: RegExpExecArray | null;

  while ((m = headerRegex.exec(source)) !== null) {
    const name = m[1];
    const braceStart = m.index + m[0].length - 1; // position of opening `{`
    let depth = 1;
    let pos = braceStart + 1;
    while (pos < source.length && depth > 0) {
      if (source[pos] === "{") depth++;
      else if (source[pos] === "}") depth--;
      pos++;
    }
    const body = source.slice(braceStart + 1, pos - 1);
    result[name] = parseInterfaceBody(body);
  }

  return result;
}

// ─── Method file parsing ──────────────────────────────────────────────────────

function parseMethodFile(filePath: string, methodName: string): MethodInfo | null {
  let source: string;
  try {
    source = readFile(filePath);
  } catch {
    return null;
  }

  // JSDoc before `export async function`
  const jsDocRaw = extractJsDocBefore(source, /export\s+async\s+function\s+\w+/);
  const { description, paramDocs, returns } = parseJsDoc(jsDocRaw);

  // Generic type param
  const genericParam = extractGenericParam(source);
  const isGeneric = genericParam !== null;

  // Return type (inside Promise<...>)
  const returnType = extractReturnType(source);

  // Params type
  const paramsTypeInfo = extractParamsType(source);
  const paramsType = paramsTypeInfo?.type ?? "";
  const paramsOptional = paramsTypeInfo?.optional ?? false;

  // Parse all interfaces in the file
  const interfaces = extractInterfaces(source);

  // Build field list from the Params interface
  const params: Field[] = [];
  // Strip generic suffix for map lookup: "CreateEntryParams<TValues>" → "CreateEntryParams"
  const baseParamsType = paramsType.split("<")[0];

  if (baseParamsType && interfaces[baseParamsType]) {
    for (const field of interfaces[baseParamsType]) {
      const desc =
        field.description || paramDocs[`params.${field.name}`] || paramDocs[field.name] || "";

      params.push({ ...field, description: desc });

      // Expand referenced interface if it's small and defined in the same file
      const cleanType = field.type.split(/[<|, ]/)[0].trim(); // base type name
      const referenced = interfaces[cleanType];
      if (referenced && referenced.length > 0 && referenced.length <= 6) {
        for (const sub of referenced) {
          params.push({
            name: `${field.name}.${sub.name}`,
            type: sub.type,
            required: false,
            description: sub.description || paramDocs[`params.${field.name}.${sub.name}`] || ""
          });
        }
      }
    }
  }

  return {
    name: methodName,
    description,
    isGeneric,
    genericParam: genericParam ?? "TValues",
    paramsType,
    params,
    paramsOptional,
    returnType
  };
}

/**
 * Extract public async method names from a class file.
 */
function getMethodNamesFromClass(source: string): string[] {
  const names: string[] = [];
  // Match indented `async methodName` (4 spaces = class method, not nested function)
  const regex = /^ {4}async\s+(\w+)[(<]/gm;
  let m: RegExpExecArray | null;
  while ((m = regex.exec(source)) !== null) {
    names.push(m[1]);
  }
  return names;
}

// ─── MDX rendering ────────────────────────────────────────────────────────────

function escMd(text: string): string {
  return text.replace(/\|/g, "\\|");
}

function renderParamsTable(fields: Field[]): string {
  const rows = fields.map(f => {
    const name = `\`${f.name}\``;
    const type = `\`${escMd(f.type)}\``;
    const req = f.required ? "Yes" : "No";
    const desc = escMd(f.description || "—");
    return `| ${name} | ${type} | ${req} | ${desc} |`;
  });
  return [
    "| Parameter | Type | Required | Description |",
    "|-----------|------|:--------:|-------------|",
    ...rows
  ].join("\n");
}

function buildDisplaySignature(method: MethodInfo, sdkProp: string): string {
  const generic = method.isGeneric ? `<${method.genericParam}>` : "";
  const paramStr =
    method.params.length > 0 || method.paramsType
      ? `params${method.paramsOptional ? "?" : ""}: ${method.paramsType}`
      : "";
  const ret = method.returnType ? `Promise<${method.returnType}>` : "Promise<void>";
  return `sdk.${sdkProp}.${method.name}${generic}(${paramStr}): ${ret}`;
}

function renderMethod(method: MethodInfo, sdkProp: string): string {
  const out: string[] = [];

  out.push(`### ${method.name}`);
  out.push("");

  if (method.description) {
    out.push(method.description);
    out.push("");
  }

  out.push("**Signature:**");
  out.push("");
  out.push("```typescript");
  out.push(buildDisplaySignature(method, sdkProp));
  out.push("```");
  out.push("");

  if (method.params.length > 0) {
    out.push("**Parameters:**");
    out.push("");
    out.push(renderParamsTable(method.params));
    out.push("");
  } else if (!method.paramsType) {
    out.push("_This method takes no parameters._");
    out.push("");
  }

  out.push("---");
  out.push("");

  return out.join("\n");
}

function generateNamespacePage(opts: {
  id: string;
  title: string;
  description: string;
  sdkProp: string;
  overviewText: string;
  methods: MethodInfo[];
}): string {
  const { id, title, description, sdkProp, overviewText, methods } = opts;
  const out: string[] = [];

  out.push("---");
  out.push(`id: ${id}`);
  out.push(`title: ${title}`);
  out.push(`description: ${description}`);
  out.push("---");
  out.push("");
  out.push('import { Alert } from "@/components/Alert";');
  out.push("");
  out.push('<Alert type="success" title="WHAT YOU\'LL LEARN">');
  out.push("");
  out.push(`- What methods are available on \`sdk.${sdkProp}\`?`);
  out.push("- What parameters each method accepts?");
  out.push("- What each method returns?");
  out.push("");
  out.push("</Alert>");
  out.push("");
  out.push('<Alert type="info" title="USAGE EXAMPLES">');
  out.push("");
  out.push(
    "See [Using the Webiny SDK](/{version}/headless-cms/using-webiny-sdk) for end-to-end usage examples."
  );
  out.push("");
  out.push("</Alert>");
  out.push("");
  out.push("## Overview");
  out.push("");
  out.push(overviewText);
  out.push("");
  out.push("## Methods");
  out.push("");

  for (const method of methods) {
    out.push(renderMethod(method, sdkProp));
  }

  return out.join("\n");
}

// ─── Namespace definitions ────────────────────────────────────────────────────

const NAMESPACES = [
  {
    classFile: join(SDK_SRC, "CmsSdk.ts"),
    dir: "cms",
    sdkProp: "cms",
    id: "m3q8vcj1",
    title: "CMS SDK Reference",
    description:
      "API reference for the CMS SDK — methods for querying and mutating Headless CMS entries.",
    overviewText:
      "The `CmsSdk` is accessed via `sdk.cms` on a `Webiny` instance. " +
      "It provides methods for reading and writing Headless CMS entries over GraphQL. " +
      "All methods return a `Result` type — use `result.isOk()` and `result.isFail()` " +
      "to handle success and error cases. See the [SDK overview](/{version}/reference/sdk/overview) " +
      "for initialization and error handling details.",
    outFile: join(DOCS_OUT, "cms.mdx")
  },
  {
    classFile: join(SDK_SRC, "FileManagerSdk.ts"),
    dir: "fileManager",
    sdkProp: "fileManager",
    id: "f5t4wh6p",
    title: "File Manager SDK Reference",
    description:
      "API reference for the File Manager SDK — methods for uploading and managing files.",
    overviewText:
      "The `FileManagerSdk` is accessed via `sdk.fileManager` on a `Webiny` instance. " +
      "It provides methods for listing, uploading, updating, and deleting files. " +
      "For large files, use `createMultiPartUpload` followed by `completeMultiPartUpload`. " +
      "All methods return a `Result` type — see the [SDK overview](/{version}/reference/sdk/overview) " +
      "for initialization and error handling details.",
    outFile: join(DOCS_OUT, "file-manager.mdx")
  },
  {
    classFile: join(SDK_SRC, "TenantManagerSdk.ts"),
    dir: "tenantManager",
    sdkProp: "tenantManager",
    id: "r2y9dk0e",
    title: "Tenant Manager SDK Reference",
    description: "API reference for the Tenant Manager SDK — methods for managing tenants.",
    overviewText:
      "The `TenantManagerSdk` is accessed via `sdk.tenantManager` on a `Webiny` instance. " +
      "It provides methods for creating, installing, enabling, and disabling tenants in a " +
      "multi-tenant Webiny setup. All methods return a `Result` type — see the " +
      "[SDK overview](/{version}/reference/sdk/overview) for initialization and error handling details.",
    outFile: join(DOCS_OUT, "tenant-manager.mdx")
  }
];

// ─── Index page (static) ─────────────────────────────────────────────────────

const INDEX_PAGE = `---
id: s7b2nk9x
title: Webiny SDK Reference
description: API reference for the Webiny SDK — a type-safe JavaScript/TypeScript client for interacting with Webiny.
---

import { Alert } from "@/components/Alert";

<Alert type="success" title="WHAT YOU'LL LEARN">

- How to initialize the Webiny SDK?
- What configuration options are available?
- What sub-SDKs are available and what they do?

</Alert>

## Overview

The Webiny SDK is a type-safe JavaScript/TypeScript client for interacting with a Webiny instance from external applications — Node.js scripts, Next.js, Vue, SvelteKit, and others.

Install it from npm:

\`\`\`
yarn add @webiny/sdk
\`\`\`

## Initialization

Create a \`Webiny\` instance with your endpoint and API token:

\`\`\`typescript
import { Webiny } from "@webiny/sdk";

const sdk = new Webiny({
  endpoint: "https://your-webiny-endpoint.com",
  token: "your-api-token",
  tenant: "root", // optional, defaults to "root"
});
\`\`\`

## Configuration

| Option | Type | Required | Description |
|--------|------|:--------:|-------------|
| \`endpoint\` | \`string\` | Yes | The URL of your Webiny API endpoint |
| \`token\` | \`string\` | No | API token for authentication |
| \`tenant\` | \`string\` | No | Tenant ID. Defaults to \`"root"\` |
| \`headers\` | \`Record<string, string>\` | No | Additional HTTP headers sent with every request |
| \`fetch\` | \`typeof fetch\` | No | Custom fetch implementation. Defaults to the global \`fetch\` |

## Sub-SDKs

| Property | Class | Description |
|----------|-------|-------------|
| \`sdk.cms\` | [\`CmsSdk\`](/{version}/reference/sdk/cms) | Query and mutate Headless CMS entries |
| \`sdk.fileManager\` | [\`FileManagerSdk\`](/{version}/reference/sdk/file-manager) | Upload and manage files |
| \`sdk.tenantManager\` | [\`TenantManagerSdk\`](/{version}/reference/sdk/tenant-manager) | Create and manage tenants |

## Error Handling

All SDK methods return a \`Result<TValue, TError>\` type. Use \`result.isOk()\` and \`result.isFail()\` to branch on success or failure:

\`\`\`typescript
const result = await sdk.cms.getEntry({
  modelId: "article",
  where: { entryId: "abc" },
  fields: ["id"],
});

if (result.isFail()) {
  console.error(result.error.message);
  return;
}

console.log(result.value); // typed as CmsEntryData<TValues>
\`\`\`

### Error types

| Error class | \`code\` | When thrown |
|-------------|---------|-------------|
| \`HttpError\` | \`HTTP_ERROR\` | The API responded with a non-2xx HTTP status |
| \`GraphQLError\` | \`GRAPHQL_ERROR\` | The API returned a GraphQL-level error |
| \`NetworkError\` | \`NETWORK_ERROR\` | The \`fetch\` call itself threw (e.g. no connectivity) |
`;

// ─── Main ─────────────────────────────────────────────────────────────────────

function main(): void {
  mkdirSync(DOCS_OUT, { recursive: true });

  // Write index page + ai.txt
  writeFileSync(join(DOCS_OUT, "index.mdx"), INDEX_PAGE, "utf-8");
  writeFileSync(
    join(DOCS_OUT, "index.ai.txt"),
    [
      "AI Context: Webiny SDK Reference Index (index.mdx)",
      "",
      "This file is auto-generated by scripts/generate-sdk-reference.ts.",
      `Source of truth: ${SDK_SRC}`,
      "",
      "Do not edit by hand — re-run the generator after SDK changes."
    ].join("\n"),
    "utf-8"
  );
  console.log("✓ index.mdx");

  for (const ns of NAMESPACES) {
    const classSource = readFile(ns.classFile);
    const methodNames = getMethodNamesFromClass(classSource);

    console.log(`\nParsing ${ns.classFile.split("/").pop()} → ${methodNames.join(", ")}`);

    const methods: MethodInfo[] = [];
    for (const name of methodNames) {
      const implFile = join(SDK_SRC, "methods", ns.dir, `${name}.ts`);
      const info = parseMethodFile(implFile, name);
      if (info) {
        methods.push(info);
        console.log(
          `  ✓ ${name} (${info.params.length} params, returnType: ${info.returnType.slice(0, 40)}...)`
        );
      } else {
        console.warn(`  ✗ Could not parse: ${implFile}`);
      }
    }

    const content = generateNamespacePage({
      id: ns.id,
      title: ns.title,
      description: ns.description,
      sdkProp: ns.sdkProp,
      overviewText: ns.overviewText,
      methods
    });

    writeFileSync(ns.outFile, content, "utf-8");

    const aiTxtPath = ns.outFile.replace(".mdx", ".ai.txt");
    writeFileSync(
      aiTxtPath,
      [
        `AI Context: ${ns.title} (${ns.outFile.split("/").pop()})`,
        "",
        "This file is auto-generated by scripts/generate-sdk-reference.ts.",
        `Source of truth: ${ns.classFile}`,
        "",
        "Do not edit by hand — re-run the generator after SDK changes."
      ].join("\n"),
      "utf-8"
    );

    console.log(`  → ${ns.outFile.replace(process.cwd() + "/", "")}`);
  }

  console.log("\nDone. Run `yarn validate:mdx` to verify pairing.");
}

main();
