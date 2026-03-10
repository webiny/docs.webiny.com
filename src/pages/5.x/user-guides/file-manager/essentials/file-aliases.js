/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/5.x/file-manager/essentials/assets/file-aliases/file-path.png'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import fileAliasesVideo from "/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/5.x/file-manager/essentials/assets/file-aliases/file-aliases.mp4";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.79c9f1.json";

import _versions from "@/data/versions.ff7084.json";

const Layout = _Layout;
const pageData = {
  "title": "File Aliases",
  "description": "Learn how to add file path aliases in the File Manager.",
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
  "title": "Step 1: Add a Path Alias to a File",
  "slug": "step-1-add-a-path-alias-to-a-file",
  "children": []
}, {
  "title": "Step 2: Preview the File Using the Alias",
  "slug": "step-2-preview-the-file-using-the-alias",
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
<li parentName="ul">{`how to add a path aliases to a file`}</li>
</ul>
</Alert>
<p>{`Webiny simplifies file access in the File Manager by allowing users to create path aliases. Each file can have one or more aliases, which proves useful, especially during file migrations from other systems, ensuring the preservation of URLs in existing content. In this tutorial, we will learn how to add a path alias to a file. We will do this in 2 steps:`}</p>
<ul>
<li parentName="ul">{`Step 1: Add a path alias to a file`}</li>
<li parentName="ul">{`Step 2: Preview the file using the alias`}</li>
</ul>
<_Heading level={2} id={"prerequisites"} nextElement={{
      "type": "paragraph"
    }}>Prerequisites</_Heading>
<p>{`To follow this tutorial, you need the `}<strong parentName="p">{`Men’s Red Tshirt`}</strong>{` image uploaded in the file manager. If you don’t have the `}<strong parentName="p">{`Men’s Red Tshirt`}</strong>{` image in your file manager, please follow the `}<_Link href="/docs/5.x/user-guides/file-manager/essentials/upload-file">{`File Upload`}</_Link>{` tutorial to upload it.`}</p>
<Video src={fileAliasesVideo} controls={true} mdxType="Video" />
<_Heading level={2} id={"step-1-add-a-path-alias-to-a-file"} nextElement={{
      "type": "list",
      "ordered": true,
      "start": 1,
      "spread": true
    }}>Step 1: Add a Path Alias to a File</_Heading>
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
<p parentName="li">{`In front of `}<strong parentName="p">{`FILE ALIASES`}</strong>{`, click `}<strong parentName="p">{`+ ADD ALIAS`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Alias`}</strong>{` textbox appears.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Alias`}</strong>{` textbox, type `}<strong parentName="p">{`/apparels/mens/tshirts/red/red-mens-tshirt.png`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`SAVE FILE`}</strong>{`.`}</p>
</li>
</ol>
<p><strong parentName="p">{`Note`}</strong>{`: You can add multiple aliases to a file.`}</p>
<_Heading level={2} id={"step-2-preview-the-file-using-the-alias"} nextElement={{
      "type": "list",
      "ordered": true,
      "start": 1,
      "spread": true
    }}>Step 2: Preview the File Using the Alias</_Heading>
<ol>
<li parentName="ol">
<p parentName="li">{`Open the `}<strong parentName="p">{`File details`}</strong>{` screen for the `}<strong parentName="p">{`Webiny CMS`}</strong>{` image.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click the `}<strong parentName="p">{`COPY URL`}</strong>{` icon.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Visit the URL in a new tab in browser.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`After the base URL, replace the `}<em parentName="p">{`path of the file`}</em>{` with the alias `}<strong parentName="p">{`/custom/path/files/images/webiny-cms.png`}</strong>{`. For example, in the address bar, change the text from`}<br parentName="p"></br>{`
`}<strong parentName="p">{`https://`}<em parentName="strong">{`your base URL`}</em>{`/files/655b590133c6bb000871662f/webiny-cms.png`}</strong>{`
to`}<br parentName="p"></br>{`
`}<strong parentName="p">{`https://`}<em parentName="strong">{`your base URL`}</em>{`/apparels/mens/tshirts/red/red-mens-tshirt.png`}</strong>{`.`}</p>
</li>
</ol>
<Image src={_Image1} alt={"File Path"} mdxType="Image" />
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;