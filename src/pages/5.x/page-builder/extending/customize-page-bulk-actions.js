/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import pbBulkActions from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/page-builder/extending/assets/pb-bulk-actions.png";
import pbBulkActionsSimple from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/page-builder/extending/assets/pb-bulk-actions-simple.gif";
import pbBulkActionsAsync from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/page-builder/extending/assets/pb-bulk-actions-async.gif";
import pbBulkActionsDiscover from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/page-builder/extending/assets/pb-bulk-actions-discover.png";
import pbBulkActionsPosition from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/page-builder/extending/assets/pb-bulk-actions-position.png";
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Customize Page Bulk Actions",
  "description": "Learn how to add, replace, or remove bulk actions in the Page Builder.",
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
  "title": "Add a Bulk Action",
  "slug": "add-a-bulk-action",
  "children": [{
    "title": "Simple Bulk Action",
    "slug": "simple-bulk-action",
    "children": []
  }, {
    "title": "Asynchronous Bulk Action",
    "slug": "asynchronous-bulk-action",
    "children": []
  }]
}, {
  "title": "Discover Bulk Actions",
  "slug": "discover-bulk-actions",
  "children": []
}, {
  "title": "Position a Bulk Action",
  "slug": "position-a-bulk-action",
  "children": []
}, {
  "title": "Remove a Bulk Action",
  "slug": "remove-a-bulk-action",
  "children": []
}, {
  "title": "Replace a Bulk Action",
  "slug": "replace-a-bulk-action",
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








<Alert type="info" title="Can I Use This?" mdxType="Alert">
<p>{`This feature is available since Webiny `}<strong parentName="p">{`v5.38.0`}</strong>{`.`}</p>
</Alert>
<Alert type="success" title="What you will learn" mdxType="Alert">
<ul>
<li parentName="ul">{`how to add a custom bulk action to the Page Builder`}</li>
<li parentName="ul">{`how to discover existing bulk action names`}</li>
<li parentName="ul">{`how to change the position, remove, or replace an existing bulk action`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`In Page Builder, pre-built actions empower users to modify status, export, delete, or move multiple pages effortlessly. These actions become visible when you select one or more pages from the list.`}</p>
<p>{`To work with bulk actions, you need to use the `}<inlineCode parentName="p">{`PageListConfig`}</inlineCode>{` component. For this article, we will use the `}<inlineCode parentName="p">{`BulkAction`}</inlineCode>{` in the `}<inlineCode parentName="p">{`Browser`}</inlineCode>{` namespace.`}</p>
<Editor title="apps/admin/src/App.tsx" lang="diff-tsx" mdxType="Editor">
{`import React from "react";
import { Admin } from "@webiny/app-serverless-cms";
import { Cognito } from "@webiny/app-admin-users-cognito";
+ import { PageListConfig } from "@webiny/app-page-builder";
import "./App.scss";

+ // You can destructure child components to make the code more readable and easier to work with.
+ const { Browser } = PageListConfig;

export const App = () => {
    return (
      <Admin>
        <Cognito />
+       <PageListConfig>
+          <Browser.BulkAction name={"demo-bulk-action”} element={<span>Demo Bulk Action</span>} />
+       </PageListConfig>
      </Admin>
    );
};`}
</Editor>
<p><inlineCode parentName="p">{`Browser`}</inlineCode>{` is the crucial component of the Admin app’s Page Builder. This is where users can easily browse through pages, perform searches, create new pages and organize them into folders.`}</p>
<p>{`If users select one or more pages from the list, the bulk action bar will appear.`}</p>
<Image src={pbBulkActions} title="Browser and the Built-in Bulk Actions" mdxType="Image" />
<_Heading level={2} id={"add-a-bulk-action"} nextElement={{
      "type": "paragraph"
    }}>Add a Bulk Action</_Heading>
<p>{`To add a new bulk action, use the `}<inlineCode parentName="p">{`PageListConfig`}</inlineCode>{` component and mount it within your Admin app. This component will serve as the foundation for your bulk actions.`}</p>
<p>{`To ensure UI consistency, use the `}<inlineCode parentName="p">{`useButtons`}</inlineCode>{` hook to access four button components:`}</p>
<ul>
<li parentName="ul"><inlineCode parentName="li">{`ButtonDefault`}</inlineCode></li>
<li parentName="ul"><inlineCode parentName="li">{`ButtonPrimary`}</inlineCode></li>
<li parentName="ul"><inlineCode parentName="li">{`ButtonSecondary`}</inlineCode></li>
<li parentName="ul"><inlineCode parentName="li">{`IconButton`}</inlineCode></li>
</ul>
<p>{`Choose the one that best suits your design needs. In the following examples, we will use the `}<inlineCode parentName="p">{`IconButton`}</inlineCode>{` component.`}</p>
<_Heading level={3} id={"simple-bulk-action"} nextElement={{
      "type": "paragraph"
    }}>Simple Bulk Action</_Heading>
<p>{`Here is an example of creating a bulk action that copies data from the selected pages to the clipboard in JSON format.`}</p>
<Editor title="apps/admin/src/App.tsx" lang="diff-tsx" mdxType="Editor">
{`import React from "react";
import { Admin } from "@webiny/app-serverless-cms";
import { Cognito } from "@webiny/app-admin-users-cognito";
+ import { useSnackbar } from "@webiny/app-admin";
+ import { PageListConfig } from "@webiny/app-page-builder";
+ import { ReactComponent as CopyIcon } from "@material-design-icons/svg/outlined/content_copy.svg";
import "./App.scss";

+ // You can destructure child components to make the code more readable and easier to work with.
+ const { BulkAction } = PageListConfig.Browser;
+ const { useWorker, useButtons } = BulkAction;
+
+ const ActionCopyJson = () => {
+   // useButtons() exposes the button components also used internally: use these to keep the UI consistent.
+   const { IconButton } = useButtons();
+   // useWorker() exposes the currently selected items within the context.
+   const { items } = useWorker();
+   // showSnackbar allows to provide a feedback to users.
+   const { showSnackbar } = useSnackbar();
+
+   const copyJson = () => {
+     navigator.clipboard.writeText(JSON.stringify(items, null, 2));
+     showSnackbar("JSON data copied to clipboard.");
+   };
+
+   return (
+     <IconButton
+       icon={<CopyIcon />}
+       onAction={copyJson}
+       label={\`Copy as JSON\`}
+       tooltipPlacement={"bottom"}
+     />
+   );
+ };

  export const App = () => {
    return (
      <Admin>
        <Cognito />
+       <PageListConfig>
+         <BulkAction
+           name={"copy-json"}
+           element={<ActionCopyJson />}
+         />
+       </PageListConfig>
      </Admin>
    );
  };`}
</Editor>
<p>{`The `}<inlineCode parentName="p">{`items`}</inlineCode>{` property obtained from `}<inlineCode parentName="p">{`useWorker()`}</inlineCode>{` is a crucial part of managing bulk actions: these are the currently selected items within the context of the Page Builder.`}</p>
<p>{`This is the whole process of registering a new bulk action element.`}</p>
<Image src={pbBulkActionsSimple} title="Custom Simple Bulk Action" mdxType="Image" />
<_Heading level={3} id={"asynchronous-bulk-action"} nextElement={{
      "type": "paragraph"
    }}>Asynchronous Bulk Action</_Heading>
<p>{`Sometimes, you may need to execute a bulk action that involves multiple asynchronous tasks, such as sending selected pages to an external service. In such cases, we can use the `}<inlineCode parentName="p">{`useWorker`}</inlineCode>{` and `}<inlineCode parentName="p">{`useDialogs`}</inlineCode>{` hooks to create a seamless user experience:`}</p>
<ul>
<li parentName="ul"><inlineCode parentName="li">{`useWorker`}</inlineCode>{` provides the currently selected items and the `}<inlineCode parentName="li">{`processInSeries`}</inlineCode>{` method to perform our callback.`}</li>
<li parentName="ul"><inlineCode parentName="li">{`useDialog`}</inlineCode>{` provides methods to show confirmation and result dialogs.`}</li>
</ul>
<p>{`Here’s an example of creating a bulk action that sends the selected pages to an external service using `}<inlineCode parentName="p">{`fetch`}</inlineCode>{` and shows the result of each iteration.`}</p>
<Editor title="apps/admin/src/App.tsx" lang="diff-tsx" mdxType="Editor">
{`import React from "react";
import { Admin } from "@webiny/app-serverless-cms";
import { Cognito } from "@webiny/app-admin-users-cognito";
+ import { PageListConfig } from "@webiny/app-page-builder";
+ import { ReactComponent as SendIcon } from "@material-design-icons/svg/outlined/send.svg";
import "./App.scss";

+ // You can destructure child components to make the code more readable and easier to work with.
+ const { BulkAction } = PageListConfig.Browser;
+ const { useWorker, useButtons, useDialog } = BulkAction;

+ const ActionSendToExternal = () => {
+    // useButtons() exposes the button components also used internally: use these to keep the UI consistent.
+    const { IconButton } = useButtons();
+    // useWorker provides the selected items, method to process them and the result of the operation.
+    const worker = useWorker();
+    // useDialog provides methods to show confirmation and result dialogs.
+    const { showConfirmationDialog, showResultsDialog } = useDialog();
+
+    const openSendToExternalServiceDialog = () =>
+      showConfirmationDialog({
+        title: "Send to External Service",
+        message: \`You are about to send the selected pages. Are you sure you want to continue?\`,
+        loadingLabel: \`Processing\`,
+        execute: async () => {
+          await worker.processInSeries(async ({ item, report }) => {
+            try {
+              const response = await fetch(
+                "https://any.url.com",
+                {
+                  method: "POST",
+                  headers: {
+                    "Content-Type": "application/json"
+                  },
+                  body: JSON.stringify(item.id)
+                }
+              );
+
+             // Add the result from the operation, marking it as a success
+             report.success({
+               title: item.title,
+               message: \`Page successfully sent, response status: \${response.status}\`
+             });
+           } catch (e) {
+             // Add the result from the operation, marking it as an error
+             report.error({
+               title: item.title,
+               message: e.message
+             });
+           }
+       }, 5 // Batch size, default value: 10);
+
+       // Reset the selected items
+       worker.resetItems();
+
+       // Show a dialog with the report from all operations
+       showResultsDialog({
+         results: worker.results,
+         title: "Send to External Service",
+         message: "Operation completed, here below you find the complete report:"
+       });
+     }
+   });
+
+   return (
+     <IconButton
+       icon={<SendIcon />}
+       onAction={openSendToExternalServiceDialog}
+       label={\`Send to external service\`}
+       tooltipPlacement={"bottom"}
+     />
+   );
+ };

  export const App = () => {
    return (
      <Admin>
        <Cognito />
+       <PageListConfig>
+         <BulkAction
+           name={"send-to-external"}
+           element={<ActionSendToExternal />}
+         />
+       </PageListConfig>
      </Admin>
    );
  };`}
</Editor>
<p>{`For the `}<inlineCode parentName="p">{`IconButton`}</inlineCode>{` component, the `}<inlineCode parentName="p">{`onAction`}</inlineCode>{` prop can accept any method. In the current scenario, we are using the `}<inlineCode parentName="p">{`showConfirmationDialog`}</inlineCode>{` method to open a dialog.`}</p>
<p><inlineCode parentName="p">{`showConfirmationDialog`}</inlineCode>{` is designed to receive a callback function, which will be executed when the users confirm their action. You can pass any callback function to this method or use the `}<inlineCode parentName="p">{`processInSeries`}</inlineCode>{` method from the `}<inlineCode parentName="p">{`useWorker`}</inlineCode>{` hook.`}</p>
<p><inlineCode parentName="p">{`processInSeries`}</inlineCode>{` requires a callback as its first parameter. This callback is provided with the current item of the list being iterated and `}<inlineCode parentName="p">{`report`}</inlineCode>{`: use this information to collect the result of the operation and indicate whether it was successful or not. The second parameter is the `}<inlineCode parentName="p">{`chunk`}</inlineCode>{` size, which determines how many items are processed in each batch. You can adjust this value to control the size of each batch.`}</p>
<p><inlineCode parentName="p">{`showResultsDialog`}</inlineCode>{` is used after the completion of the sending process to present the user with a summary of the actions performed, including information about successful items sent and any errors encountered during the process. This allows the user to review a detailed report of the entire operation.`}</p>
<Image src={pbBulkActionsAsync} title="Asyncronous Bulk Action" mdxType="Image" />
<_Heading level={2} id={"discover-bulk-actions"} nextElement={{
      "type": "paragraph"
    }}>Discover Bulk Actions</_Heading>
<p>{`This section demonstrates how you can discover the names of existing bulk actions. This is important for further sections on positioning, removing, and replacing bulk actions.`}</p>
<p>{`The easiest way to discover existing bulk actions is to use your browser’s React Dev Tools plugins, select at least one page and look for the `}<inlineCode parentName="p">{`Buttons`}</inlineCode>{` element inside `}<inlineCode parentName="p">{`BulkActions`}</inlineCode>{`. From there, you can either look for `}<inlineCode parentName="p">{`actions`}</inlineCode>{` prop or look at the child elements and their keys:`}</p>
<Image src={pbBulkActionsDiscover} title="Discover Existing Bulk Actions" mdxType="Image" />
<_Heading level={2} id={"position-a-bulk-action"} nextElement={{
      "type": "paragraph"
    }}>Position a Bulk Action</_Heading>
<p>{`To position your custom bulk action before or after an existing action, you can use the `}<inlineCode parentName="p">{`before`}</inlineCode>{` and `}<inlineCode parentName="p">{`after`}</inlineCode>{` props on the `}<inlineCode parentName="p">{`<Browser.BulkAction>`}</inlineCode>{` element:`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`<PageListConfig>
  <Browser.BulkAction name={"copy-json"} element={<ActionCopyJson />} before={"delete"} />
</PageListConfig>`}
</Editor>
<Image src={pbBulkActionsPosition} title="Position Your Action Before Another Action" mdxType="Image" />
<_Heading level={2} id={"remove-a-bulk-action"} nextElement={{
      "type": "paragraph"
    }}>Remove a Bulk Action</_Heading>
<p>{`Sometimes you might want to remove an existing bulk action. All you need to do is reference the action by name and pass a `}<inlineCode parentName="p">{`remove`}</inlineCode>{` prop to the `}<inlineCode parentName="p">{`<Browser.BulkAction>`}</inlineCode>{` element:`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`<PageListConfig>
  <Browser.BulkAction name={"delete"} remove />
</PageListConfig>`}
</Editor>
<_Heading level={2} id={"replace-a-bulk-action"} nextElement={{
      "type": "paragraph"
    }}>Replace a Bulk Action</_Heading>
<p>{`To replace an existing bulk action with a new action element, you need to reference an existing action by name and pass a new component via the `}<inlineCode parentName="p">{`element`}</inlineCode>{` prop:`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`<PageListConfig>
  <Browser.BulkAction name={"delete"} element={<span>A new action!</span>} />
</PageListConfig>`}
</Editor>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;