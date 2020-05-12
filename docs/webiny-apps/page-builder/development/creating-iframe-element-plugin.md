---
id: creating-iframe-element-plugin
title: Build a Plugin from scratch
sidebar_label: Build a Plugin from scratch
---

This tutorial guides you through building a new element plugin for our Page Builder.
Out of the box, we provide only the essential plugins. Writing your own plugin is not difficult, but you must be familiar with a couple of core concepts.

> If you are not already familiar with how plugins work, we recommend
> you first take a look at the [Plugins Crash Course](/docs/developer-tutorials/plugins-crash-course) before reading this article.

Ready? Let's dive in!

## What we'll build

We’ll build an element plugin that will allow content creators to embed content using an iframe.

Here's what the result will look like

![Embed content with an iframe](/img/webiny-apps/page-builder/development/development/plugin-reference/editor/iframe/iframe-plugin.png)


### Prerequisites

This tutorial assumes you have already created a new Webiny project to work on. If not, we recommend going to our [quick start](/docs/get-started/quick-start.md) guide which will show you how to do it.

### Need Help?

Head over to our [Webiny forum](https://community.webiny.com/), [Gitter](https://gitter.im/Webiny/webiny-js)

### Editor

One of the main sections of the Page Builder App is the Editor, you can get there by editing a site that you create. By default, it offers you a variety of elements or plugins as seen in the image below.

![Editor Elements](/img/webiny-apps/page-builder/development/development/plugin-reference/editor/iframe/editor-elements.png)


When building pages, you are using these elements (e.g. Text, Image, Form, ...), which are registered in the system via plugins. In terms of rendering, every element has to have two plugins, one that defines how it's rendered in the actual page builder, and the other that defines how it's rendered on the website.

If you are interested on different types of plugins, each app in Webiny consistes of the `types.ts` that includes all the plugin types of that app.
In our case is [app-page-builder/src/types.ts](https://github.com/webiny/webiny-js/blob/master/packages/app-page-builder/src/types.ts)

Let's render our plugin in the page builder, first we will use the `PbEditorPageElementPlugin` plugin type

```jsx
export default () => {
    const PreviewBox = styled("div")({
        textAlign: "center",
        height: 50,
        svg: {
            height: 50,
            width: 50
        }
    });

    return [
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
        } as PbEditorPageElementPlugin,
    // Settings dialog comes here
    ]
```

The key properties of the plugin are the create, data, settings, and render. They contribute to the state of our plugin. On changing the state, it’s up to the render function to render the component based on the state changes.

Since we are adding a new element in the editor, the type of plugin will be `pb-editor-page-element`, this plugin consists of different properties, one of them is the Toolbar property that helps us put our element on the media group, using `pb-editor-element-group-media`, as seen in the image below.

![Editor Iframe Element](/img/webiny-apps/page-builder/development/development/plugin-reference/editor/iframe/editor-iframe-plugin.png)


The next plugin type we will use is `PbEditorPageElementAdvancedSettingsPlugin`, we will use this plugin to show a settings dialog so we can provide an iframe URL.

```jsx
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
} as PbEditorPageElementAdvancedSettingsPlugin

```

This code shows the settings dialog and asks for the URL of the iframe as shown in the image below

![Settings dialog](/img/webiny-apps/page-builder/development/plugin-reference/editor/iframe/settings-dialog.png)

> In order to add new fields to your settings dialog, you can add more `PbEditorPageElementAdvancedSettingsPlugin` repeat the same process we've just shown. This will allow you to create other plugins too.

After saving the URL, the Bind component will bind the data to the state of our plugin so that the component on the render function will have access to the URL that the user provides, and it renders the IFrameEmbed component.

The IFrameEmbed component

```jsx
const IFrameEmbed = (props) => {
  const { element } = props;

  if (!element.data.iframe.url) {
    return <div>Loading iFrame data...</div>;
  }

  return (
    <div
      className={
        "webiny-pb-base-page-element-style webiny-pb-page-element-embed-youtube " + outerWrapper
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

And this is basically all you need to know about adding element plugins.
