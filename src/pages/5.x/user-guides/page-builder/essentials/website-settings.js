/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import websiteSettings from "/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/5.x/page-builder/essentials/assets/website-settings/website-settings.mp4";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.79c9f1.json";

import _versions from "@/data/versions.ff7084.json";

const Layout = _Layout;
const pageData = {
  "title": "Website Settings",
  "description": "Learn how to manage website settings.",
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
  "title": "Step 1: Edit Basic Website Settings",
  "slug": "step-1-edit-basic-website-settings",
  "children": []
}, {
  "title": "Step 2: Edit Default Pages",
  "slug": "step-2-edit-default-pages",
  "children": []
}, {
  "title": "Step 3: Edit Favicon and Logo",
  "slug": "step-3-edit-favicon-and-logo",
  "children": []
}, {
  "title": "Step 4: Edit Social Media Links",
  "slug": "step-4-edit-social-media-links",
  "children": []
}, {
  "title": "Step 5: Edit HTML Tags",
  "slug": "step-5-edit-html-tags",
  "children": [{
    "title": "Header Tags",
    "slug": "header-tags",
    "children": []
  }, {
    "title": "Footer Tags",
    "slug": "footer-tags",
    "children": []
  }]
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
const Video = makeShortcode("Video");
const Editor = makeShortcode("Editor");
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
<li parentName="ul">{`how to edit website settings`}</li>
</ul>
</Alert>
<p>{`In this tutorial, we will learn how to manage website settings like website’s title, default home page, social media links, etc.`}</p>
<p>{`We will do this in 5 steps:`}</p>
<ul>
<li parentName="ul">{`Step 1: Edit basic website settings`}</li>
<li parentName="ul">{`Step 2: Edit default pages`}</li>
<li parentName="ul">{`Step 3: Edit favicon & logo`}</li>
<li parentName="ul">{`Step 4: Edit social media links`}</li>
<li parentName="ul">{`Step 5: Edit HTML tags`}</li>
</ul>
<Video src={websiteSettings} controls={true} mdxType="Video" />
<_Heading level={2} id={"step-1-edit-basic-website-settings"} nextElement={{
      "type": "paragraph"
    }}>Step 1: Edit Basic Website Settings</_Heading>
<p>{`In this step, we will edit the title of the website.`}</p>
<ol>
<li parentName="ol">
<p parentName="li">{`From the `}<strong parentName="p">{`Side Menu`}</strong>{`, click `}<strong parentName="p">{`Settings`}</strong>{` > `}<strong parentName="p">{`PAGE BUILDER`}</strong>{` > `}<strong parentName="p">{`Website`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Website Settings`}</strong>{` screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Under the `}<strong parentName="p">{`Website Settings`}</strong>{` section, in the `}<strong parentName="p">{`Website name`}</strong>{` textbox, update the text to `}<em parentName="p">{`your website’s title`}</em>{` (e.g. `}<strong parentName="p">{`Webiny`}</strong>{`).`}</p>
</li>
</ol>
<_Heading level={2} id={"step-2-edit-default-pages"} nextElement={{
      "type": "paragraph"
    }}>Step 2: Edit Default Pages</_Heading>
<p>{`In this step, we will edit the default `}<strong parentName="p">{`homepage`}</strong>{` and `}<strong parentName="p">{`not found (404) page`}</strong>{` of the website.`}</p>
<ol>
<li parentName="ol">
<p parentName="li">{`Under the `}<strong parentName="p">{`Default Pages`}</strong>{` section, in the `}<strong parentName="p">{`Homepage`}</strong>{` dropdown, select the page `}<em parentName="p">{`you want as the homepage`}</em>{` (e.g. `}<strong parentName="p">{`The benefits of a Serverless CMS`}</strong>{` - the page we created in the `}<_Link href="/docs/5.x/user-guides/page-builder/essentials/create-page">{`Create Page`}</_Link>{` tutorial).`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Under the `}<strong parentName="p">{`Default Pages`}</strong>{` section, in the `}<strong parentName="p">{`Not found (404) page`}</strong>{` dropdown, select the page `}<em parentName="p">{`you want to be displayed`}</em>{` when a user visits a path URL on your website that does not exist (e.g. `}<strong parentName="p">{`Not Found`}</strong>{`).`}</p>
</li>
</ol>
<_Heading level={2} id={"step-3-edit-favicon-and-logo"} nextElement={{
      "type": "paragraph"
    }}>Step 3: Edit Favicon and Logo</_Heading>
<p>{`In this step, we will edit the logo of the website.`}</p>
<ol>
<li parentName="ol">
<p parentName="li">{`Under the `}<strong parentName="p">{`Favicon and Logo`}</strong>{` section, click the `}<strong parentName="p">{`Logo`}</strong>{` image selector.`}</p>
<p parentName="li">{`✔️ The media manager screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click the image `}<em parentName="p">{`you want to set as the website’s logo`}</em>{` (or upload the image if it isn’t already uploaded).`}</p>
</li>
</ol>
<p>{`The other input field(s) in the `}<strong parentName="p">{`Favicon and Logo`}</strong>{` section have the following use cases:`}</p>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": "left"
          }}>{`Field`}</th>
