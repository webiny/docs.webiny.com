/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { CanIUseThis } from "@/components/CanIUseThis";
import { Gallery, Image } from "@/components/Image";
import { WhatYouWillLearn } from "@/components/WhatYouWillLearn";
import createApp1 from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/enterprise/assets/okta-oidc-app-integration/create-app-1.png";
import createApp2 from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/enterprise/assets/okta-oidc-app-integration/create-app-2.png";
import createApp3 from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/enterprise/assets/okta-oidc-app-integration/create-app-3.png";
import mapGroups1 from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/enterprise/assets/okta-oidc-app-integration/map-groups-1.png";
import mapGroups2 from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/enterprise/assets/okta-oidc-app-integration/map-groups-2.png";
import mapGroups3 from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/enterprise/assets/okta-oidc-app-integration/map-groups-3.png";
import mapGroups4 from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/enterprise/assets/okta-oidc-app-integration/map-groups-4.png";
import mapGroups5 from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/enterprise/assets/okta-oidc-app-integration/map-groups-5.png";
import mapGroups6 from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/enterprise/assets/okta-oidc-app-integration/map-groups-6.png";
import mapGroups7 from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/enterprise/assets/okta-oidc-app-integration/map-groups-7.png";
import mapGroups8 from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/enterprise/assets/okta-oidc-app-integration/map-groups-8.png";
import mapClaim1 from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/enterprise/assets/okta-oidc-app-integration/map-claim-1.png";
import mapClaim2 from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/enterprise/assets/okta-oidc-app-integration/map-claim-2.png";
import mapClaim3 from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/enterprise/assets/okta-oidc-app-integration/map-claim-3.png";
import mapClaim4 from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/enterprise/assets/okta-oidc-app-integration/map-claim-4.png";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Okta OIDC App Integration",
  "description": "Learn how to configure Okta OIDC app integration.",
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
  "title": "OIDC App Integration",
  "slug": "oidc-app-integration",
  "children": []
}, {
  "title": "Map Okta Groups to Webiny Roles",
  "slug": "map-okta-groups-to-webiny-roles",
  "children": [{
    "title": "Add a Custom App Attribute",
    "slug": "add-a-custom-app-attribute",
    "children": []
  }, {
    "title": "Assign Okta Groups to the OIDC App",
    "slug": "assign-okta-groups-to-the-oidc-app",
    "children": []
  }, {
    "title": "Map Attribute to Token Claim",
    "slug": "map-attribute-to-token-claim",
    "children": []
  }, {
    "title": "Test Your Configuration",
    "slug": "test-your-configuration",
    "children": []
  }, {
    "title": "Final Steps",
    "slug": "final-steps",
    "children": []
  }]
}];

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




















<CanIUseThis enterprise={true} mdxType="CanIUseThis" />
<WhatYouWillLearn mdxType="WhatYouWillLearn">
<ul>
<li parentName="ul">{`how to configure OIDC app integration in Okta dashboard`}</li>
<li parentName="ul">{`how to map Okta groups to Webiny Roles`}</li>
</ul>
</WhatYouWillLearn>
<_Heading level={2} id={"oidc-app-integration"} nextElement={{
      "type": "paragraph"
    }}>OIDC App Integration</_Heading>
<p>{`To create an OIDC app integration, navigate to `}<strong parentName="p">{`Applications -> Applications`}</strong>{`, and click the `}<strong parentName="p">{`Create App Integration`}</strong>{` button:`}</p>
<Image src={createApp1} mdxType="Image" />
<p>{`For `}<strong parentName="p">{`Sign-in method`}</strong>{`, select `}<strong parentName="p">{`OIDC - OpenID Connect`}</strong>{`. For `}<strong parentName="p">{`Application type`}</strong>{`, select `}<strong parentName="p">{`Single-Page Application`}</strong>{`, since we’ll communicate with this OIDC app from Webiny Admin app, which is a regular React single-page app. Then click `}<strong parentName="p">{`Next`}</strong>{`.`}</p>
<Image src={createApp2} mdxType="Image" />
<p>{`The following image shows the general configuration of your OIDC app, with the most important parameters highlighted in red. Use this as a starting point, to get your integration working end to end. Then you can go back and tweak parameters to your liking.`}</p>
<Image src={createApp3} mdxType="Image" />
<_Heading level={2} id={"map-okta-groups-to-webiny-roles"} nextElement={{
      "type": "paragraph"
    }}>Map Okta Groups to Webiny Roles</_Heading>
