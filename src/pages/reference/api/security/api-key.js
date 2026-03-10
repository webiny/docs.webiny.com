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
  "title": "Api Key",
  "description": "Reference for webiny/api/security/api-key",
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
    "title": "CreateApiKeyUseCase",
    "slug": "create-api-key-use-case",
    "children": []
  }, {
    "title": "DeleteApiKeyUseCase",
    "slug": "delete-api-key-use-case",
    "children": []
  }, {
    "title": "GetApiKeyByTokenUseCase",
    "slug": "get-api-key-by-token-use-case",
    "children": []
  }, {
    "title": "GetApiKeyUseCase",
    "slug": "get-api-key-use-case",
    "children": []
  }, {
    "title": "ListApiKeysUseCase",
    "slug": "list-api-keys-use-case",
    "children": []
  }, {
    "title": "UpdateApiKeyUseCase",
    "slug": "update-api-key-use-case",
    "children": []
  }]
}, {
  "title": "Event Handlers",
  "slug": "event-handlers",
  "children": [{
    "title": "ApiKeyAfterCreateHandler",
    "slug": "api-key-after-create-handler",
    "children": []
  }, {
    "title": "ApiKeyAfterDeleteHandler",
    "slug": "api-key-after-delete-handler",
    "children": []
  }, {
    "title": "ApiKeyAfterUpdateHandler",
    "slug": "api-key-after-update-handler",
    "children": []
  }, {
    "title": "ApiKeyBeforeCreateHandler",
    "slug": "api-key-before-create-handler",
    "children": []
  }, {
    "title": "ApiKeyBeforeDeleteHandler",
    "slug": "api-key-before-delete-handler",
    "children": []
  }, {
    "title": "ApiKeyBeforeUpdateHandler",
    "slug": "api-key-before-update-handler",
    "children": []
  }]
}, {
  "title": "Services",
  "slug": "services",
  "children": [{
    "title": "ApiKeyFactory",
    "slug": "api-key-factory",
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
<li parentName="ul">{`What use cases are available in `}<inlineCode parentName="li">{`webiny/api/security/api-key`}</inlineCode>{`?`}</li>
<li parentName="ul">{`How to use the builder and factory APIs?`}</li>
<li parentName="ul">{`How to import and use each exported item?`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`This page documents everything exported from `}<inlineCode parentName="p">{`webiny/api/security/api-key`}</inlineCode>{`. Import any of the items below directly from this path in your Webiny extensions.`}</p>
<p><strong parentName="p">{`Use Cases`}</strong></p>
<SymbolList symbols={[{
      name: "CreateApiKeyUseCase",
      anchor: "create-api-key-use-case"
    }, {
      name: "DeleteApiKeyUseCase",
      anchor: "delete-api-key-use-case"
    }, {
      name: "GetApiKeyByTokenUseCase",
      anchor: "get-api-key-by-token-use-case"
    }, {
      name: "GetApiKeyUseCase",
      anchor: "get-api-key-use-case"
    }, {
      name: "ListApiKeysUseCase",
      anchor: "list-api-keys-use-case"
    }, {
      name: "UpdateApiKeyUseCase",
      anchor: "update-api-key-use-case"
    }]} mdxType="SymbolList" />
<p><strong parentName="p">{`Event Handlers`}</strong></p>
<SymbolList symbols={[{
      name: "ApiKeyAfterCreateHandler",
      anchor: "api-key-after-create-handler"
    }, {
      name: "ApiKeyAfterDeleteHandler",
      anchor: "api-key-after-delete-handler"
    }, {
      name: "ApiKeyAfterUpdateHandler",
      anchor: "api-key-after-update-handler"
    }, {
      name: "ApiKeyBeforeCreateHandler",
      anchor: "api-key-before-create-handler"
    }, {
      name: "ApiKeyBeforeDeleteHandler",
      anchor: "api-key-before-delete-handler"
    }, {
      name: "ApiKeyBeforeUpdateHandler",
      anchor: "api-key-before-update-handler"
    }]} mdxType="SymbolList" />
<p><strong parentName="p">{`Services`}</strong></p>
<SymbolList symbols={[{
      name: "ApiKeyFactory",
      anchor: "api-key-factory"
    }]} mdxType="SymbolList" />
<_Heading level={2} id={"use-cases"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Use Cases</_Heading>
<_Heading level={3} id={"create-api-key-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>CreateApiKeyUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/security/api-key`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { CreateApiKeyUseCase } from "webiny/api/security/api-key";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`CreateApiKeyUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface CreateApiKeyUseCase.Interface {
    execute(input: CreateApiKeyInput): Promise<Result<ApiKey, CreateApiKeyError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace CreateApiKeyUseCase {
  type Interface = ICreateApiKey;
  type Error = CreateApiKeyError;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { CreateApiKeyUseCase } from "webiny/api/security/api-key";

class MyImpl implements MyUseCase.Interface {
  public constructor(private createApiKeyUseCase: CreateApiKeyUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.createApiKeyUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [CreateApiKeyUseCase]
});`}
</Editor>
<_Heading level={3} id={"delete-api-key-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>DeleteApiKeyUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/security/api-key`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { DeleteApiKeyUseCase } from "webiny/api/security/api-key";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`DeleteApiKeyUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface DeleteApiKeyUseCase.Interface {
    execute(id: string): Promise<Result<void, DeleteApiKeyError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace DeleteApiKeyUseCase {
  type Interface = IDeleteApiKey;
  type Error = DeleteApiKeyError;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { DeleteApiKeyUseCase } from "webiny/api/security/api-key";

class MyImpl implements MyUseCase.Interface {
  public constructor(private deleteApiKeyUseCase: DeleteApiKeyUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.deleteApiKeyUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [DeleteApiKeyUseCase]
});`}
</Editor>
<_Heading level={3} id={"get-api-key-by-token-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>GetApiKeyByTokenUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/security/api-key`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { GetApiKeyByTokenUseCase } from "webiny/api/security/api-key";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`GetApiKeyByTokenUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface GetApiKeyByTokenUseCase.Interface {
    execute(token: string): Promise<Result<ApiKey | null, GetApiKeyByTokenError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace GetApiKeyByTokenUseCase {
  type Interface = IGetApiKeyByToken;
  type Error = GetApiKeyByTokenError;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { GetApiKeyByTokenUseCase } from "webiny/api/security/api-key";

class MyImpl implements MyUseCase.Interface {
  public constructor(private getApiKeyByTokenUseCase: GetApiKeyByTokenUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.getApiKeyByTokenUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [GetApiKeyByTokenUseCase]
});`}
</Editor>
<_Heading level={3} id={"get-api-key-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>GetApiKeyUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/security/api-key`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { GetApiKeyUseCase } from "webiny/api/security/api-key";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`GetApiKeyUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface GetApiKeyUseCase.Interface {
    execute(id: string): Promise<Result<ApiKey | null, GetApiKeyError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace GetApiKeyUseCase {
  type Interface = IGetApiKey;
  type Error = GetApiKeyError;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { GetApiKeyUseCase } from "webiny/api/security/api-key";

class MyImpl implements MyUseCase.Interface {
  public constructor(private getApiKeyUseCase: GetApiKeyUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.getApiKeyUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [GetApiKeyUseCase]
});`}
</Editor>
<_Heading level={3} id={"list-api-keys-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>ListApiKeysUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/security/api-key`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { ListApiKeysUseCase } from "webiny/api/security/api-key";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`ListApiKeysUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface ListApiKeysUseCase.Interface {
    execute(params?: ListApiKeysInput): Promise<Result<ApiKey[], ListApiKeysError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace ListApiKeysUseCase {
  type Interface = IListApiKeys;
  type Error = ListApiKeysError;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { ListApiKeysUseCase } from "webiny/api/security/api-key";

class MyImpl implements MyUseCase.Interface {
  public constructor(private listApiKeysUseCase: ListApiKeysUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.listApiKeysUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [ListApiKeysUseCase]
});`}
</Editor>
<_Heading level={3} id={"update-api-key-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>UpdateApiKeyUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/security/api-key`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { UpdateApiKeyUseCase } from "webiny/api/security/api-key";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`UpdateApiKeyUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface UpdateApiKeyUseCase.Interface {
    execute(id: string, input: UpdateApiKeyInput): Promise<Result<ApiKey, UpdateApiKeyError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace UpdateApiKeyUseCase {
  type Interface = IUpdateApiKey;
  type Error = UpdateApiKeyError;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { UpdateApiKeyUseCase } from "webiny/api/security/api-key";

class MyImpl implements MyUseCase.Interface {
  public constructor(private updateApiKeyUseCase: UpdateApiKeyUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.updateApiKeyUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [UpdateApiKeyUseCase]
});`}
</Editor>
<_Heading level={2} id={"event-handlers"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Event Handlers</_Heading>
<_Heading level={3} id={"api-key-after-create-handler"} nextElement={{
      "type": "paragraph"
    }}><code>ApiKeyAfterCreateHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/security/api-key`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { ApiKeyAfterCreateHandler } from "webiny/api/security/api-key";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`ApiKeyAfterCreateHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface ApiKeyAfterCreateHandler.Interface {
    handle(event: ApiKeyAfterCreateEvent): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace ApiKeyAfterCreateHandler {
  type Interface = IEventHandler<ApiKeyAfterCreateEvent>;
  type Event = ApiKeyAfterCreateEvent;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { ApiKeyAfterCreateHandler } from "webiny/api/security/api-key";

class MyHandler implements ApiKeyAfterCreateHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: ApiKeyAfterCreateHandler.Event): Promise<void> {
    // implementation
  }
}

export default ApiKeyAfterCreateHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"api-key-after-delete-handler"} nextElement={{
      "type": "paragraph"
    }}><code>ApiKeyAfterDeleteHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/security/api-key`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { ApiKeyAfterDeleteHandler } from "webiny/api/security/api-key";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`ApiKeyAfterDeleteHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface ApiKeyAfterDeleteHandler.Interface {
    handle(event: ApiKeyAfterDeleteEvent): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace ApiKeyAfterDeleteHandler {
  type Interface = IEventHandler<ApiKeyAfterDeleteEvent>;
  type Event = ApiKeyAfterDeleteEvent;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { ApiKeyAfterDeleteHandler } from "webiny/api/security/api-key";

class MyHandler implements ApiKeyAfterDeleteHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: ApiKeyAfterDeleteHandler.Event): Promise<void> {
    // implementation
  }
}

export default ApiKeyAfterDeleteHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"api-key-after-update-handler"} nextElement={{
      "type": "paragraph"
    }}><code>ApiKeyAfterUpdateHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/security/api-key`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { ApiKeyAfterUpdateHandler } from "webiny/api/security/api-key";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`ApiKeyAfterUpdateHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface ApiKeyAfterUpdateHandler.Interface {
    handle(event: ApiKeyAfterUpdateEvent): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace ApiKeyAfterUpdateHandler {
  type Interface = IEventHandler<ApiKeyAfterUpdateEvent>;
  type Event = ApiKeyAfterUpdateEvent;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { ApiKeyAfterUpdateHandler } from "webiny/api/security/api-key";

class MyHandler implements ApiKeyAfterUpdateHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: ApiKeyAfterUpdateHandler.Event): Promise<void> {
    // implementation
  }
}

export default ApiKeyAfterUpdateHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"api-key-before-create-handler"} nextElement={{
      "type": "paragraph"
    }}><code>ApiKeyBeforeCreateHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/security/api-key`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { ApiKeyBeforeCreateHandler } from "webiny/api/security/api-key";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`ApiKeyBeforeCreateHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface ApiKeyBeforeCreateHandler.Interface {
    handle(event: ApiKeyBeforeCreateEvent): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace ApiKeyBeforeCreateHandler {
  type Interface = IEventHandler<ApiKeyBeforeCreateEvent>;
  type Event = ApiKeyBeforeCreateEvent;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { ApiKeyBeforeCreateHandler } from "webiny/api/security/api-key";

class MyHandler implements ApiKeyBeforeCreateHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: ApiKeyBeforeCreateHandler.Event): Promise<void> {
    // implementation
  }
}

export default ApiKeyBeforeCreateHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"api-key-before-delete-handler"} nextElement={{
      "type": "paragraph"
    }}><code>ApiKeyBeforeDeleteHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/security/api-key`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { ApiKeyBeforeDeleteHandler } from "webiny/api/security/api-key";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`ApiKeyBeforeDeleteHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface ApiKeyBeforeDeleteHandler.Interface {
    handle(event: ApiKeyBeforeDeleteEvent): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace ApiKeyBeforeDeleteHandler {
  type Interface = IEventHandler<ApiKeyBeforeDeleteEvent>;
  type Event = ApiKeyBeforeDeleteEvent;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { ApiKeyBeforeDeleteHandler } from "webiny/api/security/api-key";

class MyHandler implements ApiKeyBeforeDeleteHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: ApiKeyBeforeDeleteHandler.Event): Promise<void> {
    // implementation
  }
}

export default ApiKeyBeforeDeleteHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"api-key-before-update-handler"} nextElement={{
      "type": "paragraph"
    }}><code>ApiKeyBeforeUpdateHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/security/api-key`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { ApiKeyBeforeUpdateHandler } from "webiny/api/security/api-key";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`ApiKeyBeforeUpdateHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface ApiKeyBeforeUpdateHandler.Interface {
    handle(event: ApiKeyBeforeUpdateEvent): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace ApiKeyBeforeUpdateHandler {
  type Interface = IEventHandler<ApiKeyBeforeUpdateEvent>;
  type Event = ApiKeyBeforeUpdateEvent;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { ApiKeyBeforeUpdateHandler } from "webiny/api/security/api-key";

class MyHandler implements ApiKeyBeforeUpdateHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: ApiKeyBeforeUpdateHandler.Event): Promise<void> {
    // implementation
  }
}

export default ApiKeyBeforeUpdateHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={2} id={"services"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Services</_Heading>
<_Heading level={3} id={"api-key-factory"} nextElement={{
      "type": "paragraph"
    }}><code>ApiKeyFactory</code></_Heading>
<p><strong parentName="p">{`Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/security/api-key`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { ApiKeyFactory } from "webiny/api/security/api-key";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`ApiKeyFactory.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface ApiKeyFactory.Interface {
    execute(): Promise<CodeApiKey[]> | CodeApiKey[];
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace ApiKeyFactory {
  type Interface = IApiKeyFactory;
  type Return = Promise<CodeApiKey[]> | CodeApiKey[];
  type ApiKey = CodeApiKey;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { ApiKeyFactory } from "webiny/api/security/api-key";

class MyImpl implements MyUseCase.Interface {
  public constructor(private apiKeyFactory: ApiKeyFactory.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.apiKeyFactory.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [ApiKeyFactory]
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