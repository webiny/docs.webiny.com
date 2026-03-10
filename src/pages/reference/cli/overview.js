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
  "title": "CLI",
  "description": "CLI-scoped Logger and Ui abstractions",
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
  "title": "Logger",
  "slug": "logger",
  "children": []
}, {
  "title": "Ui",
  "slug": "ui",
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
<li parentName="ul">{`What is exported from `}<inlineCode parentName="li">{`webiny/cli/index`}</inlineCode>{`?`}</li>
<li parentName="ul">{`How to import and use each exported item?`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`This page documents everything exported from `}<inlineCode parentName="p">{`webiny/cli/index`}</inlineCode>{`. Import any of the items below directly from this path in your Webiny extensions.`}</p>
<SymbolList symbols={[{
      name: "Logger",
      anchor: "logger"
    }, {
      name: "Ui",
      anchor: "ui"
    }]} mdxType="SymbolList" />
<_Heading level={2} id={"logger"} nextElement={{
      "type": "paragraph"
    }}><code>Logger</code></_Heading>
<p><strong parentName="p">{`Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/cli/index`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { Logger } from "webiny/cli/index";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`Logger.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface Logger.Interface {
    trace(objOrMsg: object | string, ...args: any[]): void;
    debug(objOrMsg: object | string, ...args: any[]): void;
    info(objOrMsg: object | string, ...args: any[]): void;
    warn(objOrMsg: object | string, ...args: any[]): void;
    error(objOrMsg: object | string, ...args: any[]): void;
    fatal(objOrMsg: object | string, ...args: any[]): void;
    log(objOrMsg: object | string, ...args: any[]): void;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace Logger {
  type Interface = ILoggerService;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { Logger } from "webiny/cli/index";

class MyImpl implements MyUseCase.Interface {
  public constructor(private logger: Logger.Interface) {}

  public async execute(/* ... */): Promise<void> {
    this.logger.info(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [Logger]
});`}
</Editor>
<_Heading level={2} id={"ui"} nextElement={{
      "type": "paragraph"
    }}><code>Ui</code></_Heading>
<p><strong parentName="p">{`Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/cli/index`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { Ui } from "webiny/cli/index";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`Ui.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface Ui.Interface {
    raw(text: string): void;
    text(text: string): void;
    textBold(text: string): void;
    emptyLine(): void;
    info(text: string, ...args: any[]): void;
    success(text: string, ...args: any[]): void;
    error(text: string, ...args: any[]): void;
    warning(text: string, ...args: any[]): void;
    debug(text: string, ...args: any[]): void;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace Ui {
  type Interface = IUiService;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { Ui } from "webiny/cli/index";

class MyImpl implements MyUseCase.Interface {
  public constructor(private ui: Ui.Interface) {}

  public async execute(/* ... */): Promise<void> {
    this.ui.info(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [Ui]
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