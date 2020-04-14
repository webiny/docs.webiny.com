---
id: routes
title: Routes
sidebar_label: Routes
---

Every single-page application consists of routes, and the Admin app is no different.

![Route example](/img/webiny-apps/admin/development/routes/route-example.png)
 
Adding a new route is just a matter of creating a "route" plugin, for example:

```javascript
// Import the Route component from the "@webiny/react-router" package.
import { Route } from "@webiny/react-router";
   
(...)

{
  type: "route",
  name: "route-shop",
  route: (
    <Route
      exact
      path="/shop/products/:id"
      render={({ location }) => <h1>My new "/shop/products" route.</h1>}
    />
  )
}
```

> If you are not already familiar with how plugins work, we recommend you take a look at the [Plugins Crash Course](/docs/developer-tutorials/plugins-crash-course).

The key property of the plugin is the `route` property, which represents the new route you wish to create.

Note that because the Admin app relies on [`@webiny/react-router`](https://github.com/webiny/webiny-js/tree/master/packages/react-router) library for all of the routing functionality, the shown `Route` component must be used here. 

> Use the `path` prop on the `Route` component to specify the route's path, for example `path="/my-app/products/discounts"`. 

> What good are routes if you cannot access them via the user interface, right? Check [this article](/docs/webiny-apps/admin/development/menus) in order to learn how to create menus, and enable users to quickly get to your newly created views.

### Adding Security
Sometimes you want users with a specific role or scope to be able to access some of the routes you are creating. We can do this by using our [SecureRoute](/docs/webiny-apps/security/development/App/Components/secure-route) or [SecureView](/docs/webiny-apps/security/development/App/Components/secure-view) components.

```javascript
// Import the Route component from the "@webiny/react-router" package.
import { Route } from "@webiny/react-router";
import { SecureRoute } from "@webiny/app-security/components";

(...)

{
  type: "route",
  name: "route-shop",
  route: (
    <SecureRoute scopes={["pb:pages:crud"]}>
      <Route
        exact
        path="/shop/manageInventory/:id"
        render={({ location }) => <h1>My secure "/shop/manageInventory" route.</h1>}
      />
    <SecureRoute/>
  )
}
```