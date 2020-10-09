---
id: creating-a-scaffold-plugin
title: Creating a Scaffolding Plugin
sidebar_label: Creating a Scaffolding Plugin
---

:::note important
This article assumes you're already familiar with creation of CLI plugins. If not, please read the previous article on [Creating a CLI plugin](/docs/deep-dive/cli/creating-a-cli-plugin).
:::

In this article, we'll create a plugin which generates a folder for us. Not very exciting, but it will show you how we created our own scaffolding plugins. After this, you'll be able to easily expand on the basics and create plugins for your project.

## Introduction to scaffolding

Before we begin developing a new plugin, we need to explain how this works. When you run `yarn webiny scaffold`, you'll be prompted with a list of available scaffolding plugins to select from. As we know from the [CLI Overview](/docs/deep-dive/cli/overview) article, Webiny CLI doesn't have the `scaffold` command built-in. That command comes from `@webiny/cli-plugin-scaffold` package, and you can see that plugin in your `webiny.root.js`.

That plugin, in turn, loads plugins of type `cli-plugin-scaffold-template`. You can create an inception of plugins! You create a plugin, which loads other plugins, which load other plugins, etc. That's how the entire Webiny is built.

So now you know how things are connected. Let's begin developing the scaffolding plugin.

## Plugin structure

Scaffold plugins must implement the following type:

```typescript
type QuestionsInput = {
  context: CLIContext;
};

type GenerateInput = {
  context: CLIContext;
  // Object with data from the questions (user answers)
  input: { [key: string]: any };
  // Instance of `ora` spinner: https://www.npmjs.com/package/ora
  oraSpinner: any;
};

type CLIScaffoldPlugin = {
  name: string;
  type: "cli-plugin-scaffold-template";
  scaffold: {
    // Scaffold plugin name to show in the list
    name: string;
    // See https://github.com/SBoudrias/Inquirer.js#question for `Question` structure
    questions(params: QuestionsInput): Question[];
    // Your actual scaffolding logic.
    // This function gets executed after correctly answering all the **questions** above.
    generate(params: GenerateInput): Promise<void>;
  };
};
```

For `CLIContext` type definition, see [Creating a CLI plugin](/docs/deep-dive/cli/creating-a-cli-plugin) article.

## The code

:::note important
We'll skip the instructions on where to put your code, and how to enable your plugin. If you want to learn that, read the [Creating a CLI plugin](/docs/deep-dive/cli/creating-a-cli-plugin) article which explains the basics of creating a CLI plugin.
:::

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

            const { projectRoot } = context.paths;
            if (fs.existsSync(path.join(projectRoot, value))) {
              return "A folder with the same name already exists in this path";
            }

            return true;
          }
        }
      ];
    },
    async generate({ input, context }) {
      const { folderName } = input;
      const projectRootPath = context.paths.projectRoot;

      fs.mkdirSync(path.join(projectRootPath, folderName));
      fs.writeFileSync("success.txt", "Folder has been successfully scaffolded!");
    }
  }
};
```

We use inquirer validation to ensure that the folder's name contains only alphanumeric characters. We'll also check whether the folder already exists using the path supplied by `context.paths.projectRoot`.

The last thing to do is to enable your plugin in `webiny.root.js`. If you don't know how to do that, refer to [Enabling the plugin](/docs/deep-dive/cli/creating-a-cli-plugin#enabling-the-plugin) in the previous article.

Now we're able to run `webiny scaffold` within our project's root, select our newly created scaffold plugin, enter a folder name and have our folder created for us. Of course, it will warn and prompt us to insert a different name if the validation fails.

Congratulations! You've just finished your first scaffolding plugin. 🚀

To see a more complex example, take a look at our [cli-plugin-scaffold-graphql-service](https://github.com/webiny/webiny-js/tree/master/packages/cli-plugin-scaffold-graphql-service) package, on our GitHub.
