/**
 * Generates a Slack announcement for a given Webiny release version by reading
 * the changelog MDX file and using Claude to produce a concise, friendly message
 * matching the team's established Slack announcement style.
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
// Claude prompt
// ---------------------------------------------------------------------------

const STYLE_EXAMPLE = `
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

const SYSTEM_PROMPT = `
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
7. Blank line
8. "As usual, the release notes can be found on the following links:point_down::skin-tone-2::"
9. "Changelog: https://www.webiny.com/docs/release-notes/VERSION/changelog"
10. "How To Upgrade: https://www.webiny.com/docs/release-notes/VERSION/upgrade-guide"
11. A "—" separator line followed by a blank line
12. Blank line
13. Closing line — friendly, forward-looking, slightly playful. 1 sentence. End with an emoji.

Rules:
- Replace VERSION with the actual release version number in the URLs.
- Do NOT add any extra sections, bullet lists, or formatting beyond what is described above.
- "Webiny" is always capitalised.
- Keep the whole message short — it should be readable in 30 seconds.

Here is a real example of the style to match:

${STYLE_EXAMPLE}
`.trim();

async function generateAnnouncement(changelog: string, version: string): Promise<string> {
  const apiKey = process.env.CLAUDE_KEY;
  if (!apiKey) {
    throw new Error("CLAUDE_KEY environment variable is not set.");
  }

  const client = new Anthropic({ apiKey });

  const userMessage =
    `Generate a Slack announcement for Webiny version ${version}.\n\n` +
    `Here is the changelog:\n\n${changelog}`;

  console.log("  Sending changelog to Claude (claude-opus-4-5)...");

  const message = await client.messages.create({
    model: "claude-opus-4-5",
    max_tokens: 1024,
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
// Main
// ---------------------------------------------------------------------------

async function main(): Promise<void> {
  const { version } = parseArgs();

  console.log(`\nGenerating Slack announcement for Webiny ${version}...`);

  console.log("  Reading changelog...");
  const changelog = readChangelog(version);
  console.log("  Changelog loaded.");

  const announcement = await generateAnnouncement(changelog, version);

  console.log("\n" + "─".repeat(60));
  console.log(announcement);
  console.log("─".repeat(60) + "\n");
}

main().catch(err => {
  console.error("\nError:", err instanceof Error ? err.message : err);
  process.exit(1);
});
