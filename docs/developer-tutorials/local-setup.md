---
id: local-setup
title: Setting up a local project
sidebar_label: Setting up a local project
---

To setup a local project you will need to use `yarn` and `webiny-cli` package.

> We use `yarn` as our project setup is based on workspaces, which are not yet supported by `npm`.

If you don't have `yarn` already installed, visit [yarnpkg.com](https://yarnpkg.com/en/docs/install) to install it.

Once you have `yarn` up and running, create your empty project by doing:
```
mkdir my-project
cd my-project
yarn init -y
```

Now you need to install `webiny-cli` and run it:
```
// Install webiny-cli as a devDependency
yarn add webiny-cli --dev

// Run project initialization
yarn webiny init
```

## Project overview

Once finished, your project structure is ready and looks like this:
```
.
├── node_modules
├── packages
│   ├── admin
│   ├── api
│   ├── site
│   ├── theme
│   └── webiny-rewire
├── babel.config.js
├── package.json
└── yarn.lock
```
Your apps are located inside the `packages` folder.

> We like to use the
  monorepo approach as it greatly simplifies decoupling and code reuse and
  is especially useful when you are prototyping and refactoring a lot.
  Everything is at your fingertips, no need to switch projects, republish
  or link packages all the time.

The created packages are what we consider to be a very common
development scenario:
- `admin` - your project administration
- `site` - public website
- `theme` - a CMS theme for your `site`
- `api` - an API that powers both `admin` and `site` apps

## Helper package - `webiny-rewire`
Since `admin` and `site` packages are essentially `create-react-app`s,
by default they wouldn't be able to import files from other packages
in your monorepo, without building them beforehand.

So to simplify the development process for Webiny users, we
decided to use the `rescripts` tool to intercept the original webpack
config provided by `react-scripts` and isolated our modifications into
this helper package to keep it as transparent and flexible as possible.

If you need to override or change something to fit your project,
feel free to modify this package to your heart's content.

## Setting up your database and initial system data
The last step in the setup process is to connect to your database and
install the initial data.

If you don't have MongoDB already installed, please visit the
[official MongoDB website](https://docs.mongodb.com/manual/installation/)
for installation instructions or if you are a Docker user,
grab an image from the [Docker Hub](https://hub.docker.com/_/mongo/).

Once your MongoDB is up and running you need to update the connection
parameters in `packages/api/.env`:
```
MONGODB_SERVER=mongodb://localhost:27017
MONGODB_DB_NAME={your-database-name}
```

Now run the following, to have Webiny setup the initial system data:
```
cd packages/api && yarn setup
```

# Begin development
Since each app is a standalone application, each requires
its own build process. For each of the apps (`admin`, `site` and `api`)
open a separate terminal window:

## For `api`:
```
cd packages/api && yarn start
```

Once the API is started, it is available at `http://localhost:{port}/function/api`.
You can use one of the following tools to introspect the GraphQL schema:
- https://github.com/prisma/graphql-playground
- https://github.com/skevy/graphiql-app

## For `admin`:
```
cd packages/admin && yarn start
```

Once the `admin` app starts, login using the following credentials:
```
Username: admin@webiny.com
Password: 12345678
```

## For `site`:
```
cd packages/site && yarn start
```


