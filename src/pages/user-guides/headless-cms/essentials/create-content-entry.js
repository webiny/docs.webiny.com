/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/6.0.x/headless-cms/essentials/assets/create-content-entry/content-entry-revision.png'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import createContentEntry from "/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/6.0.x/headless-cms/essentials/assets/create-content-entry/create-content-entry.mp4";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.9991ed.json";

import _versions from "@/data/versions.ff7084.json";

const Layout = _Layout;
const pageData = {
  "title": "Create Content Entry",
  "description": "Learn how to create a content entry in Headless CMS.",
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
  "title": "Prerequisites",
  "slug": "prerequisites",
  "children": []
}, {
  "title": "Create Content Entry",
  "slug": "create-content-entry",
  "children": []
}, {
  "title": "Additional Information",
  "slug": "additional-information",
  "children": [{
    "title": "Content Revision",
    "slug": "content-revision",
    "children": []
  }]
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
const Video = makeShortcode("Video");
const Image = makeShortcode("Image");
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
<li parentName="ul">{`how to create a content Entry`}</li>
</ul>
</Alert>
<p>{`In the previous tutorial, we learned how to create a `}<_Link href="/docs/user-guides/headless-cms/essentials/create-content-model">{`content model`}</_Link>{`, and
in this tutorial, we will explore how to create a `}<_Link href="/docs/user-guides/headless-cms/essentials/glossary#content-entry">{`content entry`}</_Link>{`.
As an example, we will create a `}<strong parentName="p">{`Product`}</strong>{` content entry with the following attributes:`}</p>
<table>
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
          }}>{`Relaxed Sweatshirt`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": "left"
          }}>{`Description`}</td>
<td parentName="tr" {...{
            "align": "left"
          }}>{`Top sweatshirt fabric made from a cotton blend`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": "left"
          }}>{`Price`}</td>
<td parentName="tr" {...{
            "align": "left"
          }}>{`10`}</td>
</tr>
</tbody>
</table>
<_Heading level={2} id={"prerequisites"} nextElement={{
      "type": "paragraph"
    }}>Prerequisites</_Heading>
<p>{`To create a content entry, the prerequisite is to have a content model.
If you don’t have any content model yet, please follow this `}<_Link href="/docs/user-guides/headless-cms/essentials/create-content-model">{`tutorial`}</_Link>{` to create a content model.`}</p>
<Video src={createContentEntry} controls={true} mdxType="Video" />
<_Heading level={2} id={"create-content-entry"} nextElement={{
      "type": "list",
      "ordered": true,
      "start": 1,
      "spread": false
    }}>Create Content Entry</_Heading>
<ol>
<li parentName="ol">
<p parentName="li">{`From the `}<strong parentName="p">{`Side Menu`}</strong>{`, Click `}<strong parentName="p">{`Content`}</strong>{` > `}<strong parentName="p">{`Ungrouped`}</strong>{` > `}<strong parentName="p">{`Product`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Product`}</strong>{` content *`}<strong parentName="p">{`*entry screen opens.
OR
From the `}</strong>{`Side Menu`}<strong parentName="p">{`, Click `}</strong>{`Content Modeling`}<strong parentName="p">{` > `}</strong>{`Models**.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Content Models`}</strong>{` screen opens.`}</p>
<ol parentName="li">
<li parentName="ol">{`Hover over the `}<strong parentName="li">{`Product`}</strong>{` content model.`}</li>
<li parentName="ol">{`Click `}<strong parentName="li">{`View entries`}</strong>{`.`}</li>
</ol>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`+ New Product`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`New Product`}</strong>{` entry screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Name`}</strong>{` textbox, type `}<strong parentName="p">{`Relaxed Sweatshirt`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Description`}</strong>{` textbox, type `}<strong parentName="p">{`Top sweatshirt fabric made from a cotton blend`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Price`}</strong>{` textbox, type `}<strong parentName="p">{`10`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`Save & Publish`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Publish Product`}</strong>{` confirmation screen appears. `}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`Yes, publish!`}</strong></p>
<p parentName="li">{`✔️ The message “Relaxed Sweatshirt was published successfully!” displays.`}</p>
</li>
</ol>
<p>{`Congratulations! You have created your first content entry.`}</p>
<_Heading level={2} id={"additional-information"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Additional Information</_Heading>
<_Heading level={3} id={"content-revision"} nextElement={{
      "type": "paragraph"
    }}>Content Revision</_Heading>
{`Every time you save any content entry, a new revision is created. You can see all the content revisions in the `}
<strong>{`REVISONS`}</strong>
{` tab.
`}
<Image src={_Image1} alt={"Content Entry Revision"} mdxType="Image" />
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;