/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import defineWorkflowVideo from "/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/5.x/apw/essentials/assets/define-workflow/apw-define-workflow.mp4";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.79c9f1.json";

import _versions from "@/data/versions.ff7084.json";

const Layout = _Layout;
const pageData = {
  "title": "Define Workflow",
  "description": "Learn how to define a workflow in the Advanced Publishing Workflow (APW).",
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
  "title": "Prerequisites",
  "slug": "prerequisites",
  "children": []
}, {
  "title": "Step 1: Create a Content Model Group and a Content Model",
  "slug": "step-1-create-a-content-model-group-and-a-content-model",
  "children": []
}, {
  "title": "Step 2: Create a Publishing Workflow",
  "slug": "step-2-create-a-publishing-workflow",
  "children": []
}, {
  "title": "Step 3: Define the Workflow",
  "slug": "step-3-define-the-workflow",
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
<li parentName="ul">{`how to define a publishing workflow`}</li>
</ul>
</Alert>
<p>{`Webiny APW enables you to easily create a customize publishing workflows tailored to your specific content creation and review requirements. You can add as many review steps as necessary and define the scope of the workflow to suit your requirements. In this tutorial, we will learn how to define a workflow. We will do this in 3 steps:`}</p>
<ul>
<li parentName="ul">{`Step 1: Create a content model group and a content model`}</li>
<li parentName="ul">{`Step 2: Create a publishing workflow`}</li>
<li parentName="ul">{`Step 3: Define the workflow`}</li>
</ul>
<_Heading level={2} id={"prerequisites"} nextElement={{
      "type": "paragraph"
    }}>Prerequisites</_Heading>
<p>{`To follow this tutorial, you need to have the `}<strong parentName="p">{`Adam Reviewer`}</strong>{` user account in your Webiny instance. If you don’t have it, please follow the `}<_Link href="/docs/5.x/user-guides/apw/essentials/apw-user-guides-outline-users-creation">{`Create Users`}</_Link>{` tutorial to create it.`}</p>
<Video src={defineWorkflowVideo} controls={true} mdxType="Video" />
<_Heading level={2} id={"step-1-create-a-content-model-group-and-a-content-model"} nextElement={{
      "type": "paragraph"
    }}>Step 1: Create a Content Model Group and a Content Model</_Heading>
<p>{`If you are not familiar with how to create a content model group and a content model, please follow the `}<_Link href="/docs/5.x/user-guides/headless-cms/essentials/create-content-model-group">{`Create Content Model Group`}</_Link>{` and `}<_Link href="/docs/5.x/user-guides/headless-cms/essentials/create-content-model">{`Create Content Model`}</_Link>{` tutorials.`}</p>
<ol>
<li parentName="ol">
<p parentName="li">{`Create a content model group with the following attributes:`}</p>
<table parentName="li">
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
              }}><strong parentName="td">{`Content`}</strong></td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
                "align": "left"
              }}>{`Group icon`}</td>
<td parentName="tr" {...{
                "align": "left"
              }}><strong parentName="td">{`✏️`}</strong></td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
                "align": "left"
              }}>{`Description`}</td>
<td parentName="tr" {...{
                "align": "left"
              }}><strong parentName="td">{`Group for all types of content to be published in the application`}</strong></td>
</tr>
</tbody>
</table>
</li>
<li parentName="ol">
<p parentName="li">{`Create a content model with the following attributes:`}</p>
<table parentName="li">
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
              }}><strong parentName="td">{`Blog`}</strong></td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
                "align": "left"
              }}>{`Singular API Name`}</td>
<td parentName="tr" {...{
                "align": "left"
              }}><strong parentName="td">{`Blog`}</strong></td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
                "align": "left"
              }}>{`Plural API Name`}</td>
<td parentName="tr" {...{
                "align": "left"
              }}><strong parentName="td">{`Blogs`}</strong></td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
                "align": "left"
              }}>{`Content model group`}</td>
<td parentName="tr" {...{
                "align": "left"
              }}><strong parentName="td">{`Content`}</strong></td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
                "align": "left"
              }}>{`Icon`}</td>
<td parentName="tr" {...{
                "align": "left"
              }}><strong parentName="td">{`📰`}</strong></td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
                "align": "left"
              }}>{`Description`}</td>
<td parentName="tr" {...{
                "align": "left"
              }}><strong parentName="td">{`Blogs to be published in the application`}</strong></td>
</tr>
</tbody>
</table>
</li>
<li parentName="ol">
<p parentName="li">{`Add the following fields with the given attributes to the `}<strong parentName="p">{`Blog`}</strong>{` content model:`}</p>
<table parentName="li">
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
                "align": "left"
              }}>{`Field`}</th>
<th parentName="tr" {...{
                "align": "left"
              }}>{`Label`}</th>
