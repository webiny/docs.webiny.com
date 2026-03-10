/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image3 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/extending/assets/custom-field-type/encrypted-text.gif'
import _Image2 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/extending/assets/custom-field-type/field-renderer.png'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/extending/assets/custom-field-type/field-definition.png'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Create a Custom Field Type",
  "description": "Create a Webiny Headless CMS Custom Field Plugin.",
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
  "title": "Plugins",
  "slug": "plugins",
  "children": [{
    "title": "Field Type Plugin",
    "slug": "field-type-plugin",
    "children": []
  }, {
    "title": "Field Renderer Plugin",
    "slug": "field-renderer-plugin",
    "children": []
  }, {
    "title": "Field to GraphQL Plugin",
    "slug": "field-to-graph-ql-plugin",
    "children": []
  }]
}, {
  "title": "Storage Transformations",
  "slug": "storage-transformations",
  "children": []
}, {
  "title": "Bonus Step - Elasticsearch Data Transformations",
  "slug": "bonus-step-elasticsearch-data-transformations",
  "children": []
}, {
  "title": "FAQ",
  "slug": "faq",
  "children": [{
    "title": "How to Create a Read-Only Text Input Field in Headless CMS?",
    "slug": "how-to-create-a-read-only-text-input-field-in-headless-cms",
    "children": []
  }]
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
const Editor = makeShortcode("Editor");
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






<Alert type="success" title="What you'll learn" mdxType="Alert">
<ul>
<li parentName="ul">{`how to create a new content model field plugin`}</li>
<li parentName="ul">{`how a plugin stores and retrieves data`}</li>
</ul>
</Alert>
<Alert type="info" mdxType="Alert">
<p>{`The complete code of this tutorial can also be found in our `}<a parentName="p" {...{
          "href": "https://github.com/webiny/webiny-examples/tree/master/headless-cms/custom-field-plugin"
        }}>{`GitHub examples repository`}</a>{`.`}</p>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`Webiny Headless CMS comes with a predefined set of content model fields. But, you can also create your own custom fields, to expand the built-in functionality. In this tutorial, we’ll learn the anatomy of a Headless CMS field, and, as an example, create a custom field plugin to store encrypted data into the database, and decrypt it after retrieving it from the database.`}</p>
<_Heading level={2} id={"plugins"} nextElement={{
      "type": "paragraph"
    }}>Plugins</_Heading>
<p>{`Plugins are a vital part of Webiny, and the majority of Webiny’s functionality lives in plugins.`}</p>
<p>{`We will create our custom field with the help of plugins. Plugins will construct every part of the custom field i.e. we will create a plugin to list our new field in the fields list, another plugin to render the field, another one to store and retrieve data.`}</p>
<p>{`Webiny has five plugin types to create a custom CMS field. Out of these, three are mandatory, and two are optional.
Let’s briefly discuss these plugin types in this section, and in the further sections, we will see them in action.`}</p>
<ol>
<li parentName="ol">
<p parentName="li"><strong parentName="p"><a parentName="strong" {...{
              "href": "https://github.com/webiny/webiny-js/blob/83d6ff5be8de91cef9aca63ead199a8c00283957/packages/app-headless-cms/src/types.ts#L13"
            }}><inlineCode parentName="a">{`CmsEditorFieldTypePlugin`}</inlineCode></a></strong>{` is used to define the field and is responsible for showing the field in the fields list, within the content model editor UI.`}</p>
</li>
<li parentName="ol">
<p parentName="li"><strong parentName="p"><a parentName="strong" {...{
              "href": "https://github.com/webiny/webiny-js/blob/83d6ff5be8de91cef9aca63ead199a8c00283957/packages/app-headless-cms/src/types.ts#L166"
            }}><inlineCode parentName="a">{`CmsEditorFieldRendererPlugin`}</inlineCode></a></strong>{` is responsible for rendering of the field in the content entry form (when you’re creating the actual content).`}</p>
</li>
<li parentName="ol">
<p parentName="li"><strong parentName="p"><a parentName="strong" {...{
              "href": "https://github.com/webiny/webiny-js/blob/83d6ff5be8de91cef9aca63ead199a8c00283957/packages/api-headless-cms/src/types.ts#L383"
            }}><inlineCode parentName="a">{`CmsModelFieldToGraphQLPlugin`}</inlineCode></a></strong>{` is used to define the field in the GraphQL API. It is responsible for defining field’s schema types, inputs, resolvers, etc.`}</p>
