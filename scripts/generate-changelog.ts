/**
 * Generates a changelog MDX file for a given Webiny release version by:
 *  1. Fetching all closed PRs from the webiny/webiny-js milestone matching the version
 *  2. Triaging them: dropping internal changes (CI, build, tests, release tooling) and
 *     folding follow-up fixes into the PR that introduced the feature they fix
 *  3. Sending what is left to Claude (claude-opus-4-5) to produce a structured MDX changelog
 *  4. Writing the result to docs/release-notes/{version}/changelog.mdx
 *
 * PR discovery is milestone-based: assign a PR to the `X.Y.Z` milestone for it to
 * appear in that release's changelog. PRs labeled `no-changelog` are skipped.
 *
 * PRs dropped in step 2 are recorded under "## Skipped PRs" in changelog.ai.txt with the
 * reason, so a rerun makes the same call. To bring one back, write its entry by hand;
 * deleting the line only gets the PR triaged again on the next run.
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
import { writeFileSync, mkdirSync, readFileSync, existsSync } from "fs";
import { join } from "path";
import { REVIEW_MARKER } from "./changelog-constants";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface GitHubLabel {
    name: string;
}

interface GitHubMilestone {
    number: number;
    title: string;
    state: string;
}

interface GitHubIssue {
    number: number;
    title: string;
    body: string | null;
    labels: GitHubLabel[];
    user: { login: string } | null;
    pull_request?: unknown;
    state: string;
}

interface PullRequest {
    number: number;
    title: string;
    body: string;
    url: string;
    author: string;
}

/**
 * One changelog entry to generate. `prs` are the PRs that together deliver the change (e.g. the
 * API and the Admin half of one feature); all of them are linked in the entry's heading.
 * `followUps` are later PRs in the same release that only fixed or finished it. They are
 * context for Claude and never get an entry or a link of their own.
 */
interface ChangelogItem {
    prs: PullRequest[];
    followUps: PullRequest[];
}

