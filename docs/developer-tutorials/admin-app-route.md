---
id: admin-app-route
title: Admin App - Routes
sidebar_label: Routes
---

> This article assumes you have already set up a blank Webiny project.
 If not, please see [setting up a local Webiny project](developer-tutorials/local-setup),
 then come back here.

In your blank project, all the plugins for your app are imported
in `packages/admin/src/plugins/index.js`. That file serves as a plugins
configuration point. However, you are free to reorganize everything
to your heart's content.

## Simple route
Create a new file `packages/admin/src/plugins/myPlugins.js` and
place the following code inside:

<script src="https://gist.github.com/Pavel910/f91b84d407d0974fb5c978e74fcbb690.js?file=route.simple.js"></script>

This will define a new `route` plugin, with a route `name`
(this will come in handy when redirecting to a particular route or pointing your menu items to a route),
a `path` that triggers this route and a `render` function that renders the content for this route.

> `render` can also return a `Promise` if you need to perform an async operation
before you render the actual route view.

To add these plugins to your app (see how we are exporting an array of plugins,
don't worry, we'll add more plugins in a second), you need to import them
and add to the plugins entry point.

In the `packages/admin/src/plugins/index.js` file:

<script src="https://gist.github.com/Pavel910/f91b84d407d0974fb5c978e74fcbb690.js?file=plugin.enable.js"></script>

Now if you open your app and go to `/admin/my-app` you will see your
new route and a `My Dasbhoard` view.

## Route with parameters
Webiny router also handles parameters for you. All you need to do is define
a parameter using `:param` notation, just like with `react-router`.

Add another plugin to your `myPlugins.js` file that looks like this:

<script src="https://gist.github.com/Pavel910/f91b84d407d0974fb5c978e74fcbb690.js?file=route.params.js"></script>

In the `render` function you have access to `route` and `match` parameters.
`route` is an object representing the route that is being rendered.

`match` is an object containing information about the matched URL:
<script src="https://gist.github.com/Pavel910/f91b84d407d0974fb5c978e74fcbb690.js?file=route.match.js"></script>

## Using `withRouter` HOC
You may wonder how to access router from an actual React component. That's
what `withRouter` HOC is for. Say, your route renders a `Product` component:

<script src="https://gist.github.com/Pavel910/f91b84d407d0974fb5c978e74fcbb690.js?file=withRouter.route.js"></script>

You don't have to pass any props to it. We will use `withRouter` HOC to get
all we need from inside the component. Once your component is wrapped
with a `withRouter` HOC, it receives a `router` prop which contains an
instance of the entire router, so you can both access data and do programmatic
route changes.

<script src="https://gist.github.com/Pavel910/f91b84d407d0974fb5c978e74fcbb690.js?file=withRouter.view.js"></script>