/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import referenceField from "/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/5.x/headless-cms/essentials/assets/reference-field/reference-field.mp4";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.79c9f1.json";

import _versions from "@/data/versions.ff7084.json";

const Layout = _Layout;
const pageData = {
  "title": "Reference Field",
  "description": "Learn how to use reference field in Headless CMS.",
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
  "title": "Step 1: Create 'Category' Content Model",
  "slug": "step-1-create-category-content-model",
  "children": []
}, {
  "title": "Step 2: Create 'Category' Content Entries",
  "slug": "step-2-create-category-content-entries",
  "children": []
}, {
  "title": "Step 3: Update 'Product' Content Model",
  "slug": "step-3-update-product-content-model",
  "children": []
}, {
  "title": "Step 4: Create 'Product' Content Entry With a Reference to 'Category'",
  "slug": "step-4-create-product-content-entry-with-a-reference-to-category",
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
<li parentName="ul">{`what is a reference field`}</li>
<li parentName="ul">{`how to use reference field`}</li>
</ul>
</Alert>
<p>{`The reference field enables users to link one content model to another. For instance, consider two content models, `}<strong parentName="p">{`Product`}</strong>{` and `}<strong parentName="p">{`Category`}</strong>{`.
A product may belong to multiple categories. In such a scenario, we create a reference field in the `}<strong parentName="p">{`Product`}</strong>{` content model that refers to the `}<strong parentName="p">{`Category`}</strong>{` model.`}</p>
<p>{`In this tutorial, we will learn how to use reference field.
As an example, we will use the `}<strong parentName="p">{`Product`}</strong>{` content model that we created in the `}<_Link href="/docs/5.x/user-guides/headless-cms/essentials/create-content-model">{`Create Content Model`}</_Link>{` tutorial.
We will create another content model `}<strong parentName="p">{`Category`}</strong>{`, and give the reference of `}<strong parentName="p">{`Category`}</strong>{` in `}<strong parentName="p">{`Product`}</strong>{`.
We will do this in four steps:`}</p>
<ul>
<li parentName="ul">{`Step 1: Create a `}<strong parentName="li">{`Category`}</strong>{` content model.`}</li>
<li parentName="ul">{`Step 2: Add content entries to the `}<strong parentName="li">{`Category`}</strong>{` content model.`}</li>
<li parentName="ul">{`Step 3: Update the `}<strong parentName="li">{`Product`}</strong>{` content model and add a category reference field to it.`}</li>
<li parentName="ul">{`Step 4: Create a content entry in the `}<strong parentName="li">{`Product`}</strong>{` content model with reference to the `}<strong parentName="li">{`Category`}</strong>{` content model.`}</li>
</ul>
<Video src={referenceField} controls={true} mdxType="Video" />
<_Heading level={2} id={"step-1-create-category-content-model"} nextElement={{
      "type": "paragraph"
    }}>Step 1: Create &#39;Category&#39; Content Model</_Heading>
<p>{`We will create a category content model with the following attributes and fields.`}</p>
<p>{`If you are not familiar with how to create a content model, please follow the `}<_Link href="/docs/5.x/user-guides/headless-cms/essentials/create-content-model">{`Create Content Model`}</_Link>{` tutorial.`}</p>
<ol>
<li parentName="ol">
<p parentName="li">{`Create a content model with the following attributes:`}</p>
<table parentName="li">
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
                "align": "left"
              }}>{`Field`}</th>
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
              }}><strong parentName="td">{`Category`}</strong></td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
                "align": "left"
              }}>{`Group`}</td>
<td parentName="tr" {...{
                "align": "left"
              }}>{`If you have created a group, select that group, else select `}<strong parentName="td">{`Ungrouped`}</strong></td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
                "align": "left"
              }}>{`Description`}</td>
<td parentName="tr" {...{
                "align": "left"
              }}><strong parentName="td">{`Demo Category content model`}</strong></td>
</tr>
</tbody>
</table>
</li>
<li parentName="ol">
<p parentName="li">{`Add the following field to the `}<strong parentName="p">{`Category`}</strong>{` content model:`}</p>
<table parentName="li">
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
                "align": "left"
              }}>{`Field`}</th>
