/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { SymbolList } from "@/components/SymbolList";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.64f62e.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Editor",
  "description": "Page editor components",
  "type": "docs",
  "showPageHeader": true,
  "fullWidth": false,
  "version": "6.0.x"
};
const docsearch = {
  "type": "docs",
  "weight": 100,
  "versions": ["latest", "6.0.x"]
};
const navigation = _navigation;
const versions = _versions;
const tableOfContents = [{
  "title": "Overview",
  "slug": "overview",
  "children": []
}, {
  "title": "Components",
  "slug": "components",
  "children": [{
    "title": "PageEditorConfig",
    "slug": "page-editor-config",
    "children": []
  }]
}, {
  "title": "Other",
  "slug": "other",
  "children": [{
    "title": "Editor",
    "slug": "editor",
    "children": []
  }]
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
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




<Alert type="success" title="WHAT YOU'LL LEARN" mdxType="Alert">
<ul>
<li parentName="ul">{`What is exported from `}<inlineCode parentName="li">{`webiny/admin/website-builder/page/editor`}</inlineCode>{`?`}</li>
<li parentName="ul">{`How to import and use each exported item?`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`This page documents everything exported from `}<inlineCode parentName="p">{`webiny/admin/website-builder/page/editor`}</inlineCode>{`. Import any of the items below directly from this path in your Webiny extensions.`}</p>
<p><strong parentName="p">{`Components`}</strong></p>
<SymbolList symbols={[{
      name: "PageEditorConfig",
      anchor: "page-editor-config"
    }]} mdxType="SymbolList" />
<p><strong parentName="p">{`Other`}</strong></p>
<SymbolList symbols={[{
      name: "Editor",
      anchor: "editor"
    }]} mdxType="SymbolList" />
<_Heading level={2} id={"components"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Components</_Heading>
<_Heading level={3} id={"page-editor-config"} nextElement={{
      "type": "paragraph"
    }}><code>PageEditorConfig</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/website-builder/page/editor`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { PageEditorConfig } from "webiny/admin/website-builder/page/editor";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export const PageEditorConfig = Object.assign(BasePageEditorConfig, EditorConfig);`}
</Editor>
<_Heading level={2} id={"other"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Other</_Heading>
<_Heading level={3} id={"editor"} nextElement={{
      "type": "paragraph"
    }}><code>Editor</code></_Heading>
<p><strong parentName="p">{`Export`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/website-builder/page/editor`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { Editor } from "webiny/admin/website-builder/page/editor";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export { DefaultEditorConfig } from "./defaultConfig/DefaultEditorConfig.js";
export * from "./config/index.js";
export * from "./commands.js";
export type { ElementInputRendererProps } from "./config/ElementInput.js";`}
</Editor>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;