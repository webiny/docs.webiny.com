/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { CanIUseThis } from "@/components/CanIUseThis";
import { WhatYouWillLearn } from "@/components/WhatYouWillLearn";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Service Manifests",
  "description": "Learn how to add infrastructure and other information to the Service Manifests.",
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
  "title": "Creating a Service Manifest",
  "slug": "creating-a-service-manifest",
  "children": []
}, {
  "title": "Using a Service Manifest",
  "slug": "using-a-service-manifest",
  "children": []
}, {
  "title": "Default Service Manifests",
  "slug": "default-service-manifests",
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




<CanIUseThis since={"5.x"} mdxType="CanIUseThis" />
<WhatYouWillLearn mdxType="WhatYouWillLearn">
<ul>
<li parentName="ul">{`how to store information into a Service Manifest`}</li>
<li parentName="ul">{`how to read the Service Manifest in your Lambda functions`}</li>
</ul>
</WhatYouWillLearn>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`Using your infrastructure information in your application source code is a very common requirement. Usually, you would store the infrastructure information (like ARNs, domain names, etc.) into Lambda function environment variables. This can work to a certain extent, but as the amount of environment variables grows, you will eventually hit a limit on how many variables you can assign to your Lambda function.`}</p>
<p>{`Also, sometimes you will run into scenarios where you need information about resources that are not managed by the stack being deployed, so you won’t be able to store that information in an environment variable.`}</p>
<p>{`To overcome both of these limitations, we’ve created a utility called a `}<em parentName="p">{`Service Manifest`}</em>{`. A Service Manifest allows you to store whatever information you need into Webiny’s main DynamoDB table, and then use that information at application runtime.`}</p>
<_Heading level={2} id={"creating-a-service-manifest"} nextElement={{
      "type": "paragraph"
    }}>Creating a Service Manifest</_Heading>
<p>{`To create your own manifest, you need to extend the base Pulumi program, and use the `}<inlineCode parentName="p">{`addServiceManifest`}</inlineCode>{` method. In the following example, we demonstrate how you can store random values, as well as outputs from newly created Pulumi resources.`}</p>
<p>{`You can call `}<inlineCode parentName="p">{`app.addServiceManifest({ ... })`}</inlineCode>{` multiple times, and we’ll deeply merge your manifests under the hood (using `}<inlineCode parentName="p">{`lodash/merge`}</inlineCode>{`).`}</p>
<Editor title="apps/api/webiny.application.ts" lang="ts" mdxType="Editor">
{`import * as aws from "@pulumi/aws";
import { createApiApp } from "@webiny/serverless-cms-aws";

export default createApiApp({
  pulumiResourceNamePrefix: "wby-",
  pulumi(app) {
    // An imaginary resource that you want to create.
    const myLambda = app.addResource(aws.lambda.Function, {
      name: "my-lambda",
      config: {
        // Your function config.
      }
    });

    // Create your manifest!
    app.addServiceManifest({
      name: "my-manifest",
      manifest: {
        someApiKey: "my-api-key",
        myLambdaArn: myLambda.output.arn
      }
    });
  }
});`}
</Editor>
<p>{`Once your app is deployed, the Service Manifest will be written to the main DynamoDB table.`}</p>
<_Heading level={2} id={"using-a-service-manifest"} nextElement={{
      "type": "paragraph"
    }}>Using a Service Manifest</_Heading>
<p>{`To access the Service Manifest from your Lambda function code, use the `}<inlineCode parentName="p">{`ServiceDiscovery`}</inlineCode>{` utility.`}</p>
<Editor title="" lang="ts" mdxType="Editor">
{`import { ServiceDiscovery } from "@webiny/api";

// Load all service manifests.
const manifests = await ServiceDiscovery.load();

// Access your manifest by name.
const myManifest = manifests["my-manifest"];

// Access your information.
const myLambdaArn = myManifest.myLambdaArn;`}
</Editor>
<_Heading level={2} id={"default-service-manifests"} nextElement={{
      "type": "paragraph"
    }}>Default Service Manifests</_Heading>
<p>{`Out of the box, Webiny writes service manifests when deploying the `}<inlineCode parentName="p">{`api`}</inlineCode>{` and `}<inlineCode parentName="p">{`website`}</inlineCode>{` apps. You can find the definitions of these manifests in the `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/v5.x/packages/pulumi-aws/src/apps/api/createApiPulumiApp.ts#L321-L329"
      }}>{`api`}</a>{` and `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/v5.x/packages/pulumi-aws/src/apps/website/createWebsitePulumiApp.ts#L335-L363"
      }}>{`website`}</a>{` pulumi apps.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;