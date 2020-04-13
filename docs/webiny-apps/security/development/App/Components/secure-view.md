---
id: secure-view
title: Secure View Component
sidebar_label: SecureView
---

### Using `SecureView` React component
The `SecureView` component can be used when you want only specific roles or scopes to see that particular item.
In the following example, the `Book` component will be rendered only if the currently logged-in user has the `book-access` role.

```js
import { SecureView } from "@webiny/app-security/components";

function myComponent() {
    return (
        <SecureView roles={["book-access"]}>
            <Book />
        </SecureView>        
    )
}
```

The following attributes `roles` and `scopes` can be specified and found once you click Security -> Roles and Groups -> Roles.

Values for the `roles` attribute can be found here:

![Security Role Example](/img/webiny-apps/security/development/api/GraphQLHelpers/security-roles.png)

Values for the `scopes` attribute can be found here:

![Security Scope Example](/img/webiny-apps/security/development/api/GraphQLHelpers/security-scope.png)

By passing `roles` and `scopes` as props to `SecureView` you are able to access the check results of the `roles` as well as the `scopes` and can selectively render different parts of the UI that will be rendered as children of the `SecureView` component. 

In following example only a user with a `role` of `book-access` and a `scope` of `library:books:get` can see the `Book` component. A user with a `role` of `book-put` and a `scope` of `library:books:put` can see both the `EditBook` and `CreateBook` components.

```js
import { SecureView } from "@webiny/app-security/components";


/**
    The keys of the objects passed to roles and scopes represent the results
    of whether the user has those permissions or not.
    Ex. The value of read is the result if the user has the role "book-access".
**/
function SecureBook() {
    return (
        <SecureView
            roles={{
                read: ["book-access"],
                put: ["book-put"]
            }}
            scopes={{
                bookAccess: ["library:books:get"],
                bookPut: ["library:books:put"],
            }}
            >
            {({ roles, scopes }) => {
                const { read, edit } = roles;
                const { bookAccess, bookPut } = scopes;
                if (!read && !put && !bookAccess && !bookPut) {
                    return null;
                }
                return (
                    <div>
                        {read && bookAccess && (
                            <Book />
                        )}
                        {edit && bookPut && [
                            <EditBook />,
                            <CreateBook />
                        ]}
                    </div>
                );
            }}
        </SecureView>        
    )
}
```
By using `SecureView` similar to the above example, you can set the default behaviour when `roles` and `scopes` are not defined. In this example, the default behaviour returns `null` when the permissions do not match what is required, but you can create your own component to be returned.