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
  "title": "Access control",
  "description": "Webiny security and access control overview.",
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
<li parentName="ul">{`Overview of Webiny’s access control feature`}</li>
</ul>
</Alert>
<p>{`Access control (ACL) inside Webiny CMS has been designed for security and extensability in mind.`}</p>
<p>{`Through the `}<inlineCode parentName="p">{`Security`}</inlineCode>{` module inside the Admin app, you can create user groups with different levels of permissions. Users added into the groups inherit the permissions. Permissions define what operations they can perform in the system.`}</p>
<p>{`Besides users and groups, Webiny also supports API tokens and personal access tokens (PAT) for when you wish to allow programmatic access to Webiny from a 3rd party system.`}</p>
<p>{`This is the standard approach you see in most systems on the market, but at Webiny, we’re going a few steps further.`}</p>
<p>{`Webiny provides you with a security framework. You can quickly implement security into your applications using this framework, including API and client-side UI logic. For example, with the framework, you can implement access control to your custom GraphQL resolvers that are built on top of Webiny. You can also show or hide components in the UI based on the same principles.`}</p>
<p>{`In addition to the security framework, we invested significant efforts in how we manage the `}<inlineCode parentName="p">{`identity`}</inlineCode>{` inside Webiny. `}<inlineCode parentName="p">{`identity`}</inlineCode>{` is what the system sees. It’s how the permissions are retrieved. This is a key to having a flexible ACL layer that can efficiently work with 3rd party IdPs like OKTA, Auth0, Cognito, and Active Directory. But not just “work” with those IdPs, but that the organization structure your company has inside those systems can work with Webiny as well, without needing to change things on your end, and when it comes to an IdP, that’s rarely a possibility.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;