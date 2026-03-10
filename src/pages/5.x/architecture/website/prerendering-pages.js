/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import websitePrerendering from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/architecture/website/assets/prerendering-pages/webiny_website_prerendering.png";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Prerendering Pages",
  "description": "Learn how the prerendering service, hosted in the API project application, relies on the Website project application to perform page prerendering.",
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
<li parentName="ul">{`how the Prerendering Service (located in the `}<strong parentName="li">{`API`}</strong>{` project application) utilizes `}<strong parentName="li">{`Website`}</strong>{`’s cloud infrastructure resources in order to prerender your public website’s pages and store their HTML and relevant metadata`}</li>
</ul>
</Alert>
<_Heading level={2} id={"diagram"} nextElement={{
      "type": "jsx"
    }}>Diagram</_Heading>
<Alert type="info" mdxType="Alert">
<p>{`For brevity, the diagram doesn’t include network-level cloud infrastructure resources, like region, VPC, availability zones, and so on. Check out the `}<_Link href="/docs/5.x/architecture/deployment-modes/introduction">{`Deployment Modes`}</_Link>{` section if you’re interested in that aspect of the deployed cloud infrastructure.`}</p>
</Alert>
<Alert type="info" mdxType="Alert">
<p>{`Note that the Amazon DynamoDB and Amazon OpenSearch databases are deployed as part of the `}<_Link href="/docs/5.x/architecture/core/overview">{`Core`}</_Link>{` project application. Also, the GraphQL Handler AWS Lambda function is deployed as part of the `}<_Link href="/docs/5.x/architecture/api/overview">{`API`}</_Link>{` project application`}</p>
<p>{`These are still included in the diagram, just so it’s more clear to the reader.`}</p>
</Alert>
<Image src={websitePrerendering} title="Webiny Cloud Infrastructure - Website - Prerendering" shadow={false} mdxType="Image" />
<_Heading level={2} id={"description"} nextElement={{
      "type": "paragraph"
    }}>Description</_Heading>
<p>{`The diagram shows the process of prerendering pages published with the Page Builder application. Note the process also involves `}<strong parentName="p">{`Core`}</strong>{` and `}<strong parentName="p">{`API`}</strong>{` project applications.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`To learn more about the `}<strong parentName="p">{`Core`}</strong>{` and `}<strong parentName="p">{`API`}</strong>{` project applications’ cloud infrastructure, check out the `}<_Link href="/docs/5.x/architecture/core/overview">{`Core`}</_Link>{` and `}<_Link href="/docs/5.x/architecture/api/overview">{`API`}</_Link>{` sections.`}</p>
</Alert>
<p>{`The flow consists of the following seven steps:`}</p>
<ol>
<li parentName="ol">
{`A user first publishes a page from the Admin Area. This is a simple GraphQL request, issued by the browser, to the GraphQL API that’s deployed as part of the `}
<strong parentName="li">{`API`}</strong>
{` project application `}
<diagram-letter>
{`I`}
</diagram-letter>
{`.`}
</li>
<li parentName="ol">
{`In the process, an Amazon EventBridge `}
<diagram-letter>
{`H`}
</diagram-letter>
{` event is emitted, which will be handled by the Subscribe `}
<diagram-letter>
{`E3`}
</diagram-letter>
{` AWS Lambda function.`}
</li>
<li parentName="ol">
{`The Subscribe `}
<diagram-letter>
{`E3`}
</diagram-letter>
{` AWS Lambda function creates one or more Amazon SQS messages.`}
</li>
<li parentName="ol">
{`Messages will be picked up by the Render `}
<diagram-letter>
{`E2`}
</diagram-letter>
{` AWS Lambda function, which is responsible for actual prerendering of pages. The process starts by issuing an HTTP request to the Amazon CloudFront distribution `}
<diagram-letter>
{`D`}
</diagram-letter>
{`.`}
</li>
<li parentName="ol">
{`The request is forwarded to the Amazon S3 bucket `}
<diagram-letter>
{`C`}
</diagram-letter>
{`. This is where the actual React application is hosted, with all of its code and static assets.`}
</li>
<li parentName="ol">
{`The mentioned Subscribe `}
<diagram-letter>
{`E3`}
</diagram-letter>
{` AWS Lambda function waits until the React application, served back via the Amazon CloudFront distribution `}
<diagram-letter>
{`D`}
</diagram-letter>
{`, has been completely rendered.`}
</li>
<li parentName="ol">
{`Finally, the function stores the generated HTML and related metadata in the Amazon S3 bucket `}
<diagram-letter>
{`B`}
</diagram-letter>
{`. Additional metadata also gets stored in the Amazon DynamoDB `}
<diagram-letter>
{`G`}
</diagram-letter>
{` that’s part of the `}
<strong parentName="li">{`Core`}</strong>
{` project application.`}
</li>
</ol>
<p>{`With these steps completed, the page is ready to be served to actual website visitors. Continue reading the `}<_Link href="/docs/5.x/architecture/website/serving-pages">{`Serving Pages`}</_Link>{` section to learn more.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;