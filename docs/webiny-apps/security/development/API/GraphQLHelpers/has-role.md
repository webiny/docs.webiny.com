---
id: has-role
title: hasRole Helper
sidebar_label: hasRole
---

After setting up a security role for a specific user via the Roles form, there is a helper function `hasRole` to check if a user has a specific role. This can be used in order to determine whether a GraphQL field can be accessed by the user.

```js
import gql from "graphql-tag";
import { emptyResolver } from "@webiny/commodo-graphql";
import { hasRole } from "@webiny/api-security";

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
                        getBook: hasRole("book-access")
                    },
                    LibraryMutation: {
                        createBook: hasRole("book-access")
                    }
                }
            }
        }
    }
];
```
In the above snippet, this correlates to the slug specified by a Security Role which can be accessed by clicking Security -> Roles and Groups -> Roles on the left-hand side of the save role form:

![Security Role Example](/img/webiny-apps/security/development/api/GraphQLHelpers/security-roles.png)

If a user does not have the correct permissions, they will see the following error message:

![Security Role Error](/img/webiny-apps/security/development/api/GraphQLHelpers/has-role-scope-error.png)