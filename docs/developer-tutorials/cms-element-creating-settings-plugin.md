---
id: cms-element-creating-settings-plugin
title: CMS Element - Settings plugin
sidebar_label: Settings plugin
---

> If you are not already familiar with how plugins work, we recommend
you first take a look at the [Plugins Crash Course](/docs/developer-tutorials/plugins-crash-course) before reading this article.

Element settings toolbar becomes visible when one of the page elements is
selected by clicking on it. Each element can have a different set of settings
plugins.

![Webiny CMS - Element Settings Toolbar](assets/developer-tutorials/cms-element-settings-toolbar.png)

## Creating a settings plugin
To register a new plugin:
<script src="https://gist.github.com/Pavel910/41b90269c7f1e1a34f6dba04a0618497.js?file=settings.plugin.js"></script>

At line `4` we import a generic `Action` component created specifically for the element settings toolbar.
We then wrap it with our custom `DeleteAction` component which will create an `onClick` handler and pass
it to the generic `Action` component to handle clicks.

The `shortcut` prop at line `13` will add a keyboard shortcut handler for this action. So in this case,
when you select an element and hit the `backspace` key, the `Action` component will execute the `onClick`
handler, as if you've clicked it yourself.

> Internally, we are using the [is-hotkey](https://www.npmjs.com/package/is-hotkey) library to handle keyboard events,
so use the hotkey syntax supported by that library.

The `DeleteAction` component looks like this:
<script src="https://gist.github.com/Pavel910/41b90269c7f1e1a34f6dba04a0618497.js?file=settings.action.js"></script>

Lines `15-19` perform a check whether the selected element can be deleted.
The logic to allow or disallow deletion of an element can be implemented on the
element plugin itself (see the [anatomy of an element](/docs/developer-tutorials/cms-element-overview#anatomy-of-an-element-and-its-plugins)).
If yes, the action is rendered and an `onClick` handler is passed to it.

## More on the topic

There is a lot you can do with the settings plugins.

If you are interested to see how the existing plugins work,
please see a list of our [official element settings plugins](https://github.com/Webiny/webiny-js/tree/master/packages/webiny-app-cms/src/editor/plugins/elementSettings)
on Github and feel free to copy and play with the code to create your own plugins.

> When dealing with settings plugins, the same principles of rendering optimization apply:
be careful when and what to re-render as it is very easy to slow down the entire editor
by introducing an unoptimized piece of code.