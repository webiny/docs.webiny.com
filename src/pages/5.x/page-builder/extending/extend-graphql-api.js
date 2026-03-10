/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image5 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/page-builder/extending/assets/extend-graphql-api/duplicates-list-pages.png'
import _Image4 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/page-builder/extending/assets/extend-graphql-api/duplicates-run-mutation.png'
import _Image3 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/page-builder/extending/assets/extend-graphql-api/list-pages-query.png'
import _Image2 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/page-builder/extending/assets/extend-graphql-api/special-query-results.png'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/page-builder/extending/assets/extend-graphql-api/special-run-mutation.png'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Extend GraphQL API",
  "description": "Learn how to extend the Page Builder-related GraphQL types and operations.",
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
  "title": "Adding New Page Fields",
  "slug": "adding-new-page-fields",
  "children": []
}, {
  "title": "Modifying GraphQL Queries",
  "slug": "modifying-graph-ql-queries",
  "children": []
}, {
  "title": "Custom GraphQL Mutations",
  "slug": "custom-graph-ql-mutations",
  "children": []
}, {
  "title": "FAQ",
  "slug": "faq",
  "children": [{
    "title": "What Is the context Object and Where Are All of Its Properties Coming From?",
    "slug": "what-is-the-context-object-and-where-are-all-of-its-properties-coming-from",
    "children": []
  }]
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
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
<li parentName="ul">{`how to extend the Page Builder-related GraphQL types and operations`}</li>
</ul>
</Alert>
<Alert type="info" mdxType="Alert">
<p>{`Use the `}<_Link href="/docs/5.x/core-development-concepts/basics/watch-command"><inlineCode parentName="p">{`webiny watch`}</inlineCode></_Link>{` command to continuously deploy application code changes into the cloud and instantly see them in action. For quick (manual) testing, you can use the built-in `}<_Link href="/docs/5.x/admin-area/basics/api-playground">{`API Playground`}</_Link>{`.`}</p>
</Alert>
<_Heading level={2} id={"adding-new-page-fields"} nextElement={{
      "type": "paragraph"
    }}>Adding New Page Fields</_Heading>
<p>{`In this example, we’ll add a new `}<inlineCode parentName="p">{`special`}</inlineCode>{` boolean field to the central `}<inlineCode parentName="p">{`PbPage`}</inlineCode>{` GraphQL type. As the name suggests, the field will tell us whether a page is special or not.`}</p>
<p>{`It all starts with the `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/v5.11.0/packages/handler-graphql/src/plugins/GraphQLSchemaPlugin.ts#L10"
      }}><inlineCode parentName="a">{`GraphQLSchemaPlugin`}</inlineCode></a>{`, which we’ll need to register within our GraphQL API’s application code. Once we have that, optionally, we might want to register the `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/v5.11.0/packages/api-page-builder/src/plugins/IndexPageDataPlugin.ts#L14"
      }}><inlineCode parentName="a">{`IndexPageDataPlugin`}</inlineCode></a>{` plugin, which will enable us to get the value of the new `}<inlineCode parentName="p">{`special`}</inlineCode>{` field also while listing pages.`}</p>
<Editor title="apps/api/graphql/src/plugins/pages.ts" lang="ts" mdxType="Editor">
{`import { GraphQLSchemaPlugin } from "@webiny/handler-graphql/plugins";
import { IndexPageDataPlugin } from "@webiny/api-page-builder/plugins/IndexPageDataPlugin";
import { Page } from "@webiny/api-page-builder/types";

// Make sure to import the \`Context\` interface and pass it to the \`GraphQLSchemaPlugin\`
// plugin. Apart from making your application code type-safe, it will also make the
// interaction with the \`context\` object significantly easier.
import { Context } from "~/types";

interface ExtendedPage extends Page {
  special: boolean;
}

export default [
  // Adding a new \`special\` field to the PbPage type consists of three steps:
  // 1. Extend the fundamental \`PbPage\` type.
  // 2. Extend the \`PbPageListItem\` type which is used when listing pages.
  // 3. In order to update the field, we also need to extend the \`PbUpdatePageInput\` input.
  new GraphQLSchemaPlugin<Context>({
    typeDefs: /* GraphQL */ \`
      extend type PbPage {
        special: Boolean
      }

      extend type PbPageListItem {
        special: Boolean
      }

      extend input PbUpdatePageInput {
        special: Boolean
      }
    \`
  }),

  // This step is only required if you're using DynamoDB + ElasticSearch setup and you want
  // to be able to get the value of the \`special\` field while listing pages.
  // With this plugin, we ensure that the value of the \`special\` field is also stored in
  // ElasticSearch, which is where the data is being retrieved from while listing pages.
  new IndexPageDataPlugin<ExtendedPage>(({ data, page }) => {
    // \`data\` represents the current page's data that will be stored in ElasticSearch.
    // Let's modify it, by adding the value of the new \`special\` flag to it.
    data.special = page.special;
  })
];`}
</Editor>
<Alert type="info" mdxType="Alert">
<p>{`The code above can be placed in the `}<a parentName="p" {...{
          "href": "https://github.com/webiny/webiny-examples/blob/master/page-builder/extend-graphql-api/extend-page/api/code/graphql/src/plugins/pages.ts"
        }}><inlineCode parentName="a">{`api/graphql/src/plugins/pages.ts`}</inlineCode></a>{` file, which doesn’t exist by default, so you will have to create it manually. Furthermore, once the file is created, make sure that it’s actually imported and registered in the `}<a parentName="p" {...{
          "href": "https://github.com/webiny/webiny-examples/blob/master/page-builder/extend-graphql-api/extend-page/api/code/graphql/src/index.ts"
        }}><inlineCode parentName="a">{`api/graphql/src/index.ts`}</inlineCode></a>{` entrypoint file.`}</p>
