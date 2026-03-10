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
  "title": "Infrastructure",
  "description": "Infrastructure primitives: Logger, Ui, lifecycle hooks",
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
  "title": "AdminStackOutput",
  "slug": "admin-stack-output",
  "children": []
}, {
  "title": "AfterBuildHook",
  "slug": "after-build-hook",
  "children": []
}, {
  "title": "AfterDeployHook",
  "slug": "after-deploy-hook",
  "children": []
}, {
  "title": "ApiGqlClient",
  "slug": "api-gql-client",
  "children": []
}, {
  "title": "ApiStackOutput",
  "slug": "api-stack-output",
  "children": []
}, {
  "title": "BeforeBuildHook",
  "slug": "before-build-hook",
  "children": []
}, {
  "title": "BeforeDeployHook",
  "slug": "before-deploy-hook",
  "children": []
}, {
  "title": "BeforeWatchHook",
  "slug": "before-watch-hook",
  "children": []
}, {
  "title": "CoreStackOutput",
  "slug": "core-stack-output",
  "children": []
}, {
  "title": "EnvVar",
  "slug": "env-var",
  "children": []
}, {
  "title": "InvokeLambdaFunction",
  "slug": "invoke-lambda-function",
  "children": []
}, {
  "title": "Logger",
  "slug": "logger",
  "children": []
}, {
  "title": "Ui",
  "slug": "ui",
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
<li parentName="ul">{`What is exported from `}<inlineCode parentName="li">{`webiny/infra/index`}</inlineCode>{`?`}</li>
<li parentName="ul">{`How to import and use each exported item?`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`This page documents everything exported from `}<inlineCode parentName="p">{`webiny/infra/index`}</inlineCode>{`. Import any of the items below directly from this path in your Webiny extensions.`}</p>
<SymbolList symbols={[{
      name: "AdminStackOutput",
      anchor: "admin-stack-output"
    }, {
      name: "AfterBuildHook",
      anchor: "after-build-hook"
    }, {
      name: "AfterDeployHook",
      anchor: "after-deploy-hook"
    }, {
      name: "ApiGqlClient",
      anchor: "api-gql-client"
    }, {
      name: "ApiStackOutput",
      anchor: "api-stack-output"
    }, {
      name: "BeforeBuildHook",
      anchor: "before-build-hook"
    }, {
      name: "BeforeDeployHook",
      anchor: "before-deploy-hook"
    }, {
      name: "BeforeWatchHook",
      anchor: "before-watch-hook"
    }, {
      name: "CoreStackOutput",
      anchor: "core-stack-output"
    }, {
      name: "EnvVar",
      anchor: "env-var"
    }, {
      name: "InvokeLambdaFunction",
      anchor: "invoke-lambda-function"
    }, {
      name: "Logger",
      anchor: "logger"
    }, {
      name: "Ui",
      anchor: "ui"
    }]} mdxType="SymbolList" />
<_Heading level={2} id={"admin-stack-output"} nextElement={{
      "type": "paragraph"
    }}><code>AdminStackOutput</code></_Heading>
<p><strong parentName="p">{`Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/infra/index`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { AdminStackOutput } from "webiny/infra/index";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`AdminStackOutput.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface AdminStackOutput.Interface {
    execute<TOutput extends IAdminStackOutput = IAdminStackOutput>(): Promise<TOutput | null>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace AdminStackOutput {
  type Interface = IAdminStackOutputService;
  type Output = IAdminStackOutput;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { AdminStackOutput } from "webiny/infra/index";

class MyImpl implements MyUseCase.Interface {
  public constructor(private adminStackOutput: AdminStackOutput.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.adminStackOutput.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [AdminStackOutput]
});`}
</Editor>
<_Heading level={2} id={"after-build-hook"} nextElement={{
      "type": "paragraph"
    }}><code>AfterBuildHook</code></_Heading>
<p><strong parentName="p">{`Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/infra/index`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { AfterBuildHook } from "webiny/infra/index";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`AfterBuildHook.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface AfterBuildHook.Interface {
    execute(params: BuildApp.Params): void | Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace AfterBuildHook {
  type Interface = IAfterBuild;
  type Params = BuildApp.Params;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { AfterBuildHook } from "webiny/infra/index";

class MyImpl implements MyUseCase.Interface {
  public constructor(private afterBuildHook: AfterBuildHook.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.afterBuildHook.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [AfterBuildHook]
});`}
</Editor>
<_Heading level={2} id={"after-deploy-hook"} nextElement={{
      "type": "paragraph"
    }}><code>AfterDeployHook</code></_Heading>
<p><strong parentName="p">{`Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/infra/index`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { AfterDeployHook } from "webiny/infra/index";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`AfterDeployHook.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface AfterDeployHook.Interface {
    execute(params: DeployApp.Params): void | Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace AfterDeployHook {
  type Interface = IAfterDeploy;
  type Params = DeployApp.Params;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { AfterDeployHook } from "webiny/infra/index";

class MyImpl implements MyUseCase.Interface {
  public constructor(private afterDeployHook: AfterDeployHook.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.afterDeployHook.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [AfterDeployHook]
});`}
</Editor>
<_Heading level={2} id={"api-gql-client"} nextElement={{
      "type": "paragraph"
    }}><code>ApiGqlClient</code></_Heading>
<p><strong parentName="p">{`Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/infra/index`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { ApiGqlClient } from "webiny/infra/index";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`ApiGqlClient.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface ApiGqlClient.Interface {
    query<T = any>(params: {
        query: string;
        variables?: Record<string, any>;
    }): Promise<IApiGqlClientResponse<T>>;
    mutation<T = any>(params: {
        mutation: string;
        variables?: Record<string, any>;
    }): Promise<IApiGqlClientResponse<T>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace ApiGqlClient {
  type Interface = IApiGqlClient;
  type Response = IApiGqlClientResponse<T>;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { ApiGqlClient } from "webiny/infra/index";

class MyImpl implements MyUseCase.Interface {
  public constructor(private apiGqlClient: ApiGqlClient.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.apiGqlClient.query(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [ApiGqlClient]
});`}
</Editor>
<_Heading level={2} id={"api-stack-output"} nextElement={{
      "type": "paragraph"
    }}><code>ApiStackOutput</code></_Heading>
<p><strong parentName="p">{`Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/infra/index`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { ApiStackOutput } from "webiny/infra/index";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`ApiStackOutput.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface ApiStackOutput.Interface {
    execute<TOutput extends IApiStackOutput = IApiStackOutput>(): Promise<TOutput | null>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace ApiStackOutput {
  type Interface = IApiStackOutputService;
  type Output = IApiStackOutput;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { ApiStackOutput } from "webiny/infra/index";

class MyImpl implements MyUseCase.Interface {
  public constructor(private apiStackOutput: ApiStackOutput.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.apiStackOutput.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [ApiStackOutput]
});`}
</Editor>
<_Heading level={2} id={"before-build-hook"} nextElement={{
      "type": "paragraph"
    }}><code>BeforeBuildHook</code></_Heading>
<p><strong parentName="p">{`Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/infra/index`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { BeforeBuildHook } from "webiny/infra/index";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`BeforeBuildHook.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface BeforeBuildHook.Interface {
    execute(params: BuildApp.Params): void | Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace BeforeBuildHook {
  type Interface = IBeforeBuild;
  type Params = BuildApp.Params;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { BeforeBuildHook } from "webiny/infra/index";

class MyImpl implements MyUseCase.Interface {
  public constructor(private beforeBuildHook: BeforeBuildHook.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.beforeBuildHook.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [BeforeBuildHook]
});`}
</Editor>
<_Heading level={2} id={"before-deploy-hook"} nextElement={{
      "type": "paragraph"
    }}><code>BeforeDeployHook</code></_Heading>
<p><strong parentName="p">{`Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/infra/index`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { BeforeDeployHook } from "webiny/infra/index";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`BeforeDeployHook.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface BeforeDeployHook.Interface {
    execute(params: DeployApp.Params): void | Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace BeforeDeployHook {
  type Interface = IBeforeDeploy;
  type Params = DeployApp.Params;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { BeforeDeployHook } from "webiny/infra/index";

class MyImpl implements MyUseCase.Interface {
  public constructor(private beforeDeployHook: BeforeDeployHook.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.beforeDeployHook.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [BeforeDeployHook]
});`}
</Editor>
<_Heading level={2} id={"before-watch-hook"} nextElement={{
      "type": "paragraph"
    }}><code>BeforeWatchHook</code></_Heading>
<p><strong parentName="p">{`Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/infra/index`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { BeforeWatchHook } from "webiny/infra/index";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`BeforeWatchHook.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface BeforeWatchHook.Interface {
    execute(params: Watch.Params): void | Promise<void>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace BeforeWatchHook {
  type Interface = IBeforeWatch;
  type Params = Watch.Params;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { BeforeWatchHook } from "webiny/infra/index";

class MyImpl implements MyUseCase.Interface {
  public constructor(private beforeWatchHook: BeforeWatchHook.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.beforeWatchHook.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [BeforeWatchHook]
});`}
</Editor>
<_Heading level={2} id={"core-stack-output"} nextElement={{
      "type": "paragraph"
    }}><code>CoreStackOutput</code></_Heading>
<p><strong parentName="p">{`Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/infra/index`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { CoreStackOutput } from "webiny/infra/index";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`CoreStackOutput.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface CoreStackOutput.Interface {
    execute<TOutput extends ICoreStackOutput = ICoreStackOutput>(): Promise<TOutput | null>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace CoreStackOutput {
  type Interface = ICoreStackOutputService;
  type Output = ICoreStackOutput;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { CoreStackOutput } from "webiny/infra/index";

class MyImpl implements MyUseCase.Interface {
  public constructor(private coreStackOutput: CoreStackOutput.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.coreStackOutput.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [CoreStackOutput]
});`}
</Editor>
<_Heading level={2} id={"env-var"} nextElement={{
      "type": "paragraph"
    }}><code>EnvVar</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/infra/index`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { EnvVar } from "webiny/infra/index";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export const EnvVar = defineExtension({
    type: "Project/EnvVar",
    tags: { runtimeContext: "project" },
    description: "Set an environment variable in the project context.",
    multiple: true,
    paramsSchema: z.object({
        // TODO: enable using \`name\` instead of \`varName\` for better consistency.
        varName: z.string().describe("The environment variable name."),
        value: z`}
