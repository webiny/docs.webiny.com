/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/core-development-concepts/project-organization/assets/project-applications-and-packages/project-organization.png'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Monorepo Organization",
  "description": "Learn what are monorepos and what are the benefits this project organization brings.",
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
  "title": "What Are Monorepos?",
  "slug": "what-are-monorepos",
  "children": []
}, {
  "title": "Workspaces vs. Packages",
  "slug": "workspaces-vs-packages",
  "children": []
}, {
  "title": "Benefits of the Monorepo Organization",
  "slug": "benefits-of-the-monorepo-organization",
  "children": [{
    "title": "Multiple Packages",
    "slug": "multiple-packages",
    "children": []
  }, {
    "title": "Optimally Storing Dependencies",
    "slug": "optimally-storing-dependencies",
    "children": []
  }]
}, {
  "title": "List of Workspaces",
  "slug": "list-of-workspaces",
  "children": []
}, {
  "title": "FAQ",
  "slug": "faq",
  "children": [{
    "title": "Is Monorepo Organization Set Up by Default in Every Webiny Project?",
    "slug": "is-monorepo-organization-set-up-by-default-in-every-webiny-project",
    "children": []
  }, {
    "title": "Can We Use a Different Package Manager, Like Yarn Classic or NPM?**",
    "slug": "can-we-use-a-different-package-manager-like-yarn-classic-or-npm",
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




<Alert type="success" title="WHAT YOU’LL LEARN" mdxType="Alert">
<ul>
<li parentName="ul">{`what are monorepos and what are the benefits of using them`}</li>
<li parentName="ul">{`where can a list of all workspaces be found`}</li>
</ul>
</Alert>
<_Heading level={2} id={"what-are-monorepos"} nextElement={{
      "type": "paragraph"
    }}>What Are Monorepos?</_Heading>
<p>{`Every Webiny project is organized as a `}<a parentName="p" {...{
        "href": "https://www.atlassian.com/git/tutorials/monorepos"
      }}>{`monorepo`}</a>{`. This essentially means your project is organized as a collection of multiple NPM packages, or, in the context of monorepos, multiple workspaces.`}</p>
<p>{`Behind the scenes, it is the `}<a parentName="p" {...{
        "href": "https://yarnpkg.com/"
      }}>{`yarn 2`}</a>{` package manager that enables this organization, via its `}<a parentName="p" {...{
        "href": "https://yarnpkg.com/features/workspaces"
      }}>{`workspaces feature`}</a>{`:`}</p>
<blockquote>
<p parentName="blockquote">{`The Yarn workspaces aim to make working with monorepos easy, solving one of the main use cases for yarn link in a more declarative way. In short, they allow multiple of your projects to live together in the same repository AND to cross-reference each others - any modification to one’s source code being instantly applied to the others.`}</p>
</blockquote>
<_Heading level={2} id={"workspaces-vs-packages"} nextElement={{
      "type": "paragraph"
    }}>Workspaces vs. Packages</_Heading>
<p>{`Terms `}<strong parentName="p">{`workspace`}</strong>{` and `}<strong parentName="p">{`package`}</strong>{`, essentially, refer to the same thing - an NPM package or in other words, a folder with a `}<inlineCode parentName="p">{`package.json`}</inlineCode>{` file and some code. Depending on the context, we use one of the two.`}</p>
<p>{`When talking about the monorepo organization and yarn 2 and its workspaces feature, then the term `}<strong parentName="p">{`workspace`}</strong>{` makes more sense to use. On the other hand, when talking about project applications and the actual code, the term `}<strong parentName="p">{`package`}</strong>{` is used. We always say “import this package”, never “import this workspace”.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`For more information on packages and their role in a Webiny project, take a step back and check the `}<_Link href="/docs/5.x/core-development-concepts/project-organization/project-applications-and-packages">{`Applications and Packages`}</_Link>{` topic.`}</p>
</Alert>
<_Heading level={2} id={"benefits-of-the-monorepo-organization"} nextElement={{
      "type": "paragraph"
    }}>Benefits of the Monorepo Organization</_Heading>
<p>{`Monorepo organization benefits us in a couple of ways.`}</p>
<_Heading level={3} id={"multiple-packages"} nextElement={{
      "type": "paragraph"
    }}>Multiple Packages</_Heading>
<p>{`Monorepo organization makes it possible to structure different logical pieces of your project as multiple packages. For example, you might have a package that contains the business logic that deals with customer data, then the other one that deals with customer orders, and so on. You can even create shared or utility packages, or in other words, packages that contain one or more utility functions, which are then imported from multiple other packages.`}</p>
<p>{`An abstract example of packages and shared packages, located in different project applications, can be found in the `}<_Link href="/docs/5.x/core-development-concepts/project-organization/project-applications-and-packages">{`Project Applications and Packages`}</_Link>{` topic:`}</p>
<Image src={_Image1} alt={"Project Organization"} mdxType="Image" />
<_Heading level={3} id={"optimally-storing-dependencies"} nextElement={{
      "type": "paragraph"
    }}>Optimally Storing Dependencies</_Heading>
<p>{`The yarn 2 workspaces feature makes sure that the same dependencies required by multiple packages are stored in a most efficient way. For example, when specifying the React library as a dependency in two or more packages, the library is actually downloaded only once. On larger projects, this significantly reduces the overall size on disk of all of the different dependencies that your packages may require.`}</p>
<_Heading level={2} id={"list-of-workspaces"} nextElement={{
      "type": "paragraph"
    }}>List of Workspaces</_Heading>
<p>{`In every Webiny project, the list of all workspaces can be found in the `}<inlineCode parentName="p">{`package.json`}</inlineCode>{` file, located in your project root, for example:`}</p>
<Editor title="" lang="null" mdxType="Editor">
{`(...)
"workspaces": {
    "packages": [
        "apps/admin",
        "apps/website",
        "apps/theme",
        "apps/api/graphql",
        "apps/api/headlessCMS"
    ]
},
(...)`}
</Editor>
<p>{`In addition to the above shown list, you’re also free to add more workspaces, if need be. You will be updating this list whenever you’re about to add a new package to your project.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`For convenience’s sake, different scaffolding commands, that create new packages, update the workspaces list automatically for you.`}</p>
</Alert>
<_Heading level={2} id={"faq"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>FAQ</_Heading>
<_Heading level={3} id={"is-monorepo-organization-set-up-by-default-in-every-webiny-project"} nextElement={{
      "type": "paragraph"
    }}>Is Monorepo Organization Set Up by Default in Every Webiny Project?</_Heading>
<p>{`Yes, every Webiny project is organized as a monorepo.`}</p>
<_Heading level={3} id={"can-we-use-a-different-package-manager-like-yarn-classic-or-npm"} nextElement={{
      "type": "paragraph"
    }}>Can We Use a Different Package Manager, Like Yarn Classic or NPM?**</_Heading>
<p>{`At the moment, Webiny projects are set up to work with `}<a parentName="p" {...{
        "href": "https://yarnpkg.com/"
      }}>{`yarn 2`}</a>{`, exclusively.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;