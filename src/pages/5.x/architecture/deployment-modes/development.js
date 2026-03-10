/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import devMode from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/architecture/deployment-modes/assets/webiny_api_overview_vpc_default.png";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Development",
  "description": "Learn how the necessary cloud infrastructure resources are deployed in the development mode.",
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
}, {
  "title": "FAQ",
  "slug": "faq",
  "children": [{
    "title": "Is Amazon OpenSearch Service Deployed Into Multiple AZs?",
    "slug": "is-amazon-open-search-service-deployed-into-multiple-a-zs",
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
<li parentName="ul">{`how the necessary cloud infrastructure resources are deployed in the development mode`}</li>
</ul>
</Alert>
<_Heading level={2} id={"diagram"} nextElement={{
      "type": "jsx"
    }}>Diagram</_Heading>
<Image src={devMode} title="Webiny Cloud Infrastructure - Modes - Development Mode" shadow={false} mdxType="Image" />
<_Heading level={2} id={"description"} nextElement={{
      "type": "jsx"
    }}>Description</_Heading>
<Alert type="info" mdxType="Alert">
<p>{`Virtual Private Clouds (VPCs) is a topic that requires some general networking knowledge and knowledge on AWS-specific concepts like regions, availability zones, different network gateways, and so on. Be sure to `}<a parentName="p" {...{
          "href": "https://aws.amazon.com/vpc/"
        }}>{`read about it`}</a>{` before going through this section.`}</p>
<p>{`You can also check this `}<a parentName="p" {...{
          "href": "https://www.rackspace.com/blog/aws-201-understanding-the-default-virtual-private-cloud"
        }}>{`Understanding the Default Virtual Private Cloud`}</a>{` article. It clearly lays out a lot of useful information about AWS’s default VPC setup.`}</p>
</Alert>
<p>{`In development mode, your project is deployed into the default Virtual Private Cloud (VPC), which is automatically created for every AWS Account.`}</p>
{`In the diagram above, we can see that the default VPC setup consists of three subnets `}
<diagram-letter>
{`c`}
</diagram-letter>
{` `}
<diagram-letter>
{`d`}
</diagram-letter>
{` `}
<diagram-letter>
{`e`}
</diagram-letter>
{` that span across three availability zones (AZs). All of these subnets are public subnets, since they can both receive and send network traffic to the public internet. When it comes to availability zones, note that the number of zones may vary, depending on the region you’re deploying into (some regions only have two).`}
<br />
<br />
We can also see that AWS Lambda functions are located in all three subnets. This is because, by
default, AWS runs AWS Lambda functions in multiple AZs to ensure it is highly available in case of
an AZ failure. The same cannot be said for the Amazon OpenSearch Service <diagram-letter>
  h
</diagram-letter>, which is only deployed in a single AZ <diagram-letter>C</diagram-letter>.
<Alert type="info" mdxType="Alert">
<p>{`The Amazon OpenSearch Service is only deployed with the `}<strong parentName="p">{`Amazon DynamoDB + Amazon OpenSearch Service`}</strong>{` setup.`}</p>
<p>{`For more information, visit the `}<_Link href="/docs/5.x/get-started/install-webiny#pick-your-database">{`Different Setups`}</_Link>{` sections.`}</p>
</Alert>
<p>{`Development mode is a reasonable choice when it comes to development environments. But, for production, since some of the cloud infrastructure resources may require that they are not exposed to the public internet, the `}<_Link href="/docs/5.x/architecture/deployment-modes/production">{`production`}</_Link>{` may be a better solution.`}</p>
<_Heading level={2} id={"faq"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>FAQ</_Heading>
<_Heading level={3} id={"is-amazon-open-search-service-deployed-into-multiple-a-zs"} nextElement={{
      "type": "paragraph"
    }}>Is Amazon OpenSearch Service Deployed Into Multiple AZs?</_Heading>
<p>{`In the development mode, it is deployed into a single AZ, just for cost reasons. But yes, production workloads should use two or three AZs, hence the production mode. Check out the `}<a parentName="p" {...{
        "href": "https://aws.amazon.com/opensearch-service/faqs/"
      }}>{`Amazon OpenSearch Service’s FAQ page`}</a>{` for more information.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;