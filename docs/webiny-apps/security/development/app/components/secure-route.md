---
id: secure-route
title: Secure Route Component
sidebar_label: SecureRoute
---

### Using `SecureRoute` React component

The `SecureRoute` component will prevent rendering a route if the user doesn't have the matched permissions (either security scopes or security roles).
The following attributes `roles` and `scopes` can be specified and found once you click Security -> Roles and Groups -> Roles.

Values for the `roles` attribute can be found here:

![Security Role Example](/img/webiny-apps/security/development/api/GraphQLHelpers/security-roles.png)

Values for the `scopes` attribute can be found here:

![Security Scope Example](/img/webiny-apps/security/development/api/GraphQLHelpers/security-scope.png)

```js
import { SecureRoute } from "@webiny/app-security/components";


/**
    In this example, the roles and scopes used are definitions
    you might define in order to build an e-library.
**/
function myComponent() {
    return (
        <SecureRoute
            roles={["book-access"]}
            scopes={["library:books:get"]}
        >
            <Book />
        </SecureRoute>
    )
}
```

If the user does not have the defined `roles` or `scopes` permissions, the `SecureRoute` component will either render a [secure-route-error plugin](/docs/webiny-apps/security/development/plugin-reference/app#secure-route-error), otherwise it will render a span containing a string "You are not authorized to view this route.".