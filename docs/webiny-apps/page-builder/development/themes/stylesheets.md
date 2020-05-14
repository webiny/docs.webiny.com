---
id: stylesheets
title: Page Builder Theme - Stylesheets
sidebar_label: Stylesheets
---

If you've gone through the default theme configuration file you've probably noticed that it contains a list of class names and references to React components. If you want to configure stylesheets in Webiny, it is a straightforward process.

Each theme can expose one or more stylesheets for you to import. This is usually defined in the theme documentation. When talking about Webiny Page Builder, it exposes a single file under the following path `~@webiny/app-page-builder-theme/styles.scss`. 

After using `create-webiny-project` to start a project, this file is indirectly referenced in the default installation of the `site` app. You can see `~@webiny/app-template-site/styles.scss` if you open `apps/site/src/App.scss` which in turn references `~@webiny/app-page-builder-theme/styles.scss`.

Through this `App.scss` file the `site` app controls which styles are imported and from where. You can also control the order of the import, which is important when you want to overwrite styles. Finally, you can also add any custom style to this file or import stylesheets from 3rd party libraries. 