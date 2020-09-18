---
id: build-a-portfolio-website-with-react-webiny-apollo
title: Build a Portfolio Website with React, Webiny, and Apollo
sidebar_label: Build a Portfolio Website with React, Webiny, and Apollo
---

In this tutorial, you will set up a simple portfolio website to showcase your projects and your blogs using pure React, Webiny Headless CMS, and Apollo GraphQL. After setting up your portfolio website, you will be able to focus all of your creativity on the content for blogs and projects.

These are the features of the Portfolio Website:
- 2 Content types: Blogs, Projects
- 6 Created blogs
- 6 Created projects
- Apollo Client to fetch the content models data
- Responsive design using Material UI React Components
- Front-end deployment with Vercel

![Cover](/img/tutorials/build-a-portfolio-webste-with-react-webiny-apollo/cover.png)

## Demo

Here is what we'll build:
![What we'll build](/img/tutorials/build-a-portfolio-webste-with-react-webiny-apollo/blogs.png)

Or, you can [Watch the live demo](https://webiny-starter-react-portfolio.vercel.app/).

## Prerequisites

- A Webiny Project

First of all, make sure you follow the [prerequisites](https://docs.webiny.com/docs/get-started/quick-start/#prerequisites) to create a Webiny project.
   
## Steps

## 1. Back-end
When setting up a new Webiny project, there are currently two project templates you can choose, `full` and `cms` template. Both include the Headless CMS app by default.

### 1.1 Webiny Headless CMS project
To create a Webiny Headless CMS project, run the following command:
```
 npx create-webiny-project backend --template=cms
```
Learn more about the [Webiny project structure](http://docs.webiny.com/docs/deep-dive/project-structure).

### 1.2 Setup database connection
Follow this [guide to set up your database connection](http://docs.webiny.com/docs/get-started/quick-start#2-setup-database-connection).

### 1.3 API Deployment
We need to deploy a `local` API environment for our backend project to use for local development by running this command:
```
yarn webiny deploy api --env=local
```
For more information on the deployment, read through [Webiny documentation for Deployment](http://docs.webiny.com/docs/get-started/quick-start#1-deploy-api).

:::info
The deployment will take around 5-15 minutes depending on your internet connection and the AWS region.
:::

### 1.4 Start the `admin` App

The admin app is the administration system for your project; it contains everything you need to manage your content, users, settings, etc.
Start the admin app by moving to the `apps/admin` folder and running the command below.
```
yarn start
```
Create your admin user by filling the form as shown in the image below.

![Admin user](/img/tutorials/build-a-portfolio-webste-with-react-webiny-apollo/admin-user.png)

When creating a Webiny project with the CMS template, the security application will be part of the Headless CMS project. To learn more about what Webiny offers regarding the ready-made serverless applications, check out the [Webiny Websites](https://www.webiny.com/serverless-apps). 

:::info
Learn more about the [Webiny Headless CMS features](https://www.webiny.com/serverless-app/headless-cms)
:::

After we create our admin user account, we will be redirected to the admin view which contains information regarding Webiny Documentation, Code examples, and our Community links.

To create the content models click on the `New Content Model` or open the menu on the right-left corner.

![Admin view](/img/tutorials/build-a-portfolio-webste-with-react-webiny-apollo/admin-view.png)

### 1.5 Creating the content models for Blogs, Projects, and Categories

Now that we have the backend application set up, we will continue to create the content models for Blogs, and Projects.

Click on the `+` green button to create the `Blogs` Content Model. 
These are the fields we will use for our Blogs:
- `Title` with type `TEXT`
- `Subtitle` with type `TEXT`
- `Cover` with type `FILES`
- `Content` with type `RICH TEXT` 
- `Link` with type `TEXT`
- `CTA` with type `TEXT`

![Blogs content model](/img/tutorials/build-a-portfolio-webste-with-react-webiny-apollo/blogs-content-model.png)

Press the `SAVE` button on the right corner. Go back and create `Projects` content model.

These are the fields we will use for our `Projects`:
- `Title` with type `TEXT`
- `Cover` with type `FILES`
- `Content` with type `LONG TEXT`
- `Link` with type `TEXT`
- `CTA` with type `TEXT`

![Projects content model](/img/tutorials/build-a-portfolio-webste-with-react-webiny-apollo/projects-content-model.png)

### 1.6 Filling the data for the content models

Here you will create your creative content for Blogs, by filling all the input fields that we created in the above step.

![Blogs data](/img/tutorials/build-a-portfolio-webste-with-react-webiny-apollo/blogs-data.png)

You will follow the same process to create content for your project’s content models.

### 1.7 Access Token

Now that we have our data created, we can go ahead and check the `API information` of our `backend` project. We have all of the URLs we need to continue building our project. The one we need for now is the Headless CMS - Content Delivery API `cms/read/production`, where Webiny exposes a GraphQL Playground you can use to easily test and debug your API calls.

![API Information](/img/tutorials/build-a-portfolio-webste-with-react-webiny-apollo/api-information.png)

Open the Content Delivery API which ends with the `/cms/read/production`. Now, let’s write some queries to read our Blog content.
``` 
query getBlogs {
  listBlogs {
    data {
      title
      subtitle
      link
    }
  }
} 
```

![Get blogs query](/img/tutorials/build-a-portfolio-webste-with-react-webiny-apollo/get-blogs-query.png)

To be able to read our data, you need to create an `Access Token` in your backend project. Go ahead at the `Settings` menu and create an access token. Then copy and paste it to the HTTP HEADERS for the **Authorization** in the GraphQL Playground. Check out the image below.

![Access token](/img/tutorials/build-a-portfolio-webste-with-react-webiny-apollo/access-token.png)

:::info
Learn more about the [Webiny Access Tokens](http://docs.webiny.com/docs/webiny-apps/headless-cms/features/access-tokens/).
:::

Now that we are getting our data, it’s time to start building the `Front-end`.

## 2. Front-end

We will create a `create-react-app` front-end application. On top of that, we will use the Material-UI framework. The React component library, based on Google Material Design, allows us a fast and easy usage of stylized web components.

First, let's start by creating a react application from scratch by running this command:

```tsx
npx create-react-app frontend --template typescript
cd frontend
npm run start
```
One of the advantages of using TypeScript is that Type errors will show up in the same console as the building one. You'll have to fix these type errors to continue development or build the project. For advanced configuration, [see here](https://create-react-app.dev/docs/advanced-configuration/).

Now, you will install all the necessary libraries you need to build your Portfolio website. Run the below command to install the packages for Material-UI and Apollo GraphQL.

```
npm i --save 
   @material-ui/core 
   @material-ui/icons 
   material-ui-image 
   @apollo/client
   graphql 
   react-router-dom
   react-dom
```

### 2.1 Front-end structure

You are ready to start building the frontend components for your Portfolio website. The project will have a simple structure when it comes to the components and pages. 

Let’s create the `components` folder and add the first react component to our project, the `Navbar.`

:::note
We created the project using the TypeScript template. When importing modules, there will be an error shown, such as: `Could not find a declaration file for module [...]`. As a quick fix, add the following line to your `tsconfig.json` file: `"noImplicitAny": false.`
:::

### 2.2 Front-end components

#### Navbar Component

For the `Navbar,` we will use the `Drawer,` `List,` `Link,` and other material components to fill the `List` component.  

Let's start with importing what we need:

```tsx
import React from 'react';
import { 
    createStyles,
    makeStyles,
    Theme,
  } from '@material-ui/core/styles';

import { 
    Drawer, 
    List, 
    ListItem, 
    ListItemIcon, 
    ListItemText,
    Divider
} from '@material-ui/core';

import InfoIcon from '@material-ui/icons/Info';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

```

Next, we will add the `makeStyles` (hook generator) and `withStyles` (HOC) that allows you to create multiple styles rules per style sheet. Learn more about [Overriding styles classes](https://material-ui.com/styles/advanced/#overriding-styles-classes-prop) in material-UI.

Let's add the styles:
```tsx
const drawerWidth = 220;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      flexShrink: 0,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
    link: {
      textDecoration: 'none',
      color: theme.palette.text.primary
    },
    webinyLink: {
      textDecoration: 'none',
      color: theme.palette.text.secondary,
      width: '100%'
    }
  })
)
```

Now, we will create the `Navbar` component:

```tsx

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <CssBaseline /> */}
      <Drawer
        className={classes.drawer}
        open={true}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <List style={{ height: '100%' }}>
          {['About', 'Blogs', 'Projects'].map((text, index) => {
            return (
              <Link to={'/' + text.toLowerCase()} className={classes.link} key={index}>
                <ListItem button>
                  <ListItemIcon>
                    <InfoIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              </Link>
            )
          }
          )}
          <a
            href='https://webiny.com/serverless-app/headless-cms'
            className={classes.webinyLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ position: 'absolute', bottom: 0 }}
          >
            <Divider light />
            <ListItem>
              <ListItemIcon>
                <img src={logo} width='25' alt="webiny" />
              </ListItemIcon>
              <ListItemText primary={'Webiny Headless CMS'} />
            </ListItem>
          </a>
        </List>
        <Divider light />
      </Drawer>
    </div>
  )
}
```

Let's see what we did here.
We added the `Navigation Drawer` component that provides access to destinations and app functionality, such as switching accounts. They can either be permanently on-screen or controlled by a navigation menu icon. In our case, we have it permanently on-screen.

Inside the `Navigation Drawer,` we used the `List` component, a continuous group of vertical text or image indexes.

Inside the `List,` we created an array with values of pages we will navigate to. To navigate those values, we will use the `Link` from the `react-router-dom` library.

Next, we are using the `InfoIcon` as an example of an icon in each of the `Navigation` items.

Let's test this component on the react project. To see the difference, we have to make some changes in the `App.tsx.` file.
#### App.tsx file

Let's import the `Navigation` component, and the `Router`.

```tsx
import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/navbar';
function App() {
  return (
    <div style={{ display: 'flex' }}>
      <Router>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;

```

If you didn't start already the server, run the `npm run start or yarn start` to see the changes.

![Drawer first version](/img/tutorials/build-a-portfolio-webste-with-react-webiny-apollo/drawer-1.png)

This is our first version of the `Navigation Drawer.` Now let's add the `icons` component.

#### Icons Component

The purpose of creating an `Icons` component is to have the opportunity to add dynamic items on our `Navigation Drawer.` 

Create `icons.tsx` file in the `components` folder, and add the following snippet:

```tsx
import React, { Component } from 'react';

import InfoIcon from '@material-ui/icons/Info';
import BookIcon from '@material-ui/icons/Book';
import WebIcon from '@material-ui/icons/Web';

interface IconProps {
    icon: string;
}

export default class MyIcons extends Component<IconProps> {

    constructor(props: IconProps) {
        super(props);
        this.state = {
            'About': InfoIcon,
            'Blogs': BookIcon,
            'Projects': WebIcon
        }
    }

    render() {
        const IconName = this.state[this.props.icon || 'About'];
        return (
            <IconName />
        )
    }
}
```
To use this component, we have to make a small change in our `Navigation` component.

```tsx
<ListItemIcon>
   <MyIcons icon={text} />
</ListItemIcon>
```

Let's see how it looks below.

![Icons](/img/tutorials/build-a-portfolio-webste-with-react-webiny-apollo/icons.png)

Well done!

As you can see, now we have three different Navigation Drawer items, but before moving on to creating the pages, there is another essential component we will start, which is the `Card` component. It will be used on both the Blogs page and the Projects page.

#### Card Component

The Material-UI components we will use to create the Card component are the `Card`. `CardActions`, `CardContent`, `CardMedia`, `Button`, and `Typography`.

Create a `card.tsx` file in the `components` folder and add the snippet below.

```tsx

import React from 'react';

import {
  makeStyles,
  createStyles,
  Theme
} from '@material-ui/core/styles';

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 251,
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
  }),
);


export default function StarterCard({ ...pro }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5" >
            {pro.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {pro.subtitle}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <CardActions>
            {/* <Button size="small" color="primary">
              {pro.cta}
            </Button> */}
            <Button size="small" color="primary" href={pro.link} target="_blank">
              Learn more
            </Button>
          </CardActions>
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image={pro.cover}
        title={pro.title}
      />
    </Card>
  );
}
```

The `starterCard` function will be used in both the `Blogs` and `Projects` pages. The Card component already has the data we need from the Content Models. Each of our Content Models has these fields:
- Title
- Subtitle
- CTA
- Link
- Cover

We will get back to this component after we create all of the `About,` `Blogs,` `Projects` pages.

Before jumping on the pages, Material-UI gives you the opportunity to customize Material-UI with your theme. You can change the colors, the typography and much more. If you wish to customize the theme, you need to use the ThemeProvider component in order to inject a theme into your application. 

Below you will find the `theme.tsx` code snippet. Create the `theme.tsx` in the `src` folder and add the code below. 

```tsx
import { red, grey } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';
// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#f381a7',
      main: pink[300],
      dark: '#f57c00',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#bdbdbd',
      main: grey[500],
      dark: '#616161',
      contrastText: '#ffffff',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
    text: {
      primary: '#f381a7'
    }
  },
});

export default theme;
```

### 2.3 Pages

Create the `pages` folder in the `src` folder. The Material-UI components we will use for the pages are:
- Container
- Typography
- Grid
- CircularProgress

The styles components:
- makeStyles
- crateStyles
- Theme

#### Home page

Let's start with the home page. Create a `home.tsx` file in the `pages` folder, and add the code from the snippet below.

```tsx
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
  Container,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  },
  title: {
    margin: '20px'
  },
  secondary: {
    color: theme.palette.secondary.main
  },
  loading: {
    color: theme.palette.secondary.main
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Container maxWidth='md' className={classes.root}>
      <Typography variant="h3" component="h2" className={classes.title}>
        Build a Portfolio Website with React, Webiny, and Apollo
            </Typography>

      <div className={classes.secondary}>
        What is Webiny? Webiny is an open-source framework for building serverless applications.
        It provides you with developer tools, libraries, ready-made apps and processes.
        It's built on top of AWS cloud and uses the latest technologies such as NodeJs, React and GraphQL.
            </div>
    </Container>
  )
}
```

You can use this component as a Welcoming page to your Portfolio Website.

#### About page

Create the `about.tsx` file in the `pages` folder and add the code snippet below.

```tsx
import React from 'react';
import { Theme, createStyles } from '@material-ui/core/styles';

import {
  Container,
  Typography
} from '@material-ui/core';

import {
  makeStyles
} from '@material-ui/core/styles';

import Image from 'material-ui-image';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      margin: '20px'
    },
    about: {
      color: theme.palette.secondary.main,
      margin: '20px'
    },
  }),
);

export default function About() {
  const classes = useStyles();
  return (
    <Container maxWidth='md'>
      <Typography variant="h3" component="h2" className={classes.title}>
        About
          </Typography>

      <Image
        src="https://images.unsplash.com/photo-1554774853-719586f82d77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
        aspectRatio={(16 / 9)}
      />
      <Typography variant="body1" component="p" className={classes.about}>
        Do so written as raising parlors spirits mr elderly. Made late in of high left hold.
        Carried females of up highest calling. Limits marked led silent dining her
        she far. Sir but elegance marriage dwelling likewise position old pleasure men.
        Dissimilar themselves simplicity no of contrasted as. Delay great day hours men.
        Stuff front to do allow to asked he.
        No opinions answered oh felicity is resolved hastened. Produced it friendly
        my if opinions humoured. Enjoy is wrong folly no taken.
        It sufficient instrument insipidity simplicity at interested.
        Law pleasure attended differed mrs fat and formerly. Merely thrown garret her
        law danger him son better excuse. Effect extent narrow in up chatty.
        Small are his chief offer happy had.
          </Typography>
    </Container>
  )
}
```

Check out other [Material-UI components](https://material-ui.com/) to add more views in your pages.

#### Blogs page

For the `Blogs` page, we will use the `Grid` Material-UI component to show the Blogs cards. Create a `blogs.tsx` file and add the below code snippet.

```tsx
import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import StarterCard from '../components/card';
import {
  Grid,
  Container,
  Typography,
  CircularProgress
} from '@material-ui/core'
// import theme from '../theme';

import { useQuery } from '@apollo/react-hooks';

import { GET_BLOGS } from '../apolloClient/queries';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    loading: {
      color: theme.palette.secondary.main,
      display: 'flex',
      margin: '10%'
    },
    title: {
      margin: '20px'
    },
    description: {
      color: theme.palette.secondary.main,
      margin: '20px'
    },
  }),
);

const Blogs = () => {
  const classes = useStyles();
  const { loading, error, data } = useQuery(GET_BLOGS);

  if (loading) {
    return (
      <Container maxWidth='md' className={classes.loading}>
        <CircularProgress />
      </Container>
    )
  }

  if (error) {
    return <p>Error fetching books</p>;
  }

  return (
    <Container maxWidth='md' className={classes.root}>
      <Typography variant="h3" component="h2" className={classes.title}>
        Webiny Blogs
      </Typography>

      <div className={classes.description}>
        What is Webiny? Webiny is an open-source framework for building serverless applications.
        It provides you with developer tools, libraries, ready-made apps and processes.
        It's built on top of AWS cloud and uses the latest technologies such as NodeJs, React and GraphQL.
      </div>
      <Grid
        container
        spacing={4}
        direction="row"
        alignItems="center"

        className={classes.root}
        justify="center"
      >
        {
          data.listBlogs.data.map((blogs, index) => {
            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                key={index}
              >
                <StarterCard
                  {...blogs}
                />
              </Grid>
            )
          })
        }
      </Grid>
    </Container>
  );
}

export default Blogs;
```

A couple of things are happening in the above snippet so let's go through them.

The `Blogs` page will showcase the blogs you will create with the Content Models in the Webiny Headless CMS. We are using the `useQuery` hook for executing queries in Apollo. We will execute the `GET_BLOGS` query that we will create in step `3. Apollo`.

For the view, we are using the `Grid` component that creates a visual consistency between layouts. Material Design's responsive UI is based on a 12-column grid layout. Find out more about [Grid component](https://material-ui.com/components/grid/#grid).

#### Projects component (Challenge)

Create a `projects.tsx` file in the `pages` folder, and as a challenge, go ahead and create the component yourself. This component is almost the same as the `Blogs` component.

:::info
Webiny's Community is a welcoming one for any questions you might have :) Join us here: https://www.webiny.com/slack
:::

Yay 🎉, You achieved to create the pages you need for your Portfolio website. 

We will create another file that will manage the pages for routes, create an `index.tsx` file in the `pages` folder. The file is self-explanatory as you go through it:

```tsx
import React, { Component } from 'react';

import About from './about';
import Projects from './projects';
import Home from './home';
import Blogs from './blogs';

import {
    Container
} from '@material-ui/core';

interface PageProps {
    page: string;
}

export default class MyPages extends Component<PageProps> {

    constructor(props) {
        super(props);
        this.state = {
            '': Home,
            'About': About,
            'Blogs': Blogs,
            'Projects': Projects,
        }
    }

    render() {
        const PageName = this.state[this.props.page || ''];
        return (
            <Container maxWidth='md'>
                <PageName />
            </Container>
        )
    }
}
```

### 2.4 Fetching Content Models - Apollo Client

:::info
[Apollo Client](https://www.apollographql.com/docs/react/) is a comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL. Use it to fetch, cache, and modify application data, all while automatically updating your UI.
:::

Now that we have all the dependencies we need let's initialize an `ApolloClient` instance. In the `src` folder create an `apolloClient` folder, and inside this folder create an `index.tsx` file.

Go through the code snippet below, and follow the comments to understand the connection parts.

```tsx
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client';

import { setContext } from '@apollo/client/link/context';

//This REACT_APP_GRAPHQL_URL is defined in a .env file at the root of the project
const httpLink = createHttpLink({
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
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default client;
```

Now that we have the `Apollo Client` set up. We will write queries to read our content models' data. Go ahead and create a file in the `apolloClient` name it `queries.jsx`.

```tsx
import { gql } from '@apollo/client';

// You will change the queries here based on your Content Models 
export const GET_BLOGS = gql`
  query listBlogs {
    listBlogs {
      data {
        id
        title
        link
        cover
        subtitle
      }
    }
  }
`;

export const GET_PROJECTS = gql`{
    listProjects {
      data {
        title
        subtitle
        link
      }
    }
}`;
```

There is one more thing that we need to set up, so all of these changes can work together. As you may already notice, we didn't connect the pages to the React Router.

Let's go at the `App.tsx` file where we imported the `Navigation` Component in the beginning.

Update your `App.tsx` file by following the changes below:

```tsx
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Nav
import Navbar from './components/navbar';

// Pages
import MyPages from './pages';

function App() {

  return (
    <div style={{ display: 'flex' }}>
      <Router>
        <Navbar />
        <Switch>
          {['', 'About', 'Blogs', 'Projects'].map((text, index) => {
            return (
              <Route exact path={'/' + text} key={index}>
                <MyPages page={text} />
              </Route>
            )
          })}
        </Switch>
      </Router>
    </div>
  )
}

export default App;
```

The new changes are based on different routes we provide in the array in the `Switch` component. Then we call the `MyPages` component that holds all the pages we created.

Let's see what happened in our Portfolio website.

![Admin user](/img/tutorials/build-a-portfolio-webste-with-react-webiny-apollo/result-apollo-client.png)

**Yay** 🎉

To be able to show the blogs and projects, we need to do some small adjustments.

Let's open the `index.tsx` file in the `src` folder. To make the Apollo Client work, we need to connect it to React with the `ApolloProvider`. In `index.js`, let's wrap our React app with an `ApolloProvider`. Beside the Apollo Client, in this file, we will connect our React app with the Material-UI theme that we created earlier.

```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import * as serviceWorker from './serviceWorker';

// ApolloClient
import { ApolloProvider } from "@apollo/client";
import client from './apolloClient/index';


ReactDOM.render(
  (<ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        <App />
      </React.Fragment>
    </ThemeProvider>,
  </ApolloProvider>),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
```

Let's see the changes regarding the theme we provided:

![result-apollo-client](/img/tutorials/build-a-portfolio-webste-with-react-webiny-apollo/result-apollo-client-2.png)

Now the colors have been changed 😊

### 2.6 `.env` file

On the root of your front-end project, create a `.env` file. This file will hold the API and the access token we will use to query our content models. Refresh the information by visiting the `Access Token` section.

```
REACT_APP_GRAPHQL_URL="https://YOUR - Content Delivery API/cms/read/production"
REACT_APP_ACCESS_TOKEN="Your Access Token"
```

Let's test it now 🚀

![result-apollo-client](/img/tutorials/build-a-portfolio-webste-with-react-webiny-apollo/result-apollo-client-3.png)

Yay 🎉, you created a Portfolio Website with React, Webiny, and Apollo.


### 2.7 Front-end Deployment

One more detail on the completion of the Portfolio is having the project online to share with potential employees, recruiters, or friends. 😊

#### Vercel Deployment

Steps:
- Sign up at https://vercel.com
- Install the Vercel CLI
- Run 'vercel' in the project directory

Once you sign up, now we go back to our frontend project. Navigate to your frontend project directory. 

Run the following command:
```
npm install -g vercel
```
This command will install the vercel CLI into your local machine. 

Next, we will sign in into Vercel through the CLI. Run the command:
```
vercel login
```
As soon as you run this command, you will enter your email address, that is associated with the account provider you used to sign in into Vercel. 

After this step, you will receive a confimation email to your email address from Vercel. You will need to confirm your email, so you can continue with other steps.

The confirmation email will look like below.

![result-apollo-client](/img/tutorials/build-a-portfolio-webste-with-react-webiny-apollo/vercel-confirmation.png)

This confirmation will login you into the Vercel.

Go back to your terminal, and see if everything is resolved regarding the login. 

Next, run this command: 
```vercel```

By running the command, you will get different questions, you can leave all the default answers and hit enter. After around 30 seconds, you will get a link which is accessible online, and that is your project 🎉

When making changes to your application, you can run:
```
vercel --prod
```
to re-deploy for the latest changes. 

## Conclusion

🎉🎉 Congratulations! You've built a Portfolio website with the coolest tech stack! 

You learned Webiny Headless CMS; now you are one command away from creating different Webiny Projects. You set up your React Portfolio website using Material-UI, one of the best UI frameworks out there. You connected the Apollo Client with your React application to query your content models data from the Headless CMS.

Are you interested to build more serverless applications? Webiny provides you with tools on building [websites](https://www.webiny.com/use-case/serverless-websites), [apps](https://www.webiny.com/serverless-apps) and [APIs](https://www.webiny.com/use-case/serverless-graphql-api) that scale to millions of users and run on top of [serverless](https://www.webiny.com/roadmap) infrastructure like AWS Lambda.

:::note
Webiny has a very welcoming Community! If you have any questions, join us [here](https://www.webiny.com/slack)
:::
