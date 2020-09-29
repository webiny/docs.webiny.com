---
id: api-schema
title: API - Schema
sidebar_label: Schema
---

GraphQL Schema is registered as a plugin of type `graphql`. Let's take
a look at a code example:

<script src="https://gist.github.com/Pavel910/04d6584197637f69f88ff12b819eeedb.js?file=schema.plugin.js"></script>

This schema will add a new field called `myApp` to the root Query and Mutation fields.

## Types and resolvers
On lines `7` and `26` you will notice we define `typeDefs` and `resolvers`
using functions that return an array of types/resolvers.
This is necessary for smooth instantiation and schema merging, to avoid
type collisions.

## Security
`security` on lines `47-56` defines rules for [graphql-shield](https://www.npmjs.com/package/graphql-shield).
It is a very convenient way of performing authorization for your schema without
hardcoding the security logic in your resolvers.

`webiny-api-security` package provides 2 helper functions, `hasScope` and `hasRole`,
to easily add checks for scopes and roles to your schema. Scopes defined
via `hasScope` function will be picked up by the system and will be available in the admin app
while creating roles.

![Webiny Role View](/img/developer-tutorials/api-security-scopes.png)

To create your own rule use the `graphql-shield` package directly.
Let's create an `isAuthenticated` rule to simply check if user is logged in:

<script src="https://gist.github.com/Pavel910/04d6584197637f69f88ff12b819eeedb.js?file=schema.rule.js"></script>

For more examples and advanced usage, visit the official [graphql-shield API docs](https://www.npmjs.com/package/graphql-shield#api).

## Response structure
While developing the CMS we tried multiple approaches to structure the
response from the resolvers and in the end we settled for the following one:

<script src="https://gist.github.com/Pavel910/04d6584197637f69f88ff12b819eeedb.js?file=schema.response.js"></script>

The main problem was to somehow handle errors. You can't just throw an error
and kill the entire response, since GraphQL allows you to query multiple fields
at once.

So the idea is to always have an envelope for your resolver response, be it a single record
or a list of records. An envelope (`RoleResponse` and `RoleListResponse`)
contains the `data` key which will contain the actual resolver data,
and there is also an `error` key which will contain error data. `ListResponse`
types should also contain `meta` key with data for pagination.

## Generic data types
Webiny API comes with the following built-in data types you can use anywhere
in your SDL without importing them (it is handled automatically):

<script src="https://gist.github.com/Pavel910/04d6584197637f69f88ff12b819eeedb.js?file=schema.types.js"></script>

## Learn more
Schema definition can be split into multiple files, to organize typeDefs
and resolvers by feature and reduce the size of the main schema.

A good example of such approach can be found in the
[webiny-api-cms](https://github.com/Webiny/webiny-js/blob/master/packages/webiny-api-cms/src/plugins/graphql.js)
or [webiny-api-security](https://github.com/Webiny/webiny-js/blob/master/packages/webiny-api-security/src/plugins/graphql.js) package on our Github.
