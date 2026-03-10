/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/get-started/assets/vs-code-webiny-mcp.png'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "AI Assistant and MCP Server",
  "description": "Learn how to use AI assistant and Remote MCP Server effectively in your Webiny development workflow.",
  "type": "docs",
  "showPageHeader": true,
  "fullWidth": false,
  "version": "5.x"
};
const docsearch = {
  "type": "docs",
  "weight": 100,
  "versions": ["5.x"]
};
const navigation = _navigation;
const versions = _versions;
const tableOfContents = [{
  "title": "Webiny MCP Server",
  "slug": "webiny-mcp-server",
  "children": [{
    "title": "Server Details",
    "slug": "server-details",
    "children": []
  }, {
    "title": "Cursor",
    "slug": "cursor",
    "children": []
  }, {
    "title": "VS Code",
    "slug": "vs-code",
    "children": []
  }, {
    "title": "Claude Desktop",
    "slug": "claude-desktop",
    "children": []
  }, {
    "title": "Manual Setup",
    "slug": "manual-setup",
    "children": []
  }, {
    "title": "Claude Code CLI",
    "slug": "claude-code-cli",
    "children": []
  }, {
    "title": "Claude Code GitHub Action",
    "slug": "claude-code-git-hub-action",
    "children": []
  }, {
    "title": "Warp",
    "slug": "warp",
    "children": []
  }, {
    "title": "Claude.ai",
    "slug": "claude-ai",
    "children": []
  }, {
    "title": "Windsurf",
    "slug": "windsurf",
    "children": []
  }, {
    "title": "Gemini CLI",
    "slug": "gemini-cli",
    "children": []
  }, {
    "title": "Zed",
    "slug": "zed",
    "children": []
  }, {
    "title": "ChatGPT",
    "slug": "chat-gpt",
    "children": []
  }]
}, {
  "title": "Usage",
  "slug": "usage",
  "children": []
}, {
  "title": "Troubleshooting",
  "slug": "troubleshooting",
  "children": []
}, {
  "title": "AI Assistant in Documentation",
  "slug": "ai-assistant-in-documentation",
  "children": []
}, {
  "title": "FAQ",
  "slug": "faq",
  "children": [{
    "title": "Can I Use the MCP Server With Any AI Assistant?",
    "slug": "can-i-use-the-mcp-server-with-any-ai-assistant",
    "children": []
  }, {
    "title": "Is the Webiny MCP Server Free to Use?",
    "slug": "is-the-webiny-mcp-server-free-to-use",
    "children": []
  }, {
    "title": "How Often Is the MCP Server Updated?",
    "slug": "how-often-is-the-mcp-server-updated",
    "children": []
  }]
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
const Editor = makeShortcode("Editor");
const Image = makeShortcode("Image");
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
<li parentName="ul">{`how to use AI assistant with Webiny documentation`}</li>
<li parentName="ul">{`how to connect to the Remote Webiny MCP Server for enhanced AI assistance`}</li>
</ul>
</Alert>
<p>{`In this guide, you’ll learn how you can use AI assistants and Remote MCP Server effectively in your Webiny development workflow.`}</p>
<_Heading level={2} id={"webiny-mcp-server"} nextElement={{
      "type": "paragraph"
    }}>Webiny MCP Server</_Heading>
<p>{`The Webiny documentation provides a remote Model Context Protocol (MCP) server that allows you to find information from the Webiny documentation right in your IDEs or AI tools, such as Cursor.
You can ensure your AI tools have current Webiny knowledge through the Webiny MCP server. This provides real-time access to the latest documentation, helping AI tools avoid outdated recommendations and ensuring they understand current best practices.`}</p>
<Alert type="info" title="What is MCP?" mdxType="Alert">
<p><a parentName="p" {...{
          "href": "https://modelcontextprotocol.io/"
        }}>{`Model Context Protocol`}</a>{` (MCP) is a standardized way for AI tools to access external tools and data sources.`}</p>
</Alert>
<_Heading level={3} id={"server-details"} nextElement={{
      "type": "list",
      "ordered": false,
      "start": null,
      "spread": false
    }}>Server Details</_Heading>
<ul>
<li parentName="ul"><strong parentName="li">{`Name`}</strong>{`: Webiny Docs`}</li>
<li parentName="ul"><strong parentName="li">{`URL`}</strong>{`: `}<inlineCode parentName="li">{`https://mcp.docs.webiny.com/mcp`}</inlineCode></li>
<li parentName="ul"><strong parentName="li">{`Transport`}</strong>{`: Streamable HTTP`}</li>
</ul>
<p>{`You can add it to AI agents that support connecting to MCP servers.`}</p>
<_Heading level={3} id={"cursor"} nextElement={{
      "type": "paragraph"
    }}>Cursor</_Heading>
<p>{`To connect to the Webiny MCP server in Cursor, add the following to your `}<inlineCode parentName="p">{`.cursor/mcp.json`}</inlineCode>{` file or Cursor settings, as explained in the `}<a parentName="p" {...{
        "href": "https://docs.cursor.com/context/model-context-protocol"
      }}>{`Cursor documentation`}</a>{`:`}</p>
<Editor title="" lang="json" mdxType="Editor">
{`{
  "mcpServers": {
    "webiny": {
      "url": "https://mcp.docs.webiny.com/mcp"
    }
  }
}`}
</Editor>
<_Heading level={3} id={"vs-code"} nextElement={{
      "type": "paragraph"
    }}>VS Code</_Heading>
<p><a parentName="p" {...{
        "href": "https://vscode.dev/redirect/mcp/install?name=webiny&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmcp.docs.webiny.com%2Fmcp%22%7D"
      }}>{`Click here`}</a>{` to add the Webiny MCP server to VS Code.`}</p>
<p>{`To manually connect to the Webiny MCP server in VS Code, add the following to your `}<inlineCode parentName="p">{`.vscode/mcp.json`}</inlineCode>{` file in your workspace:`}</p>
<Editor title="" lang="json" mdxType="Editor">
{`{
  "servers": {
    "webiny": {
      "type": "http",
      "url": "https://mcp.docs.webiny.com/mcp"
    }
  }
}`}
</Editor>
<p>{`Learn more in the `}<a parentName="p" {...{
        "href": "https://code.visualstudio.com/docs/copilot/chat/mcp-servers"
      }}>{`VS Code documentation`}</a>{`.`}</p>
<Alert type="info" title="Additional One-Time Setup in VS Code" mdxType="Alert">
  Sometimes, in VS Code, you may need to perform a one-time setup. When you ask a question and include a phrase like “use Webiny Docs”, then VS Code will prompt you to enable the Webiny MCP server for all sessions. Allow it, and the setup will be complete. This step is required only once. Please refer to the image below for reference.
</Alert>
<Image src={_Image1} alt={"VS Code Webiny MCP Server"} mdxType="Image" />
<_Heading level={3} id={"claude-desktop"} nextElement={{
      "type": "paragraph"
    }}>Claude Desktop</_Heading>
<p>{`To connect to the Webiny MCP server in Claude Desktop, add the following to your Claude Desktop configuration file:`}</p>
<p><strong parentName="p">{`macOS`}</strong>{`: `}<inlineCode parentName="p">{`~/Library/Application Support/Claude/claude_desktop_config.json`}</inlineCode></p>
<p><strong parentName="p">{`Windows`}</strong>{`: `}<inlineCode parentName="p">{`%APPDATA%\\Claude\\claude_desktop_config.json`}</inlineCode></p>
<Editor title="" lang="json" mdxType="Editor">
{`{
  "mcpServers": {
    "webiny": {
      "command": "npx",
      "args": [
        "@modelcontextprotocol/server-fetch",
        "https://mcp.docs.webiny.com/mcp"
      ]
    }
  }
}`}
</Editor>
<p>{`Learn more in the `}<a parentName="p" {...{
        "href": "https://docs.anthropic.com/en/docs/build-with-claude/computer-use"
      }}>{`Claude Desktop documentation`}</a>{`.`}</p>
<_Heading level={3} id={"manual-setup"} nextElement={{
      "type": "paragraph"
    }}>Manual Setup</_Heading>
<p>{`Many tools support a common JSON configuration format for MCP servers. If there are not specific instructions for your chosen tool, you may be able to add the Webiny Docs MCP server by including the following configuration in your tool’s MCP settings:`}</p>
<p><strong parentName="p">{`Streamable HTTP:`}</strong></p>
<Editor title="" lang="json" mdxType="Editor">
{`{
  "mcpServers": {
    "Webiny docs": {
      "type": "http",
      "url": "https://mcp.docs.webiny.com/mcp"
    }
  }
}`}
</Editor>
<p><strong parentName="p">{`Local Proxy:`}</strong></p>
<Editor title="" lang="json" mdxType="Editor">
{`{
  "mcpServers": {
    "Webiny docs": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "mcp-remote", "https://mcp.docs.webiny.com/mcp"]
    }
  }
}`}
</Editor>
<_Heading level={3} id={"claude-code-cli"} nextElement={{
      "type": "paragraph"
    }}>Claude Code CLI</_Heading>
<p><a parentName="p" {...{
        "href": "https://docs.anthropic.com/en/docs/claude-code/overview"
      }}>{`Claude Code`}</a>{` is an agentic coding tool that runs on the command line. Enabling the Webiny Docs MCP server allows it to access the latest documentation while generating Webiny code.`}</p>
<p>{`Install using the terminal command:`}</p>
<Editor title="" lang="shell" mdxType="Editor">
{`claude mcp add --transport http webiny-docs https://mcp.docs.webiny.com/mcp`}
</Editor>
<p>{`Learn more about `}<a parentName="p" {...{
        "href": "https://docs.anthropic.com/en/docs/claude-code/mcp"
      }}>{`using MCP servers with Claude Code`}</a>{`.`}</p>
<_Heading level={3} id={"claude-code-git-hub-action"} nextElement={{
      "type": "paragraph"
    }}>Claude Code GitHub Action</_Heading>
<p>{`Claude Code also provides a GitHub Action that can be used to run commands in response to GitHub events. Enabling the Webiny Docs MCP server allows it to access the latest documentation while answering questions in comments or generating Webiny code.`}</p>
<p>{`You can configure it to use the Webiny Docs MCP server for documentation access by adding the following to the workflow file:`}</p>
<Editor title="" lang="yaml" mdxType="Editor">
{`# ...rest of your workflow configuration
- uses: anthropics/claude-code-action@beta
  with:
    anthropic_api_key: \${{ secrets.ANTHROPIC_API_KEY }}
    mcp_config: |
      {
        "mcpServers": {
          "webiny-docs": {
            "type": "http",
            "url": "https://mcp.docs.webiny.com/mcp"
          }
        }
      }
    allowed_tools: "mcp__webiny-docs__search_webiny_docs"`}
</Editor>
<p>{`Learn more about `}<a parentName="p" {...{
        "href": "https://github.com/anthropics/claude-code-action?tab=readme-ov-file#using-custom-mcp-configuration"
      }}>{`using MCP servers with the Claude Code GitHub Action`}</a>{`.`}</p>
<_Heading level={3} id={"warp"} nextElement={{
      "type": "paragraph"
    }}>Warp</_Heading>
<p><a parentName="p" {...{
        "href": "https://warp.dev"
      }}>{`Warp`}</a>{` is an agent development environment built for coding with multiple AI agents. Adding the Webiny Docs MCP server allows Warp to access the latest Webiny documentation when answering questions or performing coding tasks.`}</p>
<ol>
<li parentName="ol">{`Open your Warp settings and go to AI > MCP Servers > Manage MCP Servers.`}</li>
<li parentName="ol">{`Click “Add”.`}</li>
<li parentName="ol">{`Enter the following configuration. You can optionally configure the Webiny MCP server to activate on startup using the `}<inlineCode parentName="li">{`start_on_launch`}</inlineCode>{` flag:`}
<Editor title="" lang="json" mdxType="Editor">
{`{
  "mcpServers": {
    "Webiny docs": {
      "command": "npx",
      "args": ["-y", "mcp-remote", "https://mcp.docs.webiny.com/mcp"],
      "env": {},
      "working_directory": null,
      "start_on_launch": true
    }
  }
}`}
</Editor>
</li>
<li parentName="ol">{`Click “Save”.`}</li>
</ol>
<p>{`Learn more about `}<a parentName="p" {...{
        "href": "https://docs.warp.dev/knowledge-and-collaboration/mcp"
      }}>{`using MCP servers with Warp`}</a>{`.`}</p>
<_Heading level={3} id={"claude-ai"} nextElement={{
      "type": "paragraph"
    }}>Claude.ai</_Heading>
<p><a parentName="p" {...{
        "href": "https://claude.ai"
      }}>{`Claude.ai`}</a>{` is a general-purpose AI assistant. Adding the Webiny Docs MCP server allows it to access the latest documentation when answering Webiny questions or generating Webiny code.`}</p>
<ol>
<li parentName="ol">{`Navigate to the `}<a parentName="li" {...{
          "href": "https://claude.ai/settings/connectors"
        }}>{`Claude.ai connector settings`}</a>{`.`}</li>
<li parentName="ol">{`Click “Add custom connector”. You may need to scroll down to find this option.`}</li>
<li parentName="ol">{`Enter the server URL: `}<inlineCode parentName="li">{`https://mcp.docs.webiny.com/mcp`}</inlineCode>{`.`}</li>
<li parentName="ol">{`Set the name to “Webiny docs”.`}</li>
</ol>
<p>{`Learn more about `}<a parentName="p" {...{
        "href": "https://support.anthropic.com/en/articles/10168395-setting-up-integrations-on-claude-ai#h_cda40ecb32"
      }}>{`using MCP servers with Claude.ai`}</a>{`.`}</p>
<_Heading level={3} id={"windsurf"} nextElement={{
      "type": "paragraph"
    }}>Windsurf</_Heading>
<p><a parentName="p" {...{
        "href": "https://windsurf.com/"
      }}>{`Windsurf`}</a>{` is an AI-powered agentic coding tool, available as editor plugins or a standalone editor. It can use the Webiny Docs MCP server to access documentation while performing coding tasks.`}</p>
<p>{`Windsurf doesn’t support streaming HTTP, so it requires a local proxy configuration:`}</p>
<ol>
<li parentName="ol">{`Open `}<inlineCode parentName="li">{`~/.codeium/windsurf/mcp_config.json`}</inlineCode>{` in your editor.`}</li>
<li parentName="ol">{`Add the following configuration to your Windsurf MCP settings:`}
<Editor title="" lang="json" mdxType="Editor">
{`{
  "mcpServers": {
    "Webiny docs": {
      "command": "npx",
      "args": ["-y", "mcp-remote", "https://mcp.docs.webiny.com/mcp"]
    }
  }
}`}
</Editor>
</li>
<li parentName="ol">{`Save the configuration and restart Windsurf.`}</li>
</ol>
<p>{`Learn more about `}<a parentName="p" {...{
        "href": "https://docs.windsurf.com/windsurf/cascade/mcp#mcp-config-json"
      }}>{`using MCP servers with Windsurf`}</a>{`.`}</p>
<_Heading level={3} id={"gemini-cli"} nextElement={{
      "type": "paragraph"
    }}>Gemini CLI</_Heading>
<p>{`Gemini CLI is a command-line AI coding tool that can use the Webiny Docs MCP server to access documentation while generating Webiny code.`}</p>
<p>{`You can configure MCP servers at the global level in the `}<inlineCode parentName="p">{`~/.gemini/settings.json`}</inlineCode>{` file, or in a `}<inlineCode parentName="p">{`.gemini/settings.json`}</inlineCode>{` file in a project root.`}</p>
<Editor title="" lang="json" mdxType="Editor">
{`{
  "mcpServers": {
    "Webiny docs": {
      "httpUrl": "https://mcp.docs.webiny.com/mcp"
    }
  }
}`}
</Editor>
<p>{`Learn more about `}<a parentName="p" {...{
        "href": "https://github.com/google-gemini/gemini-cli/blob/main/docs/tools/mcp-server.md"
      }}>{`using MCP servers with Gemini CLI`}</a>{`.`}</p>
<_Heading level={3} id={"zed"} nextElement={{
      "type": "paragraph"
    }}>Zed</_Heading>
<p><a parentName="p" {...{
        "href": "https://zed.dev"
      }}>{`Zed`}</a>{` supports MCP servers when using its AI capabilities. It can use the Webiny Docs MCP server to access documentation while performing coding tasks.`}</p>
<p>{`Zed doesn’t support streaming HTTP, so it requires a local proxy configuration:`}</p>
<ol>
<li parentName="ol">{`Open `}<inlineCode parentName="li">{`~/.config/zed/settings.json`}</inlineCode>{` in your editor.`}</li>
<li parentName="ol">{`Add the following configuration to your Zed MCP settings:`}
<Editor title="" lang="json" mdxType="Editor">
{`{
  "context_servers": {
    "Webiny docs": {
      "command": "npx",
      "args": ["-y", "mcp-remote", "https://mcp.docs.webiny.com/mcp"]
    }
  }
}`}
</Editor>
</li>
<li parentName="ol">{`Save the configuration.`}</li>
</ol>
<p>{`Learn more about `}<a parentName="p" {...{
        "href": "https://zed.dev/docs/ai/mcp"
      }}>{`using MCP servers with Zed`}</a>{`.`}</p>
<_Heading level={3} id={"chat-gpt"} nextElement={{
      "type": "jsx"
    }}>ChatGPT</_Heading>
<Alert type="warning" title="Limited availability" mdxType="Alert">
<p>{`MCP server integration is only available for ChatGPT Pro, Team, and Enterprise users. The setup process is more complex than other tools.`}</p>
</Alert>
<p>{`Refer to the `}<a parentName="p" {...{
        "href": "https://platform.openai.com/docs/mcp#test-and-connect-your-mcp-server"
      }}>{`OpenAI MCP documentation`}</a>{` for specific setup instructions.`}</p>
<_Heading level={2} id={"usage"} nextElement={{
      "type": "paragraph"
    }}>Usage</_Heading>
<p>{`Once configured, you can ask your AI tool questions about Webiny, and it will retrieve information directly from the latest docs. Coding agents will be able to consult the latest documentation when performing coding tasks, and chatbots will be able to accurately answer questions about Webiny features, APIs, and best practices.`}</p>
<_Heading level={2} id={"troubleshooting"} nextElement={{
      "type": "paragraph"
    }}>Troubleshooting</_Heading>
<p>{`If you encounter issues:`}</p>
<ul>
<li parentName="ul">{`Verify that your tool supports streamable HTTP transport.`}</li>
<li parentName="ul">{`Check that the server URL is correct: `}<inlineCode parentName="li">{`https://mcp.docs.webiny.com/mcp`}</inlineCode>{`.`}</li>
<li parentName="ul">{`Ensure your tool has proper internet access.`}</li>
<li parentName="ul">{`Consult your specific tool’s MCP integration documentation.`}</li>
</ul>
<p>{`If you are still having problems, please reach out to our `}<a parentName="p" {...{
        "href": "https://www.webiny.com/slack"
      }}>{`community support channels`}</a>{` for assistance.`}</p>
<_Heading level={2} id={"ai-assistant-in-documentation"} nextElement={{
      "type": "paragraph"
    }}>AI Assistant in Documentation</_Heading>
<p>{`The Webiny documentation is equipped with an AI Assistant that can answer your questions and help you build customizations with Webiny. To open the AI Assistant, Click the “Ask AI” button in the bottom right corner of the documentation.`}</p>
<p>{`You can then ask the AI Assistant any questions about Webiny and the AI Assistant will provide you with relevant documentation links, code snippets, and explanations to help you with your development.`}</p>
<_Heading level={2} id={"faq"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>FAQ</_Heading>
<_Heading level={3} id={"can-i-use-the-mcp-server-with-any-ai-assistant"} nextElement={{
      "type": "paragraph"
    }}>Can I Use the MCP Server With Any AI Assistant?</_Heading>
<p>{`The MCP server works with any AI assistant or tool that supports the Model Context Protocol. This includes popular tools like Cursor, VSCode with Copilot, Claude Desktop, and many others.`}</p>
<_Heading level={3} id={"is-the-webiny-mcp-server-free-to-use"} nextElement={{
      "type": "paragraph"
    }}>Is the Webiny MCP Server Free to Use?</_Heading>
<p>{`Yes, the Webiny MCP server is free to use and provides access to all public Webiny documentation.`}</p>
<_Heading level={3} id={"how-often-is-the-mcp-server-updated"} nextElement={{
      "type": "paragraph"
    }}>How Often Is the MCP Server Updated?</_Heading>
<p>{`The MCP server is automatically updated whenever the Webiny documentation is updated, ensuring you always have access to the latest information.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;