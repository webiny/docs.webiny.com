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
  "title": "Infrastructure Best Practices",
  "description": "Learn what are some of the core best practices when it comes to managing the infrastructure for your Webiny instances.",
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
  "title": "Protected vs Unprotected Deployment Modes",
  "slug": "protected-vs-unprotected-deployment-modes",
  "children": []
}, {
  "title": "How to Deploy Changes Safely",
  "slug": "how-to-deploy-changes-safely",
  "children": []
}, {
  "title": "How to Make Modifications to Your Infrastructure, and What to Avoid",
  "slug": "how-to-make-modifications-to-your-infrastructure-and-what-to-avoid",
  "children": []
}, {
  "title": "Store Your State Files",
  "slug": "store-your-state-files",
  "children": []
}, {
  "title": "Organising Your AWS Account",
  "slug": "organising-your-aws-account",
  "children": []
}, {
  "title": "Tracking Resources Linked to Your Project",
  "slug": "tracking-resources-linked-to-your-project",
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



<Alert type="success" title="What you’ll learn" mdxType="Alert">
<ul>
<li parentName="ul">{`Learn what are some of the core best practices when it comes to managing the infrastructure for your Webiny instances.`}</li>
</ul>
</Alert>
<_Heading level={2} id={"protected-vs-unprotected-deployment-modes"} nextElement={{
      "type": "paragraph"
    }}>Protected vs Unprotected Deployment Modes</_Heading>
<p>{`Webiny comes with two main deployment modes, the `}<inlineCode parentName="p">{`production`}</inlineCode>{` and the `}<inlineCode parentName="p">{`development`}</inlineCode>{`. By default, we deploy the `}<inlineCode parentName="p">{`production`}</inlineCode>{` deployment modes to the `}<inlineCode parentName="p">{`prod`}</inlineCode>{` environment and the `}<inlineCode parentName="p">{`development`}</inlineCode>{` deployment modes for all other environments.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`You can learn more about the differences between these two deployment modes in `}<_Link href="/docs/5.x/architecture/deployment-modes/introduction">{`this article here`}</_Link>{`.`}</p>
</Alert>
<p>{`One core difference you need to be aware of between the two deployment modes is that the `}<inlineCode parentName="p">{`production`}</inlineCode>{` mode marks resources such as the DynamoDB, S3, Cognito and OpenSearch cluster as `}<inlineCode parentName="p">{`protected`}</inlineCode>{`. This prevents the accidental deletion of those resources.`}</p>
<p>{`Other resources are not marked as `}<inlineCode parentName="p">{`protected`}</inlineCode>{` meaning that making any changes to them, or issuing the `}<inlineCode parentName="p">{`delete`}</inlineCode>{` command will delete those resources and you won’t be able to restore them.`}</p>
<p>{`In case you wish to mark the resources as protected in all environments, you can do this like so:`}</p>
<Editor title="apps/core/webiny.application.ts" lang="js" mdxType="Editor">
{`import * as aws from "@pulumi/aws";
import { createCoreApp } from "@webiny/serverless-cms-aws";

export default createCoreApp({
  protect: true
});`}
</Editor>
<Alert type="info" mdxType="Alert">
<p>{`In case you wish to mark resources as protected only inside specific environments, such as `}<inlineCode parentName="p">{`staging`}</inlineCode>{`, `}<inlineCode parentName="p">{`qa`}</inlineCode>{` and similar, you can do that by programmatically defining the `}<inlineCode parentName="p">{`protected`}</inlineCode>{` flag based on the name of the environment that’s currently being deployed. `}<_Link href="/docs/5.x/infrastructure/basics/modify-cloud-infrastructure#retrieving-the-deployment-environment">{`See this example here`}</_Link></p>
</Alert>
<Alert type="info" mdxType="Alert">
<p>{`Only the `}<inlineCode parentName="p">{`core`}</inlineCode>{` app has the `}<inlineCode parentName="p">{`protected`}</inlineCode>{` flag. Other environments don’t have any stateful resources so they can be deleted and easily recreated by redeploying them. The `}<inlineCode parentName="p">{`core`}</inlineCode>{` app holds all the stateful resources such as DynamoDB, S3, Cognito and OpenSearch cluster.`}</p>
</Alert>
<_Heading level={2} id={"how-to-deploy-changes-safely"} nextElement={{
      "type": "paragraph"
    }}>How to Deploy Changes Safely</_Heading>
<p>{`If you’re making any modifications to your cloud infrastructure programmatically by adding changes to `}<inlineCode parentName="p">{`webiny.application.ts`}</inlineCode>{` file, those changes can in certain cases have a destructive effect as AWS needs to tear down the current resource and create a new one to apply the changes.`}</p>
<p>{`In certain cases, it might be hard to determine if the change will be destructive or not and if you’re performing this change in an environment that’s not marked as `}<inlineCode parentName="p">{`protected`}</inlineCode>{` you might lose some of your data.`}</p>
<p>{`We highly encourage users to run the deploy command with the `}<inlineCode parentName="p">{`--preview`}</inlineCode>{` flag when making such changes. The preview flag will display a list of resources that will be added, modified or removed. This way you can check ahead of time if the change will potentially be destructive for your environment.`}</p>
<Editor title="" lang="terminal" mdxType="Editor">
{`yarn webiny deploy api --env dev --preview`}
</Editor>
<Alert type="info" mdxType="Alert">
<p>{`Learn more about how to preview changes in `}<_Link href="/docs/5.x/infrastructure/basics/preview-deployments">{`this article here`}</_Link>{`.`}</p>
</Alert>
<_Heading level={2} id={"how-to-make-modifications-to-your-infrastructure-and-what-to-avoid"} nextElement={{
      "type": "paragraph"
    }}>How to Make Modifications to Your Infrastructure, and What to Avoid</_Heading>
<p>{`Changes to the cloud infrastructure should only be made programmatically by modifying the `}<inlineCode parentName="p">{`webiny.application.ts`}</inlineCode>{` file. Any changes made outside this file, for example by modifying the resources via the AWS console will be reverted to the state matching inside `}<inlineCode parentName="p">{`webiny.application.ts`}</inlineCode>{` file, that’s the best case, in the worst case, your resource might be flagged for deletion if the change can’t be applied incrementally.`}</p>
<p>{`So as a best practice, do not make any changes to the resources outside your project, that includes anything from changing cluster sizes, changing resource names, or even just adding a simple tag to a resource, instead apply your changes programmatically.`}</p>
<Alert type="info" mdxType="Alert">
<p><_Link href="/docs/5.x/infrastructure/basics/modify-cloud-infrastructure">{`Click here`}</_Link>{` to learn how to modify your cloud infrastructure the right way.`}</p>
</Alert>
<Alert type="warning" mdxType="Alert">
<p>{`Be especially careful with operations that update the names of resources. For example, a typical pitfall is modifying the value of `}<inlineCode parentName="p">{`pulumiResourceNamePrefix`}</inlineCode>{`. This changes the resource name, but since resources cannot be renamed, they will get destroyed. In scenarios like these, it’s key to preview deployments first, and have the resources you don’t want to lose, marked as protected.`}</p>
</Alert>
<_Heading level={2} id={"store-your-state-files"} nextElement={{
      "type": "paragraph"
    }}>Store Your State Files</_Heading>
<p>{`Every project once deployed will create what’s called infrastructure state files. Those files are very important as they tell us what AWS resources are linked to a specific project environment. Losing those files can lock you out from being able to make changes to your project, so it’s very important to keep them stored safely.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`Webiny provides several options to store your state files. `}<_Link href="/docs/5.x/core-development-concepts/ci-cd/cloud-infrastructure-state-files">{`Learn more about them in this article here.`}</_Link></p>
</Alert>
<_Heading level={2} id={"organising-your-aws-account"} nextElement={{
      "type": "paragraph"
    }}>Organising Your AWS Account</_Heading>
<p>{`We highly recommend you use AWS organizations to manage your AWS accounts. We also recommend you keep your production environment isolated inside its own AWS account. As an added best practice, every long-lived environment should sit in its own AWS account, and every developer working on the project should work within their own AWS account.`}</p>
<p>{`Such separation of accounts will make individual AWS accounts much cleaner. It will be easier to find the needed resources, debug issues and retrieve logs, as well as reduce any potential risk of accidentally deleting or modifying the wrong resources.`}</p>
<_Heading level={2} id={"tracking-resources-linked-to-your-project"} nextElement={{
      "type": "paragraph"
    }}>Tracking Resources Linked to Your Project</_Heading>
<p>{`Some projects can have large teams working on them, where there are many long-lived environments and even more individual development environments but spread across a few AWS accounts, where not everyone has their own individual account.`}</p>
<p>{`In such a setup, besides the increased risk or making accidental changes to the wrong resources, things can get messy just by having many Webiny projects deployed, where each project creates its own resources and then it can be hard to determine who’s the owner of a specific resource and for which project the resource is used.`}</p>
<p>{`In such a case we recommend you implement a tagging system where you tag all resources so they are easier to identify.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`To learn how to tag your resources, `}<_Link href="/docs/5.x/infrastructure/basics/modify-cloud-infrastructure#tagging-cloud-infrastructure-resources">{`check out this article`}</_Link>{`.`}</p>
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