/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image3 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/5.x/page-builder/essentials/assets/create-page/hero-image.svg'
import _Image2 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/5.x/page-builder/essentials/assets/create-page/background-image.svg'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/5.x/page-builder/essentials/assets/create-page/create-page-preview.png'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import createPage from "/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/5.x/page-builder/essentials/assets/create-page/create-page.mp4";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.79c9f1.json";

import _versions from "@/data/versions.ff7084.json";

const Layout = _Layout;
const pageData = {
  "title": "Create Page",
  "description": "Learn how to create a page in Page Builder.",
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
  "title": "Step 1: Add a New Page",
  "slug": "step-1-add-a-new-page",
  "children": []
}, {
  "title": "Step 2: Add and Edit a New Block",
  "slug": "step-2-add-and-edit-a-new-block",
  "children": []
}, {
  "title": "Step 3: Add a Heading",
  "slug": "step-3-add-a-heading",
  "children": []
}, {
  "title": "Step 4: Add an Image",
  "slug": "step-4-add-an-image",
  "children": []
}, {
  "title": "Step 5: Review Settings",
  "slug": "step-5-review-settings",
  "children": []
}, {
  "title": "Step 6: Preview and Publish",
  "slug": "step-6-preview-and-publish",
  "children": []
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
const Image = makeShortcode("Image");
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
<li parentName="ul">{`how to create a page using Page Builder`}</li>
</ul>
</Alert>
<p>{`Webiny’s Page Builder incorporates a drag-and-drop visual editor that allows you to easily create and edit web pages without requiring any coding skills.`}</p>
<p>{`In this tutorial, we will learn how to create a page using the Page Builder. As an example, we will create a page with the section shown in the image below:`}</p>
<Image src={_Image1} alt={"Create Page"} mdxType="Image" />
<p>{`We will do this in 6 steps:`}</p>
<ul>
<li parentName="ul">{`Step 1: Add a new page`}</li>
<li parentName="ul">{`Step 2: Add and edit a new block`}</li>
<li parentName="ul">{`Step 3: Add a heading`}</li>
<li parentName="ul">{`Step 4: Add an image`}</li>
<li parentName="ul">{`Step 5: Review settings`}</li>
<li parentName="ul">{`Step 6: Preview and publish`}</li>
</ul>
<Video src={createPage} controls={true} mdxType="Video" />
<_Heading level={2} id={"step-1-add-a-new-page"} nextElement={{
      "type": "list",
      "ordered": true,
      "start": 1,
      "spread": true
    }}>Step 1: Add a New Page</_Heading>
<ol>
<li parentName="ol">
<p parentName="li">{`From the `}<strong parentName="p">{`Side Menu`}</strong>{`, click `}<strong parentName="p">{`Page Builder`}</strong>{` > `}<strong parentName="p">{`PAGES`}</strong>{` > `}<strong parentName="p">{`Pages`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Pages`}</strong>{` screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`+ NEW PAGE`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The screen to select a template for the page opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`USE A BLANK PAGE TEMPLATE`}</strong>{`.`}</p>
<p parentName="li">{`✔️ Page editor screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`To rename the page, click the page’s title `}<strong parentName="p">{`Untitled`}</strong>{`.`}</p>
<p parentName="li">{`✔️ A textbox appears.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the textbox, update the text from `}<strong parentName="p">{`Untitled`}</strong>{` to `}<strong parentName="p">{`The benefits of a Serverless CMS`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click anywhere outside the textbox.`}</p>
<p parentName="li">{`✔️ The message “Page title updated successfully!” displays.`}</p>
<p parentName="li"><strong parentName="p">{`Note`}</strong>{`: This page title does not need to be same as the title that you want to be listed in search engine rankings. The purpose of this title is for internal content organization.`}</p>
</li>
</ol>
<_Heading level={2} id={"step-2-add-and-edit-a-new-block"} nextElement={{
      "type": "list",
      "ordered": true,
      "start": 1,
      "spread": true
    }}>Step 2: Add and Edit a New Block</_Heading>
<ol>
<li parentName="ol">
<p parentName="li">{`Click the `}<strong parentName="p">{`ADD BLOCK`}</strong>{` button ( ➕ ) at the bottom-right corner of the page editor.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`All blocks`}</strong>{` screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Hover on the `}<strong parentName="p">{`EMPTY BLOCK`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`+ CLICK TO ADD`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The page editor screen opens with the newly added block.`}</p>
<p parentName="li"><strong parentName="p">{`Note`}</strong>{`: Blocks are the building blocks of a page. A page may be built with multiple blocks. A block can contain elements like heading, paragraph, grid, etc. A grid is made of one or more cells. And, the elements like heading and paragraph can also be placed inside cells.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Hover on and click the `}<strong parentName="p">{`grid`}</strong>{` inside the empty block.`}</p>
<p parentName="li">{`✔️ Properties of the `}<strong parentName="p">{`grid`}</strong>{` display in `}<strong parentName="p">{`STYLE`}</strong>{` tab.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`STYLE`}</strong>{` tab of the grid element, click `}<strong parentName="p">{`Width`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Width`}</strong>{` accordion opens.`}</p>
<p parentName="li">{`a. In the `}<strong parentName="p">{`Width value`}</strong>{` textbox, update the text from `}<strong parentName="p">{`1100`}</strong>{` to `}<strong parentName="p">{`100`}</strong>{`.`}</p>
<p parentName="li">{`b. In the `}<strong parentName="p">{`Width unit`}</strong>{` dropdown, click `}<strong parentName="p">{`%`}</strong>{`.`}</p>
<p parentName="li"><strong parentName="p">{`Note`}</strong>{`: This will make the grid occupy 100% width of its parent element - the block.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`STYLE`}</strong>{` tab of the grid element, click `}<strong parentName="p">{`Grid Size`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Grid Size`}</strong>{` accordion opens.`}</p>
<p parentName="li">{`a. In the layout options, click the `}<strong parentName="p">{`two-column-layout`}</strong>{`.`}</p>
<p parentName="li">{`b. Update the value of `}<strong parentName="p">{`Cell 1`}</strong>{` from `}<strong parentName="p">{`6`}</strong>{` to `}<strong parentName="p">{`5`}</strong>{`.`}</p>
<p parentName="li">{`c. Update the value of `}<strong parentName="p">{`Cell 2`}</strong>{` from `}<strong parentName="p">{`6`}</strong>{` to `}<strong parentName="p">{`7`}</strong>{`.`}</p>
<p parentName="li"><strong parentName="p">{`Note`}</strong>{`: The cells are in order from the left to the right i.e. Cell 1, Cell 2, Cell 3, and so on.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Hover on and click the `}<strong parentName="p">{`block`}</strong>{` element.`}</p>
<p parentName="li">{`✔️ Properties of the `}<strong parentName="p">{`block`}</strong>{` display in `}<strong parentName="p">{`STYLE`}</strong>{` tab.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`STYLE`}</strong>{` tab of the block element, click `}<strong parentName="p">{`Background`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Background`}</strong>{` accordion opens.`}</p>
<p parentName="li">{`a. Click the `}<strong parentName="p">{`Image`}</strong>{` selector.`}</p>
<p parentName="li">{`✔️ The media manager screen opens.`}</p>
<p parentName="li">{`b. Click `}<strong parentName="p">{`UPLOAD`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The file explorer screen opens.`}</p>
<p parentName="li">{`c. From the file explorer, upload the following image:`}</p>
<Image src={_Image2} alt={"Background Image"} mdxType="Image" />
<p parentName="li">{`d. Click the uploaded image in the media manager.`}</p>
<p parentName="li">{`✔️ The page editor screen opens with the image added to the page as the block’s background.`}</p>
<p parentName="li">{`e. In the `}<strong parentName="p">{`Scaling`}</strong>{` dropdown, click `}<strong parentName="p">{`Cover`}</strong>{`.`}</p>
<p parentName="li">{`f. In the `}<strong parentName="p">{`Position`}</strong>{` dropdown, click `}<strong parentName="p">{`Top`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`STYLE`}</strong>{` tab of the block element, click `}<strong parentName="p">{`Height`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Height`}</strong>{` accordion opens.`}</p>
<p parentName="li">{`a. In the `}<strong parentName="p">{`Height value`}</strong>{` textbox, update the text to `}<strong parentName="p">{`100`}</strong>{`.`}</p>
<p parentName="li">{`b. In the `}<strong parentName="p">{`Height unit`}</strong>{` dropdown, click `}<strong parentName="p">{`vh`}</strong>{`.`}</p>
</li>
</ol>
<_Heading level={2} id={"step-3-add-a-heading"} nextElement={{
      "type": "list",
      "ordered": true,
      "start": 1,
      "spread": true
    }}>Step 3: Add a Heading</_Heading>
<ol>
<li parentName="ol">
<p parentName="li">{`Click the `}<strong parentName="p">{`ADD ELEMENT`}</strong>{` icon ( ➕ ) at the top-left corner of the page editor.`}</p>
<p parentName="li">{`✔️ The elements menu opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`Basic`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Basic`}</strong>{` elements accordion opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Hover on the `}<strong parentName="p">{`HEADING`}</strong>{` element.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Drag and drop the `}<strong parentName="p">{`HEADING`}</strong>{` element inside `}<strong parentName="p">{`Cell 1`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Double click the `}<strong parentName="p">{`Heading`}</strong>{` element to edit it.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Update the text from `}<strong parentName="p">{`Heading`}</strong>{` to `}<strong parentName="p">{`The benefits of a Serverless CMS`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Select the whole text by pressing `}<strong parentName="p">{`Ctrl + A`}</strong>{` (or with the mouse).`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the text formatting menu that appears above the selected text:`}</p>
<p parentName="li">{`a. Click the `}<strong parentName="p">{`Bold`}</strong>{` icon ( `}<strong parentName="p">{`B`}</strong>{` ).`}</p>
<p parentName="li">{`b. In the `}<strong parentName="p">{`Heading Type`}</strong>{` dropdown, click `}<strong parentName="p">{`Heading 1`}</strong>{`.`}</p>
<p parentName="li">{`c. In the `}<strong parentName="p">{`Font Size`}</strong>{` dropdown, click `}<strong parentName="p">{`30 px`}</strong>{`.`}</p>
<p parentName="li">{`d. In the `}<strong parentName="p">{`Font Color`}</strong>{` dropdowwn, click the `}<strong parentName="p">{`Orange`}</strong>{` color.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`STYLE`}</strong>{` tab of the heading element, click `}<strong parentName="p">{`Margin`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Margin`}</strong>{` accordion opens.`}</p>
<p parentName="li">{`a. Click the `}<strong parentName="p">{`LINK ALL SIDES`}</strong>{` icon ( 🔗 ) to make it inactive.`}</p>
<p parentName="li">{`b. Update the `}<strong parentName="p">{`margin-bottom`}</strong>{` value from `}<strong parentName="p">{`0px`}</strong>{` to `}<strong parentName="p">{`60px`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Now, following the Steps 1 to 9, add the following two texts in order below the `}<strong parentName="p">{`The benefits of a Serverless CMS`}</strong>{` text inside `}<strong parentName="p">{`Cell 1`}</strong>{` with the mentioned properties:`}</p>
<table parentName="li">
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
                "align": "left"
              }}>{`Text`}</th>
