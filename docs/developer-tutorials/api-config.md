---
id: api-config
title: API - Config
sidebar_label: Config
---

Let's take a look at the config definition for both `development` and `production`
environment.

## Development config
This config is used in local development:

<script src="https://gist.github.com/Pavel910/04d6584197637f69f88ff12b819eeedb.js?file=config.development.js"></script>

You can add your own configuration keys here as needed. Once created,
this config is assigned to the API context, so you can access it in your resolvers.

This file exports a `function`. This function is passed directly to the
`createHandler` and it will be executed with a Lambda context as the first parameter.
You may or may not need the `context` in development, but is is important for `production`
environment, once you deploy your API to Webiny Cloud.

## Production config
Here you can see how the `context` is used in `production` environment:

<script src="https://gist.github.com/Pavel910/04d6584197637f69f88ff12b819eeedb.js?file=config.production.js"></script>

As you can see, this config is much smaller because you do not handle database connection
yourself, once your API is deployed to the Cloud. Database connection is passed to you via `context.database`.







