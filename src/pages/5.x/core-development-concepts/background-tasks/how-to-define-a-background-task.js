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
  "title": "How to Define a Background Task",
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
  "title": "Basic Definition",
  "slug": "basic-definition",
  "children": [{
    "title": "Public Task",
    "slug": "public-task",
    "children": []
  }, {
    "title": "Private Task",
    "slug": "private-task",
    "children": []
  }]
}, {
  "title": "Advanced Definition",
  "slug": "advanced-definition",
  "children": []
}, {
  "title": "Registering the Task",
  "slug": "registering-the-task",
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
<li parentName="ul">{`difference between public and private Background Tasks`}</li>
<li parentName="ul">{`how to define your own Background Task`}</li>
<li parentName="ul">{`how to register your Background Task`}</li>
</ul>
</WhatYouWillLearn>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`First, you need to know that there are two types of Background Tasks:`}</p>
<ul>
<li parentName="ul">{`public - can be called via GraphQL API or the programmatic API`}</li>
<li parentName="ul">{`private - can be called only through the programmatic API`}</li>
</ul>
<p>{`Definition of the task is the same for both types of tasks, with a difference of the method name used to define the task.`}</p>
<_Heading level={2} id={"basic-definition"} nextElement={{
      "type": "paragraph"
    }}>Basic Definition</_Heading>
<p>{`To see all available properties, and information about the properties, for the task definition, check the `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/abb442c6d67c97980b8053c5e53db7fb4fec88b4/packages/tasks/src/types.ts#L328"
      }}><inlineCode parentName="a">{`ITaskDefinition`}</inlineCode></a>{` interface.`}</p>
<p>{`There are few properties, which should not be used:`}</p>
<ul>
<li parentName="ul"><inlineCode parentName="li">{`fields`}</inlineCode>{` - not implemented yet`}</li>
<li parentName="ul"><inlineCode parentName="li">{`isPrivate`}</inlineCode>{` - set automatically when a user defines a task via `}<inlineCode parentName="li">{`createPrivateTaskDefinition`}</inlineCode></li>
</ul>
<_Heading level={3} id={"public-task"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>Public Task</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { createTaskDefinition } from "@webiny/tasks";

const myPublicTaskDefinition = createTaskDefinition({
    id: "myPublicTask",
    title: "A Task Accessible Via API",
    async run({response}) {
        // your code here
        return response.done();
    }
});`}
</Editor>
<_Heading level={3} id={"private-task"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>Private Task</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { createPrivateTaskDefinition } from "@webiny/tasks";

const myPrivateTaskDefinition = createPrivateTaskDefinition({
    id: "myPrivateTask",
    title: "A Task Accessible Only Via The Code",
    async run({response}) {
        // your code here
        return response.done();
    }
});`}
</Editor>
<_Heading level={2} id={"advanced-definition"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>Advanced Definition</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`const syncArticles = createTaskDefinition({
    id: "syncArticles",
    title: "Sync Articles",
    description: "A task which syncs Webiny articles with another system.",
    // optional when defined via the createTaskDefinition or createPrivateTaskDefinition method
    // default value is 500
    maxIterations: 1000,
    async run({response}) {
        // your code which syncs articles with another system
        return response.done();
    },
    onBeforeTrigger: async({context, input}) => {
        // check if articles are already syncing
        // if yes, throw an error
    },
    onDone: async({context, task}) => {
        // notify another system that articles are synced
    },
    onError: async({context, task}) => {
        // notify another system that articles are not synced due to an error
    },
    onAbort: async({context, task}) => {
        // notify another system that articles are not synced due to user aborting the task
    },
    onMaxIterations: async({context, task}) => {
        // notify another system that articles are not synced due to reaching max iterations of the task
    },
});`}
</Editor>
<_Heading level={2} id={"registering-the-task"} nextElement={{
      "type": "paragraph"
    }}>Registering the Task</_Heading>
<p>{`Of course, as all other Webiny plugins, users must register the task definition in the `}<inlineCode parentName="p">{`plugins`}</inlineCode>{` array of the `}<inlineCode parentName="p">{`createHandler`}</inlineCode>{` function.`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`export const handler = createHandler({
    plugins: [
        // ...rest of plugins
        syncArticles
    ]
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