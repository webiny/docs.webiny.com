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
  "title": "AI-Assisted Development",
  "description": "Learn how to use AI effectively when building with Webiny, including when to rely on it, how to guide it, and how to review the output safely.",
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
  "title": "The Development Workflow",
  "slug": "the-development-workflow",
  "children": []
}, {
  "title": "Where AI Helps the Most",
  "slug": "where-ai-helps-the-most",
  "children": []
}, {
  "title": "Where You Still Need to Lead",
  "slug": "where-you-still-need-to-lead",
  "children": []
}, {
  "title": "Writing Effective Prompts",
  "slug": "writing-effective-prompts",
  "children": []
}, {
  "title": "Giving AI the Right Context",
  "slug": "giving-ai-the-right-context",
  "children": []
}, {
  "title": "Breaking Work Into Steps",
  "slug": "breaking-work-into-steps",
  "children": []
}, {
  "title": "Reviewing AI-Generated Code",
  "slug": "reviewing-ai-generated-code",
  "children": []
}, {
  "title": "Common Mistakes to Watch For",
  "slug": "common-mistakes-to-watch-for",
  "children": []
}, {
  "title": "Putting It All Together",
  "slug": "putting-it-all-together",
  "children": []
}];

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
<li parentName="ul">{`how AI fits into the Webiny development workflow`}</li>
<li parentName="ul">{`what AI is good at, and where you still need to lead`}</li>
<li parentName="ul">{`how to write effective prompts for Webiny-related tasks`}</li>
<li parentName="ul">{`how to review and refine AI-generated code`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`Webiny is designed to be AI-programmable — its typed APIs, consistent extension patterns, and MCP server all make it easier for AI coding agents to generate correct, platform-native code. But getting good results from AI requires more than just asking it to build something. The best outcomes come when you understand the platform, give the agent the right context, and review the output critically.`}</p>
<p>{`This guide covers the practical workflow for using AI effectively when building with Webiny.`}</p>
<_Heading level={2} id={"the-development-workflow"} nextElement={{
      "type": "paragraph"
    }}>The Development Workflow</_Heading>
<p>{`A productive AI-assisted workflow with Webiny typically follows this pattern:`}</p>
<ul>
<li parentName="ul"><strong parentName="li">{`Understand`}</strong>{` the area of Webiny you want to change — which app, which extension point, what the expected behavior is`}</li>
<li parentName="ul"><strong parentName="li">{`Gather context`}</strong>{` — let the agent load the relevant MCP skill, point it at existing code, or reference docs`}</li>
<li parentName="ul"><strong parentName="li">{`Ask for a focused implementation`}</strong>{` — a single extension, a model change, a lifecycle hook — not an entire system at once`}</li>
<li parentName="ul"><strong parentName="li">{`Review the result`}</strong>{` — check that it follows Webiny patterns, uses the right imports, and belongs in the right place`}</li>
<li parentName="ul"><strong parentName="li">{`Test locally`}</strong>{` — use `}<inlineCode parentName="li">{`yarn webiny watch`}</inlineCode>{` to verify the change works`}</li>
<li parentName="ul"><strong parentName="li">{`Iterate`}</strong>{` — refine through short follow-ups rather than starting over`}</li>
</ul>
<p>{`This approach treats AI as a capable teammate who needs clear direction, not a magic button.`}</p>
<_Heading level={2} id={"where-ai-helps-the-most"} nextElement={{
      "type": "paragraph"
    }}>Where AI Helps the Most</_Heading>
