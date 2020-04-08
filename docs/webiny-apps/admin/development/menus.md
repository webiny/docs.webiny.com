---
id: menus
title: Menus
sidebar_label: Menus
---

One of the main sections of the Admin app is the main menu, which is located on the left side of the screen. By default, it contains a few menu items, for example Security and Settings.

![Menu example](/img/webiny-apps/admin/development/menus/menu-example.png)

You can easily add your own menu sections and items by registering a new `menu` plugin:

```javascript
{
  type: "menu",
  name: "menu-shop",
  render({ Menu, Section, Item }) {
    return (
      <Menu name="shop" label={"Shop"}>
        <Section label={"Products"}>
          <Item label={"Products"} path="/shop/products" />
          <Item label={"Manage stock"} path="/shop/stock" />
        </Section>
        <Section label={"Customers"}>
          <Item label={"Customers"} path="/shop/customers" />
          <Item label={"Discounts"} path="/shop/discounts" />
        </Section>
      </Menu>
    );
  }
}
```
> If you are not already familiar with how plugins work, we recommend you take a look at the [Plugins Crash Course](/docs/developer-tutorials/plugins-crash-course).

The key property of the plugin is the `render` property, which represents a function that returns one or more React components which will render the menu. 

The provided `Menu`, `Section`, and `Item` components will probably cover most of your needs, but note that you can still use custom ones if needed.  

> You can use the `path` prop on the `Item` component in order to create links. Note that in order for them to actually work, you will also need to [create routes](/docs/webiny-apps/admin/admin/routes).  

After registering the above plugin, the following section should be added in the main menu: 

![Menu Registration](/img/webiny-apps/admin/development/menus/new-menu-example.png)

### Adding Security
Sometimes you want users with a specific role or scope to be able to access some of the menu items you are creating. We can do this by using our [SecureRoute](/docs/webiny-apps/security/development/App/Components/secure-route) or [SecureView](/docs/webiny-apps/security/development/App/Components/secure-view) components.

```js
import { SecureRoute } from "@webiny/app-security/components";

( ... )

{
    type: "menu",
    name: "menu-shop",
    render({ Menu, Section, Item }) {
        return (
            <Menu name="shop" label={"Shop"}>
                <Section label={"Products"}>
                    <Item label={"Products"} path="/shop/products" />
                    <Item label={"Manage stock"} path="/shop/stock" />
                </Section>
                <Section label={"Customers"}>
                    <Item label={"Customers"} path="/shop/customers" />
                    <Item label={"Discounts"} path="/shop/discounts" />
                </Section>
                <SecureRoute scopes={["pb:pages:crud"]}>
                    <Section label={"Owner Only Functions"}>
                        <Item label={"Monitor Complaints"} path="/shop/complaints" />
                    </Section>
                </SecureRoute>
            </Menu>
        );
    }
};
```

And now only a user with those credentials will see the new `Section` appear:

![Secure Menu Section](/img/webiny-apps/security/development/app/components/secure-menu-section.png)
>You can also wrap `Menu` as well as `Item` components in the same way.