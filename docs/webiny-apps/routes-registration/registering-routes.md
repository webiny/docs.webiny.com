---
id: registering-routes
title: Registering routes
sidebar_label: Registering routes
---

## Setting up new route

To setup a new route you need to register it as a plugin. 

Note that the plugin is defined once, but must be registered both in your Admin and website apps.
> By default, all of the Admin and website plugins are registered in `apps/admin/src/plugins/index.js` and `apps/site/src/plugins/index.js`, respectively.

> You may use the same approach when building the new menu.

First of all for solid route registration you need to add a new route to packages. Go to `packages/app-page-builder/src/admin/plugins/routes.tsx` and add new object which is our actual route.

```javascript
   {
        name: "route-menu-pages",
        type: "route",
        route: (
            <Route
                exact
                path="/billing-menu/billing"
                render={({ location }) => (
                  <h1>lorem ipsum</h1>
                )}
            />
        )
    },
```

```javascript
import React, { Suspense, lazy } from "react";
import { Route } from "@webiny/react-router";
import Helmet from "react-helmet";
import { AdminLayout } from "@webiny/app-admin/components/AdminLayout";
import { SecureRoute } from "@webiny/app-security/components";
import { RoutePlugin } from "@webiny/app/types";
import { CircularProgress } from "@webiny/ui/Progress";
import { EditorPluginsLoader } from "../components/EditorPluginsLoader";

const Loader = ({ children, ...props }) => (
    <Suspense fallback={<CircularProgress />}>{React.cloneElement(children, props)}</Suspense>
);

const Categories = lazy(() => import("@webiny/app-page-builder/admin/views/Categories/Categories"));
const Menus = lazy(() => import("@webiny/app-page-builder/admin/views/Menus/Menus"));
const Editor = lazy(() => import("@webiny/app-page-builder/admin/views/Pages/Editor"));

const plugins: RoutePlugin[] = [
  // our new route example
    {
        name: "route-menu-pages",
        type: "route",
        route: (
            <Route
                exact
                path="/billing-menu/billing"
                render={({ location }) => (
                  <h1>lorem ipsum</h1>
                )}
            />
        )
    },
    {
        name: "route-pb-categories",
        type: "route",
        route: (
            <Route
                exact
                path="/page-builder/categories"
                render={() => (
                    <SecureRoute roles={["pb-categories"]}>
                        <AdminLayout>
                            <Helmet title={"Page Builder - Categories"} />
                            <Loader>
                                <Categories />
                            </Loader>
                        </AdminLayout>
                    </SecureRoute>
                )}
            />
        )
    },
    {
        name: "route-pb-menus",
        type: "route",
        route: (
            <Route
                exact
                path="/page-builder/menus"
                render={() => (
                    <SecureRoute roles={["pb-menus"]}>
                        <AdminLayout>
                            <Helmet title={"Page Builder - Menus"} />
                            <Loader>
                                <Menus />
                            </Loader>
                        </AdminLayout>
                    </SecureRoute>
                )}
            />
        )
    },,
    {
        name: "route-pb-editor",
        type: "route",
        route: (
            <Route
                exact
                path="/page-builder/editor/:id"
                render={({ location }) => (
                    <SecureRoute roles={["pb-menus"]}>
                        <EditorPluginsLoader location={location}>
                            <Helmet title={"Page Builder - Edit page"} />
                            <Loader>
                                <Editor />
                            </Loader>
                        </EditorPluginsLoader>
                    </SecureRoute>
                )}
            />
        )
    },
];

export default plugins;
```

Check if plugin is correctly imported. 
That's it, route is successfuly registered, you can now link you menu to new address. 

P.S Don't forget to run `lerna watch` over packages folder to see live updates. 


