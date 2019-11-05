---
id: introduction
title: Webiny Plugins
sidebar_label: Introduction
---

Webiny is designed as a system of plugins. Existing plugins can be overwritten and new ones can be created to expand the functionality. 

Under this section, you can find plugins created by our community members. 

## Adding your plugin
We welcome new contributors. 
If you wish to contribute a plugin, open a PR.  The instructions below include all the steps you need to take:

1. Create a plugin and publish it on NPM - See [NPM requirements](#npm-requirements) below.
2. Fork [this repo](https://github.com/webiny/docs.webiny.com).
3. In your fork create a new page for your plugin. Place it inside `/docs/plugins/` folder and name it after your NPM name. Make sure to the `.md` at the end.
4. The page should follow the [plugin page instructions](#plugin-page-instructions) below. 
5. Submit the page as a PR to the main repo. 

### NPM requirements

#### Naming your plugin
The NPM name of your plugin should be `webiny-{app-name}-{plugin-npm-name}`. 

As an example let's say you developed a Google Maps plugin for Webiny Page Builder. Your plugin name should be something like this: `webiny-page-builder-google-maps`.

#### `package.json` keywords
The `package.json` file should contain relevant keywords so interested users can find it. Please make sure that you always include `webiny` and `webiny-plugin` on the list. 

As an example, back to our Google Maps plugin, you might use the following keywords:
```json
// package.json
"keywords": [
  "webiny",
  "webiny-plugin",
  "webiny-page-builder",
  "google-maps",
  "maps"
]
```

### Plugin page instructions

The top of your plugin `.md `file should start like so:

```md
---
id: webiny-plugin-{plugin-npm-name}
title: {plugin-npm-name}
sidebar_label: {plugin-npm-name}
---
```

Make sure to replace all the values inside curly brackets `{}`.

Other than that, the rest of the content is up to you. Please make sure you at least have a short description of your plugin, install instructions and describe how to use the plugin.