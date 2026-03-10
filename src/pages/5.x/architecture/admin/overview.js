/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import overview from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/architecture/admin/assets/overview/webiny_admin_overview.png";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Overview",
  "description": "Learn about the necessary cloud infrastructure resources on which the Admin Area project application relies on.",
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
  "title": "The Admin Area Project Application",
  "slug": "the-admin-area-project-application",
  "children": []
}, {
  "title": "Diagram",
  "slug": "diagram",
  "children": []
}, {
  "title": "Description",
  "slug": "description",
  "children": []
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
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
<li parentName="ul">{`the necessary cloud infrastructure resources on which the `}<strong parentName="li">{`Admin Area`}</strong>{` project application relies on`}</li>
<li parentName="ul">{`what does the `}<strong parentName="li">{`Admin Area`}</strong>{` project application represent`}</li>
</ul>
</Alert>
<_Heading level={2} id={"the-admin-area-project-application"} nextElement={{
      "type": "paragraph"
    }}>The Admin Area Project Application</_Heading>
<p>{`The `}<strong parentName="p">{`Admin Area`}</strong>{` project application represents, as the name itself suggests, your administration area, which is a simple React single-page-application (SPA).`}</p>
<p>{`With only two cloud infrastructure resources, the Amazon CloudFront and Amazon S3, hosting single page applications is simple, and most importantly, cost-effective.`}</p>
<_Heading level={2} id={"diagram"} nextElement={{
      "type": "jsx"
    }}>Diagram</_Heading>
<Alert type="info" mdxType="Alert">
<p>{`For brevity, the diagram doesn’t include network-level cloud infrastructure resources, like region, VPC, availability zones, and so on. Check out the `}<_Link href="/docs/5.x/architecture/deployment-modes/introduction">{`Deployment Modes`}</_Link>{` section if you’re interested in that aspect of the deployed cloud infrastructure.`}</p>
</Alert>
<Image src={overview} title="Webiny Cloud Infrastructure - Admin Area - Overview" shadow={false} mdxType="Image" />
<_Heading level={2} id={"description"} nextElement={{
      "type": "paragraph"
    }}>Description</_Heading>
<p>{`The diagram gives an overview of the complete cloud infrastructure that’s needed to host the Admin Area application.`}</p>
{`As we can see, it consists of two resources - Amazon CloudFront `}
<diagram-letter>
{`A`}
</diagram-letter>
{` and Amazon S3 bucket `}
<diagram-letter>
{`B`}
</diagram-letter>
{`.`}
<p>{`In the upcoming `}<_Link href="/docs/5.x/architecture/admin/serving-application-files">{`Serving Application Files`}</_Link>{` section, we examine how the Admin Area application is served to actual users.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;