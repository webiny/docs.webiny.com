---
id: introduction
title: Introduction
sidebar_label: Introduction
---

At its core, React apps in Webiny are very similar to those created by [create-react-app](https://create-react-app.dev/) tool. However, to make things work exactly the way we wanted them to, we had to think differently about how we approach app structure and file organization. We want to be able to share apps, not React components. We also want to have the minimum possible amount of boilerplate code, and still keep the ability to customize both app's logic and structure, as well as the bundling process.

As you may already know, with Webiny, everything is a plugin. React apps are no different. Routes, menus, views - everything is added to the app by registering new plugins.

With traditional React apps, you would import all your components and mount them in a very declarative and static way. To add new things to your app, you would have to import a particular component, and mount it somewhere. With Webiny, you can finally compose your apps using plugins. This gives you the freedom of using community plugins, and even creating entire app templates, and sharing them as simple `npm` packages.

## How does it work in practice?

:::note Note
Check out our knowledge-sharing session on `APP Development With Webiny.` We'll get to know the structure of the app, how it is bundled, and how to make reusable app templates.
:::
<iframe width="805" height="390" src="https://youtube.com/embed/EQxNsDSdpsQ" frameborder="0" allowfullscreen></iframe>

---

Bootstrapping an app is as simple as importing an app template package (which is essentially a React component factory), and executing it with the supported options to get your app component:

```typescript jsx
/**
 * This is a real-life example that can be seen in your Webiny project in `apps/admin`.
 * Also seen at: https://github.com/webiny/webiny-js/tree/master/apps/admin
 * For the purpose of this article, the original code is slightly simplified.
 */
import React from "react";
import ReactDOM from "react-dom";
import adminTemplate from "@webiny/app-template-admin-full";
import "./App.scss";

const App = adminTemplate({
    cognito: {
        region: process.env.REACT_APP_USER_POOL_REGION,
        userPoolId: process.env.REACT_APP_USER_POOL_ID,
        userPoolWebClientId: process.env.REACT_APP_USER_POOL_WEB_CLIENT_ID
    },
    plugins: [
        // add more plugins here
    ]
});


ReactDOM.render(<App />, document.getElementById("root"));
```

And there you have your fully featured Webiny Admin app! Pretty cool, isn't it? In the following articles we'll dive deeper into the anatomy of an app template and how plugins make all of this possible.

But first, we need to learn how to setup a new React app within your Webiny project.
