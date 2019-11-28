---
id: menus
title: Navigation menus
sidebar_label: Navigation menus
---

Webiny features a module that allows you to build navigational menus.

![Webiny - Theme Menu](/img/theme-development/webiny-theme-menu.png)

Each menu has a `Name`, `Slug`, `Description` and menu items.

To render a menu on your site, you need to do that as part of your theme implementation. Webiny exposes a `Menu` component that is part of `@webiny/app-page-builder` library. Using that component you can retrieve any menu that's defined in your system and then render it using a provided component.

A simple example would look like this:

```js
import * as React from "react";
import { Menu } from "@webiny/app-page-builder/render/components";
import MenuRenderComponent from "./MenuRenderComponent";

class MyHeaderMenu extends React.Component {
  render() {
    return <Menu slug={"main-menu"} component={MenuRenderComponent} />;
  }
}
```

The above code retrieves the requested menu using the `slug` prop and then renders the menu using the `MenuRenderComponent` component.

A sample implementation of `MenuRenderComponent` would look something like so:

```js
import React from "react";
import { Link } from "react-router-dom";

function getLink({ url, title }) {
  if (url.startsWith("/")) {
    return <Link to={url}>{title}</Link>;
  }

  return <a href={url}>{title}</a>;
}

const DefaultMenu = ({ data }: Object) => {
  if (!data) {
    return null;
  }

  return (
    <ul>
      {data.items.map((item, index) => {
        if (Array.isArray(item.children)) {
          return (
            <li key={item.id + index}>
              {item.title}
              <ul>
                {item.children.map((item, index) => {
                  return <li key={item.id + index}>{getLink(item)}</li>;
                })}
              </ul>
            </li>
          );
        }

        return <li key={item.id + index}>{getLink(item)}</li>;
      })}
    </ul>
  );
};

export default DefaultMenu;
```

You might notice a small optimization inside the `getLink` function. The function uses the `Link` component from `react-router-dom` library to handle the clicks on internal links. If the link is not an internal link than a standard `anchor` element is used.
