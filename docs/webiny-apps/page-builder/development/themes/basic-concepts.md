---
id: basic-concepts
title: Page Builder Theme - Basic Concepts
sidebar_label: Basic concepts
---

There are a few main things you need to understand about Webiny themes. This article will cover these basics concepts.

## There isn't a single theme

Webiny doesn't have a concept of a "global" theme that is shared across all applications. Each application, or in some cases even plugins, can register their own theme. 

With this approach each time you install a new app or a plugin, it automatically comes with all the visuals and layouts you need to start using it immediately. 

You have to understand that Webiny is not your basic blogging platform, Webiny is a CMS upon which powerful serverless applications can be built. Those applications might have complex theme requirements. So instead of you going through dozens of files and pasting numerous code snippets in your existing theme, just to get the new app working, this one-theme-per-app concept removes that complexity since every apps automatically ships with its own theme package.

As a benefit, each time you update Webiny, or one of its apps or plugins, you don't need to go through a nerve-racking, nail-biting process of "hoping" that you site will work after the update. Because each app update automatically updates the theme just for that app you don't need to worry that there will be incompatibilities between apps on the theme side which will cause the site to break.


## Registering a theme

Every application, such as Page Builder, has its own theme that comes as a separate NPM package. Here is the link to the Page Builder theme package:

https://github.com/webiny/webiny-js/tree/master/packages/app-page-builder-theme

Each theme in Webiny is also a plugin in itself. This means you register it as any other plugin in your `site` app. If you open `apps/site/src/plugins/index.ts`, in your Webiny project, you will notice that we `import` the `pageBuilderTheme` from its own package, and then register it as a plugin. 

```js
import pageBuilderTheme from "@webiny/app-page-builder-theme";

const plugins = [
    //..
    pageBuilderTheme(),
    //..
];

export default plugins;
```

That's all it takes to register a theme. The same principle applies to other apps, such as Form Builder. 

Creating and registering a new theme is just a question of creating a new packages and replacing the existing theme plugin with your own. We'll cover in greater detail how this plugin should look like and what it should contain. 
