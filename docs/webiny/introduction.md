---
id: introduction
title: Introduction
sidebar_label: Introduction
---

Webiny is a developer-friendly serverless CMS which helps you build websites, apps and APIs by providing a set of tools for fast frontend and backend development, a complete plugin based admin interface and a set of ready-made apps. It is built for self-hosting on AWS, but we do consider multi-cloud deployment in the future.

We've created a very simple system of plugins that powers both the React apps and the API services. As soon as you begin developing something with Webiny, you'll be working with plugins.

## Webiny apps

With Webiny, you don't have to start from scratch. We've developed several apps to get you going right away:
- `Admin` - this app is a skeleton for all your administration apps.
- `File Manager` - this app sits at the very core and handles everything related to file management.
- `Page Builder` - this app helps you to create your pages using a visual editor, without any coding.
- `Form Builder` - this app allows you to create forms for your website.
- `Headless CMS` - this app adds content modeling capabilities to your Webiny project.

## Technologies used

In this section we'll provide a brief overview of the technology we use to build Webiny.

### Tools used

Webiny is based on the following tools:

- [React](https://reactjs.org/) for everything related to UI.
- [Apollo GraphQL](https://www.apollographql.com/) for everything GraphQL (both React and API).
- [MongoDB database](https://www.mongodb.com/) as our go-to database, but we support database drivers (see next section).
- [Typescript](https://www.typescriptlang.org/) to make coding with plugins an enjoyable experience.  

On top of that we've created a very thin layer to bootstrap the API so you don't have to do it yourself. Simply create your GQL Schema plugin and start bringing your ideas to life. Almost everything can be overridden by creating a plugin so there are virtually no limits.

To build React apps we use a custom build process which is, at its core, a customized version of `react-scripts`. This means that most of the things you know from `create-react-app` apply here as well. However, our build process can easily be tweaked and replaced so you are not forced to use what we offer out of the box. If you're a Parcel ninja, or want a completely custom webpack config, you can easily do that too.

### Database support

Our database of choice is MongoDB and we've developed our apps using that particular database. However, we don't interact with the database directly. We use an ODM package called `Commodo`, which is also a Webiny package. It supports different database drivers so you can create a driver for the database of your choice and remove the MongoDB plugins. Remember? Everything is a plugin, even a database connection. How cool is that?

> We've taken good care to not lock our code into specifics of MongoDB. Parts of the apps which required us to use some specific database concepts (like `aggregate` for example) are implemented as plugins. Those are easy to override to suite your particular database.

### Deployment to the Cloud

To make it as simple as possible for you to get started, all you need is an AWS account. At this point we're deploying infrastructure using a custom deploy process which is based on reusable components which internally use plain AWS SDK. However, Webiny project is structured in such a way that allows you to use any Infrastructure-as-Code tool you want, so you don't have to use our deploy process. 

### Multi-cloud

We want Webiny to be deployable to the cloud of your choice. At this point in time, you can only deploy to AWS, but multi-cloud support is one of our main goals. See our [Roadmap](https://github.com/webiny/webiny-js/projects/7) and get involved on our Github.

## Community

There are several places you can join and get involved with Webiny:

- [Slack Community](https://www.webiny.com/slack) - join to get help or discuss bugs and features
- [Community Forum](https://community.webiny.com/) - if you prefer forum for discussions
- [Github Repo](https://github.com/webiny/webiny-js) - this is where Webiny code lives

## Start contributing

We're glad you're interested in contributing and would love to see your PR! Head over to our [contribution guidelines](https://github.com/webiny/webiny-js/blob/master/docs/CONTRIBUTING.md) to get familiar with the process.

Open a topic [on the forum](https://community.webiny.com/), file an [issue on Github](https://github.com/webiny/webiny-js/issues) or join our [Slack community](https://www.webiny.com/slack), we'll be glad to discuss the issue with you and provide help and directions.
