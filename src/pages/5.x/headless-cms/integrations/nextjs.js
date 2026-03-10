/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image6 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/integrations/assets/nextjs-starter/preview-mode.png'
import _Image5 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/integrations/assets/nextjs-starter/graphql-playground-preview.png'
import _Image4 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/integrations/assets/nextjs-starter/next-blog-example.png'
import _Image3 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/integrations/assets/nextjs-starter/environment-variables.png'
import _Image2 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/integrations/assets/nextjs-starter/api-playground-open.png'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/integrations/assets/nextjs-starter/nextjs-tutorial-models.png'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Building a Frontend with NextJS",
  "description": "Learn how to build a frontend for Webiny Headless CMS with NextJS",
  "type": "docs",
  "showPageHeader": true,
  "fullWidth": false,
  "version": "5.x"
};
const docsearch = {
  "type": "docs",
  "weight": 100,
  "versions": ["5.x"]
};
const navigation = _navigation;
const versions = _versions;
const tableOfContents = [{
  "title": "Overview",
  "slug": "overview",
  "children": []
}, {
  "title": "Getting Started With Webiny",
  "slug": "getting-started-with-webiny",
  "children": [{
    "title": "Authors",
    "slug": "authors",
    "children": []
  }, {
    "title": "Posts",
    "slug": "posts",
    "children": []
  }]
}, {
  "title": "Set Up a NextJS Project",
  "slug": "set-up-a-next-js-project",
  "children": []
}, {
  "title": "Fetching Data",
  "slug": "fetching-data",
  "children": []
}, {
  "title": "Rendering Rich Text Fields",
  "slug": "rendering-rich-text-fields",
  "children": []
}, {
  "title": "Using NextJS Preview Mode",
  "slug": "using-next-js-preview-mode",
  "children": []
}, {
  "title": "Conclusion",
  "slug": "conclusion",
  "children": []
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
const Image = makeShortcode("Image");
const Editor = makeShortcode("Editor");
const layoutProps = {
  Layout,
pageData,
docsearch,
navigation,
versions,
tableOfContents
};
const MDXLayout = "wrapper"
export default function MDXContent({
  components,
  ...props
}) {
  return <MDXLayout {...layoutProps} {...props} components={components} mdxType="MDXLayout">









<Alert type="success" title="What you'll learn" mdxType="Alert">
<ul>
<li parentName="ul">{`how to fetch data from Webiny`}</li>
<li parentName="ul">{`how to parse data including rich text`}</li>
<li parentName="ul">{`how to use preview mode`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`In this article we’ll learn how to integrate a NextJS application that uses Webiny as a Headless CMS. We’ll go through the following:`}</p>
<ol>
<li parentName="ol">{`Getting started with Webiny`}</li>
<li parentName="ol">{`Setting up a NextJS project`}</li>
<li parentName="ol">{`Fetching data`}</li>
<li parentName="ol">{`Rendering Webiny’s rich text field`}</li>
<li parentName="ol">{`Using NextJS preview mode`}</li>
</ol>
<_Heading level={2} id={"getting-started-with-webiny"} nextElement={{
      "type": "paragraph"
    }}>Getting Started With Webiny</_Heading>
<p>{`Webiny works really well as a headless CMS with `}<a parentName="p" {...{
        "href": "http://nextjs.org"
      }}>{`NextJS`}</a>{`, especially is that so when using static rendering and the new Preview mode available in NextJS version 9.3.`}</p>
<p>{`The easiest way to get started is to use the `}<a parentName="p" {...{
        "href": "https://github.com/webiny/nextjs-starter-webiny"
      }}>{`official starter`}</a>{`, but we’re going to walk through a similar custom implementation here.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`Use the `}<a parentName="p" {...{
          "href": "https://github.com/webiny/nextjs-starter-webiny"
        }}>{`official starter`}</a>{` for 1-click install on Vercel.`}</p>
</Alert>
<p>{`For this tutorial, we’re going to assume you have already done the following:`}</p>
<ol>
<li parentName="ol"><_Link href="/docs/5.x/infrastructure/aws/configure-aws-credentials">{`Set up your AWS credentials locally`}</_Link></li>
<li parentName="ol"><_Link href="/docs/5.x/core-development-concepts/basics/project-deployment">{`Deployed a Webiny instance to a dev environment`}</_Link></li>
</ol>
<p>{`Once you have an app up and running, click into the “HeadlessCMS” app in the sidebar, click on `}<em parentName="p">{`models`}</em>{`.`}</p>
<Image src={_Image1} alt={"Sidebar - Headless CMS Models"} mdxType="Image" />
<p>{`Add the following models and fields: (Skip this step if you already have content models defined)`}</p>
<_Heading level={3} id={"authors"} nextElement={{
      "type": "list",
      "ordered": false,
      "start": null,
      "spread": false
    }}>Authors</_Heading>
<ul>
<li parentName="ul">{`A `}<inlineCode parentName="li">{`text`}</inlineCode>{` field with the value “name”`}</li>
<li parentName="ul">{`A `}<inlineCode parentName="li">{`text`}</inlineCode>{` field with the value “slug” (optionally add a validator using this regex which will make sure you have valid urls: `}<inlineCode parentName="li">{`^(?!.*--)[a-z0-9\\-]+$`}</inlineCode>{`)`}</li>
<li parentName="ul">{`a `}<inlineCode parentName="li">{`files`}</inlineCode>{` field with the value “picture”`}</li>
</ul>
<_Heading level={3} id={"posts"} nextElement={{
      "type": "list",
      "ordered": false,
      "start": null,
      "spread": false
    }}>Posts</_Heading>
<ul>
<li parentName="ul">{`A `}<inlineCode parentName="li">{`text`}</inlineCode>{` field with the value “title”`}</li>
<li parentName="ul">{`A `}<inlineCode parentName="li">{`text`}</inlineCode>{` field with the value “slug” (optionally use the regex above as a validator)`}</li>
<li parentName="ul">{`A `}<inlineCode parentName="li">{`files`}</inlineCode>{` field with the value “featured image”`}</li>
<li parentName="ul">{`A `}<inlineCode parentName="li">{`rich text`}</inlineCode>{` field with the value “body”`}</li>
<li parentName="ul">{`A `}<inlineCode parentName="li">{`reference`}</inlineCode>{` field with the value “author”`}</li>
</ul>
<p>{`Next, add some content by going to Headless CMS > Ungrouped and choosing a content model.`}</p>
<p>{`Before we spin up our NextJS project, let’s go to the API playground and see how our GraphQL API is structured. In the sidebar menu, choose “API Playground” to open the GraphQL explorer.`}</p>
<Image src={_Image2} alt={"GraphQL playground"} mdxType="Image" />
<p>{`Notice that there are four APIs listed in the tabs at the top of the page. Choose `}<strong parentName="p">{`HeadlessCMS - Read API`}</strong>{`. From here you can explore your content structure and the schema (via the right side panel). Directly below the tabs is a URL string. That’s the URL you can use to fetch data. Make a note of this URL, you’ll need it soon.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`For more information about the `}<_Link href="/docs/5.x/headless-cms/basics/graphql-api">{`Headless CMS GraphQL API, see this page of our docs`}</_Link>{`.`}</p>
</Alert>
<p>{`Next, let’s configure API credentials. Choose `}<strong parentName="p">{`API Keys`}</strong>{` in the sidebar. Add an API key with any name and description. Select “Headless CMS” and choose a Custom access level for all content model groups with the values `}<inlineCode parentName="p">{`read`}</inlineCode>{` and `}<inlineCode parentName="p">{`preview`}</inlineCode>{`. Make sure to leave “manage” unchecked. This will help secure our Webiny instance.`}</p>
<p>{`If you’re planning to source images from Webiny too, scroll down to the “File Manager” section and enable Custom access to all files with `}<inlineCode parentName="p">{`read`}</inlineCode>{` as the primary action.`}</p>
<p>{`Save the API token and the Token itself will be revealed. You can use the same API token for both published and draft posts.`}</p>
<_Heading level={2} id={"set-up-a-next-js-project"} nextElement={{
      "type": "paragraph"
    }}>Set Up a NextJS Project</_Heading>
<p>{`You can `}<a parentName="p" {...{
        "href": "https://nextjs.org/docs/getting-started"
      }}>{`follow the “Getting Started” page on the NextJS site`}</a>{`, or run `}<inlineCode parentName="p">{`npx create-next-app nextjs-blog-webiny --example "https://github.com/webiny/nextjs-starter-webiny/tree/master"`}</inlineCode>{` to spin up a basic project.`}</p>
<p>{`Once you’ve done one of these, add a new file `}<inlineCode parentName="p">{`.env.local`}</inlineCode>{` to the project root. NextJS will look for environment variables in that location.`}</p>
<Alert type="info" mdxType="Alert">
<p><a parentName="p" {...{
          "href": "https://nextjs.org/docs/basic-features/environment-variables"
        }}>{`You can read more about how NextJS uses Environment Variables here`}</a>{`.`}</p>
</Alert>
<p>{`Add the API endpoint URL (maybe call it `}<inlineCode parentName="p">{`NEXT_PUBLIC_WEBINY_API_URL`}</inlineCode>{`), and the API token (maybe as `}<inlineCode parentName="p">{`WEBINY_API_SECRET`}</inlineCode>{`).`}</p>
<Editor title=".env.local" lang="bash" mdxType="Editor">
{`NEXT_PUBLIC_WEBINY_API_URL=<your-url-here>
WEBINY_API_SECRET=<your-token-here>`}
</Editor>
<p>{`Make sure you don’t commit this file to your project’s git repository otherwise anyone could gain access to your API. You can do that by adding it to the `}<inlineCode parentName="p">{`.gitignore`}</inlineCode>{` file.`}</p>
<Image src={_Image3} alt={"Environment variables set up in the project root"} mdxType="Image" />
<_Heading level={2} id={"fetching-data"} nextElement={{
      "type": "paragraph"
    }}>Fetching Data</_Heading>
<p>{`Once you have your `}<inlineCode parentName="p">{`.env.local`}</inlineCode>{` file set up in the project root, you can try to connect to the API so that we can fetch our content.`}</p>
<p>{`Create a new folder in the root directory called `}<inlineCode parentName="p">{`lib`}</inlineCode>{`, and within that a new file called `}<inlineCode parentName="p">{`api.js`}</inlineCode>{`. Add this code which will allow us to use JavaScript’s `}<inlineCode parentName="p">{`fetch`}</inlineCode>{` function with the GraphQL API:`}</p>
<Editor title="/lib/api.js" lang="js" mdxType="Editor">
{`async function fetchAPI(query, { variables } = {}) {
  const res = await fetch(process.env.NEXT_PUBLIC_WEBINY_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: \`Bearer \${process.env.WEBINY_API_SECRET}\`
    },
    body: JSON.stringify({
      query,
      variables
    })
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json.data;
}`}
</Editor>
<Alert type="info" mdxType="Alert">
<p>{`You won’t need to add Axios, node-fetch or any other dependency to the project because `}<a parentName="p" {...{
          "href": "https://nextjs.org/blog/next-9-4#improved-built-in-fetch-support"
        }}>{`NextJS polyfills server-side fetch`}</a>{`.`}</p>
</Alert>
<p>{`The `}<inlineCode parentName="p">{`POST`}</inlineCode>{` verb is used to post the query we want our GraphQL API to return. Also please note in the `}<inlineCode parentName="p">{`'Authorization'`}</inlineCode>{` header, you need to ensure you have `}<inlineCode parentName="p">{`Bearer `}</inlineCode>{` before the API secret. This specifies the method of authentication.`}</p>
<p>{`Here’s a basic query you can use to fetch all content for the model `}<inlineCode parentName="p">{`posts`}</inlineCode>{` and return only the `}<inlineCode parentName="p">{`slug`}</inlineCode>{` field:`}</p>
<Editor title="/lib/api.js" lang="js" mdxType="Editor">
{`export async function getAllPostsWithSlug() {
  const data = await fetchAPI(\`
    query PostSlugs {
      listPosts {
        data {
          slug
        }
      }
    }
  \`);
  return data.listPosts.data;
}`}
</Editor>
<Alert type="info" mdxType="Alert">
<p>{`There’s `}<_Link href="/docs/5.x/headless-cms/basics/using-graphql-api">{`more information about using GraphQL here`}</_Link>{`.`}</p>
</Alert>
<p>{`Here’s a more detailed query which uses variables and sorting to fetch multiple groups of data:`}</p>
<Editor title="/lib/api.js" lang="js" mdxType="Editor">
{`export async function getPostBySlug(slug) {
  const data = await fetchAPI(
    \`
      query PostBySlug( $PostsGetWhereInput: PostsGetWhereInput!) {
        post: getPosts( where: $PostsGetWhereInput ) {
          data {
            id
            title
            slug
            description
            createdOn
            featuredImage
            body
            author {
              name
              slug
              picture
            }
          }
        }
        morePosts: listPosts(limit: 2, sort: createdOn_ASC) {
          data {
            id
            title
            slug
            description
            createdOn
            featuredImage
            author {
              name
              picture
      
            }
          }
        }
      }
    \`,
    {
      variables: {
        PostsGetWhereInput: {
          slug: slug
        }
      }
    },
    preview
  );
  return data;
}`}
</Editor>
<p>{`Hopefully with this information you will be able to use the data from Webiny to render your pages.`}</p>
<p>{`To create static pages, create a file in the `}<strong parentName="p">{`/posts/`}</strong>{` directory called `}<strong parentName="p">{`[slug]`}{`.js`}</strong>{`, and add this function at the bottom:`}</p>
<Editor title="/pages/posts/[slug].js" lang="js" mdxType="Editor">
{`export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();

  return {
    paths: allPosts.map(post => {
      return {
        params: {
          slug: \`/posts/\${post.slug}\`
        }
      };
    }),
    fallback: true
  };
}`}
</Editor>
<p>{`This will render all of the posts as static pages.`}</p>
<p>{`To get data for each statically generated page add the following to the bottom of the page:`}</p>
<Editor title="/pages/posts/[slug].js" lang="js" mdxType="Editor">
{`export async function getStaticProps(context) {
  const { params } = context;
  const data = await getPostBySlug(params.slug);

  return {
    props: {
      preview,
      post: {
        ...data.post.data
      },
      morePosts: data?.morePosts
    }
  };
}`}
</Editor>
<p>{`Now you will be able to access `}<inlineCode parentName="p">{`props.post`}</inlineCode>{` in the render and build out your UI:`}</p>
<Editor title="/pages/posts/[slug].js" lang="jsx" mdxType="Editor">
{`export default function Post({ post, morePosts, preview }) {
  return <h1>{post.title}</h1>;
}`}
</Editor>
<p>{`You should now be able to see your data! Run `}<inlineCode parentName="p">{`yarn dev`}</inlineCode>{` and open the browser on port `}<inlineCode parentName="p">{`3000`}</inlineCode>{`, or whichever port you are using.`}</p>
<Image src={_Image4} alt={"NextJs blog example"} mdxType="Image" />
<_Heading level={2} id={"rendering-rich-text-fields"} nextElement={{
      "type": "paragraph"
    }}>Rendering Rich Text Fields</_Heading>
<p>{`You may have noticed that we chose a `}<inlineCode parentName="p">{`rich-text`}</inlineCode>{` field for the `}<strong parentName="p">{`body`}</strong>{` of the post. To render this in React, you can use `}<a parentName="p" {...{
        "href": "https://www.npmjs.com/package/@webiny/react-rich-text-renderer"
      }}>{`our rich text renderer package`}</a>{`:`}</p>
<p>{`This package will work with v5.25.0 of Webiny, but for now it’s available with the beta release, so you can install it from the beta:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`npm install @webiny/react-rich-text-renderer@beta`}
</Editor>
<p>{`Once the package is installed, you can use it as you would any other component:`}</p>
<Editor title="/pages/posts/[slug].js" lang="jsx" mdxType="Editor">
{`// import the renderer
import { RichTextRenderer } from "@webiny/react-rich-text-renderer";

// in your render function
<RichTextRenderer data={content} />;`}
</Editor>
<p>{`It’s entirely possible to make your own renderer. If you open that package you’ll see how we have done it, you can copy that code and modify it as you wish.`}</p>
<Alert type="info" mdxType="Alert">
<p><_Link href="/docs/5.x/headless-cms/integrations/legacy-render-rich-text-content">{`For more information about the rich text renderer package, see this documentation`}</_Link>{`.`}</p>
</Alert>
<_Heading level={2} id={"using-next-js-preview-mode"} nextElement={{
      "type": "paragraph"
    }}>Using NextJS Preview Mode</_Heading>
<p>{`NextJS provides an API for previewing content that hasn’t been published yet, and is in a “Draft” state. For more information, `}<a parentName="p" {...{
        "href": "https://nextjs.org/docs/advanced-features/preview-mode"
      }}>{`see the documentation on NextJS website`}</a>{`. Here’s how to use Preview mode with Webiny.`}</p>
<p>{`Webiny has a separate API for `}<strong parentName="p">{`published`}</strong>{` and `}<strong parentName="p">{`draft`}</strong>{` content. Although we can use the same API token to connect to both APIs, we need to fetch from the correct API endpoint.`}</p>
<p>{`Because we checked `}<strong parentName="p">{`preview`}</strong>{` when we set up the API keys, our NextJS app will be authorised to fetch data from this endpoint too.`}</p>
<p>{`In your Webiny instance, go to `}<strong parentName="p">{`API Playground`}</strong>{` and choose `}<strong parentName="p">{`Headless CMS - Preview API`}</strong>{` on the tabs at the top of the main window.`}</p>
<Image src={_Image5} alt={"GraphQL playground - preview API URL"} mdxType="Image" />
<p>{`Copy the URL and save that into your `}<inlineCode parentName="p">{`.env.local`}</inlineCode>{` file (perhaps call it `}<inlineCode parentName="p">{`NEXT_PUBLIC_WEBINY_PREVIEW_API_URL`}</inlineCode>{`).`}</p>
<Editor title=".env.local" lang="bash" mdxType="Editor">
{`NEXT_PUBLIC_WEBINY_PREVIEW_API_URL=<your-url-here>
`}
</Editor>
<p>{`First, we’re going to extract whether the user has `}<inlineCode parentName="p">{`preview`}</inlineCode>{` mode enabled from the `}<inlineCode parentName="p">{`getStaticProps()`}</inlineCode>{` function:`}</p>
<Editor title="/pages/posts/[slug].js" lang="js" mdxType="Editor">
{`export async function getStaticProps(context) {
  const { params, preview } = context;
  const data = await getPostBySlug(params.slug, preview);

  return {
    props: {
      preview,
      post: {
        ...data.post.data
      },
      morePosts: data?.morePosts
    }
  };
}`}
</Editor>
<p>{`Now we can pass that variable to our `}<inlineCode parentName="p">{`fetchAPI()`}</inlineCode>{` function`}</p>
<Editor title="/lib/api.js" lang="js" mdxType="Editor">
{`export async function getPostBySlug(slug, preview) {
  const data = await fetchAPI(
    \`
      query PostBySlug( $PostsGetWhereInput: PostsGetWhereInput!) {
        post: getPosts( where: $PostsGetWhereInput ) {
          data {
            id
            title
            slug
            description
            createdOn
            featuredImage
            body
            author {
              name
              slug
              picture
            }
          }
        }
        morePosts: listPosts(limit: 2, sort: createdOn_ASC) {
          data {
            id
            title
            slug
            description
            createdOn
            featuredImage
            author {
              name
              picture
      
            }
          }
        }
      }
    \`,
    {
      variables: {
        PostsGetWhereInput: {
          slug: slug
        }
      }
    },
    preview
  );
  return data;
}`}
</Editor>
<p>{`Next modify your `}<inlineCode parentName="p">{`fetchAPI`}</inlineCode>{` function to add the `}<inlineCode parentName="p">{`preview`}</inlineCode>{` parameter:`}</p>
<Editor title="/pages/posts/[slug].js" lang="js" mdxType="Editor">
{`async function fetchAPI(query, { variables } = {}, preview) {
  const url = preview
    ? process.env.NEXT_PUBLIC_WEBINY_PREVIEW_API_URL
    : process.env.NEXT_PUBLIC_WEBINY_API_URL;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: \`Bearer \${process.env.WEBINY_API_SECRET}\`
    },
    body: JSON.stringify({
      query,
      variables
    })
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json.data;
}`}
</Editor>
<p>{`To complete the setup, you can `}<a parentName="p" {...{
        "href": "https://nextjs.org/docs/advanced-features/preview-mode#securely-accessing-it-from-your-headless-cms"
      }}>{`follow the steps from “Securely accessing it from your Headless CMS” on the NextJS documentation site`}</a>{`.`}</p>
<p>{`Once you have those steps set up, visit the API endpoint specified in the docs above. You should be able to see draft posts:`}</p>
<Image src={_Image6} alt={"NextJS example - preview mode"} mdxType="Image" />
<_Heading level={2} id={"conclusion"} nextElement={{
      "type": "paragraph"
    }}>Conclusion</_Heading>
<p>{`Using Webiny for a Headless CMS using NextJS is an easy, cost-effective and scalable solution.`}</p>
<p>{`As well as the basics we’ve discussed here, you have virtually no limit on the amount of records you store, or even the amount of images you store inside Webiny. You can also have multiple locales to support multiple languages, and other apps are included such as the `}<_Link href="/docs/5.x/page-builder/theming/introduction">{`page builder`}</_Link>{`. Also, we have `}<a parentName="p" {...{
        "href": "https://www.webiny.com/pricing"
      }}>{`pricing plans that scale`}</a>{` if you’re a small business owner or enterprise customer.`}</p>
<p>{`We hope you enjoy using Webiny to create your next website!`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;