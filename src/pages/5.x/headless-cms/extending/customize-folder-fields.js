/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { CanIUseThis } from "@/components/CanIUseThis";
import { Gallery } from "@/components/Image";
import { WhatYouWillLearn } from "@/components/WhatYouWillLearn";
import hcmsFoldersFieldsSchema from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/extending/assets/hcms-folder-custom-fields-schema.png";
import hcmsAdvancedDetails from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/extending/assets/hcms-folder-custom-fields.png";
import hcmsFieldRendererDecorator from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/extending/assets/hcms-field-renderer-decorator.png";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Customize Folder Fields",
  "description": "Learn how to add custom fields to the Folders.",
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
  "title": "Add a Field",
  "slug": "add-a-field",
  "children": []
}, {
  "title": "Customizing Field Rendering",
  "slug": "customizing-field-rendering",
  "children": [{
    "title": "Example: Conditionally Rendering a Field",
    "slug": "example-conditionally-rendering-a-field",
    "children": []
  }, {
    "title": "Understanding the Implementation",
    "slug": "understanding-the-implementation",
    "children": []
  }, {
    "title": "Applying Custom Logic",
    "slug": "applying-custom-logic",
    "children": []
  }]
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
const Image = makeShortcode("Image");
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









<CanIUseThis since={"5.42.3"} mdxType="CanIUseThis" />
<WhatYouWillLearn mdxType="WhatYouWillLearn">
<ul>
<li parentName="ul">{`how to add custom folder fields to the Headless Cms`}</li>
<li parentName="ul">{`how to control field rendering in the UI`}</li>
</ul>
</WhatYouWillLearn>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`Developers can extend the GraphQL schema and the Admin app’s user interface by adding custom fields to Folders. Since our Headless CMS manages Folders, introducing a new field is as simple as defining it on the `}<inlineCode parentName="p">{`Folder`}</inlineCode>{` model.`}</p>
<p>{`Once the field is defined in the model, it will automatically appear in the GraphQL schema under the `}<inlineCode parentName="p">{`extensions`}</inlineCode>{` field. Additionally, this new field will be available in the user interface for creating and editing Folders, alongside default fields like `}<inlineCode parentName="p">{`title`}</inlineCode>{`, `}<inlineCode parentName="p">{`slug`}</inlineCode>{`, and `}<inlineCode parentName="p">{`parentId`}</inlineCode>{`.`}</p>
<Gallery mdxType="Gallery">
  <Image src={hcmsFoldersFieldsSchema} title={"Custom fields in the GraphQL schema"} mdxType="Image" />
  <Image src={hcmsAdvancedDetails} title={"Custom fields in the Admin app"} mdxType="Image" />
</Gallery>
<_Heading level={2} id={"add-a-field"} nextElement={{
      "type": "paragraph"
    }}>Add a Field</_Heading>
<p>{`To add a new field, use the `}<inlineCode parentName="p">{`createCmsFolderModelModifier`}</inlineCode>{` plugin factory, provided by the `}<inlineCode parentName="p">{`@webiny/api-headless-cms-aco`}</inlineCode>{` package.`}</p>
<Alert type="warning" mdxType="Alert">
  The source code below only highlights the changes you need to make to your project file. The rest
  of your file contents is not shown for better clarity.
</Alert>
<Editor title="apps/api/graphql/src/index.ts" lang="diff-ts" mdxType="Editor">
{`import {
    createAcoHcmsContext,
+   createCmsFolderModelModifier
} from "@webiny/api-headless-cms-aco";

export const handler = createHandler({
    plugins: [
        // Other plugins were omitted for clarity.

        // Add the following code after your existing plugins.
+       createCmsFolderModelModifier(({ modifier }) => {
+           modifier.addField({
+               id: "carMake",
+               fieldId: "carMake",
+               label: "Car Make",
+               type: "text",
+               renderer: {
+                   name: "text-input"
+               }
+           });

+           modifier.addField({
+               id: "year",
+               fieldId: "year",
+               label: "Year of manufacturing",
+               type: "number",
+               renderer: {
+                   name: "number-input"
+               }
+           });
        })
    ],
    http: { debug }
});`}
</Editor>
<p>{`In this example, we add two fields: `}<inlineCode parentName="p">{`carMake`}</inlineCode>{` and `}<inlineCode parentName="p">{`year`}</inlineCode>{`. You can add as many fields as you like. The field definition is identical to that of the Headless CMS model field, and all the same rules and options apply. To learn more about programmatic model and field definition, visit `}<_Link href="/docs/5.x/headless-cms/extending/content-models-via-code">{`Define Content Models via Code`}</_Link>{`.`}</p>
<p>{`Once the code shown above is applied, you need to deploy your API. Make sure to use the `}<inlineCode parentName="p">{`--env`}</inlineCode>{` value that corresponds to your development environment.`}</p>
<p>{`This plugin is specifically designed to add fields to folders related to CMS content models. It includes an optional `}<inlineCode parentName="p">{`modelIds`}</inlineCode>{` property (`}<inlineCode parentName="p">{`string[]`}</inlineCode>{`), allowing you to target specific models.`}</p>
<p>{`In GraphQL, this plugin prefixes field IDs with `}<inlineCode parentName="p">{`cms_`}</inlineCode>{` by default. If the `}<inlineCode parentName="p">{`modelIds`}</inlineCode>{` property is specified, the field ID is prefixed with `}<inlineCode parentName="p">{`cms_\${modelId}_`}</inlineCode>{`.`}</p>
<Editor title="" lang="shell" mdxType="Editor">
{`yarn webiny deploy api --env=dev`}
</Editor>
<p>{`After the deployment is done, your new fields should be visible in the GraphQL schema, and the UI, as demonstrated in the `}<a parentName="p" {...{
        "href": "#overview"
      }}>{`Overview`}</a>{` section of this article.`}</p>
