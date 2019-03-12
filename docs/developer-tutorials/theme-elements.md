---
id: theme-elements
title: Element layouts
sidebar_label: Element layouts
---

While creating pages, you might want to change the visual appearance of one or more CMS elements, be it the built
in ones or the ones registered via various add-ons.

> If you are not already familiar with CMS elements, we recommend
> you take a look at the [CMS Element Tutorial](/docs/developer-tutorials/cms-element-overview).

Although possible, it's not always necessary to override the whole element (by registering a plugin with the 
same name). Some elements have ability to choose the render component via a simple drop-down 
menu.

For example, for the "List of pages" element, we can choose the render component in the settings dialog:

![Webiny Admin Layout](assets/developer-tutorials/new-theme-addons-pages-list.png)

To list your own render component in the menu, you would just need to register an element-specific 
plugin. This is a very convenient way of having multiple variants of the same component, where each one is used only 
in a specific place. 

Not all elements have this built-in functionality. On the other hand, the "List of pages" element is certainly not the 
only one that has it. Certain add-ons also support this, like e.g. the Mailchimp add-on. 

## Examples 

#### List of pages 
To add a new render component, register a plugin with type `cms-element-pages-list-component`, for example:
 
```
{
    name: "cms-element-pages-list-component-default",
    type: "cms-element-pages-list-component",
    title: "Grid list",
    component: GridPageList
}
```

#### Mailchimp add-on
To add a new render component, register a plugin with type `cms-element-mailchimp-component`, for example:

```
{
    type: "cms-element-mailchimp-component",
    name: "cms-element-mailchimp-component-default",
    title: "Default newsletter form",
    component: MailchimpDefaultForm
}
```
