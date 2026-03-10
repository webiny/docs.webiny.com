/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/overview/features/assets/serverless-infrastructure/webiny-serverless-infrastructure.png'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Serverless infrastructure",
  "description": "Benetits of serverless infrastructure.",
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
const tableOfContents = [];
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




<Alert type="success" title="WHAT YOU'LL LEARN" mdxType="Alert">
<ul>
<li parentName="ul">{`Benefits of serverless infrastructure`}</li>
</ul>
</Alert>
<p>{`Serverless services are the infrastructure on top of which Webiny CMS runs. Serverless brings many advantages over more traditional infrastructure like virtual machines or containers:`}</p>
<ol>
<li parentName="ol">{`Up to 80% cheaper cloud infrastructure costs when compared to using VMs`}</li>
<li parentName="ol">{`Up to 60% savings on devops efforts to manage and maintain the solution`}</li>
<li parentName="ol">{`Built on top of fault-tolerant services`}</li>
<li parentName="ol">{`Highly scalable architecture`}</li>
</ol>
<Image src={_Image1} alt={"Webiny - Serverless vs Traditional infrastructure"} mdxType="Image" />
<p>{`Think about the amount of effort required to create a fault-tolerant architecture that can scale in and out in milliseconds and costs a fraction of the price to run and maintain. With serverless, you get all of that at the point of your fingertips, and you don’t need to do anything.`}</p>
<p>{`You might ask yourself, why isn’t everyone using serverless?
The thing is, existing apps that are built for traditional infrastructures can’t run on serverless. Serverless is a breaking change for those applications. Therefore only applications that are architected specifically for serverless and built from the ground up to run in such an environment can take this advantage.`}</p>
<p>{`At Webiny, we believe that serverless is the future of web development. So we wanted to get there early and enable everyone a quick and easy way to experience how great serverless can be. It’s a future-proof infrastructure that grows with the needs of your business and eliminates many of the maintenance operations that the traditional infrastructure requires.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;