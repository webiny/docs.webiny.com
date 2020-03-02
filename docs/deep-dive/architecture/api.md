---
id: api
title: Webiny Architecture - API
sidebar_label: API
---

## API Architecture Graph

[![Webiny Serverless CMS - Architecture - API](/img/deep-dive/architecture/webiny-architecture-api.png)](/img/deep-dive/architecture/webiny-architecture-api.png)

The API architecture represents all of the cloud resources needed to host HTTP APIs, be it a simple [REST API](https://en.wikipedia.org/wiki/Representational_state_transfer) consisting of a couple of REST routes, or a fully fledged GraphQL API, consisting of many [federated GraphQL services](https://www.apollographql.com/docs/apollo-server/federation/introduction/) and served via a single endpoint (URL) via the [Apollo GraphQL gateway](https://www.apollographql.com/docs/apollo-server/federation/implementing/). 

## Components

- A - **CloudFront web distribution**
- B - **APIGateway**
- C - **Apollo Gateway service**
- D - **Specific services**
- E - **DB Proxy service**
- F - **Database**

## Request Flow

1. Client makes a POST request to the `/graphql` endpoint.

   > Webiny also supports REST services. In that case the endpoint path will be different. For REST endpoints the request is routed directly to the function of a specific service, without the (C) Apollo Gateway in between.

2. All requests first land on **(A) CloudFront web distribution**, which has **(B) API Gateway** set as one of the origins.

3. The **(B) APIGateway** invokes the **(C) Apollo Gateway service**

   - The **(C) Apollo Gateway service** is responsible for combining multiple GraphQL **(D) specific services** into a single GraphQL endpoint, using [Apollo Federation](https://www.apollographql.com/docs/apollo-server/federation/introduction/).
   - Webiny comes with a [GraphQL Playground](https://github.com/prisma-labs/graphql-playground) built-in. Point your browser to the `{your-domain}/graphql` to view the playground and explore the full schema.

4. When a POST request lands on the **(C) Apollo Gateway service**, the service internally calls the required **(D) services**.
5. Each of the **(D) service** internally processes and in some cases fetches the data from the database.
   - For all database-related tasks, Webiny heavily relies on a library called [Commodo](/docs/api-development/commodo/introduction).
6. In cases where Commodo is using MongoDB as the database, the queries are not sent directly to the database, but rather proxied through **(E) DB Proxy** service.
   > Learn more about the DB Proxy in this [blog post](https://blog.webiny.com/using-aws-lambda-to-create-a-mongodb-connection-proxy-2bb53c4a0af4).
