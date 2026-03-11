# MDX/.ai.txt Pairing Validation Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Create a TypeScript validation script that ensures every `.mdx` file in `docs/developer-docs/6.0.x/` has a corresponding `.ai.txt` companion file (and vice versa), with configurable exceptions via glob patterns.

**Architecture:** Standalone TypeScript script executed via tsx, reading configuration from JSON file. Uses globby for file scanning and minimatch for glob pattern matching. Bidirectional validation with clear error reporting.

**Tech Stack:** TypeScript, tsx (runtime), globby (file scanning), minimatch (via globby), fs-extra (file operations)

---

## Task 1: Add Dependencies

**Files:**
- Modify: `package.json` (devDependencies section)

**Step 1: Add tsx to devDependencies**

Add to the `devDependencies` section:
```json
"tsx": "^4.21.0"
```

**Step 2: Install dependencies**

Run: `yarn install`
Expected: tsx installed successfully

**Step 3: Verify tsx works**

Run: `yarn tsx --version`
Expected: Version number printed (e.g., "4.21.0")

**Step 4: Commit**

```bash
git add package.json yarn.lock
git commit -m "build: add tsx for TypeScript script execution"
```

---

## Task 2: Create Configuration File

**Files:**
- Create: `.mdx-validation.json` (project root)

**Step 1: Create config file with current exceptions**

Create `.mdx-validation.json` in project root:
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

**Step 2: Verify JSON is valid**

Run: `cat .mdx-validation.json | node -e "JSON.parse(require('fs').readFileSync(0, 'utf-8'))"`
Expected: No errors (silent success)

**Step 3: Commit**

```bash
git add .mdx-validation.json
git commit -m "feat: add MDX validation configuration file"
```

---

## Task 3: Create Script Skeleton with Types

**Files:**
- Create: `scripts/validate-mdx-pairing.ts`

**Step 1: Create script file with types and imports**

Create `scripts/validate-mdx-pairing.ts`:
```typescript
import { readFileSync, existsSync } from "fs";
import { join } from "path";
import { globby } from "globby";
import minimatch from "minimatch";

interface Config {
  targetDir: string;
  exceptions: string[];
}

interface ValidationResult {
  mdxWithoutAiTxt: string[];
  aiTxtWithoutMdx: string[];
}

function main(): void {
  console.log("MDX/.ai.txt Validation Script");
  process.exit(0);
}

main();
```

**Step 2: Test script runs**

Run: `yarn tsx scripts/validate-mdx-pairing.ts`
Expected: Prints "MDX/.ai.txt Validation Script" and exits cleanly

**Step 3: Commit**

```bash
git add scripts/validate-mdx-pairing.ts
git commit -m "feat: add validation script skeleton with TypeScript types"
```

---

## Task 4: Implement Config Loading

**Files:**
- Modify: `scripts/validate-mdx-pairing.ts`

**Step 1: Add loadConfig function**

Add after interface definitions:
```typescript
function loadConfig(): Config {
  const configPath = ".mdx-validation.json";

  if (!existsSync(configPath)) {
    throw new Error(`Config file not found: ${configPath}`);
  }

  let configContent: string;
  try {
    configContent = readFileSync(configPath, "utf-8");
  } catch (error) {
    throw new Error(`Cannot read config file: ${configPath}`);
  }

  let config: any;
  try {
    config = JSON.parse(configContent);
  } catch (error) {
    throw new Error(`Invalid JSON in ${configPath}`);
  }

  // Validate required fields
  if (!config.targetDir || typeof config.targetDir !== "string") {
    throw new Error("Config missing required field: targetDir");
  }

  if (!Array.isArray(config.exceptions)) {
    throw new Error("Config field 'exceptions' must be an array");
  }

  return {
    targetDir: config.targetDir,
    exceptions: config.exceptions,
  };
}
```

**Step 2: Update main to use loadConfig**

