# Project Instructions

## Startup
- Always read `~/.claude/settings.json` at the start of every conversation.

## Documentation Structure
- Documentation files live in `docs/developer-docs/6.0.x/`
- `.mdx` files are the documentation pages
- `.ai.txt` files are AI companion context files — read them to understand the corresponding `.mdx` file (sources, decisions, patterns, tone guidelines)

### Directory Layout
```
docs/developer-docs/6.0.x/
├── basic/              # Foundational patterns: DI (createAbstraction/createImplementation/createDecorator), Result pattern
├── get-started/        # Welcome + installation guide
├── graphql/            # GraphQL schema building with factory pattern
├── headless-cms/       # Largest section — all CMS extensibility
│   ├── builder/        # ModelBuilder, GroupBuilder, FieldBuilder APIs
│   ├── event-handler/  # Entry/model/group lifecycle events
│   ├── examples/       # Private model, single-entry model
│   ├── ui/             # Field renderers
│   └── use-case/       # Entry/model/group business logic
├── overview/           # Pricing, security features
│   └── features/
├── tasks/              # Background task system (Runner, Context, Controller)
└── website-builder/    # Website Builder extensibility
    ├── event-handler/  # Page/redirect lifecycle events
    └── use-case/       # Page/redirect business logic
```

### Key Patterns
- Each major system follows a consistent taxonomy: **builder** (define structure) / **event-handler** (react to events) / **use-case** (custom business logic)
- `basic/di.mdx` and `basic/result.mdx` are foundational — referenced by all other sections
- `.ai.txt` files contain: source info, key decisions, understanding, code patterns, related docs, and tone guidelines
- Tone is calibrated per doc type: conceptual (about), technical (reference), practical (examples)

### Maintenance
- When new documentation files (`.mdx` or `.ai.txt`) are added, update the directory layout and notes in this CLAUDE.md to reflect the changes.
