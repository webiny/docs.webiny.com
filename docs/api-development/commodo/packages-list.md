---
id: packages-list
title: Packages List
sidebar_label: Packages List
---

The following is a list of all `@commodo` packages, and some other external ones that you might find useful.

Note that, when using Commodo with Webiny, to make it easier, we've created the `@webiny/commodo` package, which [aggregates](https://github.com/webiny/webiny-js/blob/master/packages/commodo/src/index.ts) all of the relevant `@commodo/*` and `commodo-*` packages and lets you import any HOF (or any other construct) within a single import statement. For example:

```javascript
import { withHooks, withStorage, withFields, string, number } from "@webiny/commodo";
```

> To quickly get up to speed with Commodo and learn best practices, check out the [Commodo crash course](/docs/api-development/commodo/crash-course).

## Base packages

| Package                                                                                          |                                         Short Description                                          |                                                        Version                                                         | Included in `@webiny/commodo` |
| :----------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------: | ----------------------------- |
| [@commodo/fields](https://github.com/webiny/commodo/tree/master/packages/fields)                 | The starting point of every model. Provides base `string`, `number`, `boolean` and `model` fields. |         [![](https://img.shields.io/npm/v/@commodo/fields.svg)](https://www.npmjs.com/package/@commodo/fields)         | Yes                           |
| [@commodo/name](https://github.com/webiny/commodo/tree/master/packages/name)                     |                                   Assign a name to your models.                                    |           [![](https://img.shields.io/npm/v/@commodo/name.svg)](https://www.npmjs.com/package/@commodo/name)           | Yes                           |
| [@commodo/hooks](https://github.com/webiny/commodo/tree/master/packages/hooks)                   |                 Provides methods for defining and triggering hooks on your models.                 |          [![](https://img.shields.io/npm/v/@commodo/hooks.svg)](https://www.npmjs.com/package/@commodo/hooks)          | Yes                           |
| [@commodo/fields-storage](https://github.com/webiny/commodo/tree/master/packages/fields-storage) |           Enables saving models to a database (with an appropriate driver, e.g. MySQL).            | [![](https://img.shields.io/npm/v/@commodo/fields-storage.svg)](https://www.npmjs.com/package/@commodo/fields-storage) | Yes                           |

## Additional packages

| Package                                                                                                                  |                                                            Short Description                                                            |                                                                    Version                                                                     | Included in `@webiny/commodo` |
| :----------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------: | ----------------------------- |
| [@commodo/fields-storage-ref](https://github.com/webiny/commodo/tree/master/packages/fields-storage-ref)                 |                             Provides `ref` field, for saving references to other models saved in database.                              |                  [![](https://img.shields.io/npm/v/@commodo/fields-storage-ref.svg)](https://www.npmjs.com/package/repropose)                  | Yes                           |
| [@commodo/fields-storage-mongodb](https://github.com/webiny/commodo/tree/master/packages/fields-storage-mongodb)         |                                          A MongoDB driver for @commodo/fields-storage package.                                          |                [![](https://img.shields.io/npm/v/@commodo/fields-storage-mongodb.svg)](https://www.npmjs.com/package/repropose)                | No                            |
| [@commodo/fields-storage-soft-delete](https://github.com/webiny/commodo/tree/master/packages/fields-storage-soft-delete) | Introduces `deleted` boolean field to mark whether a model was deleted or not, instead of physically deleting the entry in the storage. | [![](https://img.shields.io/npm/v/@commodo/fields-storage-soft-delete.svg)](https://www.npmjs.com/package/@commodo/fields-storage-soft-delete) | Yes                           |

## Community packages

| Package                                                                                            |                             Short Description                              |                                                                 Version                                                                  | Included in `@webiny/commodo` |
| :------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------: | ----------------------------- |
| [commodo-fields-date](https://github.com/doitadrian/commodo-fields-date)                           |                  Provides `date` field, for saving dates.                  |              [![](https://img.shields.io/npm/v/commodo-fields-date.svg)](https://www.npmjs.com/package/commodo-fields-date)              | Yes                           |
| [commodo-fields-object](https://github.com/doitadrian/commodo-fields-object)                       |             Provides `object` field, for saving plain objects.             |            [![](https://img.shields.io/npm/v/commodo-fields-object.svg)](https://www.npmjs.com/package/commodo-fields-object)            | Yes                           |
| [commodo-fields-int](https://github.com/doitadrian/commodo-fields-int)                             |             Provides `int` field, for saving integer numbers.              |               [![](https://img.shields.io/npm/v/commodo-fields-int.svg)](https://www.npmjs.com/package/commodo-fields-int)               | Yes                           |
| [commodo-fields-float](https://github.com/doitadrian/commodo-fields-float)                         |             Provides `float` field, for saving float numbers.              |             [![](https://img.shields.io/npm/v/commodo-fields-float.svg)](https://www.npmjs.com/package/commodo-fields-float)             | Yes                           |
| [commodo-fields-storage-crud-logs](https://github.com/doitadrian/commodo-fields-storage-crud-logs) | Adds and automatically manages `createdOn`, `updatedOn`, `savedOn` fields. | [![](https://img.shields.io/npm/v/commodo-fields-storage-crud-logs.svg)](https://www.npmjs.com/package/commodo-fields-storage-crud-logs) | Yes                           |
