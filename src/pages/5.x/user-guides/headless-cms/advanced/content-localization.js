/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import contentLocalization from "/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/5.x/headless-cms/advanced/assets/content-localization/content-localization.mp4";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.79c9f1.json";

import _versions from "@/data/versions.ff7084.json";

const Layout = _Layout;
const pageData = {
  "title": "Content Localization",
  "description": "Learn how to create a content model for multiple locales.",
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
  "title": "Step 1: Create and Select a New Locale",
  "slug": "step-1-create-and-select-a-new-locale",
  "children": []
}, {
  "title": "Step 2: Create a Content Model Group in the New Locale",
  "slug": "step-2-create-a-content-model-group-in-the-new-locale",
  "children": []
}, {
  "title": "Step 3: Clone a Content Model Into the New Locale",
  "slug": "step-3-clone-a-content-model-into-the-new-locale",
  "children": []
}, {
  "title": "Step 4: Create a Content Entry in the New Locale",
  "slug": "step-4-create-a-content-entry-in-the-new-locale",
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
<li parentName="ul">{`how to create a content model for multiple locales`}</li>
</ul>
</Alert>
<p>{`Webiny offers content localization that allows you to adapt your content to different languages by creating multiple locales.
It provides the flexibility to define distinct content schemas for various locales. This means that for each locale, you can create separate content model groups, content models, content entries, etc.`}</p>
<p>{`When you create a new locale, you get a clean slate in which you can create new content models, group, and entries. This gives you the flexibility to define variations of content models depending on your locales.`}</p>
<Video src={contentLocalization} controls={true} mdxType="Video" />
<p>{`In this tutorial, we will learn how to create a content model for multiple locales.
We will do this in 4 steps:`}</p>
<ul>
<li parentName="ul">{`Step 1: Create and select a new locale.`}</li>
<li parentName="ul">{`Step 2: Create a content model group in the new locale.`}</li>
<li parentName="ul">{`Step 3: Clone a content model into the new locale.`}</li>
<li parentName="ul">{`Step 4: Create a content entry in the new locale.`}</li>
</ul>
<_Heading level={2} id={"prerequisites"} nextElement={{
      "type": "paragraph"
    }}>Prerequisites</_Heading>
<p>{`To follow this tutorial, you need the `}<strong parentName="p">{`Product`}</strong>{` content model to clone it.
If you don’t have the `}<strong parentName="p">{`Product`}</strong>{` content model, please follow the `}<_Link href="/docs/5.x/user-guides/headless-cms/essentials/create-content-model">{`Create Content Model`}</_Link>{` tutorial to create it.`}</p>
<_Heading level={2} id={"step-1-create-and-select-a-new-locale"} nextElement={{
      "type": "paragraph"
    }}>Step 1: Create and Select a New Locale</_Heading>
<p>{`We will create a new locale for the `}<strong parentName="p">{`Italic`}</strong>{` language.`}</p>
<ol>
<li parentName="ol">
<p parentName="li">{`From the `}<strong parentName="p">{`Side Menu`}</strong>{`, Click `}<strong parentName="p">{`Settings`}</strong>{` > `}<strong parentName="p">{`LANGUAGES`}</strong>{` > `}<strong parentName="p">{`Locales`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`+ NEW LOCALE`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`New locale`}</strong>{` section opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Code`}</strong>{` dropdown, type `}<strong parentName="p">{`it`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the available options in the dropdown, click `}<strong parentName="p">{`it-IT`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`SAVE LOCALE`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click on the `}<strong parentName="p">{`LOCALE`}</strong>{` dropdown in the header section and select `}<strong parentName="p">{`it-IT`}</strong>{` to switch to the Italian locale.`}</p>
</li>
</ol>
<_Heading level={2} id={"step-2-create-a-content-model-group-in-the-new-locale"} nextElement={{
      "type": "paragraph"
    }}>Step 2: Create a Content Model Group in the New Locale</_Heading>
<p>{`If you are not familiar with how to create a content model group, please follow the `}<_Link href="/docs/5.x/user-guides/headless-cms/essentials/create-content-model-group">{`Create Content Model Group`}</_Link>{` tutorial.`}</p>
<ol>
<li parentName="ol">
<p parentName="li">{`Create a content model group with the following attributes in the `}<strong parentName="p">{`it-IT`}</strong>{` locale:`}</p>
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
              }}><strong parentName="td">{`Commercio Elettronico`}</strong></td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
                "align": "left"
              }}>{`Group icon`}</td>
<td parentName="tr" {...{
                "align": "left"
              }}>{`🛒`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
                "align": "left"
              }}>{`Description`}</td>
<td parentName="tr" {...{
                "align": "left"
              }}><strong parentName="td">{`Gruppo di modelli di e-commerce`}</strong></td>