<p>{`AI is especially effective when you already know what you want to build and need help getting there faster. Common tasks where AI adds real value include:`}</p>
<ul>
<li parentName="ul"><strong parentName="li">{`Scaffolding extensions`}</strong>{` — content models, lifecycle hooks, GraphQL schemas, Admin UI components`}</li>
<li parentName="ul"><strong parentName="li">{`Generating boilerplate`}</strong>{` — the `}<inlineCode parentName="li">{`ModelFactory`}</inlineCode>{`, `}<inlineCode parentName="li">{`GraphQLSchemaFactory`}</inlineCode>{`, and `}<inlineCode parentName="li">{`EventHandler`}</inlineCode>{` patterns follow repeatable structures that AI handles well`}</li>
<li parentName="ul"><strong parentName="li">{`Wiring integrations`}</strong>{` — connecting lifecycle events to external services, setting up API keys, building SDK queries`}</li>
<li parentName="ul"><strong parentName="li">{`Explaining code`}</strong>{` — asking the agent to explain unfamiliar parts of an existing Webiny project`}</li>
<li parentName="ul"><strong parentName="li">{`Debugging`}</strong>{` — describing an error and asking for likely causes and fixes`}</li>
</ul>
<p>{`The MCP server makes these tasks significantly more reliable because the agent can load the exact skill it needs — field types, validator options, DI services, event handler signatures — before writing code.`}</p>
<_Heading level={2} id={"where-you-still-need-to-lead"} nextElement={{
      "type": "paragraph"
    }}>Where You Still Need to Lead</_Heading>
<p>{`AI generates code, but it does not own the consequences of that code. You are still responsible for:`}</p>
<ul>
<li parentName="ul"><strong parentName="li">{`Choosing the right extension point`}</strong>{` — should this be a lifecycle hook, a use case override, or a custom GraphQL resolver?`}</li>
<li parentName="ul"><strong parentName="li">{`Deciding where code lives`}</strong>{` — API extension vs Admin extension vs infrastructure extension`}</li>
<li parentName="ul"><strong parentName="li">{`Validating business rules`}</strong>{` — AI does not know your domain logic unless you tell it`}</li>
<li parentName="ul"><strong parentName="li">{`Checking security`}</strong>{` — access control, tenant boundaries, and permission implications`}</li>
<li parentName="ul"><strong parentName="li">{`Ensuring upgrade-safety`}</strong>{` — code that modifies the wrong layer or bypasses extension points may break on future Webiny updates`}</li>
</ul>
<p>{`Think of AI as an accelerator. You set the direction; it helps you get there faster.`}</p>
<_Heading level={2} id={"writing-effective-prompts"} nextElement={{
      "type": "paragraph"
    }}>Writing Effective Prompts</_Heading>
<p>{`The quality of AI output is directly tied to the quality of your prompt. When working with Webiny, good prompts share a few characteristics:`}</p>
<ul>
<li parentName="ul"><strong parentName="li">{`Specific about what to build`}</strong>{` — “Add a `}<inlineCode parentName="li">{`publishDate`}</inlineCode>{` datetime field to the Article model” is far better than “Add date support”`}</li>
<li parentName="ul"><strong parentName="li">{`Clear about where it goes`}</strong>{` — “Create an API extension at `}<inlineCode parentName="li">{`extensions/ArticlePublishHook.ts`}</inlineCode>{`” removes ambiguity`}</li>
<li parentName="ul"><strong parentName="li">{`Explicit about constraints`}</strong>{` — “Use the `}<inlineCode parentName="li">{`EntryBeforePublishEventHandler`}</inlineCode>{` pattern, filter by `}<inlineCode parentName="li">{`article`}</inlineCode>{` modelId, and follow existing DI patterns”`}</li>
<li parentName="ul"><strong parentName="li">{`State the expected output`}</strong>{` — “Give me the full file, including the `}<inlineCode parentName="li">{`createImplementation`}</inlineCode>{` export and the registration line for `}<inlineCode parentName="li">{`webiny.config.tsx`}</inlineCode>{`”`}</li>
</ul>
<p>{`A vague prompt like this produces unreliable results:`}</p>
<blockquote>
<p parentName="blockquote">{`“Add approval logic to Webiny.”`}</p>
</blockquote>
<p>{`A better version provides the context the agent needs:`}</p>
<blockquote>
<p parentName="blockquote">{`“Create an API extension that hooks into the `}<inlineCode parentName="p">{`EntryBeforePublish`}</inlineCode>{` event for the `}<inlineCode parentName="p">{`article`}</inlineCode>{` model. If the `}<inlineCode parentName="p">{`status`}</inlineCode>{` field value is not `}<inlineCode parentName="p">{`approved`}</inlineCode>{`, prevent publishing by throwing an error. Use the standard EventHandler pattern with DI. Place the file at `}<inlineCode parentName="p">{`extensions/ArticleApprovalHook.ts`}</inlineCode>{`.”`}</p>
</blockquote>
<_Heading level={2} id={"giving-ai-the-right-context"} nextElement={{
      "type": "paragraph"
    }}>Giving AI the Right Context</_Heading>
