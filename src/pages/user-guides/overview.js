/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import webinyOverview from "/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/6.0.x/assets/webiny-overview.mp4";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.9991ed.json";

import _versions from "@/data/versions.ff7084.json";

const Layout = _Layout;
const pageData = {
  "title": "Overview",
  "description": "Overview of Webiny CMS the enterprise open-source serverless CMS.",
  "type": "user-guides",
  "showPageHeader": true,
  "fullWidth": false,
  "version": "6.0.x"
};
const docsearch = {
  "type": "user-guides",
  "weight": 100,
  "versions": ["latest", "6.0.x"]
};
const navigation = _navigation;
const versions = _versions;
const tableOfContents = [];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
const Video = makeShortcode("Video");
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



<Video src={webinyOverview} controls={true} mdxType="Video" />
<p>{`Webiny Serverless CMS includes:`}</p>
<p>{`1️⃣ `}<strong parentName="p">{`Website Builder`}</strong>{` - Build stunning landing pages with an easy to use Drag&drop editor.`}</p>
<p>{`2️⃣ `}<strong parentName="p">{`Headless CMS`}</strong>{` - Headless CMS with a GraphQL API. Build APIs and content models through a UI. It includes content revisions, localization, and fine-grain permission control.`}</p>
<p>{`3️⃣ `}<strong parentName="p">{`File Manager`}</strong>{` - Upload files images. Search and organize your assets. It includes a built-in image editor for basic image manipulations.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;