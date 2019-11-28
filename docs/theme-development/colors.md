---
id: colors
title: Colors
sidebar_label: Colors
---

To ensure a visual consistency between the theme, and users creating content using Page Builder, the colors used throught the side and Page Builder are extracted as variables and presented as presets.

![Webiny - Theme Colors](/img/theme-development/webiny-theme-colors.gif)

## Color definition

Colors are defined in the `color` section. As a general practice, don't define HEX or RGB colors directly, but reference them as a CSS variable, like the following example:

```json
{
  "colors": {
    "primary": "var(--webiny-cms-theme-primary)",
    "secondary": "var(--webiny-cms-theme-secondary)",
    "background": "var(--webiny-cms-theme-background)",
    "surface": "var(--webiny-cms-theme-surface)",
    "textPrimary": "var(--webiny-cms-theme-text-primary)"
  }
}
```

> **Note:** The reason why defining them as CSS variable is important is that when you select a color in page builder for a certain element property, be that background-color, border color or shadow, the value of the color is stored in the database. In case of CSS variables, the CSS variable is stored, meaning that if you later decide to change the value of that color, you just change it in your CSS file, and all the existing content will pick up the new value - which won't be the case when if we storred HEX or RGB values.

You can add as many colors as you want, and name them whatever best fits your requirements. Make sure to have the actual color definitions somewhere inside your theme stylesheet.

We also recommend that all the color variables have a prefix `--webiny-cms-theme-{name}`. The reason for this is that your site theme and its stylesheets are imported into the Page Builder inside the admin interface. Using this prefix we ensure that there are no clashes between the style names of your site and Webiny administration.

The reason why we import the site theme into the administration is that inside the Page Builder we want to show you how your page will actually look like when a user is browsing your site, and that is only possible if we have the same stylesheets as your site.

## SaaS variables

Webiny themes use Sass variables, and all the colors are also mapped to Sass variables for ease of use. If you open the [variables.scss](https://github.com/webiny/webiny-js/blob/master/examples/packages/theme/src/style/variables.scss) file you'll find the default definitions inside.
