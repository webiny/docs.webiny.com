/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image2 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/extending/assets/extend-graphql-api/my-posts-query.png'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/extending/assets/extend-graphql-api/my-posts-model.png'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Extend the GraphQL API",
  "description": "Learn how to extend the Headless CMS-related GraphQL types and operations.",
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
  "title": "Custom Queries",
  "slug": "custom-queries",
  "children": []
}, {
  "title": "FAQ",
  "slug": "faq",
  "children": [{
    "title": "What Is the context Object, and Where Are All of Its Properties Coming From?",
    "slug": "what-is-the-context-object-and-where-are-all-of-its-properties-coming-from",
    "children": []
  }]
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





<Alert type="success" title="What you'll learn" mdxType="Alert">
<ul>
<li parentName="ul">{`how to extend the Headless CMS-related GraphQL types and operations`}</li>
</ul>
</Alert>
<Alert type="info" mdxType="Alert">
<p>{`Use the `}<_Link href="/docs/5.x/core-development-concepts/basics/watch-command"><inlineCode parentName="p">{`webiny watch`}</inlineCode></_Link>{` command to continuously deploy application code changes into the cloud and instantly see them in action. For quick (manual) testing, you can use the built-in `}<_Link href="/docs/5.x/admin-area/basics/api-playground">{`API Playground`}</_Link>{`.`}</p>
</Alert>
<_Heading level={2} id={"custom-queries"} nextElement={{
      "type": "paragraph"
    }}>Custom Queries</_Heading>
<p>{`Let’s say we wanted to extend our GraphQL schema with a custom `}<inlineCode parentName="p">{`listMyPosts`}</inlineCode>{` query, which, as the name suggests, would enable us to quickly retrieve all posts created via the Headless CMS application, for the currently logged in user.`}</p>
<p>{`In other words, we want to return all content entries of the `}<strong parentName="p">{`Post`}</strong>{` content model, where the `}<inlineCode parentName="p">{`createdBy`}</inlineCode>{` points to the currently logged in user. For demonstration purposes, our `}<strong parentName="p">{`Post`}</strong>{` content model will be very simple:`}</p>
<Image src={_Image1} alt={"The Post Content Model"} mdxType="Image" />
<Alert type="success" mdxType="Alert">
<p>{`The `}<inlineCode parentName="p">{`createdBy`}</inlineCode>{` field is automatically assigned to every content entry and it represents the currently logged in user.`}</p>
</Alert>
<p>{`Creating the new `}<inlineCode parentName="p">{`listMyPosts`}</inlineCode>{` query can be achieved via a single `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/v5.35.0/packages/api-headless-cms/src/plugins/CmsGraphQLSchemaPlugin.ts"
      }}><inlineCode parentName="a">{`CmsGraphQLSchemaPlugin`}</inlineCode></a>{` plugin.`}</p>
<Editor title="apps/api/graphql/src/plugins/posts.ts" lang="ts" mdxType="Editor">
{`import { CmsGraphQLSchemaPlugin } from "@webiny/api-headless-cms";
import { ListResponse } from "@webiny/handler-graphql";

// Make sure to import the \`Context\` interface and pass it to the \`CmsGraphQLSchemaPlugin\`
// plugin. Apart from making your application code type-safe, it will also make the
// interaction with the \`context\` object significantly easier.
import type { Context } from "@webiny/api-serverless-cms";

export const myPosts = () => [
  new CmsGraphQLSchemaPlugin<Context>({
    // Extend the \`Query\` type with the \`listMyPosts\` query. Note the \`PostListResponse\` type.
    // It exists because we've previously created the \`Post\` content model via Admin Area.
    typeDefs: /* GraphQL */ \`
      extend type Query {
        # List posts that were created by the currently logged in user.
        listMyPosts: PostListResponse
      }
    \`,
    // In order for the \`listMyPosts\` to work, we also need to create a resolver function.
    resolvers: {
      Query: {
        listMyPosts: async (_, args: { id: string }, context) => {
          const { security, cms } = context;

          // Retrieve the \`post\` model.
          const model = await cms.getModel("skills");

          // Use the \`cms.entries.listLatest\` method to fetch latest entries for the currently
          // logged in user. Note that you could also use the \`listPublished\` method here instead
          // of \`cms.entries.listLatest\`, if a list of published pages is what you need.
          const [items, meta] = await cms.listLatestEntries(
            model,
            {
              where: {
                // Retrieving the currently logged is as easy as calling the security.getIdentity method.
                createdBy: security.getIdentity().id
              }
            }
          );

          return new ListResponse(items, meta);
        }
      }
    }
  })
];`}
</Editor>
<Alert type="info" mdxType="Alert">
<p>{`The code above can be placed in the `}<a parentName="p" {...{
          "href": "https://github.com/webiny/webiny-examples/blob/master/headless-cms/extend-graphql-api/custom-queries/5.35.x/apps/api/graphql/src/plugins/posts.ts"
        }}><inlineCode parentName="a">{`apps/api/graphql/src/plugins/posts.ts`}</inlineCode></a>{` file, which doesn’t exist by default, so you will have to create it manually. Furthermore, once the file is created, make sure that it’s actually imported and registered in the `}<a parentName="p" {...{
          "href": "https://github.com/webiny/webiny-examples/blob/master/headless-cms/extend-graphql-api/custom-queries/5.35.x/apps/api/graphql/src/index.ts"
        }}><inlineCode parentName="a">{`apps/api/graphql/src/index.ts`}</inlineCode></a>{` entrypoint file.`}</p>
</Alert>
<p>{`With all the changes in place, we should be able to run the following GraphQL mutation:`}</p>
<Editor title="" lang="graphql" mdxType="Editor">
{`{
  listPosts {
    data {
      title
      text
    }
  }
  listMyPosts {
    data {
      title
      text
    }
  }
}`}
</Editor>
<p>{`For example:`}</p>
<Image src={_Image2} alt={"Using the listMyPosts Query"} mdxType="Image" />
<p>{`As we can see, the `}<inlineCode parentName="p">{`listPosts`}</inlineCode>{` query returned a total of three posts. On the other hand, the `}<inlineCode parentName="p">{`listMyPosts`}</inlineCode>{` only returned posts for the currently logged-in user, which is the expected result.`}</p>
<_Heading level={2} id={"faq"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>FAQ</_Heading>
<_Heading level={3} id={"what-is-the-context-object-and-where-are-all-of-its-properties-coming-from"} nextElement={{
      "type": "paragraph"
    }}>What Is the<code>context</code>Object, and Where Are All of Its Properties Coming From?</_Heading>
<p>{`In the shown examples, you may have noticed the use of the `}<inlineCode parentName="p">{`context`}</inlineCode>{` object in GraphQL resolver functions. This object contains multiple different properties, mainly being defined from different Webiny applications that were imported in the GraphQL API’s `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-examples/blob/master/headless-cms/extend-graphql-api/custom-queries/5.35.x/apps/api/graphql/src/index.ts"
      }}><inlineCode parentName="a">{`apps/api/graphql/src/index.ts`}</inlineCode></a>{` entrypoint file.`}</p>
<p>{`That’s why, for example, we were able to utilize the `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/v5.11.0/packages/api-headless-cms/src/content/plugins/crud/contentModel.crud.ts#L126"
      }}><inlineCode parentName="a">{`cms.models.get`}</inlineCode></a>{` and `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/v5.11.0/packages/api-headless-cms/src/content/plugins/crud/contentEntry.crud.ts#L286"
      }}><inlineCode parentName="a">{`cms.entries.listLatest`}</inlineCode></a>{` methods.`}</p>
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