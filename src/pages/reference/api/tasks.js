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
  "title": "Tasks",
  "description": "Background task abstractions: TaskService, TaskDefinition",
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
  "title": "TaskDefinition",
  "slug": "task-definition",
  "children": []
}, {
  "title": "TaskService",
  "slug": "task-service",
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
<li parentName="ul">{`What is exported from `}<inlineCode parentName="li">{`webiny/api/tasks`}</inlineCode>{`?`}</li>
<li parentName="ul">{`How to import and use each exported item?`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`This page documents everything exported from `}<inlineCode parentName="p">{`webiny/api/tasks`}</inlineCode>{`. Import any of the items below directly from this path in your Webiny extensions.`}</p>
<SymbolList symbols={[{
      name: "TaskDefinition",
      anchor: "task-definition"
    }, {
      name: "TaskService",
      anchor: "task-service"
    }]} mdxType="SymbolList" />
<_Heading level={2} id={"task-definition"} nextElement={{
      "type": "paragraph"
    }}><code>TaskDefinition</code></_Heading>
<p><strong parentName="p">{`Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/tasks`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { TaskDefinition } from "webiny/api/tasks";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`TaskDefinition.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface TaskDefinition.Interface {
    id: string;
    title: string;
    description?: string;
    maxIterations?: number;
    databaseLogs?: boolean;
    isPrivate?: boolean;
    // Core run method - receives ONLY input params
    // All runtime dependencies (logging, state management, etc.) come from TaskController
    run(params: ITaskRunParams<I, O>): Promise<ITaskResult<I, O>>;
    // Optional lifecycle hooks - receive task data, no context
    onBeforeTrigger?(params: ITaskBeforeTriggerParams<I>): Promise<void>;
    onDone?(params: ITaskLifecycleHook<I, O>): Promise<void>;
    onError?(params: ITaskLifecycleHook<I, O>): Promise<void>;
    onAbort?(params: ITaskLifecycleHook<I, O>): Promise<void>;
    onMaxIterations?(params: ITaskLifecycleHook<I, O>): Promise<void>;
    // Create a validation schema for the task input.
    // This will be used to validate the input before the task is triggered.
    createInputValidation?(
        params: ITaskCreateInputValidationParams
    ): GenericRecord<keyof I, zod.Schema> | zod.Schema;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace TaskDefinition {
  type Interface = ITaskDefinition<I, O>;
  type TaskInput = ITaskInput;
  type TaskOutput = ITaskOutput;
  type Runnable = IRunnableTaskDefinition<I, O>;
  type RunParams = ITaskRunParams<I, O>;
  type Result = ITaskResult<I, O>;
  type Task = ITask<I, O>;
  type ResultDone = ITaskResultDone<O>;
  type ResultContinue = ITaskResultContinue<I>;
  type ResultError = ITaskResultError;
  type ResultAborted = ITaskResultAborted;
  type CreateInputValidationParams = ITaskCreateInputValidationParams;
  type TaskCreateData = ITaskCreateData<I>;
  type BeforeTriggerParams = ITaskBeforeTriggerParams<I>;
  type LifecycleHookParams = ITaskLifecycleHook<I, O>;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { TaskDefinition } from "webiny/api/tasks";

class MyImpl implements MyUseCase.Interface {
    public constructor(private taskDefinition: TaskDefinition.Interface) {}

    public async execute(/* ... */): Promise<void> {
        this.taskDefinition.id: string(/* ... */);
    }
}

export default MyUseCase.createImplementation({
    implementation: MyImpl,
    dependencies: [TaskDefinition]
});`}
</Editor>
<_Heading level={2} id={"task-service"} nextElement={{
      "type": "paragraph"
    }}><code>TaskService</code></_Heading>
<p><strong parentName="p">{`Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/api/tasks`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { TaskService } from "webiny/api/tasks";`}
</Editor>
<p><strong parentName="p">{`Interface `}<inlineCode parentName="strong">{`TaskService.Interface`}</inlineCode>{`:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`interface TaskService.Interface {
    trigger: <
        T extends TaskDefinition.TaskInput = TaskDefinition.TaskInput,
        O extends IGenericOutput = IGenericOutput
    >(
        params: ITaskTriggerParams<T>
    ) => Promise<Result<ITask<T, O>, BaseError>>;
    abort: <
        T extends TaskDefinition.TaskInput = TaskDefinition.TaskInput,
        O extends IGenericOutput = IGenericOutput
    >(
        params: ITaskAbortParams
    ) => Promise<Result<ITask<T, O>, BaseError>>;
    fetchServiceInfo: (input: ITask<any, any> | string) => Promise<Result<IServiceInfo, BaseError>>;
}`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace TaskService {
  type Interface = ITaskService;
  type GenericOutput = IGenericOutput;
  type TaskInput = TaskDefinition.TaskInput;
  type Task = ITask<I, O>;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { TaskService } from "webiny/api/tasks";

class MyImpl implements MyUseCase.Interface {
    public constructor(private taskService: TaskService.Interface) {}

    public async execute(/* ... */): Promise<void> {
        await this.taskService.trigger:(/* ... */);
    }
}

export default MyUseCase.createImplementation({
    implementation: MyImpl,
    dependencies: [TaskService]
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