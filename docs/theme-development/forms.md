---
id: forms
title: Forms
sidebar_label: Forms
---

While creating forms using Form Builder, you have the option to preview your forms right there inside the same interface, and you also have the option to insert your forms into a page using the Page Builder.

How the form will look visually is controlled via the form layout that is selected for that form. This is defined in the [form settings](webiny-apps/form-builder/form-settings.md).

![Webiny - Theme Layout](/img/theme-development/webiny-theme-forms.gif)

Simillar to how the layouts for pages work, the form layouts control how that form will be rendered. This includes all elements as inputs, dropdowns, submit button and the success message.

The default theme includes a single form layout which should fit most use-cases. If you wish to do any visual tweaks, it's best to modify just the stylesheets.

For more advance case you might want to create a custom form layout. The best approach would be to copy the existing one and update the things you need to adapt. There are comments inside the default form layout which will help you find your way around.

To define a form layout add the following snippet to your theme configuration:

```js
forms: {
  layouts: [
    {
      name: "default",
      title: "Default layout",
      component: DefaultFormLayout
    }
  ];
}
```

The `DefaultFormLayout` is a React component that you need to import.

You can find the default form layout and all the child components inside the [default theme](https://github.com/webiny/webiny-js/tree/master/examples/packages/theme/src/layouts/forms).
Additionally all the form element styles are inside a single [stylesheet](https://github.com/webiny/webiny-js/blob/master/examples/packages/theme/src/style/elements/form.scss).
