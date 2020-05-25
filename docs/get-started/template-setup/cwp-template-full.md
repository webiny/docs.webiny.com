---
id: cwp-template-full
title: cwp-template-full
sidebar_label: Full Template
---

This guide includes what you need to setup a project using `cwp-template-full`. This guide assumes you already did the first two steps [here](/docs/get-started/quick-start).

## 1. Deploy API

We need to deploy a `local` API environment to use for local development:

```
yarn webiny deploy api --env=local
```

In the command above, `api` references the folder containing deployment configuration, which is located in `api/resources.js`. As a result, you can create additional folders like `api-private`, `api-public`, etc... as long as they have a `resources.js` file inside.

> NOTE: If you run into error: `CredentialsError: Missing credentials in config`, it means you have to configure your [provider credentials here](https://github.com/serverless/serverless/blob/master/docs/providers/aws/guide/credentials.md).
> If you use multiple AWS profiles, edit `.env.json` in your project root, to point to the correct profile via `AWS_PROFILE`.

## 2. Start `admin` app

Admin app is the administration system for your project; it contains everything you need to manage your content, users, settings, etc... :

```
cd apps/admin
yarn start
```

Once started, `admin` app will run an installation wizard to setup the system.

> IMPORTANT: Do NOT go onto the next step until you complete the installation wizard.

## 3. Start `site` app

Site app is an actual website you're creating. It is a single page app, but in production it renders via server-side rendering.

```
cd apps/site
yarn start
```

---

This is it! You have deployed your own API environment, and can begin developing your React apps on your local machine. For deployments to production and other environments, please see the [next](/docs/get-started/going-live) page.