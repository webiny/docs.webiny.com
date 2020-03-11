---
id: creatingScaffoldingTemplates
title: How to create Scaffolding Templates
sidebar_label: Creating Scaffolding Templates
---

### Introduction
As discussed in [Scaffolding](/docs/get-started/scaffolding), it is possible to save yourself a lot of time by using one of the default Scaffolding Templates.

The great news are that you may also write your own templates! In this article we will go in depth about it.

### Writing your first Scaffolding Template
We use `node modules` for all of our templates. You should create a new package whose name follows the following pattern: `webiny-cli-scaffold-*`.

For example, valid names could be:
* webiny-cli-scaffold-append-unicorns
* webiny-cli-scaffold-add-delicious-donuts-to-my-site

Next, your package must export an array of [Plugins](/docs/deep-dive/plugins-crash-course) (a single Plugin is just as fine). Your Plugins must follow the object structure below:
```
{
    name: String,           // Plugin info
    description: String,    // Plugin info
    scaffold: {
        name: String        // Used in the Terminal
        questions({ context }): Function:[InquirerQuestion]    // Can be just an array aswell
        generate({ input, context, oraSpinner }): async Function  
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
* **oraSpinner**: the nice spinner's instance, which shows up when you run `webiny scaffold`. You are able to change its `text`, `prefixText`, `stop()` it and so on.

When you have finished writing your package, the last step you have to do is installing it in your app's repository. Thus, it will be detected by Scaffold CLI and you'll be ready to go! 

