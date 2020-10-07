---
id: admin-app-overview
title: Admin App - Overview
sidebar_label: Overview
---

To avoid building administration app from scratch each time you start a new project,
we created the `webiny-admin` package, which does exactly that - an administration app skeleton.

It provides a pretty standard admin app layout: header, sidebar menu, user account menu, etc.
Everything is based on plugins so it is very easy to replace stuff and add your own new functionality.

## Layout
The image below demonstrates a blank app with a dummy view wrapped in an `AdminLayout` component.
As soon as you wrap your view inside this component, you get yourself a default admin layout:

![Webiny Admin Layout](/img/developer-tutorials/admin-app-layout.png)
![Webiny Admin Layout](/img/developer-tutorials/admin-app-menu.png)
![Webiny Admin Layout](/img/developer-tutorials/admin-app-user-menu.png)

All this is built using plugins, so adding menu items, routes and views is
simply a matter of registering new plugins.

## Security
The admin layout does not provide any security features by itself. To add a login page
and user account data you need to register plugins from the `webiny-app-security` package.

This login view can be replaced entirely, since you are in control of what
is rendered when user is not authenticated, but out of the box you get this:
![Webiny Admin Layout](/img/developer-tutorials/admin-app-login.png)

Security package also provides a few modules to handle users, roles and user groups:
![Webiny Admin Layout](/img/developer-tutorials/admin-app-security-menu.png)

Once security is enabled, the logged in user appears in the top right menu and can edit his account data
or sign out:
![Webiny Admin Layout](/img/developer-tutorials/admin-app-security-user-menu.png)

To see the full admin app setup, please visit the [demo-admin app](https://github.com/Webiny/webiny-js/blob/master/packages/demo-admin/src) on our GitHub.

> The easiest way to get up and running, and have everything set up for you, is to use our [webiny-cli](https://www.npmjs.com/package/webiny-cli) package to create
a blank Webiny project that is ready to develop your custom stuff straight away.
