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
  "title": "Custom Sorting",
  "description": "Learn how to create custom sorting for user defined models",
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
  "children": []
}, {
  "title": "Creating the New Sorter for the GraphQL Schema",
  "slug": "creating-the-new-sorter-for-the-graph-ql-schema",
  "children": []
}, {
  "title": "Creating the Sort Plugin to Handle New Custom Sorters",
  "slug": "creating-the-sort-plugin-to-handle-new-custom-sorters",
  "children": [{
    "title": "DynamoDB Systems",
    "slug": "dynamo-db-systems",
    "children": []
  }, {
    "title": "Elasticsearch Systems",
    "slug": "elasticsearch-systems",
    "children": []
  }]
}, {
  "title": "Conclusion",
  "slug": "conclusion",
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
<li parentName="ul">{`how to create custom sort enums`}</li>
<li parentName="ul">{`how to resolve custom sort in DynamoDB system`}</li>
<li parentName="ul">{`how to resolve custom sort in DynamoDB+Elasticsearch system`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "heading",
      "depth": 2
    }}>Overview</_Heading>
<_Heading level={2} id={"creating-the-new-sorter-for-the-graph-ql-schema"} nextElement={{
      "type": "paragraph"
    }}>Creating the New Sorter for the GraphQL Schema</_Heading>
<p>{`The first thing users need to do is to add a `}<inlineCode parentName="p">{`CmsEntryFieldSortingPlugin`}</inlineCode>{`:`}</p>
<Editor title="apps/api/headlessCms/src/plugins/customSorterPlugin.ts" lang="typescript" mdxType="Editor">
{`// there is a class and a function so users can use whatever suits their way of writing code
import {
  CmsGraphQLSchemaSorterPlugin,
  createCmsGraphQLSchemaSorterPlugin
} from "@webiny/api-headless-cms";

export const customSorterPlugin = createCmsGraphQLSchemaSorterPlugin(({ sorters, model }) => {
  // we only want to add the sorter when generating a certain model GraphQL Schema
  if (model.modelId !== "yourTargetModelId") {
    return sorters;
  }
  return [...sorters, "myCustomSorting_ASC", "myCustomSorting_DESC"];
});`}
</Editor>
<p>{`And then add the plugin into the plugins array of the `}<inlineCode parentName="p">{`createHandler()`}</inlineCode>{`:`}</p>
<Editor title="apps/api/headlessCms/src/index.ts" lang="typescript" mdxType="Editor">
{`const handler = createHandler({
  plugins: [
    // other plugins,
    customSorterPlugin
  ]
});`}
</Editor>
<_Heading level={2} id={"creating-the-sort-plugin-to-handle-new-custom-sorters"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Creating the Sort Plugin to Handle New Custom Sorters</_Heading>
<_Heading level={3} id={"dynamo-db-systems"} nextElement={{
      "type": "paragraph"
    }}>DynamoDB Systems</_Heading>
<p>{`As the sorting in the DynamoDB systems is basic, let’s show the example on how to sort via a nested object value:`}</p>
<Editor title="apps/api/headlessCms/src/plugins/yourCustomSortPlugin.ts" lang="typescript" mdxType="Editor">
{`// there is a class and a function so users can use whatever suits their way of writing code
import {
  CmsEntryFieldSortingPlugin,
  createCmsEntryFieldSortingPlugin
} from "@webiny/api-headless-cms-ddb";

const customSortingPlugin = createCmsEntryFieldSortingPlugin({
  canUse: ({ fieldId, model }) => {
    return model.modelId === "yourTargetModelId" && fieldId === "myCustomSorting";
  },
  createSort: ({ fields, order }) => {
    // let's find the field we want to sort by
    // you can find the field by joining all its parents fieldId + the fieldId you want to sort by via a dot (.)
    // this is the information user must know (possibly they can create a finder for the field)
    const fieldId = "nestedObject.anotherNestedObject.numberField"; // the fieldId is later on used in error report - if any
    const field = fields[fieldId];
    // we can create a field path via the built-in method
    const valuePath = field.createPath({
      field
    });
    // or manually
    // note that all entry values are stored in the values object - thats why it is in the beginning of the string
    const valuePath = \`values.nestedObject.anotherNestedObject.numberField\`;

    return {
      field,
      fieldId,
      valuePath,
      reverse: order === "DESC"
    };
  }
});`}
</Editor>
<p>{`And then add the plugin into the plugins array of the `}<inlineCode parentName="p">{`createHandler()`}</inlineCode>{`:`}</p>
<Editor title="apps/api/headlessCms/src/index.ts" lang="typescript" mdxType="Editor">
{`const handler = createHandler({
  plugins: [
    // other plugins,
    customSortingPlugin
  ]
});`}
</Editor>
<p>{`This plugin matches the `}<inlineCode parentName="p">{`myCustomSorting`}</inlineCode>{` value from `}<inlineCode parentName="p">{`myCustomSorting_ASC`}</inlineCode>{` and then it creates sort variables which are used in our built-in sorting, which uses `}<inlineCode parentName="p">{`lodash.orderBy`}</inlineCode>{` library.
Variables are:`}</p>
<ul>
<li parentName="ul">{`field - check out the `}<a parentName="li" {...{
          "href": "https://github.com/webiny/webiny-js/blob/59046097e7dc93bd9b256999a4056a31ceb0f2e9/packages/api-headless-cms-ddb/src/operations/entry/filtering/types.ts#L13"
        }}>{`interface`}</a></li>
<li parentName="ul">{`fieldId - full path to the field in the `}<inlineCode parentName="li">{`fields`}</inlineCode>{` object - it is used for error reporting if it happens`}</li>
<li parentName="ul">{`valuePath - full path to the field in the database record - it is used to get the value by which we are going to sort`}</li>
<li parentName="ul">{`reverse - in which order will the records go to the API response`}</li>
</ul>
<Alert type="warning" mdxType="Alert">
<p>{`Although we gave an example to sort by nested objects, please do not do that in production as it will get quite slow at some point.`}</p>
</Alert>
<_Heading level={3} id={"elasticsearch-systems"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": "apps/api/headlessCms/src/plugins/yourCustomSortPlugin.ts"
    }}>Elasticsearch Systems</_Heading>
