---
id: quick-start
title: Quick Start
sidebar_label: Quick Start
---

To get your project up and running as fast as possible, we've created a `@webiny/cli` package. It will be your trusty companion to help you with project creation, development and deployment. The following steps will guide you through the installation of the CLI and project setup.

### Install the CLI

```
npm -g install @webiny/cli
```

> NOTE: we use `npm` to install the package, since `yarn` may have problems with the `global` command. However, once you have the CLI installed, it relies on `yarn`, so make sure you have it [installed](https://yarnpkg.com/en/docs/install).

### Create a new project

```
webiny create my-project
cd my-project
```
This will create a new folder `my-project` and setup everything you need to start hacking.
Once your project is created, the last thing you need is configure the database.

### Setup database connection
To tell Webiny where your database is, you simply need to update the `api/.env.json` file and set the `MONGODB_SERVER` and `MONGODB_NAME`. As long as the database is accessible using the provided data, Webiny will be happy.

> IMPORTANT: The `MONGODB_SERVER` value should be in the format of a MongoDB connection string such as: `mongodb+srv://{YOUR_USERNAME}:{YOUR_PASSWORD}@someclustername.mongodb.net`

## Required resources
To run a Webiny project you will need a MongoDB database and an AWS account. If you don't have one of those, please read on.

### MongoDB database
We recommend [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) as it has a `Free Tier` which is more than enough for development purposes (no credit card required). You can find step-by-step instructions on getting an account and setting up a database in their [official documentation](https://docs.atlas.mongodb.com/getting-started/).

> IMPORTANT: it's important to give the outside world access to your database because the database will be accessed from your cloud functions, thus you'll never have a fixed IP address. See the [Whitelist Your Connection IP Address](https://docs.atlas.mongodb.com/getting-started/#whitelist-your-connection-ip-address). Make sure you add a `0.0.0.0/0` entry.

### AWS credentials
You will need an AWS account even for local development. With Webiny, we've turned to cloud-native development of our APIs and so you can't run our API services unless they are deployed to the cloud. 

To deploy your API (and later React apps) you will need AWS credentials. Take a look at [this video tutorial](https://www.youtube.com/watch?v=tgb_MRVylWw) on setting up an IAM user to work with `Serverless Framework` (part of which we use to deploy our components).

### AWS environment variables
You can set a `profile` and a default `region` to be used for all interactions with AWS in the `.env.json` file in the root of your project. This file will be loaded first for both API and apps deployments so the values in this file are shared throughout your project.
