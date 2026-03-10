/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import fmFileDetailsDrawer from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/file-manager/extending/assets/fm-drawer.png";
import fmFileDetailsGroupFields from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/file-manager/extending/assets/fm-group-fields.png";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Customize File Details Drawer",
  "description": "Learn how to control the fields, layout, and width of the File Details drawer.",
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
  "title": "Using the Code Examples",
  "slug": "using-the-code-examples",
  "children": []
}, {
  "title": "Hide Unwanted Fields",
  "slug": "hide-unwanted-fields",
  "children": []
}, {
  "title": "Width of the Drawer",
  "slug": "width-of-the-drawer",
  "children": []
}, {
  "title": "Width of the Content Panes",
  "slug": "width-of-the-content-panes",
  "children": []
}, {
  "title": "Group Fields Into Tabs",
  "slug": "group-fields-into-tabs",
  "children": []
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
const CanIUseThis = makeShortcode("CanIUseThis");
const WhatYouWillLearn = makeShortcode("WhatYouWillLearn");
const Image = makeShortcode("Image");
const Editor = makeShortcode("Editor");
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




<CanIUseThis since={"5.38.2"} mdxType="CanIUseThis" />
<WhatYouWillLearn mdxType="WhatYouWillLearn">
<ul>
<li parentName="ul">{`how to hide unwanted fields`}</li>
<li parentName="ul">{`how to control the width of the drawer`}</li>
<li parentName="ul">{`how to control the width of the panes`}</li>
<li parentName="ul">{`how to group fields into tabs`}</li>
</ul>
</WhatYouWillLearn>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`File Details drawer is a UI component which opens when you want to see or edit details of any particular file in the File Manager. By default, this drawer is set to be `}<inlineCode parentName="p">{`1000px`}</inlineCode>{` wide, and its content is split into two panes. The left pane shows the file preview and contextual actions (edit, delete, download, etc.). The right pane shows the file fields.`}</p>
<Image src={fmFileDetailsDrawer} title="File Details Drawer" mdxType="Image" />
<p>{`File fields belong to one of the two categories:`}</p>
<ul>
<li parentName="ul"><strong parentName="li">{`basic fields`}</strong>{` - built-in fields that are at the core of the File Manager`}</li>
<li parentName="ul"><strong parentName="li">{`extension fields`}</strong>{` - custom fields added via plugins`}</li>
</ul>
<p>{`In the File Details drawer, these 2 field types are rendered one below the other, so the user immediately gets the full overview of all fields.`}</p>
<p>{`In the previous releases, these field categories were each displayed in their own tab. You can
still achieve that via the config. Read on to learn how.`}</p>
<_Heading level={2} id={"using-the-code-examples"} nextElement={{
      "type": "paragraph"
    }}>Using the Code Examples</_Heading>
<p>{`The following code examples follow our usual configuration pattern. You need to add the code from
the examples to your `}<inlineCode parentName="p">{`apps/admin/src/App.tsx`}</inlineCode>{`. Here’s an example:`}</p>
<Editor title="apps/admin/src/App.tsx" lang="diff-tsx" mdxType="Editor">
{`import React from "react";
import { Admin } from "@webiny/app-serverless-cms";
import { Cognito } from "@webiny/app-admin-users-cognito";
+ import { FileManagerViewConfig } from "@webiny/app-file-manager";
import "./App.scss";

export const App = () => {
    return (
      <Admin>
        <Cognito />
+       <FileManagerViewConfig>
+           {* Config components go here. *}
+       </FileManagerViewConfig>
      </Admin>
    );
};`}
</Editor>
<p>{`In the following sections, we’ll only be showing the code that is related to the configuration of the File Manager. The rest of the code shown above will be omitted.`}</p>
<_Heading level={2} id={"hide-unwanted-fields"} nextElement={{
      "type": "paragraph"
    }}>Hide Unwanted Fields</_Heading>
<p>{`The built-in fields rendered in the File Details drawer are `}<inlineCode parentName="p">{`name`}</inlineCode>{`, `}<inlineCode parentName="p">{`tags`}</inlineCode>{`, and `}<inlineCode parentName="p">{`aliases`}</inlineCode>{`. If you need to hide some of them, you can do it like this:`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`<FileManagerViewConfig>
  <FileDetails.Field name={"tags"} remove />
</FileManagerViewConfig>`}
</Editor>
<p>{`By removing fields from the UI, you’re only hiding the UI component. The data itself is still there, and it will be loaded from the API, and sent back to the API when you save your changes.`}</p>
<_Heading level={2} id={"width-of-the-drawer"} nextElement={{
      "type": "paragraph"
    }}>Width of the Drawer</_Heading>
<p>{`The default width of the drawer is `}<strong parentName="p">{`1000px`}</strong>{`. You can change this by using the `}<inlineCode parentName="p">{`Width`}</inlineCode>{` config component. The value can be anything supported by the CSS `}<inlineCode parentName="p">{`width`}</inlineCode>{` property.`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`<FileManagerViewConfig>
  {/* Use percentage value. */}
  <FileDetails.Width value={"80%"} />
  {/* Use pixel value. */}
  <FileDetails.Width value={"1300px"} />
</FileManagerViewConfig>`}
</Editor>
<_Heading level={2} id={"width-of-the-content-panes"} nextElement={{
      "type": "paragraph"
    }}>Width of the Content Panes</_Heading>
<p>{`Changing the width of the drawer might be all you want to do. But if you need a more fine-grained control of the pane’s width within the drawer, you can use a more advanced value format:`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`<FileManagerViewConfig>
  <FileDetails.Width value={"80%,0.5,1"} />
</FileManagerViewConfig>`}
</Editor>
<p>{`The value you see in this example means the following:`}</p>
<ul>
<li parentName="ul">{`set the overall drawer width to 80% of the viewport`}</li>
<li parentName="ul">{`set the left pane to `}<inlineCode parentName="li">{`flex: 0.5`}</inlineCode></li>
<li parentName="ul">{`set the right pane to `}<inlineCode parentName="li">{`flex: 1`}</inlineCode></li>
</ul>
<p>{`The panes are laid out using CSS Flexbox, so the second and third values are the values for the `}<a parentName="p" {...{
        "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/flex"
      }}>{`flex`}</a>{` property. If you don’t specify any values for the panes, they default to `}<inlineCode parentName="p">{`1`}</inlineCode>{`, which means equal width distribution.`}</p>
<_Heading level={2} id={"group-fields-into-tabs"} nextElement={{
      "type": "paragraph"
    }}>Group Fields Into Tabs</_Heading>
<p>{`In the previous releases, fields were grouped into Tabs by default. If that’s how you prefer to display them, you can enable that layout as follows:`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`<FileManagerViewConfig>
  <FileDetails.GroupFields value={true} />
</FileManagerViewConfig>`}
</Editor>
<p>{`This configuration will create tabs for basic fields, and extension fields:`}</p>
<Image src={fmFileDetailsGroupFields} title="Grouping Fields into Tabs" mdxType="Image" />
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;