<Editor title="apps/api/headlessCms/src/plugins/yourCustomSortPlugin.ts" lang="typescript" mdxType="Editor">
{`// there is a class and a function so users can use whatever suits their way of writing code
import {
  CmsEntryElasticsearchBodyModifierPlugin,
  createCmsEntryElasticsearchBodyModifierPlugin
} from "@webiny/api-headless-cms-ddb-es";

const customBodyModifier = createCmsEntryElasticsearchBodyModifierPlugin({
  modelId: "yourTargetModelId",
  modifyBody: ({ model, body, where }) => {
    // as we filter the models by setting the modelId in the plugin configuration there is no need to do it again
    // we need to check if there is a custom sorting in the body
    // we always generate a object sorting, so if there is no myCustomSorting key - there is no custom sorting
    if (!body.sort.myCustomSorting) {
      return;
    }
    body.sort = {
      _script: {
        type: "number",
        script: {
          lang: "painless",
          inline: "some script"
        },
        order: "asc"
      }
    };
  }
});`}
</Editor>
<p>{`And then add the plugin into the plugins array of the `}<inlineCode parentName="p">{`createHandler()`}</inlineCode>{`:`}</p>
<Editor title="apps/api/headlessCms/src/index.ts" lang="typescript" mdxType="Editor">
{`const handler = createHandler({
  plugins: [
    // other plugins,
    customBodyModifier
  ]
});`}
</Editor>
<p>{`With this plugin, we replace the sort completely as it would fail. There is no `}<inlineCode parentName="p">{`myCustomSorting`}</inlineCode>{` field and the Elasticsearch query would fail when it would hit the server.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`Note that we used the `}<inlineCode parentName="p">{`CmsEntryElasticsearchBodyModifierPlugin`}</inlineCode>{` in the example because we needed to replace whole `}<inlineCode parentName="p">{`sort`}</inlineCode>{` object on the `}<inlineCode parentName="p">{`body`}</inlineCode>{`. If you need to modify the sort (add or remove something), feel free to use the `}<inlineCode parentName="p">{`CmsEntryElasticsearchSortModifierPlugin`}</inlineCode>{`.`}</p>
</Alert>
<_Heading level={2} id={"conclusion"} nextElement={{
      "type": "paragraph"
    }}>Conclusion</_Heading>
<p>{`While custom sorters are a powerful functionality, use them carefully as it might degrade the system performance - especially in the DynamoDB systems.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;