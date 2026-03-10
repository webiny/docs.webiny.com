/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.64f62e.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Connect Your AI Environment",
  "description": "Set up the Webiny MCP server so your AI coding agent can assist with Webiny development.",
  "type": "docs",
  "showPageHeader": true,
  "fullWidth": false,
  "version": "6.0.x"
};
const docsearch = {
  "type": "docs",
  "weight": 100,
  "versions": ["latest", "6.0.x"]
};
const navigation = _navigation;
const versions = _versions;
const tableOfContents = [{
  "title": "Overview",
  "slug": "overview",
  "children": []
}, {
  "title": "Quick Setup",
  "slug": "quick-setup",
  "children": []
}, {
  "title": "Manual Setup",
  "slug": "manual-setup",
  "children": [{
    "title": "Register the MCP Server",
    "slug": "register-the-mcp-server",
    "children": []
  }, {
    "title": "Add Agent Instructions",
    "slug": "add-agent-instructions",
    "children": []
  }]
}, {
  "title": "Verify the Connection",
  "slug": "verify-the-connection",
  "children": []
}, {
  "title": "What's Next",
  "slug": "what-s-next",
  "children": []
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
const Editor = makeShortcode("Editor");
const layoutProps = {
  Layout,
pageData,
docsearch,
navigation,
versions,
tableOfContents
};
const MDXLayout = "wrapper"
export default function MDXContent({
  components,
  ...props
}) {
  return <MDXLayout {...layoutProps} {...props} components={components} mdxType="MDXLayout">



<Alert type="success" title="WHAT YOU'LL LEARN" mdxType="Alert">
<ul>
<li parentName="ul">{`what the Webiny MCP server provides to your AI coding agent`}</li>
<li parentName="ul">{`how to connect it using the built-in setup command`}</li>
<li parentName="ul">{`how to configure it manually for any supported agent`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`Webiny ships with a local `}<a parentName="p" {...{
        "href": "https://modelcontextprotocol.io/"
      }}>{`MCP (Model Context Protocol)`}</a>{` server that gives your AI coding agent structured, up-to-date knowledge about Webiny APIs, extension patterns, and project conventions. Instead of relying on general training data, the MCP server provides detailed skills — focused guides on specific topics like content models, lifecycle events, dependency injection, and infrastructure — directly to the agent when it needs them.`}</p>
<p>{`The server exposes two tools your agent calls automatically:`}</p>
<ul>
<li parentName="ul"><strong parentName="li"><inlineCode parentName="strong">{`list_webiny_skills`}</inlineCode></strong>{` — returns a catalog of all available skills with names and descriptions`}</li>
<li parentName="ul"><strong parentName="li"><inlineCode parentName="strong">{`get_webiny_skill`}</inlineCode></strong>{` — loads the full documentation for a specific skill by name`}</li>
</ul>
<p>{`Connecting the MCP server early means your agent can assist with all the customization work that follows.`}</p>
<_Heading level={2} id={"quick-setup"} nextElement={{
      "type": "paragraph"
    }}>Quick Setup</_Heading>
<p>{`The fastest way to connect is to run the built-in setup command from your Webiny project root:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`npx webiny configure-mcp claude`}
</Editor>
<p>{`Replace `}<inlineCode parentName="p">{`claude`}</inlineCode>{` with your agent of choice:`}</p>
<ul>
<li parentName="ul"><inlineCode parentName="li">{`claude`}</inlineCode>{` — Claude Code`}</li>
<li parentName="ul"><inlineCode parentName="li">{`cursor`}</inlineCode>{` — Cursor`}</li>
<li parentName="ul"><inlineCode parentName="li">{`windsurf`}</inlineCode>{` — Windsurf`}</li>
<li parentName="ul"><inlineCode parentName="li">{`copilot`}</inlineCode>{` — GitHub Copilot / VS Code`}</li>
<li parentName="ul"><inlineCode parentName="li">{`cline`}</inlineCode>{` — Cline`}</li>
</ul>
<p>{`This command creates two files:`}</p>
<ul>
<li parentName="ul"><strong parentName="li">{`MCP config file`}</strong>{` — tells your agent how to start the Webiny MCP server`}</li>
<li parentName="ul"><strong parentName="li">{`Instruction file`}</strong>{` — tells your agent to use the Webiny tools when working on Webiny-related tasks`}</li>
</ul>
<p>{`Once done, restart your agent or reload the editor window. The Webiny MCP server becomes available immediately.`}</p>
<_Heading level={2} id={"manual-setup"} nextElement={{
      "type": "paragraph"
    }}>Manual Setup</_Heading>
<p>{`If your agent is not covered by the built-in adapters, or you prefer to configure things yourself, follow the two steps below.`}</p>
<_Heading level={3} id={"register-the-mcp-server"} nextElement={{
      "type": "paragraph"
    }}>Register the MCP Server</_Heading>
<p>{`Add the following entry to your agent’s MCP configuration file:`}</p>
<Editor title="" lang="json" mdxType="Editor">
{`{
  "mcpServers": {
    "webiny": {
      "command": "npx",
      "args": ["webiny", "mcp-server"]
    }
  }
}`}
</Editor>
<p>{`The location of this file depends on your agent:`}</p>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Agent`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Config file`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Claude Code`}</td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`.mcp.json`}</inlineCode>{` (project root)`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Cursor`}</td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`.cursor/mcp.json`}</inlineCode>{` (project root)`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Windsurf`}</td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`.windsurf/mcp.json`}</inlineCode>{` (project root)`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`GitHub Copilot / VS Code`}</td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`.vscode/mcp.json`}</inlineCode>{` (project root)`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Cline`}</td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`.vscode/cline_mcp_settings.json`}</inlineCode></td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Zed`}</td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`~/.config/zed/settings.json`}</inlineCode>{` (under `}<inlineCode parentName="td">{`context_servers`}</inlineCode>{`)`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Claude Desktop`}</td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`~/Library/Application Support/Claude/claude_desktop_config.json`}</inlineCode>{` (macOS)`}</td>
</tr>
</tbody>
</table>
<Alert type="info" title="GitHub Copilot uses a different key" mdxType="Alert">
<p>{`GitHub Copilot expects `}<inlineCode parentName="p">{`servers`}</inlineCode>{` instead of `}<inlineCode parentName="p">{`mcpServers`}</inlineCode>{` in its config file. The rest of the structure is the same.`}</p>
</Alert>
<_Heading level={3} id={"add-agent-instructions"} nextElement={{
      "type": "paragraph"
    }}>Add Agent Instructions</_Heading>
<p>{`Add the following to your agent’s instruction or rules file so it knows to use the Webiny tools:`}</p>
<Editor title="" lang="null" mdxType="Editor">
{`## Webiny

This project uses the Webiny framework.
A \`webiny\` MCP server is available.
When helping with Webiny-related tasks:
1. Call \`list_webiny_skills\` to see available skills.
2. Call \`get_webiny_skill\` with the relevant topic before writing code.`}
</Editor>
<p>{`The location of the instruction file depends on your agent:`}</p>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Agent`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Instruction file`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Claude Code`}</td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`CLAUDE.md`}</inlineCode>{` (project root)`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Cursor`}</td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`.cursor/rules/*.mdc`}</inlineCode></td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Windsurf`}</td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`.windsurf/rules/*.md`}</inlineCode></td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`GitHub Copilot / VS Code`}</td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`.github/copilot-instructions.md`}</inlineCode></td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Cline`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`System prompt in settings`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Zed`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`System prompt in settings`}</td>
</tr>
</tbody>
</table>
<_Heading level={2} id={"verify-the-connection"} nextElement={{
      "type": "paragraph"
    }}>Verify the Connection</_Heading>
<p>{`The simplest way to verify is to ask your agent a question like:`}</p>
<blockquote>
<p parentName="blockquote">{`“List all available Webiny skills.”`}</p>
</blockquote>
<p>{`If the MCP server is connected, the agent will call `}<inlineCode parentName="p">{`list_webiny_skills`}</inlineCode>{` and return a catalog of topics like `}<inlineCode parentName="p">{`content-models`}</inlineCode>{`, `}<inlineCode parentName="p">{`lifecycle-events`}</inlineCode>{`, `}<inlineCode parentName="p">{`dependency-injection`}</inlineCode>{`, and others.`}</p>
<p>{`You can also test the server independently using the MCP Inspector:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`npx @modelcontextprotocol/inspector npx webiny mcp-server`}
</Editor>
<p>{`Connect, click `}<strong parentName="p">{`List Tools`}</strong>{`, and confirm you see `}<inlineCode parentName="p">{`list_webiny_skills`}</inlineCode>{` and `}<inlineCode parentName="p">{`get_webiny_skill`}</inlineCode>{`.`}</p>
<Alert type="info" title="Remote Docs MCP Server" mdxType="Alert">
<p>{`A separate remote MCP server is also available at `}<inlineCode parentName="p">{`https://mcp.docs.webiny.com/mcp`}</inlineCode>{` for tools that are not project-based IDEs — such as Claude Desktop, ChatGPT, or Claude.ai. This server provides access to the full Webiny documentation rather than the project-level skills described on this page.`}</p>
</Alert>
<_Heading level={2} id={"what-s-next"} nextElement={{
      "type": "paragraph"
    }}>What&#39;s Next</_Heading>
<p>{`With your AI environment connected, you’re ready to make your first customization with AI assistance.`}</p>
<p>{`Continue to `}<_Link href="/docs/get-started/first-customization">{`First Customization`}</_Link>{`.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;