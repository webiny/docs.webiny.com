---
id: graphql-apollo-service
title: GraphQL Apollo Service
sidebar_label: GraphQL Apollo Service
---

#### Summary
Creates a new GraphQL package ready for you to develop and adds it to the list of serverless APIs in `serverless.yml`.

#### Input
- **packageName** - your package's name. Names starting with at-sign such as `@super/duper` also work.

#### Build process
1. Your new service is added to `./api/serverless.yml` and configured as a `@webiny/serverless-apollo-service` component. Default values are assigned to the used `vars`, if it's the case.
2. The new package is cloned from our Template into `./packages/<packageName>`. Its package name in `package.json` will be set to your inserted **packageName**.
3. The package is linked with `yarn` and built with `yarn build` so that Babel & Typescript transpile your code into the `/dist` folder automatically. You'll be ready to deploy it immediately.

