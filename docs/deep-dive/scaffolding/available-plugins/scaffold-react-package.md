---
id: scaffold-react-package
title: React Package
sidebar_label: React Package
---

This scaffolding plugin generates a `react package` similar to [Webiny's **app** packages](https://github.com/webiny/webiny-js/tree/master/packages).

## Contents

- `package.json` file is generated with your plugin's name 
- `tsconfig.json` and `.babel.rc.js` config files automatically added so that you can jump straight to coding your business logic.
- `src/` folder which contains a [plugin factory](https://docs.webiny.com/docs/deep-dive/plugins-crash-course#creating-a-plugin), which exports the sample plugin located in `src/plugins/index.tsx`

## Using it in your project

You can now use use your newly scaffolded **React** package in your Webiny project by importing it in one of your `apps`.

The scaffolded package is [linked](https://classic.yarnpkg.com/en/docs/cli/link/) to the other packages in the repository via node_modules automatically, so you do not have to worry about it. 