---
id: new-theme-creating-theme
title: Creating a theme
sidebar_label: Creating a theme
---

> **Note:** In case you already haven't read the theme [**Overview**](/docs/developer-tutorials/new-theme-overview) page, we highly recommend you start from there.

## Basic setup

The easiest way to start with a new theme is to clone or just download the [webiny-theme-template](https://github.com/Webiny/webiny-theme-template) package.

This package contains the minimal theme set that is required for a working theme, and is a great place to start creating your own theme.

In our case, we will create a new empty directory, which will be the name of our new theme. Let's call it `summer-moonlight-theme`.

Inside that directory we will checkout the `webiny-theme-template` package using `git` command.

```shell
git clone https://github.com/Webiny/webiny-theme-template.git .
```

> **Note:** Notice the dot `.` at the end of the command. This will clone the files into the current directory, instead of creating a new sub directory.

## Configuring your theme

### `package.json`

The first thing you should do is open the `package.json` file in your text editor. That file contains some basic information, like the theme name, authors, version and the javascript packages upon which this theme depends. Edit the file and populate at least the name field, others you can leave at they are.

### `index.js`

Now it's time to open the `index.js` file, inside the `src` folder and start adjusting your theme attributes as per the [Overview](/docs/developer-tutorials/new-theme-overview) page.

> As a quick tip - if you just want to adjust the color scheme, you only need to amend the values inside the `src/style/variables.scss` file.

Once you're done with tweaking and adjusting your theme, it's time to move to the next step and actually use your theme and check how it looks like.