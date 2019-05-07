---
id: admin-app-route
title: Admin App - Routes
sidebar_label: Routes
---

> This article assumes you have already set up a blank Webiny project.
 If not, please see [setting up a local Webiny project](/docs/developer-tutorials/local-setup),
 then come back here.

In your blank project, all the plugins for your app are imported
in `packages/admin/src/plugins/index.js`. That file serves as a plugins
configuration point. However, you are free to reorganize everything
to your heart's content.

## Adding a route
Create a new file `packages/admin/src/plugins/myPlugins.js` and
place the following code inside:

<script src="https://gist.github.com/Pavel910/f91b84d407d0974fb5c978e74fcbb690.js?file=route.simple.js"></script>

This will define a new `route` plugin, and if you're familiar with `react-router`, there is nothing more to it.
If you're new to the whole routing thing, please go through [React Router's documentation](https://reacttraining.com/react-router/web/guides/quick-start).

To add these plugins to your app (see how we are exporting an array of plugins,
don't worry, we'll add more plugins in a second), you need to import them
and add to the plugins entry point.

In the `packages/admin/src/plugins/index.js` file:

<script src="https://gist.github.com/Pavel910/f91b84d407d0974fb5c978e74fcbb690.js?file=plugin.enable.js"></script>

Now if you open your app and go to `/admin/my-app` you will see your
new route and a `My Dashboard` view.

## Going further
Webiny relies on `react-router` completely, so we won't go further into examples as we would 
basically be duplicating what is already in their [documentation](https://reacttraining.com/react-router/).

If you are not very familiar with `react-router`'s capabilities, be sure to watch their videos and 
go through their examples, there is a lot of cool stuff there.  