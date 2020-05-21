---
id: headless-gatsby-tutorial
title: Creating a blog with Headless CMS + Gatsby
sidebar_label: Creating a blog with Headless CMS + Gatsby
---

You can load all data managed in our Headless CMS into Gatsby using [gatsby-source-graphql](https://www.gatsbyjs.org/packages/gatsby-source-graphql/). In this tutorial we will create a blog using both of them.

## Creating a Blog Post model in Headless CMS

Run the `admin` app and navigate to **Headless CMS > Content Models > Models**. I'll use the default `production` environment: it is important to use the same environment when you create and read models and content, otherwise you won't be able to access the data.

Create a new content model named `BlogPost` inside the default `Ungrouped` content model group. Next, add two **Text** fields by dragging and dropping them. Label them `title` and `body`, which will match every blog post's title and content. Optionally, it is possible make both of the fields **required** in the `Validators` tab.

Save your new fields before leaving the page and you'll be able to create, publish and remove `BlogPost` entries.

## Managing Blog Posts

Navigate to **Headless CMS > Ungrouped > BlogPost** and create a few Blog Posts. Remember to Publish your articles so that you can fetch them later using the /read API.

## Pulling GraphQL data (Blog Posts) into Gatsby

Use [gatsby-source-graphql](https://www.gatsbyjs.org/packages/gatsby-source-graphql/) to fetch your Blog Posts into your Gatsby app.

Add the plugin in **gatsby-config.js** and configure its **options** like below. Most importantly, replace `YOUR_API_URL` with the url provided after deploying Webiny's API.

```
{
  resolve: `gatsby-source-graphql`,
  options: {
    typeName: "someTypeName",
    fieldName: "webinyHeadlessCms",
    url: "<YOUR_API_URL>/cms/read/production",
    // url: "https://api-eu-central-1.graphcms.com/v2/ck9bx379k0avl01yydeul58ck/master",
  },
}
```

We use the `read` API in order to pull Blog Post data and the `production` alias which points to the `production` environment.

Congratulations! Your blog posts are accessible within Gatsby and you can now display them within your app.