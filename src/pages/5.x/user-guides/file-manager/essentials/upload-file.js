/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/5.x/file-manager/essentials/assets/upload-file/red-mens-tshirt.png'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import uploadFileExplorerVideo from "/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/5.x/file-manager/essentials/assets/upload-file/upload-file-file-explorer.mp4";
import uploadFileDragDropVideo from "/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/5.x/file-manager/essentials/assets/upload-file/upload-file-drag-and-drop.mp4";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.79c9f1.json";

import _versions from "@/data/versions.ff7084.json";

const Layout = _Layout;
const pageData = {
  "title": "File Upload",
  "description": "Learn how to upload a file in File Manager.",
  "type": "user-guides",
  "showPageHeader": true,
  "fullWidth": false,
  "version": "5.x"
};
const docsearch = {
  "type": "user-guides",
  "weight": 100,
  "versions": ["5.x"]
};
const navigation = _navigation;
const versions = _versions;
const tableOfContents = [{
  "title": "Approach 1: Through File Explorer",
  "slug": "approach-1-through-file-explorer",
  "children": []
}, {
  "title": "Approach 2: Drag and Drop",
  "slug": "approach-2-drag-and-drop",
  "children": []
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
const Image = makeShortcode("Image");
const Video = makeShortcode("Video");
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






<Alert type="success" title="WHAT YOU'LL LEARN" mdxType="Alert">
<ul>
<li parentName="ul">{`how to upload a file`}</li>
</ul>
</Alert>
<p>{`Webiny allows you to effortlessly upload files into the File Manager that you can use across your application. In this tutorial, we will learn how to upload a file into the File Manager. As an example, we will upload the image shown below. Please save it on your computer to upload later.`}</p>
<Image src={_Image1} alt={"Men's Red Tshirt"} mdxType="Image" />
<p>{`There are two ways to upload a file in File Manager; let’s look at each approach one by one.`}</p>
<_Heading level={2} id={"approach-1-through-file-explorer"} nextElement={{
      "type": "jsx"
    }}>Approach 1: Through File Explorer</_Heading>
<Video src={uploadFileExplorerVideo} controls={true} mdxType="Video" />
<ol>
<li parentName="ol">
<p parentName="li">{`From the `}<strong parentName="p">{`Side Menu`}</strong>{`, click `}<strong parentName="p">{`File Manager`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`File Manager Home`}</strong>{` screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`UPLOAD…`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The file explorer screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`From the file explorer, upload the image.`}</p>
<p parentName="li">{`✔️ The message “File upload complete.” displays.`}</p>
</li>
</ol>
<_Heading level={2} id={"approach-2-drag-and-drop"} nextElement={{
      "type": "jsx"
    }}>Approach 2: Drag and Drop</_Heading>
<Video src={uploadFileDragDropVideo} controls={true} mdxType="Video" />
<ol>
<li parentName="ol">
<p parentName="li">{`From the `}<strong parentName="p">{`Side Menu`}</strong>{`, click `}<strong parentName="p">{`File Manager`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`File Manager Home`}</strong>{` screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Drag and drop the image from your computer’s file explorer to the `}<strong parentName="p">{`Home`}</strong>{` screen.`}</p>
<p parentName="li">{`✔️ The message “File upload complete.” displays.`}</p>
</li>
</ol>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;