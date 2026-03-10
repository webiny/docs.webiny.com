/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { AdditionalNotes } from "@/components/upgrade/AdditionalNotes";
import { Layout as _Layout } from "@/layouts/ReleaseNotesLayout"

import _navigation from "@/data/navigation.12bb74.json";

const Layout = _Layout;
const pageData = {
  "title": "Upgrade from 5.43.x to 5.44.0",
  "description": "Learn how to upgrade Webiny from 5.43.x to 5.44.0.",
  "type": "release-notes",
  "showPageHeader": true,
  "fullWidth": false
};
const docsearch = {
  "type": "release-notes",
  "weight": 50
};
const navigation = _navigation;
const tableOfContents = [{
  "title": "Step-by-Step Guide",
  "slug": "step-by-step-guide",
  "children": [{
    "title": "1. Upgrade Webiny Packages",
    "slug": "1-upgrade-webiny-packages",
    "children": []
  }, {
    "title": "2. Deploy Your Project",
    "slug": "2-deploy-your-project",
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
tableOfContents
};
const MDXLayout = "wrapper"
export default function MDXContent({
  components,
  ...props
}) {
  return <MDXLayout {...layoutProps} {...props} components={components} mdxType="MDXLayout">




<Alert type="success" title="What you’ll learn" mdxType="Alert">
<ul>
<li parentName="ul">{`how to upgrade Webiny from 5.43.x to 5.44.0`}</li>
</ul>
</Alert>
<Alert type="info" mdxType="Alert">
<p>{`Make sure to check out the `}<a parentName="p" {...{
          "href": "./changelog"
        }}>{`5.44.0 changelog`}</a>{` to get familiar with the changes introduced in this release.`}</p>
</Alert>
<_Heading level={2} id={"step-by-step-guide"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Step-by-Step Guide</_Heading>
<_Heading level={3} id={"1-upgrade-webiny-packages"} nextElement={{
      "type": "paragraph"
    }}>1. Upgrade Webiny Packages</_Heading>
<p>{`Upgrade all Webiny NPM packages by running the following command:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`yarn up "@webiny/*@5.44.0"`}
</Editor>
<p>{`Once the upgrade has finished, running the `}<inlineCode parentName="p">{`yarn webiny --version`}</inlineCode>{` command in your terminal should return `}<strong parentName="p">{`5.44.0`}</strong>{`.`}</p>
<_Heading level={3} id={"2-deploy-your-project"} nextElement={{
      "type": "paragraph"
    }}>2. Deploy Your Project</_Heading>
<p>{`Proceed by redeploying your Webiny project:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`# Execute in your project root.
yarn webiny deploy --env {environment}`}
</Editor>
<AdditionalNotes mdxType="AdditionalNotes" />
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}





    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;