<p>{`Before asking for code, make sure your agent has the context it needs. With the Webiny MCP server connected, the agent can load skills automatically. You can also help by:`}</p>
<ul>
<li parentName="ul"><strong parentName="li">{`Pointing at existing code`}</strong>{` — “Look at `}<inlineCode parentName="li">{`extensions/ArticleModel.ts`}</inlineCode>{` and follow the same pattern”`}</li>
<li parentName="ul"><strong parentName="li">{`Referencing a skill explicitly`}</strong>{` — “Load the `}<inlineCode parentName="li">{`lifecycle-events`}</inlineCode>{` skill before implementing this”`}</li>
<li parentName="ul"><strong parentName="li">{`Sharing constraints`}</strong>{` — “This project uses DynamoDB only, no OpenSearch”`}</li>
<li parentName="ul"><strong parentName="li">{`Providing the current `}<inlineCode parentName="strong">{`webiny.config.tsx`}</inlineCode></strong>{` — so the agent knows what extensions are already registered`}</li>
</ul>
<p>{`The more context you provide, the less the agent needs to guess — and the fewer corrections you need to make afterward.`}</p>
<_Heading level={2} id={"breaking-work-into-steps"} nextElement={{
      "type": "paragraph"
    }}>Breaking Work Into Steps</_Heading>
<p>{`AI performs better on focused tasks than on large, ambiguous requests. Instead of asking for an entire feature at once, break the work into steps:`}</p>
<ul>
<li parentName="ul">{`Define the content model`}</li>
<li parentName="ul">{`Add the lifecycle hook`}</li>
<li parentName="ul">{`Create the Admin UI component`}</li>
<li parentName="ul">{`Wire up the registration in `}<inlineCode parentName="li">{`webiny.config.tsx`}</inlineCode></li>
<li parentName="ul">{`Test and refine`}</li>
</ul>
<p>{`Each step produces a reviewable result. If something is wrong, you catch it early and fix it before building on top of it.`}</p>
<_Heading level={2} id={"reviewing-ai-generated-code"} nextElement={{
      "type": "paragraph"
    }}>Reviewing AI-Generated Code</_Heading>
<p>{`When the agent delivers code, go beyond “does it compile?” and ask:`}</p>
<ul>
<li parentName="ul"><strong parentName="li">{`Does it use the right pattern?`}</strong>{` — `}<inlineCode parentName="li">{`ModelFactory`}</inlineCode>{`, `}<inlineCode parentName="li">{`GraphQLSchemaFactory`}</inlineCode>{`, `}<inlineCode parentName="li">{`EventHandler`}</inlineCode>{`, or `}<inlineCode parentName="li">{`AdminConfig`}</inlineCode>{` depending on what it does`}</li>
<li parentName="ul"><strong parentName="li">{`Is it in the right place?`}</strong>{` — API extension for backend logic, Admin extension for UI changes`}</li>
<li parentName="ul"><strong parentName="li">{`Does it use the correct imports?`}</strong>{` — `}<inlineCode parentName="li">{`webiny/`}</inlineCode>{` prefix (not `}<inlineCode parentName="li">{`@webiny/`}</inlineCode>{`), correct module paths`}</li>
<li parentName="ul"><strong parentName="li">{`Does it follow the DI pattern?`}</strong>{` — dependencies declared in the constructor and listed in the `}<inlineCode parentName="li">{`dependencies`}</inlineCode>{` array in the same order`}</li>
<li parentName="ul"><strong parentName="li">{`Is the export correct?`}</strong>{` — API extensions must use `}<inlineCode parentName="li">{`export default`}</inlineCode>{` with `}<inlineCode parentName="li">{`createImplementation`}</inlineCode></li>
<li parentName="ul"><strong parentName="li">{`Does it register properly?`}</strong>{` — the right `}<inlineCode parentName="li">{`<Api.Extension>`}</inlineCode>{` or `}<inlineCode parentName="li">{`<Admin.Extension>`}</inlineCode>{` line in `}<inlineCode parentName="li">{`webiny.config.tsx`}</inlineCode></li>
</ul>
<p>{`These checks take seconds and prevent the kind of subtle bugs that are harder to find later.`}</p>
<_Heading level={2} id={"common-mistakes-to-watch-for"} nextElement={{
      "type": "paragraph"
    }}>Common Mistakes to Watch For</_Heading>