<p parentName="li">{`The three plugin types we covered above are `}<strong parentName="p">{`mandatory`}</strong>{` to create a custom field, and the following two are `}<strong parentName="p">{`optional`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li"><strong parentName="p"><a parentName="strong" {...{
              "href": "https://github.com/webiny/webiny-js/blob/83d6ff5be8de91cef9aca63ead199a8c00283957/packages/api-headless-cms/src/types.ts#L1595"
            }}><inlineCode parentName="a">{`CmsModelFieldToStoragePlugin`}</inlineCode></a></strong>{` handles storage transformations, i.e. you can modify the data before passing it to your storage layer, and also manipulate it after retrieval. In this tutorial, we will encrypt and decrypt our field data using this plugin type.`}</p>
</li>
<li parentName="ol">
<p parentName="li"><strong parentName="p"><a parentName="strong" {...{
              "href": "https://github.com/webiny/webiny-js/blob/731966ba13e6d9c5c82828a89e0e9ef7d4a0a27d/packages/api-headless-cms-ddb-es/src/types.ts#L182"
            }}><inlineCode parentName="a">{`CmsModelFieldToElasticSearchPlugin`}</inlineCode></a></strong>{` defines transformations to run on a field with Elasticsearch interaction i.e. you can execute the transformations before and after you interact with the Elasticsearch index. Often, data stored to Elasticsearch is not stored in its original form, and requires some preparation to be properly indexed, or even excluded from indexing. This plugin gives you full control over how you store and retrieve data to, and from Elasticsearch.`}</p>
</li>
</ol>
<hr></hr>
<p>{`Now, let’s start building our custom field and see these plugins in action.
We will name the new custom field `}<strong parentName="p">{`Secret Text`}</strong>{`, as we’ll be storing the text value as an encrypted string.`}</p>
<_Heading level={3} id={"field-type-plugin"} nextElement={{
      "type": "paragraph"
    }}>Field Type Plugin</_Heading>
<p>{`We will start by creating a field type plugin (`}<inlineCode parentName="p">{`CmsEditorFieldTypePlugin`}</inlineCode>{`) to define the field and to show it in the field list in the content model editor.`}</p>
<ol>
<li parentName="ol">{`Create `}<inlineCode parentName="li">{`fields/secretText`}</inlineCode>{` directory in `}<inlineCode parentName="li">{`apps/admin/src/plugins/headlessCMS`}</inlineCode>{`.`}</li>
<li parentName="ol">{`Create a file `}<a parentName="li" {...{
          "href": "https://github.com/webiny/webiny-examples/blob/master/headless-cms/custom-field-plugin/ui/secretTextFieldPlugin.tsx"
        }}><inlineCode parentName="a">{`secretTextFieldPlugin.tsx`}</inlineCode></a>{` in the newly created directory.`}</li>
</ol>
<Editor title="apps/admin/src/plugins/headlessCMS/fields/secretText/secretTextFieldPlugin.tsx" lang="ts" mdxType="Editor">
{`import React from "react";
import { CmsEditorFieldTypePlugin } from "@webiny/app-headless-cms/types";

const TextIcon: React.FunctionComponent = () => <i>icon</i>;

const plugin: CmsEditorFieldTypePlugin = {
  type: "cms-editor-field-type",
  name: "cms-editor-field-type-secret-text",
  field: {
    type: "secret-text",
    label: "Secret Text",
    description: "Store encrypted text into the database.",
    icon: <TextIcon />,
    allowMultipleValues: false,
    allowPredefinedValues: false,
    multipleValuesLabel: "Use as a list of text values",
    createField() {
      return {
        type: "secret-text",
        validation: [],
        renderer: {
          name: ""
        }
      };
    }
  }
};

export default plugin;`}
</Editor>
<ol {...{
      "start": 3
    }}>
