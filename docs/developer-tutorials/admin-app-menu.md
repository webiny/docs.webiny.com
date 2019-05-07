---
id: admin-app-menu
title: Admin App - Menus
sidebar_label: Menus
---

> This article assumes you have already set up a blank Webiny project.
 If not, please see [setting up a local Webiny project](/docs/developer-tutorials/local-setup),
 then come back here.

 Menus in your admin app are just another type of plugin. The layout of a menu and
 rendering of menu items is all taken care of for you. It consists of 3 levels
 of menu items so you can organize your apps nicely and without clutter.

 ## Simple menu item
 Menus are implemented by registering plugins of type `menu`.

<script src="https://gist.github.com/Pavel910/f91b84d407d0974fb5c978e74fcbb690.js?file=menu.js"></script>

The `render` function on line `8` receives a `Menu` component as a parameter,
all you need to do is create a few elements using that component.

 ## Using with security
 To only show menu items to users who are authorized to see them, we have exposed a `hasRoles
 helper function which will check user's roles for you:

<script src="https://gist.github.com/Pavel910/f91b84d407d0974fb5c978e74fcbb690.js?file=menu.security.js"></script>

On line `3` we import the helper from `webiny-app-security` package and
on line `10` we pass it a set of rules to check (you can add as many rules
as you need here). Basically, what the code says is:
`Tell me if current user has the role "my-app-products", and assign the result into the "products" key`.

Once you get a set of booleans, rendering of menu items is very straightforward.