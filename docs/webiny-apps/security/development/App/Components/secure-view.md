---
id: secure-view
title: Secure View Component
sidebar_label: SecureView
---

### Using `SecureView` React component
The SecureView component can be used when you want only specific roles or scopes to see that particular item. It can be imported like this:

```js
import { SecureView } from "@webiny/app-security/components";
```

In the following example, the `YourComponent` component will be rendered only if the currently logged-in user has the `forms-editors` role.
```js
function myComponent() {
    return (
        <SecureView roles={["forms-editors"]}>
            <YourComponent />
        </SecureView>        
    )
}
```

In the above example `YourComponent` will only render if the user currently logged in has the `forms-editors` role.


The following attributes `roles` and `scopes` can be specified and found once you click Security -> Roles and Groups -> Roles (see below):

Values for the `roles` attribute can be found here:

![Security Role Example](/img/webiny-apps/security/development/api/GraphQLHelpers/security-roles.png)

Values for the `scopes` attribute can be found here:

![Security Scope Example](/img/webiny-apps/security/development/api/GraphQLHelpers/security-scope.png)

By passing `roles` and `scopes` as props to `SecureView` you are able to control with more granularity what should get shown to logged-in users. In this case only a user with a `role` of `security-users` and a `scope` of `security-full-access` can see both the `EditUserRoles` component as well as the `EditGroups` component.

```js
function SecureEditUserRoles() {
    return (
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
                return (
                    <div>
                        {users && (
                            <EditUserRoles />
                        )}
                        {securityGroups && (
                            <EditGroups />
                        )}
                    </div>
                    );
            }}
        </SecureView>        
    )
}

```

Another benefit is that you can set the default behaviour when `roles` and `scopes` are not defined. In this case returning `null`, but you can create your own component to be returned.