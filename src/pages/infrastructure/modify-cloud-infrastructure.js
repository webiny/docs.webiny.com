/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.64f62e.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Modify Cloud Infrastructure",
  "description": "Learn how to modify and extend the cloud infrastructure resources deployed by Webiny.",
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
  "title": "Declarative Configuration",
  "slug": "declarative-configuration",
  "children": [{
    "title": "Tagging Resources",
    "slug": "tagging-resources",
    "children": []
  }, {
    "title": "Resource Name Prefix",
    "slug": "resource-name-prefix",
    "children": []
  }, {
    "title": "Production Environments",
    "slug": "production-environments",
    "children": []
  }, {
    "title": "OpenSearch",
    "slug": "open-search",
    "children": []
  }, {
    "title": "Environment-Specific Configuration",
    "slug": "environment-specific-configuration",
    "children": []
  }]
}, {
  "title": "Pulumi Extensions",
  "slug": "pulumi-extensions",
  "children": []
}, {
  "title": "Redeploying After Changes",
  "slug": "redeploying-after-changes",
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



<Alert type="success" title="WHAT YOU'LL LEARN" mdxType="Alert">
<ul>
<li parentName="ul">{`how cloud infrastructure is configured in Webiny v6`}</li>
<li parentName="ul">{`how to use declarative `}<inlineCode parentName="li">{`Infra.*`}</inlineCode>{` components for common infrastructure settings`}</li>
<li parentName="ul">{`how to use Pulumi extensions for low-level resource modifications`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`When you deploy a Webiny project, three stacks are deployed to AWS: `}<strong parentName="p">{`Core`}</strong>{` (stateful resources — DynamoDB, S3, OpenSearch, Cognito), `}<strong parentName="p">{`API`}</strong>{` (GraphQL Lambda functions), and `}<strong parentName="p">{`Admin`}</strong>{` (static React app on CloudFront).`}</p>
<p>{`In Webiny v6, all infrastructure configuration lives in a single file: `}<inlineCode parentName="p">{`webiny.config.tsx`}</inlineCode>{`. Infrastructure is modified in two ways:`}</p>
<ul>
<li parentName="ul"><strong parentName="li">{`Declarative components`}</strong>{` — `}<inlineCode parentName="li">{`Infra.*`}</inlineCode>{` components in `}<inlineCode parentName="li">{`webiny.config.tsx`}</inlineCode>{` cover the most common configuration needs (tags, resource name prefix, OpenSearch, VPC, production environments, custom domains).`}</li>
<li parentName="ul"><strong parentName="li">{`Pulumi extensions`}</strong>{` — for lower-level changes, you point `}<inlineCode parentName="li">{`Infra.Core.Pulumi`}</inlineCode>{`, `}<inlineCode parentName="li">{`Infra.Api.Pulumi`}</inlineCode>{`, or `}<inlineCode parentName="li">{`Infra.Admin.Pulumi`}</inlineCode>{` at an extension file that receives the Pulumi context directly.`}</li>
</ul>
<_Heading level={2} id={"declarative-configuration"} nextElement={{
      "type": "paragraph"
    }}>Declarative Configuration</_Heading>
<p>{`The following `}<inlineCode parentName="p">{`Infra.*`}</inlineCode>{` components are available in `}<inlineCode parentName="p">{`webiny.config.tsx`}</inlineCode>{`:`}</p>
<_Heading level={3} id={"tagging-resources"} nextElement={{
      "type": "paragraph"
    }}>Tagging Resources</_Heading>
<p>{`Apply tags to all deployed AWS resources:`}</p>
<Editor title="webiny.config.tsx" lang="tsx" mdxType="Editor">
{`import React from "react";
import { Infra } from "webiny/extensions";

export const Extensions = () => {
  return (
    <>
      <Infra.Aws.Tags tags={{ OWNER: "my-team", PROJECT: "my-project" }} />
    </>
  );
};`}
</Editor>
<p><inlineCode parentName="p">{`Infra.Aws.Tags`}</inlineCode>{` can be used multiple times and tags are merged.`}</p>
<_Heading level={3} id={"resource-name-prefix"} nextElement={{
      "type": "paragraph"
    }}>Resource Name Prefix</_Heading>
<p>{`By default, all Pulumi resource names are prefixed with `}<inlineCode parentName="p">{`wby-`}</inlineCode>{`. To change this:`}</p>
<Editor title="webiny.config.tsx" lang="tsx" mdxType="Editor">
{`<Infra.PulumiResourceNamePrefix prefix={"myproj-"} />`}
</Editor>
<_Heading level={3} id={"production-environments"} nextElement={{
      "type": "paragraph"
    }}>Production Environments</_Heading>
<p>{`By default, only the `}<inlineCode parentName="p">{`prod`}</inlineCode>{` environment is treated as a production environment and deployed in `}<_Link href="/docs/infrastructure/deployment-modes">{`production deployment mode`}</_Link>{`. To promote additional environments:`}</p>
<Editor title="webiny.config.tsx" lang="tsx" mdxType="Editor">
{`<Infra.ProductionEnvironments environments={["prod", "staging"]} />`}
</Editor>
<_Heading level={3} id={"open-search"} nextElement={{
      "type": "paragraph"
    }}>OpenSearch</_Heading>
<p>{`Enable or disable Amazon OpenSearch integration:`}</p>
<Editor title="webiny.config.tsx" lang="tsx" mdxType="Editor">
{`<Infra.OpenSearch enabled={true} />`}
</Editor>
<p>{`For development environments where you want to share a single OpenSearch domain across multiple deployments, use the `}<inlineCode parentName="p">{`domainName`}</inlineCode>{` and `}<inlineCode parentName="p">{`indexPrefix`}</inlineCode>{` props:`}</p>
<Editor title="webiny.config.tsx" lang="tsx" mdxType="Editor">
{`<Infra.OpenSearch enabled={true} domainName={"my-shared-opensearch-domain"} indexPrefix={"dev_"} />`}
</Editor>
<Alert type="info" mdxType="Alert">
<p>{`Sharing an OpenSearch domain is only recommended for development. In production, use a dedicated domain per environment.`}</p>
</Alert>
<_Heading level={3} id={"environment-specific-configuration"} nextElement={{
      "type": "paragraph"
    }}>Environment-Specific Configuration</_Heading>
<p>{`Use `}<inlineCode parentName="p">{`Infra.Env.Is`}</inlineCode>{` to apply configuration conditionally per environment:`}</p>
<Editor title="webiny.config.tsx" lang="tsx" mdxType="Editor">
{`import React from "react";
import { Infra } from "webiny/extensions";

export const Extensions = () => {
  return (
    <>
      <Infra.Env.Is env={"prod"}>
        <Infra.Aws.Tags tags={{ ENV: "production" }} />
        <Infra.OpenSearch enabled={true} />
      </Infra.Env.Is>

      <Infra.Env.Is env={["dev", "staging"]}>
        <Infra.Aws.Tags tags={{ ENV: "non-production" }} />
        <Infra.OpenSearch enabled={false} />
      </Infra.Env.Is>
    </>
  );
};`}
</Editor>
<_Heading level={2} id={"pulumi-extensions"} nextElement={{
      "type": "paragraph"
    }}>Pulumi Extensions</_Heading>
<p>{`For changes that go beyond what the declarative components support — modifying Lambda memory, adjusting CloudFront settings, adding IAM policies, creating new resources — you use a Pulumi extension.`}</p>
<p>{`Register the extension in `}<inlineCode parentName="p">{`webiny.config.tsx`}</inlineCode>{` by pointing `}<inlineCode parentName="p">{`Infra.Core.Pulumi`}</inlineCode>{`, `}<inlineCode parentName="p">{`Infra.Api.Pulumi`}</inlineCode>{`, or `}<inlineCode parentName="p">{`Infra.Admin.Pulumi`}</inlineCode>{` at a TypeScript file:`}</p>
<Editor title="webiny.config.tsx" lang="tsx" mdxType="Editor">
{`import React from "react";
import { Infra } from "webiny/extensions";

export const Extensions = () => {
  return (
    <>
      <Infra.Core.Pulumi src={"/extensions/MyCorePulumiHandler.ts"} />
    </>
  );
};`}
</Editor>
<p>{`The extension file receives the Pulumi context and can modify or add resources:`}</p>
<Editor title="extensions/MyCorePulumiHandler.ts" lang="typescript" mdxType="Editor">
{`import * as aws from "@pulumi/aws";

export default ({ resources, addResource }: any) => {
  // Modify an existing resource — enable S3 object versioning on the file manager bucket.
  const { fileManagerBucket } = resources;
  fileManagerBucket.config.versioning({ enabled: true });
};`}
</Editor>
<p>{`Use `}<inlineCode parentName="p">{`Infra.Api.Pulumi`}</inlineCode>{` for changes to the API stack — for example, increasing Lambda memory size:`}</p>
<Editor title="extensions/MyApiPulumiHandler.ts" lang="typescript" mdxType="Editor">
{`export default ({ resources }: any) => {
  // Increase memory for the GraphQL Lambda function.
  resources.graphql.functions.graphql.config.memorySize(1024);
};`}
</Editor>
<p>{`Or adding a custom IAM policy attachment:`}</p>
<Editor title="extensions/MyApiPulumiHandler.ts" lang="typescript" mdxType="Editor">
{`import * as aws from "@pulumi/aws";

export default ({ resources, addResource }: any) => {
  const policy = addResource(aws.iam.Policy, {
    name: "ses-policy",
    config: {
      description: "Enables access to Amazon SES.",
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
};`}
</Editor>
<_Heading level={2} id={"redeploying-after-changes"} nextElement={{
      "type": "paragraph"
    }}>Redeploying After Changes</_Heading>
<p>{`After making infrastructure changes, redeploy the affected stack. For example, if you modified the Core stack:`}</p>
<Editor title="" lang="null" mdxType="Editor">
{`yarn webiny deploy core --env dev`}
</Editor>
<p>{`Only redeploy the stack where the change was made. If you changed `}<inlineCode parentName="p">{`Infra.Api.Pulumi`}</inlineCode>{`, redeploy `}<inlineCode parentName="p">{`api`}</inlineCode>{`. If you changed a declarative `}<inlineCode parentName="p">{`Infra.*`}</inlineCode>{` component that affects all stacks (such as `}<inlineCode parentName="p">{`Infra.ProductionEnvironments`}</inlineCode>{`), redeploy all three stacks.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;