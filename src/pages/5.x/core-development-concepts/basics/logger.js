/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import {Alert} from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Logger",
  "description": "Learn about Logger which we internally use",
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
  "title": "How to Use Logger",
  "slug": "how-to-use-logger",
  "children": []
}, {
  "title": "How to Access Logger Logs?",
  "slug": "how-to-access-logger-logs",
  "children": [{
    "title": "DynamoDB Table",
    "slug": "dynamo-db-table",
    "children": []
  }, {
    "title": "GraphQL API",
    "slug": "graph-ql-api",
    "children": [{
      "title": "List Logs",
      "slug": "list-logs"
    }, {
      "title": "Prune Logs",
      "slug": "prune-logs"
    }]
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



<Alert type="success" title="What you'll learn" mdxType="Alert">
<ul>
<li parentName="ul">{`what is the Logger`}</li>
<li parentName="ul">{`how to use the Logger`}</li>
</ul>
</Alert>
<Alert type="warning" mdxType="Alert">
  This feature will change in the future. We cannot guarantee the data integrity after the system upgrade (in minor version, eg. 5.42.x to 5.43.0)
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`Webiny logger is internal feature which we use to log errors and other information into a DynamoDB Log table.`}</p>
<p>{`For Logger to work, we deploy a new DynamoDB table called `}<inlineCode parentName="p">{`webiny-logs`}</inlineCode>{`.`}</p>
<_Heading level={2} id={"how-to-use-logger"} nextElement={{
      "type": "paragraph"
    }}>How to Use Logger</_Heading>
<p>{`To use the Logger in your project, you can access it from the Webiny context.`}</p>
<p>{`There are multiple levels of logging available:`}</p>
<ul>
<li parentName="ul"><inlineCode parentName="li">{`debug`}</inlineCode></li>
<li parentName="ul"><inlineCode parentName="li">{`notice`}</inlineCode></li>
<li parentName="ul"><inlineCode parentName="li">{`info`}</inlineCode></li>
<li parentName="ul"><inlineCode parentName="li">{`warn`}</inlineCode></li>
<li parentName="ul"><inlineCode parentName="li">{`error`}</inlineCode></li>
</ul>
<p>{`When you want to log something, you can use the following code:`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import type {Context} from "./types";
import {ContextPlugin} from "@webiny/handler-aws";

const myCustomPlugin = new ContextPlugin<Context>(async context => {
    // some custom code
    try {
      await someAsyncFunction();
    } catch(ex) {
      const log = context.logger.withSource("where-did-the-log-come-from");
      // it will log the message with the source "where-did-the-log-come-from"
      // and the level "error"
      log.error({
        message: "Something is wrong with my custom code!",
        error: ex
      });
      // maybe rethrow it?
      throw ex;
    }
});`}
</Editor>
<p>{`Note that the `}<inlineCode parentName="p">{`where-did-the-log-come-from`}</inlineCode>{` is your custom string, which identifies where the log was created.`}</p>
<p>{`This is something you can use to filter logs later.`}</p>
<_Heading level={2} id={"how-to-access-logger-logs"} nextElement={{
      "type": "paragraph"
    }}>How to Access Logger Logs?</_Heading>
<p>{`There are two ways to access the logs:`}</p>
<ul>
<li parentName="ul">{`directly from the DynamoDB table `}<inlineCode parentName="li">{`webiny-logs`}</inlineCode></li>
<li parentName="ul">{`using the GraphQL API`}</li>
</ul>
<_Heading level={3} id={"dynamo-db-table"} nextElement={{
      "type": "paragraph"
    }}>DynamoDB Table</_Heading>
<p>{`You can access the logs directly from the DynamoDB table `}<inlineCode parentName="p">{`webiny-logs`}</inlineCode>{`. The table has the following structure:`}</p>
<Editor title="" lang="ts" mdxType="Editor">
{`interface Log {
  id: string;
  createdOn: string;
  tenant: string;
  locale: string;
  source: string;
  type: string;
  // this is the data that was logged - it's always compressed
  data: {
    compression: "GZIP",
    value: string// compressed value
  };
}`}
</Editor>
<p>{`The data is always compressed using GZIP, so you must decompress it before you can read it.`}</p>
<_Heading level={3} id={"graph-ql-api"} nextElement={{
      "type": "paragraph"
    }}>GraphQL API</_Heading>
<p>{`You can also access the logs using the GraphQL API on `}<inlineCode parentName="p">{`/graphql`}</inlineCode>{` endpoint. There are multiple queries and mutations available:`}</p>
<ul>
<li parentName="ul"><inlineCode parentName="li">{`listLogs`}</inlineCode>{` - to list all logs`}</li>
<li parentName="ul"><inlineCode parentName="li">{`getLog`}</inlineCode>{` - to get a single log`}</li>
<li parentName="ul"><inlineCode parentName="li">{`deleteLog`}</inlineCode>{` - to delete a single`}</li>
<li parentName="ul"><inlineCode parentName="li">{`deleteLogs`}</inlineCode>{` - to delete multiple logs`}</li>
<li parentName="ul"><inlineCode parentName="li">{`pruneLogs`}</inlineCode>{` - to delete all logs older than 60 seconds`}</li>
</ul>
<Alert type="info" mdxType="Alert">
  
  For detailed information on how to use the GraphQL API, check out the API Playground in your Webiny Admin UI.
  
</Alert>
<_Heading level={4} id={"list-logs"} nextElement={{
      "type": "paragraph"
    }}>List Logs</_Heading>
<p>{`To list all logs, you can use the `}<inlineCode parentName="p">{`listLogs`}</inlineCode>{` query. Here is an example of the query:`}</p>
<Editor title="" lang="graphql" mdxType="Editor">
{`query ListLogs {
  logs {
    listLogs(
        where: {
          tenant: "root",
          source:"myCustomSource",
          type: error
        },
        sort: DESC,
        limit: 100,
        after: "cursorFromPreviousRequest"
) {
      data {
        id
        type
        source
        data
        createdOn
      }
      error {
        message
        code
        data
        stack
      }
      meta {
        hasMoreItems
        cursor
      }
    }
  }
}`}
</Editor>
<p>{`All arguments in `}<inlineCode parentName="p">{`listTags`}</inlineCode>{` query are optional.`}</p>
<p>{`You can filter the logs by `}<inlineCode parentName="p">{`tenant`}</inlineCode>{`, `}<inlineCode parentName="p">{`source`}</inlineCode>{` and `}<inlineCode parentName="p">{`type`}</inlineCode>{`. Or you can just list all logs, without any filtering applied.`}</p>
<_Heading level={4} id={"prune-logs"} nextElement={{
      "type": "paragraph"
    }}>Prune Logs</_Heading>
<p>{`To delete all logs older than 60 seconds, you can use the `}<inlineCode parentName="p">{`pruneLogs`}</inlineCode>{` mutation. Here is an example of the mutation:`}</p>
<Editor title="" lang="graphql" mdxType="Editor">
{`mutation PruneLogs {
  logs {
    pruneLogs {
      data {
        task {
          id
        }
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
<p>{`The `}<inlineCode parentName="p">{`pruneLogs`}</inlineCode>{` mutation will actually start a background task that will delete the logs. The task ID will be returned in the response, so you can track its progress.`}</p>
<p>{`If you try to prune logs while another prune task is running, you will get an error.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;