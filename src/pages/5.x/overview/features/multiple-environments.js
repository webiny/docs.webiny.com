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
  "title": "Multiple environments",
  "description": "How Webiny handles multiple deployment environments.",
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
<li parentName="ul">{`Overview of how Webiny manages deployment environments`}</li>
</ul>
</Alert>
<p>{`Webiny comes with with a CLI utitlity that you use to deploy your Webiny instance to your AWS cloud. The same utility is used to manage the deployment environments.`}</p>
<p>{`Under deployment environments, we refer to both long-lived environments, such as dev, qa, staging, prod, and any other your organization might use, and short-lived environments, one for your PR previews, branches, and local development.`}</p>
<p>{`Depending on the environment type, you can use different infrastructure as code stacks. For example, you might want to have your Elasticsearch cluster deployed in multiple zones for a production environment. At the same time, you might need a much smaller deployment for the short-lived environments.`}</p>
<p>{`Webiny CLI manages all these configurations for you. It also ensures the deployments can be done manually and through different CI/CD pipelines.`}</p>
<p>{`Propagating a build artifact through multiple stages is also handled internally, so you can ensure your “golden image” is built only once and then deployed to an appropriate environment.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;