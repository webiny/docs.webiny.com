---
id: layouts
title: Layouts
sidebar_label: Layouts
---

`layouts` are linked to page categories. When you create a page category, say "Blog", you need to select a layout inside which that content will be displayed.
The options available inside the layout dropdown are registered by the [`pb-page-layout`](/docs/webiny-apps/page-builder/theme-development/theme-configuration#pb-page-layout-plugin) plugin.

Each page created inside the "Blog" category, by default, will use that layout. However, inside the page settings, you can overwrite that on a per-page basis if you need to.

![Webiny - Theme Layout](/img/theme-development/webiny-theme-page-categories.gif)

## Layout internals

A layout is a simple React component which receives several props. Here is an example of the static layout which comes with the default theme:

```ts
import React, { useMemo } from "react";
import { Addons } from "@webiny/app/components";
import { getPlugins } from "@webiny/plugins";
import { PbPageLayoutComponentPlugin } from "@webiny/app-page-builder/types";

const Static = ({ children }) => {
    const { header: Header, footer: Footer }: any = useMemo(() => {
        const plugins = getPlugins("pb-layout-component") as PbPageLayoutComponentPlugin[];
        return plugins.reduce((acc, item) => {
            acc[item.componentType] = item.component;
            return acc;
        }, {});
    }, []);

    return (
        <React.Fragment>
            <Addons />
            <Header />
            {children}
            <Footer />
        </React.Fragment>
    );
};

export default Static;
```

By default, if you are creating your own theme, make sure to include the `Addons` component. This is a component that allows other plugins to register them self into an actual page. This is used for things like Google Tag Manager, Cookie policy banners and similar. 

The upper bit of the static layout that uses the `useMemo` React hook is a simple optimization that prevents the need to call `getPlugins` function when a component needs to render. You can just copy/paste that block into your own layout.

All other bits are up to you. You can insert any DOM structure with any custom CSS classes you require. You can also import and use pretty much any 3rd party NPM library here.