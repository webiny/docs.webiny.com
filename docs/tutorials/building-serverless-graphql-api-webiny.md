---
id: building-serverless-graphql-api-webiny
title: Building Serverless GraphQL API with Webiny
sidebar_label: Building Serverless GraphQL API with Webiny
---

When you read this title, for sure, you will notice a lot of buzzwords by seeing three different technologies in one place. Serverless and GraphQL and Webiny → Why do I need those?

:::note Note on Serverless
“Serverless allows you to build and run applications and services without thinking about servers. It eliminates infrastructure management tasks such as server or cluster provisioning, patching, operating system maintenance, and capacity provisioning.” - Resource [here](https://aws.amazon.com/serverless/).
:::

:::note Note on GraphQL
“At its core, GraphQL enables declarative data fetching where a client can specify what data it needs from an API. Instead of multiple endpoints that return fixed data structures, a GraphQL server only exposes a single endpoint and responds with the data a client asked for.” - Resources [here](https://www.howtographql.com/basics/0-introduction/). 
:::

:::note Note on Webiny
[Webiny](https://www.webiny.com) helps us create serverless applications and APIs easily. It is built for self-hosting on AWS.
:::

In this tutorial, we will create an API service with Webiny. Webiny provides a scaffolding tool to create GraphQL Apollo Services. We will extend the API service with the knowledge from the How to GraphQL section, where we will tackle queries and mutations. We will test the GraphQL service with the out-of-the-box TDD setup. 

Our example will be a Habits Tracker API service, which will consist of one model, the Habit model. By accessing the **`/graphql URL,`** we will read (query) and write (mutations) new data for our habits.


We have an active community on slack. If you struggle in any part of the tutorial, talk to the core-team, and get help. Webiny team is always there for any questions.

:::info 
You can find the example repo for this tutorial [here](https://github.com/webiny/webiny-examples/tree/master/serverless-graphql-api).
:::

--- 

## Why Webiny?

**Webiny** is the easiest way to adopt serverless. It is a framework for building Serverless applications and APIs.

  Out of the box, we provide a complete plugin-based admin interface and a set of ready-made apps. It is built for self-hosting on ***AWS.***

  #### Webiny uses these technologies: 

  - React → For everything related to UI.
  - Apollo GraphQL → for everything GraphQL (both React and API).
  - MongoDB database → as our go-to database.
  - TypeScript → to make coding with plugins as an enjoyable experience.

:::info
If you have ever used these technologies, **you already know Webiny = )**
:::


## Why Serverless?

Serverless is making significant changes to how we operate, deploy, architect, and run applications. Moving to serverless, you are estimated to save between 60% and 80% of your infrastructure and maintenance costs. But there are many other benefits that serverless brings. You can read more about the serverless benefits [here](https://dev.to/webiny/why-serverless-4l6f).


## How to GraphQL

**What is GraphQL?** 

GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. 

**Core Concepts**

Let’s check some of the fundamental language constructs of GraphQL. Defining ***types*** as well as sending ***queries*** and ***mutations***.

We define the schema of our API with the GraphQL type system  ***[Schema Definition Language (SDL)](https://blog.graph.cool/graphql-sdl-schema-definition-language-6755bcb9ce51) →*** Which is the syntax for writing schemas.

**Fetching Data With Queries**

As we noted earlier, the Main GraphQL API URL is the URL we care about the most. The Main GraphQL API is the single endpoint. 

GraphQL is about asking for specific fields on objects. It's completely flexible and lets the client decide what data is needed. 

The client needs to send more information to the server to express its data needs. This information is called a Query.

```jsx
// The query

/* 
    listHabits is called the root field of the query. 
    Everything that follows the root field is called the payload of the query.
*/

{
  listHabits { 
    title
    habitScore
  }
}

// The response
{
  "listHabits": [
    { "title": "Dring Water", "habitScore": 3 },
    { "title": "Run", "habitScore": 2 },
    { "title": "Journey", "habitScore": 3 }
  ]
}
/*
    The title was the only field that we specified in the queries payload. 
    If we needed the habit score, all we need to do is include the habitScore 
    the field in the query payload.
*/
```

In a GraphQL query, each field can have 0 or more arguments if specified in the GraphQL schema.

One of the significant strengths of GraphQL is it allows for naturally querying nested information. For example, to load all the habits that each person has written as additional info:

```jsx
{
  listAccountability {
    date 
      habits {
        title
      }
  } 
}
```

Next to requesting information from a server with *queries*, we can modify server-side data through *mutations*.

With GraphQL, we do these changes with so-called ***mutations***. 

**Writing Data with Mutations**

There are three kinds of mutations:

- **creating** new data
- **updating** existing data
- **deleting** existing data

Mutations generally follow the same syntactical structure as queries, but they always need to start with the ***mutation*** keyword.

Example mutation

```jsx
mutation {
  createHabit(title: "Drink Water", habitScore: 1) { // root Field - createHabit
    title
    habitScore
  }
}
```

Notice that similar to the query that we wrote before, the mutation also has a root field, the ***createHabit*** root field. We also learned about the concept of arguments for fields. 

The createHabit fields take two arguments that specify the habits title and habit score. Like with the query, we are also able to determine the payload for the mutation, in which we can ask for different properties of a new person object. 

Being able to query information when sending mutations can be a powerful tool that allows retrieval of data from the server in just a single round trip. 

The server response from the above mutation will look as below.

```jsx
{
  "createHabit": {
    "title": "Drink Water",
    "habitScore": 1,
  }
}
```

Precisely as with queries, the server response is shaped according to the mutation that was sent.


## Prerequisites

To create the Serverless GraphQL API, we will need to set up a Webiny project. 

The ***base prerequisites** to create a Webiny project are*:

1. **node.js >= 10.14.0**
2. **yarn < 2.0**
    - [https://yarnpkg.com/en/docs/install](https://yarnpkg.com/en/docs/install)
    - or you can just run `npm install yarn -g`
3. **AWS account with an IAM user for programmatic usage**
    - you can follow [this guide](https://docs.webiny.com/docs/guides/aws-credentials)
4. **MongoDB database** in the cloud
    - We recommend [MongoDB Atlas](https://docs.atlas.mongodb.com/getting-started/) if don't have a database already
    - You can follow [this guide](https://docs.webiny.com/docs/guides/mongodb-atlas) to create one

> Make sure to set up all the above requirements to continue with the next steps.

### A Webiny Project

When you create your [Webiny project](https://docs.webiny.com/docs/get-started/quick-start#1-create-a-new-project) and deploy it with ***yarn webiny deploy api --env=local***, the output of this command will look like below.

![Webiny project deploy result](/img/tutorials/serverless-graphql-api/webiny-project-deploy-result.png)

For now, the ***Main GraphQL API*** URL is what we care about the most.

In this URL, we can access the *`GraphQL playground`* in which we can see the complete GraphQL schema created from all of the services that Webiny provides. 

Check out the schema below.

![Webiny project GraphQL playground](/img/tutorials/serverless-graphql-api/webiny-project-graphql-playground.png)

When we create the API service, we will see the API in the Queries and Mutations sections. That means we have successfully created and deployed our API service.

Learn more about *Webiny API Architecture [here](https://docs.webiny.com/docs/deep-dive/architecture/api/).*

## Serverless API with Webiny

### Webiny Project Structure

Before continuing to build the API service, let’s see how Webiny projects are organized. 

Check out the Webiny [**serverless-api**](https://github.com/webiny/webiny-examples/tree/master/serverless-graphql-api) project structure in the image below:

![Webiny project structure](/img/tutorials/serverless-graphql-api/webiny-project-structure.png)

To learn more about the Webiny project structure, check out our docs ***[here](https://docs.webiny.com/docs/deep-dive/project-structure)***. 

The one folder that is important for us is the `API` folder.

![Webiny project API folder](/img/tutorials/serverless-graphql-api/webiny-project-api-folder.png)

As you can see, these are other folders of individual apps that Webiny provides out of the box. These folders represent the API code that is triggered in the Cloud. 

> Our goal is to create our API service in the `api` folder.

:::info
In terms of deployments, the ***resources.js*** file is essential. In this file, we have all of the Cloud **[resources](https://docs.webiny.com/docs/deep-dive/architecture/resources)** are necessary for the Webiny API to work.
:::
### Creating API Service

Webiny scaffold is a tool that you can use to set up different ready-made services. It offers you a couple of scaffolds. 

The one we need for our project is the **GraphQL Apollo Scaffold**. 

```bash
npx webiny scaffold
```

![Webiny GraphQL Apollo service scaffold](/img/tutorials/serverless-graphql-api/webiny-graphql-apollo-service-scaffold.png)

We will create a minimal API service, which we will name it the ***habits-tracker*** API. It will consist of one model, the habit model. We will be able to access the **`/graphql URL,`** by querying and writing new habits.

![Webiny GraphQL Apollo service location](/img/tutorials/serverless-graphql-api/webiny-gas-package-location.png)

We need to provide the location of our new API service in the `api` folder because the `API` folder represents the whole Webiny API stack, and that's the location where we want to have our API service.

Every Apollo service that we create consists of different models. The *core data model* that we will have will be the **Habit** model.

![Webiny scaffold GraphQL Apollo Service model](/img/tutorials/serverless-graphql-api/webiny-scaffold-gas-model.png)

As we can see in the image below, the `habits-tracker` folder is inside the `API` folder. Except for the `habits-tracker` folder, there are some other changes. 

![Habits Tracker API service](/img/tutorials/serverless-graphql-api/habit-tracker-api-service.png)

As we mentioned earlier, the ***resources.js*** file represents the whole cloud infrastructure that needs to be deployed. The scaffolding tool created another entry in the ***resources.js*** file that describes the newly added API. Check the image below.

![Habits Tracker resources](/img/tutorials/serverless-graphql-api/habit-tracker-resources.png)

## Habits tracker API

We mentioned earlier that Webiny has a simple system of plugins that powers both the React apps and the API services. As soon as you begin developing something with Webiny, you'll be working with plugins. 

The source code of the API service is in the `src` folder. The `plugins` folder is the place that contains all the plugins we are using. 

![Habits Tracker source code structure](/img/tutorials/serverless-graphql-api/habit-tracker-folder-structure.png)

The two most essential plugins are the **graphql** and the **model** plugin. We will go through each of the plugins and see what they represent.

![Habits Tracker plugins](/img/tutorials/serverless-graphql-api/habit-tracker-plugins.png)

**Model plugin**

The ***[models.ts](https://github.com/webiny/webiny-examples/blob/master/serverless-graphql-api/api/habits-tracker/src/plugins/models.ts)*** file has a list of commodo models that we want our GraphQL to have.

:::info 
[***Commodo***](https://github.com/webiny/commodo) is a set of higher order functions (HOFs) that let you define and **com**pose rich data **mod**el **o**bjects.
:::

The Commodo library is part of the Webiny project by default. It enables you to create data models.

**GraphQL plugin**

The ***[graphql.ts](https://github.com/webiny/webiny-examples/blob/master/serverless-graphql-api/api/habits-tracker/src/plugins/graphql.ts)*** file represents the schema we want the API to have. The scaffolding tool creates the whole schema for us. We will have basic **getHabit** and **listHabits** **queries** and the basic mutations in place such as **createHabit, deleteHabit,** and **updateHabit.**

This is a very convenient and *easy to start with* for every developer to develop their custom API services. 

## Deploy

To see the updated GraphQL schema, we need to deploy the created project by running this command.

```bash
yarn webiny deploy api --env=local
```

If you are deploying a completely new service, you deploy the whole API stack. After the first deploy of the created service, we can continue deploying only that particular API service.

Now we can open the Main GraphQL URL, and see the updated GraphQL schema with ***Habits queries***.

![Habits Tracker query Habits](/img/tutorials/serverless-graphql-api/habit-tracker-query-habits.png)

And the ***Habits mutations***.

![Habits Tracker mutation habits](/img/tutorials/serverless-graphql-api/habit-tracker-mutation-habits.png)

<!-- Writing data with the mutation. -->

<!-- ```jsx
// The request
mutation {
  habits {
    createHabit(data: {title: "Drink water"}) {
      data {
        title
      }
    }
  }
}

// The response
{
  "data": {
    "habits": {
      "createHabit": {
        "data": {
          "title": "Drink water"
        }
      }
    }
  }
}
```

Fetching with queries

```jsx
// The request
query {
  habits {
    listHabits {
      data {
        title
        id
      }
    }
  }
}
// The response
{
  "data": {
    "habits": {
      "listHabits": {
        "data": [
          {
            "title": "Drink water",
            "id": "5f14d446b59a9e0007f8d662"
          }
        ]
      }
    }
  }
}
``` -->


## Extend the API service

We mentioned in the Habits Tracker API section that the scaffolding tool setup provides two plugins. They are the  **graphql** and the **model** plugins.

![Habits Tracker plugins](/img/tutorials/serverless-graphql-api/habit-tracker-plugins.png)

**Model plugin**

In the ***[models.ts](https://github.com/webiny/webiny-examples/blob/master/serverless-graphql-api/api/habits-tracker/src/plugins/models.ts)*** file, we will add another field in the Habit model such as `habitScore.` As shown in the image below

![Expand API service](/img/tutorials/serverless-graphql-api/expand-api-service.png)

After we change the model, we will need to change the GraphQL schema in the GraphQL too in the [`src/plugins/graphql.ts`](https://github.com/webiny/webiny-examples/blob/master/serverless-graphql-api/api/habits-tracker/src/plugins/graphql.ts) file

We have the `Habit` type; besides the `Habit,` we will have the `input` type used for mutations in writing and updating data. So whenever we have the Habit Type mentioned, we need to add the `habitScore` field. We have the `Where` and `Sort` types that are used when we query for Habits.

See the changes in the image below.

![Extend Habit model](/img/tutorials/serverless-graphql-api/extend-habit-model.png)

Now we will deploy only the new API service we created, for the changes to take place in the cloud.

The API service name is in the `resources.js` file; we can look for the Habits-tracker entry. Check the image below.

![Habits Tracker resources](/img/tutorials/serverless-graphql-api/habit-tracker-resources-api.png)

Deploy the new API service by running this command

```tsx
yarn webiny deploy api apiHabitsTracker api --env=local
```

![Habits Tracker deploy after extending our API](/img/tutorials/serverless-graphql-api/habit-tracker-deploy-extending-api.png)

As you can see, since we deployed the API Service, the deploy time is 13 seconds. 

We can now open the Main GraphQL API and see the newly added fields in the Habit model.

![Habits Tracker habitScore field](/img/tutorials/serverless-graphql-api/habit-tracker-habitscore-field.png)

We can now test out the API service by creating a new Habit. Check out the image below.

![Create new Habit - GraphQL Playground](/img/tutorials/serverless-graphql-api/graphql-playground-unauthorized.png)

As you can see, we got an error `Not authorized.` - To create new data, we need to create a Personal Access Token from the Admin UI. Check your profile by clicking on your image profile and then in your name. 

![Personal Access Tokens in user profile](/img/tutorials/serverless-graphql-api/generate-access-token-to-access-graphql.png)

Click on the Personal Access Tokens field, as shown in the image below:

![Personal access token](/img/tutorials/serverless-graphql-api/pat-profile.png)

And provide a token name in the input, as shown in the image below.

![Pat name](/img/tutorials/serverless-graphql-api/pat-name.png)

Copy the provided Personal Access token 

![Copy Pat](/img/tutorials/serverless-graphql-api/copy-pat.png)

Now we are ready to read queries and write mutations to the Habit model = )

Querying Habits

![Habit Tracker Query](/img/tutorials/serverless-graphql-api/habit-tracker-query.png)

Creating Habits
![Habit Tracker mutation](/img/tutorials/serverless-graphql-api/habit-tracker-mutation.png)

## Debug with TDD

One of the challenges of Cloud Development is debugging and slow iterations.

For every change we do, we have to deploy them to the Cloud to ensure everything works as expected.

The Debugging process is prolonged; we can use console logs in the code and then re-deploying the code to see the cloud watch logs there. 

To experience an excellent flow of work, we write tests. As you may be noticed, in the `Habits Tracker` folder, we had a folder called `__tests__.`

![Habits Tracker source code structure](/img/tutorials/serverless-graphql-api/habit-tracker-folder-structure.png)

The scaffolding tool created the `__tests__` folder for us. With the existing tests, we are creating the local GraphQL Service, by creating the same function that the API Gateway will execute in the Cloud.

This enables us to invoke the function locally, and assert certain things are in order. 

This process is much faster because by running the `yarn test` command, the tests that the scaffold created will be executed.

We have one test for the CRUD operations for the base model, and one for the validation if the title field is not valid. See the image below.

![Habits Tracker source code tests](/img/tutorials/serverless-graphql-api/habit-tracker-tdd-test.png)

The tests are passing because I already added the `habitScore` field on the tests. 

As a practice, you can continue and add the changes in the [`__tests__/graphql/habits.js`](https://github.com/webiny/webiny-examples/blob/master/serverless-graphql-api/api/habits-tracker/__tests__/graphql/habits.js) file, and in the [`__tests__/crud.test.js`](https://github.com/webiny/webiny-examples/blob/master/serverless-graphql-api/api/habits-tracker/__tests__/crud.test.js) file, to see if the tests will pass or fail.


You can continue writing other functionalities to the API, and by adding the tests, we can be assured that the API is working, and we can quickly debug if something goes wrong.


If you have any question, as we noted earlier, join our **Slack Community** [here](https://www.webiny.com/slack). Our team is always there for any questions.

## Resources

- [Webiny Quick start](https://docs.webiny.com/docs/get-started/quick-start)
- [GraphQL Queries and Mutations](https://graphql.org/learn/queries/)
- [GraphQL Crash Course in 10 pics](https://dev.to/methodcoder/graphql-crash-course-in-10-pics-3b04)
- [Webiny API Architecture](https://docs.webiny.com/docs/deep-dive/architecture/api)
- [API Development with Webiny.](https://youtu.be/8aJ_Ja1aTy0)

## Conclusion

We learned what [Webiny](https://www.webiny.com/) offers in terms of serverless applications. Having a [Webiny project](https://docs.webiny.com/docs/get-started/quick-start) set up means having [several apps](https://www.webiny.com/serverless-apps) to get you going right away. 

With a couple of steps, we were able to start testing our custom API service immediately. 

We learned the GraphQL fundamentals such as queries and mutations, and tested our knowledge with the Webiny API service scaffold. 

You can continue developing your API service with additional models and functionalities.

Want to learn more about Serverless API with Webiny? Check our docs [here](http://localhost:3000/docs/api-development/commodo/introduction).

Until next time, happy Coding = )