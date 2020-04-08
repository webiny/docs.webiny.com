---
id: secure-view
title: Secure View Component
sidebar_label: SecureView
---

### When to use
The SecureView component can be used when you want only specific roles to see that particular item.

### How to import
```js
import { SecureView } from "@webiny/app-security/components";
```

### Simple example
In the render method of the component you want to protect, you can wrap it with the SecureView component.
```js
<SecureView roles={["forms-editors"]}>
    <YourComponent />
</SecureView>
```

### More advanced example
SecureView accepts roles and scopes as attributes. You can access those as variables within the component you will render for you to customize your render logic.
```js
<SecureView
    roles={{
        groups: ["security-groups"],
        roles: ["security-roles"],
        users: ["security-users"]
    }}
    scopes={{
        securityGroups: ["security-full-access"]
    }}
    >
    {({ roles, scopes }) => {
        const { groups, roles, users } = roles;
        const { securityGroups } = groups;
        if (!groups && !roles && !users && !securityGroups) {
            return null;
        }
        return (<YourComponent />);
    }}
</SecureView>
```

> SecureView does not have any fallback render so in the case of there not being a specific permission you have to create your own render message or component.