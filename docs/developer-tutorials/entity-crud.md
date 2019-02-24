---
id: entity-crud
title: Entity - CRUD
sidebar_label: CRUD
---

In this section, we are going to cover basic CRUD operations.

> All of the CRUD methods are async.

### `save`

Saves current entity. If entity wasn't saved yet, it will be created
and receive a unique ID. Otherwise an update will be performed. ****

If save failed, due to validation or driver / database issue, an error
will be thrown.

**Parameters**

* `parameters` **Object** Save parameters.
  * `validation` **boolean** Set to `true` if validation needs to be prevented**.**
  * `events` **Object** Disable specific [events](/docs/developer-tutorials/entity-events) if needed. Set event name as key, and `false` as value to disable. Following events can be disabled:
    * `save`
    * `update`
    * `create`
    * `onBeforeSave`
    * `onBeforeUpdate`
    * `onBeforeCreate`
    * `onAfterSave`
    * `onAfterUpdate`
    * `onAfterCreate`

**Example**

```js
// saveUser.js
import User from "./user.entity";

const user = new User();
user.firstName = "John";
user.lastName = "Doe";

// Creates user.
await user.save();

// Outputs user's ID.
console.log(user.id);

user.lastName = "AnotherLastName";

// Updates user.
await user.save();
```

```js
// preventValidationSave.js
import User from "./user.entity";

const user = new User();
user.firstName = "John";
user.lastName = "Doe";

// Saves user, but validation is prevented.
await user.save({validation: false});
```

### `delete`

Deletes an existing entity. Note that if [soft delete](/docs/developer-tutorials/entity-configuration#crud)
was enabled, entity won't be physically deleted in the database,
instead it will only have its [boolean](/docs/developer-tutorials/entity-attributes#boolean)
attribute `deleted` set as `true`.

If delete failed, due to validation or driver / database issue,
an error will be thrown.



**Example**

```js
// saveUser.js
import User from "./user.entity";

const user = new User();
user.firstName = "John";
user.lastName = "Doe";

await user.save();

// Now let's delete the user.
await user.delete();
```

### `findOne`

Finds one entity based on given parameters.

**Parameters**

* `parameters` **Object** Query and driver-specific (if any) parameters.
  * `query` **Object** Query (filters).
  * `search` **Object** Query search parameters.
    * `fields` **Array&lt;string&gt;** Fields over which the search will be performed.
    * `query` **string** Search query (text).
    * `operator` **"and" | "or"** If multiple fields are specified, specified operator will be used to combine them. Default: `or`.
  * `sort` **Object** Query sort, an object with keys as fields, and `-1` or `1` as values, representing descending and ascending sort respectively.

**Example**

```js
import User from "./user.entity";

// Simple queries.
await User.findOne({query: { email: "john@webiny.com" }});
await User.findOne({query: { firstName: "John", lastName: "Doe" }});

// Apply sorting - find latest user named "John".
await User.findOne({
    query: { firstName: "John" },
    sort: { createdOn: 1 },
})

// Search user by a single field.
await User.findOne({
    search: {
        fields: ["email"],
        query: "john@web"
    }
});

// Search over multiple fields, with the "and" operator.
await User.findOne({
    search: {
        fields: ["email", "firstName"],
        query: "john",
        operator: "and"
    }
});
```

### `findById`

Finds one entity by given ID. If entity is already present in the internal cache,
it will be immediately returned, and no database queries will be performed.
Returns `null` if entity was not found.

**Parameters**

* `id` **String** Entity id.
* `parameters` **Object** Driver-specific parameters (if any).

**Example**

```js
import User from "./user.entity";

// Will perform database query, and store found entity into the internal cache.
await User.findById("ABC");

// Will return the same entity from the internal cache.
await User.findById("ABC");
```

### `findByIds`

Finds entities by given IDs. If entities are already present in the internal cache,
they will be immediately returned, and no database queries will be performed.
Returns empty array if no entities were found.

**Parameters**

* `ids` **Array&lt;string&gt;** An array of IDs.
* `parameters` **Object** Driver-specific parameters (if any).

**Example**

```js
import User from "./user.entity";

// Will return array that only includes entities with IDs "A" and "B".
await User.findByIds(["A", "B", "invalidId"]);
```

### `find`

Finds entities based on given parameters. Will return instances from
the internal cache if previously loaded.

**Parameters**

* `parameters` **Object** Query and driver-specific (if any) parameters.
  * `query` **Object** Query (filters).
  * `search` **Object** Query search parameters.
    * `fields` **Array&lt;string&gt;** Fields over which the search will be performed.
    * `query` **string** Search query (text).
    * `operator` **"and" | "or"** If multiple fields are specified, specified operator will be used to combine them. Default: `or`.
  * `sort` **Object** Query sort, an object with keys as fields, and `-1` or `1` as values, representing descending and ascending sort respectively.
  * `page` **Number** Page.
  * `perPage` **Number** Entities per page. Default: `10`.

**Example**

```js
import User from "./user.entity";

// Will return users:
// - must be 30 years old
// - sorted by lastName (descending) and then by createdOn (ascending)
// - 5 entities per page - 2nd page
await User.find({
    query: {age: 30},
    sort: { lastName: -1, createdOn: 1 },
    perPage: 5,
    page: 2
});
```

### `count`

Counts entities, based on given parameters.

**Parameters**

* `parameters` **Object** Query and driver-specific (if any) parameters.
  * `query` **Object** Query (filters).
  * `search` **Object** Query search parameters.
    * `fields` **Array&lt;string&gt;** Fields over which the search will be performed.
    * `query` **string** Search query (text).
    * `operator` **"and" | "or"** If multiple fields are specified, specified operator will be used to combine them. Default: `or`.

**Example**

```js
import User from "./user.entity";

// Will return users that are 30 years old.
await User.count({query: {age: 30}});
```
