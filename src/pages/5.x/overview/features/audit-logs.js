/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import alLead from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/overview/features/assets/al.png";
import alTrackingChanges from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/overview/features/assets/al-overview.png";
import alFilter from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/overview/features/assets/al-filter.gif";
import alDirectLink from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/overview/features/assets/al-direct-link.png";
import alPayload from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/overview/features/assets/al-payload.png";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Audit Logs",
  "description": "A simple solution to monitor user activity across the Webiny platform for security and accountability purposes.",
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
  "title": "Key Functionalities",
  "slug": "key-functionalities",
  "children": []
}, {
  "title": "Benefits",
  "slug": "benefits",
  "children": []
}, {
  "title": "Get Started",
  "slug": "get-started",
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








<Alert type="success" title="What You’ll Learn" mdxType="Alert">
<ul>
<li parentName="ul">{`Audit Logs features and benefits`}</li>
</ul>
</Alert>
<Image src={alLead} title="Audit Logs" mdxType="Image" />
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`For our Enterprise customers, Webiny built the Audit Logs application, a powerful monitoring solution designed to track changes across the entire Webiny application suite. `}</p>
<p>{`Audit Logs keep a detailed record of all read, write, and delete operations, providing organizations with valuable insights to monitor, investigate, and resolve potential issues. From detecting security incidents to boosting user accountability, this application is key for maintaining a secure and compliant environment.`}</p>
<_Heading level={2} id={"key-functionalities"} nextElement={{
      "type": "list",
      "ordered": true,
      "start": 1,
      "spread": false
    }}>Key Functionalities</_Heading>
<ol>
<li parentName="ol"><strong parentName="li">{`Tracking Changes:`}</strong>{`
Audit Logs capture changes made across various Webiny applications, including the Advanced Publishing Workflow, File Manager, Form Builder, Headless CMS, i18n, Mailer, Page Builder, and Security. This comprehensive coverage ensures that all critical activities are logged and available for review.`}</li>
</ol>
<Image src={alTrackingChanges} title="Audit Logs" mdxType="Image" />
<ol {...{
      "start": 2
    }}>
<li parentName="ol"><strong parentName="li">{`Filtering:`}</strong>{`
To streamline the review process, Webiny offers robust filtering capabilities within Audit Logs. Users can easily find relevant records by applying specific filters, minimizing the time and effort required for analysis.`}</li>
</ol>
<Image src={alFilter} title="Filtering" mdxType="Image" />
<ol {...{
      "start": 3
    }}>
<li parentName="ol"><strong parentName="li">{`Direct Link to the Record Changed:`}</strong>{`
Audit Logs provide users with direct links to modified records, facilitating quick access to relevant information. This feature enhances efficiency and enables swift action, ensuring timely response to any identified issues.`}</li>
</ol>
<Image src={alDirectLink} title="Direct Link to Record" mdxType="Image" />
<ol {...{
      "start": 4
    }}>
<li parentName="ol"><strong parentName="li">{`View the Payload:`}</strong>{`
Users can view the full payload for each logged action within Audit Logs, gaining comprehensive insight into the details of each operation. This visibility enables thorough analysis and facilitates informed decision-making.`}</li>
</ol>
<Image src={alPayload} title="View the Payload" mdxType="Image" />
<_Heading level={2} id={"benefits"} nextElement={{
      "type": "paragraph"
    }}>Benefits</_Heading>
<p>{`The introduction of Audit Logs marks a significant step forward in enhancing enterprise security and accountability within the Webiny ecosystem. By providing visibility into CMS activities, supporting compliance with industry regulations, and empowering users to track and analyze critical changes, Audit Logs become an essential component of any organization’s security infrastructure.`}</p>
<_Heading level={2} id={"get-started"} nextElement={{
      "type": "paragraph"
    }}>Get Started</_Heading>
<p>{`If you are one of our Enterprise customers, reach out to our team to get started. We welcome your feedback and suggestions on how we can further enhance this application.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;