---
id: introduction
title: Theme development introduction
sidebar_label: Introduction
---

In this section, you will learn all about Webiny themes, basic concepts. You'll get all the knowledge needed to create your own theme.

## Intro
Styling is one of the more important tasks you might want to do on a website. The theme passes on the visual identity of the brand and ensures a uniform presentation across all the channels. 

Webiny apps, like [Page Builder](webiny-apps/page-builder/introduction.md) and [Form Builder](webiny-apps/form-builder/introduction.md) support themes and layouts to control the visual presentation of your content. These are provided by the theme.

## Webiny theme

Each Webiny instance is compiled with a single theme. To change a theme, you need to re-build and re-deploy your Webiny site.

Webiny theme is only a thin wrapper around React components with a few CSS files. There are almost no restrictions on what you can do and used inside the theme, including 3rd party libraries and frameworks. 