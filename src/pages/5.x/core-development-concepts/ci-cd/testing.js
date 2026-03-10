/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image2 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/core-development-concepts/ci-cd/assets/testing/ci_cd_tests_order.png'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/core-development-concepts/ci-cd/assets/testing/testing_trophy.png'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Testing",
  "description": "Learn what are cloud infrastructure state files and how to properly store them.",
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
  "title": "Application Testing - a Brief Overview",
  "slug": "application-testing-a-brief-overview",
  "children": [{
    "title": "Different Types of Tests",
    "slug": "different-types-of-tests",
    "children": [{
      "title": "Unit Tests",
      "slug": "unit-tests"
    }, {
      "title": "Integration Tests",
      "slug": "integration-tests"
    }, {
      "title": "End-to-End (E2E) Tests",
      "slug": "end-to-end-e2-e-tests"
    }, {
      "title": "Static Tests",
      "slug": "static-tests"
    }]
  }, {
    "title": "An Overview of Different Types of Tests",
    "slug": "an-overview-of-different-types-of-tests",
    "children": []
  }]
}, {
  "title": "Running Tests in a CI/CD Workflow",
  "slug": "running-tests-in-a-ci-cd-workflow",
  "children": [{
    "title": "The Order of Execution and Optimizing for Fast Feedback Loop",
    "slug": "the-order-of-execution-and-optimizing-for-fast-feedback-loop",
    "children": []
  }, {
    "title": "Points of Execution",
    "slug": "points-of-execution",
    "children": [{
      "title": "Pull Requests (PRs)",
      "slug": "pull-requests-p-rs"
    }, {
      "title": "Pushes to Long-Lived Branches",
      "slug": "pushes-to-long-lived-branches"
    }, {
      "title": "Local Development",
      "slug": "local-development"
    }]
  }, {
    "title": "Deploying Short-Lived (Ephemeral) Environments for Testing Purposes",
    "slug": "deploying-short-lived-ephemeral-environments-for-testing-purposes",
    "children": []
  }, {
    "title": "Testing Cloud Infrastructure Changes",
    "slug": "testing-cloud-infrastructure-changes",
    "children": [{
      "title": "Preview Deployments",
      "slug": "preview-deployments"
    }, {
      "title": "Mark Mission Critical Cloud Infrastructure Resources as Protected",
      "slug": "mark-mission-critical-cloud-infrastructure-resources-as-protected"
    }, {
      "title": "Write Cloud Infrastructure Code Tests",
      "slug": "write-cloud-infrastructure-code-tests"
    }, {
      "title": "Use Pulumi's Policy as Code (CrossGuard)",
      "slug": "use-pulumi-s-policy-as-code-cross-guard"
    }]
  }]
}, {
  "title": "FAQ",
  "slug": "faq",
  "children": [{
    "title": "Deploying Ephemeral Environments Takes a Long Time Finish, What Can I Do About It?",
    "slug": "deploying-ephemeral-environments-takes-a-long-time-finish-what-can-i-do-about-it",
    "children": []
  }, {
    "title": "Can't I Use Cloud Emulations Instead of Deploying Cloud Infrastructure Resources?",
    "slug": "can-t-i-use-cloud-emulations-instead-of-deploying-cloud-infrastructure-resources",
    "children": []
  }, {
    "title": "My Project Uses Webiny Applications, and Every Time I Deploy It Into an Ephemeral Environment, When I Open the Admin Area for the First Time, I Have to Go Through the Installation Wizard.",
    "slug": "my-project-uses-webiny-applications-and-every-time-i-deploy-it-into-an-ephemeral-environment-when-i-open-the-admin-area-for-the-first-time-i-have-to-go-through-the-installation-wizard",
    "children": []
  }, {
    "title": "How Can I Insert Production Data Into a Project Deployed Into the staging Environment (Data Dumps)?",
    "slug": "how-can-i-insert-production-data-into-a-project-deployed-into-the-staging-environment-data-dumps",
    "children": []
  }]
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
const Image = makeShortcode("Image");
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





<Alert type="success" title="What you'll learn" mdxType="Alert">
<ul>
<li parentName="ul">{`how to organize and run tests for your applications`}</li>
</ul>
</Alert>
<Alert type="info" mdxType="Alert">
<p>{`Get your CI/CD set up in no time with the built-in `}<_Link href="/docs/5.x/core-development-concepts/ci-cd/setup">{`CI/CD scaffold`}</_Link>{`.`}</p>
</Alert>
<_Heading level={2} id={"application-testing-a-brief-overview"} nextElement={{
      "type": "paragraph"
    }}>Application Testing - a Brief Overview</_Heading>
<p>{`One of the fundamental parts of every CI/CD workflow are tests, which essentially, help us ensure that our application is working the way it’s supposed to.`}</p>
<p>{`“Does the login system work?”, “Is the price calculated correctly?”, or “Is a particular page rendered correctly?”, are just some of the examples of parts of our application that we can inspect every time our tests are run, both in manual and automated fashion.`}</p>
<_Heading level={3} id={"different-types-of-tests"} nextElement={{
      "type": "paragraph"
    }}>Different Types of Tests</_Heading>
<p>{`There are three fundamental types of tests we usually write while developing our application: unit, integration, and end-to-end (E2E). With the three, these days more and more, developers are also incorporating something called static tests.`}</p>
<p>{`Let’s briefly cover each type.`}</p>
<_Heading level={4} id={"unit-tests"} nextElement={{
      "type": "paragraph"
    }}>Unit Tests</_Heading>
<p>{`Unit tests are the smallest when it comes to scope, and, as the name itself suggests, are created to ensure a small unit of our application is working as expected. For example, we might test whether a particular function, given a specific set of arguments, returns the correct result.`}</p>
<p>{`The code we’re testing here does not interact with other moving parts in your application or external services, like for example a database.`}</p>
<p>{`Typically, unit tests are the fastest to run.`}</p>
<_Heading level={4} id={"integration-tests"} nextElement={{
      "type": "paragraph"
    }}>Integration Tests</_Heading>
<p>{`As soon as the code we’re testing interacts with other moving parts or external services, like for example a database, we’re talking about integration tests.`}</p>
<p>{`Typically, because external services need to be deployed, running these is slower than running unit tests. But, they can provide more confidence that our application is working, simply because of a much greater coverage than what unit tests provide.`}</p>
<_Heading level={4} id={"end-to-end-e2-e-tests"} nextElement={{
      "type": "paragraph"
    }}>End-to-End (E2E) Tests</_Heading>
<p>{`Finally, the end-to-end (E2E) tests the whole application, using it as an actual user would do it. Some examples are testing a GraphQL API or when talking about frontend development, simulating a user completing a signup form.`}</p>
<p>{`Running these tests is slower than both integration and unit tests, but they can provide the best result when it comes to ensuring that our application is working as expected. Simulating a user completing a user signup flow not only ensures our user interface is working as it should be, but also the backend HTTP API, with which the form is interacting.`}</p>
<_Heading level={4} id={"static-tests"} nextElement={{
      "type": "paragraph"
    }}>Static Tests</_Heading>
<p>{`Static tests are used to check issues in our code, without actually executing it. For example:`}</p>
<ul>
<li parentName="ul">{`are there any issues on the types-level (`}<a parentName="li" {...{
          "href": "https://www.typescriptlang.org/"
        }}>{`TypeScript`}</a>{`)`}</li>
<li parentName="ul">{`is there code that is redundant or code that cannot be reached (`}<a parentName="li" {...{
          "href": "https://eslint.org/"
        }}>{`ESLint`}</a>{`)`}</li>
<li parentName="ul">{`is our code following the defined formatting rules (`}<a parentName="li" {...{
          "href": "https://prettier.io/"
        }}>{`Prettier`}</a>{`)`}</li>
</ul>
<Alert type="success" mdxType="Alert">
<p>{`All of the mentioned tools (and some others) are already included and configured for you in every Webiny project.`}</p>
</Alert>
<p>{`Usually, these tests are reasonably fast to run, and sometimes, even the fastest.`}</p>
<_Heading level={3} id={"an-overview-of-different-types-of-tests"} nextElement={{
      "type": "paragraph"
    }}>An Overview of Different Types of Tests</_Heading>
<p>{`The following diagram, sometimes called the `}<a parentName="p" {...{
        "href": "https://testingjavascript.com/"
      }}>{`Testing Trophy`}</a>{`, shows all four types of tests we’ve just explained.`}</p>
<Image src={_Image1} alt={"Environments."} mdxType="Image" />
<_Heading level={2} id={"running-tests-in-a-ci-cd-workflow"} nextElement={{
      "type": "paragraph"
    }}>Running Tests in a CI/CD Workflow</_Heading>
<p>{`Now that we’ve briefly covered different the fundamental types of tests, let’s see how we can run them in a CI/CD workflow.`}</p>
<_Heading level={3} id={"the-order-of-execution-and-optimizing-for-fast-feedback-loop"} nextElement={{
      "type": "paragraph"
    }}>The Order of Execution and Optimizing for Fast Feedback Loop</_Heading>
<p>{`While designing our CI/CD workflow, one of the elements we need to pay attention to is how fast it is being executed or in other words, how fast it can provide valuable feedback to our organization.`}</p>
<p>{`Because of this, it is recommended that we first run tests that take the least amount of time to finish. This is because if one of those fail, in most cases, there is no reason to continue with the rest of the tests, which take more time to finish.`}</p>
<p>{`So, with that in mind, usually we want to start with running our static and unit tests. As these don’t rely on any external services, these will always require the least amount of time to finish.`}</p>
<p>{`Once static and unit tests are passing, we want to continue with integration tests. Note that, in order to perform these, we’ll most probably need to deploy external services or supporting cloud infrastructure resources. With serverless technologies this will definitely be the case, as testing against real services (and not emulations) will provide the highest level of accuracy and confidence.`}</p>
<p>{`The requirement of having to deploy external services or supporting cloud infrastructure resources in order to run integration tests makes them slower to finish. But do note that sometimes it’s acceptable to only deploy the needed subset of external resource, which can make this step a bit faster. We’ll cover this in the following sections.`}</p>
<p>{`Finally, end-to-end (E2E) tests should be run last, as they almost always require the most amount of time to finish. Here we don’t have the option to partially deploy external service or supporting cloud infrastructure resources. In order to get the full picture, we need to deploy everything.`}</p>
<p>{`The following diagram shows the recommended order in which different types of tests can be run in a CI/CD workflow:`}</p>
<Image src={_Image2} alt={"Environments."} mdxType="Image" />
<_Heading level={3} id={"points-of-execution"} nextElement={{
      "type": "paragraph"
    }}>Points of Execution</_Heading>
<p>{`When designing a CI/CD workflow, there are a couple of key points in which the tests are usually run.`}</p>
<_Heading level={4} id={"pull-requests-p-rs"} nextElement={{
      "type": "paragraph"
    }}>Pull Requests (PRs)</_Heading>
<p>{`As we’ve learned in the `}<_Link href="/docs/5.x/core-development-concepts/ci-cd/version-control">{`Version Control`}</_Link>{` section, in GitHub flow, developers integrate new application changes via pull requests (PRs). So, this will be the first line of defense where we’ll want to ensure the proposed code changes don’t introduce unwanted results or any types of regressions. Only once all of the tests have passed and the code was reviewed by one or more members of the team, it should be allowed for a PR to be merged into one of the long-lived branches.`}</p>
<p>{`Note that, since integration and end-to-end (E2E) tests almost always require an external service or cloud infrastructure resources to be deployed, in order to run tests on PRs, we usually deploy temporary or sometimes called, ephemeral, environments. More on this can be found in the following section.`}</p>
<_Heading level={4} id={"pushes-to-long-lived-branches"} nextElement={{
      "type": "paragraph"
    }}>Pushes to Long-Lived Branches</_Heading>
<p>{`Once a PR has been merged into one of the long-lived branches (`}<inlineCode parentName="p">{`dev`}</inlineCode>{`, `}<inlineCode parentName="p">{`staging`}</inlineCode>{`, `}<inlineCode parentName="p">{`prod`}</inlineCode>{`), it’s recommend that all of the tests are run once again, but this time, against the already deployed long-lived environment, if possible. In other words, we don’t want to provision a temporary environment in order to run these (like we did with PRs). We want to ensure that the system that’s already live and serving users, is working as it’s supposed to.`}</p>
<p>{`Although there might be no differences between the code in the merged PR and the long-lived branch, it’s still possible that an environment-specific configuration is incorrectly specified or simply missing, in the branch (and deployed environment) into which the PR was merged. These may include values like API keys to 3rd party services, different configuration values for the services we developed on our own, and more.`}</p>
<p>{`In some organizations, the point in which a PR has been merged and deployed, could also be the point in which QA teams start their manual testing, especially if we’re talking about merges happening against `}<inlineCode parentName="p">{`staging`}</inlineCode>{` or `}<inlineCode parentName="p">{`production`}</inlineCode>{` branches.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`Merging strategies are covered in the upcoming `}<_Link href="/docs/5.x/core-development-concepts/ci-cd/workflows">{`Workflows`}</_Link>{` guide.`}</p>
</Alert>
<_Heading level={4} id={"local-development"} nextElement={{
      "type": "paragraph"
    }}>Local Development</_Heading>
<p>{`It’s useful to mention that developers should also be able to run tests without the need of an external CI/CD workflow. This is important when making code changes locally, where we want to have a fast feedback loop and quickly ensure we aren’t breaking any existing functionality. We certainly don’t want to end up waiting for the CI/CD workflow to tell us that.`}</p>
<_Heading level={3} id={"deploying-short-lived-ephemeral-environments-for-testing-purposes"} nextElement={{
      "type": "paragraph"
    }}>Deploying Short-Lived (Ephemeral) Environments for Testing Purposes</_Heading>
<p>{`As mentioned in the previous `}<_Link href="/docs/5.x/core-development-concepts/ci-cd/testing#points-of-execution">{`Points of Execution`}</_Link>{` section, tests can be run upon submitting PRs. And since integration and end-to-end (E2E) tests require cloud infrastructure resources to be deployed, we end up with a need to deploy our project into a short-lived, or sometimes also called an ephemeral, environment.`}</p>
<p>{`In other words, once a PR has been opened, we do the following:`}</p>
<ol>
<li parentName="ol">{`deploy the project into an ephemeral environment`}</li>
<li parentName="ol">{`run all tests upon opening the PR and submitting and additional changes`}</li>
<li parentName="ol">{`once the PR has been closed, destroy the deployed ephemeral environment`}</li>
</ol>
<p>{`Apart from enabling us to run tests against real cloud infrastructure resources, this approach also provides a “live preview” of the changes we’re about to merge. This can be very handy, for example, when the change that’s about to get merged is more of a cosmetic nature, which might require several iterations and manual checks before it’s approved.`}</p>
<p>{`Note that, in order to deploy these ephemeral environments, we suggest a separate cloud (AWS) account is created. It should not be linked in any way with the accounts used for deploying into `}<inlineCode parentName="p">{`dev`}</inlineCode>{`, `}<inlineCode parentName="p">{`staging`}</inlineCode>{`, and `}<inlineCode parentName="p">{`prod`}</inlineCode>{` environment.`}</p>
<p>{`Also, since we’re using a single cloud (AWS) account, in which we might have multiple ephemeral environments deployed at the same time (because of multiple active PRs), upon `}<_Link href="/docs/5.x/core-development-concepts/basics/project-deployment">{`deploying`}</_Link>{` the project, we suggest that the name of the environment is dynamically generated. Even better, the name of the environment can be inherited from the PR number, which should we should be able to retrieve while our CI/CD workflow is running.`}</p>
<Alert type="warning" title="CAUTION" mdxType="Alert">
<p>{`When we talk about multiple environment deployments, it’s important to note that we’re talking about deploying multiple copies of our project, both in terms of the application code and, more importantly, needed cloud infrastructure resources.`}</p>
<p>{`In some cases, doing this can `}<_Link href="/docs/5.x/core-development-concepts/ci-cd/environments#multiple-environments-and-extra-costs">{`incur additional cost`}</_Link>{`.`}</p>
</Alert>
<_Heading level={3} id={"testing-cloud-infrastructure-changes"} nextElement={{
      "type": "paragraph"
    }}>Testing Cloud Infrastructure Changes</_Heading>
<p>{`With serverless technologies and cloud development in general, one thing that has significantly changed for developers is the fact that they now get to have more freedom and impact when it comes to deploying necessary cloud infrastructure resources. It’s not unusual for a particular fix or feature to introduce a change or two in the existing deployed cloud infrastructure.`}</p>
<p>{`For that reason, we need to take necessary precaution measures that ensure our cloud infrastructure is not negatively affected in any way. A couple of examples of this might be:`}</p>
<ul>
<li parentName="ul">{`deletions of mission critical cloud infrastructure resources like databases, identity pools, file storage, and similar`}</li>
<li parentName="ul">{`over-provisioning (using more of something than you actually need)`}</li>
<li parentName="ul">{`not respecting the required general and potentially internal security policies`}</li>
<li parentName="ul">{`not following some of the established internal conventions`}</li>
<li parentName="ul">{`and more…`}</li>
</ul>
<p>{`That’s why we recommend that you perform various cloud-infrastructure related inspections before merging any code changes into long-lived branches. The following are some of the approaches you can utilize.`}</p>
<_Heading level={4} id={"preview-deployments"} nextElement={{
      "type": "paragraph"
    }}>Preview Deployments</_Heading>
<p>{`Once a PR has been submitted, it’s useful to preview the deployment that’s about to happen after the PR is merged.`}</p>
<p>{`The first point where we’re able to do that is when a PR has been submitted against the `}<inlineCode parentName="p">{`dev`}</inlineCode>{` long-lived branch.`}</p>
<p>{`By simply running the following command …`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`yarn webiny deploy --env {env} --preview`}
</Editor>
<p>{`…we can get a list of all cloud resources that will change, once the code has been merged and deployment has finished.`}</p>
<p>{`Do note that, when setting up this step, proper cloud account credentials will need to be passed. If we are previewing deployment for the `}<inlineCode parentName="p">{`dev`}</inlineCode>{` environment, then we need to use the credentials used for deploying into that environment. The same goes for `}<inlineCode parentName="p">{`staging`}</inlineCode>{` and `}<inlineCode parentName="p">{`prod`}</inlineCode>{` branches / environments.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`Read more about the preview command in the `}<_Link href="/docs/5.x/infrastructure/basics/preview-deployments">{`Preview Deployments`}</_Link>{` guide.`}</p>
</Alert>
<_Heading level={4} id={"mark-mission-critical-cloud-infrastructure-resources-as-protected"} nextElement={{
      "type": "paragraph"
    }}>Mark Mission Critical Cloud Infrastructure Resources as Protected</_Heading>
<p>{`By default, Webiny uses `}<_Link href="/docs/5.x/infrastructure/pulumi-iac/iac-with-pulumi">{`Pulumi`}</_Link>{` as the default infrastructure as code (IaC) framework, which allows us to mark one or more cloud infrastructure resources as `}<a parentName="p" {...{
        "href": "https://www.pulumi.com/docs/intro/concepts/resources/#protect"
      }}>{`protected`}</a>{`:`}</p>
<blockquote>
<p parentName="blockquote">{`The `}<inlineCode parentName="p">{`protect`}</inlineCode>{` option marks a resource as protected. A protected resource cannot be deleted directly. Instead, you must first set `}<inlineCode parentName="p">{`protect: false`}</inlineCode>{` and run `}<inlineCode parentName="p">{`pulumi up`}</inlineCode>{`. Then you can delete the resource by removing the line of code or by running `}<inlineCode parentName="p">{`pulumi destroy`}</inlineCode>{`. The default is to inherit this value from the parent resource, and `}<inlineCode parentName="p">{`false`}</inlineCode>{` for resources without a parent.`}</p>
</blockquote>
<Alert type="info" mdxType="Alert">
<p>{`Within a Webiny project, note that the `}<inlineCode parentName="p">{`pulumi up`}</inlineCode>{` and `}<inlineCode parentName="p">{`pulumi destroy`}</inlineCode>{` commands are run via the `}<_Link href="/docs/5.x/core-development-concepts/basics/project-deployment"><inlineCode parentName="p">{`webiny deploy`}</inlineCode></_Link>{` and `}<_Link href="/docs/5.x/infrastructure/basics/destroy-cloud-infrastructure"><inlineCode parentName="p">{`webiny destroy`}</inlineCode></_Link>{` commands, respectively.`}</p>
</Alert>
<p>{`Note that some of the cloud infrastructure resources that Webiny deploys for you, such as the Amazon DynamoDB table or the Amazon Cognito User Pool are already marked as protected.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`To learn more about the necessary cloud infrastructure resources Webiny is relying on, check out the `}<_Link href="/docs/5.x/architecture/introduction">{`Cloud Infrastructure`}</_Link>{` section.`}</p>
</Alert>
<_Heading level={4} id={"write-cloud-infrastructure-code-tests"} nextElement={{
      "type": "paragraph"
    }}>Write Cloud Infrastructure Code Tests</_Heading>
<p>{`Since the Pulumi framework enables us to declare our cloud infrastructure via code, we can write tests for it.`}</p>
<p>{`For more instructions on how to write these, we suggest you visit the `}<a parentName="p" {...{
        "href": "https://www.pulumi.com/docs/guides/testing/"
      }}>{`official Pulumi documentation`}</a>{`. For any potential integration-related questions, feel free to `}<a parentName="p" {...{
        "href": "https://www.webiny.com/slack"
      }}>{`contact us`}</a>{`.`}</p>
<_Heading level={4} id={"use-pulumi-s-policy-as-code-cross-guard"} nextElement={{
      "type": "paragraph"
    }}>Use Pulumi&#39;s Policy as Code (CrossGuard)</_Heading>
<p>{`Another feature that the Pulumi framework offers is `}<a parentName="p" {...{
        "href": "https://www.pulumi.com/docs/guides/crossguard/"
      }}>{`Policy As Code (CrossGuard)`}</a>{`:`}</p>
<blockquote>
<p parentName="blockquote">{`CrossGuard empowers you to set guardrails to enforce compliance for resources so developers within an organization can provision their own infrastructure while sticking to best practices and security compliance. Using Policy as Code, you can write flexible business or security policies.`}</p>
<p parentName="blockquote">{`Using CrossGuard, organization administrators can apply these rules to particular stacks within their organization. When policies are executed as part of your Pulumi deployments, any violation will gate or block that update from proceeding.`}</p>
</blockquote>
<p>{`In order to get started, we recommend you visit the `}<a parentName="p" {...{
        "href": "https://www.pulumi.com/docs/get-started/crossguard/"
      }}>{`official Pulumi documentation`}</a>{`. For any potential integration-related questions, feel free to `}<a parentName="p" {...{
        "href": "https://www.webiny.com/slack"
      }}>{`contact us`}</a>{`.`}</p>
<_Heading level={2} id={"faq"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>FAQ</_Heading>
<_Heading level={3} id={"deploying-ephemeral-environments-takes-a-long-time-finish-what-can-i-do-about-it"} nextElement={{
      "type": "paragraph"
    }}>Deploying Ephemeral Environments Takes a Long Time Finish, What Can I Do About It?</_Heading>
<p>{`It’s true that certain cloud infrastructure resources take more time to be fully deployed, for example Amazon CloudFront distributions or Amazon OpenSearch clusters. Naturally, because of this, the execution speed of our CI/CD workflows also gets a negative impact as well.`}</p>
<p>{`Hopefully, this is something that will get improved over time by your cloud provider. But still, in order to tackle this problem now, one approach we recommend is to deploy some of the cloud infrastructure resources separately. You could even do this manually and not within the existing Pulumi code you have in your project.`}</p>
<p>{`Once you have that, the projects that you deploy into ephemeral environments could be configured and instructed to rely on these already deployed cloud infrastructure resources, instead of deploying them on their own.`}</p>
<p>{`So, in case of the Amazon OpenSearch, we’d deploy a single cluster, after which all projects that are deployed into an ephemeral environment would use that, instead of deploying the cluster on their own.`}</p>
<p>{`For some cloud infrastructure resources this approach makes more sense, for some less or no sense. It’s up to you to figure out if this approach can work for your particular project.`}</p>
<_Heading level={3} id={"can-t-i-use-cloud-emulations-instead-of-deploying-cloud-infrastructure-resources"} nextElement={{
      "type": "paragraph"
    }}>Can&#39;t I Use Cloud Emulations Instead of Deploying Cloud Infrastructure Resources?</_Heading>
<p>{`Sure, there are different tools that try to emulate the cloud and, sort of, enable local development. But the main problem with these solutions is that they can’t really keep pace with the developments happening in different clouds, and most importantly, will never be able to 100% emulate the actual service. This poses a problem because, while developing your application, it might seem everything works. But, when you deploy your application into the cloud, different issues may start to occur.`}</p>
<p>{`Because of this, we’d always recommend testing against real services.`}</p>
<_Heading level={3} id={"my-project-uses-webiny-applications-and-every-time-i-deploy-it-into-an-ephemeral-environment-when-i-open-the-admin-area-for-the-first-time-i-have-to-go-through-the-installation-wizard"} nextElement={{
      "type": "paragraph"
    }}>My Project Uses Webiny Applications, and Every Time I Deploy It Into an Ephemeral Environment, When I Open the Admin Area for the First Time, I Have to Go Through the Installation Wizard.</_Heading>
<p>{`Deploying your Webiny project into an ephemeral environments means we end up with a brand new system, with no data, nor configurations for different Webiny applications that you might have enabled, like Security, Page Builder, File Manager, and so on. So unfortunately, having to go through installation wizard in our browser cannot be avoided.`}</p>
<p>{`But, note that while we’re completing the wizard, a series of GraphQL API mutations are issued in the background. So, in order to automate the installation phase, we can create a script that’s executed as soon as the `}<strong parentName="p">{`API`}</strong>{` project application is deployed, which will just execute all of the GraphQL API mutations for us. Meaning, once we open the Admin Area for the first time.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`Learn more about the `}<strong parentName="p">{`API`}</strong>{` project application in the `}<_Link href="/docs/5.x/architecture/api/overview">{`Cloud Infrastructure`}</_Link>{` key topics section.`}</p>
</Alert>
<_Heading level={3} id={"how-can-i-insert-production-data-into-a-project-deployed-into-the-staging-environment-data-dumps"} nextElement={{
      "type": "paragraph"
    }}>How Can I Insert Production Data Into a Project Deployed Into the<code>staging</code>Environment (Data Dumps)?</_Heading>
<p>{`Writing custom scripts is probably the best answer we can give you here, as every system is specific.`}</p>
<p>{`Essentially, you’d be copying all of the data, from different services, from one environment into another. And although at first this may not sound too complicated, you may encounter different problems because of the following:`}</p>
<ul>
<li parentName="ul">{`if you’ve followed the general recommendation, different cloud (AWS) accounts are used for different long-lived environments`}</li>
<li parentName="ul">{`copying data, in some cases, also includes copying of files, Cognito users, and more`}</li>
<li parentName="ul">{`we need to decide which data should be copied and whether it should be identical or modified in the process`}</li>
</ul>
<p>{`As you can see, a simple “copy all of the data” script can very quickly become a complex script that requires a lot of knowledge about the project itself and the specific requirements that are in front of you.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;