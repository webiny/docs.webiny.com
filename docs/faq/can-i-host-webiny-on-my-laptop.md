---
id: can-i-host-webiny-on-my-laptop
title: Can I host Webiny on my laptop?
sidebar_label: Can I host Webiny on my laptop?
---

No, you can't.

Webiny deploys various serverless resources to AWS, including but not limited to: Lambda Functions, S3 buckets, Cognito (authentication service), API Gateways, ...

We even advise [deploying MongoDB on a managed service](/docs/faq/how-is-webiny-serverless#webiny-uses-mongodb-that-is-not-serverless) in order to be 100% serverless.

You can, however, [run the admin and site](quick-start#2-start-admin-app) apps locally if you have deployed your API. Of course, when going into production mode, you will have to deploy the apps aswell. 😄