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
  "title": "Entry",
  "description": "CMS entry use cases and event handlers",
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
    "title": "CreateEntryRevisionFromUseCase",
    "slug": "create-entry-revision-from-use-case",
    "children": []
  }, {
    "title": "CreateEntryUseCase",
    "slug": "create-entry-use-case",
    "children": []
  }, {
    "title": "DeleteEntryRevisionUseCase",
    "slug": "delete-entry-revision-use-case",
    "children": []
  }, {
    "title": "DeleteEntryUseCase",
    "slug": "delete-entry-use-case",
    "children": []
  }, {
    "title": "DeleteMultipleEntriesUseCase",
    "slug": "delete-multiple-entries-use-case",
    "children": []
  }, {
    "title": "GetEntriesByIdsUseCase",
    "slug": "get-entries-by-ids-use-case",
    "children": []
  }, {
    "title": "GetEntryByIdUseCase",
    "slug": "get-entry-by-id-use-case",
    "children": []
  }, {
    "title": "GetEntryUseCase",
    "slug": "get-entry-use-case",
    "children": []
  }, {
    "title": "GetLatestDeletedRevisionByEntryIdUseCase",
    "slug": "get-latest-deleted-revision-by-entry-id-use-case",
    "children": []
  }, {
    "title": "GetLatestEntriesByIdsUseCase",
    "slug": "get-latest-entries-by-ids-use-case",
    "children": []
  }, {
    "title": "GetLatestRevisionByEntryIdBaseUseCase",
    "slug": "get-latest-revision-by-entry-id-base-use-case",
    "children": []
  }, {
    "title": "GetLatestRevisionByEntryIdIncludingDeletedUseCase",
    "slug": "get-latest-revision-by-entry-id-including-deleted-use-case",
    "children": []
  }, {
    "title": "GetLatestRevisionByEntryIdUseCase",
    "slug": "get-latest-revision-by-entry-id-use-case",
    "children": []
  }, {
    "title": "GetPreviousRevisionByEntryIdBaseUseCase",
    "slug": "get-previous-revision-by-entry-id-base-use-case",
    "children": []
  }, {
    "title": "GetPreviousRevisionByEntryIdUseCase",
    "slug": "get-previous-revision-by-entry-id-use-case",
    "children": []
  }, {
    "title": "GetPublishedEntriesByIdsUseCase",
    "slug": "get-published-entries-by-ids-use-case",
    "children": []
  }, {
    "title": "GetPublishedRevisionByEntryIdUseCase",
    "slug": "get-published-revision-by-entry-id-use-case",
    "children": []
  }, {
    "title": "GetRevisionByIdUseCase",
    "slug": "get-revision-by-id-use-case",
    "children": []
  }, {
    "title": "GetRevisionsByEntryIdUseCase",
    "slug": "get-revisions-by-entry-id-use-case",
    "children": []
  }, {
    "title": "GetSingletonEntryUseCase",
    "slug": "get-singleton-entry-use-case",
    "children": []
  }, {
    "title": "ListDeletedEntriesUseCase",
    "slug": "list-deleted-entries-use-case",
    "children": []
  }, {
    "title": "ListEntriesUseCase",
    "slug": "list-entries-use-case",
    "children": []
  }, {
    "title": "ListLatestEntriesUseCase",
    "slug": "list-latest-entries-use-case",
    "children": []
  }, {
    "title": "ListPublishedEntriesUseCase",
    "slug": "list-published-entries-use-case",
    "children": []
  }, {
    "title": "MoveEntryToBinUseCase",
    "slug": "move-entry-to-bin-use-case",
    "children": []
  }, {
    "title": "MoveEntryUseCase",
    "slug": "move-entry-use-case",
    "children": []
  }, {
    "title": "PublishEntryUseCase",
    "slug": "publish-entry-use-case",
    "children": []
  }, {
    "title": "RepublishEntryUseCase",
    "slug": "republish-entry-use-case",
    "children": []
  }, {
    "title": "RestoreEntryFromBinUseCase",
    "slug": "restore-entry-from-bin-use-case",
    "children": []
  }, {
    "title": "UnpublishEntryUseCase",
    "slug": "unpublish-entry-use-case",
    "children": []
  }, {
    "title": "UpdateEntryUseCase",
    "slug": "update-entry-use-case",
    "children": []
  }, {
    "title": "UpdateSingletonEntryUseCase",
    "slug": "update-singleton-entry-use-case",
    "children": []
  }, {
    "title": "ValidateEntryUseCase",
    "slug": "validate-entry-use-case",
    "children": []
  }]
}, {
  "title": "Event Handlers",
  "slug": "event-handlers",
  "children": [{
    "title": "EntryAfterCreateEventHandler",
    "slug": "entry-after-create-event-handler",
    "children": []
  }, {
    "title": "EntryAfterDeleteEventHandler",
    "slug": "entry-after-delete-event-handler",
    "children": []
  }, {
    "title": "EntryAfterDeleteMultipleEventHandler",
    "slug": "entry-after-delete-multiple-event-handler",
    "children": []
  }, {
    "title": "EntryAfterMoveEventHandler",
    "slug": "entry-after-move-event-handler",
    "children": []
  }, {
    "title": "EntryAfterPublishEventHandler",
    "slug": "entry-after-publish-event-handler",
    "children": []
  }, {
    "title": "EntryAfterRepublishEventHandler",
    "slug": "entry-after-republish-event-handler",
    "children": []
  }, {
    "title": "EntryAfterRestoreFromBinEventHandler",
    "slug": "entry-after-restore-from-bin-event-handler",
    "children": []
  }, {
    "title": "EntryAfterUnpublishEventHandler",
    "slug": "entry-after-unpublish-event-handler",
    "children": []
  }, {
    "title": "EntryAfterUpdateEventHandler",
    "slug": "entry-after-update-event-handler",
    "children": []
  }, {
    "title": "EntryBeforeCreateEventHandler",
    "slug": "entry-before-create-event-handler",
    "children": []
  }, {
    "title": "EntryBeforeDeleteEventHandler",
    "slug": "entry-before-delete-event-handler",
    "children": []
  }, {
    "title": "EntryBeforeDeleteMultipleEventHandler",
    "slug": "entry-before-delete-multiple-event-handler",
    "children": []
  }, {
    "title": "EntryBeforeMoveEventHandler",
    "slug": "entry-before-move-event-handler",
    "children": []
  }, {
    "title": "EntryBeforePublishEventHandler",
    "slug": "entry-before-publish-event-handler",
    "children": []
  }, {
    "title": "EntryBeforeRepublishEventHandler",
    "slug": "entry-before-republish-event-handler",
    "children": []
  }, {
    "title": "EntryBeforeRestoreFromBinEventHandler",
    "slug": "entry-before-restore-from-bin-event-handler",
    "children": []
  }, {
    "title": "EntryBeforeUnpublishEventHandler",
    "slug": "entry-before-unpublish-event-handler",
    "children": []
  }, {
    "title": "EntryBeforeUpdateEventHandler",
    "slug": "entry-before-update-event-handler",
    "children": []
  }, {
    "title": "EntryRevisionAfterCreateEventHandler",
    "slug": "entry-revision-after-create-event-handler",
    "children": []
  }, {
    "title": "EntryRevisionAfterDeleteEventHandler",
    "slug": "entry-revision-after-delete-event-handler",
    "children": []
  }, {
    "title": "EntryRevisionBeforeCreateEventHandler",
    "slug": "entry-revision-before-create-event-handler",
    "children": []
  }, {
    "title": "EntryRevisionBeforeDeleteEventHandler",
    "slug": "entry-revision-before-delete-event-handler",
    "children": []
  }]
}, {
  "title": "Services",
  "slug": "services",
  "children": [{
    "title": "CmsSortMapper",
    "slug": "cms-sort-mapper",
    "children": []
  }, {
    "title": "CmsWhereMapper",
    "slug": "cms-where-mapper",
    "children": []
  }]
}, {
  "title": "Types & Classes",
  "slug": "types-and-classes",
  "children": [{
    "title": "CmsEntry",
    "slug": "cms-entry",
    "children": []
  }, {
    "title": "CmsEntryValues",
    "slug": "cms-entry-values",
    "children": []
  }, {
    "title": "EntryId",
    "slug": "entry-id",
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
<li parentName="ul">{`What use cases are available in `}<inlineCode parentName="li">{`webiny/api/cms/entry`}</inlineCode>{`?`}</li>
<li parentName="ul">{`Which event handlers can you implement?`}</li>
<li parentName="ul">{`How to import and use each exported item?`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`This page documents everything exported from `}<inlineCode parentName="p">{`webiny/api/cms/entry`}</inlineCode>{`. Import any of the items below directly from this path in your Webiny extensions.`}</p>
<p><strong parentName="p">{`Use Cases`}</strong></p>
<SymbolList symbols={[{
      name: "CreateEntryRevisionFromUseCase",
      anchor: "create-entry-revision-from-use-case"
    }, {
      name: "CreateEntryUseCase",
      anchor: "create-entry-use-case"
    }, {
      name: "DeleteEntryRevisionUseCase",
      anchor: "delete-entry-revision-use-case"
    }, {
      name: "DeleteEntryUseCase",
      anchor: "delete-entry-use-case"
    }, {
      name: "DeleteMultipleEntriesUseCase",
      anchor: "delete-multiple-entries-use-case"
    }, {
      name: "GetEntriesByIdsUseCase",
      anchor: "get-entries-by-ids-use-case"
    }, {
      name: "GetEntryByIdUseCase",
      anchor: "get-entry-by-id-use-case"
    }, {
      name: "GetEntryUseCase",
      anchor: "get-entry-use-case"
    }, {
      name: "GetLatestDeletedRevisionByEntryIdUseCase",
      anchor: "get-latest-deleted-revision-by-entry-id-use-case"
    }, {
      name: "GetLatestEntriesByIdsUseCase",
      anchor: "get-latest-entries-by-ids-use-case"
    }, {
      name: "GetLatestRevisionByEntryIdBaseUseCase",
      anchor: "get-latest-revision-by-entry-id-base-use-case"
    }, {
      name: "GetLatestRevisionByEntryIdIncludingDeletedUseCase",
      anchor: "get-latest-revision-by-entry-id-including-deleted-use-case"
    }, {
      name: "GetLatestRevisionByEntryIdUseCase",
      anchor: "get-latest-revision-by-entry-id-use-case"
    }, {
      name: "GetPreviousRevisionByEntryIdBaseUseCase",
      anchor: "get-previous-revision-by-entry-id-base-use-case"
    }, {
      name: "GetPreviousRevisionByEntryIdUseCase",
      anchor: "get-previous-revision-by-entry-id-use-case"
    }, {
      name: "GetPublishedEntriesByIdsUseCase",
      anchor: "get-published-entries-by-ids-use-case"
    }, {
      name: "GetPublishedRevisionByEntryIdUseCase",
      anchor: "get-published-revision-by-entry-id-use-case"
    }, {
      name: "GetRevisionByIdUseCase",
      anchor: "get-revision-by-id-use-case"
    }, {
      name: "GetRevisionsByEntryIdUseCase",
      anchor: "get-revisions-by-entry-id-use-case"
    }, {
      name: "GetSingletonEntryUseCase",
      anchor: "get-singleton-entry-use-case"
    }, {
      name: "ListDeletedEntriesUseCase",
      anchor: "list-deleted-entries-use-case"
    }, {
      name: "ListEntriesUseCase",
      anchor: "list-entries-use-case"
    }, {
      name: "ListLatestEntriesUseCase",
      anchor: "list-latest-entries-use-case"
    }, {
      name: "ListPublishedEntriesUseCase",
      anchor: "list-published-entries-use-case"
    }, {
      name: "MoveEntryToBinUseCase",
      anchor: "move-entry-to-bin-use-case"
    }, {
      name: "MoveEntryUseCase",
      anchor: "move-entry-use-case"
    }, {
      name: "PublishEntryUseCase",
      anchor: "publish-entry-use-case"
    }, {
      name: "RepublishEntryUseCase",
      anchor: "republish-entry-use-case"
    }, {
      name: "RestoreEntryFromBinUseCase",
      anchor: "restore-entry-from-bin-use-case"
    }, {
      name: "UnpublishEntryUseCase",
      anchor: "unpublish-entry-use-case"
    }, {
      name: "UpdateEntryUseCase",
      anchor: "update-entry-use-case"
    }, {
      name: "UpdateSingletonEntryUseCase",
      anchor: "update-singleton-entry-use-case"
    }, {
      name: "ValidateEntryUseCase",
      anchor: "validate-entry-use-case"
    }]} mdxType="SymbolList" />
<p><strong parentName="p">{`Event Handlers`}</strong></p>
<SymbolList symbols={[{
      name: "EntryAfterCreateEventHandler",
      anchor: "entry-after-create-event-handler"
    }, {
      name: "EntryAfterDeleteEventHandler",
      anchor: "entry-after-delete-event-handler"
    }, {
      name: "EntryAfterDeleteMultipleEventHandler",
      anchor: "entry-after-delete-multiple-event-handler"
    }, {
      name: "EntryAfterMoveEventHandler",
      anchor: "entry-after-move-event-handler"
    }, {
      name: "EntryAfterPublishEventHandler",
      anchor: "entry-after-publish-event-handler"
    }, {
      name: "EntryAfterRepublishEventHandler",
      anchor: "entry-after-republish-event-handler"
    }, {
      name: "EntryAfterRestoreFromBinEventHandler",
      anchor: "entry-after-restore-from-bin-event-handler"
    }, {
      name: "EntryAfterUnpublishEventHandler",
      anchor: "entry-after-unpublish-event-handler"
    }, {
      name: "EntryAfterUpdateEventHandler",
      anchor: "entry-after-update-event-handler"
    }, {
      name: "EntryBeforeCreateEventHandler",
      anchor: "entry-before-create-event-handler"
    }, {
      name: "EntryBeforeDeleteEventHandler",
      anchor: "entry-before-delete-event-handler"
    }, {
      name: "EntryBeforeDeleteMultipleEventHandler",
      anchor: "entry-before-delete-multiple-event-handler"
    }, {
      name: "EntryBeforeMoveEventHandler",
      anchor: "entry-before-move-event-handler"
    }, {
      name: "EntryBeforePublishEventHandler",
      anchor: "entry-before-publish-event-handler"
    }, {
      name: "EntryBeforeRepublishEventHandler",
      anchor: "entry-before-republish-event-handler"
    }, {
      name: "EntryBeforeRestoreFromBinEventHandler",
      anchor: "entry-before-restore-from-bin-event-handler"
    }, {
      name: "EntryBeforeUnpublishEventHandler",
      anchor: "entry-before-unpublish-event-handler"
    }, {
      name: "EntryBeforeUpdateEventHandler",
      anchor: "entry-before-update-event-handler"
    }, {
      name: "EntryRevisionAfterCreateEventHandler",
      anchor: "entry-revision-after-create-event-handler"
    }, {
      name: "EntryRevisionAfterDeleteEventHandler",
      anchor: "entry-revision-after-delete-event-handler"
    }, {
      name: "EntryRevisionBeforeCreateEventHandler",
      anchor: "entry-revision-before-create-event-handler"
    }, {
      name: "EntryRevisionBeforeDeleteEventHandler",
      anchor: "entry-revision-before-delete-event-handler"
    }]} mdxType="SymbolList" />
<p><strong parentName="p">{`Services`}</strong></p>
<SymbolList symbols={[{
      name: "CmsSortMapper",
      anchor: "cms-sort-mapper"
    }, {
      name: "CmsWhereMapper",
      anchor: "cms-where-mapper"
    }]} mdxType="SymbolList" />
<p><strong parentName="p">{`Types & Classes`}</strong></p>
<SymbolList symbols={[{
      name: "CmsEntry",
      anchor: "cms-entry"
    }, {
      name: "CmsEntryValues",
      anchor: "cms-entry-values"
    }, {
      name: "EntryId",
      anchor: "entry-id"
    }]} mdxType="SymbolList" />
<_Heading level={2} id={"use-cases"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Use Cases</_Heading>
<_Heading level={3} id={"create-entry-revision-from-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>CreateEntryRevisionFromUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/entry`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { CreateEntryRevisionFromUseCase } from "webiny/api/cms/entry";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`CreateEntryRevisionFromUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface CreateEntryRevisionFromUseCase.Interface {
    execute<T extends CmsEntryValues = CmsEntryValues>(
        model: CmsModel,
        sourceId: string,
        input: CreateCmsEntryInput<T>,
        options?: CreateCmsEntryOptionsInput
    ): Promise<Result<CmsEntry<T>, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace CreateEntryRevisionFromUseCase {
  type Interface = ICreateEntryRevisionFromUseCase;
  type Input = CreateCmsEntryInput<T>;
  type Options = CreateCmsEntryOptionsInput;
  type Return = Promise<Result<CmsEntry<T>, UseCaseError>>;
  type Error = UseCaseError;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { CreateEntryRevisionFromUseCase } from "webiny/api/cms/entry";

class MyImpl implements MyUseCase.Interface {
  public constructor(
    private createEntryRevisionFromUseCase: CreateEntryRevisionFromUseCase.Interface
  ) {}

  public async execute(/* ... */): Promise<void> {
    await this.createEntryRevisionFromUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [CreateEntryRevisionFromUseCase]
});`}
</Editor>
<_Heading level={3} id={"create-entry-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>CreateEntryUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/entry`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { CreateEntryUseCase } from "webiny/api/cms/entry";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`CreateEntryUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface CreateEntryUseCase.Interface {
    execute<T extends CmsEntryValues = CmsEntryValues>(
        model: CmsModel,
        input: CreateCmsEntryInput<T>,
        options?: CreateCmsEntryOptionsInput
    ): Promise<Result<CmsEntry<T>, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace CreateEntryUseCase {
  type Interface = ICreateEntryUseCase;
  type Input = CreateCmsEntryInput<T>;
  type Options = CreateCmsEntryOptionsInput;
  type Error = UseCaseError;
  type Return = Promise<Result<CmsEntry<T>, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { CreateEntryUseCase } from "webiny/api/cms/entry";

class MyImpl implements MyUseCase.Interface {
  public constructor(private createEntryUseCase: CreateEntryUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.createEntryUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [CreateEntryUseCase]
});`}
</Editor>
<_Heading level={3} id={"delete-entry-revision-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>DeleteEntryRevisionUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/entry`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { DeleteEntryRevisionUseCase } from "webiny/api/cms/entry";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`DeleteEntryRevisionUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface DeleteEntryRevisionUseCase.Interface {
    execute(model: CmsModel, revisionId: string): Promise<Result<void, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace DeleteEntryRevisionUseCase {
  type Interface = IDeleteEntryRevisionUseCase;
  type Error = UseCaseError;
  type Return = Promise<Result<void, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { DeleteEntryRevisionUseCase } from "webiny/api/cms/entry";

class MyImpl implements MyUseCase.Interface {
  public constructor(private deleteEntryRevisionUseCase: DeleteEntryRevisionUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.deleteEntryRevisionUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [DeleteEntryRevisionUseCase]
});`}
</Editor>
<_Heading level={3} id={"delete-entry-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>DeleteEntryUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/entry`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { DeleteEntryUseCase } from "webiny/api/cms/entry";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`DeleteEntryUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface DeleteEntryUseCase.Interface {
    execute(
        model: CmsModel,
        id: string,
        options?: CmsDeleteEntryOptions
    ): Promise<Result<void, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace DeleteEntryUseCase {
  type Interface = IDeleteEntryUseCase;
  type Options = CmsDeleteEntryOptions;
  type Error = UseCaseError;
  type Return = Promise<Result<void, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { DeleteEntryUseCase } from "webiny/api/cms/entry";

class MyImpl implements MyUseCase.Interface {
  public constructor(private deleteEntryUseCase: DeleteEntryUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.deleteEntryUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [DeleteEntryUseCase]
});`}
</Editor>
<_Heading level={3} id={"delete-multiple-entries-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>DeleteMultipleEntriesUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/entry`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { DeleteMultipleEntriesUseCase } from "webiny/api/cms/entry";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`DeleteMultipleEntriesUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface DeleteMultipleEntriesUseCase.Interface {
    execute(
        model: CmsModel,
        params: IDeleteMultipleEntriesUseCaseParams
    ): Promise<Result<IDeleteMultipleEntriesUseCaseResultItem[], UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace DeleteMultipleEntriesUseCase {
  type Interface = IDeleteMultipleEntriesUseCase;
  type Params = IDeleteMultipleEntriesUseCaseParams;
  type Error = UseCaseError;
  type Return = Promise<Result<IDeleteMultipleEntriesUseCaseResultItem[], UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { DeleteMultipleEntriesUseCase } from "webiny/api/cms/entry";

class MyImpl implements MyUseCase.Interface {
  public constructor(
    private deleteMultipleEntriesUseCase: DeleteMultipleEntriesUseCase.Interface
  ) {}

  public async execute(/* ... */): Promise<void> {
    await this.deleteMultipleEntriesUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [DeleteMultipleEntriesUseCase]
});`}
</Editor>
<_Heading level={3} id={"get-entries-by-ids-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>GetEntriesByIdsUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/entry`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { GetEntriesByIdsUseCase } from "webiny/api/cms/entry";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`GetEntriesByIdsUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface GetEntriesByIdsUseCase.Interface {
    execute<T extends CmsEntryValues>(
        model: CmsModel,
        ids: string[]
    ): Promise<Result<CmsEntry<T>[], UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace GetEntriesByIdsUseCase {
  type Interface = IGetEntriesByIdsUseCase;
  type Error = UseCaseError;
  type Return = Promise<Result<CmsEntry<T>[], UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { GetEntriesByIdsUseCase } from "webiny/api/cms/entry";

class MyImpl implements MyUseCase.Interface {
  public constructor(private getEntriesByIdsUseCase: GetEntriesByIdsUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.getEntriesByIdsUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [GetEntriesByIdsUseCase]
});`}
</Editor>
<_Heading level={3} id={"get-entry-by-id-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>GetEntryByIdUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/entry`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { GetEntryByIdUseCase } from "webiny/api/cms/entry";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`GetEntryByIdUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface GetEntryByIdUseCase.Interface {
    execute<T extends CmsEntryValues>(
        model: CmsModel,
        id: string
    ): Promise<Result<CmsEntry<T>, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace GetEntryByIdUseCase {
  type Interface = IGetEntryByIdUseCase;
  type Error = UseCaseError;
  type Return = Promise<Result<CmsEntry<T>, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { GetEntryByIdUseCase } from "webiny/api/cms/entry";

class MyImpl implements MyUseCase.Interface {
  public constructor(private getEntryByIdUseCase: GetEntryByIdUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.getEntryByIdUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [GetEntryByIdUseCase]
});`}
</Editor>
<_Heading level={3} id={"get-entry-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>GetEntryUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/entry`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { GetEntryUseCase } from "webiny/api/cms/entry";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`GetEntryUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface GetEntryUseCase.Interface {
    execute<T extends CmsEntryValues>(
        model: CmsModel,
        params: CmsEntryGetParams
    ): Promise<Result<CmsEntry<T>, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace GetEntryUseCase {
  type Interface = IGetEntryUseCase;
  type Error = UseCaseError;
  type Params = CmsEntryGetParams;
  type Return = Promise<Result<CmsEntry<T>, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { GetEntryUseCase } from "webiny/api/cms/entry";

class MyImpl implements MyUseCase.Interface {
  public constructor(private getEntryUseCase: GetEntryUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.getEntryUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [GetEntryUseCase]
});`}
</Editor>
<_Heading level={3} id={"get-latest-deleted-revision-by-entry-id-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>GetLatestDeletedRevisionByEntryIdUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/entry`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { GetLatestDeletedRevisionByEntryIdUseCase } from "webiny/api/cms/entry";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`GetLatestDeletedRevisionByEntryIdUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface GetLatestDeletedRevisionByEntryIdUseCase.Interface {
    execute<T extends CmsEntryValues>(
        model: CmsModel,
        params: CmsEntryStorageOperationsGetLatestRevisionParams
    ): Promise<Result<CmsEntry<T>, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace GetLatestDeletedRevisionByEntryIdUseCase {
  type Interface = IGetLatestRevisionByEntryIdBaseUseCase;
  type Params = CmsEntryStorageOperationsGetLatestRevisionParams;
  type Error = UseCaseError;
  type Return = Promise<Result<CmsEntry<T>, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { GetLatestDeletedRevisionByEntryIdUseCase } from "webiny/api/cms/entry";

class MyImpl implements MyUseCase.Interface {
  public constructor(
    private getLatestDeletedRevisionByEntryIdUseCase: GetLatestDeletedRevisionByEntryIdUseCase.Interface
  ) {}

  public async execute(/* ... */): Promise<void> {
    await this.getLatestDeletedRevisionByEntryIdUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [GetLatestDeletedRevisionByEntryIdUseCase]
});`}
</Editor>
<_Heading level={3} id={"get-latest-entries-by-ids-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>GetLatestEntriesByIdsUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/entry`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { GetLatestEntriesByIdsUseCase } from "webiny/api/cms/entry";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`GetLatestEntriesByIdsUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface GetLatestEntriesByIdsUseCase.Interface {
    execute<T extends CmsEntryValues>(
        model: CmsModel,
        ids: string[]
    ): Promise<Result<CmsEntry<T>[], UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace GetLatestEntriesByIdsUseCase {
  type Interface = IGetLatestEntriesByIdsUseCase;
  type Error = UseCaseError;
  type Return = Promise<Result<CmsEntry<T>[], UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { GetLatestEntriesByIdsUseCase } from "webiny/api/cms/entry";

class MyImpl implements MyUseCase.Interface {
  public constructor(
    private getLatestEntriesByIdsUseCase: GetLatestEntriesByIdsUseCase.Interface
  ) {}

  public async execute(/* ... */): Promise<void> {
    await this.getLatestEntriesByIdsUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [GetLatestEntriesByIdsUseCase]
});`}
</Editor>
<_Heading level={3} id={"get-latest-revision-by-entry-id-base-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>GetLatestRevisionByEntryIdBaseUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/entry`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { GetLatestRevisionByEntryIdBaseUseCase } from "webiny/api/cms/entry";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`GetLatestRevisionByEntryIdBaseUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface GetLatestRevisionByEntryIdBaseUseCase.Interface {
    execute<T extends CmsEntryValues>(
        model: CmsModel,
        params: CmsEntryStorageOperationsGetLatestRevisionParams
    ): Promise<Result<CmsEntry<T>, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace GetLatestRevisionByEntryIdBaseUseCase {
  type Interface = IGetLatestRevisionByEntryIdBaseUseCase;
  type Params = CmsEntryStorageOperationsGetLatestRevisionParams;
  type Error = UseCaseError;
  type Return = Promise<Result<CmsEntry<T>, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { GetLatestRevisionByEntryIdBaseUseCase } from "webiny/api/cms/entry";

class MyImpl implements MyUseCase.Interface {
  public constructor(
    private getLatestRevisionByEntryIdBaseUseCase: GetLatestRevisionByEntryIdBaseUseCase.Interface
  ) {}

  public async execute(/* ... */): Promise<void> {
    await this.getLatestRevisionByEntryIdBaseUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [GetLatestRevisionByEntryIdBaseUseCase]
});`}
</Editor>
<_Heading level={3} id={"get-latest-revision-by-entry-id-including-deleted-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>GetLatestRevisionByEntryIdIncludingDeletedUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/entry`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { GetLatestRevisionByEntryIdIncludingDeletedUseCase } from "webiny/api/cms/entry";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`GetLatestRevisionByEntryIdIncludingDeletedUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface GetLatestRevisionByEntryIdIncludingDeletedUseCase.Interface {
    execute<T extends CmsEntryValues>(
        model: CmsModel,
        params: CmsEntryStorageOperationsGetLatestRevisionParams
    ): Promise<Result<CmsEntry<T>, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace GetLatestRevisionByEntryIdIncludingDeletedUseCase {
  type Interface = IGetLatestRevisionByEntryIdBaseUseCase;
  type Params = CmsEntryStorageOperationsGetLatestRevisionParams;
  type Error = UseCaseError;
  type Return = Promise<Result<CmsEntry<T>, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { GetLatestRevisionByEntryIdIncludingDeletedUseCase } from "webiny/api/cms/entry";

class MyImpl implements MyUseCase.Interface {
  public constructor(
    private getLatestRevisionByEntryIdIncludingDeletedUseCase: GetLatestRevisionByEntryIdIncludingDeletedUseCase.Interface
  ) {}

  public async execute(/* ... */): Promise<void> {
    await this.getLatestRevisionByEntryIdIncludingDeletedUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [GetLatestRevisionByEntryIdIncludingDeletedUseCase]
});`}
</Editor>
<_Heading level={3} id={"get-latest-revision-by-entry-id-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>GetLatestRevisionByEntryIdUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/entry`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { GetLatestRevisionByEntryIdUseCase } from "webiny/api/cms/entry";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`GetLatestRevisionByEntryIdUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface GetLatestRevisionByEntryIdUseCase.Interface {
    execute<T extends CmsEntryValues>(
        model: CmsModel,
        params: CmsEntryStorageOperationsGetLatestRevisionParams
    ): Promise<Result<CmsEntry<T>, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace GetLatestRevisionByEntryIdUseCase {
  type Interface = IGetLatestRevisionByEntryIdBaseUseCase;
  type Params = CmsEntryStorageOperationsGetLatestRevisionParams;
  type Error = UseCaseError;
  type Return = Promise<Result<CmsEntry<T>, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { GetLatestRevisionByEntryIdUseCase } from "webiny/api/cms/entry";

class MyImpl implements MyUseCase.Interface {
  public constructor(
    private getLatestRevisionByEntryIdUseCase: GetLatestRevisionByEntryIdUseCase.Interface
  ) {}

  public async execute(/* ... */): Promise<void> {
    await this.getLatestRevisionByEntryIdUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [GetLatestRevisionByEntryIdUseCase]
});`}
</Editor>
<_Heading level={3} id={"get-previous-revision-by-entry-id-base-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>GetPreviousRevisionByEntryIdBaseUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/entry`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { GetPreviousRevisionByEntryIdBaseUseCase } from "webiny/api/cms/entry";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`GetPreviousRevisionByEntryIdBaseUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface GetPreviousRevisionByEntryIdBaseUseCase.Interface {
    execute<T extends CmsEntryValues>(
        model: CmsModel,
        params: CmsEntryStorageOperationsGetPreviousRevisionParams
    ): Promise<Result<CmsEntry<T>, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace GetPreviousRevisionByEntryIdBaseUseCase {
  type Interface = IGetPreviousRevisionByEntryIdBaseUseCase;
  type Params = CmsEntryStorageOperationsGetPreviousRevisionParams;
  type Error = UseCaseError;
  type Return = Promise<Result<CmsEntry<T>, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { GetPreviousRevisionByEntryIdBaseUseCase } from "webiny/api/cms/entry";

class MyImpl implements MyUseCase.Interface {
  public constructor(
    private getPreviousRevisionByEntryIdBaseUseCase: GetPreviousRevisionByEntryIdBaseUseCase.Interface
  ) {}

  public async execute(/* ... */): Promise<void> {
    await this.getPreviousRevisionByEntryIdBaseUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [GetPreviousRevisionByEntryIdBaseUseCase]
});`}
</Editor>
<_Heading level={3} id={"get-previous-revision-by-entry-id-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>GetPreviousRevisionByEntryIdUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/entry`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { GetPreviousRevisionByEntryIdUseCase } from "webiny/api/cms/entry";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`GetPreviousRevisionByEntryIdUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface GetPreviousRevisionByEntryIdUseCase.Interface {
    execute<T extends CmsEntryValues>(
        model: CmsModel,
        params: CmsEntryStorageOperationsGetPreviousRevisionParams
    ): Promise<Result<CmsEntry<T>, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace GetPreviousRevisionByEntryIdUseCase {
  type Interface = IGetPreviousRevisionByEntryIdBaseUseCase;
  type Params = CmsEntryStorageOperationsGetPreviousRevisionParams;
  type Error = UseCaseError;
  type Return = Promise<Result<CmsEntry<T>, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { GetPreviousRevisionByEntryIdUseCase } from "webiny/api/cms/entry";

class MyImpl implements MyUseCase.Interface {
  public constructor(
    private getPreviousRevisionByEntryIdUseCase: GetPreviousRevisionByEntryIdUseCase.Interface
  ) {}

  public async execute(/* ... */): Promise<void> {
    await this.getPreviousRevisionByEntryIdUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [GetPreviousRevisionByEntryIdUseCase]
});`}
</Editor>
<_Heading level={3} id={"get-published-entries-by-ids-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>GetPublishedEntriesByIdsUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/entry`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { GetPublishedEntriesByIdsUseCase } from "webiny/api/cms/entry";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`GetPublishedEntriesByIdsUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface GetPublishedEntriesByIdsUseCase.Interface {
    execute<T extends CmsEntryValues>(
        model: CmsModel,
        ids: string[]
    ): Promise<Result<CmsEntry<T>[], UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace GetPublishedEntriesByIdsUseCase {
  type Interface = IGetPublishedEntriesByIdsUseCase;
  type Error = UseCaseError;
  type Return = Promise<Result<CmsEntry<T>[], UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { GetPublishedEntriesByIdsUseCase } from "webiny/api/cms/entry";

class MyImpl implements MyUseCase.Interface {
  public constructor(
    private getPublishedEntriesByIdsUseCase: GetPublishedEntriesByIdsUseCase.Interface
  ) {}

  public async execute(/* ... */): Promise<void> {
    await this.getPublishedEntriesByIdsUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [GetPublishedEntriesByIdsUseCase]
});`}
</Editor>
<_Heading level={3} id={"get-published-revision-by-entry-id-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>GetPublishedRevisionByEntryIdUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/entry`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { GetPublishedRevisionByEntryIdUseCase } from "webiny/api/cms/entry";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`GetPublishedRevisionByEntryIdUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface GetPublishedRevisionByEntryIdUseCase.Interface {
    execute<T extends CmsEntryValues = CmsEntryValues>(
        model: CmsModel,
        entryId: string
    ): Promise<Result<CmsEntry<T> | null, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace GetPublishedRevisionByEntryIdUseCase {
  type Interface = IGetPublishedRevisionByEntryIdUseCase;
  type Error = UseCaseError;
  type Return = Promise<Result<CmsEntry<T> | null, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { GetPublishedRevisionByEntryIdUseCase } from "webiny/api/cms/entry";

class MyImpl implements MyUseCase.Interface {
  public constructor(
    private getPublishedRevisionByEntryIdUseCase: GetPublishedRevisionByEntryIdUseCase.Interface
  ) {}

  public async execute(/* ... */): Promise<void> {
    await this.getPublishedRevisionByEntryIdUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [GetPublishedRevisionByEntryIdUseCase]
});`}
</Editor>
<_Heading level={3} id={"get-revision-by-id-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>GetRevisionByIdUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/entry`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { GetRevisionByIdUseCase } from "webiny/api/cms/entry";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`GetRevisionByIdUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface GetRevisionByIdUseCase.Interface {
    execute<T extends CmsEntryValues = CmsEntryValues>(
        model: CmsModel,
        id: string
    ): Promise<Result<CmsEntry<T>, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace GetRevisionByIdUseCase {
  type Interface = IGetRevisionByIdUseCase;
  type Error = UseCaseError;
  type Return = Promise<Result<CmsEntry<T>, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { GetRevisionByIdUseCase } from "webiny/api/cms/entry";

class MyImpl implements MyUseCase.Interface {
  public constructor(private getRevisionByIdUseCase: GetRevisionByIdUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.getRevisionByIdUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [GetRevisionByIdUseCase]
});`}
</Editor>
<_Heading level={3} id={"get-revisions-by-entry-id-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>GetRevisionsByEntryIdUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/entry`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { GetRevisionsByEntryIdUseCase } from "webiny/api/cms/entry";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`GetRevisionsByEntryIdUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface GetRevisionsByEntryIdUseCase.Interface {
    execute<T extends CmsEntryValues>(
        model: CmsModel,
        entryId: string
    ): Promise<Result<CmsEntry<T>[], UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace GetRevisionsByEntryIdUseCase {
  type Interface = IGetRevisionsByEntryIdUseCase;
  type Error = UseCaseError;
  type Return = Promise<Result<CmsEntry<T>[], UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { GetRevisionsByEntryIdUseCase } from "webiny/api/cms/entry";

class MyImpl implements MyUseCase.Interface {
  public constructor(
    private getRevisionsByEntryIdUseCase: GetRevisionsByEntryIdUseCase.Interface
  ) {}

  public async execute(/* ... */): Promise<void> {
    await this.getRevisionsByEntryIdUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [GetRevisionsByEntryIdUseCase]
});`}
</Editor>
<_Heading level={3} id={"get-singleton-entry-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>GetSingletonEntryUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/entry`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { GetSingletonEntryUseCase } from "webiny/api/cms/entry";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`GetSingletonEntryUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface GetSingletonEntryUseCase.Interface {
    execute<T extends CmsEntryValues = CmsEntryValues>(
        model: CmsModel
    ): Promise<Result<CmsEntry<T>, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace GetSingletonEntryUseCase {
  type Interface = IGetSingletonEntryUseCase;
  type Error = UseCaseError;
  type Return = Promise<Result<CmsEntry<T>, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { GetSingletonEntryUseCase } from "webiny/api/cms/entry";

class MyImpl implements MyUseCase.Interface {
  public constructor(private getSingletonEntryUseCase: GetSingletonEntryUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.getSingletonEntryUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [GetSingletonEntryUseCase]
});`}
</Editor>
<_Heading level={3} id={"list-deleted-entries-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>ListDeletedEntriesUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/entry`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { ListDeletedEntriesUseCase } from "webiny/api/cms/entry";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`ListDeletedEntriesUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface ListDeletedEntriesUseCase.Interface {
    execute<T extends CmsEntryValues>(
        model: CmsModel,
        params?: CmsEntryListParams
    ): Promise<Result<IListEntriesResult<T>, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace ListDeletedEntriesUseCase {
  type Interface = IListDeletedEntriesUseCase;
  type Params = CmsEntryListParams;
  type Return = Promise<Result<IListEntriesResult<T>, UseCaseError>>;
  type Error = UseCaseError;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { ListDeletedEntriesUseCase } from "webiny/api/cms/entry";

class MyImpl implements MyUseCase.Interface {
  public constructor(private listDeletedEntriesUseCase: ListDeletedEntriesUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.listDeletedEntriesUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [ListDeletedEntriesUseCase]
});`}
</Editor>
<_Heading level={3} id={"list-entries-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>ListEntriesUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/entry`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { ListEntriesUseCase } from "webiny/api/cms/entry";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`ListEntriesUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface ListEntriesUseCase.Interface {
    execute<T extends CmsEntryValues>(
        model: CmsModel,
        params?: CmsEntryListParams
    ): Promise<Result<IListEntriesResult<T>, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace ListEntriesUseCase {
  type Interface = IListEntriesUseCase;
  type Params = CmsEntryListParams;
  type Return = Promise<Result<IListEntriesResult<T>, UseCaseError>>;
  type Error = UseCaseError;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { ListEntriesUseCase } from "webiny/api/cms/entry";

class MyImpl implements MyUseCase.Interface {
  public constructor(private listEntriesUseCase: ListEntriesUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.listEntriesUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [ListEntriesUseCase]
});`}
</Editor>
<_Heading level={3} id={"list-latest-entries-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>ListLatestEntriesUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/entry`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { ListLatestEntriesUseCase } from "webiny/api/cms/entry";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`ListLatestEntriesUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface ListLatestEntriesUseCase.Interface {
    execute<T extends CmsEntryValues>(
        model: CmsModel,
        params?: CmsEntryListParams
    ): Promise<Result<IListEntriesResult<T>, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace ListLatestEntriesUseCase {
  type Interface = IListLatestEntriesUseCase;
  type Params = CmsEntryListParams;
  type Return = Promise<Result<IListEntriesResult<T>, UseCaseError>>;
  type Error = UseCaseError;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { ListLatestEntriesUseCase } from "webiny/api/cms/entry";

class MyImpl implements MyUseCase.Interface {
  public constructor(private listLatestEntriesUseCase: ListLatestEntriesUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.listLatestEntriesUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [ListLatestEntriesUseCase]
});`}
</Editor>
<_Heading level={3} id={"list-published-entries-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>ListPublishedEntriesUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/entry`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { ListPublishedEntriesUseCase } from "webiny/api/cms/entry";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`ListPublishedEntriesUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface ListPublishedEntriesUseCase.Interface {
    execute<T extends CmsEntryValues>(
        model: CmsModel,
        params?: CmsEntryListParams
    ): Promise<Result<IListEntriesResult<T>, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace ListPublishedEntriesUseCase {
  type Interface = IListPublishedEntriesUseCase;
  type Params = CmsEntryListParams;
  type Return = Promise<Result<IListEntriesResult<T>, UseCaseError>>;
  type Error = UseCaseError;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { ListPublishedEntriesUseCase } from "webiny/api/cms/entry";

class MyImpl implements MyUseCase.Interface {
  public constructor(private listPublishedEntriesUseCase: ListPublishedEntriesUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.listPublishedEntriesUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [ListPublishedEntriesUseCase]
});`}
</Editor>
<_Heading level={3} id={"move-entry-to-bin-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>MoveEntryToBinUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/entry`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { MoveEntryToBinUseCase } from "webiny/api/cms/entry";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`MoveEntryToBinUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface MoveEntryToBinUseCase.Interface {
    execute(model: CmsModel, id: string): Promise<Result<void, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace MoveEntryToBinUseCase {
  type Interface = IMoveEntryToBinUseCase;
  type Error = UseCaseError;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { MoveEntryToBinUseCase } from "webiny/api/cms/entry";

class MyImpl implements MyUseCase.Interface {
  public constructor(private moveEntryToBinUseCase: MoveEntryToBinUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.moveEntryToBinUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [MoveEntryToBinUseCase]
});`}
</Editor>
<_Heading level={3} id={"move-entry-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>MoveEntryUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/entry`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { MoveEntryUseCase } from "webiny/api/cms/entry";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`MoveEntryUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface MoveEntryUseCase.Interface {
    execute<T extends CmsEntryValues = CmsEntryValues>(
        model: CmsModel,
        id: string,
        folderId: string
    ): Promise<Result<CmsEntry<T>, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace MoveEntryUseCase {
  type Interface = IMoveEntryUseCase;
  type Error = UseCaseError;
  type Return = Promise<Result<CmsEntry<T>, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { MoveEntryUseCase } from "webiny/api/cms/entry";

class MyImpl implements MyUseCase.Interface {
  public constructor(private moveEntryUseCase: MoveEntryUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.moveEntryUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [MoveEntryUseCase]
});`}
</Editor>
<_Heading level={3} id={"publish-entry-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>PublishEntryUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/entry`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { PublishEntryUseCase } from "webiny/api/cms/entry";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`PublishEntryUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface PublishEntryUseCase.Interface {
    execute<T extends CmsEntryValues = CmsEntryValues>(
        model: CmsModel,
        id: string
    ): Promise<Result<CmsEntry<T>, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace PublishEntryUseCase {
  type Interface = IPublishEntryUseCase;
  type Error = UseCaseError;
  type Return = Promise<Result<CmsEntry<T>, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { PublishEntryUseCase } from "webiny/api/cms/entry";

class MyImpl implements MyUseCase.Interface {
  public constructor(private publishEntryUseCase: PublishEntryUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.publishEntryUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [PublishEntryUseCase]
});`}
</Editor>
<_Heading level={3} id={"republish-entry-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>RepublishEntryUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/entry`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { RepublishEntryUseCase } from "webiny/api/cms/entry";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`RepublishEntryUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface RepublishEntryUseCase.Interface {
    execute<T extends CmsEntryValues = CmsEntryValues>(
        model: CmsModel,
        id: string
    ): Promise<Result<CmsEntry<T>, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace RepublishEntryUseCase {
  type Interface = IRepublishEntryUseCase;
  type Error = UseCaseError;
  type Return = Promise<Result<CmsEntry<T>, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { RepublishEntryUseCase } from "webiny/api/cms/entry";

class MyImpl implements MyUseCase.Interface {
  public constructor(private republishEntryUseCase: RepublishEntryUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.republishEntryUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [RepublishEntryUseCase]
});`}
</Editor>
<_Heading level={3} id={"restore-entry-from-bin-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>RestoreEntryFromBinUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/entry`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { RestoreEntryFromBinUseCase } from "webiny/api/cms/entry";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`RestoreEntryFromBinUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface RestoreEntryFromBinUseCase.Interface {
    execute<T extends CmsEntryValues = CmsEntryValues>(
        model: CmsModel,
        id: string
    ): Promise<Result<CmsEntry<T>, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace RestoreEntryFromBinUseCase {
  type Interface = IRestoreEntryFromBinUseCase;
  type Error = UseCaseError;
  type Return = Promise<Result<CmsEntry<T>, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { RestoreEntryFromBinUseCase } from "webiny/api/cms/entry";

class MyImpl implements MyUseCase.Interface {
  public constructor(private restoreEntryFromBinUseCase: RestoreEntryFromBinUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.restoreEntryFromBinUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [RestoreEntryFromBinUseCase]
});`}
</Editor>
<_Heading level={3} id={"unpublish-entry-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>UnpublishEntryUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/entry`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { UnpublishEntryUseCase } from "webiny/api/cms/entry";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`UnpublishEntryUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface UnpublishEntryUseCase.Interface {
    execute<T extends CmsEntryValues = CmsEntryValues>(
        model: CmsModel,
        id: string
    ): Promise<Result<CmsEntry<T>, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace UnpublishEntryUseCase {
  type Interface = IUnpublishEntryUseCase;
  type Error = UseCaseError;
  type Return = Promise<Result<CmsEntry<T>, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { UnpublishEntryUseCase } from "webiny/api/cms/entry";

class MyImpl implements MyUseCase.Interface {
  public constructor(private unpublishEntryUseCase: UnpublishEntryUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.unpublishEntryUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [UnpublishEntryUseCase]
});`}
</Editor>
<_Heading level={3} id={"update-entry-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>UpdateEntryUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/entry`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { UpdateEntryUseCase } from "webiny/api/cms/entry";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`UpdateEntryUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface UpdateEntryUseCase.Interface {
    execute<T extends CmsEntryValues = CmsEntryValues>(
        model: CmsModel,
        id: string,
        input: UpdateCmsEntryInput<T>,
        metaInput?: GenericRecord,
        options?: UpdateCmsEntryOptionsInput
    ): Promise<Result<CmsEntry<T>, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace UpdateEntryUseCase {
  type Interface = IUpdateEntryUseCase;
  type Input = UpdateCmsEntryInput<T>;
  type Meta = GenericRecord;
  type Options = UpdateCmsEntryOptionsInput;
  type Error = UseCaseError;
  type Return = Promise<Result<CmsEntry<T>, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { UpdateEntryUseCase } from "webiny/api/cms/entry";

class MyImpl implements MyUseCase.Interface {
  public constructor(private updateEntryUseCase: UpdateEntryUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.updateEntryUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [UpdateEntryUseCase]
});`}
</Editor>
<_Heading level={3} id={"update-singleton-entry-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>UpdateSingletonEntryUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/entry`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { UpdateSingletonEntryUseCase } from "webiny/api/cms/entry";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`UpdateSingletonEntryUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface UpdateSingletonEntryUseCase.Interface {
    execute<T extends CmsEntryValues = CmsEntryValues>(
        model: CmsModel,
        data: UpdateCmsEntryInput<T>,
        options?: UpdateCmsEntryOptionsInput
    ): Promise<Result<CmsEntry<T>, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace UpdateSingletonEntryUseCase {
  type Interface = IUpdateSingletonEntryUseCase;
  type Input = UpdateCmsEntryInput<T>;
  type Options = UpdateCmsEntryOptionsInput;
  type Error = UseCaseError;
  type Return = Promise<Result<CmsEntry<T>, UseCaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { UpdateSingletonEntryUseCase } from "webiny/api/cms/entry";

class MyImpl implements MyUseCase.Interface {
  public constructor(private updateSingletonEntryUseCase: UpdateSingletonEntryUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.updateSingletonEntryUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [UpdateSingletonEntryUseCase]
});`}
</Editor>
<_Heading level={3} id={"validate-entry-use-case"} nextElement={{
      "type": "paragraph"
    }}><code>ValidateEntryUseCase</code></_Heading>
<p><strong parentName="p">{`Use Case Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/entry`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { ValidateEntryUseCase } from "webiny/api/cms/entry";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`ValidateEntryUseCase.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface ValidateEntryUseCase.Interface {
    execute<T extends CmsEntryValues = CmsEntryValues>(
        model: CmsModel,
        id: string | null | undefined,
        input: UpdateCmsEntryInput<T>
    ): IValidateEntryUseCaseExecuteResult;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace ValidateEntryUseCase {
  type Interface = IValidateEntryUseCase;
  type Input = UpdateCmsEntryInput<T>;
  type Error = UseCaseError;
  type Return = IValidateEntryUseCaseExecuteResult;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { ValidateEntryUseCase } from "webiny/api/cms/entry";

class MyImpl implements MyUseCase.Interface {
  public constructor(private validateEntryUseCase: ValidateEntryUseCase.Interface) {}

  public async execute(/* ... */): Promise<void> {
    this.validateEntryUseCase.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [ValidateEntryUseCase]
});`}
</Editor>
<_Heading level={2} id={"event-handlers"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Event Handlers</_Heading>
<_Heading level={3} id={"entry-after-create-event-handler"} nextElement={{
      "type": "paragraph"
    }}><code>EntryAfterCreateEventHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/entry`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { EntryAfterCreateEventHandler } from "webiny/api/cms/entry";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`EntryAfterCreateEventHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface EntryAfterCreateEventHandler.Interface {
    handle(event: EntryAfterCreateEvent): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Event payload `}<inlineCode parentName="strong">{`EntryAfterCreateEventPayload`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface EntryAfterCreateEventPayload {
  entry: CmsEntry;
  input: CreateCmsEntryInput;
  model: CmsModel;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace EntryAfterCreateEventHandler {
  type Interface = IEventHandler<EntryAfterCreateEvent>;
  type Event = EntryAfterCreateEvent;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { EntryAfterCreateEventHandler } from "webiny/api/cms/entry";

class MyHandler implements EntryAfterCreateEventHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: EntryAfterCreateEventHandler.Event): Promise<void> {
    const { entry, input, model } = event.payload;
  }
}

export default EntryAfterCreateEventHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"entry-after-delete-event-handler"} nextElement={{
      "type": "paragraph"
    }}><code>EntryAfterDeleteEventHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/entry`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { EntryAfterDeleteEventHandler } from "webiny/api/cms/entry";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`EntryAfterDeleteEventHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface EntryAfterDeleteEventHandler.Interface {
    handle(event: EntryAfterDeleteEvent): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace EntryAfterDeleteEventHandler {
  type Interface = IEventHandler<EntryAfterDeleteEvent>;
  type Event = EntryAfterDeleteEvent;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { EntryAfterDeleteEventHandler } from "webiny/api/cms/entry";

class MyHandler implements EntryAfterDeleteEventHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: EntryAfterDeleteEventHandler.Event): Promise<void> {
    // implementation
  }
}

export default EntryAfterDeleteEventHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"entry-after-delete-multiple-event-handler"} nextElement={{
      "type": "paragraph"
    }}><code>EntryAfterDeleteMultipleEventHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/entry`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { EntryAfterDeleteMultipleEventHandler } from "webiny/api/cms/entry";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`EntryAfterDeleteMultipleEventHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface EntryAfterDeleteMultipleEventHandler.Interface {
    handle(event: EntryAfterDeleteMultipleEvent): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace EntryAfterDeleteMultipleEventHandler {
  type Interface = IEventHandler<EntryAfterDeleteMultipleEvent>;
  type Event = EntryAfterDeleteMultipleEvent;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { EntryAfterDeleteMultipleEventHandler } from "webiny/api/cms/entry";

class MyHandler implements EntryAfterDeleteMultipleEventHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: EntryAfterDeleteMultipleEventHandler.Event): Promise<void> {
    // implementation
  }
}

export default EntryAfterDeleteMultipleEventHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"entry-after-move-event-handler"} nextElement={{
      "type": "paragraph"
    }}><code>EntryAfterMoveEventHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/entry`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { EntryAfterMoveEventHandler } from "webiny/api/cms/entry";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`EntryAfterMoveEventHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface EntryAfterMoveEventHandler.Interface {
    handle(event: EntryAfterMoveEvent): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace EntryAfterMoveEventHandler {
  type Interface = IEventHandler<EntryAfterMoveEvent>;
  type Event = EntryAfterMoveEvent;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { EntryAfterMoveEventHandler } from "webiny/api/cms/entry";

class MyHandler implements EntryAfterMoveEventHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: EntryAfterMoveEventHandler.Event): Promise<void> {
    // implementation
  }
}

export default EntryAfterMoveEventHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"entry-after-publish-event-handler"} nextElement={{
      "type": "paragraph"
    }}><code>EntryAfterPublishEventHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/entry`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { EntryAfterPublishEventHandler } from "webiny/api/cms/entry";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`EntryAfterPublishEventHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface EntryAfterPublishEventHandler.Interface {
    handle(event: EntryAfterPublishEvent): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace EntryAfterPublishEventHandler {
  type Interface = IEventHandler<EntryAfterPublishEvent>;
  type Event = EntryAfterPublishEvent;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { EntryAfterPublishEventHandler } from "webiny/api/cms/entry";

class MyHandler implements EntryAfterPublishEventHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: EntryAfterPublishEventHandler.Event): Promise<void> {
    // implementation
  }
}

export default EntryAfterPublishEventHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"entry-after-republish-event-handler"} nextElement={{
      "type": "paragraph"
    }}><code>EntryAfterRepublishEventHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/entry`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { EntryAfterRepublishEventHandler } from "webiny/api/cms/entry";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`EntryAfterRepublishEventHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface EntryAfterRepublishEventHandler.Interface {
    handle(event: EntryAfterRepublishEvent): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace EntryAfterRepublishEventHandler {
  type Interface = IEventHandler<EntryAfterRepublishEvent>;
  type Event = EntryAfterRepublishEvent;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { EntryAfterRepublishEventHandler } from "webiny/api/cms/entry";

class MyHandler implements EntryAfterRepublishEventHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: EntryAfterRepublishEventHandler.Event): Promise<void> {
    // implementation
  }
}

export default EntryAfterRepublishEventHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"entry-after-restore-from-bin-event-handler"} nextElement={{
      "type": "paragraph"
    }}><code>EntryAfterRestoreFromBinEventHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/entry`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { EntryAfterRestoreFromBinEventHandler } from "webiny/api/cms/entry";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`EntryAfterRestoreFromBinEventHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface EntryAfterRestoreFromBinEventHandler.Interface {
    handle(event: EntryAfterRestoreFromBinEvent): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace EntryAfterRestoreFromBinEventHandler {
  type Interface = IEventHandler<EntryAfterRestoreFromBinEvent>;
  type Event = EntryAfterRestoreFromBinEvent;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { EntryAfterRestoreFromBinEventHandler } from "webiny/api/cms/entry";

class MyHandler implements EntryAfterRestoreFromBinEventHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: EntryAfterRestoreFromBinEventHandler.Event): Promise<void> {
    // implementation
  }
}

export default EntryAfterRestoreFromBinEventHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"entry-after-unpublish-event-handler"} nextElement={{
      "type": "paragraph"
    }}><code>EntryAfterUnpublishEventHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/entry`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { EntryAfterUnpublishEventHandler } from "webiny/api/cms/entry";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`EntryAfterUnpublishEventHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface EntryAfterUnpublishEventHandler.Interface {
    handle(event: EntryAfterUnpublishEvent): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Event payload `}<inlineCode parentName="strong">{`EntryAfterUnpublishEventPayload`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface EntryAfterUnpublishEventPayload {
  entry: CmsEntry;
  storageEntry: any;
  model: CmsModel;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace EntryAfterUnpublishEventHandler {
  type Interface = IEventHandler<EntryAfterUnpublishEvent>;
  type Event = EntryAfterUnpublishEvent;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { EntryAfterUnpublishEventHandler } from "webiny/api/cms/entry";

class MyHandler implements EntryAfterUnpublishEventHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: EntryAfterUnpublishEventHandler.Event): Promise<void> {
    const { entry, storageEntry, model } = event.payload;
  }
}

export default EntryAfterUnpublishEventHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"entry-after-update-event-handler"} nextElement={{
      "type": "paragraph"
    }}><code>EntryAfterUpdateEventHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/entry`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { EntryAfterUpdateEventHandler } from "webiny/api/cms/entry";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`EntryAfterUpdateEventHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface EntryAfterUpdateEventHandler.Interface {
    handle(event: EntryAfterUpdateEvent): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Event payload `}<inlineCode parentName="strong">{`EntryAfterUpdateEventPayload`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface EntryAfterUpdateEventPayload {
  entry: CmsEntry;
  original: CmsEntry;
  input: UpdateCmsEntryInput;
  model: CmsModel;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace EntryAfterUpdateEventHandler {
  type Interface = IEventHandler<EntryAfterUpdateEvent>;
  type Event = EntryAfterUpdateEvent;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { EntryAfterUpdateEventHandler } from "webiny/api/cms/entry";

class MyHandler implements EntryAfterUpdateEventHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: EntryAfterUpdateEventHandler.Event): Promise<void> {
    const { entry, original, input, model } = event.payload;
  }
}

export default EntryAfterUpdateEventHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"entry-before-create-event-handler"} nextElement={{
      "type": "paragraph"
    }}><code>EntryBeforeCreateEventHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/entry`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { EntryBeforeCreateEventHandler } from "webiny/api/cms/entry";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`EntryBeforeCreateEventHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface EntryBeforeCreateEventHandler.Interface {
    handle(event: EntryBeforeCreateEvent): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Event payload `}<inlineCode parentName="strong">{`EntryBeforeCreateEventPayload`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface EntryBeforeCreateEventPayload {
  entry: CmsEntry;
  input: CreateCmsEntryInput;
  model: CmsModel;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace EntryBeforeCreateEventHandler {
  type Interface = IEventHandler<EntryBeforeCreateEvent>;
  type Event = EntryBeforeCreateEvent;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { EntryBeforeCreateEventHandler } from "webiny/api/cms/entry";

class MyHandler implements EntryBeforeCreateEventHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: EntryBeforeCreateEventHandler.Event): Promise<void> {
    const { entry, input, model } = event.payload;
  }
}

export default EntryBeforeCreateEventHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"entry-before-delete-event-handler"} nextElement={{
      "type": "paragraph"
    }}><code>EntryBeforeDeleteEventHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/entry`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { EntryBeforeDeleteEventHandler } from "webiny/api/cms/entry";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`EntryBeforeDeleteEventHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface EntryBeforeDeleteEventHandler.Interface {
    handle(event: EntryBeforeDeleteEvent): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace EntryBeforeDeleteEventHandler {
  type Interface = IEventHandler<EntryBeforeDeleteEvent>;
  type Event = EntryBeforeDeleteEvent;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { EntryBeforeDeleteEventHandler } from "webiny/api/cms/entry";

class MyHandler implements EntryBeforeDeleteEventHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: EntryBeforeDeleteEventHandler.Event): Promise<void> {
    // implementation
  }
}

export default EntryBeforeDeleteEventHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"entry-before-delete-multiple-event-handler"} nextElement={{
      "type": "paragraph"
    }}><code>EntryBeforeDeleteMultipleEventHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/entry`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { EntryBeforeDeleteMultipleEventHandler } from "webiny/api/cms/entry";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`EntryBeforeDeleteMultipleEventHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface EntryBeforeDeleteMultipleEventHandler.Interface {
    handle(event: EntryBeforeDeleteMultipleEvent): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace EntryBeforeDeleteMultipleEventHandler {
  type Interface = IEventHandler<EntryBeforeDeleteMultipleEvent>;
  type Event = EntryBeforeDeleteMultipleEvent;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { EntryBeforeDeleteMultipleEventHandler } from "webiny/api/cms/entry";

class MyHandler implements EntryBeforeDeleteMultipleEventHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: EntryBeforeDeleteMultipleEventHandler.Event): Promise<void> {
    // implementation
  }
}

export default EntryBeforeDeleteMultipleEventHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"entry-before-move-event-handler"} nextElement={{
      "type": "paragraph"
    }}><code>EntryBeforeMoveEventHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/entry`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { EntryBeforeMoveEventHandler } from "webiny/api/cms/entry";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`EntryBeforeMoveEventHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface EntryBeforeMoveEventHandler.Interface {
    handle(event: EntryBeforeMoveEvent): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace EntryBeforeMoveEventHandler {
  type Interface = IEventHandler<EntryBeforeMoveEvent>;
  type Event = EntryBeforeMoveEvent;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { EntryBeforeMoveEventHandler } from "webiny/api/cms/entry";

class MyHandler implements EntryBeforeMoveEventHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: EntryBeforeMoveEventHandler.Event): Promise<void> {
    // implementation
  }
}

export default EntryBeforeMoveEventHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"entry-before-publish-event-handler"} nextElement={{
      "type": "paragraph"
    }}><code>EntryBeforePublishEventHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/entry`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { EntryBeforePublishEventHandler } from "webiny/api/cms/entry";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`EntryBeforePublishEventHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface EntryBeforePublishEventHandler.Interface {
    handle(event: EntryBeforePublishEvent): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace EntryBeforePublishEventHandler {
  type Interface = IEventHandler<EntryBeforePublishEvent>;
  type Event = EntryBeforePublishEvent;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { EntryBeforePublishEventHandler } from "webiny/api/cms/entry";

class MyHandler implements EntryBeforePublishEventHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: EntryBeforePublishEventHandler.Event): Promise<void> {
    // implementation
  }
}

export default EntryBeforePublishEventHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"entry-before-republish-event-handler"} nextElement={{
      "type": "paragraph"
    }}><code>EntryBeforeRepublishEventHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/entry`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { EntryBeforeRepublishEventHandler } from "webiny/api/cms/entry";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`EntryBeforeRepublishEventHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface EntryBeforeRepublishEventHandler.Interface {
    handle(event: EntryBeforeRepublishEvent): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace EntryBeforeRepublishEventHandler {
  type Interface = IEventHandler<EntryBeforeRepublishEvent>;
  type Event = EntryBeforeRepublishEvent;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { EntryBeforeRepublishEventHandler } from "webiny/api/cms/entry";

class MyHandler implements EntryBeforeRepublishEventHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: EntryBeforeRepublishEventHandler.Event): Promise<void> {
    // implementation
  }
}

export default EntryBeforeRepublishEventHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"entry-before-restore-from-bin-event-handler"} nextElement={{
      "type": "paragraph"
    }}><code>EntryBeforeRestoreFromBinEventHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/entry`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { EntryBeforeRestoreFromBinEventHandler } from "webiny/api/cms/entry";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`EntryBeforeRestoreFromBinEventHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface EntryBeforeRestoreFromBinEventHandler.Interface {
    handle(event: EntryBeforeRestoreFromBinEvent): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace EntryBeforeRestoreFromBinEventHandler {
  type Interface = IEventHandler<EntryBeforeRestoreFromBinEvent>;
  type Event = EntryBeforeRestoreFromBinEvent;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { EntryBeforeRestoreFromBinEventHandler } from "webiny/api/cms/entry";

class MyHandler implements EntryBeforeRestoreFromBinEventHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: EntryBeforeRestoreFromBinEventHandler.Event): Promise<void> {
    // implementation
  }
}

export default EntryBeforeRestoreFromBinEventHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"entry-before-unpublish-event-handler"} nextElement={{
      "type": "paragraph"
    }}><code>EntryBeforeUnpublishEventHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/entry`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { EntryBeforeUnpublishEventHandler } from "webiny/api/cms/entry";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`EntryBeforeUnpublishEventHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface EntryBeforeUnpublishEventHandler.Interface {
    handle(event: EntryBeforeUnpublishEvent): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Event payload `}<inlineCode parentName="strong">{`EntryBeforeUnpublishEventPayload`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface EntryBeforeUnpublishEventPayload {
  entry: CmsEntry;
  model: CmsModel;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace EntryBeforeUnpublishEventHandler {
  type Interface = IEventHandler<EntryBeforeUnpublishEvent>;
  type Event = EntryBeforeUnpublishEvent;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { EntryBeforeUnpublishEventHandler } from "webiny/api/cms/entry";

class MyHandler implements EntryBeforeUnpublishEventHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: EntryBeforeUnpublishEventHandler.Event): Promise<void> {
    const { entry, model } = event.payload;
  }
}

export default EntryBeforeUnpublishEventHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"entry-before-update-event-handler"} nextElement={{
      "type": "paragraph"
    }}><code>EntryBeforeUpdateEventHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/entry`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { EntryBeforeUpdateEventHandler } from "webiny/api/cms/entry";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`EntryBeforeUpdateEventHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface EntryBeforeUpdateEventHandler.Interface {
    handle(event: EntryBeforeUpdateEvent): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Event payload `}<inlineCode parentName="strong">{`EntryBeforeUpdateEventPayload`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface EntryBeforeUpdateEventPayload {
  entry: CmsEntry;
  original: CmsEntry;
  input: UpdateCmsEntryInput;
  model: CmsModel;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace EntryBeforeUpdateEventHandler {
  type Interface = IEventHandler<EntryBeforeUpdateEvent>;
  type Event = EntryBeforeUpdateEvent;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { EntryBeforeUpdateEventHandler } from "webiny/api/cms/entry";

class MyHandler implements EntryBeforeUpdateEventHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: EntryBeforeUpdateEventHandler.Event): Promise<void> {
    const { entry, original, input, model } = event.payload;
  }
}

export default EntryBeforeUpdateEventHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"entry-revision-after-create-event-handler"} nextElement={{
      "type": "paragraph"
    }}><code>EntryRevisionAfterCreateEventHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/entry`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { EntryRevisionAfterCreateEventHandler } from "webiny/api/cms/entry";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`EntryRevisionAfterCreateEventHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface EntryRevisionAfterCreateEventHandler.Interface {
    handle(event: EntryRevisionAfterCreateEvent): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace EntryRevisionAfterCreateEventHandler {
  type Interface = IEventHandler<EntryRevisionAfterCreateEvent>;
  type Event = EntryRevisionAfterCreateEvent;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { EntryRevisionAfterCreateEventHandler } from "webiny/api/cms/entry";

class MyHandler implements EntryRevisionAfterCreateEventHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: EntryRevisionAfterCreateEventHandler.Event): Promise<void> {
    // implementation
  }
}

export default EntryRevisionAfterCreateEventHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"entry-revision-after-delete-event-handler"} nextElement={{
      "type": "paragraph"
    }}><code>EntryRevisionAfterDeleteEventHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/entry`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { EntryRevisionAfterDeleteEventHandler } from "webiny/api/cms/entry";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`EntryRevisionAfterDeleteEventHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface EntryRevisionAfterDeleteEventHandler.Interface {
    handle(event: EntryRevisionAfterDeleteEvent): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace EntryRevisionAfterDeleteEventHandler {
  type Interface = IEventHandler<EntryRevisionAfterDeleteEvent>;
  type Event = EntryRevisionAfterDeleteEvent;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { EntryRevisionAfterDeleteEventHandler } from "webiny/api/cms/entry";

class MyHandler implements EntryRevisionAfterDeleteEventHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: EntryRevisionAfterDeleteEventHandler.Event): Promise<void> {
    // implementation
  }
}

export default EntryRevisionAfterDeleteEventHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"entry-revision-before-create-event-handler"} nextElement={{
      "type": "paragraph"
    }}><code>EntryRevisionBeforeCreateEventHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/entry`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { EntryRevisionBeforeCreateEventHandler } from "webiny/api/cms/entry";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`EntryRevisionBeforeCreateEventHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface EntryRevisionBeforeCreateEventHandler.Interface {
    handle(event: EntryRevisionBeforeCreateEvent): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace EntryRevisionBeforeCreateEventHandler {
  type Interface = IEventHandler<EntryRevisionBeforeCreateEvent>;
  type Event = EntryRevisionBeforeCreateEvent;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { EntryRevisionBeforeCreateEventHandler } from "webiny/api/cms/entry";

class MyHandler implements EntryRevisionBeforeCreateEventHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: EntryRevisionBeforeCreateEventHandler.Event): Promise<void> {
    // implementation
  }
}

export default EntryRevisionBeforeCreateEventHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={3} id={"entry-revision-before-delete-event-handler"} nextElement={{
      "type": "paragraph"
    }}><code>EntryRevisionBeforeDeleteEventHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/entry`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { EntryRevisionBeforeDeleteEventHandler } from "webiny/api/cms/entry";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`EntryRevisionBeforeDeleteEventHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface EntryRevisionBeforeDeleteEventHandler.Interface {
    handle(event: EntryRevisionBeforeDeleteEvent): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace EntryRevisionBeforeDeleteEventHandler {
  type Interface = IEventHandler<EntryRevisionBeforeDeleteEvent>;
  type Event = EntryRevisionBeforeDeleteEvent;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { EntryRevisionBeforeDeleteEventHandler } from "webiny/api/cms/entry";

class MyHandler implements EntryRevisionBeforeDeleteEventHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: EntryRevisionBeforeDeleteEventHandler.Event): Promise<void> {
    // implementation
  }
}

export default EntryRevisionBeforeDeleteEventHandler.createImplementation({
  implementation: MyHandler,
  dependencies: []
});`}
</Editor>
<_Heading level={2} id={"services"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Services</_Heading>
<_Heading level={3} id={"cms-sort-mapper"} nextElement={{
      "type": "paragraph"
    }}><code>CmsSortMapper</code></_Heading>
<p><strong parentName="p">{`Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/entry`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { CmsSortMapper } from "webiny/api/cms/entry";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`CmsSortMapper.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface CmsSortMapper.Interface {
    map(params: ICmsSortMapperParams): CmsEntryListSort | undefined;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace CmsSortMapper {
  type Interface = ICmsSortMapper;
  type Params = ICmsSortMapperParams;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { CmsSortMapper } from "webiny/api/cms/entry";

class MyImpl implements MyUseCase.Interface {
  public constructor(private cmsSortMapper: CmsSortMapper.Interface) {}

  public async execute(/* ... */): Promise<void> {
    this.cmsSortMapper.map(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [CmsSortMapper]
});`}
</Editor>
<_Heading level={3} id={"cms-where-mapper"} nextElement={{
      "type": "paragraph"
    }}><code>CmsWhereMapper</code></_Heading>
<p><strong parentName="p">{`Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/entry`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { CmsWhereMapper } from "webiny/api/cms/entry";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`CmsWhereMapper.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface CmsWhereMapper.Interface {
    map<T extends GenericRecord>(params: ICmsWhereMapperParams<T>): CmsEntryListWhere | undefined;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace CmsWhereMapper {
  type Interface = ICmsWhereMapper;
  type Params = ICmsWhereMapperParams<T>;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { CmsWhereMapper } from "webiny/api/cms/entry";

class MyImpl implements MyUseCase.Interface {
  public constructor(private cmsWhereMapper: CmsWhereMapper.Interface) {}

  public async execute(/* ... */): Promise<void> {
    this.cmsWhereMapper.map(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [CmsWhereMapper]
});`}
</Editor>
<_Heading level={2} id={"types-and-classes"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Types &amp; Classes</_Heading>
<_Heading level={3} id={"cms-entry"} nextElement={{
      "type": "paragraph"
    }}><code>CmsEntry</code></_Heading>
<p><strong parentName="p">{`Type`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/entry`}</inlineCode></p>
<p>{`A content entry definition for and from the database.`}</p>
<p>{`@category Database model
@category CmsEntry`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import type { CmsEntry } from "webiny/api/cms/entry";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export interface CmsEntry<TValues extends CmsEntryValues = CmsEntryValues> { ... }`}
</Editor>
<_Heading level={3} id={"cms-entry-values"} nextElement={{
      "type": "paragraph"
    }}><code>CmsEntryValues</code></_Heading>
<p><strong parentName="p">{`Type`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/entry`}</inlineCode></p>
<p>{`A content entry values definition for and from the database.`}</p>
<p>{`@category Database model
@category CmsEntry`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import type { CmsEntryValues } from "webiny/api/cms/entry";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export interface CmsEntryValues {
  [key: string]: any;
}`}
</Editor>
<_Heading level={3} id={"entry-id"} nextElement={{
      "type": "paragraph"
    }}><code>EntryId</code></_Heading>
<p><strong parentName="p">{`Class`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/cms/entry`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { EntryId } from "webiny/api/cms/entry";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export class EntryId {
    private constructor(
        private _id: string,
        private _version: number
    );
    static create();
    static from(value: string);
    toString();
    get id();
    get version();
    incrementVersion();
    decrementVersion();
    setVersion(version: number);
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