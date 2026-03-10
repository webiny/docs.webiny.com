/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import flp from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/enterprise/aacl/assets/flp.png";
import flpManagePermissionsDialog from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/enterprise/aacl/assets/flp-manage-permissions-dialog.png";
import flpManagePermissionsOption from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/enterprise/aacl/assets/flp-manage-permssions-option.png";
import flpIconOnFolder from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/enterprise/aacl/assets/flp-icon-on-folder.png";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Folder Level Permissions",
  "description": "Learn about the Folder Level Permissions feature and how to use it.",
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
}, {
  "title": "Enabling Folder Level Permissions and Feature Overview",
  "slug": "enabling-folder-level-permissions-and-feature-overview",
  "children": []
}, {
  "title": "FAQ",
  "slug": "faq",
  "children": [{
    "title": "When I Enable Folder Level Permissions, Will All My Existing Users Be Able to Use It?",
    "slug": "when-i-enable-folder-level-permissions-will-all-my-existing-users-be-able-to-use-it",
    "children": []
  }, {
    "title": "In Terms of Access for Other Users, Will Anything Change Once I Enable Folder Level Permissions?",
    "slug": "in-terms-of-access-for-other-users-will-anything-change-once-i-enable-folder-level-permissions",
    "children": []
  }, {
    "title": "Can I Use Folder Level Permissions With the Teams Feature?",
    "slug": "can-i-use-folder-level-permissions-with-the-teams-feature",
    "children": []
  }, {
    "title": "Can I Assign Permissions to the Root Folder?",
    "slug": "can-i-assign-permissions-to-the-root-folder",
    "children": []
  }, {
    "title": "How Does Folder Level Permissions Feature Work With Existing Security Layer?",
    "slug": "how-does-folder-level-permissions-feature-work-with-existing-security-layer",
    "children": []
  }, {
    "title": "Can I Use Folder Level Permissions With API Tokens?",
    "slug": "can-i-use-folder-level-permissions-with-api-tokens",
    "children": []
  }]
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
const CanIUseThis = makeShortcode("CanIUseThis");
const WhatYouWillLearn = makeShortcode("WhatYouWillLearn");
const Image = makeShortcode("Image");
const Alert = makeShortcode("Alert");
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






<CanIUseThis enterprise={true} since={"5.38.0"} mdxType="CanIUseThis" />
<WhatYouWillLearn mdxType="WhatYouWillLearn">
<ul>
<li parentName="ul">{`an overview of the features the Folder Level Permissions feature provides and how to use it`}</li>
<li parentName="ul">{`how the enable Folder Level Permissions`}</li>
</ul>
</WhatYouWillLearn>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`With the 5.38.0 release, we’ve expanded Webiny’s Advanced Access Control Layer (AACL), by introducing a brand-new feature called `}<strong parentName="p">{`Folder Level Permissions`}</strong>{`.`}</p>
<Image src={flp} alt={"Folder Level Permissions"} shadow={false} mdxType="Image" />
<p>{`With this feature, users can define access permissions on a folder level. More specifically, users that are designated as `}<strong parentName="p">{`folder owners`}</strong>{` can now define which users (and also teams with the `}<_Link href="/docs/5.x/enterprise/aacl/teams">{`Teams`}</_Link>{` feature enabled) can access which folders, and what actions they can perform on those folders:`}</p>
<ul>
<li parentName="ul"><strong parentName="li">{`Viewer`}</strong>{` - users can view content, but not modify it`}</li>
<li parentName="ul"><strong parentName="li">{`Editor`}</strong>{` - users can view and modify content`}</li>
<li parentName="ul"><strong parentName="li">{`Owner`}</strong>{` - users can edit and manage content permissions`}</li>
</ul>
<p>{`Folder Level Permissions can be used across the three main Webiny applications: `}<strong parentName="p">{`Headless CMS`}</strong>{` (content entries), `}<strong parentName="p">{`File Manager`}</strong>{` (files), and `}<strong parentName="p">{`Page Builder`}</strong>{` (pages).`}</p>
<_Heading level={2} id={"enabling-folder-level-permissions-and-feature-overview"} nextElement={{
      "type": "paragraph"
    }}>Enabling Folder Level Permissions and Feature Overview</_Heading>
