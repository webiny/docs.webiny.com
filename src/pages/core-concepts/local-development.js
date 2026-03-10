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
  "description": "How to develop Webiny applications locally with watch commands.",
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
  "title": "Admin Development",
  "slug": "admin-development",
  "children": [{
    "title": "Starting the Dev Server",
    "slug": "starting-the-dev-server",
    "children": []
  }, {
    "title": "What You Can Develop",
    "slug": "what-you-can-develop",
    "children": []
  }]
}, {
  "title": "API Development",
  "slug": "api-development",
  "children": [{
    "title": "Local AWS Lambda Development",
    "slug": "local-aws-lambda-development",
    "children": []
  }, {
    "title": "How It Works",
    "slug": "how-it-works",
    "children": []
  }, {
    "title": "What You Can Develop",
    "slug": "what-you-can-develop-1",
    "children": []
  }, {
    "title": "Important Considerations",
    "slug": "important-considerations",
    "children": []
  }]
}, {
  "title": "Infrastructure Development",
  "slug": "infrastructure-development",
  "children": []
}, {
  "title": "Development Workflow",
  "slug": "development-workflow",
  "children": [{
    "title": "Initial Setup",
    "slug": "initial-setup",
    "children": []
  }, {
    "title": "Daily Development",
    "slug": "daily-development",
    "children": []
  }, {
    "title": "Concurrent Development",
    "slug": "concurrent-development",
    "children": []
  }]
}, {
  "title": "Website Builder Development",
  "slug": "website-builder-development",
  "children": []
}, {
  "title": "TypeScript and Build Validation",
  "slug": "type-script-and-build-validation",
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
  - How local development works in Webiny - Using watch commands for Admin and API - Understanding
  Local AWS Lambda Development
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`Webiny provides a streamlined local development experience through watch commands. You can develop both Admin UI and API extensions locally while connected to your deployed AWS infrastructure. This hybrid approach gives you fast iteration with a realistic environment.`}</p>
<_Heading level={2} id={"prerequisites"} nextElement={{
      "type": "paragraph"
    }}>Prerequisites</_Heading>
