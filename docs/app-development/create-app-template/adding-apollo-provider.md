---
id: adding-apollo-provider
title: Adding Apollo Provider
sidebar_label: Adding Apollo Provider
---

:::info important
This article assumes you've followed the previous article about app templates, and have your basic app template ready. If not, please go to [Basic Template](/docs/app-development/create-app-template/basic-template) and setup a basic React app.
:::

In this article we'll continue working on the app template created in the previous article and setup `Apollo Provider` so our app can talk to our GraphQL API. You'll also learn how to get access to your `api` stack information and pull the GraphQL API URL into your React app during build time.

## Adding Apollo Provider

In the last article, we left off with our App Template looking like this:

```typescript jsx title="src/template.tsx"
import React from "react";
import { createTemplate } from "@webiny/app-template";
import { BrowserRouter } from "@webiny/react-router";
import { Plugin } from "@webiny/plugins/types";

// Options for your App Template
type Options = {
  basename: string;
  plugins?: Plugin[];
};

export default createTemplate<Options>(opts => {
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

Now let's add another `AppTemplateRendererPlugin` and render an `ApolloProvider`:

```diff title="src/template.tsx"
import React from "react";
+ import { ApolloProvider } from "react-apollo";
import { createTemplate } from "@webiny/app-template";
import { BrowserRouter } from "@webiny/react-router";
import { Plugin } from "@webiny/plugins/types";
+ import { createApolloClient } from "./createApolloClient";


// Options for your App Template
type Options = {
  basename: string;
  plugins?: Plugin[];
};

export default createTemplate<Options>(opts => {
  return [
+   {
+     type: "app-template-renderer",
+     name: "app-template-renderer-apollo",
+     render(children) {
+       return <ApolloProvider client={createApolloClient()}>{children}</ApolloProvider>;
+     }
+   },
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

With this new plugin, we've added a top-level component, an `<ApolloProvider>` to be able to use ApolloClient anywhere in the app.

## Create ApolloClient

Our `<ApolloProvider>` needs an instance of ApolloClient to work. We'll create a factory function that will return an instance of ApolloClient. This way we'll be able to pass options to this factory via our App Template options if necessary.

```typescript title="src/createApolloClient.ts"
import ApolloClient from "apollo-client";
import { ApolloLink } from "apollo-link";
import { BatchHttpLink } from "apollo-link-batch-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createOmitTypenameLink } from "@webiny/app/graphql";

export const createApolloClient = () => {
  return new ApolloClient({
    link: ApolloLink.from([
      createOmitTypenameLink(),
      new BatchHttpLink({ uri: process.env.REACT_APP_GRAPHQL_API_URL })
    ]),
    cache: new InMemoryCache({
      addTypename: true,
      dataIdFromObject: obj => obj.id || null
    })
  });
};
```

:::note
This is just one way of creating an Apollo Client. It's totally up to you how you'll organize your template, your files, etc.
:::

`createOmitTypenameLink` is a utility link that will remove the `__typename` field from the response data so that it doesn't interfere with your mutations when you submit your data using, for example, a form.

If you now open your app in the browser, you will still see the same `Welcome!` message, but if you inspect your app using React Dev Tools, you'll see your `<ApolloProvider>`, `<BrowserRouter>` and the `<Route key="route-welcome">`:

![App Template in ReactDevTools](/img/app-development/app-template-apollo-provider.png)

## Summary
In this article we haven't done much visually, but we've setup our gateway to the GraphQL API, which will be very important in the future. Also, you are already using the main development principle in Webiny - plugins! And we can already see how flexible this approach is. 

At this point, your app is ready to communicate with the API. However, we still need to talk about `process.env.REACT_APP_GRAPHQL_API_URL`. We'll cover this in the next article.
