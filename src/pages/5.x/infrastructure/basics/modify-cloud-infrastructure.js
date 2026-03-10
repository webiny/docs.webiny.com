/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Modify Cloud Infrastructure",
  "description": "Learn how to modify cloud infrastructure resources deployed by Webiny.",
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
  "title": "Examples",
  "slug": "examples",
  "children": [{
    "title": "Tagging Cloud Infrastructure Resources",
    "slug": "tagging-cloud-infrastructure-resources",
    "children": []
  }, {
    "title": "Pulumi Resource Name Prefixes",
    "slug": "pulumi-resource-name-prefixes",
    "children": []
  }, {
    "title": "Retrieving the Deployment Environment",
    "slug": "retrieving-the-deployment-environment",
    "children": []
  }, {
    "title": "Defining Multiple Production Environments",
    "slug": "defining-multiple-production-environments",
    "children": []
  }, {
    "title": "Determine if the Current Environment Is Production",
    "slug": "determine-if-the-current-environment-is-production",
    "children": []
  }, {
    "title": "Increasing Memory Size for AWS Lambda Functions",
    "slug": "increasing-memory-size-for-aws-lambda-functions",
    "children": []
  }, {
    "title": "Modifying AWS IAM Roles",
    "slug": "modifying-aws-iam-roles",
    "children": []
  }, {
    "title": "Amazon OpenSearch (ElasticSearch) Service",
    "slug": "amazon-open-search-elastic-search-service",
    "children": [{
      "title": "Adjusting Configuration",
      "slug": "adjusting-configuration"
    }, {
      "title": "Using a Shared Amazon OpenSearch Service Domain",
      "slug": "using-a-shared-amazon-open-search-service-domain"
    }]
  }, {
    "title": "Other",
    "slug": "other",
    "children": [{
      "title": "Creating a Cron Job With AWS Lambda and Amazon CloudWatch",
      "slug": "creating-a-cron-job-with-aws-lambda-and-amazon-cloud-watch"
    }, {
      "title": "Adjusting Amazon CloudFront Distribution Configuration",
      "slug": "adjusting-amazon-cloud-front-distribution-configuration"
    }]
  }]
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



