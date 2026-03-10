/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { CanIUseThis } from "@/components/CanIUseThis";
import { WhatYouWillLearn } from "@/components/WhatYouWillLearn";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Built-in Background Tasks",
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
  "title": "Built-in Background Tasks",
  "slug": "built-in-background-tasks",
  "children": [{
    "title": "Amazon OpenSearch - Reindexing Background Task",
    "slug": "amazon-open-search-reindexing-background-task",
    "children": []
  }, {
    "title": "Amazon OpenSearch - Create Index Background Task",
    "slug": "amazon-open-search-create-index-background-task",
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
<li parentName="ul">{`what are available built-in background tasks`}</li>
<li parentName="ul">{`how to run built-in background tasks`}</li>
</ul>
</WhatYouWillLearn>
<_Heading level={2} id={"built-in-background-tasks"} nextElement={{
      "type": "paragraph"
    }}>Built-in Background Tasks</_Heading>
<p>{`The following is a list of background tasks that are included in Webiny by default.`}</p>
<_Heading level={3} id={"amazon-open-search-reindexing-background-task"} nextElement={{
      "type": "jsx"
    }}>Amazon OpenSearch - Reindexing Background Task</_Heading>
<Alert type="info" mdxType="Alert">
<p>{`  This task can be used with the Amazon DynamoDB + Amazon OpenSearch `}<_Link href="/docs/5.x/architecture/introduction#different-database-setups">{`database setup`}</_Link>{`. It can be also used with the legacy Amazon DynamoDB + Amazon Elasticsearch setup.`}</p>
</Alert>
<p>{`The `}<strong parentName="p">{`Reindexing Task`}</strong>{` is a background task that scans through the DynamoDB Elasticsearch table and pushes the data into the specific Elasticsearch/OpenSearch index.
Internally it is a bit more than that, but this is the basic idea. You can check the `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/abb442c6d67c97980b8053c5e53db7fb4fec88b4/packages/api-elasticsearch-tasks/src/tasks/reindexing/reindexingTaskDefinition.ts#L12"
      }}>{`definition`}</a>{` and the `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/abb442c6d67c97980b8053c5e53db7fb4fec88b4/packages/api-elasticsearch-tasks/src/tasks/reindexing/ReindexingTaskRunner.ts#L40"
      }}>{`runner`}</a>{` code for more information.`}</p>
<p>{`The task can be triggered either via code or via the GraphQL API.`}</p>
<h5>{`Triggering the Task via Code`}</h5>
<p>{`Let’s say that you have a Page Builder lifecycle event hook which triggers the task when the page is published, but only on index which contains the word `}<inlineCode parentName="p">{`page`}</inlineCode>{` in its name.`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`const myHook = () => {
  return new ContextPlugin(async context => {
    context.pageBuilder.onPageAfterPublish(async () => {
      await context.tasks.trigger({
        definition: "elasticsearchReindexing",
        input: {
          matching: "page"
        }
      });
    });
  });
};`}
</Editor>
<h5>{`Triggering the Task via GraphQL API`}</h5>
<p>{`The task can be triggered via the GraphQL API, with the following mutation:`}</p>
<Editor title="" lang="graphql" mdxType="Editor">
{`mutation TriggerTask {
  backgroundTasks {
    triggerTask(definition: elasticsearchReindexing, input: { matching: "page" }) {
      data {
        id
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
<p>{`The task disables indexing on all matching indexes, and enables it when the task is finished.
This is done to reduce the strain on the Elasticsearch/OpenSearch cluster as the reindexing operation is a heavy one.`}</p>
<_Heading level={3} id={"amazon-open-search-create-index-background-task"} nextElement={{
      "type": "jsx"
    }}>Amazon OpenSearch - Create Index Background Task</_Heading>
<Alert type="info" mdxType="Alert">
<p>{`  This task can be used with the Amazon DynamoDB + Amazon OpenSearch `}<_Link href="/docs/5.x/architecture/introduction#different-database-setups">{`database setup`}</_Link>{`. It can be also used with the legacy Amazon DynamoDB + Amazon Elasticsearch setup.`}</p>
</Alert>
<p>{`The `}<strong parentName="p">{`Create Index`}</strong>{` background task is a task which creates all missing indexes in the Amazon OpenSearch cluster.`}</p>
<p>{`The task goes through all the CMS Models and creates indexes which do not exist.
The task also creates Form Builder and Page Builder indexes.`}</p>
<p>{`The task can be triggered either via code or via the GraphQL API.`}</p>
<h5>{`Triggering the Task via GraphQL API`}</h5>
<Editor title="" lang="graphql" mdxType="Editor">
{`mutation TriggerCreateMissingIndexesTask {
  backgroundTasks {
    triggerTask(
      definition: elasticsearchCreateIndexes
      input: {
        matching: "string matching your index, or nothing" # optional
      }
    ) {
      data {
        id
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
<p>{`Then you can check the task status and output with the following query:`}</p>
<Editor title="" lang="graphql" mdxType="Editor">
{`query GetCreateIndexTask {
  backgroundTasks {
    getTask(id: "id you got from task trigger") {
      data {
        id
        name
        taskStatus
        output
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
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;