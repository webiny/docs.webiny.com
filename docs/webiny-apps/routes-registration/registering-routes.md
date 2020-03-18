---
id: registering-routes
title: Registering routes
sidebar_label: Registering routes
---

## Setting up new route

To setup a new route you need to register it as a plugin in `examples/apps/admin/src/plugins/index.js`.We will come to this later.

`FYI, you may use the same approach when building the new menu.`


First of all for solid route registration you need to add a new route to packages. Go to `packages/app-page-builder/src/admin/plugins/routes.tsx` and add new object which is our actual route.

```javascript
  {
        name: "route-menu-pages",
        type: "route",
        route: (
            <Route
                exact
                path="/newMenu/test"
                render={({ location }) => (
                  <h1>TEsT 1233333</h1>
                )}
            />
        )
    }
```

![Code](/img/webiny-apps/routes-registration/route-registration.png)

Check `examples/apps/admin/src/plugins/index.js` if plugin is correctly imported. 
That's it, route is successfuly registered, you can now link you menu to new address. 

P.S Don't forget to run `lerna watch` over packages folder to see live updates. 


