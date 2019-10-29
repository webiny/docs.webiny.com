---
id: plugins-crash-course
title: Plugins Crash Course
sidebar_label: Plugins Crash Course
---

Everything in Webiny is built using plugins. To build a React app or an API you will only need a little bit of bootstrap code, and the rest is all done via plugins.

Plugins are the smallest building blocks. They are used to add routes, menus, page builder elements, settings, handle API security, add data models, GraphQL schemas, etc.

The list is just too long to name all the usages here.

## Anatomy of a plugin
A plugin is nothing more than a simple object with 2 mandatory keys:
```js
{
    name: "your-unique-plugin-name",
    type: "plugin-type"
}
```
`name` is a plugin identifier and must be unique in the entire app. If a plugin is defined using a `name` that is already registered, it will override the existing plugin.

`type` is a string that allows you to group plugins with similar functionality. You can then get plugins of a certain `type` and do whatever you need with them.

We will add a section with the full catalog of plugins as we progress with the docs.

## Creating a plugin

> NOTE: don't try to create a plugin in your code just yet. Simply go through this section to get an idea of how plugins work. There are more articles on concrete plugins in the docs that will be easy to follow if you understand the  concept.

Let's (virtually) create a simple plugin:

```js
// firstPlugin.js
export default () => ({
    name: "first-plugin",
    type: "test-plugin",
    sayHi() {
        console.log("Well, hello there!");
    }
});
```

> NOTE: we strongly recommend you create your plugins as factory functions. That way it is easy to add configuration that affects how plugin behaves. This is the way all our API plugins are created.

Now let's register your new plugin. To register plugins you need to use a `@webiny/plugins` package, which is always installed with the default project setup:

```js
import { registerPlugins } from "@webiny/plugins";
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
import { getPlugins } from "@webiny/plugins";

// Get all plugins by type
const testPlugins = getPlugins("test-plugin");
testPlugins.forEach(pl => {
    pl.sayHi();
});
```

### Using a plugin by name

```
import { getPlugin } from "@webiny/plugins";

// Get all plugins by type
const firstPlugin = getPlugin("first-plugin");
firstPlugin.sayHi();
```



