---
id: scaffolding
title: Scaffolding
sidebar_label: Scaffolding
---

### Introduction
Sometimes when you develop applications with Webiny you will end up spending time doing common tasks that can easily become repetitive and tedious over time. This is where `webiny scaffold` comes into play.

### Usage
This assumes you already have a Webiny project to work on. If not, see the [getting started guide](/docs/get-started/quick-start).

After running `webiny scaffold`, you will be prompted to choose from various templates. By default, Webiny comes with a couple of them, but you can create your own, or install the existing ones from NPM.

After picking one of them, you might be asked a couple more questions in order to bootstrap your template. For example, a GraphQL Apollo Service template could ask for the name of your service:
```
? The name of your service
```

Once that's finished, your template should have been generated succesfully. As simple as that!

### Default Templates
* GraphQL Apollo Service
* Custom Lambda