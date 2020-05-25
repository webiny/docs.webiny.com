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
npx create-webiny-project@beta new-project --template=cms --tag=beta
```

> NOTE: The `--template` value defaults to `full` if you don't include it (this will pull a package named `@webiny/cwp-template-full` from npm).

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

## 3. Template-specific setup

Currently, Webiny supports `cms` and a `full` template, and each have their own setup instructions.

### When to use `full` template?

The `full` template will include all of the applications Webiny provides at the time you're creating your Webiny project. Currently, the `full` project consists of the following apps:
- Admin  
- Security
- I18N  
- File Manager  
- Page Builder  
- Form Builder 
- Headless CMS  

If you want to create a project with all the features Webiny has to offer - use this template.

[Click here](/docs/get-started/template-setup/cwp-template-full) to see the instructions for a project created using `full` template.

### When to use `cms` template?

The `cms` template will is a bit narrower in scope. It will only create a project that is configured to be used in a `headless` mode, like your regular Headless CMS. A project created using this template will consist of the following apps:
- Admin  
- Security
- I18N  
- File Manager   
- Headless CMS  

If you only need the Headless CMS capabilities - use this template.

[Click here](/docs/get-started/template-setup/cwp-template-cms) to see the instructions for a project created using `cms` template.