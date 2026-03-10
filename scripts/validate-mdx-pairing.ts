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
import { join } from "path";
import globby from "globby";
import minimatch from "minimatch";

interface Config {
  targetDir: string;
  exceptions: string[];
}

interface ValidationResult {
  mdxWithoutAiTxt: string[];
  aiTxtWithoutMdx: string[];
}

function loadConfig(): Config {
  const configPath = ".mdx-validation.json";

  if (!existsSync(configPath)) {
    throw new Error(`Config file not found: ${configPath}`);
  }

  let configContent: string;
  try {
    configContent = readFileSync(configPath, "utf-8");
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    throw new Error(`Cannot read config file: ${configPath} - ${message}`);
  }

  let config: unknown;
  try {
    config = JSON.parse(configContent);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    throw new Error(`Invalid JSON in ${configPath}: ${message}`);
  }

  // Type guard: ensure config is an object
  if (typeof config !== "object" || config === null) {
    throw new Error("Config must be a JSON object");
  }

  // Now we can safely access properties with type assertions
  const configObj = config as Record<string, unknown>;

  // Validate required fields
  if (!configObj.targetDir || typeof configObj.targetDir !== "string") {
    throw new Error("Config missing required field: targetDir");
  }

  if (!Array.isArray(configObj.exceptions)) {
    throw new Error("Config field 'exceptions' must be an array");
  }

  return {
    targetDir: configObj.targetDir,
    exceptions: configObj.exceptions,
  };
}

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

function printResults(result: ValidationResult): number {
  const hasMissingAiTxt = result.mdxWithoutAiTxt.length > 0;
  const hasOrphanedAiTxt = result.aiTxtWithoutMdx.length > 0;

  if (!hasMissingAiTxt && !hasOrphanedAiTxt) {
    console.log("\n✓ All .mdx/.ai.txt files are properly paired");
    return 0;
  }

  console.log("\n✗ Validation failed\n");

  if (hasMissingAiTxt) {
    console.log(`Missing .ai.txt files (${result.mdxWithoutAiTxt.length}):`);
    for (const file of result.mdxWithoutAiTxt) {
      console.log(`  - ${file}`);
    }
    console.log("");
  }

  if (hasOrphanedAiTxt) {
    console.log(`Orphaned .ai.txt files (${result.aiTxtWithoutMdx.length}):`);
    for (const file of result.aiTxtWithoutMdx) {
      console.log(`  - ${file}`);
    }
    console.log("");
  }

  return 1;
}

async function main(): Promise<void> {
  try {
    const config = loadConfig();
    console.log(`✓ Config loaded: ${config.targetDir}`);
    console.log(`✓ Exceptions: ${config.exceptions.length}`);

    const allMdxFiles = await scanFiles(config.targetDir, "**/*.mdx");
    const aiTxtFiles = await scanFiles(config.targetDir, "**/*.ai.txt");

    console.log(`✓ Found ${allMdxFiles.length} .mdx files`);
    const mdxFiles = applyExceptions(allMdxFiles, config.exceptions);
    console.log(`✓ After exceptions: ${mdxFiles.length} .mdx files to validate`);
    console.log(`✓ Found ${aiTxtFiles.length} .ai.txt files`);

    // Validate pairing
    const result = validatePairing(mdxFiles, aiTxtFiles);

    // Print results and exit
    const exitCode = printResults(result);
    process.exit(exitCode);
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error: ${error.message}`);
    }
    process.exit(2);
  }
}

main();