</Editor>
<_Heading level={2} id={"invoke-lambda-function"} nextElement={{
      "type": "paragraph"
    }}><code>InvokeLambdaFunction</code></_Heading>
<p><strong parentName="p">{`Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/infra/index`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { InvokeLambdaFunction } from "webiny/infra/index";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`InvokeLambdaFunction.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface InvokeLambdaFunction.Interface {
    execute<T = any>(params: IInvokeLambdaFunctionParams): Promise<IInvokeLambdaFunctionResult<T>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace InvokeLambdaFunction {
  type Interface = IInvokeLambdaFunction;
  type Params = IInvokeLambdaFunctionParams;
  type Result = IInvokeLambdaFunctionResult<T>;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { InvokeLambdaFunction } from "webiny/infra/index";

class MyImpl implements MyUseCase.Interface {
  public constructor(private invokeLambdaFunction: InvokeLambdaFunction.Interface) {}

  public async execute(/* ... */): Promise<void> {
    await this.invokeLambdaFunction.execute(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [InvokeLambdaFunction]
});`}
</Editor>
<_Heading level={2} id={"logger"} nextElement={{
      "type": "paragraph"
    }}><code>Logger</code></_Heading>
<p><strong parentName="p">{`Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/infra/index`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { Logger } from "webiny/infra/index";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`Logger.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface Logger.Interface {
    trace(objOrMsg: object | string, ...args: any[]): void;
    debug(objOrMsg: object | string, ...args: any[]): void;
    info(objOrMsg: object | string, ...args: any[]): void;
    warn(objOrMsg: object | string, ...args: any[]): void;
    error(objOrMsg: object | string, ...args: any[]): void;
    fatal(objOrMsg: object | string, ...args: any[]): void;
    log(objOrMsg: object | string, ...args: any[]): void;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace Logger {
  type Interface = ILoggerService;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { Logger } from "webiny/infra/index";

class MyImpl implements MyUseCase.Interface {
  public constructor(private logger: Logger.Interface) {}

  public async execute(/* ... */): Promise<void> {
    this.logger.info(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [Logger]
});`}
</Editor>
<_Heading level={2} id={"ui"} nextElement={{
      "type": "paragraph"
    }}><code>Ui</code></_Heading>
<p><strong parentName="p">{`Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/infra/index`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { Ui } from "webiny/infra/index";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`Ui.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface Ui.Interface {
    raw(text: string): void;
    text(text: string): void;
    textBold(text: string): void;
    emptyLine(): void;
    info(text: string, ...args: any[]): void;
    success(text: string, ...args: any[]): void;
    error(text: string, ...args: any[]): void;
    warning(text: string, ...args: any[]): void;
    debug(text: string, ...args: any[]): void;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace Ui {
  type Interface = IUiService;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { Ui } from "webiny/infra/index";

class MyImpl implements MyUseCase.Interface {
  public constructor(private ui: Ui.Interface) {}

  public async execute(/* ... */): Promise<void> {
    this.ui.info(/* ... */);
  }
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [Ui]
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