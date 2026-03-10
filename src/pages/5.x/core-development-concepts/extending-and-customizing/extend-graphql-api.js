/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import listBooksQuery from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/core-development-concepts/extending-and-customizing/assets/extend-graphql-api/list-books-query.png";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Extend GraphQL API",
  "description": "Learn how to extend Webiny's GraphQL API.",
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
  "title": "Introduction",
  "slug": "introduction",
  "children": []
}, {
  "title": "Getting Started",
  "slug": "getting-started",
  "children": []
}, {
  "title": "Extending the Main GraphQL API",
  "slug": "extending-the-main-graph-ql-api",
  "children": []
}, {
  "title": "Additional Examples",
  "slug": "additional-examples",
  "children": []
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
const ExtensionsGettingStarted = makeShortcode("ExtensionsGettingStarted");
const Editor = makeShortcode("Editor");
const Image = makeShortcode("Image");
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
<li parentName="ul">{`how to extend Webiny’s GraphQL API`}</li>
</ul>
</Alert>
<_Heading level={2} id={"introduction"} nextElement={{
      "type": "paragraph"
    }}>Introduction</_Heading>
<p>{`When it comes to backend HTTP API development, Webiny relies on `}<a parentName="p" {...{
        "href": "https://graphql.org/"
      }}>{`GraphQL`}</a>{`. In fact, all of the Webiny applications, such as `}<a parentName="p" {...{
        "href": "https://www.webiny.com/serverless-app/page-builder"
      }}>{`Page Builder`}</a>{` and `}<a parentName="p" {...{
        "href": "https://www.webiny.com/serverless-app/headless-cms"
      }}>{`Headless CMS`}</a>{`, use it.`}</p>
<p>{`In this article, we explain how to extend Webiny’s main GraphQL API. Note that Webiny also provides a separate GraphQL API for the Headless CMS application, which can be `}<_Link href="/docs/5.x/headless-cms/extending/extend-graphql-api">{`extended`}</_Link>{` as well.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`  To learn more about the Headless CMS GraphQL API, different API types, support for multiple locales, and more, make sure to check out the `}<_Link href="/docs/5.x/headless-cms/basics/graphql-api">{`Headless CMS GraphQL API`}</_Link>{` key topic.`}</p>
</Alert>
<_Heading level={2} id={"getting-started"} nextElement={{
      "type": "jsx"
    }}>Getting Started</_Heading>
<ExtensionsGettingStarted type={"api"} name={"extendGraphqlApi"} dependencies={"@webiny/api-serverless-cms"} scaffoldCommandExtraInfo={<>
      In the example below, we'll be using the <code>createGraphQLSchemaPlugin</code> plugin factory from the <code>@webiny/api-serverless-cms</code> package, so we've included it in the list of dependencies.
    </>} mdxType="ExtensionsGettingStarted" />
<_Heading level={2} id={"extending-the-main-graph-ql-api"} nextElement={{
      "type": "paragraph"
    }}>Extending the Main GraphQL API</_Heading>
<p>{`Let’s extend Webiny’s main GraphQL API with the new `}<inlineCode parentName="p">{`listBooks`}</inlineCode>{` query.  `}</p>
<p>{`To do this, we use the `}<inlineCode parentName="p">{`createGraphQLSchemaPlugin`}</inlineCode>{` plugin factory from the `}<inlineCode parentName="p">{`@webiny/api-serverless-cms`}</inlineCode>{` package:`}</p>
<Editor title="extensions/extendGraphqlApi/src/index.ts" lang="ts" mdxType="Editor">
{`import { createGraphQLSchemaPlugin } from "@webiny/api-serverless-cms";

export const createExtension = () => {
    return [
        createGraphQLSchemaPlugin({
            typeDefs: /* GraphQL */ \`
              type Book {
                title: String
                description: String
              }
              extend type Query {
                # Returns a list of all users.
                listBooks: [Book]
              }
            \`,
            resolvers: {
              Query: {
                listBooks: async (_, args, context) => {
                  // In a real life application, these would be loaded from a database.
                  const books = [
                    { title: "First book", description: "This is the first book." },
                    { title: "Second book", description: "This is the second book." }
                  ];
          
                  return books;
                }
              }
            }
        })
    ];
};`}
</Editor>
<p>{`With this code in place, we should be able to run the following GraphQL query: `}</p>
<Editor title="" lang="graphql" mdxType="Editor">
{`{
  listBooks {
    title
    description
  }
}`}
</Editor>
<p>{`The easiest way to test it is by using the `}<a parentName="p" {...{
        "href": "https://www.webiny.com/docs/5.x/admin-area/basics/api-playground"
      }}>{`API Playground`}</a>{` in the Admin app:`}</p>
<Image src={listBooksQuery} title={<>Testing the <code>listBooks</code> query in the API Playground</>} mdxType="Image" />
<Alert type={"info"} mdxType="Alert">
<p>{`  Run `}<inlineCode parentName="p">{`yarn webiny watch admin --env ENVIRONMENT_NAME`}</inlineCode>{` to start the Admin app in the development mode. Replace `}<inlineCode parentName="p">{`ENVIRONMENT_NAME`}</inlineCode>{` with the name of the environment you’re working on.`}</p>
</Alert>
<_Heading level={2} id={"additional-examples"} nextElement={{
      "type": "list",
      "ordered": false,
      "start": null,
      "spread": false
    }}>Additional Examples</_Heading>
<ul>
<li parentName="ul"><_Link href="/docs/5.x/headless-cms/extending/extend-graphql-api">{`Headless CMS - Extend the GraphQL API`}</_Link></li>
<li parentName="ul"><_Link href="/docs/5.x/page-builder/extending/extend-graphql-api">{`Page Builder - Extend the GraphQL API`}</_Link></li>
</ul>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;