/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import pbAddPageAction from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/page-builder/extending/assets/pb-add-page-action.gif";
import pbAddFolderAction from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/page-builder/extending/assets/pb-add-folder-action.gif";
import pbDefaultActions from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/page-builder/extending/assets/pb-default-actions.gif";
import pbPositionPageActions from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/page-builder/extending/assets/pb-position-page-action.png";
import pbPositionFolderActions from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/page-builder/extending/assets/pb-position-folder-action.png";
import pbDiscoverPageActions from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/page-builder/extending/assets/pb-discover-page-actions.png";
import pbDiscoverFolderActions from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/page-builder/extending/assets/pb-discover-folder-actions.png";
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Customize Page List Actions",
  "description": "Learn how to add, replace, or remove actions in the Page List.",
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
  "title": "Page Actions",
  "slug": "page-actions",
  "children": [{
    "title": "Add a Page Action",
    "slug": "add-a-page-action",
    "children": []
  }, {
    "title": "Discover Page Actions",
    "slug": "discover-page-actions",
    "children": []
  }, {
    "title": "Position a Page Action",
    "slug": "position-a-page-action",
    "children": []
  }, {
    "title": "Remove a Page Action",
    "slug": "remove-a-page-action",
    "children": []
  }, {
    "title": "Replace a Page Action",
    "slug": "replace-a-page-action",
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
<li parentName="ul">{`how to add a custom action to the Page List`}</li>
<li parentName="ul">{`how to discover existing action names`}</li>
<li parentName="ul">{`how to change the position, remove, or replace an existing action`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`In Page Builder, pre-built actions empower users to edit, move or delete pages and folders directly from the page list table.`}</p>
<p>{`There are two distinct types of actions: `}<inlineCode parentName="p">{`FolderAction`}</inlineCode>{`, which is designed specifically for folders, and `}<inlineCode parentName="p">{`PageAction`}</inlineCode>{`, which is designed specifically for individual page entries.`}</p>
<Image src={pbDefaultActions} title="Default table actions" mdxType="Image" />
<_Heading level={2} id={"using-the-code-examples"} nextElement={{
      "type": "paragraph"
    }}>Using the Code Examples</_Heading>
<p>{`The following code examples follow our usual configuration pattern. You must add the code from the examples to your `}<inlineCode parentName="p">{`apps/admin/src/App.tsx`}</inlineCode>{`. Here’s an example:`}</p>
<Editor title="apps/admin/src/App.tsx" lang="diff-tsx" mdxType="Editor">
{`import React from "react";
import { Admin } from "@webiny/app-serverless-cms";
import { Cognito } from "@webiny/app-admin-users-cognito";
+ import { PageListConfig } from "@webiny/app-page-builder";
import "./App.scss";

+ // You can destructure config components to make the code more readable and easier to work with.
+ const { Browser } = PageListConfig;

export const App = () => {
    return (
      <Admin>
        <Cognito />
+       <PageListConfig>
+         {* Config components go here. *}
+       </PageListConfig>
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
import { PageListConfig } from "@webiny/app-page-builder";

export const CopyFolderData = () => {
  const { folder } = useFolder();
  const { showSnackbar } = useSnackbar();
  const { OptionsMenuItem } = PageListConfig.Browser.FolderAction;

  const copyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(folder, null, 2));
    showSnackbar("JSON data copied to clipboard.");
  };

  if (!folder) {
    return null;
  }

  return <OptionsMenuItem icon={<CopyIcon />} label={"Copy as JSON"} onAction={copyJson} />;
};`}
</Editor>
<p>{`You can pass the custom component to the folder action definition using the `}<inlineCode parentName="p">{`element`}</inlineCode>{` prop.`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`  <PageListConfig>
    <Browser.FolderAction
      name={"copy-json"}
      element={<CopyFolderData />}
    /> 
  </PageListConfig> `}
</Editor>
<p>{`This is the whole process of registering a new folder action element.`}</p>
<Image src={pbAddFolderAction} title="Custom Folder Action" mdxType="Image" />
<_Heading level={3} id={"discover-folder-actions"} nextElement={{
      "type": "paragraph"
    }}>Discover Folder Actions</_Heading>
<p>{`This section demonstrates how you can discover the names of existing folder actions. This is important for further sections on positioning, removing, and replacing existing actions.`}</p>
<p>{`The easiest way to discover existing folder actions is to use your browser’s React Dev Tools plugins and search for the `}<inlineCode parentName="p">{`BaseFolderAction`}</inlineCode>{`:`}</p>
<Image src={pbDiscoverFolderActions} title="Discover Existing Folder Actions" mdxType="Image" />
<_Heading level={3} id={"position-a-folder-action"} nextElement={{
      "type": "paragraph"
    }}>Position a Folder Action</_Heading>
<p>{`To position your custom folder action before or after an existing action, you can use the `}<inlineCode parentName="p">{`before`}</inlineCode>{` and `}<inlineCode parentName="p">{`after`}</inlineCode>{` props on the `}<inlineCode parentName="p">{`<Browser.FolderAction>`}</inlineCode>{` element:`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`<PageListConfig>
  <Browser.FolderAction 
    name={"copy-json"}
    element={<CopyFolderData />}
    before={"delete"}
  />
</PageListConfig>`}
</Editor>
<Image src={pbPositionFolderActions} title="Position Your Action Before Another Action" mdxType="Image" />
<_Heading level={3} id={"remove-a-folder-action"} nextElement={{
      "type": "paragraph"
    }}>Remove a Folder Action</_Heading>
<p>{`You may want to remove an existing action. All you need to do is reference the action by name and pass a `}<inlineCode parentName="p">{`remove`}</inlineCode>{` prop to the `}<inlineCode parentName="p">{`<Browser.FolderAction>`}</inlineCode>{` element:`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`<PageListConfig>
  <Browser.FolderAction name={"delete"} remove />
</PageListConfig>`}
</Editor>
<_Heading level={3} id={"replace-a-folder-action"} nextElement={{
      "type": "paragraph"
    }}>Replace a Folder Action</_Heading>
<p>{`To replace an existing action with a new action element, you need to reference an existing action by name and pass a new component via the `}<inlineCode parentName="p">{`element`}</inlineCode>{` prop:`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`<PageListConfig>
  <Browser.FolderAction
    name={"delete"}
    element={<span>A new action!</span>}
  />
</PageListConfig>`}
</Editor>
<_Heading level={2} id={"page-actions"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Page Actions</_Heading>
<_Heading level={3} id={"add-a-page-action"} nextElement={{
      "type": "paragraph"
    }}>Add a Page Action</_Heading>
<p>{`To add a new action, use the `}<inlineCode parentName="p">{`Browser.PageAction`}</inlineCode>{` component and mount it within your Admin app. This component will serve as the foundation for your action.`}</p>
<p>{`To ensure consistency in the UI, developers can use two components that inherit rules and guidelines from the Webiny core package:`}</p>
<ul>
<li parentName="ul"><inlineCode parentName="li">{`OptionsMenuItem`}</inlineCode>{`: triggers a defined action`}</li>
<li parentName="ul"><inlineCode parentName="li">{`OptionsMenuLink`}</inlineCode>{`: takes the user to a new location, such as a new web page`}</li>
</ul>
<p>{`Here is an example of creating a page action component that copies the selected page to the clipboard in JSON format.`}</p>
<Editor title="CopyPageData.tsx" lang="tsx" mdxType="Editor">
{`import React from "react";
import { ReactComponent as CopyIcon } from "@material-design-icons/svg/outlined/content_copy.svg";
import { useSnackbar } from "@webiny/app-admin";
import { PageListConfig, usePage } from "@webiny/app-page-builder";

export const CopyPageData = () => {
  const { page } = usePage();
  const { showSnackbar } = useSnackbar();
  const { OptionsMenuItem } = PageListConfig.Browser.PageAction;

  const copyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(page, null, 2));
    showSnackbar("JSON data copied to clipboard.");
  };

  if (!page) {
    return null;
  }

  return <OptionsMenuItem icon={<CopyIcon />} label={"Copy as JSON"} onAction={copyJson} />;
};`}
</Editor>
<p>{`You can pass the custom component to the page action definition using the `}<inlineCode parentName="p">{`element`}</inlineCode>{` prop.`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`  <PageListConfig>
    <Browser.PageAction
      name={"copy-json"}
      element={<CopyPageData />}
    /> 
  </PageListConfig> `}
</Editor>
<p>{`This is the whole process of registering a new page action element.`}</p>
<Image src={pbAddPageAction} title="Custom Page Action" mdxType="Image" />
<_Heading level={3} id={"discover-page-actions"} nextElement={{
      "type": "paragraph"
    }}>Discover Page Actions</_Heading>
<p>{`This section demonstrates how you can discover the names of existing page actions. This is important for further sections on positioning, removing, and replacing existing actions.`}</p>
<p>{`The easiest way to discover existing page actions is to use your browser’s React Dev Tools plugins and search for the `}<inlineCode parentName="p">{`BasePageAction`}</inlineCode>{`:`}</p>
<Image src={pbDiscoverPageActions} title="Discover Existing Page Actions" mdxType="Image" />
<_Heading level={3} id={"position-a-page-action"} nextElement={{
      "type": "paragraph"
    }}>Position a Page Action</_Heading>
<p>{`To position your custom page action before or after an existing action, you can use the `}<inlineCode parentName="p">{`before`}</inlineCode>{` and `}<inlineCode parentName="p">{`after`}</inlineCode>{` props on the `}<inlineCode parentName="p">{`<Browser.PageAction>`}</inlineCode>{` element:`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`<PageListConfig>
  <Browser.PageAction 
    name={"copy-json"}
    element={<CopyPageData />}
    before={"delete"}
  />
</PageListConfig>`}
</Editor>
<Image src={pbPositionPageActions} title="Position Your Action Before Another Action" mdxType="Image" />
<_Heading level={3} id={"remove-a-page-action"} nextElement={{
      "type": "paragraph"
    }}>Remove a Page Action</_Heading>
<p>{`You may want to remove an existing action. All you need to do is reference the action by name and pass a `}<inlineCode parentName="p">{`remove`}</inlineCode>{` prop to the `}<inlineCode parentName="p">{`<Browser.PageAction>`}</inlineCode>{` element:`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`<PageListConfig>
  <Browser.PageAction name={"delete"} remove />
</PageListConfig>`}
</Editor>
<_Heading level={3} id={"replace-a-page-action"} nextElement={{
      "type": "paragraph"
    }}>Replace a Page Action</_Heading>
<p>{`To replace an existing action with a new action element, you need to reference an existing action by name and pass a new component via the `}<inlineCode parentName="p">{`element`}</inlineCode>{` prop:`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`<PageListConfig>
  <Browser.PageAction
    name={"delete"} 
    element={<span>A new action!</span>} 
  />
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