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
import slugify from "@sindresorhus/slugify";

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const WEBINY_PKG = "/Users/adrian/dev/wby-next/packages/webiny";
const WEBINY_MONOREPO = "/Users/adrian/dev/wby-next/packages";
const DOCS_ROOT = join(process.cwd(), "docs/developer-docs/6.0.x");
const REF_DIR = join(DOCS_ROOT, "reference");
const NAV_FILE = join(DOCS_ROOT, "navigation.tsx");

// Module-level package path map, populated in main() before any extraction
let PKG_MAP: Map<string, string> = new Map();

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

interface InterfaceMember {
  /** e.g. "execute(model: CmsModel, input: Input): Promise<Result<...>>" */
  signature: string;
  /** JSDoc on this specific member */
  jsDoc: string;
}

interface NamespaceMember {
  /** e.g. "Interface" */
  name: string;
  /** e.g. "ICreateEntryUseCase" or "Promise<Result<CmsEntry, Error>>" */
  value: string;
}

interface EventPayloadField {
  name: string;
  typeText: string;
  optional: boolean;
}

type AbstractionKind = "useCase" | "eventHandler" | "service";

interface ExtractedSymbol {
  name: string;
  kind:
    | "abstraction"
    | "interface"
    | "class"
    | "namespace"
    | "function"
    | "variable"
    | "type"
    | "enum"
    | "other";
  isTypeOnly: boolean;
  /** Full text of the declaration (interface body, class signature, etc.) */
  declarationText: string;
  /** JSDoc comment attached to the declaration */
  jsDoc: string;
  /** Namespace members if kind === 'namespace' */
  namespaceMembers: string[];
  sourceFile: string;

  // --- Abstraction-specific enrichment ---
  /** Set when kind === 'abstraction' */
  abstractionKind?: AbstractionKind;
  /** The resolved Interface members (from IFoo that createAbstraction<IFoo> wraps) */
  interfaceMembers?: InterfaceMember[];
  /** Resolved namespace type members: Interface, Input, Return, Error, Event, etc. */
  namespaceTypes?: NamespaceMember[];
  /** For eventHandler: the payload fields of the event */
  eventPayloadFields?: EventPayloadField[];
  /** For eventHandler: the event type name e.g. "EntryBeforeCreateEvent" */
  eventTypeName?: string;
  /** For eventHandler: the payload interface name */
  eventPayloadName?: string;
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
  if (last === "index") return parentSection;
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
  return text
    .replace(/\{[\s\S]*\}/g, match => {
      if (match.length < 200 && !match.includes("return ") && !match.includes("const ")) {
        return match;
      }
      return "{ ... }";
    })
    .trim();
}

// Isolated project for interface extraction (avoids cross-file resolution issues)
let _isolatedProject: Project | null = null;
function getIsolatedProject(): Project {
  if (!_isolatedProject) {
    _isolatedProject = new Project({
      useInMemoryFileSystem: false,
      skipAddingFilesFromTsConfig: true
    });
  }
  return _isolatedProject;
}

/**
 * Search a source file (and any files it re-exports from) for an interface by name.
 * Returns the interface members, or [] if not found.
 */
function extractInterfaceMembers(
  sf: SourceFile,
  interfaceName: string,
  pkgMap?: Map<string, string>,
  visited = new Set<string>()
): InterfaceMember[] {
  const filePath = sf.getFilePath();
  if (visited.has(filePath)) return [];
  visited.add(filePath);

  // Search all interfaces in this file
  const allIfaces = [
    ...sf.getInterfaces(),
    ...sf.getStatements().filter(Node.isInterfaceDeclaration)
  ].filter(Node.isInterfaceDeclaration);

  const iface = allIfaces.find(i => i.getName() === interfaceName);
  if (iface) {
    return iface.getMembers().map(m => ({
      signature: m.getText().trim().replace(/;$/, ""),
      jsDoc: extractJsDoc(m)
    }));
  }

  // Raw text fallback for this file
  const src = sf.getFullText();
  const rawMatch = src.match(
    new RegExp(`interface\\s+${interfaceName}\\s*(?:<[^{]*>)?\\s*\\{([^}]+)\\}`)
  );
  if (rawMatch) {
    return rawMatch[1]
      .split("\n")
      .map(l => l.trim())
      .filter(l => l && !l.startsWith("//") && l !== "{" && l !== "}")
      .map(l => ({ signature: l.replace(/;$/, ""), jsDoc: "" }));
  }

  // Follow re-exports into sibling files (handles index.ts -> abstractions.ts pattern)
  if (pkgMap) {
    for (const decl of sf.getExportDeclarations()) {
      const modSpec = decl.getModuleSpecifierValue();
      if (!modSpec) continue;

      let resolvedPath: string | null = null;
      if (modSpec.startsWith(".")) {
        // Relative import — resolve relative to this file's directory
        const dir = sf.getDirectoryPath();
        resolvedPath = join(dir, modSpec.replace(/\.js$/, ".ts"));
      } else {
        resolvedPath = resolveWebinyImport(modSpec, pkgMap);
      }

      if (!resolvedPath || !existsSync(resolvedPath)) continue;

      try {
        const siblingSf = sf.getProject().addSourceFileAtPath(resolvedPath);
        const result = extractInterfaceMembers(siblingSf, interfaceName, pkgMap, visited);
        if (result.length > 0) return result;
      } catch {
        continue;
      }
    }
  }

  return [];
}

