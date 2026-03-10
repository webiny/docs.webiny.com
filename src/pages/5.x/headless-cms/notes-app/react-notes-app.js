/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import notesReactApp from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/notes-app/assets/notes-app/notes-react-app.mp4";
import signUpSignInForm from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/notes-app/assets/notes-app/sign-up-sign-in-form.mp4";
import { ExternalLink } from "@/components/ExternalLink";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Building a Notes App in React with AWS Amplify UI",
  "description": "We will build a React Notes App where users can sign up to create, read, and delete their own notes.",
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
  "title": "Building a Notes App in React With AWS Amplify UI",
  "slug": "building-a-notes-app-in-react-with-aws-amplify-ui",
  "children": [{
    "title": "Demo Application Preview",
    "slug": "demo-application-preview",
    "children": []
  }, {
    "title": "Setup and Configuration",
    "slug": "setup-and-configuration",
    "children": []
  }, {
    "title": "Styling",
    "slug": "styling",
    "children": []
  }, {
    "title": "Authentication - Sign Up and Sign in Setup",
    "slug": "authentication-sign-up-and-sign-in-setup",
    "children": []
  }, {
    "title": "GraphQL Setup: List Notes Query and Create & Delete Notes Mutations",
    "slug": "graph-ql-setup-list-notes-query-and-create-and-delete-notes-mutations",
    "children": []
  }, {
    "title": "Create Notes UI and Integrate GraphQL Queries & Mutations",
    "slug": "create-notes-ui-and-integrate-graph-ql-queries-and-mutations",
    "children": []
  }, {
    "title": "Testing the Application",
    "slug": "testing-the-application",
    "children": []
  }]
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
const Video = makeShortcode("Video");
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






<Alert type="info" title="Can I Use This?" mdxType="Alert">
<p>{`This feature has been available since Webiny `}<strong parentName="p">{`v5.40.0`}</strong>{` and is available in Business & Enterprise tier.`}</p>
</Alert>
<Alert type="success" title="What you will learn" mdxType="Alert">
<ul>
<li parentName="ul">{`how to use Amplify UI in a React app to build a sign-up and login form`}</li>
<li parentName="ul">{`how to build a notes React application where users can create, read, and delete notes after signing up`}</li>
</ul>
</Alert>
<_Heading level={2} id={"building-a-notes-app-in-react-with-aws-amplify-ui"} nextElement={{
      "type": "paragraph"
    }}>Building a Notes App in React With AWS Amplify UI</_Heading>
{`Great, we’re all set on the `}
<_Link href="/docs/5.x/headless-cms/notes-app/webiny-infrastructure-setup">
{`Webiny side`}
</_Link>
{`. Now, let’s move on to building the Notes App in React using the `}
<ExternalLink href={"https://ui.docs.amplify.aws/react/connected-components/authenticator"} mdxType="ExternalLink">
{`AWS Amplify UI Authenticator`}
</ExternalLink>
{`.`}
<_Heading level={3} id={"demo-application-preview"} nextElement={{
      "type": "paragraph"
    }}>Demo Application Preview</_Heading>
<p>{`Here’s a preview of the React application we’ll be building.`}</p>
<Video src={notesReactApp} controls={true} mdxType="Video" />
<Alert type="info" mdxType="Alert">
<p>{`The code covered in this tutorial is also available in our `}<a parentName="p" {...{
          "href": "https://github.com/webiny/webiny-examples/tree/master/headless-cms/notes-app/5.40.0/my-notes-app"
        }}>{`GitHub examples repository`}</a>{`.`}</p>
</Alert>
<_Heading level={3} id={"setup-and-configuration"} nextElement={{
      "type": "list",
      "ordered": true,
      "start": 1,
      "spread": true
    }}>Setup and Configuration</_Heading>