</Alert>
<p>{`With all the changes in place, we should be able to update an existing Page Builder page and mark it as special, with the following mutation:`}</p>
<Editor title="" lang="graphql" mdxType="Editor">
{`mutation UpdatePage($id: ID!, $data: PbUpdatePageInput!) {
  pageBuilder {
    updatePage(id: $id, data: $data) {
      data {
        id
        title
        special
      }
    }
  }
}`}
</Editor>
<p>{`For example:`}</p>
<Image src={_Image1} alt={"Marking an Existing Page as Special"} mdxType="Image" />
<p>{`Running the above mutation should mark the page with the `}<inlineCode parentName="p">{`60f903881f76a1000820068e#0001`}</inlineCode>{` ID as special, which we should be able to see afterwards while performing queries:`}</p>
<Image src={_Image2} alt={"Querying Pages with the New Special Field Included in the Results"} mdxType="Image" />
<_Heading level={2} id={"modifying-graph-ql-queries"} nextElement={{
      "type": "paragraph"
    }}>Modifying GraphQL Queries</_Heading>
<p>{`If needed, existing pages-related GraphQL queries can be modified too.`}</p>
<p>{`Continuing from the `}<a parentName="p" {...{
        "href": "#adding-new-page-fields"
      }}>{`previous`}</a>{` example, let’s say we also wanted to be able to list special pages only. We can do that with the help of the `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/v5.11.0/packages/api-page-builder/src/plugins/SearchLatestPagesPlugin.ts#L3"
      }}><inlineCode parentName="a">{`SearchLatestPagesPlugin`}</inlineCode></a>{` and `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/v5.11.0/packages/api-page-builder/src/plugins/SearchPublishedPagesPlugin.ts#L3"
      }}><inlineCode parentName="a">{`SearchPublishedPagesPlugin`}</inlineCode></a>{` plugins (both extending `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/v5.11.0/packages/api-page-builder/src/plugins/SearchPagesPlugin.ts#L22"
      }}><inlineCode parentName="a">{`SearchPagesPlugin`}</inlineCode></a>{`):`}</p>
