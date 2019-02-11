---
id: new-theme-using-theme
title: Using your theme
sidebar_label: Using your theme
---


A theme itself is just data and components. To connect it with your site and
administration, you need to use a `CmsProvider` from the `webiny-app-cms` package.

## Enabling your theme
The following example shows how to enable your theme using `CmsProvider`
component provided by `webiny-app-cms` package
(a lot of code is stripped away from the example to keep focus on the important parts):

```js
// src/App.js
import { CmsProvider } from "webiny-app-cms/context";
import myTheme from "my-theme";

<CmsProvider theme={myTheme} >
    {/* App content */}
</CmsProvider>
```

> A real life example can be found in `packages/site/src/App.js` of your [local Webiny project](/docs/developer-tutorials/local-setup)
 or [in our Github repo](https://github.com/Webiny/webiny-js/blob/master/packages/demo-site/src/App.js).

Once your theme is passed to `CmsProvider` you can access it anywhere in your app.

## Using theme in your app
To access your theme you will need to use a `withCms` HOC (higher order component).
`withCms` HOC injects a `cms` prop into your components. An example
component utilizing your theme looks like this:

```
import React from "react";
import { withCms } from "webiny-app-cms/context";

const MyView = ({ cms, ...props }) => {
    // `cms.theme` contains your entire theme
};

export default withCms()(MyView);
```
