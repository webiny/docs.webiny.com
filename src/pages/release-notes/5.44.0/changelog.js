/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { GithubRelease } from "@/components/GithubRelease";
import { Layout as _Layout } from "@/layouts/ReleaseNotesLayout"

import _navigation from "@/data/navigation.12bb74.json";

const Layout = _Layout;
const pageData = {
  "title": "Webiny 5.44.0 Changelog",
  "description": "See what's new in Webiny version 5.44.0",
  "type": "release-notes",
  "showPageHeader": true,
  "fullWidth": false
};
const docsearch = {
  "type": "release-notes",
  "weight": 50
};
const navigation = _navigation;
const tableOfContents = [{
  "title": "Security Fixes",
  "slug": "security-fixes",
  "children": []
}, {
  "title": "Page Builder Redirects",
  "slug": "page-builder-redirects",
  "children": []
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
const Editor = makeShortcode("Editor");
const layoutProps = {
  Layout,
pageData,
docsearch,
navigation,
tableOfContents
};
const MDXLayout = "wrapper"
export default function MDXContent({
  components,
  ...props
}) {
  return <MDXLayout {...layoutProps} {...props} components={components} mdxType="MDXLayout">



<GithubRelease version={"5.44.0"} mdxType="GithubRelease" />
<_Heading level={2} id={"security-fixes"} nextElement={{
      "type": "paragraph"
    }}>Security Fixes</_Heading>
<p>{`We’ve fixed several security-related issues:`}</p>
<ol>
<li parentName="ol">
<p parentName="li">{`When updating your own user profile, or a profile of another user, we now verify that the email address is unique before passing the data to Cognito. There was a bug where Cognito was correctly throwing an error on duplicate emails, but the profile in our database was updated before that. This would create multiple user profiles with the same email address, and cause a mismatch between Webiny and Cognito.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Some GraphQL queries were not properly checked for the type of identity, exposing data that should only be accessible to admin users (identity of type `}<inlineCode parentName="p">{`admin`}</inlineCode>{`) to any authenticated identity (API keys, other non-admin identities).`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`When a user logs in via the `}<inlineCode parentName="p">{`login`}</inlineCode>{` mutation, we set a cookie with the user’s idToken. it was brought up to us that this cookie is set twice in the response headers. This has to do with how `}<inlineCode parentName="p">{`fastify`}</inlineCode>{` and its cookies plugin works. The `}<inlineCode parentName="p">{`set-cookie`}</inlineCode>{` header is now properly handled to avoid duplicate values.`}</p>
</li>
</ol>
<_Heading level={2} id={"page-builder-redirects"} nextElement={{
      "type": "paragraph"
    }}>Page Builder Redirects</_Heading>
<p>{`We’ve added support for redirects in the `}<inlineCode parentName="p">{`website`}</inlineCode>{` Pulumi app. This is not available via Admin app UI, but this still allows you to configure redirects of your Page Builder pages. Once deployed, these redirects will be processed in the Lambda@Edge function before delivering the page content to the user.`}</p>
<Editor title="" lang="ts" mdxType="Editor">
{`import { createWebsiteApp } from "@webiny/serverless-cms-aws";

export default createWebsiteApp({
  pulumiResourceNamePrefix: "wby-",
  redirects() {
    return [
      // Supports domain-level redirects (if you serve your website through multiple domains)
      {
        from: "https://my.website.com/news",
        to: "https://blog.website.org/en-us/overview/news",
        permanent: true
      },
      // Supports path-level redirects
      {
        from: "/old-page",
        to: "/new-page",
        permanent: true
      },
      // Supports custom cache headers
      {
        from: "/page-1",
        to: "/new-page",
        permanent: true,
        maxAge: 6666
      }
    ];
  }
});`}
</Editor>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}





    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;