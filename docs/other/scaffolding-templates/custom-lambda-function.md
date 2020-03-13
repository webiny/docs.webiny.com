---
id: custom-lambda-function
title: Custom Lambda Function
sidebar_label: Custom Lambda Function
---

#### Summary
Creates a new Lambda Function package ready for you to develop and adds it to the list of serverless APIs in `serverless.yml`.

#### Input
- **packageName** - your package's name. Names starting with at-sign such as `@super/duper` also work.
- **lambdaUrlPath** - the path at which your Lambda Function will be accessed. Only alphanumeric characters, hyphens and underscores are allowed.

#### Build process
1. Your new service is added to `./api/serverless.yml` and configured as a `@webiny/serverless-function` component. Default values are assigned to the used `vars`, if it's the case.
2. The new package is cloned from our Template into `./packages/<packageName>`. Its package name in `package.json` will be set to your inserted **packageName**.
3. The package is linked with `yarn` and built with `yarn build` so that Webpack transpiles your code into the `/dist` folder automatically. You'll be ready to deploy it immediately.