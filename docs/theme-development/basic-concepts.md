---
id: basic-concepts
title: Basic concepts
sidebar_label: Basic concepts
---

There are a few main things you need to know to understand how Webiny themes work. This article will cover these basics concepts.

## Where is my theme?
The default theme is located inside `my-project/packages/theme`. Each theme has its own `package.json` which you can use to add any 3rd party dependencies to your theme. This includes anything from sliders to things like hamburger menu components and similar. 

> Note that having a theme under that file path is not a requirement. You can place your theme anywhere. This will be clearer once you read the "Setting your theme" section below.

## Theme structure

Looking at your project, the theme is structured as shown below:

```
my-project
├── packages/
│   ├── theme/
│   │   ├── src/
│   │   │   ├── components/
│   │   │   ├── layouts/
│   │   │   ├── style/
│   │   │   └── index.js
│   │   ├── index.js
│   │   └── package.json
```

Besides the mentioned `package.js` file, in the root of your theme you'll find an `index.js` file. This is basically a file that imports the theme configuration. Or the "meat" of your theme. It usually looks like so: 

``` js
import MyTheme from "./src";

export default MyTheme;
```

### Theme configuration

Following the above theme structure, the main theme configuration file is found under `theme/src/index.js`. This file defines all the main aspects of your theme. 

Each section inside has its own set of parameters it can take and what parts of the output it can control. The next article explores these in greater detail. 

It's recommended that you go through the included default theme to get yourself familiarized with the structure. 

> All the other folders inside the `theme/src` folder are optional and your own theme doesn't need to follow the same structure. As long as the `theme/index.js` file imports a valid theme configuration object, you're good to go. 

## Setting a new theme

The `theme` package is actually an internal dependency of the `site` app. The `site` app is found under `my-project/apps/site`.

> If you are not familiar with Webiny project structure. Read [this article](deep-dive/project-structure.md).

If you open `App.js` file found in `site/src` folder, you'll notice that there is a line that imports a theme:
``` js
import myTheme from "theme";
```
Then later inside the same file, that theme is passed as a prop to the `PageBuilderProvider` component:

```jsx
<PageBuilderProvider theme={myTheme} defaults={defaults}>
```

So, to change your theme, you can either update the theme `import`, or you can use the existing theme, and modify the theme configuration file to fit your needs.