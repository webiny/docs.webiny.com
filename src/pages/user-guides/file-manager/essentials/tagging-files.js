/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import step1TaggingVideo from "/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/6.0.x/file-manager/essentials/assets/tagging-files/tagging-a-file.mp4";
import step3TaggingFilesVideo from "/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/6.0.x/file-manager/essentials/assets/tagging-files/tagging-multiple-files.mp4";
import step4FilterVideo from "/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/6.0.x/file-manager/essentials/assets/tagging-files/filter-files-by-tag.mp4";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.9991ed.json";

import _versions from "@/data/versions.ff7084.json";

const Layout = _Layout;
const pageData = {
  "title": "Tagging Files",
  "description": "Learn how to tag a file and filter it through the tag in File Manager.",
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
  "title": "Step 1: Upload Images",
  "slug": "step-1-upload-images",
  "children": []
}, {
  "title": "Step 2: Tag a File",
  "slug": "step-2-tag-a-file",
  "children": []
}, {
  "title": "Step 3: Tag Multiple Files",
  "slug": "step-3-tag-multiple-files",
  "children": []
}, {
  "title": "Step 4: Filter Files by Tags",
  "slug": "step-4-filter-files-by-tags",
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
<p>{`Webiny allows users to tag files, facilitating convenient access. Users can efficiently search and filter files based on assigned tags. In this tutorial, we will learn how to tag a file, and filter it via its assigned tag in the `}<strong parentName="p">{`File Manager`}</strong>{`. We will do this in a few steps:`}</p>
<ul>
<li parentName="ul">{`Step 1: Upload images`}</li>
<li parentName="ul">{`Step 2: Tag a file`}</li>
<li parentName="ul">{`Step 3: Tag multiple files`}</li>
<li parentName="ul">{`Step 4: Filter files by tags`}</li>
</ul>
<Video src={step1TaggingVideo} controls={true} mdxType="Video" />
<_Heading level={2} id={"step-1-upload-images"} nextElement={{
      "type": "list",
      "ordered": true,
      "start": 1,
      "spread": true
    }}>Step 1: Upload Images</_Heading>
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
<p parentName="li">{`From the file explorer, select and upload multiple random images.`}</p>
</li>
</ol>
<_Heading level={2} id={"step-2-tag-a-file"} nextElement={{
      "type": "list",
      "ordered": true,
      "start": 1,
      "spread": true
    }}>Step 2: Tag a File</_Heading>
<ol>
<li parentName="ol">
<p parentName="li">{`From the `}<strong parentName="p">{`Side Menu`}</strong>{`, click `}<strong parentName="p">{`File Manager`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`File Manager Home`}</strong>{` screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Hover over one of the images you uploaded and click the EDIT button.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`File details`}</strong>{` screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Tags`}</strong>{` textbox, type ”`}<strong parentName="p">{`snowboard`}</strong>{`”. Press Enter. Type ”`}<strong parentName="p">{`sunset`}</strong>{`”. Press Enter. Type ”`}<strong parentName="p">{`friendship`}</strong>{`”. Press Enter. `}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`SAVE FILE`}</strong>{`.`}</p>
</li>
</ol>
<_Heading level={2} id={"step-3-tag-multiple-files"} nextElement={{
      "type": "jsx"
    }}>Step 3: Tag Multiple Files</_Heading>
<Video src={step3TaggingFilesVideo} controls={true} mdxType="Video" />
<ol>
<li parentName="ol">
<p parentName="li">{`From the `}<strong parentName="p">{`Top Menu`}</strong>{`, click `}<strong parentName="p">{`Switch to Table`}</strong>{` icon.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`File Manager Home`}</strong>{` screen will switch to a table view to make it easier to select/ deselect a larger number of images.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Select all images in this folder by clicking on the top checkbox. Note you can also select only individual images.`}</p>
<p parentName="li">{`✔️ The images are highlighted`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click the EDIT icon at the top, part of bulk actions menu.`}</p>
<p parentName="li">{`✔️ The Edit items screen will open up.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Field`}</strong>{` for Operation 1, select ”`}<strong parentName="p">{`Tags`}</strong>{`”. In `}<strong parentName="p">{`Operation`}</strong>{`, select ”`}<strong parentName="p">{`Append to existing values`}</strong>{`”. In `}<strong parentName="p">{`Tags`}</strong>{`, type ”`}<strong parentName="p">{`snow`}</strong>{`”>.  Press Enter. Type ”`}<strong parentName="p">{`snowboard`}</strong>{`”. Press Enter. Type ”`}<strong parentName="p">{`sport`}</strong>{`”. Press Enter.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`SUBMIT`}</strong>{`.`}</p>
</li>
</ol>
<_Heading level={2} id={"step-4-filter-files-by-tags"} nextElement={{
      "type": "jsx"
    }}>Step 4: Filter Files by Tags</_Heading>
<Video src={step4FilterVideo} controls={true} mdxType="Video" />
<ol>
<li parentName="ol">
<p parentName="li">{`From the `}<strong parentName="p">{`Top Menu`}</strong>{`, click `}<strong parentName="p">{`Switch to Grid`}</strong>{` icon.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`File Manager Home`}</strong>{` screen will switch to a grid view to find the desired image(s) quicker.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`On the `}<strong parentName="p">{`File Manager Home`}</strong>{` screen, in the navigation panel on the left, under `}<strong parentName="p">{`Filter by tag`}</strong>{`, click the `}<strong parentName="p">{`friendship`}</strong>{` tag and then after you see the results select `}<strong parentName="p">{`snow`}</strong>{`.`}</p>
<p parentName="li">{`✔️ All the files with the tag `}<strong parentName="p">{`friendship`}</strong>{` AND `}<strong parentName="p">{`snow`}</strong>{` appear on the screen.`}</p>
<p parentName="li"><strong parentName="p">{`Note`}</strong>{`: You can deactivate an active tag filter by clicking on it again.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Conditional filter`}</strong>{` drop down switch from ”`}<strong parentName="p">{`match all`}</strong>{`” to ”`}<strong parentName="p">{`match any`}</strong>{`“.`}</p>
<p parentName="li">{`✔️ All the files having either `}<strong parentName="p">{`friendship`}</strong>{` or `}<strong parentName="p">{`snow`}</strong>{` tag appear on the screen.`}</p>
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