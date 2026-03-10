/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image4 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/core-development-concepts/ci-cd/assets/workflows/merging_3.png'
import _Image3 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/core-development-concepts/ci-cd/assets/workflows/merging_2.png'
import _Image2 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/core-development-concepts/ci-cd/assets/workflows/merging_1.png'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/core-development-concepts/ci-cd/assets/workflows/short_long_lived.png'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Workflows",
  "description": "Get your CI/CD set up in no time with the built-in CI/CD scaffold",
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
  "title": "Release Cycles",
  "slug": "release-cycles",
  "children": []
}, {
  "title": "Branches and Environments",
  "slug": "branches-and-environments",
  "children": [{
    "title": "Long-Lived Branches and Environments",
    "slug": "long-lived-branches-and-environments",
    "children": []
  }, {
    "title": "Short-Lived Branches and Environments",
    "slug": "short-lived-branches-and-environments",
    "children": [{
      "title": "Development",
      "slug": "development"
    }, {
      "title": "Pull Requests (PRs)",
      "slug": "pull-requests-p-rs"
    }]
  }, {
    "title": "Diagram",
    "slug": "diagram",
    "children": []
  }]
}, {
  "title": "Merging / Deployment Strategies",
  "slug": "merging-deployment-strategies",
  "children": [{
    "title": "1. Initial Branching and Pull Requests (PRs)",
    "slug": "1-initial-branching-and-pull-requests-p-rs",
    "children": []
  }, {
    "title": "2. Merge Changes to staging Branch",
    "slug": "2-merge-changes-to-staging-branch",
    "children": [{
      "title": "Merge Strategies",
      "slug": "merge-strategies"
    }, {
      "title": "The Recommended Strategy",
      "slug": "the-recommended-strategy"
    }]
  }, {
    "title": "3. Merge Changes to prod Branch",
    "slug": "3-merge-changes-to-prod-branch",
    "children": []
  }, {
    "title": "4. Hot Fixes",
    "slug": "4-hot-fixes",
    "children": []
  }]
}, {
  "title": "FAQ",
  "slug": "faq",
  "children": [{
    "title": "Except the dev, staging, and prod, Can We Have Additional Long-Lived Branches and Environments as Part of Our CI/CD Workflow?",
    "slug": "except-the-dev-staging-and-prod-can-we-have-additional-long-lived-branches-and-environments-as-part-of-our-ci-cd-workflow",
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
<li parentName="ul">{`how to set up a CI/CD workflow for your Webiny project`}</li>
</ul>
</Alert>
<Alert type="info" mdxType="Alert">
<p>{`Get your CI/CD set up in no time with the built-in `}<_Link href="/docs/5.x/core-development-concepts/ci-cd/setup">{`CI/CD scaffold`}</_Link>{`.`}</p>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`In this guide, we combine all of the concepts we covered in previous `}<_Link href="/docs/5.x/core-development-concepts/ci-cd/environments">{`Environments`}</_Link>{`, `}<_Link href="/docs/5.x/core-development-concepts/ci-cd/version-control">{`Version Control`}</_Link>{`, `}<_Link href="/docs/5.x/core-development-concepts/ci-cd/cloud-infrastructure-state-files">{`Managing Cloud Infrastructure Files`}</_Link>{`, and `}<_Link href="/docs/5.x/core-development-concepts/ci-cd/testing">{`Testing`}</_Link>{` articles, in order to establish a complete CI/CD workflow. In case you missed those, we encourage you to check them out first.`}</p>
<p>{`Before we continue, please note there are no hard-rules when implementing your own CI/CD workflow. Certainly, there are some best practices, but do note that the workflow we’re about to outline here can be modified and adjusted to your needs.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`If you’d like to learn more about the CI/CD practice in general and all of the different phases it consists of, check out the `}<_Link href="/docs/5.x/core-development-concepts/ci-cd/introduction">{`CI/CD`}</_Link>{` key topic.`}</p>
</Alert>
<_Heading level={2} id={"release-cycles"} nextElement={{
      "type": "paragraph"
    }}>Release Cycles</_Heading>
<p>{`Usually, teams deliver new features and fixes within `}<a parentName="p" {...{
        "href": "https://en.wikipedia.org/wiki/Software_release_life_cycle"
      }}>{`release cycles`}</a>{`.`}</p>
<p>{`In other words, in a single release cycle, depending on the priorities and available resources, a number of tasks is assigned to developers, which, ideally, should be completed before the upcoming `}<em parentName="p">{`release`}</em>{`. When we say the word `}<em parentName="p">{`release`}</em>{`, we’re referring to an event in which we’re rolling out all of the planned fixes and features to actual users.`}</p>
<p>{`Some teams have biweekly, some weekly, and some even daily release cycles.`}</p>
<p>{`Which schedule you choose again depends on available resources and also on the particular project requirements that are in front of you.`}</p>
<p>{`In the rest of this article, we don’t assume any particular release schedule to be followed. But, in case you’re just starting out, we recommend following the weekly release schedule. You can then adjust it along the way, if need be.`}</p>
<_Heading level={2} id={"branches-and-environments"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Branches and Environments</_Heading>
<_Heading level={3} id={"long-lived-branches-and-environments"} nextElement={{
      "type": "paragraph"
    }}>Long-Lived Branches and Environments</_Heading>
<p>{`The workflow we’re about to show will consist of three long-lived Git branches and respective environments into which our Webiny project will be deployed: `}<inlineCode parentName="p">{`dev`}</inlineCode>{`, `}<inlineCode parentName="p">{`staging`}</inlineCode>{`, and `}<inlineCode parentName="p">{`prod`}</inlineCode>{`. As mentioned in previous sections, these are used as follows:`}</p>
<ul>
<li parentName="ul"><inlineCode parentName="li">{`dev`}</inlineCode>{` - new fixes and features are first merged into this branch and deployed into this environment`}</li>
<li parentName="ul"><inlineCode parentName="li">{`staging`}</inlineCode>{` - for testing new release candidates in a production-like environment`}</li>
<li parentName="ul"><inlineCode parentName="li">{`production`}</inlineCode>{` - the system used by real users, must be in a state that is considered stable, as much of the time as possible`}</li>
</ul>
<Alert type="info" mdxType="Alert">
<p>{`Typically, every commit pushed into one of these long-lived branches should trigger automatically re-deployment into its respective long-lived environment.`}</p>
</Alert>
<Alert type="success" mdxType="Alert">
<p>{`The `}<inlineCode parentName="p">{`dev`}</inlineCode>{` branch is usually what we select as the `}<_Link href="/docs/5.x/core-development-concepts/ci-cd/version-control#shared-branches">{`default branch`}</_Link>{` of our project’s Git repository.`}</p>
</Alert>
<_Heading level={3} id={"short-lived-branches-and-environments"} nextElement={{
      "type": "heading",
      "depth": 4
    }}>Short-Lived Branches and Environments</_Heading>
<_Heading level={4} id={"development"} nextElement={{
      "type": "paragraph"
    }}>Development</_Heading>
<p>{`For development and testing purposes, developers are also able to create their own short-lived branches and deploy the project into one or more short-lived and isolated environments. In practice, every new fix or a features starts with these two.`}</p>
<_Heading level={4} id={"pull-requests-p-rs"} nextElement={{
      "type": "paragraph"
    }}>Pull Requests (PRs)</_Heading>
<p>{`If we wanted to make our CI/CD even more robust, upon submitting pull requests (PRs), we could also dynamically create additional short-lived, or sometimes even called `}<em parentName="p">{`ephemeral`}</em>{`, environments. These enable us to perform automated and even manual tests and ensure that no regressions have been introduced by the changes contained in the submitted PR - before merging the code changes into one of the long-lived branches.`}</p>
<p>{`Once a PR is closed, these environments are immediately destroyed.`}</p>
<_Heading level={3} id={"diagram"} nextElement={{
      "type": "paragraph"
    }}>Diagram</_Heading>
<p>{`The following diagrams gives us an overview of the explained organization of Git branches and environments into which our project is deployed:`}</p>
<Image src={_Image1} alt={"Organization of Git Branches and Environments"} mdxType="Image" />
<p>{`With this overview, let’s continue by going step-by-step into how everything works together.`}</p>
<_Heading level={2} id={"merging-deployment-strategies"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Merging / Deployment Strategies</_Heading>
<_Heading level={3} id={"1-initial-branching-and-pull-requests-p-rs"} nextElement={{
      "type": "paragraph"
    }}>1. Initial Branching and Pull Requests (PRs)</_Heading>
<p>{`Developers start their development process by creating a new branch from the `}<inlineCode parentName="p">{`dev`}</inlineCode>{` long-lived branch. Once they feel that a particular feature or a fix they’ve been working on is ready, they submit a new pull request (PR), where the target branch is again `}<inlineCode parentName="p">{`dev`}</inlineCode>{`.`}</p>
<p>{`As mentioned above, when a PR is submitted, we want to run different types of tests against a project that was dynamically deployed into a `}<_Link href="/docs/5.x/core-development-concepts/ci-cd/testing#deploying-short-lived-ephemeral-environments-for-testing-purposes">{`short-lived (ephemeral)`}</_Link>{` test environment. Once all tests are passing, we can then approve the PR and merge its code changes into the `}<inlineCode parentName="p">{`dev`}</inlineCode>{` branch.`}</p>
<Image src={_Image2} alt={"Webiny Cloud Infrastructure - Environments"} mdxType="Image" />
<_Heading level={3} id={"2-merge-changes-to-staging-branch"} nextElement={{
      "type": "paragraph"
    }}>2. Merge Changes to<code>staging</code>Branch</_Heading>
<p>{`Once all of the pending PRs have been tested successfully and merged into the `}<inlineCode parentName="p">{`dev`}</inlineCode>{` branch, we then continue by merging the `}<inlineCode parentName="p">{`dev`}</inlineCode>{` branch into `}<inlineCode parentName="p">{`staging`}</inlineCode>{`. This can be done either via a new PR or a direct merge, but we recommend the former. This is simply because creating a PR first allows us to maybe `}<_Link href="/docs/5.x/core-development-concepts/ci-cd/testing#testing-cloud-infrastructure-changes">{`preview the deployment`}</_Link>{` that will happen once the code is merged, and maybe perform some other tests.`}</p>
<Image src={_Image3} alt={"Webiny Cloud Infrastructure - Environments"} mdxType="Image" />
<p>{`As mentioned, merging code into long-lived branches should trigger automatic deploys into their respective long-lived environments. So, once the deploy into the `}<inlineCode parentName="p">{`staging`}</inlineCode>{` environment has been completed, the rest of the team, for example product owners or `}<a parentName="p" {...{
        "href": "https://en.wikipedia.org/wiki/Quality_assurance"
      }}>{`QA`}</a>{` teams, can start testing the new release candidate.`}</p>
<p>{`If issues are discovered while testing, we create new PRs that contain fixes for them, and in terms of their target branch, there are two ways we can go about it.`}</p>
<_Heading level={4} id={"merge-strategies"} nextElement={{
      "type": "heading",
      "depth": 5
    }}>Merge Strategies</_Heading>
<h5>{`Choosing `}<inlineCode parentName="h5">{`staging`}</inlineCode>{` as the Target Branch`}</h5>
<p>{`With this approach, a PR is created against the `}<inlineCode parentName="p">{`staging`}</inlineCode>{` branch. And, once the tests are passing, we merge the code changes into it.`}</p>
<p>{`Note that this means that we now have code changes that exist in `}<inlineCode parentName="p">{`staging`}</inlineCode>{` branch, but not in `}<inlineCode parentName="p">{`dev`}</inlineCode>{`. So, at the end of a release cycle, it’s important that we sync `}<inlineCode parentName="p">{`staging`}</inlineCode>{` and `}<inlineCode parentName="p">{`dev`}</inlineCode>{` branches, by merging all of the additional code changes from `}<inlineCode parentName="p">{`staging`}</inlineCode>{` branch back into the `}<inlineCode parentName="p">{`dev`}</inlineCode>{`.`}</p>
<h5>{`Choosing `}<inlineCode parentName="h5">{`dev`}</inlineCode>{` as the Target Branch`}</h5>
<p>{`Instead of choosing `}<inlineCode parentName="p">{`staging`}</inlineCode>{` as the target branch of the PR, we can choose `}<inlineCode parentName="p">{`dev`}</inlineCode>{`.`}</p>
<p>{`Unlike with the previous approach, here, once the release has been completed, we don’t have to merge all of the changes back into the `}<inlineCode parentName="p">{`dev`}</inlineCode>{` branch. But of course, since the code changes from the PR ware merged into `}<inlineCode parentName="p">{`dev`}</inlineCode>{`, we’ll need to repeat the process of merging the `}<inlineCode parentName="p">{`dev`}</inlineCode>{` branch into `}<inlineCode parentName="p">{`staging`}</inlineCode>{`.`}</p>
<_Heading level={4} id={"the-recommended-strategy"} nextElement={{
      "type": "paragraph"
    }}>The Recommended Strategy</_Heading>
<p>{`Because of the following, our recommendation is to use the first `}<_Link href="/docs/5.x/core-development-concepts/ci-cd/workflows#choosing-staging-as-the-target-branch">{`Choosing “staging” As The Target Branch`}</_Link>{` strategy:`}</p>
<ul>
<li parentName="ul">{`new fixes and features are frequently merged into the `}<inlineCode parentName="li">{`dev`}</inlineCode>{` branch, which can make it unstable`}</li>
<li parentName="ul">{`at any point in time, we should be able to merge new features, fixes, and even experiments into the `}<inlineCode parentName="li">{`dev`}</inlineCode>{` branch`}</li>
<li parentName="ul">{`merging new code changes into the `}<inlineCode parentName="li">{`dev`}</inlineCode>{` branch must not be blocked by any pending release processes`}</li>
<li parentName="ul">{`with the second approach, there’s a risk of having unplanned code changes get merged into the `}<inlineCode parentName="li">{`staging`}</inlineCode>{` branch`}</li>
</ul>
<_Heading level={3} id={"3-merge-changes-to-prod-branch"} nextElement={{
      "type": "paragraph"
    }}>3. Merge Changes to<code>prod</code>Branch</_Heading>
<p>{`Once the changes deployed into the `}<inlineCode parentName="p">{`staging`}</inlineCode>{` branch have been reviewed and accepted, we then proceed by merging it into the `}<inlineCode parentName="p">{`prod`}</inlineCode>{` branch.`}</p>
<p>{`As always, this will trigger automatic deployment of your project, and ultimately, make the new changes available for real users.`}</p>
<Image src={_Image4} alt={"Webiny Cloud Infrastructure - Environments"} mdxType="Image" />
<_Heading level={3} id={"4-hot-fixes"} nextElement={{
      "type": "paragraph"
    }}>4. Hot Fixes</_Heading>
<p>{`Even with all of the steps and measures described in the steps above, unfortunately, it’s still possible for undetected bugs to slip into the production environment.`}</p>
<p>{`Some of these may be minor and may not require immediate attention (these can be resolved as part of the next release cycle). But on the other hand, if a bug presents a serious problem and requires immediate attention, then most probably we won’t have any other choice but to apply a hot-fix, directly on the `}<inlineCode parentName="p">{`prod`}</inlineCode>{` branch.`}</p>
<p>{`In other words, in cases like these, it’s allowed to break the rules, and either create a PR directly against the `}<inlineCode parentName="p">{`prod`}</inlineCode>{` branch, or even directly push into it. Note that, as the long-lived branches are usually marked as protected, only users with admin privileges will be able to do that.`}</p>
<p>{`In case you end up doing this, remember that all of the changes you merge into the `}<inlineCode parentName="p">{`prod`}</inlineCode>{` branch, should also be merged into the `}<inlineCode parentName="p">{`dev`}</inlineCode>{` and `}<inlineCode parentName="p">{`staging`}</inlineCode>{` branches. You can do that by simply merging the `}<inlineCode parentName="p">{`prod`}</inlineCode>{` branch into `}<inlineCode parentName="p">{`staging`}</inlineCode>{`, then merging the `}<inlineCode parentName="p">{`staging`}</inlineCode>{` branch back to `}<inlineCode parentName="p">{`dev`}</inlineCode>{`.`}</p>
<_Heading level={2} id={"faq"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>FAQ</_Heading>
<_Heading level={3} id={"except-the-dev-staging-and-prod-can-we-have-additional-long-lived-branches-and-environments-as-part-of-our-ci-cd-workflow"} nextElement={{
      "type": "paragraph"
    }}>Except the<code>dev</code>,<code>staging</code>, and<code>prod</code>, Can We Have Additional Long-Lived Branches and Environments as Part of Our CI/CD Workflow?</_Heading>
<p>{`You certainly can. Just create the needed long-lived branch, and ensure each push to it automatically deploys your project into the respective environment. You will also want to protect it against direct and unauthorized pushes and accidental deletions.`}</p>
<p>{`As an example, we’ve seen users adding an additional `}<inlineCode parentName="p">{`uat`}</inlineCode>{` (user acceptance testing) branch and environment, between the `}<inlineCode parentName="p">{`staging`}</inlineCode>{` and `}<inlineCode parentName="p">{`prod`}</inlineCode>{` environments.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;