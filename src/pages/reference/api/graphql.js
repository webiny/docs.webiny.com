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
  "title": "GraphQL",
  "description": "GraphQL schema factory and response helpers",
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
    "title": "GraphQLSchemaFactory",
    "slug": "graph-ql-schema-factory",
    "children": []
  }]
}, {
  "title": "Types & Classes",
  "slug": "types-and-classes",
  "children": [{
    "title": "ErrorResponse",
    "slug": "error-response",
    "children": []
  }, {
    "title": "ListErrorResponse",
    "slug": "list-error-response",
    "children": []
  }, {
    "title": "ListResponse",
    "slug": "list-response",
    "children": []
  }, {
    "title": "NotAuthorizedResponse",
    "slug": "not-authorized-response",
    "children": []
  }, {
    "title": "NotFoundResponse",
    "slug": "not-found-response",
    "children": []
  }, {
    "title": "Response",
    "slug": "response",
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
<li parentName="ul">{`How to use the builder and factory APIs?`}</li>
<li parentName="ul">{`How to import and use each exported item?`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`This page documents everything exported from `}<inlineCode parentName="p">{`webiny/api/graphql`}</inlineCode>{`. Import any of the items below directly from this path in your Webiny extensions.`}</p>
<p><strong parentName="p">{`Services`}</strong></p>
<SymbolList symbols={[{
      name: "GraphQLSchemaFactory",
      anchor: "graph-ql-schema-factory"
    }]} mdxType="SymbolList" />
<p><strong parentName="p">{`Types & Classes`}</strong></p>
<SymbolList symbols={[{
      name: "ErrorResponse",
      anchor: "error-response"
    }, {
      name: "ListErrorResponse",
      anchor: "list-error-response"
    }, {
      name: "ListResponse",
      anchor: "list-response"
    }, {
      name: "NotAuthorizedResponse",
      anchor: "not-authorized-response"
    }, {
      name: "NotFoundResponse",
      anchor: "not-found-response"
    }, {
      name: "Response",
      anchor: "response"
    }]} mdxType="SymbolList" />
<_Heading level={2} id={"services"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Services</_Heading>
<_Heading level={3} id={"graph-ql-schema-factory"} nextElement={{
      "type": "paragraph"
    }}><code>GraphQLSchemaFactory</code></_Heading>
<p><strong parentName="p">{`Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/graphql`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { GraphQLSchemaFactory } from "webiny/api/graphql";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`GraphQLSchemaFactory.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface GraphQLSchemaFactory.Interface {
    execute(builder: GraphQLSchemaBuilder.Interface): Promise<GraphQLSchemaBuilder.Interface>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace GraphQLSchemaFactory {
  type Interface = IGraphQLSchemaFactory;
  type SchemaBuilder = GraphQLSchemaBuilder.Interface;
  type Return = Promise<GraphQLSchemaBuilder.Interface>;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { GraphQLSchemaFactory } from "webiny/api/graphql";

class MyImpl implements MyUseCase.Interface {
  public constructor(private graphQLSchemaFactory: GraphQLSchemaFactory.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.graphQLSchemaFactory.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [GraphQLSchemaFactory]
});`}
</Editor>
<_Heading level={2} id={"types-and-classes"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Types &amp; Classes</_Heading>
<_Heading level={3} id={"error-response"} nextElement={{
      "type": "paragraph"
    }}><code>ErrorResponse</code></_Heading>
<p><strong parentName="p">{`Class`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/graphql`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { ErrorResponse } from "webiny/api/graphql";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export class ErrorResponse {
    public readonly data: null;
    public readonly error:;
    constructor(params: ErrorResponseParams);
}`}
</Editor>
<_Heading level={3} id={"list-error-response"} nextElement={{
      "type": "paragraph"
    }}><code>ListErrorResponse</code></_Heading>
<p><strong parentName="p">{`Class`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/graphql`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { ListErrorResponse } from "webiny/api/graphql";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export class ListErrorResponse {
    public readonly data: null;
    public readonly meta: null;
    public readonly error:;
    constructor(params: ErrorResponseParams);
}`}
</Editor>
<_Heading level={3} id={"list-response"} nextElement={{
      "type": "paragraph"
    }}><code>ListResponse</code></_Heading>
<p><strong parentName="p">{`Class`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/graphql`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { ListResponse } from "webiny/api/graphql";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export class ListResponse<T, M> {
  public readonly data: Array<T>;
  public readonly meta: M;
  public readonly error: null;
  constructor(data: Array<T>, meta?: M);
}`}
</Editor>
<_Heading level={3} id={"not-authorized-response"} nextElement={{
      "type": "paragraph"
    }}><code>NotAuthorizedResponse</code></_Heading>
<p><strong parentName="p">{`Class`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/graphql`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { NotAuthorizedResponse } from "webiny/api/graphql";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export class NotAuthorizedResponse extends ErrorResponse {
    constructor(;
}`}
</Editor>
<_Heading level={3} id={"not-found-response"} nextElement={{
      "type": "paragraph"
    }}><code>NotFoundResponse</code></_Heading>
<p><strong parentName="p">{`Class`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/graphql`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { NotFoundResponse } from "webiny/api/graphql";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export class NotFoundResponse extends ErrorResponse {
  constructor(message: string);
}`}
</Editor>
<_Heading level={3} id={"response"} nextElement={{
      "type": "paragraph"
    }}><code>Response</code></_Heading>
<p><strong parentName="p">{`Class`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/graphql`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { Response } from "webiny/api/graphql";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export class Response<T = any> {
  public readonly data: T;
  public readonly error: null;
  constructor(data: T);
}`}
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