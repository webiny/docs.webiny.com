---
id: crash-course
title: Commodo Crash Course
sidebar_label: Crash Course
---

Let's try to showcase what you can achieve with Commodo, in a quick and clear way.

As mentioned in the [introduction](/docs/api-development/commodo/introduction), Commodo is a set of higher order functions (HOFs) that enable us to define and compose rich data model objects. So, we are going to do just that!

We are going to define simple `Cat` and `Dog` models, which will consist of a couple of simple fields, which are one of the base constructs of every model. Some of the fields will be the same and will exist on both models, and some of them won't. Let's see how we can accomplish that.

To do this, we are going to use the base `withFields` HOF and simple fields - `string`, `number`, and `boolean`.

```javascript
// To define fields, we import the "withFields" HOF, and the needed fields.
import { withFields, string, number, boolean } from "@webiny/commodo";

// Let's define Cat and Dog models. We won't bother with code duplication for now.
const Cat = withFields({
  name: string(),
  age: number(),
  willScratchYou: boolean()
})();

const Dog = withFields({
  name: string(),
  age: number(),
  drools: boolean()
})();
```

> To make it easier, we've created the `@webiny/commodo` package, which aggregates all of the relevant `@commodo/*` and `commodo-*` packages and lets you import any HOF (or any other construct) within a single import statement. The list of all included packages can be found [here](/docs/api-development/commodo/packages-list).

Now that we have our models defined, we can instantiate them and populate with data:

```javascript
// Create a new instance of Cat model.
const cat = new Cat();
cat.populate({ name: "Garfield", age: 6, willScratchYou: false });

// Create a new instance of Dog model.
const dog = new Dog();
dog.populate({ name: "Rex", age: 4, willScratchYou: false, drools: 1 });
```

Notice the data sent to the `dog.populate({ ... })`. Two things to note here:
1. `willScratchYou` field doesn't exist in the `Dog` model, so this value won't be assigned to the `dog` instance.
2. `drools` field exists, but it's a `boolean` field, not a `number`, so this will immediately throw an error.

```javascript
const cat = new Cat();
cat.populate({});
// We import withField HOF, and the needed fields.
import { withFields, string, number, boolean } from "@webiny/commodo";

// Let's define Cat and Dog models. We won't bother with code duplication.
const Cat = withFields({
  name: string(),
  age: number(),
  willScratchYou: boolean()
})();

const Dog = withFields({
  name: string(),
  age: number(),
  drools: boolean()
})();
```

, and validate the assigned data.

> You can utilize functions like `flow` (from [lodash](https://lodash.com/docs/4.17.15#flow) library) or `compose` (from [rambda](https://ramdajs.com/docs/#compose) library) to make your code much more readable.
