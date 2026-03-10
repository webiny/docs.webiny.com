/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import fmFilesPreviews from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/file-manager/extending/assets/fm-files-previews.png";
import fmFilesPreviewsVideo from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/file-manager/extending/assets/fm-files-previews-video.png";
import fmFilesPreviewsVideo2 from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/file-manager/extending/assets/fm-files-previews-video-2.png";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Customize File Preview",
  "description": "Learn how to customize file preview for specific types of files.",
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
  "title": "File Preview for Specific File Type",
  "slug": "file-preview-for-specific-file-type",
  "children": []
}, {
  "title": "Using Glob Patterns",
  "slug": "using-glob-patterns",
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
const Alert = makeShortcode("Alert");
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
<li parentName="ul">{`how to customize file preview for specific types of files`}</li>
</ul>
</WhatYouWillLearn>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`In File Manager, every file has a preview that is shown to the user when browsing files. This preview is a small thumbnail that gives the user a quick overview of the file content. `}</p>
<p>{`For example, in the following screenshot, we can see that the image file on the left has a small thumbnail immediately shown to the user. This makes it easier to quickly identity the file the user is looking for.`}</p>
<Image src={fmFilesPreviews} title="Preview of Files" mdxType="Image" />
<p>{`On the other hand, the video file on the right does not have any preview being displayed, simply because this functionality is not available out of the box.`}</p>
<p>{`But, if required, this can be implemented, which is what we cover in this article.`}</p>
<_Heading level={2} id={"getting-started"} nextElement={{
      "type": "jsx"
    }}>Getting Started</_Heading>
<ExtensionsGettingStarted type={"admin"} name={"customFilePreview"} dependencies={"@webiny/app-file-manager"} mdxType="ExtensionsGettingStarted" />
<_Heading level={2} id={"file-preview-for-specific-file-type"} nextElement={{
      "type": "paragraph"
    }}>File Preview for Specific File Type</_Heading>
<p>{`In the following snippet of code, we show how we can introduce a custom file preview for `}<inlineCode parentName="p">{`video/quicktime`}</inlineCode>{` file type.`}</p>
<Editor title="extensions/customFilePreview/src/index.tsx" lang="tsx" mdxType="Editor">
{`import React from "react";
import { FileManagerViewConfig, useFile } from "@webiny/app-file-manager";

// To make the code more readable, we immediately destructure child components.
const { Browser, FileDetails } = FileManagerViewConfig;

const VideoQtFileType = () => {
  // The \`useFile\` hook gives us access to the file that is being rendered.
  const { file } = useFile();
  return (
    <div>
      <p style={{ fontSize: 50 }}>📽️</p>
      <br />
      <p>{file.name}</p>
      <p>{file.size} bytes</p>
    </div>
  );
};

export const Extension = () => {
  return (
    <>
      <FileManagerViewConfig>
        {/* Ensures custom preview is applied in file browser (grid view). */}
        <Browser.Grid.Item.Thumbnail type={"video/quicktime"} element={<VideoQtFileType />} />

        {/* Ensures custom preview is applied in file details. */}
        <FileDetails.Preview.Thumbnail type={"video/quicktime"} element={<VideoQtFileType />} />
      </FileManagerViewConfig>
    </>
  );
};`}
</Editor>
<p>{`With this code in place, the video file will now have a custom preview, both in the file browser (grid view) and in the file details panel.`}</p>
<Image src={fmFilesPreviewsVideo} title="Custom Preview of a Video File - File Browser" mdxType="Image" />
<Image src={fmFilesPreviewsVideo2} title="Custom Preview of a Video File - File Details Panel" mdxType="Image" />
<_Heading level={2} id={"using-glob-patterns"} nextElement={{
      "type": "paragraph"
    }}>Using Glob Patterns</_Heading>
<p>{`It’s worth pointing out that the `}<inlineCode parentName="p">{`type`}</inlineCode>{` property of `}<inlineCode parentName="p">{`Browser.Grid.Item.Thumbnail`}</inlineCode>{` and `}<inlineCode parentName="p">{`FileDetails.Preview.Thumbnail`}</inlineCode>{` components also accepts a `}<a parentName="p" {...{
        "href": "https://en.wikipedia.org/wiki/Glob_(programming)"
      }}>{`glob`}</a>{` pattern. This makes it easier to assign a custom file preview for multiple types of files.`}</p>
<p>{`In the following example, we’re using `}<inlineCode parentName="p">{`video/*`}</inlineCode>{` as the file type, in order to have our custom file preview being used for all video types of files.`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`<FileManagerViewConfig>
  {/* Ensures custom preview is applied in file browser (grid view). */}
  <Browser.Grid.Item.Thumbnail type={"video/*"} element={<VideoQtFileType />} />

  {/* Ensures custom preview is applied in file details. */}
  <FileDetails.Preview.Thumbnail type={"video/*"} element={<VideoQtFileType />} />
</FileManagerViewConfig>`}
</Editor>
<Alert type={"info"} mdxType="Alert">
<p>{`Internally, glob matching is performed using the `}<a parentName="p" {...{
          "href": "https://www.npmjs.com/package/minimatch"
        }}>{`minimatch`}</a>{` library.`}</p>
</Alert>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;