---
id: crash-course
title: Commodo Crash Course
sidebar_label: Crash Course
---

> To make this crash course cleaner and more to the point, the following examples show how to use the Commodo on its own. So, when you're done reading, head over to the [How to Use With Webiny?](/docs/api-development/commodo/how-to-use-with-webiny) page to see how to effectively use Commodo with Webiny.

Let's try to showcase what you can achieve with Commodo, in a quick and clear way.

## The basics

As mentioned in the [introduction](/docs/api-development/commodo/introduction), Commodo is a set of higher order functions (HOFs) that enable us to define and compose rich data model objects. So, we are going to do just that!

We are going to define simple `Cat` and `Dog` models, which will consist of a couple of simple fields, which are one of the basic constructs of every model. Some of the fields will be the same and will exist on both models, and some of them won't. Let's see how we can accomplish that.

To do this, we are going to use the base `withFields` HOF and simple fields - `string`, `number`, and `boolean`.

```js
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

```js
// Create a new instance of Cat model, and assign values to each field, one by one.
const cat = new Cat();
cat.name = "Garfield";
cat.age = 6;
cat.willScratchYou = false;

// Create a new instance of Dog model, and assign values via the "populate" method (which the "withFields" HOF defined).
const dog = new Dog();
dog.populate({ name: "Rex", age: 4, willScratchYou: false, drools: 1 });
```

Notice the data sent to the `dog.populate({ ... })`. The `willScratchYou` field doesn't exist in the `Dog` model, so this value will just be skipped while populating.

### Reusing fields with a custom HOF

Let's simplify this a bit, and create a new `withAnimalFields` HOF, which will append the common `name` and `age` fields for us. This way we won't have to define them in both `Cat` and `Dog` models, which will make our code more simple and easy to maintain.

```js
import { withFields, string, number, boolean } from "@webiny/commodo";
import flow from "lodash.flow";

// A simple HOF that appends the common name and age fields for us.
const withAnimalFields = base =>
  withFields({
    name: string(),
    age: number()
  })(base);

const Cat = flow(
  withAnimalFields,
  withFields({
    willScratchYou: boolean()
  })
)();

const Dog = flow(
  withAnimalFields,
  withFields({
    drools: boolean()
  })
)();
```

> Utilize functions like `flow` (from [lodash](https://lodash.com/docs/4.17.15#flow) library) or `compose` (from [rambda](https://ramdajs.com/docs/#compose) library) to make your code much more readable.

## Using models for data validation

Now that we've learned how to define models using `withFields` HOF and built-in fields, let's see how we can use models to do data validation.

### Data-type validation

When a value is assigned to a field of a model instance, it is immediately validated on a data-type level, meaning you cannot pass a string value to a field that doesn't accept strings.

Consider the following example:

```js
import { withFields, string, number, boolean } from "@webiny/commodo";

const Dog = withFields({
  name: string(),
  age: number(),
  drools: boolean()
})();

const dog = new Dog();

// Will throw data type error, because we cannot populate the "age" field with a string
// value. Since the field accepts only numbers, the age must be an integer or a float.
dog.age = "7";

// The same will happen here.
dog.populate({ name: "Rex", age: "7", drools: false });
```

> Data-type validation is always executed upon value assignment, synchronously.

### Custom validation

Additionally, you can also add your own custom, business logic related, validation. Unlike the data-type validation, which happens immediately upon assigning the value to a field, the custom validation is triggered by calling the `validate` method. Note that this method validates the whole model instance.

The following snippet shows how we can add your own custom validation and trigger it:

```js
import { withFields, string, number, boolean } from "@webiny/commodo";

const Dog = withFields({
  name: string({
    validate: value => {
      if (!value) {
        throw new Error("Name is required.");
      }
    }
  }),
  age: number({
    validate: value => {
      if (value && value < 2) {
        throw new Error("Your dog is to young.");
      }
    }
  }),
  drools: boolean()
})();

const dog = new Dog();

// Will throw an error, since the dog is too young.
dog.populate({ name: "Rex", age: 1 });
await dog.validate();

// The age is now correct, but now the name is missing.
dog.populate({ age: 2 });
await dog.validate();
```

> Unlike the data-type validation, custom validation can perform asynchronous operations.

## Saving the data to a database

There are few more HOFs we can use to add extra functionality to our models and model instances.

One of these is the `withStorage` HOF, which basically creates an [ORM/ODM](https://en.wikipedia.org/wiki/Object-relational_mapping) layer on top of your existing models, by enabling you to perform [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) operations against a real database.

Let's see how to add the `withStorage` HOF first. For this crash course, we will use the MongoDB driver.

### Setup and configuration

```js
import { withStorage, withName, withFields, string, number, boolean } from "@webiny/commodo";
import { MongoDBDriver, withId } from "@commodo/fields-storage-mongodb";

const Dog = flow(
  withFields({
    name: string(),
    age: number(),
    drools: boolean()
  })(),
  withStorage({ driver: new MongoDbDriver({ connection: ... }) }),
  withId(),
  withName("Dog")
)();
```

As we can see, we appended three HOFs to our initial `Dog` model.

We first added the `withStorage`, and passed the new `MongoDbDriver` instance as the driver, with the already existing database connection passed via the `connection` key (connection establishment was excluded from this code for brevity).

Then, we added the `withId`, which will just create a simple `string` field, and will make sure that when the value is assigned to it, that it is a valid MongoDB ID.

Finally, we added the `withName` HOF. In general, it is used to assign a name to your models, but in this case, the `withStorage` will use it as a database collection name. So, ever time you call the `save` method on a new `Dog` model instance (which we'll see shortly), a new entry will be inserted in the `Dog` collection in the database.

> Note that the MongoDB driver specific `withId` HOF and `MongoDbDriver` driver were imported from `@commodo/fields-storage-mongodb` package, and not from `@webiny/commodo`.

Alright, now that we got that set up, let's see how to perform basic CRUD operations.

### Performing basic CRUD operations

To save the data that was assigned to a model instance, we can do the following:

```js
const dog = new Dog();
dog.populate({ name: "Rex", age: 7, drools: false });

// The `save` method will create a new entry in the database, or just update an existing one.
await dog.save();
```

Later, if we don't need the data in the database anymore, we can call the `delete` method:

```js
await dog.delete();
```

We can also use the `findById`, `findOne`, and `find` methods to load the data from the database. Once the data is retrieved, a new model instance will be populated with it.

```js
// Returns a new `Dog` model instance, with all of the data already assigned to it.
// If an entry with given ID doesn't exist in the database, null will be returned.
await Dog.findById("some-mongodb-id");
```

```js
await Dog.findOne({ query: { age: 7, name: "Rex" } });
```

```js
// For querying in general, Commodo implements the MongoDB syntax for every driver.
// It's safe to use logical and query operators, like $and, $or, $gt, $lt, $in, and
// so on.
// This following code returns a Collection instance, which is basically an array of
// Dog model instances.
await Dog.find({ query: { age: { $gte: 7 } } });
```

## Any other useful HOFs?

In this crash course, we've briefly demonstrated what can be achieved with `withFields` and `withStorage` HOFs.

But there are more useful HOFs that you can utilize today, check out [the list](/docs/api-development/commodo/packages-list) of all available packages! 

> If you've created a new HOF and you believe it might be useful for other developers, feel free to [let us know](https://github.com/webiny/webiny-js), and we'll include it in the list!
