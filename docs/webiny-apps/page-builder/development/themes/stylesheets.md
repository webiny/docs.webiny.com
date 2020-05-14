---
id: stylesheets
title: Page Builder Theme - Stylesheets
sidebar_label: Stylesheets
---

If you've gone through the default theme configuration file you've probably noticed that it's mostly just a list of class names and few references to React components. We didn't talk about any stylesheets so far. Working with stylesheets in Webiny is pretty straight forward.

Each theme can expose one or more stylesheets for you to import. This is usually defined in the theme documentation. When talking about Webiny Page Builder, it exposes a single file under the following path `~@webiny/app-page-builder-theme/src/styles.scss`. 

This file is already imported in the default installation of the `site` app. You can view it if you open `apps/site/src/App.scss`. 

Through this `App.scss` file the `site` app controls which styles are imported and from where. You can also control the order of the import, which is important when you want to overwrite styles. Finally, you can also add any custom style to this file or import stylesheets from 3rd party libraries. 