interface SkippedPR {
    number: number;
    reason: string;
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
 * Finds the milestone whose title matches the target version (`X.Y.Z` or `vX.Y.Z`).
 * Exits cleanly with a message if no matching milestone exists.
 */
async function findMilestone(version: string): Promise<GitHubMilestone> {
    const bare = version.replace(/^v/, "");
    const candidates = [bare, `v${bare}`];

    let page = 1;
    while (true) {
        const milestones = await fetchJson<GitHubMilestone[]>(
            `${GITHUB_API}/repos/${GITHUB_REPO}/milestones?state=all&per_page=100&page=${page}`
        );
        if (milestones.length === 0) break;

        const found = milestones.find(m => candidates.includes(m.title));
        if (found) return found;
        page++;
    }

    console.log("No milestone found.");
    process.exit(0);
}

interface FetchResult {
    prs: PullRequest[];
    noChangelogNumbers: Set<number>;
}

async function fetchPRsForMilestone(milestoneNumber: number): Promise<FetchResult> {
    const prs: PullRequest[] = [];
    const noChangelogNumbers = new Set<number>();
    let page = 1;

    while (true) {
        const issues = await fetchJson<GitHubIssue[]>(
            `${GITHUB_API}/repos/${GITHUB_REPO}/issues?milestone=${milestoneNumber}&state=closed&per_page=100&page=${page}`
        );
        if (issues.length === 0) break;

        for (const issue of issues) {
            // The issues endpoint returns both issues and PRs; keep only PRs.
            if (!issue.pull_request) continue;

            const hasNoChangelog = issue.labels.some(l => l.name === "no-changelog");
            if (hasNoChangelog) {
                console.log(`  Skipping PR #${issue.number} (no-changelog): ${issue.title}`);
                noChangelogNumbers.add(issue.number);
                continue;
            }
            prs.push({
                number: issue.number,
                title: issue.title,
                body: issue.body ?? "",
                url: `https://github.com/${GITHUB_REPO}/pull/${issue.number}`,
                author: issue.user?.login ?? "unknown"
            });
        }
        page++;
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
- Some items list several PRs that together deliver one change, for example the API and the Admin
  part of the same feature. Write exactly one entry for such an item and link all of its PRs in
  the heading. Never split it into one entry per PR.
- Some PRs come with a "Follow-up PRs" list: fixes merged later in the same, still unreleased,
  release to finish that PR's work. Users never saw the broken state, so describe only the end
  result as one entry for the main PR. Do not mention the follow-ups, what they fixed, or link them.
- Never write a "Fixed ..." entry for a problem in something that is new in this release. Fold it
  into the entry for that feature instead.
- **Skip** trivial/internal PRs with no user-facing impact: dependency bumps, CI fixes, chore commits,
  test-only changes, typo fixes, and internal refactors. Also skip changes to Webiny's own tooling
  that a Webiny user never runs: CI workflows, the monorepo build, package publishing, release
  scripts, E2E and test infrastructure. If a PR title starts with \`chore\`, \`ci\`,
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

// A release can carry hundreds of PRs, which overflows both the context window and the
// output budget of a single request. PRs are sent in batches bounded by count (output size)
// and characters (input size); duplicate H2 sections across batches are merged afterwards.
const MAX_PRS_PER_BATCH = 25;
const MAX_CHARS_PER_BATCH = 200_000;
const MAX_PR_BODY_CHARS = 8_000;

const MAX_FOLLOW_UP_BODY_CHARS = 2_000;

function truncate(text: string, max: number): string {
    const trimmed = text.trim();
    return trimmed.length > max
        ? trimmed.slice(0, max) + "\n\n[PR description truncated]"
        : trimmed;
}

function formatPR(pr: PullRequest): string {
    const body = truncate(pr.body, MAX_PR_BODY_CHARS);
    return `PR #${pr.number} (${pr.url}): ${pr.title}${body ? `\n\n${body}` : ""}`;
}

function formatItem({ prs, followUps }: ChangelogItem): string {
    let formatted =
        prs.length === 1
            ? `### ${formatPR(prs[0])}`
            : `### One change delivered by ${prs.length} PRs (write a single entry, link all of them)\n\n${prs.map(formatPR).join("\n\n")}`;
    if (followUps.length > 0) {
        const list = followUps.map(f => {
            const fBody = truncate(f.body, MAX_FOLLOW_UP_BODY_CHARS);
            return `- PR #${f.number}: ${f.title}${fBody ? `\n\n${fBody}` : ""}`;
        });
        formatted += `\n\nFollow-up PRs (same release, fold into this entry):\n\n${list.join("\n\n")}`;
    }
    return formatted;
}

function batchItems(items: ChangelogItem[]): string[][] {
    const batches: string[][] = [];
    let current: string[] = [];
    let currentChars = 0;

    for (const item of items) {
        const formatted = formatItem(item);
        const full =
            current.length >= MAX_PRS_PER_BATCH ||
            currentChars + formatted.length > MAX_CHARS_PER_BATCH;
        if (current.length > 0 && full) {
            batches.push(current);
            current = [];
            currentChars = 0;
        }
        current.push(formatted);
        currentChars += formatted.length;
    }
    if (current.length > 0) {
        batches.push(current);
    }

    return batches;
}

function createClient(): Anthropic {
    const apiKey = process.env.CLAUDE_KEY;
    if (!apiKey) {
        throw new Error("CLAUDE_KEY environment variable is not set.");
    }
    return new Anthropic({ apiKey });
}

async function generateChangelogBody(items: ChangelogItem[], version: string): Promise<string> {
    const client = createClient();
    const batches = batchItems(items);

    console.log(
        `  Sending ${items.length} item(s) to Claude (claude-opus-4-5) in ${batches.length} batch(es)...`
    );

    const bodies: string[] = [];
    for (const [index, batch] of batches.entries()) {
        console.log(`    Batch ${index + 1}/${batches.length}: ${batch.length} item(s)`);

        const userMessage = `Generate a changelog for Webiny version ${version} based on the following merged pull requests. Apply all the rules in your system prompt.\n\n${batch.join("\n\n---\n\n")}`;

        const message = await client.messages.create({
            model: "claude-opus-4-5",
            max_tokens: 16000,
            system: SYSTEM_PROMPT,
            messages: [{ role: "user", content: userMessage }]
        });

        if (message.stop_reason === "max_tokens") {
            throw new Error(
                `Claude's output was cut off in batch ${index + 1}. Lower MAX_PRS_PER_BATCH and rerun.`
            );
        }

        const textBlock = message.content.find(b => b.type === "text");
        if (!textBlock || textBlock.type !== "text") {
            throw new Error(`Claude returned no text content for batch ${index + 1}.`);
        }

        bodies.push(textBlock.text.trim());
    }

    return bodies.join("\n\n");
}

// ---------------------------------------------------------------------------
// Triage
// ---------------------------------------------------------------------------

// Conventional-commit types and scopes that only ever touch Webiny's own tooling. These are
// dropped without asking Claude. Everything else goes through triagePRs().
const INTERNAL_TYPES = new Set(["ci", "build", "test"]);
const INTERNAL_SCOPES = new Set(["ci", "build", "release", "e2e", "test", "tests"]);

function internalReasonFromTitle(title: string): string | null {
    if (/^chore(\([^)]*\))?: merge\b/i.test(title)) {
        return "merge between release branches";
    }
    const match = title.match(/^(\w+)(?:\(([^)]*)\))?!?:/);
    if (!match) {
        return null;
    }
    const type = match[1].toLowerCase();
    if (INTERNAL_TYPES.has(type)) {
        return `\`${type}\` change`;
    }
    const scope = (match[2] ?? "")
        .split(/[,\s]+/)
        .map(s => s.toLowerCase())
        .find(s => INTERNAL_SCOPES.has(s));
    return scope ? `\`${scope}\` scope` : null;
}

