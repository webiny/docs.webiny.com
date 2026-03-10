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
  "title": "Tenancy",
  "description": "Tenancy context and tenant management",
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
    "title": "CreateTenantRepository",
    "slug": "create-tenant-repository",
    "children": []
  }, {
    "title": "CreateTenantUseCase",
    "slug": "create-tenant-use-case",
    "children": []
  }, {
    "title": "DeleteTenantRepository",
    "slug": "delete-tenant-repository",
    "children": []
  }, {
    "title": "DeleteTenantUseCase",
    "slug": "delete-tenant-use-case",
    "children": []
  }, {
    "title": "GetTenantByIdUseCase",
    "slug": "get-tenant-by-id-use-case",
    "children": []
  }, {
    "title": "InstallTenantUseCase",
    "slug": "install-tenant-use-case",
    "children": []
  }, {
    "title": "UpdateTenantRepository",
    "slug": "update-tenant-repository",
    "children": []
  }, {
    "title": "UpdateTenantUseCase",
    "slug": "update-tenant-use-case",
    "children": []
  }]
}, {
  "title": "Event Handlers",
  "slug": "event-handlers",
  "children": [{
    "title": "TenantAfterCreateHandler",
    "slug": "tenant-after-create-handler",
    "children": []
  }, {
    "title": "TenantAfterDeleteHandler",
    "slug": "tenant-after-delete-handler",
    "children": []
  }, {
    "title": "TenantAfterUpdateHandler",
    "slug": "tenant-after-update-handler",
    "children": []
  }, {
    "title": "TenantBeforeCreateHandler",
    "slug": "tenant-before-create-handler",
    "children": []
  }, {
    "title": "TenantBeforeDeleteHandler",
    "slug": "tenant-before-delete-handler",
    "children": []
  }, {
    "title": "TenantBeforeUpdateHandler",
    "slug": "tenant-before-update-handler",
    "children": []
  }, {
    "title": "TenantInstalledHandler",
    "slug": "tenant-installed-handler",
    "children": []
  }]
}, {
  "title": "Services",
  "slug": "services",
  "children": [{
    "title": "AppInstaller",
    "slug": "app-installer",
    "children": []
  }, {
    "title": "TenantContext",
    "slug": "tenant-context",
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
<li parentName="ul">{`What use cases are available in `}<inlineCode parentName="li">{`webiny/api/tenancy`}</inlineCode>{`?`}</li>
<li parentName="ul">{`How to import and use each exported item?`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`This page documents everything exported from `}<inlineCode parentName="p">{`webiny/api/tenancy`}</inlineCode>{`. Import any of the items below directly from this path in your Webiny extensions.`}</p>
<p><strong parentName="p">{`Use Cases`}</strong></p>
<SymbolList symbols={[{
      name: "CreateTenantRepository",
      anchor: "create-tenant-repository"
    }, {
      name: "CreateTenantUseCase",
      anchor: "create-tenant-use-case"
    }, {
      name: "DeleteTenantRepository",
      anchor: "delete-tenant-repository"
    }, {
      name: "DeleteTenantUseCase",
      anchor: "delete-tenant-use-case"
    }, {
      name: "GetTenantByIdUseCase",
      anchor: "get-tenant-by-id-use-case"
    }, {
      name: "InstallTenantUseCase",
      anchor: "install-tenant-use-case"
    }, {
      name: "UpdateTenantRepository",
      anchor: "update-tenant-repository"
    }, {
      name: "UpdateTenantUseCase",
      anchor: "update-tenant-use-case"
    }]} mdxType="SymbolList" />
<p><strong parentName="p">{`Event Handlers`}</strong></p>
<SymbolList symbols={[{
      name: "TenantAfterCreateHandler",
      anchor: "tenant-after-create-handler"
    }, {
      name: "TenantAfterDeleteHandler",
      anchor: "tenant-after-delete-handler"
    }, {
      name: "TenantAfterUpdateHandler",
      anchor: "tenant-after-update-handler"
    }, {
      name: "TenantBeforeCreateHandler",
      anchor: "tenant-before-create-handler"
    }, {
      name: "TenantBeforeDeleteHandler",
      anchor: "tenant-before-delete-handler"
    }, {
      name: "TenantBeforeUpdateHandler",
      anchor: "tenant-before-update-handler"
    }, {
      name: "TenantInstalledHandler",
      anchor: "tenant-installed-handler"
    }]} mdxType="SymbolList" />
<p><strong parentName="p">{`Services`}</strong></p>
<SymbolList symbols={[{
      name: "AppInstaller",
      anchor: "app-installer"
    }, {
      name: "TenantContext",
      anchor: "tenant-context"
    }]} mdxType="SymbolList" />
<_Heading level={2} id={"use-cases"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Use Cases</_Heading>
<_Heading level={3} id={"create-tenant-repository"} nextElement={{
      "type": "paragraph"
    }}><code>CreateTenantRepository</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/tenancy`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { CreateTenantRepository } from "webiny/api/tenancy";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`CreateTenantRepository.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface CreateTenantRepository.Interface {
    create(tenant: Tenant): Promise<Tenant>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace CreateTenantRepository {
  type Interface = ICreateTenantRepository;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { CreateTenantRepository } from "webiny/api/tenancy";

class MyImpl implements MyUseCase.Interface {
  public constructor(private createTenantRepository: CreateTenantRepository.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.createTenantRepository.create(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [CreateTenantRepository]
});`}
</Editor>
<_Heading level={3} id={"create-tenant-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>CreateTenantUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/tenancy`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { CreateTenantUseCase } from "webiny/api/tenancy";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`CreateTenantUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface CreateTenantUseCase.Interface {
    execute(
        data: CreateTenantInput
    ): Promise<Result<Tenant, ICreateTenantErrors[keyof ICreateTenantErrors]>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace CreateTenantUseCase {
  type Interface = ICreateTenantUseCase;
  type Errors = ICreateTenantErrors[keyof ICreateTenantErrors];
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { CreateTenantUseCase } from "webiny/api/tenancy";

class MyImpl implements MyUseCase.Interface {
  public constructor(private createTenantUseCase: CreateTenantUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.createTenantUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [CreateTenantUseCase]
});`}
</Editor>
<_Heading level={3} id={"delete-tenant-repository"} nextElement={{
      "type": "paragraph"
    }}><code>DeleteTenantRepository</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/tenancy`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { DeleteTenantRepository } from "webiny/api/tenancy";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`DeleteTenantRepository.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface DeleteTenantRepository.Interface {
    delete(id: string): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace DeleteTenantRepository {
  type Interface = IDeleteTenantRepository;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { DeleteTenantRepository } from "webiny/api/tenancy";

class MyImpl implements MyUseCase.Interface {
  public constructor(private deleteTenantRepository: DeleteTenantRepository.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.deleteTenantRepository.delete(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [DeleteTenantRepository]
});`}
</Editor>
<_Heading level={3} id={"delete-tenant-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>DeleteTenantUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/tenancy`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { DeleteTenantUseCase } from "webiny/api/tenancy";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`DeleteTenantUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface DeleteTenantUseCase.Interface {
    execute(id: string): Promise<boolean>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace DeleteTenantUseCase {
  type Interface = IDeleteTenantUseCase;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { DeleteTenantUseCase } from "webiny/api/tenancy";

class MyImpl implements MyUseCase.Interface {
  public constructor(private deleteTenantUseCase: DeleteTenantUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.deleteTenantUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [DeleteTenantUseCase]
});`}
</Editor>
<_Heading level={3} id={"get-tenant-by-id-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>GetTenantByIdUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/tenancy`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { GetTenantByIdUseCase } from "webiny/api/tenancy";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`GetTenantByIdUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface GetTenantByIdUseCase.Interface {
    execute(id: string): Promise<Result<Tenant, GetTenantByIdError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace GetTenantByIdUseCase {
  type Interface = IGetTenantByIdUseCase;
  type Error = GetTenantByIdError;
  type Result = ReturnType<IGetTenantByIdUseCase["execute"]>;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { GetTenantByIdUseCase } from "webiny/api/tenancy";

class MyImpl implements MyUseCase.Interface {
  public constructor(private getTenantByIdUseCase: GetTenantByIdUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.getTenantByIdUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [GetTenantByIdUseCase]
});`}
</Editor>
<_Heading level={3} id={"install-tenant-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>InstallTenantUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/tenancy`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { InstallTenantUseCase } from "webiny/api/tenancy";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`InstallTenantUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface InstallTenantUseCase.Interface {
    execute(
        input: TenantInstallationInput
    ): Promise<Result<void, IInstallTenantErrors[keyof IInstallTenantErrors]>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace InstallTenantUseCase {
  type Interface = IInstallTenantUseCase;
  type Input = TenantInstallationInput;
  type Errors = IInstallTenantErrors[keyof IInstallTenantErrors];
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { InstallTenantUseCase } from "webiny/api/tenancy";

class MyImpl implements MyUseCase.Interface {
  public constructor(private installTenantUseCase: InstallTenantUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.installTenantUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [InstallTenantUseCase]
});`}
</Editor>
<_Heading level={3} id={"update-tenant-repository"} nextElement={{
      "type": "paragraph"
    }}><code>UpdateTenantRepository</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/tenancy`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { UpdateTenantRepository } from "webiny/api/tenancy";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`UpdateTenantRepository.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface UpdateTenantRepository.Interface {
    update(tenant: Tenant): Promise<Tenant>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace UpdateTenantRepository {
  type Interface = IUpdateTenantRepository;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { UpdateTenantRepository } from "webiny/api/tenancy";

class MyImpl implements MyUseCase.Interface {
  public constructor(private updateTenantRepository: UpdateTenantRepository.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.updateTenantRepository.update(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [UpdateTenantRepository]
});`}
</Editor>
<_Heading level={3} id={"update-tenant-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>UpdateTenantUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/tenancy`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { UpdateTenantUseCase } from "webiny/api/tenancy";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`UpdateTenantUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface UpdateTenantUseCase.Interface {
    execute(id: string, data: Partial<Tenant>): Promise<Result<Tenant, UpdateTenantError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace UpdateTenantUseCase {
  type Interface = IUpdateTenantUseCase;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { UpdateTenantUseCase } from "webiny/api/tenancy";

class MyImpl implements MyUseCase.Interface {
  public constructor(private updateTenantUseCase: UpdateTenantUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.updateTenantUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [UpdateTenantUseCase]
});`}
</Editor>
<_Heading level={2} id={"event-handlers"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Event Handlers</_Heading>
<_Heading level={3} id={"tenant-after-create-handler"} nextElement={{
      "type": "paragraph"
    }}><code>TenantAfterCreateHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/tenancy`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { TenantAfterCreateHandler } from "webiny/api/tenancy";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`TenantAfterCreateHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface TenantAfterCreateHandler.Interface {
    handle(event: DomainEvent<TenantAfterCreatePayload>): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace TenantAfterCreateHandler {
  type Interface = IEventHandler<DomainEvent<TenantAfterCreatePayload>>;
  type Event = DomainEvent<TenantAfterCreatePayload>;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { TenantAfterCreateHandler } from "webiny/api/tenancy";

class MyHandler implements TenantAfterCreateHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: TenantAfterCreateHandler.Event): Promise<void> {
    // implementation
  }
}

export default TenantAfterCreateHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"tenant-after-delete-handler"} nextElement={{
      "type": "paragraph"
    }}><code>TenantAfterDeleteHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/tenancy`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { TenantAfterDeleteHandler } from "webiny/api/tenancy";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`TenantAfterDeleteHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface TenantAfterDeleteHandler.Interface {
    handle(event: DomainEvent<TenantAfterDeletePayload>): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace TenantAfterDeleteHandler {
  type Interface = IEventHandler<DomainEvent<TenantAfterDeletePayload>>;
  type Event = DomainEvent<TenantAfterDeletePayload>;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { TenantAfterDeleteHandler } from "webiny/api/tenancy";

class MyHandler implements TenantAfterDeleteHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: TenantAfterDeleteHandler.Event): Promise<void> {
    // implementation
  }
}

export default TenantAfterDeleteHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"tenant-after-update-handler"} nextElement={{
      "type": "paragraph"
    }}><code>TenantAfterUpdateHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/tenancy`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { TenantAfterUpdateHandler } from "webiny/api/tenancy";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`TenantAfterUpdateHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface TenantAfterUpdateHandler.Interface {
    handle(event: DomainEvent<TenantAfterUpdatePayload>): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace TenantAfterUpdateHandler {
  type Interface = IEventHandler<DomainEvent<TenantAfterUpdatePayload>>;
  type Event = DomainEvent<TenantAfterUpdatePayload>;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { TenantAfterUpdateHandler } from "webiny/api/tenancy";

class MyHandler implements TenantAfterUpdateHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: TenantAfterUpdateHandler.Event): Promise<void> {
    // implementation
  }
}

export default TenantAfterUpdateHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"tenant-before-create-handler"} nextElement={{
      "type": "paragraph"
    }}><code>TenantBeforeCreateHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/tenancy`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { TenantBeforeCreateHandler } from "webiny/api/tenancy";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`TenantBeforeCreateHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface TenantBeforeCreateHandler.Interface {
    handle(event: DomainEvent<TenantBeforeCreatePayload>): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace TenantBeforeCreateHandler {
  type Interface = IEventHandler<DomainEvent<TenantBeforeCreatePayload>>;
  type Event = DomainEvent<TenantBeforeCreatePayload>;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { TenantBeforeCreateHandler } from "webiny/api/tenancy";

class MyHandler implements TenantBeforeCreateHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: TenantBeforeCreateHandler.Event): Promise<void> {
    // implementation
  }
}

export default TenantBeforeCreateHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"tenant-before-delete-handler"} nextElement={{
      "type": "paragraph"
    }}><code>TenantBeforeDeleteHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/tenancy`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { TenantBeforeDeleteHandler } from "webiny/api/tenancy";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`TenantBeforeDeleteHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface TenantBeforeDeleteHandler.Interface {
    handle(event: DomainEvent<TenantBeforeDeletePayload>): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace TenantBeforeDeleteHandler {
  type Interface = IEventHandler<DomainEvent<TenantBeforeDeletePayload>>;
  type Event = DomainEvent<TenantBeforeDeletePayload>;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { TenantBeforeDeleteHandler } from "webiny/api/tenancy";

class MyHandler implements TenantBeforeDeleteHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: TenantBeforeDeleteHandler.Event): Promise<void> {
    // implementation
  }
}

export default TenantBeforeDeleteHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"tenant-before-update-handler"} nextElement={{
      "type": "paragraph"
    }}><code>TenantBeforeUpdateHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/tenancy`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { TenantBeforeUpdateHandler } from "webiny/api/tenancy";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`TenantBeforeUpdateHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface TenantBeforeUpdateHandler.Interface {
    handle(event: DomainEvent<TenantBeforeUpdatePayload>): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace TenantBeforeUpdateHandler {
  type Interface = IEventHandler<DomainEvent<TenantBeforeUpdatePayload>>;
  type Event = DomainEvent<TenantBeforeUpdatePayload>;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { TenantBeforeUpdateHandler } from "webiny/api/tenancy";

class MyHandler implements TenantBeforeUpdateHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: TenantBeforeUpdateHandler.Event): Promise<void> {
    // implementation
  }
}

export default TenantBeforeUpdateHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"tenant-installed-handler"} nextElement={{
      "type": "paragraph"
    }}><code>TenantInstalledHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/tenancy`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { TenantInstalledHandler } from "webiny/api/tenancy";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`TenantInstalledHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface TenantInstalledHandler.Interface {
    handle(event: DomainEvent<TenantInstalledPayload>): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace TenantInstalledHandler {
  type Interface = IEventHandler<DomainEvent<TenantInstalledPayload>>;
  type Event = DomainEvent<TenantInstalledPayload>;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { TenantInstalledHandler } from "webiny/api/tenancy";

class MyHandler implements TenantInstalledHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: TenantInstalledHandler.Event): Promise<void> {
    // implementation
  }
}

export default TenantInstalledHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={2} id={"services"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Services</_Heading>
<_Heading level={3} id={"app-installer"} nextElement={{
      "type": "paragraph"
    }}><code>AppInstaller</code></_Heading>
<p><strong parentName="p">{`Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/tenancy`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { AppInstaller } from "webiny/api/tenancy";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`AppInstaller.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface AppInstaller.Interface {
    readonly alwaysRun?: boolean;
    readonly appName: string;
    readonly dependsOn: string[];
    // Perform the installation
    // If this succeeds, uninstall() MUST be able to revert it
    install(tenant: Tenant, data: TData): Promise<void>;
    // Revert the installation
    // Called if any subsequent installer fails
    uninstall(tenant: Tenant): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace AppInstaller {
  type Interface = IAppInstaller<T>;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { AppInstaller } from "webiny/api/tenancy";

class MyImpl implements MyUseCase.Interface {
    public constructor(private appInstaller: AppInstaller.Interface) {}

    public async execute(/* ... */): Promise<void> {
        this.appInstaller.readonly alwaysRun?: boolean(/* ... */);
    }
}

export default MyUseCase.createImplementation({
    implementation: MyImpl,
    dependencies: [AppInstaller]
});`}
</Editor>
<_Heading level={3} id={"tenant-context"} nextElement={{
      "type": "paragraph"
    }}><code>TenantContext</code></_Heading>
<p><strong parentName="p">{`Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/tenancy`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { TenantContext } from "webiny/api/tenancy";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`TenantContext.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface TenantContext.Interface {
    setTenant(tenant: Tenant): void;
    getTenant(): Tenant;
    withRootTenant<T>(cb: () => T): Promise<T>;
    withEachTenant<TReturn>(
        tenants: Tenant[],
        cb: (tenant: Tenant) => Promise<TReturn>
    ): Promise<TReturn[]>;
    withTenant<TReturn>(tenant: Tenant, cb: (tenant: Tenant) => Promise<TReturn>): Promise<TReturn>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace TenantContext {
  type Interface = ITenantContext;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { TenantContext } from "webiny/api/tenancy";

class MyImpl implements MyUseCase.Interface {
  public constructor(private tenantContext: TenantContext.Interface) {}

  public async execute(/* ... */): Promise<void> {
    this.tenantContext.setTenant(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [TenantContext]
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