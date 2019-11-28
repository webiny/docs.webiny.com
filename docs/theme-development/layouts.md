---
id: layouts
title: Layouts
sidebar_label: Layouts
---

`layouts` are linked to page categories. When you create a page category, say "Blog", you need to select a layout inside which that content will be displayed.
The options available inside the layout dropdown are pulled from the theme configuration `layouts` section.

Each page created inside the "Blog" category, by default, will use that layout. However, inside the page settings, you can overwrite that on a per-page basis if you need to.

![Webiny - Theme Layout](/assets/theme-development/webiny-theme-page-categories.gif)

## Defining a layout

Here is an example of how to define a layout:

```json
{
    layouts: [
        {
            name: "static",
            title: "Static page",
            component: StaticLayout
        },
        {
            name: "blog",
            title: "Blog",
            component: BlogLayout
        }
    ],
    //...
}
```

Each layout has the following attributes:

- `name` - internal identifier for that particular layout
- `title` - human readable name of that identifier
- `component` - React component responsible for rendering that layout

> **Note:** You will need to import the React components on top of the `src/index.js` file for in order to associate them with the layout. In case of the demo-theme, checkout lines 4 and 5:
https://github.com/webiny/webiny-js/blob/master/examples/packages/theme/src/index.js#L3-L4


## Layout internals

The actual React component for the layout looks something like this:

``` js
import * as React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Addons } from "@webiny/app/components";

type Props = {
    children: React.Node
};

const Static = ({ children }: Props) => {
    return (
        <React.Fragment>
            <Addons />
            <Header />
            {children}
            <Footer />
        </React.Fragment>
    );
};

export default Static;
```

The only thing you "technically" need is the `Addons` component. That one is responsible for rendering addons like GTM, cookie policy and similar. The two other components `Header` and `Footer` are fully up to you. In this case they render the basic header navigation and footer for the default theme.

The only prop your layout recieves is the `childern`. This contains the actual content providerd by the Page Builder. This content is automatically loaded for you, based on the current url. All you need to do is place it inside your layout where you want the content to appear. 