---
id: has-role
title: hasRole Helper
sidebar_label: hasRole
---

After setting up a security role for a specific user, there is a helper function hasRole to check if a user has a specific scope. This can be used as a validator for your GraphQL queries/mutations.

### How to import
```js
import { hasRole } from "@webiny/api-security";
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
            getGroup: hasRole("security-full-access")
        },
        SecurityMutation: {
            createGroup: hasRole("security-full-access")
        }
    }
}
```
> In the above snippet this correlates to the Security - Full Access role you would have assigned to a specific user by clicking Security -> Roles and Groups and then on the Roles dropdown within the Save Group form.