<th parentName="tr" {...{
                "align": "left"
              }}>{`Field ID`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
                "align": "left"
              }}>{`TEXT`}</td>
<td parentName="tr" {...{
                "align": "left"
              }}><strong parentName="td">{`Title`}</strong></td>
<td parentName="tr" {...{
                "align": "left"
              }}>{`title`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
                "align": "left"
              }}>{`TEXT`}</td>
<td parentName="tr" {...{
                "align": "left"
              }}><strong parentName="td">{`Slug`}</strong></td>
<td parentName="tr" {...{
                "align": "left"
              }}>{`slug`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
                "align": "left"
              }}>{`RICH TEXT`}</td>
<td parentName="tr" {...{
                "align": "left"
              }}><strong parentName="td">{`Body`}</strong></td>
<td parentName="tr" {...{
                "align": "left"
              }}>{`body`}</td>
</tr>
</tbody>
</table>
</li>
</ol>
<_Heading level={2} id={"step-2-create-a-publishing-workflow"} nextElement={{
      "type": "list",
      "ordered": true,
      "start": 1,
      "spread": true
    }}>Step 2: Create a Publishing Workflow</_Heading>
<ol>
<li parentName="ol">
<p parentName="li">{`From the `}<strong parentName="p">{`Side Menu`}</strong>{`, click `}<strong parentName="p">{`Publishing Workflows`}</strong>{` > `}<strong parentName="p">{`Workflows`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Publishing Workflows`}</strong>{` screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In front of `}<strong parentName="p">{`Headless CMS`}</strong>{`, click `}<strong parentName="p">{`+ NEW WORKFLOW`}</strong>{`.`}</p>
<p parentName="li">{`✔️ `}<strong parentName="p">{`Untitled`}</strong>{` form opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`To rename the workflow, click the workflows’s title `}<strong parentName="p">{`Untitled`}</strong>{`.`}</p>
<p parentName="li">{`✔️ A textbox appears.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the textbox, update the text to `}<strong parentName="p">{`Blog Publishing Workflow`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click anywhere outside the textbox.`}</p>
</li>
</ol>
<_Heading level={2} id={"step-3-define-the-workflow"} nextElement={{
      "type": "list",
      "ordered": true,
      "start": 1,
      "spread": true
    }}>Step 3: Define the Workflow</_Heading>
<ol>
<li parentName="ol">
<p parentName="li">{`Inside the `}<strong parentName="p">{`Workflow steps`}</strong>{` accordion, under `}<strong parentName="p">{`Step 1`}</strong>{`, in the `}<strong parentName="p">{`Title`}</strong>{` textbox, type `}<strong parentName="p">{`SEO Review`}</strong></p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Type`}</strong>{` dropdown, click `}<strong parentName="p">{`Mandatory, non-blocking`}</strong>{`.`}</p>
<p parentName="li"><strong parentName="p">{`Note`}</strong>{`: There are three options in the `}<strong parentName="p">{`Type`}</strong>{` dropdown:`}</p>
<ul parentName="li">
<li parentName="ul"><strong parentName="li">{`Mandatory, blocking`}</strong>{`: The review process cannot proceed until this step is completed. It serves as a mandatory and blocking phase.`}</li>
<li parentName="ul"><strong parentName="li">{`Mandatory, non-blocking`}</strong>{`: Other steps are unlocked in the review process, but item publication awaits completion of all mandatory, non-blocking steps.`}</li>
<li parentName="ul"><strong parentName="li">{`Optional`}</strong>{`: This step doesn’t impede the review process, and the item can be published regardless of sign off. Choose this for steps that are supplementary or non-essential to the overall workflow. `}</li>
</ul>
</li>
</ol>
<ol {...{
      "start": 3
    }}>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Reviewers`}</strong>{` section, select the `}<strong parentName="p">{`Adam Reviewer`}</strong>{` checkbox.`}</p>
<p parentName="li"><strong parentName="p">{`Note`}</strong>{`: You can add more steps to your workflow as per your requirements by clicking `}<strong parentName="p">{`+ ADD STEP`}</strong>{` and following the Steps 1 to 3.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click the `}<strong parentName="p">{`Scope`}</strong>{` accordion.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Scope`}</strong>{` accordion opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Inside the `}<strong parentName="p">{`Scope`}</strong>{` accordion, in the `}<strong parentName="p">{`Type`}</strong>{` dropdown, click `}<strong parentName="p">{`Specific models and entries`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`CMS MODELS`}</strong>{` tab appears.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`CMS MODELS`}</strong>{` tab, select the `}<strong parentName="p">{`Blog`}</strong>{` checkbox.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`SAVE`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The message “Workflow saved successfully.” displays.`}</p>
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