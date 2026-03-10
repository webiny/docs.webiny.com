/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { CanIUseThis } from "@/components/CanIUseThis";
import { WhatYouWillLearn } from "@/components/WhatYouWillLearn";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Environment Variables",
  "description": "Learn how to inject environment variables into the admin app.",
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
  "title": "Inject Variables From Pulumi State",
  "slug": "inject-variables-from-pulumi-state",
  "children": []
}, {
  "title": "Inject Arbitrary Variables",
  "slug": "inject-arbitrary-variables",
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




<CanIUseThis since={"5.39.0"} mdxType="CanIUseThis" />
<WhatYouWillLearn mdxType="WhatYouWillLearn">
<ul>
<li parentName="ul">{`how to inject new environment variables into the Admin app`}</li>
</ul>
</WhatYouWillLearn>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`Admin app relies on several environment variables that get injected into React apps at build time using Pulumi state files. Sometimes, you might want to inject new variables, relevant to your project, and in this article we show you how to do just that.`}</p>
<p>{`Note that the naming convention for environment variables is explained in a dedicated article on `}<_Link href="/docs/5.x/core-development-concepts/basics/environment-variables">{`Environment Variables`}</_Link>{`.`}</p>
<_Heading level={2} id={"inject-variables-from-pulumi-state"} nextElement={{
      "type": "paragraph"
    }}>Inject Variables From Pulumi State</_Heading>
<p>{`Admin app config modifier contains a utility called `}<inlineCode parentName="p">{`pulumiOutputToEnv`}</inlineCode>{`, which helps you load the Pulumi state of a specific app (for example, `}<inlineCode parentName="p">{`core`}</inlineCode>{` or `}<inlineCode parentName="p">{`api`}</inlineCode>{`), and use it modify the existing set of environment variables.`}</p>
<Editor title="apps/admin/webiny.config.ts" lang="ts" mdxType="Editor">
{`import { createAdminAppConfig } from "@webiny/serverless-cms-aws";
import { ApiOutput } from "@webiny/pulumi-aws";

export default createAdminAppConfig(({ config }) => {
  config.pulumiOutputToEnv<ApiOutput>("apps/api", ({ output, env }) => {
    return {
      ...env,
      WEBINY_ADMIN_MY_VAR: output.apiUrl
    };
  });
});`}
</Editor>
<p>{`The `}<inlineCode parentName="p">{`ApiOutput`}</inlineCode>{` is a type definition of all the Pulumi outputs that Webiny ships by default. This gives you proper autocomplete on the `}<inlineCode parentName="p">{`output`}</inlineCode>{` object.`}</p>
<_Heading level={2} id={"inject-arbitrary-variables"} nextElement={{
      "type": "paragraph"
    }}>Inject Arbitrary Variables</_Heading>
<p>{`Sometimes you will need to inject values that do not come from Pulumi, but from other sources, like `}<inlineCode parentName="p">{`.env`}</inlineCode>{` file, or some other places you might have. In that case, use a `}<inlineCode parentName="p">{`customEnv`}</inlineCode>{` method:`}</p>
<Editor title="apps/admin/webiny.config.ts" lang="ts" mdxType="Editor">
{`import { createAdminAppConfig } from "@webiny/serverless-cms-aws";

export default createAdminAppConfig(({ config }) => {
  config.customEnv(env => ({
    ...env,
    WEBINY_ADMIN_MY_VAR: process.env.MY_CUSTOM_VAR
  }));
});`}
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