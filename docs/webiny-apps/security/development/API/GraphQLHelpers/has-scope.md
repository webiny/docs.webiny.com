---
id: has-scope
title: hasScope Helper
sidebar_label: hasScope
---

After setting up a security scope for a specific user via the Roles form, there is a helper function `hasScope` to check if a user has a specific scope. This can be used in order to determine whether a GraphQL field can be accessed by the client.

### How to import
```js
import { hasScope } from "@webiny/api-security";
```

### How to use
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
            getGroup: hasScope("security:group:crud")
        },
        SecurityMutation: {
            createGroup: hasScope("security:group:crud")
        }
    }
}
```
More examples of scopes can be seen below:

![Security Scope Example](/img/webiny-apps/security/development/api/GraphQLHelpers/security-scope.png)