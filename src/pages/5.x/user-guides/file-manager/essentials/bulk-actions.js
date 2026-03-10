/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/5.x/file-manager/essentials/assets/bulk-actions/selected-files.png'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import blukActionsVideo from "/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/5.x/file-manager/essentials/assets/bulk-actions/bulk-actions.mp4";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.79c9f1.json";

import _versions from "@/data/versions.ff7084.json";

const Layout = _Layout;
const pageData = {
  "title": "Bulk Actions",
  "description": "Learn how to move multiple files in File Manager.",
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
  "title": "Prerequisites",
  "slug": "prerequisites",
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
<li parentName="ul">{`how to move multiple files from one folder to another folder`}</li>
</ul>
</Alert>
<p>{`Webiny enables users to execute bulk actions, such as moving and deleting multiple files in bulk. In this tutorial, we will learn how to move multiple files from folder to another folder in the File Manager.`}</p>
<_Heading level={2} id={"prerequisites"} nextElement={{
      "type": "paragraph"
    }}>Prerequisites</_Heading>
<p>{`To follow this tutorial, you need the `}<strong parentName="p">{`Men’s Red Tshirt`}</strong>{` and `}<strong parentName="p">{`Men’s Black Tshirt`}</strong>{` images uploaded in the file manager. If you don’t have these images in your file manager, please follow the `}<_Link href="/docs/5.x/user-guides/file-manager/essentials/upload-file">{`File Upload`}</_Link>{` and `}<_Link href="/docs/5.x/user-guides/file-manager/essentials/tagging-files">{`Tagging Files`}</_Link>{` tutorials to upload them.`}</p>
<Video src={blukActionsVideo} controls={true} mdxType="Video" />
<ol>
<li parentName="ol">
<p parentName="li">{`From the `}<strong parentName="p">{`Side Menu`}</strong>{`, click `}<strong parentName="p">{`File Manager`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`File Manager Home`}</strong>{` screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the root folder, create a folder titled `}<strong parentName="p">{`Tshirts`}</strong>{`.`}</p>
<p parentName="li"><strong parentName="p">{`Note`}</strong>{`: If you are not familiar with how to create a folder, please follow the `}<_Link href="/docs/5.x/user-guides/file-manager/essentials/organizing-files">{`Organizing Files`}</_Link>{` tutorial.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the root folder, over the `}<strong parentName="p">{`Men’s Red Tshirt`}</strong>{` image we uploaded in the `}<_Link href="/docs/5.x/user-guides/file-manager/essentials/upload-file">{`File Upload`}</_Link>{` tutorial, click the `}<strong parentName="p">{`SELECT`}</strong>{` icon (☑️).`}</p>
<p parentName="li">{`✔️ A file action bar appears below the search bar.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Similarly, select the `}<strong parentName="p">{`Men’s Black Tshirt`}</strong>{` image we uploaded in the `}<_Link href="/docs/5.x/user-guides/file-manager/essentials/tagging-files">{`Tagging Files`}</_Link>{` tutorial.`}</p>
</li>
</ol>
<Image src={_Image1} alt={"Bulk Actions"} mdxType="Image" />
<ol {...{
      "start": 5
    }}>
<li parentName="ol">
<p parentName="li">{`In the file action bar, click the `}<strong parentName="p">{`MOVE `}<em parentName="strong">{`N`}</em>{` FILES`}</strong>{` icon (📁).`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Select folder`}</strong>{` screen appears.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the menu, click `}<strong parentName="p">{`Tshirts`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`MOVE`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Move files`}</strong>{` dialog box appears with the message “Finished moving files! See full report below”.`}</p>
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