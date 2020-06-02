---
id: access-tokens
title: Access Tokens
sidebar_label: Access Tokens
---

Access Tokens is another feature of Headless CMS :)

You can find Access tokens in the menu shown in the image below:

![Access tokens in menu](/img/webiny-apps/headless-cms/features/content-modeling/access-tokens-menu.png)

Access tokens provide you access to certain environments.

To gain access to certain environments you need to:

1. Create an access token for a specific environment.

![Access Tokens](/img/webiny-apps/headless-cms/features/content-modeling/access-token.png)

2. Use this access token as a HTTP header to your GraphQL Playground in `/cms/read/{alias}` endpoints.

![Access Tokens](/img/webiny-apps/headless-cms/features/content-modeling/access-token-graphql.png)