<Alert type="success" title="What you’ll learn" mdxType="Alert">
<ul>
<li parentName="ul">{`how to modify cloud infrastructure resources deployed by Webiny`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`Users use the `}<_Link href="/docs/5.x/core-development-concepts/basics/project-deployment"><inlineCode parentName="p">{`webiny deploy`}</inlineCode></_Link>{` command to deploy their Webiny project, into an `}<_Link href="/docs/5.x/core-development-concepts/basics/project-deployment#environments">{`environment`}</_Link>{` of their choice. During the deployment, apart from building the actual project applications, the command also ensures that a set of required cloud infrastructure resources is deployed.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`To deploy necessary cloud infrastructure resources, by default, Webiny relies on Pulumi, a modern infrastructure as code framework. Find out more in the following `}<_Link href="/docs/5.x/infrastructure/pulumi-iac/iac-with-pulumi">{`IaC with Pulumi`}</_Link>{` key topic.`}</p>
</Alert>
<Alert type="info" mdxType="Alert">
<p>{`Read more about the cloud infrastructure resources that get deployed into your AWS account in our `}<_Link href="/docs/5.x/architecture/introduction">{`Cloud Infrastructure`}</_Link>{` key topics section.`}</p>
</Alert>
<p>{`And although the cloud infrastructure resources that Webiny deploys are already configured in the best possible manner, there are still cases where some modifications might be needed. In some cases even, the deployed cloud infrastructure needs to be expanded by introducing additional resources into the mix.`}</p>
<p>{`To do this, we rely on four `}<inlineCode parentName="p">{`webiny.application.ts`}</inlineCode>{` configuration files, located in each of the four project application folders in every Webiny project:`}</p>
<ol>
<li parentName="ol"><strong parentName="li">{`Core`}</strong>{` (`}<a parentName="li" {...{
          "href": "https://github.com/webiny/webiny-js/blob/v5.29.0/packages/cwp-template-aws/template/ddb/apps/core/webiny.application.ts"
        }}><inlineCode parentName="a">{`apps/core/webiny.application.ts`}</inlineCode></a>{`)`}</li>
<li parentName="ol"><strong parentName="li">{`API`}</strong>{` (`}<a parentName="li" {...{
          "href": "https://github.com/webiny/webiny-js/blob/v5.29.0/packages/cwp-template-aws/template/ddb/apps/api/webiny.application.ts"
        }}><inlineCode parentName="a">{`apps/api/webiny.application.ts`}</inlineCode></a>{`)`}</li>
<li parentName="ol"><strong parentName="li">{`Admin`}</strong>{` (`}<a parentName="li" {...{
          "href": "https://github.com/webiny/webiny-js/blob/v5.29.0/packages/cwp-template-aws/template/common/apps/admin/webiny.application.ts"
        }}><inlineCode parentName="a">{`apps/admin/webiny.application.ts`}</inlineCode></a>{`)`}</li>
<li parentName="ol"><strong parentName="li">{`Website`}</strong>{` (`}<a parentName="li" {...{
          "href": "https://github.com/webiny/webiny-js/blob/v5.29.0/packages/cwp-template-aws/template/common/apps/website/webiny.application.ts"
        }}><inlineCode parentName="a">{`apps/website/webiny.application.ts`}</inlineCode></a>{`)`}</li>
</ol>
<p>{`Which `}<inlineCode parentName="p">{`webiny.application.ts`}</inlineCode>{` config file needs to be changed depends on the nature of the change that needs to be made.`}</p>
<p>{`For example, let’s imagine we want to adjust the configuration of the Amazon S3 bucket that’s deployed for storing files uploaded via Webiny File Manager. Since this bucket is deployed as part of the `}<strong parentName="p">{`Core`}</strong>{` project application, naturally, we’d want to apply changes via the `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/v5.29.0/packages/cwp-template-aws/template/ddb/apps/core/webiny.application.ts"
      }}><inlineCode parentName="a">{`apps/core/webiny.application.ts`}</inlineCode></a>{` configuration file.`}</p>
<p>{`The following example demonstrates how the bucket can be adjusted to enable `}<a parentName="p" {...{
        "href": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/Versioning.html"
      }}>{`object versioning`}</a>{`, which essentially enables keeping multiple variants of an object in the same bucket:`}</p>
<Editor title="apps/core/webiny.application.ts" lang="ts" mdxType="Editor">
{`import * as aws from "@pulumi/aws";
import { createCoreApp } from "@webiny/serverless-cms-aws";

export default createCoreApp({
  // By passing a callback function via the \`pulumi\` parameter, we gain the
  // ability to modify project application's cloud infrastructure resources.
  pulumi: ({ resources }) => {
    // Cloud infrastructure resources can be referenced via the \`resources\`
    // object. We then use resources' \`config\` objects to apply modifications.
    const { fileManagerBucket } = resources;
    fileManagerBucket.config.versioning({ enabled: true });
  }
});`}
</Editor>
<p>{`As we can see, using the `}<inlineCode parentName="p">{`pulumi`}</inlineCode>{` parameter, we’ve passed a relatively simple callback function that enables object versioning in two steps:`}</p>
<ol>
<li parentName="ol">{`references the relevant bucket via the `}<inlineCode parentName="li">{`fileManagerBucket`}</inlineCode>{` const`}</li>
<li parentName="ol">{`uses the reference to enable bucket versioning, via the `}<inlineCode parentName="li">{`fileManagerBucket.config.versioning`}</inlineCode></li>
</ol>
<p>{`Once the above code change has been made, all that is left to do is a redeploy by running the following command:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`# Make sure to replace {env} with the actual name of the environment.
yarn webiny deploy apps/core --env {env}`}
</Editor>
<p>{`With the deployment successfully completed, the object versioning should be enabled for your project (for all files that are uploaded via Webiny File Manager).`}</p>
<Alert type="info" mdxType="Alert">
<p>{`When redeploying, make sure to redeploy the project application within which the changes were actually made. In the above example, we’ve made changes within the `}<strong parentName="p">{`Core`}</strong>{` application’s `}<inlineCode parentName="p">{`webiny.application.ts`}</inlineCode>{` file, meaning the `}<strong parentName="p">{`Core`}</strong>{` application needs to be redeployed in order to actually see the changes.`}</p>
</Alert>
<_Heading level={2} id={"examples"} nextElement={{
      "type": "paragraph"
    }}>Examples</_Heading>
<p>{`In this section, we cover a couple of additional examples of modifying cloud infrastructure resources that get deployed with every Webiny project.`}</p>
<_Heading level={3} id={"tagging-cloud-infrastructure-resources"} nextElement={{
      "type": "paragraph"
    }}>Tagging Cloud Infrastructure Resources</_Heading>
<p>{`The following example shows how to apply tags to all cloud infrastructure resources deployed as part of the `}<strong parentName="p">{`Core`}</strong>{` project application. Note that the same approach can be used for all four applications.`}</p>
<Editor title="apps/core/webiny.application.ts" lang="ts" mdxType="Editor">
{`import * as aws from "@pulumi/aws";
import { createCoreApp } from "@webiny/serverless-cms-aws";
import { tagResources } from "@webiny/pulumi-aws";

export default createCoreApp({
  pulumi: () => {
    // We are assigning Owner and Contact tags, whose values
    // are read from runtime environment variables.
    tagResources({
      Owner: String(process.env["OWNER"]),
      Contact: String(process.env["CONTACT"])
    });
  }
});`}
</Editor>
<Alert type={"info"} mdxType="Alert">
<p>{`Note that the `}<inlineCode parentName="p">{`tagResources`}</inlineCode>{` function applies tags only to resources that can actually be tagged. Full list of resources can be found `}<a parentName="p" {...{
          "href": "https://github.com/webiny/webiny-js/blob/dev/packages/pulumi-aws/src/utils/tagResources.ts#L25"
        }}>{`here`}</a>{`.`}</p>
