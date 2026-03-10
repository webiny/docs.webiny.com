/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import hcmsBulkActions from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/extending/assets/hcms-bulk-actions.png";
import hcmsBulkActionsSimple from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/extending/assets/hcms-bulk-actions-simple.gif";
import hcmsBulkActionsAsync from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/extending/assets/hcms-bulk-actions-async.gif";
import hcmsBulkActionsBackgroundTask from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/extending/assets/hcms-bulk-actions-background-task.gif";
import hcmsBulkActionsDiscover from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/extending/assets/hmcs-bulk-actions-discover.png";
import hcmsBulkActionsPosition from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/extending/assets/hcms-bulk-actions-position.png";
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Customize Entry List Bulk Actions",
  "description": "Learn how to add, replace, or remove bulk actions in the Entry List.",
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
  }, {
    "title": "Bulk Action via Background Task",
    "slug": "bulk-action-via-background-task",
    "children": [{
      "title": "Defining the Bulk Action Task",
      "slug": "defining-the-bulk-action-task"
    }, {
      "title": "Building the Admin Plugin",
      "slug": "building-the-admin-plugin"
    }]
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
<li parentName="ul">{`how to add a custom bulk action to the Entry List`}</li>
<li parentName="ul">{`how to discover existing bulk action names`}</li>
<li parentName="ul">{`how to change the position, remove, or replace an existing bulk action`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`In Headless CMS, pre-built actions empower users to modify status, delete, or move multiple entries effortlessly. These actions become visible when you select one or more entries from the list.`}</p>
<p>{`To work with bulk actions, you need to use the `}<inlineCode parentName="p">{`ContentEntryListConfig`}</inlineCode>{` component. For this article, we will use the `}<inlineCode parentName="p">{`BulkAction`}</inlineCode>{` in the `}<inlineCode parentName="p">{`Browser`}</inlineCode>{` namespace.`}</p>
<Editor title="apps/admin/src/App.tsx" lang="diff-tsx" mdxType="Editor">
{`import React from "react";
import { Admin } from "@webiny/app-serverless-cms";
import { Cognito } from "@webiny/app-admin-users-cognito";
+ import { ContentEntryListConfig } from "@webiny/app-headless-cms";
import "./App.scss";

+ // You can destructure child components to make the code more readable and easier to work with.
+ const { Browser } = ContentEntryListConfig;

export const App = () => {
    return (
      <Admin>
        <Cognito />
+       <ContentEntryListConfig>
+          <Browser.BulkAction name={"demo-bulk-action”} element={<span>Demo Bulk Action</span>} />
+       </ContentEntryListConfig>
      </Admin>
    );
};`}
</Editor>
<p><inlineCode parentName="p">{`Browser`}</inlineCode>{` is the crucial component of the Admin app’s Content Entry List. This is where users can easily browse through entries, apply filters, perform searches, create new entries, and organize them into folders.`}</p>
<p>{`If users select one or more entries from the list, the bulk action bar will appear.`}</p>
<Image src={hcmsBulkActions} title="Browser and the Built-in Bulk Actions" mdxType="Image" />
<_Heading level={2} id={"add-a-bulk-action"} nextElement={{
      "type": "paragraph"
    }}>Add a Bulk Action</_Heading>
<p>{`To add a new bulk action, use the `}<inlineCode parentName="p">{`ContentEntryListConfig`}</inlineCode>{` component and mount it within your Admin app. This component will serve as the foundation for your bulk actions.`}</p>
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
<p>{`Here is an example of creating a bulk action that copies the selected entries to the clipboard in JSON format.`}</p>
<Image src={hcmsBulkActionsSimple} title="Custom Simple Bulk Action" mdxType="Image" />
<Alert type={"info"} title="Extension Available!" mdxType="Alert">
{`This example can be installed directly into your project by running:`}
<br />


<inlineCode>{`yarn webiny scaffold extension headless-cms/bulk-action-simple`}</inlineCode>
<p>{`Extension source code, and the accompanying content model, can be found `}<a parentName="p" {...{
          "href": "https://github.com/webiny/webiny-examples/tree/master/headless-cms/bulk-action-simple"
        }}>{`here`}</a>{`.`}</p>
</Alert>
<Editor title="" lang="tsx" mdxType="Editor">
{`import React from "react";
import { useSnackbar } from "@webiny/app-admin";
import { ContentEntryListConfig } from "@webiny/app-headless-cms";
import { ReactComponent as CopyIcon } from "@material-design-icons/svg/outlined/content_copy.svg";

const { BulkAction } = ContentEntryListConfig.Browser;
const { useWorker, useButtons, useDialog } = BulkAction;

const ActionCopyJson = () => {
  const { IconButton } = useButtons();
  const { showSnackbar } = useSnackbar();
  const worker = useWorker();

  const copyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(worker.items, null, 2));
    showSnackbar("JSON data copied to clipboard.");
  };

  return (
    <IconButton
      icon={<CopyIcon />}
      onAction={copyJson}
      label={\`Copy as JSON\`}
      tooltipPlacement={"bottom"}
      disabled={worker.isSelectedAll}
    />
  );
};

export const Extension = () => {
  return (
    <>
      <ContentEntryListConfig>
        <BulkAction
          name={"copy-json"}
          element={<ActionCopyJson />}
        />
      </ContentEntryListConfig>
    </>
  );
};`}
</Editor>
<p>{`The `}<inlineCode parentName="p">{`items`}</inlineCode>{` property obtained from `}<inlineCode parentName="p">{`useWorker()`}</inlineCode>{` is a crucial part of managing bulk actions: these are the currently selected items within the context of the Content Entry List.`}</p>
<p>{`By declaring the `}<inlineCode parentName="p">{`modelIds`}</inlineCode>{` prop, you can define in which Content Model Entry List you want to show your bulk action. If you exclude this prop, the bulk action will be registered for all models in the system. For instance, in the given example, next time you open the `}<inlineCode parentName="p">{`article`}</inlineCode>{` content model browser and choose one or multiple entries, the defined bulk action will be shown.`}</p>
<p>{`This is the whole process of registering a new bulk action element.`}</p>
<_Heading level={3} id={"asynchronous-bulk-action"} nextElement={{
      "type": "paragraph"
    }}>Asynchronous Bulk Action</_Heading>
<p>{`Occasionally, you might need to perform a bulk action that involves various asynchronous tasks, like syncing chosen entries with an external service. In these situations, we can leverage the `}<inlineCode parentName="p">{`useWorker`}</inlineCode>{` and `}<inlineCode parentName="p">{`useDialogs`}</inlineCode>{` hooks to ensure a smooth user experience:`}</p>
<ul>
<li parentName="ul"><inlineCode parentName="li">{`useWorker`}</inlineCode>{` provides the currently selected items and the `}<inlineCode parentName="li">{`processInSeries`}</inlineCode>{` method to perform our callback.`}</li>
<li parentName="ul"><inlineCode parentName="li">{`useDialog`}</inlineCode>{` provides methods to display confirmation and result dialogs.`}</li>
</ul>
<p>{`Here’s an example of creating a bulk action that syncs the selected entries with an external service using `}<inlineCode parentName="p">{`fetch`}</inlineCode>{`, and shows the result of each iteration.`}</p>
<Image src={hcmsBulkActionsAsync} title="Asyncronous Bulk Action" mdxType="Image" />
<Alert type={"info"} title="Extension Available!" mdxType="Alert">
{`This example can be installed directly into your project by running:`}
<br />


<inlineCode>{`yarn webiny scaffold extension headless-cms/bulk-action-asynchronous`}</inlineCode>
<p>{`Extension source code, and the accompanying content model, can be found `}<a parentName="p" {...{
          "href": "https://github.com/webiny/webiny-examples/tree/master/headless-cms/bulk-action-asynchronous"
        }}>{`here`}</a>{`.`}</p>
</Alert>
<Editor title="" lang="tsx" mdxType="Editor">
{`import React from "react";
import { ContentEntryListConfig } from "@webiny/app-headless-cms";
import { ReactComponent as SyncIcon } from "@material-design-icons/svg/outlined/sync.svg";

const { BulkAction } = ContentEntryListConfig.Browser;
const { useWorker, useButtons, useDialog } = BulkAction;

const ActionSync = () => {
  const { IconButton } = useButtons();
  const { showConfirmationDialog, showResultsDialog } = useDialog();
  const worker = useWorker();

  const openSyncDialog = () =>
    showConfirmationDialog({
      title: "Sync",
      message: \`You are about to sync the selected entries. Are you sure you want to continue?\`,
      loadingLabel: \`Processing\`,
      execute: async () => {
        await worker.processInSeries(async ({ item, report }) => {
          try {
            const response = await fetch(
              "https://any.url.com",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(item.id)
              }
            );

            report.success({
              title: item.meta.title,
              message: \`Entry successfully synced, response status: \${response.status}\`
            });
          } catch (e) {
            report.error({
              title: item.meta.title,
              message: e.message
            });
          }
        }, 5);

        worker.resetItems();

        showResultsDialog({
          results: worker.results,
          title: "Sync",
          message: "Operation completed, here below you find the complete report:"
        });
      }
    });

  return (
    <IconButton
      icon={<SyncIcon />}
      onAction={openSyncDialog}
      label={"Sync"}
      tooltipPlacement={"bottom"}
      disabled={worker.isSelectedAll}
    />
  );
};

export const Extension = () => {
  return (
    <>
      <ContentEntryListConfig>
        <BulkAction
          name={"sync"}
          element={<ActionSync />}
        />
      </ContentEntryListConfig>
    </>
  );
};`}
</Editor>
<p>{`For the `}<inlineCode parentName="p">{`IconButton`}</inlineCode>{` component, the `}<inlineCode parentName="p">{`onAction`}</inlineCode>{` prop can accept any method. In the current scenario, we are using the `}<inlineCode parentName="p">{`showConfirmationDialog`}</inlineCode>{` method to open a dialog.`}</p>
<p><inlineCode parentName="p">{`showConfirmationDialog`}</inlineCode>{` is designed to receive a callback function, which will be executed when the users confirm their action. You can pass any callback function to this method or use the `}<inlineCode parentName="p">{`processInSeries`}</inlineCode>{` method from the `}<inlineCode parentName="p">{`useWorker`}</inlineCode>{` hook.`}</p>
<p><inlineCode parentName="p">{`processInSeries`}</inlineCode>{` requires a callback as its first parameter. This callback is provided with the current item of the list being iterated and `}<inlineCode parentName="p">{`report`}</inlineCode>{`: use this information to collect the result of the operation and indicate whether it was successful or not. The second parameter is the `}<inlineCode parentName="p">{`chunk`}</inlineCode>{` size, which determines how many items are processed in each batch. You can adjust this value to control the size of each batch.`}</p>
<p><inlineCode parentName="p">{`showResultsDialog`}</inlineCode>{` is used after the completion of the sending process to present the user with a summary of the actions performed, including information about successful entries sent and any errors encountered during the process. This allows the user to review a detailed report of the entire operation.`}</p>
<p>{`By declaring the `}<inlineCode parentName="p">{`modelIds`}</inlineCode>{` prop, you can define in which Content Model Entry List you want to show your bulk action. If you exclude this prop, the bulk action will be registered for all models in the system. For instance, in the given example, next time you open the `}<inlineCode parentName="p">{`article`}</inlineCode>{` content model browser and choose one or multiple entries, the defined bulk action will be shown.`}</p>
<_Heading level={3} id={"bulk-action-via-background-task"} nextElement={{
      "type": "paragraph"
    }}>Bulk Action via Background Task</_Heading>
<p>{`When working with large datasets, performing bulk actions in the background is essential for maintaining a smooth user experience. Webiny allows editors to perform bulk actions asynchronously in the background, eliminating the need for sequential processing on the client side. This functionality is powered by the `}<_Link href="/docs/5.x/core-development-concepts/background-tasks/about-background-tasks">{`Webiny background task feature`}</_Link>{`, which simplifies large-scale operations.`}</p>
<p>{`In this tutorial, we’ll walk you through creating a plugin to enable bulk actions in the background. You don’t need to be familiar with the background task infrastructure, as Webiny provides simplified APIs that allow you to focus on your business logic.`}</p>
<p>{`By the end of this article, you’ll learn how to:`}</p>
<ul>
<li parentName="ul">{`Create a bulk action task that runs in the background.`}</li>
<li parentName="ul">{`Develop an admin plugin that manages triggers and background processes for the specific task.`}</li>
</ul>
<Image src={hcmsBulkActionsBackgroundTask} title="Bulk Action via Background Task" mdxType="Image" />
<Alert type={"info"} title="Extension Available!" mdxType="Alert">
{`This example can be installed directly into your project by running:`}
<br />


<inlineCode>{`yarn webiny scaffold extension headless-cms/bulk-action-background-task`}</inlineCode>
<p>{`Extension source code, and the accompanying content model, can be found `}<a parentName="p" {...{
          "href": "https://github.com/webiny/webiny-examples/tree/master/headless-cms/bulk-action-background-task"
        }}>{`here`}</a>{`.`}</p>
</Alert>
<_Heading level={4} id={"defining-the-bulk-action-task"} nextElement={{
      "type": "paragraph"
    }}>Defining the Bulk Action Task</_Heading>
<p>{`When creating a bulk action task, it’s important to define both the logic for listing and processing entries. Another critical aspect of bulk action tasks is state management. As entries are processed, their state must change to ensure they aren’t queried multiple times during subsequent listing operations. This is particularly important when dealing with large datasets. Without a mechanism to mark entries as processed (e.g., by updating a field), the system could repeatedly process the same items, leading to inefficiency and redundancy.`}</p>
<p>{`In this example, we update the entry title with a unique tag (e.g., the current year) during the bulk action. This not only serves the purpose of the task but also prevents the entry from being listed again in subsequent operations, as the title no longer matches the filtering criteria.`}</p>
<Editor title="" lang="ts" mdxType="Editor">
{`import {
  createBulkAction,
  IProcessEntry,
  IListEntries
} from "@webiny/api-headless-cms-bulk-actions";
import { getUpdatedTag } from "@demo/shared";
import { HcmsBulkActionsContext } from "@webiny/api-headless-cms-bulk-actions/types";
import { CmsEntryListParams, CmsModel } from "@webiny/api-headless-cms/types";

// Class for listing entries that need updating
class ListLatestEntriesUpdatedThisYear implements IListEntries {
  private readonly context: HcmsBulkActionsContext;

  constructor(context: HcmsBulkActionsContext) {
    this.context = context;
  }

  async execute(modelId: string, params: CmsEntryListParams) {
    const model = await this.context.cms.getModel(modelId);
    if (!model) {
      throw new Error(\`Model with \${modelId} not found!\`);
    }

    const [entries, meta] = await this.context.cms.listLatestEntries(model, {
      ...params,
      where: {
        ...params.where,
        title_not_startsWith: getUpdatedTag() // Filter entries that haven't been updated
      }
    });

    return {
      entries,
      meta
    };
  }
}

// Class for processing the selected entries by prepending the year
class PrependCurrentYearToTitle implements IProcessEntry {
  private readonly context: HcmsBulkActionsContext;

  constructor(context: HcmsBulkActionsContext) {
    this.context = context;
  }

  async execute(model: CmsModel, id: string) {
    const entry = await this.context.cms.getEntryById(model, id);
    await this.context.cms.createEntryRevisionFrom(model, id, {
      title: getUpdatedTag() + entry.values.title
    });
  }
}

// Function that ties everything together
export const createBulkActionUpdateYear = () => {
  return [
    createBulkAction({
      name: "updateYear", // Unique name for the bulk action - Camel Case
      dataLoader: (context: HcmsBulkActionsContext) =>
        new ListLatestEntriesUpdatedThisYear(context),
      dataProcessor: (context: HcmsBulkActionsContext) =>
        new PrependCurrentYearToTitle(context)
    })
  ];
};`}
</Editor>
<p>{`The bulk action task uses two classes:`}</p>
<ol>
<li parentName="ol"><inlineCode parentName="li">{`ListLatestEntriesUpdatedThisYear`}</inlineCode>{`: Lists the entries that haven’t been updated yet, filtering out entries where the title already includes the current year.`}</li>
<li parentName="ol"><inlineCode parentName="li">{`PrependCurrentYearToTitle`}</inlineCode>{`: For each entry, it appends the current year to the title and saves the new revision.`}</li>
</ol>
<_Heading level={4} id={"building-the-admin-plugin"} nextElement={{
      "type": "paragraph"
    }}>Building the Admin Plugin</_Heading>
<p>{`In this section, we will create an admin interface to trigger the bulk action. You will observe similarities with other task definitions. A critical aspect is defining how to invoke the background task when selecting all entries.`}</p>
<p>{`The admin plugin must accommodate two methods for processing entries:`}</p>
<ul>
<li parentName="ul">{`Invoking the newly defined Bulk Action Task using its name in PascalCase (`}<inlineCode parentName="li">{`UpdateYear`}</inlineCode>{`).`}</li>
<li parentName="ul">{`Providing the client-side code that executes while processing the entries.`}</li>
</ul>
<p>{`At this stage, please note that real-time status updates on background tasks are not yet supported. Users will need to manually refresh the page to view the current status of their tasks.`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`import React from "react";
import { useRecords } from "@webiny/app-aco";
import { useSnackbar } from "@webiny/app-admin";
import { ContentEntryListConfig, useCms, useModel } from "@webiny/app-headless-cms";
import { getUpdatedTag } from "@demo/shared";
import { ReactComponent as CalendarIcon } from "@material-design-icons/svg/outlined/calendar_month.svg";

const { BulkAction } = ContentEntryListConfig.Browser;
const { useWorker, useButtons, useDialog } = BulkAction;

const ActionUpdateYear = () => {
  const { IconButton } = useButtons();
  const worker = useWorker();
  const { showConfirmationDialog, showResultsDialog } = useDialog();
  const { model } = useModel();
  const { createEntryRevisionFrom } = useCms();
  const { updateRecordInCache } = useRecords();
  const { showSnackbar } = useSnackbar();

  const openUpdateYearDialog = () =>
    showConfirmationDialog({
      title: "Update Year",
      message: "You are about to update the year for the selected entries. Are you sure you want to continue?",
      loadingLabel: "Processing",
      execute: async () => {
        if (worker.isSelectedAll) {
          // Invoke the bulk action task for all selected entries
          await worker.processInBulk({ action: "UpdateYear" });
          worker.resetItems();

          showSnackbar(
            "All entries will be updated. This process will be carried out in the background and may take some time.",
            { dismissIcon: true, timeout: -1 }
          );
          return;
        }

        // Process each selected entry individually
        await worker.processInSeries(async ({ item, report }) => {
          try {
            const response = await createEntryRevisionFrom({
              model,
              id: item.id,
              input: { title: getUpdatedTag() + item.title }
            });

            const { error } = response;
            if (error) throw new Error(error.message || "Unknown error while publishing the entry");

            updateRecordInCache(response.entry);

            report.success({
              title: item.meta.title,
              message: "Entry successfully sent"
            });
          } catch (e) {
            report.error({
              title: item.meta.title,
              message: e.message
            });
          }
        });

        worker.resetItems();

        showResultsDialog({
          results: worker.results,
          title: "Update Year",
          message: "Operation completed. Below is the complete report:"
        });
      }
    });

  return (
    <IconButton
      icon={<CalendarIcon />}
      onAction={openUpdateYearDialog}
      label="Update Year"
      tooltipPlacement="bottom"
    />
  );
};

export const Extension = () => {
  return (
    <>
      <ContentEntryListConfig>
        <BulkAction name={"update-year"} element={<ActionUpdateYear />} />
      </ContentEntryListConfig>
    </>
  );
};`}
</Editor>
<_Heading level={2} id={"discover-bulk-actions"} nextElement={{
      "type": "paragraph"
    }}>Discover Bulk Actions</_Heading>
<p>{`This section demonstrates how you can discover the names of existing bulk actions. This is important for further sections on positioning, removing, and replacing bulk actions.`}</p>
<p>{`The easiest way to discover existing bulk actions is to use your browser’s React Dev Tools plugins, select at least one entry and look for the `}<inlineCode parentName="p">{`Buttons`}</inlineCode>{` element inside `}<inlineCode parentName="p">{`BulkActions`}</inlineCode>{`. From there, you can either look for `}<inlineCode parentName="p">{`actions`}</inlineCode>{` prop or look at the child elements and their keys:`}</p>
<Image src={hcmsBulkActionsDiscover} title="Discover Existing Bulk Actions" mdxType="Image" />
<_Heading level={2} id={"position-a-bulk-action"} nextElement={{
      "type": "paragraph"
    }}>Position a Bulk Action</_Heading>
<p>{`To position your custom bulk action before or after an existing action, you can use the `}<inlineCode parentName="p">{`before`}</inlineCode>{` and `}<inlineCode parentName="p">{`after`}</inlineCode>{` props on the `}<inlineCode parentName="p">{`<Browser.BulkAction>`}</inlineCode>{` element:`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`<ContentEntryListConfig>
  <Browser.BulkAction name={"copy-json"} element={<ActionCopyJson />} before={"delete"} />
</ContentEntryListConfig>`}
</Editor>
<Image src={hcmsBulkActionsPosition} title="Position Your Action Before Another Action" mdxType="Image" />
<_Heading level={2} id={"remove-a-bulk-action"} nextElement={{
      "type": "paragraph"
    }}>Remove a Bulk Action</_Heading>
<p>{`Sometimes you might want to remove an existing bulk action. All you need to do is reference the action by name and pass a `}<inlineCode parentName="p">{`remove`}</inlineCode>{` prop to the `}<inlineCode parentName="p">{`<Browser.BulkAction>`}</inlineCode>{` element:`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`<ContentEntryListConfig>
  <Browser.BulkAction name={"delete"} remove />
</ContentEntryListConfig>`}
</Editor>
<_Heading level={2} id={"replace-a-bulk-action"} nextElement={{
      "type": "paragraph"
    }}>Replace a Bulk Action</_Heading>
<p>{`To replace an existing bulk action with a new action element, you need to reference an existing action by name and pass a new component via the `}<inlineCode parentName="p">{`element`}</inlineCode>{` prop:`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`<ContentEntryListConfig>
  <Browser.BulkAction name={"delete"} element={<span>A new action!</span>} />
</ContentEntryListConfig>`}
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