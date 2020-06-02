---
id: aliases
title: Aliases
sidebar_label: Aliases
---

Aliases go in hand with envs (environments), they define the GraphQL endpoint. Where the content and model will get served.

Aliases can link to one env and unlink to another env. This allows instant changes between different versions of your content.

An env alias allows you to access and transform the data of an env, that will be the target env, through a different static identifier.

For example, you might have a `production` alias, which points to env `A`, then you create a `copy of A`, let's call it `B`. When you are ready, you would update the alias and make it point to `B`.

So, the API URL didn’t change, but the env behind it did.

For example: `https://dfgk2kz3e3qhn.cloudfront.net/cms/read/production`.

The `production` keyword in the url is the Alias slug.

![Aliases](/img/webiny-apps/headless-cms/features/content-modeling/aliases.png)
