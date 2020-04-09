---
id: has-role
title: hasRole Helper
sidebar_label: hasRole
---

After setting up a security role for a specific user via the Roles form, there is a helper function `hasRole` to check if a user has a specific role. This can be used in order to determine whether a GraphQL field can be accessed by the client.

```js
import { hasRole } from "@webiny/api-security";
```

Add the following code to your schema:
```js
extend type Query {
    security: SecurityQuery
}

extend type Mutation {
    security: SecurityMutation
}
```
Add a security definition:

```js
security: {
    shield: {
        SecurityQuery: {
            getGroup: hasRole("security-roles")
        },
        SecurityMutation: {
            createGroup: hasRole("security-roles")
        }
    }
}
```
In the above snippet, this correlates to the slug specified by a Security Role which can be accessed by clicking Security -> Roles and Groups -> Roles on the left-hand side of the save role form:

![Security Role Example](/img/webiny-apps/security/development/api/GraphQLHelpers/security-roles.png)

If a user does not have the correct permissions, they will see the following error message:

![Security Role Error](/img/webiny-apps/security/development/api/GraphQLHelpers/has-role-scope-error.png)