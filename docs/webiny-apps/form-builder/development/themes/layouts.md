---
id: layouts
title: Webiny Form Builder - Layouts
sidebar_label: Layouts
---

Every form you create via the form builder has a layout, which lets you define the design of your forms. Because the form layout is a React component, there are virtually no restrictions when it comes to adding customizations. Feel free to organize the code to your liking, import custom CSS, fonts, or even additional custom React components if there's a need for it.

Be default, every form has a default layout, which can be changed via the form settings. In the form builder, click on the settings icon in the top right corner:

![Form settings button.](/img/webiny-apps/form-builder/form-layouts/form-settings-icon.png)

You should then see the following screen, and the "Layout" field at the bottom of the general settings form:

![Every form will have a default layout set.](/img/webiny-apps/form-builder/form-layouts/pick-layout-settings.png)

Please note that a single form layout can be used on any number of forms, but every single form can use only one layout.

# Adding new form layouts

Adding new form layouts is just a matter of creating a new React component, and then registering it as a `form-layout` plugin, or listing the layout component in the Page Builder theme file. Whichever method you choose, you will need to declare your form layout's title and also reference the actual React component you've created.

### Plugin

The following snippet of code shows how to add a new form layout via a simple plugin:

```js
import DefaultFormLayout from "./DefaultFormLayout";

export default () => [
    {
        name: "form-layout-default",
        type: "form-layout",
        layout: {
            name: "default",
            title: "Default layout",
            component: DefaultFormLayout
        }
    }
];
```

Note that the plugin is defined once, but must be registered both in your Admin and website apps. This is, respectively, because you'll want to select the form layout and see the form preview in the form builder, and because you'll want to be able to show your form on the actual website.

> By default, all the Admin and website plugins are registered in `apps/admin/src/plugins/index.js` and `apps/site/src/plugins/index.js`, respectively.

The following table shows a list of all keys and values that the plugin must define:

| Key         | Value Type        | Description                                                                                                  |
| :---------- | :---------------- | :----------------------------------------------------------------------------------------------------------- |
| `name`      | `string`          | Unique plugin name.                                                                                          |
| `type`      | `string`          | Plugin type, must equal to `form-layout`.                                                                    |
| `layout`     | `Object`          | Object containing a unique `name` for the theme, a human readable `title` and a reference to the actual React `component` that will be used to render the form. |

> If you're not already familiar with the concept of plugins, everything you need to know can be found right [here](/docs/deep-dive/plugins-crash-course).


### Form layout React component

To get a better feeling of what's expected of a single form layout component, you can check out the default layout component that's provided with every Webiny installation, located at: `/packages/app-form-builder-theme/src/DefaultFormLayout.tsx`

If needed, feel free to edit the file to your liking, or just create a copy and use that as a foundation for a new form layout.

### Form Layout Component's Props

| Prop               | Type                                                | Description                                                                                                                                                                            |
| :----------------- | :-------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `getFieldById`     | `Function`                                          | Returns a single form field by given ID.                                                                                                                                               |
| `getFields`        | `Array<Array<FormRenderFieldType>>`                 | Returns a list of all form fields.                                                                                                                                                     |
| `getDefaultValues` | `Object`                                            | Returns default values for all form fields.                                                                                                                                            |
| `ReCaptcha`        | `ReCaptchaComponentType`                            | A components that shows Google reCAPTCHA, a simple check that prevents you from spammers and bots (only if enabled via [form settings](/docs/webiny-apps/form-builder/form-settings)). |
| `TermsOfService`   | `TermsOfServiceComponentType`                       | A component that shows terms of service message (only if enabled via [form settings](/docs/webiny-apps/form-builder/form-settings).                                                    |
| `submit`           | `(data: Object) => Promise<FormSubmitResponseType>` | Call this callback to submit the form.                                                                                                                                                 |
| `formData`         | `FormDataType`                                      | Contains data about the form, e.g. form name, layout, settings, and so on.                                                                                                             |