<p>{`A few patterns come up frequently when reviewing AI-generated Webiny code:`}</p>
<ul>
<li parentName="ul"><strong parentName="li">{`Wrong import prefix`}</strong>{` — using `}<inlineCode parentName="li">{`@webiny/`}</inlineCode>{` instead of `}<inlineCode parentName="li">{`webiny/`}</inlineCode>{` for v6 APIs`}</li>
<li parentName="ul"><strong parentName="li">{`Missing model filter`}</strong>{` — lifecycle hooks fire for all models by default; the handler must check `}<inlineCode parentName="li">{`modelId`}</inlineCode>{` to avoid running on unrelated content`}</li>
<li parentName="ul"><strong parentName="li">{`Inventing patterns`}</strong>{` — generating custom abstractions instead of using the built-in factories (`}<inlineCode parentName="li">{`ModelFactory`}</inlineCode>{`, `}<inlineCode parentName="li">{`GraphQLSchemaFactory`}</inlineCode>{`, etc.)`}</li>
<li parentName="ul"><strong parentName="li">{`Skipping registration`}</strong>{` — creating the extension file but forgetting the `}<inlineCode parentName="li">{`<Api.Extension>`}</inlineCode>{` or `}<inlineCode parentName="li">{`<Admin.Extension>`}</inlineCode>{` entry in `}<inlineCode parentName="li">{`webiny.config.tsx`}</inlineCode></li>
<li parentName="ul"><strong parentName="li">{`Overbuilding`}</strong>{` — generating a complex solution when a simpler extension point already exists`}</li>
</ul>
<p>{`If you notice these, correct the agent and it will usually adapt quickly.`}</p>
<Alert type="info" title="AI learns from your corrections" mdxType="Alert">
<p>{`Most AI coding agents improve within a conversation as you correct them. If the agent uses the wrong import path or pattern, point it out once. It will typically follow the correction for the rest of the session.`}</p>
</Alert>
<_Heading level={2} id={"putting-it-all-together"} nextElement={{
      "type": "paragraph"
    }}>Putting It All Together</_Heading>
<p>{`The practical workflow looks like this:`}</p>
<ul>
<li parentName="ul">{`Connect the MCP server (covered in `}<_Link href="/docs/get-started/connect-ai-environment">{`Connect Your AI Environment`}</_Link>{`)`}</li>
<li parentName="ul">{`Decide what you want to build`}</li>
<li parentName="ul">{`Ask the agent to load the relevant skill`}</li>
<li parentName="ul">{`Request a focused implementation with clear constraints`}</li>
<li parentName="ul">{`Review the output against the checklist above`}</li>
<li parentName="ul">{`Test locally with `}<inlineCode parentName="li">{`yarn webiny watch`}</inlineCode></li>
<li parentName="ul">{`Deploy with `}<inlineCode parentName="li">{`yarn webiny deploy api`}</inlineCode>{` or `}<inlineCode parentName="li">{`yarn webiny deploy admin`}</inlineCode></li>
<li parentName="ul">{`Iterate as needed`}</li>
</ul>
<p>{`This approach makes AI a genuine force multiplier — you move faster, write less boilerplate, and still maintain full control over the quality and architecture of your project.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;