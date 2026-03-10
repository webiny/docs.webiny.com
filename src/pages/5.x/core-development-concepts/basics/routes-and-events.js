/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import {Alert} from "@/components/Alert";
import {CanIUseThis} from "@/components/CanIUseThis";
import {WhatYouWillLearn} from "@/components/WhatYouWillLearn";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Routes and Events",
  "description": "You will learn about new handlers for routes and events, and how to add new routes and event definitions.",
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
  "title": "About",
  "slug": "about",
  "children": [{
    "title": "The Main createHandler Method",
    "slug": "the-main-create-handler-method",
    "children": []
  }, {
    "title": "Event Specific Handlers",
    "slug": "event-specific-handlers",
    "children": [{
      "title": "API Gateway Route (Event)",
      "slug": "api-gateway-route-event"
    }, {
      "title": "Raw Handler, Event Handler and Event",
      "slug": "raw-handler-event-handler-and-event"
    }, {
      "title": "S3 Event",
      "slug": "s3-event"
    }, {
      "title": "EventBridge Event",
      "slug": "event-bridge-event"
    }, {
      "title": "SQS Event",
      "slug": "sqs-event"
    }, {
      "title": "SNS Event",
      "slug": "sns-event"
    }, {
      "title": "DynamoDB Event",
      "slug": "dynamo-db-event"
    }]
  }]
}, {
  "title": "Adding New Routes",
  "slug": "adding-new-routes",
  "children": []
}, {
  "title": "Adding Event Handler",
  "slug": "adding-event-handler",
  "children": [{
    "title": "Example",
    "slug": "example",
    "children": [{
      "title": "Multiple Event Handlers in a Single Handler",
      "slug": "multiple-event-handlers-in-a-single-handler"
    }, {
      "title": "Multiple Event Handlers of a Same Type in a Single Handler",
      "slug": "multiple-event-handlers-of-a-same-type-in-a-single-handler"
    }]
  }, {
    "title": "Event Handler Response",
    "slug": "event-handler-response",
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





<CanIUseThis since={"5.39.0"} mdxType="CanIUseThis" />
<WhatYouWillLearn mdxType="WhatYouWillLearn">
<ul>
<li parentName="ul">{`How routing works.`}</li>
<li parentName="ul">{`How to add new events.`}</li>
<li parentName="ul">{`How to add new routes.`}</li>
</ul>
</WhatYouWillLearn>
<_Heading level={2} id={"about"} nextElement={{
      "type": "paragraph"
    }}>About</_Heading>
<p>{`In the 5.31.0 version of Webiny we have refactored our handler package (`}<inlineCode parentName="p">{`@webiny/handler`}</inlineCode>{`) to use `}<a parentName="p" {...{
        "href": "https://github.com/fastify/fastify"
      }}>{`fastify`}</a>{`.
Fastify has a quite extensive `}<a parentName="p" {...{
        "href": "https://www.fastify.io/docs/latest/"
      }}>{`documentation`}</a>{`, so feel free to check it out if you need to modify our default behavior.`}</p>
<p>{`Fastify enables us to:`}</p>
<ul>
<li parentName="ul">{`add the possibility to add new `}<a parentName="li" {...{
          "href": "https://www.fastify.io/docs/latest/Reference/Routes/"
        }}>{`routes`}</a>{` and event handling`}</li>
<li parentName="ul">{`consistent `}<a parentName="li" {...{
          "href": "https://www.fastify.io/docs/latest/Reference/Request/"
        }}><inlineCode parentName="a">{`request`}</inlineCode></a>{` and `}<a parentName="li" {...{
          "href": "https://www.fastify.io/docs/latest/Reference/Reply/"
        }}><inlineCode parentName="a">{`reply`}</inlineCode></a>{` (formerly response in our system) methods throughout the system`}</li>
<li parentName="ul">{`a lot of request `}<a parentName="li" {...{
          "href": "https://www.fastify.io/docs/latest/Reference/Lifecycle/"
        }}>{`lifecycle events`}</a>{` for users to hook into`}</li>
<li parentName="ul">{`implement some other cloud service, at some point, more easily`}</li>
</ul>
<p>{`The `}<inlineCode parentName="p">{`@webiny/handler`}</inlineCode>{` package does not differentiate between incoming Lambda requests, that is left to the `}<inlineCode parentName="p">{`@webiny/handler-aws`}</inlineCode>{` package, which has a possibility to handle few types of events:`}</p>
<ul>
<li parentName="ul">{`API Gateway Event`}</li>
<li parentName="ul">{`EventBridge Event`}</li>
<li parentName="ul">{`SQS Event`}</li>
<li parentName="ul">{`SNS Event`}</li>
<li parentName="ul">{`S3 Event`}</li>
<li parentName="ul">{`DynamoDB Stream Event`}</li>
<li parentName="ul">{`Raw Event - this one is different from the others, we will go into details in a separate section`}</li>
</ul>
<_Heading level={3} id={"the-main-create-handler-method"} nextElement={{
      "type": "paragraph"
    }}>The Main<code>createHandler</code>Method</_Heading>
<p>{`This method is a simple one, as its only job is to choose the specific event handler to be used based on the event it receives.`}</p>
<p>{`There is only one `}<inlineCode parentName="p">{`createHandler`}</inlineCode>{` to be used and it can be imported from `}<inlineCode parentName="p">{`@webiny/handler-aws`}</inlineCode>{`.`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { createHandler } from "@webiny/handler-aws";

const handler = createHandler({
  plugins: [
    // ... plugins
  ],
  debug: process.env.DEBUG === "true"
});`}
</Editor>
<p>{`This `}<inlineCode parentName="p">{`createHandler`}</inlineCode>{` method will handle all incoming events, except the Raw event, which is handled by the `}<inlineCode parentName="p">{`createRawHandler`}</inlineCode>{` method, imported from the `}<inlineCode parentName="p">{`@webiny/handler-aws`}</inlineCode>{` or `}<inlineCode parentName="p">{`createHandler`}</inlineCode>{` imported from `}<inlineCode parentName="p">{`@webiny/handler-aws/raw`}</inlineCode>{`.`}</p>
<_Heading level={3} id={"event-specific-handlers"} nextElement={{
      "type": "paragraph"
    }}>Event Specific Handlers</_Heading>
<p>{`The underlying event handlers, which the main `}<inlineCode parentName="p">{`createHandler`}</inlineCode>{` chooses depending on the event type, actually initialize the Webiny system.
They will initialize `}<a parentName="p" {...{
        "href": "https://fastify.dev/docs/latest/"
      }}><inlineCode parentName="a">{`fastify`}</inlineCode></a>{`, context and everything which is defined by plugins that were passed on.`}</p>
<p>{`There are multiple event handlers shipped with our system, but if we missed something that you need - and is an AWS event type, feel free to open an issue or a PR.`}</p>
<_Heading level={4} id={"api-gateway-route-event"} nextElement={{
      "type": "paragraph"
    }}>API Gateway Route (Event)</_Heading>
<p>{`This handler uses `}<a parentName="p" {...{
        "href": "https://github.com/fastify/aws-lambda-fastify"
      }}>{`@fastify/aws-lambda`}</a>{` in the background to handle API Gateway events. It transforms `}<a parentName="p" {...{
        "href": "https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/aws-lambda/trigger/api-gateway-proxy.d.ts#L60"
      }}>{`APIGatewayEvent`}</a>{` into the request which `}<inlineCode parentName="p">{`fastify`}</inlineCode>{` understands, and it is then used throughout the system.`}</p>
<p>{`For this handler to work it requires at least one `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/754c402e5df49ffb4cd07f8c53574ebe5e125f04/packages/handler/src/plugins/RoutePlugin.ts"
      }}>{`RoutePlugin`}</a>{` to be initialized. It always returns `}<a parentName="p" {...{
        "href": "https://github.com/fastify/aws-lambda-fastify/blob/master/index.d.ts#L13"
      }}>{`LambdaResponse`}</a>{` defined in the `}<inlineCode parentName="p">{`@fastify/aws-lambda`}</inlineCode>{` package.`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { createHandler, createApiGatewayRoute } from "@webiny/handler-aws";

const handler = createHandler({
  plugins: [
    createApiGatewayRoute(({ onPost }) => {
      onPost("/my-url", async (request, reply) => {
        return iWillHandleThisRequest(request, reply);
      });
    })
  ]
});`}
</Editor>
<p>{`Just note that the `}<inlineCode parentName="p">{`Route`}</inlineCode>{` is actually an event, we just call it a route because it is a API Gateway route.`}</p>
<_Heading level={4} id={"raw-handler-event-handler-and-event"} nextElement={{
      "type": "paragraph"
    }}>Raw Handler, Event Handler and Event</_Heading>
<p>{`This handler uses a nice `}<inlineCode parentName="p">{`fastify`}</inlineCode>{` feature that allows you to run any route you have previously defined. So basically, on initialization of the handler we add some dummy route (something like `}<inlineCode parentName="p">{`webiny-raw-event`}</inlineCode>{`) and then run it via the `}<inlineCode parentName="p">{`.inject()`}</inlineCode>{` method on `}<inlineCode parentName="p">{`fastify`}</inlineCode>{` instance.
This is the same procedure being used in the `}<inlineCode parentName="p">{`@fastify/aws-lambda`}</inlineCode>{` package.
The difference is that our Raw handler can return either `}<a parentName="p" {...{
        "href": "https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/aws-lambda/trigger/api-gateway-proxy.d.ts#L135"
      }}>{`APIGatewayProxyResult`}</a>{` or anything else that is directly sent from the `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/754c402e5df49ffb4cd07f8c53574ebe5e125f04/packages/handler/src/plugins/EventPlugin.ts"
      }}>{`EventPlugin`}</a>{`.`}</p>
<Editor title="" lang="ts" mdxType="Editor">
{`import { createRawHandler, createRawEventHandler } from "@webiny/handler-aws";

interface MyEventType {
  id: string;
  data: Record<string, any>;
}

const handler = createRawHandler({
  plugins: [
    createRawEventHandler<MyEventType>(async ({ event, context }) => {
      const result = await transformRawEventIntoSomethingUseable(event);

      await pushToSQS(event);
    })
  ]
});`}
</Editor>
<_Heading level={4} id={"s3-event"} nextElement={{
      "type": "code",
      "lang": "ts",
      "meta": null
    }}>S3 Event</_Heading>
<Editor title="" lang="ts" mdxType="Editor">
{`import { createHandler, createS3EventHandler } from "@webiny/handler-aws";

const handler = createHandler({
  plugins: [
    createS3EventHandler(async ({ event, context }) => {
      await deleteFileFromDynamoDb({ context, event });
    })
  ]
});`}
</Editor>
<_Heading level={4} id={"event-bridge-event"} nextElement={{
      "type": "code",
      "lang": "ts",
      "meta": null
    }}>EventBridge Event</_Heading>
<Editor title="" lang="ts" mdxType="Editor">
{`import { createHandler, createEventBridgeEventHandler } from "@webiny/handler-aws";

const handler = createHandler({
  plugins: [
    createEventBridgeEventHandler(async ({ event, context }) => {
      const result = doSomethingWithEventBridgeEvent({ context, event });

      await storeResultIntoDynamoDB(result);
    })
  ]
});`}
</Editor>
<_Heading level={4} id={"sqs-event"} nextElement={{
      "type": "code",
      "lang": "ts",
      "meta": null
    }}>SQS Event</_Heading>
<Editor title="" lang="ts" mdxType="Editor">
{`import { createHandler, createSQSEventHandler } from "@webiny/handler-aws";

const handler = createHandler({
  plugins: [
    createSQSEventHandler(async ({ event, context }) => {
      const result = doSomethingWithSQSEvent({ context, event });

      await triggerAnotherLambda(result);
    })
  ]
});`}
</Editor>
<_Heading level={4} id={"sns-event"} nextElement={{
      "type": "code",
      "lang": "ts",
      "meta": null
    }}>SNS Event</_Heading>
<Editor title="" lang="ts" mdxType="Editor">
{`import { createHandler, createSNSEventHandler } from "@webiny/handler-aws";

const handler = createHandler({
  plugins: [
    createSNSEventHandler(async ({ event, context }) => {
      const result = doSomeMagic({ context, event });

      await doSomeMoreMagic(result);
    })
  ]
});`}
</Editor>
<_Heading level={4} id={"dynamo-db-event"} nextElement={{
      "type": "code",
      "lang": "ts",
      "meta": null
    }}>DynamoDB Event</_Heading>
<Editor title="" lang="ts" mdxType="Editor">
{`import { createHandler, createDynamoDBEventHandler } from "@webiny/handler-aws";

const handler = createHandler({
  plugins: [
    createDynamoDBEventHandler(async ({ event, context }) => {
      const result = doSomethingWithDynamoDBEvent({ context, event });

      await transferResultToAnotherService(result);
    })
  ]
});`}
</Editor>
<Alert type="info" mdxType="Alert">
  You can define as much routes and events as you like in a single `createHandler` method.
</Alert>
<_Heading level={2} id={"adding-new-routes"} nextElement={{
      "type": "paragraph"
    }}>Adding New Routes</_Heading>
<p>{`Adding new routes is quite simple, but you need to add them via both Pulumi code and the RoutePlugin.`}</p>
<p>{`The Pulumi code goes into `}<inlineCode parentName="p">{`apps/api/webiny.application.ts`}</inlineCode>{`. You must add the new route there, check out the example below, where we are adding a `}<inlineCode parentName="p">{`[POST]/webiny`}</inlineCode>{` route.`}</p>
<Editor title="" lang="ts" mdxType="Editor">
{`import { createApiApp } from "@webiny/serverless-cms-aws";
import { ApiGraphql } from "@webiny/pulumi-aws";

export default createApiApp({
  pulumi: app => {
    const graphQLModule = app.getModule(ApiGraphql);

    graphQLModule.addRoute({
      // name must be in kebab-case
      name: "webiny",
      // path must start with /
      path: "/webiny",
      // all http methods allowed + ANY to catch all requests
      method: "POST"
    });
  }
});`}
</Editor>
<p>{`Next thing you need to do is to add it into the `}<inlineCode parentName="p">{`apps/api/graphql/src/index.ts`}</inlineCode>{` file via the `}<inlineCode parentName="p">{`RoutePlugin`}</inlineCode>{` or `}<inlineCode parentName="p">{`createApiGatewayRoute`}</inlineCode>{` method:`}</p>
<Editor title="apps/api/graphql/src/index.ts" lang="ts" mdxType="Editor">
{`// ... other imports
import { createHandler, createApiGatewayRoute } from "@webiny/handler-aws";

export const handler = createHandler({
  plugins: [
    // ... other plugins
    createApiGatewayRoute(({ onPost }) => {
      onPost("/webiny", async (request, reply) => {
        // we can log the whole request body
        console.log(request.body);

        // and we can send some reply
        return reply
          .headers({
            "x-route-example": "yes"
          })
          .send({
            everything: {
              ok: true
            }
          });
      });
    })
  ],
  http: { debug }
});`}
</Editor>
<Alert type="warning" mdxType="Alert">
  Security checks will be done as on the <strong>/graphql</strong> endpoint. If you need
  customizations, feel free to add them.
</Alert>
<Alert type="danger" mdxType="Alert">Routes can be added only when initializing the handler.</Alert>
<_Heading level={2} id={"adding-event-handler"} nextElement={{
      "type": "paragraph"
    }}>Adding Event Handler</_Heading>
<p>{`Adding event handlers is even simpler than adding routes. You just need to add the event handler for the Event type you need and that is it - no need for Pulumi code.`}</p>
<_Heading level={3} id={"example"} nextElement={{
      "type": "paragraph"
    }}>Example</_Heading>
<p>{`Let’s say you created a part of code which sends out an SQS message, and you want to have a Lambda which handles that message.`}</p>
<p>{`Good example would be if you want to run some calculation, asynchronously, from our GraphQL Lambda.
You would insert an SQS Message and in turn it would trigger a Lambda which you have defined. That lambda should have code similar to this:`}</p>
<Editor title="" lang="ts" mdxType="Editor">
{`import { createHandler, createSQSEventHandler } from "@webiny/handler-aws";

const handler = createHandler({
  plugins: [
    // other plugins
    createSQSEventHandler(async ({ request, reply, event, context, lambdaContext }) => {
      // the "context" variable is the same as in our system - as long as you haven't changed Webiny's default plugin loader
      // because it is an sqs event, you know the type of the "event" variable and you can handle it from there
      const result = await someHeavyCalculation(event);

      // maybe store that result into the database?
      await storeResult(result);

      return reply.send({
        ok: true
      });
    })
  ]
});`}
</Editor>
<_Heading level={4} id={"multiple-event-handlers-in-a-single-handler"} nextElement={{
      "type": "code",
      "lang": "ts",
      "meta": null
    }}>Multiple Event Handlers in a Single Handler</_Heading>
<Editor title="" lang="ts" mdxType="Editor">
{`import {
  createHandler,
  createSQSEventHandler,
  createDynamoDBEventHandler
} from "@webiny/handler-aws";

const handler = createHandler({
  plugins: [
    // This event handler will only be triggered when an SQS event is received.
    createSQSEventHandler(async ({ request, reply, event, context, lambdaContext }) => {
      // the "context" variable is the same as in our system - as long as you haven't changed Webiny's default plugin loader
      // because it is a sqs event, you know the type of the "event" variable, and you can handle it from there
      const result = await someHeavyCalculationOnSQSEvent(event);

      // maybe store that result into the database?
      await storeResult(result);

      return reply.send({
        ok: true
      });
    }),
    // This event handler will only be triggered when a DynamoDB event is received.
    createDynamoDBEventHandler(async ({ request, reply, event, context, lambdaContext }) => {
      const result = await heavyCalculationOnlyOnDynamoDBStreamEvent(event);

      return reply.send({
        result
      });
    })
  ]
});`}
</Editor>
<_Heading level={4} id={"multiple-event-handlers-of-a-same-type-in-a-single-handler"} nextElement={{
      "type": "paragraph"
    }}>Multiple Event Handlers of a Same Type in a Single Handler</_Heading>
<p>{`You can define multiple event handlers, for example DynamoDB event handlers, in a single handler.`}</p>
<p>{`They will be executed in reverse order, meaning that the last one defined will be executed first.`}</p>
<p>{`There are few things to note:`}</p>
<ul>
<li parentName="ul">{`You should call `}<inlineCode parentName="li">{`await next();`}</inlineCode>{` in your event handler, otherwise the next event handler will not be executed.`}</li>
<li parentName="ul">{`You can return anything you want to from your event handler, just note that the next event handler will receive that value as a result if the `}<inlineCode parentName="li">{`await next();`}</inlineCode>{` call.`}</li>
</ul>
<Editor title="" lang="ts" mdxType="Editor">
{`import { createHandler, createDynamoDBEventHandler } from "@webiny/handler-aws";

const handler = createHandler({
  plugins: [
    // This event handler will be triggered second.
    createDynamoDBEventHandler(async ({ request, reply, event, context, lambdaContext }) => {
      const result = await heavyCalculation(event);

      return {
        result
      };
    }),
    // This event handler will be triggered first.
    createDynamoDBEventHandler(async ({ request, reply, event, context, lambdaContext, next }) => {
      // this is how we trigger the second event handler (the one defined above)
      const resultFromPreviousEventHandler = await next();
      const result = await anotherHeavyCalculation(resultFromPreviousEventHandler, event);

      return reply.send({
        ...resultFromPreviousEventHandler,
        ...result
      });
    })
  ]
});`}
</Editor>
<_Heading level={3} id={"event-handler-response"} nextElement={{
      "type": "paragraph"
    }}>Event Handler Response</_Heading>
<p>{`When handling an event, you can either return the `}<inlineCode parentName="p">{`reply`}</inlineCode>{` object or something else, what ever you like.
Basically, when you return the `}<inlineCode parentName="p">{`reply`}</inlineCode>{`, a standard `}<a parentName="p" {...{
        "href": "https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/aws-lambda/trigger/api-gateway-proxy.d.ts#L135"
      }}>{`APIGatewayProxyResult`}</a>{` is created out of the data, headers and cookies you sent.
When you return anything else other than the `}<inlineCode parentName="p">{`reply`}</inlineCode>{`, it is returned as the result of the handler, and the Lambda itself.`}</p>
<p>{`For example, you can send plain text or object to get the response of the Lambda without the need to parse the `}<inlineCode parentName="p">{`APIGatewayProxyResult`}</inlineCode>{`.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;