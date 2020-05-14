---
id: app
title: App Plugins Reference
sidebar_label: App
---

### [`form-editor-field-group`](/docs/webiny-apps/form-builder/development/plugins-reference/app#form-editor-field-group)

#### Summary

Enables adding custom form fields into the form builder.

#### Type

```ts
type FbEditorFieldGroup = Plugin & {
    type: "form-editor-field-group";
    group: {
        title: string;
    };
}
```

#### Example

```ts
{
  name: "form-editor-field-group-contact",
  type: "form-editor-field-group",
  group: {
    title: "Contact information"
  }
}
```

![](/img/webiny-apps/form-builder/development/form-field-groups/contact-details-group.png)


### [`form-editor-field-type`](/docs/webiny-apps/form-builder/development/plugins-reference/app#form-editor-field-type)

#### Summary

Enables adding custom form fields into the form builder.

#### Type

```ts
type FbBuilderFieldPlugin = [Plugin](www.google.com) & {
    type: "form-editor-field-type";
    field: {
        group?: string;
        unique?: boolean;
        type: string;
        name: string;
        label: string;
        validators?: string[];
        description: string;
        icon: React.ReactNode;
        createField: ({ i18n: any }) => FbFormModelField;
        renderSettings?: (params: {
            form: FormChildrenFunctionParams;
            afterChangeLabel: (value: string) => void;
            uniqueFieldIdValidator: (fieldId: string) => void;
        }) => React.ReactNode;
    };
}
```

#### Example

```ts
{
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

![](/img/webiny-apps/form-builder/development/form-fields/form-field-registered.png)

