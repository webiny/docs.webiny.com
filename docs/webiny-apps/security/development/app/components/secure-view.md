---
id: secure-view
title: Secure View Component
sidebar_label: SecureView
---

### Using `SecureView` React component

Unlike the [`SecureRoute`](/docs/webiny-apps/security/development/app/components/secure-route) component, which prevents rendering of a complete route if a user doesn't have required security scopes, the `SecureView` component can be used to prevent rendering of just a small section in your view. For example, you might want to show the "Create a book" button only if a user possesses the `library:books:create` security scope.

> To learn more about scopes, click [here](/docs/webiny-apps/security/development/api/scopes).

### Basic usage

The following example shows how to use the `SecureView` component in order to prevent users from seeing the `CreateBookButton` component, if they don't possess the `library:books:create` security scope:

```js
import { SecureView } from "@webiny/app-security/components";

function myComponent() {
  return (
    <SecureView scopes={["library:books:create"]}>
      <CreateBookButton />
    </SecureView>
  );
}
```

### Checking multiple scopes

Instead of an array, you can also pass required security scopes as an object, which enables you to perform multiple checks, and receive results as an argument to the child render function.

In the following example, the `ListBooks` component will be rendered only if a user possesses the `library:books:get` security scope (result assigned to the `booksGet` property). Additionally, `EditBook` and `CreateBook` components will be rendered only if a user possesses both `library:books:create` and `library:books:update` security scopes (the result of that check was assigned to the `booksManage` property).

```js
import { SecureView } from "@webiny/app-security/components";

function SecureBookView() {
  return (
    <SecureView
      scopes={{
        booksGet: ["library:books:get"],
        booksManage: ["library:books:create", "library:books:update"]
      }}
    >
      {({ scopes }) => {
        // The results are assigned to the "scope" property. 
        const { bookAccess, bookPut } = scopes;

        return (
          <div>
            {booksGet && <ListBooks />}
            {booksManage && (
              <div>
                <EditBook />
                <CreateBook />
              </div>
            )}
          </div>
        );
      }}
    </SecureView>
  );
}
```
