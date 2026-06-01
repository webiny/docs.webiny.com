/**
 * Generates release announcements for Slack and social media (X / LinkedIn) for a given
 * Webiny release version by reading the changelog MDX file and using Claude.
 *
 * Usage:
 *   yarn generate:announcements --version 6.1.0
 */

import "dotenv/config";
import Anthropic from "@anthropic-ai/sdk";
import { readFileSync, existsSync, writeFileSync, mkdirSync } from "fs";
import { join } from "path";

// ---------------------------------------------------------------------------
// CLI args
// ---------------------------------------------------------------------------

function parseArgs(): { version: string } {
    const args = process.argv.slice(2);
    const versionIdx = args.indexOf("--version");
    if (versionIdx === -1 || !args[versionIdx + 1]) {
        console.error("Usage: yarn generate:announcements --version <version>");
        console.error("Example: yarn generate:announcements --version 6.1.0");
        process.exit(1);
    }
    return { version: args[versionIdx + 1] };
}

// ---------------------------------------------------------------------------
// Read changelog
// ---------------------------------------------------------------------------

function readChangelog(version: string): string {
    const changelogPath = join(process.cwd(), "docs", "release-notes", version, "changelog.mdx");

    if (!existsSync(changelogPath)) {
        throw new Error(
            `Changelog not found at: docs/release-notes/${version}/changelog.mdx\n` +
                `Run "yarn generate:changelog --version ${version}" first.`
        );
    }

    return readFileSync(changelogPath, "utf-8");
}

// ---------------------------------------------------------------------------
// Prompts
// ---------------------------------------------------------------------------

const SLACK_STYLE_EXAMPLE = `
Hello @channel! :wave:

Webiny 5.41.1 is out! :rocket:

Not a big release, but still, in terms of highlights, we can mention that we addressed a couple of issues related to assigning roles and teams with external identity providers (Okta, Auth0). We've also play a bit with improving the developer experience. Check out the changelog to learn more.
—

As usual, the release notes can be found on the following links:point_down::skin-tone-2::
Changelog: https://www.webiny.com/docs/release-notes/5.41.1/changelog
How To Upgrade: https://www.webiny.com/docs/release-notes/5.41.1/upgrade-guide
—

And that's all for now. As always, a ton of stuff in the pipeline, so we better get to it. :smile:
`.trim();

const SLACK_PROMPT = `
You write Slack announcements for Webiny releases. Webiny is an open-source serverless CMS platform.

Your output must be a plain-text Slack message — no markdown formatting, no bullet lists, no headers.
Use Slack emoji codes (e.g. :rocket:, :wave:, :smile:, :point_down::skin-tone-2:) where they fit naturally.

Follow this structure exactly:

1. Opening line: "Hello @channel! :wave:"
2. Blank line
3. Release line: "Webiny X.Y.Z is out! :rocket:"
4. Blank line
5. Highlight summary in 2–3 short paragraphs (separated by blank lines). Write in a warm,
   conversational tone. Group changes into themes rather than listing every item. Each paragraph
   should be 1–3 sentences. End the last paragraph with "Check out the changelog to learn more."
   or similar.
6. A "—" separator line followed by a blank line
7. "As usual, the release notes can be found on the following links:point_down::skin-tone-2::"
8. "Changelog: https://www.webiny.com/docs/release-notes/VERSION/changelog"
9. "How To Upgrade: https://www.webiny.com/docs/release-notes/VERSION/upgrade-guide"
10. A "—" separator line followed by a blank line
11. Closing line — friendly, forward-looking, slightly playful. 1 sentence. End with an emoji.

Rules:
- Replace VERSION with the actual release version number in the URLs.
- Do NOT add any extra sections, bullet lists, or formatting beyond what is described above.
- "Webiny" is always capitalised.
- Keep the whole message short — it should be readable in 30 seconds.
- Do NOT mention CLI flags, upgrade command options, logging settings, or other low-level tooling
  details (e.g. --force flags, default logging changes). Focus on product and developer experience.
- Do NOT mention low-level infrastructure internals in the highlights — no Pulumi hooks, env hooks,
  plugin cleanup, OpenSearch prefixing, or deployment plumbing. If infra improvements are worth
  mentioning at all, describe them in terms of developer benefit, not implementation details.

Here is a real example of the style to match:

${SLACK_STYLE_EXAMPLE}
`.trim();

