/**
 * AI-powered Webiny SDK Reference Generator
 *
 * For each webiny/* entry point:
 *   1. Resolves all exported symbols via ts-morph (declaration text + JSDoc)
 *   2. Sends the source to Claude with a structured prompt
 *   3. Claude writes the complete .mdx page and .ai.txt companion
 *   4. Files are written to docs/developer-docs/6.x/reference/
 *
 * Usage:
 *   tsx scripts/ref/sdk.ts              # skip existing pages
 *   tsx scripts/ref/sdk.ts --force      # regenerate all
 *   tsx scripts/ref/sdk.ts --only api/logger,api/graphql
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync, rmSync } from "fs";
import { join, dirname } from "path";
import { Project } from "ts-morph";
import {
  WEBINY_PKG,
  DOCS_ROOT,
  REF_DIR,
  collectEntryPointSource,
  getPackagePathMap,
  callClaude,
  stableId,
  toTitle,
  toOutputPath,
  rewriteNavigation,
  type EntryPointSource
} from "./_shared.js";

// ---------------------------------------------------------------------------
// Prompt construction
// ---------------------------------------------------------------------------

const AGENTS_MD = readFileSync(join(process.cwd(), "AGENTS.md"), "utf-8");

const LOGGER_EXAMPLE = `---
id: yxbpl2xv
title: Logger
description: "Logger abstraction for server-side logging"
---

import { Alert } from "@/components/Alert";
import { SymbolList } from "@/components/SymbolList";

<Alert type="success" title="WHAT YOU'LL LEARN">

- What is the \`Logger\` abstraction and when do you need it?
- How to inject and use \`Logger\` in your extensions?

</Alert>

## Overview

\`webiny/api/logger\` exports the \`Logger\` abstraction — a structured logger for server-side Webiny extensions. Inject it via the DI container to write log output at different severity levels without coupling your code to a specific logging library.

<SymbolList symbols={[{ name: "Logger", anchor: "logger" }]} />

## \`Logger\`

**Abstraction** — imported from \`webiny/api/logger\`

\`\`\`typescript
import { Logger } from "webiny/api/logger";
\`\`\`

**Interface \`Logger.Interface\`:**

Structured logger with severity-level methods. The underlying implementation is Pino.

\`\`\`typescript
interface Logger.Interface {
  trace(objOrMsg: object | string, ...args: any[]): void;
  debug(objOrMsg: object | string, ...args: any[]): void;
  info(objOrMsg: object | string, ...args: any[]): void;
  warn(objOrMsg: object | string, ...args: any[]): void;
  error(objOrMsg: object | string, ...args: any[]): void;
  fatal(objOrMsg: object | string, ...args: any[]): void;
  log(objOrMsg: object | string, ...args: any[]): void;
}
\`\`\`

| Method    | Description                                                         |
| --------- | ------------------------------------------------------------------- |
| \`trace()\` | Log a trace-level message. Use for very verbose diagnostic output.  |
| \`debug()\` | Log a debug-level message. Use for development-time diagnostics.    |
| \`info()\`  | Log an informational message. Use for normal operational events.    |
| \`warn()\`  | Log a warning. Use for recoverable issues that warrant attention.   |
| \`error()\` | Log an error. Use when an operation fails.                          |
| \`fatal()\` | Log a fatal error. Use when the process cannot continue.            |
| \`log()\`   | Log at info level. Alias for \`info()\`.                              |

**Types:**

\`\`\`typescript
namespace Logger {
  type Interface = ILogger;
}
\`\`\`

## Examples

### Basic Usage

Simple logger injection and usage:

\`\`\`typescript
import { ApiKeyAfterUpdateEventHandler } from "webiny/api/security/api-key";
import { Logger } from "webiny/api/logger";

class MyApiKeyAfterUpdateImpl implements ApiKeyAfterUpdateEventHandler.Interface {
  constructor(private logger: Logger.Interface) {}

  async handle() {
    this.logger.debug("An API key was updated!");
  }
}

const MyApiKeyAfterUpdate = ApiKeyAfterUpdateEventHandler.createImplementation({
  implementation: MyApiKeyAfterUpdateImpl,
  dependencies: [Logger]
});

export default MyApiKeyAfterUpdate;
\`\`\``;

const GRAPHQL_EXAMPLE = `---
id: yxbpl2dy
title: GraphQL
description: "GraphQL schema factory and response helpers"
---

import { Alert } from "@/components/Alert";
import { SymbolList } from "@/components/SymbolList";

<Alert type="success" title="WHAT YOU'LL LEARN">

- How to extend the Webiny GraphQL schema using \`GraphQLSchemaFactory\`?
- What response classes are available and when to use each?

</Alert>

## Overview

\`webiny/api/graphql\` provides the building blocks for extending Webiny's GraphQL API. Use \`GraphQLSchemaFactory\` to add custom type definitions and resolvers. The response classes (\`Response\`, \`ListResponse\`, \`ErrorResponse\`, etc.) standardize the shape of GraphQL resolver return values.

**Services**

<SymbolList symbols={[{ name: "GraphQLSchemaFactory", anchor: "graph-ql-schema-factory" }]} />

**Types & Classes**

<SymbolList symbols={[
  { name: "ErrorResponse", anchor: "error-response" },
  { name: "ListErrorResponse", anchor: "list-error-response" },
  { name: "ListResponse", anchor: "list-response" },
  { name: "NotAuthorizedResponse", anchor: "not-authorized-response" },
  { name: "NotFoundResponse", anchor: "not-found-response" },
  { name: "Response", anchor: "response" }
]} />

## Services

### \`GraphQLSchemaFactory\`

**Abstraction** — imported from \`webiny/api/graphql\`

Implement \`GraphQLSchemaFactory\` to add custom type definitions and resolvers to the Webiny GraphQL schema. The factory receives a \`GraphQLSchemaBuilder\` instance you use to register your schema extensions.

\`\`\`typescript
import { GraphQLSchemaFactory } from "webiny/api/graphql";
\`\`\`

**Interface \`GraphQLSchemaFactory.Interface\`:**

\`\`\`typescript
interface GraphQLSchemaFactory.Interface {
  execute(builder: GraphQLSchemaBuilder.Interface): Promise<GraphQLSchemaBuilder.Interface>;
}
\`\`\`

**\`SchemaBuilder\` — \`GraphQLSchemaBuilder.Interface\`:**

\`\`\`typescript
interface GraphQLSchemaBuilder.Interface {
  addTypeDefs(typeDefs: TypeDefs): this;
  addResolver<TArgs = any, TParent = any>(config: ResolverConfig<TArgs, TParent>): this;
  build(): IGraphQLSchema;
}
\`\`\`

| Method | Description |
| ------ | ----------- |
| \`addTypeDefs()\` | Add GraphQL SDL type definitions to the schema. |
| \`addResolver()\` | Register a resolver with optional middleware decorators. |
| \`build()\` | Build and return the final schema object. |`;

function buildSystemPrompt(): string {
  return `You are a technical documentation writer for Webiny, an open-source serverless CMS. You write concise, accurate API reference pages in MDX format.

## Your task
For each webiny/* entry point you receive, write a complete reference page (.mdx) and a short .ai.txt companion file. The user will provide the TypeScript source and extracted symbol declarations.

## MDX conventions (follow exactly)

${AGENTS_MD}

## Gold-standard example pages

### Example 1: webiny/api/logger (simple, single abstraction)

${LOGGER_EXAMPLE}

### Example 2: webiny/api/graphql (mixed: abstraction + classes)

${GRAPHQL_EXAMPLE}

## Output format

Respond with EXACTLY two sections separated by the delimiter \`---AI-TXT---\`:

1. The complete .mdx content (frontmatter through last line)
2. The .ai.txt companion

Do not include any other text, explanation, or markdown fences around the output.

Example response structure:
---
id: PLACEHOLDER_ID
title: ...
---
[rest of mdx]
---AI-TXT---
AI Context: Title (reference/path/to/file.mdx)
[rest of ai.txt]

## Key rules
- The id field will be injected after — write PLACEHOLDER_ID and it will be replaced
- description field: ALWAYS wrap in double quotes (e.g. \`description: "My desc"\`) — required if it contains a colon
- Use "webiny/" prefix in import paths, NEVER "@webiny/"
- SymbolList anchors: slugify symbol name (camelCase → kebab-case, e.g. "GraphQLSchemaFactory" → "graph-ql-schema-factory")
- Do NOT use @example JSDoc — examples go in the Examples section
- Code blocks always have a language tag (typescript, graphql, tsx)
- No shell/bash code blocks
- No H1 in body (title comes from frontmatter)
- "WHAT YOU'LL LEARN" bullets must be specific to this entry point — not generic boilerplate
- Overview section: 1-3 paragraphs explaining what this entry point provides and when to use it
- For abstractions: show the Interface code block + a method table with descriptions
- For classes: show the class signature with public API only (no private members)
- If the entry point has many symbols (>5), group them with bold labels + SymbolList chips in Overview
- The .ai.txt must follow the format from AGENTS.md exactly`;
}

function buildUserPrompt(src: EntryPointSource): string {
  const lines: string[] = [];

  lines.push(`## Entry point: ${src.importPath}`);
  lines.push(`Import path: \`import { ... } from "${src.importPath}"\``);
  lines.push(`Output file: reference/${toOutputPath(src.relPath)}.mdx`);
  lines.push(`Page title: ${toTitle(src.relPath)}`);
  lines.push(``);

  lines.push(`## Exported symbols (${src.symbols.length} total)`);
  lines.push(``);
  for (const sym of src.symbols) {
    lines.push(`### ${sym.name} (${sym.kind}${sym.isTypeOnly ? ", type-only" : ""})`);
    if (sym.jsDoc) {
      lines.push(`**JSDoc:** ${sym.jsDoc}`);
    }
    if (sym.declarationText) {
      lines.push("```typescript");
      lines.push(sym.declarationText);
      lines.push("```");
    }
    lines.push(``);
  }

  lines.push(`## Source files`);
  lines.push(``);
  for (const [filePath, content] of Array.from(src.sourceFiles.entries())) {
    // Show a shortened path for readability
    const shortPath = filePath.replace("/Users/adrian/dev/wby-next/packages/", "packages/");
    lines.push(`### ${shortPath}`);
    lines.push("```typescript");
    // Trim very long files to avoid token limits
    const trimmed =
      content.length > 6000 ? content.slice(0, 6000) + "\n// ... (truncated)" : content;
    lines.push(trimmed);
    lines.push("```");
    lines.push(``);
  }

  if (src.examplesContent) {
    lines.push(`## Examples file content`);
    lines.push(``);
    lines.push(src.examplesContent);
    lines.push(``);
    lines.push(
      `**Important:** Include these examples verbatim in an "## Examples" section at the bottom of the .mdx. Each H2 heading in the examples file becomes a "### Title" subsection.`
    );
  }

  lines.push(`## Instructions`);
  lines.push(
    `Write the complete reference page for \`${src.importPath}\`. Follow all conventions from the system prompt exactly. Be specific and technical — this is a developer API reference.`
  );

  return lines.join("\n");
}

// ---------------------------------------------------------------------------
// Parse Claude response → {mdx, aiTxt}
// ---------------------------------------------------------------------------

function parseClaudeResponse(
  response: string,
  relPath: string,
  id: string
): { mdx: string; aiTxt: string } {
  const delimiter = "---AI-TXT---";
  const delimIdx = response.indexOf(delimiter);

  let mdx: string;
  let aiTxt: string;

  if (delimIdx === -1) {
    // No delimiter — treat entire response as MDX, generate minimal ai.txt
    mdx = response.trim();
    aiTxt = `AI Context: ${toTitle(relPath)} (reference/${toOutputPath(
      relPath
    )}.mdx)\n\nGenerated by AI reference generator.`;
  } else {
    mdx = response.slice(0, delimIdx).trim();
    aiTxt = response.slice(delimIdx + delimiter.length).trim();
  }

  // Replace PLACEHOLDER_ID with the actual stable ID
  mdx = mdx.replace("PLACEHOLDER_ID", id);

  // Strip any accidental markdown code fences wrapping the output
  if (mdx.startsWith("```")) {
    mdx = mdx
      .replace(/^```[a-z]*\n?/, "")
      .replace(/```\s*$/, "")
      .trim();
  }

  return { mdx, aiTxt };
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main(): Promise<void> {
  const args = process.argv.slice(2);
  const force = args.includes("--force");
  const onlyArg = args.find(a => a.startsWith("--only="));
  const onlyPaths = onlyArg ? onlyArg.replace("--only=", "").split(",") : null;

  console.log(`\nWebiny SDK Reference Generator (AI-powered)`);
  console.log(`Model: claude-sonnet-4-5`);
  console.log(`Force: ${force}`);
  if (onlyPaths) console.log(`Only: ${onlyPaths.join(", ")}`);
  console.log(``);

  // Wipe reference/ on force mode if running full set
  if (force && !onlyPaths) {
    console.log("Clearing reference/ directory...");
    if (existsSync(REF_DIR)) {
      rmSync(REF_DIR, { recursive: true });
    }
    mkdirSync(REF_DIR, { recursive: true });
  }

  // Read webiny package exports
  const pkgJson = JSON.parse(readFileSync(join(WEBINY_PKG, "package.json"), "utf-8"));
  const exportsMap: Record<string, string> = pkgJson.exports ?? {};
  const pkgMap = getPackagePathMap();

  const entryPaths: string[] = Object.keys(exportsMap)
    .filter(k => !k.includes("*") && !k.endsWith(".json") && !k.endsWith(".ts"))
    .map(k => k.replace(/^\.\//, ""))
    .sort();

  console.log(`Found ${entryPaths.length} entry points`);

  // Filter to --only if specified
  const pathsToProcess = onlyPaths
    ? entryPaths.filter(p => onlyPaths.some(o => p === o || p.startsWith(o + "/")))
    : entryPaths;

  // Set up ts-morph project
  const project = new Project({
    tsConfigFilePath: join(WEBINY_PKG, "tsconfig.json"),
    skipAddingFilesFromTsConfig: true
  });

  const systemPrompt = buildSystemPrompt();

  const processedEntryPoints: { relPath: string; title: string }[] = [];
  let generated = 0;
  let skipped = 0;
  let failed = 0;

  for (const relPath of pathsToProcess) {
    const outputPath = toOutputPath(relPath);
    const mdxPath = join(REF_DIR, outputPath + ".mdx");
    const aiTxtPath = join(REF_DIR, outputPath + ".ai.txt");

    // Skip if exists and not forcing
    if (!force && existsSync(mdxPath)) {
      console.log(`  [skip] ${relPath} — already exists`);
      processedEntryPoints.push({ relPath, title: toTitle(relPath) });
      skipped++;
      continue;
    }

    process.stdout.write(`  [gen]  ${relPath}... `);

    // Collect source
    const src = collectEntryPointSource(relPath, project, pkgMap);
    if (!src || src.symbols.length === 0) {
      console.log(`SKIP (no symbols)`);
      skipped++;
      continue;
    }

    // Build prompt
    const userPrompt = buildUserPrompt(src);

    // Call Claude
    let response: string;
    try {
      response = await callClaude(systemPrompt, userPrompt);
    } catch (err) {
      console.log(`FAILED (${(err as Error).message})`);
      failed++;
      continue;
    }

    // Parse response
    const id = stableId(relPath);
    const { mdx, aiTxt } = parseClaudeResponse(response, relPath, id);

    // Write files
    const dir = join(REF_DIR, dirname(outputPath));
    mkdirSync(dir, { recursive: true });
    writeFileSync(mdxPath, mdx, "utf-8");
    writeFileSync(aiTxtPath, aiTxt, "utf-8");

    processedEntryPoints.push({ relPath, title: toTitle(relPath) });
    generated++;
    console.log(`OK (${src.symbols.length} symbols)`);
  }

  // Update navigation
  console.log(`\nUpdating navigation...`);
  rewriteNavigation(processedEntryPoints);

  console.log(`\nDone.`);
  console.log(`  Generated: ${generated}`);
  console.log(`  Skipped:   ${skipped}`);
  console.log(`  Failed:    ${failed}`);
}

main().catch(err => {
  console.error("Fatal:", err);
  process.exit(1);
});
