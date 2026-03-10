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
  "title": "Background Task Management",
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
  "title": "GraphQL API",
  "slug": "graph-ql-api",
  "children": [{
    "title": "Queries",
    "slug": "queries",
    "children": [{
      "title": "List All Background Task Definitions",
      "slug": "list-all-background-task-definitions"
    }, {
      "title": "List All Background Task Runs",
      "slug": "list-all-background-task-runs"
    }, {
      "title": "List Background Task Logs",
      "slug": "list-background-task-logs"
    }]
  }, {
    "title": "Mutations",
    "slug": "mutations",
    "children": [{
      "title": "Trigger a Background Task",
      "slug": "trigger-a-background-task"
    }, {
      "title": "Abort a Background Task",
      "slug": "abort-a-background-task"
    }]
  }, {
    "title": "Permissions",
    "slug": "permissions",
    "children": []
  }]
}, {
  "title": "Code API",
  "slug": "code-api",
  "children": [{
    "title": "List All Background Task Definitions",
    "slug": "list-all-background-task-definitions",
    "children": []
  }, {
    "title": "List All Background Task Runs",
    "slug": "list-all-background-task-runs",
    "children": []
  }, {
    "title": "Trigger a Background Task",
    "slug": "trigger-a-background-task",
    "children": []
  }, {
    "title": "Abort a Background Task",
    "slug": "abort-a-background-task",
    "children": []
  }, {
    "title": "List Background Task Logs",
    "slug": "list-background-task-logs",
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





<CanIUseThis since={"5.39.0"} mdxType="CanIUseThis" />
<WhatYouWillLearn mdxType="WhatYouWillLearn">
<ul>
<li parentName="ul">{`how to use Background Tasks GraphQL API`}</li>
<li parentName="ul">{`how to use programmatic API`}</li>
</ul>
</WhatYouWillLearn>
<_Heading level={2} id={"graph-ql-api"} nextElement={{
      "type": "paragraph"
    }}>GraphQL API</_Heading>
<p>{`The Background Tasks do not have a section in the Admin UI yet, so they are accessible only via the GraphQL API.`}</p>
<p>{`The endpoint for the tasks is `}<inlineCode parentName="p">{`/graphql`}</inlineCode>{`.`}</p>
<_Heading level={3} id={"queries"} nextElement={{
      "type": "heading",
      "depth": 4
    }}>Queries</_Heading>
<_Heading level={4} id={"list-all-background-task-definitions"} nextElement={{
      "type": "code",
      "lang": "graphql",
      "meta": null
    }}>List All Background Task Definitions</_Heading>
<Editor title="" lang="graphql" mdxType="Editor">
{`query ListTaskDefinitions {
  backgroundTasks {
    listDefinitions {
      data {
        id
        title
        description
      }
      error {
        message
        code
        data
        stack
      }
    }
  }
}`}
</Editor>
<_Heading level={4} id={"list-all-background-task-runs"} nextElement={{
      "type": "code",
      "lang": "graphql",
      "meta": null
    }}>List All Background Task Runs</_Heading>
<Editor title="" lang="graphql" mdxType="Editor">
{`query ListTasks {
  backgroundTasks {
    listTasks {
      data {
        id
        startedOn
        finishedOn
        name
        definitionId
        iterations
        parentId
        executionName
        eventResponse
        taskStatus
        input
        output
        # ...more fields available
      }
      error {
        message
        code
        data
        stack
      }
    }
  }
}`}
</Editor>
<_Heading level={4} id={"list-background-task-logs"} nextElement={{
      "type": "code",
      "lang": "graphql",
      "meta": null
    }}>List Background Task Logs</_Heading>
<Editor title="" lang="graphql" mdxType="Editor">
{`query ListBackgroundTaskLogs {
  backgroundTasks {
    listLogs(where: {
    # you can list logs from a certain task if you like
    task: "yourTaskId"
  }) {
      data {
        id
        createdOn
        executionName
        iteration
        items {
          message
          createdOn
          type
          data
          error
        }
      }
    }
  }
}`}
</Editor>
<_Heading level={3} id={"mutations"} nextElement={{
      "type": "heading",
      "depth": 4
    }}>Mutations</_Heading>
<_Heading level={4} id={"trigger-a-background-task"} nextElement={{
      "type": "code",
      "lang": "graphql",
      "meta": null
    }}>Trigger a Background Task</_Heading>
<Editor title="" lang="graphql" mdxType="Editor">
{`mutation TriggerATask {
  backgroundTasks {
    triggerTask(definition: testingRun, input: {
      someVariableForTestingRunTaskToReceive: "someValue",
      yetAnotherVariableForTestingRunTaskToReceive: "anotherValue"
    }) {
      data {
        id
        definitionId
        executionName
        eventResponse
        taskStatus
        input
        # ... more fields available
      }
      error {
        message
        code
        data
        stack
      }
    }
  }
}`}
</Editor>
<_Heading level={4} id={"abort-a-background-task"} nextElement={{
      "type": "code",
      "lang": "graphql",
      "meta": null
    }}>Abort a Background Task</_Heading>
<Editor title="" lang="graphql" mdxType="Editor">
{`mutation AbortATask {
  backgroundTasks {
    # message is optional
    abortTask(id: "yourTaskId", message: "My Reason for aborting the task") {
      data {
        id
        createdOn
        savedOn
        startedOn
        finishedOn
        definitionId
        iterations
        name
        input
        output
        # ... more fields available
      }
      error {
        message
        code
        data
        stack
      }
    }
  }
}`}
</Editor>
<_Heading level={3} id={"permissions"} nextElement={{
      "type": "paragraph"
    }}>Permissions</_Heading>
<p>{`To execute the mutations and queries for the Background Tasks, the user must have a `}<inlineCode parentName="p">{`Full Access`}</inlineCode>{`. In future releases we will fine grain the permissions.`}</p>
<_Heading level={2} id={"code-api"} nextElement={{
      "type": "paragraph"
    }}>Code API</_Heading>
<p>{`For examples, we will assume you are somewhere in the code where you have access to the Webiny `}<inlineCode parentName="p">{`context`}</inlineCode>{` object.`}</p>
<_Heading level={3} id={"list-all-background-task-definitions"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>List All Background Task Definitions</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`const results = await context.tasks.listDefinitions();`}
</Editor>
<_Heading level={3} id={"list-all-background-task-runs"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>List All Background Task Runs</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`const results = await context.tasks.listTasks({
    // all properties are optional
    where: {},
    sort: [],
    limit: 100,
    after: null
});`}
</Editor>
<_Heading level={3} id={"trigger-a-background-task"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>Trigger a Background Task</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`const result = await context.tasks.trigger({
    definition: "myTaskDefinition",
    // optional input for the task run
    input: {
        variableToPassAsInput: "someValue"
    },
    // optional name for the task run
    name: "My Custom Task Name"
});`}
</Editor>
<_Heading level={3} id={"abort-a-background-task"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>Abort a Background Task</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`const result = await context.tasks.trigger({
    id: "yourTaskId",
    // optional message
    message: "My Reason for aborting the task"
});`}
</Editor>
<_Heading level={3} id={"list-background-task-logs"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>List Background Task Logs</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`const results = await context.tasks.listLogs({
    // all properties are optional
    where: {},
    sort: [],
    limit: 100,
    after: null
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