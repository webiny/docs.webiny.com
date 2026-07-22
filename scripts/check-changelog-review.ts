/**
 * Changelog Review-Marker Check
 *
 * The changelog generator inserts a per-item review marker (an MDX comment
 * containing the PR author's handle) beneath every generated entry. Each author
 * is expected to inspect their entry and delete the marker line to confirm it.
 *
 * This script fails if any changelog still contains an unresolved marker, so a
 * release-notes PR cannot be merged/published until every entry has been
 * confirmed. Run in CI on pull requests targeting master.
 *
 * Usage:
 *   yarn tsx scripts/check-changelog-review.ts            # scan all releases
 *   yarn tsx scripts/check-changelog-review.ts --version 6.4.4
 *
 * Exit codes:
 *   0 - No unresolved review markers
 *   1 - Unresolved review markers found
 */

import { readFileSync } from "fs";
import globby from "globby";
import { REVIEW_MARKER } from "./changelog-constants";

interface Finding {
    file: string;
    line: number;
    text: string;
}

function parseArgs(): { version?: string } {
    const args = process.argv.slice(2);
    const idx = args.indexOf("--version");
    if (idx !== -1 && args[idx + 1]) {
        return { version: args[idx + 1] };
    }
    return {};
}

async function main(): Promise<void> {
    const { version } = parseArgs();

    const pattern = version
        ? `docs/release-notes/${version}/changelog.mdx`
        : "docs/release-notes/**/changelog.mdx";

    const files = await globby(pattern);

    if (files.length === 0) {
        console.warn(`No changelog files matched: ${pattern}`);
        process.exit(0);
    }

    const findings: Finding[] = [];
    for (const file of files) {
        const lines = readFileSync(file, "utf-8").split("\n");
        lines.forEach((text, i) => {
            if (text.includes(REVIEW_MARKER)) {
                findings.push({ file, line: i + 1, text: text.trim() });
            }
        });
    }

    if (findings.length === 0) {
        console.log(`✓ No unresolved "${REVIEW_MARKER}" markers in ${files.length} changelog(s).`);
        process.exit(0);
    }

    console.error(`✗ Found ${findings.length} unresolved "${REVIEW_MARKER}" marker(s):\n`);
    for (const f of findings) {
        console.error(`  ${f.file}:${f.line}`);
        console.error(`    ${f.text}`);
    }
    console.error(
        `\nEach author must inspect their changelog entry and delete its ${REVIEW_MARKER} line before the release notes can be published.`
    );
    process.exit(1);
}

main().catch(err => {
    console.error("\nError:", err instanceof Error ? err.message : err);
    process.exit(2);
});
