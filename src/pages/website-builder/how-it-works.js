/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Image } from "@/components/Image";
import webinyWebsiteBuilder from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/6.0.x/website-builder/assets/webiny-website-builder.png";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.64f62e.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "How It Works",
  "description": "Understand the Website Builder architecture and how it connects to your frontend app",
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
  "title": "Architecture",
  "slug": "architecture",
  "children": [{
    "title": "How They Connect",
    "slug": "how-they-connect",
    "children": []
  }]
}, {
  "title": "What Webiny Stores",
  "slug": "what-webiny-stores",
  "children": []
}, {
  "title": "What Your App Owns",
  "slug": "what-your-app-owns",
  "children": []
}, {
  "title": "SDK Responsibilities",
  "slug": "sdk-responsibilities",
  "children": []
}, {
  "title": "Benefits",
  "slug": "benefits",
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
<li parentName="ul">{`How does the Website Builder editor connect to your frontend app?`}</li>
<li parentName="ul">{`Where do components and styles live?`}</li>
<li parentName="ul">{`What role does the Webiny SDK play?`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`The Website Builder uses a unique architecture that separates content management from presentation. The editor runs in Webiny Admin and connects to your frontend app via an iframe. Your app owns all components and styles—Webiny only stores the page structure.`}</p>
<p>{`Webiny currently provides out-of-the-box support for Next.js through the `}<inlineCode parentName="p">{`@webiny/website-builder-nextjs`}</inlineCode>{` SDK. Support for additional frameworks is planned for future releases.`}</p>
<p>{`This approach ensures genuine WYSIWYG editing, no style conflicts, and full control over your frontend code.`}</p>
<_Heading level={2} id={"architecture"} nextElement={{
      "type": "paragraph"
    }}>Architecture</_Heading>
<p>{`The Website Builder consists of two separate parts:`}</p>
<p><strong parentName="p">{`Webiny Admin`}</strong>{` - The editor interface where content creators build pages by dragging components, configuring inputs, and publishing. The editor loads your Next.js app inside an iframe to provide live preview.`}</p>
<Image src={webinyWebsiteBuilder} alt="Website Builder editor interface showing component palette, canvas, and inputs sidebar" mdxType="Image" />
<p><strong parentName="p">{`Your Frontend App`}</strong>{` - Your frontend application with the Website Builder SDK installed. Currently, Webiny provides the `}<inlineCode parentName="p">{`@webiny/website-builder-nextjs`}</inlineCode>{` SDK for Next.js out-of-the-box. Your app contains all component code, styles, and rendering logic.`}</p>
<_Heading level={3} id={"how-they-connect"} nextElement={{
      "type": "code",
      "lang": null,
      "meta": null
    }}>How They Connect</_Heading>
<Editor title="" lang="null" mdxType="Editor">
{`┌──────────────────────────────────────────────────────────┐
│  Webiny Admin                                            │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │  Website Builder Editor                            │  │
│  │                                                    │  │
│  │   sidebar     ┌──────────────────────────────┐     │  │
│  │   (inputs)    │  your frontend app (iframe)  │     │  │
│  │               │  real components             │     │  │
│  │               │  real styles                 │     │  │
│  │               └──────────────────────────────┘     │  │
│  └────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────┘
                        ↕ postMessage (SDK)
┌──────────────────────────────────────────────────────────┐
│  Your Frontend App (running separately)                  │
│  Website Builder SDK installed (Next.js currently)       │
└──────────────────────────────────────────────────────────┘`}
</Editor>
<p>{`The SDK handles communication between the editor and your app using the browser’s `}<inlineCode parentName="p">{`postMessage`}</inlineCode>{` API. When editing, the editor sends component configurations to your app. When rendering for visitors, your app fetches published page data from Webiny’s API.`}</p>
<_Heading level={2} id={"what-webiny-stores"} nextElement={{
      "type": "paragraph"
    }}>What Webiny Stores</_Heading>
<p>{`Webiny stores only the page structure—which components are on the page and what input values editors configured for each component. It does not store component code, styles, or rendering logic.`}</p>
<p>{`Example page structure stored in Webiny:`}</p>
<Editor title="" lang="json" mdxType="Editor">
{`{
  "path": "/about",
  "title": "About Us",
  "components": [
    {
      "type": "Hero",
      "inputs": {
        "title": "Welcome to Our Company",
        "subtitle": "Building great products since 2020"
      }
    },
    {
      "type": "TextBlock",
      "inputs": {
        "content": "<p>Our story begins...</p>"
      }
    }
  ]
}`}
</Editor>
<p>{`Your Next.js app knows how to render `}<inlineCode parentName="p">{`Hero`}</inlineCode>{` and `}<inlineCode parentName="p">{`TextBlock`}</inlineCode>{` components—Webiny just passes the configuration.`}</p>
<_Heading level={2} id={"what-your-app-owns"} nextElement={{
      "type": "paragraph"
    }}>What Your App Owns</_Heading>
<p>{`Your frontend app owns everything related to presentation:`}</p>
<p><strong parentName="p">{`Component Code`}</strong>{` - All React components live in your codebase. You define component anatomy, inputs, and rendering logic.`}</p>
<p><strong parentName="p">{`Styles`}</strong>{` - All CSS, Tailwind classes, or CSS-in-JS lives in your app. No style conflicts with the platform.`}</p>
<p><strong parentName="p">{`Rendering Logic`}</strong>{` - Your app decides how to render components, handle responsive design, and optimize performance.`}</p>
<p><strong parentName="p">{`Theme Configuration`}</strong>{` - Colors, fonts, spacing, and other design tokens are defined in your theme files.`}</p>
<p>{`This separation means you have complete control over your frontend stack. Use any React patterns, styling approaches, or performance optimizations you need.`}</p>
<_Heading level={2} id={"sdk-responsibilities"} nextElement={{
      "type": "paragraph"
    }}>SDK Responsibilities</_Heading>
<p>{`The Website Builder SDK provides:`}</p>
<p><strong parentName="p">{`Editor Integration`}</strong>{` - Handles communication between the Website Builder editor and your app during editing sessions.`}</p>
<p><strong parentName="p">{`Page Fetching`}</strong>{` - Fetches published page data from Webiny’s API when rendering pages for visitors.`}</p>
<p><strong parentName="p">{`Component Registration`}</strong>{` - Provides utilities to register your components so they appear in the editor’s component palette.`}</p>
<p><strong parentName="p">{`Rendering Utilities`}</strong>{` - Helps render page components with the correct inputs and layout.`}</p>
<p>{`Webiny currently provides the `}<inlineCode parentName="p">{`@webiny/website-builder-nextjs`}</inlineCode>{` SDK for Next.js. The SDK is a thin layer that connects your app to Webiny without imposing constraints on your architecture.`}</p>
<_Heading level={2} id={"benefits"} nextElement={{
      "type": "paragraph"
    }}>Benefits</_Heading>
<p><strong parentName="p">{`Genuine WYSIWYG`}</strong>{` - Editors see your actual app with real styles, not a simulation.`}</p>
<p><strong parentName="p">{`No Style Conflicts`}</strong>{` - Your styles never clash with platform styles because the platform has no styles.`}</p>
<p><strong parentName="p">{`Full Control`}</strong>{` - Use any React patterns, build tools, or deployment strategies.`}</p>
<p><strong parentName="p">{`Version Control`}</strong>{` - All component code lives in your repository alongside your application code.`}</p>
<p><strong parentName="p">{`Performance`}</strong>{` - Optimize your frontend however you want—static generation, server rendering, client hydration.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;