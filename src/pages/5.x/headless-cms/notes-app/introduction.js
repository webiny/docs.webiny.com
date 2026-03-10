/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import notesReactApp from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/notes-app/assets/notes-app/notes-react-app.mp4";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Introduction",
  "description": "Learn how to set up a new User Pool in Webiny, enable authentication for it, and restrict users’ access to only their own content. Additionally, we will build a React Notes App where users can sign up to create, read, and delete their own notes.",
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




<Alert type="info" title="Can I Use This?" mdxType="Alert">
<p>{`This feature has been available since Webiny `}<strong parentName="p">{`v5.40.0`}</strong>{` and is available in the Business & Enterprise tiers.`}</p>
</Alert>
<Alert type="success" title="What you will learn" mdxType="Alert">
<ul>
<li parentName="ul">{`how to set up a new User Pool in Webiny and enable authentication for it`}</li>
<li parentName="ul">{`how to limit users’ access to only the content they’ve created`}</li>
<li parentName="ul">{`how to use Amplify UI in a React app to build a sign-up and login form`}</li>
<li parentName="ul">{`how to build a notes React application where users can create, read, and delete notes after signing up`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`Imagine an end-user-facing application such as an E-commerce site, Instagram, Twitter (X), or similar, where users can sign up and interact with the app. If you have this kind of requirement, then this guide is for you.`}</p>
<p>{`To achieve this functionality in Webiny, we need to create a new User Pool and enable authentication for this pool. In this guide, we will look into the step-by-step instructions on how to make all the necessary changes in your Webiny project. We will also create a React app using the `}<a parentName="p" {...{
        "href": "https://ui.docs.amplify.aws/react/connected-components/authenticator"
      }}>{`Amplify UI`}</a>{` library, demonstrating how to create a sign-up and login form. This React app is a notes application, allowing users to sign up and perform operations such as creating, reading, and deleting notes that they have created.`}</p>
<p>{`This guide is divided into two parts:`}</p>
<ul>
<li parentName="ul"><strong parentName="li"><_Link href="/docs/5.x/headless-cms/notes-app/webiny-infrastructure-setup">{`Webiny Infrastructure Setup`}</_Link></strong>{` - The first part focuses on creating the necessary infrastructure on the Webiny side and limiting users’ access to only the content they’ve created.`}</li>
<li parentName="ul"><strong parentName="li"><_Link href="/docs/5.x/headless-cms/notes-app/react-notes-app">{`Building a React Notes Application with the Amplify UI Library`}</_Link></strong>{` - The second part covers creating a notes React application using the Amplify UI library.`}</li>
</ul>
<p>{`Here’s a preview of the React application we’ll be building.`}</p>
<Video src={notesReactApp} controls={true} mdxType="Video" />
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;