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
import fmSchemaExtensions from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/file-manager/extending/assets/fm-schema-extensions.png";
import fmAdvancedDetails from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/file-manager/extending/assets/fm-advanced-details.png";
import fmMp4CustomRenderer from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/file-manager/extending/assets/fm-mp4-custom-renderer.png";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Customize File Fields",
  "description": "Learn how to add custom fields to the File Manager.",
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
  "title": "Customize Field Rendering",
  "slug": "customize-field-rendering",
  "children": []
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









<CanIUseThis since={"5.x"} mdxType="CanIUseThis" />
<WhatYouWillLearn mdxType="WhatYouWillLearn">
<ul>
<li parentName="ul">{`how to add custom file fields to the File Manager`}</li>
<li parentName="ul">{`how to control field rendering in the File Manager UI`}</li>
</ul>
</WhatYouWillLearn>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`File Manager allows you to add custom fields to the GraphQL schema, as well as the user interface in the Admin app. Since File Manager is powered by our Headless CMS under the hood, adding of new fields is as simple as defining a new field on the `}<inlineCode parentName="p">{`File`}</inlineCode>{` model.`}</p>
<p>{`Once the field is defined on the model, it will immediately show up in the GraphQL schema, under the `}<inlineCode parentName="p">{`extensions`}</inlineCode>{` field. In the user interface of the File Manager, the new field will appear under the `}<inlineCode parentName="p">{`Advanced Details`}</inlineCode>{` tab, in the File Details drawer.`}</p>
<Gallery mdxType="Gallery">
  <Image src={fmSchemaExtensions} title={"Custom fields in the GraphQL schema"} mdxType="Image" />
  <Image src={fmAdvancedDetails} title={"Custom fields in the Admin app"} mdxType="Image" />
</Gallery>
<_Heading level={2} id={"add-a-field"} nextElement={{
      "type": "paragraph"
    }}>Add a Field</_Heading>
<p>{`To add a new field, use the `}<inlineCode parentName="p">{`createFileModelModifier`}</inlineCode>{` plugin factory, provided by the `}<inlineCode parentName="p">{`@webiny/api-file-manager`}</inlineCode>{` package.`}</p>
<Alert type="warning" mdxType="Alert">
  The source code below only highlights the changes you need to make to your project file. The rest
  of your file contents is not shown for better clarity.
</Alert>
<Editor title="apps/api/graphql/src/index.ts" lang="diff-ts" mdxType="Editor">
{`import {
    createFileManagerContext,
    createFileManagerGraphQL,
+   createFileModelModifier
} from "@webiny/api-file-manager";

export const handler = createHandler({
    plugins: [
        // Other plugins were omitted for clarity.

        // Add the following code after your existing plugins.
+       createFileModelModifier(({ modifier }) => {
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
<Editor title="" lang="shell" mdxType="Editor">
{`yarn webiny deploy api --env=dev`}
</Editor>
<p>{`After the deployment is done, your new fields should be visible in the GraphQL schema, and the UI, as demonstrated in the `}<a parentName="p" {...{
        "href": "#overview"
      }}>{`Overview`}</a>{` section of this article.`}</p>
<_Heading level={2} id={"customize-field-rendering"} nextElement={{
      "type": "paragraph"
    }}>Customize Field Rendering</_Heading>
<p>{`To control how and when a particular field is rendered, you need to configure a field decorator. Decorators are higher order components that allow you to intercept the component, and add custom logic to the rendering process.`}</p>
<p>{`The following code example shows how to create a field decorator, which is only applied to a specific field, in case the current file is a video file. When the conditions are met, a custom renderer will be applied to that particular field.`}</p>
<Editor title="apps/admin/src/App.tsx" lang="diff-tsx" mdxType="Editor">
{`import React from "react";
import { Admin } from "@webiny/app-serverless-cms";
import { Cognito } from "@webiny/app-admin-users-cognito";
+ import { FileManagerViewConfig, useFile } from "@webiny/app-file-manager";
+ import { CmsModelField } from "@webiny/app-headless-cms/types";
import "./App.scss";

+ const { FileDetails } = FileManagerViewConfig;

+ const fieldWithCustomRenderer = (field: CmsModelField): CmsModelField => {
+   return {
+     ...field,
+     renderer: ({ getBind, Label }) => {
+       const Bind = getBind();
+       return (
+         <>
+           <Label>Custom field</Label>
+           <Bind>
+             {({ value, onChange }) => (
+               <button onClick={() => onChange("custom-value-" + Date.now())}>
+                 Set custom value (value: {value})
+               </button>
+             )}
+           </Bind>
+         </>
+       );
+     }
+   };
+ };

+ const ExtensionFieldDecorator = FileDetails.ExtensionField.createDecorator(Original => {
+   return function FieldDecorator(props) {
+     const { file } = useFile();
+
+     if (props.field.id === "carMake" && file.type.includes("video/")) {
+       return <Original {...props} field={fieldWithCustomRenderer(props.field)} />;
+     }
+
+     return <Original {...props} />;
+   };
+ });

export const App = () => {
  return (
    <Admin>
      <Cognito />
+     <FileManagerViewConfig>
+       <ExtensionFieldDecorator />
+     </FileManagerViewConfig>
    </Admin>
  );
};`}
</Editor>
<p>{`The `}<inlineCode parentName="p">{`useFile`}</inlineCode>{` hook provides access to the current file. Using this approach, you can conditionally show or hide fields depending on any file property, swap field renderers like we did in our code example, check for user permissions, etc.`}</p>
<p>{`The `}<inlineCode parentName="p">{`FileManagerViewConfig`}</inlineCode>{` is a component which provides access to other components and utilities to configure the File Manager. You need to mount it as a parent of other config components, to correctly apply the configurations to the File Manager (as shown in the code example).`}</p>
<p>{`Once you run your Admin app, and navigate to the File Manager, upload an `}<inlineCode parentName="p">{`mp4`}</inlineCode>{` file to see your custom renderer in action. The demonstrated custom renderer might not be the most exciting one, but it shows how you can dynamically apply different renderers depending on the file context.`}</p>
<Image src={fmMp4CustomRenderer} title="Custom Renderer Is Applied to 'carMake' Field on All Mp4 Files" mdxType="Image" />
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;