/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import {Alert} from "@/components/Alert";
import {CanIUseThis} from "@/components/CanIUseThis";
import {WhatYouWillLearn} from "@/components/WhatYouWillLearn";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "How to Handle a Background Task",
  "description": "You will learn about Background Tasks, how to create new definitions, how to trigger them and how to handle the task run.",
  "type": "docs",
  "showPageHeader": true,
  "fullWidth": false,
  "version": "5.x"
};
const docsearch = {
  "type": "docs",
  "weight": 100,
  "versions": ["5.x"]
};
const navigation = _navigation;
const versions = _versions;
const tableOfContents = [{
  "title": "Handling the Task Run",
  "slug": "handling-the-task-run",
  "children": [{
    "title": "The context Object",
    "slug": "the-context-object",
    "children": []
  }, {
    "title": "The input Object",
    "slug": "the-input-object",
    "children": []
  }, {
    "title": "The response Object",
    "slug": "the-response-object",
    "children": [{
      "title": "The done Method",
      "slug": "the-done-method"
    }, {
      "title": "The continue Method",
      "slug": "the-continue-method"
    }, {
      "title": "The error Method",
      "slug": "the-error-method"
    }, {
      "title": "The abort Method",
      "slug": "the-abort-method"
    }]
  }, {
    "title": "The isCloseToTimeout Method",
    "slug": "the-is-close-to-timeout-method",
    "children": []
  }, {
    "title": "The isAborted Method",
    "slug": "the-is-aborted-method",
    "children": []
  }, {
    "title": "The store Object",
    "slug": "the-store-object",
    "children": []
  }]
}, {
  "title": "Logging",
  "slug": "logging",
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





<CanIUseThis since={"5.39.0"} mdxType="CanIUseThis" />
<WhatYouWillLearn mdxType="WhatYouWillLearn">
<ul>
<li parentName="ul">{`how to handle the Background Task run`}</li>
<li parentName="ul">{`what are available methods`}</li>
<li parentName="ul">{`how to log important information`}</li>
</ul>
</WhatYouWillLearn>
<_Heading level={2} id={"handling-the-task-run"} nextElement={{
      "type": "paragraph"
    }}>Handling the Task Run</_Heading>
<p>{`When you define the task, you need to provide the `}<inlineCode parentName="p">{`run`}</inlineCode>{` method, as it is the method getting executed when the task is being executed.
The `}<inlineCode parentName="p">{`run`}</inlineCode>{` method receives an object parameter with the following variables, defined in the interface `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/abb442c6d67c97980b8053c5e53db7fb4fec88b4/packages/tasks/src/types.ts#L265"
      }}><inlineCode parentName="a">{`ITaskRunParams`}</inlineCode></a>{` :`}</p>
<ul>
<li parentName="ul"><inlineCode parentName="li">{`context`}</inlineCode></li>
<li parentName="ul"><inlineCode parentName="li">{`input`}</inlineCode></li>
<li parentName="ul"><inlineCode parentName="li">{`response`}</inlineCode></li>
<li parentName="ul"><inlineCode parentName="li">{`isCloseToTimeout()`}</inlineCode></li>
<li parentName="ul"><inlineCode parentName="li">{`isAborted()`}</inlineCode></li>
<li parentName="ul"><inlineCode parentName="li">{`store`}</inlineCode></li>
</ul>
<_Heading level={3} id={"the-context-object"} nextElement={{
      "type": "paragraph"
    }}>The<code>context</code>Object</_Heading>
<p>{`Via the `}<inlineCode parentName="p">{`context`}</inlineCode>{` object, you can access whole Webiny system.
The base interface of the `}<inlineCode parentName="p">{`context`}</inlineCode>{` object is `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/abb442c6d67c97980b8053c5e53db7fb4fec88b4/packages/tasks/src/types.ts#L261"
      }}>{`Context`}</a>{`, but you can pass your own, which must extend the base interface.`}</p>
