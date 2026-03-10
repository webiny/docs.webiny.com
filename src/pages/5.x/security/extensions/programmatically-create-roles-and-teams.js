/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { WhatYouWillLearn } from "@/components/WhatYouWillLearn";
import rolesModule from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/security/extensions/assets/programmatically-create-roles-and-teams/roles-module.png";
import teamsModule from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/security/extensions/assets/programmatically-create-roles-and-teams/teams-module.png";
import roleInAdmin from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/security/extensions/assets/programmatically-create-roles-and-teams/role-in-admin.png";
import teamInAdmin from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/security/extensions/assets/programmatically-create-roles-and-teams/team-in-admin.png";
import copyPermissionsButton from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/security/extensions/assets/programmatically-create-roles-and-teams/copy-permissions-button.png";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Programmatically Create Roles and Teams",
  "description": "Learn how to define roles and teams programmatically.",
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
  "children": [{
    "title": "Via the Admin Area",
    "slug": "via-the-admin-area",
    "children": []
  }, {
    "title": "Programmatically",
    "slug": "programmatically",
    "children": []
  }]
}, {
  "title": "Getting Started",
  "slug": "getting-started",
  "children": []
}, {
  "title": "Roles",
  "slug": "roles",
  "children": [{
    "title": "Defining Security Permissions",
    "slug": "defining-security-permissions",
    "children": []
  }]
}, {
  "title": "Teams",
  "slug": "teams",
  "children": []
}, {
  "title": "Defining Roles and Teams for Specific Tenants",
  "slug": "defining-roles-and-teams-for-specific-tenants",
  "children": []
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
const Gallery = makeShortcode("Gallery");
const Image = makeShortcode("Image");
const ExtensionsGettingStarted = makeShortcode("ExtensionsGettingStarted");
const Editor = makeShortcode("Editor");
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









<WhatYouWillLearn mdxType="WhatYouWillLearn">
  
  - how to define roles and teams programmatically
</WhatYouWillLearn>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`Roles and teams can be defined in two ways.`}</p>
<_Heading level={3} id={"via-the-admin-area"} nextElement={{
      "type": "paragraph"
    }}>Via the Admin Area</_Heading>
<p>{`The most straightforward way to define roles and teams would be via the Admin Area application, via the Roles and Teams modules. This is especially suitable for users that are not developers, and just want to manage everything in a quick and easy way.`}</p>
<Gallery mdxType="Gallery">
  <Image src={rolesModule} title={"Roles Module"} mdxType="Image" />
  <Image src={teamsModule} title={"Teams Module"} mdxType="Image" />
</Gallery>
<Alert type="info" mdxType="Alert">
<p>{`  Note that the Teams feature is part of our enterprise offering. To learn more, please check out the `}<_Link href="/docs/5.x/enterprise/aacl/teams">{`Teams`}</_Link>{` article.   `}</p>
</Alert>
<_Heading level={3} id={"programmatically"} nextElement={{
      "type": "paragraph"
    }}>Programmatically</_Heading>
<p>{`And although we can get pretty far by defining roles and teams via the Admin Area, on the other hand, we can also do this programmatically, by creating a new `}<_Link href="/docs/5.x/core-development-concepts/basics/extensions">{`extension`}</_Link>{`. Once defined, roles and teams can be then used via the Admin Area in the same way as if they were created regularly, via the Role Editor.`}</p>
<p>{`Some of the benefits of this approach are:`}</p>
<ul>
<li parentName="ul">{`roles and teams get to be stored in version control`}</li>
<li parentName="ul">{`since everything is done programmatically, in some case we may receive additional flexibility`}</li>
<li parentName="ul">{`by default, defined roles and teams are available for all available locales and tenants`}</li>
<li parentName="ul">{`basically, only developers have the ability to perform changes on roles and teams`}</li>
</ul>
<p>{`In the following sections, we cover a couple of examples that show how to define roles and teams via plugins.`}</p>
<_Heading level={2} id={"getting-started"} nextElement={{
      "type": "jsx"
    }}>Getting Started</_Heading>
<ExtensionsGettingStarted type={"api"} name={"rolesAndTeams"} dependencies={"@webiny/api-serverless-cms"} fullExampleLink={"https://github.com/webiny/webiny-examples/tree/master/roles-and-teams"} fullExampleDownloadLink={"roles-and-teams"} mdxType="ExtensionsGettingStarted" />
<_Heading level={2} id={"roles"} nextElement={{
      "type": "paragraph"
    }}>Roles</_Heading>
<p>{`In this example, we define a role which provides full access to Webiny’s Headless CMS application. Meaning, any user that is assigned this role will have full access to the application.`}</p>
<Editor title="extensions/rolesAndTeams/src/index.ts" lang="ts" mdxType="Editor">
{`import { createSecurityRolePlugin } from "@webiny/api-serverless-cms";

export const createExtension = () => {
    return [
        createSecurityRolePlugin({
            id: "full-cms-access",
            name: "Full CMS Access",
            description: "Full access to the CMS application",
            permissions: [{ name: "cms.*" }, { name: "content.i18n" }]
        })
    ];
};`}
</Editor>
<p>{`As we can see, first we define a new team via the `}<inlineCode parentName="p">{`createSecurityRolePlugin`}</inlineCode>{` plugin factory. The following properties are required:`}</p>
<ul>
<li parentName="ul"><inlineCode parentName="li">{`id`}</inlineCode>{` - a unique identifier of the role`}</li>
<li parentName="ul"><inlineCode parentName="li">{`name`}</inlineCode>{` - the name of the role`}</li>
<li parentName="ul"><inlineCode parentName="li">{`description`}</inlineCode>{` - a short description of the role`}</li>
<li parentName="ul"><inlineCode parentName="li">{`permissions`}</inlineCode>{` - an array of `}<a parentName="li" {...{
          "href": "#defining-security-permissions"
        }}>{`security permissions`}</a>{` that the role provides`}</li>
