---
id: app
title: App Plugins Reference
sidebar_label: App
---

### [`pb-editor-page-element`](/docs/webiny-apps/page-builder/development/plugins-reference/app#pb-editor-page-element)

#### Summary

Enables adding new page elements to the page editor.

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
    // Whitelist elements that can accept this element (for drag&drop interaction)/
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
    // Executed when an immediate child element is deleted.
    onChildDeleted?: (params: { element: PbElement; child: PbElement }) => void;
    // Executed upon creating the element.
    onCreate?: string;
    // Render element preview (used when creating element screenshots; not all elements have a simple DOM representation
    // so this callback is used to customize the look of the element in a PNG image).
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

Enables defining custom settings dialogs for page elements.

Using the `Bind` component we are able to set any data to the page element's `data` property, which will later be accessible in the `render` function of the [`pb-editor-page-element`](/docs/webiny-apps/page-builder/development/plugins-reference/app#pb-editor-page-element)

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
                            name={"iframe.url"}
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


### [`pb-render-page-element`](/docs/webiny-apps/page-builder/development/plugins-reference/app#pb-render-page-element)

#### Summary

Enables rendering page elements on the actual pages and in page previews.

#### Type

```ts
export type PbTheme = {
    colors: { [key: string]: string };
    elements: { [key: string]: any };
    typography: {
        [key: string]: {
            label: string;
            component: string | React.ComponentType<any>;
            className: string;
        };
    };
};

export type PbRenderElementPlugin = Plugin & {
    type: "pb-render-page-element";
    // Name of the pb-element plugin this render plugin is handling.
    elementType: string;
    render: (params: { theme: PbTheme; element: PbElement }) => React.ReactNode;
};
```

#### Example

```ts
import IFrame from "./IFrame";

export default [
    {
        name: "pb-render-page-element-iframe",
        type: "pb-render-page-element",
        elementType: "iframe",
        render({ element }) {
            return <IFrame data={element.data} />;
        }
    } as PbRenderElementPlugin,
];
```

![Page preview](/img/webiny-apps/page-builder/development/development/plugin-reference/editor/iframe/page-preview.png)

### [`pb-editor-page-element-settings`](/docs/webiny-apps/page-builder/development/plugins-reference/app#pb-editor-page-element-settings)

#### Summary

Enables defining custom settings for page elements.

#### Type

```ts
export type PbEditorPageElementSettingsPlugin = Plugin & {
    type: "pb-editor-page-element-settings";
    renderAction(params: { options?: any }): ReactElement;
    renderMenu?: (params: { options?: any }) => ReactElement;
    // When an array of page elements "elementType", only those elements can use this setting.
    // When `true`, all page elements can use this setting.
    elements?: boolean | string[];
};
```

#### Example

```ts
import React from "react";
import { PbEditorPageElementSettingsPlugin } from "@webiny/app-page-builder/types";
import Action from "@webiny/app-page-builder/editor/plugins/elementSettings/components/Action";
import Settings from "./Settings";
import { ReactComponent as ClassNameIcon } from "./style.svg";

export default () =>
    ({
        name: "pb-editor-page-element-settings-css-class",
        type: "pb-editor-page-element-settings",
        renderAction() {
            return <Action tooltip={"CSS class"} plugin={this.name} icon={<ClassNameIcon />} />;
        },
        renderMenu() {
            return <Settings />;
        },
        elements: true
    } as PbEditorPageElementSettingsPlugin);

```

![Page element settings CSS class](/img/guides/custom-element-settings-plugin/css-class-plugin.gif)