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
  "title": "webiny pulumi",
  "description": "Execute Pulumi CLI commands against a Webiny app stack.",
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
  "title": "Common Use Cases",
  "slug": "common-use-cases",
  "children": [{
    "title": "Inspect Stack Resources",
    "slug": "inspect-stack-resources",
    "children": []
  }, {
    "title": "Repair a Stuck Stack (Pending Operations)",
    "slug": "repair-a-stuck-stack-pending-operations",
    "children": []
  }, {
    "title": "Refresh State",
    "slug": "refresh-state",
    "children": []
  }, {
    "title": "Preview Changes",
    "slug": "preview-changes",
    "children": []
  }]
}, {
  "title": "Troubleshooting",
  "slug": "troubleshooting",
  "children": [{
    "title": "--yes must be passed in to proceed when running in non-interactive mode",
    "slug": "yes-must-be-passed-in-to-proceed-when-running-in-non-interactive-mode",
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
<li parentName="ul">{`When and why you need to run raw Pulumi commands`}</li>
<li parentName="ul">{`How to use `}<inlineCode parentName="li">{`webiny pulumi`}</inlineCode>{` to pass commands to the Pulumi CLI`}</li>
<li parentName="ul">{`Common scenarios where this command is required`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`The `}<inlineCode parentName="p">{`pulumi`}</inlineCode>{` command is a thin wrapper that lets you run any `}<a parentName="p" {...{
        "href": "https://www.pulumi.com/docs/reference/cli/"
      }}>{`Pulumi CLI`}</a>{` command against a specific app and environment. Webiny embeds its own Pulumi binary and sets up the required environment variables automatically — you do not need to install Pulumi separately or select a stack manually.`}</p>
<p>{`Most day-to-day work uses `}<_Link href="/docs/cli/deploy"><inlineCode parentName="p">{`webiny deploy`}</inlineCode></_Link>{` and `}<_Link href="/docs/cli/destroy"><inlineCode parentName="p">{`webiny destroy`}</inlineCode></_Link>{`. Use `}<inlineCode parentName="p">{`webiny pulumi`}</inlineCode>{` when you need lower-level access that those commands do not expose.`}</p>
<_Heading level={2} id={"usage"} nextElement={{
      "type": "paragraph"
    }}>Usage</_Heading>
<p>{`The app name and the `}<inlineCode parentName="p">{`--`}</inlineCode>{` separator are both required. Everything after `}<inlineCode parentName="p">{`--`}</inlineCode>{` is passed directly to the Pulumi CLI.`}</p>
<Editor title="" lang="null" mdxType="Editor">
{`yarn webiny pulumi api -- <pulumi command>`}
</Editor>
<p>{`With a specific environment:`}</p>
<Editor title="" lang="null" mdxType="Editor">
{`yarn webiny pulumi api --env prod -- <pulumi command>`}
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
</tbody>
</table>
<_Heading level={2} id={"common-use-cases"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Common Use Cases</_Heading>
<_Heading level={3} id={"inspect-stack-resources"} nextElement={{
      "type": "paragraph"
    }}>Inspect Stack Resources</_Heading>
<p>{`List all cloud infrastructure resources currently tracked in the stack:`}</p>
<Editor title="" lang="null" mdxType="Editor">
{`yarn webiny pulumi api -- stack --show-urns`}
</Editor>
<_Heading level={3} id={"repair-a-stuck-stack-pending-operations"} nextElement={{
      "type": "paragraph"
    }}>Repair a Stuck Stack (Pending Operations)</_Heading>
<p>{`If a deployment was interrupted, Pulumi may report resources stuck in a `}<inlineCode parentName="p">{`pending_operations`}</inlineCode>{` state. Export the stack, edit it to remove the pending entries, then import it back:`}</p>
<Editor title="" lang="null" mdxType="Editor">
{`yarn webiny pulumi api -- stack export --file stack.json
# edit stack.json — remove entries from "pending_operations"
yarn webiny pulumi api -- stack import --file stack.json`}
</Editor>
<_Heading level={3} id={"refresh-state"} nextElement={{
      "type": "paragraph"
    }}>Refresh State</_Heading>
<p>{`Sync the Pulumi state file with the actual state of resources in AWS:`}</p>
<Editor title="" lang="null" mdxType="Editor">
{`yarn webiny pulumi api -- refresh --yes`}
</Editor>
<p>{`This is useful when resources have been modified outside of Pulumi (e.g. manually in the AWS console).`}</p>
<_Heading level={3} id={"preview-changes"} nextElement={{
      "type": "paragraph"
    }}>Preview Changes</_Heading>
<p>{`See what `}<inlineCode parentName="p">{`deploy`}</inlineCode>{` would change without actually deploying:`}</p>
<Editor title="" lang="null" mdxType="Editor">
{`yarn webiny pulumi api -- preview`}
</Editor>
<_Heading level={2} id={"troubleshooting"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Troubleshooting</_Heading>
<_Heading level={3} id={"yes-must-be-passed-in-to-proceed-when-running-in-non-interactive-mode"} nextElement={{
      "type": "paragraph"
    }}><code>--yes must be passed in to proceed when running in non-interactive mode</code></_Heading>
<p>{`Webiny runs all Pulumi commands in non-interactive mode. If a Pulumi command requires confirmation, add `}<inlineCode parentName="p">{`--yes`}</inlineCode>{`:`}</p>
<Editor title="" lang="null" mdxType="Editor">
{`yarn webiny pulumi api -- destroy --yes`}
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