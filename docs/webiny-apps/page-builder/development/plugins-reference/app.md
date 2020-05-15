---
id: app
title: App Plugins Reference
sidebar_label: App
---

# Summary

[`pb-editor-page-element`](/docs/webiny-apps/page-builder/development/plugins-reference/app#pb-editor-page-element)

[`pb-editor-page-element-advanced-settings`](/docs/webiny-apps/page-builder/development/plugins-reference/app#pb-editor-page-element-advanced-settings)



---

### [`pb-editor-page-element`](/docs/webiny-apps/page-builder/development/plugins-reference/app#pb-editor-page-element)

#### Summary

Enables adding custom element plugin in the Editor

#### Type

```ts
type PbEditorPageElementPlugin = Plugin & {
    type: "pb-editor-page-element";
    elementType: string;
    toolbar?: {
        // Element title in the toolbar.
        title?: string | PbEditorPageElementTitle;
        // Element group this element belongs to.
        group?: string;
        // A function to render an element preview in the toolbar.
        preview?: ({ theme: PbTheme }) => ReactNode;
    };
    // Help link
    help?: string;
    // Whitelist elements that can accept this element (for drag&drop interaction)
    target?: string[];
    // Array of element settings plugin names.
    settings?: Array<string>;
    // A function to create an element data structure.
    create: (options: { [key: string]: any }, parent?: PbElement) => Omit<PbElement, "id" | "path">;
    // A function to render an element in the editor.
    render: (params: { theme?: PbTheme; element: PbElement }) => ReactNode;
    // A function to check if an element can be deleted.
    canDelete?: (params: { element: PbElement }) => boolean;
    // Executed when another element is dropped on the drop zones of current element.
    onReceived?: (params: {
        store?: Store;
        source: PbElement | { type: string; path?: string };
        target: PbElement;
        position: number | null;
    }) => void;
    // Executed when an immediate child element is deleted
    onChildDeleted?: (params: { element: PbElement; child: PbElement }) => void;
    // Executed after element was created
    onCreate?: string;
    // Render element preview (used when creating element screenshots; not all elements have a simple DOM representation
    // so this callback is used to customize the look of the element in a PNG image)
    renderElementPreview?: (params: {
        element: PbElement;
        width: number;
        height: number;
    }) => ReactElement;
};
```

#### Example

```ts
{
    name: "pb-editor-page-element-iframe",
    type: "pb-editor-page-element",
    elementType: "iframe",
    toolbar: {
        title: "iFrame",
        group: "pb-editor-element-group-media",
        preview() {
            return (
                <PreviewBox>
                    <IFrameIcon />
                </PreviewBox>
            );
        }
    },
    settings: ["pb-editor-page-element-settings-delete"],
    onCreate: "open-settings",
    create(options) {
        return {
            type: "iframe",
            elements: [],
            data: {
                iframe: {
                    url: "",
                    height: 370
                },
                settings: {
                    horizontalAlign: "center",
                    margin: {
                        desktop: { all: 0 },
                        mobile: { all: 0 }
                    },
                    padding: {
                        desktop: { all: 0 },
                        mobile: { all: 0 }
                    }
                }
            },
            ...options
        };
    },
    render(props) {
        return <IFrameEmbed {...props} />;
    },
    renderElementPreview({ width, height }) {
        return <img style={{ width, height }} alt={"iFrame"} />;
    }
}
```

![Editor Iframe Plugin](/img/webiny-apps/page-builder/development/development/plugin-reference/editor/iframe/editor-iframe-plugin.png)


### [`pb-editor-page-element-advanced-settings`](/docs/webiny-apps/page-builder/development/plugins-reference/app#pb-editor-page-element-advanced-settings)

#### Summary

Enables adding custom settings dialog fields into the page builder.

#### Type

```ts
type PbEditorPageElementAdvancedSettingsPlugin = Plugin & {
    type: "pb-editor-page-element-advanced-settings";
    elementType: string;
    render(params?: { Bind: BindComponent; data: any }): ReactElement;
    onSave?: (data: FormData) => FormData;
};

type BindComponent = (props: BindComponentProps) => React.ReactElement;

type BindComponentProps = {
    name: string;
    beforeChange?: Function;
    afterChange?: Function;
    defaultValue?: any;
    validators?: Function | Array<Function>;
    children: ((props: BindComponentRenderProp) => React.ReactElement) | React.ReactElement;
    validate?: Function;
};
```

#### Example

```ts
{
    name: "pb-editor-page-element-advanced-settings-iframe",
    type: "pb-editor-page-element-advanced-settings",
    elementType: "iframe",
    render({ Bind }) {
        return (
            <Tab icon={<IFrameIcon />} label="IFrame">
                <Grid>
                    <Cell span={12}>
                        <Bind
                            name={"source.url"}
                            validators={validation.create("required,url")}
                        >
                            <Input
                                label={"IFrame URL"}
                                description={"Enter an iFrame URL"}
                            />
                        </Bind>
                    </Cell>
                </Grid>
            </Tab>
        );
    }
}

```

![Editor Iframe Plugin](/img/webiny-apps/page-builder/development/development/plugin-reference/editor/iframe/settings-dialog.png)