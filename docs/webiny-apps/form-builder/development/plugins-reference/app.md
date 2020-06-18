---
id: app
title: App Plugins Reference
sidebar_label: App
---

### [`fb-form-details-submissions-list-multi-select-action`](/docs/webiny-apps/form-builder/development/plugins-reference/app#fb-form-details-submissions-list-multi-select-actionx)

#### Summary

If needed, via the multi select checkboxes, users can perform a specific action on multiple form submissions. Out of the box, the Form Builder app provides a simple CSV export action, but more can be added via the `fb-form-details-submissions-list-multi-select-action` plugin.

![](/img/webiny-apps/form-builder/development/plugins-reference/fb-form-details-submissions-list-multi-select-action/example-submissions-list.png)

> To learn more about this view, please visit the [Stats and Submissions](/docs/webiny-apps/form-builder/form-stats) article.

#### Type

```ts
type FbFormDetailsSubmissionsListMultiSelectActionPlugin = Plugin & {
    type: "fb-form-details-submissions-list-multi-select-action";
    render: (props: { dataList: DataListProps }) => React.ReactNode;
}
```

#### Example

```ts
import { Tooltip } from "@webiny/ui/Tooltip";
import { IconButton } from "@webiny/ui/Button";
import { ReactComponent as ImportExport } from "./icons/importExportIcon.svg";

const sendToMixPanel = selectedItems => {
    // Do the actual API call and everything else that might be needed.
};

(...)

{
    name: "fb-form-details-submissions-list-multi-select-action-send-to-mix-panel",
    type: "fb-form-details-submissions-list-multi-select-action",
    render({ dataList }) {
        return (
            // Tooltip was added here for better UX.
            <Tooltip content={"Send to MixPanel"}>
                <IconButton
                    disabled={dataList.isNoneMultiSelected()}
                    icon={<ImportExport />}
                    onClick={async () => {
                        // Get the list of all selected items from the "dataList" object.
                        sendToMixPanel(dataList.getMultiSelected());
                    }}
                />
            </Tooltip>
        );
    }
}
```

![](/img/webiny-apps/form-builder/development/plugins-reference/fb-form-details-submissions-list-multi-select-action/example-results.png)


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

