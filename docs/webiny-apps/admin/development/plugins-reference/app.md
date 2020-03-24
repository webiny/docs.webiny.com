---
id: app
title: App Plugins Reference
sidebar_label: App
---

# Summary

<!-- uncomment this
[`header-left`](/docs/webiny-apps/admin/development/plugins-reference/app#header-left)

[`header-middle`](/docs/webiny-apps/admin/development/plugins-reference/app#header-middle)

[`header-right`](/docs/webiny-apps/admin/development/plugins-reference/app#header-right)
-->

[`menu`](/docs/webiny-apps/admin/development/plugins-reference/app#menu)

[`route`](/docs/webiny-apps/admin/development/plugins-reference/app#route)

---

<!-- --------------------------------- header-left plugin --------------------------------- -->

<!-- uncomment this
### [`header-left`](/docs/webiny-apps/admin/development/plugins-reference/app#header-left)

#### Summary

#### Type

```ts
...
```

#### Example

```ts
...
```
-->

<!-- --------------------------------- header-middle plugin --------------------------------- -->

<!-- uncomment this
### [`header-middle`](/docs/webiny-apps/admin/development/plugins-reference/app#header-middle)

#### Summary

#### Type

```ts
...
```

#### Example

```ts
...
```
-->

<!-- --------------------------------- header-right plugin --------------------------------- -->

<!-- uncomment this
### [`header-right`](/docs/webiny-apps/admin/development/plugins-reference/app#header-right)

#### Summary

#### Type

```ts
...
```

#### Example

```ts
...
```
-->

<!-- --------------------------------- menu plugin --------------------------------- -->

### [`menu`](/docs/webiny-apps/admin/development/plugins-reference/app#menu)

#### Summary

Enables adding custom menu sections and items in the main menu, located on the left side of the screen.

![Scopes Multi Autocomplete](/img/webiny-apps/admin/development/plugins-reference/app/menu-1.png)

#### Type

```ts
type MenuPlugin = Plugin & {
    type: "menu";
    render(props: {
        Menu: typeof Menu;
        Section: typeof Section;
        Item: typeof Item;
    }): React.ReactNode;
    order?: number;
};
```

#### Example

```ts
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

<!-- --------------------------------- route plugin --------------------------------- -->

### [`route`](/docs/webiny-apps/admin/development/plugins-reference/app#route)

#### Summary

Enables registering new routes on which you can render your own views.

#### Type

```ts
type RoutePlugin = Plugin & {
  type: "route";
  route: React.ReactElement;
};
```

#### Example

```ts
// Import the Route component from the "@webiny/react-router" package.
import { Route } from "@webiny/react-router";
   
(...)

{
  type: "route",
  name: "route-shop",
  route: (
    <Route
      exact
      path="/shop/products/:id"
      render={({ location }) => <h1>My new "/shop/products" route.</h1>}
    />
  )
}
```

> You can check the [`@webiny/react-router`](https://github.com/webiny/webiny-js/tree/master/packages/react-router) for more information on the `Route` component.  
