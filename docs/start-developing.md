---
id: start-developing
title: Start Developing
sidebar_label: Start Developing
---

To begin local development, you must first deploy your API to the cloud, so your React apps have an API URL to connect to. 

If you've already [set up you database connection](/docs/get-started#setup-database-connection), the next step is to run the API deployment process.

## Deploy API
To start deploying:

```
webiny deploy-api
```

By default, API is deployed using `local` environment. You can specify the environment to deploy using `--env` option. To see a verbose debug output during deploy, add a `--debug` flag.

Your first API deployment will take a few minutes so be patient. Once it's done, our CLI will automatically update the required environment variables of your React apps with values from your API deployment (see `apps/admin/.env.json` and `apps/site/.env.json` after the API deploy is completed).

When completed, you'll see your GraphQL API URL. Note that it won't be immediately accessible, because of CDN propagation. Now is the best time to grab a ☕️.

Once the CDN is finally online, open the GraphQL API URL - you should see a GraphQL playground! If so - congratulations! You've just deployed your first Webiny API! 🎉 

Open up the `Docs` on the right, and you'll see all your microservices connected into one big GraphQL schema.

> NOTE: If you encounter issues, head over to our Github and file an issue. We'll be glad to help!


## Start React Apps

This works the same as any other `create-react-app` project:

```
cd apps/admin
yarn start
```

The environment variables are already injected into your React apps via the `.env.json` file during the API deployment so you don't need to do anything manually.

When your `admin` app is built, you will see an installation wizard which will guide you through the initial system setup. This will happen each time your database is empty, so if you ever need to "reset" your system, simply empty the database and the installation will start again.

## Deploying Apps
When you're ready to deploy your React apps to the cloud, you can simply run:

```
webiny deploy-apps --env=dev
```
A few things to note here:

- `local` environment is a reserved environment for local development. You can't deploy it.
- you also can't deploy an environment which is not configured in your apps' `.env.json`.

So the idea is to always have a matching API deployment for you React apps deployment (`dev` for API, `dev` for apps, etc.).

## Server-Side Rendering
Server-side rendering works out of the box for the `site` app (`admin` doesn't need it). When you deploy you apps, `site` app also deploys SSR functions and everything plays together nicely. You can find the entire SSR setup in your `apps/site/ssr` folder. 

## Removing deployments
To remove your API or apps from the cloud, run this:

```
// remove the `local` deployment of the API
webiny remove-api

// remove the `dev` deployment of React apps
webiny remove-apps --env=dev
```