<th parentName="tr" {...{
                "align": "left"
              }}>{`Field Type`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
                "align": "left"
              }}>{`Name`}</td>
<td parentName="tr" {...{
                "align": "left"
              }}>{`Text`}</td>
</tr>
</tbody>
</table>
</li>
</ol>
<_Heading level={2} id={"step-2-create-category-content-entries"} nextElement={{
      "type": "list",
      "ordered": true,
      "start": 1,
      "spread": true
    }}>Step 2: Create &#39;Category&#39; Content Entries</_Heading>
<ol>
<li parentName="ol">
<p parentName="li">{`From the `}<strong parentName="p">{`Side Menu`}</strong>{`, Click `}<strong parentName="p">{`Headless CMS`}</strong>{` > `}<strong parentName="p">{`Categories`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`+ NEW ENTRY`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The New Content Entry screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Name`}</strong>{` textbox, type `}<strong parentName="p">{`Clothes`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`SAVE & PUBLISH`}</strong>{`.`}</p>
</li>
</ol>
<p><strong parentName="p">{`Optional`}</strong>{`: Similarly, you can create another `}<strong parentName="p">{`Category`}</strong>{` content entry with name `}<strong parentName="p">{`Accessories`}</strong>{`.`}</p>
<_Heading level={2} id={"step-3-update-product-content-model"} nextElement={{
      "type": "list",
      "ordered": true,
      "start": 1,
      "spread": true
    }}>Step 3: Update &#39;Product&#39; Content Model</_Heading>
<ol>
<li parentName="ol">
<p parentName="li">{`From the `}<strong parentName="p">{`Side Menu`}</strong>{`, Click `}<strong parentName="p">{`Headless CMS`}</strong>{` > `}<strong parentName="p">{`Models`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The Content Models screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Hover on the `}<strong parentName="p">{`Product`}</strong>{` content model.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click the `}<strong parentName="p">{`EDIT CONTENT MODEL`}</strong>{` icon (✏️).`}</p>
<p parentName="li">{`✔️ Screen to configure the content model’s fields opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Drag and drop the `}<strong parentName="p">{`REFERENCE`}</strong>{` field in the `}<strong parentName="p">{`EDIT`}</strong>{` tab.`}</p>
<p parentName="li">{`✔️ `}<strong parentName="p">{`Field Settings - Reference`}</strong>{` screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Label`}</strong>{` textbox, type `}<strong parentName="p">{`Category`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Content Models`}</strong>{` dropdown, click `}<strong parentName="p">{`Category`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click the `}<strong parentName="p">{`Use as a list of references`}</strong>{` button.`}</p>
<p parentName="li"><strong parentName="p">{`Note`}</strong>{`: Since a product can belong to multiple categories, enabling `}<strong parentName="p">{`Use as a list of references`}</strong>{` will allow us to associate multiple categories to a product.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`SAVE FIELD`}</strong>{`.`}</p>
<p parentName="li">{`✔️ Screen to configure the content model’s fields opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`SAVE`}</strong>{`.`}</p>
</li>
</ol>
<_Heading level={2} id={"step-4-create-product-content-entry-with-a-reference-to-category"} nextElement={{
      "type": "list",
      "ordered": true,
      "start": 1,
      "spread": true
    }}>Step 4: Create &#39;Product&#39; Content Entry With a Reference to &#39;Category&#39;</_Heading>
<ol>
<li parentName="ol">
<p parentName="li">{`From the `}<strong parentName="p">{`Side Menu`}</strong>{`, Click `}<strong parentName="p">{`Headless CMS`}</strong>{` > `}<strong parentName="p">{`Products`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`+ NEW ENTRY`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The New Content Entry screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Name`}</strong>{` textbox, type `}<strong parentName="p">{`Men’s Tiro ‘21 Pants`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Description`}</strong>{` textbox, type `}<strong parentName="p">{`Men’s tapered track pants for versatile wear`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Price`}</strong>{` textbox, type `}<strong parentName="p">{`28`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Category`}</strong>{` dropdown, click `}<strong parentName="p">{`Clothes`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`SAVE & PUBLISH`}</strong>{`.`}</p>
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