/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { WhatYouWillLearn } from "@/components/WhatYouWillLearn";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Environment Utilities",
  "description": "Learn about environment-related utility functions available within the Admin application.",
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
  "title": "Available Utility Functions",
  "slug": "available-utility-functions",
  "children": []
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
const Alert = makeShortcode("Alert");
const Editor = makeShortcode("Editor");
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



<WhatYouWillLearn mdxType="WhatYouWillLearn">
  - what are environment-related utility functions
  - what environment-related utility functions are available
</WhatYouWillLearn>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`This article covers a couple of environment-related utility functions that can be used within the Admin application, or, in other words, when developing extensions for the Admin application.`}</p>
<Alert mdxType="Alert">
<p>{`  To learn more about extensions in general, please visit the `}<_Link href="/docs/5.x/core-development-concepts/basics/extensions">{`Extensions`}</_Link>{` article.`}</p>
</Alert>
<_Heading level={2} id={"available-utility-functions"} nextElement={{
      "type": "paragraph"
    }}>Available Utility Functions</_Heading>
<p>{`The following is a list of available utility functions:`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`import {
  getApiUrl,
  getGqlApiUrl,
  getHeadlessCmsGqlApiUrl,
  getLocaleCode,
  getTenantId,
  isLocalhost,
} from "@webiny/app-admin"; // Use \`@webiny/app\` for versions 5.41.3 or older.

// Returns URL of Webiny's backend API.
getApiUrl(); // https://xyz.cloudfront.net

// Returns URL of Webiny's backend GraphQL API.
getGqlApiUrl(); // https://xyz.cloudfront.net/graphql

// Returns URLs of Webiny's backend Headless CMS GraphQL API.
getHeadlessCmsGqlApiUrl(); // { preview: "...", manage: "...", read: "..."}

// Returns locale used on the page.
getLocaleCode(); // en-US

// Returns current tenant.
getTenantId(); // root

// Returns \`true\` if the application is run on localhost.
isLocalhost(); // true`}
</Editor>
<Alert mdxType="Alert">
<p>{`  For versions 5.41.3 or older, instead of the `}<inlineCode parentName="p">{`@webiny/app-admin`}</inlineCode>{` package, please use the `}<inlineCode parentName="p">{`@webiny/app`}</inlineCode>{` package.`}</p>
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