<ol>
<li parentName="ol">
<p parentName="li"><strong parentName="p">{`Create a new React app`}</strong>{`: If you haven’t already, start by creating a new React app by running `}<inlineCode parentName="p">{`npx create-react-app my-notes-app`}</inlineCode>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li"><strong parentName="p">{`Install dependencies`}</strong>{`: Navigate to your project directory with `}<inlineCode parentName="p">{`cd my-notes-app`}</inlineCode>{` command\` and install AWS Amplify and Apollo client libraries.`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`npm install @aws-amplify/ui-react aws-amplify @apollo/client`}
</Editor>
</li>
<li parentName="ol">
<p parentName="li"><strong parentName="p">{`Amplify Configuration`}</strong>{`: Configure Amplify with your AWS account details. Create an `}<inlineCode parentName="p">{`aws-config.js`}</inlineCode>{` file in your `}<inlineCode parentName="p">{`src`}</inlineCode>{` directory with the following configuration, replacing the placeholders with your actual AWS settings.`}</p>
</li>
</ol>
<Alert type="info" mdxType="Alert">
<p>{`You can find these config values from `}<_Link href="/docs/5.x/headless-cms/notes-app/webiny-infrastructure-setup#deploy-the-core-and-api-applications">{`this step`}</_Link>{`.`}</p>
<p>{`If you lost these values, don’t worry. You can also retrieve them from the `}<inlineCode parentName="p">{`your-webiny-project-root/.pulumi/apps/core/.pulumi/stacks/core/dev.json`}</inlineCode>{` file within your Webiny project.`}</p>
<p>{`Since we’ve deployed the `}<inlineCode parentName="p">{`dev`}</inlineCode>{` environment for the demo, we’re seeing the `}<inlineCode parentName="p">{`dev.json`}</inlineCode>{` file. If you’ve deployed your project in a different environment, you’ll find a file named after your environment, such as `}<inlineCode parentName="p">{`your-env-name.json`}</inlineCode>{` stack file.`}</p>
<p>{`Please note these config values will have a different name in your stack file (e.g. in `}<inlineCode parentName="p">{`dev.json`}</inlineCode>{` file) in Webiny project.`}</p>
<ul>
<li parentName="ul"><inlineCode parentName="li">{`aws_cognito_region`}</inlineCode>{` is `}<inlineCode parentName="li">{`notesAppUserPoolRegion`}</inlineCode></li>
<li parentName="ul"><inlineCode parentName="li">{`aws_user_pools_id`}</inlineCode>{` is `}<inlineCode parentName="li">{`notesAppUserPoolId`}</inlineCode></li>
<li parentName="ul"><inlineCode parentName="li">{`aws_user_pools_web_client_id`}</inlineCode>{` is `}<inlineCode parentName="li">{`notesAppUserPoolClient`}</inlineCode>{` `}</li>
<li parentName="ul"><inlineCode parentName="li">{`aws_project_region`}</inlineCode>{` is `}<inlineCode parentName="li">{`region`}</inlineCode></li>
</ul>
</Alert>
<Editor title="aws-config.js" lang="javascript" mdxType="Editor">
{`const config = {
    "aws_project_region": "us-east-1",
    "aws_cognito_region": "us-east-1",
    "aws_user_pools_id": "us-east-1_XXXXXXX",
    "aws_user_pools_web_client_id": "XXXXXXXXXXXXXXXXXXXXX",
};

export default config;`}
</Editor>
<ol {...{
      "start": 4
    }}>
<li parentName="ol"><strong parentName="li">{`Initialize Amplify`}</strong>{`: In your `}<inlineCode parentName="li">{`index.js`}</inlineCode>{`, import and configure Amplify.`}</li>
</ol>
<Editor title="index.js" lang="diff-javascript" mdxType="Editor">
{`import App from './App';

+ import { Amplify } from 'aws-amplify';
+ import config from './aws-config';
+ Amplify.configure(config);

const root = ReactDOM.createRoot(document.getElementById('root'));`}
</Editor>
<_Heading level={3} id={"styling"} nextElement={{
      "type": "paragraph"
    }}>Styling</_Heading>
