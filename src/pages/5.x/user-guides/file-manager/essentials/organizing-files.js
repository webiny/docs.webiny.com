/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/5.x/file-manager/essentials/assets/organizing-files/green-mens-full-sleeve-tshirt.png'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import organizingFilesVideo from "/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/5.x/file-manager/essentials/assets/organizing-files/organizing-files.mp4";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.79c9f1.json";

import _versions from "@/data/versions.ff7084.json";

const Layout = _Layout;
const pageData = {
  "title": "Organizing Files",
  "description": "Learn how to organize files in folders and sub-folders in File Manager.",
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
  "title": "Step 1: Create a Folder",
  "slug": "step-1-create-a-folder",
  "children": []
}, {
  "title": "Step 2: Create a Sub-Folder",
  "slug": "step-2-create-a-sub-folder",
  "children": []
}, {
  "title": "Step 3: Upload an Image",
  "slug": "step-3-upload-an-image",
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
</ul>
</Alert>
<p>{`Webiny simplifies content organization by allowing users to create folders and sub-folders, making it easier to manage. In this tutorial, we will learn how to organize your files in folders and sub-folders in the File Manager. We will do this in 3 steps:`}</p>
<ul>
<li parentName="ul">{`Step 1: Create a folders`}</li>
<li parentName="ul">{`Step 2: Create a sub-folder`}</li>
<li parentName="ul">{`Step 3: Upload an image`}</li>
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
<p parentName="li">{`In the navigation panel on the left, click `}<strong parentName="p">{`➕Create new folder`}</strong><br parentName="p"></br>{`
`}{`(Or, in the header section, click `}<strong parentName="p">{`➕NEW FOLDER`}</strong>{`).`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Create a new folder`}</strong>{` screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Title`}</strong>{` textbox, type `}<strong parentName="p">{`Clothes`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Slug`}</strong>{` textbox, type `}<strong parentName="p">{`clothes`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Parent folder`}</strong>{` menu, click `}<strong parentName="p">{`Home`}</strong>{`.`}</p>
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
<p parentName="li">{`In the `}<strong parentName="p">{`Title`}</strong>{` textbox, type `}<strong parentName="p">{`Men’s`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Slug`}</strong>{` textbox, type `}<strong parentName="p">{`mens`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Parent folder`}</strong>{` menu, click `}<strong parentName="p">{`Clothes`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`CREATE FOLDER`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The message “Folder created successfully!” displays.`}</p>
</li>
</ol>
<_Heading level={2} id={"step-3-upload-an-image"} nextElement={{
      "type": "paragraph"
    }}>Step 3: Upload an Image</_Heading>
<p>{`We will upload the following image in this step. Please save it on your computer to upload.`}</p>
<Image src={_Image1} alt={"Men's Green Full Sleeve Tshirt"} mdxType="Image" />
<ol>
<li parentName="ol">
<p parentName="li">{`In the navigation panel on the left, click on `}<strong parentName="p">{`Clothes`}</strong>{` and then on `}<strong parentName="p">{`Men’s`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Men’s`}</strong>{` folder opens.`}</p>
<p parentName="li"><strong parentName="p">{`Note`}</strong>{`: You can go to any folder by clicking its title in the navigation panel on the left.`}</p>
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
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;