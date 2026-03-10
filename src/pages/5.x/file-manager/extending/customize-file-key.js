/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { CanIUseThis } from "@/components/CanIUseThis";
import { WhatYouWillLearn } from "@/components/WhatYouWillLearn";
import fmCustomFileKey from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/file-manager/extending/assets/fm-custom-file-key.png";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Customize File Key",
  "description": "Learn how to customize file key before upload to S3",
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
  "title": "Customize File Key",
  "slug": "customize-file-key",
  "children": []
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
const Editor = makeShortcode("Editor");
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






<CanIUseThis since={"5.x"} mdxType="CanIUseThis" />
<WhatYouWillLearn mdxType="WhatYouWillLearn">
<ul>
<li parentName="ul">{`how to customize file key before it is uploaded to the S3 bucket`}</li>
</ul>
</WhatYouWillLearn>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`File Manager allows you to control the file key that is used to store your file to the S3 bucket. Note that file `}<inlineCode parentName="p">{`name`}</inlineCode>{` and file `}<inlineCode parentName="p">{`key`}</inlineCode>{` are different things. A `}<inlineCode parentName="p">{`name`}</inlineCode>{` is what a user sees in the File Manager UI, and is managed by Webiny. A `}<inlineCode parentName="p">{`key`}</inlineCode>{` is used by the underlying file storage (in our case, AWS S3). By default, Webiny generates a file key from the file name, and applies some basic sanitization, to form a valid S3 file key.`}</p>
<p>{`However, sometimes, you need to have a very specific structure of a file key, because you might have other AWS services hooked up to S3 events, and they will extract information from the key, etc. This articles demonstrates the process of file key customization, so you’re not limited by the built-in defaults.`}</p>
<_Heading level={2} id={"customize-file-key"} nextElement={{
      "type": "paragraph"
    }}>Customize File Key</_Heading>
<p>{`To hook into the file upload process, use the `}<inlineCode parentName="p">{`createFileUploadModifier`}</inlineCode>{` plugin factory, provided by the `}<inlineCode parentName="p">{`@webiny/api-file-manager-s3`}</inlineCode>{` package.`}</p>
<Alert type="warning" mdxType="Alert">
  The source code below only highlights the changes you need to make to your project file. The rest
  of your file contents is not shown for better clarity.
</Alert>
<Editor title="apps/api/graphql/src/index.ts" lang="diff-ts" mdxType="Editor">
{`+ import fileManagerS3, { createFileUploadModifier } from "@webiny/api-file-manager-s3";

export const handler = createHandler({
    plugins: [
        // Other plugins were omitted for clarity.

        // Add the following code after your existing plugins.
+       createFileUploadModifier(({ modifier }) => {
+           modifier.setFile(file => {
+               if (file.key.toLowerCase().endsWith("mp4")) {
+                   return { ...file, key: \`my-custom-key-\${Date.now()}.mp4\` };
+               }
+
+               return file;
+           });
+       })
    ],
    http: { debug }
});`}
</Editor>
<p>{`In this example, we check if the file extension is `}<inlineCode parentName="p">{`mp4`}</inlineCode>{`, and generate a custom file key. You can also change the file name, by returning a new `}<inlineCode parentName="p">{`name`}</inlineCode>{` property, alongside the `}<inlineCode parentName="p">{`key`}</inlineCode>{` property.`}</p>
<p>{`Once the code shown above is applied, you need to deploy your API. Make sure to use the `}<inlineCode parentName="p">{`--env`}</inlineCode>{` value that corresponds to your development environment.`}</p>
<Editor title="" lang="shell" mdxType="Editor">
{`yarn webiny deploy api --env=dev`}
</Editor>
<p>{`After the deployment is done, try uploading an `}<inlineCode parentName="p">{`mp4`}</inlineCode>{` file, and you’ll see a custom key being applied to the file.`}</p>
<Image src={fmCustomFileKey} title={"Custom File Key Applied to Mp4 Files"} mdxType="Image" />
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;