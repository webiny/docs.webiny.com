---
id: adding-routes
title: Adding routes
sidebar_label: Adding routes
---

## Setting up a new route

Route registration is necessary if you want to move across the app.

![Route example](/img/webiny-apps/routes-registration/route-example.png)

In case you added a new menu and you want to link it to the actual page you need to do an actual route registration. How to do it you can see below.
To setup a new route you need to add it as a plugin. 

```javascript
import { Route } from "@webiny/react-router";
   ....
   {
     name: "route-menu-ecommerce",
     type: "route",
     route: (
        <Route
            exact
            path="/shop/products"
            render={({ location }) => (
                <h1>lorem ipsum</h1>
            )}
        />
    )
   }
```

Add this code snippet to your plugins and rebuild the project. After doing these steps your route should be successfully added.
> Routes are usually listed in menus if you want to learn more about it [click here](/docs/webiny-apps/routes-registration/add-routes).


