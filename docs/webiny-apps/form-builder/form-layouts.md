---
id: form-layouts
title: Form Layouts
sidebar_label: ___Form Layouts
---

Every form you create via the form builder has a layout, which lets you define the design of your forms. Because the form layout is a React component, there are virtually no restrictions when it comes to adding customizations. Feel free to organize the code to your liking, import custom CSS, fonts, or even additional custom React components if there's a need for it.

Be default, every form has a default layout, which can be changed via the form settings. In the form builder, click on the settings icon in the top right corner:

![Form settings button.](/assets/webiny-apps/form-builder/form-layouts/form-settings-icon.png)

You should then see the following screen, and the "Layout" field at the bottom of the general settings form:

![Every form will have a default layout set.](/assets/webiny-apps/form-builder/form-layouts/pick-layout-settings.png)

Please note that a single form layout can be used on any number of forms, but every single form can use only one layout.

# Adding new form layouts

Adding new form layouts is just a matter of creating a new React component, and then registering it as a `form-layout` plugin, or listing the layout component in the Page Builder theme file. Whichever method you choose, you will need to declare your form layout's title and also reference the actual React component you've created.

### Plugin

The following snippet of code shows how to add a new form layout via a simple plugin:

```js
import DefaultFormLayout from "./DefaultFormLayout";

export default {
  name: "form-layout-custom",
  type: "form-layout",
  title: "My Custom Layout",
  component: DefaultFormLayout
};
```

Note that the plugin is defined once, but must be registered both in your Admin and website apps. This is, respectively, because you'll want to select the form layout and see the form preview in the form builder, and because you'll want to be able to show your form on the actual website.

> By default, all of the Admin and website plugins are registered in `apps/admin/src/plugins/index.js` and `apps/site/src/plugins/index.js`, respectively.

The following table shows a list of all keys and values that the plugin must define:

| Key         | Value Type        | Description                                                                                                  |
| :---------- | :---------------- | :----------------------------------------------------------------------------------------------------------- |
| `name`      | `string`          | Unique plugin name.                                                                                          |
| `type`      | `string`          | Plugin type, must equal to `form-layout`.                                                                    |
| `title`     | `string`          | A simple human-readable string. Shown when selecting form layouts via the form settings in the form builder. |
| `component` | `React.Component` | A reference to the actual React component that will be used to render the form.                              |

> If you're not already familiar with the concept of plugins, everything you need to know can be found right [here](/docs/deep-dive/plugins-crash-course).

### Page builder theme file

The following snippet of code, located at `packages/theme/src/index.js`, shows an excerpt of the default page builder theme file, which already has the `Default layout` form layout listed:

```js
// @flow
import "./style/theme.scss";
import StaticLayout from "./layouts/static";
import BlogLayout from "./layouts/blog";
import DefaultFormLayout from "./layouts/forms/DefaultFormLayout";

export default {
    layouts: [ ... ],
    forms: {
        layouts: [{ name: "default", title: "Default layout", component: DefaultFormLayout }]
    },
    colors: { ... },
    elements: {
        button: {
            types: [ ... ]
        }
    },
    typography: {
        h1: { ... },
        h1White: { ... }
    }
};

```

All of the form layouts need to be listed in the `forms.layouts` array, which is an array of objects with the following keys and values:

| Key         | Value Type        | Description                                                                                                  |
| :---------- | :---------------- | :----------------------------------------------------------------------------------------------------------- |
| `name`      | `string`          | Unique identifier of your form layout.                                                                       |
| `title`     | `string`          | A simple human-readable string. Shown when selecting     form layouts via the form settings in the page builder. |
| `component` | `React.Component` | A reference to the actual React component that will be used to render the form.                              |

> If you're not already familiar with the theme files, everything you need to know can be found right [here](/docs/webiny-apps/page-builder/introduction).

### Form layout React component

As seen in above examples, in both cases we reference the React component which will render the actual form. 
