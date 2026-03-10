/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Use Existing Amazon VPC",
  "description": "Learn how to deploy a Webiny project into an existing Amazon Virtual Private Cloud (Amazon VPC).",
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
  "children": [{
    "title": "1. Core (apps/core)",
    "slug": "1-core-apps-core",
    "children": []
  }, {
    "title": "2. API (apps/api)",
    "slug": "2-api-apps-api",
    "children": []
  }, {
    "title": "3. Admin (apps/admin)",
    "slug": "3-admin-apps-admin",
    "children": []
  }, {
    "title": "4. Website (apps/website)",
    "slug": "4-website-apps-website",
    "children": []
  }]
}, {
  "title": "Testing",
  "slug": "testing",
  "children": []
}, {
  "title": "Additional Notes",
  "slug": "additional-notes",
  "children": [{
    "title": "Internet Gateway / NAT Gateway Deployment",
    "slug": "internet-gateway-nat-gateway-deployment",
    "children": []
  }, {
    "title": "VPC Endpoints",
    "slug": "vpc-endpoints",
    "children": []
  }]
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
const CanIUseThis = makeShortcode("CanIUseThis");
const WhatYouWillLearn = makeShortcode("WhatYouWillLearn");
const Alert = makeShortcode("Alert");
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


<CanIUseThis enterprise={true} since={"5.34.6"} mdxType="CanIUseThis" />
<WhatYouWillLearn mdxType="WhatYouWillLearn">
<ul>
<li parentName="ul">{`how to deploy a Webiny project into an existing Amazon Virtual Private Cloud (Amazon VPC)`}</li>
</ul>
</WhatYouWillLearn>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`When a Webiny project is deployed in `}<_Link href="/docs/5.x/architecture/deployment-modes/introduction">{`production mode`}</_Link>{`, it is deployed into a new `}<a parentName="p" {...{
        "href": "https://aws.amazon.com/vpc/"
      }}>{`Amazon Virtual Private Cloud (Amazon VPC)`}</a>{`, with already configured public and private subnets, security groups, and so on.`}</p>
<p>{`And although this may work for multiple types of users and projects, when it comes to enterprise organizations, often times a fully configured Amazon VPC is already in place and there’s no need to create a new one. In those cases, deploying a Webiny project into the existing Amazon VPC makes more sense.`}</p>
<p>{`In this article, we describe how enterprise organizations can deploy their Webiny project into an existing Amazon VPC.`}</p>
<Alert type={"info"} mdxType="Alert">
<p>{`When it comes to the code, this article tries to keep as simple as possible. For a more advanced example, one which demonstrates how to introduce better code organization and make the code more maintainable, please check out `}<a parentName="p" {...{
          "href": "https://github.com/webiny/webiny-examples/tree/master/use-existing-amazon-vpc-advanced-usage"
        }}>{`this advanced usage example`}</a>{`.`}</p>
</Alert>
<_Heading level={2} id={"configuration"} nextElement={{
      "type": "paragraph"
    }}>Configuration</_Heading>
<p>{`In order to deploy Webiny into an existing Amazon VPC, we need to apply four configuration changes to four default project applications that are included in every Webiny project:`}</p>
<ol>
<li parentName="ol">{`Core (`}<inlineCode parentName="li">{`apps/core`}</inlineCode>{`)`}</li>
<li parentName="ol">{`API (`}<inlineCode parentName="li">{`apps/api`}</inlineCode>{`)`}</li>
<li parentName="ol">{`Admin (`}<inlineCode parentName="li">{`apps/admin`}</inlineCode>{`)`}</li>
<li parentName="ol">{`Website (`}<inlineCode parentName="li">{`apps/website`}</inlineCode>{`)`}</li>
</ol>
<p>{`For all applications, changes will be applied in application’s respective `}<inlineCode parentName="p">{`webiny.application.ts`}</inlineCode>{` file. Note that all the changes are essentially the same: we use the `}<inlineCode parentName="p">{`vpc.existingVpc`}</inlineCode>{` option to pass relevant existing Amazon VPC-related resources: `}<a parentName="p" {...{
        "href": "https://docs.aws.amazon.com/vpc/latest/userguide/configure-subnets.html"
      }}>{`private subnet`}</a>{` and `}<a parentName="p" {...{
        "href": "https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html"
      }}>{`security group`}</a>{` IDs.`}</p>
