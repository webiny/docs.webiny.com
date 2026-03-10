/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image3 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/6.0.x/headless-cms/essentials/assets/glossary/product-content-entries.png'
import _Image2 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/6.0.x/headless-cms/essentials/assets/glossary/product-content-model.png'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/6.0.x/headless-cms/essentials/assets/glossary/content-model.svg'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.9991ed.json";

import _versions from "@/data/versions.ff7084.json";

const Layout = _Layout;
const pageData = {
  "title": "Headless CMS Glossary",
  "description": "Learn about the Headless CMS terminologies.",
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
  "title": "Content Model",
  "slug": "content-model",
  "children": []
}, {
  "title": "Field / Field Type",
  "slug": "field-field-type",
  "children": []
}, {
  "title": "Content Entry",
  "slug": "content-entry",
  "children": []
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
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
<li parentName="ul">{`Headless CMS terminologies, and their meanings.`}</li>
</ul>
</Alert>
<_Heading level={2} id={"content-model"} nextElement={{
      "type": "paragraph"
    }}>Content Model</_Heading>
<p>{`The first step to storing information in a Headless CMS is to create your content model.
If you’re new to the Headless CMS world, this term may be unfamiliar to you, but it’s simple to understand.`}</p>
<Image src={_Image1} alt={"Content Model"} mdxType="Image" />
<p>{`Let’s understand the content model with an example.
Let’s say you want to store all the products in your shop in a CMS. As a first step, you will need to define all the
product attributes and their types. For example, a product may have the following attributes (`}<a parentName="p" {...{
        "href": "#field-field-type"
      }}>{`fields`}</a>{`):`}</p>
<ul>
<li parentName="ul">{`Name (Text Type)`}</li>
<li parentName="ul">{`Description (Long Text)`}</li>
<li parentName="ul">{`Price (Number)`}</li>
</ul>
<p>{`The collection of these attributes (fields) will be referred to as the “content model.”`}<br parentName="p"></br>{`
`}{`As per the example above, the Product content model will have three fields: name, description,
and price, with field types of text, long text, and number, respectively.`}<br parentName="p"></br>{`
`}{`Below is the actual screenshot of the Webiny user interface for a content model.`}</p>
<Image src={_Image2} alt={"Product Content Model (Webiny User Interface)"} mdxType="Image" />
<_Heading level={2} id={"field-field-type"} nextElement={{
      "type": "paragraph"
    }}>Field / Field Type</_Heading>
<p>{`As mentioned in the content model section, every content model is a collection of fields, and each field has a type.
The field type defines the kind of content you want to store. Webiny supports the following field types:`}</p>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": "left"
          }}>{`Field Type`}</th>
<th parentName="tr" {...{
            "align": "left"
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": "left"
          }}><inlineCode parentName="td">{`Text`}</inlineCode></td>
<td parentName="tr" {...{
            "align": "left"
          }}>{`Titles, names, single line values.`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": "left"
          }}><inlineCode parentName="td">{`Long text`}</inlineCode></td>
<td parentName="tr" {...{
            "align": "left"
          }}>{`Long comments, notes, multi line values.`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": "left"
          }}><inlineCode parentName="td">{`Rich text`}</inlineCode></td>
<td parentName="tr" {...{
            "align": "left"
          }}>{`Text formatting with references and media.`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": "left"
          }}><inlineCode parentName="td">{`Number`}</inlineCode></td>
<td parentName="tr" {...{
            "align": "left"
          }}>{`Store numbers.`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": "left"
          }}><inlineCode parentName="td">{`Boolean`}</inlineCode></td>
<td parentName="tr" {...{
            "align": "left"
          }}>{`Store boolean (“yes” or “no” ) values.`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": "left"
          }}><inlineCode parentName="td">{`Date/Time`}</inlineCode></td>
<td parentName="tr" {...{
            "align": "left"
          }}>{`Store date and time.`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": "left"
          }}><inlineCode parentName="td">{`Files`}</inlineCode></td>
<td parentName="tr" {...{
            "align": "left"
          }}>{`Images, videos and other files.`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": "left"
          }}><inlineCode parentName="td">{`Reference`}</inlineCode></td>
<td parentName="tr" {...{
            "align": "left"
          }}>{`Reference existing content entries. For example, a book can reference one or more authors.`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": "left"
          }}><inlineCode parentName="td">{`Object`}</inlineCode></td>
<td parentName="tr" {...{
            "align": "left"
          }}>{`Store nested data structures.`}</td>
</tr>
</tbody>
</table>
<_Heading level={2} id={"content-entry"} nextElement={{
      "type": "paragraph"
    }}>Content Entry</_Heading>
<p>{`Each record that you store in the content model is a content entry. For example, a new product record
created with the following information is a content entry.`}</p>
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
<p>{`This one record is a content entry, and each content model will contain multiple content entries.`}</p>
<Image src={_Image3} alt={"Content Entry"} mdxType="Image" />
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;