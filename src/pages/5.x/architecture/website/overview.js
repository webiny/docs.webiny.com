/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import websiteOverview from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/architecture/website/assets/overview/webiny_website_overview.png";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Overview",
  "description": "Learn about the necessary cloud infrastructure resources on which the Website project application relies on.",
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
  "title": "The Website Project Application",
  "slug": "the-website-project-application",
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
<li parentName="ul">{`what does the `}<strong parentName="li">{`Website`}</strong>{` project application represent`}</li>
<li parentName="ul">{`what are the common problems when serving a public website`}</li>
<li parentName="ul">{`briefly, how Webiny approaches these problems`}</li>
<li parentName="ul">{`the necessary cloud infrastructure resources on which the `}<strong parentName="li">{`Website`}</strong>{` project application relies on`}</li>
</ul>
</Alert>
<_Heading level={2} id={"the-website-project-application"} nextElement={{
      "type": "paragraph"
    }}>The Website Project Application</_Heading>
<p>{`The `}<strong parentName="p">{`Website`}</strong>{` project application represents your public website.`}</p>
<p>{`In terms of the code the application holds, essentially, we’re talking about a classic React application that renders pages created using the Page Builder application.`}</p>
<p>{`In terms of the necessary cloud infrastructure, things are not as simple as it’s the case with the `}<_Link href="/docs/5.x/architecture/admin/overview">{`Admin Area`}</_Link>{` project application. Basically, public websites do not work well if they are served as a classic React single-page-application (SPA) that’s relying on the client-side rendering approach.`}</p>
<p>{`This is because of the following two factors:`}</p>
<ol>
<li parentName="ol">{`UX is not good because every time a users open a webpage, they are presented with a loading screen.`}</li>
<li parentName="ol">{`SEO suffers significantly. Search engines and web crawlers are still having problems interpreting the dynamically generated HTML, and some are not supporting this at all.`}</li>
</ol>
<Alert type="info" mdxType="Alert">
<p>{`Learn more about different rendering approaches in `}<a parentName="p" {...{
          "href": "https://developers.google.com/web/updates/2019/02/rendering-on-the-web"
        }}>{`this article`}</a>{` published by Google.`}</p>
</Alert>
<p>{`Because of this, Webiny developed its own `}<strong parentName="p">{`Prerendering Service`}</strong>{`, which prerenders your website pages. In other words, when a page is published, it captures the complete HTML code, and relevant data for it in advance. And, when an actual website visitors visits one of your pages, the page is just served as a simple static HTML file, with the page data directly embedded in it. This approach resolves both of the issues mentioned above.`}</p>
<Alert type="success" mdxType="Alert">
<p>{`The explanation on prerendering of pages, presented above, is a very brief one. This is intentional, as this key topic is focused on the cloud infrastructure Webiny deploys and not on the prerendering itself. If you want to learn more about how the Page Builder application handles page rendering, visit the `}<_Link href="/docs/5.x/architecture/website/prerendering-pages">{`Prerendering Pages`}</_Link>{` key topic.`}</p>
</Alert>
<_Heading level={2} id={"diagram"} nextElement={{
      "type": "jsx"
    }}>Diagram</_Heading>
<Alert type="info" mdxType="Alert">
<p>{`For brevity, the diagram doesn’t include network-level cloud infrastructure resources, like region, VPC, availability zones, and so on. Check out the `}<_Link href="/docs/5.x/architecture/deployment-modes/introduction">{`Deployment Modes`}</_Link>{` section if you’re interested in that aspect of the deployed cloud infrastructure.`}</p>
</Alert>
<Alert type="info" mdxType="Alert">
<p>{`Note that the Amazon DynamoDB and Amazon OpenSearch databases are deployed as part of the `}<_Link href="/docs/5.x/architecture/core/overview">{`Core`}</_Link>{` project application. Also, the GraphQL Handler AWS Lambda function is deployed as part of the `}<_Link href="/docs/5.x/architecture/api/overview">{`API`}</_Link>{` project application`}</p>
<p>{`These are still included in the diagram, just so it’s more clear to the reader.`}</p>
</Alert>
<Image src={websiteOverview} title="Webiny Cloud Infrastructure - Website - Overview" shadow={false} mdxType="Image" />
<_Heading level={2} id={"description"} nextElement={{
      "type": "paragraph"
    }}>Description</_Heading>
<p>{`The diagram gives an overview of the complete cloud infrastructure that’s needed to host the `}<strong parentName="p">{`Website`}</strong>{` project application and, in combination with the `}<strong parentName="p">{`Core`}</strong>{` and `}<strong parentName="p">{`API`}</strong>{` project applications, that makes prerendering of pages possible.`}</p>
{`We have two Amazon CloudFront distributions `}
<diagram-letter>
{`A`}
</diagram-letter>
{` `}
<diagram-letter>
{`D`}
</diagram-letter>
{`, two Amazon S3 buckets `}
<diagram-letter>
{`B`}
</diagram-letter>
{` `}
<diagram-letter>
{`C`}
</diagram-letter>
{`, and the Webiny Prerendering Service `}
<diagram-letter>
{`E`}
</diagram-letter>
{` that consists of three AWS Lambda functions and an Amazon SQS. We also have the `}
<strong>{`Core`}</strong>
{` and `}
<strong>{`API`}</strong>
{` project applications, which are also involved in the whole process, which we cover in the upcoming `}
<_Link href="/docs/5.x/architecture/website/prerendering-pages">
{`Prerendering Pages`}
</_Link>
{` section.`}
<Alert type="info" mdxType="Alert">
<p>{`To learn more about the `}<strong parentName="p">{`Core`}</strong>{` and `}<strong parentName="p">{`API`}</strong>{` project applications’ cloud infrastructure, check out the `}<_Link href="/docs/5.x/architecture/core/overview">{`Core`}</_Link>{` and `}<_Link href="/docs/5.x/architecture/api/overview">{`API`}</_Link>{` sections.`}</p>
</Alert>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;