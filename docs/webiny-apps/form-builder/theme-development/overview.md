---
id: overview
title: Webiny Form Builder - Theme Development
sidebar_label: Overview
---

While creating forms using Form Builder, you have the option to preview your forms right there inside the same interface, and you also have the option to insert your forms into a page using the Page Builder.

How the form will look visually is controlled via the form layout that is selected for that form. This is defined inside the form settings.

![Webiny - Theme Layout](/img/theme-development/webiny-theme-forms.gif)

Similar to how the layouts for pages work, the form layouts control how that form will be rendered. This includes all elements as inputs, dropdown, submit button and the success message.

The default theme includes a single form layout which should fit most use-cases. If you wish to do any visual tweaks, it's best to just modify the stylesheets.

For more advance case you might want to create a custom form layout. The best approach would be to copy the existing one and update the things you need to adapt. There are comments inside the default form layout which will help you find your way around.

## Registering a theme
To register, or change the default Form Builder theme, open `apps/site/src/plugins/index.ts` and update the registration of the Form Builder theme:

```js
import formBuilderTheme from "@webiny/app-form-builder-theme";

const plugins = [
    //..
    formBuilderTheme()
    //..
];

export default plugins;
```

The default theme comes with a single form layout. To learn more about form layouts proceed to the next page.