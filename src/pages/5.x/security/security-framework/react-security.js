/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/security/security-framework/assets/react-security/react-idp-api.png'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "React Security",
  "description": "Learn how security works in Webiny React applications.",
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
  "title": "High Level Overview",
  "slug": "high-level-overview",
  "children": []
}, {
  "title": "Application-Related Information",
  "slug": "application-related-information",
  "children": []
}, {
  "title": "Managing Security State",
  "slug": "managing-security-state",
  "children": []
}, {
  "title": "Performing Authorization",
  "slug": "performing-authorization",
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
<li parentName="ul">{`how security works in the context of a React application`}</li>
</ul>
</Alert>
<Alert type="warning" title="Important" mdxType="Alert">
<p>{`This article is a continuation of the previous two articles about Webiny Security Framework. If you haven’t already, please do read the `}<_Link href="/docs/5.x/security/security-framework/introduction">{`Introduction`}</_Link>{` and `}<_Link href="/docs/5.x/security/security-framework/api-security">{`API Security`}</_Link>{` articles before continuing.`}</p>
</Alert>
<p>{`The source of identity information for the React application is your Identity Provider (IdP). All modern IdPs offer React SDKs you can easily configure in your application to perform user signup, login, password recovery, etc. You can, of course, roll your own solution, but we recommend against it. Using SDKs of established IdPs will handle many things for you, like token refresh, password recovery, etc.`}</p>
<_Heading level={2} id={"high-level-overview"} nextElement={{
      "type": "paragraph"
    }}>High Level Overview</_Heading>
<p>{`Let’s use the following diagram to analyze the order of operations that are going on once you start your React application that requires authentication:`}</p>
<Image src={_Image1} alt={"React Authentication and Authorization using Webiny Security Framework"} mdxType="Image" />
<p>{`Once your application has started, it will render a login form (this can be your custom form or the one provided by your IdP’s React SDK). A user submits their credentials to the IdP (`}<inlineCode parentName="p">{`1`}</inlineCode>{`). If credentials are valid, IdP will return some basic identity information and a JSON Web Token (JWT) (`}<inlineCode parentName="p">{`2`}</inlineCode>{`).`}</p>
<p>{`Now that you want to communicate with the Webiny API, you will attach that JWT to every request you make (`}<inlineCode parentName="p">{`3`}</inlineCode>{`). The Webiny API will then run the authentication process (`}<inlineCode parentName="p">{`4`}</inlineCode>{`) described in the `}<_Link href="/docs/5.x/security/security-framework/api-security">{`API Security`}</_Link>{` article, and verify the JWT (remember, how you implement your authentication plugin is up to you).`}</p>
<p>{`If the identity is valid and is authorized to perform the requested operation, the React application will receive the expected response from the API.`}</p>
<p>{`This is all there is to the application/API security on a high level. Let’s now look at how the identity and permissions we talked about in the previous article fit into the React application.`}</p>
<_Heading level={2} id={"application-related-information"} nextElement={{
      "type": "paragraph"
    }}>Application-Related Information</_Heading>
<p>{`Once you’ve obtained the identity information from your IdP, you only know `}<em parentName="p">{`who`}</em>{` has logged in. You still don’t know what he’s allowed to do, because your IdP doesn’t know about Webiny permissions, and you don’t have any application-related information (like profile picture, addresses, order history, etc.).`}</p>
<p>{`So how do we fetch all that information?`}</p>
<p>{`In the Admin Area application, that ships with the default Webiny project, we solve this problem by exposing a `}<inlineCode parentName="p">{`login`}</inlineCode>{` GraphQL mutation. That mutation is responsible for returning user’s information based on the identity obtained in the authentication process (using the JWT). It’s not a traditional login API call where you specify a username and a password. It’s more of a helper that is used to provide application-related information and permissions back to the React application.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`In your application you will implement your own GraphQL query or mutation to return the data that is relevant to you. What we have in Admin Area is specific to that particular application, and can’t be
used in custom applications.`}</p>
</Alert>
<_Heading level={2} id={"managing-security-state"} nextElement={{
      "type": "paragraph"
    }}>Managing Security State</_Heading>
<p>{`Let’s assume that you’ve configured your IdP and you have your custom query to fetch user’s information for your React application. Now you need to share the identity and permissions with the rest of the application (to render user menu, avatar, show/hide parts of the UI depending on user’s permissions, etc.).`}</p>
<p>{`For these purposes, WSF (Webiny Security Framework) provides a `}<inlineCode parentName="p">{`SecurityProvider`}</inlineCode>{` component which holds your identity information and allows other parts of the application to use it using a dedicated `}<inlineCode parentName="p">{`useSecurity()`}</inlineCode>{` hook. Here’s a simplified React application to visualize the component hierarchy:`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`import { SecurityProvider } from "@webiny/app-security";
import { Authentication } from "your-idp-sdk";

export const App = ({ children }) => {
  return (
    <SecurityProvider>
      <Authentication>{children}</Authentication>
    </SecurityProvider>
  );
};`}
</Editor>
<p>{`SecurityProvider component is a `}<a parentName="p" {...{
        "href": "https://reactjs.org/docs/context.html"
      }}>{`React Context`}</a>{` provider and its only purpose is to track the state of the identity. Here’s the Typescript interface to describe what it does:`}</p>
<Editor title="Security context interface" lang="ts" mdxType="Editor">
{`interface SecurityContextValue {
  identity: SecurityIdentity | null;
  setIdentity(data: SecurityIdentity): void;
}`}
</Editor>
<p>{`The way SecurityProvider is supposed to be used is, you mount it as a parent of the component that’s doing actual authentication in your application. Then, once you’ve logged in and obtained user information, you use the `}<inlineCode parentName="p">{`setIdentity`}</inlineCode>{` method to set the identity information. That way, the rest of the application becomes immediately aware of the identity/user information and will rerender accordingly.`}</p>
<p>{`An example of this can be found on our GitHub, in the `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/c3b55cb9e7551410090a26cf09799b4c4b3627a3/packages/app-admin-cognito/src/index.tsx#L95-L102"
      }}>{`app-plugin-security-cognito`}</a>{` package.`}</p>
<_Heading level={2} id={"performing-authorization"} nextElement={{
      "type": "paragraph"
    }}>Performing Authorization</_Heading>
<p>{`We often need to show or hide parts of the UI depending on user’s permissions. Here’s an example implementation:`}</p>
<Editor title="Using the useSecurity() hook to perform authorization" lang="tsx" mdxType="Editor">
{`import React from "react";
import { useSecurity } from "@webiny/app-security";

export default () => {
  const { identity } = useSecurity();
  const permission = identity.getPermission("recipe");

  if (!permission) {
    return null;
  }

  return <div>Your recipe!</div>;
};`}
</Editor>
<_Heading level={2} id={"conclusion"} nextElement={{
      "type": "paragraph"
    }}>Conclusion</_Heading>
<p>{`React applications load user permissions from the API, meaning they share the same permission objects. Handling of login is the responsibility of each individual React application and can be implemented in a number of ways, depending on your project requirements.`}</p>
<p>{`The only requirement from the Webiny API is that you provide the necessary plugins to authenticate your JWT and load identity’s permissions.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;