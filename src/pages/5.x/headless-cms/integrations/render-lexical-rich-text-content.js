/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { CanIUseThis } from "@/components/CanIUseThis";
import Image from "next/image";
import overviewLexicalRenderer from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/integrations/assets/overview-lexical-renderer.jpeg";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Render Rich Text Content",
  "description": "Render rich text content from Headless CMS in a custom React app.",
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
  "children": [{
    "title": "1. Installation",
    "slug": "1-installation",
    "children": []
  }, {
    "title": "2. Add Webiny Theme Styles to Your Project",
    "slug": "2-add-webiny-theme-styles-to-your-project",
    "children": []
  }, {
    "title": "3. Mount the Component and Render the CMS Content",
    "slug": "3-mount-the-component-and-render-the-cms-content",
    "children": []
  }]
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
const WhatYouWillLearn = makeShortcode("WhatYouWillLearn");
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






<CanIUseThis since={"5.x"} mdxType="CanIUseThis" />
<WhatYouWillLearn mdxType="WhatYouWillLearn">
  - how to render rich text content from Headless CMS in a custom React app
</WhatYouWillLearn>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`One of the commonly used field types in Headless CMS content models is the Rich Text field. This field uses `}<a parentName="p" {...{
        "href": "https://playground.lexical.dev/"
      }}>{`Lexical Rich Text Editor`}</a>{` to allow users to quickly create nicely formatted rich text content.`}</p>
<Image src={overviewLexicalRenderer} title="Render Rich Text Content From Headless CMS" mdxType="Image" />
<p>{`In this article we cover the steps to render the Headless CMS rich text content by using our React component
`}<inlineCode parentName="p">{`<RichTextLexicalRenderer/>`}</inlineCode>{`, provided by the `}<inlineCode parentName="p">{`@webiny/react-rich-text-lexical-renderer`}</inlineCode>{` package.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`To learn how to use Headless CMS GraphQL API, make sure to check out the `}<_Link href="/docs/5.x/headless-cms/basics/using-graphql-api">{`Using GraphQL API`}</_Link>{` key topic.`}</p>
</Alert>
<h1>{`Usage`}</h1>
<p>{`Rendering of rich text content from Headless CMS consists of the following three steps:`}</p>
<ol>
<li parentName="ol">{`Install the `}<inlineCode parentName="li">{`@webiny/react-rich-text-lexical-renderer`}</inlineCode>{` package.`}</li>
<li parentName="ol">{`Add Webiny theme styles to your project.`}</li>
<li parentName="ol">{`Mount the `}<inlineCode parentName="li">{`RichTextLexicalRenderer`}</inlineCode>{` component.`}</li>
</ol>
<_Heading level={3} id={"1-installation"} nextElement={{
      "type": "paragraph"
    }}>1. Installation</_Heading>
<p>{`In your React app, install the following NPM package:`}</p>
<Editor title="" lang="null" mdxType="Editor">
{`npm install --save @webiny/react-rich-text-lexical-renderer`}
</Editor>
<p>{`Or if you prefer Yarn:`}</p>
<Editor title="" lang="null" mdxType="Editor">
{`yarn add @webiny/react-rich-text-lexical-renderer`}
</Editor>
<_Heading level={3} id={"2-add-webiny-theme-styles-to-your-project"} nextElement={{
      "type": "paragraph"
    }}>2. Add Webiny Theme Styles to Your Project</_Heading>
<p>{`To use the same theme styles that are configured in your Webiny project, copy the `}<inlineCode parentName="p">{`apps/theme/theme.ts`}</inlineCode>{` file into your React app.`}</p>
<_Heading level={3} id={"3-mount-the-component-and-render-the-cms-content"} nextElement={{
      "type": "paragraph"
    }}>3. Mount the Component and Render the CMS Content</_Heading>
<p>{`Now you need to import and mount the `}<inlineCode parentName="p">{`<RichTextLexicalRenderer />`}</inlineCode>{` component in your app, and pass the rich text content, and optionally theme styles.`}</p>
<Alert type="warning" mdxType="Alert">
<p>{`Note that in this code sample we do not include the code to load the data from the API. Instead,
we use the imaginary `}<inlineCode parentName="p">{`useCmsContent()`}</inlineCode>{` hook to show where the content `}<em parentName="p">{`could`}</em>{` come from.`}</p>
</Alert>
<Editor title="HomePage.tsx" lang="tsx" mdxType="Editor">
{`import React from "react";
import { RichTextLexicalRenderer } from "@webiny/react-rich-text-lexical-renderer";
import { useCmsContent } from "../myWebinyGraphqlHooks/useCmsContent";
import { theme } from "../myWebinyTheme/theme";

export const HomePage = () => {
  // Fetch rich text content from the Headless CMS GraphQLQ API.
  const { content } = useCmsContent();

  return <RichTextLexicalRenderer value={content} theme={theme} />;
};`}
</Editor>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;