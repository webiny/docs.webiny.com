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
  "title": "Site reliability",
  "description": "Site reliability engineering, and often overlooked aspect of self-hosted open-source solutions.",
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
<li parentName="ul">{`How we think about site reliability`}</li>
</ul>
</Alert>
<p>{`Site reliability, or site reliability engineering (SRE), is a set of best practices that define how to operate a system focusing on its reliability.`}</p>
<p>{`It’s often an overlooked component when choosing a solution. With SaaS solutions, you don’t worry about it as the SaaS vendor handles it for you. And if they do it correctly, you know they are doing it well.`}</p>
<p>{`However, SRE plays a huge role when choosing a self-hosted solution, as the SRE activities are up to you and your in-house team to implement. This can be very challenging and costly, and it’s one main advantage you’ll find SaaS solutions have over self-hosted solutions.
It’s a common mistake we see when picking an open-source solution. Teams often overlook the risk of not having the best practices and experience managing these solutions, ensuring their reliability.`}</p>
<p>{`At Webiny, since we are a self-hosted solution, it’s essential for us to properly equip teams using our CMS with the knowledge and tools to operate and manage their Webiny instance. We do this through our Control Panel product, and we believe we can bring the overall reliability on par with a SaaS solution.`}</p>
<Alert type="success" mdxType="Alert">
<p>{`To learn more about Webiny Control Panel, `}<_Link href="/docs/5.x/overview/applications/control-panel">{`click here`}</_Link>{`.`}</p>
</Alert>
<p>{`Additionally, we provide training via the consultancy service for enterprise customers to transfer and equip the in-house team with the needed knowledge and confidence provided directly by the team that built Webiny.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;