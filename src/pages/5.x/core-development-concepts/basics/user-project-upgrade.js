/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import {Alert} from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "User Project Upgrade",
  "description": "Learn about how to do a project upgrade",
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
  "title": "Steps",
  "slug": "steps",
  "children": [{
    "title": "1. Notify the User About Breaking Changes",
    "slug": "1-notify-the-user-about-breaking-changes",
    "children": []
  }, {
    "title": "2. Check User Project Dependency Versions Against the Webiny Dependency Versions",
    "slug": "2-check-user-project-dependency-versions-against-the-webiny-dependency-versions",
    "children": []
  }]
}, {
  "title": "Version Specific Steps",
  "slug": "version-specific-steps",
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



<Alert type="success" title="What you'll learn" mdxType="Alert">
<ul>
<li parentName="ul">{`what is Webiny project upgrade`}</li>
<li parentName="ul">{`what are the steps to upgrade a project`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`As a part of our upgrade process, we provide a way to update your codebase on each new release - at least what we can do automatically.`}</p>
<p>{`To start the project upgrade use the `}<inlineCode parentName="p">{`yarn webiny upgrade`}</inlineCode>{` command.`}</p>
<Alert type="warning" mdxType="Alert">
  The upgrade process can only update one minor version at a time. So you can upgrade from 5.40.x to 5.41.x, but not from 5.40.x to 5.42.x.
</Alert>
<_Heading level={2} id={"steps"} nextElement={{
      "type": "paragraph"
    }}>Steps</_Heading>
<p>{`When a user runs the `}<inlineCode parentName="p">{`yarn webiny upgrade`}</inlineCode>{` command, there are multiple steps depending on what are we upgrading in that version.`}</p>
<p>{`There might even be some breaking changes, so we need to notify the user about them.`}</p>
<_Heading level={3} id={"1-notify-the-user-about-breaking-changes"} nextElement={{
      "type": "paragraph"
    }}>1. Notify the User About Breaking Changes</_Heading>
<p>{`The first step is to notify the user about breaking changes:`}</p>
<Editor title="" lang="text" mdxType="Editor">
{`webiny warning: Note that Webiny 5.xx.x introduces potential breaking changes!
Before continuing, please review the upgrade guide located at https://webiny.link/upgrade/5.xx.x.

I have read the upgrade guide and I am ready to proceed with the upgrade (y/N):`}
</Editor>
<p>{`User needs to press `}<inlineCode parentName="p">{`y`}</inlineCode>{` to continue with the upgrade process.`}</p>
<p>{`Note that this step will not show if there are no breaking changes in the version user is upgrading to.`}</p>
<_Heading level={3} id={"2-check-user-project-dependency-versions-against-the-webiny-dependency-versions"} nextElement={{
      "type": "paragraph"
    }}>2. Check User Project Dependency Versions Against the Webiny Dependency Versions</_Heading>
<p>{`Next step, which will always be executed, is to check if the user project dependencies are in sync with the Webiny dependencies. If they are not, the user will be prompted to update them.`}</p>
<Alert mdxType="Alert">
  
This does not mean that we use newer versions of the dependencies than our users do in their projects.
<p>{`We ship Webiny with the dependencies that are working with our code. If it is possible, our users should keep their dependencies in sync with Webiny ones to avoid any unexpected problems.`}</p>
</Alert>
<Editor title="" lang="text" mdxType="Editor">
{`webiny warning: Found dependencies that are out of sync. Please sync them before continuing with the upgrade process...
package.json files which have dependencies out of sync:
 - /packages/apiLib/package.json
 - /myApp/reactLib/package.json

Dependencies out of sync:
- react: 17.0.0 (18.2.5)
- fastify: 4.0.0 (4.2.9)

Do you want us to upgrade those dependencies? (y/N):`}
</Editor>
<p>{`User is encouraged to press `}<inlineCode parentName="p">{`y`}</inlineCode>{` to update all dependencies in their project.`}</p>
<p>{`If user chooses not to upgrade the dependencies, the upgrade process will prompt once more:`}</p>
<Editor title="" lang="text" mdxType="Editor">
{`We strongly recommend you update the dependencies.
Failing to do so may result in unexpected problems.
Do you still want to continue with the project upgrade and skip updating dependencies? (y/N)`}
</Editor>
<p>{`If user chooses to continue without updating the dependencies, the upgrade process will continue, but it is not recommended.`}</p>
<_Heading level={2} id={"version-specific-steps"} nextElement={{
      "type": "paragraph"
    }}>Version Specific Steps</_Heading>
<p>{`All steps after the dependency check are specific to the version user is upgrading to.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;