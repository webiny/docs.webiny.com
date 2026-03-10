/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import assignRoleVideo from "/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/5.x/security/essentials/assets/assign-role/assign-role-to-user.mp4";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.79c9f1.json";

import _versions from "@/data/versions.ff7084.json";

const Layout = _Layout;
const pageData = {
  "title": "Assign Role to a User",
  "description": "Learn how to assign a role to a user.",
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
<li parentName="ul">{`how to assign a role to a user`}</li>
</ul>
</Alert>
<p>{`In this tutorial, we will learn how to assign a role to a user.`}</p>
<_Heading level={2} id={"prerequisites"} nextElement={{
      "type": "paragraph"
    }}>Prerequisites</_Heading>
<p>{`To follow this tutorial, you need to have the `}<strong parentName="p">{`E-commerce`}</strong>{` role and the `}<strong parentName="p">{`John Doe`}</strong>{` user in your Webiny instance. If you don’t have them, please follow the `}<_Link href="/docs/5.x/user-guides/security/essentials/role-creation">{`Creation of Role`}</_Link>{` and `}<_Link href="/docs/5.x/user-guides/security/essentials/user-creation">{`Creation of User`}</_Link>{` tutorials to create it.`}</p>
<Video src={assignRoleVideo} controls={true} mdxType="Video" />
<ol>
<li parentName="ol">
<p parentName="li">{`From the `}<strong parentName="p">{`Side Menu`}</strong>{`, click `}<strong parentName="p">{`Settings`}</strong>{` > `}<strong parentName="p">{`ADMIN USERS`}</strong>{` > `}<strong parentName="p">{`Users`}</strong></p>
</li>
<li parentName="ol">
<p parentName="li">{`Click the `}<strong parentName="p">{`John Doe`}</strong>{` in the list of Users.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Role`}</strong>{` dropdown, click `}<strong parentName="p">{`E-commerce`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`SAVE USER`}</strong>{`.`}</p>
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