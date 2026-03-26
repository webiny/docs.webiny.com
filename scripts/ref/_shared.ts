/**
 * Shared utilities for the AI-powered reference generator.
 *
 * - Source collection (ts-morph barrel parsing + symbol extraction)
 * - Claude API caller
 * - Navigation rewriter
 * - Common types
 */

import { readFileSync, writeFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { Project, SourceFile, SyntaxKind, Node } from "ts-morph";
import Anthropic from "@anthropic-ai/sdk";

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

export const WEBINY_PKG = "/Users/adrian/dev/wby-next/packages/webiny";
export const WEBINY_MONOREPO = "/Users/adrian/dev/wby-next/packages";
export const DOCS_ROOT = join(process.cwd(), "docs/developer-docs/6.x");
export const REF_DIR = join(DOCS_ROOT, "reference");
export const NAV_FILE = join(DOCS_ROOT, "navigation.tsx");

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface ExportEntry {
  exportedName: string;
  originalName: string;
  sourceFile: string;
  isTypeOnly: boolean;
}

export interface SymbolDecl {
  name: string;
  kind: string;
  isTypeOnly: boolean;
  declarationText: string;
  jsDoc: string;
  sourceFile: string;
}

export interface EntryPointSource {
  /** e.g. "api/logger" */
  relPath: string;
  /** e.g. "webiny/api/logger" */
  importPath: string;
  /** Resolved symbols with declaration text */
  symbols: SymbolDecl[];
  /** Raw TypeScript source of all originating files (keyed by file path) */
  sourceFiles: Map<string, string>;
  /** Contents of an .examples.md file if found */
  examplesContent?: string;
}

// ---------------------------------------------------------------------------
// Package path map
// ---------------------------------------------------------------------------

let _pkgMap: Map<string, string> | null = null;

export function getPackagePathMap(): Map<string, string> {
  if (_pkgMap) return _pkgMap;
  const entries = readFileSync(join(WEBINY_PKG, "tsconfig.json"), "utf-8");
  const cleaned = entries.replace(/\/\/[^\n]*/g, "").replace(/\/\*[\s\S]*?\*\//g, "");
  const tsconfig = JSON.parse(cleaned);
  const paths: Record<string, string[]> = tsconfig?.compilerOptions?.paths ?? {};
  const map = new Map<string, string>();
  for (const [alias, targets] of Object.entries(paths)) {
    if (!alias.startsWith("@webiny/")) continue;
    const rawTarget = targets[0];
    if (!rawTarget) continue;
    const resolved = join(WEBINY_PKG, rawTarget.replace(/\/\*$/, "").replace(/\*$/, ""));
    const pkgAlias = alias.replace(/\/\*$/, "");
    map.set(pkgAlias, resolved);
  }
  _pkgMap = map;
  return map;
}

export function resolveWebinyImport(
  importPath: string,
  pkgMap: Map<string, string>
): string | null {
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

export function resolveModuleSpecifier(
  sf: SourceFile,
  modSpec: string,
  pkgMap: Map<string, string>
): string | null {
  if (modSpec.startsWith(".")) {
    return join(sf.getDirectoryPath(), modSpec.replace(/\.js$/, ".ts"));
  }
  if (modSpec.startsWith("~/")) {
    const parts = sf.getFilePath().split("/");
    const srcIdx = parts.lastIndexOf("src");
    if (srcIdx !== -1) {
      const srcRoot = parts.slice(0, srcIdx + 1).join("/");
      return join(srcRoot, modSpec.slice(2).replace(/\.js$/, ".ts"));
    }
    return null;
  }
  return resolveWebinyImport(modSpec, pkgMap);
}

// ---------------------------------------------------------------------------
// Barrel parsing
// ---------------------------------------------------------------------------

export function parseBarrel(sf: SourceFile, pkgMap: Map<string, string>): ExportEntry[] {
  const entries: ExportEntry[] = [];
  for (const decl of sf.getExportDeclarations()) {
    const moduleSpecifier = decl.getModuleSpecifierValue();
    if (!moduleSpecifier) continue;
    const resolvedPath = resolveWebinyImport(moduleSpecifier, pkgMap);
    if (!resolvedPath) continue;
    const isTypeOnly = decl.isTypeOnly();
    const namedExports = decl.getNamedExports();
    if (namedExports.length === 0) {
      entries.push({ exportedName: "*", originalName: "*", sourceFile: resolvedPath, isTypeOnly });
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
// Symbol extraction (signatures only, no bodies)
// ---------------------------------------------------------------------------

function extractJsDoc(node: Node): string {
  const jsDocNodes = node.getChildrenOfKind(SyntaxKind.JSDoc);
  if (jsDocNodes.length === 0) return "";
  return jsDocNodes
    .map(jd => jd.getInnerText().trim())
    .filter(Boolean)
    .join("\n");
}

function isInternalNode(node: Node): boolean {
  return node.getChildrenOfKind(SyntaxKind.JSDoc).some(jd => jd.getText().includes("@internal"));
}

function stripBody(node: Node): string {
  // For functions / constructors / methods: return everything up to the body block
  const txt = node.getText();
  const body = (node as any).getBody ? (node as any).getBody() : null;
  if (body) {
    const bodyStart = body.getStart();
    const nodeStart = node.getStart();
    return txt.substring(0, bodyStart - nodeStart).trim();
  }
  return txt.trim();
}

export function extractSymbolDecl(sf: SourceFile, name: string): SymbolDecl | null {
  const allExported = sf.getExportedDeclarations();
  for (const [exportName, decls] of Array.from(allExported.entries())) {
    if (exportName !== name || decls.length === 0) continue;

    const varDecl = decls.find(d => Node.isVariableDeclaration(d));
    const node = varDecl ?? decls[0];
    const jsDoc = extractJsDoc(node);

    if (Node.isInterfaceDeclaration(node)) {
      // Strip @internal members
      const members = node
        .getMembers()
        .filter(m => !isInternalNode(m))
        .map(m => "  " + m.getText().trim())
        .join("\n");
      return {
        name,
        kind: "interface",
        isTypeOnly: true,
        declarationText: `interface ${node.getName()} {\n${members}\n}`,
        jsDoc,
        sourceFile: sf.getFilePath()
      };
    }

    if (Node.isClassDeclaration(node)) {
      const members = node
        .getMembers()
        .filter(m => !isInternalNode(m))
        .map(m => {
          if (Node.isPropertyDeclaration(m)) {
            return "  " + m.getText().trim().replace(/;?$/, ";");
          }
          if (Node.isConstructorDeclaration(m) || Node.isMethodDeclaration(m)) {
            return "  " + stripBody(m) + ";";
          }
          return "  " + m.getText().trim();
        })
        .filter(Boolean);
      const head = node.getText().split("{")[0].trim();
      const body = members.length ? "\n" + members.join("\n") + "\n" : "";
      return {
        name,
        kind: "class",
        isTypeOnly: false,
        declarationText: `${head} {${body}}`,
        jsDoc,
        sourceFile: sf.getFilePath()
      };
    }

    if (Node.isTypeAliasDeclaration(node)) {
      return {
        name,
        kind: "type",
        isTypeOnly: true,
        declarationText: node.getText().trim(),
        jsDoc,
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
        sourceFile: sf.getFilePath()
      };
    }

    if (Node.isFunctionDeclaration(node)) {
      return {
        name,
        kind: "function",
        isTypeOnly: false,
        declarationText: stripBody(node),
        jsDoc,
        sourceFile: sf.getFilePath()
      };
    }

    if (Node.isVariableDeclaration(node)) {
      // Check if it's a createAbstraction call
      const initializer = node.getInitializer();
      const initText = initializer?.getText() ?? "";
      const isAbstraction = initText.includes("createAbstraction<");
      if (isAbstraction) {
        // Get the full var statement for context, but just the signature
        const parent = node.getParent();
        const gp = parent?.getParent();
        const declText = gp ? gp.getText().trim() : node.getText().trim();
        return {
          name,
          kind: "abstraction",
          isTypeOnly: false,
          declarationText: declText.slice(0, 500),
          jsDoc,
          sourceFile: sf.getFilePath()
        };
      }
      // Regular variable
      const parent = node.getParent();
      const gp = parent?.getParent();
      return {
        name,
        kind: "variable",
        isTypeOnly: false,
        declarationText: (gp ? gp.getText() : node.getText()).trim().slice(0, 500),
        jsDoc,
        sourceFile: sf.getFilePath()
      };
    }

    if (Node.isModuleDeclaration(node)) {
      return {
        name,
        kind: "namespace",
        isTypeOnly: true,
        declarationText: node.getText().trim(),
        jsDoc,
        sourceFile: sf.getFilePath()
      };
    }

    // Fallback
    return {
      name,
      kind: "other",
      isTypeOnly: false,
      declarationText: node.getText().trim().slice(0, 300),
      jsDoc,
      sourceFile: sf.getFilePath()
    };
  }
  return null;
}

// ---------------------------------------------------------------------------
// Examples file finder
// ---------------------------------------------------------------------------

export function findExamplesContent(relPath: string): string | undefined {
  const pkgMap = getPackagePathMap();

  // Check alongside the barrel in @webiny/* packages
  for (const [alias, srcDir] of Array.from(pkgMap.entries())) {
    const pkgName = alias.replace("@webiny/", "");
    const exportsDir = join(WEBINY_MONOREPO, pkgName.replace(/-/g, "-"), "src", "exports");
    const candidate = join(exportsDir, relPath + ".examples.md");
    if (existsSync(candidate)) {
      return readFileSync(candidate, "utf-8");
    }
  }

  // Also check api-core specifically (most common location)
  const apiCoreExports = join(WEBINY_MONOREPO, "api-core", "src", "exports");
  const candidate2 = join(apiCoreExports, relPath + ".examples.md");
  if (existsSync(candidate2)) {
    return readFileSync(candidate2, "utf-8");
  }

  return undefined;
}

// ---------------------------------------------------------------------------
// Collect all source content for an entry point
// ---------------------------------------------------------------------------

export function collectEntryPointSource(
  relPath: string,
  project: Project,
  pkgMap: Map<string, string>
): EntryPointSource | null {
  const barrelSrc = join(WEBINY_PKG, "src", relPath + ".ts");
  if (!existsSync(barrelSrc)) return null;

  let barrelFile: SourceFile;
  try {
    barrelFile = project.addSourceFileAtPath(barrelSrc);
  } catch {
    return null;
  }

  const exportEntries = parseBarrel(barrelFile, pkgMap);
  const symbols: SymbolDecl[] = [];
  const sourceFiles = new Map<string, string>();
  const loadedSfs = new Map<string, SourceFile>();

  for (const entry of exportEntries) {
    if (entry.exportedName === "*") continue;
    if (!existsSync(entry.sourceFile)) continue;

    let sourceSf = loadedSfs.get(entry.sourceFile);
    if (!sourceSf) {
      try {
        sourceSf = project.addSourceFileAtPath(entry.sourceFile);
        loadedSfs.set(entry.sourceFile, sourceSf);
      } catch {
        continue;
      }
    }

    // Collect raw source (once per file)
    if (!sourceFiles.has(entry.sourceFile)) {
      sourceFiles.set(entry.sourceFile, sourceSf.getFullText());
    }

    const sym = extractSymbolDecl(sourceSf, entry.originalName);
    if (sym) {
      symbols.push({
        ...sym,
        name: entry.exportedName,
        isTypeOnly: entry.isTypeOnly || sym.isTypeOnly
      });
    } else {
      symbols.push({
        name: entry.exportedName,
        kind: "other",
        isTypeOnly: entry.isTypeOnly,
        declarationText: "",
        jsDoc: "",
        sourceFile: entry.sourceFile
      });
    }
  }

  const examplesContent = findExamplesContent(relPath);

  return {
    relPath,
    importPath: `webiny/${relPath}`,
    symbols,
    sourceFiles,
    examplesContent
  };
}

// ---------------------------------------------------------------------------
// Claude caller
// ---------------------------------------------------------------------------

let _claude: Anthropic | null = null;
function getClaude(): Anthropic {
  if (!_claude) {
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) throw new Error("ANTHROPIC_API_KEY environment variable is not set");
    _claude = new Anthropic({ apiKey });
  }
  return _claude;
}

export async function callClaude(systemPrompt: string, userPrompt: string): Promise<string> {
  const claude = getClaude();
  const message = await claude.messages.create({
    model: "claude-sonnet-4-5",
    max_tokens: 8192,
    messages: [{ role: "user", content: userPrompt }],
    system: systemPrompt
  });

  const textBlock = message.content.find(b => b.type === "text");
  if (!textBlock || textBlock.type !== "text") throw new Error("No text in Claude response");
  return textBlock.text;
}

// ---------------------------------------------------------------------------
// ID generation (stable, path-based)
// ---------------------------------------------------------------------------

export function stableId(relPath: string): string {
  return Buffer.from(relPath)
    .toString("base64")
    .replace(/[^a-z0-9]/gi, "")
    .slice(0, 8)
    .toLowerCase()
    .padEnd(8, "0");
}

// ---------------------------------------------------------------------------
// Title helper
// ---------------------------------------------------------------------------

const TITLE_MAP: Record<string, string> = {
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
  "build-params": "Build Params",
  "event-publisher": "Event Publisher",
  "key-value-store": "Key-Value Store",
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
  "api-key": "API Key",
  authentication: "Authentication",
  role: "Role",
  user: "User",
  lexical: "Lexical Editor",
  form: "Form",
  router: "Router",
  "local-storage": "Local Storage",
  "env-config": "Env Config",
  "graphql-client": "GraphQL Client",
  configs: "Configs",
  "website-builder": "Website Builder",
  "tenant-manager": "Tenant Manager",
  command: "Command",
  core: "Core",
  scheduler: "Scheduler",
  flp: "FLP",
  folder: "Folder",
  "file-manager": "File Manager",
  "build-params-api": "API Build Params"
};

export function toTitle(relPath: string): string {
  const parts = relPath.split("/");
  const last = parts[parts.length - 1];
  const section = TITLE_MAP[last] ?? last.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
  if (parts.length === 1) return section;
  if (last === "index") {
    const parent = parts[parts.length - 2];
    return TITLE_MAP[parent] ?? parent.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
  }
  return section;
}

export function toOutputPath(relPath: string): string {
  const overrides: Record<string, string> = {
    "cli/index": "cli/overview",
    "infra/index": "infra/overview",
    cli: "cli/overview",
    infra: "infra/overview"
  };
  return overrides[relPath] ?? relPath;
}

// ---------------------------------------------------------------------------
// Navigation rewriter
// ---------------------------------------------------------------------------

interface NavPage {
  link: string;
  title?: string;
}

interface NavGroup {
  title: string;
  link?: string;
  pages: (NavPage | NavGroup)[];
}

function isNavGroup(item: NavPage | NavGroup): item is NavGroup {
  return "pages" in item;
}

const LAYER_ORDER = ["api", "admin", "cli", "infra", "extensions"];
const LAYER_LANDING: Record<string, string> = {
  api: "reference/api",
  admin: "reference/admin",
  cli: "reference/cli/overview",
  infra: "reference/infra/overview"
};
const SUBDOMAIN_LANDING: Record<string, string> = {
  "api/cms": "reference/api/cms/entry",
  "api/security": "reference/api/security",
  "api/website-builder": "reference/api/website-builder/page",
  "admin/cms": "reference/admin/cms",
  "admin/website-builder": "reference/admin/website-builder"
};

function makeGroup(title: string, link: string): NavGroup & { link: string } {
  return { title, link, pages: [] };
}

function buildNavTree(entryPoints: { relPath: string; title: string }[]): NavGroup {
  const root: NavGroup = { title: "Reference", pages: [] };
  const byLayer = new Map<string, typeof entryPoints>();

  for (const ep of entryPoints) {
    const layer = ep.relPath.split("/")[0];
    if (!byLayer.has(layer)) byLayer.set(layer, []);
    byLayer.get(layer)!.push(ep);
  }

  const orderedLayers = Array.from(byLayer.keys()).sort((a, b) => {
    const ai = LAYER_ORDER.indexOf(a);
    const bi = LAYER_ORDER.indexOf(b);
    if (ai === -1 && bi === -1) return a.localeCompare(b);
    if (ai === -1) return 1;
    if (bi === -1) return -1;
    return ai - bi;
  });

  for (const layer of orderedLayers) {
    const eps = byLayer.get(layer)!;
    if (eps.length === 1) {
      root.pages.push({ link: `reference/${toOutputPath(eps[0].relPath)}` });
      continue;
    }

    const layerLanding = LAYER_LANDING[layer] ?? `reference/${toOutputPath(eps[0].relPath)}`;
    const layerGroup = makeGroup(toTitle(layer), layerLanding);

    const SUB_DOMAINS = ["cms", "website-builder", "security", "file-manager", "aco"];
    const bySubDomain = new Map<string, typeof entryPoints>();
    const flat: typeof entryPoints = [];
    const subDomainIndex = new Map<string, (typeof entryPoints)[0]>();

    for (const ep of eps) {
      const parts = ep.relPath.split("/");
      if (parts.length === 2 && SUB_DOMAINS.includes(parts[1])) {
        subDomainIndex.set(parts[1], ep);
      } else if (parts.length >= 3 && SUB_DOMAINS.includes(parts[1])) {
        const sub = parts[1];
        if (!bySubDomain.has(sub)) bySubDomain.set(sub, []);
        bySubDomain.get(sub)!.push(ep);
      } else {
        flat.push(ep);
      }
    }

    const rootFlat = flat.filter(
      ep => `reference/${toOutputPath(ep.relPath)}` === layerLanding || ep.relPath === layer
    );
    const otherFlat = flat.filter(ep => !rootFlat.includes(ep));
    for (const ep of [...rootFlat, ...otherFlat]) {
      const isRoot = rootFlat.includes(ep);
      layerGroup.pages.push({
        link: `reference/${toOutputPath(ep.relPath)}`,
        title: isRoot ? "Root" : ep.title
      });
    }

    for (const [subDomain, subEps] of Array.from(bySubDomain.entries())) {
      const key = `${layer}/${subDomain}`;
      const subLanding = SUBDOMAIN_LANDING[key] ?? `reference/${toOutputPath(subEps[0].relPath)}`;
      const subGroup = makeGroup(toTitle(subDomain), subLanding);
      const indexEp = subDomainIndex.get(subDomain);
      if (indexEp)
        subGroup.pages.push({ link: `reference/${toOutputPath(indexEp.relPath)}`, title: "Root" });
      for (const ep of subEps) {
        subGroup.pages.push({ link: `reference/${toOutputPath(ep.relPath)}`, title: ep.title });
      }
      layerGroup.pages.push(subGroup);
    }

    root.pages.push(layerGroup);
  }
  return root;
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
    const groupLink = (item as NavGroup & { link?: string }).link ?? findFirstLink(item);
    const lines = [
      `${pad}<Group title={"${item.title}"} link={"${groupLink}"}>`,
      ...item.pages.map(p => renderNavItem(p, indent + 1)),
      `${pad}</Group>`
    ];
    return lines.join("\n");
  }
  if (item.title) return `${pad}<Page link={"${item.link}"} title={"${item.title}"} />`;
  return `${pad}<Page link={"${item.link}"} />`;
}

const NAV_MARKER_START = "        {/* __REFERENCE_PAGES_START__ */}";
const NAV_MARKER_END = "        {/* __REFERENCE_PAGES_END__ */}";

export function rewriteNavigation(entryPoints: { relPath: string; title: string }[]): void {
  const nav = readFileSync(NAV_FILE, "utf-8");
  const tree = buildNavTree(entryPoints);

  const innerLines: string[] = [];
  for (const page of tree.pages) {
    innerLines.push(renderNavItem(page, 2));
  }
  const inner = innerLines.join("\n");

  const startIdx = nav.indexOf(NAV_MARKER_START);
  const endIdx = nav.indexOf(NAV_MARKER_END);

  if (startIdx === -1 || endIdx === -1) {
    console.warn("  [nav] Markers not found in navigation.tsx — skipping nav update");
    return;
  }

  const before = nav.slice(0, startIdx + NAV_MARKER_START.length);
  const after = nav.slice(endIdx);
  const updated = `${before}\n${inner}\n        ${after}`;
  writeFileSync(NAV_FILE, updated, "utf-8");
  console.log(`  [nav] Updated navigation.tsx Reference group`);
}
