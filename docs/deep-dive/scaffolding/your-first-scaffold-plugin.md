---
id: your-first-scaffold-plugin
title: Your first scaffold plugin
sidebar_label: Your first scaffold plugin
---

This guide will help you create your own scaffolding plugins using our [Plugins system](/docs/deep-dive/plugins-crash-course).

# Here's how to do it
First of all, you have to update the `/webiny.root.js` file found in your project's root with your new plugin. Plugins referenced here are mainly resolved using [node module resolution](https://nodejs.org/api/modules.html). 

In this example, we'll create a **local package** called **scaffoldFolder**.

You may use globally installed packages and we've made sure that it's possible to use inline plugins as well.

Let's see how **webiny.root.js** changes after adding our plugin:

- Our original file
```js
module.exports = {
    projectName: "webiny-js",
    cli: {
        plugins: [
            "@webiny/cli-plugin-deploy-components",
            "@webiny/cli-plugin-scaffold",
            "@webiny/cli-plugin-scaffold-graphql-service",
            "@webiny/cli-plugin-scaffold-lambda"
        ]
    }
};
```
- **Local / Global package** (which exports one or multiple plugins)
```js
module.exports = {
    projectName: "webiny-js",
    cli: {
        plugins: [
            "@webiny/cli-plugin-deploy-components",
            "@webiny/cli-plugin-scaffold",
            "@webiny/cli-plugin-scaffold-graphql-service",
            "@webiny/cli-plugin-scaffold-lambda",
            "./scaffoldFolder",
        ]
    }
};
```
- **Inline plugin**
```js
module.exports = {
    projectName: "webiny-js",
    cli: {
        plugins: [
            "@webiny/cli-plugin-deploy-components",
            "@webiny/cli-plugin-scaffold",
            "@webiny/cli-plugin-scaffold-graphql-service",
            "@webiny/cli-plugin-scaffold-lambda",
            {
                name: "cli-plugin-scaffold-template-scaffold-folder",
                type: "cli-plugin-scaffold-template",
                scaffold: {
                    name: "Scaffold folder",
                    questions: () => [
                        /* ... */
                    ],
                    generate: () => {
                        /* ... */
                    }
                }
            }
        ]
    }
};
```

# Scaffold plugin structure
Other than the plugin's `name` and `type`, you'll need to provide a scaffold object that contains three fields:
- **name** - This is the name of your scaffolding plugin as it will appear in the CLI.
- **questions({ context })** -  A function that returns an array of [inquirer](https://www.npmjs.com/package/inquirer)-like questions.
- **generate({ context, input, oraSpinner })** -  Finally, your actual scaffolding code. This function gets executed after correctly answering all **questions** above.
    - **input** - An object containing the inputted values received from your inquirer questions
    - **oraSpinner** - Remember the pretty spinner you see when interacting with our CLI? This is the [Ora Spinner](https://www.npmjs.com/package/ora) instance for you to use in case you need to update it.

The **context** object referenced above contains some helpful data/information like certain paths, the config file's data, registered plugins etc... . Feel free to output it and take a deeper look at it.


# Example
Let's create our first scaffolding plugin. First of all I'll navigate to my project's root and created a new folder: `./scaffoldFolder`. Here I'll quickly initialise a new package using `npm init -y`.

I've taken the liberty of writing a short plugin in `./scaffoldFolder/index.js`. The plugin will create a folder with whatever name you want to create.

```js
const fs = require("fs");
const path = require("path");

module.exports = {
    name: "cli-plugin-scaffold-template-scaffold-folder",
    type: "cli-plugin-scaffold-template",
    scaffold: {
        name: "Scaffold folder",
        questions: ({ context }) => {
            return [
                {
                    name: "folderName",
                    message: "What's the name of the folder you'd like to create? ",
                    validate: value => {
                        if (value.match(/[^a-zA-Z0-9]/)) {
                            return "Please insert a folder name containing only alphanumeric characters";
                        }

                        const projectRootPath = context.paths.projectRoot;
                        if (fs.existsSync(path.join(projectRootPath, value))) {
                            return "A folder with the same name already exists in this path";
                        }

                        return true;
                    }
                }
            ];
        },
        generate: async ({ input, context }) => {
            const { folderName } = input;
            const projectRootPath = context.paths.projectRoot;

            fs.mkdirSync(path.join(projectRootPath, folderName));
            fs.writeFileSync("success.txt", "Folder has been successfully scaffolded!");
        }
    }
};
```

I employ **inquirer validation** in order to ensure that the folder's name contains only alphanumeric characters. We'll also check whether the folder already exists using the path supplied by **context.paths.projectRoot**.

Now we're able to run `webiny scaffold` within our project's root, select our newly created scaffold plugin and fill in a folder name in order to create it. Of course, it will warn and prompt us to insert a different name if the validation fails.

Congratulations! You've just finished your first scaffold plugin. 🚀