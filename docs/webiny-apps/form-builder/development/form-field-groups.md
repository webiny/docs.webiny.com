---
id: form-field-groups
title: Form Field Groups
sidebar_label: Form Field Groups
---

To keep all of your form fields organized, you can create form field groups, and then place your fields into them. This can be easily achieved via the [`form-editor-field-group`](/docs/webiny-apps/form-builder/development/plugins-reference/app#form-editor-field-group) plugin.

> If you are not already familiar with how plugins work, we recommend you take a look at the [Plugins Crash Course](/docs/developer-tutorials/plugins-crash-course).

Let's examine the following example:

```ts
import { FbEditorFieldGroup } from "@webiny/app-form-builder/types";

(...)

const secretTextFormField: FbBuilderFieldPlugin = x{
  name: "form-editor-field-group-contact",
  type: "form-editor-field-group",
  group: {
    title: "Contact information"
  }
}
```

With the above plugin properly registered, we should see our new group in the form editor, in the fields menu:

![](/img/webiny-apps/form-builder/development/form-field-groups/contact-details-group.png)

> The "Contact Information" fields group comes by default with the Form Builder app and contains a bunch of frequently used contact-information-related fields.

### Moving form fields to groups
If you have your own custom form field and want to move it into a custom fields group, you can easily do that by just assigning the form fields plugin name to the `group` property. For example, if we wanted to put our custom form field into the form fields group we've shown in the example above, we would do it like so:

```ts
{
    type: "form-editor-field-type",
    name: "form-editor-field-type-secret-text",
    field: {
        name: "text-secret",
        type: "text",
        label: "Secrets",
        group: "form-editor-field-group-contact", // We use the plugin "name".
        (...)
    }
};
```

> For more information on form fields, please check the [Form Fields](/docs/webiny-apps/form-builder/development/form-fields) article.
