/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import submitChangeVideo from "/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/5.x/apw/essentials/assets/submit-change/apw-submit-change.mp4";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.79c9f1.json";

import _versions from "@/data/versions.ff7084.json";

const Layout = _Layout;
const pageData = {
  "title": "Submit Change",
  "description": "Learn how to submit requested change in a Publishing Workflow.",
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
<li parentName="ul">{`how to submit requested change`}</li>
</ul>
</Alert>
<p>{`In this tutorial, we will learn how you can view a requested change in a record, make the change, and submit the change in a Publishing Workflow.`}</p>
<_Heading level={2} id={"prerequisites"} nextElement={{
      "type": "paragraph"
    }}>Prerequisites</_Heading>
<p>{`To follow this tutorial:`}</p>
<ul>
<li parentName="ul">
<p parentName="li">{`You need to have the change request `}<strong parentName="p">{`Change blog’s title for better SEO`}</strong>{` made by a reviewer. If you don’t have it, please follow the `}<_Link href="/docs/5.x/user-guides/apw/essentials/review-record">{`Review Record`}</_Link>{` tutorial to create the change request.`}</p>
</li>
<li parentName="ul">
<p parentName="li">{`You need to have the `}<strong parentName="p">{`John Author`}</strong>{` user account in your Webiny instance. If you don’t have it, please follow the `}<_Link href="/docs/5.x/user-guides/apw/essentials/apw-user-guides-outline-users-creation">{`Create Users`}</_Link>{` tutorial to create it.`}</p>
<Video src={submitChangeVideo} controls={true} mdxType="Video" />
</li>
</ul>
<ol>
<li parentName="ol">
<p parentName="li">{`Log in with the `}<strong parentName="p">{`John Author`}</strong>{` user account.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`From the `}<strong parentName="p">{`Side Menu`}</strong>{`, click `}<strong parentName="p">{`Publishing Workflows`}</strong>{` > `}<strong parentName="p">{`Content Reviews`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Content review dashboard`}</strong>{` screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click the `}<strong parentName="p">{`Elevate Your Style: 5 Stylish Ways to Wear a Black T-Shirt for Men`}</strong>{` list item.`}</p>
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
<p parentName="li">{`In front of the title `}<strong parentName="p">{`Elevate Your Style: 5 Stylish Ways to Wear a Black T-Shirt for Men`}</strong>{`, click the `}<strong parentName="p">{`external link`}</strong>{` icon.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Blog`}</strong>{` editor screen opens in a new tab.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Title`}</strong>{` textbox, update the text to `}<strong parentName="p">{`Black T-Shirt Styling: 5 Timeless Looks for Men`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Slug`}</strong>{` textbox, update the text to `}<strong parentName="p">{`black-t-shirt-styling-5-timeless-looks-for-men`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`SAVE`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The message `}<strong parentName="p">{`Content saved successfully.`}</strong>{` displays.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`On the record review screen, under the `}<strong parentName="p">{`Change blog’s title for better SEO`}</strong>{` change request’s details, in the message texbox with the placeholder `}<strong parentName="p">{`Type something to send…`}</strong>{`, type `}<strong parentName="p">{`Requested change made`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click the `}<strong parentName="p">{`SEND`}</strong>{` icon.`}</p>
<p parentName="li">{`✔️ The message gets sent and logged under the change request’s details. `}</p>
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