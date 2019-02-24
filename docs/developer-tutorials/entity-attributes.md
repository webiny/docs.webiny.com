---
id: entity-attributes
title: Entity - Attributes
sidebar_label: Attributes
---

As shown in the previous section, entities consist of attributes. Eg.
entity `User` might have the following attributes:

* firstName
* lastName
* email
* password
* age
* enabled

Attributes are defined inside `Entity` classes, in its `constructor`,
using the `attr` method:

```js
import { Entity } from "webiny-api";

class User extends Entity {
    constructor() {
        super();
        this.attr("firstName").char();
        this.attr("lastName").char();
        this.attr("email").char();
        this.attr("password").password();
        this.attr("age").integer();
        this.attr("enabled").boolean();
    }
}
```

Notice the different attributes that were used. `char` attribute was used
for **firstName**, **lastName**, **email** , `password` attribute for
**password**. `integer` was used for **age**, and for **enabled** we
used `boolean` attribute. Let's take a look at all attributes that are
by default included in the Entity component.

## Attributes List

### `array`

Accepts `array` in which each item must be a string, number, boolean or
null. Used for smaller lists, eg. tags or list of sizes.

**Example**

```js
import { Entity } from "webiny-entity";

class Product extends Entity {
    constructor() {
        super();
        this.attr('tags').array();
        this.attr('sizes').array();
    }
}
```

### `char`

Accepts `string`values, used for storing first or last name, descriptions, types etc.

**Example**

```js
import { Entity } from "webiny-entity";

class User extends Entity {
    constructor() {
        super();
        this.attr('firstName').char();
        this.attr('lastName').char();
        this.attr('type').char();
    }
}
```

### `boolean`

Accepts `boolean` values, used for storing various flags, eg. enabled, published etc.

**Example**

```js
import { Entity } from "webiny-entity";

class Article extends Entity {
    constructor() {
        super();
        this.attr('published').boolean();
    }
}
```

### `date`

