---
id: creating-iframe-element-plugin
title: Creating Custom Page Elements
sidebar_label: Creating Custom Page Elements
---

In this tutorial, we're going to learn how to create a custom page element for the Page Builder app. Although the app comes with a bunch of ready-made page elements, at one point in time, you might need to create your own in order to satisfy your specific requirements. In order to achieve that, we can utilize a couple of simple plugins, which is what we'll cover in this short tutorial.

> If you are not already familiar with how plugins work, we recommend
> you first take a look at the [Plugins Crash Course](/docs/developer-tutorials/plugins-crash-course) before reading this article.

Ready? Let's dive in!

## What We'll build

We’ll create a new page element that will allow content creators to embed content using an iframe.

Here's what the result will look like:

![Embed content with an iframe](/img/webiny-apps/page-builder/development/development/plugin-reference/editor/iframe/iframe-plugin.png)


### Prerequisites

This tutorial assumes you have already created a new Webiny project to work on. We recommend going to our [quick start](/docs/get-started/quick-start.md) guide which will show you how to do it.

### Creating the Plugins


All of the available page elements can be accessed via the elements menu, which can be opened by clicking on the "plus" icon, located on the left side of the editor:


![Editor Elements](/img/webiny-apps/page-builder/development/development/plugin-reference/editor/iframe/editor-elements.png)


As metioned, this list of page elements can be expanded and custom page elements can be created via plugins. In order to create a new page element, we need to register two plugins, one that defines how it's rendered in the editor and all of the available settings and options, and the other one that defines how the page element is rendered on the actual page.

### Editor Plugin

Let's render our page element in the editor. first we will use the [`pb-editor-page-element`](/docs/webiny-apps/page-builder/development/plugins-reference/app#pb-editor-page-element)
 plugin type.


```jsx
import React from "react";
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
            // Create function it's here to create the initial data for the page element, which then is utilized in theIFrameEmbed, in settings dialog, etc.
                return {
                    type: "iframe",
                    elements: [],
                    data: {
                        iframe: {
                            // The URL property will be populated when user enters the URL in the settings dialog
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
        } as PbEditorPageElementPlugin,
    // Settings dialog comes here
```

Since we are adding a new element in the editor, the type of plugin will be `pb-editor-page-element`. This plugin consists of different properties, one of them is the `toolbar` property that helps us put our element into the "Media" group, using `pb-editor-element-group-media`, as seen in the image below.

The key properties of the plugin are the `create`, `data`, `settings`, and `render`. They contribute to the state of our plugin. On changing the state, it’s up to the render function to render the component based on the state changes.

![Editor Iframe Element](/img/webiny-apps/page-builder/development/development/plugin-reference/editor/iframe/editor-iframe-plugin.png)

### Render Plugin

The next plugin type we will use is the [`pb-editor-page-element-advanced-settings`](/docs/webiny-apps/page-builder/development/plugins-reference/app#pb-editor-page-element-advanced-settings)
, we will use this plugin to show a settings dialog so we can provide an iframe URL.

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
                                <Bind
                                    // Binding the iframe.url in the 'data' property
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

This code shows the settings dialog and asks for the URL of the iframe as shown in the image below.

![Settings dialog](/img/webiny-apps/page-builder/development/development/plugin-reference/editor/iframe/settings-dialog.png)

> In order to add new fields to your settings dialog, you can add more `PbEditorPageElementAdvancedSettingsPlugin` repeat the same process we've just shown. This will allow you to create other plugins too.

After saving the URL, the Bind component will bind the data to the state of our plugin so that the component on the render function will have access to the URL that the user provides, and it renders the IFrameEmbed component.

The IFrameEmbed component:

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

One thing to notice is that every element has it's unique CSS class such as `webiny-pb-page-element-iframe`, to add custom style to the new element plugin.

And this is basically all you need to know about adding element plugins.