<Editor title="apps/api/graphql/src/plugins/pages.ts" lang="diff-ts" mdxType="Editor">
{`import { GraphQLSchemaPlugin } from '@webiny/handler-graphql/plugins'
import { IndexPageDataPlugin } from '@webiny/api-page-builder/plugins/IndexPageDataPlugin'
import { Page } from '@webiny/api-page-builder/types'
import { SearchLatestPagesPlugin } from '@webiny/api-page-builder/plugins/SearchLatestPagesPlugin'
import { SearchPublishedPagesPlugin } from '@webiny/api-page-builder/plugins/SearchPublishedPagesPlugin'

// Make sure to import the \`Context\` interface and pass it to the \`GraphQLSchemaPlugin\`
// plugin. Apart from making your application code type-safe, it will also make the
// interaction with the \`context\` object significantly easier.
import { Context } from '~/types'

interface ExtendedPage extends Page {
  special: boolean
}

export default [
  // We can extend the \`PbListPagesWhereInput\` and \`PbListPublishedPagesWhereInput\`
  // types in order to enable filtering pages by the \`special\` field. Note that in order for this
  // to work, we'll also need \`SearchLatestPagesPlugin\` and \`SearchLatestPagesPlugin\` (see below).
  new GraphQLSchemaPlugin<Context>({
    typeDefs: /* GraphQL */ \`
      extend type PbPage {
        special: Boolean
      }

      extend type PbPageListItem {
        special: Boolean
      }

      extend input PbUpdatePageInput {
        special: Boolean
      }

+     extend input PbListPagesWhereInput {
+       special: Boolean
+     }
+
+     extend input PbListPublishedPagesWhereInput {
+       special: Boolean
+     }
    \`,
  }),

  new IndexPageDataPlugin<ExtendedPage>(({ data, page }) => {
    data.special = page.special
  }),

+ // Query modifiers must be applied to both latest and published pages queries.
+ // Both of these make sure that if the GraphQL query contains \`special: true\` in the \`where\`
+ // input, that the ElasticSearch query is modified accordingly.
+ new SearchLatestPagesPlugin({
+   modifyQuery({ query, args }) {
+     if (args.where && args.where.special) {
+       query.must.push({
+         term: {
+           special: true,
+         },
+       })
+     }
+   },
+ }),
+ new SearchPublishedPagesPlugin({
+   modifyQuery({ query, args }) {
+     if (args.where && args.where.special) {
+       query.must.push({
+         term: {
+           special: true,
+         },
+       })
+     }
+   },
+ }),
]`}
</Editor>
<p>{`With all the changes in place, we should be able to run the following GraphQL query:`}</p>
<Editor title="" lang="graphql" mdxType="Editor">
{`query ListSpecialPages {
  pageBuilder {
    listPages(where: { special: true }) {
      data {
        title
        special
      }
      error {
        data
        message
        code
      }
    }
  }
}`}
</Editor>
<p>{`For example:`}</p>
<Image src={_Image3} alt={"Listing Special Pages"} mdxType="Image" />
<p>{`Note that because we’ve created both the `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/v5.11.0/packages/api-page-builder/src/plugins/SearchLatestPagesPlugin.ts#L3"
      }}><inlineCode parentName="a">{`SearchLatestPagesPlugin`}</inlineCode></a>{` and `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/v5.11.0/packages/api-page-builder/src/plugins/SearchPublishedPagesPlugin.ts#L3"
      }}><inlineCode parentName="a">{`SearchPublishedPagesPlugin`}</inlineCode></a>{` plugins, we can also apply the same `}<inlineCode parentName="p">{`special: true`}</inlineCode>{` filter within the `}<inlineCode parentName="p">{`listPublishedPages`}</inlineCode>{` GraphQL query.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`The difference between the `}<a parentName="p" {...{
          "href": "https://github.com/webiny/webiny-js/blob/v5.11.0/packages/api-page-builder/src/graphql/graphql/pages.gql.ts#L320"
        }}><inlineCode parentName="a">{`listPages`}</inlineCode></a>{` and `}<a parentName="p" {...{
          "href": "https://github.com/webiny/webiny-js/blob/v5.11.0/packages/api-page-builder/src/graphql/graphql/pages.gql.ts#L329"
        }}><inlineCode parentName="a">{`listPublishedPages`}</inlineCode></a>{` is in the returned results. The former will always return latest revisions of a pages, which is more useful while listing pages inside the Admin Area application. The latter always returns published revisions of pages, which is more suitable for public applications and websites.`}</p>
</Alert>
<_Heading level={2} id={"custom-graph-ql-mutations"} nextElement={{
      "type": "paragraph"
    }}>Custom GraphQL Mutations</_Heading>
<p>{`Let’s say we wanted to extend our GraphQL schema with the custom `}<inlineCode parentName="p">{`duplicatePage`}</inlineCode>{` mutation, which, as the name suggests, would enable us to make copies of pages.`}</p>
<p>{`We can achieve this with a single `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/v5.11.0/packages/handler-graphql/src/plugins/GraphQLSchemaPlugin.ts#L10"
      }}><inlineCode parentName="a">{`GraphQLSchemaPlugin`}</inlineCode></a>{` plugin.`}</p>
<Editor title="apps/api/graphql/src/plugins/pages.ts" lang="ts" mdxType="Editor">
{`import { GraphQLSchemaPlugin } from "@webiny/handler-graphql/plugins";
import { PbContext } from "@webiny/api-page-builder/types";
import { Response, ErrorResponse, NotFoundResponse } from "@webiny/handler-graphql/responses";

// Make sure to import the \`Context\` interface and pass it to the \`GraphQLSchemaPlugin\`
// plugin. Apart from making your application code type-safe, it will also make the
// interaction with the \`context\` object significantly easier.
import { Context } from "~/types";

export default [
  new GraphQLSchemaPlugin<Context>({
    // Extend the \`PbMutation\` type with the \`duplicatePage\` mutation.
    typeDefs: /* GraphQL */ \`
      extend type PbMutation {
        # Creates a copy of the provided page.
        duplicatePage(id: ID!): PbPageResponse
      }
    \`,
    // In order for the \`duplicatePage\` to work, we also need to create a resolver function.
    resolvers: {
      PbMutation: {
        duplicatePage: async (_, args: { id: string }, context: PbContext) => {
          // Retrieve the original page. If it doesn't exist, immediately exit.
          const pageToDuplicate = await context.pageBuilder.pages.get(args.id);
          if (!pageToDuplicate) {
            return new NotFoundResponse("Page not found.");
          }

          try {
            // We only need the \`id\` of the newly created page.
            const newPage = await context.pageBuilder.pages.create(pageToDuplicate.category);

            // Set data that will be assigned to the newly created page.
            const data = {
              title: \`Copy of \${pageToDuplicate.title}\`,
              path: \`\${pageToDuplicate.path}-copy-\${new Date().getTime()}\`,
              content: pageToDuplicate.content,
              settings: pageToDuplicate.settings
            };

            // Finally, update the newly created page.
            const updatedNewPage = await context.pageBuilder.pages.update(newPage.id, data);

            return new Response(updatedNewPage);
          } catch (e) {
            return new ErrorResponse(e);
          }
        }
      }
    }
  })
];`}
</Editor>
<Alert type="info" mdxType="Alert">
<p>{`The code above can be placed in the `}<a parentName="p" {...{
          "href": "https://github.com/webiny/webiny-examples/blob/master/page-builder/extend-graphql-api/custom-mutations/api/code/graphql/src/plugins/pages.ts"
        }}><inlineCode parentName="a">{`api/graphql/src/plugins/pages.ts`}</inlineCode></a>{` file, which doesn’t exist by default, so you will have to create it manually. Furthermore, once the file is created, make sure that it’s actually imported and registered in the `}<a parentName="p" {...{
          "href": "https://github.com/webiny/webiny-examples/blob/master/page-builder/extend-graphql-api/custom-mutations/api/code/graphql/src/index.ts"
        }}><inlineCode parentName="a">{`api/graphql/src/index.ts`}</inlineCode></a>{` entrypoint file.`}</p>
</Alert>
<p>{`With all the changes in place, we should be able to run the following GraphQL mutation:`}</p>
<Editor title="" lang="graphql" mdxType="Editor">
{`mutation DuplicatePage($id: ID!) {
  pageBuilder {
    duplicatePage(id: $id) {
      data {
        id
        title
        path
      }
    }
  }
}`}
</Editor>
<p>{`For example:`}</p>
<Image src={_Image4} alt={"Duplicating an Existing Page"} mdxType="Image" />
<p>{`After the mutation has been executed, we should be able to see the created copy in the list of pages:`}</p>
<Image src={_Image5} alt={"Listing Pages After A Copy Has Been Created"} mdxType="Image" />
<_Heading level={2} id={"faq"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>FAQ</_Heading>
<_Heading level={3} id={"what-is-the-context-object-and-where-are-all-of-its-properties-coming-from"} nextElement={{
      "type": "paragraph"
    }}>What Is the<code>context</code>Object and Where Are All of Its Properties Coming From?</_Heading>
<p>{`In the shown examples, you may have noticed we were using the `}<inlineCode parentName="p">{`context`}</inlineCode>{` object in GraphQL resolver functions. This object contains multiple different properties, mainly being defined from different Webiny applications that were imported in the GraphQL API’s `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-examples/blob/master/page-builder/extend-graphql-api/custom-mutations/api/code/graphql/src/index.ts"
      }}><inlineCode parentName="a">{`api/graphql/src/index.ts`}</inlineCode></a>{` entrypoint file.`}</p>
<p>{`That’s why, for example, we were able to utilize the `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/v5.11.0/packages/api-page-builder/src/graphql/crud/pages.crud.ts#L134"
      }}><inlineCode parentName="a">{`context.pageBuilder.pages.get`}</inlineCode></a>{` and `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/v5.11.0/packages/api-page-builder/src/graphql/crud/pages.crud.ts#L606"
      }}><inlineCode parentName="a">{`context.pageBuilder.pages.update`}</inlineCode></a>{` methods, in the `}<a parentName="p" {...{
        "href": "#custom-graph-ql-mutations"
      }}>{`Custom Mutations`}</a>{` section.`}</p>
<p>{`For easier discovery and type safety, we suggest a type is always assigned to the `}<inlineCode parentName="p">{`context`}</inlineCode>{` object in your GraphQL resolver functions.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;