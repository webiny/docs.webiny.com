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
  "title": "Admin",
  "description": "Admin app core: createFeature, createAbstraction, Provider, Plugin",
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
  "title": "Hooks",
  "slug": "hooks",
  "children": [{
    "title": "useFeature",
    "slug": "use-feature",
    "children": []
  }]
}, {
  "title": "Other",
  "slug": "other",
  "children": [{
    "title": "BuildParam",
    "slug": "build-param",
    "children": []
  }, {
    "title": "BuildParams",
    "slug": "build-params",
    "children": []
  }, {
    "title": "createHasPermission",
    "slug": "create-has-permission",
    "children": []
  }, {
    "title": "createPermissionSchema",
    "slug": "create-permission-schema",
    "children": []
  }, {
    "title": "createUsePermissions",
    "slug": "create-use-permissions",
    "children": []
  }, {
    "title": "NetworkErrorEventHandler",
    "slug": "network-error-event-handler",
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
<li parentName="ul">{`Which event handlers can you implement?`}</li>
<li parentName="ul">{`How to import and use each exported item?`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`This page documents everything exported from `}<inlineCode parentName="p">{`webiny/admin`}</inlineCode>{`. Import any of the items below directly from this path in your Webiny extensions.`}</p>
<p><strong parentName="p">{`Hooks`}</strong></p>
<SymbolList symbols={[{
      name: "useFeature",
      anchor: "use-feature"
    }]} mdxType="SymbolList" />
<p><strong parentName="p">{`Other`}</strong></p>
<SymbolList symbols={[{
      name: "BuildParam",
      anchor: "build-param"
    }, {
      name: "BuildParams",
      anchor: "build-params"
    }, {
      name: "createHasPermission",
      anchor: "create-has-permission"
    }, {
      name: "createPermissionSchema",
      anchor: "create-permission-schema"
    }, {
      name: "createUsePermissions",
      anchor: "create-use-permissions"
    }, {
      name: "NetworkErrorEventHandler",
      anchor: "network-error-event-handler"
    }]} mdxType="SymbolList" />
<_Heading level={2} id={"hooks"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Hooks</_Heading>
<_Heading level={3} id={"use-feature"} nextElement={{
      "type": "paragraph"
    }}><code>useFeature</code></_Heading>
<p><strong parentName="p">{`Function`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { useFeature } from "webiny/admin";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export function useFeature<TExports>(feature: FeatureDefinition<TExports, any[]>): TExports;`}
</Editor>
<_Heading level={2} id={"other"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Other</_Heading>
<_Heading level={3} id={"build-param"} nextElement={{
      "type": "paragraph"
    }}><code>BuildParam</code></_Heading>
<p><strong parentName="p">{`Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { BuildParam } from "webiny/admin";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`BuildParam.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface BuildParam.Interface {
    key: string;
    value: any;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace BuildParam {
  type Interface = IBuildParam;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { BuildParam } from "webiny/admin";

class MyImpl implements MyUseCase.Interface {
    public constructor(private buildParam: BuildParam.Interface) {}

    public async execute(/* ... */): Promise<void> {
        this.buildParam.key: string(/* ... */);
    }
}

export default MyUseCase.createImplementation({
    implementation: MyImpl,
    dependencies: [BuildParam]
});`}
</Editor>
<_Heading level={3} id={"build-params"} nextElement={{
      "type": "paragraph"
    }}><code>BuildParams</code></_Heading>
<p><strong parentName="p">{`Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { BuildParams } from "webiny/admin";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`BuildParams.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface BuildParams.Interface {
    get<T = any>(key: string): T | null;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace BuildParams {
  type Interface = IBuildParams;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { BuildParams } from "webiny/admin";

class MyImpl implements MyUseCase.Interface {
  public constructor(private buildParams: BuildParams.Interface) {}

  public async execute(/* ... */): Promise<void> {
    this.buildParams.get(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [BuildParams]
});`}
</Editor>
<_Heading level={3} id={"create-has-permission"} nextElement={{
      "type": "paragraph"
    }}><code>createHasPermission</code></_Heading>
<p><strong parentName="p">{`Function`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { createHasPermission } from "webiny/admin";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export function createHasPermission<const S extends PermissionSchemaConfig>(
  schema: S
): React.FC<HasPermissionProps<S>>;`}
</Editor>
<_Heading level={3} id={"create-permission-schema"} nextElement={{
      "type": "paragraph"
    }}><code>createPermissionSchema</code></_Heading>
<p><strong parentName="p">{`Function`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { createPermissionSchema } from "webiny/admin";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export function createPermissionSchema<const T extends PermissionSchemaConfig>(config: T): T;`}
</Editor>
<_Heading level={3} id={"create-use-permissions"} nextElement={{
      "type": "paragraph"
    }}><code>createUsePermissions</code></_Heading>
<p><strong parentName="p">{`Function`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { createUsePermissions } from "webiny/admin";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export function createUsePermissions<const S extends PermissionSchemaConfig>(
  schema: S
): () => UsePermissionsResult<S>;`}
</Editor>
<_Heading level={3} id={"network-error-event-handler"} nextElement={{
      "type": "paragraph"
    }}><code>NetworkErrorEventHandler</code></_Heading>
<p><strong parentName="p">{`Event Handler Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { NetworkErrorEventHandler } from "webiny/admin";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`NetworkErrorEventHandler.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface NetworkErrorEventHandler.Interface {
    handle(event: NetworkErrorEvent): Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace NetworkErrorEventHandler {
  type Interface = IEventHandler<NetworkErrorEvent>;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyHandler.ts" lang="typescript" mdxType="Editor">
{`import { NetworkErrorEventHandler } from "webiny/admin";

class MyHandler implements NetworkErrorEventHandler.Interface {
  public constructor(/* inject dependencies here */) {}

  public async handle(event: NetworkErrorEventHandler.Event): Promise<void> {
    // implementation
  }
}

export default NetworkErrorEventHandler.createImplementation({
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