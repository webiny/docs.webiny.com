---
id: stacks
title: Stacks
sidebar_label: Stacks
---

In this article we'll look at what stacks are and how this type of organization helps you develop and manage your project.

## Overview

Once your [project is set up](/docs/get-started/quick-start), it will have 2 stacks configured out of the box. Those stacks are `api` and `apps`. The name `stack` comes from `infrastructure stack`, because to deploy your app, you need to actually deploy some infrastructure to your cloud provider.

Stack is a simple folder that helps you organize related pieces of infrastructure and your business logic.
Your project can have unlimited number of stacks. You can also rename the existing `api` and `apps` stacks, if you like.

Stacks are completely independent, and have to be deployed separately.

## Stack setup

Depending on how you deploy Webiny, this will differ. But in this article, we'll focus on the default setup, and our default deployment mechanism which comes from `@webiny/cli-plugin-deploy-components` package. You'll find this plugin is required in your `webiny.root.js`.

`@webiny/cli-plugin-deploy-components` relies on 2 files:

- `resources.js` - which defines which infrastructure resources will be deployed
- `.env.json` - which contains ENV variables for deployment process

Besides these 2 files, you're completely free to organize files and folders within the stack however you want.

:::tip
When you create a new stack, it is a good idea to add your stack to `<projectRoot>/package.json` workspaces, so that the packages inside the stack are managed by `yarn`.
:::

## resources.js

This file describes your stack resources, like functions, API Gateways, S3 buckets, etc., and tells the deploy process what needs to be created in your AWS account.

Let's imagine you've created a new stack in your project, called `my-stack`. Inside, you created a React app called `my-app`. Here's one possible example of a `resources.js`:

```js title="my-stack/resources.js"
module.exports = ({ cli }) => ({
  resources: {
    myApp: {
      build: {
        root: "./my-app",
        script: `yarn build:${cli.env}`
      },
      deploy: {
        component: "@webiny/serverless-function",
        inputs: {
          region: process.env.AWS_REGION,
          description: "My App",
          code: "./my-app/build",
          handler: "handler.handler",
          memory: 128,
          timeout: 30
        }
      }
    },
    api: {
      deploy: {
        component: "@webiny/serverless-api-gateway",
        inputs: {
          name: "Apps Gateway",
          region: process.env.AWS_REGION,
          description: "Serverless React Apps",
          binaryMediaTypes: ["*/*"],
          endpoints: [
            {
              path: "/{key+}",
              method: "ANY",
              function: "${myApp}"
            },
            {
              path: "/",
              method: "ANY",
              function: "${myApp}"
            }
          ]
        }
      }
    },
    cdn: {
      deploy: {
        component: "@webiny/serverless-aws-cloudfront",
        inputs: {
          forwardIdViaHeaders: true,
          defaults: {
            ttl: 300,
            allowedHttpMethods: ["GET", "HEAD", "OPTIONS", "PUT", "POST", "PATCH", "DELETE"],
            forward: {
              queryString: true
            }
          },
          origins: [
            {
              url: "${api.url}",
              allowedHttpMethods: ["HEAD", "GET"]
            }
          ]
        }
      }
    }
  }
});
```

With this, we defined 3 resources that will be deployed to your AWS account: a Lambda function, an API Gateway and a CloudFront CDN distribution. Each resource must include the `deploy` definition, so the deploy process knows what to deploy to AWS.

By defining a `build` configuration, you're telling the deploy process that it must build your code first, using the provided `script`. In this case, `my-app` will first be built using the `build` configuration, then deployed to AWS.

To deploy this stack, you need to run a command `yarn webiny deploy my-stack --env=dev`.

## Summary

Stacks allow you to organize your project no matter how small or large it is. By default, Webiny project is configured using 2 stacks, one for GraphQL API, and one for React apps. In your project, you may need a REST API, or maybe another GraphQL API that has nothing to do with the main Webiny API. Using stacks you can quickly setup those standalone units and deploy them independently.