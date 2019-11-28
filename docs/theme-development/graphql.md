---
id: graphql
title: GraphQL
sidebar_label: GraphQL
---

Webiny themes are mostly made of React components and stylesheets. The main goal of the theme is to display your content. But in some specific cases, you might have a need to pull information that is not directly tied to that particular page. Information like site settings, site name, location of the site logo and similar. 

To pull this type of information, or in fact, any other information, Webiny exposes a GraphQL API that your theme can interact with. 

> Note that all GraphQL API calls go through the security layer which validates if users have access to that data. The data that you wish to expose to website visitors must allow anonymous access. 

As an example, the [Header](https://github.com/webiny/webiny-js/blob/master/examples/packages/theme/src/components/Header.js) component in the default theme retrieves the site name and the logo image via GraphQL. 

The retrieval process is done in 2 steps. First, you write a GraphQL query to fetch that information. In the case of the `Header` component, you can find that query [here](https://github.com/webiny/webiny-js/blob/master/examples/packages/theme/src/components/graphql.js#L4).

Once you have your query, you need to execute it and return the result. This is done via the `Query` component provided by `react-apollo` library. 

Here is a minimal working example of how this looks:

```js
import * as React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

// our GraphQL query
const getHeaderData = gql`
    query PbGetHeader {
        pageBuilder {
            getSettings {
                data {
                    name
                    logo {
                        src
                    }
                }
            }
        }
    }
`;

// Header React component
class Header extends React.Component{

    render() {
        return (
            <Query query={getHeaderData}>
                {({ data: response }) => {
                    const { name, logo } = get(response, "pageBuilder.getSettings.data") || {};

                    return (
                        <div>
                            Site Name: {name}<br/>
                            Sote Logo: {logo}
                        </div>
                    );
                }}
            </Query>
        );
    }
}

```

Using the same approach you can retrieve any other data that allows anonymous access.