---
id: going-live
title: Going Live
sidebar_label: Going Live
---

This article demonstrates how you can deploy your project to your AWS account. At the end of this process, you will have a public URL to show your website to the world.

In the previous article you deployed your `api` stack using `local` environment to be able to develop your React app.
Now we need to create another instance of your `api` stack, to handle the `dev` environment.

> It's a good idea to completely separate your `local` environment from `dev` and `prod` environments. By deploying a new environment you're creating a completely new copy of your infrastructure.

## Environment variables

This is an important thing to know to have complete control over your environments.

Environment variables in Webiny are loaded in the following order:

1. `.env.json`
2. `{stack}/.env.json`

When you're deploying your `api` stack, Webiny will first load your `.env.json` in the root of the project, then `api/.env.json`. Same order applies to any stack you want to deploy. Values from the second file will always override the matching values from the first file.

Now we can move on to the next step.

## 1. Create a `dev` environment config

In the project root, look at the `.env.json` file. You should see something similar to this:

```json
{
  "default": {
    "AWS_PROFILE": "default",
    "AWS_REGION": "us-east-1",
    "MONGODB_SERVER": "mongodb+srv://username:password@my-db-123.mongodb.net/test?retryWrites=true",
    "MONGODB_NAME": "webiny-72858e17"
  }
}
```

The `default` section contains the values of environment variables that will be used for every environment, unless you overwrite them using specific environment sections. For each new environment, it's best to use a different database. Update your `.env.json` to look similar to this:

```json
{
  "default": {
    "AWS_PROFILE": "default",
    "AWS_REGION": "us-east-1",
    "MONGODB_SERVER": "mongodb+srv://username:password@my-db-123.mongodb.net/test?retryWrites=true",
    "MONGODB_NAME": "webiny-72858e17"
  },
  "dev": {
    "MONGODB_NAME": "webiny-dev-72858e17"
  }
}
```

The new database will be used by both the `api` and `apps` stacks as they both use this environment variable.

## 2. Deploy your `api` stack using `dev` environment

From the root of your project, run the following command:

```
yarn webiny deploy api --env=dev
```

Since this is a new instance of the `api` stack, it will take some time to deploy. Wait for the stack deployment to finish, before moving to the next step.

### 2.1 Deploy specific `api` resource

From the root of your project, run the following command:

```
yarn webiny deploy api <resource-name> --env=dev
```

For example, running this command will only deploy `securityGraphQL` resource:

```
yarn webiny deploy api securityGraphQL --env=dev
```

If you want to deploy more resources just add them to the list, for example:

```
yarn webiny deploy api securityGraphQL filesManage databaseProxy --env=dev
```
> To see the list of all available resources, checkout `resources.js` file inside api folder.

## 3. Deploy `apps` stack using `dev` environment

From the root of your project, run the following command:

```
yarn webiny deploy apps --env=dev
```

Once this stack is deployed, you have to run through the installation wizard, just like you did for your `local` environment.

## 4. Remove your `api` stack using `dev` environment

From the root of your project, run the following command:

```
yarn webiny remove api --env=dev
```

This will remove your entire api stack deployed to `dev` environment.


## 5. Remove your `apps` stack using `dev` environment

From the root of your project, run the following command:

```
yarn webiny remove apps --env=dev
```

This will remove your entire apps stack deployed to `dev` environment.

## Deploying to production

If you also want to deploy a `prod` environment, repeat the steps described above using the `prod` value.
Your apps are, by default, configured to support `dev` and `prod` environments.

## Additional environments

Apart from the `dev` and `prod` environments that come preconfigured for you, Webiny also supports adding your own environments. The steps are the same as described above, with one additional step for the `apps` stack and that is inserting a build script for existing React apps, in their respective `package.json` files:

```
apps/admin/package.json
apps/site/package.json
```

An example script for a `staging` environment could look like this:

```
"build:staging": "env-cmd -r .env.json -e default,staging webiny run build"
```

What this script says is: load environment variables from `.env.json` file, first load `default` values, then merge `staging` values, and then run `webiny run build`, which will execute a `build` command in your `webiny.config.js` file.

Once this script is inserted, you can repeat steps 1. to 3. of this article.
