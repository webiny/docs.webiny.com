/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.79c9f1.json";

import _versions from "@/data/versions.ff7084.json";

const Layout = _Layout;
const pageData = {
  "title": "Page Builder Glossary",
  "description": "Learn about the Page Builder terminologies.",
  "type": "user-guides",
  "showPageHeader": true,
  "fullWidth": false,
  "version": "5.x"
};
const docsearch = {
  "type": "user-guides",
  "weight": 100,
  "versions": ["5.x"]
};
const navigation = _navigation;
const versions = _versions;
const tableOfContents = [{
  "title": "Grid Component",
  "slug": "grid-component",
  "children": []
}, {
  "title": "Page Element",
  "slug": "page-element",
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
<li parentName="ul">{`Page Builder terminologies, and their meanings.`}</li>
</ul>
</Alert>
<_Heading level={2} id={"grid-component"} nextElement={{
      "type": "paragraph"
    }}>Grid Component</_Heading>
<p>{`Grid component is the fundamental building block on a page. When you create a page, the first thing to add is a grid block.
It serves as the parent container for all the page elements. You can learn more about Grid component in this `}<a parentName="p" {...{
        "href": "https://youtu.be/a5WyEg0ucN0?list=PL9HlKSQaEuXQdyCQDH_w7VQQcZbc67cPU"
      }}>{`tutorial`}</a>{`.`}</p>
<_Heading level={2} id={"page-element"} nextElement={{
      "type": "paragraph"
    }}>Page Element</_Heading>
<p>{`Page Builder application comes with a plethora of ready-made page elements like Heading, Paragraph, Quote, Image, etc.
These are the building blocks of a page.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;