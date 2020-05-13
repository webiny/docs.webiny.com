---
id: your-first-scaffold-plugin
title: Your first scaffold plugin
sidebar_label: Creating scaffold plugins
---

You've already seen our scaffold templates, but you desire more. You want to create your own packages that improve your project.

We have good news: this is completely possible and easy to accomplish using our [Plugins system](/docs/deep-dive/plugins-crash-course).

# Alright, how do I do it?
First of all, you have to update the `/webiny.root.js` file found in your project's root with your new plugin. Plugins referenced here are mainly resolved using [node module resolution](https://nodejs.org/api/modules.html). 

In this example, we'll create a **local package** called **scaffoldFolder**.

You may also use **globally installed packages** and, if you're willing to go as far as to write gross, indecent yet quick **inline** hacky plugins, we've made sure that's possible too.

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
As you may see in the inline example above, the plugin's **type** must always be **cli-plugin-scaffold-template**.
But more signifitcantly, you'll provide a **scaffold** object that contains three fields:
- **name** - This is the name of your scaffolding plugin as it will appear in the CLI.
- **questions({ context })** -  A function that returns an array of [inquirer](https://www.npmjs.com/package/inquirer)-like questions.
- **generate({ context, input, oraSpinner })** -  Finally, your actual scaffolding code. This function gets executed after correctly answering all **questions** above.
    - **input** - An object containing the inputted values received from your inquirer questions
    - **oraSpinner** - Remember the pretty spinner you see when interacting with our CLI? This is the [Ora Spinner](https://www.npmjs.com/package/ora) instance for you to use in case you need to update it.

The **context** object referenced above contains various data that might be helpful: certain paths, the config file's data, registered plugins, ... . Feel free to output it & take a deeper look at it.


# Example
Let's create our first scaffolding plugin. I've navigated to my project's root and created a new folder: `./scaffoldFolder`. Here I'll quickly initialise a new package using `npm init -y`.

I've taken the liberty of writing a short plugin in `./scaffoldFolder/index.js` that creates a customly named Folder in my project's root:

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

You may see that I employ **inquirer validation** in order to ensure that the folder's name contains only alphanumeric characters. We'll also check whether the folder already exists using the path supplied by **context.paths.projectRoot**.

Now we're able to run `webiny scaffold` within our project's root, select our newly created scaffold plugin and fill in a folder name in order to create it. Of course, it will warn and prompt us to insert a different name if the validation fails.

If you've made it so far, congratulations! You've just finished your first scaffold plugin. 🚀