<p>{`Once you have the app integration in place, you need to set up a connection between Okta users, and Webiny roles. In this example, we’ll be assigning users to Okta groups, and by doing that we want those users to automatically have certain application rights within Webiny.`}</p>
<p>{`To establish this connection, we need to do several things:`}</p>
<ul>
<li parentName="ul">
<p parentName="li">{`add a custom attribute to the OIDC app`}</p>
</li>
<li parentName="ul">
<p parentName="li">{`assign Okta group(s) to the OIDC app`}</p>
</li>
<li parentName="ul">
<p parentName="li">{`map the custom attribute to the `}<inlineCode parentName="p">{`idToken`}</inlineCode>{` claim, in the Okta authorization server`}</p>
</li>
<li parentName="ul">
<p parentName="li">{`map the `}<inlineCode parentName="p">{`idToken`}</inlineCode>{` claim to Webiny identity in Webiny project`}</p>
</li>
</ul>
<_Heading level={3} id={"add-a-custom-app-attribute"} nextElement={{
      "type": "paragraph"
    }}>Add a Custom App Attribute</_Heading>
<p>{`Navigate to `}<strong parentName="p">{`Directory -> Profile Editor`}</strong>{`, find your OIDC app profile, and click it (click the profile name, not the “Mappings”, it’s a different thing).`}</p>
<Image src={mapGroups1} mdxType="Image" />
<p>{`In the `}<strong parentName="p">{`Profile Editor`}</strong>{` screen, click the `}<strong parentName="p">{`Add Attribute`}</strong>{` button.`}</p>
<Image src={mapGroups2} mdxType="Image" />
<p>{`The important configuration parameters are highlighted in red. `}<strong parentName="p">{`Variable name`}</strong>{` will be used to map this attribute value to the `}<inlineCode parentName="p">{`idToken`}</inlineCode>{` claim. For `}<strong parentName="p">{`Attribute members`}</strong>{`, it’s recommended to use enumerated list of values, to reduce the possibility of invalid mappings. Lastly, the `}<strong parentName="p">{`Attribute type`}</strong>{` must be set to `}<strong parentName="p">{`Group`}</strong>{`, to have this attribute be mapped when assigning Okta groups to the OIDC app.`}</p>
<Image src={mapGroups3} mdxType="Image" />
<p>{`The value of roles are actually role `}<em parentName="p">{`slugs`}</em>{`, taken from the Webiny Admin app. To manage Webiny Roles, navigate to `}<strong parentName="p">{`Settings -> Access Management -> Roles`}</strong>{` in your Webiny Admin app.`}</p>
<Image src={mapGroups8} mdxType="Image" />
<_Heading level={3} id={"assign-okta-groups-to-the-oidc-app"} nextElement={{
      "type": "paragraph"
    }}>Assign Okta Groups to the OIDC App</_Heading>
