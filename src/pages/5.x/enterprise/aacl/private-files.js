/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import pf from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/enterprise/aacl/assets/private-files.png";
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Private files",
  "description": "Learn about the Private Files feature and how to use it.",
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
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
const CanIUseThis = makeShortcode("CanIUseThis");
const WhatYouWillLearn = makeShortcode("WhatYouWillLearn");
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




<CanIUseThis enterprise={true} since={"5.39.0"} mdxType="CanIUseThis" />
<WhatYouWillLearn mdxType="WhatYouWillLearn">
<ul>
<li parentName="ul">{`an overview of the Private Files feature and how to use it`}</li>
</ul>
</WhatYouWillLearn>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`With the 5.39.0 release, Webiny received a feature that enables you to control who can see and access files inside File Manager. This feature is designed to protect highly sensitive files from leaking or being publicly shared. `}</p>
<Image src={pf} alt={"Private Files"} shadow={false} mdxType="Image" />
<p>{`With this feature, after uploading a file inside the File Manager, users can set the Access Control setting on the newly uploaded file. The Access Control setting can take two values: `}</p>
<ul>
<li parentName="ul"><strong parentName="li">{`Public`}</strong>{` -> Anyone on the public internet can access the file given the link to the file`}</li>
<li parentName="ul"><strong parentName="li">{`Private`}</strong>{` -> Only registered Webiny Admin users can access and view the file`}</li>
</ul>
<p>{`Once a file is marked as `}<inlineCode parentName="p">{`Private`}</inlineCode>{` even if a direct link to the file is shared with 3rd party users, they will not be able to access the file. The feature works regardless of the file type. You can protect images, documents, videos or any other file type.`}</p>
<Alert type="warning" mdxType="Alert">
It's important to note that public files are automatically cached on the CDN and in the browser. In case you switch a file from public to private, the CDN cache will be flushed, but users who have previously accessed the file might still have it in their browser cache.
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