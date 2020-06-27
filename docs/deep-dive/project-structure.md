---
id: project-structure
title: Project Structure
sidebar_label: Project Structure
---

In this article we'll look at the project structure and explain the responsibilities of certain files.

Once your [project is set up](/docs/get-started/quick-start), it will look like this:

```
├── api
│   ├── apolloGateway
│   ├── databaseProxy
│   ├── files
│   ├── formBuilder
│   ├── cms
│   ├── i18n
│   ├── pageBuilder
│   ├── security
│   └── resources.js
├── apps
│   ├── admin
│   ├── site
│   └── resources.js
├── scripts
│   └── linkPackages.js
├── .eslintignore
├── .eslintrc.js
├── .babel.node.js
├── .babel.react.js
├── babel.config.js
├── jest.config.base.js
├── jest.config.js
├── lerna.json
├── package.json
├── tsconfig.build.json
├── tsconfig.json
└── webiny.root.js
```

It is set up as a [monorepo](https://en.wikipedia.org/wiki/Monorepo) so you can easily manage your packages, for both API and React, from within the same repo. This is the reason we use `yarn` - its workspace management makes working with monorepos really enjoyable.

A Webiny project consists of an `API` and `React apps`. Those are located in `api` and `apps` folders, respectively.

## `api`

This folder contains a `resources.js` file which is used by the Webiny CLI to deploy your API. It also contains an environment config file, `.env.json`, with as environment variables to customize deployments of different API environments.

Adding new API resources is a matter of editing the `resources.js` file and adding new resource definitions. There will be more on this in separate articles about API development.

## `apps`

The `admin` and `site` apps are almost like `create-react-app` apps, but with more flexibility and SSR utilities out of the box. The file responsible for all the customization is `webiny.config.js` located in `apps/admin` and `apps/site`, respectively. We provide sensible defaults for you, but you can override and customize everything.

## Other files

- `.babel.node.js` - contains your babel presets and any plugins you wish to use for your future Node packages.
- `.babel.react.js` - contains your babel presets and any plugins you wish to use for your future React packages.
- `.env.json` - contains environment variables that are used when you deploy both `api` and `apps`, so you can set shared variables in this file. This file is loaded first, then the `api/.env.json` values are merged into it (same goes for `apps/.env.json` in case you have it; by default, it is not needed).
- `.prettierrc.js` - contains presets to format code.
- `babel.config.js` - enables `babelrc` files for your custom packages (NOTE: this is for jest tests only).
- `jest.config.base.js` - contains the presets for running jest tests.
- `jest.config.js` - contains configuration for running jest tests.
- `lerna.json` - contains Lerna configuration to manage your future packages.
- `tsconfig.build.json` - contains base configuration for developing using typescript.
- `tsconfig.json` - extends `tsconfig.build.json` and is configured to play nicely with your IDE for instant type checks.
- `webiny.root.js` - this file is used by our CLI to get the plugins you are using for this project. We may add more configuration options to this file in the future.