<p>{`For Webiny Enterprise users, apart from `}<_Link href="/docs/5.x/wcp/link-a-project">{`linking their Webiny project`}</_Link>{` with Webiny Control Panel (WCP), there are no additional steps required to enable Folder Level Permissions.`}</p>
<p>{`Once linked, Folder Level Permissions will be automatically enabled and full access users can start using it all three applications: `}<strong parentName="p">{`Headless CMS`}</strong>{`, `}<strong parentName="p">{`File Manager`}</strong>{`, and `}<strong parentName="p">{`Page Builder`}</strong>{`.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`Once enabled, note that only users that have the `}<strong parentName="p">{`Full Access`}</strong>{` security role assigned can use the Folder Level Permissions feature. They are the ones that can then assign new owners to folders that can then manage permissions for other users.`}</p>
</Alert>
<p>{`For example, if we were to open the Page Builder app, right-clicking on a folder in the tree on the left will open a context menu, now with the `}<strong parentName="p">{`Manage Permissions`}</strong>{` option included:`}</p>
<Image src={flpManagePermissionsOption} alt={"Manage Permissions Option"} mdxType="Image" />
<p>{`Clicking on the `}<strong parentName="p">{`Manage Permissions`}</strong>{` option will open a dialog where we can assign users and teams to the folder, and also define their permissions:`}</p>
<Image src={flpManagePermissionsDialog} alt={"Manage Permissions Dialog"} mdxType="Image" />
<p>{`Once permissions are assigned, the icon of the folder changes, indicating that the folder has permissions assigned:`}</p>
<Image src={flpIconOnFolder} alt={"Folder Level Permissions Assigned"} mdxType="Image" />
<_Heading level={2} id={"faq"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>FAQ</_Heading>
<_Heading level={3} id={"when-i-enable-folder-level-permissions-will-all-my-existing-users-be-able-to-use-it"} nextElement={{
      "type": "paragraph"
    }}>When I Enable Folder Level Permissions, Will All My Existing Users Be Able to Use It?</_Heading>
<p>{`No. Only users that have the `}<strong parentName="p">{`Full Access`}</strong>{` security role assigned can use the Folder Level Permissions feature.`}</p>
<_Heading level={3} id={"in-terms-of-access-for-other-users-will-anything-change-once-i-enable-folder-level-permissions"} nextElement={{
      "type": "paragraph"
    }}>In Terms of Access for Other Users, Will Anything Change Once I Enable Folder Level Permissions?</_Heading>
<p>{`No. The only thing that will change is that users that have the `}<strong parentName="p">{`Full Access`}</strong>{` security role assigned will be able to use the Folder Level Permissions feature.`}</p>
<p>{`But in terms of what users can access, nothing will change. For example, if a user has access to a specific folder, they will still have access to it after enabling Folder Level Permissions. Only by using the Folder Level Permissions feature and setting permissions on a folder level, can you change what users can access.`}</p>
<_Heading level={3} id={"can-i-use-folder-level-permissions-with-the-teams-feature"} nextElement={{
      "type": "paragraph"
    }}>Can I Use Folder Level Permissions With the Teams Feature?</_Heading>
<p>{`Yes. You can assign teams to folders, and then define their permissions.`}</p>
<_Heading level={3} id={"can-i-assign-permissions-to-the-root-folder"} nextElement={{
      "type": "paragraph"
    }}>Can I Assign Permissions to the Root Folder?</_Heading>
<p>{`No. The root folder is always accessible to all users.`}</p>
<p>{`A workaround for this is to create a new folder, and then move all the content from the root folder to the new folder. Then, you can assign permissions to the new folder.`}</p>
<_Heading level={3} id={"how-does-folder-level-permissions-feature-work-with-existing-security-layer"} nextElement={{
      "type": "paragraph"
    }}>How Does Folder Level Permissions Feature Work With Existing Security Layer?</_Heading>
<p>{`Folder Level Permissions feature is an extension of the existing `}<_Link href="/docs/5.x/enterprise/aacl/introduction#the-three-tiers-of-webiny-s-security-layer">{`security layer`}</_Link>{`. It does not replace it.`}</p>
<p>{`This means that existing security roles and security teams are still the first thing that is checked when a user tries to access a resource. For example, if user’s security role doesn’t grant access to Page Builder, then the user will not be able to access Page Builder, even if they have permissions assigned to a folder in Page Builder.`}</p>
<_Heading level={3} id={"can-i-use-folder-level-permissions-with-api-tokens"} nextElement={{
      "type": "paragraph"
    }}>Can I Use Folder Level Permissions With API Tokens?</_Heading>
<p>{`At the moment, the answer is no. API tokens are not subject to folder level permissions. They will always have access to all folders.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;