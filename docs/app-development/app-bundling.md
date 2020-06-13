---
id: bundling
title: App Bundling
sidebar_label: App Bundling
---

Bundling of apps is tricky. That is why we didn't want to reinvent the wheel, and used the setup derived from `react-scripts`. Why not `react-scripts` directly? Because the slightest deviation from what `react-scripts` provide, and you're in a world of pain with ejecting and managing your own scripts. And out of the box, Webiny does use some things that can be considered as custom.

Besides that, we also wanted to ensure that our bundling process is easy to customize or replace completely. If you're a fan of `parcel` - we will not be in your way. On the contrary, we want our community to see how modular and configurable Webiny is, and create their own tools.

In this article we'll look at what happens when you run `yarn start` or `yarn build`.

## App scripts

Below is the snippet from `apps/site/package.json` file which we'll use as a case study to cover all the existing scenarios:

```json5
// package.json
{
  scripts: {
    // Build app using "dev" environment
    "build:dev": "env-cmd -r .env.json -e default,dev webiny run build",
    // Build app using "prod" environment
    "build:prod": "env-cmd -r .env.json -e default,prod webiny run build",
    // Build SSR bundle app using "dev" environment
    "build:ssr:dev": "env-cmd -r .env.json -e default,dev webiny run build-ssr",
    // Build SSR bundle app using "prod" environment
    "build:ssr:prod": "env-cmd -r .env.json -e default,prod webiny run build-ssr",
    // Start local dev server
    start: "env-cmd -r .env.json -e default,local webiny run start"
  }
}
```

These scripts are pretty straightforward: in each one of them, we load `.env.json` file, and load the appropriate ENV variables. Then we run `webiny run <command>`.

> We use [env-cmd](https://www.npmjs.com/package/env-cmd) to load environment variables before bundling your app. This tool fits perfectly into the multi-environment setup of Webiny, and it allows us to load different variable presets depending on which environment we're bundling. This is also not a requirement - if you want, you an use any other tool to load ENV variables.

The `webiny run` command is provided by the `@webiny/cli` package. It looks for a `webiny.config.js` file and tries to run the specified command. Learn more about `webiny.config.js` [in this article](/docs/get-started/configuration#webinyconfigjs).

In your app's `webiny.config.js` you'll see that we provide a set of utility functions in the `@webiny/project-utils` package, to bundle your apps for both local development as well as deployment to the cloud. Most of the time, these utilities will be enough to bundle your app.

In case you need to customize webpack, or babel, see the example below.

> The code is stripped down to focus on the example at hand.

```js
const { startApp } = require("@webiny/project-utils");

module.exports = {
  commands: {
    async start(options, context) {
      // Start local development
      await startApp(
        {
          ...options,
          // Do not open the browser automatically
          openBrowser: false,
          webpack(config) {
            // Return your customized webpack config
            return config;
          },
          babel(config) {
            // Return your customized babel config
            return config;
          }
        },
        context
      );
    }
  }
};
```

Using the same approach you can customize webpack and babel in other commands.
If you want to use your own bundling configuration, you simply need to run your own logic within these `commands`. 
In case you do build a custom tool, let us know. We'd love to see it! 

## Build scripts

When running a `build:dev` or `build:prod` script, your app will be built for production. These commands are invoked automatically during deploy process. The `dev` and `prod` are the names of the environments being deployed, and so, if you run `yarn webiny deploy apps --env=dev`, the `build:dev` script will be executed. Same thing for `prod`.

You may have noticed that we also have a set of `build:ssr` scripts in our `apps/site` app. These are used only for apps that need SSR (server side render) capabilities. Admin apps don't have these. And so, you can quickly discover what this is doing, by going into your `webiny.config.js` file, and looking for `buildSsr` command. 

Out of the box, we provide utilities for bundling your app for SSR and in most cases you don't need to do anything. Simply use those utilities and your app will be taken care of.

