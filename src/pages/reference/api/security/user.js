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
  "title": "User",
  "description": "User use cases and event handlers",
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
    "title": "CreateUserUseCase",
    "slug": "create-user-use-case",
    "children": []
  }, {
    "title": "DeleteUserUseCase",
    "slug": "delete-user-use-case",
    "children": []
  }, {
    "title": "GetUserUseCase",
    "slug": "get-user-use-case",
    "children": []
  }, {
    "title": "ListUsersUseCase",
    "slug": "list-users-use-case",
    "children": []
  }, {
    "title": "ListUserTeamsUseCase",
    "slug": "list-user-teams-use-case",
    "children": []
  }, {
    "title": "UpdateUserUseCase",
    "slug": "update-user-use-case",
    "children": []
  }]
}, {
  "title": "Event Handlers",
  "slug": "event-handlers",
  "children": [{
    "title": "UserAfterCreateHandler",
    "slug": "user-after-create-handler",
    "children": []
  }, {
    "title": "UserAfterDeleteHandler",
    "slug": "user-after-delete-handler",
    "children": []
  }, {
    "title": "UserAfterUpdateHandler",
    "slug": "user-after-update-handler",
    "children": []
  }, {
    "title": "UserBeforeCreateHandler",
    "slug": "user-before-create-handler",
    "children": []
  }, {
    "title": "UserBeforeDeleteHandler",
    "slug": "user-before-delete-handler",
    "children": []
  }, {
    "title": "UserBeforeUpdateHandler",
    "slug": "user-before-update-handler",
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
<li parentName="ul">{`What use cases are available in `}<inlineCode parentName="li">{`webiny/api/security/user`}</inlineCode>{`?`}</li>
<li parentName="ul">{`How to import and use each exported item?`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`This page documents everything exported from `}<inlineCode parentName="p">{`webiny/api/security/user`}</inlineCode>{`. Import any of the items below directly from this path in your Webiny extensions.`}</p>
<p><strong parentName="p">{`Use Cases`}</strong></p>
<SymbolList symbols={[{
      name: "CreateUserUseCase",
      anchor: "create-user-use-case"
    }, {
      name: "DeleteUserUseCase",
      anchor: "delete-user-use-case"
    }, {
      name: "GetUserUseCase",
      anchor: "get-user-use-case"
    }, {
      name: "ListUsersUseCase",
      anchor: "list-users-use-case"
    }, {
      name: "ListUserTeamsUseCase",
      anchor: "list-user-teams-use-case"
    }, {
      name: "UpdateUserUseCase",
      anchor: "update-user-use-case"
    }]} mdxType="SymbolList" />
<p><strong parentName="p">{`Event Handlers`}</strong></p>
<SymbolList symbols={[{
      name: "UserAfterCreateHandler",
      anchor: "user-after-create-handler"
    }, {
      name: "UserAfterDeleteHandler",
      anchor: "user-after-delete-handler"
    }, {
      name: "UserAfterUpdateHandler",
      anchor: "user-after-update-handler"
    }, {
      name: "UserBeforeCreateHandler",
      anchor: "user-before-create-handler"
    }, {
      name: "UserBeforeDeleteHandler",
      anchor: "user-before-delete-handler"
    }, {
      name: "UserBeforeUpdateHandler",
      anchor: "user-before-update-handler"
    }]} mdxType="SymbolList" />
<_Heading level={2} id={"use-cases"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Use Cases</_Heading>
<_Heading level={3} id={"create-user-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>CreateUserUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/security/user`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { CreateUserUseCase } from "webiny/api/security/user";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`CreateUserUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface CreateUserUseCase.Interface {
    execute(input: CreateUserInput): Promise<Result<AdminUser, CreateUserError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace CreateUserUseCase {
  type Interface = ICreateUser;
  type Input = CreateUserInput;
  type Error = CreateUserError;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { CreateUserUseCase } from "webiny/api/security/user";

class MyImpl implements MyUseCase.Interface {
  public constructor(private createUserUseCase: CreateUserUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.createUserUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [CreateUserUseCase]
});`}
</Editor>
<_Heading level={3} id={"delete-user-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>DeleteUserUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/security/user`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { DeleteUserUseCase } from "webiny/api/security/user";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`DeleteUserUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface DeleteUserUseCase.Interface {
    execute(id: string): Promise<Result<void, DeleteUserError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace DeleteUserUseCase {
  type Interface = IDeleteUser;
  type Error = DeleteUserError;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { DeleteUserUseCase } from "webiny/api/security/user";

class MyImpl implements MyUseCase.Interface {
  public constructor(private deleteUserUseCase: DeleteUserUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.deleteUserUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [DeleteUserUseCase]
});`}
</Editor>
<_Heading level={3} id={"get-user-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>GetUserUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/security/user`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { GetUserUseCase } from "webiny/api/security/user";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`GetUserUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface GetUserUseCase.Interface {
    execute(input: GetUserInput): Promise<Result<AdminUser, GetUserError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace GetUserUseCase {
  type Interface = IGetUser;
  type Error = GetUserError;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { GetUserUseCase } from "webiny/api/security/user";

class MyImpl implements MyUseCase.Interface {
  public constructor(private getUserUseCase: GetUserUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.getUserUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [GetUserUseCase]
});`}
</Editor>
<_Heading level={3} id={"list-users-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>ListUsersUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/security/user`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { ListUsersUseCase } from "webiny/api/security/user";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`ListUsersUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface ListUsersUseCase.Interface {
    execute(input?: ListUsersInput): Promise<Result<AdminUser[], ListUsersError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace ListUsersUseCase {
  type Interface = IListUsers;
  type Error = ListUsersError;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { ListUsersUseCase } from "webiny/api/security/user";

class MyImpl implements MyUseCase.Interface {
  public constructor(private listUsersUseCase: ListUsersUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.listUsersUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [ListUsersUseCase]
});`}
</Editor>
<_Heading level={3} id={"list-user-teams-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>ListUserTeamsUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/security/user`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { ListUserTeamsUseCase } from "webiny/api/security/user";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`ListUserTeamsUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface ListUserTeamsUseCase.Interface {
    execute(userId: string): Promise<Result<Team[], ListUserTeamsError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace ListUserTeamsUseCase {
  type Interface = IListUserTeams;
  type Error = ListUserTeamsError;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { ListUserTeamsUseCase } from "webiny/api/security/user";

class MyImpl implements MyUseCase.Interface {
  public constructor(private listUserTeamsUseCase: ListUserTeamsUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.listUserTeamsUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [ListUserTeamsUseCase]
});`}
</Editor>
<_Heading level={3} id={"update-user-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>UpdateUserUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/security/user`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { UpdateUserUseCase } from "webiny/api/security/user";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`UpdateUserUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface UpdateUserUseCase.Interface {
    execute(id: string, input: UpdateUserInput): Promise<Result<AdminUser, UpdateUserError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace UpdateUserUseCase {
  type Interface = IUpdateUser;
  type Error = UpdateUserError;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { UpdateUserUseCase } from "webiny/api/security/user";

class MyImpl implements MyUseCase.Interface {
  public constructor(private updateUserUseCase: UpdateUserUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.updateUserUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [UpdateUserUseCase]
});`}
</Editor>
<_Heading level={2} id={"event-handlers"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Event Handlers</_Heading>
<_Heading level={3} id={"user-after-create-handler"} nextElement={{
      "type": "paragraph"
    }}><code>UserAfterCreateHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/security/user`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { UserAfterCreateHandler } from "webiny/api/security/user";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`UserAfterCreateHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface UserAfterCreateHandler.Interface {
    handle(event: UserAfterCreateEvent): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace UserAfterCreateHandler {
  type Interface = IEventHandler<UserAfterCreateEvent>;
  type Event = UserAfterCreateEvent;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { UserAfterCreateHandler } from "webiny/api/security/user";

class MyHandler implements UserAfterCreateHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: UserAfterCreateHandler.Event): Promise<void> {
    // implementation
  }
}

export default UserAfterCreateHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"user-after-delete-handler"} nextElement={{
      "type": "paragraph"
    }}><code>UserAfterDeleteHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/security/user`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { UserAfterDeleteHandler } from "webiny/api/security/user";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`UserAfterDeleteHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface UserAfterDeleteHandler.Interface {
    handle(event: UserAfterDeleteEvent): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace UserAfterDeleteHandler {
  type Interface = IEventHandler<UserAfterDeleteEvent>;
  type Event = UserAfterDeleteEvent;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { UserAfterDeleteHandler } from "webiny/api/security/user";

class MyHandler implements UserAfterDeleteHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: UserAfterDeleteHandler.Event): Promise<void> {
    // implementation
  }
}

export default UserAfterDeleteHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"user-after-update-handler"} nextElement={{
      "type": "paragraph"
    }}><code>UserAfterUpdateHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/security/user`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { UserAfterUpdateHandler } from "webiny/api/security/user";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`UserAfterUpdateHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface UserAfterUpdateHandler.Interface {
    handle(event: UserAfterUpdateEvent): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace UserAfterUpdateHandler {
  type Interface = IEventHandler<UserAfterUpdateEvent>;
  type Event = UserAfterUpdateEvent;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { UserAfterUpdateHandler } from "webiny/api/security/user";

class MyHandler implements UserAfterUpdateHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: UserAfterUpdateHandler.Event): Promise<void> {
    // implementation
  }
}

export default UserAfterUpdateHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"user-before-create-handler"} nextElement={{
      "type": "paragraph"
    }}><code>UserBeforeCreateHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/security/user`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { UserBeforeCreateHandler } from "webiny/api/security/user";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`UserBeforeCreateHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface UserBeforeCreateHandler.Interface {
    handle(event: UserBeforeCreateEvent): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace UserBeforeCreateHandler {
  type Interface = IEventHandler<UserBeforeCreateEvent>;
  type Event = UserBeforeCreateEvent;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { UserBeforeCreateHandler } from "webiny/api/security/user";

class MyHandler implements UserBeforeCreateHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: UserBeforeCreateHandler.Event): Promise<void> {
    // implementation
  }
}

export default UserBeforeCreateHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"user-before-delete-handler"} nextElement={{
      "type": "paragraph"
    }}><code>UserBeforeDeleteHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/security/user`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { UserBeforeDeleteHandler } from "webiny/api/security/user";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`UserBeforeDeleteHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface UserBeforeDeleteHandler.Interface {
    handle(event: UserBeforeDeleteEvent): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace UserBeforeDeleteHandler {
  type Interface = IEventHandler<UserBeforeDeleteEvent>;
  type Event = UserBeforeDeleteEvent;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { UserBeforeDeleteHandler } from "webiny/api/security/user";

class MyHandler implements UserBeforeDeleteHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: UserBeforeDeleteHandler.Event): Promise<void> {
    // implementation
  }
}

export default UserBeforeDeleteHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"user-before-update-handler"} nextElement={{
      "type": "paragraph"
    }}><code>UserBeforeUpdateHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/security/user`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { UserBeforeUpdateHandler } from "webiny/api/security/user";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`UserBeforeUpdateHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface UserBeforeUpdateHandler.Interface {
    handle(event: UserBeforeUpdateEvent): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace UserBeforeUpdateHandler {
  type Interface = IEventHandler<UserBeforeUpdateEvent>;
  type Event = UserBeforeUpdateEvent;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { UserBeforeUpdateHandler } from "webiny/api/security/user";

class MyHandler implements UserBeforeUpdateHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: UserBeforeUpdateHandler.Event): Promise<void> {
    // implementation
  }
}

export default UserBeforeUpdateHandler.createImplementation({
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