/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { CanIUseThis } from "@/components/CanIUseThis";
import { WhatYouWillLearn } from "@/components/WhatYouWillLearn";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "GraphQL Request Batching",
  "description": "Learn how to configure the GraphQL client request batching in the Admin app.",
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
  "title": "Overview",
  "slug": "overview",
  "children": []
}, {
  "title": "Configuration",
  "slug": "configuration",
  "children": []
}, {
  "title": "Custom Batch Key",
  "slug": "custom-batch-key",
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




<CanIUseThis since={"5.37.6"} mdxType="CanIUseThis" />
<WhatYouWillLearn mdxType="WhatYouWillLearn">
<ul>
<li parentName="ul">{`how to configure GraphQL client request batching`}</li>
</ul>
</WhatYouWillLearn>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`Out of the box, Webiny configures its GraphQL client (Apollo Client) with a `}<inlineCode parentName="p">{`BatchHttpLink`}</inlineCode>{`, meaning, it will batch GraphQL queries that are happening at the same time, and instead of sending multiple parallel HTTP request, it will combine all payloads into one HTTP request. On the GraphQL API side, Webiny unpacks the payload, processes each query individually, and then returns the response as one big payload. The GraphQL client then unpacks the response and distributes data to its requesters.`}</p>
<p>{`This works well for the majority of projects. However, there are scenarios when you don’t want batching to happen at all, or want to control how many requests are batched, how they’re grouped, etc.`}</p>
<p>{`This articles demonstrates how you can configure batching in our GraphQL client.`}</p>
<_Heading level={2} id={"configuration"} nextElement={{
      "type": "paragraph"
    }}>Configuration</_Heading>
<p>{`To configure batching, you need to provide a custom Apollo Client factory to the `}<inlineCode parentName="p">{`<Admin>`}</inlineCode>{` component of our Admin app.`}</p>
<Editor title="apps/admin/src/App.tsx" lang="tsx" mdxType="Editor">
{`import React from "react";
import { Admin, createApolloClient } from "@webiny/app-serverless-cms";
import { Cognito } from "@webiny/app-admin-users-cognito";
import "./App.scss";

const apolloClientFactory: typeof createApolloClient = ({ uri }) => {
  return createApolloClient({
    uri,
    batching: {
      batchMax: 3,
      batchInterval: 1000,
      batchKey(operation) {
        // Return a custom batch key
        return "";
      }
    }
  });
};

export const App = () => {
  return (
    <Admin createApolloClient={apolloClientFactory}>
      <Cognito />
    </Admin>
  );
};`}
</Editor>
<p><inlineCode parentName="p">{`batchMax`}</inlineCode>{` is a maximum number of requests that will be batched together.`}</p>
<p><inlineCode parentName="p">{`batchInterval`}</inlineCode>{` is a maximum number of milliseconds the client will wait before sending the batched request to the API endpoint.`}</p>
<p><inlineCode parentName="p">{`batchKey`}</inlineCode>{` allows you to generate a key based on which the client will group requests.`}</p>
<_Heading level={2} id={"custom-batch-key"} nextElement={{
      "type": "paragraph"
    }}>Custom Batch Key</_Heading>
<p>{`One of the scenarios that was reported to cause issues with batching, is overuse of reference fields in the Headless CMS content models. If you have, say, 20 ref fields, and you open a content entry form of an existing record, there will be 20 requests batched together and sent to the API. Depending on the complexity of the data model, this may or may not cause performance issues while these 20 queries are being individually processed by the Lambda function.`}</p>
<p>{`The following example shows how you can control whether requests are batched, based on the `}<inlineCode parentName="p">{`cms`}</inlineCode>{` request context which is set within our Headless CMS app, by all reference fields. When there are GraphQL queries sent from the reference field renderers, we assign a request context containing the current content model and current reference field. With this information, you can conditionally disable batching of reference field queries per-model.`}</p>
<Editor title="apps/admin/src/App.tsx Custom Batch Key" lang="tsx" mdxType="Editor">
{`import React from "react";
import { Admin, createApolloClient } from "@webiny/app-serverless-cms";
import { Cognito } from "@webiny/app-admin-users-cognito";
import { CmsModel, CmsModelField } from "@webiny/app-headless-cms/types";
import "./App.scss";

const apolloClientFactory: typeof createApolloClient = ({ uri }) => {
  return createApolloClient({
    uri,
    batching: {
      batchKey(operation) {
        const context = operation.getContext();

        if (context["cms"]) {
          const { model, field } = context["cms"] as {
            model: CmsModel;
            field: CmsModelField;
          };

          console.log(
            \`Disable batching of \${operation.operationName}\`,
            \`\${model.modelId}.\${field.fieldId}\`
          );
          return field.id;
        }

        return "";
      }
    }
  });
};

export const App = () => {
  return (
    <Admin createApolloClient={apolloClientFactory}>
      <Cognito />
    </Admin>
  );
};`}
</Editor>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;