Accepts `Date` object or alternatively `string` or `number`, which will
internally be converted into a `Date` object. Used for storing date and
time. Note that for storing only date or only time,
[char](/docs/developer-tutorials/entity-attributes#char) or event
[integer](/docs/developer-tutorials/entity-attributes#integer)
attributes can be more appropriate.

**Example**

```js
import { Entity } from "webiny-entity";

class User extends Entity {
    constructor() {
        super();
        this.attr('createdOn').date();
        this.attr('yearOfBirth').integer();
        this.attr('birthdate').char();
    }
}
```

### `entity`

Points to another entity of given entity class or an array of classes
in which case, additional classId attribute must be specified. The
attribute represents many-to-one and one-to-one relationships.

**Example**

```js
import { Entity } from "webiny-entity";
import Company from "./company.entity.js";
import Image from "./image.entity.js";
import File from "./file.entity.js";

class User extends Entity {
    constructor() {
        super();
        // Many users can belong to a single company (many-to-one).
        this.attr('company').entity(Company);
        // Avatar can only belong to a single user (one-to-one).
        this.attr('avatar').entity(Image).setAutoDelete();

        // Verification doc can be an instance of Image or File, depending
        // on what was uploaded. Because of multiple instances, a separate
        // "verificationDocClassId" char attribute has to be defined.
        this.attr('verificationDoc')
        .entity([Image, File], { classIdAttribute: "verificationDocClassId" })
        .setAutoDelete();

        this.attr("verificationDocClassId").char();
    }
}
```

### `entities`

Points to many entities of given class, directly or by using an
additional aggregation class, representing one-to-many or many-to-many
relationships.

**Example**

```js
import { Entity } from "webiny-entity";
import Product from "./product.entity.js";
import Category from "./category.entity.js";
import Image from "./image.entity.js";

class ProductsCategories extends Entity {
    constructor() {
        super();
        this.attr('product').entity(Product);
        this.attr('category').entity(Category);
    }
}

class Product extends Entity {
    constructor() {
        super();
        // Product can have many images, that belong only to it (one-to-many).
        this.attr('images').entities(Image);
        // Products can be placed into one or more categories. Other products
        // can also be placed into the same categories (many-to-many).
        this.attr('categories').entities(Category).setUsing(ProductsCategories);
    }
}
```

### `integer`

Accepts `number` that is an integer - doesn't contain decimals. Used
for storing various numbers eg. age, totals, counts, sizes etc.

**Example**

```js
import { Entity } from "webiny-entity";

class User extends Entity {
    constructor() {
        super();
        this.attr('age').integer();
        this.attr('totalProfileViews').integer();
    }
}
```

### `float`

Accepts `number` that contains decimals. Used for storing numbers eg.
various totals, sizes etc.

**Example**

```js
import { Entity } from "webiny-entity";

class Product extends Entity {
    constructor() {
        super();
        this.attr('width').float();
        this.attr('height').float();
        this.attr('price').float();
    }
}
```

### `model`

Accepts data based on a provided model class.

**Example**

```js
import { Model } from "webiny-model";
import { Entity } from "webiny-entity";

class VerificationModel extends Model {
    constructor() {
        super();
        this.attr("verified").boolean();
        this.attr("url").char();
        this.attr("documentType")
            .char()
            .setValidators("in:id:driversLicense");
    }
}

class User extends Entity {
    constructor() {
        super();
        this.attr("verification").model(VerificationModel);
    }
}
```

### `models`

Accepts an `array`, which consists of items based on a provided model class.

**Example**

```js
import { Model } from "webiny-model";
import { Entity } from "webiny-entity";

class Item extends Model {
    constructor() {
        super();
        this.attr("name").char();
        this.attr("price").float();
    }
}

class Invoice extends Entity {
    constructor() {
        super();
        this.attr("number").integer();
        this.attr("items").models(Item);
        this.attr("paid").boolean();
    }
}
```

### `object`

Accepts an `object`, with no specific data structure. Used when data
cannot be described using another `Entity` or `Model`.

> Although it may sound convenient to use this attribute in order to accept any data,
it is suggested that a proper validation or data handling is implemented on the attribute,
to prevent any redundant or possibly critical data being stored in entity's attribute.

**Example**

```js
import { Model } from "webiny-model";
import { Entity } from "webiny-entity";

class User extends Entity {
    constructor() {
        super();
        this.attr("metaData").object().onSet(value => {
            // Ensures only "ip", "lastLogin" and "updatedOn" keys are accepted,
            // the rest must be discarded.
            return {
                ip: value.ip,
                lastLogin: value.lastLogin,
                updatedOn: new Date()
            };
        });
    }
}
```

## Automatically included attributes

## Validators



## Methods

Attribute can additionally be configured using a set of methods, which
can help you to further specify its behavior. The following is a list
of currently available methods.

### `setValidators`

**Parameters**

* `validators` **String | Function** List of comma separated validators or a function.

Sets validators which will be triggered once the parent entity is validated,
usually before saving or by manually calling the validate method.

The method itself can receive a function or a string. If function is passed,
it will simply get executed and it's up to the developer to throw an `Error`
if data is invalid. On the other hand, the string will indicate
that a list of comma separated validators has been passed, or in other
words, attribute's value will be validated using Validation component.

> When assigning values, you don't have to worry about the actual data
type validation. It is already built in, and on validation, an error
will be thrown if an invalid data type has been assigned, for example
a `string` assigned to a [float](/docs/developer-tutorials/entity-attributes#float)
attribute.

**Example**

```js
class User extends Entity {
    constructor() {
        super();
        this.attr("email")
            .char()
            .setValidators("required,email");

        this.attr("password")
            .password()
            .setValidators(value => {
                const isValid = ...;
                if (!isValid) {
                    throw Error('Password is not valid.')
                }
            });

        this.attr("type").char().setValidators('required,in:regular:admin:guest');
        this.attr("age").integer().setValidators('gte:20');
}
```

### `setSkipOnPopulate`

**Parameters**

* `skipOnPopulate` **boolean** Set `true` if attribute must be skipped,
`false` if not. Default: `true`

Sets whether or not attribute's value should not be set when entity is
being populated. Not that attribute can still receive a value by doing
a regular assign.

**Example**

```js
class User extends Entity {
    constructor() {
        super();
        this.attr("email").char();
        this.attr("enabled").boolean().setSkipOnPopulate();
    }
}

const user = new User();
user.populate({email: "john@webiny.com", enabled: false});
console.log(user.email); // "john@webiny.com"
console.log(user.enabled); // null

user.enabled = true;
console.log(user.enabled); // true
```

### `onSet`

**Parameters**

* `callback` **Function** A callback function, must return a value that
will be assigned to attribute.

If defined, given callback function will be called when a value is
assigned. This can be used to apply specific modifications to the value,
before it gets assigned as an attribute value. Callback functions must
be synchronous.

> Attach an [event listener](events.md) (eg. on `save` or `beforeSave`)
if your `onSet` callback needs to execute async operations. When
defining it, also make sure to call `setOnce`, so the callback isn't
executed on consecutive [save](untitled.md#save) calls.

**Example**

```js
// onSetEmail.js
class User extends Entity {
    constructor() {

        super();
        this.attr("email")
            .char()
            .setValidators("required,email")
            .onSet(value => value.toLowerCase().trim());
}

const user = new User();
user.email = 'JOHN@webiny.com   ';
console.log(user.email); // "john@webiny.com"
```

```js
// asyncOnSet.js
class User extends Entity {
    constructor() {
        super();
        this.attr("email")
            .char()
            .setValidators("required,email")
            .onSet(value => {
                if (value !== this.email) {
                    this.on('beforeSave', async () => {
                        await exampleAsyncFunction();
                    }).setOnce();
                }
                return value;
            });
}
```

### `onGet`

**Parameters**

* `callback` **Function** A callback function, must return a value.

If defined, given callback function will be called when getting
attribute's value. This can be used to apply specific modifications to
the value, before the value is returned. Note that internal attribute's
value does not change when getting it. Callback functions can be both
synchronous and asynchronous.

**Example**

```js
class User extends Entity {
    constructor() {
        super();
        this.attr("image")
            .object()
            .onGet(value => value ? value.link : null);
}

const user = new User();
user.image = {name: "some_image.jpg", link: "https://www.webiny.com/image.jpg"};
console.log(user.image); // "https://www.webiny.com/image.jpg"
```

### `setOnce`

**Parameters**

* `once` **boolean** Set `true` if attribute's value can be set only once.
Default: `true`.

Sometimes it's necessary to restrict further editing of attribute's value.
Use this method to accomplish this.

**Example**

```js
class User extends Entity {
    constructor() {
        super();
        this.attr("email")
            .char()
            .setOnce();
}

const user = new User();
user.email = "john@webiny.com";
console.log(user.email); // "john@webiny.com"

user.email = "jane@webiny.com";
console.log(user.email); // "john@webiny.com"
```

### `setDynamic`

**Parameters**

* `callback` **Function** A callback that will be executed instead of
returning the attribute's value.

Use this to force a dynamically calculated value to be returned instead
of regular attribute value. Useful for adding special helper attributes,
that may be a combination of other attribute values.

> Dynamic attribute is read-only, its value cannot be set or saved to storage.

**Example**

```js
class Invoice extends Entity {
    constructor() {
        super();
        this.attr("email")
            .char()
            .setValidators("required,email");

        this.attr("password")
            .password()
            .setValidators(value => {
                const isValid = ...;
                if (!isValid) {
                    throw Error('Password is not valid.')
                }
            });

        this.attr("isValidUser").boolean().setDynamic(() => {
            return this.email && this.password;
        });
}

const user = new User();
console.log(user.isValidUser); // False

user.populate({email: "john@webiny.com", password: "12345678"});
console.log(user.isValidUser); // True
```
