/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import schedulePublishingVideo from "/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/5.x/apw/essentials/assets/schedule-publishing/apw-schedule-publishing.mp4";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.79c9f1.json";

import _versions from "@/data/versions.ff7084.json";

const Layout = _Layout;
const pageData = {
  "title": "Scheduled Publishing",
  "description": "Learn how to schedule a content to be published at a certain time and date.",
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
<li parentName="ul">{`how to schedule a content to be published`}</li>
</ul>
</Alert>
<_Heading level={2} id={"prerequisites"} nextElement={{
      "type": "paragraph"
    }}>Prerequisites</_Heading>
<p>{`To follow this tutorial:`}</p>
<ul>
<li parentName="ul">
<p parentName="li">{`You need content that will be scheduled. If you don’t have any content, please follow `}<_Link href="/docs/5.x/user-guides/apw/essentials/provide-sign-off">{`this tutorial`}</_Link>{` to have Black T-Shirt Styling: 5 Timeless Looks for Men blog.`}</p>
</li>
<li parentName="ul">
<p parentName="li">{`You need to have the `}<strong parentName="p">{`John Author`}</strong>{` user account in your Webiny instance. If you don’t have it, please follow the `}<_Link href="/docs/5.x/user-guides/apw/essentials/apw-user-guides-outline-users-creation">{`Create Users`}</_Link>{` tutorial to create it.`}</p>
</li>
</ul>
<Video src={schedulePublishingVideo} controls={true} mdxType="Video" />
<ol>
<li parentName="ol">
<p parentName="li">{`Log in with the `}<strong parentName="p">{`John Author`}</strong>{` user account.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`From the `}<strong parentName="p">{`Side Menu`}</strong>{`, click `}<strong parentName="p">{`Publishing Workflows`}</strong>{` > `}<strong parentName="p">{`Content Reviews`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Content review dashboard`}</strong>{` screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click the `}<strong parentName="p">{`Black T-Shirt Styling: 5 Timeless Looks for Men`}</strong>{` list item.`}</p>
<p parentName="li">{`✔️ The content review screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`PUBLISH CONTENT`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Publish Content`}</strong>{` screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`SCHEDULE PUBLISH`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Set Schedule`}</strong>{` screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Date`}</strong>{` field, select/type the `}<em parentName="p">{`publishing date`}</em>{` (e.g. 01-01-2024).`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Time`}</strong>{` field, select/type the `}<em parentName="p">{`publishing time`}</em>{` (e.g. 19:00).`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`SCHEDULE`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The message “Content published successfully!” displays.`}</p>
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