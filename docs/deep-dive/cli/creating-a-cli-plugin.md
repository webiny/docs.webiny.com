---
id: creating-a-cli-plugin
title: Creating a CLI Plugin
sidebar_label: Creating a CLI Plugin
---

In this article we'll create a very basic CLI plugin to become familiar with how the CLI works, and uses plugins.
We will create a simple CLI plugin called `hello` that takes your desired `name` as an argument and prints a nice greeting. 

## Plugin structure

Create a new package in your project's root: `./hello`. Initialise it using `yarn init -y` and create an entrypoint `./hello/index.js`.

All CLI command plugins must implement this type (you can write your plugins in plain JS, but the plugin structure is important):

```typescript
type CLIContext = {
  // Project name (loaded from webiny.root.js)
  projectName: string;
  // PluginsContainer instance with all CLI plugins
  plugins: PluginsContainer;
  // Contains paths that may be useful when developing plugins
  paths: {
    projectRoot: string;
  };
  // Resolve a `path` relative to `projectRoot`. Returns an absolute full path to the given `path`.
  resolve(path: string): string;
};

type CreateCommand = {
  yargs: any;
  context: CLIContext;
};

type CLICommandPlugin = {
  type: "cli-command";
  name: string;
  create(params: CreateCommand): void;
};
```

`create` function receives the `yargs` instance and a `context`, which is a CLI context object, with various helper utilities.

```js title="hello/index.js"
module.exports = {
  type: "cli-command",
  name: "cli-command-hello",
  create({ yargs }) {
    yargs.command(
      "hello <name>",
      `Print a pretty message`,
      yargs => {
        yargs.positional("name", {
          describe: `The name to be greeted.`,
          type: "string"
        });
      },
      async argv => {
        console.log(`Nice to meet you, ${argv.name}!`);
        process.exit(0);
      }
    );
  }
};
```

We define a required positional argument that accepts your name and is later used when printing it in the greeting.

## Enabling the plugin

The last thing to do is enable this plugin in your CLI. Edit your `webiny.root.js` file and add your new plugin:

```diff title="webiny.root.js"
module.exports = {
    template: "@webiny/cwp-template-full@4.2.0",
    projectName: "my-project",
    cli: {
        plugins: [
            require("@webiny/cli-plugin-deploy-components")(),
            require("@webiny/cwp-template-full/hooks/api")(),
            require("@webiny/cwp-template-full/hooks/apps")(),
            require("@webiny/cli-plugin-scaffold"),
            require("@webiny/cli-plugin-scaffold-graphql-service"),
            require("@webiny/cli-plugin-scaffold-lambda"),
+           require("./hello")
        ]
    }
};
```

Your `webiny.root.js` may have a different set of default plugins, but the most important thing is that you require your new plugin and ad it to the `cli.plugins` array.

:::note
The location of your plugin is not important. Since you have to `require` your plugin, you can do it from anywhere, so you're free to structure your folders withing the project however you like.
:::

To verify your command is registered, run `yarn webiny --help`, it should be visible in the list of commands.

Let's now test the command:

```console
$ yarn webiny hello Webiny

Nice to meet you, Webiny!
```

And now you have created your first CLI plugin!

In the next article we'll build a more complex plugin, the one that will scaffold some code for us.