<p>{`You can pass your own Ge interface/type of the `}<inlineCode parentName="p">{`context`}</inlineCode>{` variable when defining the task:`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import {createTaskDefinition} from "@webiny/tasks";
import {MyCustomContext} from "./types";

const myTask = createTaskDefinition<MyCustomContext>({
    id: "myPublicTask",
    title: "A Task Accessible Via API",
    async run({context}) {
        // context is of type MyCustomContext
        await context.yourCustomMethod();
    }
});`}
</Editor>
<_Heading level={3} id={"the-input-object"} nextElement={{
      "type": "paragraph"
    }}>The<code>input</code>Object</_Heading>
<p>{`The `}<inlineCode parentName="p">{`input`}</inlineCode>{` object is the input which was sent to the task when it was triggered.`}</p>
<p>{`By default, it is of plain object type `}<inlineCode parentName="p">{`Record<string, any>`}</inlineCode>{`, but you can pass your own type/interface when defining the task:`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import {createTaskDefinition} from "@webiny/tasks";
import {MyCustomContext} from "./types";

interface MyCustomInput {
    myCustomProperty: string;
}

const myTask = createTaskDefinition<MyCustomContext, MyCustomInput>({
    id: "myPublicTask",
    title: "A Task Accessible Via API",
    async run({input}) {
        // input is of type MyCustomInput
        const {myCustomProperty} = input;
    }
});`}
</Editor>
<_Heading level={3} id={"the-response-object"} nextElement={{
      "type": "paragraph"
    }}>The<code>response</code>Object</_Heading>
<p>{`The `}<inlineCode parentName="p">{`response`}</inlineCode>{` object handles the output from the task run.
Available methods are:`}</p>
<ul>
<li parentName="ul">{`done`}</li>
<li parentName="ul">{`continue`}</li>
<li parentName="ul">{`error`}</li>
<li parentName="ul">{`aborted`}</li>
</ul>
<_Heading level={4} id={"the-done-method"} nextElement={{
      "type": "paragraph"
    }}>The<code>done</code>Method</_Heading>
<p>{`This method signalizes that the task has finished its job and that the Step Function will finish as well.
It also signalizes that task status should be set to `}<inlineCode parentName="p">{`success`}</inlineCode>{`. Optional message will be stored as well.`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import {createTaskDefinition} from "@webiny/tasks";

const myTask = createTaskDefinition({
    id: "myPublicTask",
    title: "A Task Accessible Via API",
    async run({response}) {
        return response.done("Optional message about the task getting done.");
    }
});`}
</Editor>
<p>{`Interface for the response object is defined `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/84d28b3e100a0317a0c3d265d06efaea50971cd3/packages/tasks/src/response/abstractions/TaskResponse.ts#L62"
      }}>{`here`}</a>{`.`}</p>
<ul>
<li parentName="ul"><inlineCode parentName="li">{`message`}</inlineCode>{` - optional message you want to store when the task is done`}</li>
<li parentName="ul"><inlineCode parentName="li">{`output`}</inlineCode>{` - optional output object you want to store when the task is done`}</li>
</ul>
<_Heading level={4} id={"the-continue-method"} nextElement={{
      "type": "paragraph"
    }}>The<code>continue</code>Method</_Heading>
<p>{`This method signalizes that the task has not finished its job and that the Step Function should continue running the Lambda handler.`}</p>
<p>{`Note that the `}<inlineCode parentName="p">{`continue`}</inlineCode>{` method MUST receive some data, which is of same type as the input variable, as the first parameter.`}</p>
<p>{`Why? Because the data you send into `}<inlineCode parentName="p">{`continue`}</inlineCode>{` is the data you will receive on the next iteration of the task run as the `}<inlineCode parentName="p">{`input`}</inlineCode>{` variable.`}</p>
<p>{`The `}<inlineCode parentName="p">{`continue`}</inlineCode>{` method accepts a second, optional, parameter via which you can set waiting time for the next task run.
You can either send a `}<inlineCode parentName="p">{`seconds`}</inlineCode>{` property, which takes a number, or a `}<inlineCode parentName="p">{`date`}</inlineCode>{` property, which takes a `}<inlineCode parentName="p">{`Date`}</inlineCode>{` object.`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import {createTaskDefinition} from "@webiny/tasks";

const myTask = createTaskDefinition({
    id: "myPublicTask",
    title: "A Task Accessible Via API",
    async run({input, response}) {
        return response.continue({
            ...input,
            aChangedInputProperty: 1,
        },
            // optional options
        {
            seconds: 30, // wait 30 seconds before the next task run
            date: new Date("2024-02-25T00:00:00Z") // wait until the specified date before the next task run
        });
    }
});`}
</Editor>
<Alert type="danger" mdxType="Alert">
  If you are setting waiting time for the `continue` method, note that the maximum waiting time is 355 days, which is almost the maximum life time for the AWS Step Function.
