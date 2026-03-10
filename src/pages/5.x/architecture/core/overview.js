/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import coreOverview from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/architecture/core/assets/webiny_core_app.png";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Overview",
  "description": "What are the necessary cloud infrastructure resources on which the Core project application relies on.",
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
  "title": "The Core Project Application",
  "slug": "the-core-project-application",
  "children": []
}, {
  "title": "Diagram",
  "slug": "diagram",
  "children": []
}, {
  "title": "Description",
  "slug": "description",
  "children": [{
    "title": "1. Amazon Cognito",
    "slug": "1-amazon-cognito",
    "children": []
  }, {
    "title": "2. Amazon S3",
    "slug": "2-amazon-s3",
    "children": []
  }, {
    "title": "3. Amazon EventBridge",
    "slug": "3-amazon-event-bridge",
    "children": []
  }, {
    "title": "4. Amazon DynamoDB and Amazon OpenSearch Service",
    "slug": "4-amazon-dynamo-db-and-amazon-open-search-service",
    "children": []
  }]
}, {
  "title": "FAQ",
  "slug": "faq",
  "children": [{
    "title": "How Is DynamoDB Data Structured?",
    "slug": "how-is-dynamo-db-data-structured",
    "children": []
  }]
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
const Image = makeShortcode("Image");
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




<Alert type="success" title="What you’ll learn" mdxType="Alert">
<ul>
<li parentName="ul">{`what is the `}<strong parentName="li">{`Core`}</strong>{` project application`}</li>
<li parentName="ul">{`what are the necessary cloud infrastructure resources on which the `}<strong parentName="li">{`API`}</strong>{` project application relies on`}</li>
</ul>
</Alert>
<_Heading level={2} id={"the-core-project-application"} nextElement={{
      "type": "paragraph"
    }}>The Core Project Application</_Heading>
<p>{`The `}<strong parentName="p">{`Core`}</strong>{` project application represents your project’s core cloud infrastructure resources. Essentially, these are your stateful resources, like `}<a parentName="p" {...{
        "href": "https://aws.amazon.com/dynamodb/"
      }}>{`Amazon DynamoDB`}</a>{` for storing data, `}<a parentName="p" {...{
        "href": "https://aws.amazon.com/s3/"
      }}>{`Amazon S3`}</a>{` for storing files, and `}<a parentName="p" {...{
        "href": "https://aws.amazon.com/cognito/"
      }}>{`Amazon Cognito`}</a>{` for storing user information and authentication. Also, with the `}<strong parentName="p">{`Amazon DynamoDB + Amazon OpenSearch`}</strong>{` setup, the project application also deploys an OpenSearch cluster via the `}<a parentName="p" {...{
        "href": "https://aws.amazon.com/opensearch-service/"
      }}>{`Amazon OpenSearch Service`}</a>{`.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`Learn more about the different database setups in the `}<_Link href="/docs/5.x/architecture/introduction#different-database-setups">{`introduction`}</_Link>{` section.`}</p>
</Alert>
<p>{`The `}<strong parentName="p">{`Core`}</strong>{` project application also deploys an `}<a parentName="p" {...{
        "href": "https://aws.amazon.com/eventbridge/"
      }}>{`Amazon EventBridge`}</a>{`, used for communication between different resources.`}</p>
<_Heading level={2} id={"diagram"} nextElement={{
      "type": "jsx"
    }}>Diagram</_Heading>
<Alert type="info" mdxType="Alert">
<p>{`For brevity, the diagram doesn’t include network-level cloud infrastructure resources, like region, VPC, availability zones, and so on.`}</p>
</Alert>
<Image src={coreOverview} title="Webiny Cloud Infrastructure - Core - Overview" shadow={false} mdxType="Image" />
<_Heading level={2} id={"description"} nextElement={{
      "type": "paragraph"
    }}>Description</_Heading>
<p>{`The above diagram gives an overview of the complete cloud infrastructure that is deployed by your project’s `}<strong parentName="p">{`Core`}</strong>{` project application.`}</p>
<_Heading level={3} id={"1-amazon-cognito"} nextElement={{
      "type": "paragraph"
    }}>1. Amazon Cognito</_Heading>
{`Although Webiny can work with multiple identity providers, by default, it works with Amazon Cognito `}
<diagram-letter>
{`A`}
</diagram-letter>
{`.`}
<p>{`The service is utilized from the `}<strong parentName="p">{`Default GraphQL API`}</strong>{` and `}<strong parentName="p">{`Headless CMS GraphQL API`}</strong>{` AWS Lambda functions, both part of the `}<_Link href="/docs/5.x/architecture/api/overview">{`API project application`}</_Link>{`.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`Learn more about the Headless CMS API in the `}<_Link href="/docs/5.x/headless-cms/basics/graphql-api">{`Headless CMS GraphQL API Overview`}</_Link>{` article.`}</p>
</Alert>
<_Heading level={3} id={"2-amazon-s3"} nextElement={{
      "type": "paragraph"
    }}>2. Amazon S3</_Heading>
{`For storing all types of files, Webiny’s File Manager application uses Amazon S3 `}
<diagram-letter>
{`B`}
</diagram-letter>
{`. Note that the application also provides a way to securely serve files and resize images (more in the following sections).`}
<_Heading level={3} id={"3-amazon-event-bridge"} nextElement={{
      "type": "paragraph"
    }}>3. Amazon EventBridge</_Heading>
<p>{`Amazon EventBridge is used for communication between different cloud infrastructure resources.`}</p>
<_Heading level={3} id={"4-amazon-dynamo-db-and-amazon-open-search-service"} nextElement={{
      "type": "paragraph"
    }}>4. Amazon DynamoDB and Amazon OpenSearch Service</_Heading>
<p>{`Amazon DynamoDB and Amazon OpenSearch Service are used as your project’s databases. Note that the latter is only used if you’re using the `}<strong parentName="p">{`Amazon DynamoDB + Amazon OpenSearch`}</strong>{` setup.`}</p>
<_Heading level={2} id={"faq"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>FAQ</_Heading>
<_Heading level={3} id={"how-is-dynamo-db-data-structured"} nextElement={{
      "type": "paragraph"
    }}>How Is DynamoDB Data Structured?</_Heading>
<p>{`Webiny is following the approach called `}<a parentName="p" {...{
        "href": "https://www.alexdebrie.com/posts/dynamodb-single-table/"
      }}>{`single-table design`}</a>{`, which advocates for storing all the application data in a single DynamoDB table. So, all of the Webiny applications are storing data in a single table, with distinct primary and secondary keys in order to avoid clashing of data.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;