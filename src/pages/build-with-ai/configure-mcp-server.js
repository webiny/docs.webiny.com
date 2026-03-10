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
  "title": "Custom MCP Skills",
  "description": "Learn how to add, override, or write custom skills for the Webiny MCP server to tailor AI assistance to your project.",
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
  "title": "Adding Extra Skills",
  "slug": "adding-extra-skills",
  "children": []
}, {
  "title": "Replacing Built-in Skills",
  "slug": "replacing-built-in-skills",
  "children": []
}, {
  "title": "Writing a Skill",
  "slug": "writing-a-skill",
  "children": []
}, {
  "title": "When to Use Custom Skills",
  "slug": "when-to-use-custom-skills",
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
<li parentName="ul">{`how to add custom skills on top of the built-in ones`}</li>
<li parentName="ul">{`how to replace the built-in skills entirely`}</li>
<li parentName="ul">{`how to write your own skill files`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`The Webiny MCP server ships with a set of built-in skills that cover standard development patterns — content models, lifecycle events, dependency injection, GraphQL schemas, infrastructure, and more. For most projects, these built-in skills are all you need.`}</p>
<p>{`However, as your project grows, you may want to extend the MCP server with project-specific knowledge — internal conventions, custom abstractions, domain-specific patterns, or team-specific workflows. You can do this by adding custom skills folders or replacing the built-in skills entirely.`}</p>
<Alert type="info" title="MCP server not set up yet?" mdxType="Alert">
<p>{`This page covers advanced MCP customization. If you haven’t connected the MCP server to your coding agent yet, start with `}<_Link href="/docs/get-started/connect-ai-environment">{`Connect Your AI Environment`}</_Link>{`.`}</p>
</Alert>
<_Heading level={2} id={"adding-extra-skills"} nextElement={{
      "type": "paragraph"
    }}>Adding Extra Skills</_Heading>
<p>{`Use the `}<inlineCode parentName="p">{`--additional-skills`}</inlineCode>{` flag to add a folder of custom skills on top of the built-in ones. Update the MCP server entry in your agent’s config file:`}</p>
<Editor title="" lang="json" mdxType="Editor">
{`{
  "mcpServers": {
    "webiny": {
      "command": "npx",
      "args": ["webiny", "mcp-server", "--additional-skills=./my-skills"]
    }
  }
}`}
</Editor>
<p>{`You can repeat the flag to add multiple folders:`}</p>
<Editor title="" lang="json" mdxType="Editor">
{`{
  "mcpServers": {
    "webiny": {
      "command": "npx",
      "args": [
        "webiny",
        "mcp-server",
        "--additional-skills=./team-skills",
        "--additional-skills=./project-skills"
      ]
    }
  }
}`}
</Editor>
<p>{`When a skill with the same name exists in multiple folders, the one in the highest-priority folder wins. Priority is determined by order: folders listed later on the command line take precedence over earlier ones, and all additional folders take precedence over the built-in skills.`}</p>
<_Heading level={2} id={"replacing-built-in-skills"} nextElement={{
      "type": "paragraph"
    }}>Replacing Built-in Skills</_Heading>
<p>{`Use the `}<inlineCode parentName="p">{`--skills`}</inlineCode>{` flag to replace the built-in skills folder entirely:`}</p>
<Editor title="" lang="json" mdxType="Editor">
{`{
  "mcpServers": {
    "webiny": {
      "command": "npx",
      "args": ["webiny", "mcp-server", "--skills=./my-skills"]
    }
  }
}`}
</Editor>
<p>{`When you use `}<inlineCode parentName="p">{`--skills`}</inlineCode>{`, only skills found in the specified folder are served. The built-in skills are ignored completely.`}</p>
<_Heading level={2} id={"writing-a-skill"} nextElement={{
      "type": "paragraph"
    }}>Writing a Skill</_Heading>
<p>{`Each skill is a folder containing a single `}<inlineCode parentName="p">{`SKILL.md`}</inlineCode>{` file. The file must start with YAML front-matter:`}</p>
<Editor title="" lang="null" mdxType="Editor">
{`---
name: my-custom-skill
description: >
  A short description of what this skill covers.
  The agent uses this to decide when to load the skill.
context: webiny-extensions
---

# My Custom Skill

The rest of the file is the skill content — markdown documentation
that gets returned to the agent when it calls \`get_webiny_skill\`.`}
</Editor>
<p><strong parentName="p">{`Front-matter fields:`}</strong></p>
<ul>
<li parentName="ul"><strong parentName="li"><inlineCode parentName="strong">{`name`}</inlineCode></strong>{` (required) — unique identifier for the skill, used as the `}<inlineCode parentName="li">{`topic`}</inlineCode>{` argument in `}<inlineCode parentName="li">{`get_webiny_skill`}</inlineCode></li>
<li parentName="ul"><strong parentName="li"><inlineCode parentName="strong">{`description`}</inlineCode></strong>{` (required) — shown in the skill catalog; helps the agent decide which skill to load`}</li>
<li parentName="ul"><strong parentName="li"><inlineCode parentName="strong">{`context`}</inlineCode></strong>{` (optional) — groups skills in the catalog; defaults to `}<inlineCode parentName="li">{`webiny-extensions`}</inlineCode></li>
</ul>
<p>{`Place the `}<inlineCode parentName="p">{`SKILL.md`}</inlineCode>{` file inside a descriptively named folder:`}</p>
<Editor title="" lang="null" mdxType="Editor">
{`my-skills/
├── custom-auth-flow/
│   └── SKILL.md
└── data-migration/
    └── SKILL.md`}
</Editor>
<p>{`Paths passed to `}<inlineCode parentName="p">{`--skills`}</inlineCode>{` and `}<inlineCode parentName="p">{`--additional-skills`}</inlineCode>{` are resolved relative to the current working directory (your project root).`}</p>
<_Heading level={2} id={"when-to-use-custom-skills"} nextElement={{
      "type": "paragraph"
    }}>When to Use Custom Skills</_Heading>
<p>{`Custom skills are useful when your project has patterns or conventions that go beyond what the built-in skills cover. Some examples:`}</p>
<ul>
<li parentName="ul"><strong parentName="li">{`Domain-specific models`}</strong>{` — document your project’s content model relationships, naming conventions, and field patterns so AI generates models that fit your domain`}</li>
<li parentName="ul"><strong parentName="li">{`Internal APIs`}</strong>{` — describe custom GraphQL schemas or third-party integrations your team has built, so AI knows how to use them`}</li>
<li parentName="ul"><strong parentName="li">{`Team conventions`}</strong>{` — codify coding standards, folder organization rules, or review checklists that your team follows`}</li>
<li parentName="ul"><strong parentName="li">{`Migration guides`}</strong>{` — provide step-by-step instructions for common data migrations or schema changes specific to your project`}</li>
</ul>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;