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
  "title": "Local Development",
  "description": "Learn the day-to-day workflow for running Webiny locally, making changes, and verifying results.",
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
  "title": "Admin Development",
  "slug": "admin-development",
  "children": []
}, {
  "title": "API Development",
  "slug": "api-development",
  "children": []
}, {
  "title": "Running Both",
  "slug": "running-both",
  "children": []
}, {
  "title": "Environment Variables",
  "slug": "environment-variables",
  "children": []
}, {
  "title": "Joining an Existing Project",
  "slug": "joining-an-existing-project",
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
<li parentName="ul">{`how to develop the Admin UI locally with hot reload`}</li>
<li parentName="ul">{`how the Local Lambda Development system works for API changes`}</li>
<li parentName="ul">{`when and why you need to redeploy after stopping watch mode`}</li>
<li parentName="ul">{`how environment variables work in a Webiny project`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`Webiny runs on AWS, but you develop locally. The `}<inlineCode parentName="p">{`watch`}</inlineCode>{` commands connect to your deployed infrastructure and let you see changes instantly — without redeploying after every edit. This gives you a fast feedback loop for both frontend and backend work.`}</p>
<p>{`Before using the watch commands, make sure your project is deployed. If you followed the `}<_Link href="/docs/get-started/quickstart">{`Quickstart`}</_Link>{`, you already have a `}<inlineCode parentName="p">{`dev`}</inlineCode>{` environment running.`}</p>
<_Heading level={2} id={"admin-development"} nextElement={{
      "type": "paragraph"
    }}>Admin Development</_Heading>
<p>{`Start the Admin development server:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`yarn webiny watch admin`}
</Editor>
<p>{`This launches a local React dev server at `}<inlineCode parentName="p">{`http://localhost:3001`}</inlineCode>{` with hot module replacement. Changes to Admin extensions — themes, branding, custom views, navigation items — appear instantly in the browser.`}</p>
<p>{`This is a standard React development experience. You can use browser DevTools, React Developer Tools, and all the debugging techniques you already know.`}</p>
<_Heading level={2} id={"api-development"} nextElement={{
      "type": "paragraph"
    }}>API Development</_Heading>
<p>{`Start the API development server:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`yarn webiny watch api`}
</Editor>
<p>{`This activates `}<strong parentName="p">{`Local Lambda Development`}</strong>{` — a hybrid approach that runs your backend code locally while staying connected to real AWS services (DynamoDB, S3, Cognito, and others).`}</p>
<p>{`Here is how it works:`}</p>
<ul>
<li parentName="ul">{`Your deployed Lambda functions are temporarily replaced with stubs that forward incoming events to your local machine`}</li>
<li parentName="ul">{`Your code executes locally with the full AWS Lambda context (environment variables, permissions, and everything else)`}</li>
<li parentName="ul">{`Responses are sent back through the Lambda stubs to the caller`}</li>
</ul>
<p>{`The result: you see backend changes — GraphQL schemas, lifecycle hooks, content models, business logic — take effect immediately, without waiting for a deployment. Console logs appear directly in your terminal.`}</p>
<Alert type="warning" title="You must redeploy after stopping watch" mdxType="Alert">
<p>{`When you stop `}<inlineCode parentName="p">{`yarn webiny watch api`}</inlineCode>{`, your Lambda functions still contain the forwarding stubs — not your actual code. You `}<strong parentName="p">{`must`}</strong>{` run `}<inlineCode parentName="p">{`yarn webiny deploy api`}</inlineCode>{` to restore the real Lambda code and make your API functional in the cloud again.`}</p>
<p>{`The watch command prints a reminder when you stop it.`}</p>
</Alert>
<_Heading level={2} id={"running-both"} nextElement={{
      "type": "paragraph"
    }}>Running Both</_Heading>
<p>{`You can run both watch commands at the same time in separate terminals:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`# Terminal 1
yarn webiny watch api`}
</Editor>
<Editor title="" lang="bash" mdxType="Editor">
{`# Terminal 2
yarn webiny watch admin`}
</Editor>
<p>{`This gives you the full local development experience — backend and frontend changes reflected in real time.`}</p>
<_Heading level={2} id={"environment-variables"} nextElement={{
      "type": "paragraph"
    }}>Environment Variables</_Heading>
<p>{`Webiny projects do not require a `}<inlineCode parentName="p">{`.env`}</inlineCode>{` file by default. Most configuration is handled through `}<inlineCode parentName="p">{`webiny.config.tsx`}</inlineCode>{` and build parameters.`}</p>
<p>{`When you do need environment variables, use prefixes to target the right application:`}</p>
<ul>
<li parentName="ul"><strong parentName="li"><inlineCode parentName="strong">{`WEBINY_ADMIN_`}</inlineCode></strong>{` — only loaded in the Admin application`}</li>
<li parentName="ul"><strong parentName="li"><inlineCode parentName="strong">{`WEBINY_API_`}</inlineCode></strong>{` — only loaded in the API application`}</li>
</ul>
<p>{`Place them in a `}<inlineCode parentName="p">{`.env`}</inlineCode>{` file at your project root. The prefixes prevent variables from leaking between applications.`}</p>
<_Heading level={2} id={"joining-an-existing-project"} nextElement={{
      "type": "paragraph"
    }}>Joining an Existing Project</_Heading>
<p>{`If you are joining a team that already has a Webiny project, the onboarding is straightforward:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`git clone <repository-url>
cd <project-folder>
yarn`}
</Editor>
<p>{`No scaffolding commands, no special setup. Install dependencies and you are ready to start developing.`}</p>
<p>{`If the team uses environment variables, check for a `}<inlineCode parentName="p">{`.env.example`}</inlineCode>{` file in the project root — it documents the required variables and their purpose. The actual `}<inlineCode parentName="p">{`.env`}</inlineCode>{` file is typically excluded from version control, so you will need to create your own copy and fill in the values your team provides.`}</p>
<_Heading level={2} id={"what-s-next"} nextElement={{
      "type": "paragraph"
    }}>What&#39;s Next</_Heading>
<p>{`You now know the local development workflow. The final step is understanding how deployment works in more detail — environments, individual application deploys, and teardown.`}</p>
<p>{`Continue to `}<_Link href="/docs/get-started/deploy-webiny">{`Deploy Webiny`}</_Link>{`.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;