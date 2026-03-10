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
  "title": "Model",
  "description": "CMS model builders, factories, use cases and event handlers",
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
    "title": "CreateModelFromUseCase",
    "slug": "create-model-from-use-case",
    "children": []
  }, {
    "title": "CreateModelUseCase",
    "slug": "create-model-use-case",
    "children": []
  }, {
    "title": "DeleteModelUseCase",
    "slug": "delete-model-use-case",
    "children": []
  }, {
    "title": "GetModelUseCase",
    "slug": "get-model-use-case",
    "children": []
  }, {
    "title": "ListModelsUseCase",
    "slug": "list-models-use-case",
    "children": []
  }, {
    "title": "UpdateModelUseCase",
    "slug": "update-model-use-case",
    "children": []
  }]
}, {
  "title": "Event Handlers",
  "slug": "event-handlers",
  "children": [{
    "title": "ModelAfterCreateEventHandler",
    "slug": "model-after-create-event-handler",
    "children": []
  }, {
    "title": "ModelAfterCreateFromEventHandler",
    "slug": "model-after-create-from-event-handler",
    "children": []
  }, {
    "title": "ModelAfterDeleteEventHandler",
    "slug": "model-after-delete-event-handler",
    "children": []
  }, {
    "title": "ModelAfterUpdateEventHandler",
    "slug": "model-after-update-event-handler",
    "children": []
  }, {
    "title": "ModelBeforeCreateEventHandler",
    "slug": "model-before-create-event-handler",
    "children": []
  }, {
    "title": "ModelBeforeCreateFromEventHandler",
    "slug": "model-before-create-from-event-handler",
    "children": []
  }, {
    "title": "ModelBeforeDeleteEventHandler",
    "slug": "model-before-delete-event-handler",
    "children": []
  }, {
    "title": "ModelBeforeUpdateEventHandler",
    "slug": "model-before-update-event-handler",
    "children": []
  }]
}, {
  "title": "Services",
  "slug": "services",
  "children": [{
    "title": "FieldType",
    "slug": "field-type",
    "children": []
  }, {
    "title": "ModelFactory",
    "slug": "model-factory",
    "children": []
  }]
}, {
  "title": "Types & Classes",
  "slug": "types-and-classes",
  "children": [{
    "title": "CmsModel",
    "slug": "cms-model",
    "children": []
  }, {
    "title": "CmsModelField",
    "slug": "cms-model-field",
    "children": []
  }, {
    "title": "FieldBuilder",
    "slug": "field-builder",
    "children": []
  }, {
    "title": "FieldRendererRegistry",
    "slug": "field-renderer-registry",
    "children": []
  }, {
    "title": "LayoutBuilder",
    "slug": "layout-builder",
    "children": []
  }, {
    "title": "ModelBuilder",
    "slug": "model-builder",
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
<li parentName="ul">{`What use cases are available in `}<inlineCode parentName="li">{`webiny/api/cms/model`}</inlineCode>{`?`}</li>
<li parentName="ul">{`Which event handlers can you implement?`}</li>
<li parentName="ul">{`How to use the builder and factory APIs?`}</li>
<li parentName="ul">{`How to import and use each exported item?`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`This page documents everything exported from `}<inlineCode parentName="p">{`webiny/api/cms/model`}</inlineCode>{`. Import any of the items below directly from this path in your Webiny extensions.`}</p>
<p><strong parentName="p">{`Use Cases`}</strong></p>
<SymbolList symbols={[{
      name: "CreateModelFromUseCase",
      anchor: "create-model-from-use-case"
    }, {
      name: "CreateModelUseCase",
      anchor: "create-model-use-case"
    }, {
      name: "DeleteModelUseCase",
      anchor: "delete-model-use-case"
    }, {
      name: "GetModelUseCase",
      anchor: "get-model-use-case"
    }, {
      name: "ListModelsUseCase",
      anchor: "list-models-use-case"
    }, {
      name: "UpdateModelUseCase",
      anchor: "update-model-use-case"
    }]} mdxType="SymbolList" />
<p><strong parentName="p">{`Event Handlers`}</strong></p>
<SymbolList symbols={[{
      name: "ModelAfterCreateEventHandler",
      anchor: "model-after-create-event-handler"
    }, {
      name: "ModelAfterCreateFromEventHandler",
      anchor: "model-after-create-from-event-handler"
    }, {
      name: "ModelAfterDeleteEventHandler",
      anchor: "model-after-delete-event-handler"
    }, {
      name: "ModelAfterUpdateEventHandler",
      anchor: "model-after-update-event-handler"
    }, {
      name: "ModelBeforeCreateEventHandler",
      anchor: "model-before-create-event-handler"
    }, {
      name: "ModelBeforeCreateFromEventHandler",
      anchor: "model-before-create-from-event-handler"
    }, {
      name: "ModelBeforeDeleteEventHandler",
      anchor: "model-before-delete-event-handler"
    }, {
      name: "ModelBeforeUpdateEventHandler",
      anchor: "model-before-update-event-handler"
    }]} mdxType="SymbolList" />
<p><strong parentName="p">{`Services`}</strong></p>
<SymbolList symbols={[{
      name: "FieldType",
      anchor: "field-type"
    }, {
      name: "ModelFactory",
      anchor: "model-factory"
    }]} mdxType="SymbolList" />
<p><strong parentName="p">{`Types & Classes`}</strong></p>
<SymbolList symbols={[{
      name: "CmsModel",
      anchor: "cms-model"
    }, {
      name: "CmsModelField",
      anchor: "cms-model-field"
    }, {
      name: "FieldBuilder",
      anchor: "field-builder"
    }, {
      name: "FieldRendererRegistry",
      anchor: "field-renderer-registry"
    }, {
      name: "LayoutBuilder",
      anchor: "layout-builder"
    }, {
      name: "ModelBuilder",
      anchor: "model-builder"
    }]} mdxType="SymbolList" />
<_Heading level={2} id={"use-cases"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Use Cases</_Heading>
<_Heading level={3} id={"create-model-from-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>CreateModelFromUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/model`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { CreateModelFromUseCase } from "webiny/api/cms/model";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`CreateModelFromUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface CreateModelFromUseCase.Interface {
    execute(
        modelId: string,
        input: CmsModelCreateFromInput
    ): Promise<Result<CmsModel, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace CreateModelFromUseCase {
  type Interface = ICreateModelFromUseCase;
  type Input = CmsModelCreateFromInput;
  type Error = UseCaseError;
  type Return = Promise<Result<CmsModel, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { CreateModelFromUseCase } from "webiny/api/cms/model";

class MyImpl implements MyUseCase.Interface {
  public constructor(private createModelFromUseCase: CreateModelFromUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.createModelFromUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [CreateModelFromUseCase]
});`}
</Editor>
<_Heading level={3} id={"create-model-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>CreateModelUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/model`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { CreateModelUseCase } from "webiny/api/cms/model";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`CreateModelUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface CreateModelUseCase.Interface {
    execute(input: CmsModelCreateInput): Promise<Result<CmsModel, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace CreateModelUseCase {
  type Interface = ICreateModelUseCase;
  type Input = CmsModelCreateInput;
  type Error = UseCaseError;
  type Return = Promise<Result<CmsModel, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { CreateModelUseCase } from "webiny/api/cms/model";

class MyImpl implements MyUseCase.Interface {
  public constructor(private createModelUseCase: CreateModelUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.createModelUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [CreateModelUseCase]
});`}
</Editor>
<_Heading level={3} id={"delete-model-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>DeleteModelUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/model`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { DeleteModelUseCase } from "webiny/api/cms/model";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`DeleteModelUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface DeleteModelUseCase.Interface {
    execute(modelId: string): Promise<Result<void, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace DeleteModelUseCase {
  type Interface = IDeleteModelUseCase;
  type Error = UseCaseError;
  type Return = Promise<Result<void, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { DeleteModelUseCase } from "webiny/api/cms/model";

class MyImpl implements MyUseCase.Interface {
  public constructor(private deleteModelUseCase: DeleteModelUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.deleteModelUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [DeleteModelUseCase]
});`}
</Editor>
<_Heading level={3} id={"get-model-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>GetModelUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/model`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { GetModelUseCase } from "webiny/api/cms/model";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`GetModelUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface GetModelUseCase.Interface {
    execute(modelId: string): Promise<Result<CmsModel, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace GetModelUseCase {
  type Interface = IGetModelUseCase;
  type Error = UseCaseError;
  type Return = Promise<Result<CmsModel, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { GetModelUseCase } from "webiny/api/cms/model";

class MyImpl implements MyUseCase.Interface {
  public constructor(private getModelUseCase: GetModelUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.getModelUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [GetModelUseCase]
});`}
</Editor>
<_Heading level={3} id={"list-models-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>ListModelsUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/model`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { ListModelsUseCase } from "webiny/api/cms/model";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`ListModelsUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface ListModelsUseCase.Interface {
    execute(params?: ICmsModelListParams): Promise<Result<CmsModel[], UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace ListModelsUseCase {
  type Interface = IListModelsUseCase;
  type Params = ICmsModelListParams;
  type Error = UseCaseError;
  type Return = Promise<Result<CmsModel[], UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { ListModelsUseCase } from "webiny/api/cms/model";

class MyImpl implements MyUseCase.Interface {
  public constructor(private listModelsUseCase: ListModelsUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.listModelsUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [ListModelsUseCase]
});`}
</Editor>
<_Heading level={3} id={"update-model-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>UpdateModelUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/model`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { UpdateModelUseCase } from "webiny/api/cms/model";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`UpdateModelUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface UpdateModelUseCase.Interface {
    execute(modelId: string, input: CmsModelUpdateInput): Promise<Result<CmsModel, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace UpdateModelUseCase {
  type Interface = IUpdateModelUseCase;
  type Input = CmsModelUpdateInput;
  type Error = UseCaseError;
  type Return = Promise<Result<CmsModel, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { UpdateModelUseCase } from "webiny/api/cms/model";

class MyImpl implements MyUseCase.Interface {
  public constructor(private updateModelUseCase: UpdateModelUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.updateModelUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [UpdateModelUseCase]
});`}
</Editor>
<_Heading level={2} id={"event-handlers"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Event Handlers</_Heading>
<_Heading level={3} id={"model-after-create-event-handler"} nextElement={{
      "type": "paragraph"
    }}><code>ModelAfterCreateEventHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/model`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { ModelAfterCreateEventHandler } from "webiny/api/cms/model";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`ModelAfterCreateEventHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface ModelAfterCreateEventHandler.Interface {
    handle(event: ModelAfterCreateEvent): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Event payload `}<inlineCode parentName="strong">{`ModelAfterCreateEventPayload`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface ModelAfterCreateEventPayload {
  model: CmsModel;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace ModelAfterCreateEventHandler {
  type Interface = IEventHandler<ModelAfterCreateEvent>;
  type Event = ModelAfterCreateEvent;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { ModelAfterCreateEventHandler } from "webiny/api/cms/model";

class MyHandler implements ModelAfterCreateEventHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: ModelAfterCreateEventHandler.Event): Promise<void> {
    const { model } = event.payload;
  }
}

export default ModelAfterCreateEventHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"model-after-create-from-event-handler"} nextElement={{
      "type": "paragraph"
    }}><code>ModelAfterCreateFromEventHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/model`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { ModelAfterCreateFromEventHandler } from "webiny/api/cms/model";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`ModelAfterCreateFromEventHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface ModelAfterCreateFromEventHandler.Interface {
    handle(event: ModelAfterCreateFromEvent): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Event payload `}<inlineCode parentName="strong">{`ModelAfterCreateFromEventPayload`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface ModelAfterCreateFromEventPayload {
  model: CmsModel;
  original: CmsModel;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace ModelAfterCreateFromEventHandler {
  type Interface = IEventHandler<ModelAfterCreateFromEvent>;
  type Event = ModelAfterCreateFromEvent;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { ModelAfterCreateFromEventHandler } from "webiny/api/cms/model";

class MyHandler implements ModelAfterCreateFromEventHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: ModelAfterCreateFromEventHandler.Event): Promise<void> {
    const { model, original } = event.payload;
  }
}

export default ModelAfterCreateFromEventHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"model-after-delete-event-handler"} nextElement={{
      "type": "paragraph"
    }}><code>ModelAfterDeleteEventHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/model`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { ModelAfterDeleteEventHandler } from "webiny/api/cms/model";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`ModelAfterDeleteEventHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface ModelAfterDeleteEventHandler.Interface {
    handle(event: ModelAfterDeleteEvent): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Event payload `}<inlineCode parentName="strong">{`ModelAfterDeleteEventPayload`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface ModelAfterDeleteEventPayload {
  model: CmsModel;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace ModelAfterDeleteEventHandler {
  type Interface = IEventHandler<ModelAfterDeleteEvent>;
  type Event = ModelAfterDeleteEvent;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { ModelAfterDeleteEventHandler } from "webiny/api/cms/model";

class MyHandler implements ModelAfterDeleteEventHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: ModelAfterDeleteEventHandler.Event): Promise<void> {
    const { model } = event.payload;
  }
}

export default ModelAfterDeleteEventHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"model-after-update-event-handler"} nextElement={{
      "type": "paragraph"
    }}><code>ModelAfterUpdateEventHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/model`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { ModelAfterUpdateEventHandler } from "webiny/api/cms/model";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`ModelAfterUpdateEventHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface ModelAfterUpdateEventHandler.Interface {
    handle(event: ModelAfterUpdateEvent): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Event payload `}<inlineCode parentName="strong">{`ModelAfterUpdateEventPayload`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface ModelAfterUpdateEventPayload {
  model: CmsModel;
  original: CmsModel;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace ModelAfterUpdateEventHandler {
  type Interface = IEventHandler<ModelAfterUpdateEvent>;
  type Event = ModelAfterUpdateEvent;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { ModelAfterUpdateEventHandler } from "webiny/api/cms/model";

class MyHandler implements ModelAfterUpdateEventHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: ModelAfterUpdateEventHandler.Event): Promise<void> {
    const { model, original } = event.payload;
  }
}

export default ModelAfterUpdateEventHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"model-before-create-event-handler"} nextElement={{
      "type": "paragraph"
    }}><code>ModelBeforeCreateEventHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/model`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { ModelBeforeCreateEventHandler } from "webiny/api/cms/model";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`ModelBeforeCreateEventHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface ModelBeforeCreateEventHandler.Interface {
    handle(event: ModelBeforeCreateEvent): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Event payload `}<inlineCode parentName="strong">{`ModelBeforeCreateEventPayload`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface ModelBeforeCreateEventPayload {
  model: CmsModel;
  input: CmsModelCreateInput;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace ModelBeforeCreateEventHandler {
  type Interface = IEventHandler<ModelBeforeCreateEvent>;
  type Event = ModelBeforeCreateEvent;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { ModelBeforeCreateEventHandler } from "webiny/api/cms/model";

class MyHandler implements ModelBeforeCreateEventHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: ModelBeforeCreateEventHandler.Event): Promise<void> {
    const { model, input } = event.payload;
  }
}

export default ModelBeforeCreateEventHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"model-before-create-from-event-handler"} nextElement={{
      "type": "paragraph"
    }}><code>ModelBeforeCreateFromEventHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/model`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { ModelBeforeCreateFromEventHandler } from "webiny/api/cms/model";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`ModelBeforeCreateFromEventHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface ModelBeforeCreateFromEventHandler.Interface {
    handle(event: ModelBeforeCreateFromEvent): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Event payload `}<inlineCode parentName="strong">{`ModelBeforeCreateFromEventPayload`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface ModelBeforeCreateFromEventPayload {
  model: CmsModel;
  original: CmsModel;
  input: CmsModelCreateFromInput;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace ModelBeforeCreateFromEventHandler {
  type Interface = IEventHandler<ModelBeforeCreateFromEvent>;
  type Event = ModelBeforeCreateFromEvent;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { ModelBeforeCreateFromEventHandler } from "webiny/api/cms/model";

class MyHandler implements ModelBeforeCreateFromEventHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: ModelBeforeCreateFromEventHandler.Event): Promise<void> {
    const { model, original, input } = event.payload;
  }
}

export default ModelBeforeCreateFromEventHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"model-before-delete-event-handler"} nextElement={{
      "type": "paragraph"
    }}><code>ModelBeforeDeleteEventHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/model`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { ModelBeforeDeleteEventHandler } from "webiny/api/cms/model";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`ModelBeforeDeleteEventHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface ModelBeforeDeleteEventHandler.Interface {
    handle(event: ModelBeforeDeleteEvent): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Event payload `}<inlineCode parentName="strong">{`ModelBeforeDeleteEventPayload`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface ModelBeforeDeleteEventPayload {
  model: CmsModel;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace ModelBeforeDeleteEventHandler {
  type Interface = IEventHandler<ModelBeforeDeleteEvent>;
  type Event = ModelBeforeDeleteEvent;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { ModelBeforeDeleteEventHandler } from "webiny/api/cms/model";

class MyHandler implements ModelBeforeDeleteEventHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: ModelBeforeDeleteEventHandler.Event): Promise<void> {
    const { model } = event.payload;
  }
}

export default ModelBeforeDeleteEventHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"model-before-update-event-handler"} nextElement={{
      "type": "paragraph"
    }}><code>ModelBeforeUpdateEventHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/model`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { ModelBeforeUpdateEventHandler } from "webiny/api/cms/model";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`ModelBeforeUpdateEventHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface ModelBeforeUpdateEventHandler.Interface {
    handle(event: ModelBeforeUpdateEvent): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Event payload `}<inlineCode parentName="strong">{`ModelBeforeUpdateEventPayload`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface ModelBeforeUpdateEventPayload {
  model: CmsModel;
  original: CmsModel;
  input: CmsModelUpdateInput;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace ModelBeforeUpdateEventHandler {
  type Interface = IEventHandler<ModelBeforeUpdateEvent>;
  type Event = ModelBeforeUpdateEvent;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { ModelBeforeUpdateEventHandler } from "webiny/api/cms/model";

class MyHandler implements ModelBeforeUpdateEventHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: ModelBeforeUpdateEventHandler.Event): Promise<void> {
    const { model, original, input } = event.payload;
  }
}

export default ModelBeforeUpdateEventHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={2} id={"services"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Services</_Heading>
<_Heading level={3} id={"field-type"} nextElement={{
      "type": "paragraph"
    }}><code>FieldType</code></_Heading>
<p><strong parentName="p">{`Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/model`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { FieldType } from "webiny/api/cms/model";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`FieldType.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface FieldType.Interface {
    // Unique identifier for this field type
    readonly type: string;
    // Create a new field builder instance
    create(registry: IFieldBuilderRegistry): BaseFieldBuilder<any>;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { FieldType } from "webiny/api/cms/model";

class MyImpl implements MyUseCase.Interface {
  public constructor(private fieldType: FieldType.Interface) {}

  public async execute(/* ... */): Promise<void> {
    this.fieldType.create(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [FieldType]
});`}
</Editor>
<_Heading level={3} id={"model-factory"} nextElement={{
      "type": "paragraph"
    }}><code>ModelFactory</code></_Heading>
<p><strong parentName="p">{`Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/model`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { ModelFactory } from "webiny/api/cms/model";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`ModelFactory.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface ModelFactory.Interface {
    execute(builder: IModelBuilder): Promise<PrivateModelBuilder[] | PublicModelBuilder[]>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace ModelFactory {
  type Interface = IModelFactory;
  type Return = Promise<PrivateModelBuilder[] | PublicModelBuilder[]>;
  type Builder = IModelBuilder;
  type FieldBuilder = FieldBuilderRegistry.Interface;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { ModelFactory } from "webiny/api/cms/model";

class MyImpl implements MyUseCase.Interface {
  public constructor(private modelFactory: ModelFactory.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.modelFactory.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [ModelFactory]
});`}
</Editor>
<_Heading level={2} id={"types-and-classes"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Types &amp; Classes</_Heading>
<_Heading level={3} id={"cms-model"} nextElement={{
      "type": "paragraph"
    }}><code>CmsModel</code></_Heading>
<p><strong parentName="p">{`Type`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/model`}</inlineCode></p>
<p>{`Base CMS Model. Should not be exported and used outside of this package.`}</p>
<p>{`@category Database model
@category CmsModel`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import type { CmsModel } from "webiny/api/cms/model";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export interface CmsModel { ... }`}
</Editor>
<_Heading level={3} id={"cms-model-field"} nextElement={{
      "type": "paragraph"
    }}><code>CmsModelField</code></_Heading>
<p><strong parentName="p">{`Type`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/model`}</inlineCode></p>
<p>{`A definition for content model field. This type exists on the app side as well.`}</p>
<p>{`@category ModelField
@category Database model`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import type { CmsModelField } from "webiny/api/cms/model";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export interface CmsModelField { ... }`}
</Editor>
<_Heading level={3} id={"field-builder"} nextElement={{
      "type": "paragraph"
    }}><code>FieldBuilder</code></_Heading>
<p><strong parentName="p">{`Class`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/model`}</inlineCode></p>
<p>{`DataFieldBuilder class for data fields that produce CmsModelField instances.
Provides storageId, list, validation, renderer, and other data-field methods.`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { FieldBuilder } from "webiny/api/cms/model";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export class DataFieldBuilder<TType extends string = string> extends BaseFieldBuilder<TType> {
  protected override config: FieldBuilderConfig;
  public constructor(type: TType, label?: string);
  placeholder(text: string): this;
  storageId(id: string): this;
  defaultValue(value: any): this;
  list(): this;
  tags(tags: string[]): this;
  listMinLength(value: number, message?: string): this;
  listMaxLength(value: number, message?: string): this;
  protected validation(validation: CmsModelFieldValidation): this;
  protected listValidation(validation: CmsModelFieldValidation): this;
  predefinedValues(values: CmsModelFieldPredefinedValues["values"]): this;
  renderer<TName extends FieldRendererName<TType>>(
    name: TName,
    ...args: undefined extends FieldRendererSettings<TName>
      ? [settings?: FieldRendererSettings<TName>]
      : FieldRendererSettings<TName> extends undefined
        ? []
        : [settings: FieldRendererSettings<TName>]
  ): this;
  settings(settings: Record<string, any>): this;
  build(): DataFieldBuildResult;
}`}
</Editor>
<_Heading level={3} id={"field-renderer-registry"} nextElement={{
      "type": "paragraph"
    }}><code>FieldRendererRegistry</code></_Heading>
<p><strong parentName="p">{`Type`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/model`}</inlineCode></p>
<p>{`Augmentable renderer registry.
Each entry maps a renderer name to its applicable field type(s) and settings.`}</p>
<p>{`Example:
declare module “@webiny/api-headless-cms/features/modelBuilder/fields/FieldBuilder” {
interface FieldRendererRegistry {
“my-renderer”: { fieldType: “text” | “long-text”; settings: { color: string } };
}
}`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import type { FieldRendererRegistry } from "webiny/api/cms/model";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export interface FieldRendererRegistry { ... }`}
</Editor>
<_Heading level={3} id={"layout-builder"} nextElement={{
      "type": "paragraph"
    }}><code>LayoutBuilder</code></_Heading>
<p><strong parentName="p">{`Class`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/model`}</inlineCode></p>
<p>{`LayoutBuilder provides a fluent API for modifying field layouts.
Supports adding fields to existing rows and inserting new rows at specific positions.
Callbacks can be queued and executed lazily for efficient composition.`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { LayoutBuilder } from "webiny/api/cms/model";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export class LayoutBuilder {
    private layout: string[][];
    private modifiers: LayoutModifier[] = [];
    constructor(existingLayout: string[][] = []);
    setLayout(layout: string[][]): this;
    addModifier(modifier: LayoutModifier): this;
    addField(field: string, position:;
    addRow(fields: string[]): this;
    insertRow(fields: string[], position:;
    getSnapshot():;
    build(): string[][];
    private findFieldPosition(field: string):;
}`}
</Editor>
<_Heading level={3} id={"model-builder"} nextElement={{
      "type": "paragraph"
    }}><code>ModelBuilder</code></_Heading>
<p><strong parentName="p">{`Class`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/model`}</inlineCode></p>
<p>{`Entry point builder that allows selecting model type.
Call .private() or .public() to get the appropriate typed builder.`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { ModelBuilder } from "webiny/api/cms/model";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export class ModelBuilder {
    public constructor(private registry: FieldBuilderRegistry.Interface);
    public private(input: IModelBuilderPrivateInput): PrivateModelBuilder;
    public public(input: IModelBuilderPublicInput): PublicModelBuilder;
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