---
id: has-scope
title: hasScope Helper
sidebar_label: hasScope
---

After setting up a security scope for a specific user via the Roles form, there is a helper function `hasScope` to check if a user has a specific scope. This can be used in order to determine whether a GraphQL field can be accessed by the user.

```js
import gql from "graphql-tag";
import { emptyResolver } from "@webiny/commodo-graphql";
import { hasScope } from "@webiny/api-security";

export default [
    {
        type: "graphql-schema",
        //In this example the schema is for handling books within an e-library
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
                        getBook: hasScope("library:books:get")
                    },
                    LibraryMutation: {
                        createBook: hasScope("library:books:create")
                    }
                }
            }
        }
    }
];
```
In the above snippet, the value of `library:books:get` is specified by a Scope which can be accessed by clicking Security -> Roles and Groups -> Roles:

![Security Scope Example](/img/webiny-apps/security/development/api/GraphQLHelpers/security-scope.png)

If a user does not have the correct permissions, they will see the following error message:

![Security Scope Error](/img/webiny-apps/security/development/api/GraphQLHelpers/has-role-scope-error.png)