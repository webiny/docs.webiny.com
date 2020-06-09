---
id: resources
title: Webiny Architecture Resources
sidebar_label: Resources
---

This article provides a brief overview of the necessary cloud resources that are deployed with Webiny.

By default, once you deploy Webiny to the cloud, two stacks of resources are created: the `api` stack and an `apps` stack, which are deployed via the `yarn webiny deploy api` and `yarn webiny deploy apps` CLI commands, respectively.

## API

In this section we'll look at the resources deployed when you run the `yarn webiny deploy api` command. The related file where you find the stack of resources is located in `api/resources.js` of your project.

### GraphQL services

All GraphQL API functions are deployed using the `@webiny/serverless-function` component. They are simple Lambda functions

### Apollo Federation

All of the GraphQL services are combined into one big schema using [Apollo Federation](https://www.apollographql.com/docs/apollo-server/federation/introduction/). The component responsible for deploying your Apollo Gateway is `@webiny/serverless-function`. It deploys a simple function which serves as an entry point to your entire GraphQL API.

Once a request hits the Apollo Gateway function, it builds a Federated Schema using all of the GraphQL services and then executes the query.

### Other resources

Other resources include a Cognito User Pool and a Cloudfront CDN. The CDN sits in front of your API entry point. You can deploy other resources if your projects needs them. All you need is some code and a definition for your resource in the `{stack}/resource.js` file.

## React apps

In this section we'll look at the resources deployed when you run the `yarn webiny deploy apps` command. The related file where you find the stack of resources is located in `apps/resources.js` of your project.

### App as a function

When React apps are deployed to the cloud, each app is deployed as a function. For the `site` app, we also deploy another function that serves as a server-side rendering (SSR) function. It is invoked by the `site` handler when it determines that the content needs to be rendered.

To make your app functions accessible via HTTP, we deploy an API Gateway with routes pointing to your apps. There is also a CDN deployed in front of the API Gateway so your static assets and SSR output is cached and the functions are only executed when necessary.

> The app's static assets are packed as part of the function archive, we're not using S3 here (we do plan to upgrade this to use the proper S3 bucket). When served, CDN caches those assets so they are only processed by the function once. If you build an app with static assets exceeding the function size limits, let us know.

### Server-side rendering (SSR)

SSR function is invoked when the `site` handler receives a request which is not a static asset request. The SSR handler is built for you in the `build` command found in `apps/site/webiny.config.js`. To learn more about commands, read the article about [configuration files](/docs/get-started/configuration.md). We provide you with a utility to generate and build your SSR handler, but that can be customized or completely replaced.
