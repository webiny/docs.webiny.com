---
id: extend-graphql-api
title: Extend GraphQL API
sidebar_label: Extend GraphQL API
keywords: ["page", "builder", "graphql", "gql", "api", "extend", "expand"]
description: Learn how to extend the Page Builder-related GraphQL types and operations.
---

import CenteredImage from "@components/CenteredImage";
import specialQueryResults from "./extend-graphql-api/special-query-results.png";
import specialRunMutation from "./extend-graphql-api/special-run-mutation.png";

:::tip What you'll learn

- how to extend the Page Builder-related GraphQL types and operations

:::

## Overview

The following examples show how you can extend the Page Builder-related GraphQL types and operations.

### Adding New Page Fields

Page is the central type within the Page Builder application and in some cases, we might need to add additional fields to it. In this example, we'll add a new `special` boolean field to it, which will, as the name of the field suggests, tell us whether a page is special or not.

It all starts with the [`GraphQLSchemaPlugin`](https://github.com/webiny/webiny-js/blob/v5.11.0-beta.1/packages/handler-graphql/src/plugins/GraphQLSchemaPlugin.ts#L10), which we'll need to register within our GraphQL API's application code. Once we have that, optionally, we might want to register the [`IndexPageDataPlugin`](https://github.com/webiny/webiny-js/blob/v5.11.0-beta.1/packages/api-page-builder/src/plugins/IndexPageDataPlugin.ts#L14) plugin, which will enable us to get the value of the new `special` field also while listing pages.

```ts title="api/code/graphql/src/plugins/pages.ts"
import { GraphQLSchemaPlugin } from "@webiny/handler-graphql/plugins";
import { IndexPageDataPlugin } from "@webiny/api-page-builder/plugins/IndexPageDataPlugin";
import { Page } from "@webiny/api-page-builder/types";

interface ExtendedPage extends Page {
  special: boolean;
}

export default [
  // Adding a new `special` field to the PbPage type consists of three steps:
  // 1. Extend the fundamental `PbPage` type.
  // 2. Extend the `PbPageListItem` type which is used when listing pages.
  // 3. In order to update the field, we also need to extend the `PbUpdatePageInput` input.
  new GraphQLSchemaPlugin({
    typeDefs: /* GraphQL */ `
      extend type PbPage {
        special: Boolean
      }

      extend type PbPageListItem {
        special: Boolean
      }

      extend input PbUpdatePageInput {
        special: Boolean
      }
    `
  }),

  // This step is only required if you're using DynamoDB + ElasticSearch setup and you want
  // to be able to get the value of the `special` field while listing pages.
  // With this plugin, we ensure that the value of the `special` field is also stored in
  // ElasticSearch, which is where the data is being retrieved from while listing pages.
  new IndexPageDataPlugin<ExtendedPage>(({ data, page }) => {
    // `data` represents the current page's data that will be stored in ElasticSearch.
    // Let's modify it, by adding the value of the new `special` flag to it.
    data.special = page.special;
  })
];
```

:::info
The code above can be placed in the [`api/code/graphql/src/plugins/pages.ts`](https://github.com/webiny/webiny-examples/blob/master/page-builder/extend-graphql-api/extend-page/api/code/graphql/src/plugins/pages.ts) file, which doesn't exist by default, and you will have to create it manually. Furthermore, once the file is created, make sure that it's actually imported and registered in the [`api/code/graphql/src/index.ts`](https://github.com/webiny/webiny-examples/blob/master/page-builder/extend-graphql-api/extend-page/api/code/graphql/src/index.ts) entrypoint file.
:::

With all the changes in place, we should be able to update an existing Page Builder page and mark it as special, with the following mutation:

```gql
mutation UpdatePage($id: ID!, $data: PbUpdatePageInput!) {
  pageBuilder {
    updatePage(id: $id, data: $data) {
      data {
        id
        title
        special
      }
    }
  }
}
```

For example:

<CenteredImage alt={"Marking an Existing Page as Special"} src={specialRunMutation}/>

Running the above mutation should mark the page with the `60f903881f76a1000820068e#0001` ID as special, which we should be able to see afterwards while performing queries:

<CenteredImage alt={"Querying Pages with the New Special Field Included in the Results"} src={specialQueryResults}/>

## Custom Mutations

Let's say we wanted to extend our GraphQL schema with the custom `duplicatePage` mutation, which, as the name suggests, would enable us to make copies of pages.

In order to achieve that, as usual, we'd start by registering a new [`GraphQLSchemaPlugin`](https://github.com/webiny/webiny-js/blob/v5.11.0-beta.1/packages/handler-graphql/src/plugins/GraphQLSchemaPlugin.ts#L10) plugin.

```gql
mutation DuplicatePage($id:ID!) {
  pageBuilder {
    duplicatePage (id:$id) {
      data {
        id
        title
        path
      }
    }
  }
}
```
