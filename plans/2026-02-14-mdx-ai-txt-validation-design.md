# MDX/.ai.txt Pairing Validation Design

**Date:** 2026-02-14
**Status:** Approved

## Overview

A TypeScript validation script that ensures every `.mdx` file in `docs/developer-docs/6.0.x/` has a corresponding `.ai.txt` companion file, and vice versa. The script supports configurable exceptions via glob patterns.

## Requirements

### Functional
- Validate bidirectional pairing between `.mdx` and `.ai.txt` files
- Scope limited to `docs/developer-docs/6.0.x/` directory only
- Support glob-based exception patterns
- Simple list output of missing files
- Exit code 1 on validation failure, 0 on success
- Standalone script callable from CI or build process

### Non-Functional
- TypeScript for type safety and code clarity
- JSON configuration for easy maintenance
- Use existing project dependencies where possible

## Architecture

### File Structure

```
.mdx-validation.json              ← Configuration file (root)
scripts/validate-mdx-pairing.ts   ← TypeScript validation script
```

### High-Level Flow

```
1. Load config from .mdx-validation.json
2. Scan docs/developer-docs/6.0.x/ for all .mdx files
3. Scan same directory for all .ai.txt files
4. Apply glob-based exceptions from config
5. Check bidirectional pairing:
   - .mdx files without .ai.txt
   - .ai.txt files without .mdx
6. Output simple list of missing files
7. Exit 1 if any issues, exit 0 if clean
```

### Integration

**Package.json script:**
```json
"scripts": {
  "validate:mdx": "tsx scripts/validate-mdx-pairing.ts"
}
```

**Run with:** `yarn validate:mdx`

**Future integration points:**
- CI/GitHub Actions
- Pre-build validation
- Pre-commit hooks (optional)

## Configuration

### File: `.mdx-validation.json`

Located in project root. Simple JSON format with two fields.

```json
{
  "targetDir": "docs/developer-docs/6.0.x",
  "exceptions": [
    "get-started/welcome.mdx",
    "get-started/install-webiny.mdx",
    "overview/pricing.mdx",
    "overview/features/security.mdx"
  ]
}
```

### Fields

- **`targetDir`** (string, required): Relative path from project root to scan
- **`exceptions`** (array, required): Patterns to exclude from validation
  - Can be empty array `[]` for strict mode
  - Supports exact filenames: `"get-started/welcome.mdx"`
  - Supports glob patterns: `"overview/**"`, `"*/welcome.mdx"`
  - Paths relative to `targetDir`

### Glob Matching

- Uses `minimatch` library (via globby)
- Patterns match against relative paths within targetDir
- Example: `"overview/**"` excludes all files under overview/

## Implementation

### TypeScript Types

```typescript
interface Config {
  targetDir: string;
  exceptions: string[];
}

interface ValidationResult {
  mdxWithoutAiTxt: string[];
  aiTxtWithoutMdx: string[];
}
```

### Key Functions

```typescript
loadConfig(): Config
scanFiles(dir: string, pattern: string): string[]
applyExceptions(files: string[], patterns: string[]): string[]
validatePairing(mdxFiles: string[], aiTxtFiles: string[]): ValidationResult
printResults(result: ValidationResult): void
```

### Algorithm

1. **Load & validate config**
   - Read `.mdx-validation.json`
   - Parse and type-check against `Config` interface
   - Throw exception if config is invalid

2. **Scan for files**
   - Use `globby` to find all `*.mdx` files in `targetDir`
   - Use `globby` to find all `*.ai.txt` files in `targetDir`
   - Store as relative paths from `targetDir`

3. **Apply exceptions**
   - Filter out .mdx files matching exception patterns using `minimatch`
   - Build expected pairs: for each .mdx, expect matching .ai.txt

4. **Bidirectional validation**
   - Check A: Find .mdx files without corresponding .ai.txt
   - Check B: Find .ai.txt files without corresponding .mdx
   - Store both lists in `ValidationResult`

5. **Output & exit**
   - If both lists empty: success message, exit 0
   - If issues found: print relevant list(s), exit 1

## Output Format

### Success (exit 0)

```
✓ All .mdx/.ai.txt files are properly paired
```

### Failure (exit 1)

Only show the direction(s) with issues:

**Missing .ai.txt files:**
```
✗ Validation failed

Missing .ai.txt files:
  - basic/events.mdx
  - tasks/creating.mdx
```

**Orphaned .ai.txt files:**
```
✗ Validation failed

Orphaned .ai.txt files (no matching .mdx):
  - old-feature/deprecated.ai.txt
```

**Note:** In practice, only one direction will have issues at a time. Both having issues would indicate a fundamental problem with the directory structure.

## Error Handling

### Configuration Errors (throw exception)

```typescript
// Missing config file
throw new Error("Config file not found: .mdx-validation.json");

// Invalid JSON
throw new Error("Invalid JSON in .mdx-validation.json");

// Missing required fields
throw new Error("Config missing required field: targetDir");

// Invalid field types
throw new Error("Config field 'exceptions' must be an array");
```

### Directory Errors (throw exception)

```typescript
// Target directory doesn't exist
throw new Error(`Target directory not found: ${config.targetDir}`);

// No read permissions
throw new Error(`Cannot read directory: ${config.targetDir}`);
```

### Graceful Handling (no exception)

- Empty exception array `[]` → proceed with strict validation
- No .mdx files found → exit 0 (nothing to validate)
- No .ai.txt files found → report all .mdx as missing pairs, exit 1
- Glob pattern matches nothing → pattern is ignored (valid scenario)

### Exit Codes

- `0` - Validation passed
- `1` - Validation failed (missing pairs found)
- `>1` - Fatal error (config/directory issues) via uncaught exception

## Dependencies

### New Dependencies
- `tsx` (devDependency) - TypeScript execution runtime

### Existing Dependencies
- `globby` - File pattern matching
- `fs-extra` - File system operations
- `minimatch` - Glob pattern matching (via globby)

## Initial Configuration

The initial `.mdx-validation.json` includes the 4 currently missing files as exceptions:

```json
{
  "targetDir": "docs/developer-docs/6.0.x",
  "exceptions": [
    "get-started/welcome.mdx",
    "get-started/install-webiny.mdx",
    "overview/pricing.mdx",
    "overview/features/security.mdx"
  ]
}
```

## Future Enhancements

Potential additions (not in initial scope):
- `--quiet` flag for CI (suppress success messages)
- `--fix` flag to generate missing .ai.txt stub files
- Multiple target directories
- Custom output formats (JSON, JUnit XML)
- Watch mode for development

## Decisions

1. **TypeScript over JavaScript**: Type safety improves maintainability
2. **tsx over tsc compilation**: Faster iteration, simpler setup
3. **JSON config over TypeScript config**: Simpler for non-code configuration
4. **External config over inline**: Easier to modify without touching script
5. **Bidirectional validation**: Catches both missing files and orphaned files
6. **Glob support**: More flexible than exact file matching
7. **Simple list output**: Easy to parse, clear for humans
8. **Exit 1 on failure**: Standard practice for validation scripts
