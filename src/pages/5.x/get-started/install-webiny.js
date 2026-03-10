/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/get-started/assets/installation-wizard.png'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Install Webiny",
  "description": "Learn how to create a new Webiny project and deploy it into your AWS account.",
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
  "title": "Prerequisites",
  "slug": "prerequisites",
  "children": []
}, {
  "title": "Project Setup",
  "slug": "project-setup",
  "children": [{
    "title": "Pick Your Database Setup",
    "slug": "pick-your-database-setup",
    "children": [{
      "title": "Amazon DynamoDB + Amazon OpenSearch - Monthly Cost❗",
      "slug": "amazon-dynamo-db-amazon-open-search-monthly-cost"
    }]
  }]
}, {
  "title": "First Deployment",
  "slug": "first-deployment",
  "children": []
}, {
  "title": "Troubleshooting",
  "slug": "troubleshooting",
  "children": [{
    "title": "SubscriptionRequiredException: The AWS Access Key Id Needs a Subscription for the Service",
    "slug": "subscription-required-exception-the-aws-access-key-id-needs-a-subscription-for-the-service",
    "children": []
  }, {
    "title": "Pulumi Is Throwing a syscall.loadsystemlibrary Exception",
    "slug": "pulumi-is-throwing-a-syscall-loadsystemlibrary-exception",
    "children": []
  }]
}, {
  "title": "FAQ",
  "slug": "faq",
  "children": [{
    "title": "Are There Any Prerequisite Skills or Specialized AWS Knowledge Required to Deploy Webiny?",
    "slug": "are-there-any-prerequisite-skills-or-specialized-aws-knowledge-required-to-deploy-webiny",
    "children": []
  }, {
    "title": "Which AWS Regions Are Supported by Webiny?",
    "slug": "which-aws-regions-are-supported-by-webiny",
    "children": []
  }]
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
const Editor = makeShortcode("Editor");
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




<Alert type="success" title="WHAT YOU’LL LEARN" mdxType="Alert">
<ul>
<li parentName="ul">{`how to create a brand new Webiny project`}</li>
<li parentName="ul">{`how to deploy it to your `}<a parentName="li" {...{
            "href": "https://aws.amazon.com/"
          }}>{`AWS`}</a>{` account`}</li>
</ul>
</Alert>
<hr></hr>
<_Heading level={2} id={"prerequisites"} nextElement={{
      "type": "paragraph"
    }}>Prerequisites</_Heading>
<p>{`Before proceeding, make sure you have the following:`}</p>
<ol>
<li parentName="ol"><strong parentName="li">{`Node.js ^18 || ^20`}</strong></li>
</ol>
<ul>
<li parentName="ul">{`Webiny works with Node.js versions `}<strong parentName="li">{`18`}</strong>{` or `}<strong parentName="li">{`20`}</strong></li>
<li parentName="ul">{`If you don’t have Node.js installed, the easiest way to install it is by `}<a parentName="li" {...{
          "href": "https://nodejs.org/en/"
        }}>{`downloading the official binary`}</a></li>
</ul>
<ol {...{
      "start": 2
    }}>
<li parentName="ol"><strong parentName="li">{`yarn ^1.22.21 || >=2`}</strong></li>
</ol>
<ul>
<li parentName="ul">{`Webiny works with both yarn versions `}<a parentName="li" {...{
          "href": "https://yarnpkg.com/en/docs/install"
        }}>{`1 (classic)`}</a>{` and `}<a parentName="li" {...{
          "href": "https://yarnpkg.com/"
        }}>{`>=2 (berry)`}</a></li>
<li parentName="ul">{`for version 1 - `}<strong parentName="li">{`1.22.21`}</strong>{` or later is required`}</li>
</ul>
<ol {...{
      "start": 3
    }}>
<li parentName="ol"><strong parentName="li">{`AWS account and user credentials`}</strong></li>
</ol>
<ul>
<li parentName="ul">{`in order to deploy Webiny, you must have a valid `}<_Link href="/docs/5.x/infrastructure/aws/configure-aws-credentials">{`AWS account and user credentials`}</_Link>{` set up on your system`}</li>
</ul>
<_Heading level={2} id={"project-setup"} nextElement={{
      "type": "paragraph"
    }}>Project Setup</_Heading>
<p>{`Once you have all the prerequisites in place, we recommend creating a new Webiny project using `}<inlineCode parentName="p">{`create-webiny-project`}</inlineCode>{` - a tool that sets everything up automatically for you. So, in your terminal of choice, run the following command:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`npx create-webiny-project my-new-project`}
</Editor>
<p>{`From there, follow the on-screen setup instructions, which includes answering a couple of project-related questions, and doing your first deployment.`}</p>
<_Heading level={3} id={"pick-your-database-setup"} nextElement={{
      "type": "paragraph"
    }}>Pick Your Database Setup</_Heading>
<p>{`Webiny supports two database setups:`}</p>
<ol>
<li parentName="ol"><strong parentName="li">{`Amazon DynamoDB`}</strong>{` (for small and medium sized projects)`}</li>
<li parentName="ol"><strong parentName="li">{`Amazon DynamoDB + Amazon OpenSearch`}</strong>{` (for large / enterprise-level projects)`}</li>
</ol>
<p>{`If you’re building a small project (couple of thousands of database records) or just giving Webiny a try, we suggest you go with the `}<strong parentName="p">{`Amazon DynamoDB`}</strong>{` database setup. On the other hand, if you’re building a larger project and you know you will be dealing with hundreds of thousands or even millions of database records, choose the `}<strong parentName="p">{`Amazon DynamoDB + Amazon OpenSearch`}</strong>{` database setup.`}</p>
<p>{`Please choose your database setup with consideration for both present and future project requirements. The decision you make at this point `}<strong parentName="p">{`cannot`}</strong>{` be changed later on without recreating your project from scratch.`}</p>
<_Heading level={4} id={"amazon-dynamo-db-amazon-open-search-monthly-cost"} nextElement={{
      "type": "paragraph"
    }}>Amazon DynamoDB + Amazon OpenSearch - Monthly Cost❗</_Heading>
<p>{`Although Webiny is designed to rely on serverless cloud infrastructure resources, the `}<strong parentName="p">{`Amazon DynamoDB + Amazon OpenSearch`}</strong>{` database setup relies on `}<a parentName="p" {...{
        "href": "https://aws.amazon.com/opensearch-service/"
      }}>{`Amazon OpenSearch Service`}</a>{`, which is not serverless.`}</p>
<p>{`More precisely, it doesn’t scale to zero and it’s billed per hour of usage. The cheapest configuration (which Webiny deploys for your development-related environments) amounts to roughly `}<strong parentName="p">{`$25/month`}</strong>{`. For more information, please refer to the `}<a parentName="p" {...{
        "href": "https://aws.amazon.com/opensearch-service/pricing/"
      }}>{`Amazon OpenSearch Service pricing`}</a>{` page.`}</p>
<_Heading level={2} id={"first-deployment"} nextElement={{
      "type": "paragraph"
    }}>First Deployment</_Heading>
<p>{`Once your new project has been created, it’s time to deploy it into your AWS account. You can do that simply by running the following command in your terminal:`}</p>
<Editor title="" lang="null" mdxType="Editor">
{`yarn webiny deploy`}
</Editor>
<Alert type="success" title="Cloud Infrastructure" mdxType="Alert">
<p>{`Learn what gets deployed into your AWS account and how it all works in the `}<_Link href="/docs/5.x/architecture/introduction">{`Cloud Infrastructure`}</_Link>{`
key topics section.`}</p>
</Alert>
<p>{`Note that the first deployment can take up to 15-30 minutes! So, even though it might look nothing is happening in the terminal, please be patient and let the process finish. If something went wrong, an error will be shown.`}</p>
<p>{`Ultimately, once the deployment has been done, you are presented with the URL over which you can access your Admin Area, and finish the installation.`}</p>
<Image src={_Image1} alt={"Admin Area - Installation Wizard"} mdxType="Image" />
<Alert type="info" title="Misplaced Admin area URL?" mdxType="Alert">
<p>{`Running the `}<inlineCode parentName="p">{`yarn webiny open admin --env dev`}</inlineCode>{` command in your Webiny project folder will open the Admin Area URL in
your default browser.`}</p>
<p>{`You can also run `}<inlineCode parentName="p">{`yarn webiny info`}</inlineCode>{` to get a list of all important URLs.`}</p>
</Alert>
<Alert type="warning" title="Telemetry" mdxType="Alert">
<p>{`Please note that, by default, Webiny collects anonymous usage information, which is exclusively used for improving the
product and understanding usage patterns. Please take a look at our `}<_Link href="/docs/5.x/webiny-telemetry/webiny-telemetry">{`Telemetry`}</_Link>{`
page for more information on this subject.`}</p>
<p>{`If, at any point in time, you wish to disable this behaviour, you can do it with the `}<_Link href="/docs/5.x/core-development-concepts/basics/webiny-cli">{`Webiny CLI`}</_Link>{`,
by running the following command: `}<inlineCode parentName="p">{`yarn webiny disable-telemetry`}</inlineCode>{`.`}</p>
</Alert>
<_Heading level={2} id={"troubleshooting"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Troubleshooting</_Heading>
<_Heading level={3} id={"subscription-required-exception-the-aws-access-key-id-needs-a-subscription-for-the-service"} nextElement={{
      "type": "paragraph"
    }}>SubscriptionRequiredException: The AWS Access Key Id Needs a Subscription for the Service</_Heading>
<p>{`In some cases, upon deploying a new Webiny project, it’s possible for users to experience the following error being thrown in their terminal:`}</p>
<Editor title="" lang="null" mdxType="Editor">
{`SubscriptionRequiredException: The AWS Access Key Id needs a subscription for the service`}
</Editor>
<p>{`The following are some of the reasons why you might be receiving this error:`}</p>
<ol>
<li parentName="ol">{`you didn’t verify your phone number`}</li>
<li parentName="ol">{`you didn’t verify your payment method`}</li>
<li parentName="ol">{`you didn’t select a support subscription (free or other)`}</li>
<li parentName="ol">{`if you created a brand new AWS account, it wasn’t yet processed on the AWS side`}</li>
</ol>
<p>{`The account signup and verification process can be completed via `}<a parentName="p" {...{
        "href": "https://portal.aws.amazon.com/billing/signup?type=resubscribe#/resubscribed"
      }}>{`https://portal.aws.amazon.com/billing/signup?type=resubscribe#/resubscribed`}</a>{`.`}</p>
<_Heading level={3} id={"pulumi-is-throwing-a-syscall-loadsystemlibrary-exception"} nextElement={{
      "type": "paragraph"
    }}>Pulumi Is Throwing a<code>syscall.loadsystemlibrary</code>Exception</_Heading>
<p>{`There could be various reasons why this error was thrown. But, if deploying from a Windows machine, we’ve seen that it could be
caused by an anti-virus software that you might have installed on your machine. Our suggestion is to try to temporary disable it and see if that produces any positive outcome.`}</p>
<_Heading level={2} id={"faq"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>FAQ</_Heading>
<_Heading level={3} id={"are-there-any-prerequisite-skills-or-specialized-aws-knowledge-required-to-deploy-webiny"} nextElement={{
      "type": "paragraph"
    }}>Are There Any Prerequisite Skills or Specialized AWS Knowledge Required to Deploy Webiny?</_Heading>
<p>{`To install Webiny, you will need a basic understanding of Node, Yarn, JavaScript, and terminal commands. While Webiny relies on many AWS services but you don’t need to have in-depth knowledge of these services because Webiny has automated mechanisms to deploy, configure, and set up the entire system.`}</p>
<_Heading level={3} id={"which-aws-regions-are-supported-by-webiny"} nextElement={{
      "type": "paragraph"
    }}>Which AWS Regions Are Supported by Webiny?</_Heading>
<p>{`Webiny supports all AWS regions except the China regions (Beijing and Ningxia) because Webiny relies on Amazon CloudFront and Amazon Cognito services, which are not available in `}<a parentName="p" {...{
        "href": "https://www.amazonaws.cn/en/about-aws/regional-product-services/"
      }}>{`Beijing and Ningxia regions`}</a>{` respectively.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;