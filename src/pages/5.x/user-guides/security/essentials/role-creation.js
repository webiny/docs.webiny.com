/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import roleCreationVideo from "/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/5.x/security/essentials/assets/role-creation/create-user-role.mp4";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.79c9f1.json";

import _versions from "@/data/versions.ff7084.json";

const Layout = _Layout;
const pageData = {
  "title": "Create a Role",
  "description": "Learn how to create a Role.",
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
}, {
  "title": "Step 1: Create a Role",
  "slug": "step-1-create-a-role",
  "children": []
}, {
  "title": "Step 2: Define Access Permissions",
  "slug": "step-2-define-access-permissions",
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
<li parentName="ul">{`how to create a Role`}</li>
<li parentName="ul">{`how to define access permissions for a Role`}</li>
</ul>
</Alert>
<Alert type="info" title="Can I use this?" mdxType="Alert">
<p>{`In the Open Source version, you’ll have basic roles and permissions, where users either have full access or no access to a particular application.`}<br parentName="p"></br>{`
`}{`To access the advanced roles and permissions feature, you need a Webiny Enterprise or Webiny Business license.`}</p>
</Alert>
<p>{`You can manage access permissions for users with Roles. In a Role, you define various access permissions, and then assign this Role to users.
In this tutorial, we will learn how to create a Role with custom access permission to the Headless CMS. We will do this in 2 steps:`}</p>
<ul>
<li parentName="ul">{`Step 1: Create a Role.`}</li>
<li parentName="ul">{`Step 2: Define access permissions.`}</li>
</ul>
<p>{`As an example, we will create a Role with the following access permissions:`}</p>
<ul>
<li parentName="ul">{`Permission to view and update a specific content model group.`}</li>
<li parentName="ul">{`Permission to view, create, and update all content models inside the content model group.`}</li>
<li parentName="ul">{`Permission to view, create, and update the content entries inside the content models.`}</li>
</ul>
<_Heading level={2} id={"prerequisites"} nextElement={{
      "type": "paragraph"
    }}>Prerequisites</_Heading>
<p>{`To follow this tutorial, you need to have a content model group named `}<strong parentName="p">{`E-commerce`}</strong>{` in your Webiny instance. If you don’t have it, please follow the `}<_Link href="/docs/5.x/user-guides/headless-cms/essentials/create-content-model-group">{`Create Content Model Group`}</_Link>{` tutorial to create it.`}</p>
<Video src={roleCreationVideo} controls={true} mdxType="Video" />
<_Heading level={2} id={"step-1-create-a-role"} nextElement={{
      "type": "list",
      "ordered": true,
      "start": 1,
      "spread": true
    }}>Step 1: Create a Role</_Heading>
<ol>
<li parentName="ol">
<p parentName="li">{`From the `}<strong parentName="p">{`Side Menu`}</strong>{`, click `}<strong parentName="p">{`Settings`}</strong>{` > `}<strong parentName="p">{`ACCESS MANAGEMENT`}</strong>{` > `}<strong parentName="p">{`Roles`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`+ NEW ROLE`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The form to create a new Role opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Name`}</strong>{` textbox, type `}<strong parentName="p">{`E-Commerce`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Slug`}</strong>{` textbox, type `}<strong parentName="p">{`e-commerce`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Description`}</strong>{` textbox, type `}<strong parentName="p">{`User Role for E-Commerce Managers`}</strong>{`.`}</p>
</li>
</ol>
<_Heading level={2} id={"step-2-define-access-permissions"} nextElement={{
      "type": "list",
      "ordered": true,
      "start": 1,
      "spread": true
    }}>Step 2: Define Access Permissions</_Heading>
<ol>
<li parentName="ol">
<p parentName="li">{`Under the `}<strong parentName="p">{`Permissions`}</strong>{` section, in the `}<strong parentName="p">{`Content`}</strong>{` accordion, click `}<strong parentName="p">{`All locales`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Under the `}<strong parentName="p">{`Permissions`}</strong>{` section, click `}<strong parentName="p">{`Headless CMS`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Headless CMS`}</strong>{` accordion opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Access Level`}</strong>{` dropdown, click `}<strong parentName="p">{`Custom access`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Under `}<strong parentName="p">{`GRAPHQL API TYPES`}</strong>{`, select all the three checkboxes - `}<strong parentName="p">{`Read`}</strong>{`, `}<strong parentName="p">{`Manage`}</strong>{`, and `}<strong parentName="p">{`Preview`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Under the `}<strong parentName="p">{`CONTENT MODEL GROUPS`}</strong>{` section:`}</p>
<p parentName="li">{`a. In the `}<strong parentName="p">{`Access Scope`}</strong>{` dropdown, click `}<strong parentName="p">{`Only specific groups`}</strong>{`.`}</p>
<p parentName="li">{`✔️ A list of content model groups in the current locale appears.`}</p>
<p parentName="li">{`b. Select the `}<strong parentName="p">{`E-Commerce`}</strong>{` checkbox.`}</p>
<p parentName="li">{`c. In the `}<strong parentName="p">{`Primary Actions`}</strong>{` dropdown, click `}<strong parentName="p">{`Read, write`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Under the `}<strong parentName="p">{`CONTENT MODELS`}</strong>{` section:`}</p>
<p parentName="li">{`a. In the `}<strong parentName="p">{`Access Scope`}</strong>{` dropdown, click `}<strong parentName="p">{`All models`}</strong>{`.`}</p>
<p parentName="li">{`b. In the `}<strong parentName="p">{`Primary Actions`}</strong>{` dropdown, click `}<strong parentName="p">{`Read, write`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Under the `}<strong parentName="p">{`CONTENT ENTRIES`}</strong>{` section:`}</p>
<p parentName="li">{`a. In the `}<strong parentName="p">{`Access Scope`}</strong>{` dropdown, click `}<strong parentName="p">{`All entries`}</strong>{`.`}</p>
<p parentName="li">{`b. In the `}<strong parentName="p">{`Primary Actions`}</strong>{` dropdown, click `}<strong parentName="p">{`Read, write`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Under `}<strong parentName="p">{`PUBLISHING ACTIONS`}</strong>{`, select `}<strong parentName="p">{`Publish`}</strong>{` and `}<strong parentName="p">{`Unpublish`}</strong>{` checkboxes.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`SAVE ROLE`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The message “Role saved successfully!” displays.`}</p>
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