<p>{`Utilize the provided `}<inlineCode parentName="p">{`App.css`}</inlineCode>{` file for styling your application. It includes styles for headers, notes listings, and animations. Update your `}<inlineCode parentName="p">{`App.css`}</inlineCode>{` file with the following content.`}</p>
<Editor title="App.css" lang="css" mdxType="Editor">
{`
.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

h2 {
  text-align: center;
}

[data-amplify-container] {
  margin-top: 70px;
}

/* App.css */

.header {
  background-color: #293845;
  color: #fff;
  padding: 20px;
  text-align: center;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between; /* Aligns items to each end of the flex container */
  align-items: center; /* Aligns items vertically */
}

.header h1 {
  margin: 0;
  font-size: 24px;
  flex-grow: 1; /* Allows the heading to expand and push the button to the right */
  color: #ffffff;
}

.header button {
  background-color: transparent;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 16px;
}

.header button:hover {
  text-decoration: underline;
}`}
</Editor>
<_Heading level={3} id={"authentication-sign-up-and-sign-in-setup"} nextElement={{
      "type": "list",
      "ordered": true,
      "start": 1,
      "spread": true
    }}>Authentication - Sign Up and Sign in Setup</_Heading>
<ol>
<li parentName="ol">
<p parentName="li"><strong parentName="p">{`Set Up Authentication`}</strong>{`:`}</p>
<ul parentName="li">
<li parentName="ul">{`We will use the `}<inlineCode parentName="li">{`Authenticator`}</inlineCode>{` component from `}<inlineCode parentName="li">{`@aws-amplify/ui-react`}</inlineCode>{` to manage the sign-in and sign-up processes.`}</li>
<li parentName="ul">{`We will also customize the authentication forms by defining `}<inlineCode parentName="li">{`formFields`}</inlineCode>{` and `}<inlineCode parentName="li">{`signUpAttributes`}</inlineCode>{`.`}</li>
</ul>
</li>
<li parentName="ol">
<p parentName="li"><strong parentName="p">{`Sign Up and Sign In`}</strong>{`:`}</p>
<ul parentName="li">
<li parentName="ul">{`By integrating the `}<inlineCode parentName="li">{`Authenticator`}</inlineCode>{` component, users can sign up using their email, first name, and last name. AWS Amplify will manage the entire authentication workflow, including email verification.`}</li>
</ul>
</li>
</ol>
<p>{`Now, make the following changes to the `}<inlineCode parentName="p">{`App.js`}</inlineCode>{` file.`}</p>
<Editor title="App.js" lang="js" mdxType="Editor">
{`import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import {
  Button,
  Heading,
  Authenticator,
} from "@aws-amplify/ui-react";
import { signUp } from "@aws-amplify/auth";

const App = ({  }) => {

  const formFields = {
    signUp: {
      given_name: {
        placeholder: 'Enter your first name',
        isRequired: true,
        label: 'First Name'
      },
      family_name: {
        placeholder: 'Enter your last name',
        isRequired: true,
        label: 'Last Name'
      }
    },
  }
  const signUpAttributes = ["email", "given_name", "family_name"];

  return (
    <Authenticator
      formFields={formFields}
      signUpAttributes={signUpAttributes}
      /* Passing the addition wby_notes_app_group attribute to the signUp method
       * We use this attribute to assign the user to the notes-app-users group
       * The notes-app-users group has the necessary permissions to access the notes content in Webiny side
       */
      services={{
        async handleSignUp(formData) {
          const { options, username, password } = formData;
          options.userAttributes["custom:wby_notes_app_group"] = "notes-app-users";
          const res = await signUp({
            username,
            password,
            options,
          });
          return res;
        }
      }}
    >
      {({ signOut, user }) => (
        <main>
          <div className="header">
            <Heading level={1}>My Notes App! Welcome, {user.username}</Heading>
            <Button onClick={signOut} variation="outline">
              Sign out
            </Button>
          </div>
        </main>
      )}
    </Authenticator>
  );
};

export default App;`}
</Editor>
<p>{`The sign-up and login forms are now ready. To test them, start your React app by running the `}<inlineCode parentName="p">{`npm start`}</inlineCode>{` command.`}</p>
<Video src={signUpSignInForm} controls={true} mdxType="Video" />
<_Heading level={3} id={"graph-ql-setup-list-notes-query-and-create-and-delete-notes-mutations"} nextElement={{
      "type": "paragraph"
    }}>GraphQL Setup: List Notes Query and Create &amp; Delete Notes Mutations</_Heading>
