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
  "title": "Page",
  "description": "Website Builder page use cases and event handlers",
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
    "title": "CreatePageRevisionFromUseCase",
    "slug": "create-page-revision-from-use-case",
    "children": []
  }, {
    "title": "CreatePageUseCase",
    "slug": "create-page-use-case",
    "children": []
  }, {
    "title": "DeletePageUseCase",
    "slug": "delete-page-use-case",
    "children": []
  }, {
    "title": "DuplicatePageUseCase",
    "slug": "duplicate-page-use-case",
    "children": []
  }, {
    "title": "GetPageByIdUseCase",
    "slug": "get-page-by-id-use-case",
    "children": []
  }, {
    "title": "GetPageByPathUseCase",
    "slug": "get-page-by-path-use-case",
    "children": []
  }, {
    "title": "GetPageRevisionsUseCase",
    "slug": "get-page-revisions-use-case",
    "children": []
  }, {
    "title": "ListPagesUseCase",
    "slug": "list-pages-use-case",
    "children": []
  }, {
    "title": "MovePageUseCase",
    "slug": "move-page-use-case",
    "children": []
  }, {
    "title": "PublishPageUseCase",
    "slug": "publish-page-use-case",
    "children": []
  }, {
    "title": "UnpublishPageUseCase",
    "slug": "unpublish-page-use-case",
    "children": []
  }, {
    "title": "UpdatePageUseCase",
    "slug": "update-page-use-case",
    "children": []
  }]
}, {
  "title": "Event Handlers",
  "slug": "event-handlers",
  "children": [{
    "title": "PageAfterCreateHandler",
    "slug": "page-after-create-handler",
    "children": []
  }, {
    "title": "PageAfterCreateRevisionFromHandler",
    "slug": "page-after-create-revision-from-handler",
    "children": []
  }, {
    "title": "PageAfterDeleteHandler",
    "slug": "page-after-delete-handler",
    "children": []
  }, {
    "title": "PageAfterDuplicateHandler",
    "slug": "page-after-duplicate-handler",
    "children": []
  }, {
    "title": "PageAfterMoveHandler",
    "slug": "page-after-move-handler",
    "children": []
  }, {
    "title": "PageAfterPublishHandler",
    "slug": "page-after-publish-handler",
    "children": []
  }, {
    "title": "PageAfterUnpublishHandler",
    "slug": "page-after-unpublish-handler",
    "children": []
  }, {
    "title": "PageAfterUpdateHandler",
    "slug": "page-after-update-handler",
    "children": []
  }, {
    "title": "PageBeforeCreateHandler",
    "slug": "page-before-create-handler",
    "children": []
  }, {
    "title": "PageBeforeCreateRevisionFromHandler",
    "slug": "page-before-create-revision-from-handler",
    "children": []
  }, {
    "title": "PageBeforeDeleteHandler",
    "slug": "page-before-delete-handler",
    "children": []
  }, {
    "title": "PageBeforeDuplicateHandler",
    "slug": "page-before-duplicate-handler",
    "children": []
  }, {
    "title": "PageBeforeMoveHandler",
    "slug": "page-before-move-handler",
    "children": []
  }, {
    "title": "PageBeforePublishHandler",
    "slug": "page-before-publish-handler",
    "children": []
  }, {
    "title": "PageBeforeUnpublishHandler",
    "slug": "page-before-unpublish-handler",
    "children": []
  }, {
    "title": "PageBeforeUpdateHandler",
    "slug": "page-before-update-handler",
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
<li parentName="ul">{`What use cases are available in `}<inlineCode parentName="li">{`webiny/api/website-builder/page`}</inlineCode>{`?`}</li>
<li parentName="ul">{`How to import and use each exported item?`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`This page documents everything exported from `}<inlineCode parentName="p">{`webiny/api/website-builder/page`}</inlineCode>{`. Import any of the items below directly from this path in your Webiny extensions.`}</p>
<p><strong parentName="p">{`Use Cases`}</strong></p>
<SymbolList symbols={[{
      name: "CreatePageRevisionFromUseCase",
      anchor: "create-page-revision-from-use-case"
    }, {
      name: "CreatePageUseCase",
      anchor: "create-page-use-case"
    }, {
      name: "DeletePageUseCase",
      anchor: "delete-page-use-case"
    }, {
      name: "DuplicatePageUseCase",
      anchor: "duplicate-page-use-case"
    }, {
      name: "GetPageByIdUseCase",
      anchor: "get-page-by-id-use-case"
    }, {
      name: "GetPageByPathUseCase",
      anchor: "get-page-by-path-use-case"
    }, {
      name: "GetPageRevisionsUseCase",
      anchor: "get-page-revisions-use-case"
    }, {
      name: "ListPagesUseCase",
      anchor: "list-pages-use-case"
    }, {
      name: "MovePageUseCase",
      anchor: "move-page-use-case"
    }, {
      name: "PublishPageUseCase",
      anchor: "publish-page-use-case"
    }, {
      name: "UnpublishPageUseCase",
      anchor: "unpublish-page-use-case"
    }, {
      name: "UpdatePageUseCase",
      anchor: "update-page-use-case"
    }]} mdxType="SymbolList" />
<p><strong parentName="p">{`Event Handlers`}</strong></p>
<SymbolList symbols={[{
      name: "PageAfterCreateHandler",
      anchor: "page-after-create-handler"
    }, {
      name: "PageAfterCreateRevisionFromHandler",
      anchor: "page-after-create-revision-from-handler"
    }, {
      name: "PageAfterDeleteHandler",
      anchor: "page-after-delete-handler"
    }, {
      name: "PageAfterDuplicateHandler",
      anchor: "page-after-duplicate-handler"
    }, {
      name: "PageAfterMoveHandler",
      anchor: "page-after-move-handler"
    }, {
      name: "PageAfterPublishHandler",
      anchor: "page-after-publish-handler"
    }, {
      name: "PageAfterUnpublishHandler",
      anchor: "page-after-unpublish-handler"
    }, {
      name: "PageAfterUpdateHandler",
      anchor: "page-after-update-handler"
    }, {
      name: "PageBeforeCreateHandler",
      anchor: "page-before-create-handler"
    }, {
      name: "PageBeforeCreateRevisionFromHandler",
      anchor: "page-before-create-revision-from-handler"
    }, {
      name: "PageBeforeDeleteHandler",
      anchor: "page-before-delete-handler"
    }, {
      name: "PageBeforeDuplicateHandler",
      anchor: "page-before-duplicate-handler"
    }, {
      name: "PageBeforeMoveHandler",
      anchor: "page-before-move-handler"
    }, {
      name: "PageBeforePublishHandler",
      anchor: "page-before-publish-handler"
    }, {
      name: "PageBeforeUnpublishHandler",
      anchor: "page-before-unpublish-handler"
    }, {
      name: "PageBeforeUpdateHandler",
      anchor: "page-before-update-handler"
    }]} mdxType="SymbolList" />
<_Heading level={2} id={"use-cases"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Use Cases</_Heading>
<_Heading level={3} id={"create-page-revision-from-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>CreatePageRevisionFromUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/website-builder/page`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { CreatePageRevisionFromUseCase } from "webiny/api/website-builder/page";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`CreatePageRevisionFromUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface CreatePageRevisionFromUseCase.Interface {
    execute(params: ICreateWbPageRevisionFromParams): Promise<Result<WbPage, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace CreatePageRevisionFromUseCase {
  type Interface = ICreatePageRevisionFromUseCase;
  type Params = ICreateWbPageRevisionFromParams;
  type Return = Promise<Result<WbPage, UseCaseError>>;
  type Error = UseCaseError;
  type Page = WbPage;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { CreatePageRevisionFromUseCase } from "webiny/api/website-builder/page";

class MyImpl implements MyUseCase.Interface {
  public constructor(
    private createPageRevisionFromUseCase: CreatePageRevisionFromUseCase.Interface
  ) {}

  public async execute(/* ... */): Promise<void> {
    await this.createPageRevisionFromUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [CreatePageRevisionFromUseCase]
});`}
</Editor>
<_Heading level={3} id={"create-page-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>CreatePageUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/website-builder/page`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { CreatePageUseCase } from "webiny/api/website-builder/page";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`CreatePageUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface CreatePageUseCase.Interface {
    execute(data: ICreateWbPageParams): Promise<Result<WbPage, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace CreatePageUseCase {
  type Interface = ICreatePageUseCase;
  type Params = ICreateWbPageParams;
  type Return = Promise<Result<WbPage, UseCaseError>>;
  type Error = UseCaseError;
  type Page = WbPage;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { CreatePageUseCase } from "webiny/api/website-builder/page";

class MyImpl implements MyUseCase.Interface {
  public constructor(private createPageUseCase: CreatePageUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.createPageUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [CreatePageUseCase]
});`}
</Editor>
<_Heading level={3} id={"delete-page-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>DeletePageUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/website-builder/page`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { DeletePageUseCase } from "webiny/api/website-builder/page";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`DeletePageUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface DeletePageUseCase.Interface {
    execute(params: IDeleteWbPageParams): Promise<Result<void, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace DeletePageUseCase {
  type Interface = IDeletePageUseCase;
  type Params = IDeleteWbPageParams;
  type Return = Promise<Result<void, UseCaseError>>;
  type Error = UseCaseError;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { DeletePageUseCase } from "webiny/api/website-builder/page";

class MyImpl implements MyUseCase.Interface {
  public constructor(private deletePageUseCase: DeletePageUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.deletePageUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [DeletePageUseCase]
});`}
</Editor>
<_Heading level={3} id={"duplicate-page-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>DuplicatePageUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/website-builder/page`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { DuplicatePageUseCase } from "webiny/api/website-builder/page";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`DuplicatePageUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface DuplicatePageUseCase.Interface {
    execute(params: IDuplicateWbPageParams): Promise<Result<WbPage, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace DuplicatePageUseCase {
  type Interface = IDuplicatePageUseCase;
  type Params = IDuplicateWbPageParams;
  type Return = Promise<Result<WbPage, UseCaseError>>;
  type Error = UseCaseError;
  type Page = WbPage;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { DuplicatePageUseCase } from "webiny/api/website-builder/page";

class MyImpl implements MyUseCase.Interface {
  public constructor(private duplicatePageUseCase: DuplicatePageUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.duplicatePageUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [DuplicatePageUseCase]
});`}
</Editor>
<_Heading level={3} id={"get-page-by-id-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>GetPageByIdUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/website-builder/page`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { GetPageByIdUseCase } from "webiny/api/website-builder/page";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`GetPageByIdUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface GetPageByIdUseCase.Interface {
    execute(id: string): Promise<Result<WbPage, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace GetPageByIdUseCase {
  type Interface = IGetPageByIdUseCase;
  type Return = Promise<Result<WbPage, UseCaseError>>;
  type Error = UseCaseError;
  type Page = WbPage;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { GetPageByIdUseCase } from "webiny/api/website-builder/page";

class MyImpl implements MyUseCase.Interface {
  public constructor(private getPageByIdUseCase: GetPageByIdUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.getPageByIdUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [GetPageByIdUseCase]
});`}
</Editor>
<_Heading level={3} id={"get-page-by-path-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>GetPageByPathUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/website-builder/page`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { GetPageByPathUseCase } from "webiny/api/website-builder/page";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`GetPageByPathUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface GetPageByPathUseCase.Interface {
    execute(path: string): Promise<Result<WbPage, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace GetPageByPathUseCase {
  type Interface = IGetPageByPathUseCase;
  type Error = UseCaseError;
  type Return = Promise<Result<WbPage, UseCaseError>>;
  type Page = WbPage;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { GetPageByPathUseCase } from "webiny/api/website-builder/page";

class MyImpl implements MyUseCase.Interface {
  public constructor(private getPageByPathUseCase: GetPageByPathUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.getPageByPathUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [GetPageByPathUseCase]
});`}
</Editor>
<_Heading level={3} id={"get-page-revisions-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>GetPageRevisionsUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/website-builder/page`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { GetPageRevisionsUseCase } from "webiny/api/website-builder/page";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`GetPageRevisionsUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface GetPageRevisionsUseCase.Interface {
    execute(entryId: string): Promise<Result<WbPage[], UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace GetPageRevisionsUseCase {
  type Interface = IGetPageRevisionsUseCase;
  type Error = UseCaseError;
  type Return = Promise<Result<WbPage[], UseCaseError>>;
  type Page = WbPage;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { GetPageRevisionsUseCase } from "webiny/api/website-builder/page";

class MyImpl implements MyUseCase.Interface {
  public constructor(private getPageRevisionsUseCase: GetPageRevisionsUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.getPageRevisionsUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [GetPageRevisionsUseCase]
});`}
</Editor>
<_Heading level={3} id={"list-pages-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>ListPagesUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/website-builder/page`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { ListPagesUseCase } from "webiny/api/website-builder/page";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`ListPagesUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface ListPagesUseCase.Interface {
    execute(params: IListPagesParams): Promise<Result<IListPagesResult, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace ListPagesUseCase {
  type Interface = IListPagesUseCase;
  type Error = UseCaseError;
  type Params = IListPagesParams;
  type Return = Promise<Result<IListPagesResult, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { ListPagesUseCase } from "webiny/api/website-builder/page";

class MyImpl implements MyUseCase.Interface {
  public constructor(private listPagesUseCase: ListPagesUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.listPagesUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [ListPagesUseCase]
});`}
</Editor>
<_Heading level={3} id={"move-page-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>MovePageUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/website-builder/page`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { MovePageUseCase } from "webiny/api/website-builder/page";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`MovePageUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface MovePageUseCase.Interface {
    execute(params: IMoveWbPageParams): Promise<Result<WbPage, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace MovePageUseCase {
  type Interface = IMovePageUseCase;
  type Params = IMoveWbPageParams;
  type Return = Promise<Result<WbPage, UseCaseError>>;
  type Error = UseCaseError;
  type Page = WbPage;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { MovePageUseCase } from "webiny/api/website-builder/page";

class MyImpl implements MyUseCase.Interface {
  public constructor(private movePageUseCase: MovePageUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.movePageUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [MovePageUseCase]
});`}
</Editor>
<_Heading level={3} id={"publish-page-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>PublishPageUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/website-builder/page`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { PublishPageUseCase } from "webiny/api/website-builder/page";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`PublishPageUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface PublishPageUseCase.Interface {
    execute(params: IPublishWbPageParams): Promise<Result<WbPage, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace PublishPageUseCase {
  type Interface = IPublishPageUseCase;
  type Params = IPublishWbPageParams;
  type Return = Promise<Result<WbPage, UseCaseError>>;
  type Error = UseCaseError;
  type Page = WbPage;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { PublishPageUseCase } from "webiny/api/website-builder/page";

class MyImpl implements MyUseCase.Interface {
  public constructor(private publishPageUseCase: PublishPageUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.publishPageUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [PublishPageUseCase]
});`}
</Editor>
<_Heading level={3} id={"unpublish-page-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>UnpublishPageUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/website-builder/page`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { UnpublishPageUseCase } from "webiny/api/website-builder/page";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`UnpublishPageUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface UnpublishPageUseCase.Interface {
    execute(params: IUnpublishWbPageParams): Promise<Result<WbPage, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace UnpublishPageUseCase {
  type Interface = IUnpublishPageUseCase;
  type Params = IUnpublishWbPageParams;
  type Return = Promise<Result<WbPage, UseCaseError>>;
  type Error = UseCaseError;
  type Page = WbPage;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { UnpublishPageUseCase } from "webiny/api/website-builder/page";

class MyImpl implements MyUseCase.Interface {
  public constructor(private unpublishPageUseCase: UnpublishPageUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.unpublishPageUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [UnpublishPageUseCase]
});`}
</Editor>
<_Heading level={3} id={"update-page-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>UpdatePageUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/website-builder/page`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { UpdatePageUseCase } from "webiny/api/website-builder/page";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`UpdatePageUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface UpdatePageUseCase.Interface {
    execute(id: string, data: IUpdateWbPageData): Promise<Result<WbPage, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace UpdatePageUseCase {
  type Interface = IUpdatePageUseCase;
  type UpdateData = IUpdateWbPageData;
  type Return = Promise<Result<WbPage, UseCaseError>>;
  type Error = UseCaseError;
  type Page = WbPage;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { UpdatePageUseCase } from "webiny/api/website-builder/page";

class MyImpl implements MyUseCase.Interface {
  public constructor(private updatePageUseCase: UpdatePageUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.updatePageUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [UpdatePageUseCase]
});`}
</Editor>
<_Heading level={2} id={"event-handlers"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Event Handlers</_Heading>
<_Heading level={3} id={"page-after-create-handler"} nextElement={{
      "type": "paragraph"
    }}><code>PageAfterCreateHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/website-builder/page`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { PageAfterCreateHandler } from "webiny/api/website-builder/page";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`PageAfterCreateHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface PageAfterCreateHandler.Interface {
    handle(event: DomainEvent<PageAfterCreatePayload>): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Event payload `}<inlineCode parentName="strong">{`PageAfterCreatePayload`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface PageAfterCreatePayload {
  page: WbPage;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace PageAfterCreateHandler {
  type Interface = IEventHandler<DomainEvent<PageAfterCreatePayload>>;
  type Event = DomainEvent<PageAfterCreatePayload>;
  type Page = WbPage;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { PageAfterCreateHandler } from "webiny/api/website-builder/page";

class MyHandler implements PageAfterCreateHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: PageAfterCreateHandler.Event): Promise<void> {
    const { page } = event.payload;
  }
}

export default PageAfterCreateHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"page-after-create-revision-from-handler"} nextElement={{
      "type": "paragraph"
    }}><code>PageAfterCreateRevisionFromHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/website-builder/page`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { PageAfterCreateRevisionFromHandler } from "webiny/api/website-builder/page";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`PageAfterCreateRevisionFromHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface PageAfterCreateRevisionFromHandler.Interface {
    handle(event: DomainEvent<PageAfterCreateRevisionFromPayload>): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Event payload `}<inlineCode parentName="strong">{`PageAfterCreateRevisionFromPayload`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface PageAfterCreateRevisionFromPayload {
  page: WbPage;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace PageAfterCreateRevisionFromHandler {
  type Interface = IEventHandler<DomainEvent<PageAfterCreateRevisionFromPayload>>;
  type Event = DomainEvent<PageAfterCreateRevisionFromPayload>;
  type Page = WbPage;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { PageAfterCreateRevisionFromHandler } from "webiny/api/website-builder/page";

class MyHandler implements PageAfterCreateRevisionFromHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: PageAfterCreateRevisionFromHandler.Event): Promise<void> {
    const { page } = event.payload;
  }
}

export default PageAfterCreateRevisionFromHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"page-after-delete-handler"} nextElement={{
      "type": "paragraph"
    }}><code>PageAfterDeleteHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/website-builder/page`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { PageAfterDeleteHandler } from "webiny/api/website-builder/page";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`PageAfterDeleteHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface PageAfterDeleteHandler.Interface {
    handle(event: DomainEvent<PageAfterDeletePayload>): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Event payload `}<inlineCode parentName="strong">{`PageAfterDeletePayload`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface PageAfterDeletePayload {
  page: WbPage;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace PageAfterDeleteHandler {
  type Interface = IEventHandler<DomainEvent<PageAfterDeletePayload>>;
  type Event = DomainEvent<PageAfterDeletePayload>;
  type Page = WbPage;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { PageAfterDeleteHandler } from "webiny/api/website-builder/page";

class MyHandler implements PageAfterDeleteHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: PageAfterDeleteHandler.Event): Promise<void> {
    const { page } = event.payload;
  }
}

export default PageAfterDeleteHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"page-after-duplicate-handler"} nextElement={{
      "type": "paragraph"
    }}><code>PageAfterDuplicateHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/website-builder/page`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { PageAfterDuplicateHandler } from "webiny/api/website-builder/page";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`PageAfterDuplicateHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface PageAfterDuplicateHandler.Interface {
    handle(event: DomainEvent<PageAfterDuplicatePayload>): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Event payload `}<inlineCode parentName="strong">{`PageAfterDuplicatePayload`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface PageAfterDuplicatePayload {
  original: WbPage;
  page: WbPage;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace PageAfterDuplicateHandler {
  type Interface = IEventHandler<DomainEvent<PageAfterDuplicatePayload>>;
  type Event = DomainEvent<PageAfterDuplicatePayload>;
  type Page = WbPage;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { PageAfterDuplicateHandler } from "webiny/api/website-builder/page";

class MyHandler implements PageAfterDuplicateHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: PageAfterDuplicateHandler.Event): Promise<void> {
    const { original, page } = event.payload;
  }
}

export default PageAfterDuplicateHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"page-after-move-handler"} nextElement={{
      "type": "paragraph"
    }}><code>PageAfterMoveHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/website-builder/page`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { PageAfterMoveHandler } from "webiny/api/website-builder/page";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`PageAfterMoveHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface PageAfterMoveHandler.Interface {
    handle(event: DomainEvent<PageAfterMovePayload>): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Event payload `}<inlineCode parentName="strong">{`PageAfterMovePayload`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface PageAfterMovePayload {
  original: WbPage;
  input: IMoveWbPageParams;
  page: WbPage;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace PageAfterMoveHandler {
  type Interface = IEventHandler<DomainEvent<PageAfterMovePayload>>;
  type Event = DomainEvent<PageAfterMovePayload>;
  type Page = WbPage;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { PageAfterMoveHandler } from "webiny/api/website-builder/page";

class MyHandler implements PageAfterMoveHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: PageAfterMoveHandler.Event): Promise<void> {
    const { original, input, page } = event.payload;
  }
}

export default PageAfterMoveHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"page-after-publish-handler"} nextElement={{
      "type": "paragraph"
    }}><code>PageAfterPublishHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/website-builder/page`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { PageAfterPublishHandler } from "webiny/api/website-builder/page";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`PageAfterPublishHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface PageAfterPublishHandler.Interface {
    handle(event: DomainEvent<PageAfterPublishPayload>): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Event payload `}<inlineCode parentName="strong">{`PageAfterPublishPayload`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface PageAfterPublishPayload {
  page: WbPage;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace PageAfterPublishHandler {
  type Interface = IEventHandler<DomainEvent<PageAfterPublishPayload>>;
  type Event = DomainEvent<PageAfterPublishPayload>;
  type Page = WbPage;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { PageAfterPublishHandler } from "webiny/api/website-builder/page";

class MyHandler implements PageAfterPublishHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: PageAfterPublishHandler.Event): Promise<void> {
    const { page } = event.payload;
  }
}

export default PageAfterPublishHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"page-after-unpublish-handler"} nextElement={{
      "type": "paragraph"
    }}><code>PageAfterUnpublishHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/website-builder/page`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { PageAfterUnpublishHandler } from "webiny/api/website-builder/page";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`PageAfterUnpublishHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface PageAfterUnpublishHandler.Interface {
    handle(event: DomainEvent<PageAfterUnpublishPayload>): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Event payload `}<inlineCode parentName="strong">{`PageAfterUnpublishPayload`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface PageAfterUnpublishPayload {
  page: WbPage;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace PageAfterUnpublishHandler {
  type Interface = IEventHandler<DomainEvent<PageAfterUnpublishPayload>>;
  type Event = DomainEvent<PageAfterUnpublishPayload>;
  type Page = WbPage;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { PageAfterUnpublishHandler } from "webiny/api/website-builder/page";

class MyHandler implements PageAfterUnpublishHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: PageAfterUnpublishHandler.Event): Promise<void> {
    const { page } = event.payload;
  }
}

export default PageAfterUnpublishHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"page-after-update-handler"} nextElement={{
      "type": "paragraph"
    }}><code>PageAfterUpdateHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/website-builder/page`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { PageAfterUpdateHandler } from "webiny/api/website-builder/page";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`PageAfterUpdateHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface PageAfterUpdateHandler.Interface {
    handle(event: DomainEvent<PageAfterUpdatePayload>): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Event payload `}<inlineCode parentName="strong">{`PageAfterUpdatePayload`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface PageAfterUpdatePayload {
  original: WbPage;
  input: {
    id: string;
    data: IUpdateWbPageData;
  };
  page: WbPage;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace PageAfterUpdateHandler {
  type Interface = IEventHandler<DomainEvent<PageAfterUpdatePayload>>;
  type Event = DomainEvent<PageAfterUpdatePayload>;
  type Page = WbPage;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { PageAfterUpdateHandler } from "webiny/api/website-builder/page";

class MyHandler implements PageAfterUpdateHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: PageAfterUpdateHandler.Event): Promise<void> {
    const { original, input, page } = event.payload;
  }
}

export default PageAfterUpdateHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"page-before-create-handler"} nextElement={{
      "type": "paragraph"
    }}><code>PageBeforeCreateHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/website-builder/page`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { PageBeforeCreateHandler } from "webiny/api/website-builder/page";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`PageBeforeCreateHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface PageBeforeCreateHandler.Interface {
    handle(event: DomainEvent<PageBeforeCreatePayload>): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Event payload `}<inlineCode parentName="strong">{`PageBeforeCreatePayload`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface PageBeforeCreatePayload {
  input: ICreateWbPageParams;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace PageBeforeCreateHandler {
  type Interface = IEventHandler<DomainEvent<PageBeforeCreatePayload>>;
  type Event = DomainEvent<PageBeforeCreatePayload>;
  type Page = WbPage;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { PageBeforeCreateHandler } from "webiny/api/website-builder/page";

class MyHandler implements PageBeforeCreateHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: PageBeforeCreateHandler.Event): Promise<void> {
    const { input } = event.payload;
  }
}

export default PageBeforeCreateHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"page-before-create-revision-from-handler"} nextElement={{
      "type": "paragraph"
    }}><code>PageBeforeCreateRevisionFromHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/website-builder/page`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { PageBeforeCreateRevisionFromHandler } from "webiny/api/website-builder/page";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`PageBeforeCreateRevisionFromHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface PageBeforeCreateRevisionFromHandler.Interface {
    handle(event: DomainEvent<PageBeforeCreateRevisionFromPayload>): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Event payload `}<inlineCode parentName="strong">{`PageBeforeCreateRevisionFromPayload`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface PageBeforeCreateRevisionFromPayload {
  params: ICreateWbPageRevisionFromParams;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace PageBeforeCreateRevisionFromHandler {
  type Interface = IEventHandler<DomainEvent<PageBeforeCreateRevisionFromPayload>>;
  type Event = DomainEvent<PageBeforeCreateRevisionFromPayload>;
  type Page = WbPage;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { PageBeforeCreateRevisionFromHandler } from "webiny/api/website-builder/page";

class MyHandler implements PageBeforeCreateRevisionFromHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: PageBeforeCreateRevisionFromHandler.Event): Promise<void> {
    const { params } = event.payload;
  }
}

export default PageBeforeCreateRevisionFromHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"page-before-delete-handler"} nextElement={{
      "type": "paragraph"
    }}><code>PageBeforeDeleteHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/website-builder/page`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { PageBeforeDeleteHandler } from "webiny/api/website-builder/page";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`PageBeforeDeleteHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface PageBeforeDeleteHandler.Interface {
    handle(event: DomainEvent<PageBeforeDeletePayload>): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Event payload `}<inlineCode parentName="strong">{`PageBeforeDeletePayload`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface PageBeforeDeletePayload {
  page: WbPage;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace PageBeforeDeleteHandler {
  type Interface = IEventHandler<DomainEvent<PageBeforeDeletePayload>>;
  type Event = DomainEvent<PageBeforeDeletePayload>;
  type Page = WbPage;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { PageBeforeDeleteHandler } from "webiny/api/website-builder/page";

class MyHandler implements PageBeforeDeleteHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: PageBeforeDeleteHandler.Event): Promise<void> {
    const { page } = event.payload;
  }
}

export default PageBeforeDeleteHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"page-before-duplicate-handler"} nextElement={{
      "type": "paragraph"
    }}><code>PageBeforeDuplicateHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/website-builder/page`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { PageBeforeDuplicateHandler } from "webiny/api/website-builder/page";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`PageBeforeDuplicateHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface PageBeforeDuplicateHandler.Interface {
    handle(event: DomainEvent<PageBeforeDuplicatePayload>): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Event payload `}<inlineCode parentName="strong">{`PageBeforeDuplicatePayload`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface PageBeforeDuplicatePayload {
  original: WbPage;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace PageBeforeDuplicateHandler {
  type Interface = IEventHandler<DomainEvent<PageBeforeDuplicatePayload>>;
  type Event = DomainEvent<PageBeforeDuplicatePayload>;
  type Page = WbPage;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { PageBeforeDuplicateHandler } from "webiny/api/website-builder/page";

class MyHandler implements PageBeforeDuplicateHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: PageBeforeDuplicateHandler.Event): Promise<void> {
    const { original } = event.payload;
  }
}

export default PageBeforeDuplicateHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"page-before-move-handler"} nextElement={{
      "type": "paragraph"
    }}><code>PageBeforeMoveHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/website-builder/page`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { PageBeforeMoveHandler } from "webiny/api/website-builder/page";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`PageBeforeMoveHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface PageBeforeMoveHandler.Interface {
    handle(event: DomainEvent<PageBeforeMovePayload>): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Event payload `}<inlineCode parentName="strong">{`PageBeforeMovePayload`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface PageBeforeMovePayload {
  original: WbPage;
  input: IMoveWbPageParams;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace PageBeforeMoveHandler {
  type Interface = IEventHandler<DomainEvent<PageBeforeMovePayload>>;
  type Event = DomainEvent<PageBeforeMovePayload>;
  type Page = WbPage;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { PageBeforeMoveHandler } from "webiny/api/website-builder/page";

class MyHandler implements PageBeforeMoveHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: PageBeforeMoveHandler.Event): Promise<void> {
    const { original, input } = event.payload;
  }
}

export default PageBeforeMoveHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"page-before-publish-handler"} nextElement={{
      "type": "paragraph"
    }}><code>PageBeforePublishHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/website-builder/page`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { PageBeforePublishHandler } from "webiny/api/website-builder/page";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`PageBeforePublishHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface PageBeforePublishHandler.Interface {
    handle(event: DomainEvent<PageBeforePublishPayload>): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Event payload `}<inlineCode parentName="strong">{`PageBeforePublishPayload`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface PageBeforePublishPayload {
  page: WbPage;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace PageBeforePublishHandler {
  type Interface = IEventHandler<DomainEvent<PageBeforePublishPayload>>;
  type Event = DomainEvent<PageBeforePublishPayload>;
  type Page = WbPage;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { PageBeforePublishHandler } from "webiny/api/website-builder/page";

class MyHandler implements PageBeforePublishHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: PageBeforePublishHandler.Event): Promise<void> {
    const { page } = event.payload;
  }
}

export default PageBeforePublishHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"page-before-unpublish-handler"} nextElement={{
      "type": "paragraph"
    }}><code>PageBeforeUnpublishHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/website-builder/page`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { PageBeforeUnpublishHandler } from "webiny/api/website-builder/page";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`PageBeforeUnpublishHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface PageBeforeUnpublishHandler.Interface {
    handle(event: DomainEvent<PageBeforeUnpublishPayload>): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Event payload `}<inlineCode parentName="strong">{`PageBeforeUnpublishPayload`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface PageBeforeUnpublishPayload {
  page: WbPage;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace PageBeforeUnpublishHandler {
  type Interface = IEventHandler<DomainEvent<PageBeforeUnpublishPayload>>;
  type Event = DomainEvent<PageBeforeUnpublishPayload>;
  type Page = WbPage;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { PageBeforeUnpublishHandler } from "webiny/api/website-builder/page";

class MyHandler implements PageBeforeUnpublishHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: PageBeforeUnpublishHandler.Event): Promise<void> {
    const { page } = event.payload;
  }
}

export default PageBeforeUnpublishHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"page-before-update-handler"} nextElement={{
      "type": "paragraph"
    }}><code>PageBeforeUpdateHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/website-builder/page`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { PageBeforeUpdateHandler } from "webiny/api/website-builder/page";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`PageBeforeUpdateHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface PageBeforeUpdateHandler.Interface {
    handle(event: DomainEvent<PageBeforeUpdatePayload>): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Event payload `}<inlineCode parentName="strong">{`PageBeforeUpdatePayload`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface PageBeforeUpdatePayload {
  original: WbPage;
  input: {
    id: string;
    data: IUpdateWbPageData;
  };
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace PageBeforeUpdateHandler {
  type Interface = IEventHandler<DomainEvent<PageBeforeUpdatePayload>>;
  type Event = DomainEvent<PageBeforeUpdatePayload>;
  type Page = WbPage;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { PageBeforeUpdateHandler } from "webiny/api/website-builder/page";

class MyHandler implements PageBeforeUpdateHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: PageBeforeUpdateHandler.Event): Promise<void> {
    const { original, input } = event.payload;
  }
}

export default PageBeforeUpdateHandler.createImplementation({
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