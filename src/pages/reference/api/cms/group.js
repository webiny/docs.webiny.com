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
  "title": "Group",
  "description": "CMS group use cases and event handlers",
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
    "title": "CreateGroupUseCase",
    "slug": "create-group-use-case",
    "children": []
  }, {
    "title": "DeleteGroupUseCase",
    "slug": "delete-group-use-case",
    "children": []
  }, {
    "title": "GetGroupUseCase",
    "slug": "get-group-use-case",
    "children": []
  }, {
    "title": "ListGroupsUseCase",
    "slug": "list-groups-use-case",
    "children": []
  }, {
    "title": "UpdateGroupUseCase",
    "slug": "update-group-use-case",
    "children": []
  }]
}, {
  "title": "Event Handlers",
  "slug": "event-handlers",
  "children": [{
    "title": "GroupAfterCreateEventHandler",
    "slug": "group-after-create-event-handler",
    "children": []
  }, {
    "title": "GroupAfterDeleteEventHandler",
    "slug": "group-after-delete-event-handler",
    "children": []
  }, {
    "title": "GroupAfterUpdateEventHandler",
    "slug": "group-after-update-event-handler",
    "children": []
  }, {
    "title": "GroupBeforeCreateEventHandler",
    "slug": "group-before-create-event-handler",
    "children": []
  }, {
    "title": "GroupBeforeDeleteEventHandler",
    "slug": "group-before-delete-event-handler",
    "children": []
  }, {
    "title": "GroupBeforeUpdateEventHandler",
    "slug": "group-before-update-event-handler",
    "children": []
  }]
}, {
  "title": "Services",
  "slug": "services",
  "children": [{
    "title": "ModelGroupFactory",
    "slug": "model-group-factory",
    "children": []
  }]
}, {
  "title": "Types & Classes",
  "slug": "types-and-classes",
  "children": [{
    "title": "CmsGroup",
    "slug": "cms-group",
    "children": []
  }, {
    "title": "CmsModelGroup",
    "slug": "cms-model-group",
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
<li parentName="ul">{`What use cases are available in `}<inlineCode parentName="li">{`webiny/api/cms/group`}</inlineCode>{`?`}</li>
<li parentName="ul">{`Which event handlers can you implement?`}</li>
<li parentName="ul">{`How to use the builder and factory APIs?`}</li>
<li parentName="ul">{`How to import and use each exported item?`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`This page documents everything exported from `}<inlineCode parentName="p">{`webiny/api/cms/group`}</inlineCode>{`. Import any of the items below directly from this path in your Webiny extensions.`}</p>
<p><strong parentName="p">{`Use Cases`}</strong></p>
<SymbolList symbols={[{
      name: "CreateGroupUseCase",
      anchor: "create-group-use-case"
    }, {
      name: "DeleteGroupUseCase",
      anchor: "delete-group-use-case"
    }, {
      name: "GetGroupUseCase",
      anchor: "get-group-use-case"
    }, {
      name: "ListGroupsUseCase",
      anchor: "list-groups-use-case"
    }, {
      name: "UpdateGroupUseCase",
      anchor: "update-group-use-case"
    }]} mdxType="SymbolList" />
<p><strong parentName="p">{`Event Handlers`}</strong></p>
<SymbolList symbols={[{
      name: "GroupAfterCreateEventHandler",
      anchor: "group-after-create-event-handler"
    }, {
      name: "GroupAfterDeleteEventHandler",
      anchor: "group-after-delete-event-handler"
    }, {
      name: "GroupAfterUpdateEventHandler",
      anchor: "group-after-update-event-handler"
    }, {
      name: "GroupBeforeCreateEventHandler",
      anchor: "group-before-create-event-handler"
    }, {
      name: "GroupBeforeDeleteEventHandler",
      anchor: "group-before-delete-event-handler"
    }, {
      name: "GroupBeforeUpdateEventHandler",
      anchor: "group-before-update-event-handler"
    }]} mdxType="SymbolList" />
<p><strong parentName="p">{`Services`}</strong></p>
<SymbolList symbols={[{
      name: "ModelGroupFactory",
      anchor: "model-group-factory"
    }]} mdxType="SymbolList" />
<p><strong parentName="p">{`Types & Classes`}</strong></p>
<SymbolList symbols={[{
      name: "CmsGroup",
      anchor: "cms-group"
    }, {
      name: "CmsModelGroup",
      anchor: "cms-model-group"
    }]} mdxType="SymbolList" />
<_Heading level={2} id={"use-cases"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Use Cases</_Heading>
<_Heading level={3} id={"create-group-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>CreateGroupUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/group`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { CreateGroupUseCase } from "webiny/api/cms/group";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`CreateGroupUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface CreateGroupUseCase.Interface {
    execute(input: CmsGroupCreateInput): Promise<Result<CmsGroup, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace CreateGroupUseCase {
  type Interface = ICreateGroupUseCase;
  type Input = CmsGroupCreateInput;
  type Error = UseCaseError;
  type Return = Promise<Result<CmsGroup, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { CreateGroupUseCase } from "webiny/api/cms/group";

class MyImpl implements MyUseCase.Interface {
  public constructor(private createGroupUseCase: CreateGroupUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.createGroupUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [CreateGroupUseCase]
});`}
</Editor>
<_Heading level={3} id={"delete-group-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>DeleteGroupUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/group`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { DeleteGroupUseCase } from "webiny/api/cms/group";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`DeleteGroupUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface DeleteGroupUseCase.Interface {
    execute(groupId: string): Promise<Result<void, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace DeleteGroupUseCase {
  type Interface = IDeleteGroupUseCase;
  type Error = UseCaseError;
  type Return = Promise<Result<void, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { DeleteGroupUseCase } from "webiny/api/cms/group";

class MyImpl implements MyUseCase.Interface {
  public constructor(private deleteGroupUseCase: DeleteGroupUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.deleteGroupUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [DeleteGroupUseCase]
});`}
</Editor>
<_Heading level={3} id={"get-group-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>GetGroupUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/group`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { GetGroupUseCase } from "webiny/api/cms/group";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`GetGroupUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface GetGroupUseCase.Interface {
    execute(groupId: string): Promise<Result<CmsGroup, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace GetGroupUseCase {
  type Interface = IGetGroupUseCase;
  type Error = UseCaseError;
  type Return = Promise<Result<CmsGroup, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { GetGroupUseCase } from "webiny/api/cms/group";

class MyImpl implements MyUseCase.Interface {
  public constructor(private getGroupUseCase: GetGroupUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.getGroupUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [GetGroupUseCase]
});`}
</Editor>
<_Heading level={3} id={"list-groups-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>ListGroupsUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/group`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { ListGroupsUseCase } from "webiny/api/cms/group";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`ListGroupsUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface ListGroupsUseCase.Interface {
    execute(): Promise<Result<CmsGroup[], UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace ListGroupsUseCase {
  type Interface = IListGroupsUseCase;
  type Error = UseCaseError;
  type Return = Promise<Result<CmsGroup[], UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { ListGroupsUseCase } from "webiny/api/cms/group";

class MyImpl implements MyUseCase.Interface {
  public constructor(private listGroupsUseCase: ListGroupsUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.listGroupsUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [ListGroupsUseCase]
});`}
</Editor>
<_Heading level={3} id={"update-group-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>UpdateGroupUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/group`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { UpdateGroupUseCase } from "webiny/api/cms/group";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`UpdateGroupUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface UpdateGroupUseCase.Interface {
    execute(groupId: string, input: CmsGroupUpdateInput): Promise<Result<CmsGroup, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace UpdateGroupUseCase {
  type Interface = IUpdateGroupUseCase;
  type Input = CmsGroupUpdateInput;
  type Error = UseCaseError;
  type Return = Promise<Result<CmsGroup, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { UpdateGroupUseCase } from "webiny/api/cms/group";

class MyImpl implements MyUseCase.Interface {
  public constructor(private updateGroupUseCase: UpdateGroupUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.updateGroupUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [UpdateGroupUseCase]
});`}
</Editor>
<_Heading level={2} id={"event-handlers"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Event Handlers</_Heading>
<_Heading level={3} id={"group-after-create-event-handler"} nextElement={{
      "type": "paragraph"
    }}><code>GroupAfterCreateEventHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/group`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { GroupAfterCreateEventHandler } from "webiny/api/cms/group";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`GroupAfterCreateEventHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface GroupAfterCreateEventHandler.Interface {
    handle(event: GroupAfterCreateEvent): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Event payload `}<inlineCode parentName="strong">{`GroupAfterCreateEventPayload`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface GroupAfterCreateEventPayload {
  group: CmsGroup;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace GroupAfterCreateEventHandler {
  type Interface = IEventHandler<GroupAfterCreateEvent>;
  type Event = GroupAfterCreateEvent;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { GroupAfterCreateEventHandler } from "webiny/api/cms/group";

class MyHandler implements GroupAfterCreateEventHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: GroupAfterCreateEventHandler.Event): Promise<void> {
    const { group } = event.payload;
  }
}

export default GroupAfterCreateEventHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"group-after-delete-event-handler"} nextElement={{
      "type": "paragraph"
    }}><code>GroupAfterDeleteEventHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/group`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { GroupAfterDeleteEventHandler } from "webiny/api/cms/group";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`GroupAfterDeleteEventHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface GroupAfterDeleteEventHandler.Interface {
    handle(event: GroupAfterDeleteEvent): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Event payload `}<inlineCode parentName="strong">{`GroupAfterDeleteEventPayload`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface GroupAfterDeleteEventPayload {
  group: CmsGroup;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace GroupAfterDeleteEventHandler {
  type Interface = IEventHandler<GroupAfterDeleteEvent>;
  type Event = GroupAfterDeleteEvent;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { GroupAfterDeleteEventHandler } from "webiny/api/cms/group";

class MyHandler implements GroupAfterDeleteEventHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: GroupAfterDeleteEventHandler.Event): Promise<void> {
    const { group } = event.payload;
  }
}

export default GroupAfterDeleteEventHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"group-after-update-event-handler"} nextElement={{
      "type": "paragraph"
    }}><code>GroupAfterUpdateEventHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/group`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { GroupAfterUpdateEventHandler } from "webiny/api/cms/group";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`GroupAfterUpdateEventHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface GroupAfterUpdateEventHandler.Interface {
    handle(event: GroupAfterUpdateEvent): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Event payload `}<inlineCode parentName="strong">{`GroupAfterUpdateEventPayload`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface GroupAfterUpdateEventPayload {
  original: CmsGroup;
  group: CmsGroup;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace GroupAfterUpdateEventHandler {
  type Interface = IEventHandler<GroupAfterUpdateEvent>;
  type Event = GroupAfterUpdateEvent;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { GroupAfterUpdateEventHandler } from "webiny/api/cms/group";

class MyHandler implements GroupAfterUpdateEventHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: GroupAfterUpdateEventHandler.Event): Promise<void> {
    const { original, group } = event.payload;
  }
}

export default GroupAfterUpdateEventHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"group-before-create-event-handler"} nextElement={{
      "type": "paragraph"
    }}><code>GroupBeforeCreateEventHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/group`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { GroupBeforeCreateEventHandler } from "webiny/api/cms/group";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`GroupBeforeCreateEventHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface GroupBeforeCreateEventHandler.Interface {
    handle(event: GroupBeforeCreateEventEvent): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Event payload `}<inlineCode parentName="strong">{`GroupBeforeCreateEventPayload`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface GroupBeforeCreateEventPayload {
  group: CmsGroup;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace GroupBeforeCreateEventHandler {
  type Interface = IEventHandler<GroupBeforeCreateEventEvent>;
  type Event = GroupBeforeCreateEventEvent;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { GroupBeforeCreateEventHandler } from "webiny/api/cms/group";

class MyHandler implements GroupBeforeCreateEventHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: GroupBeforeCreateEventHandler.Event): Promise<void> {
    const { group } = event.payload;
  }
}

export default GroupBeforeCreateEventHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"group-before-delete-event-handler"} nextElement={{
      "type": "paragraph"
    }}><code>GroupBeforeDeleteEventHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/group`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { GroupBeforeDeleteEventHandler } from "webiny/api/cms/group";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`GroupBeforeDeleteEventHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface GroupBeforeDeleteEventHandler.Interface {
    handle(event: GroupBeforeDeleteEvent): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Event payload `}<inlineCode parentName="strong">{`GroupBeforeDeleteEventPayload`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface GroupBeforeDeleteEventPayload {
  group: CmsGroup;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace GroupBeforeDeleteEventHandler {
  type Interface = IEventHandler<GroupBeforeDeleteEvent>;
  type Event = GroupBeforeDeleteEvent;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { GroupBeforeDeleteEventHandler } from "webiny/api/cms/group";

class MyHandler implements GroupBeforeDeleteEventHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: GroupBeforeDeleteEventHandler.Event): Promise<void> {
    const { group } = event.payload;
  }
}

export default GroupBeforeDeleteEventHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"group-before-update-event-handler"} nextElement={{
      "type": "paragraph"
    }}><code>GroupBeforeUpdateEventHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/group`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { GroupBeforeUpdateEventHandler } from "webiny/api/cms/group";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`GroupBeforeUpdateEventHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface GroupBeforeUpdateEventHandler.Interface {
    handle(event: GroupBeforeUpdateEvent): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Event payload `}<inlineCode parentName="strong">{`GroupBeforeUpdateEventPayload`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface GroupBeforeUpdateEventPayload {
  original: CmsGroup;
  group: CmsGroup;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace GroupBeforeUpdateEventHandler {
  type Interface = IEventHandler<GroupBeforeUpdateEvent>;
  type Event = GroupBeforeUpdateEvent;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { GroupBeforeUpdateEventHandler } from "webiny/api/cms/group";

class MyHandler implements GroupBeforeUpdateEventHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: GroupBeforeUpdateEventHandler.Event): Promise<void> {
    const { original, group } = event.payload;
  }
}

export default GroupBeforeUpdateEventHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={2} id={"services"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Services</_Heading>
<_Heading level={3} id={"model-group-factory"} nextElement={{
      "type": "paragraph"
    }}><code>ModelGroupFactory</code></_Heading>
<p><strong parentName="p">{`Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/group`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { ModelGroupFactory } from "webiny/api/cms/group";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`ModelGroupFactory.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface ModelGroupFactory.Interface {
    execute(): Promise<IModelGroup[]>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace ModelGroupFactory {
  type Interface = IModelGroupFactory;
  type Return = Promise<IModelGroup[]>;
  type Group = IModelGroup;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { ModelGroupFactory } from "webiny/api/cms/group";

class MyImpl implements MyUseCase.Interface {
  public constructor(private modelGroupFactory: ModelGroupFactory.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.modelGroupFactory.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [ModelGroupFactory]
});`}
</Editor>
<_Heading level={2} id={"types-and-classes"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Types &amp; Classes</_Heading>
<_Heading level={3} id={"cms-group"} nextElement={{
      "type": "paragraph"
    }}><code>CmsGroup</code></_Heading>
<p><strong parentName="p">{`Type`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/group`}</inlineCode></p>
<p>{`A representation of content model group in the database.`}</p>
<p>{`@category CmsGroup
@category Database model`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import type { CmsGroup } from "webiny/api/cms/group";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export interface CmsGroup { ... }`}
</Editor>
<_Heading level={3} id={"cms-model-group"} nextElement={{
      "type": "paragraph"
    }}><code>CmsModelGroup</code></_Heading>
<p><strong parentName="p">{`Type`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/group`}</inlineCode></p>
<p>{`@category Database model
@category CmsModel`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import type { CmsModelGroup } from "webiny/api/cms/group";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export interface CmsModelGroup {
  /**
   * Generated ID of the group
   */
  id: string;
  /**
   * Name of the group
   */
  name: string;
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