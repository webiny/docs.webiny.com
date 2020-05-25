---
id: app
title: App Plugins Reference
sidebar_label: App
---

# Summary


[`admin-header-left`](/docs/webiny-apps/admin/development/plugins-reference/app#admin-header-left)

[`admin-header-middle`](/docs/webiny-apps/admin/development/plugins-reference/app#admin-header-middle)

[`admin-header-right`](/docs/webiny-apps/admin/development/plugins-reference/app#admin-header-right)

[`admin-menu`](/docs/webiny-apps/admin/development/plugins-reference/app#admin-menu)

[`route`](/docs/webiny-apps/admin/development/plugins-reference/app#route)

---

<!-- --------------------------------- admin-header-left plugin --------------------------------- -->

### [`admin-header-left`](/docs/webiny-apps/admin/development/plugins-reference/app#admin-header-left)

#### Summary

Enables adding custom header elements to the left side of the top bar.

![Scopes Multi Autocomplete](/img/webiny-apps/admin/development/plugins-reference/app/header-left.png)

#### Type

```ts
type AdminHeaderLeftPlugin = Plugin & {
    type: "admin-header-left";
    render(params: RenderParams): React.ReactNode;
};
```

#### Example

```ts
{
    type: "admin-header-left",
    name: "admin-header-logo",
    render() {
        return <Logo />;
    }
};
```

<!-- --------------------------------- admin-header-middle plugin --------------------------------- -->


### [`admin-header-middle`](/docs/webiny-apps/admin/development/plugins-reference/app#admin-header-middle)

#### Summary

Enables adding custom header elements to the middle of the top bar.

![Scopes Multi Autocomplete](/img/webiny-apps/admin/development/plugins-reference/app/header-middle.png)

#### Type

```ts
type AdminHeaderMiddlePlugin = Plugin & {
    type: "admin-header-middle";
    render(params: RenderParams): React.ReactNode;
};
```

#### Example

```ts
{
    type: "admin-header-middle",
    name: "admin-global-search",
    render() {
        return <SearchBar />;
    }
};
```

<!-- --------------------------------- admin-header-right plugin --------------------------------- -->


### [`admin-header-right`](/docs/webiny-apps/admin/development/plugins-reference/app#admin-header-right)

#### Summary

Enables adding custom header elements to the right side of the top bar.

![Scopes Multi Autocomplete](/img/webiny-apps/admin/development/plugins-reference/app/header-right.png)

#### Type

```ts
type AdminHeaderRightPlugin = Plugin & {
    type: "admin-header-right";
    render(params: RenderParams): React.ReactNode;
};
```

#### Example

```ts
{
    type: "admin-header-right",
    name: "header-user-menu",
    render() {
        return <UserMenu />;
    }
};
```

<!-- --------------------------------- admin-menu plugin --------------------------------- -->

### [`admin-menu`](/docs/webiny-apps/admin/development/plugins-reference/app#admin-menu)

#### Summary

Enables adding custom menu sections and items in the main menu, located on the left side of the screen.

![Scopes Multi Autocomplete](/img/webiny-apps/admin/development/plugins-reference/app/menu-1.png)

#### Type

```ts
type AdminMenuPlugin = Plugin & {
    type: "admin-menu";
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
  type: "admin-menu",
  name: "admin-menu-shop",
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
