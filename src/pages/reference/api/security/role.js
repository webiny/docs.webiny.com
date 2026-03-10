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
  "title": "Role",
  "description": "Role use cases and event handlers",
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
    "title": "CreateRoleUseCase",
    "slug": "create-role-use-case",
    "children": []
  }, {
    "title": "DeleteRoleUseCase",
    "slug": "delete-role-use-case",
    "children": []
  }, {
    "title": "GetRoleUseCase",
    "slug": "get-role-use-case",
    "children": []
  }, {
    "title": "ListRolesUseCase",
    "slug": "list-roles-use-case",
    "children": []
  }, {
    "title": "UpdateRoleUseCase",
    "slug": "update-role-use-case",
    "children": []
  }]
}, {
  "title": "Event Handlers",
  "slug": "event-handlers",
  "children": [{
    "title": "RoleAfterCreateHandler",
    "slug": "role-after-create-handler",
    "children": []
  }, {
    "title": "RoleAfterDeleteHandler",
    "slug": "role-after-delete-handler",
    "children": []
  }, {
    "title": "RoleAfterUpdateHandler",
    "slug": "role-after-update-handler",
    "children": []
  }, {
    "title": "RoleBeforeCreateHandler",
    "slug": "role-before-create-handler",
    "children": []
  }, {
    "title": "RoleBeforeDeleteHandler",
    "slug": "role-before-delete-handler",
    "children": []
  }, {
    "title": "RoleBeforeUpdateHandler",
    "slug": "role-before-update-handler",
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
<li parentName="ul">{`What use cases are available in `}<inlineCode parentName="li">{`webiny/api/security/role`}</inlineCode>{`?`}</li>
<li parentName="ul">{`How to import and use each exported item?`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`This page documents everything exported from `}<inlineCode parentName="p">{`webiny/api/security/role`}</inlineCode>{`. Import any of the items below directly from this path in your Webiny extensions.`}</p>
<p><strong parentName="p">{`Use Cases`}</strong></p>
<SymbolList symbols={[{
      name: "CreateRoleUseCase",
      anchor: "create-role-use-case"
    }, {
      name: "DeleteRoleUseCase",
      anchor: "delete-role-use-case"
    }, {
      name: "GetRoleUseCase",
      anchor: "get-role-use-case"
    }, {
      name: "ListRolesUseCase",
      anchor: "list-roles-use-case"
    }, {
      name: "UpdateRoleUseCase",
      anchor: "update-role-use-case"
    }]} mdxType="SymbolList" />
<p><strong parentName="p">{`Event Handlers`}</strong></p>
<SymbolList symbols={[{
      name: "RoleAfterCreateHandler",
      anchor: "role-after-create-handler"
    }, {
      name: "RoleAfterDeleteHandler",
      anchor: "role-after-delete-handler"
    }, {
      name: "RoleAfterUpdateHandler",
      anchor: "role-after-update-handler"
    }, {
      name: "RoleBeforeCreateHandler",
      anchor: "role-before-create-handler"
    }, {
      name: "RoleBeforeDeleteHandler",
      anchor: "role-before-delete-handler"
    }, {
      name: "RoleBeforeUpdateHandler",
      anchor: "role-before-update-handler"
    }]} mdxType="SymbolList" />
<_Heading level={2} id={"use-cases"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Use Cases</_Heading>
<_Heading level={3} id={"create-role-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>CreateRoleUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/security/role`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { CreateRoleUseCase } from "webiny/api/security/role";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`CreateRoleUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface CreateRoleUseCase.Interface {
    execute(input: CreateRoleInput): Promise<Result<Role, CreateRoleError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace CreateRoleUseCase {
  type Interface = ICreateRole;
  type Error = CreateRoleError;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { CreateRoleUseCase } from "webiny/api/security/role";

class MyImpl implements MyUseCase.Interface {
  public constructor(private createRoleUseCase: CreateRoleUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.createRoleUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [CreateRoleUseCase]
});`}
</Editor>
<_Heading level={3} id={"delete-role-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>DeleteRoleUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/security/role`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { DeleteRoleUseCase } from "webiny/api/security/role";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`DeleteRoleUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface DeleteRoleUseCase.Interface {
    execute(id: string): Promise<Result<void, DeleteRoleError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace DeleteRoleUseCase {
  type Interface = IDeleteRole;
  type Error = DeleteRoleError;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { DeleteRoleUseCase } from "webiny/api/security/role";

class MyImpl implements MyUseCase.Interface {
  public constructor(private deleteRoleUseCase: DeleteRoleUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.deleteRoleUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [DeleteRoleUseCase]
});`}
</Editor>
<_Heading level={3} id={"get-role-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>GetRoleUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/security/role`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { GetRoleUseCase } from "webiny/api/security/role";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`GetRoleUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface GetRoleUseCase.Interface {
    execute(params: GetRoleInput): Promise<Result<Role, GetRoleError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace GetRoleUseCase {
  type Interface = IGetRole;
  type Error = GetRoleError;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { GetRoleUseCase } from "webiny/api/security/role";

class MyImpl implements MyUseCase.Interface {
  public constructor(private getRoleUseCase: GetRoleUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.getRoleUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [GetRoleUseCase]
});`}
</Editor>
<_Heading level={3} id={"list-roles-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>ListRolesUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/security/role`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { ListRolesUseCase } from "webiny/api/security/role";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`ListRolesUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface ListRolesUseCase.Interface {
    execute(params?: ListRolesInput): Promise<Result<Role[], ListRolesError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace ListRolesUseCase {
  type Interface = IListRoles;
  type Error = ListRolesError;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { ListRolesUseCase } from "webiny/api/security/role";

class MyImpl implements MyUseCase.Interface {
  public constructor(private listRolesUseCase: ListRolesUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.listRolesUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [ListRolesUseCase]
});`}
</Editor>
<_Heading level={3} id={"update-role-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>UpdateRoleUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/security/role`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { UpdateRoleUseCase } from "webiny/api/security/role";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`UpdateRoleUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface UpdateRoleUseCase.Interface {
    execute(
        id: string,
        input: UpdateRoleUseCaseInput
    ): Promise<Result<Role, UpdateRoleUseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace UpdateRoleUseCase {
  type Interface = IUpdateRoleUseCase;
  type Error = UpdateRoleUseCaseError;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { UpdateRoleUseCase } from "webiny/api/security/role";

class MyImpl implements MyUseCase.Interface {
  public constructor(private updateRoleUseCase: UpdateRoleUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.updateRoleUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [UpdateRoleUseCase]
});`}
</Editor>
<_Heading level={2} id={"event-handlers"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Event Handlers</_Heading>
<_Heading level={3} id={"role-after-create-handler"} nextElement={{
      "type": "paragraph"
    }}><code>RoleAfterCreateHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/security/role`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { RoleAfterCreateHandler } from "webiny/api/security/role";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`RoleAfterCreateHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface RoleAfterCreateHandler.Interface {
    handle(event: RoleAfterCreateEvent): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace RoleAfterCreateHandler {
  type Interface = IEventHandler<RoleAfterCreateEvent>;
  type Event = RoleAfterCreateEvent;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { RoleAfterCreateHandler } from "webiny/api/security/role";

class MyHandler implements RoleAfterCreateHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: RoleAfterCreateHandler.Event): Promise<void> {
    // implementation
  }
}

export default RoleAfterCreateHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"role-after-delete-handler"} nextElement={{
      "type": "paragraph"
    }}><code>RoleAfterDeleteHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/security/role`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { RoleAfterDeleteHandler } from "webiny/api/security/role";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`RoleAfterDeleteHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface RoleAfterDeleteHandler.Interface {
    handle(event: RoleAfterDeleteEvent): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace RoleAfterDeleteHandler {
  type Interface = IEventHandler<RoleAfterDeleteEvent>;
  type Event = RoleAfterDeleteEvent;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { RoleAfterDeleteHandler } from "webiny/api/security/role";

class MyHandler implements RoleAfterDeleteHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: RoleAfterDeleteHandler.Event): Promise<void> {
    // implementation
  }
}

export default RoleAfterDeleteHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"role-after-update-handler"} nextElement={{
      "type": "paragraph"
    }}><code>RoleAfterUpdateHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/security/role`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { RoleAfterUpdateHandler } from "webiny/api/security/role";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`RoleAfterUpdateHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface RoleAfterUpdateHandler.Interface {
    handle(event: RoleAfterUpdateEvent): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace RoleAfterUpdateHandler {
  type Interface = IEventHandler<RoleAfterUpdateEvent>;
  type Event = RoleAfterUpdateEvent;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { RoleAfterUpdateHandler } from "webiny/api/security/role";

class MyHandler implements RoleAfterUpdateHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: RoleAfterUpdateHandler.Event): Promise<void> {
    // implementation
  }
}

export default RoleAfterUpdateHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"role-before-create-handler"} nextElement={{
      "type": "paragraph"
    }}><code>RoleBeforeCreateHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/security/role`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { RoleBeforeCreateHandler } from "webiny/api/security/role";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`RoleBeforeCreateHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface RoleBeforeCreateHandler.Interface {
    handle(event: RoleBeforeCreateEvent): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace RoleBeforeCreateHandler {
  type Interface = IEventHandler<RoleBeforeCreateEvent>;
  type Event = RoleBeforeCreateEvent;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { RoleBeforeCreateHandler } from "webiny/api/security/role";

class MyHandler implements RoleBeforeCreateHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: RoleBeforeCreateHandler.Event): Promise<void> {
    // implementation
  }
}

export default RoleBeforeCreateHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"role-before-delete-handler"} nextElement={{
      "type": "paragraph"
    }}><code>RoleBeforeDeleteHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/security/role`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { RoleBeforeDeleteHandler } from "webiny/api/security/role";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`RoleBeforeDeleteHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface RoleBeforeDeleteHandler.Interface {
    handle(event: RoleBeforeDeleteEvent): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace RoleBeforeDeleteHandler {
  type Interface = IEventHandler<RoleBeforeDeleteEvent>;
  type Event = RoleBeforeDeleteEvent;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { RoleBeforeDeleteHandler } from "webiny/api/security/role";

class MyHandler implements RoleBeforeDeleteHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: RoleBeforeDeleteHandler.Event): Promise<void> {
    // implementation
  }
}

export default RoleBeforeDeleteHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"role-before-update-handler"} nextElement={{
      "type": "paragraph"
    }}><code>RoleBeforeUpdateHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/security/role`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { RoleBeforeUpdateHandler } from "webiny/api/security/role";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`RoleBeforeUpdateHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface RoleBeforeUpdateHandler.Interface {
    handle(event: RoleBeforeUpdateEvent): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace RoleBeforeUpdateHandler {
  type Interface = IEventHandler<RoleBeforeUpdateEvent>;
  type Event = RoleBeforeUpdateEvent;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { RoleBeforeUpdateHandler } from "webiny/api/security/role";

class MyHandler implements RoleBeforeUpdateHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: RoleBeforeUpdateHandler.Event): Promise<void> {
    // implementation
  }
}

export default RoleBeforeUpdateHandler.createImplementation({
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