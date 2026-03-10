/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Introduction",
  "description": "Learn how security works in Webiny.",
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
  "title": "Authentication",
  "slug": "authentication",
  "children": []
}, {
  "title": "Identity",
  "slug": "identity",
  "children": []
}, {
  "title": "Authorization",
  "slug": "authorization",
  "children": []
}, {
  "title": "Permission",
  "slug": "permission",
  "children": []
}, {
  "title": "Webiny Security Framework",
  "slug": "webiny-security-framework",
  "children": []
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
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
<li parentName="ul">{`the key terms used in the context of security`}</li>
<li parentName="ul">{`what is Webiny Security Framework`}</li>
</ul>
</Alert>
<p>{`Before we can talk about Webiny Security Framework, we need to explain a few key terms that are constantly used when talking about security in general. You’re most likely already familiar with some of them, but let’s quickly go over these terms, in case you’re new to the world of security.`}</p>
<_Heading level={2} id={"authentication"} nextElement={{
      "type": "paragraph"
    }}>Authentication</_Heading>
<p>{`Authentication is a process in which the application attempts to verify the credentials provided by the client (e.g., a browser, a mobile app, or another application), and retrieves identity information using those verified credentials.`}</p>
<p>{`Credentials can be a combination of a username and a password, a `}<a parentName="p" {...{
        "href": "https://en.wikipedia.org/wiki/JSON_Web_Token"
      }}>{`JWT token`}</a>{`, etc. Every time a request is made to your API by a client, that request will most likely contain a set of credentials (usually using the `}<a parentName="p" {...{
        "href": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization"
      }}>{`Authorization HTTP request header`}</a>{`) that will allow you to identify the client.`}</p>
<p>{`Once the identity is established, your application will usually keep that information available for the rest of the system to use, for the duration of that particular request.`}</p>
<_Heading level={2} id={"identity"} nextElement={{
      "type": "paragraph"
    }}>Identity</_Heading>
<p>{`An identity is a `}<em parentName="p">{`verified`}</em>{` piece of information that tells us `}<em parentName="p">{`who`}</em>{` is accessing your application. As we already established in the previous section, identity is determined in the authentication process. However, not every interaction with your application requires identity information. Thus, it’s also acceptable for a request to be anonymous.`}</p>
<p>{`As an example of anonymous requests, let’s pretend your API is exposing a publicly accessible endpoint to fetch published pages, or weather information. That public endpoint doesn’t need to know anything about the client in order to return the data. Requests to these public endpoints won’t need to go through authentication process and, thus, don’t need to have any credentials.`}</p>
<_Heading level={2} id={"authorization"} nextElement={{
      "type": "paragraph"
    }}>Authorization</_Heading>
<p>{`Authorization is a process of determining if the current identity is allowed to perform the requested action. During request processing, your application can execute authorization many times. Different parts of the application will use different rules to determine if the requested action is allowed. These rules are called `}<em parentName="p">{`permissions`}</em>{`.`}</p>
<_Heading level={2} id={"permission"} nextElement={{
      "type": "paragraph"
    }}>Permission</_Heading>
<p>{`A permission is a set of rules which describe what the identity can or cannot do. In case of Webiny, it’s a simple object that contains a `}<em parentName="p">{`name`}</em>{` and additional optional properties that are relevant to the business logic of your application.`}</p>
<p>{`For example, let’s pretend Joe wants to update a recipe for muffins, originally created by Jane. Since we already know his name, it means he has valid credentials. Now we need to see if he’s actually allowed to update recipes, especially the ones that were not originally written by him.`}</p>
<p>{`The application will first load all permissions that are assigned to Joe and then check if he can update recipes. In the context of Webiny, such a permission could look like this:`}</p>
<Editor title="Recipe permission" lang="json" mdxType="Editor">
{`{
  "name": "recipe", // unique name for a permission
  "rwd": "rw", // read/write/delete actions
  "own": true // can only perform actions on own recipes
}`}
</Editor>
<p>{`This means that Joe can perform `}<em parentName="p">{`read`}</em>{` and `}<em parentName="p">{`write`}</em>{` operations, but only on recipes he has created. Which, in our scenario, means that the application will reject his attempt to update a recipe that belongs to Jane.`}</p>
<hr></hr>
<p>{`Armed with all this information, we can now describe the Webiny Security Framework.`}</p>
<_Heading level={2} id={"webiny-security-framework"} nextElement={{
      "type": "paragraph"
    }}>Webiny Security Framework</_Heading>
<p>{`Webiny Security Framework is a thin application layer that allows you to handle `}<em parentName="p">{`authentication`}</em>{` and `}<em parentName="p">{`authorization`}</em>{` using plugins. It can be used in APIs (be it GraphQL API, REST API, or a custom Lambda handler) as well as React applications. Its main purpose is to provide a simple and flexible system to work with permissions.`}</p>
<p>{`Webiny applications, as well as your custom ones, request permissions from the security framework when they need to check if the current `}<em parentName="p">{`identity`}</em>{` is `}<em parentName="p">{`authorized`}</em>{` (in other words, `}<em parentName="p">{`has permission`}</em>{`) to execute certain operations.`}</p>
<hr></hr>
<p>{`In the following articles we dive deeper into how the framework works in the context of Webiny APIs and React applications.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;