<p>{`Let’s take a look at the changes that need to be made.`}</p>
<Alert type={"info"} mdxType="Alert">
<p>{`The following examples were created using a brand new Webiny project, initialized with the `}<_Link href="/docs/5.x/architecture/introduction#different-database-setups">{`Amazon DynamoDB + Amazon OpenSearch database setup`}</_Link>{`. That’s why we’ll encounter the `}<inlineCode parentName="p">{`openSearch`}</inlineCode>{` flag (set to `}<inlineCode parentName="p">{`true`}</inlineCode>{`) in Core and API applications’ `}<inlineCode parentName="p">{`webiny.application.ts`}</inlineCode>{` configuration files.`}</p>
<p>{`Projects that are using the Amazon DynamoDB setup don’t have this parameter set.`}</p>
</Alert>
<Alert type={"danger"} mdxType="Alert">
<p>{`Changing VPC settings on an existing Amazon OpenSearch cluster may cause a complete redeployment, causing all data to be lost! Check out the `}<a parentName="p" {...{
          "href": "https://docs.aws.amazon.com/opensearch-service/latest/developerguide/vpc.html"
        }}>{`Launching your Amazon OpenSearch Service domains within a VPC`}</a>{` article to learn more.`}</p>
</Alert>
<_Heading level={3} id={"1-core-apps-core"} nextElement={{
      "type": "paragraph"
    }}>1. Core (<code>apps/core</code>)</_Heading>
<p>{`The Core application’s `}<inlineCode parentName="p">{`webiny.application.ts`}</inlineCode>{` file should look like the following:`}</p>
<Editor title="apps/core/webiny.application.ts" lang="diff-ts" mdxType="Editor">
{`- import { createCoreApp } from "@webiny/serverless-cms-aws";
+ import { createCoreApp } from "@webiny/serverless-cms-aws/enterprise";

+ const OPENSEARCH_PRIVATE_SUBNETS = ["private-subnet-id-1", "private-subnet-id-2"];
+ const OPENSEARCH_SECURITY_GROUPS = ["security-group-id-1"];
+
+ const LAMBDA_FUNCTIONS_PRIVATE_SUBNETS = ["private-subnet-id-1", "private-subnet-id-2"];
+ const LAMBDA_FUNCTIONS_SECURITY_GROUPS = ["security-group-id-1"];

export default createCoreApp({
    pulumiResourceNamePrefix: "wby-",
    openSearch: true, // Only present in Amazon DynamoDB + Amazon OpenSearch database setup.
+   vpc: {
+       useExistingVpc: {
+           # Don't get confused with \`elasticSearch\` being used in the name.
+           # This will still work for Amazon DynamoDB + Amazon OpenSearch database setup.
+           elasticSearchDomainVpcConfig: {
+               subnetIds: OPENSEARCH_PRIVATE_SUBNETS,
+               securityGroupIds: OPENSEARCH_SECURITY_GROUPS
+           },
+           lambdaFunctionsVpcConfig: {
+               subnetIds: LAMBDA_FUNCTIONS_PRIVATE_SUBNETS,
+               securityGroupIds: LAMBDA_FUNCTIONS_SECURITY_GROUPS
+           }
+       }
+   }
});`}
</Editor>
<p>{`Note that, if the Webiny project is being deployed into the production environment, two private subnets need to specified via `}<inlineCode parentName="p">{`OPENSEARCH_PRIVATE_SUBNETS`}</inlineCode>{` and `}<inlineCode parentName="p">{`LAMBDA_FUNCTIONS_PRIVATE_SUBNETS`}</inlineCode>{` arrays. This is because the OpenSearch cluster that Webiny deploys relies on two instances that are deployed into two different private subnets. For environments other than production, specifying a single private subnet will suffice.`}</p>
<Alert type={"info"} mdxType="Alert">
<p>{`Production deployment means deploying your Webiny project into `}<inlineCode parentName="p">{`prod`}</inlineCode>{` environment, via the `}<a parentName="p" {...{
          "href": "https://www.webiny.com/docs/5.x/core-development-concepts/basics/project-deployment"
        }}><inlineCode parentName="a">{`webiny deploy`}</inlineCode></a>{` command: `}<inlineCode parentName="p">{`yarn webiny deploy --env prod`}</inlineCode>{`.`}</p>
<p>{`More on the development and production modes can be found here:
`}<a parentName="p" {...{
          "href": "https://www.webiny.com/docs/5.x/architecture/deployment-modes/introduction"
        }}>{`https://www.webiny.com/docs/5.x/architecture/deployment-modes/introduction`}</a></p>
