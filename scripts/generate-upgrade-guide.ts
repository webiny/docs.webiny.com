/**
 * Generates a boilerplate upgrade guide MDX file for a given Webiny release version.
 * Infers the previous version by scanning existing release-notes directories.
 *
 * Usage:
 *   yarn tsx scripts/generate-upgrade-guide.ts --version 6.1.0
 *
 * Regenerating an existing guide keeps its frontmatter `id` and everything between the
 * custom steps markers below, so release-specific steps survive the release workflows.
 */

import { writeFileSync, mkdirSync, readdirSync, existsSync, readFileSync } from "fs";
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
// Preserving an existing guide
// ---------------------------------------------------------------------------

const CUSTOM_STEPS_START = "{/* custom-steps:start - kept when the guide is regenerated */}";
const CUSTOM_STEPS_END = "{/* custom-steps:end */}";

interface ExistingGuide {
    id?: string;
    customSteps?: string;
}

function readExistingGuide(path: string): ExistingGuide {
    if (!existsSync(path)) {
        return {};
    }
    const content = readFileSync(path, "utf-8");
    const id = content.match(/^id:\s*(\S+)\s*$/m)?.[1];

    const start = content.indexOf(CUSTOM_STEPS_START);
    const end = content.indexOf(CUSTOM_STEPS_END);
    const customSteps =
        start !== -1 && end > start
            ? content.slice(start + CUSTOM_STEPS_START.length, end).trim()
            : undefined;

    return { id, customSteps };
}

// ---------------------------------------------------------------------------
// MDX builder
// ---------------------------------------------------------------------------

function buildUpgradeGuideMdx(
    version: string,
    previousVersion: string,
    existing: ExistingGuide
): string {
    const id = existing.id ?? Math.random().toString(36).slice(2, 10);
    const customSteps = existing.customSteps
        ? `${CUSTOM_STEPS_START}\n\n${existing.customSteps}\n\n${CUSTOM_STEPS_END}\n\n`
        : "";

    // previousVersion is like "6.2.x" — derive example patch versions from it
    const prevBase = previousVersion.replace(".x", "");

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

Upgrade all Webiny packages by running the following command:

\`\`\`bash
yarn webiny upgrade ${version} --debug
\`\`\`

Note that the command above will run upgrades for all available versions of Webiny up to ${version}. If there are upgrades for ${prevBase}.1, ${prevBase}.5, they will be ran.

You can omit the version to upgrade to the latest available:

\`\`\`bash
yarn webiny upgrade --debug
\`\`\`

Once the upgrade has finished, running the \`yarn webiny --version\` command in your terminal should return **${version}**.

<Alert type="info">

If the above command fails or is not available in your setup, you can run the upgrade script directly via \`npx\`:

\`\`\`bash
npx https://github.com/webiny/webiny-upgrades-v6 ${version} --debug
\`\`\`

</Alert>

### 2. Deploy Your Project

Proceed by redeploying your Webiny project:

\`\`\`bash
# Execute in your project root.
yarn webiny deploy --env {environment}
\`\`\`

${customSteps}<AdditionalNotes />
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

    const outDir = join(process.cwd(), "docs", "release-notes", version);
    mkdirSync(outDir, { recursive: true });
    const outPath = join(outDir, "upgrade-guide.mdx");

    const existing = readExistingGuide(outPath);
    if (existing.customSteps) {
        console.log("  Keeping the custom steps from the existing guide.");
    }

    const mdx = buildUpgradeGuideMdx(version, previousVersion, existing);
    writeFileSync(outPath, mdx, "utf-8");

    console.log(`\n✓ Upgrade guide written to: docs/release-notes/${version}/upgrade-guide.mdx`);
}

main().catch(err => {
    console.error("\nError:", err instanceof Error ? err.message : err);
    process.exit(1);
});
