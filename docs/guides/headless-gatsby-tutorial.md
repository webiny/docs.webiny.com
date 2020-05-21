---
id: headless-gatsby-tutorial
title: Creating a blog with Headless CMS + Gatsby
sidebar_label: Creating a blog with Headless CMS + Gatsby
---

In this tutorial you will learn how to use Gatsby with our Headless CMS.

[Here is a sample gatsby blog using Webiny's Headless CMS](https://github.com/webiny/webiny-examples/blob/master/headlesscms-gatsby)   

## Creating a Blog Post model in Headless CMS

Run the `admin` app and navigate to **Headless CMS > Content Models > Models**. I will use the default `production` environment: it is important to use the same environment when you create and read models and content, otherwise you will not be able to access the data.

Create a new content model named `BlogPost` inside the default `Ungrouped` content model group. Next, add two **Text** fields by dragging and dropping them. Label them `title` and `body`, which will match every blog post's title and content. Optionally, it is possible make both of the fields **required** in the `Validators` tab.

Save your new fields before leaving the page and you will be able to create, publish and remove `BlogPost` entries.

![Blog post model](/img/guides/headless-gatsby-tutorial/blog-post-model.png)

## Managing Blog Posts

Navigate to **Headless CMS > Ungrouped > BlogPost** and create a few Blog Posts. Remember to Publish your articles so that you can fetch them later using the /read API.

## Pulling GraphQL data (Blog Posts) into Gatsby

Use [gatsby-source-graphql](https://www.gatsbyjs.org/packages/gatsby-source-graphql/) to fetch the Blog Posts into your Gatsby app.

Add the plugin in **gatsby-config.js** and configure its **options** like below. Most importantly, replace `YOUR_API_URL` with the url provided after deploying Webiny's API.

```
{
  resolve: `gatsby-source-graphql`,
  options: {
    typeName: "someTypeName",
    fieldName: "webinyHeadlessCms",
    url: "<YOUR_API_URL>/cms/read/production",
  },
}
```

We use the `read` API in order to pull Blog Post data and the `production` alias which points to the `production` environment.

Congratulations! Your blog posts are accessible within Gatsby and you can now display them within your app.

![Gatsby blog](/img/guides/headless-gatsby-tutorial/gatsby-blog.png)