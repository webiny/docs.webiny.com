---
id: new-theme-overview
title: Webiny Theme Tutorial Overview
sidebar_label: Overview
---

Building a new theme for Webiny is a simple task. Webiny doesn't use a template engine, as one is not required due to the fact that most of the heavy lifting is done directly by the visual page builder.

By default Webiny comes with a demo theme, which you can explore on our GitHub: https://github.com/Webiny/webiny-js/tree/master/packages/demo-theme

## Structure

The default theme structure is the following:

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

Files in the root directory, like `.babelrc.js`, `index.js` and `package.json` don't do anything special, and can just be copy pasted to your new theme. You can also modify the files to fit your need. For example you can add a new `npm` dependency if required or tweak the babel build config, but in most cases the default setup is good enough.

All the theme definition resides inside the `src` folder. The only system requirement for a theme is that the `src/index.js` exists, all other folders are optional and can be customized.

## Theme definition

The theme definition sits inside the before mentioned `src/index.js` file. That file has several sections which are as following:

```json
{
    layouts: [
        // defines a list of layouts
    ],
    fonts: {
        // defines font faces
    },
    colors: {
        // defines list of default colors
    },
    components: {
        // defines additional components
    },
    elements: {
        // defines element settings
    },
    styles: {
        // defines typography styles
    }
}
```

### Layouts

Layouts are linked to page categories. When you create a page category, say "Blog", you need to select a layout inside which that content will render. That list where you select your layout, the options are pulled from this theme definition section.

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

Each layout has the following attributes:

- `name` - internal identifier for that particular layout
- `title` - human readable name of that identifier
- `component` - React component responsible for rendering that layout

### Fonts

By default Webiny comes with a support for Google Fonts. If you define a list of font family inside the `fonts` section, Webiny will automatically add the required stylesheets to pull those fonts from Google Fonts.

This is an example how to define the fonts:

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

Optionally you can upload your custom fonts as part of your theme and just reference them directly inside your CSS.