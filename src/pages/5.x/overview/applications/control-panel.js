/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/overview/applications/assets/webiny-control-panel.png'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Control Panel",
  "description": "Ensure site reliability best practices through Webiny Control Panel.",
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
  "title": "Features",
  "slug": "features",
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




<Alert type="success" title="WHAT YOU'LL LEARN" mdxType="Alert">
<ul>
<li parentName="ul">{`Webiny Control Panel overview`}</li>
</ul>
</Alert>
<Image src={_Image1} alt={"Webiny Control Panel"} mdxType="Image" />
<p>{`At Webiny, we’re reinventing what “self-hosted” means. By giving you the ability to keep your data in your control, we’re very aware we’re giving you also more work when compared to a typical SaaS solution. That work includes maintaining and scaling your underlying infrastructure where Webiny is hosted. It also includes handling things like backups and point-in-time recovery, monitoring, and so much more.`}</p>
<p>{`Traditionally SaaS has a lower total cost of ownership (TCO) when compared to self-hosted solutions, but we believe with Webiny, that’s not the case.`}</p>
<p>{`Webiny, being architected on top of serverless services, significantly reduces the infrastructure and devops costs, but we’re taking it further with Webiny Control Panel (WCP)`}</p>
<p>{`WCP is a SaaS cloud offering that sits on top of your self-hosted Webiny instance. It introduces a set of utilities to enforce operational excellence and improve the site reliability while additionally reducing the effort needed from devops teams. With WCP, we believe the TCO of Webiny is on-par, or even lower, than competitive SaaS solutions.`}</p>
<p>{`WCP is a paid-for feature that’s will be available as a SaaS product through the webiny.com website.`}</p>
<_Heading level={2} id={"features"} nextElement={{
      "type": "paragraph"
    }}>Features</_Heading>
<p>{`This is a high-level overview of some of the notable features that will be available in WCP.`}</p>
<ol>
<li parentName="ol"><strong parentName="li">{`Application monitoring`}</strong>
<ul parentName="li">
<li parentName="ul">{`Monitor your Webiny instance API performance, error rates, and overall API consumption.`}</li>
</ul>
</li>
<li parentName="ol"><strong parentName="li">{`Cloud Cost Analysis`}</strong>
<ul parentName="li">
<li parentName="ul">{`Understand the consumption and the cost of the underlying AWS resources your Webiny instance is consuming.`}</li>
</ul>
</li>
<li parentName="ol"><strong parentName="li">{`Staged Deployments`}</strong>
<ul parentName="li">
<li parentName="ul">{`Make code changes to your Webiny instance and roll them out safely to a fraction of users. Rollback instantly as needed.`}</li>
</ul>
</li>
<li parentName="ol"><strong parentName="li">{`Point-in-time data recovery`}</strong>
<ul parentName="li">
<li parentName="ul">{`Up to 30 days old database snapshots you can restore to as needed.`}</li>
<li parentName="ul">{`Older backups you can store for more extended periods for compliance reasons.`}</li>
</ul>
</li>
<li parentName="ol"><strong parentName="li">{`Alerting`}</strong>
<ul parentName="li">
<li parentName="ul">{`Get a notification on different events in your Webiny instance, be that API performance drop, a significant increase in cloud consumption, or a CI/CD deployment error.`}</li>
</ul>
</li>
</ol>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;