<li parentName="ol">{`Import this new plugin in `}<inlineCode parentName="li">{`apps/admin/src/plugins/headlessCms.ts`}</inlineCode>{`.`}</li>
</ol>
<Editor title="apps/admin/src/plugins/headlessCms.ts" lang="diff-js" mdxType="Editor">
{`  (...)
  import richTextEditor from "./headlessCMS/richTextEditor";

  // Import the \`secretTextFieldPlugin\` plugin
+ import secretTextFieldPlugin from "./headlessCMS/fields/secretText/secretTextFieldPlugin"

  export default [
      headlessCmsPlugins(),
      richTextEditor,
      // Rest of the plugins
      (...)
      objectFieldRenderer,
+     secretTextFieldPlugin
  ];`}
</Editor>
<p>{`Run the `}<_Link href="/docs/5.x/core-development-concepts/basics/watch-command"><inlineCode parentName="p">{`webiny watch`}</inlineCode></_Link>{` command to start a new watch session on `}<inlineCode parentName="p">{`apps/admin`}</inlineCode>{` application code.`}</p>
<Editor title="" lang="null" mdxType="Editor">
{`yarn webiny watch admin --env dev`}
</Editor>
<p>{`This command will build our application and will serve the `}<strong parentName="p">{`Admin Area`}</strong>{` application locally. It will also detect all changes in `}<inlineCode parentName="p">{`apps/admin`}</inlineCode>{` and live rebuild the application.`}</p>
<p>{`As a result, our new field should be shown in `}<strong parentName="p">{`Fields`}</strong>{` menu:`}</p>
<Image src={_Image1} alt={"Field Definition"} mdxType="Image" />
<_Heading level={3} id={"field-renderer-plugin"} nextElement={{
      "type": "paragraph"
    }}>Field Renderer Plugin</_Heading>
<p>{`As our next step, we’ll define a renderer for our new field. The renderer determines how this field will be rendered in the content entry form, when you create/update your data. We’ll be using the `}<inlineCode parentName="p">{`CmsEditorFieldRendererPlugin`}</inlineCode>{` plugin type.`}</p>
<ol>
<li parentName="ol">{`Create a file `}<a parentName="li" {...{
          "href": "https://github.com/webiny/webiny-examples/blob/master/headless-cms/custom-field-plugin/ui/secretTextFieldRendererPlugin.tsx"
        }}><inlineCode parentName="a">{`secretTextFieldRendererPlugin.tsx`}</inlineCode></a>{` in `}<inlineCode parentName="li">{`apps/admin/src/plugins/headlessCMS/fields/secretText`}</inlineCode>{` directory.`}</li>
</ol>
<Editor title="secretTextFieldRendererPlugin.tsx" lang="ts" mdxType="Editor">
{`import React from "react";
import { CmsEditorFieldRendererPlugin } from "@webiny/app-headless-cms/types";
import { Input } from "@webiny/ui/Input";

export default (): CmsEditorFieldRendererPlugin => ({
  type: "cms-editor-field-renderer",
  name: "cms-editor-field-renderer-secret-text",
  renderer: {
    rendererName: "secret-text",
    name: \`Secret Text\`,
    description: \`Enter the text to encrypt\`,
    canUse({ field }) {
      return field.type === "secret-text";
    },
    render({ field, getBind }) {
      const Bind = getBind();

      return (
        <Bind>
          {bind => (
            <Input
              {...bind}
              label={field.label}
              placeholder={field.placeholderText}
              description={field.helpText}
            />
          )}
        </Bind>
      );
    }
  }
});`}
</Editor>
<ol {...{
      "start": 2
    }}>
<li parentName="ol">{`Import this new plugin in `}<inlineCode parentName="li">{`apps/admin/src/plugins/headlessCms.ts`}</inlineCode>{`.`}</li>
</ol>
<Editor title="apps/admin/src/plugins/headlessCms.ts" lang="diff-js" mdxType="Editor">
{`    (...)
    import richTextEditor from "./headlessCMS/richTextEditor";

    // Import the \`secretTextFieldRendererPlugin\` plugin
+   import secretTextFieldRendererPlugin from "./headlessCMS/fields/secretText/secretTextFieldRendererPlugin"

    export default [
        headlessCmsPlugins(),
        richTextEditor,
        // Rest of the plugins
        (...)
        objectFieldRenderer,
        secretTextFieldPlugin,
+       secretTextFieldRendererPlugin()
    ];`}
</Editor>
<ol {...{
      "start": 3
    }}>
