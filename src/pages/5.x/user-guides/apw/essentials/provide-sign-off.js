/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import provideSignOffVideo from "/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/5.x/apw/essentials/assets/provide-sign-off/apw-provide-sign-off.mp4";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.79c9f1.json";

import _versions from "@/data/versions.ff7084.json";

const Layout = _Layout;
const pageData = {
  "title": "Provide Sign Off",
  "description": "Learn how to provide sign off in a Publishing Workflow.",
  "type": "user-guides",
  "showPageHeader": true,
  "fullWidth": false,
  "version": "5.x"
};
const docsearch = {
  "type": "user-guides",
  "weight": 100,
  "versions": ["5.x"]
};
const navigation = _navigation;
const versions = _versions;
const tableOfContents = [{
  "title": "Prerequisites",
  "slug": "prerequisites",
  "children": []
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
const Video = makeShortcode("Video");
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
<li parentName="ul">{`how to provide sign off`}</li>
</ul>
</Alert>
<p>{`In this tutorial, we will learn how you can provide sign off to a record under review in a Publishing Workflow.`}</p>
<_Heading level={2} id={"prerequisites"} nextElement={{
      "type": "paragraph"
    }}>Prerequisites</_Heading>
<p>{`To follow this tutorial:`}</p>
<ul>
<li parentName="ul">
<p parentName="li">{`You need to have the requested change `}<strong parentName="p">{`Change blog’s title for better SEO`}</strong>{` resolved by the blog author. If you don’t have it, please follow the `}<_Link href="/docs/5.x/user-guides/apw/essentials/submit-change">{`Submit Change`}</_Link>{` tutorial to resolve it.`}</p>
</li>
<li parentName="ul">
<p parentName="li">{`You need to have the `}<strong parentName="p">{`Adam Reviewer`}</strong>{` user account in your Webiny instance. If you don’t have it, please follow the `}<_Link href="/docs/5.x/user-guides/apw/essentials/apw-user-guides-outline-users-creation">{`Create Users`}</_Link>{` tutorial to create it.`}</p>
</li>
</ul>
<Video src={provideSignOffVideo} controls={true} mdxType="Video" />
<ol>
<li parentName="ol">
<p parentName="li">{`Log in with the `}<strong parentName="p">{`Adam Reviewer`}</strong>{` user account.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`From the `}<strong parentName="p">{`Side Menu`}</strong>{`, click `}<strong parentName="p">{`Publishing Workflows`}</strong>{` > `}<strong parentName="p">{`Content Reviews`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Content review dashboard`}</strong>{` screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click the `}<strong parentName="p">{`Black T-Shirt Styling: 5 Timeless Looks for Men`}</strong>{` list item.`}</p>
<p parentName="li">{`✔️ The record review screen for the record opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click on `}<strong parentName="p">{`SEO Review`}</strong>{`.`}</p>
<p parentName="li">{`✔️ List of the requested changes in SEO review opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click on `}<strong parentName="p">{`Change blog’s title for better SEO`}</strong>{`.`}</p>
<p parentName="li">{`✔️ Full details about the change request appear.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Under the `}<strong parentName="p">{`Change blog’s title for better SEO`}</strong>{` change request’s details, click `}<strong parentName="p">{`Mark resolved`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The message “Successfully marked ‘Change blog’s title for better SEO’ as resolved!” displays.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`✔️ PROVIDE SIGN OFF`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The message “Sign off provided successfully!” displays.`}</p>
</li>
</ol>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;