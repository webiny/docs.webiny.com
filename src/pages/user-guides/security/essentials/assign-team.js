/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import assignTeamVideo from "/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/6.0.x/security/essentials/assets/assign-team/assign-team-to-user.mp4";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.9991ed.json";

import _versions from "@/data/versions.ff7084.json";

const Layout = _Layout;
const pageData = {
  "title": "Assign Team to a User",
  "description": "Learn how to assign a team to a user.",
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
<li parentName="ul">{`how to assign a team to a user`}</li>
</ul>
</Alert>
<p>{`In this tutorial, we will learn how to assign a team to a user.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`  Note that the Teams feature is part of our enterprise offering. To learn more, please check out the `}<_Link href="/docs/5.x/enterprise/aacl/teams">{`Teams`}</_Link>{` article.`}</p>
</Alert>
<_Heading level={2} id={"prerequisites"} nextElement={{
      "type": "paragraph"
    }}>Prerequisites</_Heading>
<p>{`To follow this tutorial, you need to have the `}<strong parentName="p">{`E-commerce L2 Managers`}</strong>{` team and the `}<strong parentName="p">{`John Doe`}</strong>{` user in your Webiny instance. If you don’t have them, please follow the `}<_Link href="/docs/user-guides/security/essentials/create-team">{`Create Team`}</_Link>{` and `}<_Link href="/docs/user-guides/security/essentials/create-user">{`Create User`}</_Link>{` tutorials to create it.`}</p>
<Video src={assignTeamVideo} controls={true} mdxType="Video" />
<ol>
<li parentName="ol">
<p parentName="li">{`From the `}<strong parentName="p">{`Side Menu`}</strong>{`, click `}<strong parentName="p">{`Settings`}</strong>{` > `}<strong parentName="p">{`ACCESS MANAGEMENT`}</strong>{` > `}<strong parentName="p">{`Users.`}</strong></p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Admin Users`}</strong>{` screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`John Doe`}</strong>{` in the list of Users.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Teams`}</strong>{` dropdown, click `}<strong parentName="p">{`E-Commerce L2 Managers`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`Update user`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The message “User saved successfully.” displays.`}</p>
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