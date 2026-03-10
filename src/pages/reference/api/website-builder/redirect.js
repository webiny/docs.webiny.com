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
  "title": "Redirect",
  "description": "Website Builder redirect use cases and event handlers",
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
    "title": "CreateRedirectUseCase",
    "slug": "create-redirect-use-case",
    "children": []
  }, {
    "title": "DeleteRedirectUseCase",
    "slug": "delete-redirect-use-case",
    "children": []
  }, {
    "title": "GetActiveRedirectsUseCase",
    "slug": "get-active-redirects-use-case",
    "children": []
  }, {
    "title": "GetRedirectByIdUseCase",
    "slug": "get-redirect-by-id-use-case",
    "children": []
  }, {
    "title": "InvalidateRedirectsCacheUseCase",
    "slug": "invalidate-redirects-cache-use-case",
    "children": []
  }, {
    "title": "ListRedirectsUseCase",
    "slug": "list-redirects-use-case",
    "children": []
  }, {
    "title": "MoveRedirectUseCase",
    "slug": "move-redirect-use-case",
    "children": []
  }, {
    "title": "UpdateRedirectUseCase",
    "slug": "update-redirect-use-case",
    "children": []
  }]
}, {
  "title": "Event Handlers",
  "slug": "event-handlers",
  "children": [{
    "title": "RedirectAfterCreateHandler",
    "slug": "redirect-after-create-handler",
    "children": []
  }, {
    "title": "RedirectAfterDeleteHandler",
    "slug": "redirect-after-delete-handler",
    "children": []
  }, {
    "title": "RedirectAfterMoveHandler",
    "slug": "redirect-after-move-handler",
    "children": []
  }, {
    "title": "RedirectAfterUpdateHandler",
    "slug": "redirect-after-update-handler",
    "children": []
  }, {
    "title": "RedirectBeforeCreateHandler",
    "slug": "redirect-before-create-handler",
    "children": []
  }, {
    "title": "RedirectBeforeDeleteHandler",
    "slug": "redirect-before-delete-handler",
    "children": []
  }, {
    "title": "RedirectBeforeMoveHandler",
    "slug": "redirect-before-move-handler",
    "children": []
  }, {
    "title": "RedirectBeforeUpdateHandler",
    "slug": "redirect-before-update-handler",
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
<li parentName="ul">{`What use cases are available in `}<inlineCode parentName="li">{`webiny/api/website-builder/redirect`}</inlineCode>{`?`}</li>
<li parentName="ul">{`How to import and use each exported item?`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`This page documents everything exported from `}<inlineCode parentName="p">{`webiny/api/website-builder/redirect`}</inlineCode>{`. Import any of the items below directly from this path in your Webiny extensions.`}</p>
<p><strong parentName="p">{`Use Cases`}</strong></p>
<SymbolList symbols={[{
      name: "CreateRedirectUseCase",
      anchor: "create-redirect-use-case"
    }, {
      name: "DeleteRedirectUseCase",
      anchor: "delete-redirect-use-case"
    }, {
      name: "GetActiveRedirectsUseCase",
      anchor: "get-active-redirects-use-case"
    }, {
      name: "GetRedirectByIdUseCase",
      anchor: "get-redirect-by-id-use-case"
    }, {
      name: "InvalidateRedirectsCacheUseCase",
      anchor: "invalidate-redirects-cache-use-case"
    }, {
      name: "ListRedirectsUseCase",
      anchor: "list-redirects-use-case"
    }, {
      name: "MoveRedirectUseCase",
      anchor: "move-redirect-use-case"
    }, {
      name: "UpdateRedirectUseCase",
      anchor: "update-redirect-use-case"
    }]} mdxType="SymbolList" />
<p><strong parentName="p">{`Event Handlers`}</strong></p>
<SymbolList symbols={[{
      name: "RedirectAfterCreateHandler",
      anchor: "redirect-after-create-handler"
    }, {
      name: "RedirectAfterDeleteHandler",
      anchor: "redirect-after-delete-handler"
    }, {
      name: "RedirectAfterMoveHandler",
      anchor: "redirect-after-move-handler"
    }, {
      name: "RedirectAfterUpdateHandler",
      anchor: "redirect-after-update-handler"
    }, {
      name: "RedirectBeforeCreateHandler",
      anchor: "redirect-before-create-handler"
    }, {
      name: "RedirectBeforeDeleteHandler",
      anchor: "redirect-before-delete-handler"
    }, {
      name: "RedirectBeforeMoveHandler",
      anchor: "redirect-before-move-handler"
    }, {
      name: "RedirectBeforeUpdateHandler",
      anchor: "redirect-before-update-handler"
    }]} mdxType="SymbolList" />
<_Heading level={2} id={"use-cases"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Use Cases</_Heading>
<_Heading level={3} id={"create-redirect-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>CreateRedirectUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/website-builder/redirect`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { CreateRedirectUseCase } from "webiny/api/website-builder/redirect";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`CreateRedirectUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface CreateRedirectUseCase.Interface {
    execute(data: ICreateWbRedirectData): Promise<Result<WbRedirect, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace CreateRedirectUseCase {
  type Interface = ICreateRedirectUseCase;
  type Params = ICreateWbRedirectData;
  type Return = Promise<Result<WbRedirect, UseCaseError>>;
  type Error = UseCaseError;
  type Redirect = WbRedirect;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { CreateRedirectUseCase } from "webiny/api/website-builder/redirect";

class MyImpl implements MyUseCase.Interface {
  public constructor(private createRedirectUseCase: CreateRedirectUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.createRedirectUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [CreateRedirectUseCase]
});`}
</Editor>
<_Heading level={3} id={"delete-redirect-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>DeleteRedirectUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/website-builder/redirect`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { DeleteRedirectUseCase } from "webiny/api/website-builder/redirect";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`DeleteRedirectUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface DeleteRedirectUseCase.Interface {
    execute(params: IDeleteWbRedirectParams): Promise<Result<void, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace DeleteRedirectUseCase {
  type Interface = IDeleteRedirectUseCase;
  type Params = IDeleteWbRedirectParams;
  type Return = Promise<Result<void, UseCaseError>>;
  type Error = UseCaseError;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { DeleteRedirectUseCase } from "webiny/api/website-builder/redirect";

class MyImpl implements MyUseCase.Interface {
  public constructor(private deleteRedirectUseCase: DeleteRedirectUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.deleteRedirectUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [DeleteRedirectUseCase]
});`}
</Editor>
<_Heading level={3} id={"get-active-redirects-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>GetActiveRedirectsUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/website-builder/redirect`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { GetActiveRedirectsUseCase } from "webiny/api/website-builder/redirect";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`GetActiveRedirectsUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface GetActiveRedirectsUseCase.Interface {
    execute(): Promise<Result<WbRedirect[], UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace GetActiveRedirectsUseCase {
  type Interface = IGetActiveRedirectsUseCase;
  type Return = Promise<Result<WbRedirect[], UseCaseError>>;
  type Error = UseCaseError;
  type Redirect = WbRedirect;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { GetActiveRedirectsUseCase } from "webiny/api/website-builder/redirect";

class MyImpl implements MyUseCase.Interface {
  public constructor(private getActiveRedirectsUseCase: GetActiveRedirectsUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.getActiveRedirectsUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [GetActiveRedirectsUseCase]
});`}
</Editor>
<_Heading level={3} id={"get-redirect-by-id-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>GetRedirectByIdUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/website-builder/redirect`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { GetRedirectByIdUseCase } from "webiny/api/website-builder/redirect";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`GetRedirectByIdUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface GetRedirectByIdUseCase.Interface {
    execute(id: string): Promise<Result<WbRedirect, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace GetRedirectByIdUseCase {
  type Interface = IGetRedirectByIdUseCase;
  type Return = Promise<Result<WbRedirect, UseCaseError>>;
  type Error = UseCaseError;
  type Redirect = WbRedirect;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { GetRedirectByIdUseCase } from "webiny/api/website-builder/redirect";

class MyImpl implements MyUseCase.Interface {
  public constructor(private getRedirectByIdUseCase: GetRedirectByIdUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.getRedirectByIdUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [GetRedirectByIdUseCase]
});`}
</Editor>
<_Heading level={3} id={"invalidate-redirects-cache-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>InvalidateRedirectsCacheUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/website-builder/redirect`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { InvalidateRedirectsCacheUseCase } from "webiny/api/website-builder/redirect";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`InvalidateRedirectsCacheUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface InvalidateRedirectsCacheUseCase.Interface {
    execute(): Promise<Result<void, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace InvalidateRedirectsCacheUseCase {
  type Interface = IInvalidateRedirectsCacheUseCase;
  type Return = Promise<Result<void, UseCaseError>>;
  type Error = UseCaseError;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { InvalidateRedirectsCacheUseCase } from "webiny/api/website-builder/redirect";

class MyImpl implements MyUseCase.Interface {
  public constructor(
    private invalidateRedirectsCacheUseCase: InvalidateRedirectsCacheUseCase.Interface
  ) {}

  public async execute(/* ... */): Promise<void> {
    await this.invalidateRedirectsCacheUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [InvalidateRedirectsCacheUseCase]
});`}
</Editor>
<_Heading level={3} id={"list-redirects-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>ListRedirectsUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/website-builder/redirect`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { ListRedirectsUseCase } from "webiny/api/website-builder/redirect";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`ListRedirectsUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface ListRedirectsUseCase.Interface {
    execute(params: ListWbRedirectsParams): Promise<Result<ListRedirectsResult, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace ListRedirectsUseCase {
  type Interface = IListRedirectsUseCase;
  type Params = ListWbRedirectsParams;
  type Return = Promise<Result<ListRedirectsResult, UseCaseError>>;
  type Error = UseCaseError;
  type Redirect = WbRedirect;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { ListRedirectsUseCase } from "webiny/api/website-builder/redirect";

class MyImpl implements MyUseCase.Interface {
  public constructor(private listRedirectsUseCase: ListRedirectsUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.listRedirectsUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [ListRedirectsUseCase]
});`}
</Editor>
<_Heading level={3} id={"move-redirect-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>MoveRedirectUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/website-builder/redirect`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { MoveRedirectUseCase } from "webiny/api/website-builder/redirect";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`MoveRedirectUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface MoveRedirectUseCase.Interface {
    execute(params: IMoveWbRedirectParams): Promise<Result<WbRedirect, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace MoveRedirectUseCase {
  type Interface = IMoveRedirectUseCase;
  type Params = IMoveWbRedirectParams;
  type Return = Promise<Result<WbRedirect, UseCaseError>>;
  type Error = UseCaseError;
  type Redirect = WbRedirect;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { MoveRedirectUseCase } from "webiny/api/website-builder/redirect";

class MyImpl implements MyUseCase.Interface {
  public constructor(private moveRedirectUseCase: MoveRedirectUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.moveRedirectUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [MoveRedirectUseCase]
});`}
</Editor>
<_Heading level={3} id={"update-redirect-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>UpdateRedirectUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/website-builder/redirect`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { UpdateRedirectUseCase } from "webiny/api/website-builder/redirect";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`UpdateRedirectUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface UpdateRedirectUseCase.Interface {
    execute(id: string, data: IUpdateWbRedirectData): Promise<Result<WbRedirect, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace UpdateRedirectUseCase {
  type Interface = IUpdateRedirectUseCase;
  type UpdateData = IUpdateWbRedirectData;
  type Return = Promise<Result<WbRedirect, UseCaseError>>;
  type Error = UseCaseError;
  type Redirect = WbRedirect;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { UpdateRedirectUseCase } from "webiny/api/website-builder/redirect";

class MyImpl implements MyUseCase.Interface {
  public constructor(private updateRedirectUseCase: UpdateRedirectUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.updateRedirectUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [UpdateRedirectUseCase]
});`}
</Editor>
<_Heading level={2} id={"event-handlers"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Event Handlers</_Heading>
<_Heading level={3} id={"redirect-after-create-handler"} nextElement={{
      "type": "paragraph"
    }}><code>RedirectAfterCreateHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/website-builder/redirect`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { RedirectAfterCreateHandler } from "webiny/api/website-builder/redirect";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`RedirectAfterCreateHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface RedirectAfterCreateHandler.Interface {
    handle(event: DomainEvent<RedirectAfterCreatePayload>): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Event payload `}<inlineCode parentName="strong">{`RedirectAfterCreatePayload`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface RedirectAfterCreatePayload {
  redirect: WbRedirect;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace RedirectAfterCreateHandler {
  type Interface = IEventHandler<DomainEvent<RedirectAfterCreatePayload>>;
  type Event = DomainEvent<RedirectAfterCreatePayload>;
  type Redirect = WbRedirect;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { RedirectAfterCreateHandler } from "webiny/api/website-builder/redirect";

class MyHandler implements RedirectAfterCreateHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: RedirectAfterCreateHandler.Event): Promise<void> {
    const { redirect } = event.payload;
  }
}

export default RedirectAfterCreateHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"redirect-after-delete-handler"} nextElement={{
      "type": "paragraph"
    }}><code>RedirectAfterDeleteHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/website-builder/redirect`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { RedirectAfterDeleteHandler } from "webiny/api/website-builder/redirect";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`RedirectAfterDeleteHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface RedirectAfterDeleteHandler.Interface {
    handle(event: DomainEvent<RedirectAfterDeletePayload>): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Event payload `}<inlineCode parentName="strong">{`RedirectAfterDeletePayload`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface RedirectAfterDeletePayload {
  redirect: WbRedirect;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace RedirectAfterDeleteHandler {
  type Interface = IEventHandler<DomainEvent<RedirectAfterDeletePayload>>;
  type Event = DomainEvent<RedirectAfterDeletePayload>;
  type Redirect = WbRedirect;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { RedirectAfterDeleteHandler } from "webiny/api/website-builder/redirect";

class MyHandler implements RedirectAfterDeleteHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: RedirectAfterDeleteHandler.Event): Promise<void> {
    const { redirect } = event.payload;
  }
}

export default RedirectAfterDeleteHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"redirect-after-move-handler"} nextElement={{
      "type": "paragraph"
    }}><code>RedirectAfterMoveHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/website-builder/redirect`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { RedirectAfterMoveHandler } from "webiny/api/website-builder/redirect";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`RedirectAfterMoveHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface RedirectAfterMoveHandler.Interface {
    handle(event: DomainEvent<RedirectAfterMovePayload>): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Event payload `}<inlineCode parentName="strong">{`RedirectAfterMovePayload`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface RedirectAfterMovePayload {
  original: WbRedirect;
  input: IMoveWbRedirectParams;
  redirect: WbRedirect;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace RedirectAfterMoveHandler {
  type Interface = IEventHandler<DomainEvent<RedirectAfterMovePayload>>;
  type Event = DomainEvent<RedirectAfterMovePayload>;
  type Redirect = WbRedirect;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { RedirectAfterMoveHandler } from "webiny/api/website-builder/redirect";

class MyHandler implements RedirectAfterMoveHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: RedirectAfterMoveHandler.Event): Promise<void> {
    const { original, input, redirect } = event.payload;
  }
}

export default RedirectAfterMoveHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"redirect-after-update-handler"} nextElement={{
      "type": "paragraph"
    }}><code>RedirectAfterUpdateHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/website-builder/redirect`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { RedirectAfterUpdateHandler } from "webiny/api/website-builder/redirect";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`RedirectAfterUpdateHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface RedirectAfterUpdateHandler.Interface {
    handle(event: DomainEvent<RedirectAfterUpdatePayload>): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Event payload `}<inlineCode parentName="strong">{`RedirectAfterUpdatePayload`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface RedirectAfterUpdatePayload {
  original: WbRedirect;
  input: {
    id: string;
    data: IUpdateWbRedirectData;
  };
  redirect: WbRedirect;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace RedirectAfterUpdateHandler {
  type Interface = IEventHandler<DomainEvent<RedirectAfterUpdatePayload>>;
  type Event = DomainEvent<RedirectAfterUpdatePayload>;
  type Redirect = WbRedirect;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { RedirectAfterUpdateHandler } from "webiny/api/website-builder/redirect";

class MyHandler implements RedirectAfterUpdateHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: RedirectAfterUpdateHandler.Event): Promise<void> {
    const { original, input, redirect } = event.payload;
  }
}

export default RedirectAfterUpdateHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"redirect-before-create-handler"} nextElement={{
      "type": "paragraph"
    }}><code>RedirectBeforeCreateHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/website-builder/redirect`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { RedirectBeforeCreateHandler } from "webiny/api/website-builder/redirect";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`RedirectBeforeCreateHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface RedirectBeforeCreateHandler.Interface {
    handle(event: DomainEvent<RedirectBeforeCreatePayload>): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Event payload `}<inlineCode parentName="strong">{`RedirectBeforeCreatePayload`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface RedirectBeforeCreatePayload {
  input: ICreateWbRedirectData;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace RedirectBeforeCreateHandler {
  type Interface = IEventHandler<DomainEvent<RedirectBeforeCreatePayload>>;
  type Event = DomainEvent<RedirectBeforeCreatePayload>;
  type Redirect = WbRedirect;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { RedirectBeforeCreateHandler } from "webiny/api/website-builder/redirect";

class MyHandler implements RedirectBeforeCreateHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: RedirectBeforeCreateHandler.Event): Promise<void> {
    const { input } = event.payload;
  }
}

export default RedirectBeforeCreateHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"redirect-before-delete-handler"} nextElement={{
      "type": "paragraph"
    }}><code>RedirectBeforeDeleteHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/website-builder/redirect`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { RedirectBeforeDeleteHandler } from "webiny/api/website-builder/redirect";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`RedirectBeforeDeleteHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface RedirectBeforeDeleteHandler.Interface {
    handle(event: DomainEvent<RedirectBeforeDeletePayload>): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Event payload `}<inlineCode parentName="strong">{`RedirectBeforeDeletePayload`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface RedirectBeforeDeletePayload {
  redirect: WbRedirect;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace RedirectBeforeDeleteHandler {
  type Interface = IEventHandler<DomainEvent<RedirectBeforeDeletePayload>>;
  type Event = DomainEvent<RedirectBeforeDeletePayload>;
  type Redirect = WbRedirect;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { RedirectBeforeDeleteHandler } from "webiny/api/website-builder/redirect";

class MyHandler implements RedirectBeforeDeleteHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: RedirectBeforeDeleteHandler.Event): Promise<void> {
    const { redirect } = event.payload;
  }
}

export default RedirectBeforeDeleteHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"redirect-before-move-handler"} nextElement={{
      "type": "paragraph"
    }}><code>RedirectBeforeMoveHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/website-builder/redirect`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { RedirectBeforeMoveHandler } from "webiny/api/website-builder/redirect";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`RedirectBeforeMoveHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface RedirectBeforeMoveHandler.Interface {
    handle(event: DomainEvent<RedirectBeforeMovePayload>): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Event payload `}<inlineCode parentName="strong">{`RedirectBeforeMovePayload`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface RedirectBeforeMovePayload {
  original: WbRedirect;
  input: IMoveWbRedirectParams;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace RedirectBeforeMoveHandler {
  type Interface = IEventHandler<DomainEvent<RedirectBeforeMovePayload>>;
  type Event = DomainEvent<RedirectBeforeMovePayload>;
  type Redirect = WbRedirect;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { RedirectBeforeMoveHandler } from "webiny/api/website-builder/redirect";

class MyHandler implements RedirectBeforeMoveHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: RedirectBeforeMoveHandler.Event): Promise<void> {
    const { original, input } = event.payload;
  }
}

export default RedirectBeforeMoveHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"redirect-before-update-handler"} nextElement={{
      "type": "paragraph"
    }}><code>RedirectBeforeUpdateHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/website-builder/redirect`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { RedirectBeforeUpdateHandler } from "webiny/api/website-builder/redirect";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`RedirectBeforeUpdateHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface RedirectBeforeUpdateHandler.Interface {
    handle(event: DomainEvent<RedirectBeforeUpdatePayload>): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Event payload `}<inlineCode parentName="strong">{`RedirectBeforeUpdatePayload`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface RedirectBeforeUpdatePayload {
  original: WbRedirect;
  input: {
    id: string;
    data: IUpdateWbRedirectData;
  };
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace RedirectBeforeUpdateHandler {
  type Interface = IEventHandler<DomainEvent<RedirectBeforeUpdatePayload>>;
  type Event = DomainEvent<RedirectBeforeUpdatePayload>;
  type Redirect = WbRedirect;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { RedirectBeforeUpdateHandler } from "webiny/api/website-builder/redirect";

class MyHandler implements RedirectBeforeUpdateHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: RedirectBeforeUpdateHandler.Event): Promise<void> {
    const { original, input } = event.payload;
  }
}

export default RedirectBeforeUpdateHandler.createImplementation({
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