/** Extract fields from an interface declaration as EventPayloadField[] */
function extractPayloadFields(sf: SourceFile, interfaceName: string): EventPayloadField[] {
  // Try AST first
  const iface = [
    ...sf.getInterfaces(),
    ...sf.getStatements().filter(Node.isInterfaceDeclaration)
  ].find(i => Node.isInterfaceDeclaration(i) && i.getName() === interfaceName);

  if (iface && Node.isInterfaceDeclaration(iface)) {
    return iface.getProperties().map(p => ({
      name: p.getName(),
      typeText: p.getTypeNode()?.getText() ?? "unknown",
      optional: p.hasQuestionToken()
    }));
  }

  // Raw text fallback
  const src = sf.getFullText();
  const regex = new RegExp(`interface\\s+${interfaceName}\\s*\\{([^}]+)\\}`);
  const match = src.match(regex);
  if (!match) return [];

  return match[1]
    .split("\n")
    .map(l => l.trim())
    .filter(l => l && !l.startsWith("//"))
    .map(l => {
      const propMatch = l.match(/^(\w+)(\?)?:\s*(.+?);?$/);
      if (!propMatch) return null;
      return { name: propMatch[1], typeText: propMatch[3], optional: !!propMatch[2] };
    })
    .filter((f): f is EventPayloadField => f !== null);
}

/** Extract namespace type members as NamespaceMember[] */
function extractNamespaceTypes(sf: SourceFile, namespaceName: string): NamespaceMember[] {
  const allModules = sf.getModules();
  const ns = allModules.find(m => m.getName() === namespaceName);
  if (!ns) return [];

  const body = ns.getBody();
  if (!body || !Node.isModuleBlock(body)) return [];

  const members: NamespaceMember[] = [];
  for (const stmt of body.getStatements()) {
    if (Node.isTypeAliasDeclaration(stmt)) {
      const typeNode = stmt.getTypeNode();
      members.push({
        name: stmt.getName(),
        value: typeNode?.getText() ?? stmt.getText()
      });
    } else if (Node.isInterfaceDeclaration(stmt)) {
      members.push({ name: stmt.getName() ?? "", value: "interface" });
    } else if (Node.isExportDeclaration(stmt)) {
      members.push({ name: "", value: stmt.getText() });
    }
  }
  return members.filter(m => m.name);
}

/**
 * If a variable declaration is `createAbstraction<IFoo>(...)` or
 * `createAbstraction<IEventHandler<SomeEvent>>(...)`, return the generic arg text.
 * Handles nested generics by counting angle brackets.
 */
function getCreateAbstractionGeneric(node: Node): string | null {
  if (!Node.isVariableDeclaration(node)) return null;
  const initializer = node.getInitializer();
  if (!initializer) return null;

  const txt = initializer.getText().replace(/\s+/g, " ");
  const startKeyword = "createAbstraction<";
  const idx = txt.indexOf(startKeyword);
  if (idx === -1) return null;

  // Walk from after the '<', counting depth to find the matching '>'
  let depth = 1;
  let i = idx + startKeyword.length;
  let start = i;
  while (i < txt.length && depth > 0) {
    if (txt[i] === "<") depth++;
    else if (txt[i] === ">") depth--;
    i++;
  }
  if (depth !== 0) return null;
  return txt.slice(start, i - 1).trim();
}

