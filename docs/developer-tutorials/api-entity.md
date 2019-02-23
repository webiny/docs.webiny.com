---
id: api-entity
title: API - Entity
sidebar_label: Entity
---

Entities provide a convenient way to work with data in Webiny.
`webiny-entity` is our take on an ODM which is a result of many years
of client projects, lots of rewrites and refactoring. This article
won't begin to scratch all the features it provides, but will give you
the general idea of how we work with database data in Webiny API.

## Preface
Working with data in an async environment can be challenging, especially when
we are talking about request/response scopes. In `express` apps, we usually
store the authenticated user on the `req` object and it is available
later in your controller (or handler or whatever it is you call it).

In Lambda, there is no `req` object, there is an `event` and a `context`.
So we decided to use context for all things related to the scope of a single
request.

But where is the boundary between the request and your business logic?
That was the hardest thing to decide for us. Ideally, your business logic
should be environment agnostic. But on the other hand, your business logic
depends on current user (logic may change based on authorization, etc.).

In the end there was no perfect solution, but the one we are `ok` with.
We decided to use entity factories - functions that will accept
the request `context`, and return an entity class.

## Creating a plugin
Entities are also registered via plugins because there is some bootstrap
logic involved whenever a request is processed in your API and the
system must be aware of all the entities in your API.

<script src="https://gist.github.com/Pavel910/04d6584197637f69f88ff12b819eeedb.js?file=entity.plugin.js"></script>

This plugin contains an entity name, line `9`, and a factory on line `10`.
On each request, once the system creates an entity class using this factory,
the actual class will be assigned to the context into the namespace defined
on line `7`. For example: `context.cms.entities.Category` will contain
the actual `Category` entity class.

## Creating entity factory
Factory introduces some problems with `Flow`, that is why we always
create an `interface` type which is also exported with the factory function
so you can use it instead of the actual class were needed.

<script src="https://gist.github.com/Pavel910/04d6584197637f69f88ff12b819eeedb.js?file=entity.factory.js"></script>

As you can see, factory takes the `context` object so here you have access to
the authenticated user, all API entities, API config, etc. This allows
us to dynamically configure the entity class on each request.

Lines `26-31` demonstrate how to create a linked entity attribute using
the actual class from the context. Lines `47-49` make use of one of many
entity events to assign the current authenticated user when a new record
is created. Note that the `user` object is taken from `context` on line `26`.

And that is basically how all of the entities are handled in Webiny and how
we've been using them to build our CMS.