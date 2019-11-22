---
id: site-settings
title: Site settings
sidebar_label: Site settings
---

Inside Webiny administration under the settings menu you'll find `Site Settings` which control the general information such as site name, domain, logo, favicon and links to social profiles.

![Webiny - Theme Menu](/assets/theme-development/webiny-theme-site-settings.png)

This information is often needed inside the site theme but it's not directly exposed. To retrieve the site settings you will need to issue a GraphQL query. [This article](theme-development/graphql.md) explains how to do that. 

Inside the default theme, the required GraphQL implementation is already made for you. Have a look at [Header](https://github.com/webiny/webiny-js/blob/master/examples/packages/theme/src/components/Header.js) component, or similarly to that, the [Footer](https://github.com/webiny/webiny-js/blob/master/examples/packages/theme/src/components/Footer.js) component.

To access the same information inside your own components, just follow the same principle explaned in the above GraphQL Article. (1) Write your query, then (2) issue the query using the `Query` component and (3) consume the result inside your own React components.