<li parentName="ol">
{`As the `}
<_Link href="/docs/5.x/core-development-concepts/basics/watch-command">
<inlineCode parentName="li">{`webiny watch`}</inlineCode>
</_Link>
{` command is already running on `}
<inlineCode parentName="li">{`apps/admin`}</inlineCode>
{`, we should see these changes immediately.
Drag and drop the `}
<strong parentName="li">{`Secret Text`}</strong>
{` field to create a model and navigate to the `}
<strong parentName="li">{`PREVIEW`}</strong>
{` tab; you should see an input field here:
`}
<Image src={_Image2} alt={"Field Rendered"} mdxType="Image" />
</li>
</ol>
<p>{`Cool, so far, we are done with the UI part of the custom field. In the next step, we will handle the GraphQL part by creating a Field to GraphQL API plugin (`}<inlineCode parentName="p">{`CmsModelFieldToGraphQLPlugin`}</inlineCode>{`) for the `}<strong parentName="p">{`Secret Text`}</strong>{` field.`}</p>
<_Heading level={3} id={"field-to-graph-ql-plugin"} nextElement={{
      "type": "list",
      "ordered": true,
      "start": 1,
      "spread": false
    }}>Field to GraphQL Plugin</_Heading>
<ol>
<li parentName="ol">{`Create `}<inlineCode parentName="li">{`fields/secretText`}</inlineCode>{` directory in `}<inlineCode parentName="li">{`apps/api/graphql/src`}</inlineCode>{`.`}</li>
<li parentName="ol">{`Create a file `}<a parentName="li" {...{
          "href": "https://github.com/webiny/webiny-examples/blob/master/headless-cms/custom-field-plugin/api/secretTextFieldPlugin.ts"
        }}><inlineCode parentName="a">{`secretTextFieldPlugin.ts`}</inlineCode></a>{` in newly created directory.`}</li>
</ol>
<Editor title="apps/api/graphql/src/fields/secretText/secretTextFieldPlugin.ts" lang="ts" mdxType="Editor">
{`import { CmsModelField, CmsModelFieldToGraphQLPlugin } from "@webiny/api-headless-cms/types";

interface CreateListFiltersParams {
  field: CmsModelField;
}

const createListFilters = ({ field }: CreateListFiltersParams) => {
  return \`
          \${field.fieldId}: String
          \${field.fieldId}_not: String
          \${field.fieldId}_in: [String]
          \${field.fieldId}_not_in: [String]
          \${field.fieldId}_contains: String
          \${field.fieldId}_not_contains: String
      \`;
};

const plugin: CmsModelFieldToGraphQLPlugin = {
  name: "cms-model-field-to-graphql-secret-text",
  type: "cms-model-field-to-graphql",
  fieldType: "secret-text",
  isSortable: true,
  isSearchable: true,
  read: {
    createTypeField({ field }) {
      return \`\${field.fieldId}: String\`;
    },
    createGetFilters({ field }) {
      return \`\${field.fieldId}: String\`;
    },
    createListFilters
  },
  manage: {
    createListFilters,
    createTypeField({ field }) {
      return \`\${field.fieldId}: String\`;
    },
    createInputField({ field }) {
      return field.fieldId + ": String";
    }
  }
};

export default plugin;`}
</Editor>
<ol {...{
      "start": 3
    }}>
<li parentName="ol">{`Import this new plugin in `}<inlineCode parentName="li">{`apps/api/graphql/src/index.ts`}</inlineCode>{`.`}</li>
</ol>
<Editor title="apps/api/graphql/src/index.ts" lang="diff-js" mdxType="Editor">
{`  (...)
  import scaffoldsPlugins from "./plugins/scaffolds";

  // Import the \`secretTextFieldPlugin\` plugin
+ import secretTextFieldPlugin from "./fields/secretText/secretTextFieldPlugin"

  export const handler = createHandler({
      plugins: [
      // Rest of the plugins
      (...)
      scaffoldsPlugins(),
+     secretTextFieldPlugin
      (...)
  });`}
</Editor>
<ol {...{
      "start": 4
    }}>
