/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import seoSocialSettings from "/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/5.x/page-builder/essentials/assets/seo-and-social-sharing/seo-social-sharing-settings.mp4";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.79c9f1.json";

import _versions from "@/data/versions.ff7084.json";

const Layout = _Layout;
const pageData = {
  "title": "SEO and Social Sharing",
  "description": "Learn how to edit SEO and social sharing settings of a page.",
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
  "title": "Step 1: Edit Social Sharing Settings",
  "slug": "step-1-edit-social-sharing-settings",
  "children": []
}, {
  "title": "Step 2: Edit SEO Settings",
  "slug": "step-2-edit-seo-settings",
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
<li parentName="ul">{`how to edit social sharing settings of a page`}</li>
<li parentName="ul">{`how to edit SEO settings of a page`}</li>
</ul>
</Alert>
<p>{`In this tutorial, we will learn how to edit SEO and social sharing settings of a page. We will do this in 2 steps:`}</p>
<ul>
<li parentName="ul">{`Step 1: Edit social sharing settings`}</li>
<li parentName="ul">{`Step 2: Edit SEO settings`}</li>
</ul>
<Video src={seoSocialSettings} controls={true} mdxType="Video" />
<_Heading level={2} id={"prerequisites"} nextElement={{
      "type": "paragraph"
    }}>Prerequisites</_Heading>
<p>{`To follow this tutorial you need the `}<strong parentName="p">{`The benefits of a Serverless CMS`}</strong>{` page. If you haven’t created this page, please follow the `}<_Link href="/docs/5.x/user-guides/page-builder/essentials/create-page">{`Create Page`}</_Link>{` tutorial to create it.`}</p>
<_Heading level={2} id={"step-1-edit-social-sharing-settings"} nextElement={{
      "type": "list",
      "ordered": true,
      "start": 1,
      "spread": true
    }}>Step 1: Edit Social Sharing Settings</_Heading>
<ol>
<li parentName="ol">
<p parentName="li">{`From the `}<strong parentName="p">{`Side Menu`}</strong>{`, click `}<strong parentName="p">{`Page Builder`}</strong>{` > `}<strong parentName="p">{`PAGES`}</strong>{` > `}<strong parentName="p">{`Pages`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Pages`}</strong>{` screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click the `}<strong parentName="p">{`The benefits of a Serverless CMS`}</strong>{` list item in the list of pages.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`PAGE PREVIEW`}</strong>{` tab opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`PAGE PREVIEW`}</strong>{` tab, click the `}<strong parentName="p">{`EDIT`}</strong>{` icon (✏️).`}</p>
<p parentName="li">{`✔️ The page editor screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click the `}<strong parentName="p">{`SETTINGS`}</strong>{` icon (⚙️).`}</p>
<p parentName="li">{`✔️ The Page Settings screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click the `}<strong parentName="p">{`Social media`}</strong>{` tab.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Social Media`}</strong>{` settings screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Title`}</strong>{` textbox, type `}<strong parentName="p">{`What are the benefits of a Serverless CMS`}</strong>{`.`}</p>
<p parentName="li"><strong parentName="p">{`Note`}</strong>{`: This text will be displayed as the page’s title when its link is shared over social media.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Description`}</strong>{` textbox, type `}<strong parentName="p">{`Increases business resiliency | Reduces infrastructure spend`}</strong>{`.`}</p>
<p parentName="li"><strong parentName="p">{`Note`}</strong>{`: This text will be displayed as the page’s description when its link is shared over social media.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Social Image`}</strong>{` image selector, select the image `}<em parentName="p">{`you want to be displayed as the page’s thumbnail`}</em>{` when its link is shared over social media.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`SAVE SETTINGS`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The page editor screen opens with the message “Settings saved!“.`}</p>
</li>
</ol>
<_Heading level={2} id={"step-2-edit-seo-settings"} nextElement={{
      "type": "list",
      "ordered": true,
      "start": 1,
      "spread": true
    }}>Step 2: Edit SEO Settings</_Heading>
<ol>
<li parentName="ol">
<p parentName="li">{`Click the `}<strong parentName="p">{`SETTINGS`}</strong>{` icon (⚙️).`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Page Settings`}</strong>{` screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click the `}<strong parentName="p">{`SEO`}</strong>{` tab.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`SEO Media`}</strong>{` settings screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Title`}</strong>{` textbox, type `}<strong parentName="p">{`The benefits of a Serverless CMS`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Description`}</strong>{` textbox, type `}<strong parentName="p">{`Increases business resiliency | Reduces infrastructure spend`}</strong>{`.`}</p>
</li>
</ol>
<p><strong parentName="p">{`Note`}</strong>{`: The SEO Title and SEO Description correspond to the Title tag and Meta Description tag of HTML respectively. The purpose of these tags is to inform search engines like Google about the information contained in your web page. The SEO Title and SEO Description of a page shows up on the search results page of a browser when user makes a search query.`}</p>
<ol {...{
      "start": 5
    }}>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`SAVE SETTINGS`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The page editor screen opens with the message “Settings saved!“.`}</p>
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