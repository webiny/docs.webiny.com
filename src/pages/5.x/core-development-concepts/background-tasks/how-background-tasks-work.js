/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import {Alert} from "@/components/Alert";
import {CanIUseThis} from "@/components/CanIUseThis";
import {WhatYouWillLearn} from "@/components/WhatYouWillLearn";
import backgroundTaskStepFunction from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/core-development-concepts/background-tasks/assets/bg-task-step-function.png";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "How Background Tasks Work?",
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
  "title": "Overview",
  "slug": "overview",
  "children": []
}, {
  "title": "Step Function Definition",
  "slug": "step-function-definition",
  "children": []
}, {
  "title": "Step Function States",
  "slug": "step-function-states",
  "children": [{
    "title": "TransformEvent",
    "slug": "transform-event",
    "children": []
  }, {
    "title": "Run",
    "slug": "run",
    "children": []
  }, {
    "title": "CheckStatus",
    "slug": "check-status",
    "children": [{
      "title": "Done Status",
      "slug": "done-status"
    }, {
      "title": "Error Status",
      "slug": "error-status"
    }, {
      "title": "Aborted Status",
      "slug": "aborted-status"
    }, {
      "title": "Continue Status",
      "slug": "continue-status"
    }]
  }, {
    "title": "UnknownError",
    "slug": "unknown-error",
    "children": []
  }, {
    "title": "UnknownStatus",
    "slug": "unknown-status",
    "children": []
  }, {
    "title": "Error",
    "slug": "error",
    "children": []
  }, {
    "title": "Done",
    "slug": "done",
    "children": []
  }, {
    "title": "Aborted",
    "slug": "aborted",
    "children": []
  }]
}, {
  "title": "Background Task Lambda Handler",
  "slug": "background-task-lambda-handler",
  "children": []
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
const Image = makeShortcode("Image");
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
<li parentName="ul">{`how Background Tasks work`}</li>
<li parentName="ul">{`what are the states in Background Task Step Function`}</li>
<li parentName="ul">{`what is the functionality of each state`}</li>
</ul>
</WhatYouWillLearn>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`A Background Task lifecycle is as follows:`}</p>
<ol>
<li parentName="ol">{`A user triggers the task either via `}<_Link href="/docs/5.x/core-development-concepts/background-tasks/background-task-management#trigger-a-background-task">{`GraphQL API mutation`}</_Link>{` or via the `}<_Link href="/docs/5.x/core-development-concepts/background-tasks/background-task-management#trigger-a-background-task">{`code`}</_Link>{`.`}</li>
<li parentName="ol">{`As soon as the task is triggered, Webiny sends an EventBridge Event with task information: task ID and task definition identifier.`}</li>
<li parentName="ol">{`The EventBridge triggers the Step Function.`}</li>
<li parentName="ol">{`The Step Function runs the Lambda function in a loop until the task is done.`}</li>
</ol>
<_Heading level={2} id={"step-function-definition"} nextElement={{
      "type": "paragraph"
    }}>Step Function Definition</_Heading>
<p>{`We defined our Step Function as simple as possible, with a lot of error handling, as we did not want to have complex logic in the Step Function itself.`}</p>
<p>{`The Pulumi definition for the Step Function is available `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/abb442c6d67c97980b8053c5e53db7fb4fec88b4/packages/pulumi-aws/src/apps/api/backgroundTask/definition.ts#L13"
      }}>{`here`}</a>{`.`}</p>