</Alert>
<_Heading level={4} id={"the-error-method"} nextElement={{
      "type": "paragraph"
    }}>The<code>error</code>Method</_Heading>
<p>{`This method signalizes that the task has finished its job with an error and that the Step Function will finish as well, in an error state.
It also signalizes that task status should be set to `}<inlineCode parentName="p">{`error`}</inlineCode>{`.`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import {createTaskDefinition} from "@webiny/tasks";

const myTask = createTaskDefinition({
    id: "myPublicTask",
    title: "A Task Accessible Via API",
    async run({response}) {
        return response.error({
            message: "Error message",
            code: "ERROR_CODE",
            data: {
                // optional data
            }
        });
    }
});`}
</Editor>
<_Heading level={4} id={"the-abort-method"} nextElement={{
      "type": "paragraph"
    }}>The<code>abort</code>Method</_Heading>
<p>{`This method signalizes that the task was aborted by the user. Note that this is not an error, but a user triggered abort.`}</p>
<p>{`When you write your code, you must check if the task was aborted via the `}<inlineCode parentName="p">{`isAborted()`}</inlineCode>{` method, and if it was, you must return the `}<inlineCode parentName="p">{`abort`}</inlineCode>{` response.
This is meant to be used while the task has some code which loops continuously, like reading a lot of records from the database, with paginating through the records.`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import {createTaskDefinition} from "@webiny/tasks";

const myTask = createTaskDefinition({
    id: "myPublicTask",
    title: "A Task Accessible Via API",
    async run({response, isAborted, input}) {
        let dbReadParams = {
            ...input,
        };
        let result: DbResponse | null = null;
        while ((result = await listFromDb(dbReadParams))) {
          if (isAborted()) {
              return response.abort();
          }
          // continue with the loop
        }
        return response.done();
    }
});`}
</Editor>
<_Heading level={3} id={"the-is-close-to-timeout-method"} nextElement={{
      "type": "paragraph"
    }}>The<code>isCloseToTimeout</code>Method</_Heading>
