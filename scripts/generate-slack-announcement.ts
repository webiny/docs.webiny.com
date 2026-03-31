/**
 * Generates release announcements for Slack, Twitter, and LinkedIn for a given
 * Webiny release version by reading the changelog MDX file and using Claude.
 *
 * Usage:
 *   yarn generate:slack-announcement --version 6.1.0
 */

import "dotenv/config";
import Anthropic from "@anthropic-ai/sdk";
import { readFileSync, existsSync } from "fs";
import { join } from "path";

// ---------------------------------------------------------------------------
// CLI args
// ---------------------------------------------------------------------------

function parseArgs(): { version: string } {
  const args = process.argv.slice(2);
  const versionIdx = args.indexOf("--version");
  if (versionIdx === -1 || !args[versionIdx + 1]) {
    console.error("Usage: yarn generate:slack-announcement --version <version>");
    console.error("Example: yarn generate:slack-announcement --version 6.1.0");
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

Here is a real example of the style to match:

${SLACK_STYLE_EXAMPLE}
`.trim();

const TWITTER_PROMPT = `
You write Twitter/X announcements for Webiny releases. Webiny is an open-source serverless CMS platform.

Your output must be a plain-text tweet thread — no markdown, no bullet lists.
No character limit applies, but keep each tweet punchy and focused.

Format as a numbered thread where each tweet is separated by a blank line and prefixed with its number:

1/ Opening tweet — announce the release with energy. Lead with the most exciting change or theme.
   Include the version number. End with a hook that makes people want to read on.

2/ through N/ — each tweet covers one theme from the changelog (e.g. Website Builder, Headless CMS,
   Developer tooling). 1–3 sentences per tweet. Concrete and specific — name the actual features.
   No fluff.

Last tweet — links tweet. Plain text, no emoji overload:
"Release notes & upgrade guide:
Changelog: https://www.webiny.com/docs/release-notes/VERSION/changelog
Upgrade guide: https://www.webiny.com/docs/release-notes/VERSION/upgrade-guide"

Rules:
- Replace VERSION with the actual release version number in the URLs.
- Use real Unicode emoji sparingly (🚀 ✨ 🛠️ 🎯 etc.) — 1 per tweet max, only where genuinely fitting.
- "Webiny" is always capitalised.
- Tone: excited but technical. Speak to developers.
- Do NOT use hashtags.
`.trim();

const LINKEDIN_PROMPT = `
You write LinkedIn announcements for Webiny releases. Webiny is an open-source serverless CMS platform.

Your output must be a plain-text LinkedIn post — no markdown, no bullet lists with dashes or asterisks.
LinkedIn renders plain text with line breaks, so use blank lines between paragraphs.

Structure:

- Opening hook (1–2 sentences): grab attention, announce the release. Make it feel significant.
- Blank line
- 2–4 body paragraphs: each covers a theme from the changelog. Write in a professional but warm tone.
  Be specific about what changed and why it matters to developers or teams using Webiny.
  Each paragraph 2–4 sentences.
- Blank line
- Closing paragraph: forward-looking, invite engagement (e.g. "Give it a try and let us know what you think.").
- Blank line
- Links (plain text, no label formatting):
  "Changelog: https://www.webiny.com/docs/release-notes/VERSION/changelog"
  "Upgrade guide: https://www.webiny.com/docs/release-notes/VERSION/upgrade-guide"

Rules:
- Replace VERSION with the actual release version number in the URLs.
- Use real Unicode emoji very sparingly — at most 2 in the entire post, only in the opening or closing.
- "Webiny" is always capitalised.
- Tone: professional, developer-focused, enthusiastic but not hype-y.
- Do NOT use hashtags.
- Do NOT use bullet points or numbered lists anywhere.
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

  console.log("  Generating Slack, Twitter, and LinkedIn posts in parallel...");

  const [slack, twitter, linkedin] = await Promise.all([
    generate(client, SLACK_PROMPT, changelog, version, "Slack"),
    generate(client, TWITTER_PROMPT, changelog, version, "Twitter"),
    generate(client, LINKEDIN_PROMPT, changelog, version, "LinkedIn")
  ]);

  printSection("SLACK", slack);
  printSection("TWITTER", twitter);
  printSection("LINKEDIN", linkedin);

  console.log();
}

main().catch(err => {
  console.error("\nError:", err instanceof Error ? err.message : err);
  process.exit(1);
});
