---
id: has-scope
title: hasScope
sidebar_label: hasScope
---

You can utilize the `hasScope` helper function, which enables you to specify the security scope that the user must possess in order to be able to access a specific field in your GraphQL schema.

> To learn more about security scopes, click [here](/docs/webiny-apps/security/development/api/scopes).

The following example shows a complete definition of a simple GraphQL schema (defined using the `graphql-schema` plugin), with the `hasScope` helper function used to wrap resolver with required scope.

```js
import gql from "graphql-tag";
import { emptyResolver } from "@webiny/commodo-graphql";
import { hasScope } from "@webiny/api-security";

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
                    updateBook(data: BookInput): Book
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
                    // To access the "getBook" field, the user must posses the
                    // "library:books:get" security scope.
                    getBook: hasScope("library:books:get")(getBookResolver)
                },
                LibraryMutation: {
                    // To access the "createBook" field, the user must posses the
                    // "library:books:create" security scope.
                    createBook: hasScope("library:books:create")(createBookResolver),
                    // To access the "updateBook" field, the user must posses the
                    // "library:books:update" security scope.
                    updateBook: hasScope("library:books:update")(updateBookResolver)
                }
            }
        }
    }
];
```

> To learn more about creating the GraphQL schema and the `graphql-schema` plugin, click [here](/docs/api-development/graphql).

Upon accessing the GraphQL field, if the user possesses the required scope, the GraphQL field's resolver will be executed. Otherwise, the resolver execution will be prevented, and the following error message will be returned in the response:

![Security Scope Error](/img/webiny-apps/security/development/api/GraphQLHelpers/authorisation-error.png)