</tr>
</tbody>
</table>
</li>
</ol>
<_Heading level={2} id={"step-3-clone-a-content-model-into-the-new-locale"} nextElement={{
      "type": "paragraph"
    }}>Step 3: Clone a Content Model Into the New Locale</_Heading>
<p>{`There are a couple of ways to create a content model in a locale. You can either `}<_Link href="/docs/5.x/user-guides/headless-cms/essentials/create-content-model">{`create a content model`}</_Link>{` from scratch, or you can clone it from another locale. In this step, we will clone the `}<strong parentName="p">{`Product`}</strong>{` content model from the `}<strong parentName="p">{`en-US`}</strong>{` locale into the `}<strong parentName="p">{`it-IT`}</strong>{` locale. We will update the clone content model’s attributes with the following values:`}</p>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": "left"
          }}>{`Attribute`}</th>
<th parentName="tr" {...{
            "align": "left"
          }}>{`Values`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": "left"
          }}>{`Name`}</td>
<td parentName="tr" {...{
            "align": "left"
          }}><strong parentName="td">{`Prodotto`}</strong></td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": "left"
          }}>{`Group`}</td>
<td parentName="tr" {...{
            "align": "left"
          }}><strong parentName="td">{`Commercio Elettronico`}</strong></td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": "left"
          }}>{`Description`}</td>
<td parentName="tr" {...{
            "align": "left"
          }}><strong parentName="td">{`Modello di contenuto del prodotto demo`}</strong></td>
</tr>
</tbody>
</table>
<ol>
<li parentName="ol">
<p parentName="li">{`Click on the `}<strong parentName="p">{`LOCALE`}</strong>{` dropdown in the header section and select `}<strong parentName="p">{`en-US`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`From the `}<strong parentName="p">{`Side Menu`}</strong>{`, Click `}<strong parentName="p">{`Headless CMS`}</strong>{` > `}<strong parentName="p">{`Models`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Hover on the `}<strong parentName="p">{`Product`}</strong>{` content model.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click the `}<strong parentName="p">{`CLONE CONTENT MODEL`}</strong>{` icon.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Clone Content Model`}</strong>{` screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Content model locale`}</strong>{` dropdown, click `}<strong parentName="p">{`it-IT`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Name`}</strong>{` textbox, update the text to `}<strong parentName="p">{`Prodotto`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Content model group`}</strong>{` dropdown, click `}<strong parentName="p">{`Commercio Elettronico`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Description`}</strong>{` textbox, update the text to `}<strong parentName="p">{`Modello di contenuto del prodotto demo`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`+ CLONE`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Update the labels of the fields of the `}<strong parentName="p">{`Prodotto`}</strong>{` content model with the following values:`}</p>
<table parentName="li">
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
                "align": "left"
              }}>{`Old Label`}</th>
<th parentName="tr" {...{
                "align": "left"
              }}>{`New Label`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
                "align": "left"
              }}>{`Name`}</td>
<td parentName="tr" {...{
                "align": "left"
              }}><strong parentName="td">{`Nome`}</strong></td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
                "align": "left"
              }}>{`Description`}</td>
<td parentName="tr" {...{
                "align": "left"
              }}><strong parentName="td">{`Descrizione`}</strong></td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
                "align": "left"
              }}>{`Price`}</td>
<td parentName="tr" {...{
                "align": "left"
              }}><strong parentName="td">{`Prezzo`}</strong></td>
</tr>
</tbody>
</table>
</li>
</ol>
<_Heading level={2} id={"step-4-create-a-content-entry-in-the-new-locale"} nextElement={{
      "type": "paragraph"
    }}>Step 4: Create a Content Entry in the New Locale</_Heading>
<p>{`If you are not familiar with how to create a content entry, please follow the `}<_Link href="/docs/5.x/user-guides/headless-cms/essentials/create-content-entry">{`Create Content Entry`}</_Link>{` tutorial.`}</p>
<ol>
<li parentName="ol">
<p parentName="li">{`Add a content entry in the `}<strong parentName="p">{`Prodotto`}</strong>{` content model with the following attributes:`}</p>
<table parentName="li">
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
                "align": "left"
              }}>{`Attribute`}</th>
<th parentName="tr" {...{
                "align": "left"
              }}>{`Values`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
                "align": "left"
              }}>{`Nome`}</td>
<td parentName="tr" {...{
                "align": "left"
              }}><strong parentName="td">{`Allegra K Abito Shift Abito Shift Donna`}</strong></td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
                "align": "left"
              }}>{`Descrizione`}</td>
<td parentName="tr" {...{
                "align": "left"
              }}><strong parentName="td">{`Girocollo increspato, manica del braccialetto, polsini elastici, chiusura a bottone posteriore, foro della serratura posteriore, completamente foderato, mini abito`}</strong></td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
                "align": "left"
              }}>{`Prezzo`}</td>
<td parentName="tr" {...{
                "align": "left"
              }}><strong parentName="td">{`55`}</strong></td>
</tr>
</tbody>
</table>
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