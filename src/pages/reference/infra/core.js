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
  "title": "Core",
  "description": "Core infrastructure lifecycle hooks and Pulumi abstraction",
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
  "title": "CoreAfterBuildHook",
  "slug": "core-after-build-hook",
  "children": []
}, {
  "title": "CoreAfterDeployHook",
  "slug": "core-after-deploy-hook",
  "children": []
}, {
  "title": "CoreBeforeBuildHook",
  "slug": "core-before-build-hook",
  "children": []
}, {
  "title": "CoreBeforeDeployHook",
  "slug": "core-before-deploy-hook",
  "children": []
}, {
  "title": "CorePulumi",
  "slug": "core-pulumi",
  "children": []
}, {
  "title": "GetCoreStackOutput",
  "slug": "get-core-stack-output",
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
<li parentName="ul">{`What is exported from `}<inlineCode parentName="li">{`webiny/infra/core`}</inlineCode>{`?`}</li>
<li parentName="ul">{`How to import and use each exported item?`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`This page documents everything exported from `}<inlineCode parentName="p">{`webiny/infra/core`}</inlineCode>{`. Import any of the items below directly from this path in your Webiny extensions.`}</p>
<SymbolList symbols={[{
      name: "CoreAfterBuildHook",
      anchor: "core-after-build-hook"
    }, {
      name: "CoreAfterDeployHook",
      anchor: "core-after-deploy-hook"
    }, {
      name: "CoreBeforeBuildHook",
      anchor: "core-before-build-hook"
    }, {
      name: "CoreBeforeDeployHook",
      anchor: "core-before-deploy-hook"
    }, {
      name: "CorePulumi",
      anchor: "core-pulumi"
    }, {
      name: "GetCoreStackOutput",
      anchor: "get-core-stack-output"
    }]} mdxType="SymbolList" />
<_Heading level={2} id={"core-after-build-hook"} nextElement={{
      "type": "paragraph"
    }}><code>CoreAfterBuildHook</code></_Heading>
<p><strong parentName="p">{`Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/infra/core`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { CoreAfterBuildHook } from "webiny/infra/core";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`CoreAfterBuildHook.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface CoreAfterBuildHook.Interface {
    execute(params: BuildApp.Params): void | Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace CoreAfterBuildHook {
  type Interface = ICoreAfterBuild;
  type Params = BuildApp.Params;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { CoreAfterBuildHook } from "webiny/infra/core";

class MyImpl implements MyUseCase.Interface {
  public constructor(private coreAfterBuildHook: CoreAfterBuildHook.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.coreAfterBuildHook.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [CoreAfterBuildHook]
});`}
</Editor>
<_Heading level={2} id={"core-after-deploy-hook"} nextElement={{
      "type": "paragraph"
    }}><code>CoreAfterDeployHook</code></_Heading>
<p><strong parentName="p">{`Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/infra/core`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { CoreAfterDeployHook } from "webiny/infra/core";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`CoreAfterDeployHook.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface CoreAfterDeployHook.Interface {
    execute(params: DeployApp.Params): void | Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace CoreAfterDeployHook {
  type Interface = ICoreAfterDeploy;
  type Params = DeployApp.Params;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { CoreAfterDeployHook } from "webiny/infra/core";

class MyImpl implements MyUseCase.Interface {
  public constructor(private coreAfterDeployHook: CoreAfterDeployHook.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.coreAfterDeployHook.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [CoreAfterDeployHook]
});`}
</Editor>
<_Heading level={2} id={"core-before-build-hook"} nextElement={{
      "type": "paragraph"
    }}><code>CoreBeforeBuildHook</code></_Heading>
<p><strong parentName="p">{`Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/infra/core`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { CoreBeforeBuildHook } from "webiny/infra/core";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`CoreBeforeBuildHook.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface CoreBeforeBuildHook.Interface {
    execute(params: BuildApp.Params): void | Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace CoreBeforeBuildHook {
  type Interface = ICoreBeforeBuild;
  type Params = BuildApp.Params;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { CoreBeforeBuildHook } from "webiny/infra/core";

class MyImpl implements MyUseCase.Interface {
  public constructor(private coreBeforeBuildHook: CoreBeforeBuildHook.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.coreBeforeBuildHook.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [CoreBeforeBuildHook]
});`}
</Editor>
<_Heading level={2} id={"core-before-deploy-hook"} nextElement={{
      "type": "paragraph"
    }}><code>CoreBeforeDeployHook</code></_Heading>
<p><strong parentName="p">{`Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/infra/core`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { CoreBeforeDeployHook } from "webiny/infra/core";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`CoreBeforeDeployHook.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface CoreBeforeDeployHook.Interface {
    execute(params: DeployApp.Params): void | Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace CoreBeforeDeployHook {
  type Interface = ICoreBeforeDeploy;
  type Params = DeployApp.Params;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { CoreBeforeDeployHook } from "webiny/infra/core";

class MyImpl implements MyUseCase.Interface {
  public constructor(private coreBeforeDeployHook: CoreBeforeDeployHook.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.coreBeforeDeployHook.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [CoreBeforeDeployHook]
});`}
</Editor>
<_Heading level={2} id={"core-pulumi"} nextElement={{
      "type": "paragraph"
    }}><code>CorePulumi</code></_Heading>
<p><strong parentName="p">{`Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/infra/core`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { CorePulumi } from "webiny/infra/core";`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace CorePulumi {
  type Interface = ICorePulumi<unknown>;
  type Params = unknown;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { CorePulumi } from "webiny/infra/core";

class MyImpl implements MyUseCase.Interface {
  public constructor(private corePulumi: CorePulumi.Interface) {}

  public async execute(/* ... */): Promise<void> {}
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [CorePulumi]
});`}
</Editor>
<_Heading level={2} id={"get-core-stack-output"} nextElement={{
      "type": "paragraph"
    }}><code>GetCoreStackOutput</code></_Heading>
<p><strong parentName="p">{`Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/infra/core`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { GetCoreStackOutput } from "webiny/infra/core";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`GetCoreStackOutput.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface GetCoreStackOutput.Interface {
    execute<TOutput extends ICoreStackOutput = ICoreStackOutput>(): Promise<TOutput | null>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace GetCoreStackOutput {
  type Interface = ICoreStackOutputService;
  type Output = ICoreStackOutput;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { GetCoreStackOutput } from "webiny/infra/core";

class MyImpl implements MyUseCase.Interface {
  public constructor(private getCoreStackOutput: GetCoreStackOutput.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.getCoreStackOutput.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [GetCoreStackOutput]
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