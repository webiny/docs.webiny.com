---
id: deploy-local-project
title: Deploying your project
sidebar_label: Deploying your project
---

When you are ready to deploy your shiny new project all you need is
an account at https://cloud.webiny.com.

Once you have created an account, you need to create a site you wish to deploy.
As soon as you create a site in the Webiny Cloud, you get a free
subdomain so you can test your site immediately even before you have
your own domain ready to link.

## Run the deploy
In your terminal, navigate to your project root folder:
```
// To deploy the entire project (admin, api and site)
yarn webiny deploy

// To deploy a single app
yarn webiny packages/admin
// or
yarn webiny packages/api
// or
yarn webiny packages/site
```

If this is the first time you are running this command, you will be
prompted to enter your `Personal Access Token` which you can find
in your site settings at https://cloud.webiny.com.

Once you enter the token, you will be prompted to select a site you
want to deploy your project to. At this point everything is taken care
of by the automated deploy process.

Next time you run a deploy, it will be a `no questions asked` experience.