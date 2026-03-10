/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/5.x/headless-cms/essentials/assets/create-content-model/field-validators.png'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import createContent from "/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/5.x/headless-cms/essentials/assets/create-content-model/create-content-model.mp4";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.79c9f1.json";

import _versions from "@/data/versions.ff7084.json";

const Layout = _Layout;
const pageData = {
  "title": "Create Content Model",
  "description": "Learn how to create a content model in Headless CMS.",
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
  "title": "Step 1: Create Content Model",
  "slug": "step-1-create-content-model",
  "children": []
}, {
  "title": "Step 2: Define Fields",
  "slug": "step-2-define-fields",
  "children": []
}, {
  "title": "Additional Information",
  "slug": "additional-information",
  "children": [{
    "title": "Field Validation",
    "slug": "field-validation",
    "children": []
  }]
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
const Video = makeShortcode("Video");
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





<Alert type="success" title="WHAT YOU'LL LEARN" mdxType="Alert">
<ul>
<li parentName="ul">{`how to create a content model`}</li>
<li parentName="ul">{`how to define content model’s fields`}</li>
</ul>
</Alert>
<p>{`In this tutorial, we will learn how to create a `}<_Link href="/docs/5.x/user-guides/headless-cms/essentials/glossary#content-model">{`content model`}</_Link>{`.
As an example, we will create a Product content model with the following fields:`}</p>
<table>
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
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": "left"
          }}>{`Description`}</td>
<td parentName="tr" {...{
            "align": "left"
          }}>{`Long text`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": "left"
          }}>{`Price`}</td>
<td parentName="tr" {...{
            "align": "left"
          }}>{`Number`}</td>
</tr>
</tbody>
</table>
<p>{`Content model creation is a two-step process: in step 1, we will create the model, and in step 2,
we will define model `}<_Link href="/docs/5.x/user-guides/headless-cms/essentials/glossary#field-field-type">{`fields`}</_Link>{`.`}</p>
<Video src={createContent} controls={true} mdxType="Video" />
<_Heading level={2} id={"step-1-create-content-model"} nextElement={{
      "type": "list",
      "ordered": true,
      "start": 1,
      "spread": true
    }}>Step 1: Create Content Model</_Heading>
<ol>
<li parentName="ol">
<p parentName="li">{`From the `}<strong parentName="p">{`Side Menu`}</strong>{`, Click `}<strong parentName="p">{`Headless CMS`}</strong>{` > `}<strong parentName="p">{`Models`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`+ NEW MODEL`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The New Content Model screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Name`}</strong>{` textbox, type `}<strong parentName="p">{`Product`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Content model group`}</strong>{` drop-down, if you have already created a group, select that group; else select `}<strong parentName="p">{`Ungrouped`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Description`}</strong>{` textbox, type `}<strong parentName="p">{`Demo Product Content Model`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`+ CREATE MODEL`}</strong>{`.`}</p>
<p parentName="li">{`✔️ Screen to configure the content model’s fields opens.`}</p>
</li>
</ol>
<_Heading level={2} id={"step-2-define-fields"} nextElement={{
      "type": "list",
      "ordered": true,
      "start": 1,
      "spread": true
    }}>Step 2: Define Fields</_Heading>
<ol>
<li parentName="ol">
<p parentName="li">{`Drag and drop the `}<strong parentName="p">{`TEXT`}</strong>{` field in the `}<strong parentName="p">{`EDIT`}</strong>{` tab.`}</p>
<p parentName="li">{`✔️ `}<strong parentName="p">{`Field Settings - Text`}</strong>{` screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Label`}</strong>{` textbox, type `}<strong parentName="p">{`Name`}</strong>{` and click `}<strong parentName="p">{`SAVE FIELD`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Drag and drop the `}<strong parentName="p">{`LONG TEXT`}</strong>{` field in the `}<strong parentName="p">{`EDIT`}</strong>{` tab.`}</p>
<p parentName="li">{`✔️ `}<strong parentName="p">{`Field Settings - Long Text`}</strong>{` screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Label`}</strong>{` textbox, type `}<strong parentName="p">{`Description`}</strong>{` and click `}<strong parentName="p">{`SAVE FIELD`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Drag and drop the `}<strong parentName="p">{`Number`}</strong>{` field in the `}<strong parentName="p">{`EDIT`}</strong>{` tab.`}</p>
<p parentName="li">{`✔️ `}<strong parentName="p">{`Field Settings - Number`}</strong>{` screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Label`}</strong>{` textbox, type `}<strong parentName="p">{`Price`}</strong>{` and click `}<strong parentName="p">{`SAVE FIELD`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`SAVE`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Congratulations! You have created your first content model.`}</p>
</li>
</ol>
<_Heading level={2} id={"additional-information"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Additional Information</_Heading>
<_Heading level={3} id={"field-validation"} nextElement={{
      "type": "paragraph"
    }}>Field Validation</_Heading>
<p>{`You can add various validations to a field from the `}<strong parentName="p">{`VALIDATORS`}</strong>{` tab on the `}<strong parentName="p">{`Field Settings`}</strong>{` screen.
Depending on the field type, you can add different types of validations to your field.`}</p>
<Image src={_Image1} alt={"Field Validators"} mdxType="Image" />
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;