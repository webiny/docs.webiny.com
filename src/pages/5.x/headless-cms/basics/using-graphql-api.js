/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image7 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/basics/assets/using-graphql-api/sort-enums.png'
import _Image6 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/basics/assets/using-graphql-api/api-token-value.png'
import _Image5 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/basics/assets/using-graphql-api/security-api-keys-form-2.png'
import _Image4 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/basics/assets/using-graphql-api/security-api-keys-form-1.png'
import _Image3 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/basics/assets/using-graphql-api/security-api-keys.png'
import _Image2 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/basics/assets/using-graphql-api/api-playground-switch-locale.png'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/basics/assets/using-graphql-api/api_playground_from_main_menu.png'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Using the GraphQL API",
  "description": "Learn how to use the Headless CMS's built-in GraphQL API.",
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
  "title": "API Playground",
  "slug": "api-playground",
  "children": []
}, {
  "title": "Programmatic Access",
  "slug": "programmatic-access",
  "children": [{
    "title": "Choosing the GraphQL Client",
    "slug": "choosing-the-graph-ql-client",
    "children": []
  }, {
    "title": "Headless CMS GraphQL API URL",
    "slug": "headless-cms-graph-ql-api-url",
    "children": []
  }, {
    "title": "Creating the API Key",
    "slug": "creating-the-api-key",
    "children": []
  }]
}, {
  "title": "Pagination and Sorting",
  "slug": "pagination-and-sorting",
  "children": [{
    "title": "Pagination",
    "slug": "pagination",
    "children": []
  }, {
    "title": "Sorting",
    "slug": "sorting",
    "children": []
  }]
}, {
  "title": "FAQ",
  "slug": "faq",
  "children": [{
    "title": "When Using the API Playground, Is My Access Limited in Any Way?",
    "slug": "when-using-the-api-playground-is-my-access-limited-in-any-way",
    "children": []
  }, {
    "title": "Am I Allowed to Use an API Key in a Public-Facing Application?",
    "slug": "am-i-allowed-to-use-an-api-key-in-a-public-facing-application",
    "children": []
  }, {
    "title": "What Is the \"Bearer\" Keyword?",
    "slug": "what-is-the-bearer-keyword",
    "children": []
  }, {
    "title": "How Can I Disable Introspection Queries in the GraphQL?",
    "slug": "how-can-i-disable-introspection-queries-in-the-graph-ql",
    "children": []
  }]
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
<li parentName="ul">{`how to use the Headless CMS GraphQL API`}</li>
<li parentName="ul">{`how to create an API key for programmatic use`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`The Headless CMS Webiny application comes with a fully-fledged GraphQL API, which you use in order to perform GraphQL queries and mutations on Headless CMS content models, groups, and entries.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`To learn more about the Headless CMS GraphQL API, different API types, support for multiple locales, and more, make sure to check out the `}<_Link href="/docs/5.x/headless-cms/basics/graphql-api">{`Headless CMS GraphQL API`}</_Link>{` key topic.`}</p>
</Alert>
<_Heading level={2} id={"api-playground"} nextElement={{
      "type": "paragraph"
    }}>API Playground</_Heading>
<p>{`The easiest way to explore Headless CMS GraphQL API and try different things is via the API Playground, which is part of the Webiny Administration Area. To access it, simply open the main menu on the left side of the screen, and click on the API Playground:`}</p>
<Image src={_Image1} alt={"Access API Playground via Main Menu"} mdxType="Image" />
<p>{`The API Playground enables you to easily access all three Headless CMS GraphQL API types (`}<strong parentName="p">{`read`}</strong>{`, `}<strong parentName="p">{`manage`}</strong>{`, `}<strong parentName="p">{`preview`}</strong>{`). It also enables you to access content in different locales, which you can pick via the locale selector, located in the top right corner of the screen.`}</p>
<Image src={_Image2} alt={"Switch Locale via the Locale Selector"} mdxType="Image" />
<Alert type="info" mdxType="Alert">
<p>{`Note that the locale selector is not visible for systems that have only one active locale.`}</p>
</Alert>
<_Heading level={2} id={"programmatic-access"} nextElement={{
      "type": "paragraph"
    }}>Programmatic Access</_Heading>
<p>{`Except for the API Playground, the Headless CMS GraphQL API can also be accessed programmatically, via a GraphQL client or a library of your choice.`}</p>
<_Heading level={3} id={"choosing-the-graph-ql-client"} nextElement={{
      "type": "paragraph"
    }}>Choosing the GraphQL Client</_Heading>
<p>{`Some of the more common GraphQL clients out there are:`}</p>
<ul>
<li parentName="ul"><a parentName="li" {...{
          "href": "https://www.apollographql.com/docs/react/"
        }}>{`Apollo GraphQL`}</a></li>
<li parentName="ul"><a parentName="li" {...{
          "href": "https://formidable.com/open-source/urql/"
        }}>{`URQL`}</a></li>
<li parentName="ul"><a parentName="li" {...{
          "href": "https://www.npmjs.com/package/graphql-request"
        }}>{`graphql-request`}</a></li>
</ul>
<p>{`Each of these clients is good in its own way, so choose the one that best suits your needs.`}</p>
<_Heading level={3} id={"headless-cms-graph-ql-api-url"} nextElement={{
      "type": "paragraph"
    }}>Headless CMS GraphQL API URL</_Heading>
<p>{`Once you have your GraphQL client installed, we first need to retrieve the correct Headless CMS GraphQL API URL, which can be done either via the API Playground or via the `}<_Link href="/docs/5.x/core-development-concepts/basics/webiny-cli">{`Webiny CLI`}</_Link>{`, by running the following command in your terminal of choice:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`# Returns information for the "dev" environment.
yarn webiny info --env dev`}
</Editor>
<Alert type="info" mdxType="Alert">
<p>{`Note that the URL is different for different combinations of Headless CMS GraphQL API types and locales. To learn more about how the Headless CMS GraphQL URL is structured and where to find it, please check out the `}<_Link href="/docs/5.x/headless-cms/basics/graphql-api#the-graphql-api-url-structure">{`Headless CMS GraphQL API`}</_Link>{` key topic.`}</p>
</Alert>
<_Heading level={3} id={"creating-the-api-key"} nextElement={{
      "type": "paragraph"
    }}>Creating the API Key</_Heading>
<p>{`Finally, because the GraphQL API sits behind a security layer that forbids unauthorized access, we also need to create an API key.`}</p>
<p>{`An API key is a random non-human-readable string, which essentially contains a list of allowed operations that its user (a real user or an application) can perform. Once created, we include it as the `}<inlineCode parentName="p">{`Authorization`}</inlineCode>{` header on every HTTP request we issue (with our GraphQL client of choice), for example:`}</p>
<Editor title="" lang="null" mdxType="Editor">
{`Authorization: Bearer {random-non-human-readable-api-token}`}
</Editor>
<Alert type="info" mdxType="Alert">
<p>{`Make sure to include the required `}<inlineCode parentName="p">{`Bearer`}</inlineCode>{` keyword, placed before our actual API token.`}</p>
</Alert>
<Alert type="warning" mdxType="Alert">
<p>{`Failing to correctly include the API key via the `}<inlineCode parentName="p">{`Authorization`}</inlineCode>{` HTTP request header will prevent you from performing any sensitive GraphQL query or mutation.`}</p>
<p>{`Check your GraphQL client’s documentation in order to ensure that the API token is correctly included in every HTTP request.`}</p>
</Alert>
<p>{`API Tokens are created via the Security Webiny application, by opening the `}<strong parentName="p">{`API Keys`}</strong>{` section:`}</p>
<Image src={_Image3} alt={"Security - API Keys"} mdxType="Image" />
<p>{`Once selected, we’re redirected to the API Keys section, where we can create new or update existing API keys. But most importantly, we get fine-grained control over which operations our API keys can, or cannot, perform. For example, the following selection allows API key users to access the `}<strong parentName="p">{`read`}</strong>{` Headless CMS GraphQL API, but they can only perform queries with the `}<strong parentName="p">{`Pizza`}</strong>{` content entries:`}</p>
<Image src={_Image4} alt={"Fine-grained Access Controls"} mdxType="Image" />
<Image src={_Image5} alt={"Fine-grained Access Controls"} mdxType="Image" />
<p>{`Once the API token has been created, you should see it in the user interface, for example:`}</p>
<Image src={_Image6} alt={"Copy the API Token"} mdxType="Image" />
<p>{`From there, you can easily grab it by clicking on the `}<strong parentName="p">{`Copy`}</strong>{` button, located on the right side of the API token, and paste it in an appropriate place, somewhere where your GraphQL client can access it.`}</p>
<_Heading level={2} id={"pagination-and-sorting"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Pagination and Sorting</_Heading>
<_Heading level={3} id={"pagination"} nextElement={{
      "type": "paragraph"
    }}>Pagination</_Heading>
<p>{`You can paginate the resulting entries using the `}<inlineCode parentName="p">{`after`}</inlineCode>{` argument in a query. For instance, here is an example that demonstrates how to paginate a result set:`}</p>
<Editor title="" lang="graphql" mdxType="Editor">
{`{
  listArticles(after: previousCursorValue, limit: 10) {
    data {
      id
      title
    }
    meta {
      hasMoreItems
      totalCount
      cursor
    }
  }
}`}
</Editor>
<p>{`When running the first query, there is no `}<inlineCode parentName="p">{`cursor`}</inlineCode>{` value available, so you can send an `}<inlineCode parentName="p">{`undefined`}</inlineCode>{`, `}<inlineCode parentName="p">{`null`}</inlineCode>{`, or `}<inlineCode parentName="p">{`empty string`}</inlineCode>{` value, for example: `}<inlineCode parentName="p">{`listArticles(after: null)`}</inlineCode>{`. However, for the subsequent queries, you can use the `}<inlineCode parentName="p">{`cursor`}</inlineCode>{` value returned from the current query.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`Please note that Webiny does cursor-based pagination, so it does not support the `}<inlineCode parentName="p">{`offset`}</inlineCode>{` option in pagination.`}</p>
</Alert>
<_Heading level={3} id={"sorting"} nextElement={{
      "type": "paragraph"
    }}>Sorting</_Heading>
<p>{`To get the sorted result set, you can use of the `}<inlineCode parentName="p">{`sort`}</inlineCode>{` argument in a query.
Here’s an example to sort articles by their title in ascending order.`}</p>
<Editor title="" lang="graphql" mdxType="Editor">
{`{
  listArticles(sort: title_ASC) {
    data {
      id
      title
    }
  }
}`}
</Editor>
<p>{`The `}<inlineCode parentName="p">{`sort`}</inlineCode>{` options are automatically generated based on the fields in the content model. To view all available `}<inlineCode parentName="p">{`sort`}</inlineCode>{` options for a model, you can inspect the model’s schema using the API Playground.`}</p>
<Image src={_Image7} alt={"Sort Enums"} mdxType="Image" />
<_Heading level={2} id={"faq"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>FAQ</_Heading>
<_Heading level={3} id={"when-using-the-api-playground-is-my-access-limited-in-any-way"} nextElement={{
      "type": "paragraph"
    }}>When Using the API Playground, Is My Access Limited in Any Way?</_Heading>
<p>{`You can only access content models, groups, and entries to which you have access, which is based on the security group your user account belongs to.`}</p>
<_Heading level={3} id={"am-i-allowed-to-use-an-api-key-in-a-public-facing-application"} nextElement={{
      "type": "paragraph"
    }}>Am I Allowed to Use an API Key in a Public-Facing Application?</_Heading>
<p>{`As long as the API key contains correct set of permissions, meaning no sensitive operations can be performed with it, you are free to do that.`}</p>
<_Heading level={3} id={"what-is-the-bearer-keyword"} nextElement={{
      "type": "paragraph"
    }}>What Is the &quot;Bearer&quot; Keyword?</_Heading>
<p>{`From this `}<a parentName="p" {...{
        "href": "https://security.stackexchange.com/a/120244"
      }}>{`Stack Exchange question`}</a>{`:`}</p>
<blockquote>
<p parentName="blockquote">{`The `}<inlineCode parentName="p">{`Authorization: {type} {credentials}`}</inlineCode>{` pattern was introduced by the W3C in HTTP 1.0, and has been reused in many places since. Many web servers support multiple methods of authorization. In those cases sending just the token isn’t sufficient.`}</p>
</blockquote>
<_Heading level={3} id={"how-can-i-disable-introspection-queries-in-the-graph-ql"} nextElement={{
      "type": "paragraph"
    }}>How Can I Disable Introspection Queries in the GraphQL?</_Heading>
<p>{`To prevent `}<a parentName="p" {...{
        "href": "https://graphql.org/learn/introspection/"
      }}>{`introspection queries`}</a>{` in GraphQL, you can leverage the extension we’ve built. To set it up, simply run the following command:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`yarn webiny extension disable-gql-introspection`}
</Editor>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;