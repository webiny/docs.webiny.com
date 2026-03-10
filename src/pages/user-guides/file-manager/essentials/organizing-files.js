/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/6.0.x/file-manager/essentials/assets/organizing-files/snowboard.jpg'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import organizingFilesVideo from "/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/6.0.x/file-manager/essentials/assets/organizing-files/organizing-files.mp4";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.9991ed.json";

import _versions from "@/data/versions.ff7084.json";

const Layout = _Layout;
const pageData = {
  "title": "Organizing Files",
  "description": "Learn how to organize files in folders and sub-folders in File Manager.",
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
  "title": "Step 1: Create a Folder",
  "slug": "step-1-create-a-folder",
  "children": []
}, {
  "title": "Step 2: Create a Sub-Folder",
  "slug": "step-2-create-a-sub-folder",
  "children": []
}, {
  "title": "Step 3: Move a Folder Into a Parent Folder",
  "slug": "step-3-move-a-folder-into-a-parent-folder",
  "children": []
}, {
  "title": "Step 4: Upload an Image",
  "slug": "step-4-upload-an-image",
  "children": []
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
const Video = makeShortcode("Video");
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





<Alert type="success" title="WHAT YOU'LL LEARN" mdxType="Alert">
<ul>
<li parentName="ul">{`how to create folders and sub-folders`}</li>
<li parentName="ul">{`how to move files and folders`}</li>
</ul>
</Alert>
<p>{`Webiny simplifies content organization by allowing users to create folders and sub-folders, making it easier to manage. In this tutorial, we will learn how to organize your files in folders and sub-folders in the File Manager. We will do this in  a few steps:`}</p>
<ul>
<li parentName="ul">{`Step 1: Create a folder`}</li>
<li parentName="ul">{`Step 2: Create a sub-folder`}</li>
<li parentName="ul">{`Step 3: Move a folder into a parent folder`}</li>
<li parentName="ul">{`Step 4: Upload an image`}</li>
</ul>
<Video src={organizingFilesVideo} controls={true} mdxType="Video" />
<_Heading level={2} id={"step-1-create-a-folder"} nextElement={{
      "type": "list",
      "ordered": true,
      "start": 1,
      "spread": true
    }}>Step 1: Create a Folder</_Heading>
<ol>
<li parentName="ol">
<p parentName="li">{`From the `}<strong parentName="p">{`Side Menu`}</strong>{`, click `}<strong parentName="p">{`File Manager`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`File Manager Home`}</strong>{` screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the navigation panel on the left, click `}<strong parentName="p">{`➕CREATE NEW FOLDER`}</strong>{`
(Or, in the header section, click `}<strong parentName="p">{`➕NEW FOLDER`}</strong>{`).`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Create a new folder`}</strong>{` screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Title`}</strong>{` textbox, type `}<strong parentName="p">{`Sport`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Slug`}</strong>{` textbox, type `}<strong parentName="p">{`sport`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`CREATE FOLDER`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The message “Folder created successfully!” displays.`}</p>
</li>
</ol>
<_Heading level={2} id={"step-2-create-a-sub-folder"} nextElement={{
      "type": "list",
      "ordered": true,
      "start": 1,
      "spread": true
    }}>Step 2: Create a Sub-Folder</_Heading>
<ol>
<li parentName="ol">
<p parentName="li">{`In the navigation panel on the left, click `}<strong parentName="p">{`➕Create new folder`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Create a new folder`}</strong>{` screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Title`}</strong>{` textbox, type `}<strong parentName="p">{`Snow`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Slug`}</strong>{` textbox, type `}<strong parentName="p">{`snow`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Parent folder`}</strong>{` menu, click `}<strong parentName="p">{`Sport`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`CREATE FOLDER`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The message “Folder created successfully!” displays.`}</p>
</li>
</ol>
<_Heading level={2} id={"step-3-move-a-folder-into-a-parent-folder"} nextElement={{
      "type": "list",
      "ordered": true,
      "start": 1,
      "spread": true
    }}>Step 3: Move a Folder Into a Parent Folder</_Heading>
<ol>
<li parentName="ol">
<p parentName="li">{`In the navigation panel on the left, click `}<strong parentName="p">{`➕Create new folder`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Create a new folder`}</strong>{` screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Title`}</strong>{` textbox, type `}<strong parentName="p">{`Water`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Slug`}</strong>{` textbox, type `}<strong parentName="p">{`water`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`CREATE FOLDER`}</strong>{`.
✔️ The message “Folder created successfully!” displays.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Use the drag handle to drag and dropthe newly created folder into the folder `}<strong parentName="p">{`Sport`}</strong></p>
<p parentName="li">{`✔️ The child folder shows up in the parent one.`}</p>
</li>
</ol>
<_Heading level={2} id={"step-4-upload-an-image"} nextElement={{
      "type": "paragraph"
    }}>Step 4: Upload an Image</_Heading>
<p>{`We will upload the following image in this step. Please save it on your computer to upload.`}</p>
<Image src={_Image1} alt={"Snowboard image for upload"} mdxType="Image" />
<ol>
<li parentName="ol">
<p parentName="li">{`In the navigation panel on the left, click on `}<strong parentName="p">{`Sport`}</strong>{` and then on `}<strong parentName="p">{`Snow`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Snow`}</strong>{` folder opens.`}</p>
<p parentName="li"><strong parentName="p">{`Note`}</strong>{`: You can go to any folder by clicking its title in the navigation panel on the left.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`UPLOAD`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The file explorer screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`From the file explorer, upload the image.`}</p>
<p parentName="li">{`✔️ The message “File upload complete.” displays at the bottom.`}</p>
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