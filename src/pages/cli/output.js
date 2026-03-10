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
  "title": "webiny output",
  "description": "Print the Pulumi stack output for a deployed Webiny app.",
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
  "children": []
}, {
  "title": "What Gets Printed",
  "slug": "what-gets-printed",
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
<li parentName="ul">{`How to read stack output values for a deployed app`}</li>
<li parentName="ul">{`What kind of information the output command returns`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`The `}<inlineCode parentName="p">{`output`}</inlineCode>{` command prints the Pulumi stack output for an app that has already been deployed. Stack outputs are values that the infrastructure code explicitly exports — things like API endpoint URLs, CloudFront distribution IDs, S3 bucket names, and similar deployment artifacts.`}</p>
<p>{`This is useful when you need to retrieve a URL or resource identifier after deployment without opening the AWS console.`}</p>
<_Heading level={2} id={"usage"} nextElement={{
      "type": "code",
      "lang": null,
      "meta": null
    }}>Usage</_Heading>
<Editor title="" lang="null" mdxType="Editor">
{`yarn webiny output api
yarn webiny output core
yarn webiny output admin`}
</Editor>
<p>{`With a specific environment:`}</p>
<Editor title="" lang="null" mdxType="Editor">
{`yarn webiny output api --env prod`}
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
          }}>{`Variant of the app.`}</td>
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
          }}><inlineCode parentName="td">{`--json`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`Emit output as JSON.`}</td>
</tr>
</tbody>
</table>
<_Heading level={2} id={"what-gets-printed"} nextElement={{
      "type": "paragraph"
    }}>What Gets Printed</_Heading>
<p>{`The exact outputs depend on what each app exports from its Pulumi program. Common values include:`}</p>
<ul>
<li parentName="ul">{`API GraphQL endpoint URL`}</li>
<li parentName="ul">{`CloudFront distribution domain names`}</li>
<li parentName="ul">{`Cognito User Pool and Client IDs`}</li>
<li parentName="ul">{`S3 bucket names`}</li>
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