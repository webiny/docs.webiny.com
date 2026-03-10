/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import websiteVisit from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/architecture/website/assets/serving-pages/webiny_website_visit.png";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Serving Pages",
  "description": "Learn how the prerendered pages are statically served to actual website visitors.",
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
  "title": "Diagram",
  "slug": "diagram",
  "children": []
}, {
  "title": "Description",
  "slug": "description",
  "children": []
}, {
  "title": "FAQ",
  "slug": "faq",
  "children": [{
    "title": "Are There Any Amazon CloudFront Caching Rules in Place?",
    "slug": "are-there-any-amazon-cloud-front-caching-rules-in-place",
    "children": []
  }, {
    "title": "What Is the static Folder Anyways?",
    "slug": "what-is-the-static-folder-anyways",
    "children": []
  }]
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
<li parentName="ul">{`how the previously prerendered pages are statically served to actual website visitors`}</li>
</ul>
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
<Image src={websiteVisit} title="Webiny Cloud Infrastructure - Website - Serving Pages" shadow={false} mdxType="Image" />
<_Heading level={2} id={"description"} nextElement={{
      "type": "paragraph"
    }}>Description</_Heading>
<p>{`The diagram shows how pages, prerendered as part of the `}<strong parentName="p">{`Prerendering Pages`}</strong>{` flow, are served to actual website visitors.`}</p>
{`It’s important to point out that, although the initial HTML and page metadata are always returned from the upper Amazon S3 bucket `}
<diagram-letter>
{`B`}
</diagram-letter>
{`, all of the static assets (CSS, JS, images, …) are still returned from the lower one `}
<diagram-letter>
{`C`}
</diagram-letter>
{`, to which the React application was uploaded during the deployment of the `}
<strong>{`Website`}</strong>
{` application.`}
{`This way, the static assets don’t have to be uploaded twice (to both Amazon S3 buckets `}
<diagram-letter>
{`B`}
</diagram-letter>
{` `}
<diagram-letter>
{`C`}
</diagram-letter>
{`), making the deployment process a bit faster and easier to maintain.`}
<Alert type="info" mdxType="Alert">
<p>{`Learn more about the prerendering flow in the `}<_Link href="/docs/5.x/architecture/website/prerendering-pages">{`Prerendering Pages`}</_Link>{` section.`}</p>
</Alert>
<p>{`The flow consists of the following four steps:`}</p>
<ol>
<li parentName="ol">{`Users visit a particular URL which leads to your website, with a web browser of their choice.`}</li>
<li parentName="ol">
{`The HTTP request, issued by the web browser, reaches the Amazon CloudFront `}
<diagram-letter>
{`A`}
</diagram-letter>
{`, which forwards it to the Amazon S3 bucket `}
<diagram-letter>
{`B`}
</diagram-letter>
{`. This is where the prerendered content was previously stored.`}
</li>
<li parentName="ol">
{`The page HTML, located in the S3 bucket `}
<diagram-letter>
{`B`}
</diagram-letter>
{`, is returned to the Amazon CloudFront `}
<diagram-letter>
{`A`}
</diagram-letter>
{`, which caches it first, and then returns it back to the user’s browser. Note that if the page for given URL wasn’t found, a default `}
<strong parentName="li">{`not found`}</strong>
{` page is returned instead.`}
</li>
<li parentName="ol">
{`User’s browser receives the HTML and starts to fetch the linked static assets (JS, CSS, images, …). As mentioned in the description section, these assets are always located on the `}
<inlineCode parentName="li">{`/static/*`}</inlineCode>
{` path, and the HTTP requests for these are always redirected to the lower Amazon S3 bucket `}
<diagram-letter>
{`C`}
</diagram-letter>
{`, on the Amazon CloudFront `}
<diagram-letter>
{`A`}
</diagram-letter>
{`.`}
</li>
</ol>
<_Heading level={2} id={"faq"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>FAQ</_Heading>
<_Heading level={3} id={"are-there-any-amazon-cloud-front-caching-rules-in-place"} nextElement={{
      "type": "paragraph"
    }}>Are There Any Amazon CloudFront Caching Rules in Place?</_Heading>
<p>{`By default, all of the files that are served via the `}<inlineCode parentName="p">{`/static/*`}</inlineCode>{` path are cached for 30 days. The rest is cached for 30 seconds. If need be, this can be additionally adjusted via code.`}</p>
<_Heading level={3} id={"what-is-the-static-folder-anyways"} nextElement={{
      "type": "paragraph"
    }}>What Is the<code>static</code>Folder Anyways?</_Heading>
<p>{`The Website React application is actually a `}<a parentName="p" {...{
        "href": "https://create-react-app.dev/"
      }}>{`create-react-app`}</a>{` application, which, upon creating a production build, places all of the static files (JS, CSS, images, …) into this folder.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;