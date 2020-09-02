---
id: headless-gatsby-tutorial
title: Creating a blog with Headless CMS + Gatsby
sidebar_label: Creating a blog with Headless CMS + Gatsby
---

In this tutorial we will learn how to use [Gatsby](https://www.gatsbyjs.org/) with the [Webiny Headless CMS](/docs/webiny-apps/headless-cms/features/content-modeling).

> All of the code shown in this tutorial is also hosted in our [GitHub](https://github.com/webiny/webiny-examples/blob/master/headlesscms-gatsby) repository.

## Prerequisites

##### 1. Gatsby-cli

Install gatsby-cli using the command below. We will use it to create our Gatsby Blog.

```npm install -g gatsby-cli```

##### 2. A Webiny Project

Make sure you have a working [Webiny project](/docs/get-started/quick-start) set up.

##### 3. Content Delivery API URL

The Headless CMS app exposes data via the Content Delivery API, which is a simple GraphQL API that dynamically updates its schema on content model changes that you make.
Once you've deployed your API stack (using the `yarn webiny deploy api` command), you should be able to find the Content Delivery API URL in the console output:

![Headless CMS API URLs](/img/guides/headless-nextjs-tutorial/headless-cms-api-url.png)

##### 4. Content Delivery API Access Token

In order to access the data via the Content Delivery API, we'll need a valid [Access Token](/docs/webiny-apps/headless-cms/features/access-tokens). These can be created via the Access Tokens form, which you can reach via the main menu:

![Headless CMS API Access Tokens](/img/guides/headless-nextjs-tutorial/access-tokens-menu.png)

Create a new token and make sure to copy the actual token string. We'll need it soon.

![Headless CMS API Access Tokens](/img/guides/headless-nextjs-tutorial/access-tokens-form.png)

## Creating our first content model

Now that we have all of the prerequisites out of the way, it's time to create our first [content model](/docs/webiny-apps/headless-cms/features/content-modeling). Let's open the **Models** section of the Headless CMS app.

![The Models View](/img/guides/headless-nextjs-tutorial/content-models-menu.png)

Let's create a new content model named **Blog Post**. Click on the "plus" icon in the lower right corner of the screen and in the dialog that's about to be shown, enter the following:

![New Content Model Dialog](/img/guides/headless-nextjs-tutorial/new-content-model-dialog.png)

For the content model group, we'll use the `Ungrouped`, which is the default group that comes out of the box with every Headless CMS app installation.

> Content model groups give you a way to organize the content models inside the main menu, allowing you to build logical sections for your content editors. You can click [here](/docs/webiny-apps/headless-cms/features/content-modeling-groups) to learn more.

Once we've submitted the form in the dialog, we should be redirected to the [Content Model Editor](/docs/webiny-apps/headless-cms/features/content-modeling). Let's add two fields: `title` as a `Text`, and `body` as a `Rich Text` field.
:::info
  `Rich Text` field returns a [slate](https://github.com/ianstormtaylor/slate) object, which is not a valid **React** element. So, you need to parse that data to render it.
  You can implement your own parser or use a package created by one of our community members: [`webiny-richtext-serializer`](https://www.npmjs.com/package/webiny-richtext-serializer)
  For usage example, please see this [sandbox](https://codesandbox.io/s/cold-frog-vfu5j?file=/src/App.js).
:::
They will match every blog post's title and body (content), respectively.

![Blog Post Model](/img/guides/headless-nextjs-tutorial/editor-blog-post-model.png)

Save the changes by clicking on the **Save** button in the top right corner of the screen.

Now it's time to create the actual content. Proceed by clicking on the **View content** button, located on the left side of the **Save** button.

You can also reach the content area by clicking on the newly added **Blog Post** item in the main menu:

![Blog Post Model - Main Menu](/img/guides/headless-nextjs-tutorial/blog-post-in-menu.png)

## Managing Content

As mentioned, navigate to **Headless CMS > Ungrouped > Blog Post** and create a blog post or two. Feel free to unleash your creativity. 😉

![Blog Post Form](/img/guides/headless-nextjs-tutorial/blog-post-form.png)

Once you feel happy with the blog post, you can save the changes by clicking the **Save** button, located at the bottom of the form.

The next and final step is to publish the blog post, which will make it actually visible in the Content Delivery API. To do that, click on the **Publish** icon, found at the right side in the form header.

Now that we've covered the basics of creating content models and managing content, we can move on to the Gatsby part of this tutorial.

## Creating a Gatsby Blog

We can create a [new Gatsby app](https://www.gatsbyjs.org/docs/quick-start/) by running `gatsby new myBlog` command.

This will generate a new folder in your working directory.

> Ideally, you should create your Gatsby project in a folder outside of the Webiny project.

Now that we have a new Gatsby app ready to go, let's see what it takes to make a simple page that renders a list of all blog posts that we have just created.

## Pulling GraphQL data (Blog Posts) into Gatsby
We will navigate to our `myBlog` folder created earlier and install NPM package [gatsby-source-graphql](https://www.gatsbyjs.org/packages/gatsby-source-graphql/). This will allow us to fetch the Blog Posts into our Gatsby app.

`yarn add gatsby-source-graphql`

We will add this plugin in the `plugins` array found in **gatsby-config.js** (located in the root of our Gatsby project) and configure its **options** like below. Most importantly, we will replace `CONTENT_DELIVERY_API_URL` with our API's url and `<CONTENT_DELIVERY_TOKEN>` with the token you created earlier (eg: `d3b45980479...`)..

```
{
  resolve: `gatsby-source-graphql`,
  options: {
    typeName: "someTypeName",
    fieldName: "webinyHeadlessCms",
    url: "<CONTENT_DELIVERY_API_URL>/cms/read/production",
    headers: {
      authorization: "<CONTENT_DELIVERY>"
    }
  },
}
```

We are using the `read` API in order to pull Blog Post data and the `production` alias which points to the `production` environment, because that is where we published our content earlier.

Once we have these ready, we can jump to the code. The following snippet shows the code located in the [`pages/index.js`](https://github.com/webiny/webiny-examples/blob/master/headlesscms-gatsby/src/pages/index.js) file:

```ts
import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

// Implement a custom parser or use one from the community: `webiny-richtext-serializer`
function parseRichTextDataAsHTML(data) { ... }

// The IndexPage component that renders our blog posts
const IndexPage = ({data}) => {
  // GraphQL queried data is automatically inserted into the `data` parameter used below
  const blogPosts = data.webinyHeadlessCms.listBlogPosts.data

  // We render a nice list of blog posts
  const BlogPosts = blogPosts.map(post => (
    <div key={`post-${post.id}`}>
      <h1>{post.title}</h1>
      <p
        style={{whiteSpace: "pre-wrap"}}
        dangerouslySetInnerHTML={{ __html: parseRichTextDataAsHTML(post.body) }}
      />
    </div>
  ))

  return (
    {/* We use Gatsby's Layout to make our Blog look nice */}
    <Layout>
      {BlogPosts}
    </Layout>
  )
}

export default IndexPage

// A GraphQL query that fetches our blogs' data
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

## Previewing the page

Let's run `yarn dev` in our Gatsby project directory so we can see our page in action:

![Gatsby Blog](/img/guides/headless-gatsby-tutorial/gatsby-blog.png)

>Note: In order to fetch the latest CMS data and update your content you will need to stop your Gatsby app and run `gatsby develop` again. If you are in production mode, you need to run `gatsby build` as well as `gatsby serve`.

## Conclusion

Congratulations! 🎉

We have have successfully created a simple page that displays a list of all created blog posts, all powered by Webiny Headless CMS and Gatsby.

> The same can also be achieved with other popular tools, like [Next.js](https://nextjs.org/). To learn more, click [here](/docs/guides/headless-nextjs-tutorial).