/**
 * Classify an abstraction based on its name and generic type arg.
 */
function classifyAbstraction(name: string, genericArg: string): AbstractionKind {
  if (name.endsWith("EventHandler") || name.endsWith("Handler")) return "eventHandler";
  if (name.endsWith("UseCase") || name.endsWith("Repository")) return "useCase";
  return "service";
}

/**
 * For an IEventHandler<SomeEvent> generic arg, extract the event class name.
 * e.g. "IEventHandler<EntryBeforeCreateEvent>" -> "EntryBeforeCreateEvent"
 * Also handles "IEventHandler<DomainEvent<SomePayload>>" -> "DomainEvent<SomePayload>"
 */
function extractEventTypeName(genericArg: string): string | null {
  // Simple case: IEventHandler<SomeNamedClass>
  const simple = genericArg.match(/IEventHandler\s*<\s*(\w+)\s*>/);
  if (simple) return simple[1];
  // Nested case: IEventHandler<DomainEvent<SomePayload>>
  const nested = genericArg.match(/IEventHandler\s*<\s*(DomainEvent\s*<\s*\w+\s*>)\s*>/);
  if (nested) return nested[1];
  return null;
}

/**
 * For an IEventHandler<DomainEvent<SomePayload>> generic arg, extract the payload name directly.
 * e.g. "IEventHandler<DomainEvent<PageBeforeCreatePayload>>" -> "PageBeforeCreatePayload"
 */
function extractPayloadNameFromGenericArg(genericArg: string): string | null {
  const m = genericArg.match(/IEventHandler\s*<\s*DomainEvent\s*<\s*(\w+)\s*>/);
  return m ? m[1] : null;
}

/**
 * Find the payload interface name from an event class in the source file.
 * Looks for: class SomeEvent extends DomainEvent<SomePayload>
 */
function extractEventPayloadInterfaceName(sf: SourceFile, eventClassName: string): string | null {
  // Try AST first
  const cls = sf.getClasses().find(c => c.getName() === eventClassName);
  if (cls) {
    const extendsClause = cls.getExtends();
    if (extendsClause) {
      const m = extendsClause.getText().match(/DomainEvent\s*<\s*(\w+)\s*>/);
      if (m) return m[1];
    }
  }
  // Raw text fallback: class SomeEvent extends DomainEvent<SomePayload>
  const src = sf.getFullText();
  const regex = new RegExp(
    `class\\s+${eventClassName}\\s+extends\\s+DomainEvent\\s*<\\s*(\\w+)\\s*>`
  );
  const m = src.match(regex);
  return m ? m[1] : null;
}

