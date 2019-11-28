---
id: theme-configuration
title: Overview
sidebar_label: Overview
---

In this section we'll dive deeper into the theme configuration file, the sections inside, and what are their roles. 

> It's best to follow this article by viewing the default theme configuration file found under `my-project/packages/theme/src/index.js` or [here on github](https://github.com/webiny/webiny-js/blob/master/examples/packages/theme/src/index.js).

## Configuration overview

The configuration file is structured in several sections like so:

``` js
{
    layouts: [
        // defines a list of layouts for webiny page builder
    ],
    forms: {
        // layouts for webiny form builder (optional)
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

In the next set of pages, we'll explore each of those sections in a bit more detail. 