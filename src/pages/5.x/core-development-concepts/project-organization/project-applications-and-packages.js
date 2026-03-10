/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image2 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/core-development-concepts/project-organization/assets/project-applications-and-packages/dependent-packages-apps.png'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/core-development-concepts/project-organization/assets/project-applications-and-packages/project-organization.png'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Project Applications and Packages",
  "description": "Learn about fundamental organizational units of every Webiny project.",
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
  "title": "Packages and Project Applications",
  "slug": "packages-and-project-applications",
  "children": [{
    "title": "Important Characteristics",
    "slug": "important-characteristics",
    "children": [{
      "title": "Package Scope",
      "slug": "package-scope"
    }, {
      "title": "Limits",
      "slug": "limits"
    }, {
      "title": "Package and Project Application Dependencies",
      "slug": "package-and-project-application-dependencies"
    }]
  }]
}, {
  "title": "FAQ",
  "slug": "faq",
  "children": [{
    "title": "Does Webiny Enforce Strict Files and Folders Organization?",
    "slug": "does-webiny-enforce-strict-files-and-folders-organization",
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
<li parentName="ul">{`what are the fundamental organizational units of every Webiny project and their most important characteristics`}</li>
</ul>
</Alert>
{/*
 ## Webiny Project
 Everything starts with a **Webiny project**, which is what gets created for you (on your local file system) in the [Webiny Installation](/docs/5.x/get-started/install-webiny) process. This is the top organizational unit, which is made of packages and project applications.
 */}
<_Heading level={2} id={"packages-and-project-applications"} nextElement={{
      "type": "paragraph"
    }}>Packages and Project Applications</_Heading>
<p>{`Every Webiny project consists of two fundamental organizational units - `}<strong parentName="p">{`packages`}</strong>{` and `}<strong parentName="p">{`project applications`}</strong>{` (or just `}<strong parentName="p">{`applications`}</strong>{`).`}</p>
<p>{`Packages are just regular `}<a parentName="p" {...{
        "href": "https://docs.npmjs.com/about-packages-and-modules#about-packages"
      }}>{`NPM packages`}</a>{`, or in other words, folders with its own `}<inlineCode parentName="p">{`package.json`}</inlineCode>{` declaration file and some code.
On the other hand, project applications are higher-level organizational units formed from one or more packages that, as the name itself suggests, form applications. Applications consist of both application code and cloud infrastructure that is needed in order to run them.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`Visit the `}<_Link href="/docs/5.x/core-development-concepts/project-organization/project-applications">{`Project Applications`}</_Link>{` section to learn more about project applications.`}</p>
</Alert>
<Alert type="success" mdxType="Alert">
<p>{`Every Webiny project is organized as a monorepo. Visit the `}<_Link href="/docs/5.x/core-development-concepts/project-organization/monorepo-organization">{`Monorepo Organization`}</_Link>{` topic to learn more.`}</p>
</Alert>
<p>{`The following diagram shows the project organization in a simplified and clear manner:`}</p>
<Image src={_Image1} alt={"Project Organization"} mdxType="Image" />
<p>{`If we were to translate the above diagram into a simplified directory tree, we would end up with the following:`}</p>
<Editor title="" lang="null" mdxType="Editor">
{`.
├── Project Application 1
│   ├── package-1a
│   │   ├── src
│   │   └── package.json
│   ├── package-1b
│   │   ├── src
│   │   └── package.json
│   └── package-1c
│       ├── src
│       └── package.json
│  
├── Project Application 2
│   ├── package-2a
│   │   ├── src
│   │   └── package.json
│   └── package-2b
│       ├── src
│       └── package.json
│  
├── packages
│   ├── shared-package-1
│   │   ├── src
│   │   └── package.json
│   └── shared-package-2
│       ├── src
│       └── package.json
└── (...)`}
</Editor>
<p>{`Packages `}<strong parentName="p">{`1a`}</strong>{`, `}<strong parentName="p">{`1b`}</strong>{`, and `}<strong parentName="p">{`1c`}</strong>{` are located in the `}<inlineCode parentName="p">{`Project Application 1`}</inlineCode>{` folder, and the `}<strong parentName="p">{`2a`}</strong>{` and `}<strong parentName="p">{`2b`}</strong>{` in `}<inlineCode parentName="p">{`Project Application 2`}</inlineCode>{`. And, as seen in the diagram above, `}<strong parentName="p">{`Project Application 1`}</strong>{` is using the shared package `}<inlineCode parentName="p">{`shared-package-1`}</inlineCode>{`, and `}<strong parentName="p">{`Project Application 2`}</strong>{` both `}<inlineCode parentName="p">{`shared-package-1`}</inlineCode>{` and `}<inlineCode parentName="p">{`shared-package-2`}</inlineCode>{`. These shared packages are located in a separate `}<inlineCode parentName="p">{`packages`}</inlineCode>{` folder.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`The name of the `}<inlineCode parentName="p">{`packages`}</inlineCode>{` folder is arbitrary and at this point, not important.`}</p>
</Alert>
<_Heading level={3} id={"important-characteristics"} nextElement={{
      "type": "paragraph"
    }}>Important Characteristics</_Heading>
<p>{`Here are some of the most important characteristics of packages and applications.`}</p>
<_Heading level={4} id={"package-scope"} nextElement={{
      "type": "paragraph"
    }}>Package Scope</_Heading>
<p>{`A package can represent literally anything. From a simple JavaScript function or a class, one, or more plugins, a whole REST/GraphQL API, or even a full-blown React app. You can even create utility packages that, for example, export one, or more utilities, and are imported by other packages (applications) in your project.`}</p>
<_Heading level={4} id={"limits"} nextElement={{
      "type": "paragraph"
    }}>Limits</_Heading>
<p>{`There is no limit in terms of the total number of packages and applications a single Webiny project can have.`}</p>
<_Heading level={4} id={"package-and-project-application-dependencies"} nextElement={{
      "type": "paragraph"
    }}>Package and Project Application Dependencies</_Heading>
<p>{`Packages and applications can be independent, but, more importantly, can also be dependent on other packages, and applications, respectively.`}</p>
<p>{`In terms of packages, an example might be a utility (shared) package whose code is imported by other packages. This way you keep your code in a single location and don’t repeat yourself, which effectively makes the code easier to maintain.`}</p>
<p>{`The same can happen with project applications. For example, let’s say you have a simple HTTP API and a React app that’s relying on it. In this case, the project application that’s holding the React app depends on the project application that’s holding the HTTP API.`}</p>
<Image src={_Image2} alt={"Dependent Packages and Applications"} mdxType="Image" />
<_Heading level={2} id={"faq"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>FAQ</_Heading>
<_Heading level={3} id={"does-webiny-enforce-strict-files-and-folders-organization"} nextElement={{
      "type": "paragraph"
    }}>Does Webiny Enforce Strict Files and Folders Organization?</_Heading>
<p>{`No. You can organize packages and project applications in any way you see fit. For example, the folder in which you store your shared packages can be named in any way you like. You can have as many of those as needed, and can be organized in different folders, again, as you see fit. The same goes for project applications.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;