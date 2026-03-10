/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import contentEntryRevision from "/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/5.x/headless-cms/essentials/assets/content-entry-revisions/content-entry-revisions.mp4";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.79c9f1.json";

import _versions from "@/data/versions.ff7084.json";

const Layout = _Layout;
const pageData = {
  "title": "Content Entry Revisions",
  "description": "Learn how to publish a specific version of a content entry, and create a new version of a content entry by deriving from a previous revision.",
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
  "title": "Step 1: Create a Content Entry and Its Revisions",
  "slug": "step-1-create-a-content-entry-and-its-revisions",
  "children": []
}, {
  "title": "Step 2: Publish a Previous Revision",
  "slug": "step-2-publish-a-previous-revision",
  "children": []
}, {
  "title": "Step 3: Create a New Content Entry Version From a Previous Revision",
  "slug": "step-3-create-a-new-content-entry-version-from-a-previous-revision",
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
<li parentName="ul">{`how to create multiple revisions of a content entry and publish a specific one`}</li>
<li parentName="ul">{`how to create a new content entry version from a previous revision`}</li>
</ul>
</Alert>
<p>{`In Webiny, each modification in a content entry that is saved or published is stored as a separate revision.
In this tutorial, we will learn how to create multiple revisions of a content entry and publish a specific revision.
We will also learn how to create a new content entry version from a previous revision.
As an example, we will use the `}<strong parentName="p">{`Product`}</strong>{` content model that we created in the `}<_Link href="/docs/5.x/user-guides/headless-cms/essentials/create-content-model">{`Create Content Model`}</_Link>{` tutorial.`}</p>
<Video src={contentEntryRevision} controls={true} mdxType="Video" />
<p>{`We will do this in 3 steps:`}</p>
<ul>
<li parentName="ul">{`Step 1: Create a content entry in the `}<strong parentName="li">{`Product`}</strong>{` content model and make multiple revisions.`}</li>
<li parentName="ul">{`Step 2: Publish a previous revision of the content entry.`}</li>
<li parentName="ul">{`Step 3: Create a new content entry version from a previous revision.`}</li>
</ul>
<_Heading level={2} id={"step-1-create-a-content-entry-and-its-revisions"} nextElement={{
      "type": "paragraph"
    }}>Step 1: Create a Content Entry and Its Revisions</_Heading>
<p>{`If you are not familiar with how to create a content entry, please follow the `}<_Link href="/docs/5.x/user-guides/headless-cms/essentials/create-content-entry">{`Create Content Entry`}</_Link>{` tutorial.`}</p>
<ol>
<li parentName="ol">
<p parentName="li">{`Create a content entry in the `}<strong parentName="p">{`Product`}</strong>{` content model with the following attributes:`}</p>
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
              }}><strong parentName="td">{`Men’s Blue T-Shirt`}</strong></td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
                "align": "left"
              }}>{`Description`}</td>
<td parentName="tr" {...{
                "align": "left"
              }}><strong parentName="td">{`Half Sleeved, Regular fit, Cotton blend, Blue T-shirt for Men`}</strong></td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
                "align": "left"
              }}>{`Price`}</td>
<td parentName="tr" {...{
                "align": "left"
              }}><strong parentName="td">{`15`}</strong></td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
                "align": "left"
              }}>{`Category`}</td>
<td parentName="tr" {...{
                "align": "left"
              }}><strong parentName="td">{`Clothes`}</strong></td>