<li parentName="ol">{`Deploy the API changes, run the `}<_Link href="/docs/5.x/core-development-concepts/basics/watch-command"><inlineCode parentName="li">{`webiny watch`}</inlineCode></_Link>{` command to start a new watch session on `}<inlineCode parentName="li">{`apps/api/graphql`}</inlineCode>{` application code.`}</li>
</ol>
<Editor title="" lang="null" mdxType="Editor">
{`yarn webiny watch api --env dev`}
</Editor>
<p>{`Super, we are all set to use our new field in the CMS model. At this stage, our custom field will behave like a normal text.
In the second part of this tutorial, we will encrypt the data before storing it into the database and decrypt it while retrieving it.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`As mentioned earlier, the three plugins we’ve created so far are mandatory for creating a custom field. The plugins discussed in the next section are optional, and can be used based on your requirements.`}</p>
</Alert>
<_Heading level={2} id={"storage-transformations"} nextElement={{
      "type": "paragraph"
    }}>Storage Transformations</_Heading>
<p><inlineCode parentName="p">{`CmsModelFieldToStoragePlugin`}</inlineCode>{` plugin is used to manipulate the data before passing it to the storage layer, and also to modify data while retrieving it. In our case, we will `}<em parentName="p">{`encrypt`}</em>{` the data before storing it, and `}<em parentName="p">{`decrypt`}</em>{` it after retrieval.`}</p>
<p>{`For encryption and decryption, we will use the `}<a parentName="p" {...{
        "href": "https://www.npmjs.com/package/cryptr"
      }}><inlineCode parentName="a">{`cryptr`}</inlineCode></a>{` package.
To install it, we can run the following command from our project root:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`yarn workspace api-headless-cms add cryptr

yarn workspace api-headless-cms add @types/cryptr`}
</Editor>
<Alert type="info" mdxType="Alert">
<p>{`Notice how we had to run the `}<a parentName="p" {...{
          "href": "https://classic.yarnpkg.com/en/docs/cli/workspace/"
        }}><inlineCode parentName="a">{`yarn workspace`}</inlineCode></a>{` command and specify the workspace name (`}<inlineCode parentName="p">{`api-headless-cms`}</inlineCode>{`) in order to add the `}<a parentName="p" {...{
          "href": "https://www.npmjs.com/package/cryptr"
        }}><inlineCode parentName="a">{`cryptr`}</inlineCode></a>{` NPM package. This is because every Webiny project is organized as a monorepo and can consist of multiple workspaces. To learn more, check out the `}<_Link href="/docs/5.x/core-development-concepts/project-organization/monorepo-organization">{`Monorepo Organization`}</_Link>{` key topic.`}</p>
</Alert>
<p>{`Now, let’s proceed by creating a `}<inlineCode parentName="p">{`CmsModelFieldToStoragePlugin`}</inlineCode>{` plugin for the `}<strong parentName="p">{`Secret Text`}</strong>{` field.`}</p>
<p>{`As a first step, we will encrypt data before storing it in the database.`}<br parentName="p"></br>{`
`}{`Create a file `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-examples/blob/master/headless-cms/custom-field-plugin/api/secretTextFieldStoragePlugin.ts"
      }}><inlineCode parentName="a">{`secretTextFieldStoragePlugin.ts`}</inlineCode></a>{` in `}<inlineCode parentName="p">{`apps/api/graphql/src/fields/secretText`}</inlineCode>{` directory.`}</p>