</ul>
<p>{`With this code in place, we should be able to see the following role in the Roles module:`}</p>
<Image src={roleInAdmin} alt="Full CMS Access Role" mdxType="Image" />
<_Heading level={3} id={"defining-security-permissions"} nextElement={{
      "type": "paragraph"
    }}>Defining Security Permissions</_Heading>
<p>{`In the above example, we’ve defined a role that provides full access to the CMS application, which was achieved by assigning the `}<inlineCode parentName="p">{`cms.*`}</inlineCode>{` permission to the role.`}</p>
<p>{`But what about other permissions? How do we know which permissions are available? How do we build roles with more complex permissions?`}</p>
<p>{`The easiest way to find out which permissions are available and to build roles with more complex permissions is to use the Permissions editor in the Roles module. Essentially, we use the editor to build a role with the desired permissions and, once we’re done, we click on the `}<strong parentName="p">{`Copy Permissions as JSON`}</strong>{` button to copy the permissions to the clipboard. We can then paste the copied permissions into our code.`}</p>
<Image src={copyPermissionsButton} alt="Copy Permissions Button" mdxType="Image" />
<Alert mdxType="Alert">
<p>{`  More info on security permissions can also be found in the `}<_Link href="/docs/5.x/security/security-framework/introduction#permission">{`Security Framework - Introduction`}</_Link>{` article.`}</p>
</Alert>
<_Heading level={2} id={"teams"} nextElement={{
      "type": "paragraph"
    }}>Teams</_Heading>
<p>{`In this example, we define a new team that consists of the `}<strong parentName="p">{`Full CMS Access`}</strong>{` role that we created in the `}<a parentName="p" {...{
        "href": "#roles"
      }}>{`Roles`}</a>{` section.`}</p>
<Editor title="extensions/rolesAndTeams/src/index.ts" lang="ts" mdxType="Editor">
{`import { 
  createSecurityRolePlugin, 
  createSecurityTeamPlugin } 
from "@webiny/api-serverless-cms";

export const createExtension = () => {
    return [
        createSecurityRolePlugin({
            id: "full-cms-access",
            name: "Full CMS Access",
            description: "Full access to the CMS application",
            permissions: [{ name: "cms.*" }, { name: "content.i18n" }]
        }),
        createSecurityRolePlugin({
            id: "full-pb-access",
            name: "Full Page Builder",
            description: "Full access to the Page Builder application",
            permissions: [{ name: "pb.*" }, { name: "content.i18n" }]
        }),
        
        // Team that consists of the "Full CMS Access" and "Full Page Builder" roles.
        createSecurityTeamPlugin({
            id: "content-team",
            name: "Content Team",
            description: "Team responsible for managing content",
            roles: ["full-pb-access", "full-cms-access"]
        })
    ];
};`}
</Editor>
<p>{`With this code in place, we should be able to see the following team in the Teams module:`}</p>
<Image src={teamInAdmin} alt="Content Team" mdxType="Image" />
<Alert type="info" mdxType="Alert">
<p>{`  Note that the Teams feature is part of our enterprise offering. To learn more, please check out the `}<_Link href="/docs/5.x/enterprise/aacl/teams">{`Teams`}</_Link>{` article.   `}</p>
</Alert>
<_Heading level={2} id={"defining-roles-and-teams-for-specific-tenants"} nextElement={{
      "type": "paragraph"
    }}>Defining Roles and Teams for Specific Tenants</_Heading>
<p>{`By default, roles and teams are available for all available tenants. But what if we want to define roles and teams for specific tenants only?`}</p>
<p>{`To achieve this, we can use the `}<inlineCode parentName="p">{`tenant`}</inlineCode>{` property, which accepts an ID of the tenant for which the role or team should be available. For example, if we wanted roles and teams to be available only for the `}<inlineCode parentName="p">{`root`}</inlineCode>{` tenant, we would define the roles and teams like this:`}</p>
<Editor title="extensions/rolesAndTeams/src/index.ts" lang="diff-ts" mdxType="Editor">
{`import { 
    createSecurityRolePlugin, 
    createSecurityTeamPlugin } 
from "@webiny/api-serverless-cms";

export const createExtension = () => {
    return [
        createSecurityRolePlugin({
            id: "full-cms-access",
            name: "Full CMS Access",
            description: "Full access to the CMS application",
            permissions: [{ name: "cms.*" }, { name: "content.i18n" }],
+           tenant: "root"
        }),
        createSecurityRolePlugin({
            id: "full-pb-access",
            name: "Full Page Builder",
            description: "Full access to the Page Builder application",
            permissions: [{ name: "pb.*" }, { name: "content.i18n" }],
+           tenant: "root"
        }),

        // Team that consists of the "Full CMS Access" and "Full Page Builder" roles.
        createSecurityTeamPlugin({
            id: "content-team",
            name: "Content Team",
            description: "Team responsible for managing content",
            roles: ["full-pb-access", "full-cms-access"],
+           tenant: "root"
        })
    ];
};`}
</Editor>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;