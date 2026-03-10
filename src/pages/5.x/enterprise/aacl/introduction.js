/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import aaclCustomAccess from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/enterprise/aacl/assets/aacl-custom-access.png";
import aaclCustomAccessUpgrade from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/enterprise/aacl/assets/aacl-custom-access-upgrade.png";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Introduction",
  "description": "Learn what are the three tiers of Webiny's security layer.",
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
  "title": "The Three Tiers of Webiny's Security Layer",
  "slug": "the-three-tiers-of-webiny-s-security-layer",
  "children": []
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




<CanIUseThis enterprise={true} since={"5.x"} mdxType="CanIUseThis" />
<WhatYouWillLearn mdxType="WhatYouWillLearn">
<ul>
<li parentName="ul">{`what are the three tiers of Webiny’s security layer`}</li>
</ul>
</WhatYouWillLearn>
<_Heading level={2} id={"the-three-tiers-of-webiny-s-security-layer"} nextElement={{
      "type": "paragraph"
    }}>The Three Tiers of Webiny&#39;s Security Layer</_Heading>
<p>{`Webiny’s security layer is divided into three tiers. The higher the tier, the more features are available.`}</p>
<p>{`All Webiny projects start with the `}<strong parentName="p">{`Open Source`}</strong>{` tier. The tier is free to use but is limited when it comes to defining fine-grained permissions, allowing only the `}<strong parentName="p">{`No Access`}</strong>{` and `}<strong parentName="p">{`Full Access`}</strong>{` to be selected when defining permissions for individual Webiny apps.`}</p>
<p>{`Trying to select `}<strong parentName="p">{`Custom Access`}</strong>{` will result in an alert message being shown, informing the user that the feature is only available with the Advanced Access Control Layer (AACL), which is available on the `}<strong parentName="p">{`Business`}</strong>{` and `}<strong parentName="p">{`Enterprise`}</strong>{` tiers.`}</p>
<Image src={aaclCustomAccessUpgrade} title={"Selecting Custom Access Level on Open Source Tier"} mdxType="Image" />
<p>{`To upgrade to `}<strong parentName="p">{`Business`}</strong>{` tier, users `}<_Link href="/docs/5.x/wcp/link-a-project">{`link their project`}</_Link>{` with `}<_Link href="/docs/5.x/wcp/overview">{`Webiny Control Panel (WCP)`}</_Link>{`, from where they can activate the Advanced Access Control Layer (AACL) for their project. By doing this, users will be able to define fine-grained permissions for individual Webiny apps.`}</p>
<Image src={aaclCustomAccess} title={"Selecting Custom Access with Advanced Access Control Layer (AACL) Enabled"} mdxType="Image" />
<p>{`Finally, for the most advanced use cases, users can upgrade to the `}<strong parentName="p">{`Enterprise`}</strong>{` tier. On top of the features available with the first two tiers, the Enterprise tier introduces `}<strong parentName="p">{`Teams`}</strong>{`, `}<strong parentName="p">{`Folder Level Permissions`}</strong>{` and `}<strong parentName="p">{`Private Files`}</strong>{`.`}</p>
<p>{`More on this in the following section.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;