<Editor title="apps/api/graphql/src/fields/secretText/secretTextFieldStoragePlugin.ts" lang="ts" mdxType="Editor">
{`import { StorageTransformPlugin } from "@webiny/api-headless-cms";
import cryptr from "cryptr";

const plugin = new StorageTransformPlugin({
  fieldType: "secret-text",
  toStorage: async ({ value, field }) => {
    const encryptText = new cryptr("myTotallySecretKey").encrypt(value);
    return {
      value: encryptText
    };
  },
  fromStorage: async ({ value, field }) => {
    return value.value;
  }
});

export default () => {
  return plugin;
};`}
</Editor>
<p>{`As a next step, import this new plugin in `}<inlineCode parentName="p">{`apps/api/graphql/src/index.ts`}</inlineCode>{`.`}</p>
<Editor title="apps/api/graphql/src/index.ts" lang="diff-js" mdxType="Editor">
{`(...)
import scaffoldsPlugins from "./plugins/scaffolds";

// Import the \`secretTextFieldStoragePlugin\` plugin
+ import secretTextFieldStoragePlugin from "./fields/secretText/secretTextFieldStoragePlugin"

export const handler = createHandler({
    plugins: [
    // Rest of the plugins
    (...)
    elasticsearchDataGzipCompression(),
    secretTextFieldPlugin,
+   secretTextFieldStoragePlugin()
    (...)
});`}
</Editor>
<p>{`Now, let’s create a content entry with our new field.`}</p>
<Image src={_Image3} alt={"Encrypted Text"} mdxType="Image" />
<p>{`As we can see in the video above, when you create the entry and save it, you will see encrypted data in the input text field because, as per our current code, we encrypt our data before storing it, but we’re not decrypting it back after retrieving from the database.`}</p>
<p>{`In the next step, let’s decrypt the data after we retrieve it.`}</p>
<ol>
<li parentName="ol">{`Open the `}<inlineCode parentName="li">{`apps/api/graphql/src/fields/secretText/secretTextFieldStoragePlugin.ts`}</inlineCode>{` file.`}</li>
<li parentName="ol">{`Update the `}<inlineCode parentName="li">{`return`}</inlineCode>{` statement of `}<inlineCode parentName="li">{`fromStorage`}</inlineCode>{` function with this:`}</li>
</ol>
<Editor title="apps/api/graphql/src/fields/secretText/secretTextFieldStoragePlugin.ts {5}" lang="ts" mdxType="Editor">
{`const plugin = new StorageTransformPlugin({
  (...)

  fromStorage: async ({ value, field }) => {
    return new cryptr('myTotallySecretKey').decrypt(value.value)
  }

  (...)
});`}
</Editor>
<p>{`With this change, upon retrieving the data, it will be decrypted.`}</p>
<p>{`Congratulations! You have created your first custom field for Webiny Headless CMS!`}</p>
<_Heading level={2} id={"bonus-step-elasticsearch-data-transformations"} nextElement={{
      "type": "paragraph"
    }}>Bonus Step - Elasticsearch Data Transformations</_Heading>
<p>{`As discussed earlier, another optional plugin type is `}<inlineCode parentName="p">{`CmsModelFieldToElasticsearchPlugin`}</inlineCode>{`.`}<br parentName="p"></br>{`
`}{`It is similar to the `}<inlineCode parentName="p">{`CmsModelFieldToStoragePlugin`}</inlineCode>{` plugin type, but works with Elasticsearch, so you can do the transformations before storing the data into the index, and after retrieving it. `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/731966ba13e6d9c5c82828a89e0e9ef7d4a0a27d/packages/api-headless-cms-ddb-es/src/elasticsearch/indexing/numberIndexing.ts"
      }}>{`Here`}</a>{` is an example of Field to Elasticsearch Plugin.`}</p>
<p>{`For primitive data types fields, `}<inlineCode parentName="p">{`isSearchable: true`}</inlineCode>{` flag will do the work for you for indexing. But if you have a complex field or want to store your field in a certain special way, you can create a plugin of `}<inlineCode parentName="p">{`CmsModelFieldToElasticsearchPlugin`}</inlineCode>{` type.`}</p>
<_Heading level={2} id={"faq"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>FAQ</_Heading>
<_Heading level={3} id={"how-to-create-a-read-only-text-input-field-in-headless-cms"} nextElement={{
      "type": "paragraph"
    }}>How to Create a Read-Only Text Input Field in Headless CMS?</_Heading>
<p>{`To create a read-only text input field in Webiny’s Headless CMS, you need to create a `}<_Link href="/docs/5.x/headless-cms/extending/custom-field-type">{`custom field type`}</_Link>{`.
Webiny doesn’t provide a read-only field out of the box because the requirements for such a field can vary greatly. Here are some ways users might populate this field:`}</p>
<ul>
<li parentName="ul">{`Populate the field using life cycle events, for example:`}
<ul parentName="li">
<li parentName="ul">{`Populate on before create`}</li>
<li parentName="ul">{`Populate on before update`}</li>
</ul>
</li>
<li parentName="ul">{`Dynamically calculate the field’s output`}</li>
<li parentName="ul">{`Populate the field from an external system but make it read-only within Webiny
By creating a custom field type, you can tailor the read-only field to meet your specific needs.`}</li>
</ul>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;