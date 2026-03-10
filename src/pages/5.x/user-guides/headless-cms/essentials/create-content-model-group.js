/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import createContentModelGroup from "/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/5.x/headless-cms/essentials/assets/create-content-model-group/create-content-model-group.mp4";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.79c9f1.json";

import _versions from "@/data/versions.ff7084.json";

const Layout = _Layout;
const pageData = {
  "title": "Create Content Model Group",
  "description": "Learn how to create a content model group in Headless CMS.",
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
<li parentName="ul">{`what is content model group and it’s uses`}</li>
<li parentName="ul">{`how to create a content model group`}</li>
</ul>
</Alert>
<p>{`Content model groups help in organizing content models. With groups, you can organize your models efficiently.
For example, all the content models related to E-Commerce can be grouped together,
and they will be shown in the side navigation bar under the E-Commerce heading. There are two main uses of
the content model group.`}</p>
<ul>
<li parentName="ul">{`Organization of content models`}</li>
<li parentName="ul">{`Restrict the content models access scope based on the content model group`}</li>
</ul>
<p>{`In this tutorial, we will learn how to create a content model group.
As an example, we will create a E-Commerce content group with the following values:`}</p>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": "left"
          }}>{`Attribute`}</th>
<th parentName="tr" {...{
            "align": "left"
          }}>{`Value`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": "left"
          }}>{`Name`}</td>
<td parentName="tr" {...{
            "align": "left"
          }}>{`E-Commerce`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": "left"
          }}>{`Group icon`}</td>
<td parentName="tr" {...{
            "align": "left"
          }}>{`🛒`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": "left"
          }}>{`Description`}</td>
<td parentName="tr" {...{
            "align": "left"
          }}>{`E-Commerce Model Group`}</td>
</tr>
</tbody>
</table>
<Video src={createContentModelGroup} controls={true} mdxType="Video" />
<ol>
<li parentName="ol">
<p parentName="li">{`From the `}<strong parentName="p">{`Side Menu`}</strong>{`, Click `}<strong parentName="p">{`Headless CMS`}</strong>{` > `}<strong parentName="p">{`Groups`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`+ NEW GROUP`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The New content model group section opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Name`}</strong>{` textbox, type `}<strong parentName="p">{`E-Commerce`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Group icon`}</strong>{`, select `}<strong parentName="p">{`shopping-cart`}</strong>{` icon (🛒).`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Description`}</strong>{` textbox, type `}<strong parentName="p">{`E-Commerce Model Group`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`SAVE CONTENT MODEL GROUP`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Congratulations! You have created your first content model group.`}</p>
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