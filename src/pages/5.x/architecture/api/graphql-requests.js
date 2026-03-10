/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import apiGqlRequest from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/architecture/api/assets/webiny_api_gql_request.png";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "GraphQL Requests",
  "description": "Learn about the necessary cloud infrastructure resources on which the API project application relies on to perform GraphQL requests.",
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
  "title": "Diagram",
  "slug": "diagram",
  "children": []
}, {
  "title": "Description",
  "slug": "description",
  "children": []
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
<li parentName="ul">{`how GraphQL HTTP requests are handled by the deployed cloud infrastructure and application code`}</li>
</ul>
</Alert>
<_Heading level={2} id={"diagram"} nextElement={{
      "type": "jsx"
    }}>Diagram</_Heading>
<Alert type="info" mdxType="Alert">
<p>{`For brevity, the diagram doesn’t include network-level cloud infrastructure resources, like region, VPC, availability zones, and so on. Check out the `}<_Link href="/docs/5.x/architecture/deployment-modes/introduction">{`Deployment Modes`}</_Link>{` section if you’re interested in that aspect of the deployed cloud infrastructure.`}</p>
</Alert>
<Alert type="info" mdxType="Alert">
<p>{`Note that the stateful resources like Amazon S3, Amazon Cognito, Amazon DynamoDB and Amazon OpenSearch are deployed as part of the `}<_Link href="/docs/5.x/architecture/core/overview">{`Core`}</_Link>{` project application. These are still included in the diagram, just so it’s more clear to the reader.`}</p>
</Alert>
<Image src={apiGqlRequest} title="Webiny Cloud Infrastructure - API - GraphQL Requests" shadow={false} mdxType="Image" />
<_Heading level={2} id={"description"} nextElement={{
      "type": "paragraph"
    }}>Description</_Heading>
<p>{`The diagram shows how HTTP requests (GraphQL queries and mutations) travel through the deployed cloud infrastructure. Request are primarily issued by the `}<strong parentName="p">{`Admin Area`}</strong>{`, or `}<strong parentName="p">{`Website`}</strong>{` applications, but of course, can be issued by other clients as well.`}</p>
<p>{`The flow consists of the following six steps:`}</p>
<ol>
<li parentName="ol">
{`The GraphQL HTTP request first reaches the Amazon CloudFront `}
<diagram-letter>
{`A`}
</diagram-letter>
{`.`}
</li>
<li parentName="ol">
{`The request is forwarded to the Amazon API Gateway `}
<diagram-letter>
{`B`}
</diagram-letter>
{`.`}
</li>
<li parentName="ol">
{`The Amazon API Gateway invokes the GraphQL Handler AWS Lambda function `}
<diagram-letter>
{`C`}
</diagram-letter>
{`.`}
</li>
<li parentName="ol">{`Depending on the issued GraphQL operation, the AWS Lambda function’s code may issue one or more requests to other cloud infrastructure resources:`}
<ol parentName="li">
<li parentName="ol">
{`Amazon Cognito `}
<diagram-letter>
{`D`}
</diagram-letter>
{` to perform identity authentication`}
</li>
<li parentName="ol">
{`Amazon DynamoDB `}
<diagram-letter>
{`E`}
</diagram-letter>
{` or Amazon OpenSearch Service `}
<diagram-letter>
{`F`}
</diagram-letter>
{` to perform database queries`}
</li>
</ol>
</li>
<li parentName="ol">
{`Once the code execution has completed, an HTTP response is returned back to the Amazon API Gateway `}
<diagram-letter>
{`B`}
</diagram-letter>
{`.`}
</li>
<li parentName="ol">
{`The Amazon API Gateway `}
<diagram-letter>
{`B`}
</diagram-letter>
{` forwards the request to the Amazon CloudFront `}
<diagram-letter>
{`A`}
</diagram-letter>
{`, which again forwards it back to the client.`}
</li>
</ol>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;