</tr>
</tbody>
</table>
<p parentName="li"><strong parentName="p">{`Note`}</strong>{`: If you haven’t added the `}<strong parentName="p">{`Category`}</strong>{` field to the `}<strong parentName="p">{`Product`}</strong>{` content model, skip it (or add it by following the `}<_Link href="/docs/5.x/user-guides/headless-cms/essentials/reference-field">{`Reference Field`}</_Link>{` tutorial).`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Now, update the `}<strong parentName="p">{`Name`}</strong>{` and `}<strong parentName="p">{`Description`}</strong>{` textboxes with the following values:`}</p>
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
              }}><strong parentName="td">{`Men’s Solid Blue T-Shirt`}</strong></td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
                "align": "left"
              }}>{`Description`}</td>
<td parentName="tr" {...{
                "align": "left"
              }}><strong parentName="td">{`Half Sleeved, Regular fit, Cotton blend, Solid, Blue T-shirt for Men`}</strong></td>
</tr>
</tbody>
</table>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`SAVE & PUBLISH`}</strong>{`.`}</p>
<p parentName="li"><strong parentName="p">{`Note`}</strong>{`: Clicking `}<strong parentName="p">{`SAVE`}</strong>{` will create a new version of the content entry with updated field values and save it as a draft.
Whereas clicking `}<strong parentName="p">{`SAVE & PUBLISH`}</strong>{` will create a new version and publish it.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Create another revision by updating the `}<strong parentName="p">{`Name`}</strong>{` and `}<strong parentName="p">{`Description`}</strong>{` textboxes with the following values:`}</p>
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
              }}><strong parentName="td">{`Men’s Solid Round Neck Blue T-Shirt`}</strong></td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
                "align": "left"
              }}>{`Description`}</td>
<td parentName="tr" {...{
                "align": "left"
              }}><strong parentName="td">{`Round Neck, Half Sleeved, Regular fit, Cotton blend, Solid, Blue T-shirt for Men`}</strong></td>
</tr>
</tbody>
</table>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`SAVE & PUBLISH`}</strong>{`.`}</p>
</li>
</ol>
<_Heading level={2} id={"step-2-publish-a-previous-revision"} nextElement={{
      "type": "list",
      "ordered": true,
      "start": 1,
      "spread": true
    }}>Step 2: Publish a Previous Revision</_Heading>
<ol>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Men’s Solid Round Neck Blue T-Shirt`}</strong>{` content entry, click the `}<strong parentName="p">{`REVISIONS`}</strong>{` tab.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`To publish the previous `}<strong parentName="p">{`Men’s Solid Blue T-Shirt`}</strong>{` revision, click the `}<strong parentName="p">{`Kebab Menu`}</strong>{` on it ( ⁝ ).`}</p>
<p parentName="li">{`✔️ Menu opens with `}<strong parentName="p">{`New from current`}</strong>{` and `}<strong parentName="p">{`Publish`}</strong>{` option.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`Publish`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Men’s Solid Blue T-Shirt`}</strong>{` revision gets published. `}<strong parentName="p">{`CONTENT`}</strong>{` tab opens with the message “Successfully published revision #2!“.`}</p>
<p parentName="li"><strong parentName="p">{`Note`}</strong>{`: The dropdown on the top-left corner of the content tab shows `}<strong parentName="p">{`V3 (UNPUBLISHED)`}</strong>{`. To open the published entry version, click `}<strong parentName="p">{`V2 (Published)`}</strong>{` in the dropdown.`}</p>
</li>
</ol>
<_Heading level={2} id={"step-3-create-a-new-content-entry-version-from-a-previous-revision"} nextElement={{
      "type": "list",
      "ordered": true,
      "start": 1,
      "spread": true
    }}>Step 3: Create a New Content Entry Version From a Previous Revision</_Heading>
<ol>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Men’s Solid Round Neck Blue T-Shirt`}</strong>{` content entry, click the `}<strong parentName="p">{`REVISIONS`}</strong>{` tab.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`To create a new entry version from the previous `}<strong parentName="p">{`Men’s Blue T-Shirt`}</strong>{` revision, click the `}<strong parentName="p">{`Kebab Menu`}</strong>{` on it ( ⁝ ).`}</p>
<p parentName="li">{`✔️ Menu opens with `}<strong parentName="p">{`New from current`}</strong>{` and `}<strong parentName="p">{`Publish`}</strong>{` option.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`New from current`}</strong>{`.`}</p>
<p parentName="li">{`✔️ `}<strong parentName="p">{`CONTENT`}</strong>{` tab opens with a new draft of the previous `}<strong parentName="p">{`Men’s Blue T-Shirt`}</strong>{` revision.`}</p>
<p parentName="li"><strong parentName="p">{`Optional`}</strong>{`: Make the desired change(s) in the respective field(s).`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`SAVE & PUBLISH`}</strong>{`.`}</p>
<p parentName="li">{`✔️ A new content entry revision will be saved and published.`}</p>
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