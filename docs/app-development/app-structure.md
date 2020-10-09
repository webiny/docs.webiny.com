---
id: app-structure
title: App Structure
sidebar_label: App Structure
---

:::info important
This article assumes you have completed the [Quick Start guide](/docs/get-started/quick-start) and have a working Webiny project.
:::

In this article we'll learn what is necessary to create a new app from scratch. We'll start with a very simple React app, just to cover the boilerplate that is needed for the app to work.

## Folder structure

In your `apps` folder, create a new folder, for example `my-app`, and create the following structure:

```
.
├── public
│   └── index.html
├── src
│   └── index.tsx
├── .env.json
├── package.json
├── tsconfig.json
└── webiny.config.js
```

### index.html

The `index.html` file looks like any other React app HTML:

```html title="public/index.html"
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="theme-color" content="#000000" />
    <title>Webiny</title>
    <link
      href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,500,700|Lato:400,700&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <noscript>
      You need to enable JavaScript to run this app.
    </noscript>
    <!-- This element is used to mount React app as well as inject SSR content -->
    <div id="root"></div>
  </body>
</html>
```

### index.tsx

The contents of `src/index.tsx` is the simplest React app ever! We don't need anything fancy for this article so let's just mount a simple `div`:

```typescript jsx title="src/index.tsx"
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(<div>Welcome!</div>, document.getElementById("root"));
```

### .env.json

Let's setup some basic ENV variables that will be loaded when we start the app:

```json title=".env.json"
{
  "default": {
    "SKIP_PREFLIGHT_CHECK": true,
    "INLINE_RUNTIME_CHUNK": false,
    "PUBLIC_URL": "/",
    "PORT": "3000"
  }
}
```

You're most likely used to using the [dot-env](https://www.npmjs.com/package/dotenv) library to load your ENV variables. For default Webiny setup, we like to use the [env-cmd](https://www.npmjs.com/package/env-cmd) library as it supports JSON and we can define multiple sets of variables in one file.

:::tip
You're free to replace this with `dotenv` if you prefer to use that. For Webiny, it's only important that the required variables are set, no matter how you do it.
:::

### tsconfig.json

Since we're using TypeScript, we need to have a `tsconfig.json` in our app, and this is what it looks like:

```json title="tsconfig.json"
{
  "extends": "../../tsconfig",
  "include": ["src"]
}
```

We're extending the `tsconfig.json` file from the root of the project. This way, all our apps will use the same TypeScript configuration and it's easy to tweak your TS configuration for the entire project.

### package.json

Now let's take a look at the `package.json` file:

```json title="package.json"
{
  "name": "my-app",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "react": "^16.13.1",
    "react-dom": "^16.13.1"
  },
  "devDependencies": {
    "env-cmd": "^10.1.0"
  },
  "scripts": {
    "start": "env-cmd -r .env.json -e default webiny run start"
  },
  "browserslist": {
    "development": ["last 2 chrome versions", "last 2 firefox versions", "last 2 edge versions"],
    "production": [">0.25%", "not op_mini all", "ie 11"]
  },
  "svgo": {
    "plugins": {
      "removeViewBox": false
    }
  }
}
```

It looks very similar to a `create-react-app` setup, except, instead of `react-scripts` we're using `webiny` CLI. And `webiny` command works with `webiny.config.js` which we'll cover next.

### webiny.config.js

:::note
If you haven't read it already, we recommend you to take a look at the article about [Webiny configuration files](/docs/get-started/configuration) first.
:::

```js title="webiny.config.js"
const { startApp } = require("@webiny/project-utils");

module.exports = {
  commands: {
    async start(options, context) {
      await startApp(options, context);
    }
  }
};
```

This file simply tells that, when you run the `start` command, use the `startApp` utility we provide to run the local development server. For now, this is all we need.

## Starting local development

Now your app is ready! To start a local development build, run the following in your terminal:

```shell script
cd apps/my-app
yarn start
```

:::tip
If you're a Windows user, we recommend using Git Bash or WSL.
:::

## Monorepo workspace

Once you've created this app, it will be picked up by `yarn` next time you run `yarn` in the project root. How so? If you look at you `<root>/package.json` file, you'll see something like this:

```json title="<project>/package.json"
{
  "workspaces": {
    "packages": ["apps/*"]
  }
}
```

This means that every package inside the `apps` folder is a workspace, and whenever you run `yarn` in your project, it will be linked via `node_modules` and its dependencies will be installed automatically.

:::note
To lean more about Yarn workspaces, read [this article](https://classic.yarnpkg.com/en/docs/workspaces/).
:::

## Summary

In this article we learned how to setup the most basic app skeleton and run it using `webiny run` command. At this point, you can either continue developing your app using plain components, as you would do in your regular React app, or you can go the Webiny way, and develop your app using an `App Template`.

We highly recommend taking the `App Template` path! You'll be building your app using plugins, it will be easy to share your template via `npm`, reuse it for different projects, etc. Learn more about this in the next article.
