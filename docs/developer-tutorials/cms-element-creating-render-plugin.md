---
id: cms-element-creating-render-plugin
title: CMS Element - Creating render plugin
sidebar_label: Creating render plugin
---

> If you are not already familiar with how plugins work, we recommend
you first take a look at the [Plugins Crash Course](/docs/developer-tutorials/plugins-crash-course) before reading this article.

Once you have your [element editor plugin](/docs/developer-tutorials/cms-element-creating-editor-plugin) ready, you will
need a corresponding `render` plugin to render the data created by the editor plugin on the website and in the page preview.

## Plugin definition
Here is the entire plugin code, and below the code is a step-by-step explanation:
<script src="https://gist.github.com/Pavel910/41b90269c7f1e1a34f6dba04a0618497.js?file=render.js"></script>

The `element` property, at line `8` defines which element this plugin will render.

`render` function on lines `8-11` renders the actual element content.

Here you can see the component used to render the element data.
<script src="https://gist.github.com/Pavel910/41b90269c7f1e1a34f6dba04a0618497.js?file=Text.render.js"></script>

To render `Slate` in the `read-only` mode, don't pass the `onChange` prop to it.

As you can see, in render plugins the code to render is much more simple
than in the editor plugin as we don't have the Redux store, just the plain element data,
and we never update data after it is rendered.
