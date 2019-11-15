---
id: introduction
title: Introduction
sidebar_label: Introduction
---

Webiny is a developer-friendly serverless CMS which helps you build websites, apps and APIs by providing a set of tools for fast frontend and backend development, a complete and pluginable admin interface and a set of ready-made apps. It is built for self-hosting on AWS, but multi-cloud is coming next year.

We've created a very simple system of plugins that powers both the React apps and the API services. As soon as you begin developing something with Webiny, you'll be working with plugins.

## Webiny apps

With Webiny, you don't have to start from scratch. We've developed several apps to get you going right away:
- `Admin` - this app is a skeleton for all your administration apps.
- `File Manager` - this app sits at the very core and handles everything related to file management.
- `Page Builder` - this app helps you to create your pages using a visual editor, without any coding.
- `Form Builder` - this app allows you to create forms for your website. 
- `Headless CMS` - still in development, this app will add headless CMS to your Webiny project.  

## Technologies used

In this section we'll provide a brief overview of the technology we use to build Webiny.

### Tools used

Webiny is based on the following tools:

- [Apollo GraphQL](https://www.apollographql.com/) for everything GraphQL (both React and API).
- [create-react-app](https://create-react-app.dev/) for React apps, with minor tweaks to support a monorepo.
- [MongoDB database](https://www.mongodb.com/) as our go-to database, but we support database drivers (see next section).
- [Serverless Components](https://github.com/serverless/components) to deploy your code to the cloud quickly and painlessly.

On top of that we've created a very thin layer to bootstrap the API so you don't have to do it yourself. Simply create your GQL Schema plugin and start bringing your ideas to life. Almost everything can be overridden by creating a plugin so there are virtually no limits.

### Database support

Our database of choice is MongoDB and we've developed our apps using that particular database. However, we don't interact with the database directly. We use an ODM package called `Commodo`, which is also a Webiny package. It supports different database drivers so you can create a driver for the database of your choice and remove the MongoDB plugins. Remember? Everything is a plugin, even a database connection. How cool is that?

> We've taken good care to not lock our code into specifics of MongoDB. Parts of the apps which required us to use some specific database concepts (like `aggregate` for example) are implemented as plugins. Those are easy to override to suite your particular database.

### Multi-cloud

We want Webiny to be deployable to the cloud of your choice. At this point in time, you can only deploy to AWS, but multi-cloud support is one of our main goals. See our [Roadmap](https://github.com/webiny/webiny-js/projects/7) and get involved on our Github. 

## Community

There are several places you can join and get involved with Webiny:

- [Spectrum Chat](https://spectrum.chat/webiny) - join to get help or discuss bugs and features
- [Community Forum](https://community.webiny.com/) - if you prefer forum for discussions
- [Github Repo](https://github.com/webiny/webiny-js) - this is where Webiny code lives

## Start contributing

We're glad you're interested in contributing and would love to see your PR! Head over to our [contribution guidelines](https://github.com/webiny/webiny-js/blob/master/CONTRIBUTING.md) to get familiar with the process.

Open a topic [on the forum](https://community.webiny.com/), file an [issue on Github](https://github.com/webiny/webiny-js/issues) or join our [Spectrum chat](https://spectrum.chat/webiny), we'll be glad to discuss the issue with you and provide help and directions.
