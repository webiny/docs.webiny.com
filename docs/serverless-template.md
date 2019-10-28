---
id: serverless-template
title: Serverless Template
sidebar_label: Serverless Template
---

Deployment of Webiny API and apps is powered by [Serverless Components](https://github.com/serverless/components). However, our CLI does not use the `serverless` CLI under the hood as we have our custom template component and template pre-processsing to create seamless developer experience.

If this is your first encounter with Serverless Components, we strongly recommend you to read [this short blog post](https://serverless.com/blog/serverless-components-beta/) from the creators of `Serverless`, to see the idea behind it.

## GraphQL API Gateway
At the core of our API sits the [Apollo Federation](https://www.apollographql.com/docs/apollo-server/federation/introduction/), and the component responsible for deploying it is called `@webiny/serverless-apollo-gateway`:

```yaml
gateway:
  component: "@webiny/serverless-apollo-gateway"
  inputs:
    name: Apollo Gateway
    env: ${vars.env}
    region: ${vars.region}
    memory: 512
    timeout: 30
    services:
      - name: security
        url: ${security.api.graphqlUrl}
      - name: files
        url: ${files.api.graphqlUrl}
      - name: pageBuilder
        url: ${pageBuilder.api.graphqlUrl}
      - name: i18n
        url: ${i18n.api.graphqlUrl}
```
This component will build the boilerplate code (find it in `api/.webiny/apolloGateway` after your first deploy) and deploy a single Lambda function that handles all requests to the GraphQL API and forward the requests to the appropriate service.

What are these `services`? Those are other GraphQL Servers that contain an isolated piece of business logic (microservices), and Apollo Federated Gateway builds one big schema out of them.

## GraphQL Microservices
Other services that run Apollo Server are deployed using `@webiny/serverless-apollo-service` component.

```yaml
i18n:
  component: "@webiny/serverless-apollo-service"
  inputs:
    name: I18N
    region: ${vars.region}
    memory: 512
    database: ${vars.database}
    env: ${vars.env}
    plugins:
      - "@webiny/api-i18n/plugins"
```
This component is something you would use to deploy your new microservice. It is built as a generic microservice component that takes an array of `plugins` and handles all the boilerplate and deployment. Each of these microservices get a dedicated AWS API Gateway deployment, so each of them has their own URL.

## Other components
The rest of the template uses components to deploy AWS API Gateway, AWS CloudFront distribution, a Cognito user pool, etc. When you read through the template file, you'll see it's pretty self-explanatory.

To find all of the components offered by Webiny, head over to our [Github](https://github.com/webiny/webiny-js/tree/master/components). Once you're familiar with how stuff works you can build new components to deploy new types of services or modify existing ones to better fit your project needs.

 

