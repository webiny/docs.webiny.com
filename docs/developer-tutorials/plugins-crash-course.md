---
id: plugins-crash-course
title: Plugins crash course
sidebar_label: Crash course
---

Let's take a quick look at what plugins are, how and where they are used and how to create your own plugin.

## Overview
Plugins are the smallest building blocks of an app (this includes both React apps and the API).
They are used to add routes, menus, CMS elements, settings, handle API security, add a new Entity, add GraphQL schema, etc.
The list is just too long to name all the usages here.

## Anatomy of a plugin
A plugin is nothing more than a simple object with 2 mandatory keys:
```js
{
    name: "your-unique-plugin-name",
    type: "plugin-type"
}
```
`name` is a plugin identifier and must be unique in the entire app.
If a plugin is defined using a `name` that is already registered, it will
override the existing plugin.

`type` is a string that allows you to group plugins with similar functionality.
You can then get plugins of a certain `type` and do whatever you need with them.

Usually a `type` is accompanied by a corresponding Flow type, to help other developers
utilize your plugin or develop a new plugin of the same type.

From this point on, it is entirely up to you to decide what your plugin
will do. A plugin can be a single file, or as many files as you need
to make it do your magic.

## Creating a plugin
Let's create a simple plugin:
```js
// firstPlugin.js
export default {
    name: "first-plugin",
    type: "test-plugin",
    sayHi() {
        console.log("Well, hello there!");
    }
};
```

Now let's register your new plugin. To register plugins you need to
use a `webiny-plugins` package, which is always installed with the
default project setup:
```
import { registerPlugins } from "webiny-plugins";
import firstPlugin from "./firstPlugin";

registerPlugins(firstPlugin);
```

`registerPlugins` accepts a single plugin, arrays of plugins, multiple
plugins passed as separate arguments, you name it.

> Plugin registration can be performed anywhere in your app. Placing the
registration at the entry point of your app is usually the best approach.

> We recommend to always use a namespace when naming your plugin: `cms-element-...` or `my-app-....`.
That way you make sure you never accidentally overwrite another plugin.

If you have already created a Webiny project, you can find examples of
plugin registration in the following files:
- `packages/admin/src/App.js`
- `packages/site/src/App.js`
- `packages/api/src/handler.js`

## Using your plugin
The last thing to do is get your plugin(s) and use them the way they are
meant to be used.

### Using plugins by type

```
import { getPlugins } from "webiny-plugins";

// Get all plugins by type
const testPlugins = getPlugins("test-plugin");
testPlugins.forEach(pl => {
    pl.sayHi();
});
```

### Using a plugin by name

```
import { getPlugin } from "webiny-plugins";

// Get all plugins by type
const firstPlugin = getPlugin("first-plugin");
firstPlugin.sayHi();
```



