/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/security/security-framework/assets/api-security/request-lifecycle.png'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "API Security",
  "description": "Learn how security works in Webiny API.",
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
  "title": "Request Lifecycle",
  "slug": "request-lifecycle",
  "children": [{
    "title": "context Hook",
    "slug": "context-hook",
    "children": []
  }, {
    "title": "before-handler Hook",
    "slug": "before-handler-hook",
    "children": []
  }, {
    "title": "handler Hook",
    "slug": "handler-hook",
    "children": []
  }]
}, {
  "title": "FAQ",
  "slug": "faq",
  "children": [{
    "title": "Where and How Do I Store Permissions?",
    "slug": "where-and-how-do-i-store-permissions",
    "children": []
  }, {
    "title": "Can I Use the Default User Management Implementation for My Custom Apps?",
    "slug": "can-i-use-the-default-user-management-implementation-for-my-custom-apps",
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
<li parentName="ul">{`how security hooks into API request lifecycle`}</li>
<li parentName="ul">{`hooks and plugins provided by Webiny Security Framework`}</li>
</ul>
</Alert>
<p>{`In this article, we cover how Webiny Security Framework (`}<em parentName="p">{`WSF`}</em>{` for short) works in the context of Webiny API, what hooks it introduces, and how it hooks into the existing request lifecycle hooks to perform its main tasks (like authentication and authorization).`}</p>
<Alert type="info" mdxType="Alert">
<p>{`This article uses terms like authentication, authorization, identity, and permissions extensively. These terms are described in details in the `}<_Link href="/docs/5.x/security/security-framework/introduction">{`Introduction`}</_Link>{` article. If you’re not familiar with these terms, make sure you read that article first.`}</p>
</Alert>
<p>{`WSF itself, just as any other Webiny application, is a collection of plugins. When these plugins are registered into the application, WSF hooks into some request lifecycle hooks. By doing so, it adds new tools and introduces new hooks to allow developers write plugins for them.`}</p>
<p>{`The term `}<em parentName="p">{`hook`}</em>{` is just used to denote that, at a certain point in time, plugins of that type will be processed (e.g., `}<inlineCode parentName="p">{`context`}</inlineCode>{` hook means that plugins of type `}<inlineCode parentName="p">{`context`}</inlineCode>{` will be processed).`}</p>
<_Heading level={2} id={"request-lifecycle"} nextElement={{
      "type": "paragraph"
    }}>Request Lifecycle</_Heading>
<p>{`To visualize the process of authentication, authorization, and better understand `}<em parentName="p">{`when`}</em>{` things are being executed, let’s analyze the following diagram:`}</p>
<Image src={_Image1} alt={"Request Lifecycle with Webiny Security Framework"} mdxType="Image" />
<p>{`The lifecycle of any request begins by invoking a Lambda function (`}<inlineCode parentName="p">{`1`}</inlineCode>{`). Once invoked, function handler runs a series of hooks (`}<inlineCode parentName="p">{`2`}</inlineCode>{`).`}</p>
<_Heading level={3} id={"context-hook"} nextElement={{
      "type": "paragraph"
    }}><code>context</code>Hook</_Heading>
<p>{`A new `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/next/packages/handler/src/createHandler.ts#L13-L19"
      }}>{`context object`}</a>{` is created for every Lambda function invocation and the `}<inlineCode parentName="p">{`context`}</inlineCode>{` hook is processed to allow plugins to extend the context object, which is accessible across the application (e.g., in all resolvers of your GraphQL API). The context object serves as a central registry for data, utilities, etc.`}</p>
<p>{`This is the hook WSF uses to create a `}<em parentName="p">{`context.security`}</em>{` object. All the existing Webiny applications depend on it to interact with WSF (to access identity, get permissions, etc.).`}</p>
<p>{`Once the `}<inlineCode parentName="p">{`context`}</inlineCode>{` hook has finished executing, Webiny executes the `}<inlineCode parentName="p">{`before-handler`}</inlineCode>{` hook.`}</p>
<_Heading level={3} id={"before-handler-hook"} nextElement={{
      "type": "paragraph"
    }}><code>before-handler</code>Hook</_Heading>
<p>{`The purpose of this hook is to allow developers execute arbitrary logic after the context object is fully built, but before request payload parsing begins. This is particularly useful for WSF, which, at this point, executes authentication.`}</p>
<p>{`Authentication within WSF has no built-in logic. It simply runs the `}<inlineCode parentName="p">{`security-authentication`}</inlineCode>{` hook (`}<inlineCode parentName="p">{`3`}</inlineCode>{`). The developer is responsible for registering plugins to perform actual authentication:`}</p>
<Editor title="Authentication plugin interface" lang="ts" mdxType="Editor">
{`interface SecurityAuthenticationPlugin extends Plugin {
  type: "security-authentication";
  authenticate(context: Context): Promise<null | SecurityIdentity>;
}`}
</Editor>
<p>{`When an authentication plugin verifies the provided credentials, it returns an identity object containing the information retrieved from the `}<a parentName="p" {...{
        "href": "https://en.wikipedia.org/wiki/Identity_provider"
      }}>{`identity provider`}</a>{` (e.g., Cognito, Auth0, etc.). The following Typescript interface describes the identity object returned from the authentication plugin:`}</p>
<Editor title="Identity object interface" lang="ts" mdxType="Editor">
{`interface SecurityIdentity {
  id: string;
  displayName: string;
  type: string;
  [key: string]: any;
}`}
</Editor>
<p>{`WSF only requires a couple of properties to work:`}</p>
<ul>
<li parentName="ul"><strong parentName="li">{`id`}</strong>{` - a unique identifier of the identity (e.g., email, phone number, ID retrieved from the identity provider, etc.)`}</li>
<li parentName="ul"><strong parentName="li">{`displayName`}</strong>{` - a human-friendly string to describe the identity (e.g., `}<em parentName="li">{`John M.`}</em>{`, `}<em parentName="li">{`ACME CMS Token`}</em>{`, `}<em parentName="li">{`Slack Bot`}</em>{` etc.)`}</li>
<li parentName="ul"><strong parentName="li">{`type`}</strong>{` - a string that describes the type of the identity (e.g., `}<inlineCode parentName="li">{`user`}</inlineCode>{`, `}<inlineCode parentName="li">{`admin-user`}</inlineCode>{`, `}<inlineCode parentName="li">{`api-key`}</inlineCode>{`, `}<inlineCode parentName="li">{`personal-access-token`}</inlineCode>{`, etc. The type is useful in the authorization process, because different identities can have different authorization implementations.`}</li>
</ul>
<p>{`Your actual identity object can contain a lot more information which you can use in your authorization plugins or business logic. WSF, however, will only require the properties described above.`}</p>
<Alert type="info" title="Identity vs. User" mdxType="Alert">
<p>{`Keep in mind that `}<inlineCode parentName="p">{`identity`}</inlineCode>{` and `}<inlineCode parentName="p">{`user`}</inlineCode>{` are not the same thing. A `}<inlineCode parentName="p">{`user`}</inlineCode>{` is a superset of `}<inlineCode parentName="p">{`identity`}</inlineCode>{`, meaning, it will have a lot more information associated with it. That information is often related to your project’s business logic (user profile, payment info, addresses).`}</p>
<p>{`Identity doesn’t need to contain any of that information. A good example of this is an API key. API keys don’t have profiles or addresses, but they will go through authentication process and produce an identity object.`}</p>
<p>{`How you handle user information is up to you. You can include it as part of the authentication process and append all the info to the `}<inlineCode parentName="p">{`SecurityIdentity`}</inlineCode>{` object we described previously, or you can add new utilities to the context object to retrieve user information based on the identity (e.g., create a `}<inlineCode parentName="p">{`getUser()`}</inlineCode>{` function and implement that logic however you like).`}</p>
</Alert>
<_Heading level={3} id={"handler-hook"} nextElement={{
      "type": "paragraph"
    }}><code>handler</code>Hook</_Heading>
<p>{`After the `}<inlineCode parentName="p">{`before-handler`}</inlineCode>{` hook, the system continues with the request processing by executing the `}<inlineCode parentName="p">{`handler`}</inlineCode>{` hook. This hook passes the `}<inlineCode parentName="p">{`context`}</inlineCode>{` object to every `}<inlineCode parentName="p">{`handler`}</inlineCode>{` plugin until one of them returns a response (these will be covered in details in a dedicated article).`}</p>
<p>{`How the request is being parsed, is irrelevant. It can be a GraphQL handler (`}<inlineCode parentName="p">{`4`}</inlineCode>{`), a regular REST API handler, or something completely different. Think of this hook as a traditional `}<em parentName="p">{`express`}</em>{` application with middleware, where the request goes through a pipeline, until a response is returned.`}</p>
<p>{`The important part is that some time during code execution (`}<inlineCode parentName="p">{`4`}</inlineCode>{`) some part of your application will need to check for certain permissions. At that point, it will reach out to the WSF to fetch a permission. Here’s an example using a GraphQL resolver:`}</p>
<Editor title="The simplest authorization check using WSF" lang="ts" mdxType="Editor">
{`export default async (parent, args, context) => {
  // Check if the identity is authorized to execute this resolver
  const permission = await context.security.getPermission("my-permission");

  if (!permission) {
    // Not authorized!
    throw new NotAuthorizedError();
  }

  // Proceed with your logic
};`}
</Editor>
<p>{`When the code executes `}<inlineCode parentName="p">{`context.security.getPermission(...)`}</inlineCode>{`, WSF will process the `}<inlineCode parentName="p">{`security-authorization`}</inlineCode>{` hook (`}<inlineCode parentName="p">{`3`}</inlineCode>{`) and return the matching permission object, if found.`}</p>
<p>{`Same as with authentication plugins, the developer is responsible for registering authorization plugins in their project. If no plugins exist, the identity will have no permissions and won’t be able to perform any operations that require authorization. To implement an authorization plugin, use the following interface:`}</p>
<Editor title="Authorization plugin interface" lang="ts" mdxType="Editor">
{`interface SecurityAuthorizationPlugin extends Plugin {
  type: "security-authorization";
  getPermissions(context: SecurityContext): Promise<SecurityPermission[]>;
}`}
</Editor>
<hr></hr>
<p>{`If everything goes well, and your identity has the permissions to execute the requested operation, the request will be converted into a response in the `}<inlineCode parentName="p">{`handler`}</inlineCode>{` hook and function invocation will end by sending the response (`}<inlineCode parentName="p">{`5`}</inlineCode>{`) to the client who originally invoked the function.`}</p>
<_Heading level={2} id={"faq"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>FAQ</_Heading>
<_Heading level={3} id={"where-and-how-do-i-store-permissions"} nextElement={{
      "type": "paragraph"
    }}>Where and How Do I Store Permissions?</_Heading>
<p>{`Since authorization plugins are asynchronous, you can store your permissions anywhere, even on remote services. You can also generate permissions dynamically based on some identity information. As long as you can provide an array of permissions back to the security framework, everything will work smoothly.`}</p>
<_Heading level={3} id={"can-i-use-the-default-user-management-implementation-for-my-custom-apps"} nextElement={{
      "type": "paragraph"
    }}>Can I Use the Default User Management Implementation for My Custom Apps?</_Heading>
<p>{`Usually, we recommend managing your app’s users separately from the default admin users. Every project is different, has different requirements (like signup, email confirmations, etc.), and it’s faster and easier for you to create a custom user management module for your specific needs.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;