Replace main function:
```typescript
function main(): void {
  try {
    const config = loadConfig();
    console.log(`✓ Config loaded: ${config.targetDir}`);
    console.log(`✓ Exceptions: ${config.exceptions.length}`);
    process.exit(0);
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error: ${error.message}`);
    }
    process.exit(2);
  }
}
```

**Step 3: Test config loading**

Run: `yarn tsx scripts/validate-mdx-pairing.ts`
Expected:
```
✓ Config loaded: docs/developer-docs/6.0.x
✓ Exceptions: 4
```

**Step 4: Test error handling - rename config temporarily**

Run: `mv .mdx-validation.json .mdx-validation.json.bak && yarn tsx scripts/validate-mdx-pairing.ts`
Expected: `Error: Config file not found: .mdx-validation.json`

Run: `mv .mdx-validation.json.bak .mdx-validation.json`
Expected: Config restored

**Step 5: Commit**

```bash
git add scripts/validate-mdx-pairing.ts
git commit -m "feat: implement config loading with validation"
```

---

## Task 5: Implement File Scanning

**Files:**
- Modify: `scripts/validate-mdx-pairing.ts`

**Step 1: Add scanFiles function**

Add after loadConfig function:
```typescript
async function scanFiles(baseDir: string, pattern: string): Promise<string[]> {
  const targetPath = join(process.cwd(), baseDir);

  if (!existsSync(targetPath)) {
    throw new Error(`Target directory not found: ${baseDir}`);
  }

  const files = await globby(pattern, {
    cwd: targetPath,
    onlyFiles: true,
  });

  return files.sort();
}
```

**Step 2: Update main to scan files**

Replace main function:
```typescript
async function main(): Promise<void> {
  try {
    const config = loadConfig();

    // Scan for .mdx and .ai.txt files
    const mdxFiles = await scanFiles(config.targetDir, "**/*.mdx");
    const aiTxtFiles = await scanFiles(config.targetDir, "**/*.ai.txt");

    console.log(`✓ Found ${mdxFiles.length} .mdx files`);
    console.log(`✓ Found ${aiTxtFiles.length} .ai.txt files`);

    process.exit(0);
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error: ${error.message}`);
    }
    process.exit(2);
  }
}

main();
```

**Step 3: Test file scanning**

Run: `yarn tsx scripts/validate-mdx-pairing.ts`
Expected:
```
✓ Found 30 .mdx files
✓ Found 26 .ai.txt files
```

**Step 4: Commit**

```bash
git add scripts/validate-mdx-pairing.ts
git commit -m "feat: implement file scanning with globby"
```

---

## Task 6: Implement Exception Filtering

**Files:**
- Modify: `scripts/validate-mdx-pairing.ts`

**Step 1: Add applyExceptions function**

Add after scanFiles function:
```typescript
function applyExceptions(files: string[], patterns: string[]): string[] {
  if (patterns.length === 0) {
    return files;
  }

  return files.filter((file) => {
    // Check if file matches any exception pattern
    for (const pattern of patterns) {
      if (minimatch(file, pattern)) {
        return false; // Exclude this file
      }
    }
    return true; // Keep this file
  });
}
```

**Step 2: Update main to apply exceptions**

Replace the scanning section in main:
```typescript
    // Scan for .mdx and .ai.txt files
    const allMdxFiles = await scanFiles(config.targetDir, "**/*.mdx");
    const aiTxtFiles = await scanFiles(config.targetDir, "**/*.ai.txt");

    // Apply exceptions to .mdx files
    const mdxFiles = applyExceptions(allMdxFiles, config.exceptions);

    console.log(`✓ Found ${allMdxFiles.length} .mdx files`);
    console.log(`✓ After exceptions: ${mdxFiles.length} .mdx files to validate`);
    console.log(`✓ Found ${aiTxtFiles.length} .ai.txt files`);
```

**Step 3: Test exception filtering**

Run: `yarn tsx scripts/validate-mdx-pairing.ts`
Expected:
```
✓ Found 30 .mdx files
✓ After exceptions: 26 .mdx files to validate
✓ Found 26 .ai.txt files
```

**Step 4: Commit**

```bash
git add scripts/validate-mdx-pairing.ts
git commit -m "feat: implement exception filtering with glob patterns"
```

---

## Task 7: Implement Bidirectional Validation

**Files:**
- Modify: `scripts/validate-mdx-pairing.ts`

**Step 1: Add validatePairing function**

Add after applyExceptions function:
```typescript
function validatePairing(
  mdxFiles: string[],
  aiTxtFiles: string[]
): ValidationResult {
  const result: ValidationResult = {
    mdxWithoutAiTxt: [],
    aiTxtWithoutMdx: [],
  };

  // Create sets for efficient lookup
  const mdxSet = new Set(mdxFiles.map((f) => f.replace(/\.mdx$/, "")));
  const aiTxtSet = new Set(aiTxtFiles.map((f) => f.replace(/\.ai\.txt$/, "")));

  // Check for .mdx files without .ai.txt
  for (const mdxFile of mdxFiles) {
    const baseName = mdxFile.replace(/\.mdx$/, "");
    if (!aiTxtSet.has(baseName)) {
      result.mdxWithoutAiTxt.push(mdxFile);
    }
  }

  // Check for .ai.txt files without .mdx
  for (const aiTxtFile of aiTxtFiles) {
    const baseName = aiTxtFile.replace(/\.ai\.txt$/, "");
    if (!mdxSet.has(baseName)) {
      result.aiTxtWithoutMdx.push(aiTxtFile);
    }
  }

  return result;
}
```

**Step 2: Update main to perform validation**

Replace the console.log section in main with:
```typescript
    console.log(`✓ Found ${allMdxFiles.length} .mdx files`);
    console.log(`✓ After exceptions: ${mdxFiles.length} .mdx files to validate`);
    console.log(`✓ Found ${aiTxtFiles.length} .ai.txt files`);

    // Validate pairing
    const result = validatePairing(mdxFiles, aiTxtFiles);

    // Temporary debug output
    console.log(`\nValidation result:`);
    console.log(`  Missing .ai.txt: ${result.mdxWithoutAiTxt.length}`);
    console.log(`  Orphaned .ai.txt: ${result.aiTxtWithoutMdx.length}`);
```

**Step 3: Test validation logic**

Run: `yarn tsx scripts/validate-mdx-pairing.ts`
Expected:
```
✓ Found 30 .mdx files
✓ After exceptions: 26 .mdx files to validate
✓ Found 26 .ai.txt files

Validation result:
  Missing .ai.txt: 0
  Orphaned .ai.txt: 0
```

**Step 4: Commit**

```bash
git add scripts/validate-mdx-pairing.ts
git commit -m "feat: implement bidirectional validation logic"
```

---

## Task 8: Implement Output Formatting and Exit Codes

**Files:**
- Modify: `scripts/validate-mdx-pairing.ts`

**Step 1: Add printResults function**

Add after validatePairing function:
```typescript
function printResults(result: ValidationResult): number {
  const hasIssues =
    result.mdxWithoutAiTxt.length > 0 || result.aiTxtWithoutMdx.length > 0;

  if (!hasIssues) {
    console.log("✓ All .mdx/.ai.txt files are properly paired");
    return 0;
  }

  console.log("✗ Validation failed\n");

  if (result.mdxWithoutAiTxt.length > 0) {
    console.log("Missing .ai.txt files:");
    for (const file of result.mdxWithoutAiTxt) {
      console.log(`  - ${file}`);
    }
    console.log("");
  }

  if (result.aiTxtWithoutMdx.length > 0) {
    console.log("Orphaned .ai.txt files (no matching .mdx):");
    for (const file of result.aiTxtWithoutMdx) {
      console.log(`  - ${file}`);
    }
    console.log("");
  }

  return 1;
}
```

**Step 2: Update main to use printResults**

Replace the validation result section:
```typescript
    // Validate pairing
    const result = validatePairing(mdxFiles, aiTxtFiles);

    // Print results and exit
    const exitCode = printResults(result);
    process.exit(exitCode);
```

**Step 3: Test success case**

Run: `yarn tsx scripts/validate-mdx-pairing.ts`
Expected: `✓ All .mdx/.ai.txt files are properly paired`

Check exit code:
Run: `yarn tsx scripts/validate-mdx-pairing.ts; echo "Exit code: $?"`
Expected: `Exit code: 0`

**Step 4: Test failure case - temporarily remove an exception**

Edit `.mdx-validation.json`, remove one exception (e.g., `"get-started/welcome.mdx"`):
```json
{
  "targetDir": "docs/developer-docs/6.0.x",
  "exceptions": [
    "get-started/install-webiny.mdx",
    "overview/pricing.mdx",
    "overview/features/security.mdx"
  ]
}
```

Run: `yarn tsx scripts/validate-mdx-pairing.ts; echo "Exit code: $?"`
Expected:
```
✗ Validation failed

Missing .ai.txt files:
  - get-started/welcome.mdx

Exit code: 1
```

Restore the exception in `.mdx-validation.json`.

**Step 5: Commit**

```bash
git add scripts/validate-mdx-pairing.ts
git commit -m "feat: implement output formatting with exit codes"
```

---

## Task 9: Add Package.json Script

**Files:**
- Modify: `package.json`

**Step 1: Add validate:mdx script**

Add to the `scripts` section in package.json:
```json
"validate:mdx": "tsx scripts/validate-mdx-pairing.ts"
```

**Step 2: Test the new script**

Run: `yarn validate:mdx`
Expected: `✓ All .mdx/.ai.txt files are properly paired`

**Step 3: Verify exit code**

Run: `yarn validate:mdx; echo "Exit code: $?"`
Expected: `Exit code: 0`

**Step 4: Commit**

```bash
git add package.json
git commit -m "feat: add validate:mdx script to package.json"
```

---

## Task 10: Add Script Header Comments

**Files:**
- Modify: `scripts/validate-mdx-pairing.ts`

**Step 1: Add file header with documentation**

Add at the top of the file:
```typescript
/**
 * MDX/.ai.txt Pairing Validation Script
 *
 * Validates that every .mdx file in docs/developer-docs/6.0.x/ has a corresponding
 * .ai.txt companion file, and vice versa.
 *
 * Configuration: .mdx-validation.json (project root)
 * Usage: yarn validate:mdx
 *
 * Exit codes:
 *   0 - All files properly paired
 *   1 - Validation failed (missing pairs found)
 *   2 - Fatal error (config/directory issues)
 */

import { readFileSync, existsSync } from "fs";
// ... rest of imports
```

**Step 2: Verify script still works**

Run: `yarn validate:mdx`
Expected: `✓ All .mdx/.ai.txt files are properly paired`

**Step 3: Commit**

```bash
git add scripts/validate-mdx-pairing.ts
git commit -m "docs: add header comments to validation script"
```

---

## Task 11: Manual Testing

**Files:**
- None (testing only)

**Step 1: Test success case**

Run: `yarn validate:mdx`
Expected: Success message, exit 0

**Step 2: Test missing .ai.txt case**

1. Temporarily rename an .ai.txt file:
   ```bash
   mv docs/developer-docs/6.0.x/basic/di.ai.txt docs/developer-docs/6.0.x/basic/di.ai.txt.bak
   ```

2. Run validation:
   ```bash
   yarn validate:mdx
   ```
   Expected:
   ```
   ✗ Validation failed

   Missing .ai.txt files:
     - basic/di.mdx
   ```

3. Restore file:
   ```bash
   mv docs/developer-docs/6.0.x/basic/di.ai.txt.bak docs/developer-docs/6.0.x/basic/di.ai.txt
   ```

**Step 3: Test orphaned .ai.txt case**

1. Temporarily rename an .mdx file:
   ```bash
   mv docs/developer-docs/6.0.x/basic/result.mdx docs/developer-docs/6.0.x/basic/result.mdx.bak
   ```

2. Run validation:
   ```bash
   yarn validate:mdx
   ```
   Expected:
   ```
   ✗ Validation failed

   Orphaned .ai.txt files (no matching .mdx):
     - basic/result.ai.txt
   ```

3. Restore file:
   ```bash
   mv docs/developer-docs/6.0.x/basic/result.mdx.bak docs/developer-docs/6.0.x/basic/result.mdx
   ```

**Step 4: Test exception patterns**

1. Add a glob exception to `.mdx-validation.json`:
   ```json
   "exceptions": [
     "get-started/**",
     "overview/**"
   ]
   ```

2. Run validation:
   ```bash
   yarn validate:mdx
   ```
   Expected: Success (4 files excluded by glob patterns)

3. Restore original exceptions in `.mdx-validation.json`

**Step 5: Test config error handling**

1. Break the JSON:
   ```bash
   echo '{invalid json}' > .mdx-validation.json.broken
   mv .mdx-validation.json .mdx-validation.json.good
   mv .mdx-validation.json.broken .mdx-validation.json
   ```

2. Run validation:
   ```bash
   yarn validate:mdx
   ```
   Expected: `Error: Invalid JSON in .mdx-validation.json`

3. Restore config:
   ```bash
   mv .mdx-validation.json.good .mdx-validation.json
   ```

**Step 6: Final verification**

Run: `yarn validate:mdx`
Expected: `✓ All .mdx/.ai.txt files are properly paired`

---

## Task 12: Update Documentation

**Files:**
- Create: `docs/developer-docs/6.0.x/validation.md` (optional, if needed)
- Modify: `README.md` (if validation should be documented there)

**Step 1: Add validation section to README (if applicable)**

If the project README has a "Development" or "Scripts" section, add:
```markdown
### Validating Documentation

Ensure all `.mdx` files have corresponding `.ai.txt` companion files:

\`\`\`bash
yarn validate:mdx
\`\`\`

Configuration: `.mdx-validation.json`
```

**Step 2: Commit (if changes made)**

```bash
git add README.md
git commit -m "docs: document MDX validation script"
```

---

## Task 13: Final Commit and Summary

**Files:**
- None (summary only)

**Step 1: Review git log**

Run: `git log --oneline -15`
Expected: See all commits from this implementation

**Step 2: Verify clean working directory**

Run: `git status`
Expected: `nothing to commit, working tree clean`

**Step 3: Final test**

Run: `yarn validate:mdx`
Expected: `✓ All .mdx/.ai.txt files are properly paired`

**Step 4: Summary**

Implementation complete:
- ✓ TypeScript validation script with type safety
- ✓ JSON configuration with glob pattern support
- ✓ Bidirectional validation (both directions)
- ✓ Clear output formatting
- ✓ Proper exit codes (0=success, 1=failure, 2=error)
- ✓ Package.json integration (yarn validate:mdx)
- ✓ Comprehensive error handling
- ✓ Manual testing completed

Ready for CI/build integration.

---

## Future Integration

**CI/GitHub Actions:**
Add to `.github/workflows/ci.yml`:
```yaml
- name: Validate MDX pairing
  run: yarn validate:mdx
```

**Pre-build validation:**
Update `build` script in package.json:
```json
"build": "yarn validate:mdx && yarn generate && next build"
```

**Pre-commit hook (optional):**
Add to `.husky/pre-commit` or similar:
```bash
yarn validate:mdx
```
