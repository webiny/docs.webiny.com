---
id: headless-nextjs-tutorial
title: Creating a blog with Headless CMS + Next.js
sidebar_label: Creating a blog with Headless CMS + Next.js
---

In this short tutorial, we will learn how to use the popular [Next.js](https://nextjs.org/) React framework with the [Webiny Headless CMS](http://localhost:3000/docs/webiny-apps/headless-cms/features/content-modeling).

> All of the code shown in this tutorial is also hosted in our [GitHub](https://github.com/webiny/webiny-examples/blob/master/headlesscms-nextjs) repository.

## Prerequisites

##### 1. A Webiny Project

First of all, make sure you have a working [Webiny project](/docs/get-started/quick-start) set up.

> When setting up a new project, currently, there are [two project templates](/docs/get-started/quick-start#3-template-specific-setup) you can choose from: `full` and `cms`. Both include the Headless CMS app by default.

##### 2. Content Delivery API URL

The Headless CMS app exposes data via the Content Delivery API, which is a simple GraphQL API that dynamically updates its schema on your content model changes.
Once you've deployed your API stack (using the `yarn webiny deploy api` command), you should be able to find its URL in the console output:

![Headless CMS API URLs](/img/guides/headless-nextjs-tutorial/headless-cms-api-url.png)

##### 3. Content Delivery API Access Token

In order to access the data via the Content Delivery API, we'll need a valid [Access Token](/docs/webiny-apps/headless-cms/features/access-tokens). These can be created via the Access Tokens form, which you can reach via the main menu:

![Headless CMS API URLs](/img/guides/headless-nextjs-tutorial/access-tokens-menu.png)

Create a new token and make sure to copy the actual token string. We'll need it soon.

![Headless CMS API URLs](/img/guides/headless-nextjs-tutorial/access-tokens-form.png)

## Creating our first content model

Now that we have all of the prerequisites out of the way, it's time to create our first [content model](http://localhost:3000/docs/webiny-apps/headless-cms/features/content-modeling). Let's open the **Models** section of the Headless CMS app.

![Open the Models View](/img/guides/headless-nextjs-tutorial/content-models-menu.png)

Let's create a new content model named **Blog Post**. Click on the plus icon in the lower right corner of the screen and enter the following:

![New Content Model](/img/guides/headless-nextjs-tutorial/new-content-model-dialog.png)

For the content model group, we'll use the `Ungrouped`, which is the default group that comes out of the box with every Headless CMS app installation.

> Content model groups give you a way to organize the content models inside the main menu, allowing you to build logical sections for your content editors. Click [here](/docs/webiny-apps/headless-cms/features/content-modeling-groups) to learn more.

Once we've submitted the form in the dialog, we should be redirected to the [Content Model Editor](/docs/webiny-apps/headless-cms/features/content-modeling). Let's add two fields: `title` as a `Text`, and `body` as a `Rich Text` field. They will match every blog post's title and body (content), respectively.

<!---
Optionally, it is possible make both of the fields **required** in the `Validators` tab.
-->

![Blog post model](/img/guides/headless-nextjs-tutorial/editor-blog-post-model.png)

Save your new fields by clicking on the **Save** button in the top right corner of the screen.

Now it's time to create some content. Proceed by clicking on the **View content** button, located on the left side of the **Save** button. You can also reach the content area by clicking on the newly added **Blog Post** item in the main menu:

![Blog post model](/img/guides/headless-nextjs-tutorial/blog-post-in-menu.png)

## Managing Content

Navigate to **Headless CMS > Ungrouped > Blog Post** and create a couple of blog posts. Feel free to unleash your creativity. 😉

![Blog post model](/img/guides/headless-nextjs-tutorial/blog-post-form.png)

Once you feel happy with your post, you can save it by clicking on the **Save** button located at the bottom of the form. But, in order for the blog post to actually be available via the Content Delivery API, you need to publish it, which can be one by clicking on the **Publish** icon, found at the right side in the form header.

Now that we've covered the basics of creating content models and managing content, we can move on to the Next.js part of this tutorial.

## Creating a Next.js Blog

Create a [new Next.js app](https://nextjs.org/docs/getting-started/) by running `npx create-next-app`. We will use `my-blog` as the project name, and the `Default starter app` template with it.

![Creating a new Next.js app](/img/guides/headless-nextjs-tutorial/npx-next.png)

Ideally, you should create your Next.js project in a folder outside of the Webiny project. Also note, once the project is set up, the `my-blog/pages/api` folder can be deleted, as there is no need for it in this particular example.

## Fetching Blog Posts

We're going to start off by installing two NPM packages - [`graphql-request`](https://github.com/prisma-labs/graphql-request) and [`node-fetch`](https://github.com/node-fetch/node-fetch). These will help us with fetching the actual blog posts from the Content Delivery API.

In your Next.js project root, run the following command:

```
yarn add graphql-request node-fetch
```

Once we have these ready, we can jump to the code. The following snippet shows the code located in the [`pages/index.js`](https://github.com/webiny/webiny-examples/blob/master/headlesscms-nextjs/pages/index.js) file:

```ts
import Head from "next/head";
import { GraphQLClient } from "graphql-request";
import fetch from "node-fetch";

// The "graphql-request" library relies on "fetch" for
// making actual HTTP requests, which does't exist in Node.js.
global.fetch = fetch;

// Your Content Delivery API URL.
const CONTENT_DELIVERY_API_URL = "...";

// Your Content Delivery API Access Token.
const CONTENT_DELIVERY_API_ACCESS_TOKEN = "...";

// A simple GQL query that fetches a list of blog posts.
const LIST_BLOG_POSTS = /* GraphQL */ `
  {
    listBlogPosts {
      data {
        id
        body
        title
      }
    }
  }
`;

// We query the Content Delivery API here. More information about the "getStaticProps":
// https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
export async function getStaticProps(context) {
  const webinyHeadlessCms = new GraphQLClient(CONTENT_DELIVERY_API_URL, {
    headers: {
      authorization: CONTENT_DELIVERY_API_ACCESS_TOKEN
    }
  });

  const blogPostsData = await webinyHeadlessCms.request(LIST_BLOG_POSTS);

  return {
    props: {
      blogPostsData
    }
  };
}

// The main React component that renders the list of blog posts.
export default function Home({ blogPostsData }) {
  const blogPosts = blogPostsData.listBlogPosts.data;

  const BlogPosts = blogPosts.map(post => (
    <div key={`post-${post.id}`}>
      <h1>{post.title}</h1>
      <p style={{ whiteSpace: "pre-wrap" }}>{post.body}</p>
    </div>
  ));

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">My Awesome Blog</h1>

        <p className="description">
          Created using <a href="https://nextjs.org">Next.js</a> and{" "}
          <a href="https://www.webiny.com/">Webiny Headless CMS</a>
        </p>

        <div className="grid">{BlogPosts}</div>

        {/* remaning code removed for brevity */}
      </main>
    </div>
  );
}
```

## Previewing the page
Let's run `yarn dev` in our Next.js project directory so we can see our page in action:

![Next.js blog](/img/guides/headless-nextjs-tutorial/nextjs-blog.png)

## Conclusion

Congratulations! Your blog posts are accessible within Next.js and you can now display them within your app.


