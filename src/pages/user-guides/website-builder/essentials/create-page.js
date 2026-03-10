/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image4 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/6.0.x/website-builder/essentials/assets/create-page/folders-static.png'
import _Image3 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/6.0.x/website-builder/essentials/assets/create-page/create-page-preview.png'
import _Image2 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/6.0.x/website-builder/essentials/assets/create-page/example-image.jpg'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/6.0.x/website-builder/essentials/assets/create-page/create-page-preview.png'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import step1Video from "/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/6.0.x/website-builder/essentials/assets/create-page/step1-add-new-page.mp4";
import step2Video from "/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/6.0.x/website-builder/essentials/assets/create-page/step2-add-edit-box.mp4";
import step3Video from "/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/6.0.x/website-builder/essentials/assets/create-page/step3-add-edit-rich-text.mp4";
import step4Video from "/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/6.0.x/website-builder/essentials/assets/create-page/step4-add-edit-grid.mp4";
import step5Video from "/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/6.0.x/website-builder/essentials/assets/create-page/step5-add-adjust-image.mp4";
import step6Video from "/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/6.0.x/website-builder/essentials/assets/create-page/step6-custom-element.mp4";
import step7Video1 from "/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/6.0.x/website-builder/essentials/assets/create-page/step7-use-navigator.mp4";
import step7Video2 from "/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/6.0.x/website-builder/essentials/assets/create-page/step7-quick-select.mp4";
import step8Video from "/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/6.0.x/website-builder/essentials/assets/create-page/step8-review-settings.mp4";
import step9Video from "/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/6.0.x/website-builder/essentials/assets/create-page/step9-preview-breakpoints.mp4";
import step10Video from "/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/6.0.x/website-builder/essentials/assets/create-page/step10-preview.mp4";
import step11Video from "/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/6.0.x/website-builder/essentials/assets/create-page/step11-publish.mp4";
import step12Video from "/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/6.0.x/website-builder/essentials/assets/create-page/step12-folders.mp4";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.9991ed.json";

import _versions from "@/data/versions.ff7084.json";

