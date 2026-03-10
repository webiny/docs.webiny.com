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
  "title": "List",
  "description": "Content entry list configuration",
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
    "title": "ContentEntryListConfig",
    "slug": "content-entry-list-config",
    "children": []
  }]
}, {
  "title": "Other",
  "slug": "other",
  "children": [{
    "title": "useContentEntriesList",
    "slug": "use-content-entries-list",
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
<li parentName="ul">{`What is exported from `}<inlineCode parentName="li">{`webiny/admin/cms/entry/list`}</inlineCode>{`?`}</li>
<li parentName="ul">{`How to import and use each exported item?`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`This page documents everything exported from `}<inlineCode parentName="p">{`webiny/admin/cms/entry/list`}</inlineCode>{`. Import any of the items below directly from this path in your Webiny extensions.`}</p>
<p><strong parentName="p">{`Components`}</strong></p>
<SymbolList symbols={[{
      name: "ContentEntryListConfig",
      anchor: "content-entry-list-config"
    }]} mdxType="SymbolList" />
<p><strong parentName="p">{`Other`}</strong></p>
<SymbolList symbols={[{
      name: "useContentEntriesList",
      anchor: "use-content-entries-list"
    }]} mdxType="SymbolList" />
<_Heading level={2} id={"components"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Components</_Heading>
<_Heading level={3} id={"content-entry-list-config"} nextElement={{
      "type": "paragraph"
    }}><code>ContentEntryListConfig</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/cms/entry/list`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { ContentEntryListConfig } from "webiny/admin/cms/entry/list";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export const ContentEntryListConfig = Object.assign(PublicContentEntryListConfig, { Browser });`}
</Editor>
<_Heading level={2} id={"other"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Other</_Heading>
<_Heading level={3} id={"use-content-entries-list"} nextElement={{
      "type": "paragraph"
    }}><code>useContentEntriesList</code></_Heading>
<p><strong parentName="p">{`Export`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/cms/entry/list`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { useContentEntriesList } from "webiny/admin/cms/entry/list";`}
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