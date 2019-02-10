---
id: new-theme-creating-a-theme
title: new-theme-creating-a-theme
sidebar_label: Creating a theme
---

> **Note:** If case you already haven't read the theme [**Overview**](developer-tutorials/new-theme-overview.md) page, we highly recommend you start from there.

## Basic setup

The easiest way to start with a new theme is to clone or just download the [webiny-theme-template](https://github.com/Webiny/webiny-theme-template) package.

This package contains the minimal theme set that is required for a working theme, and is a great place to start creating your own theme.

In our case, we will create a new empty directory, which will be the name of our new theme. Let's call it `summer-moonlight-theme`.

Inside that directory we will checkout the `webiny-theme-template` package using `yarn`.

```shell
git clone https://github.com/Webiny/webiny-theme-template.git .
```

> **Note:** Notice the dot `.` at the end of the command. This will clone the files into the current directory, instead of creating a new sub directory.

## Configuring your theme

### `package.json`

The first thing you should do is open the `package.json` file in your text editor. That file contains some basic information, like the theme name, authors, version and the javascript packages upon which this theme depends. Edit the file and populate at least the name field, others you can leave at they are.
