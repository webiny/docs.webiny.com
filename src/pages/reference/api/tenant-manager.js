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
  "title": "Tenant Manager",
  "description": "Tenant manager abstractions",
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
  "title": "Services",
  "slug": "services",
  "children": [{
    "title": "TenantModelExtension",
    "slug": "tenant-model-extension",
    "children": []
  }]
}, {
  "title": "Types & Classes",
  "slug": "types-and-classes",
  "children": [{
    "title": "TenantExtensions",
    "slug": "tenant-extensions",
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
<li parentName="ul">{`What is exported from `}<inlineCode parentName="li">{`webiny/api/tenant-manager`}</inlineCode>{`?`}</li>
<li parentName="ul">{`How to import and use each exported item?`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`This page documents everything exported from `}<inlineCode parentName="p">{`webiny/api/tenant-manager`}</inlineCode>{`. Import any of the items below directly from this path in your Webiny extensions.`}</p>
<p><strong parentName="p">{`Services`}</strong></p>
<SymbolList symbols={[{
      name: "TenantModelExtension",
      anchor: "tenant-model-extension"
    }]} mdxType="SymbolList" />
<p><strong parentName="p">{`Types & Classes`}</strong></p>
<SymbolList symbols={[{
      name: "TenantExtensions",
      anchor: "tenant-extensions"
    }]} mdxType="SymbolList" />
<_Heading level={2} id={"services"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Services</_Heading>
<_Heading level={3} id={"tenant-model-extension"} nextElement={{
      "type": "paragraph"
    }}><code>TenantModelExtension</code></_Heading>
<p><strong parentName="p">{`Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/tenant-manager`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { TenantModelExtension } from "webiny/api/tenant-manager";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`TenantModelExtension.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface TenantModelExtension.Interface {
    execute(extension: IExtension): void;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace TenantModelExtension {
  type Interface = ITenantModelExtension;
  type Extension = IExtension;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { TenantModelExtension } from "webiny/api/tenant-manager";

class MyImpl implements MyUseCase.Interface {
  public constructor(private tenantModelExtension: TenantModelExtension.Interface) {}

  public async execute(/* ... */): Promise<void> {
    this.tenantModelExtension.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [TenantModelExtension]
});`}
</Editor>
<_Heading level={2} id={"types-and-classes"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Types &amp; Classes</_Heading>
<_Heading level={3} id={"tenant-extensions"} nextElement={{
      "type": "paragraph"
    }}><code>TenantExtensions</code></_Heading>
<p><strong parentName="p">{`Type`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/tenant-manager`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import type { TenantExtensions } from "webiny/api/tenant-manager";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export interface TenantExtensions {}`}
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