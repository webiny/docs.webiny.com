/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import cloneContentModel from "/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/6.0.x/headless-cms/essentials/assets/clone-content-model/clone-content-model.mp4";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.9991ed.json";

import _versions from "@/data/versions.ff7084.json";

const Layout = _Layout;
const pageData = {
  "title": "Clone Content Model",
  "description": "Learn how to clone a content model in Headless CMS.",
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
const tableOfContents = [{
  "title": "Prerequisites",
  "slug": "prerequisites",
  "children": []
}, {
  "title": "Clone Content Model",
  "slug": "clone-content-model",
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
<li parentName="ul">{`how to clone a content model`}</li>
</ul>
</Alert>
<p>{`Webiny allows you to create a new content model by cloning an existing content model. All the fields, validations, and other settings are copied over from the original content model to the clone content model.`}</p>
<p>{`In this tutorial, we will learn how to clone a content model. As an example, we will create a content model with the following attributes by cloning an existing content model:`}</p>
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
          }}><strong parentName="td">{`Virtual Product`}</strong></td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": "left"
          }}>{`Group`}</td>
<td parentName="tr" {...{
            "align": "left"
          }}><strong parentName="td">{`E-Commerce`}</strong></td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": "left"
          }}>{`Description`}</td>
<td parentName="tr" {...{
            "align": "left"
          }}><strong parentName="td">{`Demo Virtual Product Content Model for E-Commerce project`}</strong></td>
</tr>
</tbody>
</table>
<Video src={cloneContentModel} controls={true} mdxType="Video" />
<_Heading level={2} id={"prerequisites"} nextElement={{
      "type": "paragraph"
    }}>Prerequisites</_Heading>
<p>{`To follow this tutorial, you need the `}<strong parentName="p">{`Product`}</strong>{` content model to clone it.
If you don’t have the `}<strong parentName="p">{`Product`}</strong>{` content model, please follow the `}<_Link href="/docs/user-guides/headless-cms/essentials/create-content-model">{`Create Content Model`}</_Link>{` tutorial to create it.`}</p>
<_Heading level={2} id={"clone-content-model"} nextElement={{
      "type": "list",
      "ordered": true,
      "start": 1,
      "spread": true
    }}>Clone Content Model</_Heading>
<ol>
<li parentName="ol">
<p parentName="li">{`From the `}<strong parentName="p">{`Side Menu`}</strong>{`, Click `}<strong parentName="p">{`Content Modeling`}</strong>{` > `}<strong parentName="p">{`Models`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Content Models`}</strong>{` screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click the `}<strong parentName="p">{`Kebab Menu Icon`}</strong>{` ( ⁝ ) on the `}<strong parentName="p">{`Product`}</strong>{` content model.`}</p>
<p parentName="li">{`✔️ Menu opens with `}<strong parentName="p">{`Clone`}</strong>{`, `}<strong parentName="p">{`Export`}</strong>{`, and `}<strong parentName="p">{`Delete`}</strong>{` options.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`Clone`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Clone Content Model`}</strong>{` screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Name`}</strong>{` textbox, type `}<strong parentName="p">{`Virtual Product`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Singular API Name`}</strong>{` textbox, type `}<strong parentName="p">{`VirtualProduct`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Plural API Name`}</strong>{` textbox, type `}<strong parentName="p">{`VirtualProducts`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Content model group`}</strong>{` drop-down, if you have the `}<strong parentName="p">{`E-Commerce`}</strong>{` group, click it, else click `}<strong parentName="p">{`Ungrouped`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Icon`}</strong>{` dropdown, click `}<strong parentName="p">{`globe`}</strong>{` icon (🌐).`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Description`}</strong>{` textbox, type `}<strong parentName="p">{`Demo Virtual Product Content Model for E-Commerce project`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`+ Clone`}</strong>{`.`}</p>
<p parentName="li">{`✔️ `}<strong parentName="p">{`Virtual Product`}</strong>{` content model is created.`}</p>
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