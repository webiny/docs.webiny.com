---
id: entity-overview
title: Entity - Overview
sidebar_label: Overview
---

Entity component, as the name already suggests, provides a way to work with
entities that are part of your business logic. It is our attempt at
creating an ODM library that doesn't get in your way and provides an intuitive
way of building entity classes.

## Quick example

In general, the first step of defining a new entity is to extend a base
`Entity` class from the `webiny-api` package, and then define attributes
in the class `constructor`. To quickly get an impression of how it works,
please consider the following examples:

```js
// user.entity.js
import { Entity } from "webiny-api";
import Company from "./company.entity.js";

export default class User extends Entity {
    static classId = "User";
    constructor() {
        super();
        this.attr("email")
            .char()
            .setValidators("required,email")
            .onSet(value => value.toLowerCase().trim());

        this.attr("password")
            .password()
            .setValidators("required");

        this.attr("firstName").char();
        this.attr("lastName").char();
        this.attr("age").integer();
        this.attr("enabled").boolean();

        this.attr("company")
            .entity(Company)
            .setValidators("required");
    }
}
```

```js
// company.entity.js
import { Entity } from "webiny-api";

export default class Company extends Entity {
    static classId = "Company";

    constructor() {
        super();
        this.attr("name").char();
        this.attr("type").char().setValidators("in:tourism:it:seo:trading");
        this.attr("enabled").boolean();
    }
}
```

```js
// createUser.js
import User from "./user.entity.js";

const data = {
  email: "john.doe@webiny.com",
  password: "12345678",
  firstName: "John",
  lastName: "Doe",
  age: 30,
  enabled: true,
  company: { name: "A test company", type: "it" }
};

const user = new User();
user.populate(data);
await user.save();
```

```js
// getUser.js
import User from "./user.entity.js";
​
const user = await User.findOne({query: {email: "john.doe@webiny.com"}});
console.log(user.firstName); // John

const company = await user.company;
console.log(company.name); // A test company
```

The examples demonstrate the basic usage of the Entity component.
In the next article we will talk more about all of the available attributes
and other options.
