---
id: elements
title: Page Builder Theme - Elements
sidebar_label: Elements
---

Another way Webiny Page Builder ensures that visual styles follow your design system is by having certain style presets for some of the elements, like the Button element.

![Webiny - Theme Layout](/img/theme-development/webiny-theme-elements.gif)

`elements` is the section that defines certain attributes for Page Builder elements that you can insert into your page content.

```json
{
  "elements": {
    "button": {
      "types": [
        { "className": "", "label": "Default" },
        { "className": "primary", "label": "Primary" },
        { "className": "secondary", "label": "Secondary" }
      ]
    }
  }
}
```

The only element that supports this at the moment is the Button element. But the point is that if you create a custom component for Page Builder, you can reference the same mechanism and add this functionality to your custom elements.

The definition takes two keys:

- `className`: Name of the CSS class that will be appended to that element.
- `label`: This is what's shown in the dropdown when a user is selecting a style.

#### Button element

In case of the `button` element, the `types` attribute contains available button types.
Each type references a specific class name that will be added to the button component when that type is selected.

> **Note:** By default Webiny uses [BEM naming](http://getbem.com/introduction/).
> The default button class is `webiny-pb-element-button`, so when the user selects the "primary" button type,
> it will add a modifier of "primary" to the base class, meaning the resulting class name will be "webiny-pb-element-button--primary".