<p>{`We’ll be implementing the following Notes functionality:`}</p>
<ol>
<li parentName="ol">{`Add Notes`}</li>
<li parentName="ol">{`Fetch Notes`}</li>
<li parentName="ol">{`Delete Notes`}</li>
</ol>
<p>{`Since we’ll be interacting with the Webiny CMS GraphQL API, we’ve already installed the Apollo Client package during the React project setup.`}</p>
<p>{`To get started, let’s create the GraphQL client, queries, and mutations for handling Notes operations.`}</p>
<p>{`First, create a `}<inlineCode parentName="p">{`graphql`}</inlineCode>{` directory in the `}<inlineCode parentName="p">{`src`}</inlineCode>{` folder, and then add a `}<inlineCode parentName="p">{`client.js`}</inlineCode>{` file inside it.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`  The `}<inlineCode parentName="p">{`uri`}</inlineCode>{` mentioned below is the Manage API URL for the Headless CMS. For more details on how to obtain the Manage API URL, refer to `}<_Link href="/docs/5.x/headless-cms/basics/graphql-api#where-to-find-the-url-of-the-graph-ql-api">{`this guide`}</_Link>{`.`}</p>
</Alert>
<Editor title="src/graphql/client.js" lang="js" mdxType="Editor">
{`import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { fetchAuthSession } from 'aws-amplify/auth';

// Create an HTTP link
const httpLink = createHttpLink({
  // Headless CMS GraphQL Manage API End Point
  uri: 'https://XXXXXXXXX.cloudfront.net/cms/manage/en-US'
});

// Set up authentication context for the client
const authLink = setContext(async (_, { headers }) => {
  // Fetch the authentication session
  const { idToken } = (await fetchAuthSession()).tokens ?? {};

  // Return the headers with authentication token and additional headers
  return {
    headers: {
      ...headers,
      Authorization: idToken ? \`Bearer \${idToken}\` : '',
      'x-tenant': 'root'
    },
  };
});

// Create the Apollo Client instance
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default client;
`}
</Editor>
<p>{`Next, let’s create a `}<inlineCode parentName="p">{`listNotes`}</inlineCode>{` query to fetch all the notes.`}</p>
<p>{`To do this, add a `}<inlineCode parentName="p">{`queries.js`}</inlineCode>{` file in the `}<inlineCode parentName="p">{`graphql`}</inlineCode>{` directory.`}</p>
<Editor title="graphql/queries.js" lang="js" mdxType="Editor">
{`import { gql } from '@apollo/client';

export const listNotes = gql\`
  query ListNotes {
    listNotes {
      data {
        id
        title
        description
      }
    }
  }
\`;`}
</Editor>
<p>{`Now, let’s add two mutations: one for creating notes and another for deleting them.`}</p>
<p>{`Create a `}<inlineCode parentName="p">{`mutations.js`}</inlineCode>{` file in the `}<inlineCode parentName="p">{`graphql`}</inlineCode>{` directory to define these mutations.`}</p>
<Editor title="graphql/mutations.js" lang="js" mdxType="Editor">
{`import { gql } from '@apollo/client';

export const createNote = gql\`
  mutation CreateNote($data: NoteInput!) {
    createNote(data: $data) {
      data {
        id
        title
        description
      }
    }
  }
\`;

export const deleteNote = gql\`
  mutation DeleteNote(
    $revision: ID!, $options: CmsDeleteEntryOptions
  ) {
    deleteNote(revision: $revision, options: $options) {
      data
    }
  }
\`;`}
</Editor>
<_Heading level={3} id={"create-notes-ui-and-integrate-graph-ql-queries-and-mutations"} nextElement={{
      "type": "paragraph"
    }}>Create Notes UI and Integrate GraphQL Queries &amp; Mutations</_Heading>
<p>{`Next, we’ll update the `}<inlineCode parentName="p">{`App.js`}</inlineCode>{` file to build the interface for creating, listing, and deleting notes. We’ll also integrate the GraphQL queries and mutations we created earlier.`}</p>
<p>{`Replace the content of your `}<inlineCode parentName="p">{`App.js`}</inlineCode>{` file with the following code snippet.`}</p>
<Editor title="App.js" lang="js" mdxType="Editor">
{`import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import {
  Button,
  Flex,
  Heading,
  Text,
  TextField,
  View,
  Authenticator,
} from "@aws-amplify/ui-react";
import { signUp } from "aws-amplify/auth";

import client from "./graphql/client";

import { listNotes } from "./graphql/queries";
import {
  createNote as createNoteMutation,
  deleteNote as deleteNoteMutation
} from "./graphql/mutations";

const App = ({  }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    try {
      console.log("Fetching notes...");
      const { data } = await client.query({
        query: listNotes,
        fetchPolicy: "network-only"
      });
      const notesFromAPI = data.listNotes.data;
      console.log("Fetched notes:", notesFromAPI);
      setNotes(notesFromAPI);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  }

  async function createNote(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const data = {
      data: {
        title: form.get("title"),
        description: form.get("description"),
      },
    };
    try {
      await client.mutate({
        mutation: createNoteMutation,
        variables: data
      });
      await fetchNotes();
      event.target.reset();
    } catch (error) {
      console.error("Error creating note:", error);
    }
  }

  async function deleteNote({ id }) {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    await client.mutate({
      mutation: deleteNoteMutation,
      variables: { revision: id  }
    });
  }

  const formFields = {
    signUp: {
      given_name: {
        placeholder: 'Enter your first name',
        isRequired: true,
        label: 'First Name'
      },
      family_name: {
        placeholder: 'Enter your last name',
        isRequired: true,
        label: 'Last Name'
      }
    },
  }

  const signUpAttributes = ["email", "given_name", "family_name"];

  return (
    <Authenticator
      formFields={formFields}
      signUpAttributes={signUpAttributes}
      /* Passing the addition wby_notes_app_group attribute to the signUp method
       * We use this attribute to assign the user to the notes-app-users group
       * The notes-app-users group has the necessary permissions to access the notes content in Webiny side
       */
      services={{
        async handleSignUp(formData) {
          const { options, username, password } = formData;
          options.userAttributes["custom:wby_notes_app_group"] = "notes-app-users";
          const res = await signUp({
            username,
            password,
            options,
          });
          return res;
        },
      }}
    >
      {({ signOut, user }) => (
        <main>
          <div className="header">
            <Heading level={1}>My Notes App! Welcome, {user.username}</Heading>
            <Button onClick={signOut} variation="outline">
              Sign out
            </Button>
          </div>

          <Heading level={1}></Heading>
          <View as="form" margin="3rem 0" onSubmit={createNote}>
            <Flex direction="row" justifyContent="center">
              <TextField
                name="title"
                placeholder="Note Title"
                label="Note Title"
                labelHidden
                variation="quiet"
                required
              />
              <TextField
                name="description"
                placeholder="Note Description"
                label="Note Description"
                labelHidden
                variation="quiet"
                required
              />
              <Button type="submit" variation="primary">
                Create Note
              </Button>
            </Flex>
          </View>

          <Flex justifyContent="center">
            <Heading level={2}>Current Notes</Heading>
          </Flex>

          <View margin="3rem 0">
            {notes.map((note) => (
              <Flex
                key={note.id || note.title}
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Text as="strong" fontWeight={700}>
                  {note.title}
                </Text>
                <Text as="span">{note.description}</Text>
                <Button variation="link" onClick={() => deleteNote(note)}>
                  Delete note
                </Button>
              </Flex>
            ))}
          </View>
        </main>
      )}
    </Authenticator>
  );
};

export default App;`}
</Editor>
<_Heading level={3} id={"testing-the-application"} nextElement={{
      "type": "paragraph"
    }}>Testing the Application</_Heading>
<p>{`We’re all set! Run the React app with the `}<inlineCode parentName="p">{`npm start`}</inlineCode>{` command, and try signing up and logging in. You can also play with creating, viewing, and deleting notes.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;