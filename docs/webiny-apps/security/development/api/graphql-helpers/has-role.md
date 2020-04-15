---
id: has-role
title: hasRole
sidebar_label: hasRole
---

Along with the [hasScope](/docs/webiny-apps/security/development/api/graphql-helpers/has-scope), you can also utilize the `hasRole` helper function, which enables you to specify the security role that the user must possess in order to be able to access a specific field in your GraphQL schema. 

> To learn more about security roles, click [here](/docs/webiny-apps/security/roles).

The following example shows a complete definition of a simple GraphQL schema (defined using the `graphql-schema` plugin), with the `hasRole` helper function used in the `security` section. 

```js
import gql from "graphql-tag";
import { emptyResolver } from "@webiny/commodo-graphql";
import { hasRole } from "@webiny/api-security";

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
                    getBook: () => { ... }
                },
                LibraryMutation: {
                    createBook: () => { ... }
                }
            },
            security: {
                shield: {
                    LibraryQuery: {
                        // To access the "getBook" field, the user must posses the 
                        // "library-books" security role.
                        getBook: hasRole("library-books")
                    },
                    LibraryMutation: {
                        // To access the "createBook" field, the user must posses the 
                        // "library-books" security role.
                        createBook: hasRole("library-books"),
                        // To access the "updateBook" field, the user must posses the 
                        // "library-books" security role.
                        updateBook: hasRole("library-books")
                    }
                }
            }
        }
    }
];
```

> To learn more about creating the GraphQL schema and the `graphql-schema` plugin, click [here](/docs/api-development/graphql).

Upon accessing the GraphQL field, if the user possesses the required role, the GraphQL field's resolver will be executed. Otherwise, the resolver execution will be prevented, and the following error message will be returned in the response:

![Security Role Error](/img/webiny-apps/security/development/api/GraphQLHelpers/authorisation-error.png)
