---
id: secure-route
title: Secure Route Component
sidebar_label: SecureRoute
---

### When to use
The SecureRoute component can be used when you want certain routes to be available to specific roles.

### How to import
```js
import { SecureRoute } from "@webiny/app-security/components";
```

### Example
You can wrap your component with SecureRoute wherever your react-router routes are defined.
```js
<SecureRoute
    roles={["security-roles"]}
    scopes={["security-full-access"]}
>
    <YourComponent />
</SecureRoute>
```
>If the user does not have the defined roles or scopes permission, the SecureRoute component will render a span containing a message of 'You are not authorized to view this route.'.