const TRIAGE_PROMPT = `
You triage merged pull requests for the changelog of one Webiny release. Webiny is an open-source
serverless CMS; the changelog is read by developers who build projects on top of it. Every PR you
see belongs to the same release, and none of them has shipped yet.

Report two things through the \`report_triage\` tool.

1. Internal PRs: changes a Webiny user never sees or runs. This covers CI workflows, the monorepo's
   own build and package publishing, release scripts, E2E and test infrastructure, test-only
   changes, dependency bumps with no behaviour change, merges between branches, and refactors with
   no visible effect. A change to the Webiny CLI, to a project's build or deploy, to the API, the
   Admin app or the SDKs is user-facing even when it sounds like tooling. When in doubt, it is
   user-facing.

2. Follow-up PRs: a PR that fixes, polishes or completes something another PR in this same release
   introduced. Because the release is not out yet, nobody ever ran into the problem the follow-up
   fixes, so it should not get its own changelog entry. Report the PR whose work it finishes as its
   \`parent\`. The parent may be one of the new PRs or one of the PRs already handled for this
   release. Only report a follow-up when the PRs clearly concern the same new feature or change:
   matching subject, the follow-up's description refers to it, or it fixes behaviour that did not
   exist before this release. A fix for something that already existed in an earlier release is not
   a follow-up, even if it touches the same area. When in doubt, it is not a follow-up.

3. Related PRs: groups of new PRs that together deliver one feature or change and belong in a
   single changelog entry. Typical case: one PR adds a capability to the API and another adds the
   same capability to the Admin app or an SDK, or a feature split across several PRs by package.
   Only group PRs that a reader would see as one change. Two separate fixes in the same area are
   not related. Each group has at least two PRs. Do not put internal or follow-up PRs in a group.

Leave every other PR out of all lists. Never list a PR as both internal and anything else.
`.trim();