</Alert>
<_Heading level={3} id={"pulumi-resource-name-prefixes"} nextElement={{
      "type": "paragraph"
    }}>Pulumi Resource Name Prefixes</_Heading>
<p>{`By default, all cloud infrastructure resources deployed by Webiny are prefixed with the `}<inlineCode parentName="p">{`wby-`}</inlineCode>{` prefix. If needed, this prefix can be changed via the `}<inlineCode parentName="p">{`pulumiResourceNamePrefix`}</inlineCode>{` parameter, via the four `}<inlineCode parentName="p">{`webiny.application.ts`}</inlineCode>{` configuration files, located in each of the four project application folders in every Webiny project:`}</p>
<ol>
<li parentName="ol"><strong parentName="li">{`Core`}</strong>{` (`}<a parentName="li" {...{
          "href": "https://github.com/webiny/webiny-js/blob/v5.29.0/packages/cwp-template-aws/template/ddb/apps/core/webiny.application.ts"
        }}><inlineCode parentName="a">{`apps/core/webiny.application.ts`}</inlineCode></a>{`)`}</li>
<li parentName="ol"><strong parentName="li">{`API`}</strong>{` (`}<a parentName="li" {...{
          "href": "https://github.com/webiny/webiny-js/blob/v5.29.0/packages/cwp-template-aws/template/ddb/apps/api/webiny.application.ts"
        }}><inlineCode parentName="a">{`apps/api/webiny.application.ts`}</inlineCode></a>{`)`}</li>
<li parentName="ol"><strong parentName="li">{`Admin`}</strong>{` (`}<a parentName="li" {...{
          "href": "https://github.com/webiny/webiny-js/blob/v5.29.0/packages/cwp-template-aws/template/common/apps/admin/webiny.application.ts"
        }}><inlineCode parentName="a">{`apps/admin/webiny.application.ts`}</inlineCode></a>{`)`}</li>
<li parentName="ol"><strong parentName="li">{`Website`}</strong>{` (`}<a parentName="li" {...{
          "href": "https://github.com/webiny/webiny-js/blob/v5.29.0/packages/cwp-template-aws/template/common/apps/website/webiny.application.ts"
        }}><inlineCode parentName="a">{`apps/website/webiny.application.ts`}</inlineCode></a>{`)`}</li>
</ol>
<p>{`For example:`}</p>
<Editor title="apps/core/webiny.application.ts" lang="diff-ts" mdxType="Editor">
{`import { createCoreApp } from "@webiny/serverless-cms-aws";

export default createCoreApp({
+     pulumiResourceNamePrefix: "my-custom-prefix-",
});`}
</Editor>
<p>{`Note that, in the above example, we’ve adjusted the prefix within the Core application’s `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/v5.29.0/packages/cwp-template-aws/template/ddb/apps/core/webiny.application.ts"
      }}><inlineCode parentName="a">{`webiny.application.ts`}</inlineCode></a>{` configuration file, but the same works with other applications as well.`}</p>
<p>{`Furthermore, note that the prefix can also be assigned dynamically, via a callback function. The following example shows how we can dynamically assign the prefix based on the environment name.`}</p>
<Editor title="apps/core/webiny.application.ts" lang="diff-ts" mdxType="Editor">
{`import { createCoreApp } from "@webiny/serverless-cms-aws";

export default createCoreApp({
+    pulumiResourceNamePrefix: ({ env }) => {
+        // We can retrieve the environment name via "run" parameters.
+        if (env.name === "prod") {
+            // Let's add the "prod" into the prefix.
+            return "wby-prod-";
+        }
+
+        // Not production? Just return the default prefix.
+        return "wby-";
+    }
});`}
</Editor>
<_Heading level={3} id={"retrieving-the-deployment-environment"} nextElement={{
      "type": "paragraph"
    }}>Retrieving the Deployment Environment</_Heading>
<p>{`Upon running the `}<_Link href="/docs/5.x/core-development-concepts/basics/project-deployment"><inlineCode parentName="p">{`webiny deploy`}</inlineCode></_Link>{` command, we specify the environment into which we want to deploy our project (or a specific project application). In more complex cases, we may need to retrieve the environment in order to conditionally apply different configuration to our cloud infrastructure.`}</p>
<p>{`The following example shows how we can read the environment into which the application is being deployed.`}</p>
<Editor title="apps/core/webiny.application.ts" lang="diff-ts" mdxType="Editor">
{`import { createCoreApp } from "@webiny/serverless-cms-aws";

export default createCoreApp({
  pulumiResourceNamePrefix: "wby-",
  pulumi: ({ env }) => {
+   // We can retrieve the environment name via the \`env\` parameter.
+   if (env.name === "prod") {
+     // Apply additional configuration.
+   }
  }
});`}
</Editor>
<p>{`Note that, in the above example, we’ve made the changes within the Core application’s `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/v5.29.0/packages/cwp-template-aws/template/ddb/apps/core/webiny.application.ts"
      }}><inlineCode parentName="a">{`webiny.application.ts`}</inlineCode></a>{` configuration file, but the same works with other applications as well.`}</p>
