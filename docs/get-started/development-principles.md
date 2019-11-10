---
id: development-principles
title: Development Principles
sidebar_label: Development Principles
---

Webiny is built using a simple system of plugins. This applies to both React apps and the API.
This makes it easy to simply create a plugin of a certain type and add it to an existing service or app to add new or replace the existing functionality.   

## Plugins system

The system of plugins is very simple. Plugin structure is identical on both React and API side. However, the way you use them is slightly different due to the difference in the environment.

### Plugins in React

In React, you interact with plugins using the `@webiny/plugins` package which in itself is a plugins registry. To add a plugin:

```js
import { registerPlugins } from "@webiny/plugins";

registerPlugins({
    name: "my-new-plugin",
    type: "useful-plugin",
    beUseful() {
        console.log("I am useful!");
        
        return "Useful data";
    }
});
```

Now from anywhere in React, you can retrieve your plugins and execute them:

```js
import { getPlugins } from "@webiny/plugins";

// Get plugins by type
const usefulPlugins = getPlugins("useful-plugin");
// Run plugins
const result = usefulPlugins.map(plugin => plugin.beUseful());
// Do whatever you need with the result
``` 

### Plugins in GraphQL 

The API environment is slightly different: here we have an instance of `PluginsContainer` which is always available to your resolvers via `context.plugins`.

This is a simplified example of how a GraphQL handler is executed (note that all optimizations are removed for code brevity):

```js
import { createHandler, PluginsContainer } from "@webiny/api";

const myPlugins = [{
    name: "my-new-plugin",
    type: "useful-plugin",
    beUseful() {
        return "Useful data";
    }
}];

export const handler = async (event, context) => {
    const plugins = new PluginsContainer([myPlugins]);
    const { handler } = await createHandler({ plugins });
    return handler(event, context);
};
```

Now anywhere in your resolvers you can get your plugins like this:

```js
export default (_, args, context) => {
  const usefulPlugins = context.plugins.byType("useful-plugin");
  const result = usefulPlugins.map(plugin => plugin.beUseful());
};
```

## Cloud native development

Now that we've completely embraced the Cloud and all of its services, our local development habits will have to change. It's simply impossible to simulate all of the cloud services locally. You can still develop React locally, but your API will have to be deployed to the cloud to access it.

`But you can easily simulate a function locally!` - a function yes, but not the rest of the cloud. And Webiny is not just powered by functions. There is file storage, events, API gateways, etc. To get the most out of these services, you must use them in a native way.

As cumbersome as it may sound, this brings a huge benefit of increased reliability when moving from development to production. Since you're developing your API and deploying it to the cloud to test, it means that when you deploy it to the production environment you're 99% sure it will work as expected.

### How we do it

We are aware that this is a huge change. But we're also sure it's for the better. At Webiny, we've embraced this way of development and it is pushing us to write tests for our GraphQL schemas, which eliminates the need to deploy all the time. But also, it pushes us to optimize our serverless components even further, to reduce the deploy time as much as possible.

Our CLI supports selective component deploy, so you can only deploy the component you're working on. Depending on how big your service is, a deploy will take from `~7-20` seconds. For example, a service like `i18n` or `security` takes `7s` to deploy. If you're working on a Page Builder API plugin, that will take you around `20s` to deploy, since that service is much bigger.  

### GraphQL schema tests

To speed up GraphQL test setup we've created a helper to bootstrap your API for testing. The test setup now looks like this:

```js
import { graphql } from "graphql";
import { MongoClient } from "mongodb";
import { setupSchema } from "@webiny/api/testing";
import filesPlugins from "@webiny/api-files/plugins";

describe("GraphQL plugins", () => {
    let testing;
    let client;

    beforeAll(async () => {
        // Setup database
        client = await MongoClient.connect(global.__MONGO_URI__, { useUnifiedTopology: true });
        const database = await client.db(global.__MONGO_DB_NAME__);
        testing = await setupSchema([filesPlugins], { database });
    });

    afterAll(async () => {
        await client.close();
    });

    test("create file", async () => {
        const query = /* GraphQL */ `
            mutation {
                files {
                    createFile(
                        data: {
                            id: "5c96410bf32d248a1a73b8c3"
                            key: "/files/filename.png"
                            name: "filename.png"
                        }
                    ) {
                        data {
                            id
                        }
                    }
                }
            }
        `;

        const response = await graphql(testing.schema, query, {}, testing.context);

        expect(response).toMatchObject({
            data: {
                files: {
                    createFile: {
                        data: {
                            id: expect.stringMatching("^[0-9a-fA-F]{24}$")
                        }
                    }
                }
            }
        });
    });
```

Now not only you don't need to deploy your services all the time, you're much more confident your schemas are working as expected 🎉.
 
You can find a complete example in the [@webiny/api-files package](https://github.com/webiny/webiny-js/blob/master/packages/api-files/__tests__/graphql.test.js).

### Avoid chaotic development

This is something full-stack developers are guilty of. We've done this ourselves for so many years, but the move to cloud native development made us stop and rethink this horrible practice. 

You should not develop your API and React at the same time. Do your API first, test it, deploy it. Then confidently move to your React app and work with the deployed API knowing it works as expected. This will also improve the quality of what you're developing because the context shift will not waste your time and distract you constantly.
