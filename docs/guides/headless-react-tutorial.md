---
id: headless-react-tutorial
title: Integrating React and Apollo Client with Headless CMS
sidebar_label: Integrating React and Apollo Client with Headless CMS
---

In this tutorial you will learn how to integrate [React](https://reactjs.org/) and [Apollo Client](https://www.apollographql.com/docs/react/) with our Headless CMS to create an e-library.

> All the code shown in the tutorial can be found [here](https://github.com/webiny/webiny-examples/).

## Prerequisites

#### 1. A Webiny Project

Make sure your [Webiny project](/docs/get-started/quick-start) is set up. This will be needed to create your `Content Models` in order to `Publish` your content.

> When setting up a new project, we have [two project templates](/docs/get-started/quick-start#3-template-specific-setup) that you can choose from. The `full` and `cms` templates both include Headless CMS app by default.

#### 2. Content Delivery API URL

The Headless CMS app exposes data via the Content Delivery API, which is a simple GraphQL API that dynamically updates its schema on content model changes that you make.
Once you've deployed your API stack (using the `yarn webiny deploy api` command), you should be able to find the Content Delivery API URL in the console output:

![Headless CMS API URLs](/img/guides/headless-nextjs-tutorial/headless-cms-api-url.png)

#### 3. Content Delivery API Access Token

In order to access the data via the Content Delivery API, we'll need a valid [Access Token](/docs/webiny-apps/headless-cms/features/access-tokens). These can be created via the Access Tokens form, which you can reach via the main menu:

![Headless CMS API Access Tokens](/img/guides/headless-nextjs-tutorial/access-tokens-menu.png)

We'll be creating a token called `Library access` in order to let users coming to our site access our books we'll be publishing.

![Headless CMS API Library Access Tokens](/img/guides/headless-react-tutorial/library-access-token.png)

## Creating our first Content Model Group

Now that we have those pieces setup, let's create a [Group](/docs/webiny-apps/headless-cms/features/content-modeling-groups) called `Library`. Let's open the **Groups** section of the Headless CMS app.

![The Models View](/img/guides/headless-react-tutorial/content-model-group.png)

Once we add all the information we want in the form, let's click on the **save content model group** button.

![Library Group](/img/guides/headless-react-tutorial/library-group.png)

## Creating a Book Content Model

Now that we have a base group to associate our model with, let's create the Book Content Model. We'll open the **Models** section of the Headless CMS app.

![The Models View](/img/guides/headless-nextjs-tutorial/content-models-menu.png)

Afterwards let's click on the **+** button on the bottom right of the page.
Let's call our Content Model `Book`, and let's put it as part of the `Library` Group we created before. After we are done, let's press the **Create** button.

![Book Content Model](/img/guides/headless-react-tutorial/book-content-model.png)


Next we should click the **Edit** button under the **Models** section.

![Edit Content Model](/img/guides/headless-react-tutorial/book-edit-model.png)

Next we should use the drag&drop in order to create the form we want to include the following fields: `Title`, `ISBN`, `Image`, and `Description` which includes a summary of the book. After you drag&drop you will be able to edit the field to make it look like this:

![Book Edit Fields](/img/guides/headless-react-tutorial/book-edit-fields.png)

After you are done, you can click on the **Preview** button in order to see what the form will look like. Otherwise you can click the **Save** button in the top-right corner to save the Book Model.

![Book Edit Save](/img/guides/headless-react-tutorial/book-edit-save.png)

## Managing Content

Now that we created our Book Content Model, let's go fill it with books for our Library! Let's head here:

![Library Book](/img/guides/headless-react-tutorial/library-book.png)

Afterwards we use the following form to fill out what we need for our Library:

![Book Create](/img/guides/headless-react-tutorial/book-create.png)

Make sure you press the **Save** button for each entry!

The next and final step is to publish the blog post, which will make it actually visible in the Content Delivery API. To do that, click on the **Publish** icon, found at the right side in the form header.

![Publish Book](/img/guides/headless-react-tutorial/publish-book.png)

Now that we've covered the basics of creating content models and managing content, we can move on to the React part of this tutorial.

## Creating a new React app

Let's setup our React application using create react app:

```
npx create-react-app react-project

cd react-project
yarn start
```

> Ideally, you should create your React project in a folder outside of the Webiny project.

> Note: Running `yarn start` will have the React application built and has hot re-loading enabled so we can see our changes while we are coding them.

Next we need to install some of our extra dependencies:

```
yarn add react-router-dom node-sass
```

We are adding `react-router` if you want more than one route in your application, and `node-sass` is for us to be able to use SCSS.

You can run this command, or manually delete all the files in your `src` folder:

```
rm -r src/
```

This will clean your src folder so we can start fresh.

Now let's create a `src/index.js` file with the following code:

```jsx
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import { Main } from './components/containers';

import './stylesheets/styles.scss';

render((
  <Router>
    <Main />
  </Router>),
  document.getElementById('root')
);

```

Next we'll need to create an actual `Main` component to render. First we should organize our components by splitting them between `containers` and `presentation` folders.

Let's create a directory under `src` called `components/containers` and our `Main.js` will be stored there.

```jsx
import React from 'react';
//This will be de-structured from the index.js file in this directory
import { App } from './';
import { Switch, Route } from 'react-router';

const Main = () => {
    return (
        <Switch>
            <Route exact path='/' component={App} />
        </Switch>
    );
};

export default Main;
```

You'll notice that this is referencing an `App` component, which we will define next.
Let's write this in our `components/containers/App.js` file:

```js
import React from 'react';

const App = () => {
  return (
    <div className="library">
      <header className="library-header">
        E-library for fantasy novels
      </header>
      <div>
        Hello World!
      </div>
    </div>
  )
};

export default App;
```

We'll define our `Library` component once we finish the Apollo Client integration of the code.

Next we'll create a `components/containers/index.js` file to make exporting these components much easier:

```js
import App from './App';
import Main from './Main';

export {
    App,
    Main
};
```

After the React portion is set up, we have to configure our stylesheets for SCSS. Let's create a folder called `stylesheets` under `src`. The file should look be at this directory `src/stylesheets/styles.scss` and look like this:

```scss
@import 'partials/colors';
@import 'partials/main';
```

We'll create a folder called `partials`, where we will add our styling. To make things simpler just copy and paste the following into `partials/_colors.scss`:

```scss
$base-color: #222525;
$secondary-color: #7EA3CC;
$tertiary-color: #255C99;
$quart-color: #4E4E4E;
```

> Note: You can always change these 4 colors to another palette that might interest you more. If you want to learn more about SCSS, look [here](https://sass-lang.com/documentation/syntax).

Now you can copy below into the following file  `partials/_main.scss`:

```scss
body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

.library {
    background-color: $base-color;
    min-height: 100vh;
    text-align: center;
}

.library-logo {
    height: 40vmin;
    pointer-events: none;
}

.library-header {
    display: flex;
    flex-direction: column;
    font-size: calc(10px + 2vmin);
    color: white;
    padding-top: 1rem;
    padding-bottom: 1rem;
}

.library-container {
    display: flex;
    flex-direction: column;
    background-color: $tertiary-color;
    justify-items: center;
    align-items: center;
}

.book-container {
    box-shadow: 5px 10px $quart-color;
    display: flex;
    flex-direction: column;
    background-color: $secondary-color;
    border-radius: 5px;
    max-width: 750px;
    justify-content: center;
    align-items: center;
    margin: 1rem 0 1rem 0;
}

.book-title {
    padding-top: 1rem;
    font-weight: bold;
}

.book-image {
    height: 150px;
    width: 100px;
}

.book-description {
    padding-left: 1rem;
    padding-right: 1rem;
}

```

With the initial setup done for React and SCSS, we can start on the Apollo Client side.
First is to install the dependencies we are going to use:

```
yarn add apollo-link-http apollo-link-context apollo-client apollo-cache-inmemory apollo-boost @apollo/react-hooks
```

After that we should add the following code to our `src/index.js` file:

```js
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { setContext } from 'apollo-link-context';
import { ApolloProvider } from '@apollo/react-hooks';

//This REACT_APP_GRAPHQL_URL is defined in a .env file at the root of the project
const link = new HttpLink({
    uri: process.env.REACT_APP_GRAPHQL_URL
});

const authLink = setContext((_, { headers }) => {
  // This REACT_APP_ACCESS_TOKEN is defined in a .env file at the root of the project
  const token = process.env.REACT_APP_ACCESS_TOKEN;
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(link),
  cache: new InMemoryCache(),
  credentials: 'same-origin'
});

render((<ApolloProvider client={client}>
  <Router>
    <Main />
  </Router>
</ApolloProvider>),
  document.getElementById('root')
);
```

There is a lot going on here, so let's explain it step-by-step: We are setting up the configuration required to create our ApolloClient, we use the ```new ApolloClient``` constructor which requires us to give it a `link`, a `cache`, and the `credentials`. For this tutorial we will focus on the `link` variable, for information on this topic, I'd recommend heading [here](https://www.apollographql.com/docs/react/networking/authentication/). For us, our GraphQL endpoint is behind a protected layer where only if you provide the Access Token created earlier, will you be granted access to the Content Models (in our case, Books) we defined.

You probably also noticed that we were defining variables from `process.env`, these will be variables taken from a `.env` file which we will now define:

```
REACT_APP_GRAPHQL_URL="YourApiUrl/cms/read/production"
REACT_APP_ACCESS_TOKEN="YourAccessToken"
```

If you completed the pre-requisites and have these values at the ready, put them in the `.env` file. This is so that our application doesn't have our tokens and keys hardcoded into the project.

Now let's get to defining our GraphQL queries so that we can actually pull the Book information that we made earlier.

Let's create a folder under `src` called `graphql`. There we will create a file called `queries.js` and we'll fill it with this code:

```js
import { gql } from 'apollo-boost';

export const GET_BOOKS = gql`{
    listBooks {
      data {
        title
        isbn
        image
        description
      }
    }
}`;
```

You might be wondering where we created this query from, if you navigate to the same URL as `REACT_APP_GRAPHQL_URL`, you should be able to now query the information you created before, see below:

![List Books](/img/guides/headless-react-tutorial/list-books.png)

> Note: To see the drop-down, type CTRL + Space in between two curly braces to see the list of queries accessible to you.

Now that we have our GraphQL query created, we should create the `Library` component as well as the `Book` component.
Let's head to `src/components/presentation/` and create `Library.js` like this:

```js
import React from 'react';
import { useQuery } from '@apollo/react-hooks';
//This is the GraphQL query we created earlier
import { GET_BOOKS } from '../../graphql/queries';
import { Book } from './';

const Library = () => {
    const { loading, error, data } = useQuery(GET_BOOKS);
    if(loading)
      return <p>Loading...</p>;
    if(error) {
      return <p>Error fetching books</p>;
    }
    return (
      <div className="library-container">
        {
            data.listBooks.data.map((book) => (
              <Book key={book.title} {...book} />
            ))
        }
      </div>
    )
};

export default Library;
```

The Library we are going to create will have many books, so we will render each of them that get returned from our GraphQL api endpoint under the `Book` component.

Now let's create `Book.js` in this folder `src/components/presentation/`:

```js
import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ title, isbn, image, description }) => {
    return (
        <div className="book-container">
            <h3 className="book-title">{title}</h3>
            <img src={image} alt="Not found" className="book-image"/>
            <p>ISBN #: {isbn}</p>
            <p className="book-description">{description}</p>
        </div>
    )
};

Book.propTypes = {
    title: PropTypes.string.isRequired,
    isbn: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default Book;
```

This `Book` component is wrapping each book in it's own div container and displaying the information we want to display on our site.

Now we need to create a `index.js` file in `src/components/presentation/` like this to export our created components:

```js
import Book from './Book';
import Library from './Library';

export {
    Book,
    Library
};
```

Lastly we need to import the `Library` component we created, let's head to the `src/components/containers/App.js` and edit it so it looks like this:

```js
import React from 'react';
import { Library } from '../presentation';

const App = () => {
  return (
    <div className="library">
      <header className="library-header">
        E-library for fantasy novels
      </header>
      <Library />
    </div>
  )
};

export default App;
```

Voila! Now when we look at our react application we should find our site like this:

![List Books](/img/guides/headless-react-tutorial/e-library.png)
> Note: Make sure you are running `yarn start` inside the `react-project` directory so your site is running.

Congrats, we now completed a e-library for our books with React, Apollo Client, and Webiny Headless CMS.