<th parentName="tr" {...{
            "align": "left"
          }}>{`Use Case`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": "left"
          }}>{`Favicon`}</td>
<td parentName="tr" {...{
            "align": "left"
          }}>{`Selected icon will be displayed in the borwser’s tab or address bar when a user visits any page on your website`}</td>
</tr>
</tbody>
</table>
<_Heading level={2} id={"step-4-edit-social-media-links"} nextElement={{
      "type": "paragraph"
    }}>Step 4: Edit Social Media Links</_Heading>
<p>{`In this step, we will add a twiter profile’s link to the website.`}</p>
<ol>
<li parentName="ol">{`Under the `}<strong parentName="li">{`Social Media`}</strong>{` section, in the `}<strong parentName="li">{`Twitter`}</strong>{` textbox, type `}<em parentName="li">{`your twitter profile’s link`}</em>{` (e.g. `}<strong parentName="li"><a parentName="strong" {...{
            "href": "https://twitter.com/WebinyCMS"
          }}>{`https://twitter.com/WebinyCMS`}</a></strong>{`).`}</li>
</ol>
<p>{`The other input field(s) in the `}<strong parentName="p">{`Social Media`}</strong>{` section have the following use cases:`}</p>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": "left"
          }}>{`Field`}</th>
<th parentName="tr" {...{
            "align": "left"
          }}>{`Use Case`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": "left"
          }}>{`Facebook`}</td>
<td parentName="tr" {...{
            "align": "left"
          }}>{`Link to your Facebook page/profile`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": "left"
          }}>{`Instagram`}</td>
<td parentName="tr" {...{
            "align": "left"
          }}>{`Link to your Instagram profile`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": "left"
          }}>{`Default Open Graph Image`}</td>
<td parentName="tr" {...{
            "align": "left"
          }}>{`Selected image will be displayed as the preview image when a link of your website is shared over social media`}</td>
</tr>
</tbody>
</table>
<_Heading level={2} id={"step-5-edit-html-tags"} nextElement={{
      "type": "paragraph"
    }}>Step 5: Edit HTML Tags</_Heading>
<p>{`In this step, we will add an script tag in the header and footer of the website.`}</p>
<_Heading level={3} id={"header-tags"} nextElement={{
      "type": "list",
      "ordered": true,
      "start": 1,
      "spread": false
    }}>Header Tags</_Heading>
<ol>
<li parentName="ol">{`Under the `}<strong parentName="li">{`HTML Tags`}</strong>{` section, in the `}<strong parentName="li">{`Header tags`}</strong>{` text-area, type the following code:`}</li>
</ol>
<Editor title="" lang="null" mdxType="Editor">
{`<script>
  // Add your header scripts here
</script>`}
</Editor>
<p><strong parentName="p">{`Note:`}</strong>{` HTML tags and scripts that are added in `}<strong parentName="p">{`Header tags`}</strong>{` will be get added before
the closing `}<inlineCode parentName="p">{`</head>`}</inlineCode>{` tag in HTML.
In Header tags, the supported tags are `}<inlineCode parentName="p">{`<script>`}</inlineCode>{` and `}<inlineCode parentName="p">{`<meta>`}</inlineCode>{`.`}</p>
<_Heading level={3} id={"footer-tags"} nextElement={{
      "type": "list",
      "ordered": true,
      "start": 2,
      "spread": false
    }}>Footer Tags</_Heading>
<ol {...{
      "start": 2
    }}>
<li parentName="ol">{`Under the `}<strong parentName="li">{`HTML Tags`}</strong>{` section, in the `}<strong parentName="li">{`Footer tags`}</strong>{` text-area, type the following code:`}</li>
</ol>
<Editor title="" lang="null" mdxType="Editor">
{`<script>
  // Add your footer scripts here
</script>`}
</Editor>
<p><strong parentName="p">{`Note:`}</strong>{` HTML tags and scripts that are added in `}<strong parentName="p">{`Footer tags`}</strong>{` will be get added before
the closing `}<inlineCode parentName="p">{`</body>`}</inlineCode>{` tag in HTML.
In Footer tags, the supported tag is `}<inlineCode parentName="p">{`<script>`}</inlineCode>{`.`}</p>
<ol {...{
      "start": 3
    }}>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`SAVE`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The messagge “Settings updated successfully.” displays.`}</p>
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