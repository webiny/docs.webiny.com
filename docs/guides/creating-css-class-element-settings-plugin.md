---
id: creating-custom-element-settings-plugin
title: Creating custom page element settings
sidebar_label: Creating custom page element settings
---

In this tutorial, we're going to learn how to create custom element settings for the Page Builder app. Although the app comes with a bunch of ready-made element settings plugins, at one point in time, you might need to create your own to satisfy your specific requirements. To achieve that, we can utilize a simple plugin, which is what we'll cover in this short tutorial.

If you are not already familiar with how plugins work, we recommend
you first take a look at the [Plugins Crash Course](/docs/developer-tutorials/plugins-crash-course) before reading this article.

> All of the code shown in this tutorial is also hosted in our [GitHub](https://github.com/webiny/webiny-examples/blob/master/css-class-page-element-setting) repository.

Ready? Let's dive in!

## What we'll build

We’ll create a new page element settings plugin, which will allow a user of the page builder app to add CSS classes to any page element.

Here's what the result will look like:

![Add CSS class using settings plugin](/img/guides/custom-element-settings-plugin/css-class-plugin.gif)

Under the hood, every page element is a React component. Therefore, the value of the `CSS class` will translates to `className` prop on component level.
The `settings.className` property of an element is special because the rendering of this property is already handled for you.

How is it handled, you ask?

Well, every page element is wrapped with the [ElementRoot](https://github.com/webiny/webiny-js/blob/master/packages/app-page-builder/src/render/components/ElementRoot.tsx#L62) component. Among other things, it is also responsible for extracting the `className` value from the `element.data` and and passing it to the element for rendering.


## Prerequisites

##### 1. A Webiny Project

This tutorial assumes you have already created a new Webiny project to work on. We recommend going to our [quick start](/docs/get-started/quick-start) guide which will show you how to do it.

##### 2. Project structure

We'll add the code for our plugin in the `apps/admin/src/plugins/cssClass` folder and we'll pass it to the app later on.

:::info
You can place the code for plugins anywhere inside `src` folder. For convenience, I like to group all plugins under a single folder named `plugins`.
:::

The project structure of our `admin` app will look similar to this:

```
├── src
│   ├── App.scss
│   ├── App.tsx
│   ├── index.tsx
│   └── plugins
│       ├── cssClass
│       │   ├── index.tsx
│       │   ├── Settings.tsx
│       │   └── style-icon.svg
│       └── index.ts
```

:::note
In order to work, the plugin(s) defined in the [`apps/admin/src/plugins/index.ts`](https://github.com/webiny/webiny-examples/blob/master/iframe-page-element/apps/admin/src/iframe/index.tsx) will need to be imported and registered in the `admin/src/App.tsx` as shown below.
:::

For example,

```ts
import adminTemplate from "@webiny/app-template-admin-full";
import "./App.scss";
// Import the custom plugins, that we define
import customPlugins from "./plugins";

export default adminTemplate({
  cognito: {
    region: process.env.REACT_APP_USER_POOL_REGION,
    userPoolId: process.env.REACT_APP_USER_POOL_ID,
    userPoolWebClientId: process.env.REACT_APP_USER_POOL_WEB_CLIENT_ID
  },
  // Pass customPlugins as "plugins" to adminTemplate options
  plugins: [...customPlugins]
});
```

## Creating the Plugin

All of the settings available for a page element can be accessed via the top app bar, which appear as soon as you select a page element in the editor:

![Editor Element settings](/img/guides/custom-element-settings-plugin/pb-editor-toolbar.png)

As mentioned, this list of element settings can be expanded and custom element settings can be created via plugins. To create a new page element setting, we only need to register a single plugin, that will define three things for us:

- How it's rendered in the top action menu of the page editor?
- What settings that plugin will apply to the page element?
- And which page elements can use this setting?

### Defining the Plugin

Let's add the new page element setting in the editor.
First, we'll create/define the necessary plugin in the `apps/admin/src/plugins/cssClass/index.tsx` file.

:::info
This plugin will of [`pb-editor-page-element-settings`](/docs/webiny-apps/page-builder/development/plugins-reference/app#pb-editor-page-element-settings) type.
:::

```jsx title="src/plugins/cssClass/index.tsx"
import React from "react";
import { PbEditorPageElementSettingsPlugin } from "@webiny/app-page-builder/types";
import Action from "@webiny/app-page-builder/editor/plugins/elementSettings/components/Action";
import { ReactComponent as CssClassIcon } from "./style-icon.svg";
import Settings from "./Settings";

export default () =>
    ({
         type: "pb-editor-page-element-settings",
        // Unique name for the plugin.
        name: "pb-editor-page-element-settings-css-class",
        // A function to render an action item in the editor toolbar.
        renderAction() {
            return <Action tooltip={"CSS class"} plugin={this.name} icon={<CssClassIcon />} />;
        },
        // A function to render a settings menu in the editor.
        renderMenu() {
            return <Settings />;
        },
        // We'll set it to true, because we want this "setting" to be available for all page elements.
        elements: true
    } as PbEditorPageElementSettingsPlugin);

```
Before we cover what's inside of **Action** and **Settings** components, let's first understand what each property means in the plugin we just created.

- `name` property holds a special meaning here. Unlike other plugins, the name property is required here because it will be use to assign element settings to a page element using `settings` key in [`pb-editor-page-element`](/docs/webiny-apps/page-builder/development/plugins-reference/app#pb-editor-page-element) plugin type.

- `renderAction` and `renderMenu` are the two key properties of this plugin. They define how the **settings action** and **settings menu** will be rendered in the editor, respectively.

- `elements` property holds either a list of page elements for which this setting will be available or a boolean value of **true** which enables the setting on every page element.

- `elements` property can be set to one of these two things:
    - either a list of page element types for which this setting will be available. For example,

    ```ts
        elements: ["text", "column"]
    ```
    - or a boolean value of **true** which enables the setting on every page element. As shown in the above example.


### Implement `renderAction`

The `renderAction` property of [`pb-editor-page-element-settings`](/docs/webiny-apps/page-builder/development/plugins-reference/app#pb-editor-page-element-settings) plugin is a function that renders the **settings action** in the top editor toolbar.

If we look at the implementation of `renderAction` in case of our `"pb-editor-page-element-settings-css-class"` plugin, it just returns a **Action** component.

Now, let's take a look at this **Action** component. Tt is a simple React component which is responsible of mainly two things:
- Rendering of the **tooltip** and **icon** for the settings action, which are passed as props to it.
- For opening and closing of the actual settings menu for the very plugin provided as prop.

Checkout the full source code of [Action](https://github.com/webiny/webiny-js/blob/master/packages/app-page-builder/src/editor/plugins/elementSettings/components/Action.tsx) component in our Github repo.

### Implement `renderMenu`

The `renderMenu` property of [`pb-editor-page-element-settings`](/docs/webiny-apps/page-builder/development/plugins-reference/app#pb-editor-page-element-settings) plugin is a function that renders the **settings menu**, which will get rendered when the **action** icon is clicked.

If we look at the implementation of `renderMenu` in case of our `"pb-editor-page-element-settings-css-class"` plugin, it just returns a **Settings** component, which we'll implement in a moment.

That's a lot of words to process. Let's take moment to briefly look away from the computer screen for a minute or two to a more distant scene or maybe brew a cup of coffee. Alright...


Now, let's implement the **Settings** component. The goal for this component is to render the menu for the actual setting, which generally involves a **Form** so that the user can edit the settings. We'll go through the implementation step by step. We'll start by adding the boilerplate code and then move to the actual business logic.

Let's create a simple form that will render a tab containing a **label** and **input** box.

```typescript jsx title="src/plugins/cssClass/Settings.tsx"
import React from "react";
import { get } from "lodash";
import { set } from "dot-prop-immutable";
import { connect } from "@webiny/app-page-builder/editor/redux";
import { Tabs, Tab } from "@webiny/ui/Tabs";
import { Input } from "@webiny/ui/Input";
import { InputContainer } from "@webiny/app-page-builder/editor/plugins/elementSettings/components/StyledComponents";
import { Typography } from "@webiny/ui/Typography";
import { Grid, Cell } from "@webiny/ui/Grid";
import { Form } from "@webiny/form";
// Remove code for brevity.
const validateClassName = () => {};

const Settings = props => {
    // TODO: We'll soon implement this function.
    const updateSettings = () => {};
    // TODO: We'll see soon, how to get the "settings" property for an element.
    const settings = {};

    return (
        <Form data={settings} onChange={updateSettings}>
            {({ Bind }) => (
                <Tabs>
                    <Tab label={"CSS class"}>
                        <Grid>
                            <Cell span={5}>
                                {/* Label for input */}
                                <Typography use={"overline"}>CSS class</Typography>
                            </Cell>
                            <Cell span={7}>
                                <InputContainer width={"auto"} margin={0}>
                                    {/* The actual input component */}
                                    <Bind name={"className"} validators={validateClassName}>
                                        <Input />
                                    </Bind>
                                </InputContainer>
                            </Cell>
                        </Grid>
                    </Tab>
                </Tabs>
            )}
        </Form>
    );
};

// TODO: Fill in the missing parts
const mapStateToProps = ...;
const mapDispatchToProps =  ...;

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(Settings);
```

With the above code we'll be able to get a menu as shown in the image below:

![PB editor CSS class Menu](/img/guides/custom-element-settings-plugin/pb-editor-css-class-menu.png)

Of course nothing will happen if you try adding input value because the actual business logic for saving the `className` value is missing.
So, let's add it.

- First, we are going to import `updateElement` action creator and `getActiveElement` selector to update the page element data and get active page element, respectively.

- Then, we'll fill in the code for `mapStateToProps` and `mapDispatchToProps` so that we can use active `element` and `updateElement` as props.

```typescript jsx{11,12,49,50} title="src/plugins/cssClass/Settings.tsx"
import React from "react";
import { get } from "lodash";
import { set } from "dot-prop-immutable";
import { connect } from "@webiny/app-page-builder/editor/redux";
import { Tabs, Tab } from "@webiny/ui/Tabs";
import { Input } from "@webiny/ui/Input";
import { InputContainer } from "@webiny/app-page-builder/editor/plugins/elementSettings/components/StyledComponents";
import { Typography } from "@webiny/ui/Typography";
import { Grid, Cell } from "@webiny/ui/Grid";
import { Form } from "@webiny/form";
import { updateElement } from "@webiny/app-page-builder/editor/actions";
import { getActiveElement } from "@webiny/app-page-builder/editor/selectors";

// Remove code for brevity.
const validateClassName = () => {};

const Settings = props => {
    // TODO: We'll soon, implement this function.
    const updateSettings = () => {};
    // TODO: We'll see soon, how to get the "settings" property for an element.
    const settings = {};

    return (
        <Form data={settings} onChange={updateSettings}>
            {({ Bind }) => (
                <Tabs>
                    <Tab label={"CSS class"}>
                        <Grid>
                            <Cell span={5}>
                                {/* Label for input */}
                                <Typography use={"overline"}>CSS class</Typography>
                            </Cell>
                            <Cell span={7}>
                                <InputContainer width={"auto"} margin={0}>
                                    {/* The actual input component */}
                                    <Bind name={"className"} validators={validateClassName}>
                                        <Input />
                                    </Bind>
                                </InputContainer>
                            </Cell>
                        </Grid>
                    </Tab>
                </Tabs>
            )}
        </Form>
    );
};

const mapStateToProps = state => ({ element: getActiveElement(state) });
const mapDispatchToProps = { updateElement };

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(Settings);
```

Now that we have the active page element and a helper to get active element's data, let's implement the actual business logic.

:::info
 `element.data` contains the information about various attributes of a page element. One of the attribute is the `settings`, which managed by various **element settings** plugins.
:::

Our goal is to edit and store `className` key-value to this very object i.e `element.data.settings`.

- First, we're going to extract the `settings` property from element's data object and attach `className` key to it.

- Then, we need to implement a `onChange` handler for the form so that the `className` value can be update using the input field. For that, we'll import `useHandler` hook that will help us to implement `updateSettings` change handler.


```typescript jsx{5,20-41} title="src/plugins/cssClass/Settings.tsx"
import React from "react";
import { get } from "lodash";
import { set } from "dot-prop-immutable";
import { connect } from "@webiny/app-page-builder/editor/redux";
import { useHandler } from "@webiny/app/hooks/useHandler";
import { Tabs, Tab } from "@webiny/ui/Tabs";
import { Input } from "@webiny/ui/Input";
import { InputContainer } from "@webiny/app-page-builder/editor/plugins/elementSettings/components/StyledComponents";
import { Typography } from "@webiny/ui/Typography";
import { Grid, Cell } from "@webiny/ui/Grid";
import { Form } from "@webiny/form";
import { updateElement } from "@webiny/app-page-builder/editor/actions";
import { getActiveElement } from "@webiny/app-page-builder/editor/selectors";

// Remove code for brevity.
const validateClassName = () => {};

const Settings = props => {
    // Implement onChange handler with the help of `useHandler` hook.
    const updateSettings = useHandler(props, ({ element, updateElement }) => async (data, form) => {
        // validate form
        const valid = await form.validate();
        // Don't save value if form is invalid.
        if (!valid) {
            return;
        }

        const attrKey = `data.settings.className`;
        // Set new value for `className`.
        const newElement = set(element, attrKey, data.className);
        // Update the element using `updateElement` action creator
        updateElement({ element: newElement });
    });
    // Extract data from active element passed to component using props.
    const { data } = props.element;
    const settings = get(data, "settings", { className: "" });
    // In case of no value, add empty string as default value
    if (typeof settings.className !== "string") {
        settings.className = "";
    }

    return (
        <Form data={settings} onChange={updateSettings}>
            {({ Bind }) => (
                <Tabs>
                    <Tab label={"CSS class"}>
                        <Grid>
                            <Cell span={5}>
                                {/* Label for input */}
                                <Typography use={"overline"}>CSS class</Typography>
                            </Cell>
                            <Cell span={7}>
                                <InputContainer width={"auto"} margin={0}>
                                    {/* The actual input component */}
                                    <Bind name={"className"} validators={validateClassName}>
                                        <Input />
                                    </Bind>
                                </InputContainer>
                            </Cell>
                        </Grid>
                    </Tab>
                </Tabs>
            )}
        </Form>
    );
};

const mapStateToProps = state => ({ element: getActiveElement(state) });
const mapDispatchToProps = { updateElement };

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(Settings);
```

With these changes in place, our CSS class plugin will allow us to add a class name to every page element.

## Conclusion

Congratulations! 🎉

We've successfully created a simple element settings plugin, which can be use to add `CSS class` to every page element in our Page Builder app.

Plugins are one of the core feature of Webiny. The whole Webiny architecture is based on it.
The plugin system is very simple, yet powerful, and allows you to easily add new functionality.

I hope you enjoyed the guide. If you want to learn more about Webiny plugins please checkout our [Webiny Plugins](https://www.youtube.com/watch?v=4qcDLzu8kVM) video on our [Youtube channel](https://www.youtube.com/webiny) where we post a lot of new content every week.

Are you interested in building your own plugin? You can easily add custom elements following the [plugin crash course](/docs/deep-dive/plugins-crash-course).
