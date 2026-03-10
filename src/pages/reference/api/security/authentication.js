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
  "title": "Authentication",
  "description": "Authentication event handlers",
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
  "title": "AfterAuthenticationHandler",
  "slug": "after-authentication-handler",
  "children": []
}, {
  "title": "BeforeAuthenticationHandler",
  "slug": "before-authentication-handler",
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
<li parentName="ul">{`What is exported from `}<inlineCode parentName="li">{`webiny/api/security/authentication`}</inlineCode>{`?`}</li>
<li parentName="ul">{`How to import and use each exported item?`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`This page documents everything exported from `}<inlineCode parentName="p">{`webiny/api/security/authentication`}</inlineCode>{`. Import any of the items below directly from this path in your Webiny extensions.`}</p>
<SymbolList symbols={[{
      name: "AfterAuthenticationHandler",
      anchor: "after-authentication-handler"
    }, {
      name: "BeforeAuthenticationHandler",
      anchor: "before-authentication-handler"
    }]} mdxType="SymbolList" />
<_Heading level={2} id={"after-authentication-handler"} nextElement={{
      "type": "paragraph"
    }}><code>AfterAuthenticationHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/security/authentication`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { AfterAuthenticationHandler } from "webiny/api/security/authentication";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`AfterAuthenticationHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface AfterAuthenticationHandler.Interface {
    handle(event: AfterAuthenticationEvent): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace AfterAuthenticationHandler {
  type Interface = IEventHandler<AfterAuthenticationEvent>;
  type Event = AfterAuthenticationEvent;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { AfterAuthenticationHandler } from "webiny/api/security/authentication";

class MyHandler implements AfterAuthenticationHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: AfterAuthenticationHandler.Event): Promise<void> {
    // implementation
  }
}

export default AfterAuthenticationHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={2} id={"before-authentication-handler"} nextElement={{
      "type": "paragraph"
    }}><code>BeforeAuthenticationHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/security/authentication`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { BeforeAuthenticationHandler } from "webiny/api/security/authentication";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`BeforeAuthenticationHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface BeforeAuthenticationHandler.Interface {
    handle(event: BeforeAuthenticationEvent): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace BeforeAuthenticationHandler {
  type Interface = IEventHandler<BeforeAuthenticationEvent>;
  type Event = BeforeAuthenticationEvent;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { BeforeAuthenticationHandler } from "webiny/api/security/authentication";

class MyHandler implements BeforeAuthenticationHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: BeforeAuthenticationHandler.Event): Promise<void> {
    // implementation
  }
}

export default BeforeAuthenticationHandler.createImplementation({
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