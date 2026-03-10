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
  "title": "ACO",
  "description": "ACO (Advanced Content Organisation) hooks and utilities",
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
  "title": "useNavigateFolder",
  "slug": "use-navigate-folder",
  "children": []
}, {
  "title": "useRecords",
  "slug": "use-records",
  "children": []
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
<li parentName="ul">{`What is exported from `}<inlineCode parentName="li">{`webiny/admin/aco`}</inlineCode>{`?`}</li>
<li parentName="ul">{`How to import and use each exported item?`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`This page documents everything exported from `}<inlineCode parentName="p">{`webiny/admin/aco`}</inlineCode>{`. Import any of the items below directly from this path in your Webiny extensions.`}</p>
<SymbolList symbols={[{
      name: "useNavigateFolder",
      anchor: "use-navigate-folder"
    }, {
      name: "useRecords",
      anchor: "use-records"
    }]} mdxType="SymbolList" />
<_Heading level={2} id={"use-navigate-folder"} nextElement={{
      "type": "paragraph"
    }}><code>useNavigateFolder</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/aco`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { useNavigateFolder } from "webiny/admin/aco";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export const useNavigateFolder = () => {
  const context = useContext(NavigateFolderContext);
  if (!context) {
    throw new Error("useNavigateFolder must be used within a NavigateFolderContext");
  }

  return context;
};`}
</Editor>
<_Heading level={2} id={"use-records"} nextElement={{
      "type": "paragraph"
    }}><code>useRecords</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/aco`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { useRecords } from "webiny/admin/aco";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export const useRecords = makeDecoratable((folderId?: string) => {
    const context = useContext(SearchRecordsContext);

    if (!context) {
        throw new Error("useSearchRecords must be used within a SearchRecordsContext");
    }

    const { folderIdPath } = useAcoApp();

    const { currentFolderId } = useNavigateFolder();

    const {
        records,
        loading,
        meta,
`}
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