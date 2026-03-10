/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.64f62e.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Database Setups",
  "description": "Learn about DynamoDB-only and DynamoDB + OpenSearch database configurations.",
  "type": "docs",
  "showPageHeader": true,
  "fullWidth": false,
  "version": "6.0.x"
};
const docsearch = {
  "type": "docs",
  "weight": 100,
  "versions": ["latest", "6.0.x"]
};
const navigation = _navigation;
const versions = _versions;
const tableOfContents = [{
  "title": "Overview",
  "slug": "overview",
  "children": []
}, {
  "title": "Changing Database Setups",
  "slug": "changing-database-setups",
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
<li parentName="ul">{`What database configurations Webiny supports`}</li>
<li parentName="ul">{`When to use DynamoDB-only vs DynamoDB + OpenSearch`}</li>
<li parentName="ul">{`How to choose the right setup for your environments`}</li>
</ul>
</Alert>
{/*
 ## Overview
 Webiny deploys to Amazon Web Services (AWS) as a serverless application. The infrastructure consists of three project applications:
 1. **Core** - Stateful resources (DynamoDB, S3, Cognito, EventBridge, OpenSearch)
 2. **API** - GraphQL HTTP API deployed as AWS Lambda functions
 3. **Admin** - Admin area deployed as a static React application
 The Core project application provides the foundational services that both API and Admin project applications rely on, including databases, file storage, authentication, and event messaging.
 ### Pulumi Stacks
 Each project application is deployed as a separate Pulumi stack. This separation enables you to deploy individual parts of your project independently. For example, you can deploy only the API project application without redeploying Core or Admin.
 This is particularly useful for the Core project application, which contains stateful resources that rarely change once deployed. After the initial Core deployment, most development work focuses on the API project application, where you add custom business logic and extensions.
 */}
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`Webiny supports two database configurations:`}</p>
<p><strong parentName="p">{`Amazon DynamoDB Only`}</strong></p>
<p>{`Recommended for small to medium projects and prototypes. All data is stored in DynamoDB tables.`}</p>
<p><strong parentName="p">{`Amazon DynamoDB + Amazon OpenSearch`}</strong></p>
<p>{`Recommended for larger and enterprise projects. DynamoDB serves as the primary database, while OpenSearch provides advanced search and filtering capabilities for content.`}</p>
<_Heading level={2} id={"changing-database-setups"} nextElement={{
      "type": "paragraph"
    }}>Changing Database Setups</_Heading>
<p>{`Once you deploy to an environment with a specific database setup, it cannot be changed. You can only adjust the database configuration when deploying to a brand new environment.`}</p>
<p>{`For flexibility and cost savings, developers often use DynamoDB-only in their dev environments, then switch to DynamoDB + OpenSearch for staging and production environments.`}</p>
<Alert type="info" title="Architecture Diagrams" mdxType="Alert">
<p>{`The diagrams in upcoming sections show the DynamoDB + OpenSearch setup. For DynamoDB-only setups, the architecture is identical except OpenSearch is not deployed.`}</p>
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