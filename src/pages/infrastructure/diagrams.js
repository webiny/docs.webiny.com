/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import coreOverview from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/6.0.x/infrastructure/core/assets/webiny_core_app.png";
import apiOverview from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/6.0.x/infrastructure/api/assets/overview/webiny_api_overview.png";
import adminOverview from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/6.0.x/infrastructure/admin/assets/overview/webiny_admin_overview.png";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.64f62e.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Overview",
  "description": "Visual diagrams of Webiny's cloud infrastructure for Core, API, and Admin Area.",
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
  "title": "Core",
  "slug": "core",
  "children": [{
    "title": "Core Resources",
    "slug": "core-resources",
    "children": []
  }, {
    "title": "Core Diagram",
    "slug": "core-diagram",
    "children": []
  }]
}, {
  "title": "API",
  "slug": "api",
  "children": [{
    "title": "API Resources",
    "slug": "api-resources",
    "children": []
  }, {
    "title": "API Diagram",
    "slug": "api-diagram",
    "children": []
  }]
}, {
  "title": "Admin Area",
  "slug": "admin-area",
  "children": [{
    "title": "Admin Area Resources",
    "slug": "admin-area-resources",
    "children": []
  }, {
    "title": "Admin Area Diagram",
    "slug": "admin-area-diagram",
    "children": []
  }]
}, {
  "title": "FAQ",
  "slug": "faq",
  "children": [{
    "title": "Why Lambda Instead of AWS AppSync?",
    "slug": "why-lambda-instead-of-aws-app-sync",
    "children": []
  }, {
    "title": "Which API Gateway Type?",
    "slug": "which-api-gateway-type",
    "children": []
  }]
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
const Image = makeShortcode("Image");
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
<li parentName="ul">{`What cloud infrastructure resources Webiny deploys`}</li>
<li parentName="ul">{`How Core, API, and Admin Area infrastructure are organized`}</li>
<li parentName="ul">{`What AWS services power each project application`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`Webiny deploys to AWS using three project applications: Core, API, and Admin Area. Each has its own infrastructure stack with specific AWS resources.`}</p>
<p>{`In the following sections, we provide infrastructure diagrams and resource descriptions for each project application.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`For brevity, diagrams don’t include network-level resources like VPC, availability zones, and subnets. See `}<_Link href="/docs/infrastructure/deployment-modes">{`Deployment Modes`}</_Link>{` for network architecture details.`}</p>
</Alert>
<_Heading level={2} id={"core"} nextElement={{
      "type": "paragraph"
    }}>Core</_Heading>
<p>{`The Core project application provides stateful resources that both API and Admin Area rely on, including databases, file storage, authentication, and event messaging.`}</p>
<_Heading level={3} id={"core-resources"} nextElement={{
      "type": "paragraph"
    }}>Core Resources</_Heading>
<p><strong parentName="p">{`Amazon DynamoDB`}</strong></p>
<p>{`Primary database for all application data. Webiny uses a `}<a parentName="p" {...{
        "href": "https://www.alexdebrie.com/posts/dynamodb-single-table/"
      }}>{`single-table design`}</a>{` where all applications store data in one table with distinct primary and secondary keys.`}</p>
<p>{`When using DynamoDB + OpenSearch, a second DynamoDB table is deployed specifically for syncing data to OpenSearch. DynamoDB Streams trigger Lambda functions that propagate changes from the primary table to OpenSearch.`}</p>
<p>{`A separate DynamoDB table is used for storing audit logs.`}</p>
<p><strong parentName="p">{`Amazon S3`}</strong></p>
<p>{`File storage for Webiny’s File Manager. Stores all uploaded files and provides secure serving and image resizing capabilities.`}</p>
<p><strong parentName="p">{`Amazon Cognito`}</strong></p>
<p>{`Default identity provider for user authentication. Webiny also supports integrating external identity providers (like Okta, Auth0, or custom OAuth providers) alongside or instead of Cognito.`}</p>
<p><strong parentName="p">{`Amazon EventBridge`}</strong></p>
<p>{`Event bus for communication between different cloud infrastructure resources.`}</p>
<p><strong parentName="p">{`Amazon OpenSearch Service`}</strong></p>
<p>{`Advanced search and filtering for content. Only deployed when using the DynamoDB + OpenSearch database setup.`}</p>
<Alert type="info" title="Database Setups" mdxType="Alert">
<p>{`Learn more about DynamoDB-only vs DynamoDB + OpenSearch setups in `}<_Link href="/docs/infrastructure/introduction">{`Database Setups`}</_Link>{`.`}</p>
</Alert>
<_Heading level={3} id={"core-diagram"} nextElement={{
      "type": "jsx"
    }}>Core Diagram</_Heading>
<Image src={coreOverview} title="Webiny Cloud Infrastructure - Core Resources" shadow={false} mdxType="Image" />
<_Heading level={2} id={"api"} nextElement={{
      "type": "paragraph"
    }}>API</_Heading>
<p>{`The API project application is your GraphQL API, used by the Admin Area. It consists of multiple AWS Lambda functions handling GraphQL requests, file operations, background tasks, and more.`}</p>
<_Heading level={3} id={"api-resources"} nextElement={{
      "type": "paragraph"
    }}>API Resources</_Heading>
<p><strong parentName="p">{`Amazon API Gateway`}</strong></p>
<p>{`Two API Gateways are deployed:`}</p>
<ul>
<li parentName="ul"><strong parentName="li">{`HTTP API`}</strong>{` - Routes GraphQL requests, file uploads/downloads, and other API endpoints to Lambda functions`}</li>
<li parentName="ul"><strong parentName="li">{`WebSocket API`}</strong>{` - Provides real-time communication for live updates in the Admin Area`}</li>
</ul>
<p><strong parentName="p">{`AWS Lambda Functions`}</strong></p>
<ul>
<li parentName="ul"><strong parentName="li">{`GraphQL Handler`}</strong>{` - Processes GraphQL queries and mutations`}</li>
<li parentName="ul"><strong parentName="li">{`File Upload/Download`}</strong>{` - Handles file operations and image optimization`}</li>
<li parentName="ul"><strong parentName="li">{`Background Tasks`}</strong>{` - Executes long-running jobs`}</li>
<li parentName="ul"><strong parentName="li">{`Import/Export`}</strong>{` - Manages bulk data operations`}</li>
</ul>
<p><strong parentName="p">{`AWS Step Functions`}</strong></p>
<p>{`Orchestrates background task execution. Step Functions coordinate multi-step workflows and long-running processes.`}</p>
<_Heading level={3} id={"api-diagram"} nextElement={{
      "type": "jsx"
    }}>API Diagram</_Heading>
<Alert type="info" mdxType="Alert">
<p>{`Stateful resources like S3, Cognito, DynamoDB, and OpenSearch are shown for clarity but are deployed as part of the Core project application.`}</p>
</Alert>
<Image src={apiOverview} title="Webiny Cloud Infrastructure - API" shadow={false} mdxType="Image" />
<_Heading level={2} id={"admin-area"} nextElement={{
      "type": "paragraph"
    }}>Admin Area</_Heading>
<p>{`The Admin Area is a React single-page application (SPA) hosted entirely on AWS using Amazon CloudFront and Amazon S3. This simple, cost-effective architecture is ideal for SPAs because all application logic runs in the browser, requiring only static file hosting.`}</p>
<_Heading level={3} id={"admin-area-resources"} nextElement={{
      "type": "paragraph"
    }}>Admin Area Resources</_Heading>
<p><strong parentName="p">{`Amazon CloudFront`}</strong></p>
<p>{`CDN distribution that serves files globally from edge locations.`}</p>
<p><strong parentName="p">{`Amazon S3`}</strong></p>
<p>{`Object storage bucket containing the built React application (HTML, JavaScript, CSS, images).`}</p>
<_Heading level={3} id={"admin-area-diagram"} nextElement={{
      "type": "jsx"
    }}>Admin Area Diagram</_Heading>
<Image src={adminOverview} title="Webiny Cloud Infrastructure - Admin Area" shadow={false} mdxType="Image" />
<_Heading level={2} id={"faq"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>FAQ</_Heading>
<_Heading level={3} id={"why-lambda-instead-of-aws-app-sync"} nextElement={{
      "type": "paragraph"
    }}>Why Lambda Instead of AWS AppSync?</_Heading>
<p>{`Using Lambda for the GraphQL handler provides:`}</p>
<ul>
<li parentName="ul"><strong parentName="li">{`Customization`}</strong>{` - Full control over request/response handling`}</li>
<li parentName="ul"><strong parentName="li">{`Testing`}</strong>{` - Easy unit testing with standard JavaScript tools`}</li>
<li parentName="ul"><strong parentName="li">{`Flexibility`}</strong>{` - Applications can modify schema based on context (locale, tenant, etc.)`}</li>
<li parentName="ul"><strong parentName="li">{`Portability`}</strong>{` - Easier to support multiple cloud providers in the future`}</li>
</ul>
<_Heading level={3} id={"which-api-gateway-type"} nextElement={{
      "type": "paragraph"
    }}>Which API Gateway Type?</_Heading>
<p>{`Webiny deploys two API Gateways:`}</p>
<ul>
<li parentName="ul"><strong parentName="li">{`HTTP API`}</strong>{` - Handles GraphQL requests and standard API operations`}</li>
<li parentName="ul"><strong parentName="li">{`WebSocket API`}</strong>{` - Enables real-time features like live refresh in the Admin Area (content updates appear without page refresh)`}</li>
</ul>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;