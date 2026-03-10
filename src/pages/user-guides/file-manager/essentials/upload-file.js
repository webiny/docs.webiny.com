/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/6.0.x/file-manager/essentials/assets/upload-file/upload-image-example.png'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import uploadFileExplorerVideo from "/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/6.0.x/file-manager/essentials/assets/upload-file/upload-file-file-explorer.mp4";
import uploadFileDragDropVideo from "/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/6.0.x/file-manager/essentials/assets/upload-file/upload-file-drag-and-drop.mp4";
import uploadMultipleFilesVideo from "/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/6.0.x/file-manager/essentials/assets/upload-file/upload-multiple-files.mp4";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.9991ed.json";

import _versions from "@/data/versions.ff7084.json";

const Layout = _Layout;
const pageData = {
  "title": "File Upload",
  "description": "Learn how to upload a file in File Manager.",
  "type": "user-guides",
  "showPageHeader": true,
  "fullWidth": false,
  "version": "6.0.x"
};
const docsearch = {
  "type": "user-guides",
  "weight": 100,
  "versions": ["latest", "6.0.x"]
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
}, {
  "title": "Upload Multiple Files",
  "slug": "upload-multiple-files",
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
<li parentName="ul">{`how to upload a file or multiple files`}</li>
</ul>
</Alert>
<p>{`Webiny allows you to effortlessly upload files into the `}<strong parentName="p">{`File Manager`}</strong>{` that you can use across your application. In this tutorial, we will learn how to upload a file or multiple files into the `}<strong parentName="p">{`File Manager`}</strong>{`. As an example, we will upload the image shown below. Please save it on your computer to upload later.`}</p>
<Image src={_Image1} alt={"Industrial Analytics"} mdxType="Image" />
<p>{`There are two ways to upload a file in `}<strong parentName="p">{`File Manager`}</strong>{`; let’s look at each approach one by one.`}</p>
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
<p parentName="li">{`Click `}<strong parentName="p">{`UPLOAD`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The file explorer screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`From the file explorer, upload the image.`}</p>
<p parentName="li">{`✔️ The file is uploaded. A pop-up confirmation message “File upload complete” at the bottom of the page.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click on the `}<strong parentName="p">{`EDIT`}</strong>{` button to adjust the `}<strong parentName="p">{`Name`}</strong>{` and the other metadata of the record, e.g. you can add Tags to optimize organization and searching for assets.`}</p>
<p parentName="li">{`✔️ The data about the file is updated.`}</p>
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
<p parentName="li">{`✔️ A pop-up confirmation message “File upload complete” at the bottom of the page.`}</p>
</li>
</ol>
<_Heading level={2} id={"upload-multiple-files"} nextElement={{
      "type": "jsx"
    }}>Upload Multiple Files</_Heading>
<Video src={uploadMultipleFilesVideo} controls={true} mdxType="Video" />
<ol>
<li parentName="ol">
<p parentName="li">{`From the `}<strong parentName="p">{`Side Menu`}</strong>{`, click `}<strong parentName="p">{`File Manager`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`File Manager Home`}</strong>{` screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`UPLOAD`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The file explorer screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`From the file explorer, select and upload the files.`}</p>
<p parentName="li">{`✔️ The assets may take some time to be uploaded. The progress bar will inform the user of the percentage completion. Even if the user navigates away from the page the upload completes in the background and the pop-up confirmation message “File upload complete” shows up at the bottom of the page.`}</p>
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