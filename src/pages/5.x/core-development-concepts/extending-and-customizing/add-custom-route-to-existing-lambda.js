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
  "title": "Adding Custom Route to Existing Webiny Lambda",
  "description": "Learn how to add a custom route to existing Webiny Lambda",
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
  "title": "Adding a Route to the API Gateway",
  "slug": "adding-a-route-to-the-api-gateway",
  "children": [{
    "title": "Dynamic API Gateway Route",
    "slug": "dynamic-api-gateway-route",
    "children": []
  }]
}, {
  "title": "Adding a Route to the Handler",
  "slug": "adding-a-route-to-the-handler",
  "children": [{
    "title": "Dynamic Webiny Handler Route",
    "slug": "dynamic-webiny-handler-route",
    "children": []
  }]
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
<li parentName="ul">{`how to add a custom route`}</li>
<li parentName="ul">{`how to add a custom route handler`}</li>
</ul>
</Alert>
<_Heading level={2} id={"introduction"} nextElement={{
      "type": "paragraph"
    }}>Introduction</_Heading>
<p>{`Starting with the Webiny version 5.31.0, when we added the `}<a parentName="p" {...{
        "href": "https://www.fastify.io/"
      }}>{`Fastify`}</a>{`, users can quite easily add new routes to our existing Lambdas.`}</p>
<p>{`Users can add as many routes as they want, with possibility for them to be a `}<inlineCode parentName="p">{`POST`}</inlineCode>{`, `}<inlineCode parentName="p">{`GET`}</inlineCode>{`, `}<inlineCode parentName="p">{`OPTIONS`}</inlineCode>{`, `}<inlineCode parentName="p">{`PUT`}</inlineCode>{`, `}<inlineCode parentName="p">{`PATH`}</inlineCode>{`, `}<inlineCode parentName="p">{`DELETE`}</inlineCode>{` and `}<inlineCode parentName="p">{`HEAD`}</inlineCode>{` method routes.`}</p>
<_Heading level={2} id={"adding-a-route-to-the-api-gateway"} nextElement={{
      "type": "paragraph"
    }}>Adding a Route to the API Gateway</_Heading>
<p>{`First, we need to add the route to the `}<inlineCode parentName="p">{`API Gateway`}</inlineCode>{`.
Without this part, the route will not be known by the `}<inlineCode parentName="p">{`API Gateway`}</inlineCode>{` and users will get a `}<inlineCode parentName="p">{`404`}</inlineCode>{` response.`}</p>
<Editor title="apps/api/webiny.application.ts" lang="typescript" mdxType="Editor">
{`import { createApiApp } from "@webiny/serverless-cms-aws";
import { ApiGraphql } from "@webiny/pulumi-aws";

export default createApiApp({
  pulumi: app => {
    const graphQlModule = app.getModule(ApiGraphql);
    // add custom POST route
    graphQlModule.addRoute({
      name: "my-custom-route-post",
      path: "/my-custom-path",
      method: "POST"
    });
    // add custom OPTIONS route
    graphQlModule.addRoute({
      name: "my-custom-route-options",
      path: "/my-custom-path",
      method: "OPTIONS"
    });
  }
});`}
</Editor>
<p>{`After these changes, feel free to deploy the api part of your project to test if new route is working. Use your favorite HTTP client to test it out.`}</p>
<_Heading level={3} id={"dynamic-api-gateway-route"} nextElement={{
      "type": "paragraph"
    }}>Dynamic API Gateway Route</_Heading>
<p>{`To have a API Gateway route which accepts dynamic parameters, you must specify the parameter in the path, in our case the `}<inlineCode parentName="p">{`{id}`}</inlineCode>{`.`}</p>
<Editor title="apps/api/webiny.application.ts" lang="typescript" mdxType="Editor">
{`import { createApiApp } from "@webiny/serverless-cms-aws";
import { ApiGraphql } from "@webiny/pulumi-aws";

export default createApiApp({
  pulumi: app => {
    const graphQlModule = app.getModule(ApiGraphql);
    // add custom POST route
    graphQlModule.addRoute({
      name: "my-custom-route-post",
      path: "/my-custom-path/{id}",
      method: "POST"
    });
    // add custom OPTIONS route
    graphQlModule.addRoute({
      name: "my-custom-route-options",
      path: "/my-custom-path/{id}",
      method: "OPTIONS"
    });
  }
});`}
</Editor>
<_Heading level={2} id={"adding-a-route-to-the-handler"} nextElement={{
      "type": "paragraph"
    }}>Adding a Route to the Handler</_Heading>
<p>{`After you added the route to the `}<inlineCode parentName="p">{`API Gateway`}</inlineCode>{`, you can move onto creating a route in our existing handler.`}</p>
<Editor title="apps/api/graphql/src/index.ts" lang="typescript" mdxType="Editor">
{`// add the import somewhere at the top of the file or update the existing import from @webiny/handler-aws
import { createHandler, createApiGatewayRoute } from "@webiny/handler-aws";

// existing handler
export const handler = createHandler({
  plugins: [
    // at the end of the plugins array you need to create a new API Gateway route
    createApiGatewayRoute(({ onPost, onOptions, context }) => {
      onPost("/my-custom-path", async (request, reply) => {
        // do something with request
        if (request.body === null) {
          return reply.send({
            somethingIsWrong: true
          });
        }
        return reply.send({
          output: true,
          someOtherVariable: "xyz"
        });
      });
      onOptions("/my-custom-path", async (_, reply) => {
        return reply
          .headers({
            myCustomOptionHeader: "yes"
          })
          .send({})
          .hijack();
      });
    })
  ]
});`}
</Editor>
<_Heading level={3} id={"dynamic-webiny-handler-route"} nextElement={{
      "type": "paragraph"
    }}>Dynamic Webiny Handler Route</_Heading>
<p>{`To have a Fastify route which accepts dynamic parameters, you must specify the parameter in the path, in our case the `}<inlineCode parentName="p">{`:id`}</inlineCode>{`.`}</p>
<Editor title="apps/api/graphql/src/index.ts" lang="typescript" mdxType="Editor">
{`// add the import somewhere at the top of the file or update the existing import from @webiny/handler-aws
import { createHandler, createApiGatewayRoute } from "@webiny/handler-aws";

// existing handler
export const handler = createHandler({
  plugins: [
    // at the end of the plugins array you need to create a new API Gateway route
    createApiGatewayRoute(({ onPost, onOptions }) => {
      onPost("/my-custom-path/:id", async (request, reply) => {
        // the parameters are available on request.params object
        const { id } = request.params;
        return reply.send({
          id
        });
      });
      onOptions("/my-custom-path/:id", async (request, reply) => {
        const { id } = request.params;
        return reply
          .headers({
            myCustomOptionHeader: "yes",
            id
          })
          .send({})
          .hijack();
      });
    })
  ]
});`}
</Editor>
<p>{`In the `}<inlineCode parentName="p">{`createApiGatewayRoute`}</inlineCode>{` method callback, there are multiple properties available:`}</p>
<ul>
<li parentName="ul"><inlineCode parentName="li">{`onPost`}</inlineCode>{` - register a POST method route`}</li>
<li parentName="ul"><inlineCode parentName="li">{`onOptions`}</inlineCode>{` - register an OPTIONS method route`}</li>
<li parentName="ul"><inlineCode parentName="li">{`onDelete`}</inlineCode>{` - register a DELETE method route`}</li>
<li parentName="ul"><inlineCode parentName="li">{`onPatch`}</inlineCode>{` - register a PATCH method route`}</li>
<li parentName="ul"><inlineCode parentName="li">{`onGet`}</inlineCode>{` - register a GET method route`}</li>
<li parentName="ul"><inlineCode parentName="li">{`onHead`}</inlineCode>{` - register a HEAD method route`}</li>
<li parentName="ul"><inlineCode parentName="li">{`onPut`}</inlineCode>{` - register a PUT method route`}</li>
<li parentName="ul"><inlineCode parentName="li">{`onAll`}</inlineCode>{` - register a route which will catch all the existing methods`}</li>
<li parentName="ul"><inlineCode parentName="li">{`context`}</inlineCode>{` - our Webiny internal context with all our applications attached to it`}</li>
</ul>
<p>{`The `}<a parentName="p" {...{
        "href": "https://www.fastify.io/docs/latest/Reference/Request/"
      }}><inlineCode parentName="a">{`request`}</inlineCode></a>{` and `}<a parentName="p" {...{
        "href": "https://www.fastify.io/docs/latest/Reference/Reply/"
      }}><inlineCode parentName="a">{`reply`}</inlineCode></a>{` objects are the original ones from the Fastify, so you can look into their documentation about what they contain and what you can use.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;