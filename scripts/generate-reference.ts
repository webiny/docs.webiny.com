/**
 * Reference Documentation Generator
 *
 * Reads every export path from packages/webiny/src/, resolves each exported
 * symbol back to its originating @webiny/* source file, extracts TypeScript
 * interface signatures + JSDoc comments + namespace types, and writes:
 *   - One .mdx page  per webiny/* entry point
 *   - One .ai.txt companion per page
 *
 * Then rewrites the Reference <Group> in navigation.tsx with all generated pages.
 *
 * Usage: yarn generate:reference
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { Project, SourceFile, SyntaxKind, Node } from "ts-morph";

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const WEBINY_PKG = "/Users/adrian/dev/wby-next/packages/webiny";
const WEBINY_MONOREPO = "/Users/adrian/dev/wby-next/packages";
const DOCS_ROOT = join(process.cwd(), "docs/developer-docs/6.0.x");
const REF_DIR = join(DOCS_ROOT, "reference");
const NAV_FILE = join(DOCS_ROOT, "navigation.tsx");

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface ExportEntry {
  /** The local alias used in the barrel (what consumers import) */
  exportedName: string;
  /** Original name in the source file (before `as` rename) */
  originalName: string;
  /** Absolute path to the originating source .ts file */
  sourceFile: string;
  /** Whether it's a type-only export */
  isTypeOnly: boolean;
}

interface ExtractedSymbol {
  name: string;
  kind: "interface" | "class" | "namespace" | "function" | "variable" | "type" | "enum" | "other";
  isTypeOnly: boolean;
  /** Full text of the declaration (interface body, class signature, etc.) */
  declarationText: string;
  /** JSDoc comment attached to the declaration */
  jsDoc: string;
  /** Namespace members if kind === 'namespace' */
  namespaceMembers: string[];
  sourceFile: string;
}

