---
id: app-template
title: App Template
sidebar_label: App Template
---

In the previous article, we've seen how app templates reduce the amount of boilerplate code and make your apps reusable. Reusable on a whole new level: you can now create complete apps and distribute them as simple `npm` packages for your friends, team and clients to use, and expand further with plugins.

## Anatomy of an app template

App template is a factory function that produces a React component. This way, your apps are configurable and expandable. Under the hood, an app template is created using one single plugin type:

```typescript
type AppTemplateRendererPlugin = {
  name: string;
  type: "app-template-renderer";
  render(children: React.ReactElement): React.ReactElement;
};
```

Using plugins of this type, we define a structure for our app. More often than not, React apps have a bunch of context providers sitting at the top level, and then your router is the last thing you mount in the hierarchy. If you think about it, it's very similar to your traditional `express` middleware when building HTTP APIs.

Each `AppTemplateRendererPlugin` will receive the result of the previous plugin as `children` parameter. Plugins are executed from right to left, or from bottom to top (depending on how you look at it). The first plugin in the list will be executed last, and that will be the first element to be rendered when your app is mounted.

`createAppTemplate` utility internally constructs a helper component, which renders routes defined via plugins. The first `AppTemplateRendererPlugin` to be processed (the last one in the list), will receive that `<Routes/>` element for you to render in your plugin.

## Creating an app template

Let's create a very basic React app template consisting of nothing more than a router. We'll use a utility package to build app templates, called `@webiny/app-template`:

```typescript jsx
// template.tsx
import React from "react";
import { createTemplate } from "@webiny/app-template";
import { BrowserRouter } from "@webiny/react-router";

export default createTemplate(opts => {
  return [
    {
      type: "app-template-renderer",
      name: "app-template-renderer-router",
      render(children) {
        // `children` element in this case is the aforementioned `<Routes/>` element
        return <BrowserRouter basename={opts.basename}>{children}</BrowserRouter>;
      }
    },
    ...(opts.plugins || [])
  ];
});
```

Let's now render it:

```typescript jsx
// index.tsx
import React from "react";
import ReactDOM from "react-dom";
import { Route } from "@webiny/react-router";
import appTemplate from "./template";

const App = appTemplate({
  basename: process.env.PUBLIC_URL,
  plugins: [
    {
      name: "route-welcome",
      type: "route",
      route: <Route exact path={"/"} render={() => <h2>Welcome!</h2>} />
    }
  ]
});

ReactDOM.render(<App />, document.getElementById("root"));
```

When you run this app, you'll see a `Welcome!` message. The best thing about these app templates is that they are configurable. See how we defined a `basename`, and some extra plugins dynamically, when invoking the factory. This way you can support all kinds of configuration parameters, and create really versatile app templates.

## More examples

To see examples of more complex templates, and even template composition, see our github:

- [Site app template](https://github.com/webiny/webiny-js/tree/develop/packages/app-template-site) - this template is used to bootstrap default Webiny site app.
- [Admin app template](https://github.com/webiny/webiny-js/tree/develop/packages/app-template-admin) - this template is used to bootstrap an empty Admin app, with just the basic features like Security and File Manager.
- [Full Webiny template](https://github.com/webiny/webiny-js/tree/develop/packages/app-template-admin-full) - this template uses [Admin app template](https://github.com/webiny/webiny-js/tree/develop/packages/app-template-admin) and adds some more plugins to it. This is a great way to reuse existing app templates and enrich them with new functionality.

Typescript makes all this even more fun: by defining your template parameter types, the user of your app template will not have to dig though your code, and instead use autocomplete and quickly learn what's possible with your app template.
