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
  "title": "webiny deploy",
  "description": "Build and deploy your Webiny project to AWS.",
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
  "title": "Deploy the Whole Project",
  "slug": "deploy-the-whole-project",
  "children": []
}, {
  "title": "Deploy Specific Apps",
  "slug": "deploy-specific-apps",
  "children": []
}, {
  "title": "Options",
  "slug": "options",
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
<li parentName="ul">{`How to deploy your whole Webiny project`}</li>
<li parentName="ul">{`How to deploy one or more specific apps`}</li>
<li parentName="ul">{`What options the `}<inlineCode parentName="li">{`deploy`}</inlineCode>{` command accepts`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`The `}<inlineCode parentName="p">{`deploy`}</inlineCode>{` command builds your code and deploys the resulting cloud infrastructure to AWS using Pulumi. You can deploy the whole project at once, or target one or more specific apps.`}</p>
<_Heading level={2} id={"deploy-the-whole-project"} nextElement={{
      "type": "code",
      "lang": null,
      "meta": null
    }}>Deploy the Whole Project</_Heading>
<Editor title="" lang="null" mdxType="Editor">
{`yarn webiny deploy`}
</Editor>
<p>{`This deploys all apps in the correct order. The environment defaults to `}<inlineCode parentName="p">{`dev`}</inlineCode>{`. To target a different environment:`}</p>
<Editor title="" lang="null" mdxType="Editor">
{`yarn webiny deploy --env prod`}
</Editor>
<Alert type="warning" mdxType="Alert">
  Depending on your [database setup](#), the first deployment can take up to 20 minutes.
</Alert>
<_Heading level={2} id={"deploy-specific-apps"} nextElement={{
      "type": "paragraph"
    }}>Deploy Specific Apps</_Heading>
<p>{`Pass one or more app names as arguments:`}</p>
<Editor title="" lang="null" mdxType="Editor">
{`yarn webiny deploy api
yarn webiny deploy core api
yarn webiny deploy core api admin`}
</Editor>
<p>{`With a specific environment:`}</p>
<Editor title="" lang="null" mdxType="Editor">
{`yarn webiny deploy api --env prod`}
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
          }}><inlineCode parentName="td">{`--build`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`Build packages before deploying. Defaults to `}<inlineCode parentName="td">{`true`}</inlineCode>{`.`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`--preview`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`Preview the deploy without actually performing it.`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`--show-deployment-logs`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`Print deployment logs (automatically enabled in CI).`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`--allow-local-state-files`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`Allow using local Pulumi state files with production deployments (not recommended).`}</td>
</tr>
</tbody>
</table>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;