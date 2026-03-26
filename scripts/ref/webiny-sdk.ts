/**
 * AI-powered @webiny/sdk Reference Generator
 *
 * Generates 4 reference pages for the @webiny/sdk package:
 *   - reference/sdk/index.mdx     — Overview, WebinyConfig, Result, error classes
 *   - reference/sdk/cms.mdx       — CmsSdk: all CMS methods + param types
 *   - reference/sdk/file-manager.mdx — FileManagerSdk: all file methods + types
 *   - reference/sdk/tenant-manager.mdx — TenantManagerSdk: all tenant methods + types
 *
 * Usage:
 *   tsx scripts/ref/webiny-sdk.ts              # skip existing pages
 *   tsx scripts/ref/webiny-sdk.ts --force      # regenerate all
 *   tsx scripts/ref/webiny-sdk.ts --only=cms   # regenerate one page
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { join } from "path";
import { callClaude, REF_DIR, DOCS_ROOT, NAV_FILE, stableId } from "./_shared.js";

// ---------------------------------------------------------------------------
// SDK source root
// ---------------------------------------------------------------------------

const SDK_SRC = "/Users/adrian/dev/wby-next/packages/sdk/src";

function src(relPath: string): string {
  return readFileSync(join(SDK_SRC, relPath), "utf-8");
}

// ---------------------------------------------------------------------------
// Existing guide docs (context for Claude)
// ---------------------------------------------------------------------------

const WEBINY_SDK_GUIDE = readFileSync(join(DOCS_ROOT, "core-concepts/webiny-sdk.mdx"), "utf-8");

const USING_SDK_GUIDE = readFileSync(join(DOCS_ROOT, "headless-cms/using-webiny-sdk.mdx"), "utf-8");

// ---------------------------------------------------------------------------
// Page definitions
// ---------------------------------------------------------------------------

interface SdkPage {
  key: string; // --only= filter key
  outputPath: string; // relative to reference/
  title: string;
  description: string;
  sourceFiles: Record<string, string>; // label -> content
  pageInstruction: string;
}

function buildPages(): SdkPage[] {
  return [
    // -----------------------------------------------------------------------
    // Overview
    // -----------------------------------------------------------------------
    {
      key: "index",
      outputPath: "sdk/index",
      title: "Overview",
      description: "Webiny SDK: WebinyConfig, Result, and error classes",
      sourceFiles: {
        "index.ts": src("index.ts"),
        "Webiny.ts": src("Webiny.ts"),
        "types.ts": src("types.ts"),
        "Result.ts": src("Result.ts"),
        "BaseError.ts": src("BaseError.ts"),
        "errors.ts": src("errors.ts")
      },
      pageInstruction: `
Write the Overview reference page for \`@webiny/sdk\`. This page covers:

1. **What the SDK is** — a standalone TypeScript library for calling Webiny APIs from external apps (Next.js, Node.js, etc.). Not for use inside Webiny extensions (use \`webiny/*\` for that).

2. **Installation and initialization** — \`npm install @webiny/sdk\`, then instantiate with \`WebinyConfig\`.

3. **\`WebinyConfig\`** — document all fields: \`endpoint\` (required), \`token\` (API key token from Admin → Settings → API Keys), \`tenant\` (defaults to "root"), \`headers\` (optional custom headers), \`fetch\` (optional custom fetch implementation).

4. **\`Result<TValue, TError>\`** — the return type of all SDK methods. Document: \`isOk()\`, \`isFail()\`, \`value\`, \`error\`, \`map()\`, \`mapError()\`, \`flatMap()\`, \`match()\`. Also document the namespace types \`Result.UnwrapResult<T>\` and \`Result.UnwrapError<T>\`.

5. **Error classes** — \`HttpError\` (HTTP-level failures, has \`data.status\`), \`GraphQLError\` (API returned an error, has \`data.code\`), \`NetworkError\` (fetch itself failed). All extend \`BaseError\`.

6. **\`Webiny\` class** — the main entry point. Document properties: \`cms\` (\`CmsSdk\`), \`tenantManager\` (\`TenantManagerSdk\`), \`fileManager\` (\`FileManagerSdk\`). Document constructor params.

Key facts from the existing docs:
- Authentication uses an API key token (not Basic auth or OAuth)
- Find API endpoint with \`yarn webiny info\` — use the base CloudFront domain
- Create a singleton instance and reuse it throughout the app
- Import path is \`@webiny/sdk\` (not \`webiny/\` — this is an external package)

Include a "Quick Start" examples section showing: installation, initializing the \`Webiny\` class, and a simple \`isOk()\`/\`isFail()\` check pattern.
`
    },

    // -----------------------------------------------------------------------
    // CMS
    // -----------------------------------------------------------------------
    {
      key: "cms",
      outputPath: "sdk/cms",
      title: "CMS",
      description: "CmsSdk: query and mutate Headless CMS entries",
      sourceFiles: {
        "CmsSdk.ts": src("CmsSdk.ts"),
        "methods/cms/cmsTypes.ts": src("methods/cms/cmsTypes.ts"),
        "methods/cms/getEntry.ts": src("methods/cms/getEntry.ts"),
        "methods/cms/listEntries.ts": src("methods/cms/listEntries.ts"),
        "methods/cms/createEntry.ts": src("methods/cms/createEntry.ts"),
        "methods/cms/updateEntryRevision.ts": src("methods/cms/updateEntryRevision.ts"),
        "methods/cms/publishEntryRevision.ts": src("methods/cms/publishEntryRevision.ts"),
        "methods/cms/unpublishEntryRevision.ts": src("methods/cms/unpublishEntryRevision.ts"),
        "methods/cms/deleteEntryRevision.ts": src("methods/cms/deleteEntryRevision.ts")
      },
      pageInstruction: `
Write the CMS reference page for \`sdk.cms\` (\`CmsSdk\`). Access via \`sdk.cms\` on a \`Webiny\` instance.

Document every method on \`CmsSdk\` with:
- Method signature
- All parameters with types, required/optional, and descriptions
- Return type
- Key behavioral notes

Methods to document (in this order):

**Read methods** (use the Read API — published content only, unless \`preview: true\`):
- \`getEntry<TValues>(params)\` — fetch a single entry by \`id\`, \`entryId\`, or \`values\` filter
- \`listEntries<TValues>(params)\` — list entries with filtering, sorting, pagination, full-text search

**Write methods** (use the Manage API):
- \`createEntry<TValues>(params)\` — creates a draft entry
- \`updateEntryRevision<TValues>(params)\` — partial update (only specified fields change)
- \`publishEntryRevision<TValues>(params)\` — makes entry visible via Read API
- \`unpublishEntryRevision<TValues>(params)\` — reverts to draft
- \`deleteEntryRevision(params)\` — soft delete by default; \`permanent: true\` for hard delete

Key facts to include:
- \`fields\` parameter: use \`"values.fieldId"\` for entry values, \`"id"\`, \`"entryId"\`, \`"createdOn"\` etc. for metadata
- \`preview: true\` on read methods uses the Preview API (returns unpublished/draft content)
- \`createEntry\` always creates a draft — call \`publishEntryRevision\` to publish
- \`revisionId\` format is \`"entryId#revisionNumber"\` e.g. \`"abc123#0001"\`
- TypeScript generic \`<TValues>\` types the \`values\` field on returned \`CmsEntryData<TValues>\`
- Also document \`CmsEntryData\`, \`CmsEntryValues\`, \`CmsEntryStatus\`, \`CmsIdentity\` types

Include a practical examples section covering: list with filter+sort+pagination, get by ID, create+publish flow, TypeScript generics usage, error handling pattern.
`
    },

    // -----------------------------------------------------------------------
    // File Manager
    // -----------------------------------------------------------------------
    {
      key: "file-manager",
      outputPath: "sdk/file-manager",
      title: "File Manager",
      description: '"FileManagerSdk: upload, retrieve, and manage files"',
      sourceFiles: {
        "FileManagerSdk.ts": src("FileManagerSdk.ts"),
        "methods/fileManager/fileManagerTypes.ts": src("methods/fileManager/fileManagerTypes.ts"),
        "methods/fileManager/getFile.ts": src("methods/fileManager/getFile.ts"),
        "methods/fileManager/listFiles.ts": src("methods/fileManager/listFiles.ts"),
        "methods/fileManager/createFile.ts": src("methods/fileManager/createFile.ts"),
        "methods/fileManager/createFiles.ts": src("methods/fileManager/createFiles.ts"),
        "methods/fileManager/updateFile.ts": src("methods/fileManager/updateFile.ts"),
        "methods/fileManager/deleteFile.ts": src("methods/fileManager/deleteFile.ts"),
        "methods/fileManager/listTags.ts": src("methods/fileManager/listTags.ts"),
        "methods/fileManager/getPresignedPostPayload.ts": src(
          "methods/fileManager/getPresignedPostPayload.ts"
        ),
        "methods/fileManager/getPresignedPostPayloads.ts": src(
          "methods/fileManager/getPresignedPostPayloads.ts"
        ),
        "methods/fileManager/createMultiPartUpload.ts": src(
          "methods/fileManager/createMultiPartUpload.ts"
        ),
        "methods/fileManager/completeMultiPartUpload.ts": src(
          "methods/fileManager/completeMultiPartUpload.ts"
        )
      },
      pageInstruction: `
Write the File Manager reference page for \`sdk.fileManager\` (\`FileManagerSdk\`). Access via \`sdk.fileManager\` on a \`Webiny\` instance.

Document every method on \`FileManagerSdk\` with full param tables and return types.

Group methods into logical sections:

**Reading files:**
- \`getFile(params)\` — get a single file by ID
- \`listFiles(params)\` — list files with search, where filters, sort, pagination
- \`listTags(params)\` — list all tags used on files

**Creating and updating files:**
- \`createFile(params)\` — register a file record (after upload)
- \`createFiles(params)\` — bulk register file records
- \`updateFile(params)\` — update file metadata
- \`deleteFile(params)\` — delete a file record

**Upload helpers (S3 presigned uploads):**
- \`getPresignedPostPayload(params)\` — get a single S3 presigned POST URL for direct browser upload
- \`getPresignedPostPayloads(params)\` — get multiple presigned POST URLs in bulk
- \`createMultiPartUpload(params)\` — initiate a multipart upload for large files
- \`completeMultiPartUpload(params)\` — finalize a multipart upload after all parts are uploaded

Key types to document: \`FmFile\`, \`FmTag\`, \`FmListMeta\`, \`FmFile_Metadata\`, \`FmFile_AccessControl\`, \`PresignedPostPayloadResponse\`, \`MultiPartUploadResponse\`.

Include examples covering: listing files with search, single file get, basic upload flow (presigned POST → createFile), multipart upload flow for large files.
`
    },

    // -----------------------------------------------------------------------
    // Tenant Manager
    // -----------------------------------------------------------------------
    {
      key: "tenant-manager",
      outputPath: "sdk/tenant-manager",
      title: "Tenant Manager",
      description: "TenantManagerSdk: create and manage tenants programmatically",
      sourceFiles: {
        "TenantManagerSdk.ts": src("TenantManagerSdk.ts"),
        "methods/tenantManager/tenantManagerTypes.ts": src(
          "methods/tenantManager/tenantManagerTypes.ts"
        ),
        "methods/tenantManager/createTenant.ts": src("methods/tenantManager/createTenant.ts"),
        "methods/tenantManager/installTenant.ts": src("methods/tenantManager/installTenant.ts"),
        "methods/tenantManager/disableTenant.ts": src("methods/tenantManager/disableTenant.ts"),
        "methods/tenantManager/enableTenant.ts": src("methods/tenantManager/enableTenant.ts")
      },
      pageInstruction: `
Write the Tenant Manager reference page for \`sdk.tenantManager\` (\`TenantManagerSdk\`). Access via \`sdk.tenantManager\` on a \`Webiny\` instance.

Document all 4 methods:
- \`createTenant(params)\` — creates a new tenant. \`CreateTenantInput\`: \`id?\`, \`name\` (required), \`description?\`
- \`installTenant(params)\` — provisions a tenant with default settings. Must be called after \`createTenant\` before the tenant is usable.
- \`disableTenant(params)\` — disables a tenant, blocking access to its resources
- \`enableTenant(params)\` — re-enables a previously disabled tenant

Key facts:
- All methods return \`Result<boolean, HttpError | GraphQLError | NetworkError>\`
- \`createTenant\` + \`installTenant\` is the required two-step flow for provisioning a new tenant
- Tenant \`id\` is optional in create — Webiny generates one if omitted
- The API key used must have tenant manager permissions

Include an examples section showing: the full create+install flow, disabling/enabling a tenant, error handling.
`
    }
  ];
}

// ---------------------------------------------------------------------------
// System prompt
// ---------------------------------------------------------------------------

const AGENTS_MD = readFileSync(join(process.cwd(), "AGENTS.md"), "utf-8");

function buildSystemPrompt(): string {
  return `You are a technical documentation writer for Webiny, an open-source serverless CMS. You write concise, accurate API reference pages in MDX format.

## Your task
Write a complete reference page (.mdx) and a companion .ai.txt file for a section of the \`@webiny/sdk\` package — the standalone Webiny JavaScript/TypeScript SDK for external applications.

## MDX conventions (follow exactly)

${AGENTS_MD}

## IMPORTANT: Import paths for @webiny/sdk

This is an EXTERNAL package — not part of the \`webiny/*\` internal extensions system. Use:
\`\`\`typescript
import { Webiny } from "@webiny/sdk";
import type { CmsEntryData } from "@webiny/sdk";
\`\`\`
NOT \`webiny/\` (that's for internal extensions).

## Existing guide docs (use for tone, examples, and key facts)

### core-concepts/webiny-sdk.mdx
${WEBINY_SDK_GUIDE}

### headless-cms/using-webiny-sdk.mdx
${USING_SDK_GUIDE}

## Output format

Respond with EXACTLY two sections separated by \`---AI-TXT---\`:

1. The complete .mdx content
2. The .ai.txt companion

No other text, no markdown fences wrapping the output.

Response structure:
---
id: PLACEHOLDER_ID
title: ...
description: ...
---
[rest of mdx]
---AI-TXT---
AI Context: Title (reference/sdk/page.mdx)
[rest of ai.txt]

## Key rules
- id field: write PLACEHOLDER_ID (replaced after)
- description field: ALWAYS wrap in double quotes (e.g. \`description: "My desc"\`) — required if it contains a colon
- NEVER use angle brackets in headings (e.g. \`#### \`Foo<T>\`\` breaks MDX) — use \`#### \`Foo\`\` and mention the generic in prose instead
- Do NOT use \`<SymbolList>\` as a wrapper around markdown lists — it expects a \`symbols\` prop array. For SDK pages, use plain markdown lists or bold group headers instead of SymbolList chips
- No H1 in body
- No shell/bash code blocks — use \`typescript\` or \`tsx\` instead
- Except in installation section where \`bash\` is acceptable for \`npm install\`
- "WHAT YOU'LL LEARN" bullets must be specific to this page
- Overview: 1-3 paragraphs — what this class/module provides, when to use it
- For each method: signature block + param table (name, type, required, description) + return type
- Use \`Result<T, E>\` return type throughout — never \`Promise<T | Error>\`
- The .ai.txt follows the format from AGENTS.md exactly`;
}

// ---------------------------------------------------------------------------
// User prompt per page
// ---------------------------------------------------------------------------

function buildUserPrompt(page: SdkPage): string {
  const lines: string[] = [];

  lines.push(`## Page to generate`);
  lines.push(`Output: reference/${page.outputPath}.mdx`);
  lines.push(`Title: ${page.title}`);
  lines.push(`Description: ${page.description}`);
  lines.push(``);

  lines.push(`## Source files`);
  lines.push(``);
  for (const [label, content] of Object.entries(page.sourceFiles)) {
    lines.push(`### ${label}`);
    lines.push("```typescript");
    lines.push(content);
    lines.push("```");
    lines.push(``);
  }

  lines.push(`## What to document`);
  lines.push(page.pageInstruction.trim());

  return lines.join("\n");
}

// ---------------------------------------------------------------------------
// Nav rewrite — appends SDK group, preserves existing webiny/* entries
// ---------------------------------------------------------------------------

function rewriteNavWithSdk(pages: SdkPage[]): void {
  const nav = readFileSync(NAV_FILE, "utf-8");

  const SDK_NAV_START = "        {/* __SDK_PAGES_START__ */}";
  const SDK_NAV_END = "        {/* __SDK_PAGES_END__ */}";

  const sdkLinks = pages
    .filter(p => p.key !== "index") // index is the group landing, not a child page
    .map(p => `          <Page link={"reference/${p.outputPath}"} title={"${p.title}"} />`)
    .join("\n");

  const sdkGroup =
    `          <Group title={"SDK"} link={"reference/sdk/index"}>\n` +
    sdkLinks +
    `\n          </Group>`;

  // If markers already exist, replace between them
  if (nav.includes(SDK_NAV_START) && nav.includes(SDK_NAV_END)) {
    const startIdx = nav.indexOf(SDK_NAV_START);
    const endIdx = nav.indexOf(SDK_NAV_END);
    const before = nav.slice(0, startIdx + SDK_NAV_START.length);
    const after = nav.slice(endIdx);
    writeFileSync(NAV_FILE, `${before}\n${sdkGroup}\n        ${after}`, "utf-8");
    console.log(`  [nav] Updated SDK group in navigation.tsx`);
    return;
  }

  // Otherwise inject before the REFERENCE_PAGES_END marker
  const REF_END = "        {/* __REFERENCE_PAGES_END__ */}";
  const refEndIdx = nav.indexOf(REF_END);
  if (refEndIdx === -1) {
    console.warn(`  [nav] Could not find __REFERENCE_PAGES_END__ marker — skipping nav update`);
    return;
  }

  const before = nav.slice(0, refEndIdx);
  const after = nav.slice(refEndIdx);
  const sdkBlock = `        ${SDK_NAV_START}\n` + sdkGroup + `\n        ${SDK_NAV_END}\n        `;

  writeFileSync(NAV_FILE, `${before}${sdkBlock}${after}`, "utf-8");
  console.log(`  [nav] Injected SDK group into navigation.tsx`);
}

