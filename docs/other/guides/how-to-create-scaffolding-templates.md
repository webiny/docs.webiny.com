---
id: creatingScaffoldingTemplates
title: How to create Scaffolding Templates
sidebar_label: Creating Scaffolding Templates
---

### Introduction
As discussed in [Scaffolding](/docs/get-started/scaffolding), you can save a lot of time by using Scaffolding Templates.

The great thing is that you may also write your own templates! In this article we will go in depth about it.

### Writing your first Scaffolding Template
Webiny CLI loads templates that are available as dependencies of your project. Under the hood, we use "yarn list" to find the available template packages. 

You should create a new package whose name follows the following pattern: `webiny-cli-scaffold-*`.

For example, valid names could be:
* webiny-cli-scaffold-append-unicorns
* webiny-cli-scaffold-add-delicious-donuts-to-my-site

Next, your package must export an array of [Plugins](/docs/deep-dive/plugins-crash-course) (you can also export a single plugin). Your Plugins must follow the object structure below:
```
{
    name: string,           // Plugin info
    description: string,    // Plugin info
    scaffold: {
        name: string        // Used in the Terminal
        questions({ context? }): InquirerQuestion[] | () => InquirerQuestion[]
        generate({ input, context, oraSpinner }): void  
    }
}
```

More information regarding the `InquirerQuestion` object type can be found on the [Inquirer's documentation](https://www.npmjs.com/package/inquirer). Generally, a `name` and a `message` will suffice.

Additional details about the received arguments:
* **input**: all Inquirer values will be stored here. If you asked someone for their package's name `packageName` in your `scaffold.questions`, you would access it as `input.packageName`
* **context**: provides you the Scaffolding context filled with useful variables such as:
    * `packagesPath` (ie: `./packages`)
    * `apiPath`
    * `apiYaml` (ie: `./api/serverless.yml`)
    * `appPath` 
    * `appYaml`
* **oraSpinner**: the nice [Ora Spinner](https://www.npmjs.com/package/ora) instance which shows up when you run `webiny scaffold`. You are able to change its `text`, `prefixText`, `stop()` it and so on.

When you have finished writing your package, the last step is installing it in your app's repository. Thus, it will be detected by Scaffold CLI and you'll be ready to go! 

