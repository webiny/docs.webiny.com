/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/core-development-concepts/ci-cd/assets/introduction/cicd_infinity.png'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Introduction",
  "description": "Introduction to CI/CD.",
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
  "title": "What Is CI/CD?",
  "slug": "what-is-ci-cd",
  "children": []
}, {
  "title": "Different Phases",
  "slug": "different-phases",
  "children": []
}, {
  "title": "FAQ",
  "slug": "faq",
  "children": [{
    "title": "Can I Bring Additional Tools and Services?",
    "slug": "can-i-bring-additional-tools-and-services",
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
<li parentName="ul">{`what is CI/CD`}</li>
<li parentName="ul">{`get an overview of different CI/CD phases`}</li>
</ul>
</Alert>
<Alert type="info" mdxType="Alert">
<p>{`Get your CI/CD set up in no time with the built-in `}<_Link href="/docs/5.x/core-development-concepts/ci-cd/setup">{`CI/CD scaffold`}</_Link>{`.`}</p>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`The process of application development is much more than just writing application code. It entails several different subprocesses, which are equally, if not more, important. For example:`}</p>
<ul>
<li parentName="ul">{`testing`}</li>
<li parentName="ul">{`deployment into multiple environments`}</li>
<li parentName="ul">{`organizing code in multiple Version Control System (VCS) branches`}</li>
<li parentName="ul">{`choosing the right cloud infrastructure resources for the job`}</li>
<li parentName="ul">{`storing and managing cloud infrastructure state files`}</li>
<li parentName="ul">{`security`}</li>
<li parentName="ul">{`monitoring and observability `}{/* (https://thenewstack.io/monitoring-vs-observability-whats-the-difference/) */}</li>
<li parentName="ul">{`team organization`}</li>
</ul>
<p>{`In the following sections, we cover some of these subprocesses and provide best practices around how to structure and implement them, within your CI/CD workflow.`}</p>
<p>{`For starters, we give a quick introduction on what CI/CD is and what are its different phases.`}</p>
<_Heading level={2} id={"what-is-ci-cd"} nextElement={{
      "type": "paragraph"
    }}>What Is CI/CD?</_Heading>
<p><strong parentName="p">{`Continuous Integration (CI)`}</strong>{` is a software application development practice where developers integrate code into a shared repository frequently, preferably several times a day. Each integration can then be verified by an automated build and automated tests. While automated testing is not strictly part of CI, it is typically implied.`}</p>
<p><strong parentName="p">{`Continuous deployment (CD)`}</strong>{` is a software application development practice where code changes are automatically prepared for a release to production.`}</p>
<p>{`Note that the `}<strong parentName="p">{`CD`}</strong>{` abbreviation can also stand for `}<strong parentName="p">{`continuous delivery`}</strong>{`, which also entails continuous deployment of your project, only in a `}<a parentName="p" {...{
        "href": "https://en.wikipedia.org/wiki/Continuous_delivery"
      }}>{`more manual fashion`}</a>{`:`}</p>
<blockquote>
<p parentName="blockquote">{`Continuous delivery is the ability to deliver software that can be deployed at any time through manual releases; this is in contrast to continuous deployment which uses automated deployments.`}</p>
</blockquote>
<Alert type="info" mdxType="Alert">
<p>{`In the rest of this key topics section, when mentioning the `}<strong parentName="p">{`CD`}</strong>{` abbreviation, we’re explicitly referring to the `}<strong parentName="p">{`continuous deployment`}</strong>{`.`}</p>
</Alert>
<_Heading level={2} id={"different-phases"} nextElement={{
      "type": "paragraph"
    }}>Different Phases</_Heading>
<p>{`In general, the CI/CD workflow, sometimes also referred to as a release cycle, consists of a couple of phases:`}</p>
<Image src={_Image1} alt={"CI/CD Phases"} mdxType="Image" />
<p>{`It all starts with the `}<strong parentName="p">{`planing`}</strong>{` phase, in which we define the work that needs to be done, and delegate it to different members of the team. Teams use different approaches in order to organize the team and track its progress, for example `}<a parentName="p" {...{
        "href": "https://en.wikipedia.org/wiki/Scrum_%28software_development%29"
      }}>{`Scrum`}</a>{` or `}<a parentName="p" {...{
        "href": "https://en.wikipedia.org/wiki/Kanban"
      }}>{`Kanban`}</a>{`.`}</p>
<p>{`Once the work has been delegated, every developer goes through the `}<strong parentName="p">{`code`}</strong>{`, `}<strong parentName="p">{`build`}</strong>{`, and `}<strong parentName="p">{`test`}</strong>{` phases. Different tools, processes and services can be used here, starting from services for code storage and `}<a parentName="p" {...{
        "href": "https://en.wikipedia.org/wiki/Version_control"
      }}>{`version control`}</a>{` like `}<a parentName="p" {...{
        "href": "https://www.git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F"
      }}>{`Git`}</a>{` and `}<a parentName="p" {...{
        "href": "https://en.wikipedia.org/wiki/GitHub"
      }}>{`GitHub`}</a>{`, different testing frameworks like `}<a parentName="p" {...{
        "href": "https://jestjs.io/"
      }}>{`Jest`}</a>{`, `}<a parentName="p" {...{
        "href": "https://mochajs.org/"
      }}>{`Mocha`}</a>{` or `}<a parentName="p" {...{
        "href": "https://www.cypress.io/"
      }}>{`Cypress`}</a>{`, build tools like `}<a parentName="p" {...{
        "href": "https://babeljs.io/"
      }}>{`Babel`}</a>{`, `}<a parentName="p" {...{
        "href": "https://webpack.js.org/"
      }}>{`Webpack`}</a>{`, and so on.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`Most of the mentioned tools are specific to the JavaScript / Node.js ecosystem, and come set up by default in every Webiny project.`}</p>
</Alert>
<p>{`Once the tests are passing, we reach the `}<strong parentName="p">{`release`}</strong>{` and `}<strong parentName="p">{`deploy`}</strong>{` phases, in which new changes are deployed to actual users. Again, a plethora of different deployment tools can be used in this space, like `}<a parentName="p" {...{
        "href": "https://www.pulumi.com/"
      }}>{`Pulumi`}</a>{`, `}<a parentName="p" {...{
        "href": "https://aws.amazon.com/cloudformation/"
      }}>{`AWS CloudFormation`}</a>{`, `}<a parentName="p" {...{
        "href": "https://www.serverless.com/"
      }}>{`Serverless Framework`}</a>{`, and so on. With the tools, there are also different deployment strategies that can be utilized, like blue/green and canary deployments, A/B testing, and so on.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`By default, Webiny projects are deployed with Pulumi - a modern infrastructure as code (IaC) solution. Check out the `}<_Link href="/docs/5.x/infrastructure/pulumi-iac/iac-with-pulumi">{`Iac with Pulumi`}</_Link>{` topic to learn more.`}</p>
</Alert>
<p>{`Last but certainly not the least, we reach the `}<strong parentName="p">{`operate`}</strong>{` and `}<strong parentName="p">{`monitor`}</strong>{` phases in which we are, essentially, ensuring that the system that was deployed is operating as expected. Different speed and resource metrics, error reports and alerts are what provide the information on how stable our system is.`}</p>
<p>{`In general, monitoring serverless applications has shown to be a bit harder than monitoring “traditional” applications, mainly because of their distributed nature. They are almost always constructed out of several services that talk to each other and trying to find the service that is the root cause of a new issue can be hard. Fortunately, there are tools and services that assist us in this regard as well, such as `}<a parentName="p" {...{
        "href": "https://aws.amazon.com/cloudwatch/"
      }}>{`AWS CloudWatch`}</a>{` and `}<a parentName="p" {...{
        "href": "https://aws.amazon.com/xray/"
      }}>{`AWS X-ray`}</a>{`, `}<a parentName="p" {...{
        "href": "https://lumigo.io/"
      }}>{`Lumigo`}</a>{`, `}<a parentName="p" {...{
        "href": "https://epsagon.com/product/"
      }}>{`Epsagon`}</a>{`, and others.`}</p>
<p>{`And this completes the CI/CD workflow. Once we’ve passed through all of the steps, the whole workflow starts from the beginning, and it is repeating infinitely as part of our project development process. Note that the explained phases shouldn’t be considered as a hard rule - certain phases can be implemented in different ways and adjusted to your needs. `}{/* Be sure to check the [CI/CD How-To Guide](/docs/5.x/core-development-concepts/ci-cd/introduction) for more practical information on how to set up a CI/CD workflow for your Webiny project. */}</p>
<_Heading level={2} id={"faq"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>FAQ</_Heading>
<_Heading level={3} id={"can-i-bring-additional-tools-and-services"} nextElement={{
      "type": "paragraph"
    }}>Can I Bring Additional Tools and Services?</_Heading>
<p>{`Yes, you can. All of the tools that come with every Webiny project are the tools we’ve determined to work good, but some can still be replaced, if need be.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;