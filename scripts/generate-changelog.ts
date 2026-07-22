/**
 * Generates a changelog MDX file for a given Webiny release version by:
 *  1. Diffing the previous release tag against this version's tag on webiny/webiny-js
 *     and extracting the PR numbers referenced in the commit messages (`(#1234)`)
 *  2. Fetching each PR and sending them to Claude (claude-opus-4-5) to produce a
 *     structured MDX changelog
 *  3. Writing the result to docs/release-notes/{version}/changelog.mdx
 *
 * PR discovery is commit-based (not milestone-based), so a release still gets a
 * complete changelog even if PRs were never assigned to a milestone.
 *
 * Usage:
 *   yarn tsx scripts/generate-changelog.ts --version 6.1.0
 *
 * Manual edits:
 *   After editing a generated changelog, keep the sibling changelog.ai.txt up to date:
 *   - Removed entry  → add the PR number(s) to the "## Skipped PRs" section
 *   - Rewritten entry → add a note to the "## Manual Rewrites" section
 *   The script reads "## Skipped PRs" to avoid re-adding removed entries on the next run.
 */

import "dotenv/config";
import Anthropic from "@anthropic-ai/sdk";
import { writeFileSync, mkdirSync, readFileSync } from "fs";
import { join } from "path";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface GitHubLabel {
    name: string;
}

interface GitHubTag {
    name: string;
}

interface GitHubCommit {
    commit: { message: string };
}

interface GitHubCompare {
    commits: GitHubCommit[];
}

interface GitHubPull {
    number: number;
    title: string;
    body: string | null;
    labels: GitHubLabel[];
}

interface PullRequest {
    number: number;
    title: string;
    body: string;
    url: string;
}

// ---------------------------------------------------------------------------
// CLI args
// ---------------------------------------------------------------------------

function parseArgs(): { version: string; dryRun: boolean } {
    const args = process.argv.slice(2);
    const versionIdx = args.indexOf("--version");
    if (versionIdx === -1 || !args[versionIdx + 1]) {
        console.error(
            "Usage: yarn tsx scripts/generate-changelog.ts --version <version> [--dry-run]"
        );
        console.error("Example: yarn tsx scripts/generate-changelog.ts --version 6.1.0");
        process.exit(1);
    }
    return { version: args[versionIdx + 1], dryRun: args.includes("--dry-run") };
}

// ---------------------------------------------------------------------------
// GitHub helpers
// ---------------------------------------------------------------------------

const GITHUB_REPO = "webiny/webiny-js";
const GITHUB_API = "https://api.github.com";

async function fetchJson<T>(url: string): Promise<T> {
    const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
    const res = await fetch(url, {
        headers: {
            Accept: "application/vnd.github+json",
            "User-Agent": "webiny-docs-changelog-generator",
            ...(token ? { Authorization: `Bearer ${token}` } : {})
        }
    });
    if (!res.ok) {
        throw new Error(`GitHub API error ${res.status} for ${url}: ${await res.text()}`);
    }
    return res.json() as Promise<T>;
}

/**
 * Like fetchJson, but returns null on 404 instead of throwing — used to probe
 * for a version tag that may not have been created yet.
 */
async function fetchJsonOrNull<T>(url: string): Promise<T | null> {
    const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
    const res = await fetch(url, {
        headers: {
            Accept: "application/vnd.github+json",
            "User-Agent": "webiny-docs-changelog-generator",
            ...(token ? { Authorization: `Bearer ${token}` } : {})
        }
    });
    if (res.status === 404) return null;
    if (!res.ok) {
        throw new Error(`GitHub API error ${res.status} for ${url}: ${await res.text()}`);
    }
    return res.json() as Promise<T>;
}

/**
 * Compares two semver strings. Returns >0 if a>b, <0 if a<b, 0 if equal.
 * Handles the `vX.Y.Z` tag format (leading `v` is stripped).
 */
function compareSemver(a: string, b: string): number {
    const parse = (v: string) => v.replace(/^v/, "").split(".").map(n => parseInt(n, 10) || 0);
    const pa = parse(a);
    const pb = parse(b);
    for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
        const diff = (pa[i] ?? 0) - (pb[i] ?? 0);
        if (diff !== 0) return diff;
    }
    return 0;
}

/**
 * Finds the release tag immediately preceding `version` by fetching all tags and
 * picking the highest one that is strictly lower than the target version.
 */
