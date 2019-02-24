---
id: entity-configuration
title: Entity - Configuration
sidebar_label: Configuration
---

Entity component has a couple of static class properties that offer a
way to set additional options. The following is a list of all static
class properties that can be used.

### `classId`

Each entity class must have a classId. Once defined, it can be used to
identity entity type without checking the name of the actual class.
It is used internally by the Entity component (can be even stored in
the database in some cases), but can also be used while developing
business logic if needed.

**Example**

```js
import { Entity } from "webiny-entity";

class User extends Entity {
    // classId doesn't have to be the same as the name of the actual class.
    static classId = "SecurityUser";

    constructor() {
        super();
        this.attr("firstName").char();
        this.attr("lastName").char();
    }
}
```

### `crud`

Exposes a few useful CRUD options. `crud` object has the following structure:

* `logs` **boolean** Automatically includes `createdOn`, `updatedOn` and `savedOn` [date](/docs/developer-tutorials/entity-attributes#date) attributes in each entity, and updates values accordingly. `savedOn` is updated on both [create and update](/docs/developer-tutorials/entity-crud#save) operations.
* `delete` **object** Provides delete operation options.
  * `soft` **boolean** Enables soft delete - each entity will receive `deleted` [boolean](/docs/developer-tutorials/entity-attributes#boolean) attribute, which will be set to `true` when entity is deleted, instead of actually deleting the record in the database. Entity component also handles further querying, meaning it will append necessary filters automatically.

**Example**

```js
import { Entity as BaseEntity } from "webiny-entity";

class Entity extends BaseEntity {}

Entity.crud = {
    logs: true,
    delete: {
        soft: true
    }
};
​
export default Entity;
```
