---
id: headless-vuejs-tutorial
title: Creating a blog with Headless CMS + Vue.js
sidebar_label: Creating a blog with Headless CMS + Vue.js
---

In this short tutorial, we will learn how to use the popular [Vue.js](https://vuejs.org/) The Progressive JavaScript Framework with the [Webiny Headless CMS](/docs/webiny-apps/headless-cms/features/content-modeling).

> All of the code shown in this tutorial is also hosted in our [GitHub](https://github.com/webiny/webiny-examples/blob/master/headlesscms-vuejs) repository.

## Prerequisites

##### 1. A Webiny Project

First of all, make sure you have a working [Webiny project](/docs/get-started/quick-start) set up.

> When setting up a new project, currently, there are [two project templates](/docs/get-started/quick-start#3-template-specific-setup) you can choose from: `full` and `cms`. Both include the Headless CMS app by default.

##### 2. Content Delivery API URL

The Headless CMS app exposes data via the Content Delivery API, which is a simple GraphQL API that dynamically updates its schema on content model changes that you make.
Once you've deployed your API stack (using the `yarn webiny deploy api` command), you should be able to find the Content Delivery API URL in the console output:

![Headless CMS API URLs](/img/guides/headless-vuejs-tutorial/headless-cms-api-url.jpg)

##### 3. Content Delivery API Access Token

In order to access the data via the Content Delivery API, we'll need a valid [Access Token](/docs/webiny-apps/headless-cms/features/access-tokens). These can be created via the Access Tokens form, which you can reach via the main menu:

![Headless CMS API Access Tokens](/img/guides/headless-nextjs-tutorial/access-tokens-menu.png)

Create a new token and make sure to copy the actual token string. We'll need it soon.

![Headless CMS API Access Tokens](/img/guides/headless-nextjs-tutorial/access-tokens-form.png)

## Creating our first content model

Now that we have all of the prerequisites out of the way, it's time to create our first [content model](/docs/webiny-apps/headless-cms/features/content-modeling). Let's open the **Models** section of the Headless CMS app.

![The Models View](/img/guides/headless-nextjs-tutorial/content-models-menu.png)

Let's create a new content model named **Blog Post**. Click on the "plus" icon in the lower right corner of the screen and in the dialog that's about to be shown, enter the following:

![New Content Mode Dialogl](/img/guides/headless-vuejs-tutorial/new-content-model-dialog.png)

For the content model group, we'll use the `Ungrouped`, which is the default group that comes out of the box with every Headless CMS app installation.

> Content model groups give you a way to organize the content models inside the main menu, allowing you to build logical sections for your content editors. You can click [here](/docs/webiny-apps/headless-cms/features/content-modeling-groups) to learn more.

Once we've submitted the form in the dialog, we should be redirected to the [Content Model Editor](/docs/webiny-apps/headless-cms/features/content-modeling). Let's add three fields: `title` as a `Text`, `description` as a `Long Text`, and `image` as a `Files` field. They will match every fact's title, description and image, respectively.

<!---
Optionally, it is possible make both of the fields **required** in the `Validators` tab.
-->

![Fact Model](/img/guides/headless-vuejs-tutorial/editor-fact-model.png)

Save the changes by clicking on the **Save** button in the top right corner of the screen.

Now it's time to create the actual content. Proceed by clicking on the **View content** button, located on the left side of the **Save** button.

You can also reach the content area by clicking on the newly added **Fact** item in the main menu:

![Fact Model - Main Menu](/img/guides/headless-vuejs-tutorial/fact-in-menu.png)

## Managing Content

As mentioned, navigate to **Headless CMS > Ungrouped > Fact** and create couple of facts. Feel free to unleash your creativity. 😉

![Fact Form](/img/guides/headless-vuejs-tutorial/fact-form.png)

Once you feel happy with the facts, you can save the changes by clicking the **Save** button, located at the bottom of the form.

The next and final step is to publish the blog post, which will make it actually visible in the Content Delivery API. To do that, click on the **Publish** icon, found at the right side in the form header.

Now that we've covered the basics of creating content models and managing content, we can move on to the Vue.js part of this tutorial.

## Creating a new Vue.js app

We can create a [new Vue.js app](https://cli.vuejs.org/) by running this command.
```
npx @vue/cli create <project-name>
```
For this example we'll use `coffeeshop` as the project name, and the `default` preset with it.

![Creating a New Vue.js App](/img/guides/headless-vuejs-tutorial/vue-js-create.png)

> Ideally, you should create your Vue.js project in a folder outside of the Webiny project.

Now that we have a new Vue.js app ready to go, let's see what it takes to make a simple page that renders a list of all interesting facts about coffee that we've just created.

## Fetching Facts

We're going to start off by installing few NPM packages:
- [`vue-apollo`](https://github.com/vuejs/vue-apollo)
- [`graphql`](https://github.com/graphql/graphql-js)
- [`apollo-client`](https://github.com/apollographql/apollo-client)
- [`apollo-link-http`](https://github.com/apollographql/apollo-link)
- [`apollo-cache-inmemory`](https://www.npmjs.com/package/apollo-cache-inmemory)
- [`apollo-link-context`](https://www.npmjs.com/package/apollo-link-context)
- [`graphql-tag`](https://github.com/apollographql/graphql-tag)

These will help us with fetching the actual content from the Content Delivery API.

In your Vue.js project root, run the following command:

```
yarn add vue-apollo graphql apollo-client apollo-link-http apollo-cache-inmemory apollo-link-context graphql-tag
```

Once we have these ready, we can jump to the code. The following snippet shows the code located in the [`apolloClient.js`](https://github.com/webiny/webiny-examples/blob/master/headlesscms-vuejs/src/apolloClient.js) file:

```ts
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from "apollo-cache-inmemory";

// Your Content Delivery API URL.
const CONTENT_DELIVERY_API_URL = "...";

// Your Content Delivery API Access Token.
const CONTENT_DELIVERY_API_ACCESS_TOKEN = "...";

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: CONTENT_DELIVERY_API_URL
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const accessToken = CONTENT_DELIVERY_API_ACCESS_TOKEN;
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: accessToken ? `${accessToken}` : "",
    }
  }
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache
});

export default apolloClient;
```

Now we will add this apollo Client to our Vue app so that we can fetch the content from the Content Delivery API.

Let's head over to [`main.js`](https://github.com/webiny/webiny-examples/blob/master/headlesscms-vuejs/src/main.js) file:

```ts
import Vue from 'vue';
import VueApollo from "vue-apollo";
import Vue from 'vue';
import VueApollo from "vue-apollo";

import "./assets/styles.css";
import App from './App.vue';

// import the `apolloClient` that we just created
import apolloClient from './apolloClient';

Vue.config.productionTip = false;

// add `VueApollo`
Vue.use(VueApollo);

// create a provider with the `apolloClient`
const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

new Vue({
  apolloProvider,
  render: h => h(App),
}).$mount('#app');

```

Finally let's render some mark up 🙂

Head over to [`App.vue`](https://github.com/webiny/webiny-examples/blob/master/headlesscms-vuejs/src/App.vue) file:

```ts
<template>
  <div id="app" class="min-h-screen bg-gray-900 text-gray-100">
  <Nav />
   <div class="max-w-3xl mx-auto px-4">
      <!-- some markup code removed for brevity  -->

      <!-- Article list -->
      <div class="flex mt-16">
        <!-- Show loading message while query is loading -->
        <p v-if="$apollo.queries.listFacts.loading" class="text-green-600">Loading facts ...</p>

       <!-- Show error message if there is an error -->
        <p v-if="$apollo.queries.listFacts.error" class="text-red-600">Oops! Something went wrong!!</p>

        <div class="flex flex-col">
          <!-- Loop over facts returned by query -->
          <div class="mb-16" v-for="fact in listFacts && listFacts.data" v-bind:key="fact.id">
               <h3 class="mb-4 text-lg text-gray-200 uppercase">
               {{ fact.title }}
               </h3>
               <img :src="fact.image" alt="" class="mb-4"/>
               <p class="mb-4 text-lg text-gray-300">
               {{ fact.description }}
               </p>
            </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

import gql from "graphql-tag";
import Nav from "./components/Nav";

export default {
  name: 'App',
  components: {
    Nav
  },
  data() {
    // save `listFacts` returned from GraphQL query
    return {
      listFacts: []
    };
  },
  apollo: {
    // The actual GraphQL query
    listFacts: gql`
      query listFacts {
        listFacts {
          data {
            id
            title
            description
            image
          }
        }
      }
    `
  }
}
</script>

```

## Previewing the page

Let's run `yarn serve` in our Vue.js project directory so we can see our page in action:

![Vue.js Blog](/img/guides/headless-vuejs-tutorial/output.png)

## Conclusion

Congratulations! 🎉

We've successfully created a simple page that displays a list of all created facts, powered by Webiny Headless CMS and Vue.js.

> The same can also be achieved with other popular tools, like [Gatsby](https://www.gatsbyjs.org/). To learn more, click [here](<headless-gatsby-tutorial>).
