---
id: scaffold-node-package
title: Node Package
sidebar_label: Node Package
---

This Scaffolding Plugin generates a `Node Package` similar to [Webiny's **api** packages](https://github.com/webiny/webiny-js/tree/master/packages).

## Contents

- `package.json` file is generated with your plugin's name 
- `tsconfig.json`, `jest.config.js` and `.babel.rc.js` config files automatically added so that you can jump straight to coding your business logic.
- `src/` folder which contains a [plugin factory](https://docs.webiny.com/docs/deep-dive/plugins-crash-course#creating-a-plugin), which exports the sample plugin located in `src/plugins/index.tsx`

## Using it in your project

In order to use your newly scaffolded **api** package in your Webiny project through the **context** object, add it to `webiny.root.js` like this:

```javascript
module.exports = {
    projectName: "webiny-js",
    cli: {
        plugins: [
            require("@webiny/cli-plugin-deploy-components")(),
            require("@webiny/cwp-template-full/hooks/api")(),
            require("@webiny/cwp-template-full/hooks/apps")(),
            require("@webiny/cli-plugin-scaffold"),
            require("@webiny/cli-plugin-scaffold-graphql-service"),
            require("@webiny/cli-plugin-scaffold-lambda"),
            require("@webiny/cli-plugin-scaffold-node-package"),
            // require("[YOUR_PACKAGE'S_NAME]")
        ]
    }
};
```

The scaffolded plugin is [linked](https://classic.yarnpkg.com/en/docs/cli/link/) to the other packages in the repository automatically.

You only need to add it to the list of exported [plugins](https://docs.webiny.com/docs/deep-dive/plugins-crash-course) like in the example code above. Of course, rename `[YOUR_PACKAGE'S_NAME]` accordingly and uncomment the code. 

## Upgrading your Node package

By default, the scaffolded Node package exports a single plugin which provides an utility function:

```javascript
import React from "react";

export default {
    name: "utility-plugins-remove-vowels",
    type: "utility-plugins",
    removeVowels: str => {
        return str.replace(/[aeiouAEIOU]/g, "");
    }
};
```

With our scaffolding tool, you are ready to add more plugins with more complex logic attached to them. 