<p>{`The `}<inlineCode parentName="p">{`isCloseToTimeout`}</inlineCode>{` method is a method which returns a boolean value, which tells you if the Lambda instance is close to the timeout.
This is useful when you have a lot of code to run, or you have some idea that the code will take some time to execute, and you want to check if you have enough time to finish the code execution.`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import {createTaskDefinition} from "@webiny/tasks";

interface MyInput {
    after?: null | undefined;
}

const myTask = createTaskDefinition<Context, MyInput>({
    id: "myPublicTask",
    title: "A Task Accessible Via API",
    async run({response, isCloseToTimeout, input}) {
        let dbReadParams = {
            ...input,
        };
        let result: DbResponse;
        while ((result = await listFromDb(dbReadParams))) {
          // do your magic...
          
          // assign the cursor to the after property of the dbReadParams
          dbReadParams.after = result.cursor;
          if (isCloseToTimeout()) {
              // on next iteration, we want to continue with new dbReadParams 
              return response.continue(dbReadParams);
          }
          // continue with the loop
        }
        return response.done();
    }
});`}
</Editor>
<p>{`The `}<inlineCode parentName="p">{`isCloseToTimeout`}</inlineCode>{` method accepts an optional parameter, which is a number of seconds under which will this method return `}<inlineCode parentName="p">{`true`}</inlineCode>{`. The default is `}<inlineCode parentName="p">{`180`}</inlineCode>{` seconds.`}</p>
<Alert type="warning" mdxType="Alert">
<p>{`  As a developer, you are responsible for checking if the task is close to the timeout, and for handling the task run accordingly.`}</p>
<p>{`  Webiny provides you with the background task mechanism, but you must handle the task run, and timeouts, yourself.`}</p>
</Alert>
<_Heading level={3} id={"the-is-aborted-method"} nextElement={{
      "type": "paragraph"
    }}>The<code>isAborted</code>Method</_Heading>
<p>{`The `}<inlineCode parentName="p">{`isAborted`}</inlineCode>{` method is a method which returns a boolean value, which tells you if the task was aborted by the user.`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import {createTaskDefinition} from "@webiny/tasks";

const myTask = createTaskDefinition({
    id: "myPublicTask",
    title: "A Task Accessible Via API",
    async run({response, isAborted, input}) {
        let dbReadParams = {
            ...input,
        };
        let result: DbResponse | null = null;
        while ((result = await listFromDb(dbReadParams))) {
          if (isAborted()) {
              return response.abort();
          }
          // continue with the loop
        }
        return response.done();
    }
});`}
</Editor>
<_Heading level={3} id={"the-store-object"} nextElement={{
      "type": "paragraph"
    }}>The<code>store</code>Object</_Heading>
<p>{`The `}<inlineCode parentName="p">{`store`}</inlineCode>{` object is of `}<inlineCode parentName="p">{`ITaskManagerStore`}</inlineCode>{` interface type, which is defined `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/abb442c6d67c97980b8053c5e53db7fb4fec88b4/packages/tasks/src/runner/abstractions/TaskManagerStore.ts#L42"
      }}>{`here`}</a>{`.`}</p>
<p>{`It is used for storing and retrieving data from the task run, including task logs.`}</p>
<p>{`Available methods on the object are:`}</p>
<ul>
<li parentName="ul"><inlineCode parentName="li">{`getTask`}</inlineCode></li>
<li parentName="ul"><inlineCode parentName="li">{`getStatus`}</inlineCode></li>
<li parentName="ul"><inlineCode parentName="li">{`updateTask`}</inlineCode></li>
<li parentName="ul"><inlineCode parentName="li">{`updateInput`}</inlineCode></li>
<li parentName="ul"><inlineCode parentName="li">{`getInput`}</inlineCode></li>
<li parentName="ul"><inlineCode parentName="li">{`addInfoLog`}</inlineCode></li>
<li parentName="ul"><inlineCode parentName="li">{`addErrorLog`}</inlineCode></li>
</ul>
<_Heading level={2} id={"logging"} nextElement={{
      "type": "paragraph"
    }}>Logging</_Heading>
<p>{`Using the `}<inlineCode parentName="p">{`addInfoLog`}</inlineCode>{` and `}<inlineCode parentName="p">{`addErrorLog`}</inlineCode>{` methods, you can store some important log into the database.`}</p>
<p>{`Because the Background Task Lambda handler can be executed multiple times, depending on the developer response, the logging has been implemented on per iteration base.`}</p>
<p>{`It means that each of the execution iteration gets its own record, which contain individual logs from that execution iteration.`}</p>
<Alert type="warning" title="Logging" mdxType="Alert">
<p>{`  Do not use the `}<inlineCode parentName="p">{`addInfoLog`}</inlineCode>{` and `}<inlineCode parentName="p">{`addErrorLog`}</inlineCode>{` methods for a lot of logging, or logging large amounts of data.`}</p>
<p>{`  The logs are stored in the database as you send them, and if you send a lot of logs, or large logs, you will hammer the database.`}</p>
<p>{`  Use the built-in logs only for important information, like starting or finishing a part of a task.`}</p>
</Alert>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;