---
id: building-serverless-graphql-api-webiny
title: Building Serverless GraphQL API with Webiny
sidebar_label: Building Serverless GraphQL API with Webiny
---

When you read this title, for sure, you will notice a lot of buzzwords by seeing three different technologies in one place. Serverless and GraphQL and Webiny → Why do I need those?

Well, I might need the first two, but what is ***Webiny***? 

> Webiny helps us create serverless applications and APIs easily. It is built for self-hosting on AWS.

In this tutorial, we will go through building a GraphQL Apollo Service using Webiny Scaffold. We will learn the basics of Graphql, such as queries and mutations, and apply them to expand our API service in just 10 minutes. We will test our GraphQL service with the out-of-the-box TDD setup.

## Learning goals

Before we continue creating our API service, let's look at our ***learning goals*** for this tutorial. 

**Why Webiny,** Webiny is the easiest way to adopt serverless. It is a framework for building Serverless applications and APIs.

  Out of the box, we provide a complete plugin-based admin interface and a set of ready-made apps. It is built for self-hosting on ***AWS.***

  Webiny uses these technologies: 

  - React → For everything related to UI.
  - Apollo GraphQL → for everything GraphQL (both React and API).
  - MongoDB database → as our go-to database.
  - TypeScript → to make coding with plugins as an enjoyable experience.

  *If you have ever used these technologies, **you already know Webiny = )*** 

**Why Serverless,** moving to serverless is changing how we operate, deploy, architect, and run applications.
**How to GraphQL,** we will learn the core concepts of GraphQL. Dive into fetching data with queries and writing data with mutations.
**Serverless API with Webiny**, Webiny scaffold tool will offer us a GraphQL Apollo Service scaffold.

  We will create a habits tracker API service that will consist of one model, the Habit model. We will be able to access the **/graphql URL,** and with the practice from the ***How to GraphQL*** section, we will query and write new data for habits.

## Resources

