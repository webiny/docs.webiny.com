/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/admin-area/basics/assets/api-playground/api_playground_from_main_menu.png'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "API Playground",
  "description": "Learn about API Playground - a GraphQL client you can use to explore your GraphQL API's schema and also execute GraphQL operations.",
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
  "title": "Default GraphQL APIs",
  "slug": "default-graph-ql-ap-is",
  "children": [{
    "title": "Main API",
    "slug": "main-api",
    "children": []
  }, {
    "title": "Headless CMS (Read, Preview, Manage)",
    "slug": "headless-cms-read-preview-manage",
    "children": []
  }]
}, {
  "title": "Security",
  "slug": "security",
  "children": []
}, {
  "title": "FAQ",
  "slug": "faq",
  "children": [{
    "title": "Can I Execute a GraphQL Operation as an Anonymous User (Not Logged In)?",
    "slug": "can-i-execute-a-graph-ql-operation-as-an-anonymous-user-not-logged-in",
    "children": []
  }]
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
const Image = makeShortcode("Image");
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
<li parentName="ul">{`what is API Playground and what are its main features`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`By default, the Webiny Admin Area application includes a tool called API Playground.`}</p>
<p>{`In short, the tool represents a simple GraphQL client which you can use to:`}</p>
<ul>
<li parentName="ul">{`explore your existing GraphQL API schema(s)`}</li>
<li parentName="ul">{`perform GraphQL queries and mutations`}</li>
</ul>
<p>{`This may be handy in a couple of different scenarios, like for example when in need to manually execute a particular GraphQL query or mutation, or even while actively developing a custom application.`}</p>
<p>{`To access it, simply open the main menu and click on the `}<strong parentName="p">{`API Playground`}</strong>{` menu item, located in the bottom section:`}</p>
<Image src={_Image1} alt={"Accessing API Playground"} mdxType="Image" />
<_Heading level={2} id={"default-graph-ql-ap-is"} nextElement={{
      "type": "paragraph"
    }}>Default GraphQL APIs</_Heading>
<p>{`By default, when you open the API Playground, you get to interact with four different GraphQL APIs.`}</p>
<_Heading level={3} id={"main-api"} nextElement={{
      "type": "paragraph"
    }}>Main API</_Heading>
<p>{`This is the main GraphQL API, which is being utilized by all of the default Webiny applications, for example Page Builder, Headless CMS, File Manager, and so on. Of course, the GraphQL API can be extended on your behalf, if need be.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`If you want to learn more about the main GraphQL API and how it works on the cloud infrastructure level, check out the `}<_Link href="/docs/5.x/architecture/api/graphql-requests">{`GraphQL Requests`}</_Link>{` page of the `}<_Link href="/docs/5.x/architecture/api/overview">{`Cloud Infrastructure - API`}</_Link>{` key topics section.`}</p>
</Alert>
<_Heading level={3} id={"headless-cms-read-preview-manage"} nextElement={{
      "type": "paragraph"
    }}>Headless CMS (Read, Preview, Manage)</_Heading>
<p>{`The API Playground can also be used to access all three Headless CMS GraphQL API types. These GraphQL APIs can also be extended on your behalf, if need be.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`To learn more about the Headless CMS GraphQL API, different API types, support for multiple locales, and more, make sure to check out the `}<_Link href="/docs/5.x/headless-cms/basics/graphql-api">{`Headless CMS GraphQL API`}</_Link>{` key topic.`}</p>
</Alert>
<_Heading level={2} id={"security"} nextElement={{
      "type": "paragraph"
    }}>Security</_Heading>
<p>{`The API Playground automatically performs all of the GraphQL operations as you - the currently logged in identity (user).`}</p>
<p>{`Which means that, despite the fact that you can actually see and explore all of the present GraphQL API schemas, you will only be able to perform queries and mutations for which you possess necessary security permissions.`}</p>
<_Heading level={2} id={"faq"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>FAQ</_Heading>
<_Heading level={3} id={"can-i-execute-a-graph-ql-operation-as-an-anonymous-user-not-logged-in"} nextElement={{
      "type": "paragraph"
    }}>Can I Execute a GraphQL Operation as an Anonymous User (Not Logged In)?</_Heading>
<p>{`The most straightforward way to do it would be by using a standalone GraphQL client, for example the `}<a parentName="p" {...{
        "href": "https://github.com/graphql/graphql-playground"
      }}>{`GraphQL Playground`}</a>{`.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;