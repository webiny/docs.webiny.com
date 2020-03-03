---
id: resources
title: Webiny Architecture Resources
sidebar_label: Resources
---

This article provides a brief overview of the necessary cloud resources that are deployed with Webiny.  

By default, once you deploy Webiny to the cloud, two sets of resources (infrastructures) are created - the API and apps infrastructures, which are deployed via the `webiny deploy-api` and `webiny deploy-apps` CLI commands, respectively.
 
## API

In this section we'll look at the resources deployed when you run the `webiny deploy-api` command. The related serverless template file is located in `api/serverless.yml` of your project.

### GraphQL services

Default Webiny apps (like the [Page Builder](http://localhost:3000/docs/webiny-apps/page-builder/getting-started) or the [Form Builder](http://localhost:3000/docs/webiny-apps/form-builder/introduction) app) are deployed using the `@webiny/serverless-apollo-service` component or a component that is derived from it.

These services consist of an API Gateway and a function which runs your GraphQL API.

The API Gateway serves as a router and an entry point to your service. This way you can access your GraphQL API function via a simple HTTP request to `{api-gateway-url}/graphql`. Some services may also provide other REST routes if needed.

### Apollo Federation

All of the GraphQL services are combined into one big schema using [Apollo Federation](https://www.apollographql.com/docs/apollo-server/federation/introduction/). The component responsible for deploying your Apollo Gateway is `@webiny/serverless-apollo-gateway`. It deploys a simple function which serves as an entry point to your entire GraphQL API.

To access this main entry point, we deploy another API Gateway with a single route `/graphql`. This route forwards your requests to the Apollo Gateway function, which in turn builds a Federated Schema using all of the GraphQL services and then executes the query.

### Other resources

Other resources include a Cognito User Pool and a Cloudfront CDN. The CDN sits in front of your API entry point. You can deploy other resources if your projects needs them. All you need is a [Serverless Component](https://github.com/serverless/components) to deploy them.

## React apps

In this section we'll look at the resources deployed when you run the `webiny deploy-apps` command. The related serverless template file is located in `apps/serverless.yml` of your project.

### App as a function
When React apps are deployed to the cloud, each app is deployed as a single function. For the `site` app, we also deploy another function that serves as a server-side rendering (SSR) function. It is invoked by the `site` handler when it determines the content needs to be rendered.

To make your app functions accessible via HTTP, we deploy an API Gateway with routes pointing to your apps. There is also a CDN deployed in front of the API Gateway so your static assets and SSR output is cached and the functions are only executed when necessary.

> The app's static assets are packed as part of the function archive, we're not using S3 here. When served, CDN caches those assets so they are only processed by the function once. If you build an app with static assets exceeding the function size limits, let us know.

### Server-side rendering (SSR)
SSR function is invoked when the `site` handler receives a request which is not a static asset request. Both of these handlers are located in your project. The main app handler can be found in `apps/site/handler` folder and the SSR handler in the `apps/site/ssr` folder. 
