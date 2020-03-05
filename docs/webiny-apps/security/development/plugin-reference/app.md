---
id: app
title: App Plugins Reference
sidebar_label: App
---

# Summary

[`security-scopes-list`](/docs/webiny-apps/security/development/plugin-reference/app#security-scopes-list)

---

### [`security-scopes-list`](/docs/webiny-apps/security/development/plugin-reference/app#security-scopes-list)

#### Summary

Security roles consist of scopes, which can be selected via the multi select autocomplete in the Roles form:

![Scopes Multi Autocomplete](/img/webiny-apps/security/development/plugins-reference/app/scopes-autocomplete.png)

This plugin enables you to add your own custom scopes to the list.

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
