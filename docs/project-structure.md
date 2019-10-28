---
id: project-structure
title: Project Structure
sidebar_label: Project Structure
---

After creation, your project should look like this:

```
new-project
├── api/
│   ├── .serverless/
│   ├── .env.json
│   └── serverless.yml
├── apps/
│   ├── .serverless/
│   ├── admin/
│   ├── site/
│   └── serverless.yml
├── packages/
│   ├── project-utils/
│   └── theme/
├── .env.json
├── .gitignore
├── .prettierrc.js
├── README.md
├── babel.config.js
├── package.json
└── webiny.js
```

A Webiny project consists of an `API` and `React apps`. Those are located in `api` and `apps` folders, respectively.
You should not rename those two folders as our CLI counts on those to exist. 

## Serverless Components

Deployment of Webiny API and apps is powered by [Serverless Components](https://github.com/serverless/components).
However, do not attempt to run `serverless` in the root of `api` or `apps` folder, it won't work. Webiny CLI was built to handle much more than just deployment of the template files. If you want to know all the advanced details, we will add an article on the topic soon.

## API Folder

This folder contains the template file and an environment config file.
