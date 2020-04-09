---
id: app
title: App Plugins Reference
sidebar_label: App
---

# Summary

[`security-scopes-list`](/docs/webiny-apps/security/development/plugin-reference/app#security-scopes-list)

[`secure-route-error`](/docs/webiny-apps/security/development/plugin-reference/app#secure-route-error)

---

### [`security-scopes-list`](/docs/webiny-apps/security/development/plugin-reference/app#security-scopes-list)

#### Summary

Security roles consist of security scopes, which can be selected via the multi-select autocomplete in the Roles form (located at the `/admin/roles` path in the Admin app):

![Scopes Multi Autocomplete](/img/webiny-apps/security/development/plugins-reference/app/scopes-autocomplete.png)

This plugin enables adding custom security scopes to the multi-select autocomplete component in the Roles form.

#### Type

```ts
type SecurityScopesListPluginScope = {
  title: any;
  description: any;
  scope: string;
};

type SecurityScopesListPlugin = Plugin & {
  type: "security-scopes-list";
  scopes:
    | SecurityScopesListPluginScope[]
    | (() => SecurityScopesListPluginScope[])
    | (() => Promise<SecurityScopesListPluginScope[]>);
};
```

#### Example

```ts
    {
        type: "security-scopes-list",
        name: "security-scopes-list-my-app",
        scopes: [
            {
                scope: "myapp:animals:crud",
                title: t`Animals CRUD`,
                description: t`Allows the user to perform CRUD operations on animals.`
            }
        ]
    }
```

---

### [`secure-route-error`](/docs/webiny-apps/security/development/plugin-reference/app#secure-route-error)

#### Summary

When using a [SecureRoute React Component](/docs/webiny-apps/security/development/App/Components/secure-route) to prevent rendering if the user does not have the appropriate security roles or security scopes, you can create a `secure-route-error` plugin.

This plugin allows you to customize what will render when a user does not have the permissions required to view a `SecureRoute` Component.


#### Type

```ts
type SecureRouteErrorPlugin = Plugin & {
    render(): React.ReactElement;
};
```

#### Example

```ts
    {
        type: "secure-route-error",
        name: "secure-route-error-message",
        render() {
            return <h2>You are not authorized to access this page.</h2>;
        }
    }
```