/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/5.x/file-manager/essentials/assets/tagging-files/black-mens-tshirt.png'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import taggingFilesVideo from "/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/5.x/file-manager/essentials/assets/tagging-files/tagging-files.mp4";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.79c9f1.json";

import _versions from "@/data/versions.ff7084.json";

const Layout = _Layout;
const pageData = {
  "title": "Tagging Files",
  "description": "Learn how to tag a file and filter it through the tag in File Manager.",
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
}, {
  "title": "Step 1: Tag a File",
  "slug": "step-1-tag-a-file",
  "children": []
}, {
  "title": "Step 2: Filter Files by Tags",
  "slug": "step-2-filter-files-by-tags",
  "children": []
}, {
  "title": "Additional Information",
  "slug": "additional-information",
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
<li parentName="ul">{`how to tag a file`}</li>
<li parentName="ul">{`how to filter files via assigned tag(s)`}</li>
</ul>
</Alert>
<p>{`Webiny allows users to tag files, facilitating convenient access. Users can efficiently search and filter files based on assigned tags. In this tutorial, we will learn how to tag a file, and filter it via its assigned tag in the File Manager. We will do this in 2 steps:`}</p>
<ul>
<li parentName="ul">{`Step 1: Tag a file`}</li>
<li parentName="ul">{`Step 2: Filter files by tags`}</li>
</ul>
<_Heading level={2} id={"prerequisites"} nextElement={{
      "type": "paragraph"
    }}>Prerequisites</_Heading>
<p>{`To follow this tutorial, you need the `}<strong parentName="p">{`Men’s Red Tshirt`}</strong>{` image uploaded in the file manager. If you don’t have the `}<strong parentName="p">{`Men’s Red Tshirt`}</strong>{` image in your file manager, please follow the `}<_Link href="/docs/5.x/user-guides/file-manager/essentials/upload-file">{`File Upload`}</_Link>{` tutorial to upload it.`}</p>
<Video src={taggingFilesVideo} controls={true} mdxType="Video" />
<_Heading level={2} id={"step-1-tag-a-file"} nextElement={{
      "type": "list",
      "ordered": true,
      "start": 1,
      "spread": true
    }}>Step 1: Tag a File</_Heading>
<ol>
<li parentName="ol">
<p parentName="li">{`From the `}<strong parentName="p">{`Side Menu`}</strong>{`, click `}<strong parentName="p">{`File Manager`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`File Manager Home`}</strong>{` screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Hover over the `}<strong parentName="p">{`Men’s Red Tshirt`}</strong>{` image we uploaded in the `}<_Link href="/docs/5.x/user-guides/file-manager/essentials/upload-file">{`File Upload`}</_Link>{` tutorial.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click the `}<strong parentName="p">{`SETTINGS`}</strong>{` icon (⚙️).`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`File details`}</strong>{` screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Tags`}</strong>{` textbox, type `}<strong parentName="p">{`Tshirt`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the drop-down below, click `}<strong parentName="p">{`Tshirt`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Similarly, add the following tags to the image: `}<strong parentName="p">{`Red`}</strong>{` and `}<strong parentName="p">{`Men’s`}</strong>{` .`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`SAVE FILE`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Now upload the following image.`}</p>
<Image src={_Image1} alt={"Men's Black Tshirt"} mdxType="Image" />
<p parentName="li">{`If you are not familiar with how to upload a file, please follow the `}<_Link href="/docs/5.x/user-guides/file-manager/essentials/upload-file">{`File Upload`}</_Link>{` tutorial.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Following the Steps 2 to 7 add the following tags to the `}<strong parentName="p">{`Men’s Black Tshirt`}</strong>{` image: `}<strong parentName="p">{`Tshirt`}</strong>{`, `}<strong parentName="p">{`Black`}</strong>{`, and `}<strong parentName="p">{`Men’s`}</strong>{`.`}</p>
</li>
</ol>
<_Heading level={2} id={"step-2-filter-files-by-tags"} nextElement={{
      "type": "list",
      "ordered": true,
      "start": 1,
      "spread": true
    }}>Step 2: Filter Files by Tags</_Heading>
<ol>
<li parentName="ol">
<p parentName="li">{`On the `}<strong parentName="p">{`File Manager Home`}</strong>{` screen, in the navigation panel on the left, under `}<strong parentName="p">{`Filter by tag`}</strong>{`, click the `}<strong parentName="p">{`Tshirt`}</strong>{` tag.`}</p>
<p parentName="li">{`✔️ All the files with the tag `}<strong parentName="p">{`Tshirt`}</strong>{` appear on the screen.`}</p>
<p parentName="li"><strong parentName="p">{`Note`}</strong>{`: You can deactivate an active tag filter by clicking on it again.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click the `}<strong parentName="p">{`Red`}</strong>{` tag.`}</p>
<p parentName="li">{`✔️ All the files having either `}<strong parentName="p">{`Tshirt`}</strong>{` or `}<strong parentName="p">{`Red`}</strong>{` tag appear on the screen.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Conditional filter`}</strong>{` drop down, click `}<strong parentName="p">{`Match all`}</strong>{`.`}</p>
<p parentName="li">{`✔️ Only the files having both `}<strong parentName="p">{`Tshirt`}</strong>{` and `}<strong parentName="p">{`Red`}</strong>{` tag appear on the screen.`}</p>
<p parentName="li"><strong parentName="p">{`Note`}</strong>{`: When applying multiple tag filters, the `}<strong parentName="p">{`Conditional filter`}</strong>{` drop-down becomes active. The default selection is `}<strong parentName="p">{`Match any`}</strong>{`, meaning all files with at least one of the active tags will appear on the screen. If the `}<strong parentName="p">{`Match all`}</strong>{` option is selected, only files with all the active tags will be displayed on the screen.`}</p>
</li>
</ol>
<_Heading level={2} id={"additional-information"} nextElement={{
      "type": "list",
      "ordered": true,
      "start": 1,
      "spread": true
    }}>Additional Information</_Heading>
<ol>
<li parentName="ol">
<p parentName="li">{`You can also apply a tag filter by searching the tag name in the search bar.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`You can apply filters by utilizing the search bar, clicking on tags, and using the conditional filtering drop-down in combination.`}</p>
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