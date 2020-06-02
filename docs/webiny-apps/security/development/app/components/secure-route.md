---
id: secure-route
title: Secure Route Component
sidebar_label: SecureRoute
---

### Using `SecureRoute` React component

The `SecureRoute` component prevents rendering of a route if a user doesn't possess required security scopes.

> To learn more about scopes, click [here](/docs/webiny-apps/security/development/api/scopes).

The following example shows how to use the `SecureRoute` component in order to prevent users from accessing a route if they don't possess the `library:books:get` security scope:

```js
import { SecureRoute } from "@webiny/app-security/components";

function SecureBookRoute() {
    return (
        <SecureRoute
            scopes={["library:books:get"]}
        >
            <Book />
        </SecureRoute>
    )
}
```

If a user doesn't posses required security scopes, by default, the component will just render a simple "You are not authorized to view this route." message. If needed, this fallback render can be customized via a [secure-route-error](/docs/webiny-apps/security/development/plugin-reference/app#secure-route-error) plugin.