const Layout = _Layout;
const pageData = {
  "title": "Create Page",
  "description": "Learn how to create a page in Website Builder.",
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
  "title": "Step 1: Add a New Page",
  "slug": "step-1-add-a-new-page",
  "children": []
}, {
  "title": "Step 2: Add and Edit a Box",
  "slug": "step-2-add-and-edit-a-box",
  "children": []
}, {
  "title": "Step 3: Add and Edit Rich Text",
  "slug": "step-3-add-and-edit-rich-text",
  "children": []
}, {
  "title": "Step 4: Add and Edit a Grid",
  "slug": "step-4-add-and-edit-a-grid",
  "children": []
}, {
  "title": "Step 5: Add and Adjust an Image",
  "slug": "step-5-add-and-adjust-an-image",
  "children": []
}, {
  "title": "Step 6: Add a Complex Custom Element",
  "slug": "step-6-add-a-complex-custom-element",
  "children": []
}, {
  "title": "Step 7: Use the Navigator",
  "slug": "step-7-use-the-navigator",
  "children": []
}, {
  "title": "Step 8: Review Settings",
  "slug": "step-8-review-settings",
  "children": []
}, {
  "title": "Step 9: Preview Breakpoints and Adjust",
  "slug": "step-9-preview-breakpoints-and-adjust",
  "children": []
}, {
  "title": "Step 10: Preview",
  "slug": "step-10-preview",
  "children": []
}, {
  "title": "Step 11: Publish",
  "slug": "step-11-publish",
  "children": []
}, {
  "title": "Step 12: Organize Content in Folders",
  "slug": "step-12-organize-content-in-folders",
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
<li parentName="ul">{`how to create a page using Website Builder`}</li>
</ul>
</Alert>
<p>{`Webiny’s Website Builder incorporates a drag-and-drop visual editor that allows you to easily create and edit web pages without requiring any coding skills.`}</p>
{`In this tutorial, we will learn how to create a Page using the Website Builder. As an example, we will create a page with the section shown in the image below:
`}
<Image src={_Image1} alt={"Create Page"} mdxType="Image" />
<p>{`We will do this in 12 steps:`}</p>
<ul>
<li parentName="ul">{`Step 1: Add a new Page`}</li>
<li parentName="ul">{`Step 2: Add and edit a Box`}</li>
<li parentName="ul">{`Step 3: Add and edit Rich Text`}</li>
<li parentName="ul">{`Step 4: Add and edit a Grid`}</li>
<li parentName="ul">{`Step 5: Add and adjust an Image`}</li>
<li parentName="ul">{`Step 6: Add a complex custom Element`}</li>
<li parentName="ul">{`Step 7: Use the Navigator`}</li>
<li parentName="ul">{`Step 8: Review Settings`}</li>
<li parentName="ul">{`Step 9: Preview the Breakpoints and adjust`}</li>
<li parentName="ul">{`Step 10: Preview`}</li>
<li parentName="ul">{`Step 11: Publish`}</li>
<li parentName="ul">{`Step 12: Organize content in Folders`}</li>
</ul>
<_Heading level={2} id={"step-1-add-a-new-page"} nextElement={{
      "type": "jsx"
    }}>Step 1: Add a New Page</_Heading>
<Video src={step1Video} controls={true} mdxType="Video" />
<ol>
<li parentName="ol">
<p parentName="li">{`From the `}<strong parentName="p">{`Side Menu`}</strong>{`, click `}<strong parentName="p">{`Website Builder`}</strong>{` > `}<strong parentName="p">{`Pages`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Pages`}</strong>{` screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`+ NEW PAGE`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The pop-up to select a Page type opens, e.g., Static Page.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Add the `}<strong parentName="p">{`Title`}</strong>{` of the Page.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Path`}</strong>{` is automatically generated.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`CREATE`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The new Page edit screen appears.`}</p>
</li>
</ol>
<_Heading level={2} id={"step-2-add-and-edit-a-box"} nextElement={{
      "type": "jsx"
    }}>Step 2: Add and Edit a Box</_Heading>
<Video src={step2Video} controls={true} mdxType="Video" />
<ol>
<li parentName="ol">
<p parentName="li">{`Drag and drop a `}<strong parentName="p">{`Box`}</strong>{` Element into the ➕ container and click on it to select it.`}</p>
<p parentName="li">{`✔️ The right-side `}<strong parentName="p">{`Element`}</strong>{` and `}<strong parentName="p">{`Style`}</strong>{` menus now control the selected Box element.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Explore the `}<strong parentName="p">{`Style`}</strong>{` tab; you can change Layout, Margin & Padding, Background, and control the Visibility of the component.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Change the `}<strong parentName="p">{`Background`}</strong>{` of the Box.`}</p>
<p parentName="li">{`✔️ The Box changes color in the Page area in the center of the screen.`}</p>
<p parentName="li"><strong parentName="p">{`Note`}</strong>{`: Boxes could be used as building blocks of a Page. A Page may be built with multiple Boxes to group Elements together easily share Style, move around together, or delete in one go. A Box can contain Elements like Grids, Images, Rich Text, etc.`}</p>
</li>
</ol>
<_Heading level={2} id={"step-3-add-and-edit-rich-text"} nextElement={{
      "type": "jsx"
    }}>Step 3: Add and Edit Rich Text</_Heading>
<Video src={step3Video} controls={true} mdxType="Video" />
<ol>
<li parentName="ol">
<p parentName="li">{`Drag and drop a `}<strong parentName="p">{`Rich Text`}</strong>{` Element to the Box.`}</p>
<p parentName="li">{`✔️ Placeholder text appears on the Page.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Select the text and, using the `}<strong parentName="p">{`Element`}</strong>{` tab on the right, add and edit the text as needed. You can also open it in a larger pop-up for precise editing.`}</p>
<p parentName="li">{`✔️ Formatting reflects in the Page preview area.`}</p>
</li>
</ol>
<_Heading level={2} id={"step-4-add-and-edit-a-grid"} nextElement={{
      "type": "jsx"
    }}>Step 4: Add and Edit a Grid</_Heading>
<Video src={step4Video} controls={true} mdxType="Video" />
<ol>
<li parentName="ol">
<p parentName="li">{`Add a `}<strong parentName="p">{`Grid`}</strong>{` to the Box element and select it. Note: avoid addingthe Grid to the `}<strong parentName="p">{`Main Content`}</strong>{` area area to keep the same Background and Style, it should be in the Box.`}</p>
<p parentName="li">{`✔️ The Grid shows with sample content in the main Page area.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Element`}</strong>{` tab layout options, click the `}<strong parentName="p">{`four-column-layout, single-row`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The Grid updates content in the main Page area.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Drag and drop `}<strong parentName="p">{`Rich Text`}</strong>{` Elements into Column 3 and 4.`}</p>
<p parentName="li">{`✔️ Sample text populates in these Cells.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Populate and edit the text to explore the Rich Text editor.`}</p>
<p parentName="li"><strong parentName="p">{`Note`}</strong>{`: Grids are also powerful Page building blocks made of one or more Cells. Elements like Images and Rich Text can be placed inside their Cells.`}</p>
</li>
</ol>
<_Heading level={2} id={"step-5-add-and-adjust-an-image"} nextElement={{
      "type": "jsx"
    }}>Step 5: Add and Adjust an Image</_Heading>
<Video src={step5Video} controls={true} mdxType="Video" />
<ol>
<li parentName="ol">
<p parentName="li">{`Drag and drop an `}<strong parentName="p">{`Image`}</strong>{` Element.`}</p>
<p parentName="li">{`✔️ Placeholder Image element appears on the Page.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Select the Image from the `}<strong parentName="p">{`Element`}</strong>{` tab by clicking `}<strong parentName="p">{`SELECT FROM LIBRARY`}</strong>{`.`}</p>
<p parentName="li">{`✔️ File Manager screen pops up.`}</p>
<p parentName="li">{`a. Find and click the desired Image.`}</p>
<p parentName="li">{`   ✔️ Selected asset adds to the Page.`}</p>
<p parentName="li">{`b. OR click `}<strong parentName="p">{`UPLOAD`}</strong>{`.`}</p>
<p parentName="li">{`   ✔️ File explorer opens to select the Image you want to use. Here is the image used in this example:`}</p>
{`   `}
<Image src={_Image2} alt={"Example Image"} mdxType="Image" />
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Style`}</strong>{` tab of the Image element, click `}<strong parentName="p">{`Layout`}</strong>{` and adjust Width to 80%, for example. Then adjust Alignment to centered. Use Margin & Padding as needed.`}</p>
</li>
</ol>
<_Heading level={2} id={"step-6-add-a-complex-custom-element"} nextElement={{
      "type": "jsx"
    }}>Step 6: Add a Complex Custom Element</_Heading>
<Video src={step6Video} controls={true} mdxType="Video" />
<ol>
<li parentName="ol">
<p parentName="li">{`Drag and drop a `}<strong parentName="p">{`Hero #1`}</strong>{` element onto the Page.`}</p>
<p parentName="li">{`✔️ Complex element with child components appears.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Child elements are not editable in this example, but custom components can specify inputs like button labels, etc so this is completely customizable.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Adjust the `}<strong parentName="p">{`Style`}</strong>{` for this element and the changes apply to the  element as a whole and not to its individual parts.`}</p>
</li>
</ol>
<_Heading level={2} id={"step-7-use-the-navigator"} nextElement={{
      "type": "jsx"
    }}>Step 7: Use the Navigator</_Heading>
<Video src={step7Video1} controls={true} mdxType="Video" />
<ol>
<li parentName="ol">
<p parentName="li">{`From the `}<strong parentName="p">{`Navigator`}</strong>{` tab on the left of the Page, click to access structure and components.`}</p>
<p parentName="li">{`✔️ Navigator opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click parent Elements to explore children, e.g., Box > Grid > Column (first) > Rich Text.`}</p>
<p parentName="li">{`✔️ Element highlights on the Page for editing so that users acan find it quickly and start editing it.`}</p>
<p parentName="li"><strong parentName="p">{`Note`}</strong>{`: Navigator excels for complex Pages with lots of components. Use it for precise selection of composites like Grids. Another way to make a precise selection is to use the bread crumb at the bottom of the screen. It allows you to go up the hierarchy in a single click.`}</p>
<Video src={step7Video2} controls={true} mdxType="Video" />
</li>
</ol>
<_Heading level={2} id={"step-8-review-settings"} nextElement={{
      "type": "jsx"
    }}>Step 8: Review Settings</_Heading>
<Video src={step8Video} controls={true} mdxType="Video" />
<ol>
<li parentName="ol">
<p parentName="li">{`Click the `}<strong parentName="p">{`SETTINGS`}</strong>{` icon (⚙️).`}</p>
<p parentName="li">{`✔️ `}<strong parentName="p">{`General Settings`}</strong>{` tab in `}<strong parentName="p">{`Page Settings`}</strong>{` opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In `}<strong parentName="p">{`SEO`}</strong>{` and `}<strong parentName="p">{`Social`}</strong>{` tabs, add info from the content on the Page itself or any test content.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`SAVE SETTINGS`}</strong>{` before closing.Unlike the changes on the Page, which are automatically saved, here the user needs to actually save them to ensure no accidental changes are made.`}</p>
<p parentName="li">{`✔️ Page Settings are updated.`}</p>
</li>
</ol>
<_Heading level={2} id={"step-9-preview-breakpoints-and-adjust"} nextElement={{
      "type": "jsx"
    }}>Step 9: Preview Breakpoints and Adjust</_Heading>
<Video src={step9Video} controls={true} mdxType="Video" />
<ol>
<li parentName="ol">
<p parentName="li">{`At the top of the Page , you have some quick actions, click on the tablet or mobile icon icons to see how the content will look.`}</p>
<p parentName="li">{`✔️ Center preview updates to different sizes.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`When you click on the Mobile, you will notice the content in the Grid is not showing properly. The Grid has a built-in functionality that you can use to quickly fix this. Select Grid, `}<strong parentName="p">{`Element`}</strong>{` tab, set `}<strong parentName="p">{`Stack at breakpoint`}</strong>{` to `}<strong parentName="p">{`Mobile`}</strong>{`.`}</p>
<p parentName="li"><strong parentName="p">{`Note`}</strong>{`: Selecting `}<strong parentName="p">{`Tablet`}</strong>{` stacks fpr tablets and all smaller size screens like Mobile automatically.`}</p>
</li>
</ol>
<_Heading level={2} id={"step-10-preview"} nextElement={{
      "type": "jsx"
    }}>Step 10: Preview</_Heading>
<Video src={step10Video} controls={true} mdxType="Video" />
<ol>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`PREVIEW`}</strong>{` in a new tab.`}</p>
<p parentName="li">{`  ✔️ Page opens in new tab as on Next.js site so that you can check how it will look once published.`}</p>
<Image src={_Image3} alt={"Preview Page"} mdxType="Image" />
</li>
</ol>
<_Heading level={2} id={"step-11-publish"} nextElement={{
      "type": "jsx"
    }}>Step 11: Publish</_Heading>
