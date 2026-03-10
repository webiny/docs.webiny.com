/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import pageLocalization from "/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/5.x/page-builder/advanced/assets/page-localization/page-localization.mp4";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.79c9f1.json";

import _versions from "@/data/versions.ff7084.json";

const Layout = _Layout;
const pageData = {
  "title": "Page Localization (Content Localization)",
  "description": "Learn how to create a page for multiple locales.",
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
  "title": "Step 1: Create a New Locale",
  "slug": "step-1-create-a-new-locale",
  "children": []
}, {
  "title": "Step 2: Export a Page",
  "slug": "step-2-export-a-page",
  "children": []
}, {
  "title": "Step 3: Create a New Category in the New Locale",
  "slug": "step-3-create-a-new-category-in-the-new-locale",
  "children": []
}, {
  "title": "Step 4: Import the Page in the New Locale",
  "slug": "step-4-import-the-page-in-the-new-locale",
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
<li parentName="ul">{`how to create a page for multiple locales`}</li>
</ul>
</Alert>
<p>{`Webiny allows creating different versions of the same page for different locales. In this tutorial, we will learn how to create a page for multiple locales. We will do this in 4 steps:`}</p>
<ul>
<li parentName="ul">{`Step 1: Create a new locale`}</li>
<li parentName="ul">{`Step 2: Export a page`}</li>
<li parentName="ul">{`Step 3: Create a new category in the new locale`}</li>
<li parentName="ul">{`Step 4: Import the page in the new locale`}</li>
</ul>
<Video src={pageLocalization} controls={true} mdxType="Video" />
<_Heading level={2} id={"prerequisites"} nextElement={{
      "type": "paragraph"
    }}>Prerequisites</_Heading>
<p>{`To follow this tutorial, you need the `}<strong parentName="p">{`The benefits of a Serverless CMS`}</strong>{` page. If you don’t have the `}<strong parentName="p">{`The benefits of a Serverless CMS`}</strong>{` page, please follow the `}<_Link href="/docs/5.x/user-guides/page-builder/essentials/create-page">{`Create Page`}</_Link>{` tutorial to create it.`}</p>
<_Heading level={2} id={"step-1-create-a-new-locale"} nextElement={{
      "type": "paragraph"
    }}>Step 1: Create a New Locale</_Heading>
<p>{`We will create a new locale for the `}<strong parentName="p">{`Italic`}</strong>{` language.`}</p>
<ol>
<li parentName="ol">
<p parentName="li">{`From the `}<strong parentName="p">{`Side Menu`}</strong>{`, click `}<strong parentName="p">{`Settings`}</strong>{` > `}<strong parentName="p">{`LANGUAGES`}</strong>{` > `}<strong parentName="p">{`Locales`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`+ NEW LOCALE`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`New locale`}</strong>{` section opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Code`}</strong>{` dropdown, type `}<strong parentName="p">{`it-IT`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the available options in the dropdown, click `}<strong parentName="p">{`it-IT`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`SAVE LOCALE`}</strong>{`.`}</p>
</li>
</ol>
<_Heading level={2} id={"step-2-export-a-page"} nextElement={{
      "type": "list",
      "ordered": true,
      "start": 1,
      "spread": true
    }}>Step 2: Export a Page</_Heading>
<ol>
<li parentName="ol">
<p parentName="li">{`From the `}<strong parentName="p">{`Side Menu`}</strong>{`, click `}<strong parentName="p">{`Page Builder`}</strong>{` > `}<strong parentName="p">{`PAGES`}</strong>{` > `}<strong parentName="p">{`Pages`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Pages`}</strong>{` screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Select the checkbox on the `}<strong parentName="p">{`The benefits of a Serverless CMS`}</strong>{` list item in the list of pages.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click the `}<strong parentName="p">{`EXPORT`}</strong>{` icon.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Select Page Revision`}</strong>{` screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`Published`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`CONTINUE`}</strong>{`.`}</p>
<p parentName="li">{`✔️ A screen appears with the prompt `}<strong parentName="p">{`Your export is now ready!`}</strong></p>
</li>
<li parentName="ol">
<p parentName="li">{`Click the `}<strong parentName="p">{`COPY`}</strong>{` icon to copy the export URL.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`CLOSE`}</strong>{`.`}</p>
</li>
</ol>
<_Heading level={2} id={"step-3-create-a-new-category-in-the-new-locale"} nextElement={{
      "type": "list",
      "ordered": true,
      "start": 1,
      "spread": true
    }}>Step 3: Create a New Category in the New Locale</_Heading>
<ol>
<li parentName="ol">
<p parentName="li">{`Click on the `}<strong parentName="p">{`LOCALE`}</strong>{` dropdown in the header section and select `}<strong parentName="p">{`it-IT`}</strong>{` to switch to the Italian locale.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`From the `}<strong parentName="p">{`Side Menu`}</strong>{`, click `}<strong parentName="p">{`Page Builder`}</strong>{` > `}<strong parentName="p">{`PAGES`}</strong>{` > `}<strong parentName="p">{`Categories`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Categories`}</strong>{` screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`+ NEW CATEGORY`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`New Category`}</strong>{` form opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Name`}</strong>{` textbox, type `}<strong parentName="p">{`Static`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Slug`}</strong>{` textbox, type `}<strong parentName="p">{`static`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`URL`}</strong>{` textbox, type `}<strong parentName="p">{`/static/`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Layout`}</strong>{` dropdown, select `}<strong parentName="p">{`Static page`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`SAVE CATEGORY`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The message “Category saved successfully.” displays.`}</p>
</li>
</ol>
<_Heading level={2} id={"step-4-import-the-page-in-the-new-locale"} nextElement={{
      "type": "list",
      "ordered": true,
      "start": 1,
      "spread": true
    }}>Step 4: Import the Page in the New Locale</_Heading>
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
</li>
<li parentName="ol">
<p parentName="li">{`Paste the copied URL in the `}<strong parentName="p">{`File URL`}</strong>{` textbox and click `}<strong parentName="p">{`CONTINUE`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Import Pages`}</strong>{` screen appears with the message “All pages have been imported”.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`CONTINUE`}</strong>{`.`}</p>
<p parentName="li">{`✔️The `}<strong parentName="p">{`Pages`}</strong>{` screen opens with the imported page available in the list of pages.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Edit the imported page and update the following values:`}</p>
<table parentName="li">
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
                "align": "left"
              }}>{`Field`}</th>
