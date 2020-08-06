---
id: headless-react-native-tutorial
title: Creating a React Native app with Headless CMS
sidebar_label: Creating a React Native app with Headless CMS
---

In this short tutorial, we will learn how to use the popular [React Native](https://reactnative.dev/) (a framework for building native apps using React) with the [Webiny Headless CMS](/docs/webiny-apps/headless-cms/features/content-modeling).

We'll be creating an React Native app which will list channels and their announcement created and delivered by Headless CMS. Here is what we will get in the end:

![React Native app demo](/img/guides/headless-react-native-tutorial/react-native-app-demo.gif)

> All of the code shown in this tutorial is also hosted in our [GitHub](https://github.com/webiny/webiny-examples/blob/master/headlesscms-react-native) repository.

## Prerequisites

##### 1. A Webiny Project

First of all, make sure you have a working [Webiny project](/docs/get-started/quick-start) set up.

> When setting up a new project, currently, there are [two project templates](/docs/get-started/quick-start#3-template-specific-setup) you can choose from: `full` and `cms`. Both include the Headless CMS app by default.

##### 2. Content Delivery API URL

The Headless CMS app exposes data via the Content Delivery API, which is a simple GraphQL API that dynamically updates its schema on content model changes that you make.
Once you have deployed your API stack (using the `yarn webiny deploy api` command), you should be able to find the Content Delivery API URL in the console output:

![Headless CMS API URLs](/img/guides/headless-nextjs-tutorial/headless-cms-api-url.png)

##### 3. Content Delivery API Access Token

In order to access the data via the Content Delivery API, we'll need a valid [Access Token](/docs/webiny-apps/headless-cms/features/access-tokens). These can be created via the Access Tokens form, which you can reach via the main menu:

![Headless CMS API Access Tokens](/img/guides/headless-nextjs-tutorial/access-tokens-menu.png)

Create a new token and make sure to copy the actual token string. We'll need it soon.

![Headless CMS API Access Tokens](/img/guides/headless-nextjs-tutorial/access-tokens-form.png)

## Creating our first content model

Now that we have all of the prerequisites out of the way, it's time to create our first [content model](/docs/webiny-apps/headless-cms/features/content-modeling). Let's open the **Models** section of the Headless CMS app.

![The Models View](/img/guides/headless-nextjs-tutorial/content-models-menu.png)

Let's create a new content model named **Announcement**. Click on the "plus" icon in the lower right corner of the screen and in the dialog that's about to be shown, enter the following:

![New Content Model Dialog](/img/guides/headless-react-native-tutorial/announcement-content-model.png)

For the content model group, we'll use the `Ungrouped`, which is the default group that comes out of the box with every Headless CMS app installation.

> Content model groups give you a way to organize the content models inside the main menu, allowing you to build logical sections for your content editors. You can click [here](/docs/webiny-apps/headless-cms/features/content-modeling-groups) to learn more.

Once we have submitted the form in the dialog, we should be redirected to the [Content Model Editor](/docs/webiny-apps/headless-cms/features/content-modeling). Let's add three fields: `Title` as a `Text`, `Description` as a `Long Text` and `Banner` as `Files` field. They will match every announcement's title, description and banner (content), respectively.

<!---
Optionally, it is possible make both of the fields **required** in the `Validators` tab.
-->

![Announcement Model](/img/guides/headless-react-native-tutorial/announcement-content-model-editor.png)

Save the changes by clicking on the **Save** button in the top right corner of the screen.

We'll also create one another content model named **Channel** which we'll use to group `announcements`.

Go back to content model view by pressing back button from the content model editor.
Again, click on the "plus" icon in the lower right corner of the screen and enter the details in the dialog as follow:

![New Content Model Dialog](/img/guides/headless-react-native-tutorial/channel-content-model.png)

Once again upon form submission we'll be redirected to content model editor.
Let's add two fields: `Name` as a `Text` and `Announcements` as `Reference` field with multiple values. They will match every channel's name and announcements list (content), respectively.

![Channel Model](/img/guides/headless-react-native-tutorial/channel-content-model-editor.png)

:::note
Make sure you toggle on the `use as list of references` option for `Reference` Field. <br />
This way we can easily link multiple `announcements` to a `channel`
:::

![Channel Model Reference Field](/img/guides/headless-react-native-tutorial/channel-content-model-editor-field.png)

Now that we have both of our content models ready. It's time to create the actual content. Proceed by clicking on the **View content** button, located on the left side of the **Save** button.

You can also reach the content area by clicking on the newly added **Announcement** and **Channel** items in the main menu:

![Announcement Model - Main Menu](/img/guides/headless-react-native-tutorial/menu-content-model-item.png)

## Managing Content

As mentioned, navigate to **Headless CMS > Ungrouped > Announcement** and create couple of announcements. Feel free to unleash your creativity. 😉

![Announcement Form](/img/guides/headless-react-native-tutorial/announcement-content-entry.png)

Once you feel happy with the announcement, you can save the changes by clicking the **Save & Publish** button, located at the right side in the form header.

This will save and publish the announcement, which will make it actually visible in the Content Delivery API.

Now let's repeat the similar steps that is, navigate to **Headless CMS > Ungrouped > Channel** and create few channels and link the announcements that we just created.

![Channel Form](/img/guides/headless-react-native-tutorial/channel-content-entry.png)

:::note
Make sure you publish all the content entries, otherwise they will not be visible in the Content Delivery API.
:::

Now that we have covered the basics of creating content models and managing content, we can move on to the React Native part of this tutorial.

## Creating a new React Native app

We can create a [new React Native app](https://reactnative.dev/docs/environment-setup) by running the `npx react-native init MyTestApp` command. We will use `disclose` as the project name.

![Creating a New React Native App](/img/guides/headless-nextjs-tutorial/npx-next.png)

> Ideally, you should create your React Native project in a folder outside of the Webiny project.

Now that we have a new React Native app ready to go, let's see what it takes to make a simple app that will have just two screens.

A **Home screen** that will show listing of all channels and an **Announcements screen** which will renders the list of all announcements in a channel that we have just created.

## Installing packages needed for the app

We're going to start off by installing few NPM packages:

- [react-native-navigation](https://reactnavigation.org/docs/getting-started), which we'll be using to navigate between screens.

```
  yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
```

- [react-native-paper](https://callstack.github.io/react-native-paper/getting-started.html), which is a UI component Library.

```
  yarn add react-native-paper
```

- [@apollo/client](https://www.apollographql.com/docs/react/get-started/), we'll be using Apollo Client to connect to GraphQL API

```
  yarn add @apollo/client
```

## React Native app structure

The folder structure of out React Native app looks something like this:

```
android
ios
src
├── App.js
├── components
│   ├── Announcement.js
│   ├── Channel.js
│   └── Header.js
├── graphql
│   └── client.js
├── navigation
│   └── index.js
├── screens
│   ├── Announcement.js
│   └── Home.js
└── utils
    └── constants.js
```

- `src/components` contains three React components namely **Header**, **Announcement** and **Channel**
- `src/graphql` contains one file namely **client** which is used to create an instance of Apollo Client.
- `src/navigation` contains our **MainStack**.
- `src/screens` contains both of our screens namely **Announcement** and **Home**.
- `src/utils` contains common constants like colors.

___

Now that we have covered the packages used and the folder structure of our React Native app, let's jump to the code. <br/>

We'll first create the structure of the app i.e boilerplate code and then move on to more interesting part that is fetching the announcement from our Content Delivery GraphQL API and rendering them in the UI.

First let's see what's inside the `src/App.js` because it contains the whole app.

The following snippet shows the code located in the [`src/App.js`](https://github.com/webiny/webiny-examples/blob/master/headlesscms-react-native/src/App.js) file:

```js
import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { ApolloProvider } from "@apollo/client";
// Our Apollo GraphQL client, we'll get to in later
import client from "./graphql/client";
// Constant for theme color
import { theme } from "./utils/constants";
// Our navigation stack containing two screens, we'll get to in later
import MainStack from "./navigation/index";

function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <SafeAreaView style={{ flex: 0, backgroundColor: theme.primary }} />
        <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
          <StatusBar barStyle="light-content" backgroundColor={theme.primary} />
          <MainStack />
        </SafeAreaView>
      </NavigationContainer>
    </ApolloProvider>
  );
}

export default App;
```

Now that we've see what `App` is made of, let's dig into the actual GraphQL client file.

The following snippet shows the code located in the [`src/graphql/client.js`](https://github.com/webiny/webiny-examples/blob/master/headlesscms-react-native/src/graphql/client.js) file:

```js
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

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
      authorization: accessToken ? `${accessToken}` : ""
    }
  };
});

// Cache implementation
const cache = new InMemoryCache();

// Create the client as outlined in the setup guide
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache
});

export default client;
```

Now let's see what is the `MainStack` that we saw earlier being used in `App.js`.
The following snippet shows the code located in the [`src/navigation/index.js`](https://github.com/webiny/webiny-examples/blob/master/headlesscms-react-native/src/navigation/index.js) file:

```js
import React from "react";
import { createStackNavigator, TransitionSpecs } from "@react-navigation/stack";
// Import our "screen" components, we'll get to it later
import HomeScreen from "../screens/Home";
import AnnouncementScreen from "../screens/Announcement";
// Create an instance of `Stack` navigator
const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        animationEnabled: true
      }}
      options={{
        transitionSpec: {
          open: TransitionSpecs.FadeInFromBottomAndroidSpec,
          close: TransitionSpecs.FadeOutToBottomAndroidSpec
        }
      }}
      headerMode="none"
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Announcement" component={AnnouncementScreen} />
    </Stack.Navigator>
  );
}

export default MainStack;
```

Now let's see what is inside the two screens. The following snippets shows the code located in the [`src/screens/Home.js`](https://github.com/webiny/webiny-examples/blob/master/headlesscms-react-native/src/screens/Home.js) and [`src/screens/Announcement.js`](https://github.com/webiny/webiny-examples/blob/master/headlesscms-react-native/src/screens/Announcement.js) files respectively:

```js
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {theme} from '../utils/constants';
// Import our React components
import Header from '../components/Header';
import Channel from '../components/Channel';
// Some code has been removed for simplicity
const styles = StyleSheet.create({...});

function CreateAnnouncement({route, navigation}) {
  return (
    <View style={styles.mainContainer}>
      <Header title={route.name} canGoBack={false} />
      <View style={styles.container}>
        <Channel
          // Navigate to the "Announcement" screen
          handleNavigate={id =>
            navigation.navigate('Announcement', {channelId: id})
          }
        />
      </View>
    </View>
  );
}

export default CreateAnnouncement;
```

```js
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {theme} from '../utils/constants';
// Import our React components
import Header from '../components/Header';
import Announcement from '../components/Announcement';

const styles = StyleSheet.create({...}); // remaining code removed for brevity

function CreateAnnouncement({route, navigation}) {
  return (
    <View style={styles.mainContainer}>
      <Header title={route.name} canGoBack={true} />
      <View style={styles.container}>
        <Announcement channelId={route.params.channelId} />
      </View>
    </View>
  );
}

export default CreateAnnouncement;
```

## Fetching the actual content

Now, finally we're going to start fetching the actual content from the Content Delivery API.

The following snippet shows the code located in the [`src/components/Channel.js`](https://github.com/webiny/webiny-examples/blob/master/headlesscms-react-native/src/components/Channel.js) file:

```js
import React from 'react';
// remaining imports removed for brevity
...
import {gql, useQuery} from '@apollo/client';

// A simple GQL query that fetches a list of channels.
const LIST_CHANNELS = gql`
  query {
    listChannels {
      data {
        id
        name
        announcements {
          id
          title
          description
          banner
          createdOn
          updatedOn
        }
        createdOn
        updatedOn
      }
    }
  }
`;

export default ({handleNavigate}) => {
  const {loading, error, data} = useQuery(LIST_CHANNELS);

  if (loading) {
    return (
      <ActivityIndicator
        size="large"
        animating={true}
        color={theme.secondary}
      />
    );
  }

  if (error) {
    return <Paragraph>Error! {error.message} </Paragraph>;
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Headline>All Channels</Headline>
      <Caption>Total: {data.listChannels.data.length}</Caption>
      // Iterate and render data
      {data.listChannels.data.map(channel => (
        <Card key={channel.id} style={styles.channelListWrapper}>
          <List.Item
            onPress={() => handleNavigate(channel.id)}
            title={channel.name}
            description={`last updated ${new Date(
              channel.updatedOn,
            ).toDateString()}`}
            right={props => (
              <Badge {...props} size={24}>
                {channel.announcements.length}
              </Badge>
            )}
          />
        </Card>
      ))}
    </ScrollView>
  );
};
// remaining code removed for brevity
```

We do a similar thing for fetching the announcements for a particular channel.

The following snippet shows the code located in the [`src/components/Announcement.js`](https://github.com/webiny/webiny-examples/blob/master/headlesscms-react-native/src/components/Announcement.js) file:

```js

import React, {useEffect} from 'react';
// remaining imports removed for brevity
...
import {gql, useLazyQuery} from '@apollo/client';

// A simple GQL query that fetches a channel by ID.
const GET_CHANNELS = gql`
  query getChannel($where: ChannelGetWhereInput!) {
    getChannel(where: $where) {
      data {
        id
        name
        announcements {
          id
          title
          description
          banner
          createdOn
        }
      }
    }
  }
`;

export default ({channelId}) => {
  const [loadChannel, {loading, error, data}] = useLazyQuery(GET_CHANNELS);

  useEffect(() => {
    loadChannel({variables: {where: {id: channelId}}});
  }, [channelId, loadChannel]);

  if (!data || loading) {
    return (
      <ActivityIndicator
        size="large"
        animating={true}
        color={theme.secondary}
      />
    );
  }

  if (error) {
    return <Paragraph>Error! {error.message} </Paragraph>;
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Headline># {data.getChannel.data.name}</Headline>
      <Caption>Total: {data.getChannel.data.announcements.length}</Caption>
      // Iterate and render announcement list
      {data.getChannel.data.announcements.map(announcement => (
        <Card key={announcement.id} style={styles.announcement}>
          <Card.Cover source={{uri: announcement.banner}} />
          <Card.Content>
            <Title>{announcement.title}</Title>
            <Caption>{new Date(announcement.createdOn).toDateString()}</Caption>
            <Paragraph>{announcement.description}</Paragraph>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
};
// remaining code removed for brevity
```

## Previewing the app

Let's run our app using `yarn start` and `yarn run android` in our React Native project directory so we can see our app in action:

![React Native app demo](/img/guides/headless-react-native-tutorial/react-native-app-demo.gif)
:::note
  Make sure the emulator is running or the physical device is connected.
  To learn more about how to run the app on device visit [docs](https://reactnative.dev/docs/running-on-device).
:::

## Conclusion

Congratulations! 🎉

We have have successfully created a simple app that displays a list of all created channels and their announcements, all powered by Webiny Headless CMS and React Native.

> The same can also be achieved with other popular tools, like [React](https://www.reactjs.org/). To learn more, click [here](/docs/guides/headless-react-tutorial).