<_Heading level={2} id={"customizing-field-rendering"} nextElement={{
      "type": "paragraph"
    }}>Customizing Field Rendering</_Heading>
<p>{`To control how and when a specific field is rendered, you can configure a `}<strong parentName="p">{`field decorator`}</strong>{`. Field decorators are higher-order components that let you intercept a component and apply custom logic to its rendering process.`}</p>
<_Heading level={3} id={"example-conditionally-rendering-a-field"} nextElement={{
      "type": "paragraph"
    }}>Example: Conditionally Rendering a Field</_Heading>
<p>{`The following example demonstrates how to create a field decorator that applies a custom renderer to a specific field when a folder is being edited. When the specified conditions are met, the custom renderer is applied to that field.`}</p>
<Editor title="apps/admin/src/App.tsx" lang="diff-tsx" mdxType="Editor">
{`import React from "react";
import { Admin } from "@webiny/app-serverless-cms";
import { Cognito } from "@webiny/app-admin-users-cognito";
+ import { ContentEntryListConfig } from "@webiny/app-headless-cms";
+ import { useForm } from "@webiny/form";
+ import type { FolderItem } from "@webiny/app-aco/types";
import "./App.scss";

+ const { Browser } = ContentEntryListConfig;

+ const ExtensionFieldDecorator = Browser.Folder.ExtensionField.createDecorator(Original => {
+   return function FieldDecorator(props) {
+     const form = useForm<FolderItem>();
+ 
+     if (form.data.id) {
+       return null;
+     }
+ 
+     return <Original {...props} />;
+   };
+ });

export const App = () => {
  return (
    <Admin>
      <Cognito />
+     <ContentEntryListConfig>
+       <ExtensionFieldDecorator id={"cms_year"} />
+     </ContentEntryListConfig>
    </Admin>
  );
};`}
</Editor>
<_Heading level={3} id={"understanding-the-implementation"} nextElement={{
      "type": "list",
      "ordered": false,
      "start": null,
      "spread": false
    }}>Understanding the Implementation</_Heading>
<ul>
<li parentName="ul"><inlineCode parentName="li">{`useForm`}</inlineCode>{` `}<strong parentName="li">{`Hook`}</strong>{`: This hook provides access to the current form inside the New/Edit Folder dialog. By leveraging `}<inlineCode parentName="li">{`useForm`}</inlineCode>{`, you can dynamically control field visibility and behavior based on the form properties.`}</li>
<li parentName="ul"><inlineCode parentName="li">{`ExtensionFieldDecorator`}</inlineCode>{`: This decorator ensures the field is only rendered when specific conditions are met. In this case, the field is hidden if an existing folder is being edited.`}</li>
<li parentName="ul"><inlineCode parentName="li">{`ContentEntryListConfig`}</inlineCode>{`: This component acts as a wrapper, enabling access to configuration utilities for the Headless CMS List view. It must be mounted as a parent of other config components to ensure the configurations are applied correctly.`}</li>
</ul>
<_Heading level={3} id={"applying-custom-logic"} nextElement={{
      "type": "paragraph"
    }}>Applying Custom Logic</_Heading>
<p>{`Using this approach, you can:`}</p>
<ul>
<li parentName="ul">{`Conditionally display or hide fields based on folder or form properties.`}</li>
<li parentName="ul">{`Swap field renderers dynamically to fit different use cases.`}</li>
<li parentName="ul">{`Implement field-level access control by checking user permissions.`}</li>
</ul>
<p>{`Once you run your Admin app and navigate to the desired Content Model, edit an existing folder to see the custom renderer in action. While this example hides the field, you can extend it to include more advanced field customizations.`}</p>
<Image src={hcmsFieldRendererDecorator} title="Custom renderer is applied to 'carMake' field" mdxType="Image" />
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;