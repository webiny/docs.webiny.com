---
id: using-env-variables
title: Using ENV Variables
sidebar_label: Using ENV Variables
---

:::info important
This article is a continuation of the topic started in the previous article about [Apollo Provider](/docs/app-development/create-app-template/adding-apollo-provider).
:::

In this article we'll learn how we can access data from the `api` stack, and inject the necessary values as environment variables, so that they are available to webpack, and in the end, to our React app.

## Stack state

Webiny project consists of stacks of infrastructure. Out of the box, we setup an `api` and an `apps` stack. Once you deploy your `api` stack, you create different resources, like APIs, Cognito User Pools, etc. More often than not, React app needs access to some of that data (we call it `stack state`).

This is done in `webiny.config.js` file, right before we run our development or production builds of the React app. We need to import a utility to help us with this:

```diff title="webiny.config.js"
const { startApp } = require("@webiny/project-utils");
+ const { setEnvironmentFromState } = require("@webiny/cli-plugin-deploy-components/utils");


+ const map = { REACT_APP_GRAPHQL_API_URL: "${cdn.url}/graphql" };


module.exports = {
  commands: {
    async start({ env, stack, ...options }, context) {
+     await setEnvironmentFromState({ env, stack, map }, context);
      await startApp(options, context);
    }
  }
};
```

With these additions we're loading the stack state for the given environment, and setting the environment variables into the current `process.env` based on the defined `map`. What `"${cdn.url}/graphql"` means is: access the state's `cdn` resource, and get the `url` property of that resource.

To see all the values that are currently utilized by React apps, open `apps/admin/webiny.config.js` of your project, to see the app that is configured for you out of the box.

The last thing to do is to tell the `start` command, what `env` and `state` we want to use. To do that, we'll update our `package.json` file:

```diff title="package.json"
{
  "scripts": {
-   "start": "env-cmd -r .env.json -e default webiny run start"
+   "start": "env-cmd -r .env.json -e default webiny run start --env=local --stack=api"
  }
}
```

Now we can start our app again. The value of `REACT_APP_GRAPHQL_API_URL` will be assigned to `process.env.REACT_APP_GRAPHQL_API_URL`, which will be picked up by `webpack`, and in turn be injected wherever you reference this variable in your app.

Now our `<ApolloProvider>` now knows where the API is!