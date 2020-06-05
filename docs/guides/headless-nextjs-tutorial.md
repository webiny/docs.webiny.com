---
id: headless-nextjs-tutorial
title: Creating a blog with Headless CMS + Next.js
sidebar_label: Creating a blog with Headless CMS + Next.js
---

In this tutorial you will learn how to use Next.js with our Headless CMS.

[Here is a sample next.js blog using Webiny's Headless CMS](https://github.com/webiny/webiny-examples/blob/master/headlesscms-nextjs)   

## Prerequisites

Make sure you have Webiny installed and your `admin` app is running with Headless CMS enabled. You will use it to create `Content Models` and `Publish` content.

You also need to know your API's url. You receive it when running `yarn webiny deploy api` and it can also be found int your AWS Management Console.

Finally, install create-next-app using `npm install -g @create-next-app/core`. We will use it to create our Next.js Blog.

## Creating a Blog Post model in Headless CMS

Run the `admin` app and navigate to **Headless CMS > Content Models > Models**. I will use the default `production` environment.

Environments allow you to create different content pools. They are particularly useful when separating `production`, `staging` and `development` envs. They never share data between each other after creation, so make sure you always stick to the same environment.

Create a new content model named `BlogPost` inside the default `Ungrouped` content model group. 

Model groups are a way how you organize the content models inside the main menu, allowing you to build logical sections for your content editors. Every model must belong to a group. You can create as many groups as you need by navigating to **Headless CMS > Content Models > Groups**.  

Next, add two fields: `title` as a `Text` and `body` as a `Long Text`. They will match every blog post's title and content. Optionally, it is possible make both of the fields **required** in the `Validators` tab.

Save your new fields before leaving the page and you will be able to create, publish and remove `BlogPost` entries. This is what your model should look like in the `admin` app:

![Blog post model](/img/guides/headless-gatsby-tutorial/blog-post-model.png)

You can read your data from your API by navigating to its `/cms/read/production` path, eg: https://dfgk2kz3e3qhn.cloudfront.net/cms/read/production - your URL will of course be different.

>Note that you will need an Access Token in order to authenticate and use your API. We will create one soon.

## Managing Blog Posts

Navigate to **Headless CMS > Ungrouped > BlogPost** and create a few Blog Posts. Use your creativity. 

Remember to Publish your articles, otherwise they will not be visible through the `/read` API.

## Creating a Next.js Blog

Create a [new Next.js app](https://nextjs.org/docs/getting-started/) by running `npx create-next-app`. I will use project name `myBlog` and the `Default starter app` template. 

This will generate a new folder in your working directory. Make sure the Next.js app is generated outside of your `Webiny` folder.

You may delete the `myBlog/pages/api` folder, as we will not use it.

## Pulling GraphQL data (Blog Posts) into Next.js

You need to create an Access Token in order to access your API. Go to the menu in **Webiny's Admin app > Sidebar > Settings > Headless CMS > Access Tokens**. Fill in your token's name, create it by clicking on `Save Access Token` and save the Token you receive.

Navigate to your Next.js project's directory `myBlog` and install `graphql-request` and `node-fetch` using `npm i graphql-request` and `npm i node-fetch` respectively, which we will use in order to fetch the Blog Posts into our Next.js app.

Open `pages/index.js`, import `GraphQLClient`, import `node-fetch`, set `global.fetch`'s value to the imported `node-fetch` object: this is important, as `graphql-request` makes use of `fetch` which does not exist by default in NodeJs. 

Write an async function `getStaticProps` that queries your Headless CMS API and returns the blog posts. This will employ of `graphql-request` and return a `props` object containing the Blog Posts' data.

Finally, update the rendered element's `div` indentified by `className="grid"` so that it now displays our Blog Posts instead. Your code will look like this in the end: 

```
import Head from "next/head";
import { GraphQLClient } from "graphql-request";
import fetch from "node-fetch";
global.fetch = fetch;

export async function getStaticProps(context) {
    const webinyHeadlessCmss = new GraphQLClient(
        "<YOUR_API_URL>",
        {
            headers: {
                authorization: "<YOUR_ACCESS_TOKEN>",
            },
        }
    );

    const blogPostsData = await webinyHeadlessCmss.request(`
      {
        listBlogPosts{
          data{
            id
            body
            title
          }
        }
      }
    `);

    return {
        props: {
            blogPostsData,
        },
    };
}

export default function Home({ blogPostsData }) {
    const blogPosts = blogPostsData.listBlogPosts.data;

    const BlogPosts =
        blogPosts && blogPosts.length > 0
            ? blogPosts.map((post) => (
                  <div key={`post-${post.id}`}>
                      <h1>{post.title}</h1>
                      <p style={{ whiteSpace: "pre-wrap" }}>{post.body}</p>
                  </div>
              ))
            : [];

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
            ... 
            /* the rest of index.js remains unmodified */
```

Replace `<YOUR_API_URL>` and `<YOUR_ACCESS_TOKEN>` with your API's url and the Token created in the `admin` app earlier.

We are using the `read` API in order to pull Blog Post data and the `production` alias which points to the `production` environment, because that is where we published our content earlier.

## Displaying blog posts

Go to `src/pages/index.js` and export a GraphQL query that pulls the Blog Posts:

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

  const BlogPosts = blogPosts.map(post => (
    <div key={`post-${post.id}`}>
      <h1>{post.title}</h1>
      <p style={{whiteSpace: "pre-wrap"}}>{post.body}</p>
    </div>
  ))

  return (
    <Layout>
      {BlogPosts}
    </Layout>
  )
}
```

Run `yarn dev` and you will be able to see your blog posts in Next.js's development mode.

Here's what `index.js` looks like in [our demo](https://github.com/webiny/webiny-examples/blob/master/headlesscms-nextjs/pages/index.js).

## Conclusion

Congratulations! Your blog posts are accessible within Next.js and you can now display them within your app.

![Next.js blog](/img/guides/headless-nextjs-tutorial/nextjs-blog.png)
