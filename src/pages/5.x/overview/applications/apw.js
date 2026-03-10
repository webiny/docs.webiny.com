/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import YouTube from "@/components/YouTube";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Advanced Publishing Workflow",
  "description": "A workflow driven publishing process.",
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
<li parentName="ul">{`Advanced Publishing Workflow feature overview`}</li>
</ul>
</Alert>
<YouTube id="NNRghN1yY_g" mdxType="YouTube" />
<p>{`The Advanced Publishing Workflow (APW) is an application that runs on top of the Page Builder and the Headless CMS. By default, those applications come with a simplified publishing workflow. For example, users can either publish content or set it in a `}<inlineCode parentName="p">{`review requested`}</inlineCode>{` state. The actual review is done outside the system, and there’s no collaboration platform that’s provided to manage this activity.
This is where the APW comes in.`}</p>
<p>{`Within the APW, you are able to:`}</p>
<ol>
<li parentName="ol">{`Define publishing workflows`}</li>
<li parentName="ol">{`Have an overview of all the pending reviews where your input is needed`}</li>
<li parentName="ol">{`Have a daily digest of pending activities`}</li>
<li parentName="ol">{`Collaborate with multiple peers in different levels or your organization on running a structured peer review process`}</li>
<li parentName="ol">{`Schedule page publishing and unpublishing activities`}</li>
</ol>
<p>{`You can have multiple publishing workflows, where each workflow has different steps, members, and rules when it applies. You can define workflows that apply to:`}</p>
<ul>
<li parentName="ul"><strong parentName="li">{`Page Builder:`}</strong></li>
<li parentName="ul">{`All pages`}</li>
<li parentName="ul">{`Pages inside specific categories`}</li>
<li parentName="ul">{`One or more individual pages`}</li>
<li parentName="ul"><strong parentName="li">{`Headless CMS`}</strong></li>
<li parentName="ul">{`All entries`}</li>
<li parentName="ul">{`Entries inside a particular group`}</li>
<li parentName="ul">{`Specific entries`}</li>
</ul>
<p>{`In practice, you can say have a 2-step workflow that applies every time someone wants to publish a new blog post article. Those steps might be a peer review from a copywriter and a peer review from a marketing person. Then you can have another workflow that has 4-steps, and it only applies to when someone wants to change the homepage. In that case, you might want to get a peer review from someone in the legal department, marketing, sales, the CEO themself.`}</p>
<p>{`To each workflow step, you assign users that can provide a signoff and define steps as blocking or non-blocking.`}</p>
<p>{`The actual peer review is done by reviewers requesting one or more changes. All changes need to be resolved before a reviewer can provide a signoff for that step.`}</p>
<p>{`APW is a powerful utility that brings quality control and structured workflows. It ensures the content an organization publishes is of top quality and free of mistakes. Most of all, it streamlines the communication between multiple members involved in this process.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;