function extractSymbol(sf: SourceFile, name: string): ExtractedSymbol | null {
  const allExported = sf.getExportedDeclarations();

  for (const [exportName, decls] of Array.from(allExported.entries())) {
    if (exportName !== name) continue;
    if (decls.length === 0) continue;

    // When a name has both a VariableDeclaration and a ModuleDeclaration (namespace),
    // prefer the variable and merge namespace types in below.
    const varDecl = decls.find(d => Node.isVariableDeclaration(d));
    const nsDecl = decls.find(d => Node.isModuleDeclaration(d));
    const node = varDecl ?? decls[0];
    const jsDoc = extractJsDoc(node);

    // -----------------------------------------------------------------------
    // Interface
    // -----------------------------------------------------------------------
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

    // -----------------------------------------------------------------------
    // Class
    // -----------------------------------------------------------------------
    if (Node.isClassDeclaration(node)) {
      const members = node
        .getMembers()
        .map(m => {
          const txt = m.getText().trim();
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

    // -----------------------------------------------------------------------
    // Namespace — skip here, handled separately in enrichment pass
    // -----------------------------------------------------------------------
    if (Node.isModuleDeclaration(node)) {
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

    // -----------------------------------------------------------------------
    // Function
    // -----------------------------------------------------------------------
    if (
      Node.isFunctionDeclaration(node) ||
      Node.isArrowFunction(node) ||
      Node.isFunctionExpression(node)
    ) {
      const txt = node.getText().trim();
      return {
        name,
        kind: "function",
        isTypeOnly: false,
        declarationText: txt.replace(/\{[\s\S]*$/, "").trim(),
        jsDoc,
        namespaceMembers: [],
        sourceFile: sf.getFilePath()
      };
    }

    // -----------------------------------------------------------------------
    // Variable — detect createAbstraction() and enrich
    // -----------------------------------------------------------------------
    if (Node.isVariableDeclaration(node)) {
      const genericArg = getCreateAbstractionGeneric(node);

      if (genericArg) {
        // It's an abstraction token — resolve the wrapped interface
        const abstractionKind = classifyAbstraction(name, genericArg);
        const interfaceMembers: InterfaceMember[] = [];
        const eventPayloadFields: EventPayloadField[] = [];
        let eventTypeName: string | undefined;
        let eventPayloadName: string | undefined;

        if (abstractionKind === "eventHandler") {
          // IEventHandler<SomeEvent> or IEventHandler<DomainEvent<SomePayload>>
          eventTypeName = extractEventTypeName(genericArg) ?? undefined;
          if (eventTypeName) {
            // If eventTypeName is a simple class name (e.g. EntryBeforeCreateEvent),
            // find the payload via its extends clause. Otherwise (DomainEvent<X>),
            // extract payload name directly from the generic arg.
            const isDomainEventWrapper = eventTypeName.startsWith("DomainEvent");
            if (isDomainEventWrapper) {
              eventPayloadName = extractPayloadNameFromGenericArg(genericArg) ?? undefined;
            } else {
              eventPayloadName = extractEventPayloadInterfaceName(sf, eventTypeName) ?? undefined;
            }
            if (eventPayloadName) {
              const fields = extractPayloadFields(sf, eventPayloadName);
              eventPayloadFields.push(...fields);
            }
          }
          // The handle() method signature — use the specific event type
          interfaceMembers.push({
            signature: `handle(event: ${eventTypeName ?? "DomainEvent<unknown>"}): Promise<void>`,
            jsDoc: ""
          });
        } else {
          // useCase or service — resolve the IFoo interface, following re-exports
          const resolved = extractInterfaceMembers(sf, genericArg, PKG_MAP);
          interfaceMembers.push(...resolved);
        }

        // Extract namespace types — first try the co-located nsDecl, then search by name
        let namespaceTypes = nsDecl
          ? (() => {
              const body = (nsDecl as any).getBody?.();
              if (!body || !Node.isModuleBlock(body)) return [];
              const members: NamespaceMember[] = [];
              for (const stmt of body.getStatements()) {
                if (Node.isTypeAliasDeclaration(stmt)) {
                  const typeNode = stmt.getTypeNode();
                  members.push({
                    name: stmt.getName(),
                    value: typeNode?.getText() ?? stmt.getText()
                  });
                }
              }
              return members;
            })()
          : extractNamespaceTypes(sf, name);

        return {
          name,
          kind: "abstraction",
          isTypeOnly: false,
          declarationText: "",
          jsDoc,
          namespaceMembers: [],
          sourceFile: sf.getFilePath(),
          abstractionKind,
          interfaceMembers,
          namespaceTypes,
          eventPayloadFields,
          eventTypeName,
          eventPayloadName
        };
      }

      // Regular variable
      const parent = node.getParent();
      const gp = parent?.getParent();
      const txt = gp ? gp.getText().trim() : node.getText().trim();
      return {
        name,
        kind: "variable",
        isTypeOnly: false,
        declarationText: txt.slice(0, 400),
        jsDoc,
        namespaceMembers: [],
        sourceFile: sf.getFilePath()
      };
    }

    // -----------------------------------------------------------------------
    // Type alias
    // -----------------------------------------------------------------------
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

    // -----------------------------------------------------------------------
    // Enum
    // -----------------------------------------------------------------------
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

/**
 * After all symbols for an entry point are collected, pair each abstraction
 * with its corresponding namespace symbol (same name) to merge namespace types.
 * Namespaces are exported separately from their abstraction constant —
 * e.g. both `Logger` (variable) and `Logger` (namespace) are exported.
 * ts-morph returns each separately; we collapse them here.
 */
function mergeNamespaceSymbols(symbols: ExtractedSymbol[]): ExtractedSymbol[] {
  const merged: ExtractedSymbol[] = [];
  const nsMap = new Map<string, ExtractedSymbol>();

  // First pass: collect namespaces
  for (const sym of symbols) {
    if (sym.kind === "namespace") {
      nsMap.set(sym.name, sym);
    }
  }

  for (const sym of symbols) {
    if (sym.kind === "namespace") continue; // will be merged into abstraction

    if (sym.kind === "abstraction") {
      const ns = nsMap.get(sym.name);
      if (
        ns &&
        ns.namespaceMembers.length > 0 &&
        (!sym.namespaceTypes || sym.namespaceTypes.length === 0)
      ) {
        // Parse namespace members into NamespaceMember[]
        const parsed: NamespaceMember[] = [];
        for (const m of ns.namespaceMembers) {
          const typeMatch = m.match(/export\s+type\s+(\w+)\s*(?:<[^>]*>)?\s*=\s*([\s\S]+?);/);
          if (typeMatch) {
            parsed.push({ name: typeMatch[1], value: typeMatch[2].trim() });
          }
        }
        merged.push({ ...sym, namespaceTypes: parsed.length ? parsed : sym.namespaceTypes });
      } else {
        merged.push(sym);
      }
    } else {
      merged.push(sym);
    }
  }

  return merged;
}

// ---------------------------------------------------------------------------
// MDX rendering
// ---------------------------------------------------------------------------

interface SymbolGroup {
  title: string;
  symbols: ExtractedSymbol[];
}

/**
 * Group symbols into logical sections depending on the entry point layer (api vs admin).
 * Returns groups in display order, skipping empty groups.
 */
function groupSymbols(relPath: string, symbols: ExtractedSymbol[]): SymbolGroup[] {
  const layer = relPath.split("/")[0]; // "api" | "admin" | "infra" | "cli" | "extensions"

  if (layer === "api") {
    const useCases = symbols.filter(
      s => s.kind === "abstraction" && s.abstractionKind === "useCase"
    );
    const handlers = symbols.filter(
      s => s.kind === "abstraction" && s.abstractionKind === "eventHandler"
    );
    const services = symbols.filter(
      s => s.kind === "abstraction" && s.abstractionKind === "service"
    );
    const rest = symbols.filter(s => s.kind !== "abstraction");

    return [
      { title: "Use Cases", symbols: useCases },
      { title: "Event Handlers", symbols: handlers },
      { title: "Services", symbols: services },
      { title: "Types & Classes", symbols: rest }
    ].filter(g => g.symbols.length > 0);
  }

  if (layer === "admin") {
    const hooks = symbols.filter(
      s =>
        (s.kind === "function" || s.kind === "variable") &&
        s.name.startsWith("use") &&
        s.name.length > 3 &&
        s.name[3] === s.name[3].toUpperCase()
    );
    const hookNames = new Set(hooks.map(s => s.name));
    const components = symbols.filter(
      s =>
        !hookNames.has(s.name) &&
        (s.kind === "variable" || s.kind === "function" || s.kind === "class") &&
        s.name[0] === s.name[0].toUpperCase() &&
        s.name[0] !== s.name[0].toLowerCase()
    );
    const componentNames = new Set(components.map(s => s.name));
    const types = symbols.filter(
      s =>
        !hookNames.has(s.name) &&
        !componentNames.has(s.name) &&
        (s.kind === "type" || s.kind === "interface")
    );
    const typeNames = new Set(types.map(s => s.name));
    const rest = symbols.filter(
      s => !hookNames.has(s.name) && !componentNames.has(s.name) && !typeNames.has(s.name)
    );

    return [
      { title: "Components", symbols: components },
      { title: "Hooks", symbols: hooks },
      { title: "Types", symbols: types },
      { title: "Other", symbols: rest }
    ].filter(g => g.symbols.length > 0);
  }

  // For infra, cli, extensions — no grouping, single flat group
  return [{ title: "", symbols }];
}

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

function kindLabel(sym: ExtractedSymbol): string {
  if (sym.kind === "abstraction") {
    if (sym.abstractionKind === "eventHandler") return "Event Handler Abstraction";
    if (sym.abstractionKind === "useCase") return "Use Case Abstraction";
    return "Abstraction";
  }
  if (sym.isTypeOnly && sym.kind !== "namespace") return "Type";
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
  return map[sym.kind] ?? "Export";
}

function renderUsageSnippet(
  sym: ExtractedSymbol,
  importPath: string
): { file: string; body: string } | null {
  if (sym.kind !== "abstraction") return null;

  const lines: string[] = [];

  if (sym.abstractionKind === "eventHandler") {
    lines.push(`import { ${sym.name} } from "${importPath}";`);
    lines.push(``);
    lines.push(`class MyHandler implements ${sym.name}.Interface {`);
    lines.push(`    public constructor(/* inject dependencies here */) {}`);
    lines.push(``);
    lines.push(`    public async handle(event: ${sym.name}.Event): Promise<void> {`);
    if (sym.eventPayloadFields && sym.eventPayloadFields.length > 0) {
      const fields = sym.eventPayloadFields.map(f => f.name).join(", ");
      lines.push(`        const { ${fields} } = event.payload;`);
    } else {
      lines.push(`        // implementation`);
    }
    lines.push(`    }`);
    lines.push(`}`);
    lines.push(``);
    lines.push(`export default ${sym.name}.createImplementation({`);
    lines.push(`    implementation: MyHandler,`);
    lines.push(`    dependencies: []`);
    lines.push(`});`);
  } else {
    // use case or service abstraction — show it being injected and called
    const paramName = sym.name.charAt(0).toLowerCase() + sym.name.slice(1);

    // Pick a representative method to call: prefer common primary names, fall back to first
    const PREFERRED = [
      "execute",
      "handle",
      "get",
      "list",
      "create",
      "info",
      "log",
      "map",
      "resolve",
      "build"
    ];
    const pick =
      sym.interfaceMembers && sym.interfaceMembers.length > 0
        ? (PREFERRED.map(p =>
            sym.interfaceMembers!.find(
              m => m.signature.startsWith(p + "(") || m.signature.startsWith(p + "<")
            )
          ).find(Boolean) ?? sym.interfaceMembers[0])
        : null;
    // Strip generic type params from call site (e.g. "map<T extends X>" -> "map")
    const methodName = pick ? pick.signature.split("(")[0].split("<")[0].trim() : null;
    const isAsync = pick ? pick.signature.includes("Promise<") : false;

    lines.push(`import { ${sym.name} } from "${importPath}";`);
    lines.push(``);
    lines.push(`class MyImpl implements MyUseCase.Interface {`);
    lines.push(`    public constructor(private ${paramName}: ${sym.name}.Interface) {}`);
    lines.push(``);
    lines.push(`    public async execute(/* ... */): Promise<void> {`);
    if (methodName) {
      lines.push(`        ${isAsync ? "await " : ""}this.${paramName}.${methodName}(/* ... */);`);
    }
    lines.push(`    }`);
    lines.push(`}`);
    lines.push(``);
    lines.push(`export default MyUseCase.createImplementation({`);
    lines.push(`    implementation: MyImpl,`);
    lines.push(`    dependencies: [${sym.name}]`);
    lines.push(`});`);
  }

  // file is declared in each branch above
  const file =
    sym.abstractionKind === "eventHandler" ? "extensions/MyHandler.ts" : "extensions/MyImpl.ts";
  return { file, body: lines.join("\n") };
}

function renderSymbolSection(
  sym: ExtractedSymbol,
  importPath: string,
  headingLevel: 2 | 4 = 2
): string {
  const label = kindLabel(sym);
  const lines: string[] = [];
  const hashes = "#".repeat(headingLevel);

  lines.push(`${hashes} \`${sym.name}\``);
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

  // -------------------------------------------------------------------------
  // Abstraction: rich rendering
  // -------------------------------------------------------------------------
  if (sym.kind === "abstraction") {
    // Interface section
    if (sym.interfaceMembers && sym.interfaceMembers.length > 0) {
      lines.push(`**Interface \`${sym.name}.Interface\`:**`);
      lines.push("");
      lines.push("```typescript");
      lines.push(`interface ${sym.name}.Interface {`);
      for (const m of sym.interfaceMembers) {
        if (m.jsDoc) {
          for (const docLine of m.jsDoc.split("\n")) {
            lines.push(`    // ${docLine}`);
          }
        }
        lines.push(`    ${m.signature};`);
      }
      lines.push("}");
      lines.push("```");
      lines.push("");
    }

    // Event payload section
    if (
      sym.abstractionKind === "eventHandler" &&
      sym.eventPayloadFields &&
      sym.eventPayloadFields.length > 0
    ) {
      lines.push(`**Event payload \`${sym.eventPayloadName ?? "payload"}\`:**`);
      lines.push("");
      lines.push("```typescript");
      lines.push(`interface ${sym.eventPayloadName ?? "Payload"} {`);
      for (const f of sym.eventPayloadFields) {
        lines.push(`    ${f.name}${f.optional ? "?" : ""}: ${f.typeText};`);
      }
      lines.push("}");
      lines.push("```");
      lines.push("");
    }

    // Namespace types section
    if (sym.namespaceTypes && sym.namespaceTypes.length > 0) {
      lines.push(`**Types:**`);
      lines.push("");
      lines.push("```typescript");
      lines.push(`namespace ${sym.name} {`);
      for (const t of sym.namespaceTypes) {
        lines.push(`    type ${t.name} = ${t.value};`);
      }
      lines.push("}");
      lines.push("```");
      lines.push("");
    }

    // Usage snippet
    const usage = renderUsageSnippet(sym, importPath);
    if (usage) {
      lines.push(`**Usage:**`);
      lines.push("");
      lines.push(`\`\`\`typescript ${usage.file}`);
      lines.push(usage.body);
      lines.push("```");
      lines.push("");
    }

    return lines.join("\n");
  }

  // -------------------------------------------------------------------------
  // Plain declaration
  // -------------------------------------------------------------------------
  if (sym.declarationText && sym.declarationText.length > 0) {
    lines.push("```typescript");
    lines.push(sym.declarationText);
    lines.push("```");
    lines.push("");
  }

  // Namespace members (raw, for non-abstraction namespaces)
  if (sym.kind === "namespace" && sym.namespaceMembers.length > 0) {
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
  lines.push(`import {SymbolList} from "@/components/SymbolList";`);
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
    const groups = groupSymbols(doc.relPath, doc.symbols);
    const hasMultipleGroups = groups.length > 1;

    // Pre-sort symbols A-Z within each group
    const sortedGroups = groups.map(g => ({
      ...g,
      symbols: [...g.symbols].sort((a, b) => a.name.localeCompare(b.name))
    }));

    // --- All chip lists first, grouped by section heading ---
    for (const group of sortedGroups) {
      if (hasMultipleGroups && group.title) {
        lines.push(`### ${group.title}`);
        lines.push("");
      }
      const symbolsJson = group.symbols
        .map(sym => {
          const anchor = slugify(sym.name);
          return `{ name: "${sym.name}", anchor: "${anchor}" }`;
        })
        .join(", ");
      lines.push(`<SymbolList symbols={[${symbolsJson}]} />`);
      lines.push("");
    }

    // --- Symbol detail sections below ---
    const headingLevel = hasMultipleGroups ? 4 : 2;
    for (const group of sortedGroups) {
      if (hasMultipleGroups && group.title) {
        lines.push(`### ${group.title}`);
        lines.push("");
      }
      for (const sym of group.symbols) {
        lines.push(renderSymbolSection(sym, `webiny/${doc.relPath}`, headingLevel));
      }
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

// Sub-domains that get their own sub-group within a layer
// key: "layer/subdomain", value: preferred landing link
const SUBDOMAIN_LANDING: Record<string, string> = {
  "api/cms": "reference/api/cms/entry",
  "api/website-builder": "reference/api/website-builder/page",
  "api/security": "reference/api/security",
  "admin/cms": "reference/admin/cms",
  "admin/website-builder": "reference/admin/website-builder"
};

// Preferred landing page for each top-level layer group
const LAYER_LANDING: Record<string, string> = {
  api: "reference/api/cms/entry",
  admin: "reference/admin",
  infra: "reference/infra/overview",
  cli: "reference/cli/overview"
};

/**
 * Some relPaths end in "index" which Next.js treats as a directory index route,
 * causing 404s. Map those to a non-index output path here.
 * Key: relPath (e.g. "cli/index"), Value: output path WITHOUT extension (e.g. "cli/overview")
 */
const OUTPUT_PATH_OVERRIDE: Record<string, string> = {
  "cli/index": "cli/overview",
  "infra/index": "infra/overview"
};

/** Return the output path for a given relPath (may be overridden to avoid index routes). */
function toOutputPath(relPath: string): string {
  return OUTPUT_PATH_OVERRIDE[relPath] ?? relPath;
}

type NavGroupWithLink = NavGroup & { link: string };

function makeGroup(title: string, link: string): NavGroupWithLink {
  return { title, link, pages: [] } as NavGroupWithLink;
}

// Explicit layer order for navigation
const LAYER_ORDER = ["extensions", "admin", "api", "cli", "infra"];

function buildNavTree(entryPoints: EntryPointDoc[]): NavGroup {
  const root: NavGroup = { title: "Reference", pages: [] };

  // Layer map: "api" | "admin" | "infra" | "cli" | "extensions"
  const byLayer = new Map<string, EntryPointDoc[]>();
  for (const ep of entryPoints) {
    const layer = ep.relPath.split("/")[0];
    if (!byLayer.has(layer)) byLayer.set(layer, []);
    byLayer.get(layer)!.push(ep);
  }

  // Sort layers by explicit order, unknown layers go to the end alphabetically
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
      // Single entry (extensions) — flat page
      root.pages.push({ link: `reference/${toOutputPath(eps[0].relPath)}` });
      continue;
    }

    const layerGroup = makeGroup(
      toTitle(layer),
      LAYER_LANDING[layer] ?? `reference/${toOutputPath(eps[0].relPath)}`
    );

    // Within this layer, group by sub-domain (second segment) when applicable
    // Sub-domains: cms, website-builder, security — anything else is flat
    const SUB_DOMAINS = ["cms", "website-builder", "security"];
    const bySubDomain = new Map<string, EntryPointDoc[]>();
    const flat: EntryPointDoc[] = [];

    // Sub-domain index pages: 2-part paths where the second segment is a sub-domain
    // e.g. "api/security" → becomes the "Overview" first child of the Security group
    const subDomainIndex = new Map<string, EntryPointDoc>();

    for (const ep of eps) {
      const parts = ep.relPath.split("/"); // e.g. ["api","cms","entry"]
      if (parts.length === 2 && SUB_DOMAINS.includes(parts[1])) {
        subDomainIndex.set(parts[1], ep);
      } else if (parts.length >= 3 && SUB_DOMAINS.includes(parts[1])) {
        const subDomain = parts[1];
        if (!bySubDomain.has(subDomain)) bySubDomain.set(subDomain, []);
        bySubDomain.get(subDomain)!.push(ep);
      } else {
        flat.push(ep);
      }
    }

    // Add flat items (e.g. api, api/logger, api/graphql…)
    // Root page (landing) always goes first, rest in their natural order.
    const layerLanding = LAYER_LANDING[layer] ?? `reference/${toOutputPath(eps[0].relPath)}`;
    const rootFlat = flat.filter(
      ep => `reference/${toOutputPath(ep.relPath)}` === layerLanding || ep.relPath === layer
    );
    const otherFlat = flat.filter(ep => !rootFlat.includes(ep));

    for (const ep of [...rootFlat, ...otherFlat]) {
      const isLayerRoot = rootFlat.includes(ep);
      const title = isLayerRoot ? "Root" : ep.title;
      layerGroup.pages.push({ link: `reference/${toOutputPath(ep.relPath)}`, title });
    }

    // Add sub-domain groups — index page is "Overview" first child, then sub-pages
    for (const [subDomain, subEps] of Array.from(bySubDomain.entries())) {
      const key = `${layer}/${subDomain}`;
      const subLanding = SUBDOMAIN_LANDING[key] ?? `reference/${toOutputPath(subEps[0].relPath)}`;
      const subGroup = makeGroup(toTitle(subDomain), subLanding);
      const indexEp = subDomainIndex.get(subDomain);
      if (indexEp) {
        subGroup.pages.push({
          link: `reference/${toOutputPath(indexEp.relPath)}`,
          title: "Root"
        });
      }
      for (const ep of subEps) {
        subGroup.pages.push({ link: `reference/${toOutputPath(ep.relPath)}`, title: ep.title });
      }
      layerGroup.pages.push(subGroup);
    }

    root.pages.push(layerGroup);
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
  PKG_MAP = pkgMap;

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
      symbols: mergeNamespaceSymbols(symbols)
    };

    docs.push(doc);
    console.log(` ${symbols.length} symbols`);
  }

  // Write MDX + .ai.txt files
  console.log("\nWriting documentation files...");

  for (const doc of docs) {
    const outputPath = toOutputPath(doc.relPath);
    const dir = join(REF_DIR, dirname(outputPath));
    mkdirSync(dir, { recursive: true });

    const mdxPath = join(REF_DIR, outputPath + ".mdx");
    const aiTxtPath = join(REF_DIR, outputPath + ".ai.txt");

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
    console.log(`  [write] reference/${outputPath}.mdx (${doc.symbols.length} symbols)`);
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
