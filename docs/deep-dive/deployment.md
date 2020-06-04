---
id: deployment
title: Deployment
sidebar_label: Deployment
---

In this article we'll look under the hood of the deployment process.

## Overview

Webiny project consists of 2 stacks: `api` and `apps`. These two units are so different that they have completely separate deploy processes and template files. However, React apps depend on the output of the API deployment as they need to know the API URL and Cognito user pool and client IDs. This is where Webiny CLI comes in and makes your life as a developer much easier.

## API deployment

First we'll look at the API deployment as it must always be available before you can start working on your React app.

To deploy your API you need to run `yarn webiny deploy api --env=local`. This will parse your `.env.json` files to setup environment variables, then load the `api/resources.js` file and deploy each of the components found in the template. 

What's this `--env=local`? It sounds funny, as the is no "local API", but that just means that this instance of API is meant to be used for local development of React apps. 

You must specify the environment to deploy using `--env` option.

Once the deploy process has finished, Webiny CLI will process hooks defined in `webiny.root.js` and update the required environment variables of your React apps with values from your API deployment (see `apps/admin/.env.json` and `apps/site/.env.json` after the API deploy has finished). This is a neat feature that will save you a lot of time. And the best thing is, you can customize what variables are updated by editing the `webiny.config.js` file located inside each React app. 

## Start React Apps

This works the same as any other `create-react-app` project:

```
cd apps/admin
yarn start
```

The environment variables are already injected into your React apps via the `.env.json` file during the API deployment so you don't need to do anything manually.

When your `admin` app is built and runs in the browser, you will see an installation wizard which will guide you through the initial system setup. This will happen each time your database is empty, so if you ever need to "reset" your system, simply empty the database and the installation will start again.

## Deploying Apps

When you're ready to deploy your React apps to the cloud, you can simply run:

```
yarn webiny deploy apps --env=dev
```

A few things to note here:

- `local` environment is a reserved environment for local development. Don't try to deploy it :)
- you also can't deploy an environment which is not configured in your apps' `.env.json`.

So the idea is to always have a matching API deployment for you React apps deployment (`dev` for API, `dev` for apps, etc.).

## Server-Side Rendering

Server-side rendering works out of the box for the `site` app (`admin` doesn't need it). When you deploy you apps, `site` app also deploys SSR functions and everything plays together nicely.

## Removing deployments

To remove your API or apps from the cloud, run this:

```
// remove the `local` deployment of the API
yarn webiny remove api --env=local

// remove the `dev` deployment of React apps
yarn webiny remove apps --env=dev
```
