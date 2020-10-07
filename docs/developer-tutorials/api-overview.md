---
id: api-overview
title: API - Overview
sidebar_label: Overview
---

API in Webiny is powered by [Apollo Server](https://www.apollographql.com/docs/apollo-server/)
and is constructed using plugins (just as any other part of Webiny).

API consists of multiple GraphQL schemas that are merged into one main schema.
The entire merging process is taken care of for you by Webiny, so all you
need to do is write your plugins.

The following code demonstrates the `handler.js` file (Lambda handler):

<script src="https://gist.github.com/Pavel910/04d6584197637f69f88ff12b819eeedb.js?file=api.handler.js"></script>

`createHandler` is a function provided by Webiny to setup the API
server ready for deployment to Lambda or local development using `serverless` framework.

`config` is the only parameter you need to setup a server (config structure will be covered in the next article).

Everything else is done using plugins. In the upcoming articles we will take a look
at the variety of plugins you can register to build your API.

To see an actual API project structure, visit the [demo-api package](https://github.com/Webiny/webiny-js/tree/master/packages/demo-api/src) on our GitHub
or [setup a local Webiny project](/docs/developer-tutorials/local-setup) to
play with the code from your IDE.