</Alert>
<Alert type={"info"} mdxType="Alert">
<p>{`In the above code, we can also utilize the `}<inlineCode parentName="p">{`process.env.WEBINY_ENV`}</inlineCode>{` environment variable in order to determine into
which environment a Webiny project is being deployed. This can enable us to specify private subnets conditionally,
using different values depending on the environment.`}</p>
</Alert>
<_Heading level={3} id={"2-api-apps-api"} nextElement={{
      "type": "paragraph"
    }}>2. API (<code>apps/api</code>)</_Heading>
<p>{`The API application’s `}<inlineCode parentName="p">{`webiny.application.ts`}</inlineCode>{` file should look like the following:`}</p>
<Editor title="apps/api/webiny.application.ts" lang="diff-ts" mdxType="Editor">
{`- import { createApiApp } from "@webiny/serverless-cms-aws";
+ import { createApiApp } from "@webiny/serverless-cms-aws/enterprise";
+
+ const LAMBDA_FUNCTIONS_PRIVATE_SUBNETS = ["private-subnet-id-1", "private-subnet-id-2"];
+ const LAMBDA_FUNCTIONS_SECURITY_GROUPS = ["security-group-id-1"];

export default createApiApp({
    pulumiResourceNamePrefix: "wby-",
    openSearch: true,  // Only present in Amazon DynamoDB + Amazon OpenSearch database setup.
+   vpc: {
+       useExistingVpc: {
+           lambdaFunctionsVpcConfig: {
+               subnetIds: LAMBDA_FUNCTIONS_PRIVATE_SUBNETS,
+               securityGroupIds: LAMBDA_FUNCTIONS_SECURITY_GROUPS
+           }
+       }
+   }
});`}
</Editor>
<p>{`As we can see, in this configuration file we’re providing the necessary VPC-related parameters for AWS Lambda functions that the application deploys.`}</p>
<_Heading level={3} id={"3-admin-apps-admin"} nextElement={{
      "type": "paragraph"
    }}>3. Admin (<code>apps/admin</code>)</_Heading>
<p>{`The Admin application’s `}<inlineCode parentName="p">{`webiny.application.ts`}</inlineCode>{` file should look like the following:`}</p>
<Editor title="apps/admin/webiny.application.ts" lang="diff-ts" mdxType="Editor">
{`- import { createAdminApp } from "@webiny/serverless-cms-aws";
+ import { createAdminApp } from "@webiny/serverless-cms-aws/enterprise";

export default createAdminApp({
    pulumiResourceNamePrefix: "wby-"
});`}
</Editor>
<p>{`In this config, no VPC-related parameters need to be specified. Essentially it’s the same config that users have when they create a brand new Webiny project, except this time the `}<inlineCode parentName="p">{`createAdminApp`}</inlineCode>{` function is imported from the `}<inlineCode parentName="p">{`enterprise`}</inlineCode>{` folder.`}</p>
<_Heading level={3} id={"4-website-apps-website"} nextElement={{
      "type": "paragraph"
    }}>4. Website (<code>apps/website</code>)</_Heading>
<p>{`The Website application’s `}<inlineCode parentName="p">{`webiny.application.ts`}</inlineCode>{` file should look like the following:`}</p>
<Editor title="apps/website/webiny.application.ts" lang="diff-ts" mdxType="Editor">
{`- import { createWebsiteApp } from "@webiny/serverless-cms-aws";
+ import { createWebsiteApp } from "@webiny/serverless-cms-aws/enterprise";
+
+ const LAMBDA_FUNCTIONS_PRIVATE_SUBNETS = ["private-subnet-id-1", "private-subnet-id-2"];
+ const LAMBDA_FUNCTIONS_SECURITY_GROUPS = ["security-group-id-1"];

export default createWebsiteApp({
    pulumiResourceNamePrefix: "wby-",
+   vpc: {
+       useExistingVpc: {
+           lambdaFunctionsVpcConfig: {
+               subnetIds: LAMBDA_FUNCTIONS_PRIVATE_SUBNETS,
+               securityGroupIds: LAMBDA_FUNCTIONS_SECURITY_GROUPS
+           }
+       }
+   }
});`}
</Editor>
<p>{`Like with the `}<a parentName="p" {...{
        "href": "https://www.notion.so/Deploying-Webiny-Into-An-Existing-Amazon-VPC-fb0b596143614279bf56c96432f3d7ae"
      }}>{`API`}</a>{` project application, again, in this configuration file we’re providing the necessary VPC-related parameters for AWS Lambda functions that the project application deploys.`}</p>
