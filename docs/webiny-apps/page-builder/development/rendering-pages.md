---
id: rendering-pages
title: Rendering pages
sidebar_label: Rendering pages
---

Pages can be rendered on your website either by using the default plugins, or by using a simple React component (both included in the `@webiny/app-page-builder` package).

Let's see in more detail how and we we can utilize each approach.

## Using default plugins

> If you are not already familiar with how plugins work, we recommend you first take a look at the [Plugins Crash Course](/docs/developer-tutorials/plugins-crash-course) before reading this article.

With a default Webiny project, you get everything set up for you in the `apps/site` app. But if you want to setup your own app and register those plugins manually, you can import them from `@webiny/app-page-builder` package:

```javascript
import { registerPlugins } from "@webiny/plugins";
import pageBuilderPlugins from "@webiny/app-page-builder/site/plugins";

// `pageBuilderPlugins` is a factory, so we need to call it as a function
registerPlugins(pageBuilderPlugins());
```

This file contains a set of plugins that sets up automatic data prefetching and rendering while the user is navigating your website. With that, the included plugins also do the following:

#### Register render plugins for Page Builder elements

When creating pages via the Page Builder, you are using page elements (e.g. Text, Image, Form, ...), which are registered in the system via plugins. In terms of rendering, every element has to have two plugins, one that defines how it's rendered in the actual Page Builder, and the other that defines how it's rendered on the website, which is precisely what is included in this set of plugins.

#### Link preloading

Tracks links that are present on the page being viewed, and fetches the content of those linked pages in advance. By doing so, we populate Apollo Client cache which in turn enables smooth transitions while the user is navigating your website.

#### Populate `<head/>` portion of the page

For SEO purposes, it fetches basic website information like title or default OG image, and populates the `<head/>` portion of the page with it.