const SOCIAL_PROMPT = `
You write social media announcements for Webiny releases. Webiny is an open-source serverless CMS platform.
This post will be used on both X/Twitter and LinkedIn.

Your output must be plain text only. Use blank lines between sections.

Structure:

1. Opening line: announce the release. 1 sentence. End with a rocket emoji 🚀.
2. Blank line
3. "Highlights:" label on its own line, then 4–6 items using "→" arrows. One item per line.
   Each item: feature name — one short phrase describing the benefit or what it does.
   Keep each item to a single line.
4. Blank line
5. "As always, full details in the release notes 👇"
6. Blank line
7. Links (plain text):
   "Changelog: https://www.webiny.com/docs/release-notes/VERSION/changelog"
   "Upgrade guide: https://www.webiny.com/docs/release-notes/VERSION/upgrade-guide"

Ordering rule for highlights:
- Lead with the AI-related feature if one exists — AI features resonate most on social media right now.
- Follow with other highlights in descending order of impact to developers or end users.
- Omit anything that isn't clearly interesting to a developer or end user (no infra internals, no tooling minutiae).

Rules:
- Replace VERSION with the actual release version number in the URLs.
- Use real Unicode emoji only in the opening line and the "As always..." line — nowhere else.
- "Webiny" is always capitalised.
- Tone: professional, developer-focused, enthusiastic but not hype-y.
- Do NOT use hashtags.
- Do NOT use paragraphs, dashes, asterisks, or any formatting other than "→" arrows for list items.
- Do NOT mention CLI flags, upgrade command options, logging settings, or low-level infrastructure
  details (e.g. Pulumi internals, env hooks, --force flags).
`.trim();

const FOLLOWUP_TWEETS_PROMPT = `
You write follow-up tweets for Webiny releases. Webiny is an open-source serverless CMS platform.
These tweets will be posted one per day in the days after the release to keep content flowing.

Pick 3–4 of the most interesting features or improvements from the changelog. Write one standalone
tweet per feature. Each tweet must work completely on its own — no references to "yesterday's release"
or numbering like "1/4".

Format: separate each tweet with a blank line and a "---" divider.

Each tweet:
- 1–3 sentences. Focused on one specific thing.
- Concrete and specific — name the actual feature, explain what it does or why it matters.
- Vary the structure — don't make every tweet feel the same. Some can open with a question,
  some can frame a problem the feature solves, some can just lead with the capability.
- End with the changelog link: https://www.webiny.com/docs/release-notes/VERSION/changelog
- At most 1 emoji per tweet, only where genuinely fitting.

Rules:
- Replace VERSION with the actual release version number in the URL.
- "Webiny" is always capitalised.
- Tone: excited but technical. Speak to developers.
- Do NOT use hashtags.
- Do NOT start every tweet with "Webiny" — vary the openings.
- Do NOT use backticks or any code formatting — plain text only.
- Do NOT mention CLI flags, upgrade command options, logging settings, or low-level infrastructure
  details. Focus on product and developer experience.
`.trim();

// ---------------------------------------------------------------------------
// Claude calls
// ---------------------------------------------------------------------------

async function generate(
    client: Anthropic,
    systemPrompt: string,
    changelog: string,
    version: string,
    label: string
): Promise<string> {
    const userMessage =
        `Generate a ${label} announcement for Webiny version ${version}.\n\n` +
        `Here is the changelog:\n\n${changelog}`;

    const message = await client.messages.create({
        model: "claude-opus-4-5",
        max_tokens: 2048,
        system: systemPrompt,
        messages: [{ role: "user", content: userMessage }]
    });

    const textBlock = message.content.find(b => b.type === "text");
    if (!textBlock || textBlock.type !== "text") {
        throw new Error(`Claude returned no text content for ${label}.`);
    }

    return textBlock.text.trim();
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function printSection(label: string, content: string): void {
    const border = "─".repeat(60);
    console.log(`\n${border}`);
    console.log(`  ${label}`);
    console.log(border);
    console.log(content);
    console.log(border);
}

async function main(): Promise<void> {
    const { version } = parseArgs();

    console.log(`\nGenerating announcements for Webiny ${version}...`);

    console.log("  Reading changelog...");
    const changelog = readChangelog(version);
    console.log("  Changelog loaded.");

    const apiKey = process.env.CLAUDE_KEY;
    if (!apiKey) {
        throw new Error("CLAUDE_KEY environment variable is not set.");
    }
    const client = new Anthropic({ apiKey });

    console.log("  Generating Slack, social, and follow-up tweets in parallel...");

    const [slack, social, tweets] = await Promise.all([
        generate(client, SLACK_PROMPT, changelog, version, "Slack"),
        generate(client, SOCIAL_PROMPT, changelog, version, "social"),
        generate(client, FOLLOWUP_TWEETS_PROMPT, changelog, version, "follow-up tweets")
    ]);

    const outDir = join(process.cwd(), "docs", "release-notes", version, "announcements");
    mkdirSync(outDir, { recursive: true });

    const files: Array<[string, string]> = [
        ["slack.md", slack],
        ["social.md", social],
        ["tweets.md", tweets]
    ];

    for (const [filename, content] of files) {
        writeFileSync(join(outDir, filename), content + "\n", "utf-8");
        console.log(`  ✓ docs/release-notes/${version}/announcements/${filename}`);
    }

    printSection("SLACK", slack);
    printSection("SOCIAL (X / LinkedIn)", social);
    printSection("FOLLOW-UP TWEETS", tweets);

    console.log();
}

main().catch(err => {
    console.error("\nError:", err instanceof Error ? err.message : err);
    process.exit(1);
});
