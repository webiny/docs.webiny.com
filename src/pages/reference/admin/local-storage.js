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
  "title": "Local Storage",
  "description": "Reference for webiny/admin/local-storage",
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
    "title": "LocalStorage",
    "slug": "local-storage",
    "children": []
  }]
}, {
  "title": "Hooks",
  "slug": "hooks",
  "children": [{
    "title": "useLocalStorage",
    "slug": "use-local-storage",
    "children": []
  }, {
    "title": "useLocalStorageValue",
    "slug": "use-local-storage-value",
    "children": []
  }, {
    "title": "useLocalStorageValues",
    "slug": "use-local-storage-values",
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
<li parentName="ul">{`What is exported from `}<inlineCode parentName="li">{`webiny/admin/local-storage`}</inlineCode>{`?`}</li>
<li parentName="ul">{`How to import and use each exported item?`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`This page documents everything exported from `}<inlineCode parentName="p">{`webiny/admin/local-storage`}</inlineCode>{`. Import any of the items below directly from this path in your Webiny extensions.`}</p>
<p><strong parentName="p">{`Components`}</strong></p>
<SymbolList symbols={[{
      name: "LocalStorage",
      anchor: "local-storage"
    }]} mdxType="SymbolList" />
<p><strong parentName="p">{`Hooks`}</strong></p>
<SymbolList symbols={[{
      name: "useLocalStorage",
      anchor: "use-local-storage"
    }, {
      name: "useLocalStorageValue",
      anchor: "use-local-storage-value"
    }, {
      name: "useLocalStorageValues",
      anchor: "use-local-storage-values"
    }]} mdxType="SymbolList" />
<_Heading level={2} id={"components"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Components</_Heading>
<_Heading level={3} id={"local-storage"} nextElement={{
      "type": "paragraph"
    }}><code>LocalStorage</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/local-storage`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { LocalStorage } from "webiny/admin/local-storage";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export const LocalStorage = new Abstraction<ILocalStorage>("LocalStorage");`}
</Editor>
<_Heading level={2} id={"hooks"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Hooks</_Heading>
<_Heading level={3} id={"use-local-storage"} nextElement={{
      "type": "paragraph"
    }}><code>useLocalStorage</code></_Heading>
<p><strong parentName="p">{`Function`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/local-storage`}</inlineCode></p>
<p>{`Returns the LocalStorage instance from DI.
Useful when you want to call service methods imperatively inside components.`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { useLocalStorage } from "webiny/admin/local-storage";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export function useLocalStorage(): LocalStorage.Interface;`}
</Editor>
<_Heading level={3} id={"use-local-storage-value"} nextElement={{
      "type": "paragraph"
    }}><code>useLocalStorageValue</code></_Heading>
<p><strong parentName="p">{`Function`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/local-storage`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { useLocalStorageValue } from "webiny/admin/local-storage";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export function useLocalStorageValue<T = string>(key: string): T | undefined;`}
</Editor>
<_Heading level={3} id={"use-local-storage-values"} nextElement={{
      "type": "paragraph"
    }}><code>useLocalStorageValues</code></_Heading>
<p><strong parentName="p">{`Function`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/local-storage`}</inlineCode></p>
<p>{`Observes multiple keys in LocalStorage and returns an object of { key: value }.
Re-renders when any of the observed keys change.`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { useLocalStorageValues } from "webiny/admin/local-storage";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export function useLocalStorageValues<T extends Record<string, any>>(
  keys: (keyof T & string)[]
): Partial<T>;`}
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