---
id: quick-start
title: Quick Start
sidebar_label: Quick Start
---

This is a quick start guide which should help you setup Webiny as fast as possible.

At the end of this guide, you'll have a simple website, that already comes with a couple of default pages to get you started, and a complete admin interface that will enable you to manage it. All of this will be deployed to the AWS Cloud.

For detailed explanations of concepts and processes, see the [Deep Dive](/docs/deep-dive/project-structure) section of the docs.

## Prerequisites

The following things are mandatory for both local development and production deployments:

✅ **node.js >= 10.14.0**
- we recommend [this tool](https://www.npmjs.com/package/n) to manage your node.js versions

✅ **`yarn` < 2.0**
- [https://yarnpkg.com/en/docs/install](https://yarnpkg.com/en/docs/install)
- or your can just run `npm install yarn -g`

✅ **AWS account with an IAM user for programmatic usage**

- [Setup AWS credentials](https://docs.aws.amazon.com/sdk-for-java/v1/developer-guide/setup-credentials.html)
- [Setup IAM user](https://docs.aws.amazon.com/IAM/latest/UserGuide/getting-started_create-admin-group.html)

✅ **MongoDB database** in the cloud
- we recommend [MongoDB Atlas](https://docs.atlas.mongodb.com/getting-started/) if don't have a database already
- you can follow [this guide](/docs/guides/mongodb-atlas) to create one

> NOTE: if you're unsure your AWS credentials are configured correctly, you can verify them by running the following command using [AWS CLI](https://aws.amazon.com/cli/): `aws sts get-caller-identity`. If you don't see the user info, take a look at this tutorial to [create an IAM user for programmatic usage](https://www.youtube.com/watch?v=tgb_MRVylWw).

## 1. Create a new project

```
npx create-webiny-project myProject --template full
```

> NOTE: The `--template` value defaults to `full` if you don't include it (This will pull a package named `cwp-template-full` from npm template) or it can be a path to a local template ex. `../dev/template-to-use`.

## 2. Setup database connection

Edit `.env.json` file in the root of the project and set the `MONGODB_SERVER` value. The values in this file are unique for your project, you do NOT need to change any other values.

> In case you need any help creating a MongoDB cluster on MongoDB Atlas, please follow [this guide](/docs/guides/mongodb-atlas).

> IMPORTANT: it's important to give the outside world access to your database because the database will be accessed from your cloud functions, thus you'll never have a fixed IP address. See the [Whitelist Your Connection IP Address](https://docs.atlas.mongodb.com/getting-started/#whitelist-your-connection-ip-address). Make sure you add a `0.0.0.0/0` entry.

Your `.env.json` file should look something like this after updating your `MONGODB_SERVER` and `MONGODB_NAME` parameters:

```json
{
  "default": {
    "AWS_PROFILE": "default",
    "AWS_REGION": "us-east-1",
    "MONGODB_SERVER": "mongodb+srv://{YOUR_USERNAME}:{YOUR_PASSWORD}@someclustername.mongodb.net",
    "MONGODB_NAME": "{YOUR_MONGODB_NAME}",
    "DEBUG": true
  }
}

```

## 3. Deploy API

We need to deploy a `local` API environment to use for local development:

```
webiny deploy api --env=local
```

In the command above, `api` references the folder containing deployment configuration, which is located in `api/resources.js`. As a result, you can create additional folders like `api-private`, `api-public`, etc... as long as they have a `resources.js` file inside.

> NOTE: If you run into error: `CredentialsError: Missing credentials in config`, it means you have to configure your [provider credentials here](https://github.com/serverless/serverless/blob/master/docs/providers/aws/guide/credentials.md).
> If you use multiple AWS profiles, edit `.env.json` in your project root, to point to the correct profile via `AWS_PROFILE`. Webiny does not use the `AWS_PROFILE` env variable.

## 4. Start `admin` app

Admin app is the administration system for your project; it contains everything you need to manage your content, users, settings, etc... :

```
cd apps/admin
yarn start
```

Once started, `admin` app will run an installation wizard to setup the system.

> IMPORTANT: Do NOT go onto the next step until you complete the installation wizard.

## 5. Start `site` app

Site app is an actual website you're creating. It is a single page app, but in production it renders via server-side rendering.

```
cd apps/site
yarn start
```

> NOTE: You can also run `webiny deploy apps --env=local` to run every application within the `apps` folder.

---

This is it! You have deployed a `local` API environment, and can begin developing your React apps on your local machine. For deployments to production and other environments, please see the [next](/docs/get-started/going-live) page.