- [Webiny Quick start](https://docs.webiny.com/docs/get-started/quick-start)
- [GraphQL Queries and Mutations](https://graphql.org/learn/queries/)
- [GraphQL Crash Course in 10 pics](https://dev.to/methodcoder/graphql-crash-course-in-10-pics-3b04)
- [Webiny API Architecture](https://docs.webiny.com/docs/deep-dive/architecture/api)
- [API Development with Webiny.](https://youtu.be/8aJ_Ja1aTy0)

## Prerequisites

To create our Serverless GraphQL API, we will need our Webiny project setup. 

The ***base prerequisites** to create a Webiny project are*:

1. **node.js >= 10.14.0**
2. **yarn < 2.0**
    - [https://yarnpkg.com/en/docs/install](https://yarnpkg.com/en/docs/install)
    - or your can just run `npm install yarn -g`
3. **AWS account with an IAM user for programmatic usage**
    - you can follow [this guide](https://docs.webiny.com/docs/guides/aws-credentials)
4. **MongoDB database** in the cloud
    - We recommend [MongoDB Atlas](https://docs.atlas.mongodb.com/getting-started/) if don't have a database already
    - You can follow [this guide](https://docs.webiny.com/docs/guides/mongodb-atlas) to create one

> Make sure to set up all the above requirements to continue with the next steps.

### A Webiny Project

Make sure you have a working [Webiny project](https://docs.webiny.com/docs/get-started/quick-start#1-create-a-new-project) set up.

When you set up your Webiny project and deploy it with ***yarn webiny deploy api --env=local***. 
The output of this command will look like below.

![Webiny project deploy result](/img/tutorials/serverless-graphql-api/webiny-project-deploy-result.png)

For now, the ***Main GraphQL API*** Url is what we care about the most.

In this Url, we can access the *GraphQL playground* in which we can see the complete GraphQL schema that was created from all of the services that Webiny provides. 

Check out the schema below.

![Webiny project GraphQL playground](/img/tutorials/serverless-graphql-api/webiny-project-graphql-playground.png)

When we create our API service, it will be shown in the Queries and Mutations sections. That means we have successfully created and deployed our API service.

Learn more about *Webiny API Architecture [here](https://docs.webiny.com/docs/deep-dive/architecture/api/).*

## Why Serverless?

Serverless is making significant changes to how we operate, deploy, architect, and run applications. Moving to serverless, you are estimated to save between 60% and 80% of your infrastructure and maintenance costs. But there are many other benefits that serverless brings. You can read more about the serverless benefits [here](https://dev.to/webiny/why-serverless-4l6f).

## How to GraphQL

**What is GraphQL?** 

GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. 

**Core Concepts**

Let's check some of the fundamental language constructs of GraphQL. Defining ***types*** as well as sending ***queries*** and ***mutations***.

We define the schema of our API with the GraphQL type system  ***[Schema Definition Language (SDL)](https://blog.graph.cool/graphql-sdl-schema-definition-language-6755bcb9ce51) →*** Which is the syntax for writing schemas.

**Fetching Data With Queries**

As we noted earlier, the Main GraphQL API URL is the Url we care about the most. The Main GraphQL API is the single endpoint. 

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
    The title was the only field that was specified in the queries payload. 
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

With GraphQL, these changes are made with so-called ***mutations***. 

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

Being able also to query information when sending mutations can be a powerful tool that allows retrieval of data from the server in just a single round trip. 

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

## Serverless API with Webiny

### Webiny Project Structure

As noted in the Prerequisites section, having a Webiny project ready is crucial for this tutorial to create our custom API Service. 

Before continuing to build our API service, let's see how Webiny project its organized. 

Check out our Webiny [**serverless-api**](https://github.com/AlbionaHoti/serverless-api) project structure in the image below:

![Webiny project structure](/img/tutorials/serverless-graphql-api/webiny-project-structure.png)

To learn more about the Webiny project structure, check out our docs ***[here](https://docs.webiny.com/docs/deep-dive/project-structure)***. 

The one folder that is important for us is the `API` folder.

![Webiny project API folder](/img/tutorials/serverless-graphql-api/webiny-project-api-folder.png)

As you can see these are other folders of individual apps that Webiny provides out of the box. These folders represent the API code that is triggered in the Cloud. 

> Our goal is to create our API service in the `api` folder.

:::info
In terms of deployments, the ***resources.js*** file is essential. In this file, we have all of the Cloud **[resources](https://docs.webiny.com/docs/deep-dive/architecture/resources)** that are necessary for the Webiny API to work.
:::

### Creating API Service

Webiny scaffold is a tool that you can use to set up different ready-made services. It offers you a couple of scaffolds. 

The one we need for our project is the **GraphQL Apollo Scaffold**. 

```bash
npx webiny scaffold
```

![Webiny GraphQL Apollo service scaffold](/img/tutorials/serverless-graphql-api/webiny-graphql-apollo-service-scaffold.png)

We will create a minimal API service, which we will name it the ***habits-tracker*** API. It will consist of one model, the habit model. We will be able to access the **/graphql** by querying and writing new habits.

![Webiny GraphQL Apollo service location](/img/tutorials/serverless-graphql-api/webiny-gas-package-location.png)

We need to provide the location of our new API service in the `api` folder because the `API` folder represents the whole Webiny API stack, and that's the location where we want to have our API service.

Every Apollo service that we create consists of different models. The *core data model* that we will have will be the **Habit** model.

![Webiny scaffold GraphQL Apollo Service model](/img/tutorials/serverless-graphql-api/webiny-scaffold-gas-model.png)

As we can see in the image below, the `habits-tracker` folder is created inside the `API` folder. Except for the `habits-tracker` folder that was created, there are some other changes. 

![Habits Tracker API service](/img/tutorials/serverless-graphql-api/habit-tracker-api-service.png)

As we mentioned earlier that the ***resources.js*** file represents the whole cloud infrastructure that needs to be deployed. The scaffolding tool created another entry in the ***resources.js*** file that represents the newly added API. Check the image below

![Habits Tracker resources](/img/tutorials/serverless-graphql-api/habit-tracker-resources.png)

## Habits tracker API

We mentioned earlier that Webiny has a simple system of plugins that powers both the React apps and the API services. As soon as you begin developing something with Webiny, you'll be working with plugins. 

The source code of our API service is in the `src` folder. The `plugins` folder is the place that contains all the plugins we are using. 

![Habits Tracker source code structure](/img/tutorials/serverless-graphql-api/habit-tracker-folder-structure.png)

The two most essential plugins are the **graphql** and the **model** plugin. We will go through each of the plugins and see what they represent.

![Habits Tracker plugins](/img/tutorials/serverless-graphql-api/habit-tracker-plugins.png)

**Model plugin**

The ***[models.ts](https://github.com/AlbionaHoti/serverless-api/blob/master/api/habits-tracker/src/plugins/models.ts)*** file has a list of commodo models that we want our GraphQL to have.

:::info 
[***Commodo***](https://github.com/webiny/commodo) is a set of higher order functions (HOFs) that let you define and **com**pose rich data **mod**el **o**bjects.
:::

The Commodo library is part of the Webiny project by default. It enables you to create data models.

**GraphQL plugin**

The ***[graphql.ts](https://github.com/AlbionaHoti/serverless-api/blob/master/api/habits-tracker/src/plugins/graphql.ts)*** file represents the schema we want our API to have. The scaffold tool creates the whole schema for us. We will have basic **getHabit** and **listHabits** **queries** and the basic mutations in place such as **createHabit, deleteHabit,** and **updateHabit.**

This is a very convenient and *easy to start with* for every developer to develop their custom API services. 

## Deploy

To see the updated GraphQL schema, we need to deploy our newly created project by running this command.

```bash
yarn webiny deploy api --env=local
```

If you are deploying a completely new service, you deploy the whole API stack. After the first deploy of the newly created service, we can continue deploying only that particular API service.

Now we can open our Main GraphQL Url, and see the updated GraphQL schema with ***Habits queries***.

![Habits Tracker query Habits](/img/tutorials/serverless-graphql-api/habit-tracker-query-habits.png)

And the ***habits*** mutations.

![Habits Tracker mutation habits](/img/tutorials/serverless-graphql-api/habit-tracker-mutation-habits.png)

Writing data with mutation.

```jsx
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
```

## Extend our API service

As we mentioned in the Habits Tracker API section, our scaffold tool provided us two different plugins. They are the  **graphql** and the **model** plugins.

![Habits Tracker plugins](/img/tutorials/serverless-graphql-api/habit-tracker-plugins.png)

**Model plugin**

The ***[models.ts](https://github.com/AlbionaHoti/serverless-api/blob/master/api/habits-tracker/src/plugins/models.ts)*** file has a list of commodo models that we want our GraphQL to have.

In the ***[models.ts](https://github.com/AlbionaHoti/serverless-api/blob/master/api/habits-tracker/src/plugins/models.ts)*** file, we will add another field in the Habit model such as `habitScore.` As shown in the image below

![Expand API service](/img/tutorials/serverless-graphql-api/expand-api-service.png)

After we change the model, we will need to change our GraphQL schema in the GraphQL too in the [`src/plugins/graphql.ts`](https://github.com/AlbionaHoti/serverless-api/blob/master/api/habits-tracker/src/plugins/graphql.ts) file

We have the `Habit` type; in addition to the `Habit,` we will have the `input` type used for mutations in writing and updating data. So whenever we have the Habit Type mentioned, we need to add the `habitScore` field. We have the `Where` and `Sort` types that are used when we query for Habits.

See the changes in the image below.

![Extend Habit model](/img/tutorials/serverless-graphql-api/extend-habit-model.png)

Now we need to deploy our changes by deploying only our API service. Our API service name is in the `resources.js` file; we can look for the Habits-tracker entry. Check the image below.

![Habits Tracker resources](/img/tutorials/serverless-graphql-api/habit-tracker-resources-api.png)

Deploy our new API service by running this command

```tsx
yarn webiny deploy api apiHabitsTracker api --env=local
```

![Habits Tracker deploy after extending our API](/img/tutorials/serverless-graphql-api/habit-tracker-deploy-extending-api.png)

As you can see, since we deployed our API Service, the deploy time is 13 seconds. 

We can now open our Main GraphQL API and see our newly added fields in the Habit model.

![Habits Tracker habitScore field](/img/tutorials/serverless-graphql-api/habit-tracker-habitscore-field.png)

We can now test out our API service by creating a new Habit. Check out the image below.

![Create new Habit - GraphQL Playground](/img/tutorials/serverless-graphql-api/graphql-playground-unauthorized.png)

As you can see, we got an error `Not authorized.` - To create new data, we need to create a Personal Access Token from our Admin UI. Check your profile by clicking on your image profile and then in your name. 

![Personal Access Tokens in user profile](/img/tutorials/serverless-graphql-api/generate-access-token-to-access-graphql.png)

Click on the Personal Access Tokens field, as shown in the image below:

![Personal access token](/img/tutorials/serverless-graphql-api/pat-profile.png)

And provide a token name in the input, as shown in the image below.

![Pat name](/img/tutorials/serverless-graphql-api/pat-name.png)

Copy the provided Personal Access token 

![Copy Pat](/img/tutorials/serverless-graphql-api/copy-pat.png)

Now we are ready to read queries and write mutations to our Habit model = )

Querying Habits

![Habit Tracker Query](/img/tutorials/serverless-graphql-api/habit-tracker-query.png)

Creating Habits
![Habit Tracker mutation](/img/tutorials/serverless-graphql-api/habit-tracker-mutation.png)

## Debug with TDD

One of the challenges of Cloud Development is debugging and slow iterations.

For every change we do, we have to deploy them to the Cloud to be sure if everything works as expected.

The Debugging process is prolonged, we can use console logs in our code and then re-deploying the code to see the cloud watch logs there. 

To experience an excellent flow of work, we write tests. As you may be noticed, in the `Habits Tracker` folder, we had a folder called `__tests__.`

![Habits Tracker source code structure](/img/tutorials/serverless-graphql-api/habit-tracker-folder-structure.png)

The `__tests__` folder is created initially for us from the `webiny scaffold` tool. With these tests, we are creating our own GraphQL Service locally, by creating the same function that will be executed by the API Gateway in the Cloud.

This enables us to invoke the function locally, and assert certain things are in order. 

This process is much faster because by running the `yarn test` command, the tests will be executed. We can continue writing other functionalities to the API, and by adding the tests, we can be assured that our API is working, and we can quickly debug if something goes wrong.

![Habits Tracker source code tests](/img/tutorials/serverless-graphql-api/habit-tracker-tests.png)


The [habits.js](https://github.com/AlbionaHoti/serverless-api/blob/master/api/habits-tracker/__tests__/graphql/habits.js) file contains simple GraphQL queries with which we invoke the actual handler. We are invoking the handler as if the actual API Gateway invoked it in the AWS cloud.



## Conclusion
