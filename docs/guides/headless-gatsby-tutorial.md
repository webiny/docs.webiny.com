---
id: headless-gatsby-tutorial
title: Creating a blog with Headless CMS + Gatsby
sidebar_label: Creating a blog with Headless CMS + Gatsby
---

In this tutorial you will learn how to use Gatsby with our Headless CMS.

[Here is a sample gatsby blog using Webiny's Headless CMS](https://github.com/webiny/webiny-examples/blob/master/headlesscms-gatsby)   

## Prerequisites

Make sure you have Webiny installed and your `admin` app is running with Headless CMS enabled. You will use it to create `Content Models` and `Publish` content.

You also need to know your API's url. You receive it when running `webiny deploy api` and it can also be found int your AWS Management Console.

Finally, install gatsby-cli using `npm install -g gatsby-cli`. We will use it to create our Gatsby Blog.

## Creating a Blog Post model in Headless CMS

Run the `admin` app and navigate to **Headless CMS > Content Models > Models**. I will use the default `production` environment.

Environments allow you to create different content pools. They are particularly useful when separating `production`, `staging` and `development` envs. They never share data between each other after creation, so make sure you always stick to the same environment.

Create a new content model named `BlogPost` inside the default `Ungrouped` content model group. 

Model groups are a way how you organize the content models inside the main menu, allowing you to build logical sections for your content editors. Every model must belong to a group. You can create as many groups as you need by navigating to **Headless CMS > Content Models > Groups**.  

Next, add two **Text** fields by dragging and dropping them. Label them `title` and `body`, which will match every blog post's title and content. Optionally, it is possible make both of the fields **required** in the `Validators` tab.

Save your new fields before leaving the page and you will be able to create, publish and remove `BlogPost` entries. This is what your model should look like in the `admin` app:

![Blog post model](/img/guides/headless-gatsby-tutorial/blog-post-model.png)

## Managing Blog Posts

Navigate to **Headless CMS > Ungrouped > BlogPost** and create a few Blog Posts. Use your creativity. 

Remember to Publish your articles, otherwise they will not be visible through the `/read` API.

## Creating a Gatsby Blog

Create a [new Gatsby app](https://www.gatsbyjs.org/docs/quick-start/) by running `gatsby new myBlog`.

This will generate a new folder in your working directory. Make sure the Gatsby app is generated outside of your `Webiny` folder.

## Pulling GraphQL data (Blog Posts) into Gatsby

Install and use [gatsby-source-graphql](https://www.gatsbyjs.org/packages/gatsby-source-graphql/) to fetch the Blog Posts into your Gatsby app.

Add the plugin in the `plugins` array found in **gatsby-config.js** and configure its **options** like below. Most importantly, replace `YOUR_API_URL` with your API's url.

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

We are using the `read` API in order to pull Blog Post data and the `production` alias which points to the `production` environment, because that's where we published our content earlier.

## Displaying blog posts

Go to `myBlog/src/pages/index.js` and export a GraphQL query that pulls the Blog Posts:

```js
export const query = graphql`{
  webinyHeadlessCms {
    listBlogPosts {
      data {
        id
        createdOn
        title
        body
      }
    }
  }
}`
```

This will supply `data` in our `IndexPage` component, where we have our Posts. Tweak `IndexPage` and add a little JSX to nicely display them:

```
const IndexPage = ({data}) => {
    const blogPosts = data.webinyHeadlessCms.listBlogPosts.data

    return /* ... use [blogPosts] to render the data here ... */
}
```

Here's what `index.js` looks like in [our demo](https://github.com/webiny/webiny-examples/blob/master/headlesscms-gatsby/src/pages/index.js).

## Conclusion

Congratulations! Your blog posts are accessible within Gatsby and you can now display them within your app.

![Gatsby blog](/img/guides/headless-gatsby-tutorial/gatsby-blog.png)