<th parentName="tr" {...{
                "align": "left"
              }}>{`Current Value`}</th>
<th parentName="tr" {...{
                "align": "left"
              }}>{`Updated Value`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
                "align": "left"
              }}>{`Page Title`}</td>
<td parentName="tr" {...{
                "align": "left"
              }}>{`The benefits of a Serverless CMS`}</td>
<td parentName="tr" {...{
                "align": "left"
              }}><strong parentName="td">{`I vantaggi di un CMS Serverless`}</strong></td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
                "align": "left"
              }}>{`H1`}</td>
<td parentName="tr" {...{
                "align": "left"
              }}>{`The benefits of a Serverless CMS`}</td>
<td parentName="tr" {...{
                "align": "left"
              }}><strong parentName="td">{`I vantaggi di un CMS Serverless`}</strong></td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
                "align": "left"
              }}>{`H2`}</td>
<td parentName="tr" {...{
                "align": "left"
              }}>{`Increase your business resiliency and reduce infrastructure spend`}</td>
<td parentName="tr" {...{
                "align": "left"
              }}><strong parentName="td">{`Aumenta la tua attività resilienza e ridurre la spesa infrastrutturale`}</strong></td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
                "align": "left"
              }}>{`H3`}</td>
<td parentName="tr" {...{
                "align": "left"
              }}>{`By switching to Webiny these are the quantifiable gains you can expect:`}</td>
<td parentName="tr" {...{
                "align": "left"
              }}><strong parentName="td">{`Passando a Webiny questi sono i guadagni quantificabili che puoi aspettarti:`}</strong></td>
</tr>
</tbody>
</table>
<p parentName="li"><strong parentName="p">{`Note`}</strong>{`: Similarly, you can update other parts of the page. Or you can create an entirely different page for the new locale.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`PUBLISH CHANGES`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Pages`}</strong>{` screen opens with the message “Your page was published successfully!“.`}</p>
</li>
</ol>
<p>{`Now, when a user from the Italian locale visits the `}<strong parentName="p">{`The benefits of a Serverless CMS`}</strong>{` page, they will see the Italian version of the page.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;