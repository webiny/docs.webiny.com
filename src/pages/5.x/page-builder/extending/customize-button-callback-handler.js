/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image2 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/page-builder/extending/assets/customize-button-callback-handler/02-button-handler-variables.png'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/page-builder/extending/assets/customize-button-callback-handler/01-button-handler-simple.png'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Add Custom Button Callback Handler",
  "description": "How to create a custom callback handler for button element.",
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
  "title": "Organization of Files",
  "slug": "organization-of-files",
  "children": [{
    "title": "Scaffold Folder and File for Plugin",
    "slug": "scaffold-folder-and-file-for-plugin",
    "children": []
  }]
}, {
  "title": "Register a Button Handler",
  "slug": "register-a-button-handler",
  "children": [{
    "title": "Custom Button Handler With Variables",
    "slug": "custom-button-handler-with-variables",
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





{/* Include this when needed (e.g. when explaining a feature that was introduced in a specific Webiny version) */}
<Alert type="info" title="Can I Use This?" mdxType="Alert">
<p>{`This feature is available since Webiny `}<strong parentName="p">{`v5.19.0`}</strong>{`.`}</p>
</Alert>
{/* Always include this section on top of the page. */}
<Alert type="success" title="What You’ll Learn" mdxType="Alert">
<ul>
<li parentName="ul">{`how to add a custom callback to the button element.`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`By default, the `}<strong parentName="p">{`Button`}</strong>{` element comes with 2 working action types out of the box:`}</p>
<ul>
<li parentName="ul"><strong parentName="li">{`Link`}</strong>{`: useful to create a link to different web URLs;`}</li>
<li parentName="ul"><strong parentName="li">{`Scroll to element`}</strong>{`: in case you want to scroll to a specific element within the page.`}</li>
</ul>
<p>{`A third option is available, `}<strong parentName="p">{`Click handler`}</strong>{`: this needs a bit of work to function.`}</p>
<p>{`In this tutorial, you will learn how to add a custom button click handler, available to be used within the Page Builder.`}</p>
<_Heading level={2} id={"organization-of-files"} nextElement={{
      "type": "paragraph"
    }}>Organization of Files</_Heading>
<p>{`Although you can place and organize the plugins in any way you prefer for your project, we recommend adopting the following organization.`}</p>
<p>{`When creating a new plugin, it’s recommended to have all the needed files in a single shared folder. This is because the plugin will need to be imported both within the Admin Area (`}<inlineCode parentName="p">{`apps/admin`}</inlineCode>{`) and Website (\`apps/website) applications.`}</p>
<p>{`With that in mind, for this tutorial, you will create the new `}<inlineCode parentName="p">{`pb-button-click-handlers`}</inlineCode>{` folder in the `}<inlineCode parentName="p">{`apps/extensions`}</inlineCode>{` folder.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`By default, the `}<inlineCode parentName="p">{`extensions`}</inlineCode>{` folder does not exist in the `}<inlineCode parentName="p">{`apps`}</inlineCode>{` directory, so you’ll need to create it.`}</p>
</Alert>
<_Heading level={3} id={"scaffold-folder-and-file-for-plugin"} nextElement={{
      "type": "list",
      "ordered": false,
      "start": null,
      "spread": false
    }}>Scaffold Folder and File for Plugin</_Heading>
<ul>
<li parentName="ul">{`create a folder named `}<inlineCode parentName="li">{`pb-button-click-handlers`}</inlineCode>{` inside `}<inlineCode parentName="li">{`apps/extensions`}</inlineCode></li>
<li parentName="ul">{`create a `}<inlineCode parentName="li">{`package.json`}</inlineCode>{` file inside `}<inlineCode parentName="li">{`apps/extensions/pb-button-click-handlers`}</inlineCode>{` with the following contents:`}</li>
</ul>
<Editor title="apps/extensions/pb-button-click-handlers/package.json" lang="json" mdxType="Editor">
{`{
  "name": "@extensions/pb-button-click-handlers"
}`}
</Editor>
<ul>
<li parentName="ul">{`add `}<inlineCode parentName="li">{`"apps/extensions/*"`}</inlineCode>{` to workspaces packages inside `}<inlineCode parentName="li">{`package.json`}</inlineCode>{` in the project root, in case you haven’t done it before already:`}</li>
</ul>
<Editor title="{project-root}/package.json" lang="diff-js" mdxType="Editor">
{`(...)
"workspaces": {
  "packages": [
    "apps/admin/code",
    "apps/website/code"
    // (...)
+    "apps/extensions/*"
  ]
// (...)
}`}
</Editor>
<ul>
<li parentName="ul">{`create `}<inlineCode parentName="li">{`render.ts`}</inlineCode>{` file inside `}<inlineCode parentName="li">{`apps/extensions/pb-button-click-handlers`}</inlineCode>{`: this is where all your custom handler plugins will be defined`}</li>
</ul>
<Editor title="apps/extensions/pb-button-click-handlers/editor.ts" lang="ts" mdxType="Editor">
{`// This is where we are going to register all our handlers
export const buttonClickHandlers = [
  ...
];`}
</Editor>
<ul>
<li parentName="ul">
<p parentName="li">{`import the click handler plugin into the following files`}</p>
<p parentName="li">{`:`}</p>
</li>
<li parentName="ul">
<p parentName="li"><strong parentName="p">{`Page Builder editor`}</strong>{` plugins: `}<inlineCode parentName="p">{`apps/admin/src/plugins/pageBuilder/editorPlugins.ts`}</inlineCode></p>
</li>
<li parentName="ul">
<p parentName="li"><strong parentName="p">{`Page Builder render`}</strong>{` plugins: `}<inlineCode parentName="p">{`apps/admin/src/plugins/pageBuilder/renderPlugins.ts`}</inlineCode></p>
</li>
<li parentName="ul">
<p parentName="li"><strong parentName="p">{`Website Page Builder`}</strong>{` plugins: \`apps/website/src/plugins/pageBuilder.ts`}</p>
<p parentName="li">{`\``}</p>
</li>
<li parentName="ul">
<p parentName="li">{`link workspaces by running `}<inlineCode parentName="p">{`yarn install`}</inlineCode>{` command from the project root. After completion, there will be a `}<a parentName="p" {...{
            "href": "https://en.wikipedia.org/wiki/Symbolic_link"
          }}>{`symbolic link`}</a>{` of `}<inlineCode parentName="p">{`pb-button-click-handlers`}</inlineCode>{` package in `}<inlineCode parentName="p">{`node_modules`}</inlineCode>{`.`}</p>
</li>
</ul>
<_Heading level={2} id={"register-a-button-handler"} nextElement={{
      "type": "paragraph"
    }}>Register a Button Handler</_Heading>
<p>{`Now, go back to our custom plugin file to register a new button handler.`}</p>
<p>{`This comes pretty easy: you just need to define a new plugin object with `}<inlineCode parentName="p">{`type: pb-page-element-button-click-handler`}</inlineCode>{`, see the example here below:`}</p>
<Editor title="apps/extensions/pb-button-click-handlers/editor.ts" lang="ts" mdxType="Editor">
{`export const buttonClickHandlers = [
  // Register a simple click handler that doesn't depend on any variables.
  {
    type: "pb-page-element-button-click-handler",
    name: "simple-handler",
    title: "A Simple Handler",
    // Once the button is clicked, we display a simple alert message.
    handler: () => {
      alert("I was clicked!");
    }
  }
];`}
</Editor>
<p>{`As you can see, the configuration object has the following properties:`}</p>
<ul>
<li parentName="ul"><inlineCode parentName="li">{`type`}</inlineCode>{`: plugin type (`}<inlineCode parentName="li">{`pb-page-element-button-click-handler`}</inlineCode>{`);`}</li>
<li parentName="ul"><inlineCode parentName="li">{`name`}</inlineCode>{`: the plugin name, this must be unique;`}</li>
<li parentName="ul"><inlineCode parentName="li">{`title`}</inlineCode>{`: shown in the Page Builder button configuration settings;`}</li>
<li parentName="ul"><inlineCode parentName="li">{`handler`}</inlineCode>{`: to define your custom button handler.`}</li>
</ul>
<Image src={_Image1} alt={"Button handler inside page builder"} mdxType="Image" />
<_Heading level={3} id={"custom-button-handler-with-variables"} nextElement={{
      "type": "paragraph"
    }}>Custom Button Handler With Variables</_Heading>
<p>{`You might need to allow your admin user to set one or more custom values and pass them to the handler.`}</p>
<p>{`In this case, you just need to add a couple more properties to our handler configuration object:`}</p>
<Editor title="apps/extensions/pb-button-click-handlers/editor.ts" lang="ts" mdxType="Editor">
{`import { PbButtonElementClickHandlerPlugin } from "@webiny/app-page-builder/types";

export const buttonClickHandlers = [
  // Register a click handler that depends on two variables (color and size).
  {
    type: "pb-page-element-button-click-handler",
    name: "handler-with-variables",
    title: "Handler With Variables",
    // Here are the variables that users will be able to set via the
    // button's "Action" settings (in the Page Builder editor).
    variables: [
      { name: "color", label: "My Color", defaultValue: "red" },
      { name: "size", label: "My Size", defaultValue: "XXL" }
    ],
    // Once the button is clicked, we simply log the received variables.
    handler: ({ variables }) => {
      console.log(variables); // Logs { color, size } object.
    }
  } as PbButtonElementClickHandlerPlugin<{ color: string; type: string }>
];`}
</Editor>
<p>{`You are adding the following property:`}</p>
<ul>
<li parentName="ul"><inlineCode parentName="li">{`variables`}</inlineCode>{`: a list of allowed variables with name, label and default values. Those will be received by your custom handler.`}</li>
</ul>
<p>{`Now, your admin users can define custom values to predefined variables via the button’s “Action” settings within the Page Builder.`}</p>
<Image src={_Image2} alt={"Button handler with custom variables inside page builder"} mdxType="Image" />
<_Heading level={2} id={"conclusion"} nextElement={{
      "type": "paragraph"
    }}>Conclusion</_Heading>
<p>{`Congratulations!`}</p>
<p>{`You have added a new custom handler click to Page Builder button element.
If you have further questions, feel free to `}<a parentName="p" {...{
        "href": "https://www.webiny.com/slack/"
      }}>{`ask`}</a>{` for additional help.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;