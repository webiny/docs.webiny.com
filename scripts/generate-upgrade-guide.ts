/**
 * Generates a boilerplate upgrade guide MDX file for a given Webiny release version.
 * Infers the previous version by scanning existing release-notes directories.
 *
 * Usage:
 *   yarn tsx scripts/generate-upgrade-guide.ts --version 6.1.0
 */

import { writeFileSync, mkdirSync, readdirSync } from "fs";
import { join } from "path";
import { valid, lt } from "semver";

// ---------------------------------------------------------------------------
// CLI args
// ---------------------------------------------------------------------------

function parseArgs(): { version: string } {
    const args = process.argv.slice(2);
    const versionIdx = args.indexOf("--version");
    if (versionIdx === -1 || !args[versionIdx + 1]) {
        console.error("Usage: yarn tsx scripts/generate-upgrade-guide.ts --version <version>");
        console.error("Example: yarn tsx scripts/generate-upgrade-guide.ts --version 6.1.0");
        process.exit(1);
    }
    return { version: args[versionIdx + 1] };
}

// ---------------------------------------------------------------------------
// Previous version inference
// ---------------------------------------------------------------------------

function inferPreviousVersion(version: string): string {
    const releaseNotesDir = join(process.cwd(), "docs", "release-notes");

    let existingVersions: string[] = [];
    try {
        existingVersions = readdirSync(releaseNotesDir).filter(
            entry => valid(entry) !== null && lt(entry, version)
        );
    } catch {
        // Directory may not exist yet — fall back gracefully
    }

    if (existingVersions.length > 0) {
        // Sort descending, take the highest version below the target
        existingVersions.sort((a, b) => (lt(a, b) ? 1 : -1));
        const prev = existingVersions[0];
        // Express as {major}.{minor}.x  e.g. "6.0.3" → "6.0.x"
        const [major, minor] = prev.split(".");
        return `${major}.${minor}.x`;
    }

    // Fallback: derive from the target version itself
    const [major, minor] = version.split(".");
    const prevMinor = parseInt(minor, 10) - 1;
    if (prevMinor >= 0) {
        return `${major}.${prevMinor}.x`;
    }
    // If minor is 0, step back a major
    return `${parseInt(major, 10) - 1}.x.x`;
}

// ---------------------------------------------------------------------------
// MDX builder
// ---------------------------------------------------------------------------

function buildUpgradeGuideMdx(version: string, previousVersion: string): string {
    const id = Math.random().toString(36).slice(2, 10);

    return `---
id: ${id}
title: Upgrade from ${previousVersion} to ${version}
description: Learn how to upgrade Webiny from ${previousVersion} to ${version}.
---

import { Alert } from "@/components/Alert";
import { AdditionalNotes } from "@/components/upgrade/AdditionalNotes";

<Alert type="success" title="What you'll learn">

- how to upgrade Webiny from ${previousVersion} to ${version}

</Alert>

<Alert type="info">

Make sure to check out the [${version} changelog](./changelog) to get familiar with the changes introduced in this release.

</Alert>

## Step-by-Step Guide

### 1. Upgrade Webiny Packages

Upgrade all Webiny NPM packages by running the following command:

\`\`\`bash
yarn up "@webiny/*@${version}"
\`\`\`

Once the upgrade has finished, running the \`yarn webiny --version\` command in your terminal should return **${version}**.

### 2. Deploy Your Project

Proceed by redeploying your Webiny project:

\`\`\`bash
# Execute in your project root.
yarn webiny deploy --env {environment}
\`\`\`

<AdditionalNotes />
`;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main(): Promise<void> {
    const { version } = parseArgs();

    if (!valid(version)) {
        console.error(`Invalid version: "${version}". Must be a valid semver string (e.g. 6.1.0).`);
        process.exit(1);
    }

    console.log(`\nGenerating upgrade guide for Webiny ${version}...`);

    const previousVersion = inferPreviousVersion(version);
    console.log(`  Previous version inferred as: ${previousVersion}`);

    const mdx = buildUpgradeGuideMdx(version, previousVersion);

    const outDir = join(process.cwd(), "docs", "release-notes", version);
    mkdirSync(outDir, { recursive: true });
    const outPath = join(outDir, "upgrade-guide.mdx");
    writeFileSync(outPath, mdx, "utf-8");

    console.log(`\n✓ Upgrade guide written to: docs/release-notes/${version}/upgrade-guide.mdx`);
}

main().catch(err => {
    console.error("\nError:", err instanceof Error ? err.message : err);
    process.exit(1);
});
