/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.64f62e.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Welcome to Webiny Docs",
  "description": "Learn how to install Webiny and customize its capabilities as a developer.",
  "type": "docs",
  "showPageHeader": false,
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
  "title": "Webiny Docs",
  "slug": "webiny-docs",
  "children": []
}, {
  "title": "What Is Webiny?",
  "slug": "what-is-webiny",
  "children": []
}, {
  "title": "How to Use the Docs",
  "slug": "how-to-use-the-docs",
  "children": []
}, {
  "title": "Webiny Apps and “Framework Mode”",
  "slug": "webiny-apps-and-framework-mode",
  "children": []
}, {
  "title": "Prerequisite Knowledge",
  "slug": "prerequisite-knowledge",
  "children": []
}, {
  "title": "Where to Start",
  "slug": "where-to-start",
  "children": []
}, {
  "title": "Join the Webiny Community",
  "slug": "join-the-webiny-community",
  "children": []
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
const ExternalLink = makeShortcode("ExternalLink");
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


<_Heading level={2} id={"webiny-docs"} nextElement={{
      "type": "paragraph"
    }}>Webiny Docs</_Heading>
<p>{`Welcome to the Webiny documentation — your reference manual for building, extending, and operating Webiny.`}</p>
<p>{`Whether you’re integrating Webiny into an existing product, tailoring it into an enterprise content platform, or embedding it as a white-label builder, this portal is where you’ll find the exact methods, functions, and patterns you need.`}</p>
<hr></hr>
<_Heading level={2} id={"what-is-webiny"} nextElement={{
      "type": "paragraph"
    }}>What Is Webiny?</_Heading>
<p>{`Webiny is an open-source, self-hosted content platform that combines ready-made apps (like Headless CMS, Website Builder, File Manager/DAM, Publishing Workflows, and Tenant Manager) with a TypeScript framework and APIs you can extend. You get SaaS-like reliability on a serverless foundation — but deployed into `}<strong parentName="p">{`your`}</strong>{` cloud, under `}<strong parentName="p">{`your`}</strong>{` governance.`}</p>
<p>{`Webiny is built for teams that want flexibility without lock-in: define models and business rules as code, hook into lifecycle events, automate workflows, and integrate with any frontend or internal systems.`}</p>
<hr></hr>
<_Heading level={2} id={"how-to-use-the-docs"} nextElement={{
      "type": "paragraph"
    }}>How to Use the Docs</_Heading>
<p>{`The docs are organized into three sections:`}</p>
<p><strong parentName="p">{`Getting Started`}</strong>{`
Install Webiny, run it locally, deploy to your cloud, and learn the core building blocks.`}</p>
<p><strong parentName="p">{`Guides`}</strong>{`
Step-by-step tutorials for real projects: extending apps, adding custom logic, integrating SSO, automating publishing, building multi-tenant setups, embedding the page builder, and more.`}</p>
<p><strong parentName="p">{`API Reference`}</strong>{`
The detailed technical reference: functions, methods, types, GraphQL operations, lifecycle events, background tasks, and extension points.`}</p>
<p>{`Use the sidebar to navigate, or search (Ctrl+K / Cmd+K) to jump straight to what you need.`}</p>
<hr></hr>
<_Heading level={2} id={"webiny-apps-and-framework-mode"} nextElement={{
      "type": "paragraph"
    }}>Webiny Apps and “Framework Mode”</_Heading>
<p>{`Webiny has two complementary ways to work:`}</p>
<p><strong parentName="p">{`Apps (ready-made products)`}</strong>{`
Use Webiny’s built-in applications like Headless CMS, Website Builder, File Manager, Publishing Workflows, and Tenant Manager. They come with UI, permissions, editorial tooling, and the defaults most teams need.`}</p>
<p><strong parentName="p">{`Framework mode (build your own)`}</strong>{`
Treat Webiny as your programmable foundation: add modules, extend APIs, create custom screens, enforce business rules, and shape workflows around your organization — all in a way that stays maintainable and upgrade-safe.`}</p>
<hr></hr>
<_Heading level={2} id={"prerequisite-knowledge"} nextElement={{
      "type": "paragraph"
    }}>Prerequisite Knowledge</_Heading>
<p>{`This documentation assumes you’re comfortable with:`}</p>
<ul>
<li parentName="ul">{`JavaScript / TypeScript`}</li>
<li parentName="ul">{`Modern web development fundamentals`}</li>
<li parentName="ul">{`GraphQL basics`}</li>
<li parentName="ul">{`Node.js tooling`}</li>
</ul>
<p>{`If you’re new to GraphQL or TypeScript, start with the Getting Started section and follow the examples as you go.`}</p>
<hr></hr>
<_Heading level={2} id={"where-to-start"} nextElement={{
      "type": "paragraph"
    }}>Where to Start</_Heading>
<p>{`If you’re new to Webiny, follow the Get Started guides in order:`}</p>
<ol>
<li parentName="ol"><_Link href="/docs/get-started/quickstart">{`Quickstart`}</_Link>{` — create a project and deploy it to AWS`}</li>
<li parentName="ol"><_Link href="/docs/get-started/connect-ai-environment">{`Connect Your AI Environment`}</_Link>{` — set up the MCP server so AI can assist with customizations`}</li>
<li parentName="ol"><_Link href="/docs/get-started/first-customization">{`First Customization`}</_Link>{` — build a content model as your first code extension`}</li>
<li parentName="ol"><_Link href="/docs/get-started/local-development">{`Local Development`}</_Link>{` — learn the day-to-day development workflow`}</li>
<li parentName="ol"><_Link href="/docs/get-started/deploy-webiny">{`Deploy Webiny`}</_Link>{` — understand environments and deployment in depth`}</li>
</ol>
{`For a more guided, lesson-by-lesson learning experience, check out the `}
<strong>{`Learn Webiny Course`}</strong>
{` — a free, self-paced course at `}
<ExternalLink href="https://www.webiny.com/learn" mdxType="ExternalLink">
{`learn.webiny.com`}
</ExternalLink>
{`.`}
<hr></hr>
<_Heading level={2} id={"join-the-webiny-community"} nextElement={{
      "type": "paragraph"
    }}>Join the Webiny Community</_Heading>
{`If you get stuck, want feedback on an architecture, or need help with an extension, the community and the team are close by. You can also reach out if you want a technical deep-dive for your specific project. `}
<ExternalLink href="/slack" mdxType="ExternalLink">
{`Join Webiny Community`}
</ExternalLink>
{`.`}
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;