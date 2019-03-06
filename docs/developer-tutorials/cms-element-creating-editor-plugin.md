---
id: cms-element-creating-editor-plugin
title: CMS Element - Editor plugin
sidebar_label: Editor plugin
---

> If you are not already familiar with how plugins work, we recommend
you first take a look at the [Plugins Crash Course](/docs/developer-tutorials/plugins-crash-course) before reading this article.

We will create a simple element, similar to the basic `text` element.

## Element definition
Here is the entire plugin code, and below the code is a step-by-step explanation:

<script src="https://gist.github.com/Pavel910/41b90269c7f1e1a34f6dba04a0618497.js?file=editor.js"></script>

We'll skip the imports and go straight to the plugin code:

`name` and `type` on lines `7-8` are the mandatory fields for every plugin
which define unique plugin name and plugin type. Element editor plugins are of type `cms-element`.

The `toolbar` key on lines `9-15` defines how this plugin will be displayed in the elements toolbar.
`group` is the name of the plugin which registers an element group.
Your element will be displayed under that group ion the toolbar.

> To see all groups available by default and learn to create a new element group,
see the [Creating an element group](/docs/developer-tutorials/cms-element-creating-element-group).

Lines `16-22` define which settings plugins will be available in the toolbar when
an element created by this plugin is selected in the editor. An empty string `""`
defines a separator between actions in the toolbar.

Line `23` defines elements you can drop your element onto. In this example,
if you drag your element over a drop zone of `cms-element-column` or `cms-element-row`,
they will allow you to drop your element onto them. No other elements will accept the drop.

Lines `24-43` define a `create` function which is responsible for creating a data structure
that represents your element in the data model of the editor. The `createValue` function
is a helper function to create the data structure suitable for Slate editor.

> For text editing we use the [Slate Editor](https://github.com/ianstormtaylor/slate).
You can also create plugins for Slate, but that is covered in a separate tutorial.

At line `30` you'll find a `settings` key. This key is used by element settings
plugins to store their data. Here you can define default values for all
the settings plugins you intend on using with your element. In this example
we are defining default values for `margin` and `padding` settings.

Lines `44-46` define a `render` function to render the element in the editor.
The `element` parameter being passed into the function is the actual element
being rendered. It is exactly the same data stored in the editor data model,
with the exception of its `elements` key: it is flattened to only include
an array of ids of its child elements (this is extremely important for render optimization).

## Element rendering
The following is the code for the `Text` component used in the `render` function
of your element plugin:
<script src="https://gist.github.com/Pavel910/41b90269c7f1e1a34f6dba04a0618497.js?file=Text.editor.js"></script>

Straight away, you will notice this component is connected to the Redux store
of the editor. This is required to optimize the rendering of the entire editor.

Even the smallest component can cause the entire editor to become extremely slow
and even unusable if you are not careful about what data you pass around and when
the re-render is executed.

> Make sure you only re-render your component when the relevant data is changed.

As a rule of thumb, we always pass the minimum amount of props to the component
and leave it to the `connect` to fetch the data that is required by the component to render,
and decide whether an update is necessary. In this case it is the `elementId` prop
that gives us the `id` of the element being rendered.

Using the `getElement` selector (imported on line `9`) we fetch the element data.
A full list of the available editor selectors can be found at [CMS Editor Selectors](https://github.com/Webiny/webiny-js/blob/master/packages/webiny-app-cms/src/editor/selectors/index.js).

All of our editor components use `recompose` to create handler functions
as it is absolutely vital for rendering optimization.

Lines `28-32` define a simple `onChange` handler that will be execute each time
a change occurs in the Slate editor. It will then dispatch an editor action
`updateElement` imported at line `8` to update the element data.

> When dispatching actions, make sure you set new values in an immutable way so Redux knows something has changed.
We mostly rely on [dot-prop-immutable](https://www.npmjs.com/package/dot-prop-immutable) package as it provides
a very convenient way of specifying nested keys using a dotted string notation.

`ElementRoot` (imported at line `7`) is a component that takes care or rendering
styles and custom attributes onto the element wrapper. You will always want to wrap
your element content with this component.

The last component that takes part in rendering this plugin is a `ConnectedSlate`
component (imported at line `6`). This component makes sure it only re-renders
the Slate editor if the data for the Slate has actually changed.