<p>{`Furthermore, this approach can also be used with other parameters, not just `}<inlineCode parentName="p">{`pulumi`}</inlineCode>{`. For example, we can use the same approach when defining the resource name prefix.`}</p>
<Editor title="apps/core/webiny.application.ts" lang="diff-ts" mdxType="Editor">
{`import { createCoreApp } from "@webiny/serverless-cms-aws";

export default createCoreApp({
-    pulumiResourceNamePrefix: "wby-",
+    pulumiResourceNamePrefix: ({ env }) => {
+        // We can retrieve the environment name via the "env" parameter.
+        if (env.name === "prod") {
+            // Let's add the "prod" into the prefix.
+            return "wby-prod-";
+        }
+
+        // Not production? Just return the default prefix.
+        return "wby-";
+    }
});`}
</Editor>
<_Heading level={3} id={"defining-multiple-production-environments"} nextElement={{
      "type": "paragraph"
    }}>Defining Multiple Production Environments</_Heading>
<p>{`Upon running the `}<_Link href="/docs/5.x/core-development-concepts/basics/project-deployment"><inlineCode parentName="p">{`webiny deploy`}</inlineCode></_Link>{` command, when `}<inlineCode parentName="p">{`prod`}</inlineCode>{` is passed as the environment name, a Webiny project is deployed in the so-called `}<a parentName="p" {...{
        "href": "https://www.webiny.com/docs/5.x/architecture/deployment-modes/production"
      }}>{`production deployment mode`}</a>{`.`}</p>
<p>{`On order to use the production deployment mode for environments other than `}<inlineCode parentName="p">{`prod`}</inlineCode>{`, we can use the `}<inlineCode parentName="p">{`productionEnvironments`}</inlineCode>{` parameter. The following example shows how we can use the production mode for the `}<inlineCode parentName="p">{`staging`}</inlineCode>{` environment:`}</p>
<Editor title="apps/core/webiny.application.ts" lang="diff-ts" mdxType="Editor">
{`import { createCoreApp } from "@webiny/serverless-cms-aws";

export default createCoreApp({
  pulumiResourceNamePrefix: "wby-",

  // Treats provided environments as production environments, which
  // are deployed in production deployment mode.
+ productionEnvironments: ["prod", "staging"]
});`}
</Editor>
<p>{`Note that when specifying additional production environments, they should be specified across all project applications, meaning:`}</p>
<ol>
<li parentName="ol"><strong parentName="li">{`Core`}</strong>{` (`}<a parentName="li" {...{
          "href": "https://github.com/webiny/webiny-js/blob/v5.29.0/packages/cwp-template-aws/template/ddb/apps/core/webiny.application.ts"
        }}><inlineCode parentName="a">{`apps/core/webiny.application.ts`}</inlineCode></a>{`)`}</li>
<li parentName="ol"><strong parentName="li">{`API`}</strong>{` (`}<a parentName="li" {...{
          "href": "https://github.com/webiny/webiny-js/blob/v5.29.0/packages/cwp-template-aws/template/ddb/apps/api/webiny.application.ts"
        }}><inlineCode parentName="a">{`apps/api/webiny.application.ts`}</inlineCode></a>{`)`}</li>
<li parentName="ol"><strong parentName="li">{`Admin`}</strong>{` (`}<a parentName="li" {...{
          "href": "https://github.com/webiny/webiny-js/blob/v5.29.0/packages/cwp-template-aws/template/common/apps/admin/webiny.application.ts"
        }}><inlineCode parentName="a">{`apps/admin/webiny.application.ts`}</inlineCode></a>{`)`}</li>
<li parentName="ol"><strong parentName="li">{`Website`}</strong>{` (`}<a parentName="li" {...{
          "href": "https://github.com/webiny/webiny-js/blob/v5.29.0/packages/cwp-template-aws/template/common/apps/website/webiny.application.ts"
        }}><inlineCode parentName="a">{`apps/website/webiny.application.ts`}</inlineCode></a>{`)`}</li>
</ol>
<_Heading level={3} id={"determine-if-the-current-environment-is-production"} nextElement={{
      "type": "paragraph"
    }}>Determine if the Current Environment Is Production</_Heading>
<p>{`In some cases, we may need to check if the environment, into which a project application is being deployed, is a production environment. The following example shows how we can determine if the environment is a production environment.`}</p>
<Editor title="apps/api/webiny.application.ts" lang="ts" mdxType="Editor">
{`import { createApiApp } from "@webiny/serverless-cms-aws";

export default createApiApp({
    pulumiResourceNamePrefix: "wby-",
    pulumi: ({ env, resources }) => {
        // Only in production environments, increase the 
        // memory size of the GraphQL function.
        if (env.isProduction) {
            resources.graphql.functions.graphql.config.memorySize(1024)
        }
    },
});`}
</Editor>
<p>{`Note that the `}<inlineCode parentName="p">{`isProduction`}</inlineCode>{` value is calculated based on the list of production environment names that are defined via the `}<a parentName="p" {...{
        "href": "#defining-multiple-production-environments"
      }}><inlineCode parentName="a">{`productionEnvironments`}</inlineCode></a>{` property.`}</p>