const TRIAGE_TOOL: Anthropic.Tool = {
    name: "report_triage",
    description: "Report the internal, follow-up and related PRs of this release.",
    input_schema: {
        type: "object",
        properties: {
            internal: {
                type: "array",
                items: {
                    type: "object",
                    properties: {
                        pr: { type: "integer" },
                        reason: { type: "string", description: "A few words, lowercase." }
                    },
                    required: ["pr", "reason"]
                }
            },
            followUps: {
                type: "array",
                items: {
                    type: "object",
                    properties: {
                        pr: { type: "integer" },
                        parent: { type: "integer" }
                    },
                    required: ["pr", "parent"]
                }
            },
            related: {
                type: "array",
                items: {
                    type: "object",
                    properties: {
                        prs: { type: "array", items: { type: "integer" } }
                    },
                    required: ["prs"]
                }
            }
        },
        required: ["internal", "followUps", "related"]
    }
};

interface TriageInput {
    internal: Array<{ pr: number; reason: string }>;
    followUps: Array<{ pr: number; parent: number }>;
    related: Array<{ prs: number[] }>;
}

interface TriageResult {
    internal: SkippedPR[];
    // Follow-up PR number → the PR at the root of its chain.
    followUpOf: Map<number, number>;
    // Groups of PRs that become one entry, each sorted by PR number.
    groups: number[][];
}

const MAX_TRIAGE_CHARS = 400_000;

/**
 * Asks Claude which of `candidates` are internal and which are follow-ups to another PR of
 * the release. `earlier` are this release's PRs from previous runs (in the changelog or
 * skipped); they can be parents but are not classified again.
 */
async function triagePRs(
    candidates: PullRequest[],
    earlier: PullRequest[],
    version: string
): Promise<TriageResult> {
    const excerptChars = Math.max(
        200,
        Math.min(1_000, Math.floor(MAX_TRIAGE_CHARS / Math.max(candidates.length, 1)))
    );
    const newList = candidates.map(pr => {
        const body = truncate(pr.body, excerptChars);
        return `### PR #${pr.number}: ${pr.title}${body ? `\n\n${body}` : ""}`;
    });
    const earlierList = earlier.map(pr => `- PR #${pr.number}: ${pr.title}`);

    const userMessage = [
        `Webiny ${version}.`,
        earlier.length > 0
            ? `PRs already handled for this release (possible parents only, do not classify):\n\n${earlierList.join("\n")}`
            : "",
        `New PRs to triage:\n\n${newList.join("\n\n---\n\n")}`
    ]
        .filter(Boolean)
        .join("\n\n");

    console.log(`  Triaging ${candidates.length} PR(s) with Claude (claude-opus-4-5)...`);
    const message = await createClient().messages.create({
        model: "claude-opus-4-5",
        max_tokens: 16000,
        system: TRIAGE_PROMPT,
        tools: [TRIAGE_TOOL],
        tool_choice: { type: "tool", name: TRIAGE_TOOL.name },
        messages: [{ role: "user", content: userMessage }]
    });

    if (message.stop_reason === "max_tokens") {
        throw new Error("Claude's triage output was cut off.");
    }
    const toolUse = message.content.find(b => b.type === "tool_use");
    if (!toolUse || toolUse.type !== "tool_use") {
        throw new Error("Claude returned no triage result.");
    }

    return resolveTriage(toolUse.input as TriageInput, candidates, earlier);
}

/**
 * Drops anything in Claude's answer that doesn't refer to a real PR of this release, and
 * points each follow-up at the root of its chain (a fix of a fix of a feature → the feature).
 */
