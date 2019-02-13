---
id: cms-element-creating-element-group
title: CMS Element - Creating element group
sidebar_label: Creating element group
---

> If you are not already familiar with how plugins work, we recommend
you first take a look at the [Plugins Crash Course](/docs/developer-tutorials/plugins-crash-course) before reading this article.

Webiny CMS ships with a set of default element groups:
- `cms-element-group-basic`
- `cms-element-group-layout`
- `cms-element-group-image`
- `cms-element-group-media`
- `cms-element-group-form`
- `cms-element-group-social`
- `cms-element-group-code`
- `cms-element-group-saved`

You can easily create new groups for your new elements.

Here is an example of a plugin to register a new element group:
<script src="https://gist.github.com/Pavel910/73625e3a03df383fb92cf24db9a72de9.js"></script>

Line `2` imports an `svg` image as a React component.

Lines `7-9` define title and icon of the element group.