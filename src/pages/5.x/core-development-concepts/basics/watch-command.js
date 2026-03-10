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
  "title": "Watch Command",
  "description": "Learn how to continuously rebuild and redeploy your code using the \"webiny watch\" command.",
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
  "title": "How It Works",
  "slug": "how-it-works",
  "children": [{
    "title": "Frontend Development",
    "slug": "frontend-development",
    "children": []
  }, {
    "title": "Backend Development",
    "slug": "backend-development",
    "children": []
  }]
}, {
  "title": "FAQ",
  "slug": "faq",
  "children": [{
    "title": "Can I Run Webiny Fully Locally, Without Deploying It to AWS?",
    "slug": "can-i-run-webiny-fully-locally-without-deploying-it-to-aws",
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



<Alert type="info" title="Can I Use This?" mdxType="Alert">
<p>{`The `}<inlineCode parentName="p">{`webiny watch`}</inlineCode>{` command is available since Webiny `}<strong parentName="p">{`v5.5.0`}</strong>{`.`}</p>
</Alert>
<Alert type="success" title="What you'll learn" mdxType="Alert">
<ul>
<li parentName="ul">{`how to use the `}<inlineCode parentName="li">{`webiny watch`}</inlineCode>{` command to develop on top of Webiny`}</li>
<li parentName="ul">{`how the `}<inlineCode parentName="li">{`webiny watch`}</inlineCode>{` command works for frontend and backend development`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`The watch command is the number one command you’ll be using while developing on top of Webiny.`}</p>
<p>{`It supports both frontend and backend development, and it works with the three project applications every Webiny project consists of:`}</p>
<ol>
<li parentName="ol"><strong parentName="li">{`API`}</strong>{` (`}<a parentName="li" {...{
          "href": "https://github.com/webiny/webiny-js/blob/v5.40.0/packages/cwp-template-aws/template/ddb/apps/api"
        }}><inlineCode parentName="a">{`apps/api`}</inlineCode></a>{`)`}</li>
<li parentName="ol"><strong parentName="li">{`Admin`}</strong>{` (`}<a parentName="li" {...{
          "href": "https://github.com/webiny/webiny-js/blob/v5.40.0/packages/cwp-template-aws/template/common/apps/admin"
        }}><inlineCode parentName="a">{`apps/admin`}</inlineCode></a>{`)`}</li>
<li parentName="ol"><strong parentName="li">{`Website`}</strong>{` (`}<a parentName="li" {...{
          "href": "https://github.com/webiny/webiny-js/blob/v5.40.0/packages/cwp-template-aws/template/common/apps/website"
        }}><inlineCode parentName="a">{`apps/website`}</inlineCode></a>{`)`}</li>
</ol>
<p>{`To use it, you run the `}<inlineCode parentName="p">{`webiny watch`}</inlineCode>{` command followed by the project application you want to watch:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`# Watches API project application.
# Code changes are automatically deployed to AWS Lambda.
yarn webiny watch api --env dev

# Watches Admin project application.
yarn webiny watch admin --env dev

# Watches Website project application.
yarn webiny watch website --env dev`}
</Editor>
<Alert type="info" mdxType="Alert">
<p>{`  Extensions are the primary way to develop on top Webiny and extend it. To learn more, check out the `}<_Link href="/docs/5.x/core-development-concepts/basics/extensions">{`Extensions`}</_Link>{` article.`}</p>
</Alert>
<_Heading level={2} id={"how-it-works"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>How It Works</_Heading>
<_Heading level={3} id={"frontend-development"} nextElement={{
      "type": "paragraph"
    }}>Frontend Development</_Heading>
<p>{`When it comes to frontend development (`}<strong parentName="p">{`Admin`}</strong>{` and `}<strong parentName="p">{`Website`}</strong>{` project applications), the watch command offers an experience similar to other existing frontend development solutions out there. Once started, the watch command:`}</p>
<ol>
<li parentName="ol">{`spins up a local development server that serves your application`}</li>
<li parentName="ol">{`the application is automatically rebuilt and refreshed in the browser whenever a code change is detected `}</li>
</ol>
<Alert mdxType="Alert">
<p>{`  Note that you must have the `}<strong parentName="p">{`API`}</strong>{` project application already deployed before watching `}<strong parentName="p">{`Admin`}</strong>{` and `}<strong parentName="p">{`Website`}</strong>{` project applications. This is because of the fact that these applications depend on Webiny’s backend APIs to work as expected.`}</p>
</Alert>
<_Heading level={3} id={"backend-development"} nextElement={{
      "type": "paragraph"
    }}>Backend Development</_Heading>
<p>{`When it comes to backend development (`}<strong parentName="p">{`API`}</strong>{` project application), the watch command doesn’t spin up a local development server, but it watches for changes and continuously deploys them the cloud (AWS Lambda). This approach sort of emulates the local development server experience, because changes are automatically reflected in the cloud (as soon as they are deployed).`}</p>
<Alert type="info" title="New Watch Command Available" mdxType="Alert">
<p>{`  With the 5.41.0 release and with the introduction of the New Watch Command (Local AWS Lambda Development), we’ve made significant improvements to the way backend development is done. The feature is still in beta, but we encourage you to try it out and provide feedback.`}</p>
</Alert>
<_Heading level={2} id={"faq"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>FAQ</_Heading>
<_Heading level={3} id={"can-i-run-webiny-fully-locally-without-deploying-it-to-aws"} nextElement={{
      "type": "paragraph"
    }}>Can I Run Webiny Fully Locally, Without Deploying It to AWS?</_Heading>
<p>{`Because Webiny is built on top of AWS and its proprietary services, it’s not possible to run Webiny fully locally. At the very least, you need to deploy the `}<strong parentName="p">{`API`}</strong>{` project application to AWS, because it’s the backbone of the entire system. The `}<strong parentName="p">{`Admin`}</strong>{` and `}<strong parentName="p">{`Website`}</strong>{` project applications can be run locally, but they depend on the `}<strong parentName="p">{`API`}</strong>{` project application to work as expected. `}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;