<_Heading level={3} id={"increasing-memory-size-for-aws-lambda-functions"} nextElement={{
      "type": "paragraph"
    }}>Increasing Memory Size for AWS Lambda Functions</_Heading>
<p>{`Increasing the memory size for AWS Lambda functions is a common practice when dealing with performance issues. The following example shows how we can increase the memory size for the `}<strong parentName="p">{`graphql`}</strong>{` function, which is the function responsible for serving Webiny’s GraphQL API:`}</p>
<Editor title="apps/api/webiny.application.ts" lang="diff-ts" mdxType="Editor">
{`import { createApiApp } from "@webiny/serverless-cms-aws";

export default createApiApp({
    pulumiResourceNamePrefix: "wby-",
+   pulumi: ({ resources }) => {
+       // Set memory size to 1024 MB.
+       resources.graphql.functions.graphql.config.memorySize(1024);
+   }
});`}
</Editor>
<_Heading level={3} id={"modifying-aws-iam-roles"} nextElement={{
      "type": "paragraph"
    }}>Modifying AWS IAM Roles</_Heading>
<p>{`The following example demonstrates how we can modify the default AWS IAM role that’s assigned to the AWS Lambda function that represents your GraphQL API (the one accessed via the `}<inlineCode parentName="p">{`https://xyz.cloudfront.net/graphql`}</inlineCode>{` URL).`}</p>
<Editor title="" lang="ts" mdxType="Editor">
{`import * as aws from "@pulumi/aws";
import { createApiApp } from "@webiny/serverless-cms-aws";

export default createApiApp({
  pulumiResourceNamePrefix: "wby-",
  pulumi: ({ resources, addResource }) => {
    const policy = addResource(aws.iam.Policy, {
      name: "ses-policy",
      config: {
        description: "This policy enables access to Amazon SES.",
        policy: {
          Version: "2012-10-17",
          Statement: [
            {
              Effect: "Allow",
              Action: ["ses:SendEmail"],
              Resource: ["arn:aws:ses:*:*:identity/*"]
            }
          ]
        }
      }
    });

    addResource(aws.iam.RolePolicyAttachment, {
      name: "graphql-role-ses-policy-attachment",
      config: {
        role: resources.graphql.role.output.name,
        policyArn: policy.output.arn
      }
    });
  }
});`}
</Editor>
<Alert type="info" mdxType="Alert">
<p>{`To learn more about the default GraphQL API and differences between it and the Headless CMS GraphQL API, please check out the `}<_Link href="/docs/5.x/core-development-concepts/extending-and-customizing/extend-graphql-api#introduction">{`Introduction`}</_Link>{` section of the `}<_Link href="/docs/5.x/core-development-concepts/extending-and-customizing/extend-graphql-api">{`Extend GraphQL API`}</_Link>{` article.`}</p>
</Alert>
<Alert type="info" mdxType="Alert">
<p>{`If you want to learn more about the main GraphQL API and how it works on the cloud infrastructure level, check out the `}<_Link href="/docs/5.x/architecture/api/graphql-requests">{`GraphQL Requests`}</_Link>{` page of the `}<_Link href="/docs/5.x/architecture/api/overview">{`Cloud Infrastructure - API`}</_Link>{` key topics section.`}</p>
</Alert>
<_Heading level={3} id={"amazon-open-search-elastic-search-service"} nextElement={{
      "type": "heading",
      "depth": 4
    }}>Amazon OpenSearch (ElasticSearch) Service</_Heading>
<_Heading level={4} id={"adjusting-configuration"} nextElement={{
      "type": "paragraph"
    }}>Adjusting Configuration</_Heading>
