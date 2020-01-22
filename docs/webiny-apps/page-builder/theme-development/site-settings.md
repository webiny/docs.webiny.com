---
id: site-settings
title: Page Builder Theme - Site Settings
sidebar_label: Site settings
---

Inside Webiny administration under the settings menu you'll find `Site Settings` which control the general information such as site name, domain, logo, favicon and links to social profiles.

![Webiny - Theme Menu](/img/theme-development/webiny-theme-site-settings.png)

This information is often needed inside a theme but it's not directly exposed. To retrieve the site settings you will need to issue a GraphQL query. [This article](/docs/webiny-apps/page-builder/theme-development/graphql) explains how to do that.

Inside the default theme, the required GraphQL implementation is already made for you. Have a look at [Header](https://github.com/webiny/webiny-js/blob/master/packages/app-page-builder-theme/src/components/Header.tsx) component, or similarly to that, the [Footer](https://github.com/webiny/webiny-js/blob/master/packages/app-page-builder-theme/src/components/Footer.tsx) component.

To access the same information inside your own components, just follow the same principle explained in the above GraphQL Article. (1) Write your query, then (2) issue the query using the `Query` component and (3) consume the result inside your own React components.
