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
  "title": "Event Publisher",
  "description": "Reference for webiny/api/event-publisher",
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
  "title": "DomainEvent",
  "slug": "domain-event",
  "children": []
}, {
  "title": "EventPublisher",
  "slug": "event-publisher",
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
<li parentName="ul">{`What is exported from `}<inlineCode parentName="li">{`webiny/api/event-publisher`}</inlineCode>{`?`}</li>
<li parentName="ul">{`How to import and use each exported item?`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`This page documents everything exported from `}<inlineCode parentName="p">{`webiny/api/event-publisher`}</inlineCode>{`. Import any of the items below directly from this path in your Webiny extensions.`}</p>
<SymbolList symbols={[{
      name: "DomainEvent",
      anchor: "domain-event"
    }, {
      name: "EventPublisher",
      anchor: "event-publisher"
    }]} mdxType="SymbolList" />
<_Heading level={2} id={"domain-event"} nextElement={{
      "type": "paragraph"
    }}><code>DomainEvent</code></_Heading>
<p><strong parentName="p">{`Class`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/event-publisher`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { DomainEvent } from "webiny/api/event-publisher";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export abstract class DomainEvent<TPayload = void> {
  public abstract readonly eventType: string;
  public readonly occurredAt: Date;
  public readonly payload: TPayload extends void ? undefined : TPayload;
  constructor(payload?: never);
  abstract getHandlerAbstraction(): Abstraction<IEventHandler<any>>;
}`}
</Editor>
<_Heading level={2} id={"event-publisher"} nextElement={{
      "type": "paragraph"
    }}><code>EventPublisher</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/event-publisher`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { EventPublisher } from "webiny/api/event-publisher";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export const EventPublisher = new Abstraction<IEventPublisher>("EventPublisher");`}
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