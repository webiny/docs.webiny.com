/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import createForm from "/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/5.x/form-builder/essentials/assets/create-form/create-form.mp4";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.79c9f1.json";

import _versions from "@/data/versions.ff7084.json";

const Layout = _Layout;
const pageData = {
  "title": "Create Form",
  "description": "Learn how to create and publish a form in Form Builder.",
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
  "title": "Step 1: Create a Form",
  "slug": "step-1-create-a-form",
  "children": []
}, {
  "title": "Step 2: Embed the Form",
  "slug": "step-2-embed-the-form",
  "children": []
}, {
  "title": "Step 3: Test the Form",
  "slug": "step-3-test-the-form",
  "children": []
}, {
  "title": "Step 4: View Collected Data",
  "slug": "step-4-view-collected-data",
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
<li parentName="ul">{`how to create and publish a form`}</li>
</ul>
</Alert>
<p>{`Webiny allows you to easily design and customize forms to seamlessly gather and organize data from your audience. In this tutorial, we will learn how to create and publish a form in the form builder. We will do this in 4 steps:`}</p>
<ul>
<li parentName="ul">{`Step 1: Create a form`}</li>
<li parentName="ul">{`Step 2: Embed the form`}</li>
<li parentName="ul">{`Step 3: Test the form`}</li>
<li parentName="ul">{`Step 4: View collected data`}</li>
</ul>
<Video src={createForm} controls={true} mdxType="Video" />
<_Heading level={2} id={"step-1-create-a-form"} nextElement={{
      "type": "list",
      "ordered": true,
      "start": 1,
      "spread": true
    }}>Step 1: Create a Form</_Heading>
<ol>
<li parentName="ol">
<p parentName="li">{`From the `}<strong parentName="p">{`Side Menu`}</strong>{`, click `}<strong parentName="p">{`Form Builder`}</strong>{` > `}<strong parentName="p">{`FORMS`}</strong>{` > `}<strong parentName="p">{`Forms`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Forms`}</strong>{` screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`+ NEW FORM`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`New form`}</strong>{` screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the textbox, type `}<strong parentName="p">{`Contact Form`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`+ CREATE`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The form builder opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Under the `}<strong parentName="p">{`Form Element`}</strong>{` section, click `}<strong parentName="p">{`CONTACT INFORMATION`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`CONTACT INFORMATION`}</strong>{` accordion opens containing commonly used form fields.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Drag and Drop the following fields into the form-fields-area (marked with the message `}<strong parentName="p">{`Drop your first field here`}</strong>{`) inside the `}<strong parentName="p">{`EDIT`}</strong>{` tab:`}</p>
<p parentName="li">{`a. `}<strong parentName="p">{`FIRST NAME`}</strong></p>
<p parentName="li">{`b. `}<strong parentName="p">{`LAST NAME`}</strong></p>
<p parentName="li">{`c. `}<strong parentName="p">{`EMAIL`}</strong></p>
</li>
<li parentName="ol">
<p parentName="li">{`Drag and Drop the `}<strong parentName="p">{`CUSTOM FIELD`}</strong>{` into the form-fields-area.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Field Settings`}</strong>{` screen opens.`}</p>
<p parentName="li">{`a. Click `}<strong parentName="p">{`Long Text`}</strong>{`.`}</p>
<p parentName="li">{`✔️ `}<strong parentName="p">{`GENERAL`}</strong>{` tab opens.`}</p>
<p parentName="li">{`b. In the `}<strong parentName="p">{`Label`}</strong>{` textbox, type `}<strong parentName="p">{`Message`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`PUBLISH`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Forms`}</strong>{` screen opens with the message “Your form was published successfully!“.`}</p>
</li>
</ol>
<_Heading level={2} id={"step-2-embed-the-form"} nextElement={{
      "type": "paragraph"
    }}>Step 2: Embed the Form</_Heading>
<p>{`To use a form, you need to embed it into a page. In this step, we we will embed the form into a page using the Page Builder. If you are not familiar with how to create a page, please follow the `}<_Link href="/docs/5.x/user-guides/page-builder/essentials/create-page">{`Create Page`}</_Link>{` tutorial.`}</p>
<ol>
<li parentName="ol">
<p parentName="li">{`From the `}<strong parentName="p">{`Side Menu`}</strong>{`, click `}<strong parentName="p">{`Page Builder`}</strong>{` > `}<strong parentName="p">{`PAGES`}</strong>{` > `}<strong parentName="p">{`Pages`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Pages`}</strong>{` screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Add a new page.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Update the title of the page to `}<strong parentName="p">{`Contact Us`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Add an empty block to the page.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click the `}<strong parentName="p">{`ADD ELEMENT`}</strong>{` icon.`}</p>
<p parentName="li">{`✔️ The elements menu opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`Form`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Form`}</strong>{` elements accordion opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Drag and drop the `}<strong parentName="p">{`FORM`}</strong>{` element inside the block.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`ELEMENT`}</strong>{` tab of the `}<strong parentName="p">{`FORM`}</strong>{` element opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Form`}</strong>{` dropdown, select `}<strong parentName="p">{`Contact Form`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Revision`}</strong>{` dropdown appears.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Revision`}</strong>{` tab, click `}<strong parentName="p">{`Latest published revision`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`Save`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Contact Form`}</strong>{` appears in the page editor.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`PUBLISH`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Pages`}</strong>{` screen opens with the message “Your page was published successfully!“.`}</p>
</li>
</ol>
<_Heading level={2} id={"step-3-test-the-form"} nextElement={{
      "type": "list",
      "ordered": true,
      "start": 1,
      "spread": true
    }}>Step 3: Test the Form</_Heading>
<ol>
<li parentName="ol">
<p parentName="li">{`On the `}<strong parentName="p">{`Pages`}</strong>{` screen, click the `}<strong parentName="p">{`Contact Us`}</strong>{` list item in the list of pages.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`PAGE PREVIEW`}</strong>{` tab opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click the `}<strong parentName="p">{`kebab menu`}</strong>{` icon ( ⁝ ) on the top right of the page.`}</p>
<p parentName="li">{`✔️ Menu opens with the options `}<strong parentName="p">{`View`}</strong>{` and `}<strong parentName="p">{`Set as homepage`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`View`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Contact Us`}</strong>{` page opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`First name`}</strong>{` textbox, type `}<em parentName="p">{`your name`}</em>{` (e.g. `}<strong parentName="p">{`John`}</strong>{`).`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Last name`}</strong>{` textbox, type `}<em parentName="p">{`your name`}</em>{` (e.g. `}<strong parentName="p">{`Doe`}</strong>{`).`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Email`}</strong>{` textbox, type `}<em parentName="p">{`your email`}</em>{` (e.g. `}<strong parentName="p"><a parentName="strong" {...{
              "href": "mailto:johndoe@example.com"
            }}>{`johndoe@example.com`}</a></strong>{`).`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Message`}</strong>{` textbox, type `}<em parentName="p">{`your message`}</em>{` (e.g. `}<strong parentName="p">{`Testing the form.`}</strong>{`).`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`SUBMIT`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The success message appears.`}</p>
</li>
</ol>
<_Heading level={2} id={"step-4-view-collected-data"} nextElement={{
      "type": "list",
      "ordered": true,
      "start": 1,
      "spread": true
    }}>Step 4: View Collected Data</_Heading>
<ol>
<li parentName="ol">
<p parentName="li">{`From the `}<strong parentName="p">{`Side Menu`}</strong>{`, click `}<strong parentName="p">{`Form Builder`}</strong>{` > `}<strong parentName="p">{`FORMS`}</strong>{` > `}<strong parentName="p">{`Forms`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Forms`}</strong>{` screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`Contact Form`}</strong>{` list item in the list of forms.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`FORM PREVIEW`}</strong>{` tab opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click the `}<strong parentName="p">{`SUBMISSIONS`}</strong>{` tab.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`SUBMISSIONS`}</strong>{` tab opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click the `}<strong parentName="p">{`REFRESH DATA`}</strong>{` icon.`}</p>
</li>
</ol>
<p>{`You will see the collected data in the `}<strong parentName="p">{`SUBMISSIONS`}</strong>{` tab of the form.`}</p>
<p><strong parentName="p">{`Note`}</strong>{`: In the `}<strong parentName="p">{`TRIGGERS`}</strong>{` tab inside the form editor, you can set the action that should be taken after the submission of a form. Two actions are available:`}</p>
<ul>
<li parentName="ul">
<p parentName="li"><strong parentName="p">{`Redirect`}</strong>{`: Sends the user to a specific URL after the successful submission of a form.`}</p>
</li>
<li parentName="ul">
<p parentName="li"><strong parentName="p">{`Webhook`}</strong>{`: Makes a POST HTTP request to a specific URL after the successful submission of a form.`}</p>
</li>
</ul>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;