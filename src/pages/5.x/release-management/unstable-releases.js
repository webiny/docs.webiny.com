/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Unstable Releases",
  "description": "Learn how to install and test unstable features.",
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
  "title": "Setup the Unstable Release",
  "slug": "setup-the-unstable-release",
  "children": []
}, {
  "title": "Updating to the Latest Unstable Release",
  "slug": "updating-to-the-latest-unstable-release",
  "children": []
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
const WhatYouWillLearn = makeShortcode("WhatYouWillLearn");
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
<ul>
<li parentName="ul">{`how to install the unstable release of Webiny`}</li>
</ul>
</WhatYouWillLearn>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`As described in the `}<_Link href="/docs/5.x/release-management/branching-strategy">{`Branching Strategy`}</_Link>{` article, features that are scheduled to be released in the next quarterly release are published under the `}<inlineCode parentName="p">{`unstable`}</inlineCode>{` tag to NPM. If you’re interested in taking that release for a spin, follow the instructions below.`}</p>
<_Heading level={2} id={"setup-the-unstable-release"} nextElement={{
      "type": "jsx"
    }}>Setup the Unstable Release</_Heading>
<Alert type="danger" title={"READ THIS BEFORE CONTINUING!"} mdxType="Alert">
<p>{`An unstable release is exactly that: no guarantees, bleeding edge, potentially broken, and
any API can change before becoming stable.`}</p>
<p>{`We highly recommend `}<strong parentName="p">{`against`}</strong>{` using this release in
production, as we cannot guarantee that projects created with this release will be upgradeable to
stable releases.`}</p>
</Alert>
<p>{`The process of setting up an unstable release is the same as creating a regular Webiny project, described in the `}<_Link href="/docs/5.x/get-started/install-webiny">{`Install Webiny`}</_Link>{` article. The only difference is in the `}<inlineCode parentName="p">{`create-webiny-project`}</inlineCode>{` command. The following is the command you need to use to create an unstable project:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`npx create-webiny-project@unstable my-new-project --tag=unstable`}
</Editor>
<p>{`From this point on, the process is identical to our `}<_Link href="/docs/5.x/get-started/install-webiny#pick-your-database">{`regular project setup`}</_Link>{`.`}</p>
<_Heading level={2} id={"updating-to-the-latest-unstable-release"} nextElement={{
      "type": "paragraph"
    }}>Updating to the Latest Unstable Release</_Heading>
<p>{`If you already have an unstable project, you can update it to the latest unstable release by running the following command:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`yarn up "@webiny/*@unstable"`}
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