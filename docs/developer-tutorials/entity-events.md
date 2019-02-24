---
id: entity-events
title: Entity - Events
sidebar_label: Events
---

Entities can register event listeners - simple \(a\)sync callback functions
which are triggered upon emitted [built-in](/docs/developer-tutorials/entity-events#built-in-events) or
[custom](/docs/developer-tutorials/entity-events#custom-events) events.
To register a new event listener, `on` method is used, which can be
called statically on an entity class or directly on an existing
entity instance.

> Registering event listener statically on an entity class will cause
any instantiated entity of the same class to execute the callback
(if any) on emitted event.

To get a better understanding, please consider the following examples.

### Basic Example

```js
import { Entity } from "webiny-entity";

// Event listener defined on an instance. Will be execute after a successful save.
class User extends Entity {
    constructor() {
        super();
        this.attr("saveCount").integer();
        this.on("beforeSave", () => {
            this.saveCount++;
        });

        this.on("delete", () => {
            const canDeleteUser = ...;
            if (!canDeleteUser) {
                // Will stop delete process.
                throw Error("Cannot delete user.");
            }
        });
    }
}

// Statically defined event listener - will be triggered to all instantiated users
// after they were sucessfully saved. Use "entity" named parameter to
// access instance that triggered the event.
User.on('beforeSave', ({ entity }) => {
    entity.saveCount++;
});

const user = new User();
await user.save();

console.log(user.saveCount); // Outputs 2, because two listeners were registered.
```

### Built-in events

The following is a list of all built-in events which you can use:

| Event | Description |
| :--- | :--- |
| `create` | Emitted at the very beginning of the [save](/docs/developer-tutorials/entity-crud#save) method, before data validation. Only when saving entity for the first time. |
| `beforeCreate` | Emitted after successful data validation and right before creating a new entity. |
| `afterCreate` | Emitted after successfully creating an entity. |
| `update` | Emitted at the very beginning of [save](/docs/developer-tutorials/entity-crud#save) method, before data validation. Only when saving an existing entity. |
| `beforeUpdate` | Emitted after successful data validation and right before updating an existing entity. |
| `afterUpdate` | Emitted after successfully updating an existing entity. |
| `save` | Emitted at the very beginning of [save](/docs/developer-tutorials/entity-crud#save) method, before data validation. Emitted both on creating new and updating existing entity. |
| `beforeSave` | Emitted after successful data validation and right before both creating a new or updating an existing entity. |
| `afterSave` | Emitted after successfully creating a new or updating an existing entity. |
| `delete` | Emitted at the very beginning of _**delete**_ method, before data validation. Can be used eg. to check if entity can be deleted. |
| `beforeDelete` | Emitted after successful data validation and right before deleting an existing entity. |
| `afterDelete` | Emitted after successful delete of an existing entity. |
| `read` | Emitted after entity has been loaded, inside any of following methods: [findOne](/docs/developer-tutorials/entity-crud#findone), [find](/docs/developer-tutorials/entity-crud#find), [findById](/docs/developer-tutorials/entity-crud#findbyid), or [findByIds](/docs/developer-tutorials/entity-crud#findbyids). |

### Custom Events

With built-in events, you can also attach listeners for custom events, like so:

```js
// Basic Invoice entity.
class Invoice extends Entity {
    constructor() {
        super();
        this.attr("number").integer();
        this.attr("product").entity(Product);
        this.attr("quantity").integer();
        this.attr("paid").boolean();
    }

    // Once set as paid, "paid" event is emitted.
    async setPaid() {
        this.paid = true;
        await this.save();
        await this.sendEmail();
        await this.emit("paid");
    }
}

// Basic Product entity.
class Product extends Entity {
        constructor() {
        super();
        this.attr("name").integer();
        this.attr("soldCount").integer();
    }
}

// We want to listen for "paid" event on Invoice entity.
// When the event occurs, we increase "soldCount" counter on actual product
// that's included on the instance of invoice.
Invoice.on("paid", async ({ entity }) => {
    const product = await entity.product;
    product.soldCount++;
    await product.save();
});
```

### Execute once

In some cases, there might be a need to execute a specific listener only
once. To achieve that, `setOnce` method can additionally be called.

```js
// Event listener defined on an instance, in constructor.
class User extends Entity {
    constructor() {
        super();
        this.attr("email").char();
        this.attr("password")
            .char()
            .onSet(value => {
                const differentEmail = value !== this.email;

                // If e-mail is different, let's send "Password Changed" email
                // once the entity has successfully been saved. Call "setOnce"
                // to make sure e-mail is sent only once, and not again on
                // consecutive saves.
                if (differentEmail) {
                    this.on("afterSave", async () => {
                        await this.sendPasswordChangedEmail();
                    }).setOnce();
                }

                // Value must always be returned from onSet method.
                return value;
            });
    }
}
```
