/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import prodMode from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/architecture/deployment-modes/assets/webiny_api_overview_vpc_custom.png";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Production",
  "description": "Learn how the necessary cloud infrastructure resources are deployed within the custom VPC.",
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
  "children": [{
    "title": "Key Differences",
    "slug": "key-differences",
    "children": [{
      "title": "Public and Private Subnets",
      "slug": "public-and-private-subnets"
    }, {
      "title": "Multiple Availability Zones",
      "slug": "multiple-availability-zones"
    }, {
      "title": "External Internet-Facing Cloud Infrastructure Resources",
      "slug": "external-internet-facing-cloud-infrastructure-resources"
    }]
  }]
}, {
  "title": "FAQ",
  "slug": "faq",
  "children": [{
    "title": "Is Amazon OpenSearch Service <diagram-letter>H</diagram-letter> Deployed Into Multiple AZs?",
    "slug": "is-amazon-open-search-service-diagram-letter-h-diagram-letter-deployed-into-multiple-a-zs",
    "children": []
  }, {
    "title": "How Is API Gateway Communicating With AWS Lambda Functions if It's Outside of the VPC?",
    "slug": "how-is-api-gateway-communicating-with-aws-lambda-functions-if-it-s-outside-of-the-vpc",
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
<li parentName="ul">{`how the necessary cloud infrastructure resources are deployed within a custom VPC`}</li>
</ul>
</Alert>
<_Heading level={2} id={"diagram"} nextElement={{
      "type": "jsx"
    }}>Diagram</_Heading>
<Image src={prodMode} title="Webiny Cloud Infrastructure - Modes - Production Mode" shadow={false} mdxType="Image" />
<_Heading level={2} id={"description"} nextElement={{
      "type": "paragraph"
    }}>Description</_Heading>
<p>{`Unlike in the development setup, where your project is deployed into the default VPC, in the production setup, your project is deployed into a custom Virtual Private Cloud (VPC), which we cover in this section.`}</p>
<p>{`Note that the VPC setup presented here is a good foundation, but is not an ultimate solution. There is a chance that the setup might need additional cloud infrastructure resources or different configurations on your or your organization’s behalf.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`Virtual Private Clouds (VPCs) is a topic that requires some general networking knowledge and knowledge on AWS-specific concepts like regions, availability zones, different network gateways, and so on. Be sure to `}<a parentName="p" {...{
          "href": "https://aws.amazon.com/vpc/"
        }}>{`read about it`}</a>{` before going through this section.`}</p>
</Alert>
<_Heading level={3} id={"key-differences"} nextElement={{
      "type": "paragraph"
    }}>Key Differences</_Heading>
<p>{`When compared to the development mode, essentially, resources still work and communicate with each other in the same way, except this time, there are a couple of additional network-level resources and rules in place. This helps in improving your project’s availability and overall security posture.`}</p>
<_Heading level={4} id={"public-and-private-subnets"} nextElement={{
      "type": "paragraph"
    }}>Public and Private Subnets</_Heading>
{`The most prominent change, when compared to the development mode, is the inclusion of a VPC that consists of three subnets - one public `}
<diagram-letter>
{`C`}
</diagram-letter>
{` and two private `}
<diagram-letter>
{`D`}
</diagram-letter>
{` `}
<diagram-letter>
{`e`}
</diagram-letter>
{`, deployed across multiple availability zones (AZs).`}
<br />
<br />
{`With this network structure, you are given the opportunity to place mission-critical cloud infrastructure resources into the private subnets `}
<diagram-letter>
{`D`}
</diagram-letter>
{` `}
<diagram-letter>
{`E`}
</diagram-letter>
{`, which makes these resources more secure, because they are not directly exposed to the public internet. This is especially important when talking about hosting databases, for example the Amazon OpenSearch Service `}
<diagram-letter>
{`H`}
</diagram-letter>
{`.`}
<Alert type="info" mdxType="Alert">
{`With the Amazon OpenSearch Service `}
<diagram-letter>
{`H`}
</diagram-letter>
{` placed inside of a private subnet, note that you can’t connect to it directly from your machine. `}
<a {...{
        "href": "https://aws.amazon.com/blogs/security/how-to-record-ssh-sessions-established-through-a-bastion-host/"
      }}>{`Deploying a jump-box (bastion host)`}</a>
{` in a public subnet can resolve this problem.`}
</Alert>
<_Heading level={4} id={"multiple-availability-zones"} nextElement={{
      "type": "paragraph"
    }}>Multiple Availability Zones</_Heading>
<p>{`As mentioned, the public and private subnets are deployed across multiple availability zones (AZs). This helps in making your application more highly available, fault tolerant and scalable. For example, if in a single region, one of the AZs goes offline, all of the network traffic is essentially routed to other AZs that are online. This means your application still works.`}</p>
<p>{`Note that the number of distinct AZs depends on the region you’re deploying to as some only have 2 AZs.`}</p>
<Alert type="danger" mdxType="Alert">
{`Have in mind that hosting your application in multiple availability zones may incur additional cost, since some of the cloud infrastructure resources need to be deployed multiple times. For example, this is true for Amazon OpenSearch Service `}
<diagram-letter>
{`h`}
</diagram-letter>
{`.`}
</Alert>
<_Heading level={4} id={"external-internet-facing-cloud-infrastructure-resources"} nextElement={{
      "type": "paragraph"
    }}>External Internet-Facing Cloud Infrastructure Resources</_Heading>
{`The only way resources located in the private subnets `}
<diagram-letter>
{`D`}
</diagram-letter>
{` `}
<diagram-letter>
{`e`}
</diagram-letter>
{` can talk to the public internet is via the public subnet `}
<diagram-letter>
{`C`}
</diagram-letter>
{`, which includes a NAT gateway `}
<diagram-letter>
{`F`}
</diagram-letter>
{`. The NAT (network address translation) gateway is the middleman that forwards all internet-routable network traffic, received from private subnets, to the Internet Gateway `}
<diagram-letter>
{`g`}
</diagram-letter>
{`.`}
{`This makes it possible for AWS Lambda functions that are located in private subnets `}
<diagram-letter>
{`D`}
</diagram-letter>
{` `}
<diagram-letter>
{`E`}
</diagram-letter>
{` to talk to AWS resources that operate in an internet facing environment, like Amazon DynamoDB `}
<diagram-letter>
{`i`}
</diagram-letter>
{`, Amazon S3 `}
<diagram-letter>
{`j`}
</diagram-letter>
{`, and Amazon Cognito `}
<diagram-letter>
{`k`}
</diagram-letter>
{`.`}
<Alert type="warning" mdxType="Alert">
{`Note that when private subnet resources are communicating with the ones operating in an internet facing environment `}
<diagram-letter>
{`i`}
</diagram-letter>
{` `}
<diagram-letter>
{`j`}
</diagram-letter>
{` `}
<diagram-letter>
{`k`}
</diagram-letter>
{`, sending and receiving data is still performed across the public internet `}
<diagram-letter>
{`l`}
</diagram-letter>
{`.`}
<p>{`If this presents a problem, you may want to integrate a different solution, like for example VPC endpoints for DynamoDB. Check out the `}<a parentName="p" {...{
          "href": "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/vpc-endpoints-dynamodb.html"
        }}>{`Using Amazon VPC Endpoints to Access DynamoDB`}</a>{` article to learn more.`}</p>
</Alert>
<_Heading level={2} id={"faq"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>FAQ</_Heading>
<_Heading level={3} id={"is-amazon-open-search-service-diagram-letter-h-diagram-letter-deployed-into-multiple-a-zs"} nextElement={{
      "type": "paragraph"
    }}>Is Amazon OpenSearch Service&lt;diagram-letter&gt;H&lt;/diagram-letter&gt;Deployed Into Multiple AZs?</_Heading>
<p>{`For the production setup, that is true. For development setup, it is deployed into a single AZ, just for cost reasons.`}</p>
<p>{`Check out the `}<a parentName="p" {...{
        "href": "https://aws.amazon.com/opensearch-service/faqs/"
      }}>{`Amazon OpenSearch Service’s FAQ page`}</a>{` for more information.`}</p>
<_Heading level={3} id={"how-is-api-gateway-communicating-with-aws-lambda-functions-if-it-s-outside-of-the-vpc"} nextElement={{
      "type": "paragraph"
    }}>How Is API Gateway Communicating With AWS Lambda Functions if It&#39;s Outside of the VPC?</_Heading>
{`To our knowledge, there is no official evidence on how this actually works. But, since no additional configuration was needed in order to establish the API Gateway `}
<diagram-letter>
{`B`}
</diagram-letter>
{` - Lambda Functions connection, it means that this is automatically handled for you by AWS’s internal structure and mechanisms. This `}
<a {...{
      "href": "https://stackoverflow.com/questions/60678826/aws-route-from-public-api-gateway-to-in-vpc-lambda"
    }}>{`Stack Overflow`}</a>
{` question briefly discusses this, but again, no concrete evidence and answers are provided.`}
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;