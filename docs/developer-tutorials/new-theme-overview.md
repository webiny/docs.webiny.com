---
id: new-theme-overview
title: Webiny Theme Tutorial Overview
sidebar_label: Overview
---

Building a new theme for Webiny is a simple task. Webiny doesn't use a template engine, as one is not required due to the fact that most of the heavy lifting is done directly by the visual page builder.

By default Webiny comes with a demo theme, which you can explore on our GitHub: https://github.com/Webiny/webiny-js/tree/master/packages/demo-theme

## Structure

The default theme structure looks like this:

```plaintext
.
├── /src
|   └── /components
|   └── /layouts
|   └── /style
|   └── index.js
├── .babelrc.js
├── index.js
└── package.json
```

Files in the root directory, like `.babelrc.js`, `index.js` and `package.json` don't do anything special, and can just be copied to a new theme.
You can also modify the files to fit your needs. For example you can add a new `npm` dependency if required, or tweak the babel build config, but in most cases the default setup is good enough.

The entire theme definition resides inside the `src` folder. The only system requirement for a theme is that the `src/index.js` exists, all other files in the src folder are optional.

## Theme definition

The theme definition sits inside the aforementioned `src/index.js` file. That file has several sections:

```js
{
    layouts: [
        // defines a list of layouts
    ],
    fonts: {
        // defines font faces
    },
    colors: {
        // defines a list of default colors
    },
    elements: {
        // defines element settings
    },
    typography: {
        // defines typography styles
    }
}
```

### Layouts

Layouts are linked to page categories. When you create a page category, say "Blog", you need to select a layout inside which that content will render.
The list where you select your layout pulls the entries from this theme section.

Here is an example of how to define a layout:

```json
{
    layouts: [
        {
            name: "static",
            title: "Static page",
            component: StaticLayout
        },
        {
            name: "blog",
            title: "Blog",
            component: BlogLayout
        }
    ],
    //...
}
```

![Webiny - Theme Layout](/img/developer-tutorials/theme-overview-layout.png)

Each layout has the following attributes:

- `name` - internal identifier for that particular layout
- `title` - human readable name of that identifier
- `component` - React component responsible for rendering that layout

> **Note:** You will need to import the React components on top of the `src/index.js` file for in order to associate them with the layout. In case of the demo-theme, checkout lines 4 and 5:
https://github.com/Webiny/webiny-js/blob/master/packages/demo-theme/src/index.js#L3-L4

### Fonts

By default Webiny comes with a support for [Google Fonts](https://fonts.google.com/). If you define a list of fonts inside this section, Webiny will automatically add the required stylesheets to pull those fonts from Google Fonts.

This is an example of how to define the fonts:

```json
{
    google: {
        families: [
            "IBM Plex Sans:400,500,700",
            "Lato:400,500,700"
        ]
    }
    //...
}
```

> **Note:** Optionally, you can upload your custom fonts as part of your theme and just reference them directly inside your CSS.

### Colors

By default, the list of colors defined in the theme appears in the page builder, and any other place there is a color picker.
Colors are defined in the `color` section. As a general practice, don't define HEX or RGB colors directly, but reference them as a CSS variable, like the following example:

```json
{
    colors: {
        primary: "var(--webiny-cms-theme-primary)",
        secondary: "var(--webiny-cms-theme-secondary)",
        background: "var(--webiny-cms-theme-background)",
        surface: "var(--webiny-cms-theme-surface)",
        textPrimary: "var(--webiny-cms-theme-text-primary)"
    }
}
```

![Webiny - Theme Colors](/img/developer-tutorials/theme-overview-color.png)


> **Note:** The reason why this is the preferred way is that when you select a color in page builder for a certain element property, be that background-color, border color or shadow, the value of the color is stored in the database. In case of CSS variables, the CSS variable is stored, meaning that if you later decide to change the value of that color, you just change it in your CSS file, and all the existing content will pick up the new value - which won't be the case when we store the HEX or RGB value.

### Elements

`elements` is the section that defines certain attributes for the page elements that you can insert into your pages.
Those are the elements that reside in the menu on the left side in the page builder.
Depending on the element, different attributes are available.

```json
{
    elements: {
        button: {
            types: [
                { className: "", label: "Default" },
                { className: "primary", label: "Primary" },
                { className: "secondary", label: "Secondary" }
            ]
        }
    },
}
```

#### Button `button`

In case of a `button` element, the `types` attribute contains available button types.
Each type references a specific class name that will be added to the button component when that type is selected.

![Webiny - Theme Button](/img/developer-tutorials/theme-overview-button.png)

> **Note:** By default Webiny uses [BEM naming](http://getbem.com/introduction/).
The default button class is `webiny-cms-element-button`, so when the user selects the "primary" button type,
it will add a modifier of "primary" to the base class, meaning the resulting class name will be "webiny-cms-element-button--primary".


### Typography

When editing any text inside the page builder, you can select a different style for your text.

![Webiny - Theme Typography](/img/developer-tutorials/theme-overview-typography.png)

The list of available styles is defined under the `typography` key inside your theme definition file.

```json
{
    typography: {
        h6: {
            label: "Heading 6",
            component: "h6",
            className: "webiny-cms-typography-h6"
        },
        h6White: {
            label: "Heading 6 (white)",
            component: "h6",
            className: "webiny-cms-typography-h6 webiny-cms-typography--white"
        },
        paragraph: {
            label: "Paragraph",
            component: "p",
            className: "webiny-cms-typography-body"
        }
    }
}
```

You can have as many styles as you would like. Each style has a root key, for example like `h6White`. It's important that the root key is unique in your list of availably styles. Then each key has an object that must have the following three attributes:

- `label` - defines the human readable name of that style
- `component` - which HTML component will be used to render your text when you select this style
- `className` - the name of the CSS class that will be attached to that HTML component when this style is selected

## Stylesheets

If you've gone through the theme definition file you've probably noticed that it's mostly just a list of class names and few references to React components. We didn't talk about any stylesheets so far. Working with stylesheets in Webiny pretty straight forward.

To import a stylesheet into your theme, you just use a standard JavaScript `import` call.

```js
import "./style/theme.scss";
```

> **Note:** You can see the same thing at the in the demo-theme:
https://github.com/Webiny/webiny-js/blob/development/packages/demo-theme/src/index.js#L2


This basically imports a file called `theme.scss` from the `style` folder into your website. The file referenced is relative to the `index.js` theme definition file.

The `theme.scss` is a file that can have any other name, as well as you can import multiple files if required. In the case of the demo-theme, the `theme.scss` file is the root stylesheet which then imports all other stylesheets.

We encourage you the explore the structure of the `styles` folder in the demo-theme, to get a sense of how it's structured.

Almost every component in Webiny has it's own class name. You can easily explore those by viewing the source of your Webiny page. The HTML generated by the page builder is human readable. All classes starting with a prefix of `webiny-` can be referenced in your stylesheets. This way you have the full control of how the elements will look like visually.
