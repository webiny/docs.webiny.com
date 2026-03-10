/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "CMS Model Plugin Storage Id Field Property",
  "description": "Learn About CMS Model Plugin Field Definition StorageId Property",
  "type": "docs",
  "showPageHeader": true,
  "fullWidth": false,
  "version": "5.x"
};
const docsearch = {
  "type": "docs",
  "weight": 100,
  "versions": ["5.x"]
};
const navigation = _navigation;
const versions = _versions;
const tableOfContents = [{
  "title": "Overview",
  "slug": "overview",
  "children": [{
    "title": "What Is the Storage ID Used For?",
    "slug": "what-is-the-storage-id-used-for",
    "children": []
  }, {
    "title": "How Is the Storage ID Generated?",
    "slug": "how-is-the-storage-id-generated",
    "children": []
  }, {
    "title": "Do I Need to Define the storageId When Defining the CMS Model Plugin?",
    "slug": "do-i-need-to-define-the-storage-id-when-defining-the-cms-model-plugin",
    "children": []
  }, {
    "title": "But What if I Have Already Defined the storageId Property Value?",
    "slug": "but-what-if-i-have-already-defined-the-storage-id-property-value",
    "children": []
  }]
}, {
  "title": "Upgrading CMS Model Plugin Definitions",
  "slug": "upgrading-cms-model-plugin-definitions",
  "children": []
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
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



<Alert type="success" title="What you'll learn" mdxType="Alert">
<ul>
<li parentName="ul">{`what is the `}<inlineCode parentName="li">{`storageId`}</inlineCode>{` field property`}</li>
<li parentName="ul">{`how to upgrade existing CMS Model field definition`}</li>
</ul>
</Alert>
<Alert type="info" title="Can I use this?" mdxType="Alert">
<p>{`If you created your project with Webiny `}<strong parentName="p">{`v5.33.0`}</strong>{` or later, you can skip the upgrade part of the article.`}</p>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`As we introduced CMS Model Field aliases in v5.33.0, we introduced a new property on our CMS Model Field definitions, the `}<inlineCode parentName="p">{`Storage ID`}</inlineCode>{` (`}<inlineCode parentName="p">{`storageId`}</inlineCode>{`) property.`}</p>
<_Heading level={3} id={"what-is-the-storage-id-used-for"} nextElement={{
      "type": "paragraph"
    }}>What Is the<code>Storage ID</code>Used For?</_Heading>
<p>{`We use it as the storage path for the given field value in the record. As `}<inlineCode parentName="p">{`fieldId`}</inlineCode>{` is now changeable, we cannot store values by the `}<inlineCode parentName="p">{`fieldId`}</inlineCode>{` value because it would result in the data loss each time the `}<inlineCode parentName="p">{`fieldId`}</inlineCode>{` value has changed.`}</p>
<_Heading level={3} id={"how-is-the-storage-id-generated"} nextElement={{
      "type": "paragraph"
    }}>How Is the<code>Storage ID</code>Generated?</_Heading>
<p>{`The `}<inlineCode parentName="p">{`Storage ID`}</inlineCode>{` field comprises out of the field `}<inlineCode parentName="p">{`type`}</inlineCode>{` property (`}<inlineCode parentName="p">{`text`}</inlineCode>{`, `}<inlineCode parentName="p">{`number`}</inlineCode>{`, `}<inlineCode parentName="p">{`object`}</inlineCode>{`, etc…) and the `}<inlineCode parentName="p">{`id`}</inlineCode>{` property, which is generated via the `}<inlineCode parentName="p">{`nanoid`}</inlineCode>{` library.`}</p>
<p>{`Here are few examples how the `}<inlineCode parentName="p">{`storageId`}</inlineCode>{` property value looks like this:`}</p>
<ul>
<li parentName="ul"><inlineCode parentName="li">{`text@gbureq32f`}</inlineCode></li>
<li parentName="ul"><inlineCode parentName="li">{`object@cbare1kaf`}</inlineCode></li>
</ul>
<p>{`We are basically joining the field `}<inlineCode parentName="p">{`type`}</inlineCode>{` and the `}<inlineCode parentName="p">{`id`}</inlineCode>{` properties, because it makes it easier to target the specific field types with custom mappings in the Elasticsearch system deployment.`}</p>
<p>{`The `}<inlineCode parentName="p">{`storageId`}</inlineCode>{` value should never change, no matter what - you will lose data otherwise.`}</p>
<_Heading level={3} id={"do-i-need-to-define-the-storage-id-when-defining-the-cms-model-plugin"} nextElement={{
      "type": "paragraph"
    }}>Do I Need to Define the<code>storageId</code>When Defining the CMS Model Plugin?</_Heading>
<p>{`Simply, no, you should not define the `}<inlineCode parentName="p">{`storageId`}</inlineCode>{` property as we generate that value automatically.`}</p>
<_Heading level={3} id={"but-what-if-i-have-already-defined-the-storage-id-property-value"} nextElement={{
      "type": "paragraph"
    }}>But What if I Have Already Defined the<code>storageId</code>Property Value?</_Heading>
<p>{`If you have data in that field, and you change the property value, you will lose all the data in it.`}</p>
<_Heading level={2} id={"upgrading-cms-model-plugin-definitions"} nextElement={{
      "type": "jsx"
    }}>Upgrading CMS Model Plugin Definitions</_Heading>
<Alert type="info" mdxType="Alert">
  If your CMS Model plugins were created with v5.33.0 or later, you can skip this part.
</Alert>
<p>{`For the existing definitions, prior to the v5.33.0, of the `}<inlineCode parentName="p">{`CmsModelPlugin`}</inlineCode>{` you `}<strong parentName="p">{`MUST`}</strong>{` add the `}<inlineCode parentName="p">{`storageId`}</inlineCode>{` property to every field you have defined.
We create a `}<inlineCode parentName="p">{`storageId`}</inlineCode>{` automatically, but for your existing models you want to have the `}<inlineCode parentName="p">{`storageId`}</inlineCode>{` values set to the existing `}<inlineCode parentName="p">{`fieldId`}</inlineCode>{` value.`}</p>
<p>{`So, for example, if you have a model defined:`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { CmsModelPlugin } from "@webiny/api-headless-cms";

const myModel = new CmsModelPlugin({
  modelId: "myModel",
  fields: [
    {
      id: "id",
      type: "number",
      fieldId: "id",
      label: "ID",
      settings: {}
    },
    {
      id: "title",
      type: "text",
      fieldId: "title",
      label: "Title",
      settings: {}
    },
    {
      id: "myObjectField",
      type: "object",
      fieldId: "myObjectField",
      label: "My Object Field",
      settings: {
        fields: [
          {
            id: "date",
            type: "datetime",
            fieldId: "date",
            label: "Date",
            settings: {
              type: "date"
            }
          }
        ]
      }
    }
  ],
  layout: [],
  group: {
    id: "group",
    name: "Group"
  },
  name: "My Model",
  description: "",
  titleFieldId: "title"
});`}
</Editor>
<p>{`You will need to add the `}<inlineCode parentName="p">{`storageId`}</inlineCode>{` property to each of the fields. Don’t forget the nested fields in the `}<inlineCode parentName="p">{`object`}</inlineCode>{` type field.`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { CmsModelPlugin } from "@webiny/api-headless-cms";

new CmsModelPlugin({
  modelId: "myModel",
  fields: [
    {
      id: "id",
      type: "number",
      fieldId: "id",
      label: "ID",
      storageId: "id", // <-- MUST be set to "id"
      settings: {}
    },
    {
      id: "title",
      type: "text",
      fieldId: "title",
      label: "Title",
      storageId: "title", // <-- MUST be set to "title"
      settings: {}
    },
    {
      id: "myObjectField",
      type: "object",
      fieldId: "myObjectField",
      label: "My Object Field",
      storageId: "myObjectField", // <-- MUST be set to "myObjectField"
      settings: {
        fields: [
          {
            id: "date",
            type: "datetime",
            fieldId: "date",
            label: "Date",
            storageId: "date", // <-- MUST be set to "date"
            settings: {
              type: "date"
            }
          }
        ]
      }
    }
  ],
  layout: [],
  group: {
    id: "group",
    name: "Group"
  },
  name: "My Model",
  description: "",
  titleFieldId: "title"
});`}
</Editor>
<p>{`If you forget to do this after the upgrade to the v5.33.0, you will not get any data back from your queries.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;