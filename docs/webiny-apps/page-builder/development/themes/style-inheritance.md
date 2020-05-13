---
id: style-inheritance
title: Page Builder Theme - Style Inheritance
sidebar_label: Style Inheritance
---

Because every Webiny app has its own theme, therefore its own stylesheets, you might ask yourself how can you inherit some of the style information from other apps, like colors, font names and others. 

The best approach is to use CSS variables. The default Page Builder theme registers several CSS variables into the `body` scope which you can use inside the stylesheets of your own application or a plugin, instead of "hardcoding" their values.

Say you are building a new plugin that will render inside a Page Builder layout. You want that plugin to have the same primary color and font-name as whatever it's defined inside the Page Builder theme. You can view the currently defined Page Builder CSS variables inside [`variable.scss`](https://github.com/webiny/webiny-js/blob/master/packages/app-page-builder-theme/src/styles/variables.scss) file.

In your application you would just use those variables via the `var` keyword. It's also advisable to use a fallback value, to be on the safe side.

```scss
// my-plugin-styles.scss
.webiny-my-plugin{
    font-family: var(--webiny-theme-typography-primary-font-family, "IBM Plex Sans", sans-serif);
    color: var(--webiny-theme-color-primary, #e8663b);
}
```

A good example of this approach can be found inside the `app-plugin-security-cognito-theme` package, which is the theme for the `app-plugin-security-cognito` plugin. Have a look at its [stylesheet](https://github.com/webiny/webiny-js/blob/master/packages/app-plugin-security-cognito-theme/src/site/styles.scss).
