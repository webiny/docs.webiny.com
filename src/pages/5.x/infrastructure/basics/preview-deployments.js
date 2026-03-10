/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/infrastructure/basics/assets/preview-deployments/preview-terminal.png'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Preview Deployments",
  "description": "Learn how to preview cloud infrastructure deployments, before actually executing them.",
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
  "title": "Introduction",
  "slug": "introduction",
  "children": []
}, {
  "title": "The Preview Flag",
  "slug": "the-preview-flag",
  "children": []
}, {
  "title": "Debugging",
  "slug": "debugging",
  "children": []
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
const Editor = makeShortcode("Editor");
const Image = makeShortcode("Image");
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




<Alert type="success" title="What you’ll learn" mdxType="Alert">
<ul>
<li parentName="ul">{`how to preview cloud infrastructure deployment for your project application`}</li>
</ul>
</Alert>
<_Heading level={2} id={"introduction"} nextElement={{
      "type": "paragraph"
    }}>Introduction</_Heading>
<p>{`During the project development, there is a chance that the deployed cloud infrastructure needs to change. New resources might be added, existing resources configured differently, and some may even need to be destroyed.`}</p>
<p>{`When doing more significant changes, it might be helpful to preview the deployment process that you’re about to execute. More specifically, you would certainly like to know if the deployment you’re about to execute destroys a mission-critical resource, e.g. a database or a file storage resource.`}</p>
<_Heading level={2} id={"the-preview-flag"} nextElement={{
      "type": "paragraph"
    }}>The Preview Flag</_Heading>
<p>{`In order to avoid performing unintended cloud infrastructure changes, you can use the preview flag upon executing the `}<_Link href="/docs/5.x/core-development-concepts/basics/project-deployment#the-deploy-command">{`deploy`}</_Link>{` command. Consider the following examples:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`yarn webiny deploy apps/api --env dev --preview
yarn webiny deploy apps/admin --env dev --preview
yarn webiny deploy apps/website --env dev --preview`}
</Editor>
<p>{`Executing these commands won’t perform any changes to your cloud infrastructure resources. They would just list all of the changes that would be applied, for example:`}</p>
<Image src={_Image1} alt={"Previewing Deploy Command"} mdxType="Image" />
<_Heading level={2} id={"debugging"} nextElement={{
      "type": "paragraph"
    }}>Debugging</_Heading>
<p>{`If you run into an error while running a deployment preview, to get additional information and logs about it, you can append the `}<inlineCode parentName="p">{`--debug`}</inlineCode>{` argument to the `}<inlineCode parentName="p">{`webiny deploy`}</inlineCode>{` command. For example:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`yarn webiny deploy apps/api --env dev --preview --debug`}
</Editor>
<p>{`This can significantly help in debugging underlying deployment (`}<_Link href="/docs/5.x/infrastructure/pulumi-iac/iac-with-pulumi">{`Pulumi`}</_Link>{`) errors, since without it, in some cases the returned error report doesn’t contain enough useful information. We’ve also seen cases in which the report would actually be misleading and even incorrect, making the debugging process much harder for the user.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;