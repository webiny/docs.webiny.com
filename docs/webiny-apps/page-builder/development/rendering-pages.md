---
id: rendering-pages
title: Rendering pages
sidebar_label: Rendering pages
---

Pages can be rendered on your website either by using the default plugins, or by using a simple React component (both included in the `@webiny/app-page-builder` package).

Let's see in more detail how and we we can utilize each approach.

## Using default plugins

This is the default approach for every new Webiny project, and it's great if you want to start right away, without manually doing anything by yourself.

> If you are not already familiar with how plugins work, we recommend
> you first take a look at the [Plugins Crash Course](/docs/developer-tutorials/plugins-crash-course) before reading this article.

In your project, if you open the `apps/site/src/plugins/index.js` file, you might notice the following import:

```javascript
import pageBuilderPlugins from "@webiny/app-page-builder/site/plugins";
```

This is a set of plugins that basically sets up a couple of things, most importantly, loading the page content via the GraphQL API while the user is navigating your website. With that, the included plugins also do the following:

#### Register render plugins for page builder elements

When creating pages via the page builder, you are using page elements (e.g. Text, Image, Form, ...), which are registered in the system via plugins. In terms of rendering, every element has to have two plugins, one that defines how it's rendered in the actual page builder, and the other that defines how it's rendered on the website, which is precisely what is included in this set of plugins.

#### Link preloading

Adds tracking of links that are present on the page that the user is currently viewing, and to improve the performance, fetches the content in advance. This enables smooth transitions while the user is navigating throughout your website.

#### Populate `<head/>` portion of the page

For SEO purposes, it fetches basic website information, like title or default OG image, and populates the `<head/>` portion of the page with it.

> To check out the actual code, click [here](https://github.com/webiny/webiny-js/blob/master/packages/app-page-builder/src/site/plugins/index.tsx).

## Using `Page` React component

The `Page` React component is useful when you want to programmatically include the page in the existing React code.
It can be imported like so:

```js
import { Page } from "@webiny/app-page-builder/components/Page";
```

You can then render any published page by simply passing an adequate set of props to the imported `Page` component, for example:

```jsx
<Page url="/my-awesome-page" />
```

This will automatically fetch the content for the published page that has "/my-awesome-page" set as its URL via the page builder.

> More information on publishing pages and page revisions can be found [here](/docs/webiny-apps/page-builder/revisions-and-publishing)

### Full example

The following code shows a simple component in which we utilize the shown `Page` component:

```jsx
import React from "react";
import { Page } from "@webiny/app-page-builder/components/Page";

function MyComponent() {
  return (
    <div>
      <h1>This is my page</h1>
      <div>
        <Page slug="my-awesome-page" />
      </div>
    </div>
  );
}

export default MyComponent;
```

### Manually passing the page data

When you pass the `url` prop to the `Page` component, fetching of the data is abstracted from you.

But in some cases, you might want to fetch the page data manually and that's when you can utilize other props.

#### The `data` prop

Consider the following example:

```jsx
import React, { useMemo } from "react";
import { Page } from "@webiny/app-page-builder/components/Page";
import { useQuery } from "react-apollo";
import { GET_PUBLISHED_PAGE } from "@webiny/app-page-builder/site/components/Page";
import { getPlugin, getPlugins } from "@webiny/plugins";
import { PbDefaultPagePlugin, PbPageLayoutComponentPlugin } from "@webiny/app-page-builder/types";

function MyComponent() {
  // Get the loader component via plugin (or directly import your own component).
  const Loader = useMemo(() => {
    const plugins = getPlugins < PbPageLayoutComponentPlugin > "pb-layout-component";
    const pl = plugins.find(pl => pl.componentType === "loader");
    return pl ? pl.component : null;
  }, []);

  // Get the default error and not-found pages (or directly import your own component).
  const { DefaultErrorPage, DefaultNotFoundPage } = useMemo(() => {
    const defaultErrorPagePlugin = getPlugin < PbDefaultPagePlugin > "pb-default-page-error";
    const defaultNotFoundPagePlugin = getPlugin < PbDefaultPagePlugin > "pb-default-page-not-found";

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

```jsx
import React, { useMemo } from "react";
import { Page } from "@webiny/app-page-builder/components/Page";
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

## Component props

The following props can be passed to the `Page` React component.

| Prop      | Type         | Description                                                                                                                                                                                                                                                                            |
| :-------- | :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `url`     | `string`     | URL of the page you wish to render. Always renders the published page revision.                                                                                                                                                                                                        |
| `id`      | `string`     | Revision ID of the page you wish to render. Can render unpublished page revisions too.                                                                                                                                                                                                 |
| `parent`  | `string`     | Renders a published page revision which is a child of the provided parent ID.                                                                                                                                                                                                          |
| `data`    | `PbPageData` | Instead of relying on the `Page` component to fetch the data, you can pass it directly via this prop. Can be useful in cases where you already have page data available. Note that the component will still render the page in the provided layout and set appropriate `<head/>` tags. |
| `content` | `any`        | Allows you to pass page content directly. Useful if you just want to render the page content, without rendering the layout and setting appropriate `<head/>` tags.                                                                                                                     |
