/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import aaclTeams from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/enterprise/aacl/assets/aacl-teams.png";
import aaclTeamsMenu from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/enterprise/aacl/assets/aacl-teams-menu.png";
import aaclTeamsAutocomplete from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/enterprise/aacl/assets/aacl-teams-autocomplete.png";
import usersRoles from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/enterprise/aacl/assets/users-roles.png";
import usersTeamsRoles from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/enterprise/aacl/assets/users-teams-roles.png";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Teams",
  "description": "Learn about the Teams feature and how to use it.",
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
  "title": "Enabling Teams and Feature Overview",
  "slug": "enabling-teams-and-feature-overview",
  "children": []
}, {
  "title": "FAQ",
  "slug": "faq",
  "children": [{
    "title": "Can I Assign Multiple Security Roles to a User Without the Teams Enabled ?",
    "slug": "can-i-assign-multiple-security-roles-to-a-user-without-the-teams-enabled",
    "children": []
  }, {
    "title": "Can I Assign Multiple Roles to a Team?",
    "slug": "can-i-assign-multiple-roles-to-a-team",
    "children": []
  }, {
    "title": "Can I Assign Users to Multiple Teams?",
    "slug": "can-i-assign-users-to-multiple-teams",
    "children": []
  }, {
    "title": "Can I Use Teams With the Open Source or Business Tier?",
    "slug": "can-i-use-teams-with-the-open-source-or-business-tier",
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







<CanIUseThis enterprise={true} since={"5.37.0"} mdxType="CanIUseThis" />
<WhatYouWillLearn mdxType="WhatYouWillLearn">
<ul>
<li parentName="ul">{`an overview of the features the Teams feature provides and how to use it`}</li>
<li parentName="ul">{`how the enable Teams`}</li>
</ul>
</WhatYouWillLearn>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`With the Open Source and Business tiers, admin users can only be linked with one or more security roles.`}</p>
<Image src={usersRoles} title={"Roles Assigned To Users"} shadow={false} mdxType="Image" />
<p>{`This means that if you want to assign the same set of roles to multiple users, you would have to manually assign them to each user.`}</p>
<p>{`And although this approach might work for some users, it can quickly become cumbersome to manage. This is where `}<strong parentName="p">{`Teams`}</strong>{` comes in. With it, users can be assigned into a team, where each team can be linked with one or more roles.`}</p>
<Image src={usersTeamsRoles} title={"Users Assigned to Teams"} shadow={false} mdxType="Image" />
<p>{`This feature is especially useful for larger organizations, where it’s common to have multiple teams working on different projects. Also, it’s a great way to simplify the process of managing permissions for multiple users, as you can simply assign a role to a team, instead of assigning it to each individual user.`}</p>
<p>{`Additionally, the Teams feature can be used in conjunction with `}<_Link href="/docs/5.x/enterprise/aacl/folder-level-permissions">{`Folder Level Permissions (FLP)`}</_Link>{` to further enhance the security of your Webiny project. Instead of just being able to define folder level permissions for individual users, you can now define them for teams as well. Make sure to check out the FLP documentation to learn more about this feature. `}</p>
<_Heading level={2} id={"enabling-teams-and-feature-overview"} nextElement={{
      "type": "paragraph"
    }}>Enabling Teams and Feature Overview</_Heading>
<p>{`For Webiny Enterprise users, apart from `}<_Link href="/docs/5.x/wcp/link-a-project">{`linking their Webiny project`}</_Link>{` with Webiny Control Panel (WCP), there are no additional steps required to enable Teams.`}</p>
<p>{`Once linked, Teams will be automatically enabled and the module can be accessed from the main menu:`}</p>
<Image src={aaclTeamsMenu} title={"Teams Available From the Main Menu"} mdxType="Image" />
<p>{`Via the Teams module, users can create new teams that consist of one or more security roles.`}</p>
<Image src={aaclTeams} title={"Creating a New Team"} mdxType="Image" />
<p>{`Once a team is created, users can assign it to one or more users. This can be done by editing the user and selecting the team via the Team field.`}</p>
<Image src={aaclTeamsAutocomplete} title={"Assigning Admin Users To Teams"} mdxType="Image" />
<_Heading level={2} id={"faq"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>FAQ</_Heading>
<_Heading level={3} id={"can-i-assign-multiple-security-roles-to-a-user-without-the-teams-enabled"} nextElement={{
      "type": "paragraph"
    }}>Can I Assign Multiple Security Roles to a User Without the Teams Enabled ?</_Heading>
<p>{`From Webiny 5.41.0 onwards, you can assign multiple roles to a user.`}</p>
<_Heading level={3} id={"can-i-assign-multiple-roles-to-a-team"} nextElement={{
      "type": "paragraph"
    }}>Can I Assign Multiple Roles to a Team?</_Heading>
<p>{`Yes, you can assign multiple roles to a team.`}</p>
<_Heading level={3} id={"can-i-assign-users-to-multiple-teams"} nextElement={{
      "type": "paragraph"
    }}>Can I Assign Users to Multiple Teams?</_Heading>
<p>{`From Webiny 5.41.0 onwards, you can assign users to multiple teams.`}</p>
<_Heading level={3} id={"can-i-use-teams-with-the-open-source-or-business-tier"} nextElement={{
      "type": "paragraph"
    }}>Can I Use Teams With the Open Source or Business Tier?</_Heading>
<p>{`No. Teams are only available with the Enterprise tier.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;