interface EntryPointDoc {
  /** e.g. "webiny/api/cms/entry" */
  importPath: string;
  /** e.g. "api/cms/entry" */
  relPath: string;
  /** Human-readable title */
  title: string;
  /** Short description */
  description: string;
  /** All symbols exported from this entry point */
  symbols: ExtractedSymbol[];
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function randomId(): string {
  return Math.random().toString(36).slice(2, 10).padEnd(8, "0").slice(0, 8);
}

/** Convert a barrel-relative path to a human title: "api/cms/entry" -> "CMS Entry" */
function toTitle(relPath: string): string {
  const parts = relPath.split("/");
  const last = parts[parts.length - 1];

  const specialCases: Record<string, string> = {
    api: "API",
    cms: "CMS",
    graphql: "GraphQL",
    ui: "UI",
    aco: "ACO",
    cli: "CLI",
    infra: "Infrastructure",
    extensions: "Extensions",
    admin: "Admin",
    index: "Overview",
    buildParams: "Build Params",
    eventPublisher: "Event Publisher",
    keyValueStore: "Key-Value Store",
    tenancy: "Tenancy",
    security: "Security",
    system: "System",
    tasks: "Tasks",
    logger: "Logger",
    entry: "Entry",
    group: "Group",
    model: "Model",
    field: "Field",
    page: "Page",
    redirect: "Redirect",
    nextjs: "Next.js",
    apiKey: "API Key",
    authentication: "Authentication",
    role: "Role",
    user: "User",
    lexical: "Lexical Editor",
    form: "Form",
    router: "Router",
    localStorage: "Local Storage",
    envConfig: "Env Config",
    graphqlClient: "GraphQL Client",
    configs: "Configs",
    "website-builder": "Website Builder",
    "tenant-manager": "Tenant Manager",
    command: "Command",
    core: "Core"
  };

  const section =
    specialCases[last] ?? last.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
  const parentSection =
    parts.length > 1 ? (specialCases[parts[parts.length - 2]] ?? parts[parts.length - 2]) : "";

  // Compose a meaningful title from last two segments
  if (parts.length === 1) return section;
  if (last === "index") return parentSection + " Overview";
  return section;
}

/** Derive a description string from the entry point path */
function toDescription(relPath: string): string {
  const map: Record<string, string> = {
    api: "Core API primitives: createFeature, createAbstraction, Result, BaseError",
    "api/logger": "Logger abstraction for server-side logging",
    "api/graphql": "GraphQL schema factory and response helpers",
    "api/eventPublisher": "Domain event publishing primitives",
    "api/keyValueStore": "Key-value store abstraction",
    "api/buildParams": "API build parameter types",
    "api/tasks": "Background task abstractions: TaskService, TaskDefinition",
    "api/system": "System installation abstractions",
    "api/tenancy": "Tenancy context and tenant management",
    "api/tenant-manager": "Tenant manager abstractions",
    "api/security": "Security primitives: Identity, Authenticator, Authorizer",
    "api/security/apiKey": "API key use cases and event handlers",
    "api/security/authentication": "Authentication event handlers",
    "api/security/role": "Role use cases and event handlers",
    "api/security/user": "User use cases and event handlers",
    "api/cms/entry": "CMS entry use cases and event handlers",
    "api/cms/group": "CMS group use cases and event handlers",
    "api/cms/model": "CMS model builders, factories, use cases and event handlers",
    "api/website-builder/page": "Website Builder page use cases and event handlers",
    "api/website-builder/redirect": "Website Builder redirect use cases and event handlers",
    "api/website-builder/nextjs": "Next.js configuration abstraction",
    admin: "Admin app core: createFeature, createAbstraction, Provider, Plugin",
    "admin/ui": "Admin UI component library",
    "admin/form": "Form primitives: Bind, Form, useForm, validation",
    "admin/aco": "ACO (Advanced Content Organisation) hooks and utilities",
    "admin/buildParams": "Admin build parameter types",
    "admin/cms": "CMS admin hooks, types and utilities",
    "admin/cms/entry/editor": "Content entry editor components and hooks",
    "admin/cms/entry/list": "Content entry list configuration",
    "admin/cms/fieldRenderers/dynamicZone": "Dynamic zone field renderer components",
    "admin/cms/fieldRenderers/object": "Object field renderer components",
    "admin/cms/lexical": "CMS Lexical rich-text editor config",
    "admin/configs": "Admin configuration types",
    "admin/envConfig": "Environment configuration for admin",
    "admin/graphqlClient": "GraphQL client hooks and utilities",
    "admin/localStorage": "Local storage abstraction and hooks",
    "admin/lexical": "Lexical editor components and hooks",
    "admin/router": "Router components and hooks",
    "admin/security": "Admin security: authentication, identity, permissions",
    "admin/tenancy": "Admin tenancy hooks and context",
    "admin/website-builder": "Website Builder admin utilities",
    "admin/website-builder/lexical": "Website Builder Lexical editor config",
    "admin/website-builder/page/editor": "Page editor components",
    "admin/website-builder/page/list": "Page list configuration",
    "admin/website-builder/redirect/list": "Redirect list configuration",
    extensions: "Project extension wiring: Api, Admin, Cli, Infra, Project, EnvVar, FeatureFlags",
    "infra/index": "Infrastructure primitives: Logger, Ui, lifecycle hooks",
    "infra/api": "API infrastructure lifecycle hooks and Pulumi abstraction",
    "infra/admin": "Admin infrastructure lifecycle hooks and Pulumi abstraction",
    "infra/core": "Core infrastructure lifecycle hooks and Pulumi abstraction",
    "cli/index": "CLI-scoped Logger and Ui abstractions",
    "cli/command": "CLI command factory abstraction"
  };
  return map[relPath] ?? `Reference for webiny/${relPath}`;
}

// ---------------------------------------------------------------------------
// Path resolution: @webiny/pkg/path.js -> absolute filesystem path
// ---------------------------------------------------------------------------

/** Build a map of @webiny/* package names to their src/ directories */
function buildPackagePathMap(): Map<string, string> {
  const map = new Map<string, string>();
  const entries = readFileSync(join(WEBINY_PKG, "tsconfig.json"), "utf-8");
  // strip comments from tsconfig (it's not valid JSON)
  const cleaned = entries.replace(/\/\/[^\n]*/g, "").replace(/\/\*[\s\S]*?\*\//g, "");
  const tsconfig = JSON.parse(cleaned);
  const paths: Record<string, string[]> = tsconfig?.compilerOptions?.paths ?? {};

  for (const [alias, targets] of Object.entries(paths)) {
    if (!alias.startsWith("@webiny/")) continue;
    const rawTarget = targets[0];
    if (!rawTarget) continue;
    // e.g. "../api-core/src/*" -> /abs/path/to/api-core/src
    const resolved = join(WEBINY_PKG, rawTarget.replace(/\/\*$/, "").replace(/\*$/, ""));
    // strip trailing /src to get the package root, store both with and without
    const pkgAlias = alias.replace(/\/\*$/, "");
    map.set(pkgAlias, resolved);
  }
  return map;
}

/** Resolve "@webiny/api-core/features/task/TaskDefinition/index.js" to absolute path */
function resolveWebinyImport(importPath: string, pkgMap: Map<string, string>): string | null {
  for (const [alias, srcDir] of Array.from(pkgMap.entries())) {
    if (importPath.startsWith(alias + "/")) {
      const rest = importPath.slice(alias.length + 1).replace(/\.js$/, ".ts");
      return join(srcDir, rest);
    }
    if (importPath === alias) {
      return join(srcDir, "index.ts");
    }
  }
  return null;
}

// ---------------------------------------------------------------------------
// Barrel parsing: collect all re-exported names from a barrel .ts file
// ---------------------------------------------------------------------------

function parseBarrel(sf: SourceFile, pkgMap: Map<string, string>): ExportEntry[] {
  const entries: ExportEntry[] = [];

  for (const decl of sf.getExportDeclarations()) {
    const moduleSpecifier = decl.getModuleSpecifierValue();
    if (!moduleSpecifier) continue;

    const resolvedPath = resolveWebinyImport(moduleSpecifier, pkgMap);
    if (!resolvedPath) continue;

    const isTypeOnly = decl.isTypeOnly();
    const namedExports = decl.getNamedExports();

    if (namedExports.length === 0) {
      // export * from "..."
      entries.push({
        exportedName: "*",
        originalName: "*",
        sourceFile: resolvedPath,
        isTypeOnly
      });
    } else {
      for (const ne of namedExports) {
        entries.push({
          exportedName: ne.getAliasNode()?.getText() ?? ne.getNameNode().getText(),
          originalName: ne.getNameNode().getText(),
          sourceFile: resolvedPath,
          isTypeOnly: isTypeOnly || ne.isTypeOnly()
        });
      }
    }
  }

  return entries;
}

// ---------------------------------------------------------------------------
// Symbol extraction from a source file
// ---------------------------------------------------------------------------

function extractJsDoc(node: Node): string {
  const jsDocNodes = node.getChildrenOfKind(SyntaxKind.JSDoc);
  if (jsDocNodes.length === 0) return "";
  return jsDocNodes
    .map(jd => jd.getInnerText().trim())
    .filter(Boolean)
    .join("\n");
}

function cleanDeclarationText(text: string): string {
  // Remove method bodies: replace { ... } blocks with ;
  // Only strip the outermost body of methods/functions
  return text
    .replace(/\{[\s\S]*\}/g, match => {
      // If it's short (likely a type body), keep it
      if (match.length < 200 && !match.includes("return ") && !match.includes("const ")) {
        return match;
      }
      return "{ ... }";
    })
    .trim();
}

function extractSymbol(sf: SourceFile, name: string): ExtractedSymbol | null {
  // Search for the named export in the source file
  const allExported = sf.getExportedDeclarations();

  for (const [exportName, decls] of Array.from(allExported.entries())) {
    if (exportName !== name && exportName !== "default") continue;
    if (decls.length === 0) continue;

    const node = decls[0];
    const jsDoc = extractJsDoc(node);

    if (Node.isInterfaceDeclaration(node)) {
      return {
        name,
        kind: "interface",
        isTypeOnly: true,
        declarationText: cleanDeclarationText(node.getText()),
        jsDoc,
        namespaceMembers: [],
        sourceFile: sf.getFilePath()
      };
    }

    if (Node.isClassDeclaration(node)) {
      // For classes, extract just the signature (properties + method signatures)
      const members = node
        .getMembers()
        .filter(m => !Node.isConstructorDeclaration(m) || true)
        .map(m => {
          const txt = m.getText().trim();
          // Strip method bodies
          return txt.replace(/\{[\s\S]*$/, "").trim() + (txt.includes("{") ? ";" : "");
        })
        .filter(Boolean);

      const classHead = node.getText().split("{")[0].trim();
      const body = members.length ? "\n    " + members.join("\n    ") + "\n" : "";
      return {
        name,
        kind: "class",
        isTypeOnly: false,
        declarationText: `${classHead} {${body}}`,
        jsDoc,
        namespaceMembers: [],
        sourceFile: sf.getFilePath()
      };
    }

    if (Node.isModuleDeclaration(node)) {
      // namespace
      const members: string[] = [];
      const body = node.getBody();
      if (body && Node.isModuleBlock(body)) {
        for (const stmt of body.getStatements()) {
          members.push(stmt.getText().trim());
        }
      }
      return {
        name,
        kind: "namespace",
        isTypeOnly: true,
        declarationText: node.getText().split("{")[0].trim(),
        jsDoc,
        namespaceMembers: members,
        sourceFile: sf.getFilePath()
      };
    }

    if (
      Node.isFunctionDeclaration(node) ||
      Node.isArrowFunction(node) ||
      Node.isFunctionExpression(node)
    ) {
      const txt = node.getText().trim();
      const sig = txt.replace(/\{[\s\S]*$/, "").trim();
      return {
        name,
        kind: "function",
        isTypeOnly: false,
        declarationText: sig,
        jsDoc,
        namespaceMembers: [],
        sourceFile: sf.getFilePath()
      };
    }

    if (Node.isVariableDeclaration(node)) {
      // Could be a const assigned via createAbstraction()
      const parent = node.getParent(); // VariableDeclarationList
      const gp = parent?.getParent(); // VariableStatement
      const txt = gp ? gp.getText().trim() : node.getText().trim();
      // Strip initializer if long
      const sig = txt.replace(/=\s*createAbstraction[\s\S]*$/, "= createAbstraction(...)").trim();
      return {
        name,
        kind: "variable",
        isTypeOnly: false,
        declarationText: sig,
        jsDoc,
        namespaceMembers: [],
        sourceFile: sf.getFilePath()
      };
    }

    if (Node.isTypeAliasDeclaration(node)) {
      return {
        name,
        kind: "type",
        isTypeOnly: true,
        declarationText: cleanDeclarationText(node.getText()),
        jsDoc,
        namespaceMembers: [],
        sourceFile: sf.getFilePath()
      };
    }

    if (Node.isEnumDeclaration(node)) {
      return {
        name,
        kind: "enum",
        isTypeOnly: false,
        declarationText: node.getText().trim(),
        jsDoc,
        namespaceMembers: [],
        sourceFile: sf.getFilePath()
      };
    }

    // Fallback
    return {
      name,
      kind: "other",
      isTypeOnly: false,
      declarationText: node.getText().slice(0, 300).trim(),
      jsDoc,
      namespaceMembers: [],
      sourceFile: sf.getFilePath()
    };
  }

  return null;
}

// ---------------------------------------------------------------------------
// MDX rendering
// ---------------------------------------------------------------------------

function renderLearnBlock(relPath: string, symbols: ExtractedSymbol[]): string {
  const useCases = symbols.filter(s => s.name.endsWith("UseCase"));
  const handlers = symbols.filter(s => s.name.endsWith("EventHandler"));
  const builders = symbols.filter(s => s.name.endsWith("Builder") || s.name.endsWith("Factory"));
  const components = symbols.filter(
    s =>
      s.kind === "class" ||
      (s.name[0] === s.name[0].toUpperCase() &&
        !s.name.endsWith("UseCase") &&
        !s.name.endsWith("EventHandler"))
  );

  const bullets: string[] = [];

  if (useCases.length > 0) bullets.push(`- What use cases are available in \`webiny/${relPath}\`?`);
  if (handlers.length > 0) bullets.push(`- Which event handlers can you implement?`);
  if (builders.length > 0) bullets.push(`- How to use the builder and factory APIs?`);
  if (bullets.length === 0) bullets.push(`- What is exported from \`webiny/${relPath}\`?`);
  bullets.push(`- How to import and use each exported item?`);

  return bullets.join("\n");
}

function kindLabel(kind: ExtractedSymbol["kind"], isTypeOnly: boolean): string {
  if (isTypeOnly && kind !== "namespace") return "Type";
  const map: Record<string, string> = {
    interface: "Interface",
    class: "Class",
    namespace: "Namespace",
    function: "Function",
    variable: "Constant",
    type: "Type",
    enum: "Enum",
    other: "Export"
  };
  return map[kind] ?? "Export";
}

function renderSymbolSection(sym: ExtractedSymbol, importPath: string): string {
  const label = kindLabel(sym.kind, sym.isTypeOnly);
  const lines: string[] = [];

  lines.push(`## \`${sym.name}\``);
  lines.push("");
  lines.push(`**${label}** — imported from \`${importPath}\``);
  lines.push("");

  if (sym.jsDoc) {
    lines.push(sym.jsDoc);
    lines.push("");
  }

  // Import snippet
  const importKeyword = sym.isTypeOnly && sym.kind !== "namespace" ? "import type" : "import";
  lines.push("```typescript");
  lines.push(`${importKeyword} { ${sym.name} } from "${importPath}";`);
  lines.push("```");
  lines.push("");

  // Declaration
  if (sym.declarationText && sym.declarationText.length > 0) {
    lines.push("```typescript");
    lines.push(sym.declarationText);
    lines.push("```");
    lines.push("");
  }

  // Namespace members
  if (sym.kind === "namespace" && sym.namespaceMembers.length > 0) {
    lines.push("**Namespace members:**");
    lines.push("");
    lines.push("```typescript");
    lines.push(`namespace ${sym.name} {`);
    for (const m of sym.namespaceMembers) {
      lines.push(`    ${m}`);
    }
    lines.push("}");
    lines.push("```");
    lines.push("");
  }

  return lines.join("\n");
}

function renderMdx(doc: EntryPointDoc, id: string): string {
  const lines: string[] = [];

  lines.push("---");
  lines.push(`id: ${id}`);
  lines.push(`title: ${doc.title}`);
  lines.push(`description: "${doc.description}"`);
  lines.push("---");
  lines.push("");
  lines.push(`import {Alert} from "@/components/Alert";`);
  lines.push("");
  lines.push(`<Alert type="success" title="WHAT YOU'LL LEARN">`);
  lines.push("");
  lines.push(renderLearnBlock(doc.relPath, doc.symbols));
  lines.push("");
  lines.push("</Alert>");
  lines.push("");
  lines.push("## Overview");
  lines.push("");
  lines.push(
    `This page documents everything exported from \`webiny/${doc.relPath}\`. Import any of the items below directly from this path in your Webiny extensions.`
  );
  lines.push("");

  if (doc.symbols.length === 0) {
    lines.push("*No exported symbols found.*");
    lines.push("");
  } else {
    for (const sym of doc.symbols) {
      lines.push(renderSymbolSection(sym, `webiny/${doc.relPath}`));
    }
  }

  return lines.join("\n");
}

// ---------------------------------------------------------------------------
// .ai.txt rendering
// ---------------------------------------------------------------------------

function renderAiTxt(doc: EntryPointDoc): string {
  const symbolNames = doc.symbols.map(s => s.name).join(", ");
  const sourceFiles = Array.from(new Set(doc.symbols.map(s => s.sourceFile)));

  return `AI Context: ${doc.title} (reference/${doc.relPath}.mdx)

Source of Information:
1. packages/webiny/src/${doc.relPath}.ts — barrel re-export file
${sourceFiles.map((f, i) => `${i + 2}. ${f} — originating source`).join("\n")}

Key Documentation Decisions:
- This file is auto-generated by scripts/generate-reference.ts — do not edit manually
- Symbols are documented in the order they appear in the barrel file
- Declaration text is extracted from the TypeScript AST; method bodies are stripped
- Type-only exports are labeled as "Type"; namespace exports include member listings

Exported Symbols:
${symbolNames}

Import Path: webiny/${doc.relPath}

Related Documents:
- docs/developer-docs/6.0.x/basic/di.mdx — DI pattern used by all abstractions
- docs/developer-docs/6.0.x/basic/result.mdx — Result type used in use case returns

Tone Guidelines:
- This is a reference page — terse, API-focused, no prose beyond what's necessary
- Code blocks are the primary content; descriptions serve only to clarify intent
- Do not add analogies or long explanations — link to guide pages for those
`;
}

// ---------------------------------------------------------------------------
// Navigation generation
// ---------------------------------------------------------------------------

interface NavPage {
  link: string;
  title?: string;
}

interface NavGroup {
  title: string;
  pages: Array<NavPage | NavGroup>;
}

function isNavGroup(x: NavPage | NavGroup): x is NavGroup {
  return "pages" in x;
}

// Preferred landing page per top-level segment
const SEGMENT_LANDING: Record<string, string> = {
  api: "reference/api/cms/entry",
  admin: "reference/admin",
  infra: "reference/infra/index",
  cli: "reference/cli/command"
};

function buildNavTree(entryPoints: EntryPointDoc[]): NavGroup {
  const root: NavGroup = { title: "Reference", pages: [] };

  // Group by first path segment: api, admin, extensions, infra, cli
  const bySegment = new Map<string, EntryPointDoc[]>();

  for (const ep of entryPoints) {
    const seg = ep.relPath.split("/")[0];
    if (!bySegment.has(seg)) bySegment.set(seg, []);
    bySegment.get(seg)!.push(ep);
  }

  for (const [seg, eps] of Array.from(bySegment.entries())) {
    if (eps.length === 1) {
      // flat entry: extensions, or single-page group
      root.pages.push({ link: `reference/${eps[0].relPath}` });
    } else {
      const landing = SEGMENT_LANDING[seg] ?? `reference/${eps[0].relPath}`;
      const group: NavGroup = {
        title: toTitle(seg),
        pages: eps.map(ep => ({ link: `reference/${ep.relPath}`, title: ep.title })),
        link: landing
      } as NavGroup & { link: string };
      root.pages.push(group);
    }
  }

  return root;
}

function renderNavGroup(group: NavGroup, indent: number): string {
  const pad = "  ".repeat(indent);
  const lines: string[] = [];

  if (indent === 0) {
    // root Reference group — already in navigation.tsx, we just emit children
    for (const page of group.pages) {
      lines.push(renderNavItem(page, indent + 1));
    }
  } else {
    const groupLink = (group as NavGroup & { link?: string }).link ?? findFirstLink(group);
    lines.push(`${pad}<Group title={"${group.title}"} link={"${groupLink}"}>`);
    for (const page of group.pages) {
      lines.push(renderNavItem(page, indent + 1));
    }
    lines.push(`${pad}</Group>`);
  }

  return lines.join("\n");
}

function findFirstLink(group: NavGroup): string {
  for (const p of group.pages) {
    if (!isNavGroup(p)) return p.link;
    const nested = findFirstLink(p);
    if (nested) return nested;
  }
  return "";
}

function renderNavItem(item: NavPage | NavGroup, indent: number): string {
  const pad = "  ".repeat(indent);
  if (isNavGroup(item)) {
    return renderNavGroup(item, indent);
  }
  if (item.title) {
    return `${pad}<Page link={"${item.link}"} title={"${item.title}"} />`;
  }
  return `${pad}<Page link={"${item.link}"} />`;
}

const NAV_MARKER_START = "        {/* __REFERENCE_PAGES_START__ */}";
const NAV_MARKER_END = "        {/* __REFERENCE_PAGES_END__ */}";

function rewriteNavigation(entryPoints: EntryPointDoc[]): void {
  const nav = readFileSync(NAV_FILE, "utf-8");
  const tree = buildNavTree(entryPoints);

  // Build inner content for the Reference group
  const innerLines: string[] = [];
  for (const page of tree.pages) {
    innerLines.push(renderNavItem(page, 2));
  }
  const inner = innerLines.join("\n");

  // Replace between markers
  const startIdx = nav.indexOf(NAV_MARKER_START);
  const endIdx = nav.indexOf(NAV_MARKER_END);

  if (startIdx === -1 || endIdx === -1) {
    console.warn("  [nav] Markers not found in navigation.tsx — skipping nav update");
    console.warn(`  [nav] Add these markers inside the Reference <Group>:`);
    console.warn(`  ${NAV_MARKER_START}`);
    console.warn(`  ${NAV_MARKER_END}`);
    return;
  }

  const before = nav.slice(0, startIdx + NAV_MARKER_START.length);
  const after = nav.slice(endIdx);
  const updated = `${before}\n${inner}\n        ${after}`;

  writeFileSync(NAV_FILE, updated, "utf-8");
  console.log(`  [nav] Updated navigation.tsx Reference group`);
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main(): Promise<void> {
  console.log("Reading webiny package...");

  const pkgJson = JSON.parse(readFileSync(join(WEBINY_PKG, "package.json"), "utf-8"));
  const exports: Record<string, string> = pkgJson.exports ?? {};
  const pkgMap = buildPackagePathMap();

  console.log(`  Found ${Object.keys(exports).length} export paths`);
  console.log(`  Found ${pkgMap.size} @webiny/* package aliases`);

  // Set up ts-morph project pointing at the webiny package tsconfig
  const project = new Project({
    tsConfigFilePath: join(WEBINY_PKG, "tsconfig.json"),
    skipAddingFilesFromTsConfig: true
  });

  // Entry points to process — derive from exports map
  // Filter out non-JS entries (tsconfig.json, global.ts, icons/*)
  const entryPaths: string[] = Object.keys(exports)
    .filter(k => !k.includes("*") && !k.endsWith(".json") && !k.endsWith(".ts"))
    .map(k => k.replace(/^\.\//, "")) // strip leading "./"
    .sort();

  console.log(`  Processing ${entryPaths.length} entry points...`);

  const docs: EntryPointDoc[] = [];

  for (const relPath of entryPaths) {
    const barrelSrc = join(WEBINY_PKG, "src", relPath + ".ts");

    if (!existsSync(barrelSrc)) {
      console.warn(`  [skip] ${relPath} — barrel not found at ${barrelSrc}`);
      continue;
    }

    process.stdout.write(`  [parse] ${relPath}...`);

    // Add barrel file to project
    let barrelFile: SourceFile;
    try {
      barrelFile = project.addSourceFileAtPath(barrelSrc);
    } catch {
      console.log(" ERROR adding to project");
      continue;
    }

    // Parse barrel to get all re-exported names + their source files
    const exports_ = parseBarrel(barrelFile, pkgMap);

    // For each exported name, open the source file and extract the symbol
    const symbols: ExtractedSymbol[] = [];
    const loadedSourceFiles = new Map<string, SourceFile>();

    for (const entry of exports_) {
      if (entry.exportedName === "*") {
        // export * — we can't enumerate without resolving, skip for now
        continue;
      }

      let sourceSf = loadedSourceFiles.get(entry.sourceFile);
      if (!sourceSf) {
        if (!existsSync(entry.sourceFile)) continue;
        try {
          sourceSf = project.addSourceFileAtPath(entry.sourceFile);
          loadedSourceFiles.set(entry.sourceFile, sourceSf);
        } catch {
          continue;
        }
      }

      const sym = extractSymbol(sourceSf, entry.originalName);
      if (sym) {
        symbols.push({
          ...sym,
          name: entry.exportedName,
          isTypeOnly: entry.isTypeOnly || sym.isTypeOnly
        });
      } else {
        // Symbol not found via exported declarations — add a stub
        symbols.push({
          name: entry.exportedName,
          kind: "other",
          isTypeOnly: entry.isTypeOnly,
          declarationText: "",
          jsDoc: "",
          namespaceMembers: [],
          sourceFile: entry.sourceFile
        });
      }
    }

    const doc: EntryPointDoc = {
      importPath: `webiny/${relPath}`,
      relPath,
      title: toTitle(relPath),
      description: toDescription(relPath),
      symbols
    };

    docs.push(doc);
    console.log(` ${symbols.length} symbols`);
  }

  // Write MDX + .ai.txt files
  console.log("\nWriting documentation files...");

  for (const doc of docs) {
    const dir = join(REF_DIR, dirname(doc.relPath));
    mkdirSync(dir, { recursive: true });

    const mdxPath = join(REF_DIR, doc.relPath + ".mdx");
    const aiTxtPath = join(REF_DIR, doc.relPath + ".ai.txt");

    // Generate stable ID from path (8 chars)
    const id = Buffer.from(doc.relPath)
      .toString("base64")
      .replace(/[^a-z0-9]/gi, "")
      .slice(0, 8)
      .toLowerCase()
      .padEnd(8, "0");

    const mdxContent = renderMdx(doc, id);
    const aiTxtContent = renderAiTxt(doc);

    writeFileSync(mdxPath, mdxContent, "utf-8");
    writeFileSync(aiTxtPath, aiTxtContent, "utf-8");
    console.log(`  [write] reference/${doc.relPath}.mdx (${doc.symbols.length} symbols)`);
  }

  // Rewrite navigation
  console.log("\nUpdating navigation.tsx...");
  rewriteNavigation(docs);

  console.log(`\nDone. Generated ${docs.length} reference pages.`);
}

main().catch(err => {
  console.error("Fatal error:", err);
  process.exit(1);
});