<p>{`Before starting local development, deploy Core and API applications:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`yarn webiny deploy core api`}
</Editor>
<Alert type="info" title="Admin Deployment Optional" mdxType="Alert">
  You don't need to deploy the Admin app for local development. Only deploy it with `yarn webiny
  deploy admin` when you need a CloudFront URL to share with others or test in production-like
  conditions.
</Alert>
<_Heading level={2} id={"admin-development"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Admin Development</_Heading>
<_Heading level={3} id={"starting-the-dev-server"} nextElement={{
      "type": "code",
      "lang": "bash",
      "meta": null
    }}>Starting the Dev Server</_Heading>
<Editor title="" lang="bash" mdxType="Editor">
{`yarn webiny watch admin`}
</Editor>
<p>{`This command:`}</p>
<ul>
<li parentName="ul">{`Starts development server on `}<inlineCode parentName="li">{`http://localhost:3001`}</inlineCode></li>
<li parentName="ul">{`Enables hot module replacement`}</li>
<li parentName="ul">{`Watches for changes in Admin extensions`}</li>
<li parentName="ul">{`Provides instant feedback on changes`}</li>
</ul>
<_Heading level={3} id={"what-you-can-develop"} nextElement={{
      "type": "list",
      "ordered": false,
      "start": null,
      "spread": false
    }}>What You Can Develop</_Heading>
<ul>
<li parentName="ul">{`Custom Admin UI extensions`}</li>
<li parentName="ul">{`White-label branding and themes`}</li>
<li parentName="ul">{`Custom navigation items`}</li>
<li parentName="ul">{`New Admin pages and views`}</li>
</ul>
<_Heading level={2} id={"api-development"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>API Development</_Heading>
<_Heading level={3} id={"local-aws-lambda-development"} nextElement={{
      "type": "paragraph"
    }}>Local AWS Lambda Development</_Heading>
<p>{`API development uses a unique approach that runs Lambda code locally while connected to cloud services:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`yarn webiny watch api`}
</Editor>
<_Heading level={3} id={"how-it-works"} nextElement={{
      "type": "list",
      "ordered": true,
      "start": 1,
      "spread": false
    }}>How It Works</_Heading>
<ol>
<li parentName="ol"><strong parentName="li">{`Lambda Stubs Deployed`}</strong>{` - Cloud Lambda functions replaced with forwarding stubs`}</li>
<li parentName="ol"><strong parentName="li">{`Event Forwarding`}</strong>{` - AWS requests forwarded to your local machine`}</li>
<li parentName="ol"><strong parentName="li">{`Local Execution`}</strong>{` - Code runs locally with full Lambda context`}</li>
<li parentName="ol"><strong parentName="li">{`Response Routing`}</strong>{` - Results sent back through Lambda stub`}</li>
</ol>
<Alert type="info" title="Why This Hybrid Approach?" mdxType="Alert">
  This hybrid approach (code runs locally, but connects to cloud services) exists because of the
  serverless nature of the services Webiny relies on. Running DynamoDB, OpenSearch, S3, Cognito, and
  other AWS services entirely locally would be complex and unreliable. It's simpler and more
  practical to run your code locally while connecting to real AWS infrastructure - you get fast
  iteration with a realistic environment.
</Alert>
<_Heading level={3} id={"what-you-can-develop-1"} nextElement={{
      "type": "list",
      "ordered": false,
      "start": null,
      "spread": false
    }}>What You Can Develop</_Heading>
<ul>
<li parentName="ul"><strong parentName="li">{`GraphQL Schemas`}</strong>{` - Custom types and fields`}</li>
<li parentName="ul"><strong parentName="li">{`Resolvers`}</strong>{` - Business logic and data fetching`}</li>
<li parentName="ul"><strong parentName="li">{`Event Handlers`}</strong>{` - Lifecycle hooks and reactions`}</li>
<li parentName="ul"><strong parentName="li">{`Custom Endpoints`}</strong>{` - REST APIs or webhooks`}</li>
<li parentName="ul"><strong parentName="li">{`Background Tasks`}</strong>{` - Async processing logic`}</li>
</ul>
<_Heading level={3} id={"important-considerations"} nextElement={{
      "type": "jsx"
    }}>Important Considerations</_Heading>
<Alert type="warning" title="Redeploy After Watch" mdxType="Alert">
When you stop the watch command, Lambda functions still contain stub code. You must redeploy to restore actual Lambda code:
<Editor title="" lang="bash" mdxType="Editor">
{`yarn webiny deploy api`}
</Editor>
<p>{`The watch command will remind you when you stop it.`}</p>
</Alert>
<_Heading level={2} id={"infrastructure-development"} nextElement={{
      "type": "paragraph"
    }}>Infrastructure Development</_Heading>
<p>{`Infrastructure changes require deployment and cannot be tested with watch commands:`}</p>
<Editor title="webiny.config.tsx" lang="tsx" mdxType="Editor">
{`// Infrastructure extensions
<Infra.Core.Pulumi src={"/extensions/infrastructure/core.ts"} />
<Infra.Api.Pulumi src={"/extensions/infrastructure/api.ts"} />
<Infra.Admin.Pulumi src={"/extensions/infrastructure/admin.ts"} />`}
</Editor>
<p>{`To apply infrastructure changes:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`yarn webiny deploy <app>  # core, api, or admin`}
</Editor>
<_Heading level={2} id={"development-workflow"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Development Workflow</_Heading>
<_Heading level={3} id={"initial-setup"} nextElement={{
      "type": "paragraph"
    }}>Initial Setup</_Heading>
<p>{`For new team members:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`# Clone repository
git clone <repository-url>
cd <project-name>

# Install dependencies
yarn

# Deploy core infrastructure
yarn webiny deploy core api

# Start developing!
yarn webiny watch admin
# or
yarn webiny watch api`}
</Editor>
<_Heading level={3} id={"daily-development"} nextElement={{
      "type": "list",
      "ordered": true,
      "start": 1,
      "spread": false
    }}>Daily Development</_Heading>
<ol>
<li parentName="ol"><strong parentName="li">{`Start watch command`}</strong>{` for the app you’re working on`}</li>
<li parentName="ol"><strong parentName="li">{`Make changes`}</strong>{` in `}<inlineCode parentName="li">{`extensions/`}</inlineCode>{` folder`}</li>
<li parentName="ol"><strong parentName="li">{`Test locally`}</strong>{` with immediate feedback`}</li>
<li parentName="ol"><strong parentName="li">{`Deploy when ready`}</strong>{` to share or update infrastructure`}</li>
</ol>
<_Heading level={3} id={"concurrent-development"} nextElement={{
      "type": "paragraph"
    }}>Concurrent Development</_Heading>
<p>{`Run multiple watch commands in separate terminals:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`# Terminal 1
yarn webiny watch admin

# Terminal 2
yarn webiny watch api`}
</Editor>
<_Heading level={2} id={"website-builder-development"} nextElement={{
      "type": "paragraph"
    }}>Website Builder Development</_Heading>
<p>{`If you’re developing with Website Builder, you’ll need to run your website application locally (e.g., a Next.js app) in addition to the watch commands.`}</p>
<Alert type="info" title="Website Builder Integration" mdxType="Alert">
  Website Builder development workflow and setup is covered in detail in the Website Builder section
  of the documentation.
</Alert>
<_Heading level={2} id={"type-script-and-build-validation"} nextElement={{
      "type": "paragraph"
    }}>TypeScript and Build Validation</_Heading>
<p>{`Webiny enforces TypeScript checking:`}</p>
<ul>
<li parentName="ul"><strong parentName="li">{`IDE Support`}</strong>{` - Real-time type errors`}</li>
<li parentName="ul"><strong parentName="li">{`Build Validation`}</strong>{` - Compilation fails on type errors`}</li>
<li parentName="ul"><strong parentName="li">{`Deployment Safety`}</strong>{` - Errors caught before production`}</li>
</ul>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;