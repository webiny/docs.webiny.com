/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import fmFilesActions from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/file-manager/extending/assets/fm-files-actions.png";
import fmFilesActions2 from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/file-manager/extending/assets/fm-files-actions-2.png";
import fmFilesGridActionPlay from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/file-manager/extending/assets/fm-files-grid-action-play.png";
import fmFilesGridDetailsActionPlay from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/file-manager/extending/assets/fm-files-details-action-play.png";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Customize File Actions",
  "description": "Learn how to customize file actions in File Manager, either globally or for specific file types.",
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
  "title": "Getting Started",
  "slug": "getting-started",
  "children": []
}, {
  "title": "Global File Actions",
  "slug": "global-file-actions",
  "children": []
}, {
  "title": "File Type Specific File Actions",
  "slug": "file-type-specific-file-actions",
  "children": []
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
const CanIUseThis = makeShortcode("CanIUseThis");
const WhatYouWillLearn = makeShortcode("WhatYouWillLearn");
const Image = makeShortcode("Image");
const ExtensionsGettingStarted = makeShortcode("ExtensionsGettingStarted");
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






<CanIUseThis since={"5.40.0"} mdxType="CanIUseThis" />
<WhatYouWillLearn mdxType="WhatYouWillLearn">
<ul>
<li parentName="ul">{`how to customize file actions globally (for all types of files)`}</li>
<li parentName="ul">{`how to customize file actions for specific types of files`}</li>
</ul>
</WhatYouWillLearn>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`Files in File Manager can have different actions associated with them. These actions are displayed in the file browser (when hovering over a file) and file details panel. `}</p>
<Image src={fmFilesActions} title="File Actions In File Browser" mdxType="Image" />
<Image src={fmFilesActions2} title="File Actions In File Details Panel" mdxType="Image" />
<p>{`On top of the built-in actions, it’s also possible to add custom actions, which can be displayed for all types of files (global actions) or for specific file types. `}</p>
<p>{`In this guide, we show how to add custom actions for both scenarios.`}</p>
<_Heading level={2} id={"getting-started"} nextElement={{
      "type": "jsx"
    }}>Getting Started</_Heading>
<ExtensionsGettingStarted type={"admin"} name={"customFileActions"} dependencies={"@webiny/app-file-manager,@material-design-icons/svg"} mdxType="ExtensionsGettingStarted" />
<_Heading level={2} id={"global-file-actions"} nextElement={{
      "type": "paragraph"
    }}>Global File Actions</_Heading>
<p>{`In the following snippet of code, we show how we can introduce a file action that will be displayed for all types of files.`}</p>
<Editor title="extensions/customFileActions/src/index.tsx" lang="tsx" mdxType="Editor">
{`import React from "react";
import { FileManagerViewConfig, useFile } from "@webiny/app-file-manager";
import { ReactComponent as PlayIcon } from "@material-design-icons/svg/round/play_arrow.svg";

// To make the code more readable, we immediately destructure child components.
const { Browser, FileDetails } = FileManagerViewConfig;

const GridItemAction = () => {
    return (
        <Browser.Grid.Item.Action.IconButton
            icon={<PlayIcon />}
            onAction={() => {
                alert("In the future, this will be useful.");
            }}
        />
    );
};

const FileDetailsAction = () => {
    return (
        <FileDetails.Action.IconButton
            label={"Play Video"}
            icon={<PlayIcon />}
            onAction={() => {
                alert("In the future, this will be useful.");
            }}
        />
    );
};

export const Extension = () => {
    return (
        <>
            <FileManagerViewConfig>
                <Browser.Grid.Item.Action name={"playVideo"} element={<GridItemAction />} />
                <FileDetails.Action name={"playVideo"} element={<FileDetailsAction />} />
            </FileManagerViewConfig>
        </>
    );
};`}
</Editor>
<p>{`As we can see, we created two components, `}<inlineCode parentName="p">{`GridItemAction`}</inlineCode>{` and `}<inlineCode parentName="p">{`FileDetailsAction`}</inlineCode>{`, which represent the action in the file browser (grid view) and file details panel, respectively. Once created, we register these components as actions with the `}<inlineCode parentName="p">{`FileManagerViewConfig`}</inlineCode>{` component and its `}<inlineCode parentName="p">{`Browser.Grid.Item.Action`}</inlineCode>{` and `}<inlineCode parentName="p">{`FileDetails.Action`}</inlineCode>{` components.`}</p>
<p>{`With this code in place, the `}<strong parentName="p">{`Play Video`}</strong>{` action will be displayed for all types of files, both in the file browser (grid view) and file details panel.`}</p>
<Image src={fmFilesGridActionPlay} title="File Browser - Play Video Action" mdxType="Image" />
<Image src={fmFilesGridDetailsActionPlay} title="File Details Panel - Play Video Action" mdxType="Image" />
<_Heading level={2} id={"file-type-specific-file-actions"} nextElement={{
      "type": "paragraph"
    }}>File Type Specific File Actions</_Heading>
<p>{`Besides global actions, we can also introduce actions for specific file types. `}</p>
<p>{`To do that, in the `}<inlineCode parentName="p">{`GridItemAction`}</inlineCode>{` and `}<inlineCode parentName="p">{`FileDetailsAction`}</inlineCode>{` components, we use the `}<inlineCode parentName="p">{`useFile`}</inlineCode>{` hook to get the current file and check its `}<inlineCode parentName="p">{`type`}</inlineCode>{` property. If the file type is not `}<inlineCode parentName="p">{`video/quicktime`}</inlineCode>{`, we return `}<inlineCode parentName="p">{`null`}</inlineCode>{` and the action is not displayed.`}</p>
<Editor title="extensions/customFileActions/src/index.tsx" lang="diff-tsx" mdxType="Editor">
{`import React from "react";
+ import { FileManagerViewConfig, useFile } from "@webiny/app-file-manager";
import { ReactComponent as PlayIcon } from "@material-design-icons/svg/round/play_arrow.svg";

// To make the code more readable, we immediately destructure child components.
const { Browser, FileDetails } = FileManagerViewConfig;

const GridItemAction = () => {
+    const { file } = useFile();
+    if (file.type !== "video/quicktime") {
+        return null;
+    }

    return (
        <Browser.Grid.Item.Action.IconButton
            icon={<PlayIcon />}
            onAction={() => {
                alert("In the future, this will be useful.");
            }}
        />
    );
};

const FileDetailsAction = () => {
+   const { file } = useFile();
+   if (file.type !== "video/quicktime") {
+       return null;
+   }

    return (
        <FileDetails.Action.IconButton
            label={"Play Video"}
            icon={<PlayIcon />}
            onAction={() => {
                alert("In the future, this will be useful.");
            }}
        />
    );
};

export const Extension = () => {
    return (
        <>
            <FileManagerViewConfig>
                <Browser.Grid.Item.Action name={"playVideo"} element={<GridItemAction />} />
                <FileDetails.Action name={"playVideo"} element={<FileDetailsAction />} />
            </FileManagerViewConfig>
        </>
    );
};`}
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