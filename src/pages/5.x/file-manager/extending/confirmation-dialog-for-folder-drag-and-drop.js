/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { CanIUseThis } from "@/components/CanIUseThis";
import { Image } from "@/components/Image";
import { WhatYouWillLearn } from "@/components/WhatYouWillLearn";
import folderDropConfirmation from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/file-manager/extending/assets/fm-folder-drop-confirmation.gif";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Confirmation Dialog for Folder Drag & Drop",
  "description": "Learn how to prevent accidental folder moves.",
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
const tableOfContents = [];
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






<CanIUseThis since={"5.43.2"} mdxType="CanIUseThis" />
<WhatYouWillLearn mdxType="WhatYouWillLearn">
<ul>
<li parentName="ul">{`how to prevent accidental folder moves`}</li>
</ul>
</WhatYouWillLearn>
<p>{`To help prevent accidental folder moves, Webiny introduces a confirmation dialog that can be enabled through configuration.`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`import { FileManagerViewConfig } from "@webiny/app-file-manager";

// You can destructure child components to make the code more readable and easier to work with.
const { Browser } = FileManagerViewConfig;

<FileManagerViewConfig>
    <Browser.Folder.DropConfirmation value={true} />
</FileManagerViewConfig>`}
</Editor>
<p>{`When active, this feature prompts users to confirm their action before moving a folder from one location to another. `}</p>
<Image src={folderDropConfirmation} title={"Confirm folder move: prompt appears before completing drag-and-drop."} mdxType="Image" />
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;