<Video src={step11Video} controls={true} mdxType="Video" />
<ol>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`PUBLISH`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The pop-up will ask you to confirm that you really want to publish this Page.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`YES, PUBLISH THE PAGE!`}</strong>{`.`}</p>
<p parentName="li">{`✔️ Page goes live on website.`}</p>
</li>
</ol>
<_Heading level={2} id={"step-12-organize-content-in-folders"} nextElement={{
      "type": "jsx"
    }}>Step 12: Organize Content in Folders</_Heading>
<Video src={step12Video} controls={true} mdxType="Video" />
<ol>
<li parentName="ol">
<p parentName="li">{`On Pages list, click `}<strong parentName="p">{`+ NEW FOLDER`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The pop-up will ask you to confirm the Title of the Page and the Slug will automatically be populated.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Use top Search to find the relevant records and multi-select the Pages, then use the top menu `}<strong parentName="p">{`Bulk Actions`}</strong>{` > `}<strong parentName="p">{`Move`}</strong>{` to target Folder, e.g., `}<strong parentName="p">{`Features`}</strong>{`.`}</p>
<p parentName="li">{`✔️ A confirmation report in the end of the successful action. If there are any issues with the Move this report will inform you.`}</p>
<p parentName="li"><strong parentName="p">{`Note`}</strong>{`: If you want to build a hierarchy of Folders (nested in other Folders) then you could change the default `}<strong parentName="p">{`Home`}</strong>{` location  (the root folder) to whatever folder that already exists in your Website Builder. Organizing your content in Folders can help end users find content quickly and efficiently, but keep in mind the `}<strong parentName="p">{`Search`}</strong>{` functionality at the top can also help when looking for the right content.`}</p>
</li>
</ol>
<Image src={_Image4} alt={"Folders"} mdxType="Image" />
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;