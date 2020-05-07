---
id: secure-view
title: Secure View Component
sidebar_label: SecureView
---

### Using `SecureView` React component
The `SecureView` component can be used when you want only specific scopes to see that particular item.
In the following example, the `Book` component will be rendered only if the currently logged-in user has the `library:books:get` scope.

```js
import { SecureView } from "@webiny/app-security/components";

function myComponent() {
    return (
        <SecureView scopes={["library:books:get"]}>
            <Book />
        </SecureView>
    )
}
```
The attribute `scopes` can be specified and found once you click Security -> Roles and Groups -> Roles.

Values for the `scopes` attribute can be found here:

![Security Scope Example](/img/webiny-apps/security/development/api/GraphQLHelpers/security-scope.png)

By passing `scopes` as prop to `SecureView` you are able to access the check results of the `scopes` and can selectively render different parts of the UI that will be rendered as children of the `SecureView` component.

In following example only a user with a `scope` of `library:books:get` can see the `Book` component. A user a `scope` of `library:books:put` can see both the `EditBook` and `CreateBook` components.

```js
import { SecureView } from "@webiny/app-security/components";


/**
    The keys of the objects passed to scopes represent the results
    of whether the user has those permissions or not.
    Ex. The value of bookAccess is the result if the user has the scope "library:books:get".
**/
function SecureBook() {
    return (
        <SecureView
            scopes={{
                bookAccess: ["library:books:get"],
                bookPut: ["library:books:put"],
            }}
            >
            {({ scopes }) => {
                const { bookAccess, bookPut } = scopes;
                if (!bookAccess && !bookPut) {
                    return null;
                }
                return (
                    <div>
                        {bookAccess && (
                            <Book />
                        )}
                        {bookPut && [
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
By using `SecureView` similar to the above example, you can set the default behaviour when `scopes` are not defined. In this example, the default behaviour returns `null` when the permissions do not match what is required, but you can create your own component to be returned.