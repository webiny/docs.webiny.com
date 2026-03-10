/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import teamCreationVideo from "/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/6.0.x/security/essentials/assets/create-team/create-team.mp4";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.9991ed.json";

import _versions from "@/data/versions.ff7084.json";

const Layout = _Layout;
const pageData = {
  "title": "Create a Team",
  "description": "Learn how to create a Team.",
  "type": "user-guides",
  "showPageHeader": true,
  "fullWidth": false,
  "version": "6.0.x"
};
const docsearch = {
  "type": "user-guides",
  "weight": 100,
  "versions": ["latest", "6.0.x"]
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
<li parentName="ul">{`how to create a team`}</li>
</ul>
</Alert>
<p>{`Webiny enables you to define a team for a group of users in your application. You can provide the access of multiple user roles to the group by creating a Team. In this tutorial, we will learn how to create a Team.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`  Note that the Teams feature is part of our enterprise offering. To learn more, please check out the `}<_Link href="/docs/5.x/enterprise/aacl/teams">{`Teams`}</_Link>{` article.`}</p>
</Alert>
<_Heading level={2} id={"prerequisites"} nextElement={{
      "type": "paragraph"
    }}>Prerequisites</_Heading>
<p>{`To follow this tutorial, you need to have the `}<strong parentName="p">{`E-commerce`}</strong>{` user role in your Webiny instance. If you don’t have it, please follow the `}<_Link href="/docs/user-guides/security/essentials/create-user-role">{`Create Role`}</_Link>{` tutorial to create it.`}</p>
<Video src={teamCreationVideo} controls={true} mdxType="Video" />
<ol>
<li parentName="ol">
<p parentName="li">{`From the `}<strong parentName="p">{`Side Menu`}</strong>{`, click `}<strong parentName="p">{`Settings`}</strong>{` > `}<strong parentName="p">{`ACCESS MANAGEMENT`}</strong>{` > `}<strong parentName="p">{`Teams`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Teams`}</strong>{` screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`+ New`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The form to create a new team opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Name`}</strong>{` textbox, type `}<strong parentName="p">{`E-Commerce L2 Managers`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Slug`}</strong>{` textbox, type `}<strong parentName="p">{`e-commerce-l2-managers`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Description`}</strong>{` textbox, type `}<strong parentName="p">{`Team of level-2 E-Commerce Managers`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Roles`}</strong>{` dropdown, click `}<strong parentName="p">{`E-Commerce`}</strong>{`.`}</p>
<p parentName="li"><strong parentName="p">{`Note`}</strong>{`: You can select multiple roles in the `}<strong parentName="p">{`Roles`}</strong>{` dropdown.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`Save.`}</strong></p>
<p parentName="li">{`✔️ The message “Team saved successfully!” displays.`}</p>
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