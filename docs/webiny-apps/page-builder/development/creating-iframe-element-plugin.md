---
id: creating-iframe-element-plugin
title: Creating Custom Page Elements
sidebar_label: Creating Custom Page Elements
---

In this tutorial, we're going to learn how to create a custom page element for the Page Builder app. Although the app comes with a bunch of ready-made page elements, at one point in time, you might need to create your own to satisfy your specific requirements. To achieve that, we can utilize a couple of simple plugins, which is what we'll cover in this short tutorial.

> If you are not already familiar with how plugins work, we recommend
> you first take a look at the [Plugins Crash Course](/docs/developer-tutorials/plugins-crash-course) before reading this article.

Ready? Let's dive in!

## What We'll Build

We’ll create a new page element that will allow content creators to embed content using an iframe.

Here's what the result will look like:

![Embed content with an iframe](/img/webiny-apps/page-builder/development/development/plugin-reference/editor/iframe/iframe-plugin.png)


### Prerequisites

This tutorial assumes you have already created a new Webiny project to work on. We recommend going to our [quick start](/docs/get-started/quick-start.md) guide which will show you how to do it.

### Creating the Plugins

All of the available page elements can be accessed via the elements menu, which can be opened by clicking on the "plus" icon, located on the left side of the editor:


![Editor Elements](/img/webiny-apps/page-builder/development/development/plugin-reference/editor/iframe/editor-elements.png)


As mentioned, this list of page elements can be expanded and custom page elements can be created via plugins. To create a new page element, we need to register two plugins, one that defines how it's rendered in the editor and all of the available settings and options, and the other one that defines how the page element is rendered on the actual page.

### Editor Plugin

