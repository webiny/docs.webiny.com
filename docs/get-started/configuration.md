---
id: configuration
title: Configuration
sidebar_label: Configuration
---

There are two files you'll find in your project that are important for Webiny: `webiny.root.js` and `webiny.config.js`.

## webiny.root.js

This file is always located in your project's root and is unique. Our CLI relies on this file to find the project root when you run it from project folders that are not root.

- **template** - this property contains the name and version of the project template you used to bootstrap your project. It may not be very important to you at this point, but it will help us to provide you with migration tools and other support in the future.
- **projectName** - generated using your project folder name. This one is used to name resources during deployment of infrastructure to the cloud. It will help you to look for specific resources in AWS Console.
- **cli**
  - **plugins** - an array of CLI plugins. You can easily add your own CLI plugins here to expand the Webiny CLI capabilities.

## webiny.config.js

You will find this file in each package that represents an app or an API resource. In this file we define:

- **commands** - arbitrary functions to be executed by `yarn webiny run [command]`
- **hooks** - deploy hooks to be processed after infrastructure deployment

This file gives you a way to create your own commands to handle your code, by writing simple functions. We provide a lot of utility functions in our `@webiny/project-utils` package for you to use for bundling apps, functions, etc. A good example is found in `apps/admin/webiny.config.js`. The example below shows a simplified version of the aforementioned file:

```js
// webiny.config.js
const { startApp, buildApp, buildAppHandler } = require("@webiny/project-utils");

module.exports = {
  commands: {
    async start(options, context) {
      // Start local development
      await startApp(options, context);
    },
    async build(options, context) {
      // Bundle app for deployment
      await buildApp(options, context);
      // Build Lambda handler which will serve files to CDN
      await buildAppHandler(options, context);
    }
  }
};
```

With this you defined a `webiny.config.js` file and 2 commands: `start` and `build`. The most common way to run them is by adding a script to your `package.json` located right next to the `webiny.config.js` file:

```json
// package.json (most of the file contents is skipped to focus on the example at hand)
{
  "scripts": {
    "start": "env-cmd -r .env.json -e default,local webiny run start",
    "build:dev": "env-cmd -r .env.json -e default,dev webiny run build",
    "build:prod": "env-cmd -r .env.json -e default,prod webiny run build"
  }
}
```

You can also run the command by calling `yarn webiny run [name]`.

### Command parameters

Every command you define will have the same parameters, `options` and `context`:
- **options** - is an object containing input parameters parsed by [yargs](https://www.npmjs.com/package/yargs) which we use under the hood for our CLI. By running `yarn webiny run myCommand --custom=value`, `yargs` will parse that command and your `custom` parameter will be accessible via the `options`.  
- **context** - this is a `Context` object provided by Webiny CLI. It contains helper methods, plugins and other useful information constructed at runtime.
