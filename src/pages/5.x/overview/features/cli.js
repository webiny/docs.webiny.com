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
  "title": "CLI",
  "description": "Webiny CLI overview.",
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
<li parentName="ul">{`Webiny `}<strong parentName="li">{`C`}</strong>{`ommand `}<strong parentName="li">{`L`}</strong>{`ine `}<strong parentName="li">{`I`}</strong>{`nterface overview`}</li>
</ul>
</Alert>
<p>{`Webiny CLI is a utility you’ll interact with every time you want to deploy your project, build your project, get information on the URLs to your Admin app and APIs, as well as connect your project to the Control Panel.`}</p>
<p>{`The CLI is fully customizable and extendible, so you can change and overwrite the current implementation of the core commands and extend the CLI by registering new commands.`}</p>
<p>{`The CLI is also how you interact with the `}<inlineCode parentName="p">{`scaffold`}</inlineCode>{` command, to extend your project and with the `}<inlineCode parentName="p">{`pulumi`}</inlineCode>{` command to manage your AWS infrastructure.`}</p>
<p>{`Your CI/CD pipelines will utilize the CLI to deploy code changes and generally manage deployments.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;