<p>{`Now you need to assign your Okta groups to the OIDC app. Navigate to `}<strong parentName="p">{`Directory -> Groups`}</strong>{`. Here you’ll find a list of all Okta groups. If you haven’t already, create the desired user groups. Each user group will map to one of the Webiny roles in Webiny.`}</p>
<p>{`Find a group you want to assign to your app, and edit it (click the group name).`}</p>
<Image src={mapGroups4} mdxType="Image" />
<p>{`Navigate to the `}<strong parentName="p">{`Applications`}</strong>{` tab, and click `}<strong parentName="p">{`Assign Applications`}</strong>{`.`}</p>
<Image src={mapGroups5} mdxType="Image" />
<p>{`In the dialog, a list of applications is shown. Select the application you want to assign to the group by clicking the `}<strong parentName="p">{`Assign`}</strong>{` button.`}</p>
<Image src={mapGroups6} mdxType="Image" />
<p>{`Okta will ask you to map the `}<strong parentName="p">{`Webiny Role`}</strong>{` custom attribute we defined earlier. Select one of the predefined Webiny roles. All the users assigned to this Okta group, will automatically assume that particular Webiny role when accessing Webiny.`}</p>
<Image src={mapGroups7} mdxType="Image" />
<_Heading level={3} id={"map-attribute-to-token-claim"} nextElement={{
      "type": "paragraph"
    }}>Map Attribute to Token Claim</_Heading>
<p>{`When the user logs into Okta, and navigates to Webiny Admin app, Webiny will use the user’s `}<inlineCode parentName="p">{`idToken`}</inlineCode>{` to communicate with the Webiny API. You need to pass the information about user’s Okta group to Webiny, using a custom claim in the `}<inlineCode parentName="p">{`idToken`}</inlineCode>{`.`}</p>
<p>{`In the Okta dashboard, Navigate to `}<strong parentName="p">{`Security -> API`}</strong>{`, and access your desired authorization server.`}</p>
<Image src={mapClaim1} mdxType="Image" />
<p>{`Switch to the `}<strong parentName="p">{`Claims`}</strong>{` tab, and click `}<strong parentName="p">{`Add Claim`}</strong>{`.`}</p>
<Image src={mapClaim2} mdxType="Image" />
<p>{`Make sure your claim is included in `}<strong parentName="p">{`ID Token`}</strong>{`. The `}<inlineCode parentName="p">{`appuser.webiny_role`}</inlineCode>{` expression means that the value for the claim will come from the current user, using the `}<inlineCode parentName="p">{`webiny_role`}</inlineCode>{` attribute value, which the user inherits from the Okta group he is assigned to.`}</p>
<Image src={mapClaim3} mdxType="Image" />
<_Heading level={3} id={"test-your-configuration"} nextElement={{
      "type": "paragraph"
    }}>Test Your Configuration</_Heading>
<p>{`To test whether the configuration is correct, you can use the `}<strong parentName="p">{`Token Preview`}</strong>{` tab of the authorization server. Select your OIDC app, a grant type of `}<strong parentName="p">{`Authorization Code`}</strong>{`, and a user you want to test with. You also need to select at least one scope to generate the token preview. The scopes used by the actual app are `}<inlineCode parentName="p">{`openid`}</inlineCode>{`, `}<inlineCode parentName="p">{`profile`}</inlineCode>{`, and `}<inlineCode parentName="p">{`email`}</inlineCode>{`.`}</p>
<p>{`If everything is configured correctly, your `}<inlineCode parentName="p">{`idToken`}</inlineCode>{` will contain a `}<inlineCode parentName="p">{`webiny_role`}</inlineCode>{` claim, and its value will correspond to the `}<strong parentName="p">{`Webiny Role`}</strong>{` custom attribute, which was assigned to the Okta group earlier.`}</p>
<Image src={mapClaim4} mdxType="Image" />
<_Heading level={3} id={"final-steps"} nextElement={{
      "type": "paragraph"
    }}>Final Steps</_Heading>
<p>{`At this point, the basic setup of your Okta OIDC app can be considered done. However, for all of this to work, you need to map this token claim to the identity object in your `}<_Link href="/docs/5.x/enterprise/okta-integration#3-configure-okta-in-the-graph-ql-api">{`main Okta security configuration`}</_Link>{`.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;