> To check out the actual code, click [here](https://github.com/webiny/webiny-js/blob/master/packages/app-page-builder/src/site/plugins/index.tsx).

## Using `Page` React component

The `Page` React component is useful when you want to programmatically include a page, for example, on a custom route. You can even use this component if you want to bring the Page Builder app into your existing React app (that wasn't created with Webiny at all).

The component can be imported like so:

```typescript jsx
import { Page } from "@webiny/app-page-builder/site/components/Page";
```

You can then render any published page by simply passing an adequate set of props to the imported `Page` component, for example:

```jsx
<Page url="/my-awesome-page" />
```

This will automatically fetch the content for the published page that has "/my-awesome-page" set as its URL via the Page Builder.

> More information on publishing pages and page revisions can be found [here](/docs/webiny-apps/page-builder/revisions-and-publishing)

### Full example

The following code shows a simple component in which we utilize the `Page` component:

```jsx
import React from "react";
import { Page } from "@webiny/app-page-builder/site/components/Page";

function MyComponent() {
  return (
    <div>
      <h1>This is my page</h1>
      <div>
        <Page url="/my-awesome-page" />
      </div>
    </div>
  );
}

export default MyComponent;
```

### Manually passing the page data

When you pass the `url` prop to the `Page` component, fetching of data is abstracted from you.

But in some cases, you might want to fetch the page data manually and that's when you can utilize other props.

#### The `data` prop

Consider the following example:

```typescript jsx
import React, { useMemo } from "react";
import { useQuery } from "react-apollo";
import { Page, GET_PUBLISHED_PAGE } from "@webiny/app-page-builder/site/components/Page";
import { getPlugin, getPlugins } from "@webiny/plugins";
import { PbDefaultPagePlugin, PbPageLayoutComponentPlugin } from "@webiny/app-page-builder/types";

function MyComponent() {
  // Get the loader component via plugin (or directly import your own component).
  const Loader = useMemo(() => {
    const plugins = getPlugins<PbPageLayoutComponentPlugin>("pb-layout-component");
    const pl = plugins.find(pl => pl.componentType === "loader");
    return pl ? pl.component : null;
  }, []);

  // Get the default error and not-found pages (or directly import your own component).
  const { DefaultErrorPage, DefaultNotFoundPage } = useMemo(() => {
    const defaultErrorPagePlugin = getPlugin<PbDefaultPagePlugin>("pb-default-page-error");
    const defaultNotFoundPagePlugin = getPlugin<PbDefaultPagePlugin>("pb-default-page-not-found");

    return {
      DefaultNotFoundPage: defaultNotFoundPagePlugin?.component,
      DefaultErrorPage: defaultErrorPagePlugin?.component
    };
  }, []);

  // Fetch the page via GraphQL. We imported GET_PUBLISHED_PAGE query,
  // so we don't have to write it on our own.
  const { loading, data, error } = useQuery(GET_PUBLISHED_PAGE(), {
    variables: {
      url: "/something-awesome"
    }
  });

  if (loading) {
    return <Loader />;
  }

  // If no data has arrived, show the not-found on error page.
  if (!data) {
    if (error?.code === "NOT_FOUND") {
      return <DefaultNotFoundPage error={error} />;
    }
    return <DefaultErrorPage error={error} />;
  }

  // Finally, send the received data to the Page component.
  return (
    <div>
      <h1>{data.pageBuilder.page.title}</h1>
      <div>
        <Page data={data.pageBuilder.page} />
      </div>
    </div>
  );
}
```

Note the `GET_PUBLISHED_PAGE` GraphQL query that we've used to fetch the page data. Very convenient if you want to be sure that all of the relevant page information gets retrieved, which the `Page` component will internally utilize.

If you just want to render the page content explicitly, you can also utilize the `content` prop.

#### The `content` prop

The `content` prop allows you tu literally just render the page content. The following example shows how to do it:

```typescript jsx
import React, { useMemo } from "react";
import { Page } from "@webiny/app-page-builder/site/components/Page";
import { useQuery } from "react-apollo";
import { getPlugin, getPlugins } from "@webiny/plugins";
import {
  PbDefaultPagePlugin,
  PbPageLayoutComponentPlugin
} from "@webiny/app-page-builder/types";
import gql from "graphql-tag";

const GET_PUBLISHED_PAGE = gql`
  query PbGetPublishedPage($url: String) {
    pageBuilder {
      page: getPublishedPage(url: $url) {
        data {
          title
          content
        }
        error {
          code
          message
        }
      }
    }
  }
`;

function MyComponent() {
  // As in the above example, get the Loader component via plugins, or import it directly.
  const Loader = useMemo(() => { ... }, []);

  // As in the above example, get the components via plugins, or import them directly.
  const [DefaultErrorPage, DefaultNotFoundPage] = useMemo(() => { ... }, []);

  // Fetch the page via GraphQL. We imported GET_PUBLISHED_PAGE query,
  // so we don't have to write it on our own.
  const { loading, data, error } = useQuery(GET_PUBLISHED_PAGE, {
    variables: {
      url: "/something-awesome"
    }
  });

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <DefaultErrorPage error={pageError} />;
  }

  const { data: pageData, error: pageError } = data?.pageBuilder?.page || {};

  // If no data has arrived, show the not-found on error page.
  if (!pageData) {
    if (pageError?.code === "NOT_FOUND") {
      return <DefaultNotFoundPage error={pageError} />;
    }
    return <DefaultErrorPage error={pageError} />;
  }

  // Finally, send the received data to the Page component.
  return (
    <div>
      <h1>{pageData.title}</h1>
      <div>
        <Page content={pageData.content} />
      </div>
    </div>
  );
}
```

### Existing React apps

As mentioned, the `Page` React component can also be used if you want to bring the Page Builder app into your existing React app (that wasn't created with Webiny at all). If that is your case, when importing the Page Builder plugins, it's best to just manually import only the functionality that's actually needed.

Consider the following import statement:

```js
import renderPlugins from "@webiny/app-page-builder/render/presets/default";
import { registerPlugins } from "@webiny/plugins";

// Plugins still need to be registered via the "@webiny/plugins" package.
registerPlugins(renderPlugins);
```

This will import just the default set of plugins that define the rendering of page elements. More importantly, this way we didn't import the plugin that's responsible for automatic page fetching and rendering while the user is navigating your app, leaving you free to rely on your existing routing options that you might already have in place.

## Component props

The following props can be passed to the `Page` React component.

| Prop      | Type         | Description                                                                                                                                                                                                                                                                            |
| :-------- | :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `url`     | `string`     | URL of the page you wish to render. Always renders the published page revision.                                                                                                                                                                                                        |
| `id`      | `string`     | Revision ID of the page you wish to render. Can render unpublished page revisions too.                                                                                                                                                                                                 |
| `parent`  | `string`     | Renders a published page revision which is a child of the provided parent ID.                                                                                                                                                                                                          |
| `data`    | `PbPageData` | Instead of relying on the `Page` component to fetch the data, you can pass it directly via this prop. Can be useful in cases where you already have page data available. Note that the component will still render the page in the provided layout and set appropriate `<head/>` tags. |
| `content` | `any`        | Allows you to pass page content directly. Useful if you just want to render the page content, without rendering the layout and setting appropriate `<head/>` tags.                                                                                                                     |
