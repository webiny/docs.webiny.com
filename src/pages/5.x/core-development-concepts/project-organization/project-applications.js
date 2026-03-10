/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Project Applications",
  "description": "Learn what are project applications and how they're structured.",
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
  "title": "The Basics",
  "slug": "the-basics",
  "children": []
}, {
  "title": "FAQ",
  "slug": "faq",
  "children": [{
    "title": "How Many Applications Can a Single Webiny Project Have?",
    "slug": "how-many-applications-can-a-single-webiny-project-have",
    "children": []
  }, {
    "title": "Can Applications Work Together?",
    "slug": "can-applications-work-together",
    "children": []
  }]
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



<Alert type="success" title="WHAT YOU’LL LEARN" mdxType="Alert">
<ul>
<li parentName="ul">{`what are project applications and how they’re structured`}</li>
</ul>
</Alert>
<_Heading level={2} id={"the-basics"} nextElement={{
      "type": "paragraph"
    }}>The Basics</_Heading>
<p>{`Webiny uses the term `}<strong parentName="p">{`project application`}</strong>{` (or just `}<strong parentName="p">{`application`}</strong>{`) in order to depict a specific logical segment of your project.`}</p>
<p>{`Project applications are higher-level organizational units formed from one or more packages that, as the name itself suggests, form applications. Every application, essentially, consists of two pieces:`}</p>
<ol>
<li parentName="ol">{`Your application code, which includes one or more Node.js packages. These packages can be anything from a simple GraphQL API or a single Lambda function to a complete React application.`}</li>
<li parentName="ol">{`Cloud infrastructure that hosts your code or which is being utilized by it, which is also described and deployed using code. For that matter, by default, Webiny relies on a solution called `}<_Link href="/docs/5.x/infrastructure/pulumi-iac/iac-with-pulumi">{`Pulumi`}</_Link>{`, which is a modern infrastructure as code solution.`}</li>
</ol>
<Alert type="info" mdxType="Alert">
<p>{`Learn more about the fundamental organizational units - project applications and packages, by visiting the `}<_Link href="/docs/5.x/core-development-concepts/project-organization/project-applications-and-packages">{`Project Applications and Packages`}</_Link>{` page.`}</p>
</Alert>
<p>{`Moving on, every application has its own folder. For example, every Webiny project consists of four applications.
The `}<strong parentName="p">{`core`}</strong>{` (`}<inlineCode parentName="p">{`./apps/core`}</inlineCode>{`), `}<strong parentName="p">{`api`}</strong>{` (`}<inlineCode parentName="p">{`./apps/api`}</inlineCode>{`), which represents your project’s (GraphQL) API, `}<strong parentName="p">{`admin`}</strong>{` (`}<inlineCode parentName="p">{`./apps/admin`}</inlineCode>{`), and finally, the `}<strong parentName="p">{`website`}</strong>{` (`}<inlineCode parentName="p">{`./apps/website`}</inlineCode>{`), which is your public website.`}</p>
<p>{`These applications are shown in the following directory tree:`}</p>
<Editor title="" lang="null" mdxType="Editor">
{`.
├── apps
│   ├── core
│   ├── api
│   ├── admin
│   └── website
└── (...)`}
</Editor>
<_Heading level={2} id={"faq"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>FAQ</_Heading>
<_Heading level={3} id={"how-many-applications-can-a-single-webiny-project-have"} nextElement={{
      "type": "paragraph"
    }}>How Many Applications Can a Single Webiny Project Have?</_Heading>
<p>{`Every Webiny project can have any number of applications. This depends on the project requirements that are in front of you.`}</p>
<_Heading level={3} id={"can-applications-work-together"} nextElement={{
      "type": "paragraph"
    }}>Can Applications Work Together?</_Heading>
<p>{`Yes, and in most cases, `}<_Link href="/docs/5.x/core-development-concepts/project-organization/project-applications-and-packages#package-and-project-application-dependencies">{`they are working together`}</_Link>{`.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;