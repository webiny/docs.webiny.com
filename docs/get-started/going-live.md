---
id: going-live
title: Going Live
sidebar_label: Going Live
---

This article demonstrates how you can deploy your project to `dev`, `prod` and any other environment you may have. At the end of this process, you will have a public URL to show your website to the world.

## 1. Create a `dev` environment config

Open the `api/.env.json` file. You should see a similar config file:

```json
{
  "default": {
    "GRAPHQL_INTROSPECTION": true,
    "GRAPHQL_PLAYGROUND": true,
    "S3_BUCKET": "webiny-files-72858e17",
    "JWT_SECRET": "GSyWyuHU2uHrO+wnSO8OjQ+wPbuQmBclVNFejoo9qmsQRNFAZHu+PFSyq48+"
  }
}
```

In the project root, look at the `.env.json` file. You should something similar:
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

If you don't want to change anything for your `dev` environment, you can use the default parameters.

However, if you want to use a different database, for example, you can create a new config block and override the `default` values:

```json
{
  "default": {
    "MONGODB_SERVER": "mongodb+srv://username:password@my-db-123.mongodb.net/test?retryWrites=true",
    "MONGODB_NAME": "webiny-72858e17"
  },
  "dev": {
    "MONGODB_NAME": "webiny-dev-72858e17",
    "JWT_SECRET": "A different JWT secret"
  }
}
```

## 2. Deploy API using `dev` environment

From the root of your project, run the following command:

```
yarn webiny deploy api --env=dev
```


## 3. Deploy apps using `dev` environment

From the root of your project, run the following command:

```
yarn webiny deploy apps --env=dev
```

## Deploying to production

If you also want to deploy a `prod` environment, it's as simple as running:

```
yarn webiny deploy apps --env=prod
```

>Note: In the example above, `apps` references the folder containing deployment configuration, which is located in `apps/resources.js`. As a result, you can create additional folders like `src`, `api-public`, etc... as long as they have a `resources.js` file inside.

## Additional environments

Apart from seen `dev` and `production` environments, Webiny also supports adding your own. In order to do so, the same steps described above are to be taken, with one additional step and that is inserting a build script for existing React apps, in their respective `package.json` files:

```
apps/admin/package.json
apps/site/package.json
apps/another-app/package.json
```

An example script for a `staging` environment could look like the following:

```
"build:staging": "env-cmd -r .env.json -e default,staging webiny run build"
```

Once this is inserted, the following command should successfully execute a `staging` environment deployment:

```
yarn webiny deploy apps --env=staging
```