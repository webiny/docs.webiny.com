/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import branchingStrategyImage from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/release-management/branching-strategy.png";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Branching Strategy",
  "description": "Learn how Webiny team organizes Github branches and what are our release cycles.",
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
  "title": "Release Strategy",
  "slug": "release-strategy",
  "children": []
}, {
  "title": "Branching Strategy",
  "slug": "branching-strategy",
  "children": []
}, {
  "title": "Conclusion",
  "slug": "conclusion",
  "children": []
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
const WhatYouWillLearn = makeShortcode("WhatYouWillLearn");
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



<WhatYouWillLearn mdxType="WhatYouWillLearn">
<ul>
<li parentName="ul">{`how often do we release new versions of Webiny`}</li>
<li parentName="ul">{`what are the main branches that take part in the release process`}</li>
</ul>
</WhatYouWillLearn>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`At Webiny, we like to release versions relatively often (in 2-3 weeks cycles), so our users get all the new features and bug fixes that we add to the product. However, since Webiny is not a simple library, upgrading between project versions can be cumbersome, and not all users want to do it that often. Sometimes, upgrades require code mods to modify your project files, database migrations get executed, so it’s a bit more complex than just pulling in a new NPM package version.`}</p>
<p>{`After battling many of these issues over the past year, we’ve designed a branching strategy and a new release strategy to address some of the issues that were the most painful to manage.`}</p>
<_Heading level={2} id={"release-strategy"} nextElement={{
      "type": "paragraph"
    }}>Release Strategy</_Heading>
<p>{`We’ve identified the main pain points, and came up with a process that allows us to still release bug fixes every sprint, but batch new features, and potential project upgrades, into quarterly releases.`}</p>
<p>{`With that being said, at the end of every sprint (~3 weeks), we’ll be releasing `}<a parentName="p" {...{
        "href": "https://semver.org/#summary"
      }}>{`patch versions`}</a>{` (e.g., `}<inlineCode parentName="p">{`5.33.1`}</inlineCode>{`), so you get urgent bugs fixed periodically. This will also allow users to skip patch versions, and upgrade to the latest patch version, without going through every patch version one by one. To illustrate: if your project is on `}<inlineCode parentName="p">{`5.33.0`}</inlineCode>{`, you’ll be able to install `}<inlineCode parentName="p">{`5.33.3`}</inlineCode>{` without having to install `}<inlineCode parentName="p">{`5.33.1`}</inlineCode>{`, and `}<inlineCode parentName="p">{`5.33.2`}</inlineCode>{`.`}</p>
<p>{`Features, and potential project upgrades (code mods, data migrations, etc.), will only be released once per quarter (every 3 months), in form of a minor version (e.g., `}<inlineCode parentName="p">{`5.x`}</inlineCode>{`). This will allow us to dedicate more time to testing features, preparing more robust upgrades, and making sure that when you do upgrade, everything goes smoothly. Our users, on the other hand, will only need to upgrade once per quarter, which is a lot less taxing on the team and time management.`}</p>
<_Heading level={2} id={"branching-strategy"} nextElement={{
      "type": "paragraph"
    }}>Branching Strategy</_Heading>
<p>{`To make this release management process possible, our branches are organized in the following manner:`}</p>
<Image src={branchingStrategyImage} title={"Branching Strategy"} mdxType="Image" />
<p>{`The `}<inlineCode parentName="p">{`dev`}</inlineCode>{` branch is set as the main repository branch, and all fixes are pushed to this branch, to be published in the upcoming release. The stable release happens when the `}<inlineCode parentName="p">{`dev`}</inlineCode>{` branch is merged into the `}<inlineCode parentName="p">{`stable`}</inlineCode>{` branch, which publishes packages using the `}<inlineCode parentName="p">{`latest`}</inlineCode>{` tag, to NPM.`}</p>
<p>{`The `}<inlineCode parentName="p">{`next`}</inlineCode>{` branch is used to accumulate features to be released in the quarterly release. The features that live in this branch are released under the `}<inlineCode parentName="p">{`unstable`}</inlineCode>{` tag to NPM, so users have a chance to create an “unstable” version of a project, and provide us with early feedback.`}</p>
<p>{`Right before the quarterly release, we merge the `}<inlineCode parentName="p">{`next`}</inlineCode>{` branch into the `}<inlineCode parentName="p">{`dev`}</inlineCode>{` branch, resolve any potential merge conflicts, and then merge `}<inlineCode parentName="p">{`dev`}</inlineCode>{` into `}<inlineCode parentName="p">{`stable`}</inlineCode>{` to cut another stable release. This time, `}<inlineCode parentName="p">{`feat`}</inlineCode>{` commits will make their way into the `}<a parentName="p" {...{
        "href": "https://www.conventionalcommits.org/en/v1.0.0/"
      }}>{`conventional commits`}</a>{` versioning process, and a new minor version will be released.`}</p>
<p>{`Notice the green `}<strong parentName="p">{`sync commits`}</strong>{`, they’re necessary to pull in the files modified by the publishing process into the `}<inlineCode parentName="p">{`dev`}</inlineCode>{` branch.`}</p>
<_Heading level={2} id={"conclusion"} nextElement={{
      "type": "paragraph"
    }}>Conclusion</_Heading>
<p>{`The strategies described in this article should make releases more predictable, upgrades more reliable, and our users more confident when they do get to upgrading their projects.`}</p>
<p>{`If you’re interested in test-driving the latest unstable features of Webiny, the ones that live in the `}<inlineCode parentName="p">{`next`}</inlineCode>{` branch, read the article about `}<_Link href="/docs/5.x/release-management/unstable-releases">{`unstable releases`}</_Link>{`.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;