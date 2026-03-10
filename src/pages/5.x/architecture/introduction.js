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
  "description": "Introduction to the Architecture section, which explains everything related to the cloud infrastructure Webiny relies on.",
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
}, {
  "title": "Different Database Setups",
  "slug": "different-database-setups",
  "children": []
}, {
  "title": "Development and Production Deployment Modes",
  "slug": "development-and-production-deployment-modes",
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
<li parentName="ul">{`what are the default project applications included in a Webiny project`}</li>
<li parentName="ul">{`what is the most complex project application in terms of the deployed cloud infrastructure`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`A Webiny project consists of four `}<_Link href="/docs/5.x/core-development-concepts/project-organization/project-applications">{`project applications`}</_Link>{`:`}</p>
<ol>
<li parentName="ol"><strong parentName="li">{`Core`}</strong>{` (`}<inlineCode parentName="li">{`./apps/core`}</inlineCode>{`) - defines core cloud infrastructure resources`}</li>
<li parentName="ol"><strong parentName="li">{`API`}</strong>{` (`}<inlineCode parentName="li">{`./apps/api`}</inlineCode>{`) - your project’s (GraphQL) HTTP API`}</li>
<li parentName="ol"><strong parentName="li">{`Admin`}</strong>{` (`}<inlineCode parentName="li">{`./apps/admin`}</inlineCode>{`) - your admin area`}</li>
<li parentName="ol"><strong parentName="li">{`Website`}</strong>{` (`}<inlineCode parentName="li">{`./apps/website`}</inlineCode>{`) - your public website`}</li>
</ol>
<p>{`If we wanted to compare these applications by the complexity of the cloud infrastructure, we could say that `}<strong parentName="p">{`Core`}</strong>{` and `}<strong parentName="p">{`API`}</strong>{` are the most complex ones. This is simply because these deploy more different cloud infrastructure resources than the remaining `}<strong parentName="p">{`Admin`}</strong>{` and `}<strong parentName="p">{`Website`}</strong>{` project applications.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`Visit the `}<_Link href="/docs/5.x/infrastructure/basics/introduction">{`Deployments`}</_Link>{` key topics section to learn more about how Webiny approaches cloud infrastructure deployment.`}</p>
</Alert>
<p>{`In the following sections, we examine which cloud infrastructure resources get deployed for each project application, how they are working together, different configurations, and other related information.`}</p>
<p>{`Before we continue, a couple of words on different Webiny setups and deployment modes.`}</p>
<_Heading level={2} id={"different-database-setups"} nextElement={{
      "type": "paragraph"
    }}>Different Database Setups</_Heading>
<p>{`At the moment, Webiny can be exclusively deployed into `}<a parentName="p" {...{
        "href": "https://aws.amazon.com/"
      }}>{`Amazon Web Services (AWS)`}</a>{`, where users can choose between two different database setups:`}</p>
<ol>
<li parentName="ol">{`Amazon DynamoDB`}</li>
<li parentName="ol">{`Amazon DynamoDB + Amazon OpenSearch`}</li>
</ol>
<p>{`Essentially, the setup you choose depends on the size of your project. For small and medium-sized projects or prototypes, we recommend users go with the Amazon DynamoDB setup. For larger and enterprise projects, we recommends the Amazon DynamoDB + Amazon OpenSearch one.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`The diagrams shown in the upcoming sections are representing the Amazon DynamoDB + Amazon OpenSearch database setup. When it comes to the Amazon DynamoDB setup, everything stays the same, except, of course, the Amazon OpenSearch service isn’t used.`}</p>
</Alert>
<_Heading level={2} id={"development-and-production-deployment-modes"} nextElement={{
      "type": "paragraph"
    }}>Development and Production Deployment Modes</_Heading>
<p>{`Note that the `}<strong parentName="p">{`Core`}</strong>{` and `}<strong parentName="p">{`API`}</strong>{` project application can be deployed in two different deployment modes: `}<strong parentName="p">{`development`}</strong>{` and `}<strong parentName="p">{`production`}</strong>{`.`}</p>
<p>{`This is simply because, for development purposes, not all of the production cloud infrastructure resources are needed. For example, for improved security posture, the production mode will deploy all of your AWS Lambda functions into a custom `}<a parentName="p" {...{
        "href": "https://aws.amazon.com/vpc/"
      }}>{`Virtual Private Cloud (VPC)`}</a>{` with private subnets. It will also deploy your `}<a parentName="p" {...{
        "href": "https://aws.amazon.com/opensearch-service/"
      }}>{`Amazon OpenSearch Service`}</a>{` into multiple availability zones (AZs), in order to provide high availability.`}</p>
<p>{`By default, the development mode is used when deploying into any environment, except `}<inlineCode parentName="p">{`prod`}</inlineCode>{`. In that case, the production mode will be used.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`  The `}<strong parentName="p">{`Admin Area`}</strong>{` and `}<strong parentName="p">{`Website`}</strong>{` project applications do not posses the ability to be deployed in development and production deployment modes, as it’s simply not needed.`}</p>
</Alert>
<Alert type="info" mdxType="Alert">
<p>{`  If needed, Webiny can also be deployed into a preexisting `}<a parentName="p" {...{
          "href": "https://aws.amazon.com/vpc/"
        }}>{`Virtual Private Cloud (VPC)`}</a>{`. For more information, please refer to the `}<_Link href="/docs/5.x/enterprise/use-existing-amazon-vpc">{`Use Existing Amazon VPC`}</_Link>{` guide.`}</p>
</Alert>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;