/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import userCreation from "/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/5.x/headless-cms/advanced/assets/user-creation/user-creation.mp4";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.79c9f1.json";

import _versions from "@/data/versions.ff7084.json";

const Layout = _Layout;
const pageData = {
  "title": "User Creation",
  "description": "Learn how to create a user with custom access to Headless CMS.",
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
  "title": "Step 1: Create a User Group",
  "slug": "step-1-create-a-user-group",
  "children": []
}, {
  "title": "Step 2: Define Access Permissions",
  "slug": "step-2-define-access-permissions",
  "children": []
}, {
  "title": "Step 3: Create User",
  "slug": "step-3-create-user",
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
<li parentName="ul">{`how to create a user group`}</li>
<li parentName="ul">{`how to define access permissions for a user group`}</li>
<li parentName="ul">{`how to create a user`}</li>
</ul>
</Alert>
<p>{`Webiny allows you to add multiple users with different access permissions to your application. You can define the access permissions by creating a user group.
In this tutorial, we will learn how to create a user group with custom access permission to the Headless CMS. Then we will create a user within that user group.`}</p>
<p>{`As an example, we will create a user group with the following access permissions:`}</p>
<ul>
<li parentName="ul">{`Permission to view and update a specific content model group.`}</li>
<li parentName="ul">{`Permission to view, create, and update all content models inside the respective content model group.`}</li>
<li parentName="ul">{`Permission to view, create, and update the content entries inside the content models.`}</li>
</ul>
<Video src={userCreation} controls={true} mdxType="Video" />
<p>{`We will do this in 3 steps:`}</p>
<ul>
<li parentName="ul">{`Step 1: Create a user group.`}</li>
<li parentName="ul">{`Step 2: Define access permissions.`}</li>
<li parentName="ul">{`Step 3: Create user within the user group.`}</li>
</ul>
<_Heading level={2} id={"step-1-create-a-user-group"} nextElement={{
      "type": "list",
      "ordered": true,
      "start": 1,
      "spread": true
    }}>Step 1: Create a User Group</_Heading>
<ol>
<li parentName="ol">
<p parentName="li">{`From the `}<strong parentName="p">{`Side Menu`}</strong>{`, Click `}<strong parentName="p">{`Settings`}</strong>{` > `}<strong parentName="p">{`ACCESS MANAGEMENT`}</strong>{` > `}<strong parentName="p">{`Groups`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`+ NEW GROUP`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The form to create a new user group opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Name`}</strong>{` textbox, type `}<strong parentName="p">{`E-Commerce`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Slug`}</strong>{` textbox, type `}<strong parentName="p">{`e-commerce`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Description`}</strong>{` textbox, type `}<strong parentName="p">{`User group for E-Commerce Managers`}</strong>{`.`}</p>
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
<p parentName="li">{`Under `}<strong parentName="p">{`GRAPHQL API TYPES`}</strong>{`, select all the three checkboxes (`}<strong parentName="p">{`Read`}</strong>{`, `}<strong parentName="p">{`Manage`}</strong>{`, and `}<strong parentName="p">{`Preview`}</strong>{`).`}</p>
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
<p parentName="li">{`Under `}<strong parentName="p">{`PUBLISHING ACTIONS`}</strong>{`, check both - `}<strong parentName="p">{`Publish`}</strong>{` and `}<strong parentName="p">{`Unpublish`}</strong>{` checkboxes.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`SAVE GROUP`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The message “Group saved successfully!” displays.`}</p>
</li>
</ol>
<_Heading level={2} id={"step-3-create-user"} nextElement={{
      "type": "list",
      "ordered": true,
      "start": 1,
      "spread": true
    }}>Step 3: Create User</_Heading>
<ol>
<li parentName="ol">
<p parentName="li">{`From the `}<strong parentName="p">{`Side Menu`}</strong>{`, Click `}<strong parentName="p">{`Settings`}</strong>{` > `}<strong parentName="p">{`ADMIN USERS`}</strong>{` > `}<strong parentName="p">{`Users`}</strong></p>
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
<p parentName="li">{`In the `}<strong parentName="p">{`Group`}</strong>{` dropdown, click `}<strong parentName="p">{`E-Commerce`}</strong>{`.`}</p>
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