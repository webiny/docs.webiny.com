---
id: get-started-create-a-page-category
title: Create a page category
sidebar_label: Create a page category
---

Great works so far! This is where things get more interesting and fun.

## Structuring your content

Let's talk about categories, why they are important, and how to use them to structure your site.

Each page you create, belongs to a category. A page can only be in one category at a time. Typical categories are blog posts, news articles, static pages and similar.

Organizing your content in categories allows you to define the structure for your content.

By default Webiny comes with 2 predefined categories, static pages and blog posts. Under static pages you would place pages like your homepage, about us page, privacy policy, and similar. Under blog, you would place your blog articles.

You can always add more categories if required. To delete an existing category, you need to first ensure that no pages are linked to that category.

Having pages structured inside categories will also allow you to create lists of pages, filtered based on those categories.

## Creating a page category

Access your Webiny administration (remember that's your-temp-domain "/admin"), and in the main menu select `Content > Page Categories`. This will show a screen containing all existing page categories.

<img src="/docs/assets/cms-guides/cms-basic-page-category.png" alt="Webiny Page Category"/>

Like on most pages in the administration, if you see a big green button, that's usually in the lower right corner, that button is for adding a new entry. In this case, if you press it, you will be creating a new page category.

A page category consists of a name, optional url prefix and a layout. Let's go through these in detail.

A **name** is an internal name that symbolizes that page category. When you're creating a new page, the system will ask you to select a page category for that page. You select the category using the category name.

**Url prefix** is part of the path that will be automatically appended to all pages in this category. For example if you define a url prefix of value "/blog" and then create a new blog post named "Hello World", the path section of the url will be `/blog/hello-world`.

**Layout** is the template that will be used to render this page. Depending on your theme, there might be one of more layouts you can choose from.

When you're ready, try and create a new page category, or just leave the existing ones. This section was primarily about understanding page categories and their role.

In the next section we will cover the page list screen and create our first page.
