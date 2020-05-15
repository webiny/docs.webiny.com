---
id: configuration
title: Configuration
sidebar_label: Configuration
---

There are two files you can configure right now: `webiny.root.js` and `webiny.config.js`

## webiny.root.js

This file appears in your project's root and it is unique. These are the configurable fields:

- **projectName** - your project's name; it is passed into the **Context** the plugins receive and it is also used when delpoying to AWS.
- **cli**
    -  **plugins** - an array of CLI and Scaffold plugins that are usable in our CLI

## webiny.config.js

This file appears in various packages. It serves two purposes: attaching **commands** to `webiny run [command]` and adding deployment **hooks**. These are the configurable fields:
- **commands** - an array of functions that are added to `webiny run [command]`. A notable example is importing **buildFunction** from `@webiny/serverless-files/functions/download/bundle` and passing it as the **build** command in order to run `webiny run build`.
- **hooks** 
    -  **stateChanged** - an array of hooks ran after deploying components to AWS.