<_Heading level={2} id={"testing"} nextElement={{
      "type": "paragraph"
    }}>Testing</_Heading>
<p>{`Once the above changes have been applied, we’re ready to do a test deployment, which can be done via the `}<_Link href="/docs/5.x/core-development-concepts/basics/project-deployment"><inlineCode parentName="p">{`webiny deploy`}</inlineCode></_Link>{` command:`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`yarn webiny deploy --env prod`}
</Editor>
<p>{`At the end of the deployment process, you should receive relevant URLs in the terminal, where the installation process can be completed.`}</p>
<Alert type={"info"} mdxType="Alert">
<p>{`For more information on installing Webiny, check out the `}<a parentName="p" {...{
          "href": "https://www.webiny.com/docs/get-started/install-webiny"
        }}>{`Install Webiny`}</a>{` article.`}</p>
</Alert>
<_Heading level={2} id={"additional-notes"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Additional Notes</_Heading>
<_Heading level={3} id={"internet-gateway-nat-gateway-deployment"} nextElement={{
      "type": "paragraph"
    }}>Internet Gateway / NAT Gateway Deployment</_Heading>
<p>{`Note that for a Webiny project to work as expected, an Amazon VPC must have an `}<a parentName="p" {...{
        "href": "https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html"
      }}>{`Internet`}</a>{` and `}<a parentName="p" {...{
        "href": "https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html"
      }}>{`NAT`}</a>{` gateways deployed. This is because access to public internet is required on a couple of occasions:`}</p>
<ol>
<li parentName="ol"><strong parentName="li">{`Amazon Cognito`}</strong>{` - Webiny’s application code interacts with Amazon Cognito via AWS SDK. May not be needed if the organization doesn’t plan to rely on Amazon Cognito as their identity provider.`}</li>
<li parentName="ol"><strong parentName="li">{`Amazon CloudFront`}</strong>{` - Webiny’s application code interacts with Amazon CloudFront via AWS SDK`}</li>
<li parentName="ol"><strong parentName="li">{`Webiny Control Panel (WCP)`}</strong>{` - Webiny Control Panel (WCP)-linked Webiny projects also frequently interact with app’s public HTTP API (`}<inlineCode parentName="li">{`api.webiny.com`}</inlineCode>{`)`}</li>
<li parentName="ol"><strong parentName="li">{`Webiny’s Prerendering Service`}</strong>{` - for website performance reasons, whenever a user publishes a page created with Webiny’s Page Builder application, behind the scenes, an AWS Lambda function is triggered, which issues HTTP requests to published page’s URL (a public CloudFront URL). May not be needed if the organization doesn’t plan to use the Page Builder application.`}</li>
</ol>
<_Heading level={3} id={"vpc-endpoints"} nextElement={{
      "type": "paragraph"
    }}>VPC Endpoints</_Heading>
<p>{`Users can use `}<a parentName="p" {...{
        "href": "https://docs.aws.amazon.com/whitepapers/latest/aws-privatelink/what-are-vpc-endpoints.html"
      }}>{`Amazon VPC endpoints`}</a>{` in order to further secure communication between different services a Webiny project is relying on. At the moment, this is possible for:`}</p>
<ol>
<li parentName="ol">{`DynamoDB (gateway)`}</li>
<li parentName="ol">{`S3 (gateway)`}</li>
<li parentName="ol">{`SQS (interface)`}</li>
<li parentName="ol">{`EventBridge (interface)`}</li>
</ol>
<p>{`Note that VPC endpoints are configured within the provided existing Amazon VPC. This is mainly because organizations have full control of their environment, and are able to do this.`}</p>
<Alert type={"info"} mdxType="Alert">
<p>{`In case Amazon VPC endpoints need to be created via a Webiny project and its cloud infrastructure code, this can be achieved with a couple of minor additions in the Core application’s `}<a parentName="p" {...{
          "href": "https://github.com/webiny/webiny-js/blob/v5.34.5/packages/cwp-template-aws/template/ddb-es/apps/core/webiny.application.ts"
        }}><inlineCode parentName="a">{`webiny.application.ts`}</inlineCode></a>{` configuration file.`}</p>
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