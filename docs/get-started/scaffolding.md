---
id: scaffolding
title: Scaffolding
sidebar_label: Scaffolding
---

# Webiny Scaffold CLI

### Introduction
Sometimes when you develop applications with Webiny you will end up spending time doing common tasks that can easily become repetitive and tedious over time. This is where `webiny scaffold` comes into play.

### Usage
You will of course need to install Webiny's CLI if you haven't done so already: `npm -g install @webiny/cli`.

You will be greeted with various templates to choose from:
```
? Pick the template you'd like to employ (Use arrow keys)
> GraphQL Apollo Service - Creates an /api template and fills it
 in serverless.yml
```

After picking one of them, you might be asked a couple more questions in order to bootstrap your template. For example, a GraphQL Apollo Service template could ask for the name of your service:
```
? The name of your service
```

Once that's finished, your template should have been generated succesfully. As simple as that!

### Available Templates
* GraphQL Apollo Service (in PR)
* RESTful Service (WIP)
* App (WIP)
* Route Plugin (WIP)
* API Model (WIP)