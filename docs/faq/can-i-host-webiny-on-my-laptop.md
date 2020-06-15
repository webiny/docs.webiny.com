---
id: can-i-host-webiny-on-my-laptop
title: Can I host Webiny on my laptop?
sidebar_label: Can I host Webiny on my laptop?
---

The short answer is that you are unable to do so.

We have various serverless resources that are deployed to AWS such as Lambda Functions, S3 Buckets and Cognito.

As mentioned in [our development principles](https://docs.webiny.com/docs/get-started/development-principles/#cloud-native-development), all services deployed to the cloud must be used in a native way in order to get the most out of them. On top of that, it is simply not possible to simulate most of them locally.

We even advise [deploying MongoDB on a managed service](/docs/faq/how-is-webiny-serverless#webiny-uses-mongodb-that-is-not-serverless) in order to be 100% serverless.

You can, however, [run the admin and site](/docs/get-started/quick-start#2-start-admin-app) apps locally if you have deployed your API. Of course, when going into production mode, you will have to deploy the apps aswell. 😄
