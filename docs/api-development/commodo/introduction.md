---
id: introduction
title: Introduction
sidebar_label: Introduction
---

Webiny is organizing Knowledge-Sharing sessions to create a knowledge database for our users. Check out our API Development With Webiny Session below:

<iframe width="805" height="390" src="https://www.youtube.com/embed/8aJ_Ja1aTy0" frameborder="0" allowfullscreen></iframe>

To simplify API development, Webiny heavily relies on a package called [Commodo](https://github.com/webiny/commodo).

What is Commodo?

> Commodo is a set of [higher order functions (HOFs)](https://en.wikipedia.org/wiki/Higher-order_function) that let you define and **com**pose rich data **mod**el **o**bjects.

In other words, it's a package that out-of-the-box offers a couple of simple higher-order-functions, which enable you to define rich data models. Once you define a model, you can use it for example to do a simple data validation. And if needed, by utilizing additional HOFs, you can even store the data to the database.

Let's check out a couple of examples to get a better understanding of what all of this means.

## Creating a simple model

Basic construct of every model is a field.  The following example shows how to create a simple data model that consists of four fields: `name`, `age`, `isAwesome`, and `about`. 

```javascript
import { withFields, string, number, boolean } from "@webiny/commodo";

// Use "withFields" HOF to define fields.
const AnimalSettings = withFields({
  type: string(),
  dangerous: boolean({ value: true })
})();

const Animal = withFields({
  name: string({
    validate: value => {
      if (!value) {
        throw Error("A pet must have a name!");
      }
    }
  }),
  age: number(),
  isAwesome: boolean(),
  about: fields({ instanceOf: AnimalSettings })
})();

// Now that we have a model defined, we can instantiate it.
const animal = new Animal();

// In the following code, note the "populate" and "validate" methods.
// These exist because we've used "withFields" HOF.

// Will throw data type error, cannot populate a string with number.
animal.populate({ age: "7" });

// This will work.
animal.populate({ age: 7 });

// Will throw a validation error - "name" field cannot be empty.
await animal.validate();

animal.name = "Garfield";
await animal.validate(); // All good.
```

## A more complex model

Using other HOFs, you can create more complex models, that have a name, hooks, and even a storage layer, so that you can easily save the data to the database. For example:

```javascript
import { withName, withHooks, withStorage, withFields, string, number, boolean, onSet } from "@webiny/commodo";
import { MongoDbDriver, withId } from "@commodo/fields-storage-mongodb";
import flow from "lodash.flow";

const User = flow(
  withFields({
    firstName: string(),
    lastName: string(),
    email: flow(onSet(value => { return value.toLowerCase(); } ))(string()),
    age: number(),
    scores: number({ list: true }),
    enabled: boolean({ value: false })
  }),
  withHooks({
    async beforeCreate() {
      if (await User.count({ query: { email: this.email } })) {
        throw Error("User with same e-mail already exists.");
      }
    }
  }),
  withName("User"), // Utilized by storage layer, to determine collection / table name.
  withId(),
  withStorage({
    driver: new MongoDbDriver({ database: new MongoDbDriver({ ... }) })
  })
)();

const user = new User();
user.populate({
  firstName: "Adrian",
  lastName: "Smith",
  email: "aDrIan@google.com",
  enabled: true,
  scores: [34, 66, 99],
});

await user.save();
```

> To make it easier, we've created the `@webiny/commodo` package, which aggregates all of the relevant `@commodo/*` and `commodo-*` packages and lets you import any HOF (or any other construct) within a single import statement. The list of all included packages can be found [here](/docs/api-development/commodo/packages-list).

> Using higher order functions (HOFs) is a very flexible approach for defining your data models, because you get to choose which functionality the model will posses.

## Is Commodo an ORM/ODM?

Fundamentally, Commodo is not an ORM/ODM, but can very quickly become one, by utilizing additional HOFs that deal with storing to and reading from a database. The `withStorage` HOF (seen in the above example) is what you'll need if you'll want to store the data into a database.

To learn more, check out the Commodo [crash course](/docs/api-development/commodo/crash-course) or [How to use with Webiny](/docs/api-development/commodo/how-to-use-with-webiny) pages.
