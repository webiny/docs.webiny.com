/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { WhatYouWillLearn } from "@/components/WhatYouWillLearn";
import webinyExtensionCommand from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/core-development-concepts/basics/assets/webiny-extension-command.png";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Extensions",
  "description": "Learn what extensions are and how they can be used to extend Webiny's functionality.",
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
  "title": "Overview",
  "slug": "overview",
  "children": []
}, {
  "title": "Getting Started",
  "slug": "getting-started",
  "children": []
}, {
  "title": "FAQ",
  "slug": "faq",
  "children": [{
    "title": "What Is the Difference Between an Extension and a Plugin?",
    "slug": "what-is-the-difference-between-an-extension-and-a-plugin",
    "children": []
  }]
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
const Editor = makeShortcode("Editor");
const Image = makeShortcode("Image");
const Alert = makeShortcode("Alert");
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




<WhatYouWillLearn mdxType="WhatYouWillLearn">
<ul>
<li parentName="ul">{`what extensions are and how they can be used to extend Webiny’s functionality.`}</li>
</ul>
</WhatYouWillLearn>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`One of the most powerful features of Webiny is the ability to extend the default functionality. This is done by creating and registering `}<strong parentName="p">{`extensions`}</strong>{`. Extensions are a way to add new functionality to the system, or to modify the existing one.`}</p>
<p>{`There are a couple of types of extensions in Webiny, but the most common ones are:`}</p>
<ul>
<li parentName="ul"><strong parentName="li">{`Admin`}</strong>{` - used to extend the Webiny’s Admin app`}</li>
<li parentName="ul"><strong parentName="li">{`API`}</strong>{` - used to extend Webiny’s backend functionality (for example its GraphQL API)`}</li>
<li parentName="ul"><strong parentName="li">{`Cloud Infrastructure`}</strong>{` - used to extend the cloud infrastructure Webiny deploys`}</li>
</ul>
<p>{`For example, via an Admin extension, we can change the `}<_Link href="/docs/5.x/admin-area/extending/custom-dashboard">{`layout of the dashboard`}</_Link>{` or `}<_Link href="/docs/5.x/admin-area/extending/change-logo">{`change the logo`}</_Link>{` that’s shown in the header and the main menu. On the other hand, via an API extension, we can introduce new GraphQL queries or mutations, `}<_Link href="/docs/5.x/headless-cms/extending/content-models-via-code">{`content models`}</_Link>{`, or `}<_Link href="/docs/5.x/headless-cms/references/lifecycle-events">{`hook into lifecycle events`}</_Link>{`.`}</p>
<_Heading level={2} id={"getting-started"} nextElement={{
      "type": "paragraph"
    }}>Getting Started</_Heading>
<p>{`In general, the easiest way to start working on a new extension is by using the `}<inlineCode parentName="p">{`webiny extension`}</inlineCode>{` command:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`yarn webiny extension`}
</Editor>
<p>{`Once run, users are prompted to provide basic information about the extension, like its type and name.`}</p>
<Image src={webinyExtensionCommand} alt="Webiny Extension Command" mdxType="Image" />
<p>{`Once all the questions are answered, the command creates the base code for the new extension in the `}<inlineCode parentName="p">{`extensions`}</inlineCode>{` folder. This is the place where all extensions are stored.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`   There are a couple of cases where the extension code is placed outside of the `}<inlineCode parentName="p">{`extensions`}</inlineCode>{` folder. For example, when `}<_Link href="/docs/5.x/infrastructure/basics/modify-cloud-infrastructure">{`modifying cloud infrastructure`}</_Link>{`, the code is placed in different `}<inlineCode parentName="p">{`webiny.application.ts`}</inlineCode>{` files, located in the `}<inlineCode parentName="p">{`apps`}</inlineCode>{` folder.`}</p>
</Alert>
<_Heading level={2} id={"faq"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>FAQ</_Heading>
<_Heading level={3} id={"what-is-the-difference-between-an-extension-and-a-plugin"} nextElement={{
      "type": "paragraph"
    }}>What Is the Difference Between an Extension and a Plugin?</_Heading>
<p>{`In Webiny, extensions are used to extend the system’s functionality, and an extensions can be made up of one or more plugins. A plugin is a small piece of code that adds a specific functionality to the system. For example, a plugin can be used to add a new GraphQL query or mutation, or to modify the existing one.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;