<p>{`Amazon OpenSearch Service is deployed as part of the `}<strong parentName="p">{`Core`}</strong>{` project application. In order to make changes to it, we need to make changes in the `}<inlineCode parentName="p">{`apps/core/webiny.application.ts`}</inlineCode>{` configuration file.`}</p>
<p>{`Note that, depending on the version of Webiny you’re using, you may be using either Amazon OpenSearch Service or Amazon ElasticSearch Service. The following examples cover both cases.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`  `}<a parentName="p" {...{
          "href": "https://aws.amazon.com/opensearch-service/"
        }}>{`Amazon OpenSearch Service`}</a>{` was introduced with Webiny version 5.39.0. If you’re using an older version of Webiny, you’re using Amazon ElasticSearch Service.`}</p>
</Alert>
<h5>{`Amazon OpenSearch Service`}</h5>
<p>{`The following example shows how we can adjust the configuration of the deployed domain when using Amazon OpenSearch Service (for projects created with Webiny version 5.39.0 or greater).`}</p>
<Editor title="apps/core/webiny.application.ts" lang="ts" mdxType="Editor">
{`import * as aws from "@pulumi/aws";
import { createCoreApp } from "@webiny/serverless-cms-aws";
import { isResourceOfType } from "@webiny/pulumi";

export default createCoreApp({
  openSearch: true,

  pulumi: ({ onResource }) => {
    onResource(resource => {
      if (isResourceOfType(resource, aws.opensearch.Domain)) {
        // Set the instance type.
        resource.config.clusterConfig(() => {
          return {
            instanceType: "t3.small.search"
          };
        });

        // Set engine version.
        resource.config.engineVersion("OpenSearch_2.11");

        // Change advanced options.
        resource.config.advancedOptions({
          override_main_response_version: "false",
          "rest.action.multi.allow_explicit_index": "true"
        });

        resource.opts.ignoreChanges = ["advancedOptions", "tags"];
      }
    });
  }
});`}
</Editor>
<h5>{`Amazon ElasticSearch Service`}</h5>
<p>{`The following example shows how we can adjust the configuration of the deployed domain when using Amazon ElasticSearch Service (for projects created before the 5.39.0).`}</p>
<Editor title="apps/core/webiny.application.ts" lang="ts" mdxType="Editor">
{`import * as aws from "@pulumi/aws";
import { createCoreApp } from "@webiny/serverless-cms-aws";
import { isResourceOfType } from "@webiny/pulumi";

export default createCoreApp({
  elasticSearch: true,

  pulumi: ({ onResource }) => {
    onResource(resource => {
      if (isResourceOfType(resource, aws.elasticsearch.Domain)) {
        // Set the instance type.
        resource.config.clusterConfig(() => {
          return {
            instanceType: "t3.small.elasticsearch"
          };
        });

        // Set Elasticsearch version.
        resource.config.elasticsearchVersion("7.7");

        // Change advanced options.
        resource.config.advancedOptions({
          override_main_response_version: "false",
          "rest.action.multi.allow_explicit_index": "true"
        });

        resource.opts.ignoreChanges = ["advancedOptions", "tags"];
      }
    });
  }
});`}
</Editor>
<_Heading level={4} id={"using-a-shared-amazon-open-search-service-domain"} nextElement={{
      "type": "paragraph"
    }}>Using a Shared Amazon OpenSearch Service Domain</_Heading>
<p>{`For development purposes, sometimes it’s reasonable to set up a single Amazon OpenSearch domain that will be shared across multiple environments your Webiny project is deployed into. This can be achieved via the `}<inlineCode parentName="p">{`openSearch`}</inlineCode>{` parameter, via the two `}<inlineCode parentName="p">{`webiny.application.ts`}</inlineCode>{` configuration files:`}</p>
<ol>
<li parentName="ol"><a parentName="li" {...{
          "href": "https://github.com/webiny/webiny-js/blob/v5.39.0/packages/cwp-template-aws/template/ddb/apps/core/webiny.application.ts"
        }}><inlineCode parentName="a">{`apps/core/webiny.application.ts`}</inlineCode></a></li>
<li parentName="ol"><a parentName="li" {...{
          "href": "https://github.com/webiny/webiny-js/blob/v5.39.0/packages/cwp-template-aws/template/ddb/apps/api/webiny.application.ts"
        }}><inlineCode parentName="a">{`apps/api/webiny.application.ts`}</inlineCode></a></li>
</ol>
<Editor title="apps/core/webiny.application.ts" lang="ts" mdxType="Editor">
{`import { createCoreApp } from "@webiny/serverless-cms-aws";

// Here we're listing all environments that will use the shared OpenSearch domain.
const ENVIRONMENTS_USING_SHARED_ES_DOMAIN = ["dev", "other-dev"];

export default createCoreApp({
  pulumiResourceNamePrefix: "wby-",
  openSearch: ({ env }) => {
    // We use the shared Amazon OpenSearch domain only when
    // deploying into "dev" and "other-dev" environments.
    if (ENVIRONMENTS_USING_SHARED_ES_DOMAIN.includes(env.name)) {
      return {
        domainName: "my-opensearch-shared-domain",
        indexPrefix: \`\${env}_\`
      };
    }

    // We need to return \`true\` because we still want Webiny to deploy
    // an Amazon Amazon OpenOpenSearch Service domain. Returning anything other than that will
    // instruct Webiny not to deploy it, which will cause Webiny not
    // to work as expected.
    return true;
  }
});`}
</Editor>
<Editor title="apps/api/webiny.application.ts" lang="ts" mdxType="Editor">
{`import { createApiApp } from "@webiny/serverless-cms-aws";

// Here we're listing all environments that will use the shared OpenSearch domain.
const ENVIRONMENTS_USING_SHARED_ES_DOMAIN = ["dev", "other-dev"];

export default createApiApp({
  pulumiResourceNamePrefix: "wby-",
  openSearch: ({ env }) => {
    // We use the shared Amazon OpenSearch domain only when
    // deploying into "dev" and "other-dev" environments.
    if (ENVIRONMENTS_USING_SHARED_ES_DOMAIN.includes(env.name)) {
      return {
        domainName: "my-opensearch-shared-domain",
        indexPrefix: \`\${env}_\`
      };
    }

    // We need to return \`true\` because we still want Webiny to deploy
    // an Amazon OpenSearch domain. Returning anything other than that will
    // instruct Webiny not to deploy it, which will cause Webiny not
    // to work as expected.
    return true;
  }
});`}
</Editor>
<p>{`Note that the configuration must be applied within both `}<inlineCode parentName="p">{`webiny.application.ts`}</inlineCode>{` files. Once applied, in order for the changes to take effect, redeploying the `}<strong parentName="p">{`Core`}</strong>{` and `}<strong parentName="p">{`API`}</strong>{` applications is required. As usual, this can be done via the `}<_Link href="/docs/5.x/core-development-concepts/basics/project-deployment"><inlineCode parentName="p">{`webiny deploy`}</inlineCode></_Link>{` command:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`yarn webiny deploy core,api --env dev`}
</Editor>
<p>{`Furthermore, note that, upon passing a shared Amazon OpenSearch Service domain, via the `}<inlineCode parentName="p">{`indexPrefix`}</inlineCode>{` property, we can define the prefix that will be used with names of all OpenSearch `}<a parentName="p" {...{
        "href": "https://opensearch.org/docs/latest/im-plugin/"
      }}>{`indexes`}</a>{` for the given environment. This is important because it allows us to have a single Amazon OpenSearch Service domain, but also have separate indexes for each environment. Without this, all environments would share the same indexes, which is not what we want because it would cause data from one environment to be visible in another.`}</p>
<p>{`Finally, note that the sharing of Amazon OpenSearch Service domains is only recommended for development purposes. For production, it’s recommended to have a separate Amazon OpenSearch Service domain for each environment.`}</p>
<h5>{`Cross-AWS Account Amazon OpenSearch Service Domain Sharing`}</h5>
<p>{`The above example demonstrates how to share an Amazon OpenSearch Service domain across multiple environments within the same AWS account. However, in some cases, we may need to share an Amazon OpenSearch Service domain across multiple AWS accounts.`}</p>
<p>{`Unfortunately, at this time, we weren’t able to provide full instructions on how to achieve this. If this is something you need, please reach out via our `}<a parentName="p" {...{
        "href": "https://www.webiny.com/slack"
      }}>{`Community Slack`}</a>{` channel, and we’ll be happy to help you out.`}</p>
<_Heading level={3} id={"other"} nextElement={{
      "type": "heading",
      "depth": 4
    }}>Other</_Heading>
<_Heading level={4} id={"creating-a-cron-job-with-aws-lambda-and-amazon-cloud-watch"} nextElement={{
      "type": "paragraph"
    }}>Creating a Cron Job With AWS Lambda and Amazon CloudWatch</_Heading>
<p>{`In this example, we introduce a new AWS Lambda function which is triggered once every minute.`}</p>
<p>{`Note that the code assumes the AWS Lambda function’s code is located in the `}<inlineCode parentName="p">{`apps/api/myCronJob`}</inlineCode>{` folder. For the full code, please check our `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-examples/tree/master/modifying-cloud-infrastructure/adding-aws-lambda-functions/create-a-cron-job"
      }}>{`webiny-examples`}</a>{` GitHub repository.`}</p>
<Editor title="apps/api/webiny.application.ts" lang="ts" mdxType="Editor">
{`import * as path from "path";
import * as aws from "@pulumi/aws";
import * as pulumi from "@pulumi/pulumi";
import { createApiApp } from "@webiny/serverless-cms-aws";

export default createApiApp({
  pulumiResourceNamePrefix: "wby-",
  pulumi({ paths, addResource }) {
    const role = addResource(aws.iam.Role, {
      name: "my-cron-job-fn-role",
      config: {
        description: "My cron job Lambda function role.",
        assumeRolePolicy: {
          Version: "2012-10-17",
          Statement: [
            {
              Action: "sts:AssumeRole",
              Principal: {
                Service: "lambda.amazonaws.com"
              },
              Effect: "Allow"
            }
          ]
        }
      }
    });

    addResource(aws.iam.RolePolicyAttachment, {
      name: "my-cron-job-fn-role-basic-execution-policy-attachment",
      config: {
        role,
        policyArn: aws.iam.ManagedPolicy.AWSLambdaBasicExecutionRole
      }
    });

    addResource(aws.iam.Policy, {
      name: "my-cron-job-fn-policy",
      config: {
        description: "My cron job Lambda function policy.",
        policy: {
          Version: "2012-10-17",
          Statement: [
            {
              // Not recommended. Always use least-privilege principle.
              Effect: "Allow",
              Action: ["*"],
              Resource: ["*"]
            }
          ]
        }
      }
    });

    addResource(aws.iam.RolePolicyAttachment, {
      name: "my-cron-job-fn-role-policy-attachment",
      config: {
        role,
        policyArn: aws.iam.Policy.myCronJobFnPolicy.arn
      }
    });

    const cronJobFnBuildFolderPath = path.join(paths.workspace, "myCronJob/build");
    addResource(aws.lambda.Function, {
      name: "my-cron-job-fn",
      config: {
        runtime: aws.lambda.Runtime.NodeJS18dX,
        handler: "handler.handler",
        description: "A simple Lambda function that logs time (executed in cron job).",
        role: role.arn,
        timeout: 30,
        memorySize: 512,
        code: new pulumi.asset.AssetArchive({
          ".": new pulumi.asset.FileArchive(cronJobFnBuildFolderPath)
        })
      }
    });

    addResource(aws.cloudwatch.EventRule, {
      name: "my-cron-job-fn-event-rule",
      config: {
        description: "My cron job rule.",
        scheduleExpression: "rate(1 minute)",
        isEnabled: true
      }
    });

    addResource(aws.lambda.Permission, {
      name: "my-cron-job-fn-events-permission",
      config: {
        action: "lambda:InvokeFunction",
        function: simpleCronJobFunction.arn,
        principal: "events.amazonaws.com",
        sourceArn: eventRule.arn
      }
    });

    addResource(aws.cloudwatch.EventTarget, {
      name: "my-cron-job-fn-event-target",
      config: {
        rule: eventRule.name,
        arn: simpleCronJobFunction.arn
      }
    });
  }
});`}
</Editor>
<_Heading level={4} id={"adjusting-amazon-cloud-front-distribution-configuration"} nextElement={{
      "type": "paragraph"
    }}>Adjusting Amazon CloudFront Distribution Configuration</_Heading>
<p>{`A single Webiny project deploys four Amazon CloudFront distributions: one for `}<_Link href="/docs/5.x/architecture/api/overview">{`API`}</_Link>{`, one for `}<_Link href="/docs/5.x/architecture/admin/overview">{`Admin`}</_Link>{`, and two for `}<_Link href="/docs/5.x/architecture/website/overview">{`Website`}</_Link>{` project application.`}</p>
<p>{`Therefore, if there’s a need to apply a change across all distributions, the change needs to be applied via the following three `}<inlineCode parentName="p">{`webiny.application.ts`}</inlineCode>{` configuration files:`}</p>
<ol>
<li parentName="ol"><a parentName="li" {...{
          "href": "https://github.com/webiny/webiny-js/blob/v5.29.0/packages/cwp-template-aws/template/ddb/apps/api/webiny.application.ts"
        }}><inlineCode parentName="a">{`apps/api/webiny.application.ts`}</inlineCode></a></li>
<li parentName="ol"><a parentName="li" {...{
          "href": "https://github.com/webiny/webiny-js/blob/v5.29.0/packages/cwp-template-aws/template/common/apps/admin/webiny.application.ts"
        }}><inlineCode parentName="a">{`apps/admin/webiny.application.ts`}</inlineCode></a></li>
<li parentName="ol"><a parentName="li" {...{
          "href": "https://github.com/webiny/webiny-js/blob/v5.29.0/packages/cwp-template-aws/template/common/apps/website/webiny.application.ts"
        }}><inlineCode parentName="a">{`apps/website/webiny.application.ts`}</inlineCode></a></li>
</ol>
<p>{`The following example demonstrates how we can adjust the TLS version for the distribution that’s deployed as part of the API project application.`}</p>
<Editor title="apps/api/webiny.application.ts" lang="ts" mdxType="Editor">
{`import { createApiApp } from "@webiny/serverless-cms-aws";

export default createApiApp({
  pulumi({ resources }) {
    resources.cloudfront.config.viewerCertificate(config => {
      return { ...config, minimumProtocolVersion: "TLSv1.2_2021" };
    });
  }
});`}
</Editor>
<p>{`Following the above example, say we want to add additional and serve specific static files from our `}<inlineCode parentName="p">{`website`}</inlineCode>{` application, this can often be the case if you need to host files like a sitemap, domain validation files and similar. Adding those files to `}<inlineCode parentName="p">{`website/public`}</inlineCode>{` folder will get them deployed to your S3 that’s serving the `}<inlineCode parentName="p">{`website`}</inlineCode>{` app, but the default CloudFront config won’t allow you to access them. To fix this, you need to add a new configuration to your CloudFront distribution. The below example shows how to add a rule that allows you to serve any file uploaded inside `}<inlineCode parentName="p">{`website/public/_static`}</inlineCode>{` folder. These files would then be accessible by visiting `}<inlineCode parentName="p">{`https://your-domain.com/_static/your-file.txt`}</inlineCode>{`.`}</p>
<Editor title="apps/website/webiny.application.ts" lang="ts" mdxType="Editor">
{`import { createWebsiteApp } from "@webiny/serverless-cms-aws";

export default createWebsiteApp({
  pulumiResourceNamePrefix: "wby-",
  pulumi({ resources }) {
    resources.delivery.cloudfront.config.orderedCacheBehaviors(behaviors => {
      return [
        ...behaviors!,
        {
          compress: true,
          allowedMethods: ["GET", "HEAD", "OPTIONS"],
          cachedMethods: ["GET", "HEAD", "OPTIONS"],
          forwardedValues: {
            cookies: {
              forward: "none"
            },
            headers: [],
            queryString: false
          },
          pathPattern: "/_static/*",
          viewerProtocolPolicy: "allow-all",
          targetOriginId: app.resources.app.origin.originId,
          // MinTTL <= DefaultTTL <= MaxTTL
          minTtl: 0,
          defaultTtl: 2592000, // 30 days
          maxTtl: 2592000
        }
      ];
    });
  }
});`}
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