/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image2 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/core-development-concepts/ci-cd/assets/version-control/branches.png'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/core-development-concepts/ci-cd/assets/version-control/github_flow.png'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Version Control",
  "description": "Learn about the most commonly used branching strategy that you can adopt for your project.",
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
  "title": "GitHub Flow",
  "slug": "git-hub-flow",
  "children": []
}, {
  "title": "Organizing Branches",
  "slug": "organizing-branches",
  "children": [{
    "title": "Shared Branches",
    "slug": "shared-branches",
    "children": []
  }, {
    "title": "Isolated (Development) Branches",
    "slug": "isolated-development-branches",
    "children": []
  }]
}, {
  "title": "FAQ",
  "slug": "faq",
  "children": [{
    "title": "Can We Adopt a Different Branching Strategy?",
    "slug": "can-we-adopt-a-different-branching-strategy",
    "children": []
  }, {
    "title": "Can I Use a Different VCS?",
    "slug": "can-i-use-a-different-vcs",
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
<li parentName="ul">{`how to organize your Git repository`}</li>
</ul>
</Alert>
<Alert type="info" mdxType="Alert">
<p>{`Get your CI/CD set up in no time with the built-in `}<_Link href="/docs/5.x/core-development-concepts/ci-cd/setup">{`CI/CD scaffold`}</_Link>{`.`}</p>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`In today’s world, project development is always backed by a `}<a parentName="p" {...{
        "href": "https://en.wikipedia.org/wiki/Version_control"
      }}>{`version control system (VCS)`}</a>{`.`}</p>
<p>{`In this guide, we cover the approaches we recommend to be used with `}<a parentName="p" {...{
        "href": "https://en.wikipedia.org/wiki/GitHub"
      }}>{`GitHub`}</a>{` as the VCS of choice, as it is, from our experience, the most used system out there.`}</p>
<Alert type="info" mdxType="Alert">
<p><a parentName="p" {...{
          "href": "https://en.wikipedia.org/wiki/GitHub"
        }}>{`GitHub`}</a>{` is a provider of Internet hosting for software development and version control using `}<a parentName="p" {...{
          "href": "https://www.git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F"
        }}>{`Git`}</a>{`. It offers the distributed version control and source code management functionality of Git, plus its own features.`}</p>
</Alert>
<Alert type="success" mdxType="Alert">
<p>{`Want us to cover an integration with a different of VCS? `}<a parentName="p" {...{
          "href": "https://www.webiny.com/slack"
        }}>{`Let us know`}</a>{`!`}</p>
</Alert>
<_Heading level={2} id={"git-hub-flow"} nextElement={{
      "type": "paragraph"
    }}>GitHub Flow</_Heading>
<p>{`When working with GitHub, there are a couple of different workflows that you can adopt within your organisation, but the one that’s used the most is the `}<a parentName="p" {...{
        "href": "https://guides.github.com/introduction/flow/"
      }}>{`GitHub flow`}</a>{`:`}</p>
<blockquote>
<p parentName="blockquote">{`GitHub flow is a lightweight, branch-based workflow that supports teams and projects where deployments are made regularly.`}</p>
</blockquote>
<p>{`Essentially, developers first create a branch from one of the long-lived development base branches, in which they perform necessary code changes. Once ready, a `}<a parentName="p" {...{
        "href": "https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests"
      }}>{`pull request (PR)`}</a>{` is created, which initiates the review process made by other team members and in almost all cases triggers different application tests. If all code changes are in order, the pull request is accepted, or in other words, the changes are merged back into the base branch.`}</p>
<Image src={_Image1} alt={"Environments."} mdxType="Image" />
<_Heading level={2} id={"organizing-branches"} nextElement={{
      "type": "paragraph"
    }}>Organizing Branches</_Heading>
<p>{`Besides adopting the GitHub flow explained above, another element to consider is the organization of your project’s Git branches. Similarly to how we’ve defined `}<_Link href="/docs/5.x/core-development-concepts/ci-cd/environments">{`shared and isolated environments`}</_Link>{` we can deploy into, your repository should also consist of shared and isolated branches that, in a way, mirror these environments.`}</p>
<_Heading level={3} id={"shared-branches"} nextElement={{
      "type": "paragraph"
    }}>Shared Branches</_Heading>
<p>{`For your project, you might want to have a couple of `}<strong parentName="p">{`shared`}</strong>{` and long-lived branches that represent your shared environments, like `}<inlineCode parentName="p">{`dev`}</inlineCode>{`, `}<inlineCode parentName="p">{`staging`}</inlineCode>{`, and `}<inlineCode parentName="p">{`prod`}</inlineCode>{` (`}<inlineCode parentName="p">{`production`}</inlineCode>{`). As with the environments, no strict naming rules exist, but these names are definitely something most developers will recognize. We recommend having these three as the minimum and, of course, if more are needed, you’re free to do so.`}</p>
<p>{`These branches should be made `}<a parentName="p" {...{
        "href": "https://docs.github.com/en/github/administering-a-repository/about-protected-branches"
      }}>{`protected`}</a>{` and direct code pushes into these should be disabled. Not only direct pushes break the GitHub flow and merging strategies we’re about to explain in the next section, in almost all cases, this triggers different deployment processes defined in your CI/CD workflows.`}</p>
<p>{`Finally, one of these branches will always be a starting point for every fix or a new feature that needs to be implemented. Usually, this is the `}<inlineCode parentName="p">{`dev`}</inlineCode>{` branch which should be marked as the `}<a parentName="p" {...{
        "href": "https://docs.github.com/en/github/administering-a-repository/changing-the-default-branch"
      }}>{`default branch`}</a>{` in your repository.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`Visit the `}<_Link href="/docs/5.x/core-development-concepts/ci-cd/workflows">{`Workflows`}</_Link>{` key topic to learn how code changes are propagated from one shared branch to another, and how they are ultimately deployed to real users.`}</p>
</Alert>
<_Heading level={3} id={"isolated-development-branches"} nextElement={{
      "type": "paragraph"
    }}>Isolated (Development) Branches</_Heading>
<p>{`With the shared and long-lived branches, depending on the project size, you always have a number of `}<strong parentName="p">{`isolated`}</strong>{` or `}<strong parentName="p">{`development`}</strong>{`, short-lived branches, that are created by developers and that, eventually, contain new fixes and features.`}</p>
<p>{`These branches are considered as short-lived because they exist for a shorter amount of time. As soon as the performed changes are merged into one of the long-lived branches, these branches can usually be immediately deleted.`}</p>
<p>{`As mentioned, the `}<inlineCode parentName="p">{`dev`}</inlineCode>{` branch is usually the default branch, from which developers branch from, and to which the changes are ultimately merged back.`}</p>
<p>{`The following diagram shows both types of branches:`}</p>
<Image src={_Image2} alt={"Environments."} mdxType="Image" />
<_Heading level={2} id={"faq"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>FAQ</_Heading>
<_Heading level={3} id={"can-we-adopt-a-different-branching-strategy"} nextElement={{
      "type": "paragraph"
    }}>Can We Adopt a Different Branching Strategy?</_Heading>
<p>{`Yes, you can. The branching strategy presented in this guide is something that works in most cases. But, you’re free to define your own, if need be.`}</p>
<_Heading level={3} id={"can-i-use-a-different-vcs"} nextElement={{
      "type": "paragraph"
    }}>Can I Use a Different VCS?</_Heading>
<p>{`Yes, you can. If you manage to define some best practices around it, we’d be glad to `}<a parentName="p" {...{
        "href": "https://www.webiny.com/slack/"
      }}>{`hear about it`}</a>{` and add it to our documentation.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;