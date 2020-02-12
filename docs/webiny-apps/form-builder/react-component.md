---
id: react-component
title: Webiny Form Builder - React Component
sidebar_label: React Component
---

Forms can be shown on a public website either by [embedding them into pages](/docs/webiny-apps/form-builder/embed-forms-via-page-builder) created with the [Page Builder](/docs/webiny-apps/page-builder/introduction) app, or via a simple React component, which is useful when you want to programatically include the form. Basically, if you are not working with pages, you will be using this React component.

For these cases, the Form Builder app exposes the `Form` component, which can be imported like so:

```js
import { Form } from "@webiny/app-forms/components/Form";
```

You can now render any published form by simply passing an adequate set of props to the imported `Form` component, for example:

```jsx
<Form slug="my-awesome-form" revisionNumber={3} />
```

This will load and render the revision `3` of the `my-awesome-form` form. If you don't specify the revision, it will load the latest published revision.

> More information on publishing forms and form revisions can be found [here](/docs/webiny-apps/form-builder/revisions-and-publishing)

## Full example

The following code shows a simple component in which we utilize the shown `Form` component:

```jsx
import React from "react";
import { Form } from "@webiny/app-forms/components/Form";

function MyComponent() {
  return (
    <div>
      <h1>This is my form</h1>
      <div>
        <Form slug="my-awesome-form" />
      </div>
    </div>
  );
}

export default MyComponent;
```

# Props
The `Form` component can receive the following list of props:

| Prop             | Type       | Description                                                                                                                                                 |
| :--------------- | :--------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `slug`           | `?string`  | Slug of the form you wish to show. This will always show the latest published revision.                                                                     |
| `revisionNumber` | `?string`  | Specific revision number you wish you to show. Can only be used in conjunction with the `slug` prop.                                                        |
| `revisionId`     | `?number`  | Specific form revision ID you wish to show.                                                                                                                 |
| `parentId`       | `?string`  | Specific form parent ID (in other words initial revision), you wish to show. Will show latest published revision of given parent.                           |
| `preview`        | `?boolean` | Set to `true` if you want load the form in the preview mode. If so, [form stats and submissions](/docs/webiny-apps/form-builder/form-stats) won't be saved. |
| `data`           | `?Object`  | Instead of fetching data, this enables you to pass the data directly. Can be useful in certain cases in which you already have form data available.         |
