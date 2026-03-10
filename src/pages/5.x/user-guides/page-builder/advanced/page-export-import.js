/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import exportImport from "/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/5.x/page-builder/advanced/assets/page-export-import/page-export-import.mp4";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.79c9f1.json";

import _versions from "@/data/versions.ff7084.json";

const Layout = _Layout;
const pageData = {
  "title": "Page Export Import",
  "description": "Learn how to export and import pages in Page Builder.",
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
  "title": "Step 1: Export a Page",
  "slug": "step-1-export-a-page",
  "children": []
}, {
  "title": "Step 2: Import a Page",
  "slug": "step-2-import-a-page",
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
<li parentName="ul">{`how to export pages in Page Builder`}</li>
<li parentName="ul">{`how to import pages in Page Builder`}</li>
</ul>
</Alert>
<p>{`Webiny allows you to export and import pages between different locales and instances. In this tutorial we will learn how to export and import pages in the Page Builder. We will do this in 2 steps:`}</p>
<ul>
<li parentName="ul">{`Step 1: Export a page`}</li>
<li parentName="ul">{`Step 2: Import a page`}</li>
</ul>
<Video src={exportImport} controls={true} mdxType="Video" />
<_Heading level={2} id={"prerequisites"} nextElement={{
      "type": "paragraph"
    }}>Prerequisites</_Heading>
<p>{`To follow this tutorial, you need a page in the Page Builder to import. If you don’t have a page, please follow the `}<_Link href="/docs/5.x/user-guides/page-builder/essentials/create-page">{`Create Page`}</_Link>{` tutorial to create it.`}</p>
<_Heading level={2} id={"step-1-export-a-page"} nextElement={{
      "type": "paragraph"
    }}>Step 1: Export a Page</_Heading>
<p>{`In this step, we will export the `}<strong parentName="p">{`The benefits of a Serverless CMS`}</strong>{` page we created in the `}<_Link href="/docs/5.x/user-guides/page-builder/essentials/create-page">{`Create Page`}</_Link>{` tutorial.`}</p>
<ol>
<li parentName="ol">
<p parentName="li">{`From the `}<strong parentName="p">{`Side Menu`}</strong>{`, click `}<strong parentName="p">{`Page Builder`}</strong>{` > `}<strong parentName="p">{`PAGES`}</strong>{` > `}<strong parentName="p">{`Pages`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Pages`}</strong>{` screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Select the checkbox on the `}<strong parentName="p">{`The benefits of a Serverless CMS`}</strong>{` list item in the list of pages.`}</p>
<p parentName="li"><strong parentName="p">{`Note`}</strong>{`: You can export more than one page at a time by selecting the checkboxes of the pages you want to export. If you want to export all the pages at once, don’t select any checkbox.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click the `}<strong parentName="p">{`EXPORT`}</strong>{` icon.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Select Page Revision`}</strong>{` screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Select revision:`}</p>
<table parentName="li">
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
                "align": "left"
              }}>{`If`}</th>
<th parentName="tr" {...{
                "align": "left"
              }}>{`Then`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
                "align": "left"
              }}>{`You want to export the published revision of the selected page`}</td>
<td parentName="tr" {...{
                "align": "left"
              }}>{`Click `}<strong parentName="td">{`Published`}</strong></td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
                "align": "left"
              }}>{`You want to export the latest revision of the selected page that may not be published`}</td>
<td parentName="tr" {...{
                "align": "left"
              }}>{`Click `}<strong parentName="td">{`Latest`}</strong></td>
</tr>
</tbody>
</table>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`CONTINUE`}</strong>{`.`}</p>
<p parentName="li">{`✔️ A screen appears with the prompt `}<strong parentName="p">{`Your export is now ready!`}</strong></p>
</li>
<li parentName="ol">
<p parentName="li">{`Click the `}<strong parentName="p">{`COPY`}</strong>{` icon to copy the export URL.`}</p>
<p parentName="li">{`(Or click `}<strong parentName="p">{`DOWNLOAD`}</strong>{` to download the ZIP archive.)`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`CLOSE`}</strong>{`.`}</p>
</li>
</ol>
<_Heading level={2} id={"step-2-import-a-page"} nextElement={{
      "type": "paragraph"
    }}>Step 2: Import a Page</_Heading>
<p>{`In this step, we will import the page we exported in Step 1. For this, you need to open the locale or instance in which you want to import the page.`}</p>
<ol>
<li parentName="ol">
<p parentName="li">{`From the `}<strong parentName="p">{`Side Menu`}</strong>{`, click `}<strong parentName="p">{`Page Builder`}</strong>{` > `}<strong parentName="p">{`PAGES`}</strong>{` > `}<strong parentName="p">{`Pages`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Pages`}</strong>{` screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click the `}<strong parentName="p">{`IMPORT`}</strong>{` icon.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Select a category`}</strong>{` screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`Static`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`PASTE FILE URL`}</strong>{` to import the page with the copied URL.`}</p>
<p parentName="li">{`(Or click `}<strong parentName="p">{`UPLOAD FILE`}</strong>{` to import the page with the downloaded ZIP archive.)`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Paste the copied URL in the `}<strong parentName="p">{`File URL`}</strong>{` textbox and click `}<strong parentName="p">{`CONTINUE`}</strong>{`.`}</p>
<p parentName="li">{`(Or upload the downloaded ZIP archive.)`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Import Pages`}</strong>{` screen appears with the message “All pages have been imported”.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`CONTINUE`}</strong>{`.`}</p>
<p parentName="li">{`✔️The `}<strong parentName="p">{`Pages`}</strong>{` screen opens with the imported pages available in the list of pages.`}</p>
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