/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import fmDownload from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/architecture/api/assets/webiny_api_fm_download.png";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "File Download",
  "description": "Learn about the necessary cloud infrastructure resources on which the API project application relies on to download files.",
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
<li parentName="ul">{`how file downloads are handled by the deployed cloud infrastructure and application code`}</li>
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
<Image src={fmDownload} title="Webiny Cloud Infrastructure - API - File Download" shadow={false} mdxType="Image" />
<_Heading level={2} id={"description"} nextElement={{
      "type": "paragraph"
    }}>Description</_Heading>
<p>{`The diagram shows what happens every time a client tries to download a binary file.`}</p>
<p>{`The flow consists of the following four steps:`}</p>
<ol>
<li parentName="ol">
{`The client issues a GET `}
<inlineCode parentName="li">{`/download/{file-key}`}</inlineCode>
{` HTTP request, which reaches the Amazon API Gateway `}
<diagram-letter>
{`B`}
</diagram-letter>
{`, which then invokes the File Manager’s Download AWS Lambda function `}
<diagram-letter>
{`G3`}
</diagram-letter>
{`.`}
</li>
<li parentName="ol">
{`The Download AWS Lambda function extracts the file key from the received HTTP request, and then fetches the file from the S3 bucket `}
<diagram-letter>
{`G1`}
</diagram-letter>
{`.`}
</li>
<li parentName="ol">
{`As a base64 encoded string, the file is returned to the Amazon API Gateway `}
<diagram-letter>
{`B`}
</diagram-letter>
{`, which transforms it to an actual binary, and sends it back to the Amazon CloudFront `}
<diagram-letter>
{`A`}
</diagram-letter>
{`.`}
</li>
<li parentName="ol">
{`Amazon CloudFront `}
<diagram-letter>
{`A`}
</diagram-letter>
{` receives the file, caches it, and sends it back to the client.`}
</li>
</ol>
<Alert type="info" mdxType="Alert">
<p>{`Visit the `}<a parentName="p" {...{
          "href": "https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-payload-encodings.html"
        }}>{`Working with binary media types for REST APIs`}</a>{` article to learn more about how Amazon API Gateway deals with binary files.`}</p>
</Alert>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;