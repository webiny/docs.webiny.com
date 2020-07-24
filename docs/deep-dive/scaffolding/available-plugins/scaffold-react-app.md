---
id: scaffold-react-app
title: React App
sidebar_label: React App
---

This scaffolding plugin generates a `react app` [ready to be deployed](https://docs.webiny.com/docs/get-started/going-live/#3-deploy-apps-stack-using-dev-environment).

## Contents

- `package.json` and `.env.json` files are generated based on your plugin's name 
- `tsconfig.json` and `webiny.config.js` config files automatically added so that you can jump straight to coding your business logic.

Depending on whether you chose to generate an `admin`, a `site` or a `custom` app, a `src/` will also be generated, containing the appropriate [React](https://reactjs.org/) components

## Running the scaffolded app locally

You can immediately run your app locally by navigating to its path and running the following command:

```shell script
yarn start
```

## Deploying the scaffolded app

Your app [can be deployed](https://docs.webiny.com/docs/get-started/going-live/#3-deploy-apps-stack-using-dev-environment) along with all other resources present in its associated `resources.js` file:

```shell script
yarn webiny deploy apps --env=dev
```