---
id: adding-your-plugin
title: Adding Your Plugin
sidebar_label: Adding Your Plugin
---

Webiny has a [repository of plugins](https://www.webiny.com/plugins) that anyone can contribute to. Plugins are what Webiny is made of and they allow you to add new functionality to your Webiny CMS. 

In this article you'll find the steps how to add a new plugin to our registry so that other community members can use it and install it on their own sites.

## Adding your plugin

To add your plugin all you need to do is publish the plugin on NPM following a certain set of simple rules.

1. [Name your plugin correctly](#naming-your-plugin)
2. [Include the required keywords](#packagejson-keywords)
3. [Set a plugin description](#packagejson-description)
4. [Plugin README.md notes](#plugin-readmemd-notes)

> Once your plugin is published it might be a few minutes before it's visible in the plugin repolistory.

### Naming your plugin

As explained in the [Development Principles](get-started/development-principles.md) section Webiny has two types of plugins. A React plugin and a GraphQL plugin. 

The NPM name of your plugin should be `webiny-app-{app-name}-{plugin-npm-name}` for React plugins and `webiny-api-{app-name}-{plugin-npm-name}` for GraphQL plugins. 

As an example let's say you've developed a Google Maps React plugin for Webiny Page Builder. Your plugin name should be something like this: `webiny-app-page-builder-google-maps`.

> In case your plugin has both a React part and an API part, make sure you release them as 2 separate NPM packages following the above naming rules. This is to better decouple dependencies as somebody may only need the API plugin and not the React plugin and vice versa.

### `package.json` keywords
The `package.json` file should contain relevant keywords so users can find it. Please make sure that you always include `webiny` and `webiny-plugin` on the list, otherwise our systems won't list the plugin in the repository.

Next to the above keywords, if the plugin is for one of the Webiny apps, include the app name as a keyword. For example: `webiny-page-builder` or `webiny-file-manager` ... 

As an example, back to our Google Maps plugin, you might use the following keywords:
```json
// package.json
"keywords": [
  "webiny",
  "webiny-plugin",
  "webiny-app-page-builder",
  "google-maps",
  "maps"
]
```

### `package.json` description
To make it easier for people to understand what your plugin is about, make sure you include a relevant description inside your package.json file. 

```json
// package.json
{
  "name": "webiny-app-page-builder-google-maps",
  "description": "Google Maps widget for Webiny Page Builder."
}
```

### Plugin README.md notes

When someone click on your plugin name in the plugin repository, we redirect him to your NPM page. 
The NPM should as a minimum contain instructions how to install and configure your plugin. 