<Image src={backgroundTaskStepFunction} alt="Background Task Step Function Definition" mdxType="Image" />
<_Heading level={2} id={"step-function-states"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Step Function States</_Heading>
<_Heading level={3} id={"transform-event"} nextElement={{
      "type": "paragraph"
    }}>TransformEvent</_Heading>
<p>{`This is the first state in our Step Function, and it is responsible for transforming the EventBridge Event into the Background Task Lambda handler input.`}</p>
<p>{`This state is required as we want to have simple Background Task Lambda handler input, without any additional information.
This is what the Step Function receives from the EventBridge:`}</p>
<Editor title="" lang="json" mdxType="Editor">
{`{
  "version": "0",
  "id": "37eb2fb9-6c54-48cf-afba-e0ea2988305a",
  "detail-type": "WebinyBackgroundTask",
  "source": "webiny-api-tasks",
  "account": "xxxxxxxxxxx",
  "time": "2024-01-1T15:30:00Z",
  "region": "eu-central-1",
  "resources": [],
  "detail": {
    "webinyTaskId": "65b26a4af5a5d9fc684af039",
    "webinyTaskDefinitionId": "myTaskDefinition",
    "tenant": "root",
    "locale": "en-US",
    "delay": -1
  }
}`}
</Editor>
<p>{`and this is what we need to run a Background Task Lambda handler:`}</p>
<Editor title="" lang="json" mdxType="Editor">
{`{
  "webinyTaskId": "65b26a4af5a5d9fc684af039",
  "webinyTaskDefinitionId": "myTaskDefinition",
  "locale": "en-US",
  "tenant": "root",
  "delay": -1
}`}
</Editor>
<p>{`Basically, this state is responsible for removing all the unnecessary information from the EventBridge Event.`}</p>
<_Heading level={3} id={"run"} nextElement={{
      "type": "paragraph"
    }}>Run</_Heading>
<p>{`This state is responsible for running the Background Task Lambda. It runs the Lambda, with the input from the previous state - either `}<inlineCode parentName="p">{`TransformEvent`}</inlineCode>{` or previous `}<inlineCode parentName="p">{`Run`}</inlineCode>{` (`}<inlineCode parentName="p">{`Wait`}</inlineCode>{`) state, and waits for the response.`}</p>
<p>{`When the state receives a response from the Lambda handler, it is sent to the `}<inlineCode parentName="p">{`CheckStatus`}</inlineCode>{` state.`}</p>
<_Heading level={3} id={"check-status"} nextElement={{
      "type": "paragraph"
    }}>CheckStatus</_Heading>
<p>{`This state is responsible for checking the status of the Background Task Lambda Handler response.`}</p>
<p>{`Possible response statuses are:`}</p>
<ul>
<li parentName="ul">{`done`}</li>
<li parentName="ul">{`error`}</li>
<li parentName="ul">{`aborted`}</li>
<li parentName="ul">{`continue`}</li>
</ul>
<_Heading level={4} id={"done-status"} nextElement={{
      "type": "paragraph"
    }}>Done Status</_Heading>
<p>{`This status signalizes that the Background Task Lambda handler has finished its job and that the Step Function will finish, in a success state.`}</p>
<_Heading level={4} id={"error-status"} nextElement={{
      "type": "paragraph"
    }}>Error Status</_Heading>
<p>{`This status signalizes that the Background Task Lambda handler has finished its job with an error and that the Step Function will finish, in an error state.`}</p>
<_Heading level={4} id={"aborted-status"} nextElement={{
      "type": "paragraph"
    }}>Aborted Status</_Heading>
<p>{`This status signalizes that the Background Task Lambda handler has finished its job with an abort and that the Step Function will finish, in an abort state.`}</p>
<_Heading level={4} id={"continue-status"} nextElement={{
      "type": "paragraph"
    }}>Continue Status</_Heading>
<p>{`This status signalizes that the Background Task Lambda handler has not finished its job and that the Step Function should continue running the Lambda handler.`}</p>
<p>{`When user ends current execution of the Background Task Lambda handler, they can also include a waiting time for the next handler run.
This can be used when the task needs to wait for some external service to finish its job, before the next handler run.
The task must contain the logic for checking if the external service has finished its job, and continue the task execution accordingly.`}</p>
<_Heading level={3} id={"unknown-error"} nextElement={{
      "type": "paragraph"
    }}>UnknownError</_Heading>
<p>{`This state is called when the Step Function Background Task Lambda handler has an unknown error (in the `}<inlineCode parentName="p">{`Run`}</inlineCode>{` state).
This should not happen as the Webiny code always returns a proper response, and everything is wrapped in a `}<inlineCode parentName="p">{`try/catch`}</inlineCode>{` block - with the error response in the catch block.`}</p>
<p>{`But, if it happens, for some unknown reason (probably during the development phase), the Step Function will finish in an error state.`}</p>
<_Heading level={3} id={"unknown-status"} nextElement={{
      "type": "paragraph"
    }}>UnknownStatus</_Heading>
<p>{`This state is called when the Step Function Background Task Lambda handler returns an unknown status, and the `}<inlineCode parentName="p">{`CheckStatus`}</inlineCode>{` state determines that the status is unknown.
This should not happen as the Webiny code gives all the tools to the user to return a proper response, and everything is wrapped in a `}<inlineCode parentName="p">{`try/catch`}</inlineCode>{` block - with the error response in the catch block.`}</p>
<p>{`But, if it happens, for some unknown reason, the Step Function will finish in an error state.`}</p>
<_Heading level={3} id={"error"} nextElement={{
      "type": "paragraph"
    }}>Error</_Heading>
<p>{`This state is called when the Step Function Background Task Lambda handler returns an error status, and the `}<inlineCode parentName="p">{`CheckStatus`}</inlineCode>{` state determines that the status is error.`}</p>
<p>{`The Step Function will finish in an error state.`}</p>
<_Heading level={3} id={"done"} nextElement={{
      "type": "paragraph"
    }}>Done</_Heading>
<p>{`This state is called when the Step Function Background Task Lambda handler returns a done status, and the `}<inlineCode parentName="p">{`CheckStatus`}</inlineCode>{` state determines that the status is done.`}</p>
<p>{`The Step Function will finish in a success state.`}</p>
<_Heading level={3} id={"aborted"} nextElement={{
      "type": "paragraph"
    }}>Aborted</_Heading>
<p>{`This state is called when the Step Function Background Task Lambda handler returns an abort status, and the `}<inlineCode parentName="p">{`CheckStatus`}</inlineCode>{` state determines that the status is aborted.`}</p>
<p>{`The Step Function will finish in a success state, as the abort state was triggered by the user.`}</p>
<_Heading level={2} id={"background-task-lambda-handler"} nextElement={{
      "type": "paragraph"
    }}>Background Task Lambda Handler</_Heading>
<p>{`The Background Task Lambda is deployed with the same code as our GraphQL API Lambda code, with an exception of having more memory assigned.`}</p>
<p>{`This way all of your custom code is deployed within the Background Task Lambda as well.`}</p>
<p>{`The response of the Background Task Lambda handler is plain JSON, with the following structure:`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`status: "done" | "error" | "continue" | "aborted";
webinyTaskId: string;
webinyTaskDefinitionId: string;
tenant: string;
locale: string;
wait: number;`}
</Editor>
<p>{`Users should worry not about the response structure as it is only used internally by the Background Task handler.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;