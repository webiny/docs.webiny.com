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
  "title": "Intercepting the Request",
  "description": "Learn how to intercept the request in it's initial stage",
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
  "title": "Introduction",
  "slug": "introduction",
  "children": []
}, {
  "title": "Creating and Registering the Plugin to Intercept the Request",
  "slug": "creating-and-registering-the-plugin-to-intercept-the-request",
  "children": []
}, {
  "title": "Intercepting the OPTIONS Request and Stopping the Request From Being Processed",
  "slug": "intercepting-the-options-request-and-stopping-the-request-from-being-processed",
  "children": [{
    "title": "Why Would the User Prevent the Webiny Default Behavior?",
    "slug": "why-would-the-user-prevent-the-webiny-default-behavior",
    "children": []
  }, {
    "title": "How Can Users Prevent the Webiny Default Behavior on OPTIONS Request to Be Executed?",
    "slug": "how-can-users-prevent-the-webiny-default-behavior-on-options-request-to-be-executed",
    "children": []
  }]
}, {
  "title": "Conclusion",
  "slug": "conclusion",
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
<li parentName="ul">{`how to intercept the request`}</li>
<li parentName="ul">{`what you can do with the request at this point`}</li>
</ul>
</Alert>
<_Heading level={2} id={"introduction"} nextElement={{
      "type": "paragraph"
    }}>Introduction</_Heading>
<p>{`In the `}<inlineCode parentName="p">{`5.x`}</inlineCode>{` version we added a possibility for users to intercept the Fastify request in it’s initial phase.
It can be done via the `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/16af8737377a9ae1dd6ac4ecffec5625726c814e/packages/handler/src/plugins/HandlerOnRequestPlugin.ts"
      }}><inlineCode parentName="a">{`HandlerOnRequestPlugin`}</inlineCode></a>{`.`}</p>
<p>{`With this plugin you can do anything with the Fastify’s `}<a parentName="p" {...{
        "href": "https://www.fastify.io/docs/latest/Reference/Request/"
      }}>{`Request`}</a>{` object, even stop the request from being processed.
To find out why you can stop the request from being processed, read about it in the `}<a parentName="p" {...{
        "href": "https://www.fastify.io/docs/latest/Reference/Lifecycle/"
      }}>{`Fastify Lifecycle`}</a>{` and `}<a parentName="p" {...{
        "href": "https://www.fastify.io/docs/latest/Reference/Hooks/"
      }}>{`Fastify Hooks`}</a>{` documentation.`}</p>
<_Heading level={2} id={"creating-and-registering-the-plugin-to-intercept-the-request"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>Creating and Registering the Plugin to Intercept the Request</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { createHandlerOnRequest } from "@webiny/handler";

const handlerOnRequestPlugin = createHandlerOnRequest(async (request, reply) => {
  if (request.raw.path === "/testing") {
    // do something for this path
  }
});`}
</Editor>
<p>{`Of course, as with our other plugins, you must register it in the Lambda handler plugins array:`}</p>
<Editor title="apps/api/graphql/src/index.ts" lang="typescript" mdxType="Editor">
{`const handler = createHandler({
  plugins: [
    // ... other plugins
    handlerOnRequestPlugin
  ]
});`}
</Editor>
<_Heading level={2} id={"intercepting-the-options-request-and-stopping-the-request-from-being-processed"} nextElement={{
      "type": "paragraph"
    }}>Intercepting the<code>OPTIONS</code>Request and Stopping the Request From Being Processed</_Heading>
<p>{`By default, Webiny intercepts the `}<inlineCode parentName="p">{`OPTIONS`}</inlineCode>{` request and stop all of the Fastify lifecycles, after the `}<inlineCode parentName="p">{`onRequest`}</inlineCode>{`, from being ran.
We do this because we have no need to run all the code we usually run for, eg., `}<inlineCode parentName="p">{`POST`}</inlineCode>{` request.
You can see the code `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/16af8737377a9ae1dd6ac4ecffec5625726c814e/packages/handler/src/fastify.ts#L283"
      }}>{`here`}</a>{`.`}</p>
<p>{`Via the `}<inlineCode parentName="p">{`HandlerOnRequestPlugin`}</inlineCode>{`, users can prevent our default behavior.`}</p>
<_Heading level={3} id={"why-would-the-user-prevent-the-webiny-default-behavior"} nextElement={{
      "type": "paragraph"
    }}>Why Would the User Prevent the Webiny Default Behavior?</_Heading>
<p>{`The most simple answer would be: to output their own headers in the `}<inlineCode parentName="p">{`OPTIONS`}</inlineCode>{` request.`}</p>
<_Heading level={3} id={"how-can-users-prevent-the-webiny-default-behavior-on-options-request-to-be-executed"} nextElement={{
      "type": "paragraph"
    }}>How Can Users Prevent the Webiny Default Behavior on<code>OPTIONS</code>Request to Be Executed?</_Heading>
<p>{`To prevent the Webiny default behavior on `}<inlineCode parentName="p">{`OPTIONS`}</inlineCode>{` request, user would need to add a simple plugin which returns `}<inlineCode parentName="p">{`false`}</inlineCode>{` as the result.`}</p>
<p>{`Here is an example of sending a custom header `}<inlineCode parentName="p">{`myCustomHeader`}</inlineCode>{`, and prevent the Webiny default behavior, on `}<inlineCode parentName="p">{`OPTIONS`}</inlineCode>{` request:`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { createHandlerOnRequest } from "@webiny/handler";

const handlerOnRequestPlugin = createHandlerOnRequest(async (request, reply) => {
  if (request.method !== "OPTIONS") {
    return;
  }
  reply
    .code(204)
    .headers({
      myCustomHeader: "sending the custom headers"
    })
    /**
     * There must be some output or the request will hang.
     * Also, send must be just before the hijack(), otherwise all other method calls will not have any effect.
     */
    .send("")
    /**
     * It is important to hijack() the reply, as it prevents all other Fastify lifecycle events to be executed.
     * Of course, if user wants all the events to be triggered, they should not hijack() the reply.
     */
    .hijack();
  /**
   * It is important to return false in the end because it actually prevents
   * all other HandlerOnRequestPlugin to be ran, including the Webiny default behavior.
   */
  return false;
});`}
</Editor>
<_Heading level={2} id={"conclusion"} nextElement={{
      "type": "paragraph"
    }}>Conclusion</_Heading>
<p>{`Simply, with the `}<inlineCode parentName="p">{`HandlerOnRequestPlugin`}</inlineCode>{` user can, in the initial stage of the Fastify Request Lifecycle:`}</p>
<ul>
<li parentName="ul">{`intercept the request and prevent it to go further down the lifecycle line`}</li>
<li parentName="ul">{`modify the Webiny default `}<inlineCode parentName="li">{`OPTIONS`}</inlineCode>{` headers output to suit their own need`}</li>
<li parentName="ul">{`log the request to some outside service`}</li>
</ul>
<Alert type="warning" mdxType="Alert">
<p>{`Users must be careful on which path are they when executing the plugin code. Webiny has one built-in path: `}<inlineCode parentName="p">{`/graphql`}</inlineCode>{`.`}</p>
</Alert>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;