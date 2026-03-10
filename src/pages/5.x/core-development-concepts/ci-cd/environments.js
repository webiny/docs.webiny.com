/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/core-development-concepts/ci-cd/assets/environments/environments.png'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Managing Environments",
  "description": "Learn how to organize different deployment environments for your project",
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
  "title": "Introduction",
  "slug": "introduction",
  "children": []
}, {
  "title": "Multiple Environments and Extra Costs",
  "slug": "multiple-environments-and-extra-costs",
  "children": []
}, {
  "title": "Shared and Isolated Environments",
  "slug": "shared-and-isolated-environments",
  "children": [{
    "title": "Long-Lived and Short-Lived Environments",
    "slug": "long-lived-and-short-lived-environments",
    "children": []
  }]
}, {
  "title": "Organization",
  "slug": "organization",
  "children": [{
    "title": "Shared Environments",
    "slug": "shared-environments",
    "children": [{
      "title": "dev",
      "slug": "dev"
    }, {
      "title": "staging",
      "slug": "staging"
    }, {
      "title": "prod (production)",
      "slug": "prod-production"
    }]
  }, {
    "title": "Isolated Environments",
    "slug": "isolated-environments",
    "children": []
  }]
}, {
  "title": "Cloud (AWS) Accounts",
  "slug": "cloud-aws-accounts",
  "children": []
}, {
  "title": "FAQ",
  "slug": "faq",
  "children": [{
    "title": "Can We Have More Shared Environments?",
    "slug": "can-we-have-more-shared-environments",
    "children": []
  }, {
    "title": "Are the Names of Environments Fixed in Any Way?",
    "slug": "are-the-names-of-environments-fixed-in-any-way",
    "children": []
  }, {
    "title": "Except My Application Code, Should the staging and prod Cloud Infrastructure Also Be the Same?",
    "slug": "except-my-application-code-should-the-staging-and-prod-cloud-infrastructure-also-be-the-same",
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




<Alert type="success" title="What you'll learn" mdxType="Alert">
<ul>
<li parentName="ul">{`how to organize different environments for your project`}</li>
</ul>
</Alert>
<Alert type="info" mdxType="Alert">
<p>{`Get your CI/CD set up in no time with the built-in `}<_Link href="/docs/5.x/core-development-concepts/ci-cd/setup">{`CI/CD scaffold`}</_Link>{`.`}</p>
</Alert>
<_Heading level={2} id={"introduction"} nextElement={{
      "type": "paragraph"
    }}>Introduction</_Heading>
<p>{`Deploying your project into multiple environments enables us to preview and test new features and bug fixes, before actually rolling them out to real users. This helps us in making our project as stable as possible, and, ultimately, providing the best possible user experience.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`To learn more about environments in general, check out the `}<_Link href="/docs/5.x/infrastructure/basics/environments">{`Environments`}</_Link>{` key topic.`}</p>
</Alert>
<Alert type="success" mdxType="Alert">
<p>{`Check out the `}<_Link href="/docs/5.x/core-development-concepts/basics/project-deployment">{`Deploy Your Project`}</_Link>{` guide to learn how to deploy your project into multiple environments.`}</p>
</Alert>
<_Heading level={2} id={"multiple-environments-and-extra-costs"} nextElement={{
      "type": "paragraph"
    }}>Multiple Environments and Extra Costs</_Heading>
<p>{`When we talk about multiple environment deployments, it’s important to note that we’re talking about deploying multiple copies of our project, both in terms of the application code and, more importantly, needed cloud infrastructure resources.`}</p>
<p>{`Serverless technologies and services have many advantages, one of them being the `}<strong parentName="p">{`pay-per-use`}</strong>{` pricing model. This means that, if we, for example, had five environments deployed into our AWS account, and none of them were used (or very rarely), no additional cost would be incurred.`}</p>
<p>{`This `}<strong parentName="p">{`pay-per-use`}</strong>{` pricing model, paired with Webiny’s built-in deployment workflows and tools, makes it much more affordable and easier to introduce multiple environments for your project.`}</p>
<Alert type="warning" title="Non-Serverless Resources" mdxType="Alert">
<p>{`Take into consideration that sometimes, projects do require cloud infrastructure resources that aren’t serverless or do not follow the pay-per-use pricing model. In that case, having multiple environments could in fact incur additional cost.`}</p>
<p>{`In Webiny’s case and its default setup, one of the resources of that kind is the `}<a parentName="p" {...{
          "href": "https://aws.amazon.com/elasticsearch-service/pricing/"
        }}>{`Amazon Elastic Search`}</a>{`.`}</p>
</Alert>
<Alert type="info" mdxType="Alert">
<p>{`Read more about the cloud infrastructure resources that get deployed into your AWS account in our `}<_Link href="/docs/5.x/architecture/introduction">{`Cloud Infrastructure`}</_Link>{` key topics section.`}</p>
</Alert>
<_Heading level={2} id={"shared-and-isolated-environments"} nextElement={{
      "type": "paragraph"
    }}>Shared and Isolated Environments</_Heading>
<p>{`There are two types of environments into which we usually deploy to: `}<strong parentName="p">{`shared`}</strong>{` and `}<strong parentName="p">{`isolated`}</strong>{`.`}</p>
<p><strong parentName="p">{`Shared environments`}</strong>{` are environments that are shared among:`}</p>
<ul>
<li parentName="ul">{`the team - for development, integration, and testing needs`}</li>
<li parentName="ul">{`real users - a unique environment, most commonly known as the `}<strong parentName="li">{`production`}</strong>{` environment`}</li>
</ul>
<p>{`In terms of naming these environments, a strict rule does not exist, but some of the typical environment names for these environments are usually `}<inlineCode parentName="p">{`dev`}</inlineCode>{`, `}<inlineCode parentName="p">{`staging`}</inlineCode>{`, and `}<inlineCode parentName="p">{`prod`}</inlineCode>{` (`}<inlineCode parentName="p">{`production`}</inlineCode>{`). These are always deployed from a CI/CD environment.`}</p>
<p>{`On the other hand, `}<strong parentName="p">{`isolated environments`}</strong>{` are environments that are deployed by developers, for their own development and testing needs. These are usually deployed and destroyed from a developer’s machine.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`Within an organization, it’s common practice for developers to have their own cloud (AWS) account, which they use to deploy their isolated environments. This way we ensure that they don’t impact one of the (sensitive) shared environments and enable them to perform experiments more freely.`}</p>
<p>{`Read more about how to organize cloud accounts in the `}<_Link href="/docs/5.x/core-development-concepts/ci-cd/environments#cloud-aws-accounts">{`Cloud (AWS) Accounts`}</_Link>{` section.`}</p>
</Alert>
<_Heading level={3} id={"long-lived-and-short-lived-environments"} nextElement={{
      "type": "paragraph"
    }}>Long-Lived and Short-Lived Environments</_Heading>
<p>{`Shared environments are long-lived environments, meaning, once they’re deployed, they do not get destroyed that often, if ever. In contrast, isolated environments are short-lived - they are frequently deployed and destroyed.`}</p>
<Alert type="warning" title="Caution" mdxType="Alert">
<p>{`Be sure to check for unused deployed cloud infrastructure resources from time to time. We want to avoid unnecessary cost from mentioned non-serverless resources, that do not follow the pay-per-use pricing model.`}</p>
</Alert>
<_Heading level={2} id={"organization"} nextElement={{
      "type": "paragraph"
    }}>Organization</_Heading>
<p>{`The following diagram shows the most common organization of shared and isolated environments in a single project:`}</p>
<Image src={_Image1} alt={"Webiny Cloud Infrastructure - Environments"} mdxType="Image" />
<Alert type="info" mdxType="Alert">
<p>{`This structure of environments is also mirrored by branches in your project’s Git repository. More on this in the `}<_Link href="/docs/5.x/core-development-concepts/ci-cd/version-control">{`Version Control`}</_Link>{` topic that follows.`}</p>
</Alert>
<_Heading level={3} id={"shared-environments"} nextElement={{
      "type": "paragraph"
    }}>Shared Environments</_Heading>
<p>{`Although there can be more shared environments, most commonly, we end up with the following:`}</p>
<_Heading level={4} id={"dev"} nextElement={{
      "type": "paragraph"
    }}><code>dev</code></_Heading>
<p>{`New fixes and features are first deployed into this environment, might be unstable from time to time.`}</p>
<_Heading level={4} id={"staging"} nextElement={{
      "type": "paragraph"
    }}><code>staging</code></_Heading>
<p>{`For testing new release candidates in a production-like environment. Meaning, here we deploy the same application code and cloud infrastructure resources that we will ultimately deploy into the production environment, used by real users.`}</p>
<_Heading level={4} id={"prod-production"} nextElement={{
      "type": "paragraph"
    }}><code>prod</code>(<code>production</code>)</_Heading>
<p>{`A system used by real users. Must be in a state that is considered as stable, as much of the time as possible.`}</p>
<_Heading level={3} id={"isolated-environments"} nextElement={{
      "type": "paragraph"
    }}>Isolated Environments</_Heading>
<p>{`With shared environments, developers deploy their own environments, where, as mentioned, they develop and test bug fixes and new features. Usually, one environment per developer is enough. If the environment is not needed anymore, it’s recommended it’s destroyed.`}</p>
<_Heading level={2} id={"cloud-aws-accounts"} nextElement={{
      "type": "paragraph"
    }}>Cloud (AWS) Accounts</_Heading>
<p>{`In terms of cloud (AWS) accounts, it has been shown that a good practice to adopt is having a separate account for every shared environment and developer in the organization. For example, if our organization consisted of five developers, with the three `}<inlineCode parentName="p">{`dev`}</inlineCode>{`, `}<inlineCode parentName="p">{`staging`}</inlineCode>{`, and `}<inlineCode parentName="p">{`prod`}</inlineCode>{` shared environments, that would be eight cloud accounts in total.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`The shared environments AWS accounts will mostly be used from your CI/CD pipeline, which we cover in one of the following sections.`}</p>
</Alert>
<Alert type="success" mdxType="Alert">
<p>{`For easier management of AWS accounts, we recommend checking out `}<a parentName="p" {...{
          "href": "https://aws.amazon.com/organizations/"
        }}>{`AWS Organizations`}</a>{`, which is a feature that helps you centrally manage and govern your environment as you grow and scale your AWS resources.`}</p>
<p>{`Furthermore, the `}<a parentName="p" {...{
          "href": "https://docs.aws.amazon.com/whitepapers/latest/organizing-your-aws-environment/organizing-your-aws-environment.html"
        }}>{`Organizing Your AWS Environment Using Multiple Accounts`}</a>{` article is also something that provides useful information on the multiple AWS accounts for different environments approach.`}</p>
</Alert>
<_Heading level={2} id={"faq"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>FAQ</_Heading>
<_Heading level={3} id={"can-we-have-more-shared-environments"} nextElement={{
      "type": "paragraph"
    }}>Can We Have More Shared Environments?</_Heading>
<p>{`Yes. The `}<inlineCode parentName="p">{`dev`}</inlineCode>{`, `}<inlineCode parentName="p">{`staging`}</inlineCode>{`, and `}<inlineCode parentName="p">{`prod`}</inlineCode>{` is the minimum we recommend, but you can have more, if need be.`}</p>
<_Heading level={3} id={"are-the-names-of-environments-fixed-in-any-way"} nextElement={{
      "type": "paragraph"
    }}>Are the Names of Environments Fixed in Any Way?</_Heading>
<p>{`Environment names are not fixed or hard-coded in any way. We use `}<inlineCode parentName="p">{`dev`}</inlineCode>{`, `}<inlineCode parentName="p">{`staging`}</inlineCode>{`, and `}<inlineCode parentName="p">{`prod`}</inlineCode>{` as these names are often familiar to developers. Feel free to name these differently if your organization follows different conventions.`}</p>
<_Heading level={3} id={"except-my-application-code-should-the-staging-and-prod-cloud-infrastructure-also-be-the-same"} nextElement={{
      "type": "paragraph"
    }}>Except My Application Code, Should the<code>staging</code>and<code>prod</code>Cloud Infrastructure Also Be the Same?</_Heading>
<p>{`With serverless application development, the deployed cloud infrastructure can play a vital role in our application. It’s no longer just about the application code. So, with that in mind, in order to reduce the chance of introducing regressions that our users could experience, we recommend that the `}<inlineCode parentName="p">{`prod`}</inlineCode>{` and `}<inlineCode parentName="p">{`staging`}</inlineCode>{` environments are same on both application code and cloud infrastructure level.`}</p>
<p>{`To enable this, please open your `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/next/packages/cwp-template-aws/template/api/pulumi/index.ts#L7"
      }}><inlineCode parentName="a">{`packages/cwp-template-aws/template/api/pulumi/index.ts`}</inlineCode></a>{` file, and uncomment the `}<inlineCode parentName="p">{`staging`}</inlineCode>{` string in the `}<inlineCode parentName="p">{`PROD_STACK_ENVIRONMENTS`}</inlineCode>{` array.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`Learn more about differences between the development and production cloud infrastructure differences in the `}<_Link href="/docs/5.x/architecture/introduction#different-cloud-infrastructure-setups">{`Cloud Infrastructure`}</_Link>{` key topic.`}</p>
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