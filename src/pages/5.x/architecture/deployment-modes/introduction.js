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
  "title": "Introduction",
  "description": "Introduction to the development and production deployment modes.",
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



<Alert type="success" title="What you’ll learn" mdxType="Alert">
<ul>
<li parentName="ul">{`what are the two different deployment modes`}</li>
<li parentName="ul">{`why do we need different deployment modes`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`The `}<strong parentName="p">{`Core`}</strong>{` and `}<strong parentName="p">{`API`}</strong>{` project application can be deployed in two different deployment modes: `}<strong parentName="p">{`development`}</strong>{` and `}<strong parentName="p">{`production`}</strong>{`.`}</p>
<p>{`This is simply because, for development purposes, not all of the production cloud infrastructure resources are needed. For example, for improved security posture, the production mode will deploy all of your AWS Lambda functions into a custom `}<a parentName="p" {...{
        "href": "https://aws.amazon.com/vpc/"
      }}>{`Virtual Private Cloud (VPC)`}</a>{` with private subnets. It will also deploy your `}<a parentName="p" {...{
        "href": "https://aws.amazon.com/opensearch-service/"
      }}>{`Amazon OpenSearch Service`}</a>{` into multiple availability zones (AZs), in order to provide high availability.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`The `}<strong parentName="p">{`Admin Area`}</strong>{` and `}<strong parentName="p">{`Website`}</strong>{` project applications do not posses the ability to be deployed in development and production modes, as it’s not needed.`}</p>
</Alert>
<p>{`By default, the development mode is used when deploying into any environment, except `}<inlineCode parentName="p">{`prod`}</inlineCode>{`. In that case, the production mode will be used.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;