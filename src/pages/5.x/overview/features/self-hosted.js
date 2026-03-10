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
  "title": "Self-hosted",
  "description": "Why consider self-hosting your CMS.",
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
<li parentName="ul">{`Why you should consider a self-hosted CMS`}</li>
</ul>
</Alert>
<p>{`Many solutions on the market have an open-source self-hosted option and a cloud-hosted SaaS option. However, this doesn’t align well with the problems we want to solve with Webiny.`}</p>
<p>{`At Webiny, we believe privacy is a rising need for many organizations. However, giving your data to a 3rd party is a big ask, and many enterprises don’t want to do that. They value their data and their customers’ data too much, and rightfully so!`}</p>
<p>{`Traditionally, those organizations were stuck with either using an open-source solution they had to scale, manage, and operate at very high costs themselves or using a commercial solution that is a black box sitting in their cloud.`}</p>
<p>{`With Webiny, we want to empower anyone who wishes to self-host their own CMS at a fraction of the cost of other solutions in the market.`}</p>
<p>{`Webiny achieves this in several ways:`}</p>
<ol>
<li parentName="ol"><strong parentName="li">{`Serverless infrastructure`}</strong>
<ul parentName="li">
<li parentName="ul">{`It reduces your infrastructure cost by 60-80% compared to running on virtual machines.`}</li>
<li parentName="ul">{`It reduces the needed devops effort by 40-60%.`}</li>
<li parentName="ul">{`It reduces the risk of scaling too slowly on peak events.`}</li>
<li parentName="ul">{`It ensures a much higher grade of security best practices.`}</li>
</ul>
</li>
<li parentName="ol"><strong parentName="li">{`Webiny Control Panel`}</strong>
<ul parentName="li">
<li parentName="ul">{`It additionally streamlines the management and reduces the operational overhead of running a self-hosted solution.`}</li>
<li parentName="ul">{`It provides you with a monitoring solution to track the infrastructure cost and performance.`}</li>
<li parentName="ul">{`It reduces the risk of rolling out patches and code changes.`}</li>
</ul>
</li>
</ol>
<p>{`We believe you should have complete control and ownership of your data and say how it gets stored, who can access it, and how it gets delivered.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;