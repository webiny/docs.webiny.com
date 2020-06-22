---
id: overview
title: CLI Overview
sidebar_label: Overview
---

Webiny CLI is a small command-line tool containing a set of commands to make your interaction with Webiny more enjoyable. It is built with [yargs](https://www.npmjs.com/package/yargs) and our own system of plugins. The very same system that powers the rest of Webiny (API, React - everything).

:::note available commands
To see all the available CLI commands at any time, run `yarn webiny help`.
:::

Out of the box, the CLI itself only has 3 commands:

- **run** - runs commands defined in `webiny.config.js` files
- **enable-tracking** - enables anonymous Webiny telemetry
- **disable-tracking** - disables telemetry

:::tip telemetry
[Click here](https://www.webiny.com/telemetry/) to learn more about Webiny Telemetry.
:::

You can see the actual implementation of these commands in our Github repo:
https://github.com/webiny/webiny-js/tree/master/packages/cli/commands

Commands can be added to the CLI by adding plugins to the `webiny.root.js` file in your project root. When you setup your Webiny project, you'll notice that we configure your CLI with plugins by adding them to your `webiny.root.js`. This way you can configure the behavior of plugins, add your own, or remove unused plugins from your project.

By having this flexible setup and a system of plugins, you can create your own utilities to use in your Webiny project and maybe even publish those plugins to `npm` for the community to use.

In the next article, we'll learn how to create a very simple CLI plugin.
