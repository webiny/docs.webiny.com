/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image5 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/integrations/assets/gatsby-starter/gatsby-graphql-ide-with-data.png'
import _Image4 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/integrations/assets/gatsby-starter/gatsby-graphql-ide.png'
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
  "title": "Building a Frontend with GatsbyJS",
  "description": "Learn how to build a frontend for Webiny Headless CMS with Gatsby",
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
  "title": "Set Up a GatsbyJS Project",
  "slug": "set-up-a-gatsby-js-project",
  "children": []
}, {
  "title": "Fetching Data",
  "slug": "fetching-data",
  "children": []
}, {
  "title": "Rendering Data Using Gatsby's Data Layer",
  "slug": "rendering-data-using-gatsby-s-data-layer",
  "children": []
}, {
  "title": "Rendering Rich Text Fields",
  "slug": "rendering-rich-text-fields",
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
<li parentName="ul">{`how to render data using Gatsby’s data layer`}</li>
<li parentName="ul">{`how to parse data including rich text`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`In this article we’ll learn how to integrate a GatsbyJS application that uses Webiny as a Headless CMS. We’ll go through the following:`}</p>
<ol>
<li parentName="ol">{`Getting started with Webiny`}</li>
<li parentName="ol">{`Setting up a GatsbyJS project`}</li>
<li parentName="ol">{`Fetching data`}</li>
<li parentName="ol">{`Rendering data using Gatsby’s data layer`}</li>
<li parentName="ol">{`Rendering Webiny’s rich text field`}</li>
</ol>
<_Heading level={2} id={"getting-started-with-webiny"} nextElement={{
      "type": "paragraph"
    }}>Getting Started With Webiny</_Heading>
<p>{`Webiny works really well as a headless CMS with `}<a parentName="p" {...{
        "href": "http://gatsbyjs.com"
      }}>{`GatsbyJS`}</a>{`,`}</p>
<p>{`The easiest way to get started is to use the `}<a parentName="p" {...{
        "href": "https://github.com/webiny/gatsby-starter-webiny"
      }}>{`official starter`}</a>{`, but we’re going to walk through a similar custom implementation here.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`Use the `}<a parentName="p" {...{
          "href": "https://github.com/webiny/gatsby-starter-webiny"
        }}>{`official starter`}</a>{` for 1-click install on Gatsby Cloud.`}</p>
</Alert>
<p>{`For this tutorial, we’re going to assume you have already done the following:`}</p>
<ol>
<li parentName="ol"><_Link href="/docs/5.x/infrastructure/aws/configure-aws-credentials">{`Set up your AWS credentials locally`}</_Link></li>
<li parentName="ol"><_Link href="/docs/5.x/core-development-concepts/basics/project-deployment">{`Deployed a Webiny instance to a dev environment`}</_Link></li>
</ol>
<p>{`Once you have an app up and running, click into the “Headless CMS” app in the sidebar, click on `}<em parentName="p">{`models`}</em>{`.`}</p>
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
<li parentName="ul">{`a `}<inlineCode parentName="li">{`text`}</inlineCode>{` field with the value “description”`}</li>
<li parentName="ul">{`a `}<inlineCode parentName="li">{`text`}</inlineCode>{` field with the value “twitterHandle”`}</li>
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
<li parentName="ul">{`A `}<inlineCode parentName="li">{`text`}</inlineCode>{` field with the value “description”`}</li>
</ul>
<p>{`Next, add some content by going to Headless CMS > Ungrouped and choosing a content model.`}</p>
<p>{`Before we spin up our Gatsby project, let’s go to the API playground and see how our GraphQL API is structured. In the sidebar menu, choose “API Playground” to open the GraphQL explorer.`}</p>
<Image src={_Image2} alt={"GraphQL playground"} mdxType="Image" />
<p>{`Notice that there are four APIs listed in the tabs at the top of the page. Choose `}<strong parentName="p">{`HeadlessCMS - Read API`}</strong>{`. From here you can explore your content structure and the schema (via the right side panel). Directly below the tabs is a URL string. That’s the URL you can use to fetch data. Make a note of this URL, you’ll need it soon.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`For more information about the `}<_Link href="/docs/5.x/headless-cms/basics/graphql-api">{`Headless CMS GraphQL API, see this page of our docs`}</_Link>{`.`}</p>
</Alert>
<p>{`Next, let’s configure API credentials. Choose `}<strong parentName="p">{`API Keys`}</strong>{` in the sidebar. Add an API key with any name and description. Select “Headless CMS” and choose a Custom access level for all content model groups with the values `}<inlineCode parentName="p">{`read`}</inlineCode>{` and `}<inlineCode parentName="p">{`preview`}</inlineCode>{`. Make sure to leave “manage” unchecked. This will help secure our Webiny instance.`}</p>
<p>{`If you’re planning to source images from Webiny too, scroll down to the “File Manager” section and enable Custom access to all files with `}<inlineCode parentName="p">{`read`}</inlineCode>{` as the primary action.`}</p>
<p>{`Save the API token and the Token itself will be revealed. You can use the same API token for both published and draft posts.`}</p>
<_Heading level={2} id={"set-up-a-gatsby-js-project"} nextElement={{
      "type": "paragraph"
    }}>Set Up a GatsbyJS Project</_Heading>
<p>{`You can `}<a parentName="p" {...{
        "href": "https://www.gatsbyjs.com/docs/quick-start"
      }}>{`follow the “Quick Start” page on the Gatsby site`}</a>{`, or run `}<inlineCode parentName="p">{`npm init gatsby`}</inlineCode>{` to spin up a basic project.`}</p>
<p>{`Once you’ve done one of these, add a new file `}<inlineCode parentName="p">{`.env`}</inlineCode>{` to the project root. Gatsby will look for environment variables in that location.`}</p>
<Alert type="info" mdxType="Alert">
<p><a parentName="p" {...{
          "href": "https://www.gatsbyjs.com/docs/how-to/local-development/environment-variables/"
        }}>{`You can read more about how Gatsby uses Environment Variables here`}</a>{`.`}</p>
</Alert>
<p>{`Add the API endpoint URL (maybe call it `}<inlineCode parentName="p">{`WEBINY_API_URL`}</inlineCode>{`), and the API token (maybe as `}<inlineCode parentName="p">{`WEBINY_API_TOKEN`}</inlineCode>{`).`}</p>
<Editor title=".env.local" lang="bash" mdxType="Editor">
{`WEBINY_API_TOKEN=<your-url-here>
WEBINY_API_URL=<your-token-here>`}
</Editor>
<p>{`Make sure you don’t commit this file to your project’s git repository otherwise anyone could gain access to your API. You can do that by adding it to the `}<inlineCode parentName="p">{`.gitignore`}</inlineCode>{` file.`}</p>
<Image src={_Image3} alt={"Environment variables set up in the project root"} mdxType="Image" />
<_Heading level={2} id={"fetching-data"} nextElement={{
      "type": "paragraph"
    }}>Fetching Data</_Heading>
<p>{`We’re going to be using the plugin `}<inlineCode parentName="p">{`gatsby-source-graphql`}</inlineCode>{` to fetch data from the GraphQL endpoint in our webiny instance. Run the following command to add the plugin:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`  npm install gatsby-source-graphql`}
</Editor>
<p>{`Next, open the file `}<inlineCode parentName="p">{`gatsby-config.js`}</inlineCode>{` and add the following. First we need to import `}<inlineCode parentName="p">{`dotenv`}</inlineCode>{` and specify where we have put our environment variables so we can access them. Then inside the exported object we’re going to define our new plugin and the configuration we need to fetch data:`}</p>
<Editor title="gatsby-config.js" lang="javascript" mdxType="Editor">
{`  require("dotenv").config({
    path: \`.env\`,
  })

  module.exports = {
    // other config
    plugins: [
      {
        resolve: \`gatsby-source-graphql\`,
        options: {
          typeName: "Webiny",
          fieldName: "webiny",
          url: process.env.WEBINY_API_URL,
          headers: {
            Authorization: \`Bearer \${process.env.WEBINY_API_TOKEN}\`
          }
        }
      },`}
</Editor>
<p>{`As you can see, we’re going to pass our environment variables to the plugin to fetch from the url and use the authorization token. But we also have made sure our data is easy to find in the datalayer by prefixing our fields and types with the `}<inlineCode parentName="p">{`webiny`}</inlineCode>{` string.`}</p>
<p>{`If you start developing and visit the graphql endpoint in Gatsby you will see how this changes our graphql data:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`  npm run develop`}
</Editor>
<p>{`Open the browser at the url `}<inlineCode parentName="p">{`http://localhost:8000/___graphql`}</inlineCode>{` (that’s three underscores) and if successful you will see the `}<inlineCode parentName="p">{`webiny`}</inlineCode>{` content source:`}</p>
<Image src={_Image4} alt={"Gatsby's GraphQL IDE showing the API connection was successful"} mdxType="Image" />
<_Heading level={2} id={"rendering-data-using-gatsby-s-data-layer"} nextElement={{
      "type": "paragraph"
    }}>Rendering Data Using Gatsby&#39;s Data Layer</_Heading>
<p>{`Gatsby’s approach to data is quite unique but very useful. Now that we have data available in the datalayer, we can test queries locally without having to contact the remote server.`}</p>
<Image src={_Image5} alt={"Gatsby's GraphQL IDE with the webiny data"} mdxType="Image" />
<p>{`To create pages, we need to modify the `}<inlineCode parentName="p">{`gatsby-node.js`}</inlineCode>{` file so that it fetches and renders our posts.`}</p>
<p>{`To do that, we will need to import `}<inlineCode parentName="p">{`path`}</inlineCode>{` and `}<inlineCode parentName="p">{`gatsby-source-filesystem`}</inlineCode>{`, and export a function named `}<inlineCode parentName="p">{`createPages`}</inlineCode>{` like so:`}</p>
<Editor title="gatsby-node.js" lang="javascript" mdxType="Editor">
{`const path = require(\`path\`);
const { createFilePath } = require(\`gatsby-source-filesystem\`);

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Define a template for blog post
  const blogPost = path.resolve(\`./src/templates/blog-post.js\`);

  // Get all blog posts sorted by created date
  const result = await graphql(
    \`
      query Posts {
        webiny {
          listPosts(sort: createdOn_DESC) {
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
      }
    \`
  );

  if (result.errors) {
    reporter.panicOnBuild(\`There was an error loading your blog posts\`, result.errors);
    return;
  }

  const posts = result.data.webiny.listPosts.data;

  // Create blog posts pages
  if (posts.length > 0) {
    posts.forEach((post, index) => {
      createPage({
        path: post.slug,
        component: blogPost,
        context: {
          id: post.id,
          createdOn: post.createdOn,
          slug: post.slug
        }
      });
    });
  }
};`}
</Editor>
<p>{`The final step is to create a template for your created nodes and pass the data to the component:`}</p>
<Editor title="/src/templates/blog-post.js" lang="jsx" mdxType="Editor">
{`export default BlogPostTemplate = ({ data, location }) => {
  const post = data.webiny.getPost.data;

  return <h1>{post.title}</h1>;
};

export const pageQuery = graphql\`
  query PostBySlug($slug: String, $id: ID, $createdOn: Webiny_DateTime) {
    webiny {
      getPost(where: { slug: $slug }) {
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
            picture
          }
        }
      }
    }
  }
\`;`}
</Editor>
<p>{`If this is successful you should be able to start your development server and see pages rendered with URL paths that correspond to your posts.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`For more information about creating pages from data, `}<a parentName="p" {...{
          "href": "https://www.gatsbyjs.com/docs/programmatically-create-pages-from-data/"
        }}>{`see the Gatsby documentation`}</a>{`.`}</p>
</Alert>
<_Heading level={2} id={"rendering-rich-text-fields"} nextElement={{
      "type": "paragraph"
    }}>Rendering Rich Text Fields</_Heading>
<p>{`You may have noticed that we chose a `}<inlineCode parentName="p">{`rich-text`}</inlineCode>{` field for the `}<strong parentName="p">{`body`}</strong>{` of the post. You can copy the code from below into a new component:`}</p>
<Editor title="/src/components/rich-text-renderer.jsx" lang="jsx" mdxType="Editor">
{`import React from "react";
import classNames from "classnames";
import { OutputBlockData as BaseOutputBlockData } from "@editorjs/editorjs";

interface OutputBlockData extends BaseOutputBlockData {
  data: {
    className?: string,
    textAlign?: string,
    text: string,
    caption?: string,
    file?: string,
    level: number,
    items: string[],
    style: string
  };
}

interface RenderParagraphProps {
  style: {
    [key: string]: string
  };
  className: string;
}
const renderParagraph = (block: OutputBlockData): React.ReactElement => {
  const props: RenderParagraphProps = { style: {}, className: "" };

  if (block.data.textAlign) {
    props.style["textAlign"] = block.data.textAlign;
  }
  if (block.data.className) {
    props.className = block.data.className;
  }
  return (
    <p
      {...props}
      className={classNames("rte-block-paragraph", props.className)}
      dangerouslySetInnerHTML={{ __html: block.data.text }}
    />
  );
};

const renderDelimiter = () => {
  return <div className="rte-block-delimiter" />;
};

interface RenderHeaderProps {
  style: {
    [key: string]: string
  };
  className: string;
}

const renderHeader = (block: OutputBlockData) => {
  const props: RenderHeaderProps = { style: {}, className: "" };

  if (block.data.textAlign) {
    props.style["textAlign"] = block.data.textAlign;
  }
  if (block.data.className) {
    props.className = block.data.className;
  }

  switch (block.data.level) {
    case 1:
      return (
        <h1
          {...props}
          className={classNames(props.className, "rte-block-heading rte-block-heading--h1")}
          dangerouslySetInnerHTML={{ __html: block.data.text }}
        />
      );

    case 2:
      return (
        <h2
          {...props}
          className={classNames(props.className, "rte-block-heading rte-block-heading--h2")}
          dangerouslySetInnerHTML={{ __html: block.data.text }}
        />
      );

    case 3:
      return (
        <h3
          {...props}
          className={classNames(props.className, "rte-block-heading rte-block-heading--h3")}
          dangerouslySetInnerHTML={{ __html: block.data.text }}
        />
      );

    case 4:
      return (
        <h4
          {...props}
          className={classNames(props.className, "rte-block-heading rte-block-heading--h4")}
          dangerouslySetInnerHTML={{ __html: block.data.text }}
        />
      );

    case 5:
      return (
        <h5
          {...props}
          className={classNames(props.className, "rte-block-heading rte-block-heading--h5")}
          dangerouslySetInnerHTML={{ __html: block.data.text }}
        />
      );

    case 6:
      return (
        <h6
          {...props}
          className={classNames(props.className, "rte-block-heading rte-block-heading--h6")}
          dangerouslySetInnerHTML={{ __html: block.data.text }}
        />
      );
    default:
      return null;
  }
};

function renderImage(block: OutputBlockData) {
  return <img className={"rte-block-image"} alt={block.data.caption} src={block.data.file} />;
}

function renderList(block: OutputBlockData) {
  switch (block.data.style) {
    case "unordered":
      return (
        <ul className={"rte-block-list"}>
          {block.data.items.map((text, i) => (
            <li key={i}>{text}</li>
          ))}
        </ul>
      );

    case "ordered":
      return (
        <ol className={"rte-block-list"}>
          {block.data.items.map((text, i) => (
            <li key={i}>{text}</li>
          ))}
        </ol>
      );
    default:
      return null;
  }
}

function renderQuote(block: OutputBlockData) {
  return (
    <blockquote className={"rte-block-blockquote"}>
      <p>{block.data.text}</p>
    </blockquote>
  );
}

const defaultRenderers: Record<string, RichTextBlockRenderer> = {
  delimiter: renderDelimiter,
  header: renderHeader,
  image: renderImage,
  list: renderList,
  paragraph: renderParagraph,
  quote: renderQuote
};

export interface RichTextBlockRenderer {
  (block: OutputBlockData): React.ReactNode;
}

interface RichTextRendererProps {
  data: OutputBlockData[];
  renderers?: Record<string, RichTextBlockRenderer>;
}

export const RichTextRenderer = (props: RichTextRendererProps) => {
  // Combine default renderers with custom renderers
  const renderers = Object.assign({}, defaultRenderers, props.renderers);

  return (
    <React.Fragment>
      {props.data.map((block, index) => {
        const renderer = renderers[block.type];
        if (!renderer) {
          return null;
        }

        const node = renderer(block);
        if (React.isValidElement(node)) {
          return React.cloneElement(node, { key: index });
        }

        return null;
      })}
    </React.Fragment>
  );
};`}
</Editor>
<p>{`And use that in your template like this:`}</p>
<Editor title="/src/templates/blog-post.js" lang="jsx" mdxType="Editor">
{`// import the renderer
import { RichTextRenderer } from "../components/rich-text-renderer";

export default BlogPostTemplate = ({ data, location }) => {
  const post = data.webiny.getPost.data;

  return <RichTextRenderer content={post.body} />;
};`}
</Editor>
<Alert type="info" mdxType="Alert">
<p><_Link href="/docs/5.x/headless-cms/integrations/legacy-render-rich-text-content">{`For more information about the rich text renderer, see this documentation`}</_Link>{`.`}</p>
</Alert>
<_Heading level={2} id={"conclusion"} nextElement={{
      "type": "paragraph"
    }}>Conclusion</_Heading>
<p>{`Using Webiny for a Headless CMS using GatsbyJS is an easy, cost-effective and scalable solution.`}</p>
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