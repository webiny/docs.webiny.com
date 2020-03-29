---
id: header
title: Header Elements
sidebar_label: Header Elements
---

One of the main sections of the Admin app is the Header, which is located on the top of the screen. By default, it contains a few header elements, for example Logo, Search bar and Settings.

![Header example](/img/webiny-apps/admin/development/header/header-1.png)

You can easily add your own header element by registering a new `header-left`, `header-middle` or `header-right` plugin:

```javascript
{
    type: "header-left",
    name: "header-logo",
    render() {
        return <Logo />;
    }
};
```

```javascript
{
    type: "header-middle",
    name: "global-search",
    render() {
        return <SearchBar />;
    }
};
```

```javascript
{
    type: "header-right",
    name: "header-user-menu",
    render() {
      return <UserMenu />;
    }
};
```

> If you are not already familiar with how plugins work, we recommend you take a look at the [Plugins Crash Course](/docs/developer-tutorials/plugins-crash-course).

The key property of the plugin is the `render` property, which represents a function that returns one or more React components which will render the header element.

Lets add a custom component to the `header-right` element of the header elements plugin

```javascript
{
  type: "header-right",
  name: "header-logout-button",
  render() {
    return <LogoutButton />;
  }
};
```

After registering the above plugin, the following element should be added in the right side of the header:

![header-right Registration](/img/webiny-apps/admin/development/header/header-2.png)