async function findPreviousTag(version: string): Promise<string> {
    const target = version.replace(/^v/, "");
    const semverTag = /^v?\d+\.\d+\.\d+$/;

    const tags: string[] = [];
    let page = 1;
    while (true) {
        const batch = await fetchJson<GitHubTag[]>(
            `${GITHUB_API}/repos/${GITHUB_REPO}/tags?per_page=100&page=${page}`
        );
        if (batch.length === 0) break;
        tags.push(...batch.map(t => t.name));
        page++;
    }

    const previous = tags
        .filter(t => semverTag.test(t))
        .filter(t => compareSemver(t, target) < 0)
        .sort(compareSemver)
        .pop();

    if (!previous) {
        throw new Error(`Could not determine the previous release tag for ${version}.`);
    }
    return previous;
}

/**
 * Resolves the "head" ref to diff against `base`. Prefers the `vX.Y.Z` tag; if it
 * does not exist yet (release not tagged), falls back to the `X.Y.x` line branch.
 */
async function resolveHeadRef(version: string): Promise<string> {
    const bare = version.replace(/^v/, "");
    const versionTag = `v${bare}`;

    const tag = await fetchJsonOrNull<GitHubTag>(
        `${GITHUB_API}/repos/${GITHUB_REPO}/git/ref/tags/${versionTag}`
    );
    if (tag) return versionTag;

    const [major, minor] = bare.split(".");
    const lineBranch = `${major}.${minor}.x`;
    console.log(
        `  Tag ${versionTag} not found — falling back to the ${lineBranch} branch. ` +
            `Note: this may include commits from later patch releases on the same line.`
    );
    return lineBranch;
}

/**
 * Extracts PR numbers referenced as `(#1234)` in the commit messages between two refs.
 */
