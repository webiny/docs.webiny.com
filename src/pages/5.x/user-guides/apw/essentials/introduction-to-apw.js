/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import YouTube from "@/components/YouTube";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.79c9f1.json";

import _versions from "@/data/versions.ff7084.json";

const Layout = _Layout;
const pageData = {
  "title": "Advanced Publishing Workflow",
  "description": "A workflow driven publishing process.",
  "type": "user-guides",
  "showPageHeader": true,
  "fullWidth": false,
  "version": "5.x"
};
const docsearch = {
  "type": "user-guides",
  "weight": 100,
  "versions": ["5.x"]
};
const navigation = _navigation;
const versions = _versions;
const tableOfContents = [];

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
<li parentName="ul">{`Advanced Publishing Workflow feature overview`}</li>
</ul>
</Alert>
<YouTube id="NNRghN1yY_g" mdxType="YouTube" />
<p>{`The Advanced Publishing Workflow (APW) is an application that runs on top of the Page Builder and the Headless CMS. By default, those applications come with a simplified publishing workflow. For example, users can either publish content or set it in a `}<inlineCode parentName="p">{`review requested`}</inlineCode>{` state. The actual review is done outside the system, and there’s no collaboration platform that’s provided to manage this activity.
This is where the APW comes in. Within the APW, you are able to:`}</p>
<ol>
<li parentName="ol">
<p parentName="li"><strong parentName="p">{`Define Publishing Workflows`}</strong></p>
<ul parentName="li">
<li parentName="ul">{`Easily configure and customize publishing workflows tailored to your specific content creation and review requirements.`}</li>
<li parentName="ul">{`Define sequential steps and approval stages to ensure a structured and efficient review process.`}</li>
</ul>
</li>
<li parentName="ol">
<p parentName="li"><strong parentName="p">{`Overview of Pending Reviews`}</strong></p>
<ul parentName="li">
<li parentName="ul">{`Access a centralized dashboard providing a comprehensive overview of all pending reviews requiring your input.`}</li>
<li parentName="ul">{`Streamline your workflow by quickly identifying and prioritizing tasks that need your attention.`}</li>
</ul>
</li>
<li parentName="ol">
<p parentName="li"><strong parentName="p">{`Daily Digest of Pending Activities`}</strong></p>
<ul parentName="li">
<li parentName="ul">{`Receive a daily summary of pending activities, ensuring you stay informed about ongoing reviews without the need for constant monitoring.`}</li>
<li parentName="ul">{`Stay organized and proactive with a concise summary of tasks requiring your action.`}</li>
</ul>
</li>
<li parentName="ol">
<p parentName="li"><strong parentName="p">{`Collaborate with Multiple Peers`}</strong></p>
<ul parentName="li">
<li parentName="ul">{`Foster collaboration by involving multiple peers at different organizational levels in a structured peer review process.`}</li>
<li parentName="ul">{`Leverage the platform to facilitate communication and coordination among team members during the review and approval stages.`}</li>
</ul>
</li>
<li parentName="ol">
<p parentName="li"><strong parentName="p">{`Scheduled Publishing and Unpublishing`}</strong></p>
<ul parentName="li">
<li parentName="ul">{`Plan and organize content releases with the ability to schedule page publishing and unpublishing activities.`}</li>
<li parentName="ul">{`Ensure timely publication of content while maintaining control over the visibility and availability of your pages.`}</li>
</ul>
</li>
</ol>
<p>{`These benefits collectively contribute to a more streamlined and effective content creation and review process, enhancing collaboration, organization, and overall efficiency within your Webiny application.`}</p>
<p>{`You can have multiple publishing workflows, where each workflow has different steps, members, and rules when it applies. You can define workflows that apply to:`}</p>
<p><strong parentName="p">{`Page Builder:`}</strong></p>
<ul>
<li parentName="ul">{`All pages`}</li>
<li parentName="ul">{`Pages inside specific categories`}</li>
<li parentName="ul">{`One or more individual pages`}</li>
</ul>
<p><strong parentName="p">{`Headless CMS:`}</strong></p>
<ul>
<li parentName="ul">{`All entries`}</li>
<li parentName="ul">{`Entries inside a particular group`}</li>
<li parentName="ul">{`Specific entries`}</li>
</ul>
<p>{`In practice, you can say have a 2-step workflow that applies every time someone wants to publish a new blog post article. Those steps might be a peer review from a copywriter and a peer review from a marketing person. Then you can have another workflow that has 4-steps, and it only applies to when someone wants to change the homepage. In that case, you might want to get a peer review from someone in the legal department, marketing, sales, the CEO themself.`}</p>
<p>{`To each workflow step, you assign users that can provide a signoff and define steps as blocking or non-blocking.`}</p>
<p>{`The actual peer review is done by reviewers requesting one or more changes. All changes need to be resolved before a reviewer can provide a signoff for that step.`}</p>
<p>{`APW is a powerful utility that brings quality control and structured workflows. It ensures the content an organization publishes is of top quality and free of mistakes. Most of all, it streamlines the communication between multiple members involved in this process.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;