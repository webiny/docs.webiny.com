---
id: app-structure
title: App Structure
sidebar_label: App Structure
---

In this article we'll learn what is necessary to create a new app from scratch. We'll start with a very simple React app, just to cover the boilerplate that is needed for the app to work.

> This article assumes you have completed the [Quick Start guide](/docs/get-started/quick-start) and have a working Webiny project.

## Folder structure

The most basic app setup looks like this:

```
.
├── public
│   └── index.html
├── src
│   └── index.tsx
├── package.json
├── tsconfig.json
└── webiny.config.js
```

The `index.html` file looks like any other React app HTML:

```html
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

The contents of `src/index.tsx` is the simplest React app ever! We don't need anything fancy for this article so let's just mount a simple `div`:

```typescript jsx
// index.tsx
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(<div>Welcome!</div>, document.getElementById("root"));
```

Since we're using Typescript, we need to configure a `tsconfig.json` in each app, and this is what it looks like:

```json
{
  "extends": "../../tsconfig",
  "include": ["src"]
}
```

We're extending the `tsconfig.json` file from the root of the project. That file is responsible for everything related to Typescript in our monorepo.

Now let's take a look at the `package.json` file:

```json
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
    "start": "env-cmd -r .env.json -e default,local webiny run start"
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

It looks very similar to a `create-react-app` setup, except, instead of `react-scripts` we're using `webiny` CLI. And `webiny` command works with `webiny.config.js` which we'll cover next:

```js
// webiny.config.js

const { startApp } = require("@webiny/project-utils");

module.exports = {
  commands: {
    async start(...args) {
      // Start local development
      await startApp(...args);
    }
  }
};
```

This file is described in greater details later on, but if you want to learn more about it right now, jump to [App Bundling](/docs/app-development/app-bundling). There is also na overview of Webiny configuration files in [this article](/docs/get-started/configuration).


Now your app is ready! To start a local development build, run the following in your terminal:

```shell script
cd apps/my-app
yarn start
``` 

> IMPORTANT: if you're a Windows user, we recommend using Git Bash or WSL. 

## Monorepo workspace

Once you've created this app, it will be picked up by `yarn` next time you run `yarn` in the project root. How so? If you look at you `<root>/package.json` file, you'll see something like this:

```json
{
  "workspaces": {
    "packages": ["apps/*"]
  }
}
```

This means that every package inside the `apps` folder is a workspace, and whenever you run `yarn` in your project, it will be linked via `node_modules` and its dependencies will be installed automatically.

> To lean more about Yarn workspaces, read [this article](https://classic.yarnpkg.com/en/docs/workspaces/).
