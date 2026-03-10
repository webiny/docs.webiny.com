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
  "title": "Deploy Webiny",
  "description": "Understand the deployment flow for taking a Webiny project from local development to a live environment.",
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
  "title": "Deploy All Applications",
  "slug": "deploy-all-applications",
  "children": []
}, {
  "title": "Deploy Individual Applications",
  "slug": "deploy-individual-applications",
  "children": []
}, {
  "title": "Environments",
  "slug": "environments",
  "children": [{
    "title": "Long-Lived Environments",
    "slug": "long-lived-environments",
    "children": []
  }, {
    "title": "Short-Lived Environments",
    "slug": "short-lived-environments",
    "children": []
  }, {
    "title": "Production Environments",
    "slug": "production-environments",
    "children": []
  }]
}, {
  "title": "Destroy an Environment",
  "slug": "destroy-an-environment",
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
<li parentName="ul">{`how to deploy all applications or individual ones`}</li>
<li parentName="ul">{`how environments work and when to use them`}</li>
<li parentName="ul">{`how to tear down an environment you no longer need`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`Webiny deploys three applications to AWS: `}<strong parentName="p">{`Core`}</strong>{` (shared infrastructure like databases and file storage), `}<strong parentName="p">{`API`}</strong>{` (backend Lambda functions and GraphQL), and `}<strong parentName="p">{`Admin`}</strong>{` (the frontend management interface). You can deploy all three at once or target them individually. Webiny also supports multiple isolated environments — so you can maintain separate setups for development, staging, production, and even short-lived feature branches.`}</p>
<_Heading level={2} id={"deploy-all-applications"} nextElement={{
      "type": "paragraph"
    }}>Deploy All Applications</_Heading>
<p>{`To deploy everything in one step:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`yarn webiny deploy`}
</Editor>
<p>{`This deploys Core, API, and Admin to the `}<inlineCode parentName="p">{`dev`}</inlineCode>{` environment by default. If this is your first deployment, it takes `}<strong parentName="p">{`5–15 minutes`}</strong>{` while AWS provisions all the necessary resources. Subsequent deployments are significantly faster because only the changes are applied.`}</p>
<p>{`After the deployment finishes, retrieve your application URLs with:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`yarn webiny info`}
</Editor>
<_Heading level={2} id={"deploy-individual-applications"} nextElement={{
      "type": "paragraph"
    }}>Deploy Individual Applications</_Heading>
<p>{`You do not always need to deploy everything. If only one part of the system changed, deploy just that application:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`yarn webiny deploy core
yarn webiny deploy api
yarn webiny deploy admin`}
</Editor>
<p>{`Some common scenarios:`}</p>
<ul>
<li parentName="ul"><strong parentName="li">{`Added or changed a content model or API extension`}</strong>{` — `}<inlineCode parentName="li">{`yarn webiny deploy api`}</inlineCode></li>
<li parentName="ul"><strong parentName="li">{`Updated the Admin UI or branding`}</strong>{` — `}<inlineCode parentName="li">{`yarn webiny deploy admin`}</inlineCode></li>
<li parentName="ul"><strong parentName="li">{`Changed infrastructure configuration`}</strong>{` — `}<inlineCode parentName="li">{`yarn webiny deploy core`}</inlineCode>{` (and then `}<inlineCode parentName="li">{`api`}</inlineCode>{` or `}<inlineCode parentName="li">{`admin`}</inlineCode>{` if they depend on the change)`}</li>
</ul>
<p>{`Targeting individual applications keeps deployments fast and focused.`}</p>
<_Heading level={2} id={"environments"} nextElement={{
      "type": "paragraph"
    }}>Environments</_Heading>
<p>{`Webiny supports multiple environments, each with its own isolated set of AWS resources. No data or configuration is shared between environments.`}</p>
<_Heading level={3} id={"long-lived-environments"} nextElement={{
      "type": "paragraph"
    }}>Long-Lived Environments</_Heading>
<p>{`These are persistent environments maintained over the life of the project:`}</p>
<ul>
<li parentName="ul"><strong parentName="li">{`dev`}</strong>{` — daily development (the default when no `}<inlineCode parentName="li">{`--env`}</inlineCode>{` flag is provided)`}</li>
<li parentName="ul"><strong parentName="li">{`staging`}</strong>{` — pre-production testing`}</li>
<li parentName="ul"><strong parentName="li">{`prod`}</strong>{` — production`}</li>
</ul>
<_Heading level={3} id={"short-lived-environments"} nextElement={{
      "type": "paragraph"
    }}>Short-Lived Environments</_Heading>
<p>{`Create temporary environments for feature branches, pull request previews, or experimentation:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`yarn webiny deploy --env feature-123`}
</Editor>
<p>{`When you are done, destroy the environment to stop incurring costs:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`yarn webiny destroy --env feature-123`}
</Editor>
<_Heading level={3} id={"production-environments"} nextElement={{
      "type": "paragraph"
    }}>Production Environments</_Heading>
<p>{`By default, all environments use a development-optimized infrastructure template — smaller, cheaper, and faster to deploy. For environments that need production-grade infrastructure (high availability, backups, auto-scaling), declare them in `}<inlineCode parentName="p">{`webiny.config.tsx`}</inlineCode>{`:`}</p>
<Editor title="webiny.config.tsx" lang="tsx" mdxType="Editor">
{`<Infra.ProductionEnvironments environments={["prod", "staging"]} />`}
</Editor>
<p>{`Any environment listed here will be deployed with the production template. All other environments use the development template.`}</p>
<_Heading level={2} id={"destroy-an-environment"} nextElement={{
      "type": "paragraph"
    }}>Destroy an Environment</_Heading>
<p>{`To permanently remove an environment and all its AWS resources:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`yarn webiny destroy --env <environment-name>`}
</Editor>
<Alert type="warning" title="This action is irreversible" mdxType="Alert">
<p>{`Destroying an environment deletes all deployed infrastructure, databases, files, and data associated with that environment. Make sure you no longer need the environment before running this command.`}</p>
</Alert>
<p>{`You can check what is currently deployed in any environment with:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`yarn webiny info --env <environment-name>`}
</Editor>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;