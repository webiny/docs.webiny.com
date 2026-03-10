/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import modelSettings from "/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/6.0.x/headless-cms/essentials/assets/manage-content-model-settings/manage-content-model-settings.mp4";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.9991ed.json";

import _versions from "@/data/versions.ff7084.json";

const Layout = _Layout;
const pageData = {
  "title": "Manage Content Model Settings",
  "description": "Learn how to manage content model settings in Headless CMS.",
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
<li parentName="ul">{`how to manage content model settings`}</li>
</ul>
</Alert>
<p>{`In this tutorial, we will learn how to manage a content model general settings.
As an example, we will update the description of `}<strong parentName="p">{`Product`}</strong>{` content model that we created in the `}<_Link href="/docs/user-guides/headless-cms/essentials/create-content-model">{`Create Content Model`}</_Link>{` tutorial.`}</p>
<Video src={modelSettings} controls={true} mdxType="Video" />
<ol>
<li parentName="ol">
<p parentName="li">{`From the `}<strong parentName="p">{`Side Menu`}</strong>{`, Click `}<strong parentName="p">{`Content Modeling`}</strong>{` > `}<strong parentName="p">{`Models`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Content Models`}</strong>{` screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Hover over the `}<strong parentName="p">{`Product`}</strong>{` content model.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click ✏️ `}<strong parentName="p">{`Edit`}</strong>{`.`}</p>
<p parentName="li">{`✔️ Screen to configure the `}<strong parentName="p">{`Product`}</strong>{` content model’s fields opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click the `}<strong parentName="p">{`Settings`}</strong>{` icon (⚙️).`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Content model settings`}</strong>{` screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`General settings`}</strong>{` section, in the `}<strong parentName="p">{`Content model description`}</strong>{` textbox, update the text:
from `}<strong parentName="p">{`Demo Product Content Model`}</strong>{`
to `}<strong parentName="p">{`Demo Product Content Model for E-Commerce project`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Content model group`}</strong>{` drop-down, click `}<strong parentName="p">{`E-Commerce`}</strong>{`.`}</p>
<p parentName="li"><strong parentName="p">{`Note`}</strong>{`: Similarly, you can update the `}<strong parentName="p">{`Content model name`}</strong>{`, `}<strong parentName="p">{`Content model group`}</strong>{`, `}<strong parentName="p">{`Icon`}</strong>{`, and `}<strong parentName="p">{`Tags`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`Save`}</strong>{`.`}</p>
<p parentName="li">{`✔️ Screen to configure the `}<strong parentName="p">{`Product`}</strong>{` content model’s fields opens with a notification “Content model settings updated successfully.”`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`Save`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The message “Your content model was saved successfully!” displays.`}</p>
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