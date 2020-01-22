---
id: theme-configuration
title: Overview
sidebar_label: Overview
---

In this section we'll dive deeper into the theme configuration file, the sections inside, and what are their roles. 

> It's best to follow this article by viewing the default Page Builder theme. You can find it [here on github](https://github.com/webiny/webiny-js/blob/master/packages/app-page-builder-theme).

## Configuration overview

The main configuration file is found under the `src/index.ts`. This file exports a list of Page Builder theme plugins, and that's what you later import in your `site` app and then register as a plugin. 

The configuration file is structured in several sections like so:

```ts
[
    // main theme plugin containing the theme definition
    {
        name: "pb-theme-default"            // name of your theme
        type: `pb-theme`                    // plugin type
        theme: {}                           // theme definition
    } as PbThemePlugin,

    // register a layout ... you can register multiple layouts inside a single theme
    {
        name: "pb-page-layout-static"       // name of the page layout
        type: "pb-page-layout",             // plugin type
        layout: {}                          // layout definition
    } as PbPageLayoutPlugin,

    // theme header plugin
    {
        name: "pb-layout-component-header", // name of the header component
        type: "pb-layout-component",        // plugin type
        componentType: "header",            // component type
        component: Header                   // react component to render the header
    } as PbPageLayoutComponentPlugin,

    // theme footer plugin
    {
        name: "pb-layout-component-footer", // name of the footer component
        type: "pb-layout-component",        // plugin type
        componentType: "footer",            // component type
        component: Footer                   // react component to render the footer
    } as PbPageLayoutComponentPlugin,

    // theme loader plugin
    {
        name: "pb-layout-component-loader", // name of the loader component
        type: "pb-layout-component",        // plugin type
        componentType: "loader",            // component type
        component: CircularSpinner          // react component to render the loader
    } as PbPageLayoutComponentPlugin
]
```

As it's illustrated, we export a plugin that holds a theme definition, then a plugin for a layout to render static pages, and finally several layout components to render the main theme elements such as header and footer.

The reason why we don't "lump" all these elements into a single plugin is because this way you can overwrite just a specific piece of a particular theme with your own plugin, without the need to copy or replace the whole theme. 

For example, if you wanted to replace the header with your custom component, you could to this:

```js
// apps/site/src/plugins/index.ts
import pageBuilderTheme from "@webiny/app-page-builder-theme";
import CustomHeader from '../my-header';
const plugins = [
    //..
    pageBuilderTheme({
        name: "pb-layout-component-header",
        type: "pb-layout-component",
        componentType: "header",
        component: CustomHeader
    }),
    //..
];
export default plugins;
```

## `pb-theme` plugin
This is the plugin that registers the actual theme, together with several other elements.
In full a `pb-theme` plugin contains the following elements:
```ts
{
        name: "pb-theme-default",
        type: "pb-theme",
        theme: {
            colors: {
                primary: "var(--webiny-theme-color-primary)",
                secondary: "var(--webiny-theme-color-secondary)",
                //...
            },
            elements: {
                button: {
                    types: [
                        { className: "", label: "Default" },
                        { className: "primary", label: "Primary" },
                        //..
                    ]
                }
            },
            typography: {
                h1: {
                    label: "Heading 1",
                    component: "h1",
                    className: "webiny-pb-typography-h1"
                },
                h2: {
                    label: "Heading 2",
                    component: "h2",
                    className: "webiny-pb-typography-h2"
                },
                //...
            }
        }
    } as PbThemePlugin
```
Learn more about the specific theme elements:
- [colors](/docs/webiny-apps/page-builder/theme-development/colors) 
- [elements](/docs/webiny-apps/page-builder/theme-development/elements) 
- [typography](/docs/webiny-apps/page-builder/theme-development/typography)

## `pb-page-layout` plugin

The layout plugin is used to register layouts. Layouts are used to render the page content. 
Here is an example of how to register a layout:
```ts
import StaticLayout from "./layouts/Static";
//...
{
    name: "pb-page-layout-static",
    type: "pb-page-layout",
    layout: {
        name: "static",
        title: "Static page",
        component: StaticLayout
    }
} as PbPageLayoutPlugin
```

Each layout has the following attributes:

- `name` - internal identifier for that particular layout
- `type` - plugin type, must be set to `pb-page-layout`
- `layout` - an object containing the layout `name`, `title` and a React `component` used to render the layout


To introduce multiple layouts all you need to do is register multiple `pb-page-layout` plugins.
It's also quite easy to register a new layout into the default theme:


```js
// apps/site/src/plugins/index.ts
import pageBuilderTheme from "@webiny/app-page-builder-theme";
import CustomLayout from '../custom-layout';
const plugins = [
    //..
    pageBuilderTheme({
        name: "pb-page-layout-my-custom-layout",
        type: "pb-page-layout",
        layout: {
            name: "my-custom-layout",
            title: "My layout",
            component: CustomLayout
        }
    }),
    //..
];
export default plugins;
```

To learn more about layouts and how to compose one, have a look at the [layouts page](/docs/webiny-apps/page-builder/theme-development/layouts).

## `pb-layout-component` plugin
This plugin is used to register various theme layout components, such as header, footer and a loader component. 

We intentionally decoupled those elements from the theme so you have the option to overwrite only parts of your theme. 

You can view the content of those elements inside the default theme on github. Also to overwrite any of those elements with your own component you just need to register a new plugin under the same name. 

```ts
// apps/site/src/plugins/index.ts
import pageBuilderTheme from "@webiny/app-page-builder-theme";
import CustomFooter from '../my-footer';
const plugins = [
    //..
    pageBuilderTheme({
        name: "pb-layout-component-footer",
        type: "pb-layout-component",
        componentType: "footer",
        component: CustomFooter
    }),
    //..
];
export default plugins;
```