---
id: form-fields
title: Form Fields
sidebar_label: Form Fields
---

Creating custom form field is just a matter of adding a couple of plugins.

> If you are not already familiar with how plugins work, we recommend you take a look at the [Plugins Crash Course](/docs/developer-tutorials/plugins-crash-course).

First we need to register a plugin with the type [`form-editor-field-type`](/docs/webiny-apps/form-builder/development/plugins-reference/app#form-editor-field-type), which will actually add the field to the [form builder](/docs/webiny-apps/form-builder/getting-started).

Let's examine the following example:

```typescript
// We first import a couple of components that will make the form field creation easier.
import { Cell, Grid } from "@webiny/ui/Grid";
import { I18NInput } from "@webiny/app-i18n/admin/components";
import { Input } from "@webiny/ui/Input";
import { FbBuilderFieldPlugin } from "@webiny/app-form-builder/types";
import { ReactComponent as SecretIcon } from "my-webiny-app/icons/lock.svg";

(...)

// The following shows a complete plugin definition for a new "Secrets" form field.
// All of the relevant options are contained in the "field" property.
const secretTextFormField: FbBuilderFieldPlugin = {
    type: "form-editor-field-type",
    name: "form-editor-field-type-secret-text",
    field: {
        name: "text-secret",
        type: "text",
        validators: ["required", "minLength", "maxLength", "pattern"],
        label: "Secrets",
        description: "A field that hides user's input.",
        icon: <SecretIcon />,
        createField() {
            return {
                type: this.type,
                name: this.name,
                validation: [],
                settings: {
                    defaultValue: ""
                }
            };
        },
        renderSettings({ form: { Bind } }) {
            return (
                <Grid>
                    <Cell span={12}>
                        <Bind name={"placeholderText"}>
                            <I18NInput
                                label={"Placeholder text"}
                                description={"Placeholder text (optional)"}
                            />
                        </Bind>
                    </Cell>
                    <Cell span={12}>
                        <Bind name={"settings.defaultValue"}>
                            <Input
                                label={"Default value"}
                                description={"Default value (optional)"}
                            />
                        </Bind>
                    </Cell>
                    <Cell span={12}>
                        <Bind name={"settings.aCustomSetting"}>
                            <Input
                                label={"A custom setting"}
                                description={"This can be another custom setting needed for the input."}
                            />
                        </Bind>
                    </Cell>
                </Grid>
            );
        }
    }
};
```

With the above plugin properly registered, we should already see our new form field in the form builder! Just try dragging the "Custom" field from the fields menu, and you should see it in the dialog that follows:

![Form field registered successfully](/img/webiny-apps/form-builder/development/form-fields/form-field-registered.png)

Once you click on the icon, we'll be able to see the form that consists of two tabs. And if we take a look at the form in the initial "General" tab, we'll see that at the top we have "Label", "Field ID", and "Help Text" fields (which are present for every field by default), and on the bottom we have three fields we added via the `renderSettings` function in our plugin.

![Form field settings](/img/webiny-apps/form-builder/development/form-fields/form-field-settings.png)
   
