---
id: creating-a-cli-plugin
title: Creating a CLI plugin
sidebar_label: Creating a CLI plugin
---

This guide will help you create your own CLI plugins using our [Plugins system](/docs/deep-dive/plugins-crash-course).

This process is very similar to [creating scaffold plugins](/docs/deep-dive/scaffolding/creating-a-scaffold-plugin).

We use [yargs](https://www.npmjs.com/package/yargs) to create our CLI, so you should be somewhat familiar with it.

## Where to start

We will create a simple CLI plugin called **greetMe** that takes your desired **name** as an argument and prints a nice greeting.

First, I will create a new package in our project's root: `./greetMe`. I will initialise it using `npm init -y` and create the entrypoint `./greetMe/index.js`.

CLI plugins must always have type **cli-command** and a **create** function which receives the **yargs** instance and a **context**. This is `index.js`:
 
```js
// index.js
module.exports = {
    type: "cli-command",
    name: "cli-command-greetMe",
    create({ yargs, context }) {
        yargs.command(
            "greetMe <name>",
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

We use a required positional argument that takes your inserted name and is later used when printing it in the greeting. Running the new command results in this:

```console
Andrei ~/Desktop/Webiny/sample-project
$ webiny greetMe Andrei

Nice to meet you, Andrei!
```

And now you have created your first CLI plugin.