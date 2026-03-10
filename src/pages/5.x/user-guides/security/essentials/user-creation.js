/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import userCreationVideo from "/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/5.x/security/essentials/assets/user-creation/create-user.mp4";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.79c9f1.json";

import _versions from "@/data/versions.ff7084.json";

const Layout = _Layout;
const pageData = {
  "title": "Create a User",
  "description": "Learn how to create a user.",
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
const tableOfContents = [];
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
<li parentName="ul">{`how to create a user`}</li>
</ul>
</Alert>
<p>{`Webiny users can access the admin application. You can assign users to specific roles or teams to grant them different levels of permissions and access within the application.
In this guide, we will learn how to create a user, and here are additional guides that explain more about `}<_Link href="/docs/5.x/user-guides/security/essentials/role-creation">{`Roles`}</_Link>{` and `}<_Link href="/docs/5.x/user-guides/security/essentials/team-creation">{`Teams`}</_Link>{`.`}</p>
<Video src={userCreationVideo} controls={true} mdxType="Video" />
<ol>
<li parentName="ol">
<p parentName="li">{`From the `}<strong parentName="p">{`Side Menu`}</strong>{`, click `}<strong parentName="p">{`Settings`}</strong>{` > `}<strong parentName="p">{`ADMIN USERS`}</strong>{` > `}<strong parentName="p">{`Users`}</strong></p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`+ NEW USER`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`New User`}</strong>{` screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`First Name`}</strong>{` textbox, type `}<em parentName="p">{`new user’s first name`}</em>{` (e.g. John).`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Last Name`}</strong>{` textbox, type `}<em parentName="p">{`new user’s last name`}</em>{` (e.g. Doe).`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Email`}</strong>{` textbox, type `}<em parentName="p">{`new user’s email`}</em>{` (e.g. `}<a parentName="p" {...{
            "href": "mailto:johndoe@example.com"
          }}>{`johndoe@example.com`}</a>{`).`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Password`}</strong>{` textbox, type `}<em parentName="p">{`new user’s password`}</em>{`.`}</p>
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