async function fetchPRNumbersInRange(base: string, head: string): Promise<number[]> {
    const compare = await fetchJson<GitHubCompare>(
        `${GITHUB_API}/repos/${GITHUB_REPO}/compare/${base}...${head}`
    );

    const numbers = new Set<number>();
    for (const c of compare.commits) {
        for (const match of c.commit.message.matchAll(/\(#(\d+)\)/g)) {
            numbers.add(parseInt(match[1], 10));
        }
    }
    return [...numbers].sort((a, b) => a - b);
}

interface FetchResult {
    prs: PullRequest[];
    noChangelogNumbers: Set<number>;
}

async function fetchPRs(numbers: number[]): Promise<FetchResult> {
    const prs: PullRequest[] = [];
    const noChangelogNumbers = new Set<number>();

    for (const number of numbers) {
        const pull = await fetchJsonOrNull<GitHubPull>(
            `${GITHUB_API}/repos/${GITHUB_REPO}/pulls/${number}`
        );
        // Referenced number that isn't actually a PR (e.g. an issue) — skip it.
        if (!pull) continue;

        const hasNoChangelog = pull.labels.some(l => l.name === "no-changelog");
        if (hasNoChangelog) {
            console.log(`  Skipping PR #${pull.number} (no-changelog): ${pull.title}`);
            noChangelogNumbers.add(pull.number);
            continue;
        }
        prs.push({
            number: pull.number,
            title: pull.title,
            body: pull.body ?? "",
            url: `https://github.com/${GITHUB_REPO}/pull/${pull.number}`
        });
    }

    return { prs, noChangelogNumbers };
}

// ---------------------------------------------------------------------------
// Claude helpers
// ---------------------------------------------------------------------------

const STYLE_REFERENCE = `
Here is a real example of a Webiny changelog MDX body for style/tone reference:

---
## Development

### Introducing the \`webiny-mcp\` Standalone Binary ([#5046](https://github.com/webiny/webiny-js/pull/5046))

MCP configuration was previously handled via the \`webiny configure-mcp\` command in the Webiny CLI,
tying it to Webiny projects. The functionality has been extracted into a dedicated \`webiny-mcp\` binary
that works in any project, not just Webiny. As part of this change, the \`webiny configure-mcp\` command
has been removed — use \`webiny-mcp\` directly instead.

### Fixed Tailwind CSS Watcher Not Tracking the \`/extensions\` Folder

If you were writing Tailwind classes inside the \`/extensions\` folder, those classes would not be
recognized by Tailwind and would be missing from the final CSS output. This has been fixed — the Tailwind
watcher now scans the \`/extensions\` folder alongside Webiny's own packages.

## Webiny SDK

<Alert type="info">

You can try all SDK methods interactively via the [SDK Playground](/core-concepts/webiny-sdk#sdk-playground) built into your Webiny project.

</Alert>

### New \`tenantManager\` and \`fileManager\` Methods

This release adds a number of new SDK methods to the \`tenantManager\` and \`fileManager\` namespaces.

\`\`\`typescript
const result = await sdk.tenantManager.installTenant({
  tenantId: "69b95c6b1c84b00002f7ff2a"
});
\`\`\`
---
`.trim();

const SYSTEM_PROMPT = `
You are a technical writer for Webiny, an open-source serverless CMS platform. Your task is to generate
a developer-facing changelog in MDX format from a list of merged pull requests.

## Output rules

- Output ONLY the MDX body — no frontmatter, no import statements, no \`<GithubRelease />\` tag.
  The script wraps your output in all of that automatically.
- Start directly with the first \`##\` section heading.
- Group changes into logical H2 (\`##\`) sections. Use only sections that have content. Suggested sections:
    - \`## Breaking Changes\` — if any, always list these first
    - \`## Development\`
    - \`## Webiny SDK\`
    - \`## Headless CMS\`
    - \`## Website Builder\`
    - \`## Page Builder\`
    - \`## Admin\`
    - \`## Infrastructure\`
- Each individual change is an H3 (\`###\`) under its section. Include a linked PR reference in the
  heading like this: \`### Some Change Title ([#1234](https://github.com/webiny/webiny-js/pull/1234))\`.
  If multiple PRs are merged into one item, include all of them: \`([#1234](…), [#1235](…))\`.
- Merge related PRs into a single changelog item when they address the same feature or fix.
- **Skip** trivial/internal PRs with no user-facing impact: dependency bumps, CI fixes, chore commits,
  test-only changes, typo fixes, and internal refactors. If a PR title starts with \`chore\`, \`ci\`,
  \`test\`, \`deps\`, or \`refactor\` and the body contains no user-facing changes, skip it entirely.

## Tone and style

- Concise and technical — no filler, no marketing language.
- **Keep entries user-facing.** Describe the impact for the user, not internal implementation details. For example, say "X wasn't cached, slowing down the API" rather than "X was fetched outside the cache boundary". Skip PRs that have no user-facing impact.
- Each entry should be 1-2 sentences. Use a bullet list for key changes only when there are multiple distinct sub-items.
- Start with the problem or the context, then state what changed.
- Address the reader as "you" where natural.
- Backticks for: code, class names, method names, type names, package names, file paths.
- No emojis. "Webiny" always capitalised.
- Use \`\`\`typescript code blocks with real API examples when relevant. Always specify the language tag.
- Do NOT use H1 headings. Do NOT add a "What you'll learn" block.

## MDX conventions

- Code blocks always have a language tag: \`\`\`typescript, \`\`\`graphql, etc.
- Use \`<Alert type="info">\` (no import needed) only when genuinely useful — supplemental tips or
  cross-references. Not every section needs one.
- No shell/bash code blocks.
- Import paths in examples use the \`webiny/\` prefix (NOT \`@webiny/\`),
  e.g. \`import { Result } from "webiny/api"\`.

${STYLE_REFERENCE}
`.trim();

async function generateChangelogBody(prs: PullRequest[], version: string): Promise<string> {
    const apiKey = process.env.CLAUDE_KEY;
    if (!apiKey) {
        throw new Error("CLAUDE_KEY environment variable is not set.");
    }

    const client = new Anthropic({ apiKey });

    const prList = prs
        .map(pr => {
            const body = pr.body.trim() ? `\n\n${pr.body.trim()}` : "";
            return `### PR #${pr.number} (${pr.url}): ${pr.title}${body}`;
        })
        .join("\n\n---\n\n");

    const userMessage = `Generate a changelog for Webiny version ${version} based on the following merged pull requests. Apply all the rules in your system prompt.\n\n${prList}`;

    console.log(`  Sending ${prs.length} PRs to Claude (claude-opus-4-5)...`);

    const message = await client.messages.create({
        model: "claude-opus-4-5",
        max_tokens: 8192,
        system: SYSTEM_PROMPT,
        messages: [{ role: "user", content: userMessage }]
    });

    const textBlock = message.content.find(b => b.type === "text");
    if (!textBlock || textBlock.type !== "text") {
        throw new Error("Claude returned no text content.");
    }

    return textBlock.text.trim();
}

// ---------------------------------------------------------------------------
// Existing changelog helpers
// ---------------------------------------------------------------------------

function extractMentionedPRNumbers(filePath: string): Set<number> {
    try {
        const content = readFileSync(filePath, "utf-8");
        const numbers = new Set<number>();
        for (const match of content.matchAll(/\/pull\/(\d+)/g)) {
            numbers.add(parseInt(match[1], 10));
        }
        return numbers;
    } catch {
        return new Set();
    }
}

function extractSkippedPRNumbers(aiTxtPath: string): Set<number> {
    try {
        const content = readFileSync(aiTxtPath, "utf-8");
        const numbers = new Set<number>();
        const skippedSection = content.match(/## Skipped PRs\n([\s\S]*?)(?=\n## |\s*$)/);
        if (!skippedSection) return numbers;
        for (const match of skippedSection[1].matchAll(/^\s*(\d+)/gm)) {
            numbers.add(parseInt(match[1], 10));
        }
        return numbers;
    } catch {
        return new Set();
    }
}

function removePRSections(
    content: string,
    prNumbers: Set<number>
): { updated: string; removed: number[] } {
    const lines = content.split("\n");
    const removed: number[] = [];
    const outputLines: string[] = [];
    let skipping = false;

    for (const line of lines) {
        if (line.startsWith("### ")) {
            const matches = [...line.matchAll(/\/pull\/(\d+)/g)];
            const nums = matches.map(m => parseInt(m[1], 10));
            const matched = nums.filter(n => prNumbers.has(n));
            if (matched.length > 0) {
                skipping = true;
                removed.push(...matched);
                continue;
            }
            skipping = false;
        } else if (line.startsWith("## ")) {
            skipping = false;
        }

        if (!skipping) {
            outputLines.push(line);
        }
    }

    // Collapse runs of 3+ blank lines down to 2
    const updated = outputLines.join("\n").replace(/\n{3,}/g, "\n\n");
    return { updated, removed };
}

// ---------------------------------------------------------------------------
// Duplicate section merger
// ---------------------------------------------------------------------------

function mergeDuplicateH2Sections(content: string): { merged: string; duplicates: string[] } {
    const lines = content.split("\n");
    const segments: Array<{ heading: string | null; lines: string[] }> = [];
    let current: { heading: string | null; lines: string[] } = { heading: null, lines: [] };

    for (const line of lines) {
        if (/^## /.test(line)) {
            segments.push(current);
            current = { heading: line, lines: [] };
        } else {
            current.lines.push(line);
        }
    }
    segments.push(current);

    const seen = new Map<string, number>();
    const out: typeof segments = [];
    const duplicates: string[] = [];

    for (const seg of segments) {
        if (seg.heading === null) {
            out.push(seg);
            continue;
        }
        if (seen.has(seg.heading)) {
            const existing = out[seen.get(seg.heading)!];
            while (
                existing.lines.length > 0 &&
                existing.lines[existing.lines.length - 1].trim() === ""
            ) {
                existing.lines.pop();
            }
            existing.lines.push("", ...seg.lines);
            duplicates.push(seg.heading.slice(3));
        } else {
            seen.set(seg.heading, out.length);
            out.push(seg);
        }
    }

    const result = out
        .flatMap(seg => (seg.heading !== null ? [seg.heading, ...seg.lines] : seg.lines))
        .join("\n")
        .replace(/\n{3,}/g, "\n\n");

    return { merged: result, duplicates };
}

// ---------------------------------------------------------------------------
// MDX file builder
// ---------------------------------------------------------------------------

function buildMdxFile(version: string, body: string): string {
    const id = Math.random().toString(36).slice(2, 10);

    return [
        "---",
        `id: ${id}`,
        `title: Webiny ${version} Changelog`,
        `description: See what's new in Webiny version ${version}`,
        "---",
        "",
        'import { GithubRelease } from "@/components/GithubRelease";',
        'import { Alert } from "@/components/Alert";',
        "",
        `<GithubRelease version={"${version}"} />`,
        "",
        body,
        ""
    ].join("\n");
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main(): Promise<void> {
    const { version, dryRun } = parseArgs();

    console.log(`\nGenerating changelog for Webiny ${version}...`);

    console.log("  Resolving release range on GitHub...");
    const [previousTag, headRef] = await Promise.all([
        findPreviousTag(version),
        resolveHeadRef(version)
    ]);
    console.log(`  Diffing ${previousTag}...${headRef} for referenced PRs...`);
    const prNumbers = await fetchPRNumbersInRange(previousTag, headRef);
    console.log(`  Found ${prNumbers.length} referenced PR(s) in commit messages.`);

    console.log("  Fetching PR details...");
    const { prs, noChangelogNumbers } = await fetchPRs(prNumbers);
    console.log(`  ${prs.length} pull request(s) eligible for the changelog.`);

    if (dryRun) {
        console.log("\n  --dry-run: eligible PRs (no Claude call, no files written):");
        for (const pr of prs) {
            console.log(`    #${pr.number}: ${pr.title}`);
        }
        if (noChangelogNumbers.size > 0) {
            console.log(
                `  Skipped (no-changelog): ${[...noChangelogNumbers].map(n => `#${n}`).join(", ")}`
            );
        }
        process.exit(0);
    }

    const outDir = join(process.cwd(), "docs", "release-notes", version);
    mkdirSync(outDir, { recursive: true });
    const outPath = join(outDir, "changelog.mdx");

    // Remove any sections already in the changelog whose PRs now carry no-changelog.
    if (noChangelogNumbers.size > 0) {
        const alreadyInFile = extractMentionedPRNumbers(outPath);
        const stale = new Set([...noChangelogNumbers].filter(n => alreadyInFile.has(n)));
        if (stale.size > 0) {
            const existing = readFileSync(outPath, "utf-8");
            const { updated, removed } = removePRSections(existing, stale);
            writeFileSync(outPath, updated, "utf-8");
            console.log(
                `  Removed ${removed.length} no-changelog PR(s) from existing changelog: ${removed.map(n => `#${n}`).join(", ")}`
            );
        }
    }

    if (prs.length === 0) {
        console.warn("  No pull requests found for this release range. Nothing to generate.");
        process.exit(0);
    }

    const alreadyPresent = extractMentionedPRNumbers(outPath);
    const aiTxtPath = join(outDir, "changelog.ai.txt");
    const skipped = extractSkippedPRNumbers(aiTxtPath);
    if (skipped.size > 0) {
        console.log(
            `  Skipping ${skipped.size} manually removed PR(s) from changelog.ai.txt: ${[...skipped].map(n => `#${n}`).join(", ")}`
        );
        for (const n of skipped) alreadyPresent.add(n);
    }
    const newPRs = alreadyPresent.size > 0 ? prs.filter(pr => !alreadyPresent.has(pr.number)) : prs;

    if (newPRs.length === 0) {
        console.log("  All PRs are already in the changelog. Nothing to add.");
        process.exit(0);
    }

    if (alreadyPresent.size > 0) {
        console.log(
            `  ${alreadyPresent.size} PR(s) already in changelog — generating content for ${newPRs.length} new PR(s)...`
        );
    }

    const body = await generateChangelogBody(newPRs, version);

    if (alreadyPresent.size > 0) {
        const existing = readFileSync(outPath, "utf-8");
        writeFileSync(outPath, existing.trimEnd() + "\n\n" + body + "\n", "utf-8");
        console.log(
            `\n✓ Appended ${newPRs.length} new PR(s) to: docs/release-notes/${version}/changelog.mdx`
        );
    } else {
        const mdx = buildMdxFile(version, body);
        writeFileSync(outPath, mdx, "utf-8");
        console.log(`\n✓ Changelog written to: docs/release-notes/${version}/changelog.mdx`);

        // Create a blank changelog.ai.txt scaffold so manual editors know to use it.
        const aiTxtScaffold = [
            `AI Context: ${version} Changelog (changelog.mdx)`,
            "",
            "This file tracks manual edits made after the generation script ran.",
            'The script reads the "Skipped PRs" section to avoid re-adding removed entries.',
            "",
            "## Skipped PRs",
            "",
            "## Manual Rewrites",
            ""
        ].join("\n");
        writeFileSync(aiTxtPath, aiTxtScaffold, "utf-8");
        console.log(`✓ Scaffold written to: docs/release-notes/${version}/changelog.ai.txt`);
    }

    const written = readFileSync(outPath, "utf-8");
    const { merged, duplicates } = mergeDuplicateH2Sections(written);
    if (duplicates.length > 0) {
        writeFileSync(outPath, merged, "utf-8");
        console.log(`  Merged duplicate section(s): ${duplicates.map(d => `"${d}"`).join(", ")}`);
    }
}

main().catch(err => {
    console.error("\nError:", err instanceof Error ? err.message : err);
    process.exit(1);
});
