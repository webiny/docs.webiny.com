/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import devMode from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/6.0.x/infrastructure/deployment-modes/assets/default-vpc/webiny_api_overview_vpc_default.png";
import prodMode from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/6.0.x/infrastructure/deployment-modes/assets/custom-vpc/webiny_api_overview_vpc_custom.png";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.64f62e.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Deployment Modes",
  "description": "Learn about development and production deployment modes and their infrastructure differences.",
  "type": "docs",
  "showPageHeader": true,
  "fullWidth": false,
  "version": "6.0.x"
};
const docsearch = {
  "type": "docs",
  "weight": 100,
  "versions": ["latest", "6.0.x"]
};
const navigation = _navigation;
const versions = _versions;
const tableOfContents = [{
  "title": "Overview",
  "slug": "overview",
  "children": []
}, {
  "title": "Mode Selection",
  "slug": "mode-selection",
  "children": []
}, {
  "title": "Changing Deployment Modes",
  "slug": "changing-deployment-modes",
  "children": []
}, {
  "title": "Key Differences",
  "slug": "key-differences",
  "children": []
}, {
  "title": "Development Mode",
  "slug": "development-mode",
  "children": []
}, {
  "title": "Production Mode",
  "slug": "production-mode",
  "children": [{
    "title": "Key Components",
    "slug": "key-components",
    "children": []
  }, {
    "title": "Multi-Availability Zone Deployment",
    "slug": "multi-availability-zone-deployment",
    "children": []
  }, {
    "title": "Security and Network Isolation",
    "slug": "security-and-network-isolation",
    "children": []
  }]
}, {
  "title": "Cost Implications",
  "slug": "cost-implications",
  "children": []
}, {
  "title": "Customization",
  "slug": "customization",
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





<Alert type="success" title="WHAT YOU'LL LEARN" mdxType="Alert">
<ul>
<li parentName="ul">{`What deployment modes Webiny supports`}</li>
<li parentName="ul">{`How development mode uses the default VPC`}</li>
<li parentName="ul">{`How production mode uses a custom VPC with private subnets`}</li>
<li parentName="ul">{`When to use each mode`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`Webiny projects support two deployment modes: `}<strong parentName="p">{`development`}</strong>{` and `}<strong parentName="p">{`production`}</strong>{`. These modes deploy different network and security configurations to balance cost and security based on your environment’s needs.`}</p>
<p><strong parentName="p">{`Development Mode`}</strong></p>
<ul>
<li parentName="ul">{`Default for all environments`}</li>
<li parentName="ul">{`Simplified infrastructure for faster deployments`}</li>
<li parentName="ul">{`Lambda functions deployed without VPC`}</li>
<li parentName="ul">{`OpenSearch deployed in single availability zone`}</li>
</ul>
<p><strong parentName="p">{`Production Mode`}</strong></p>
<ul>
<li parentName="ul">{`Automatically used for `}<inlineCode parentName="li">{`prod`}</inlineCode>{` and `}<inlineCode parentName="li">{`production`}</inlineCode>{` environments`}</li>
<li parentName="ul">{`Can be customized via `}<_Link href="/docs/reference/extensions#production-environments"><inlineCode parentName="li">{`ProductionEnvironments`}</inlineCode></_Link>{` extension`}</li>
<li parentName="ul">{`Enhanced security and high availability`}</li>
<li parentName="ul">{`Lambda functions deployed inside custom VPC with private subnets across three availability zones`}</li>
<li parentName="ul">{`OpenSearch deployed with three data nodes across three availability zones`}</li>
<li parentName="ul">{`Additional security controls and monitoring`}</li>
</ul>
<p>{`Deployment modes primarily affect the Core and API project applications (VPC configuration, database placement). The Admin project application uses the same infrastructure configuration across all environments.`}</p>
<_Heading level={2} id={"mode-selection"} nextElement={{
      "type": "paragraph"
    }}>Mode Selection</_Heading>
<p>{`By default, Webiny uses development mode for all environments. Production mode is automatically activated when deploying to environments named `}<inlineCode parentName="p">{`prod`}</inlineCode>{` or `}<inlineCode parentName="p">{`production`}</inlineCode>{`.`}</p>
<p>{`You can customize which environments use production mode via the `}<_Link href="/docs/reference/extensions#production-environments"><inlineCode parentName="p">{`ProductionEnvironments`}</inlineCode></_Link>{` extension in your `}<inlineCode parentName="p">{`webiny.config.tsx`}</inlineCode>{`.`}</p>
<_Heading level={2} id={"changing-deployment-modes"} nextElement={{
      "type": "paragraph"
    }}>Changing Deployment Modes</_Heading>
<p>{`Once you deploy to an environment with a specific deployment mode, it cannot be changed. You can only adjust the deployment mode when deploying to a brand new environment.`}</p>
<p>{`For flexibility and cost savings, developers often use development mode in their dev environments, then switch to production mode for staging and production environments.`}</p>
<_Heading level={2} id={"key-differences"} nextElement={{
      "type": "paragraph"
    }}>Key Differences</_Heading>
<p>{`The primary differences between modes are:`}</p>
<ul>
<li parentName="ul"><strong parentName="li">{`VPC Configuration:`}</strong>{` Development uses the default VPC; production creates a custom VPC`}</li>
<li parentName="ul"><strong parentName="li">{`Subnet Access:`}</strong>{` Development uses public subnets; production uses private subnets for Lambda and databases`}</li>
<li parentName="ul"><strong parentName="li">{`Availability Zones:`}</strong>{` Development uses single AZ for OpenSearch; production uses three AZs with three data nodes`}</li>
<li parentName="ul"><strong parentName="li">{`Security Posture:`}</strong>{` Production isolates resources from public internet access via private subnets`}</li>
</ul>
<p>{`These differences apply to the infrastructure that hosts your GraphQL API and background tasks. The Admin Area infrastructure is identical across both modes, as it serves static files through CloudFront and S3.`}</p>
<_Heading level={2} id={"development-mode"} nextElement={{
      "type": "paragraph"
    }}>Development Mode</_Heading>
<p>{`Development mode deploys your infrastructure into the AWS default VPC, which is automatically created for every AWS account. This mode uses public subnets across multiple availability zones, providing a simple and cost-effective setup for development, testing, and staging environments.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`VPCs require understanding of AWS networking concepts including regions, availability zones, subnets, and gateways. See `}<a parentName="p" {...{
          "href": "https://aws.amazon.com/vpc/"
        }}>{`AWS VPC documentation`}</a>{` for background information.`}</p>
</Alert>
<Image src={devMode} title="Development Mode Infrastructure" shadow={false} mdxType="Image" />
<p>{`The default VPC consists of three public subnets spanning three availability zones. All subnets are public, meaning they can send and receive traffic directly to the public internet through an Internet Gateway.`}</p>
<p><strong parentName="p">{`Lambda Functions:`}</strong>{` AWS automatically runs Lambda functions across multiple availability zones for high availability. Functions can access the internet directly through the Internet Gateway.`}</p>
<p><strong parentName="p">{`Amazon OpenSearch Service:`}</strong>{` Deployed in a single availability zone to minimize costs. This is acceptable for development environments but not recommended for production workloads.`}</p>
<p><strong parentName="p">{`Security:`}</strong>{` All resources in development mode are deployed in public subnets, meaning they have direct internet access. While this simplifies development, it may not meet security requirements for production environments.`}</p>
<_Heading level={2} id={"production-mode"} nextElement={{
      "type": "paragraph"
    }}>Production Mode</_Heading>
<p>{`Production mode deploys your infrastructure into a custom VPC with a combination of public and private subnets across three availability zones. This configuration improves security by isolating mission-critical resources from direct public internet access while maintaining high availability.`}</p>
<Image src={prodMode} title="Production Mode Infrastructure" shadow={false} mdxType="Image" />
<p>{`The custom VPC consists of one public subnet and three private subnets across three availability zones, following AWS best practices for high availability.`}</p>
<_Heading level={3} id={"key-components"} nextElement={{
      "type": "paragraph"
    }}>Key Components</_Heading>
<p><strong parentName="p">{`Public Subnet:`}</strong>{` Contains the NAT Gateway, which forwards internet-bound traffic from private subnets to the Internet Gateway.`}</p>
<p><strong parentName="p">{`Private Subnets:`}</strong>{` Host Lambda functions and Amazon OpenSearch Service. These resources are not directly accessible from the public internet, improving security.`}</p>
<p><strong parentName="p">{`NAT Gateway:`}</strong>{` Enables Lambda functions in private subnets to make outbound requests to internet-facing AWS services (DynamoDB, S3, Cognito) while preventing inbound access from the internet.`}</p>
<p><strong parentName="p">{`Internet Gateway:`}</strong>{` Provides internet connectivity for the NAT Gateway and routes responses back to resources in private subnets.`}</p>
<_Heading level={3} id={"multi-availability-zone-deployment"} nextElement={{
      "type": "paragraph"
    }}>Multi-Availability Zone Deployment</_Heading>
<p>{`Resources are deployed across three availability zones for high availability and fault tolerance. If one AZ experiences an outage, traffic automatically routes to resources in other AZs, keeping your application operational.`}</p>
<p><strong parentName="p">{`Amazon OpenSearch Service:`}</strong>{` Deployed across three AZs with three data nodes (one per AZ), ensuring data availability even if an entire AZ fails. This follows AWS best practices for production workloads.`}</p>
<p><strong parentName="p">{`Lambda Functions:`}</strong>{` AWS automatically distributes Lambda executions across AZs, providing built-in redundancy.`}</p>
<Alert type="warning" mdxType="Alert">
<p>{`Three-AZ deployments incur additional costs because resources are replicated across zones. Amazon OpenSearch Service runs three data nodes instead of one, tripling the compute and storage costs for the search cluster.`}</p>
</Alert>
<_Heading level={3} id={"security-and-network-isolation"} nextElement={{
      "type": "paragraph"
    }}>Security and Network Isolation</_Heading>
<p>{`Private subnets isolate databases and Lambda functions from direct public internet access, reducing the attack surface. Resources can only be accessed through the application’s API endpoints (CloudFront and API Gateway), which are protected by authentication and authorization mechanisms.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`Lambda functions in private subnets communicate with DynamoDB, S3, and Cognito over the public internet. For enhanced security, consider using `}<a parentName="p" {...{
          "href": "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/vpc-endpoints-dynamodb.html"
        }}>{`VPC endpoints for DynamoDB`}</a>{` to keep traffic within AWS’s network.`}</p>
</Alert>
<_Heading level={2} id={"cost-implications"} nextElement={{
      "type": "paragraph"
    }}>Cost Implications</_Heading>
<p>{`Development mode is designed for lower costs, suitable for testing and staging environments. Production mode incurs additional costs for:`}</p>
<ul>
<li parentName="ul">{`NAT Gateway usage (data transfer charges)`}</li>
<li parentName="ul">{`Three-AZ OpenSearch deployment (three data nodes instead of one)`}</li>
<li parentName="ul">{`Enhanced monitoring and logging resources`}</li>
</ul>
<p>{`Choose development mode for non-production environments and production mode for your live environment.`}</p>
<_Heading level={2} id={"customization"} nextElement={{
      "type": "paragraph"
    }}>Customization</_Heading>
<p>{`The production VPC configuration provides a solid foundation for most use cases, but your organization may require additional resources or different configurations. You can customize the VPC setup through Webiny’s infrastructure-as-code configuration files.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;