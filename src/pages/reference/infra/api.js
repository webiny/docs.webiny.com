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
  "title": "API",
  "description": "API infrastructure lifecycle hooks and Pulumi abstraction",
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
  "title": "ApiAfterBuildHook",
  "slug": "api-after-build-hook",
  "children": []
}, {
  "title": "ApiAfterDeployHook",
  "slug": "api-after-deploy-hook",
  "children": []
}, {
  "title": "ApiBeforeBuildHook",
  "slug": "api-before-build-hook",
  "children": []
}, {
  "title": "ApiBeforeDeployHook",
  "slug": "api-before-deploy-hook",
  "children": []
}, {
  "title": "ApiBeforeWatchHook",
  "slug": "api-before-watch-hook",
  "children": []
}, {
  "title": "ApiPulumi",
  "slug": "api-pulumi",
  "children": []
}, {
  "title": "GetApiStackOutput",
  "slug": "get-api-stack-output",
  "children": []
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
<li parentName="ul">{`What is exported from `}<inlineCode parentName="li">{`webiny/infra/api`}</inlineCode>{`?`}</li>
<li parentName="ul">{`How to import and use each exported item?`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`This page documents everything exported from `}<inlineCode parentName="p">{`webiny/infra/api`}</inlineCode>{`. Import any of the items below directly from this path in your Webiny extensions.`}</p>
<SymbolList symbols={[{
      name: "ApiAfterBuildHook",
      anchor: "api-after-build-hook"
    }, {
      name: "ApiAfterDeployHook",
      anchor: "api-after-deploy-hook"
    }, {
      name: "ApiBeforeBuildHook",
      anchor: "api-before-build-hook"
    }, {
      name: "ApiBeforeDeployHook",
      anchor: "api-before-deploy-hook"
    }, {
      name: "ApiBeforeWatchHook",
      anchor: "api-before-watch-hook"
    }, {
      name: "ApiPulumi",
      anchor: "api-pulumi"
    }, {
      name: "GetApiStackOutput",
      anchor: "get-api-stack-output"
    }]} mdxType="SymbolList" />
<_Heading level={2} id={"api-after-build-hook"} nextElement={{
      "type": "paragraph"
    }}><code>ApiAfterBuildHook</code></_Heading>
<p><strong parentName="p">{`Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/infra/api`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { ApiAfterBuildHook } from "webiny/infra/api";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`ApiAfterBuildHook.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface ApiAfterBuildHook.Interface {
    execute(params: BuildApp.Params): void | Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace ApiAfterBuildHook {
  type Interface = IApiAfterBuild;
  type Params = BuildApp.Params;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { ApiAfterBuildHook } from "webiny/infra/api";

class MyImpl implements MyUseCase.Interface {
  public constructor(private apiAfterBuildHook: ApiAfterBuildHook.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.apiAfterBuildHook.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [ApiAfterBuildHook]
});`}
</Editor>
<_Heading level={2} id={"api-after-deploy-hook"} nextElement={{
      "type": "paragraph"
    }}><code>ApiAfterDeployHook</code></_Heading>
<p><strong parentName="p">{`Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/infra/api`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { ApiAfterDeployHook } from "webiny/infra/api";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`ApiAfterDeployHook.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface ApiAfterDeployHook.Interface {
    execute(params: DeployApp.Params): void | Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace ApiAfterDeployHook {
  type Interface = IApiAfterDeploy;
  type Params = DeployApp.Params;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { ApiAfterDeployHook } from "webiny/infra/api";

class MyImpl implements MyUseCase.Interface {
  public constructor(private apiAfterDeployHook: ApiAfterDeployHook.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.apiAfterDeployHook.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [ApiAfterDeployHook]
});`}
</Editor>
<_Heading level={2} id={"api-before-build-hook"} nextElement={{
      "type": "paragraph"
    }}><code>ApiBeforeBuildHook</code></_Heading>
<p><strong parentName="p">{`Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/infra/api`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { ApiBeforeBuildHook } from "webiny/infra/api";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`ApiBeforeBuildHook.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface ApiBeforeBuildHook.Interface {
    execute(params: BuildApp.Params): void | Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace ApiBeforeBuildHook {
  type Interface = IApiBeforeBuild;
  type Params = BuildApp.Params;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { ApiBeforeBuildHook } from "webiny/infra/api";

class MyImpl implements MyUseCase.Interface {
  public constructor(private apiBeforeBuildHook: ApiBeforeBuildHook.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.apiBeforeBuildHook.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [ApiBeforeBuildHook]
});`}
</Editor>
<_Heading level={2} id={"api-before-deploy-hook"} nextElement={{
      "type": "paragraph"
    }}><code>ApiBeforeDeployHook</code></_Heading>
<p><strong parentName="p">{`Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/infra/api`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { ApiBeforeDeployHook } from "webiny/infra/api";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`ApiBeforeDeployHook.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface ApiBeforeDeployHook.Interface {
    execute(params: DeployApp.Params): void | Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace ApiBeforeDeployHook {
  type Interface = IApiBeforeDeploy;
  type Params = DeployApp.Params;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { ApiBeforeDeployHook } from "webiny/infra/api";

class MyImpl implements MyUseCase.Interface {
  public constructor(private apiBeforeDeployHook: ApiBeforeDeployHook.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.apiBeforeDeployHook.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [ApiBeforeDeployHook]
});`}
</Editor>
<_Heading level={2} id={"api-before-watch-hook"} nextElement={{
      "type": "paragraph"
    }}><code>ApiBeforeWatchHook</code></_Heading>
<p><strong parentName="p">{`Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/infra/api`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { ApiBeforeWatchHook } from "webiny/infra/api";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`ApiBeforeWatchHook.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface ApiBeforeWatchHook.Interface {
    execute(params: Watch.WatchWithAppParams): void | Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace ApiBeforeWatchHook {
  type Interface = IApiBeforeWatch;
  type Params = Watch.WatchWithAppParams;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { ApiBeforeWatchHook } from "webiny/infra/api";

class MyImpl implements MyUseCase.Interface {
  public constructor(private apiBeforeWatchHook: ApiBeforeWatchHook.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.apiBeforeWatchHook.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [ApiBeforeWatchHook]
});`}
</Editor>
<_Heading level={2} id={"api-pulumi"} nextElement={{
      "type": "paragraph"
    }}><code>ApiPulumi</code></_Heading>
<p><strong parentName="p">{`Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/infra/api`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { ApiPulumi } from "webiny/infra/api";`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace ApiPulumi {
  type Interface = IApiPulumi<unknown>;
  type Params = unknown;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { ApiPulumi } from "webiny/infra/api";

class MyImpl implements MyUseCase.Interface {
  public constructor(private apiPulumi: ApiPulumi.Interface) {}

  public async execute(/* ... */): Promise<void> {}
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [ApiPulumi]
});`}
</Editor>
<_Heading level={2} id={"get-api-stack-output"} nextElement={{
      "type": "paragraph"
    }}><code>GetApiStackOutput</code></_Heading>
<p><strong parentName="p">{`Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/infra/api`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { GetApiStackOutput } from "webiny/infra/api";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`GetApiStackOutput.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface GetApiStackOutput.Interface {
    execute<TOutput extends IApiStackOutput = IApiStackOutput>(): Promise<TOutput | null>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace GetApiStackOutput {
  type Interface = IApiStackOutputService;
  type Output = IApiStackOutput;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { GetApiStackOutput } from "webiny/infra/api";

class MyImpl implements MyUseCase.Interface {
  public constructor(private getApiStackOutput: GetApiStackOutput.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.getApiStackOutput.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [GetApiStackOutput]
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