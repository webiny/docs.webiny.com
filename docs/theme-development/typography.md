---
id: typography
title: Typography
sidebar_label: Typography
---

When editing text inside Webiny Page Builder, you can select a different style for your text.
The editor doesn't allow users to change things like font size and font family, but rather it offers a list of presets the user can select from. This ensures consistency in the visual style of your text across the whole site.

![Webiny - Theme Layout](/img/theme-development/webiny-theme-typography.gif)

The list of available styles that the user will be able to select from is defined under the `typography` key inside your theme definition file.

```js
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

## Importing fonts

Fonts in Webiny are imported via `index.html` inside `my-project/apps/site/public` folder. To change the font, first, modify the import in that file and then change the font references inside the [variables.scss](https://github.com/webiny/webiny-js/blob/master/examples/packages/theme/src/style/variables.scss) file in your theme. This will ensure that all other elements and styles are updated correctly.

> The technical reason why we load the fonts in this way is that index.html is the entry point to your site. If the fonts are not loaded at the entry, the site content will first be displayed with the wrong font, and then your screen will refresh to load the correct font. This approach bypasses that problem.