Let's add the new page element in the editor.
First, we will use the [`pb-editor-page-element`](/docs/webiny-apps/page-builder/development/plugins-reference/app#pb-editor-page-element) plugin type.


```jsx
import styled from "@emotion/styled";
import {
    PbEditorPageElementPlugin
} from "@webiny/app-page-builder/types";
import { ReactComponent as IFrameIcon } from "./iframe-icon.svg";
import IFrameEmbed from "./iFrameEmbed";

const PreviewBox = styled("div")({
    textAlign: "center",
    height: 50,
    svg: {
        height: 50,
        width: 50
    }
});

export default () => {
    return {
            name: "pb-editor-page-element-iframe",
            type: "pb-editor-page-element",
            elementType: "iframe",
            toolbar: {
                // We use `pb-editor-element-group-media` to put our plugin into the Media group.
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
                /*
                    Create function is here to create the initial data
                    for the page element, which then is utilized in the
                    IFrameEmbed component and in the settings dialog.
                */
                return {
                    type: "iframe",
                    elements: [],
                    data: {
                        iframe: {
                             The URL property will be populated when user enters the URL in the settings dialog.
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
                /*
                    Every render function receives the page element's
                    data assigned to the "element.data" property in
                    the received props. In here we will store the
                    "iframe.url" which will be provided via the page
                    element's settings dialog.
                */
                return <IFrameEmbed {...props} />;
            },
            renderElementPreview({ width, height }) {
                return <img style={{ width, height }} alt={"iFrame"} />;
            }
        } as PbEditorPageElementPlugin,
    // We will add a settings dialog plugin here,
    // follow the steps in Settings dialog section below.
```

The key properties of the plugin are the `create` and `render`. They define the initial page element's settings and how it will be rendered in the editor, respectively.

The `data` property holds the initial state of the page element which can contain any data you might need.

The `toolbar` property helps us put our plugin into the tool bar, as seen in the image below.
<!-- The `settings` which it is used to append settings to your page element. -->
![Editor Iframe Element](/img/webiny-apps/page-builder/development/development/plugin-reference/editor/iframe/editor-iframe-plugin.png)

Finally, it’s up to the `render` function to define how the page element will be rendered once the user drops it on the page.
Notice the props that were passed to the render function. This object contains all of the relevant page element's data and settings.

### Settings Dialog

The next plugin we'll need to define is the [`pb-editor-page-element-advanced-settings`](/docs/webiny-apps/page-builder/development/plugins-reference/app#pb-editor-page-element-advanced-settings), which we will use to show a settings dialog so the user can provide an iframe URL. The dialog will be shown automatically when the user drags and drops the page element on the page.

```jsx
import { Tab } from "@webiny/ui/Tabs";
import { Input } from "@webiny/ui/Input";
import { Grid, Cell } from "@webiny/ui/Grid";
import {
    PbEditorPageElementAdvancedSettingsPlugin
} from "@webiny/app-page-builder/types";
import { validation } from "@webiny/validation";


export default () => {
    return {
            name: "pb-editor-page-element-advanced-settings-iframe",
            type: "pb-editor-page-element-advanced-settings",
            elementType: "iframe",
            render({ Bind }) {
                return (
                    <Tab icon={<IFrameIcon />} label="IFrame">
                        <Grid>
                            <Cell span={12}>
                                {/*
                                    Using the `Bind` component we are able to set
                                    the URL to the page elements `data` property,
                                    which can be accessed in the already mentioned
                                    render function via received props.
                                */}
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
        } as PbEditorPageElementAdvancedSettingsPlugin
```

As mentioned, this code will show the settings dialog and ask for the URL of the iframe, as shown in the image below.

![Settings dialog](/img/webiny-apps/page-builder/development/development/plugin-reference/editor/iframe/settings-dialog.png)

The following code snippet shows the entire `IFrameEmbed` component:

```jsx
const IFrameEmbed = (props) => {
  const { element } = props;

  if (!element.data.iframe.url) {
    return <div>Loading iFrame data...</div>;
  }

  return (
    <div
      className={
        "webiny-pb-base-page-element-style webiny-pb-page-element-iframe " + outerWrapper
      }
    >
      <div className={innerWrapper}>
        <div id={element.id} />
        <iframe src={element.data.iframe.url} width="100%" height={element.data.iframe.height} />
      </div>
    </div>
  );
};

export default IFrameEmbed;
```

Notice we've added `webiny-pb-page-element-iframe` CSS class, which enables us to add custom CSS styling if needed.

### Render Plugin

As mentioned, every page element consists of two plugins. In order to render it on the actual page, we will use the
[`pb-render-page-element`](/docs/webiny-apps/page-builder/development/plugins-reference/app#pb-render-page-element)
plugin.

```ts
import IFrame from "./IFrame";
import { PbRenderElementPlugin } from "@webiny/app-page-builder/types";

export default (): PbRenderElementPlugin => {
    return {
        name: "pb-render-page-element-iframe",
        type: "pb-render-page-element",
        elementType: "iframe",
        render({ element }) {
            return <IFrame data={element.data} />;
        }
    };
}
```

The following code snippet shows the `IFrame` component

```ts
import { css } from "emotion";
const outerWrapper = css({
    boxSizing: "border-box"
});

const innerWrapper = css({
    left: 0,
    width: "100%",
    height: "auto",
    position: "relative",
    paddingBottom: 0
});

const IFrame = ({ data }) => {
    // If the user didn't enter a URL, let's show a simple message.
    if (!data.iframe.url) {
        return <div>IFrame URL is missing.</div>;
    }

    // Otherwise, let's render the iframe.
    return (
        <div
            className={
                "webiny-pb-base-page-element-style webiny-pb-page-element-embed-iframe " +
                outerWrapper
            }
        >
            <div className={innerWrapper}>
                <div
                    id={data.id}
                />
                <iframe src={data.iframe.url} width="100%" height={data.iframe.height} />
            </div>
        </div>
    );
};

export default IFrame;
```

Except on the actual page, this plugin will also be utilized in the page preview, as shown in the image below.

![Page preview](/img/webiny-apps/page-builder/development/development/plugin-reference/editor/iframe/page-preview.png)

Use the same approach on creating other custom page elements.