// ---------------------------------------------------------------------------
// Parse Claude response
// ---------------------------------------------------------------------------

function parseResponse(response: string, page: SdkPage): { mdx: string; aiTxt: string } {
  const delimiter = "---AI-TXT---";
  const delimIdx = response.indexOf(delimiter);

  let mdx: string;
  let aiTxt: string;

  if (delimIdx === -1) {
    mdx = response.trim();
    aiTxt = `AI Context: ${page.title} (reference/${page.outputPath}.mdx)\n\nGenerated by AI reference generator.`;
  } else {
    mdx = response.slice(0, delimIdx).trim();
    aiTxt = response.slice(delimIdx + delimiter.length).trim();
  }

  // Replace placeholder ID
  const id = stableId(`sdk/${page.key}`);
  mdx = mdx.replace("PLACEHOLDER_ID", id);

  // Strip any accidental outer fences
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
  const onlyKeys = onlyArg ? onlyArg.replace("--only=", "").split(",") : null;

  console.log(`\n@webiny/sdk Reference Generator (AI-powered)`);
  console.log(`Model: claude-sonnet-4-5`);
  console.log(`Force: ${force}`);
  if (onlyKeys) console.log(`Only: ${onlyKeys.join(", ")}`);
  console.log(``);

  const pages = buildPages();
  const pagesToProcess = onlyKeys ? pages.filter(p => onlyKeys.includes(p.key)) : pages;

  if (pagesToProcess.length === 0) {
    console.error(`No matching pages found. Valid keys: ${pages.map(p => p.key).join(", ")}`);
    process.exit(1);
  }

  // Ensure output directory exists
  mkdirSync(join(REF_DIR, "sdk"), { recursive: true });

  const systemPrompt = buildSystemPrompt();
  let generated = 0;
  let skipped = 0;
  let failed = 0;

  for (const page of pagesToProcess) {
    const mdxPath = join(REF_DIR, page.outputPath + ".mdx");
    const aiTxtPath = join(REF_DIR, page.outputPath + ".ai.txt");

    if (!force && existsSync(mdxPath)) {
      console.log(`  [skip] ${page.outputPath} — already exists`);
      skipped++;
      continue;
    }

    process.stdout.write(`  [gen]  ${page.outputPath}... `);

    const userPrompt = buildUserPrompt(page);

    let response: string;
    try {
      response = await callClaude(systemPrompt, userPrompt);
    } catch (err) {
      console.log(`FAILED (${(err as Error).message})`);
      failed++;
      continue;
    }

    const { mdx, aiTxt } = parseResponse(response, page);
    writeFileSync(mdxPath, mdx, "utf-8");
    writeFileSync(aiTxtPath, aiTxt, "utf-8");

    generated++;
    console.log(`OK`);
  }

  // Update navigation with all pages (even skipped — they're already on disk)
  console.log(`\nUpdating navigation...`);
  rewriteNavWithSdk(pages);

  console.log(`\nDone.`);
  console.log(`  Generated: ${generated}`);
  console.log(`  Skipped:   ${skipped}`);
  console.log(`  Failed:    ${failed}`);
}

main().catch(err => {
  console.error("Fatal:", err);
  process.exit(1);
});
