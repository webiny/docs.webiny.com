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
  "title": "Build Params",
  "description": "Reference for webiny/api/build-params",
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
  "title": "BuildParam",
  "slug": "build-param",
  "children": []
}, {
  "title": "BuildParams",
  "slug": "build-params",
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
<li parentName="ul">{`What is exported from `}<inlineCode parentName="li">{`webiny/api/build-params`}</inlineCode>{`?`}</li>
<li parentName="ul">{`How to import and use each exported item?`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`This page documents everything exported from `}<inlineCode parentName="p">{`webiny/api/build-params`}</inlineCode>{`. Import any of the items below directly from this path in your Webiny extensions.`}</p>
<SymbolList symbols={[{
      name: "BuildParam",
      anchor: "build-param"
    }, {
      name: "BuildParams",
      anchor: "build-params"
    }]} mdxType="SymbolList" />
<_Heading level={2} id={"build-param"} nextElement={{
      "type": "paragraph"
    }}><code>BuildParam</code></_Heading>
<p><strong parentName="p">{`Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/build-params`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { BuildParam } from "webiny/api/build-params";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`BuildParam.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface BuildParam.Interface {
    key: string;
    value: any;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace BuildParam {
  type Interface = IBuildParam;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { BuildParam } from "webiny/api/build-params";

class MyImpl implements MyUseCase.Interface {
    public constructor(private buildParam: BuildParam.Interface) {}

    public async execute(/* ... */): Promise<void> {
        this.buildParam.key: string(/* ... */);
    }
}

export default MyUseCase.createImplementation({
    implementation: MyImpl,
    dependencies: [BuildParam]
});`}
</Editor>
<_Heading level={2} id={"build-params"} nextElement={{
      "type": "paragraph"
    }}><code>BuildParams</code></_Heading>
<p><strong parentName="p">{`Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/build-params`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { BuildParams } from "webiny/api/build-params";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`BuildParams.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface BuildParams.Interface {
    get<T = any>(key: string): T | null;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace BuildParams {
  type Interface = IBuildParams;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { BuildParams } from "webiny/api/build-params";

class MyImpl implements MyUseCase.Interface {
  public constructor(private buildParams: BuildParams.Interface) {}

  public async execute(/* ... */): Promise<void> {
    this.buildParams.get(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [BuildParams]
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