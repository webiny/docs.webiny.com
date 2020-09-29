---
id: admin-app-crud
title: Admin App - CRUD
sidebar_label: CRUD
---

> This article assumes you have already set up a blank Webiny project.
 If not, please see [setting up a local Webiny project](/docs/developer-tutorials/local-setup),
 then come back here.

CRUD modules are an essential part of any admin app. Most of the time, your modules for
admin apps will involve lists and forms. After years of developing CRUD modules
for our clients we noticed that most of the time, having a list and a form
in a single view is more than enough, and the interaction with the UI is much faster
than having a separate route for a list and a form, accordingly.

Webiny provides multiple components to develop these CRUD views, and the end
result looks something like this:

![Webiny CRUD View](/img/developer-tutorials/admin-app-crud-view.png)

This is an example of the `Categories` CRUD view in our CMS.
There are a lot of moving parts involved in creation of any CRUD module:
you need a list, a form, confirmation dialogs, alerts/snackbars/growls, data fetching, etc.

In this article we demonstrate our approach to connecting all these elements
into a quick-to-implement CRUD workflow.

Below is the code that serves as the main component for your CRUD module route.
> To learn how to register new routes and render views, see [the article on Routes](/docs/developer-tutorials/admin-app-route).

<script src="https://gist.github.com/Pavel910/f91b84d407d0974fb5c978e74fcbb690.js?file=crud.view.js"></script>

 ## withCrud HOC
Lines `42-70` showcase the `withCrud` HOC provided by Webiny to make your life easier
when dealing with CRUD modules. It contains configuration for common queries
and mutations for list and form to function in a CRUD manner.

For example, to get a list of records, on line `47`, we define an object
containing a `query` (which is a GraphQL query object), default `variables`
and a `response` function which returns the actual data for the list
using the Apollo Client response object.

> If you want to see the internals of this HOC, you can find the code [here](https://github.com/Webiny/webiny-js/blob/master/packages/webiny-admin/src/components/withCrud.js#L128).

## Split View
`SplitView` component is nothing more than a layout component which splits your
view into `LeftPanel` and `RightPanel`. You can control how wide each panel is
by passing a `span` prop, in a range from `1` to `12`, just like a regular `Grid` component.

Also, there is a `FloatingActionButton`, which is just this green CTA button
in the bottom right corner of the screen. It points to the same route you are
currently on, and simply unsets the `id`, which causes the `Form` to become empty.

## GraphQL queries
The queries passed to the configuration of the `withCrud` HOC look like this:
<script src="https://gist.github.com/Pavel910/f91b84d407d0974fb5c978e74fcbb690.js?file=crud.graphql.js"></script>

These are just simple GraphQL queries and mutations, no magic here.

## Data list
Now it's time to look at the implementation of the `list` part of the view:
<script src="https://gist.github.com/Pavel910/f91b84d407d0974fb5c978e74fcbb690.js?file=crud.list.js"></script>

This component contains everything there is to implement the data list itself.

`DataList` is a component that is a part of our `webiny-ui` package.
It contains many props to render data lists and you can use it as a
standalone component, it is in no way coupled with the `withCrud` HOC.

> To see all the available `DataList` props, please [visit this link](https://github.com/Webiny/webiny-js/blob/master/packages/webiny-ui/src/List/DataList/DataList.js#L121).

Most of the props required by the `DataList` component are taken care of
by the `withCrud` HOC in the parent component, and is passed to your component via a `dataList` prop,
so your task is to simply forward them (note the spread operator) to the `DataList`
component. The rest is fairly straightforward.

An interesting thing to take a lot at is the `delete` action (lines `55-63`).
Here we utilize a `ConfirmationDialog` component from our `webiny-ui` package
to quickly implement a confirmation dialog that will pop up when you click
the delete icon.

## Form
> To learn more about how the actual `Form` component works, please read [this article](/docs/developer-tutorials/admin-app-form).

Below is the code used to implement the `form` part of the CRUD module:
<script src="https://gist.github.com/Pavel910/f91b84d407d0974fb5c978e74fcbb690.js?file=crud.form.js"></script>

All of the props required for this view are provided by the `withCrud` HOC in the parent component
so here we simply render our form and pass those props in.

`loading` is also handled by the `withCrud` HOC and will be equal to `true`
whenever the form-related query or mutation is being executed. This will allow
us to render a loading overlay.

`SimpleForm` is another layout component which simplifies rendering of a
form view and keeps all your forms consistent.

You may have noticed the use of `withCms` HOC. It is a HOC which gives us
access to the CMS theme. Read more about it in the [Theme tutorial](/docs/developer-tutorials/new-theme-using-theme).
Here we use it to render a list of the available theme layouts so a user can select
a default layout for the category.
