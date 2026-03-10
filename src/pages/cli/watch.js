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
  "title": "webiny watch",
  "description": "Start a local development session with continuous rebuild and redeploy.",
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
  "title": "Usage",
  "slug": "usage",
  "children": []
}, {
  "title": "Options",
  "slug": "options",
  "children": [{
    "title": "Local AWS Lambda Development Options",
    "slug": "local-aws-lambda-development-options",
    "children": []
  }]
}, {
  "title": "How It Works",
  "slug": "how-it-works",
  "children": [{
    "title": "Frontend App (Admin)",
    "slug": "frontend-app-admin",
    "children": []
  }, {
    "title": "Backend App (API) — Local AWS Lambda Development",
    "slug": "backend-app-api-local-aws-lambda-development",
    "children": []
  }, {
    "title": "Why Not Run Everything Locally?",
    "slug": "why-not-run-everything-locally",
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



<Alert type="success" title="WHAT YOU'LL LEARN" mdxType="Alert">
<ul>
<li parentName="ul">{`How to use `}<inlineCode parentName="li">{`webiny watch`}</inlineCode>{` for frontend and backend development`}</li>
<li parentName="ul">{`How the command behaves differently for `}<inlineCode parentName="li">{`api`}</inlineCode>{` vs. `}<inlineCode parentName="li">{`admin`}</inlineCode></li>
<li parentName="ul">{`How Local AWS Lambda Development works`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`The `}<inlineCode parentName="p">{`watch`}</inlineCode>{` command is the primary tool for active development on a Webiny project. It monitors your source files for changes and continuously rebuilds and redeploys your code, so you don’t need to manually run `}<inlineCode parentName="p">{`webiny deploy`}</inlineCode>{` after every edit.`}</p>
<p>{`The command works differently depending on which app you are watching.`}</p>
<_Heading level={2} id={"usage"} nextElement={{
      "type": "code",
      "lang": null,
      "meta": null
    }}>Usage</_Heading>
<Editor title="" lang="null" mdxType="Editor">
{`yarn webiny watch api
yarn webiny watch admin`}
</Editor>
<p>{`With a specific environment:`}</p>
<Editor title="" lang="null" mdxType="Editor">
{`yarn webiny watch api --env prod`}
</Editor>
<_Heading level={2} id={"options"} nextElement={{
      "type": "table",
      "align": [null, null]
    }}>Options</_Heading>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Option`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`--env`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`Environment name (e.g. `}<inlineCode parentName="td">{`dev`}</inlineCode>{`, `}<inlineCode parentName="td">{`prod`}</inlineCode>{`). Defaults to `}<inlineCode parentName="td">{`dev`}</inlineCode>{`.`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`--variant`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`Variant name.`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`--region`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`AWS region to target.`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`-p, --package`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`One or more packages to watch for code changes.`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`--allow-production`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`Enables running `}<inlineCode parentName="td">{`watch`}</inlineCode>{` against production environments (not recommended).`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`--deployment-checks`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`Enable or disable deployment checks before watching. Defaults to `}<inlineCode parentName="td">{`true`}</inlineCode>{`.`}</td>
</tr>
</tbody>
</table>
<_Heading level={3} id={"local-aws-lambda-development-options"} nextElement={{
      "type": "table",
      "align": [null, null]
    }}>Local AWS Lambda Development Options</_Heading>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Option`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`-f, --function`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`One or more Lambda functions to watch (comma-separated).`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`--increase-timeout`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`Increase Lambda function timeout in seconds. Defaults to `}<inlineCode parentName="td">{`120`}</inlineCode>{`.`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`--increase-handshake-timeout`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`Increase the initial handshake timeout in seconds. Defaults to `}<inlineCode parentName="td">{`5`}</inlineCode>{`.`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`-i, --inspect`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`[Experimental]`}{` Enable Node debugger.`}</td>
</tr>
</tbody>
</table>
<_Heading level={2} id={"how-it-works"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>How It Works</_Heading>
<_Heading level={3} id={"frontend-app-admin"} nextElement={{
      "type": "paragraph"
    }}>Frontend App (Admin)</_Heading>
<p>{`For the `}<strong parentName="p">{`Admin`}</strong>{` app, `}<inlineCode parentName="p">{`watch`}</inlineCode>{` spins up a local development server. The app is rebuilt and hot-reloaded in the browser whenever a source file changes.`}</p>
<_Heading level={3} id={"backend-app-api-local-aws-lambda-development"} nextElement={{
      "type": "paragraph"
    }}>Backend App (API) — Local AWS Lambda Development</_Heading>
<p>{`For the `}<strong parentName="p">{`API`}</strong>{` app, `}<inlineCode parentName="p">{`watch`}</inlineCode>{` uses Local AWS Lambda Development. Your Lambda code runs on your local machine while staying connected to real AWS infrastructure — DynamoDB, OpenSearch, S3, Cognito, and other services your project depends on.`}</p>
<p>{`Here’s what happens when you run `}<inlineCode parentName="p">{`yarn webiny watch api`}</inlineCode>{`:`}</p>
<ul>
<li parentName="ul"><strong parentName="li">{`Lambda stubs are deployed`}</strong>{` — Webiny’s Lambda functions are temporarily replaced with stub code that forwards incoming events to your local machine.`}</li>
<li parentName="ul"><strong parentName="li">{`Requests are forwarded locally`}</strong>{` — when a request hits AWS, the stub forwards it to your local process.`}</li>
<li parentName="ul"><strong parentName="li">{`Your code runs locally`}</strong>{` — with the full Lambda execution context (environment variables, function context, etc.).`}</li>
<li parentName="ul"><strong parentName="li">{`Responses are routed back`}</strong>{` — your local response travels back through the stub to the original caller.`}</li>
</ul>
<p>{`This means you can iterate on backend code and see results immediately, without waiting for a full deployment. You can also attach a debugger since the code runs locally.`}</p>
<Alert type="warning" mdxType="Alert">
  When you stop `watch`, your Lambda functions still contain stub code — your API will not work
  until you redeploy. Run `yarn webiny deploy api` to restore the actual Lambda code. The watch
  command will remind you of this when it exits.
</Alert>
<_Heading level={3} id={"why-not-run-everything-locally"} nextElement={{
      "type": "paragraph"
    }}>Why Not Run Everything Locally?</_Heading>
<p>{`Running AWS-managed services like DynamoDB, OpenSearch, and Cognito fully locally would be complex and unreliable. The hybrid approach — local code execution, real cloud services — gives you fast iteration with a realistic environment.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;