function resolveTriage(
    input: TriageInput,
    candidates: PullRequest[],
    earlier: PullRequest[]
): TriageResult {
    const candidateNums = new Set(candidates.map(pr => pr.number));
    const knownNums = new Set([...candidateNums, ...earlier.map(pr => pr.number)]);

    const internal = new Map<number, string>();
    for (const { pr, reason } of input.internal ?? []) {
        if (candidateNums.has(pr)) {
            internal.set(pr, reason);
        }
    }

    const parentOf = new Map<number, number>();
    for (const { pr, parent } of input.followUps ?? []) {
        if (candidateNums.has(pr) && knownNums.has(parent) && pr !== parent && !internal.has(pr)) {
            parentOf.set(pr, parent);
        }
    }

    const followUpOf = new Map<number, number>();
    for (const pr of parentOf.keys()) {
        const seen = new Set([pr]);
        let root = parentOf.get(pr)!;
        while (parentOf.has(root) && !seen.has(root)) {
            seen.add(root);
            root = parentOf.get(root)!;
        }
        // A cycle has no root to fold into; leave the PR as a regular entry.
        if (!seen.has(root)) {
            followUpOf.set(pr, root);
        }
    }

    // Groups that share a PR are merged, so each PR ends up in at most one entry.
    const groupOf = new Map<number, number>();
    const find = (n: number): number => {
        while (groupOf.get(n) !== n) {
            n = groupOf.get(n)!;
        }
        return n;
    };
    for (const { prs } of input.related ?? []) {
        const members = [...new Set(prs ?? [])].filter(
            n => candidateNums.has(n) && !internal.has(n) && !followUpOf.has(n)
        );
        for (const n of members) {
            if (!groupOf.has(n)) {
                groupOf.set(n, n);
            }
        }
        for (const n of members.slice(1)) {
            groupOf.set(find(n), find(members[0]));
        }
    }
    const byRoot = new Map<number, number[]>();
    for (const n of groupOf.keys()) {
        byRoot.set(find(n), [...(byRoot.get(find(n)) ?? []), n]);
    }
    const groups = [...byRoot.values()].filter(g => g.length > 1).map(g => g.sort((a, b) => a - b));

    return {
        internal: [...internal].map(([number, reason]) => ({ number, reason })),
        followUpOf,
        groups
    };
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

function writeAuthorsFile(authorsPath: string, prs: PullRequest[]): void {
    let authors: Record<string, string> = {};
    try {
        authors = JSON.parse(readFileSync(authorsPath, "utf-8"));
    } catch {
        // No file yet.
    }
    for (const pr of prs) {
        authors[String(pr.number)] = pr.author;
    }
    const sorted = Object.fromEntries(
        Object.entries(authors).sort(([a], [b]) => Number(a) - Number(b))
    );
    writeFileSync(authorsPath, JSON.stringify(sorted, null, 4) + "\n", "utf-8");
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

function aiTxtScaffold(version: string): string {
    return [
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
}

/**
 * Adds `NNNN - reason` lines to the end of the "## Skipped PRs" section, creating the file
 * or the section when missing.
 */
function appendSkippedPRs(aiTxtPath: string, version: string, entries: SkippedPR[]): void {
    if (entries.length === 0) {
        return;
    }
    let content = existsSync(aiTxtPath) ? readFileSync(aiTxtPath, "utf-8") : aiTxtScaffold(version);
    let header = content.match(/^## Skipped PRs\n/m);
    if (!header) {
        content = content.trimEnd() + "\n\n## Skipped PRs\n";
        header = content.match(/^## Skipped PRs\n/m)!;
    }

    const start = header.index! + header[0].length;
    const nextOffset = content.slice(start).search(/^## /m);
    const end = nextOffset === -1 ? content.length : start + nextOffset;
    const lines = [
        content.slice(start, end).trim(),
        ...entries.map(e => `${e.number} - ${e.reason}`)
    ].filter(Boolean);

    const updated =
        content.slice(0, start) +
        "\n" +
        lines.join("\n") +
        "\n" +
        (nextOffset === -1 ? "" : "\n" + content.slice(end));
    writeFileSync(aiTxtPath, updated, "utf-8");
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

function mergeDuplicateH2Sections(content: string): {
    merged: string;
    duplicates: string[];
} {
    const lines = content.split("\n");
    const segments: Array<{ heading: string | null; lines: string[] }> = [];
    let current: { heading: string | null; lines: string[] } = {
        heading: null,
        lines: []
    };

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
// Review markers
// ---------------------------------------------------------------------------

/**
 * Inserts a per-item review marker (an MDX comment) directly beneath every H3
 * heading, attributing the item to the author(s) of the referenced PR(s). The
 * marker is invisible in the rendered page but visible in the PR diff; reviewers
 * delete the line to confirm the entry. CI fails while any marker remains.
 *
 * Markers are added deterministically after generation (not by Claude), so they
 * stay correct regardless of how Claude grouped or reordered the PRs.
 */
function addReviewMarkers(body: string, authorByPR: Map<number, string>): string {
    const lines = body.split("\n");
    const out: string[] = [];

    for (const line of lines) {
        out.push(line);
        if (!line.startsWith("### ")) continue;

        const prNumbers = [...line.matchAll(/\/pull\/(\d+)/g)].map(m => parseInt(m[1], 10));
        if (prNumbers.length === 0) continue;

        const authors = [...new Set(prNumbers.map(n => authorByPR.get(n)).filter(Boolean))];
        if (authors.length === 0) continue;

        const handles = authors.map(a => `\`@${a}\``).join(" ");
        out.push(`> ⏳ ${REVIEW_MARKER} ${handles}: confirm this entry, then delete this line.`);
    }

    return out.join("\n");
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

    console.log("  Looking up milestone on GitHub...");
    const milestone = await findMilestone(version);
    console.log(`  Found milestone #${milestone.number}: "${milestone.title}"`);

    console.log("  Fetching merged PRs...");
    const { prs, noChangelogNumbers } = await fetchPRsForMilestone(milestone.number);
    console.log(`  ${prs.length} pull request(s) eligible for the changelog.`);

    const outDir = join(process.cwd(), "docs", "release-notes", version);
    const outPath = join(outDir, "changelog.mdx");
    const aiTxtPath = join(outDir, "changelog.ai.txt");

    if (dryRun) {
        console.log("\n  --dry-run: eligible PRs (no files written):");
        for (const pr of prs) {
            console.log(`    #${pr.number}: ${pr.title}`);
        }
        if (noChangelogNumbers.size > 0) {
            console.log(
                `  Skipped (no-changelog): ${[...noChangelogNumbers].map(n => `#${n}`).join(", ")}`
            );
        }
    } else {
        mkdirSync(outDir, { recursive: true });

        // Keep a PR → author map next to the changelog. REVIEW-PENDING markers are deleted once an
        // entry is confirmed, so this is what still attributes entries to authors afterwards.
        if (prs.length > 0) {
            writeAuthorsFile(join(outDir, "changelog.authors.json"), prs);
        }

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
    }

    if (prs.length === 0) {
        console.warn("  No pull requests found for this milestone. Nothing to generate.");
        process.exit(0);
    }

    const alreadyPresent = extractMentionedPRNumbers(outPath);
    const skipped = extractSkippedPRNumbers(aiTxtPath);
    if (skipped.size > 0) {
        console.log(
            `  Skipping ${skipped.size} PR(s) listed in changelog.ai.txt: ${[...skipped].map(n => `#${n}`).join(", ")}`
        );
        for (const n of skipped) alreadyPresent.add(n);
    }
    const newPRs = prs.filter(pr => !alreadyPresent.has(pr.number));

    if (newPRs.length === 0) {
        console.log("  All PRs are already in the changelog. Nothing to add.");
        process.exit(0);
    }

    const earlier = prs.filter(pr => alreadyPresent.has(pr.number));
    if (earlier.length > 0) {
        console.log(
            `  ${earlier.length} PR(s) already handled, ${newPRs.length} new PR(s) to process.`
        );
    }

    // Triage: drop internal PRs and fold follow-up fixes into the PR they finish.
    const newSkipped: SkippedPR[] = [];
    const candidates: PullRequest[] = [];
    for (const pr of newPRs) {
        const reason = internalReasonFromTitle(pr.title);
        if (reason) {
            newSkipped.push({
                number: pr.number,
                reason: `${pr.title}; internal (${reason}), skipped automatically.`
            });
        } else {
            candidates.push(pr);
        }
    }

    const canTriage = candidates.length > 0 && (!dryRun || Boolean(process.env.CLAUDE_KEY));
    const triage: TriageResult = canTriage
        ? await triagePRs(candidates, earlier, version)
        : { internal: [], followUpOf: new Map(), groups: [] };

    const internalNums = new Set(triage.internal.map(i => i.number));
    // Items are keyed by their lowest PR number; leadOf maps every grouped PR to that key.
    const leadOf = new Map<number, number>();
    for (const group of triage.groups) {
        for (const n of group) {
            leadOf.set(n, group[0]);
        }
    }
    const items = new Map<number, ChangelogItem>();
    for (const pr of candidates) {
        if (internalNums.has(pr.number) || triage.followUpOf.has(pr.number)) {
            continue;
        }
        const lead = leadOf.get(pr.number) ?? pr.number;
        const item = items.get(lead) ?? { prs: [], followUps: [] };
        item.prs.push(pr);
        items.set(lead, item);
    }
    for (const { number, reason } of triage.internal) {
        const pr = candidates.find(c => c.number === number)!;
        newSkipped.push({
            number,
            reason: `${pr.title}; internal (${reason}), skipped automatically.`
        });
    }
    for (const [number, root] of triage.followUpOf) {
        const pr = candidates.find(c => c.number === number)!;
        items.get(leadOf.get(root) ?? root)?.followUps.push(pr);
        newSkipped.push({
            number,
            reason: `${pr.title}; follow-up to #${root} in the same release, folded into its entry.`
        });
    }
    newSkipped.sort((a, b) => a.number - b.number);

    for (const group of triage.groups) {
        console.log(`  Grouping into one entry: ${group.map(n => `#${n}`).join(", ")}`);
    }

    if (newSkipped.length > 0) {
        console.log(`  Leaving out ${newSkipped.length} PR(s):`);
        for (const s of newSkipped) {
            console.log(`    #${s.number}: ${s.reason}`);
        }
    }

    if (dryRun) {
        if (!canTriage && candidates.length > 0) {
            console.log(
                "  CLAUDE_KEY not set: skipped the triage call, so follow-ups aren't shown."
            );
        }
        console.log(`  ${items.size} changelog item(s) would be generated.`);
        process.exit(0);
    }

    if (items.size === 0) {
        appendSkippedPRs(aiTxtPath, version, newSkipped);
        console.log("  Nothing left to generate after triage.");
        process.exit(0);
    }

    const rawBody = await generateChangelogBody([...items.values()], version);
    const authorByPR = new Map(
        [...items.values()].flatMap(({ prs }) => prs.map(pr => [pr.number, pr.author] as const))
    );
    const body = addReviewMarkers(rawBody, authorByPR);

    if (existsSync(outPath)) {
        const existing = readFileSync(outPath, "utf-8");
        writeFileSync(outPath, existing.trimEnd() + "\n\n" + body + "\n", "utf-8");
        console.log(
            `\n✓ Appended ${items.size} new item(s) to: docs/release-notes/${version}/changelog.mdx`
        );
    } else {
        const mdx = buildMdxFile(version, body);
        writeFileSync(outPath, mdx, "utf-8");
        console.log(`\n✓ Changelog written to: docs/release-notes/${version}/changelog.mdx`);
    }

    // Create the changelog.ai.txt scaffold so manual editors know to use it.
    if (!existsSync(aiTxtPath)) {
        writeFileSync(aiTxtPath, aiTxtScaffold(version), "utf-8");
        console.log(`✓ Scaffold written to: docs/release-notes/${version}/changelog.ai.txt`);
    }
    appendSkippedPRs(aiTxtPath, version, newSkipped);

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
