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
  "title": "Architecture Overview",
  "description": "Understanding Webiny's modular architecture and core components.",
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
  "title": "Core Components",
  "slug": "core-components",
  "children": [{
    "title": "Applications",
    "slug": "applications",
    "children": []
  }, {
    "title": "Developer Toolkit",
    "slug": "developer-toolkit",
    "children": []
  }, {
    "title": "Infrastructure",
    "slug": "infrastructure",
    "children": []
  }]
}, {
  "title": "When to Use Webiny",
  "slug": "when-to-use-webiny",
  "children": [{
    "title": "Good Fit",
    "slug": "good-fit",
    "children": []
  }, {
    "title": "Poor Fit",
    "slug": "poor-fit",
    "children": []
  }]
}, {
  "title": "Architecture Principles",
  "slug": "architecture-principles",
  "children": [{
    "title": "Modularity",
    "slug": "modularity",
    "children": []
  }, {
    "title": "Serverless-First",
    "slug": "serverless-first",
    "children": []
  }, {
    "title": "Developer Experience",
    "slug": "developer-experience",
    "children": []
  }]
}, {
  "title": "Licensing",
  "slug": "licensing",
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
  - What components make up Webiny - How Webiny's modular architecture works - When to use Webiny
  for your projects
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`Webiny is a serverless content platform built on a modular, extensible architecture. Unlike monolithic platforms, Webiny is designed from the ground up to support complex projects through its component-based approach. Every part of the system can be extended or modified without breaking upgrades.`}</p>
<_Heading level={2} id={"core-components"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Core Components</_Heading>
<_Heading level={3} id={"applications"} nextElement={{
      "type": "paragraph"
    }}>Applications</_Heading>
<p>{`Webiny includes several built-in applications:`}</p>
<ul>
<li parentName="ul"><strong parentName="li">{`Headless CMS`}</strong>{` - GraphQL-based content management with content modeling`}</li>
<li parentName="ul"><strong parentName="li">{`Website Builder`}</strong>{` - Visual page builder with component-based architecture`}</li>
<li parentName="ul"><strong parentName="li">{`File Manager`}</strong>{` - Asset management with transformations and CDN delivery`}</li>
<li parentName="ul"><strong parentName="li">{`Admin`}</strong>{` - Unified interface for managing all applications`}</li>
<li parentName="ul"><strong parentName="li">{`Publishing Workflows`}</strong>{` - Content approval and publishing pipelines`}</li>
</ul>
<_Heading level={3} id={"developer-toolkit"} nextElement={{
      "type": "paragraph"
    }}>Developer Toolkit</_Heading>
<p>{`The Webiny Framework provides:`}</p>
<ul>
<li parentName="ul"><strong parentName="li">{`Extension System`}</strong>{` - Modify any part of the platform through extensions`}</li>
<li parentName="ul"><strong parentName="li">{`API Framework`}</strong>{` - Build custom GraphQL schemas and resolvers`}</li>
<li parentName="ul"><strong parentName="li">{`UI Framework`}</strong>{` - Extend the Admin interface with custom components`}</li>
<li parentName="ul"><strong parentName="li">{`Infrastructure as Code`}</strong>{` - Automated AWS deployment with Pulumi`}</li>
</ul>
<_Heading level={3} id={"infrastructure"} nextElement={{
      "type": "paragraph"
    }}>Infrastructure</_Heading>
<p>{`Webiny deploys to your AWS account with:`}</p>
<ul>
<li parentName="ul"><strong parentName="li">{`Serverless Architecture`}</strong>{` - Auto-scaling Lambda functions`}</li>
<li parentName="ul"><strong parentName="li">{`Managed Services`}</strong>{` - DynamoDB, S3, CloudFront, Cognito`}</li>
<li parentName="ul"><strong parentName="li">{`Security by Default`}</strong>{` - IAM roles, VPC isolation, encryption`}</li>
<li parentName="ul"><strong parentName="li">{`Multi-region Support`}</strong>{` - Deploy across AWS regions`}</li>
</ul>
<_Heading level={2} id={"when-to-use-webiny"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>When to Use Webiny</_Heading>
<_Heading level={3} id={"good-fit"} nextElement={{
      "type": "paragraph"
    }}>Good Fit</_Heading>
<p>{`Webiny excels for projects requiring:`}</p>
<ul>
<li parentName="ul"><strong parentName="li">{`Data Control`}</strong>{` - Self-hosted in your AWS account`}</li>
<li parentName="ul"><strong parentName="li">{`Scalability`}</strong>{` - Handles millions of records and petabytes of assets`}</li>
<li parentName="ul"><strong parentName="li">{`Customization`}</strong>{` - Extend every aspect via the framework`}</li>
<li parentName="ul"><strong parentName="li">{`Multi-tenancy`}</strong>{` - Isolate content and users across tenants`}</li>
<li parentName="ul"><strong parentName="li">{`Enterprise Security`}</strong>{` - SOC2 compliance, SSO, fine-grained permissions`}</li>
<li parentName="ul"><strong parentName="li">{`Complex Workflows`}</strong>{` - Custom approval processes and integrations`}</li>
</ul>
<_Heading level={3} id={"poor-fit"} nextElement={{
      "type": "paragraph"
    }}>Poor Fit</_Heading>
<p>{`Consider alternatives for:`}</p>
<ul>
<li parentName="ul"><strong parentName="li">{`Simple Sites`}</strong>{` - Static site generators may be more appropriate`}</li>
<li parentName="ul"><strong parentName="li">{`Non-AWS Hosting`}</strong>{` - Webiny requires AWS (on-premises not supported)`}</li>
<li parentName="ul"><strong parentName="li">{`Non-JavaScript Teams`}</strong>{` - Requires React, TypeScript, and GraphQL knowledge`}</li>
<li parentName="ul"><strong parentName="li">{`Quick Prototypes`}</strong>{` - Initial setup requires AWS account and deployment`}</li>
</ul>
<_Heading level={2} id={"architecture-principles"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Architecture Principles</_Heading>
<_Heading level={3} id={"modularity"} nextElement={{
      "type": "paragraph"
    }}>Modularity</_Heading>
<p>{`Everything in Webiny is a module or extension:`}</p>
<ul>
<li parentName="ul">{`Core features are extensions you can replace`}</li>
<li parentName="ul">{`No hard dependencies between components`}</li>
<li parentName="ul">{`Upgrade without breaking customizations`}</li>
</ul>
<_Heading level={3} id={"serverless-first"} nextElement={{
      "type": "paragraph"
    }}>Serverless-First</_Heading>
<p>{`Built for serverless from day one:`}</p>
<ul>
<li parentName="ul">{`No servers to manage or scale`}</li>
<li parentName="ul">{`Pay only for what you use`}</li>
<li parentName="ul">{`Automatic scaling for traffic spikes`}</li>
</ul>
<_Heading level={3} id={"developer-experience"} nextElement={{
      "type": "paragraph"
    }}>Developer Experience</_Heading>
<p>{`Designed for modern development:`}</p>
<ul>
<li parentName="ul">{`TypeScript throughout`}</li>
<li parentName="ul">{`React for UI extensions`}</li>
<li parentName="ul">{`GraphQL for API development`}</li>
<li parentName="ul">{`Infrastructure as Code`}</li>
</ul>
<_Heading level={2} id={"licensing"} nextElement={{
      "type": "paragraph"
    }}>Licensing</_Heading>
<p>{`Webiny offers two editions:`}</p>
<ul>
<li parentName="ul"><strong parentName="li">{`Community Edition`}</strong>{` - MIT licensed, includes core features`}</li>
<li parentName="ul"><strong parentName="li">{`Business/Enterprise Edition`}</strong>{` - Commercial license with advanced features:`}
<ul parentName="li">
<li parentName="ul">{`Multi-tenancy`}</li>
<li parentName="ul">{`Advanced ACL`}</li>
<li parentName="ul">{`Priority support`}</li>
<li parentName="ul">{`SOC2 compliance`}</li>
<li parentName="ul">{`SSO integration`}</li>
</ul>
</li>
</ul>
<p>{`Choose based on your project’s requirements and scale.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;