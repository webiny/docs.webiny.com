# Project Instructions

## Critical Project Conventions

### Package Manager

- **ALWAYS use `yarn`, NEVER use `npm`** - This project exclusively uses Yarn
- All script execution: `yarn <script-name>`
- All package operations: `yarn add`, `yarn install`, etc.

### Release Notes / Changelog Editing

When editing a generated `changelog.mdx` file, always keep the sibling `changelog.ai.txt` in sync — without being asked:

- **Removed entry** → add the PR number(s) to the `## Skipped PRs` section with a short reason
- **Rewritten entry** → add a note to the `## Manual Rewrites` section

**Writing style for changelog entries:**

- Keep entries user-facing — describe the impact for the user, not internal implementation details (e.g. "X wasn't cached, slowing down the API" rather than "X was fetched outside the cache boundary")
- Entry descriptions should be 1-2 sentences. Bullet lists for key changes only when there are multiple distinct sub-items.

The `generate-changelog.ts` script reads `## Skipped PRs` to avoid re-adding manually removed entries on the next run. If `changelog.ai.txt` is not updated, removed PRs will reappear.

PRs for a release are discovered from the release commits (the `(#NNNN)` references between the previous release tag and this version's tag/branch), **not** from a GitHub milestone — so a forgotten milestone no longer drops entries. Run `yarn generate:changelog --version <v> --dry-run` to preview the PRs that would be included.

**Review markers:** every generated entry gets an MDX comment beneath its `###` heading naming the PR author(s), e.g. `{/* REVIEW-PENDING @author — confirm this entry, then delete this line */}`. Each author must inspect their entry and delete that line. CI (`.github/workflows/check-release-notes.yml`, via `yarn check:changelog-review`) fails on any PR to master that still contains a `REVIEW-PENDING` marker, so release notes cannot be published until every entry is confirmed.

### Validation and Quality

- **MDX/.ai.txt Pairing**: Every `.mdx` file must have a corresponding `.ai.txt` companion file
- Run `yarn validate:mdx` to verify pairing before commits/PRs
- Run `yarn check:changelog-review` to verify no unresolved `REVIEW-PENDING` markers remain
- Exceptions are defined in `.mdx-validation.json` (supports exact paths and glob patterns)
- The validation script (`scripts/validate-mdx-pairing.ts`) checks bidirectionally

### Project Structure

- Documentation: `docs/developer-docs/6.0.x/`
- Plans/design docs: `plans/` (project root)
- Scripts: `scripts/` (TypeScript scripts executed via `tsx`)
- Validation config: `.mdx-validation.json` (project root)

## Documentation Structure

- Documentation files live in `docs/developer-docs/6.0.x/`
- `.mdx` files are the documentation pages
- `.ai.txt` files are AI companion context files — read them to understand the corresponding `.mdx` file (sources, decisions, patterns, tone guidelines)

### Directory Layout

```
docs/developer-docs/6.0.x/
├── admin/              # Admin area customization (whitelabeling)
├── webiny-api/         # API customization (custom domain, extend GraphQL schema, custom routes, universal API keys)
├── cli/                # CLI commands reference (deploy, destroy, watch, etc.)
├── core-concepts/      # Foundational knowledge: architecture, applications, project structure, DI, Result pattern, multi-tenancy, local dev, env vars
├── get-started/        # Welcome, installation, upgrade to Business
├── graphql/            # GraphQL schema building with factory pattern (about, reference, example)
├── headless-cms/       # Largest section — all CMS extensibility
│   ├── builder/        # ModelBuilder, GroupBuilder, FieldBuilder APIs
│   ├── event-handler/  # Entry/model/group lifecycle events
│   ├── examples/       # Private model, single-entry model
│   ├── ui/             # Field renderers
│   └── use-case/       # Entry/model/group business logic
├── infrastructure/     # Cloud infrastructure (database setups, deployment modes, diagrams)
├── overview/           # Pricing, security features
│   └── features/
├── reference/          # API reference (webiny.config.tsx extensions, SDK docs)
├── tasks/              # Background task system (about, reference, management)
├── security/           # Security (universal API keys, programmatic roles and teams)
├── tenant-manager/     # Multi-tenancy management (GraphQL API, model extension)
└── website-builder/    # Website Builder extensibility (Next.js setup, multi-tenant setup, theming, custom components)
```

### Key Patterns

- Each major system follows a consistent taxonomy: **builder** (define structure) / **event-handler** (react to events) / **use-case** (custom business logic)
- `core-concepts/di.mdx` and `core-concepts/result.mdx` are foundational — referenced by all other sections
- `.ai.txt` files contain: source info, key decisions, understanding, code patterns, related docs, and tone guidelines
- Tone is calibrated per doc type: conceptual (about), technical (reference), practical (examples)

### MDX/.ai.txt Pairing Exceptions

Current exceptions (defined in `.mdx-validation.json`):

- `get-started/welcome.mdx` - introductory page
- `get-started/install-webiny.mdx` - installation guide
- `overview/pricing.mdx` - pricing overview
- `overview/features/security.mdx` - security features

## MDX Writing Conventions

### Frontmatter

Every `.mdx` file uses exactly three required fields:

```yaml
---
id: <8-char-alphanumeric> # e.g., "kp9m2xnf" — short, random, lowercase
title: <Title Case>
description: <One-line description>
---
```

Optional fields (rare, only for special pages like welcome): `pageHeader: false`, `fullWidth: true`.

### Page Structure

Every page follows this order:

1. Frontmatter
2. Component imports
3. `<Alert type="success" title="WHAT YOU'LL LEARN">` block with bullet list of questions
4. `## Overview` — always the first H2, 1-3 paragraphs of prose
5. Content sections as H2 (`##`) with H3 (`###`) subsections as needed
6. No H1 headings in the body — the page title comes from frontmatter

### Components

Only two MDX components are used:

#### Alert

`<Alert>` from `@/components/Alert`.

```mdx
import { Alert } from "@/components/Alert";

;
```

Alert types:

- `type="success"` — "WHAT YOU'LL LEARN" opener (every page)
- `type="info"` — supplemental links or context (inline, overview pages)
- `type="warning"` — important cautions (inline, overview pages)

#### Image

- use <Image/> (src/components/Image.js) component when adding images

#### Video

- use `<Video>` (global MDX component, no import needed) for embedded videos
- Video files must be **imported** as ESM imports, not referenced by string path:

  ```mdx
  import myVideo from "./assets/my-video.mp4";

  <Video src={myVideo} controls={true} />
  ```

### Code Blocks

- Language tag is always specified: ` ```typescript ` or ` ```graphql `
- **File path annotations** go after the language tag: ` ```typescript extensions/cms/group/eventHandler/create/beforeCreate.ts `
- Use ` ```tsx ` for `webiny.config.tsx` files
- GraphQL SDL in TypeScript uses `/* GraphQL */` tag: `builder.addTypeDefs(/* GraphQL */ \`...\`)`
- Minimal comments in code — only for pedagogical correct/wrong comparisons using `// ✅ Correct` / `// ❌ Wrong`
- No shell/bash code blocks

### Import Paths in Code Examples

```typescript
// Webiny v6 API imports — use "webiny/" prefix, NOT "@webiny/"
import { ModelFactory } from "webiny/api/cms/model";
import { CreateEntryUseCase } from "webiny/api/cms/entry";
import { Logger } from "webiny/api/logger";
import { Api } from "webiny/extensions";
import { Result } from "webiny/api";

// Local file imports use .js extensions (ESM)
import { BookRepository } from "./abstractions/BookRepository.js";

// Type-only imports
import type { CmsEntry } from "webiny/api";
```

### Text Formatting

- Backticks for: code, class names, method names, type names, package names
- **Bold** for key labels: `**Naming Convention:**`, `**Key Point:**`
- Bullet lists use `-`, not numbered lists (even for sequential steps)
- No emojis in prose
- Inline links use standard markdown: `[text](/{version}/path)`
  - do not use /{version} when writing release notes
- "Webiny" always capitalized

## Tone and Voice

### General Rules

- Concise and technical — no filler, no marketing language in developer docs
- Direct and instructional — "Use `createAbstraction()` to create one"
- Address the reader as "you"
- Explain "why" briefly before showing "how"
- Avoid "we" statements — use "The system provides/offers" instead
- No analogies in published docs (save those for `.ai.txt` context)
- Accessible to junior developers while remaining technically complete

### Per Doc Type

| Doc Type                    | Tone                         | Focus                                             |
| --------------------------- | ---------------------------- | ------------------------------------------------- |
| `about.mdx`                 | Conceptual, accessible       | Why and what, link to reference for how           |
| `reference.mdx`             | Simple, concise, API-focused | Method signatures, minimal examples               |
| `example.mdx`               | Practical, production-ready  | Complete working code, copy-paste friendly        |
| `event-handler/*.mdx`       | Production-ready examples    | When/why to use each event, real-world scenarios  |
| `use-case/*.mdx`            | Technical and complete       | Full abstraction + implementation patterns        |
| `builder/*.mdx`             | Technical reference          | Complete method docs, practical examples per type |
| `management.mdx`            | Practical, operation-focused | Complete examples, error handling                 |
| `get-started/`, `overview/` | Conversational, welcoming    | High-level survey, no code                        |

## TypeScript Code Patterns

### DI Pattern (used in all implementations)

```typescript
import { SomeAbstraction } from "webiny/api/cms/entity";
import { Logger } from "webiny/api/logger";

// Implementation class with Impl suffix
class SomeAbstractionImpl implements SomeAbstraction.Interface {
  public constructor(private logger: Logger.Interface) {}

  public async handle(event: SomeAbstraction.Event): Promise<void> {
    // implementation
  }
}

// Factory registration — MUST be default export
const SomeAbstractionConst = SomeAbstraction.createImplementation({
  implementation: SomeAbstractionImpl,
  dependencies: [Logger]
});

export default SomeAbstractionConst;
```

### Result Pattern (used in all use cases)

```typescript
const result = await someUseCase.execute(params);
if (result.isFail()) {
  // handle error — return early (guard clause)
  return { error: result.error, data: null };
}
const value = result.value;
```

### Namespace Export Pattern (abstractions)

```typescript
export namespace MyAbstraction {
  export type Interface = IMyAbstraction;
  export type Params = IMyAbstractionParams;
  export type Return = IMyAbstractionReturn;
}
```

### Registration in webiny.config.tsx

```tsx
import React from "react";
import { Api } from "webiny/extensions";

export const Extensions = () => {
  return (
    <>
      {/* ... all your other extensions */}
      <Api.Extension src={"/extensions/cms/entity/path/to/file.ts"} />
    </>
  );
};
```

### Event Handler Naming

- Class names: `On[Resource][Before|After][Operation]Handler` (e.g., `OnPageBeforeCreateHandler`)
- Abstraction tokens: `[Resource][Before|After][Operation]Handler` (without "On" prefix)
- "Before" handlers receive `payload.input`; "After" handlers receive the completed entity (e.g., `payload.page`)

## .ai.txt File Format

Each `.ai.txt` companion file contains these sections:

1. `AI Context: [Page Title] ([filename])` — header
2. `Source of Information:` — numbered list of research sources
3. `Key Documentation Decisions:` — editorial choices made
4. `[Topic-specific understanding]` — detailed domain knowledge
5. `[Code patterns/snippets]` — verified TypeScript templates
6. `Related Documents:` — cross-references to sibling docs
7. `Key Code Locations:` — source code paths in the Webiny repo
8. `Tone Guidelines:` — explicit style instructions for the page

### Maintenance

- When new documentation files (`.mdx` or `.ai.txt`) are added, update the directory layout and notes in this AGENTS.md to reflect the changes.
