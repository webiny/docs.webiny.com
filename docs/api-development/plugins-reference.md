---
id: plugins-reference
title: Plugins Reference
sidebar_label: Plugins Reference
---

# Summary

[`graphql-schema`](/docs/api-development/plugins-reference#graphql-schema)

[`graphql-context`](/docs/api-development/plugins-reference#graphql-context)

---

### [`graphql-schema`](/docs/api-development/plugins-reference#graphql-schema)

#### Summary

A plugin which enables you to create the GraphQL schema, consisting of type definitions and resolvers.

#### Type

```ts
type SchemaDefinition = {
    typeDefs: any;
    resolvers: any;
};

type SchemaDefinitionFactory = (params: {
    plugins: PluginsContainer;
}) => Promise<SchemaDefinition>;

type GraphQLSchemaPlugin = Plugin & {
    prepare?: (params: { plugins: PluginsContainer }) => void;
    schema: SchemaDefinition | SchemaDefinitionFactory;
    [key: string]: any;
}
```

#### Example

```ts
import gql from "graphql-tag";
import { emptyResolver } from "@webiny/commodo-graphql";

export default [
    {
        type: "graphql-schema",
        name: "graphql-schema-library",
        schema: {
            typeDefs: gql`
                type Book {
                    id: ID
                    title: String
                    pagesCount: Int
                }

                type BookInput {
                    id: ID
                    title: String
                    pagesCount: Int
                }

                type LibraryQuery {
                    getBook(id: ID): Book
                }

                type LibraryMutation {
                    createBook(data: BookInput): Book
                    editBook(data: BookInput): Book
                }

                extend type Query {
                    library: LibraryQuery
                }

                extend type Mutation {
                    library: LibraryMutation
                }
            `,
            resolvers: {
                Query: {
                    library: emptyResolver
                },
                Mutation: {
                    library: emptyResolver
                },
                LibraryQuery: {
                    getBook: () => { ... }
                },
                LibraryMutation: {
                    createBook: () => { ... }
                }
            }
        }
    }
];
```

### [`graphql-context`](/docs/api-development/plugins-reference#graphql-context)

#### Summary

A plugin which enables you to append additional pieces of information into the GraphQL context, that you can then utilize in GraphQL field resolvers. For example, the [Security app](http://localhost:3000/docs/webiny-apps/security/introduction) utilizes this plugin in order to set the currently logged-in user's data, so you can perform user-based checks in your resolvers.

#### Type

```ts
type GraphQLContextPlugin = Plugin & {
    preApply?: (context: GraphQLContext) => void | Promise<void>;
    apply?: (context: GraphQLContext) => void | Promise<void>;
    postApply?: (context: GraphQLContext) => void | Promise<void>;
};
```

#### Example

```ts
{
        type: "graphql-context",
        name: "graphql-context-add-some-meta-data",
        async apply(context) {
            context.someMetaData = await getSomeMetaData();
        }
}
```

Note that the `graphql-context` plugin's `preApply`, `apply`, and `postApply` methods are executed on every HTTP request, before the actual GraphQL resolvers get triggered. 
