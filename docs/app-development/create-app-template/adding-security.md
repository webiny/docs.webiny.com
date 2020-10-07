---
id: adding-security
title: Adding Security
sidebar_label: Adding Security
---

> IMPORTANT: this article assumes you've followed the previous article about app templates, and have your basic app template ready. If not, please go to [Simple Template](/docs/app-development/create-app-template/simple-template) and setup a basic React app.

In this article we'll continue working on the app template created in the previous article. Topics that will be covered include:
- adding `ApolloProvider` for Apollo Client
- adding ENV variables to your build setup
- adding `SecurityProvider` to handle authentication

## Adding Apo

In short, app template is a factory function that produces a React component. This way, your apps are configurable and expandable. Under the hood, an app template is created using one single plugin type:

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

Let's create a very basic React app template consisting of nothing more than a router. We'll use a utility package to build app templates, called `@webiny/app-template`. In your base React app created in the previous article, create a new file `src/template.tsx`: 

```typescript jsx
// src/template.tsx
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

Congratulations! You've just created your first configurable app template! 🎉

Your template is now capable of rendering routes provided to your app via plugins of type `RoutePlugin`. 
Let's now render your shiny new template and give it a route to render:

```typescript jsx
// src/index.tsx
import React from "react";
import ReactDOM from "react-dom";
import { Route } from "@webiny/react-router";
import appTemplate from "./template";

const App = appTemplate({
  basename: "/",
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

You can have plugins built into your template to provide the basic functionality, and allow the users of your template to add more plugins or override existing plugins. You can even compose app templates! Possibilities are endless.

## More examples

To see examples of more complex templates, and even template composition, see our github:

- [Site app template](https://github.com/webiny/webiny-js/tree/develop/packages/app-template-site) - this template is used to bootstrap default Webiny site app.
- [Admin app template](https://github.com/webiny/webiny-js/tree/develop/packages/app-template-admin) - this template is used to bootstrap an empty Admin app, with just the basic features like Security and File Manager.
- [Full Webiny template](https://github.com/webiny/webiny-js/tree/develop/packages/app-template-admin-full) - this template uses [Admin app template](https://github.com/webiny/webiny-js/tree/develop/packages/app-template-admin) and adds some more plugins to it. This is a great way to reuse existing app templates and enrich them with new functionality.

TypeScript makes all this even more fun: by defining your template parameter types, the user of your app template will not have to dig though your code, and instead use autocomplete and quickly learn what's possible with your app template.
