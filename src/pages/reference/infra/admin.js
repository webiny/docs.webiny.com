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
  "description": "Admin infrastructure lifecycle hooks and Pulumi abstraction",
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
  "title": "AdminAfterBuildHook",
  "slug": "admin-after-build-hook",
  "children": []
}, {
  "title": "AdminAfterDeployHook",
  "slug": "admin-after-deploy-hook",
  "children": []
}, {
  "title": "AdminBeforeBuildHook",
  "slug": "admin-before-build-hook",
  "children": []
}, {
  "title": "AdminBeforeDeployHook",
  "slug": "admin-before-deploy-hook",
  "children": []
}, {
  "title": "AdminBeforeWatchHook",
  "slug": "admin-before-watch-hook",
  "children": []
}, {
  "title": "AdminPulumi",
  "slug": "admin-pulumi",
  "children": []
}, {
  "title": "GetAdminStackOutput",
  "slug": "get-admin-stack-output",
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
<li parentName="ul">{`What is exported from `}<inlineCode parentName="li">{`webiny/infra/admin`}</inlineCode>{`?`}</li>
<li parentName="ul">{`How to import and use each exported item?`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`This page documents everything exported from `}<inlineCode parentName="p">{`webiny/infra/admin`}</inlineCode>{`. Import any of the items below directly from this path in your Webiny extensions.`}</p>
<SymbolList symbols={[{
      name: "AdminAfterBuildHook",
      anchor: "admin-after-build-hook"
    }, {
      name: "AdminAfterDeployHook",
      anchor: "admin-after-deploy-hook"
    }, {
      name: "AdminBeforeBuildHook",
      anchor: "admin-before-build-hook"
    }, {
      name: "AdminBeforeDeployHook",
      anchor: "admin-before-deploy-hook"
    }, {
      name: "AdminBeforeWatchHook",
      anchor: "admin-before-watch-hook"
    }, {
      name: "AdminPulumi",
      anchor: "admin-pulumi"
    }, {
      name: "GetAdminStackOutput",
      anchor: "get-admin-stack-output"
    }]} mdxType="SymbolList" />
<_Heading level={2} id={"admin-after-build-hook"} nextElement={{
      "type": "paragraph"
    }}><code>AdminAfterBuildHook</code></_Heading>
<p><strong parentName="p">{`Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/infra/admin`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { AdminAfterBuildHook } from "webiny/infra/admin";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`AdminAfterBuildHook.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface AdminAfterBuildHook.Interface {
    execute(params: BuildApp.Params): void | Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace AdminAfterBuildHook {
  type Interface = IAdminAfterBuild;
  type Params = BuildApp.Params;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { AdminAfterBuildHook } from "webiny/infra/admin";

class MyImpl implements MyUseCase.Interface {
  public constructor(private adminAfterBuildHook: AdminAfterBuildHook.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.adminAfterBuildHook.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [AdminAfterBuildHook]
});`}
</Editor>
<_Heading level={2} id={"admin-after-deploy-hook"} nextElement={{
      "type": "paragraph"
    }}><code>AdminAfterDeployHook</code></_Heading>
<p><strong parentName="p">{`Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/infra/admin`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { AdminAfterDeployHook } from "webiny/infra/admin";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`AdminAfterDeployHook.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface AdminAfterDeployHook.Interface {
    execute(params: DeployApp.Params): void | Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace AdminAfterDeployHook {
  type Interface = IAdminAfterDeploy;
  type Params = DeployApp.Params;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { AdminAfterDeployHook } from "webiny/infra/admin";

class MyImpl implements MyUseCase.Interface {
  public constructor(private adminAfterDeployHook: AdminAfterDeployHook.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.adminAfterDeployHook.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [AdminAfterDeployHook]
});`}
</Editor>
<_Heading level={2} id={"admin-before-build-hook"} nextElement={{
      "type": "paragraph"
    }}><code>AdminBeforeBuildHook</code></_Heading>
<p><strong parentName="p">{`Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/infra/admin`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { AdminBeforeBuildHook } from "webiny/infra/admin";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`AdminBeforeBuildHook.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface AdminBeforeBuildHook.Interface {
    execute(params: BuildApp.Params): void | Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace AdminBeforeBuildHook {
  type Interface = IAdminBeforeBuild;
  type Params = BuildApp.Params;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { AdminBeforeBuildHook } from "webiny/infra/admin";

class MyImpl implements MyUseCase.Interface {
  public constructor(private adminBeforeBuildHook: AdminBeforeBuildHook.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.adminBeforeBuildHook.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [AdminBeforeBuildHook]
});`}
</Editor>
<_Heading level={2} id={"admin-before-deploy-hook"} nextElement={{
      "type": "paragraph"
    }}><code>AdminBeforeDeployHook</code></_Heading>
<p><strong parentName="p">{`Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/infra/admin`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { AdminBeforeDeployHook } from "webiny/infra/admin";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`AdminBeforeDeployHook.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface AdminBeforeDeployHook.Interface {
    execute(params: DeployApp.Params): void | Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace AdminBeforeDeployHook {
  type Interface = IAdminBeforeDeploy;
  type Params = DeployApp.Params;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { AdminBeforeDeployHook } from "webiny/infra/admin";

class MyImpl implements MyUseCase.Interface {
  public constructor(private adminBeforeDeployHook: AdminBeforeDeployHook.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.adminBeforeDeployHook.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [AdminBeforeDeployHook]
});`}
</Editor>
<_Heading level={2} id={"admin-before-watch-hook"} nextElement={{
      "type": "paragraph"
    }}><code>AdminBeforeWatchHook</code></_Heading>
<p><strong parentName="p">{`Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/infra/admin`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { AdminBeforeWatchHook } from "webiny/infra/admin";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`AdminBeforeWatchHook.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface AdminBeforeWatchHook.Interface {
    execute(params: Watch.WatchWithAppParams): void | Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace AdminBeforeWatchHook {
  type Interface = IAdminBeforeWatch;
  type Params = Watch.WatchWithAppParams;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { AdminBeforeWatchHook } from "webiny/infra/admin";

class MyImpl implements MyUseCase.Interface {
  public constructor(private adminBeforeWatchHook: AdminBeforeWatchHook.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.adminBeforeWatchHook.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [AdminBeforeWatchHook]
});`}
</Editor>
<_Heading level={2} id={"admin-pulumi"} nextElement={{
      "type": "paragraph"
    }}><code>AdminPulumi</code></_Heading>
<p><strong parentName="p">{`Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/infra/admin`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { AdminPulumi } from "webiny/infra/admin";`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace AdminPulumi {
  type Interface = IAdminPulumi<unknown>;
  type Params = unknown;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { AdminPulumi } from "webiny/infra/admin";

class MyImpl implements MyUseCase.Interface {
  public constructor(private adminPulumi: AdminPulumi.Interface) {}

  public async execute(/* ... */): Promise<void> {}
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [AdminPulumi]
});`}
</Editor>
<_Heading level={2} id={"get-admin-stack-output"} nextElement={{
      "type": "paragraph"
    }}><code>GetAdminStackOutput</code></_Heading>
<p><strong parentName="p">{`Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/infra/admin`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { GetAdminStackOutput } from "webiny/infra/admin";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`GetAdminStackOutput.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface GetAdminStackOutput.Interface {
    execute<TOutput extends IAdminStackOutput = IAdminStackOutput>(): Promise<TOutput | null>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace GetAdminStackOutput {
  type Interface = IAdminStackOutputService;
  type Output = IAdminStackOutput;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { GetAdminStackOutput } from "webiny/infra/admin";

class MyImpl implements MyUseCase.Interface {
  public constructor(private getAdminStackOutput: GetAdminStackOutput.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.getAdminStackOutput.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [GetAdminStackOutput]
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