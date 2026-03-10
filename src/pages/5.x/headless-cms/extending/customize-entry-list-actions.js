/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import hcmsAddEntryAction from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/extending/assets/hcms-add-entry-action.gif";
import hcmsAddFolderAction from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/extending/assets/hcms-add-folder-action.gif";
import hcmsDefaultActions from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/extending/assets/hcms-default-actions.gif";
import hcmsPositionEntryActions from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/extending/assets/hcms-position-entry-action.png";
import hcmsPositionFolderActions from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/extending/assets/hcms-position-folder-action.png";
import hcmsDiscoverEntryActions from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/extending/assets/hcms-discover-entry-actions.png";
import hcmsDiscoverFolderActions from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/extending/assets/hcms-discover-folder-actions.png";
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Customize Entry List Actions",
  "description": "Learn how to add, replace, or remove actions in the Entry List.",
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
  "title": "Using the Code Examples",
  "slug": "using-the-code-examples",
  "children": []
}, {
  "title": "Folder Actions",
  "slug": "folder-actions",
  "children": [{
    "title": "Add a Folder Action",
    "slug": "add-a-folder-action",
    "children": []
  }, {
    "title": "Discover Folder Actions",
    "slug": "discover-folder-actions",
    "children": []
  }, {
    "title": "Position a Folder Action",
    "slug": "position-a-folder-action",
    "children": []
  }, {
    "title": "Remove a Folder Action",
    "slug": "remove-a-folder-action",
    "children": []
  }, {
    "title": "Replace a Folder Action",
    "slug": "replace-a-folder-action",
    "children": []
  }]
}, {
  "title": "Entry Actions",
  "slug": "entry-actions",
  "children": [{
    "title": "Add an Entry Action",
    "slug": "add-an-entry-action",
    "children": []
  }, {
    "title": "Discover Entry Actions",
    "slug": "discover-entry-actions",
    "children": []
  }, {
    "title": "Position an Entry Action",
    "slug": "position-an-entry-action",
    "children": []
  }, {
    "title": "Remove an Entry Action",
    "slug": "remove-an-entry-action",
    "children": []
  }, {
    "title": "Replace an Entry Action",
    "slug": "replace-an-entry-action",
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










<Alert type="info" title="Can I Use This?" mdxType="Alert">
<p>{`This feature has been available since Webiny `}<strong parentName="p">{`v5.39.0`}</strong>{`.`}</p>
</Alert>
<Alert type="success" title="What you will learn" mdxType="Alert">
<ul>
<li parentName="ul">{`how to add a custom action to the Entry List`}</li>
<li parentName="ul">{`how to discover existing action names`}</li>
<li parentName="ul">{`how to change the position, remove, or replace an existing action`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`In Headless CMS, pre-built actions empower users to edit, move or delete entries and folders directly from the entry list table.`}</p>
<p>{`There are two distinct types of actions: `}<inlineCode parentName="p">{`FolderAction`}</inlineCode>{`, which is designed specifically for folders, and `}<inlineCode parentName="p">{`EntryAction`}</inlineCode>{`, which is designed specifically for individual entries.`}</p>
<Image src={hcmsDefaultActions} title="Default table actions" mdxType="Image" />
<_Heading level={2} id={"using-the-code-examples"} nextElement={{
      "type": "paragraph"
    }}>Using the Code Examples</_Heading>
<p>{`The following code examples follow our usual configuration pattern. You must add the code from the examples to your `}<inlineCode parentName="p">{`apps/admin/src/App.tsx`}</inlineCode>{`. Here’s an example:`}</p>
<Editor title="apps/admin/src/App.tsx" lang="diff-tsx" mdxType="Editor">
{`import React from "react";
import { Admin } from "@webiny/app-serverless-cms";
import { Cognito } from "@webiny/app-admin-users-cognito";
+ import { ContentEntryListConfig } from "@webiny/app-headless-cms";
import "./App.scss";

+ // You can destructure config components to make the code more readable and easier to work with.
+ const { Browser } = ContentEntryListConfig;

export const App = () => {
    return (
      <Admin>
        <Cognito />
+       <ContentEntryListConfig>
+         {* Config components go here. *}
+       </ContentEntryListConfig>
      </Admin>
    );
};`}
</Editor>
<_Heading level={2} id={"folder-actions"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Folder Actions</_Heading>
<_Heading level={3} id={"add-a-folder-action"} nextElement={{
      "type": "paragraph"
    }}>Add a Folder Action</_Heading>
<p>{`To add a new action, use the `}<inlineCode parentName="p">{`Browser.FolderAction`}</inlineCode>{` component and mount it within your Admin app. This component will serve as the foundation for your action.`}</p>
<p>{`To help developers keep the UI consistent, you’ll find a handy `}<inlineCode parentName="p">{`OptionsMenuItem`}</inlineCode>{` component, inheriting UI rules and guidelines from the Webiny core package.`}</p>
<p>{`Here is an example of creating a folder action component that copies the selected folder to the clipboard in JSON format.`}</p>
<Editor title="CopyFolderData.tsx" lang="tsx" mdxType="Editor">
{`import React from "react";
import { ReactComponent as CopyIcon } from "@material-design-icons/svg/outlined/content_copy.svg";
import { useFolder } from "@webiny/app-aco";
import { useSnackbar } from "@webiny/app-admin";
import { ContentEntryListConfig } from "@webiny/app-headless-cms";

export const CopyFolderData = () => {
  const { folder } = useFolder();
  const { showSnackbar } = useSnackbar();
  const { OptionsMenuItem } = ContentEntryListConfig.Browser.FolderAction;

  const copyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(folder, null, 2));
    showSnackbar("JSON data copied to clipboard.");
  };

  if (!folder) {
    return null;
  }

  return <OptionsMenuItem icon={<CopyIcon />} label={"Copy"} onAction={copyJson} />;
};`}
</Editor>
<p>{`You can pass the custom component to the folder action definition using the `}<inlineCode parentName="p">{`element`}</inlineCode>{` prop.`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`  <ContentEntryListConfig>
    <Browser.FolderAction
      name={"copy-json"}
      element={<CopyFolderData />}
      modelIds={["property"]}
    /> 
  </ContentEntryListConfig> `}
</Editor>
<p>{`By declaring the `}<inlineCode parentName="p">{`modelIds`}</inlineCode>{` prop, you can define which Content Model Entry List you want to show your action in. If you exclude this prop, the action will be registered for all models in the system. For instance, in the given example, the next time you open the `}<inlineCode parentName="p">{`property`}</inlineCode>{` content model browser, the defined action will be shown.`}</p>
<p>{`This is the whole process of registering a new folder action element.`}</p>
<Image src={hcmsAddFolderAction} title="Custom Folder Action" mdxType="Image" />
<_Heading level={3} id={"discover-folder-actions"} nextElement={{
      "type": "paragraph"
    }}>Discover Folder Actions</_Heading>
<p>{`This section demonstrates how you can discover the names of existing folder actions. This is important for further sections on positioning, removing, and replacing existing actions.`}</p>
<p>{`The easiest way to discover existing folder actions is to use your browser’s React Dev Tools plugins and search for the `}<inlineCode parentName="p">{`BaseFolderAction`}</inlineCode>{`:`}</p>
<Image src={hcmsDiscoverFolderActions} title="Discover Existing Folder Actions" mdxType="Image" />
<_Heading level={3} id={"position-a-folder-action"} nextElement={{
      "type": "paragraph"
    }}>Position a Folder Action</_Heading>
<p>{`To position your custom folder action before or after an existing action, you can use the `}<inlineCode parentName="p">{`before`}</inlineCode>{` and `}<inlineCode parentName="p">{`after`}</inlineCode>{` props on the `}<inlineCode parentName="p">{`<Browser.FolderAction>`}</inlineCode>{` element:`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`<ContentEntryListConfig>
  <Browser.FolderAction 
    name={"copy-json"}
    element={<CopyFolderData />}
    before={"delete"}
  />
</ContentEntryListConfig>`}
</Editor>
<Image src={hcmsPositionFolderActions} title="Position Your Action Before Another Action" mdxType="Image" />
<_Heading level={3} id={"remove-a-folder-action"} nextElement={{
      "type": "paragraph"
    }}>Remove a Folder Action</_Heading>
<p>{`You may want to remove an existing action. All you need to do is reference the action by name and pass a `}<inlineCode parentName="p">{`remove`}</inlineCode>{` prop to the `}<inlineCode parentName="p">{`<Browser.FolderAction>`}</inlineCode>{` element:`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`<ContentEntryListConfig>
  <Browser.FolderAction name={"delete"} remove />
</ContentEntryListConfig>`}
</Editor>
<_Heading level={3} id={"replace-a-folder-action"} nextElement={{
      "type": "paragraph"
    }}>Replace a Folder Action</_Heading>
<p>{`To replace an existing action with a new action element, you need to reference an existing action by name and pass a new component via the `}<inlineCode parentName="p">{`element`}</inlineCode>{` prop:`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`<ContentEntryListConfig>
  <Browser.FolderAction
    name={"delete"}
    element={<span>A new action!</span>}
  />
</ContentEntryListConfig>`}
</Editor>
<_Heading level={2} id={"entry-actions"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Entry Actions</_Heading>
<_Heading level={3} id={"add-an-entry-action"} nextElement={{
      "type": "paragraph"
    }}>Add an Entry Action</_Heading>
<p>{`To add a new action, use the `}<inlineCode parentName="p">{`Browser.EntryAction`}</inlineCode>{` component and mount it within your Admin app. This component will serve as the foundation for your action.`}</p>
<p>{`To ensure consistency in the UI, developers can use two components that inherit rules and guidelines from the Webiny core package:`}</p>
<ul>
<li parentName="ul"><inlineCode parentName="li">{`OptionsMenuItem`}</inlineCode>{`: triggers a defined action`}</li>
<li parentName="ul"><inlineCode parentName="li">{`OptionsMenuLink`}</inlineCode>{`: takes the user to a new location, such as a new web page`}</li>
</ul>
<p>{`Here is an example of creating an entry action component that copies the selected entry to the clipboard in JSON format.`}</p>
<Editor title="CopyEntryData.tsx" lang="tsx" mdxType="Editor">
{`import React from "react";
import { ReactComponent as CopyIcon } from "@material-design-icons/svg/outlined/content_copy.svg";
import { useSnackbar } from "@webiny/app-admin";
import { ContentEntryListConfig, useEntry } from "@webiny/app-headless-cms";

export const CopyEntryData = () => {
  const { entry } = useEntry();
  const { showSnackbar } = useSnackbar();
  const { OptionsMenuItem } = ContentEntryListConfig.Browser.EntryAction;

  const copyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(entry, null, 2));
    showSnackbar("JSON data copied to clipboard.");
  };

  if (!entry) {
    return null;
  }

  return <OptionsMenuItem icon={<CopyIcon />} label={"Copy"} onAction={copyJson} />;
};`}
</Editor>
<p>{`You can pass the custom component to the entry action definition using the `}<inlineCode parentName="p">{`element`}</inlineCode>{` prop.`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`  <ContentEntryListConfig>
    <Browser.EntryAction
      name={"copy-json"}
      element={<CopyEntryData />}
      modelIds={["property"]}
    /> 
  </ContentEntryListConfig> `}
</Editor>
<p>{`By declaring the `}<inlineCode parentName="p">{`modelIds`}</inlineCode>{` prop, you can define which Content Model Entry List you want to show your action in. If you exclude this prop, the action will be registered for all models in the system. For instance, in the given example, the next time you open the `}<inlineCode parentName="p">{`property`}</inlineCode>{` content model browser, the defined action will be shown.`}</p>
<p>{`This is the whole process of registering a new entry action element.`}</p>
<Image src={hcmsAddEntryAction} title="Custom Entry Action" mdxType="Image" />
<_Heading level={3} id={"discover-entry-actions"} nextElement={{
      "type": "paragraph"
    }}>Discover Entry Actions</_Heading>
<p>{`This section demonstrates how you can discover the names of existing entry actions. This is important for further sections on positioning, removing, and replacing existing actions.`}</p>
<p>{`The easiest way to discover existing entry actions is to use your browser’s React Dev Tools plugins and search for the `}<inlineCode parentName="p">{`BaseEntryAction`}</inlineCode>{`:`}</p>
<Image src={hcmsDiscoverEntryActions} title="Discover Existing Entry Actions" mdxType="Image" />
<_Heading level={3} id={"position-an-entry-action"} nextElement={{
      "type": "paragraph"
    }}>Position an Entry Action</_Heading>
<p>{`To position your custom entry action before or after an existing action, you can use the `}<inlineCode parentName="p">{`before`}</inlineCode>{` and `}<inlineCode parentName="p">{`after`}</inlineCode>{` props on the `}<inlineCode parentName="p">{`<Browser.EntryAction>`}</inlineCode>{` element:`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`<ContentEntryListConfig>
  <Browser.EntryAction 
    name={"copy-json"}
    element={<CopyEntryData />}
    before={"delete"}
  />
</ContentEntryListConfig>`}
</Editor>
<Image src={hcmsPositionEntryActions} title="Position Your Action Before Another Action" mdxType="Image" />
<_Heading level={3} id={"remove-an-entry-action"} nextElement={{
      "type": "paragraph"
    }}>Remove an Entry Action</_Heading>
<p>{`You may want to remove an existing action. All you need to do is reference the action by name and pass a `}<inlineCode parentName="p">{`remove`}</inlineCode>{` prop to the `}<inlineCode parentName="p">{`<Browser.EntryAction>`}</inlineCode>{` element:`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`<ContentEntryListConfig>
  <Browser.EntryAction name={"delete"} remove />
</ContentEntryListConfig>`}
</Editor>
<_Heading level={3} id={"replace-an-entry-action"} nextElement={{
      "type": "paragraph"
    }}>Replace an Entry Action</_Heading>
<p>{`To replace an existing action with a new action element, you need to reference an existing action by name and pass a new component via the `}<inlineCode parentName="p">{`element`}</inlineCode>{` prop:`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`<ContentEntryListConfig>
  <Browser.EntryAction
    name={"delete"} 
    element={<span>A new action!</span>} 
  />
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