<th parentName="tr" {...{
                "align": "left"
              }}>{`Formatting`}</th>
<th parentName="tr" {...{
                "align": "left"
              }}>{`Color`}</th>
<th parentName="tr" {...{
                "align": "left"
              }}>{`Heading Type`}</th>
<th parentName="tr" {...{
                "align": "left"
              }}>{`Font Size`}</th>
<th parentName="tr" {...{
                "align": "left"
              }}>{`Margin`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
                "align": "left"
              }}><strong parentName="td">{`Increase your business`}</strong>{` `}<br /><strong parentName="td">{`resiliency and reduce`}</strong>{` `}<br /><strong parentName="td">{`infrastructure spend`}</strong></td>
<td parentName="tr" {...{
                "align": "left"
              }}>{`Bold`}</td>
<td parentName="tr" {...{
                "align": "left"
              }}>{`Black`}</td>
<td parentName="tr" {...{
                "align": "left"
              }}>{`Heading 2`}</td>
<td parentName="tr" {...{
                "align": "left"
              }}>{`36 px`}</td>
<td parentName="tr" {...{
                "align": "left"
              }}>{`Bottom - 40px`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
                "align": "left"
              }}>{`By switching to `}<strong parentName="td">{`Webiny`}</strong>{` these are the `}<br />{` `}<strong parentName="td">{`quantifiable gains`}</strong>{` you can expect:`}</td>
