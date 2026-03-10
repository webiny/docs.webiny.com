/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "No-Code Suite",
  "description": "Learn about Webiny's no-code capabilities.",
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
const tableOfContents = [];

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
<li parentName="ul">{`How Webiny empowers non-technical users to create and manage digital content`}</li>
</ul>
</Alert>
<p>{`Traditionally, creating digital experiences requires deep technical knowledge, primarily reserved for the developer audience. Unfortunately, this means other teams, like marketing and content writers, had to depend on those engineering teams to create and launch new content. This slows down organizations, creates a bottleneck, leads to loss of revenue, and compromises on the quality.`}</p>
<p>{`Alternatively, you can use blog-like platforms to empower the non-technical teams to create and publish content. Still, those come with considerable limitations, and often the experience can’t be polished enough to maximize the conversion and often results in a mediocre user experience.`}</p>
<p>{`At Webiny, we took a different approach. In most organizations, developers only represent a smaller overall proportion. They shouldn’t handle tasks like adding and changing elements on a landing page. It’s better to invest their time building new features and capabilities for your products.`}</p>
<p>{`Webiny comes with several no-code products. For example, `}<_Link href="/docs/5.x/overview/applications/page-builder">{`Page Builder`}</_Link>{` empowers non-technical users to create websites with complete control over the design and elements on the page. At the same time, the platform handles all the optimizations for different viewports and devices automatically under the hood.`}</p>
<p>{`Using `}<_Link href="/docs/5.x/overview/applications/form-builder">{`Form Builder`}</_Link>{`, users can build forms, add validations to them and track the form submissions.`}</p>
<p>{`Similarly, handling files and images is done through the `}<_Link href="/docs/5.x/overview/applications/file-manager">{`File Manager`}</_Link>{` application. Users can use the same application to crop and apply other more straightforward modifications to images; there’s no need for 3rd party external utilities.`}</p>
<p>{`Lastly, when managing the content, the `}<_Link href="/docs/5.x/overview/applications/headless-cms">{`Headless CMS`}</_Link>{` interface and publishing workflows are also designed for the non-technical audience.`}</p>
<p>{`Although Webiny is an open-source product that caters to many developers’ needs with its plugins, hooks, and lifecycle events, Webiny is still built from the UI perspective so a non-technical audience can use it and create rich and immersive content.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;