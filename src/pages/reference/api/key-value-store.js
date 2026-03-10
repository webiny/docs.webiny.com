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
  "title": "Key Value Store",
  "description": "Reference for webiny/api/key-value-store",
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
  "title": "GlobalKeyValueStore",
  "slug": "global-key-value-store",
  "children": []
}, {
  "title": "KeyValueStore",
  "slug": "key-value-store",
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
<li parentName="ul">{`What is exported from `}<inlineCode parentName="li">{`webiny/api/key-value-store`}</inlineCode>{`?`}</li>
<li parentName="ul">{`How to import and use each exported item?`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`This page documents everything exported from `}<inlineCode parentName="p">{`webiny/api/key-value-store`}</inlineCode>{`. Import any of the items below directly from this path in your Webiny extensions.`}</p>
<SymbolList symbols={[{
      name: "GlobalKeyValueStore",
      anchor: "global-key-value-store"
    }, {
      name: "KeyValueStore",
      anchor: "key-value-store"
    }]} mdxType="SymbolList" />
<_Heading level={2} id={"global-key-value-store"} nextElement={{
      "type": "paragraph"
    }}><code>GlobalKeyValueStore</code></_Heading>
<p><strong parentName="p">{`Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/key-value-store`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { GlobalKeyValueStore } from "webiny/api/key-value-store";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`GlobalKeyValueStore.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface GlobalKeyValueStore.Interface {
    get<T = unknown>(
        key: string,
        options?: IGlobalKeyValueStoreOptions
    ): Promise<Result<T, KeyValueStoreRepository.Error>>;
    set(
        key: string,
        value: any,
        options?: IGlobalKeyValueStoreOptions
    ): Promise<Result<void, KeyValueStoreRepository.Error>>;
    delete(
        key: string,
        options?: IGlobalKeyValueStoreOptions
    ): Promise<Result<void, KeyValueStoreRepository.Error>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace GlobalKeyValueStore {
  type Interface = IGlobalKeyValueStore;
  type KeyValueRecord = IKeyValueRecord;
  type Error = KeyValueStoreRepository.Error;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { GlobalKeyValueStore } from "webiny/api/key-value-store";

class MyImpl implements MyUseCase.Interface {
  public constructor(private globalKeyValueStore: GlobalKeyValueStore.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.globalKeyValueStore.get(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [GlobalKeyValueStore]
});`}
</Editor>
<_Heading level={2} id={"key-value-store"} nextElement={{
      "type": "paragraph"
    }}><code>KeyValueStore</code></_Heading>
<p><strong parentName="p">{`Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/key-value-store`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { KeyValueStore } from "webiny/api/key-value-store";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`KeyValueStore.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface KeyValueStore.Interface {
    get<T = unknown>(key: string): Promise<Result<T, KeyValueStoreRepository.Error>>;
    set(key: string, value: any): Promise<Result<void, KeyValueStoreRepository.Error>>;
    delete(key: string): Promise<Result<void, KeyValueStoreRepository.Error>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace KeyValueStore {
  type Interface = IKeyValueStore;
  type KeyValueRecord = IKeyValueRecord;
  type Error = KeyValueStoreRepository.Error;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { KeyValueStore } from "webiny/api/key-value-store";

class MyImpl implements MyUseCase.Interface {
  public constructor(private keyValueStore: KeyValueStore.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.keyValueStore.get(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [KeyValueStore]
});`}
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