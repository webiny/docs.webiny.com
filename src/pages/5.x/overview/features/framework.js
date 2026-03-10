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
  "title": "Framework",
  "description": "Webiny Framework - Serverless application development framework. (Open-source, NodeJs, AWS, ReactJs).",
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
<li parentName="ul">{`A quick overview of Webiny Framework`}</li>
</ul>
</Alert>
<p>{`Webiny Framework is at the core of Webiny CMS. It is the foundation of all Webiny applications.`}</p>
<p>{`Because Webiny CMS comes with a framework, it means you have a powerful platform upon which you can customize existing applications on both the API side and the client-side. You can also use the same framework to build new apps using the same principles.`}</p>
<p>{`The framework contains everything you need to architect, build and deploy serverless applications.`}</p>
<p>{`Use the framework to:`}</p>
<ul>
<li parentName="ul">{`Extend any part of Webiny CMS`}</li>
<li parentName="ul">{`Build full-stack applications`}</li>
<li parentName="ul">{`Build GraphQL APIs`}</li>
<li parentName="ul">{`Build multi-tenant SaaS applications`}</li>
</ul>
<p>{`The framework is written in Typescript and caters to full-stack needs with Node.Js and ReactJS on the frontend. It also embeds IaC utility via Pulumi.`}</p>
<p>{`To make the whole experience of using the framework easier, we have built a set of scaffold templates to get you started.`}</p>
{/* TODO: add alert that links to tutorials and scaffolds */}
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;