<td parentName="tr" {...{
                "align": "left"
              }}>{`Normal + Bold (specified)`}</td>
<td parentName="tr" {...{
                "align": "left"
              }}>{`Orange`}</td>
<td parentName="tr" {...{
                "align": "left"
              }}>{`Heading 3`}</td>
<td parentName="tr" {...{
                "align": "left"
              }}>{`24 px`}</td>
<td parentName="tr" {...{
                "align": "left"
              }}>{`Bottom - 60px`}</td>
</tr>
</tbody>
</table>
</li>
</ol>
<_Heading level={2} id={"step-4-add-an-image"} nextElement={{
      "type": "list",
      "ordered": true,
      "start": 1,
      "spread": true
    }}>Step 4: Add an Image</_Heading>
<ol>
<li parentName="ol">
<p parentName="li">{`From the `}<strong parentName="p">{`Basic`}</strong>{` elements menu, drag and drop the `}<strong parentName="p">{`IMAGE`}</strong>{` element inside `}<strong parentName="p">{`Cell 2`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The media manager screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`UPLOAD`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The file explorer screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`From the file explorer, upload the following image:`}</p>
<Image src={_Image3} alt={"Hero Image"} mdxType="Image" />
</li>
<li parentName="ol">
<p parentName="li">{`Click the uploaded image in the media manager.`}</p>
<p parentName="li">{`✔️ The page editor screen opens with the image added to the page.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`STYLE`}</strong>{` tab of the image element, click `}<strong parentName="p">{`Image`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Image`}</strong>{` accordion opens.`}</p>
<p parentName="li">{`a. In the `}<strong parentName="p">{`Width value`}</strong>{` textbox, type `}<strong parentName="p">{`80`}</strong></p>
<p parentName="li">{`b. In the `}<strong parentName="p">{`Width unit`}</strong>{` dropdown, click `}<strong parentName="p">{`%`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`STYLE`}</strong>{` tab of the image element, click `}<strong parentName="p">{`Horizontal align`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Horizontal align`}</strong>{` accordion opens.`}</p>
<p parentName="li">{`a. Click the `}<strong parentName="p">{`ALIGN RIGHT`}</strong>{` icon ( `}<em parentName="p">{`Align right icon required`}</em>{` ).`}</p>
</li>
</ol>
<_Heading level={2} id={"step-5-review-settings"} nextElement={{
      "type": "list",
      "ordered": true,
      "start": 1,
      "spread": true
    }}>Step 5: Review Settings</_Heading>
<ol>
<li parentName="ol">
<p parentName="li">{`Click the `}<strong parentName="p">{`SETTINGS`}</strong>{` icon ( ⚙️ ).`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`General settings`}</strong>{` tab inside the `}<strong parentName="p">{`Page Settings`}</strong>{` screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Path`}</strong>{` textbox, type `}<strong parentName="p">{`/the-benefits-of-a-serverless-cms`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Snippet`}</strong>{` textbox, type `}<strong parentName="p">{`Increase your business resiliency and reduce infrastructure spend`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`SAVE SETTINGS`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The page editor screen opens with the message “Settings saved!“.`}</p>
</li>
</ol>
<_Heading level={2} id={"step-6-preview-and-publish"} nextElement={{
      "type": "list",
      "ordered": true,
      "start": 1,
      "spread": true
    }}>Step 6: Preview and Publish</_Heading>
<ol>
<li parentName="ol">
<p parentName="li">{`Click the `}<strong parentName="p">{`kebab menu`}</strong>{` icon ( ⁝ ) on the top right of the page.`}</p>
<p parentName="li">{`✔️ Menu opens with the options `}<strong parentName="p">{`Preview`}</strong>{` and `}<strong parentName="p">{`Set as homepage`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`Preview`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The page opens in new browser window.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`To publish the page, click `}<strong parentName="p">{`PUBLISH`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Pages`}</strong>{` screen opens with the message “Your page was published successfully!“.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`PAGE PREVIEW`}</strong>{` tab of the `}<strong parentName="p">{`The benefits of a Serverless CMS`}</strong>{` page, click the `}<strong parentName="p">{`kebab menu`}</strong>{` icon ( ⁝ ).`}</p>
<p parentName="li">{`✔️ Menu opens with the options `}<strong parentName="p">{`View`}</strong>{` and `}<strong parentName="p">{`Set as homepage`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`View`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`The benefits of a Serverless CMS`}</strong>{` page opens in a new tab.`}</p>
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