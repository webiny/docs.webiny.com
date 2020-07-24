---
id: scaffold-node-package
title: Node Package
sidebar_label: Node Package
---

This scaffolding plugin generates a `node package` similar to [Webiny's **api** packages](https://github.com/webiny/webiny-js/tree/master/packages).

## Contents

- `package.json` file is generated with your plugin's name 
- `tsconfig.json`, `jest.config.js` and `.babel.rc.js` config files automatically added so that you can jump straight to coding your business logic.
- `src/` folder which contains a [plugin factory](https://docs.webiny.com/docs/deep-dive/plugins-crash-course#creating-a-plugin), which exports the sample plugin located in `src/plugins/index.tsx`

## Using it in your project

You can now use use your newly scaffolded **Node** package in your Webiny project by adding it to one of your `api` stacks.

The scaffolded package is [linked](https://classic.yarnpkg.com/en/docs/cli/link/) to the other packages in the repository via node_modules automatically, so you do not have to worry about it. 