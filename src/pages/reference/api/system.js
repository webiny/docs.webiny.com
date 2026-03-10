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
  "title": "System",
  "description": "System installation abstractions",
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
  "title": "Use Cases",
  "slug": "use-cases",
  "children": [{
    "title": "InstallSystemUseCase",
    "slug": "install-system-use-case",
    "children": []
  }]
}, {
  "title": "Event Handlers",
  "slug": "event-handlers",
  "children": [{
    "title": "SystemInstalledHandler",
    "slug": "system-installed-handler",
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
<li parentName="ul">{`What use cases are available in `}<inlineCode parentName="li">{`webiny/api/system`}</inlineCode>{`?`}</li>
<li parentName="ul">{`How to import and use each exported item?`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`This page documents everything exported from `}<inlineCode parentName="p">{`webiny/api/system`}</inlineCode>{`. Import any of the items below directly from this path in your Webiny extensions.`}</p>
<p><strong parentName="p">{`Use Cases`}</strong></p>
<SymbolList symbols={[{
      name: "InstallSystemUseCase",
      anchor: "install-system-use-case"
    }]} mdxType="SymbolList" />
<p><strong parentName="p">{`Event Handlers`}</strong></p>
<SymbolList symbols={[{
      name: "SystemInstalledHandler",
      anchor: "system-installed-handler"
    }]} mdxType="SymbolList" />
<_Heading level={2} id={"use-cases"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Use Cases</_Heading>
<_Heading level={3} id={"install-system-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>InstallSystemUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/system`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { InstallSystemUseCase } from "webiny/api/system";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`InstallSystemUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface InstallSystemUseCase.Interface {
    execute(
        input: InstallSystemInput
    ): Promise<Result<void, IInstallSystemErrors[keyof IInstallSystemErrors]>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace InstallSystemUseCase {
  type Interface = IInstallSystemUseCase;
  type Input = InstallSystemInput;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { InstallSystemUseCase } from "webiny/api/system";

class MyImpl implements MyUseCase.Interface {
  public constructor(private installSystemUseCase: InstallSystemUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.installSystemUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [InstallSystemUseCase]
});`}
</Editor>
<_Heading level={2} id={"event-handlers"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Event Handlers</_Heading>
<_Heading level={3} id={"system-installed-handler"} nextElement={{
      "type": "paragraph"
    }}><code>SystemInstalledHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/system`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { SystemInstalledHandler } from "webiny/api/system";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`SystemInstalledHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface SystemInstalledHandler.Interface {
    handle(event: DomainEvent): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace SystemInstalledHandler {
  type Interface = IEventHandler<DomainEvent>;
  type Event = DomainEvent;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { SystemInstalledHandler } from "webiny/api/system";

class MyHandler implements SystemInstalledHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: SystemInstalledHandler.Event): Promise<void> {
    // implementation
  }
}

export default SystemInstalledHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
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