/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.64f62e.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Quickstart",
  "description": "Create a new Webiny project, deploy it to AWS, and access the Admin panel.",
  "type": "docs",
  "showPageHeader": true,
  "fullWidth": false,
  "version": "6.0.x"
};
const docsearch = {
  "type": "docs",
  "weight": 100,
  "versions": ["latest", "6.0.x"]
};
const navigation = _navigation;
const versions = _versions;
const tableOfContents = [{
  "title": "Overview",
  "slug": "overview",
  "children": []
}, {
  "title": "Prerequisites",
  "slug": "prerequisites",
  "children": []
}, {
  "title": "Create a New Project",
  "slug": "create-a-new-project",
  "children": [{
    "title": "Database Setup",
    "slug": "database-setup",
    "children": []
  }]
}, {
  "title": "Deploy Your Project",
  "slug": "deploy-your-project",
  "children": []
}, {
  "title": "Access the Admin Panel",
  "slug": "access-the-admin-panel",
  "children": []
}, {
  "title": "What's Next",
  "slug": "what-s-next",
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



<Alert type="success" title="WHAT YOU'LL LEARN" mdxType="Alert">
<ul>
<li parentName="ul">{`how to set up the prerequisites for a Webiny project`}</li>
<li parentName="ul">{`how to create a new Webiny project`}</li>
<li parentName="ul">{`how to deploy it to your AWS account and access the Admin panel`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`By the end of this page you will have a fully working Webiny instance — deployed to your own AWS account, with the Admin panel ready to use. The entire process takes about 20 minutes, most of which is waiting for the first deployment to finish.`}</p>
<_Heading level={2} id={"prerequisites"} nextElement={{
      "type": "paragraph"
    }}>Prerequisites</_Heading>
<p>{`Before you begin, make sure you have the following:`}</p>
<ul>
<li parentName="ul"><strong parentName="li">{`Node.js ≥22`}</strong>{` — download it from the `}<a parentName="li" {...{
          "href": "https://nodejs.org/en/"
        }}>{`official website`}</a>{` or use `}<a parentName="li" {...{
          "href": "https://github.com/nvm-sh/nvm"
        }}>{`nvm`}</a>{` to manage versions`}</li>
<li parentName="ul"><strong parentName="li">{`Yarn`}</strong>{` — Webiny works with both `}<a parentName="li" {...{
          "href": "https://yarnpkg.com/en/docs/install"
        }}>{`Yarn 1 (Classic)`}</a>{` (version 1.22.0 or later) and `}<a parentName="li" {...{
          "href": "https://yarnpkg.com/"
        }}>{`Yarn ≥2 (Berry)`}</a></li>
<li parentName="ul"><strong parentName="li">{`AWS account and credentials`}</strong>{` — you need a valid AWS account with programmatic access configured on your system. If you don’t have this set up yet, follow the `}<_Link href="/docs/5.x/infrastructure/aws/configure-aws-credentials">{`Configure AWS Credentials`}</_Link>{` guide`}</li>
</ul>
<_Heading level={2} id={"create-a-new-project"} nextElement={{
      "type": "paragraph"
    }}>Create a New Project</_Heading>
<p>{`Run the following command in your terminal:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`npx create-webiny-project my-webiny-project`}
</Editor>
<p>{`Follow the on-screen prompts. The setup asks a few questions about your project, including which AWS region to deploy to and which database setup to use.`}</p>
<_Heading level={3} id={"database-setup"} nextElement={{
      "type": "paragraph"
    }}>Database Setup</_Heading>
<p>{`Webiny supports two database configurations:`}</p>
<ul>
<li parentName="ul"><strong parentName="li">{`Amazon DynamoDB`}</strong>{` — a fully serverless option ideal for small-to-medium projects or when you’re evaluating Webiny for the first time`}</li>
<li parentName="ul"><strong parentName="li">{`Amazon DynamoDB + Amazon OpenSearch`}</strong>{` — recommended for large or enterprise-level projects that will handle hundreds of thousands or millions of records`}</li>
</ul>
<p>{`If you’re just getting started, choose `}<strong parentName="p">{`Amazon DynamoDB`}</strong>{`. It has a generous free tier and scales on demand with no fixed monthly cost.`}</p>
<Alert type="warning" title="This choice is permanent" mdxType="Alert">
<p>{`The database setup you pick during project creation `}<strong parentName="p">{`cannot be changed later`}</strong>{` without recreating the project. If you expect your project to grow significantly, consider starting with DynamoDB + OpenSearch.`}</p>
<p>{`Note that the OpenSearch setup includes an always-on cluster that costs roughly `}<strong parentName="p">{`$25/month`}</strong>{` even at the smallest configuration.`}</p>
</Alert>
<p>{`Once the setup finishes, you will have a new project folder with two key pieces:`}</p>
<ul>
<li parentName="ul"><strong parentName="li"><inlineCode parentName="strong">{`webiny.config.tsx`}</inlineCode></strong>{` — the main configuration file where all extensions and infrastructure settings are declared`}</li>
<li parentName="ul"><strong parentName="li"><inlineCode parentName="strong">{`extensions/`}</inlineCode></strong>{` — the folder where all your custom code lives`}</li>
</ul>
<_Heading level={2} id={"deploy-your-project"} nextElement={{
      "type": "paragraph"
    }}>Deploy Your Project</_Heading>
<p>{`Navigate into the project folder and deploy:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`cd my-webiny-project
yarn webiny deploy`}
</Editor>
<p>{`This deploys all three Webiny applications — Core, API, and Admin — to the `}<inlineCode parentName="p">{`dev`}</inlineCode>{` environment in your AWS account.`}</p>
<Alert type="info" title="First deployment takes time" mdxType="Alert">
<p>{`The first deployment typically takes `}<strong parentName="p">{`5–15 minutes`}</strong>{` as AWS provisions all the necessary resources. It may look like nothing is happening in the terminal — this is normal. Let it finish. If something goes wrong, an error message will appear.`}</p>
</Alert>
<p>{`Once the deployment completes, the terminal displays the URL for your Admin panel.`}</p>
<p>{`If you miss it, you can always retrieve it by running:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`yarn webiny info`}
</Editor>
<_Heading level={2} id={"access-the-admin-panel"} nextElement={{
      "type": "paragraph"
    }}>Access the Admin Panel</_Heading>
<p>{`Open the Admin URL in your browser. Since this is a fresh deployment, you will see the installation wizard. Fill in your name, email, and password to create the first admin account.`}</p>
<p>{`After completing the wizard, you will land on the Webiny dashboard. Your instance is now fully operational — Headless CMS, File Manager, and all other Webiny apps are ready to use.`}</p>
<_Heading level={2} id={"what-s-next"} nextElement={{
      "type": "paragraph"
    }}>What&#39;s Next</_Heading>
<p>{`Now that you have a running Webiny instance, the next step is to connect your AI coding environment so it can assist you with customizations.`}</p>
<p>{`Continue to `}<_Link href="/docs/get-started/connect-ai-environment">{`Connect Your AI Environment`}</_Link>{`.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;