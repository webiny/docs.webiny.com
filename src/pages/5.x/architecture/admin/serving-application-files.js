/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import servingFiles from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/architecture/admin/assets/serving-application-files/webiny_admin_page_visit.png";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Serving Application Files",
  "description": "Learn how are React application files served via the deployed cloud infrastructure.",
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
<li parentName="ul">{`how are React application files served via the deployed cloud infrastructure`}</li>
</ul>
</Alert>
<_Heading level={2} id={"diagram"} nextElement={{
      "type": "jsx"
    }}>Diagram</_Heading>
<Alert type="info" mdxType="Alert">
<p>{`For brevity, the diagram doesn’t include network-level cloud infrastructure resources, like region, VPC, availability zones, and so on. Check out the `}<_Link href="/docs/5.x/architecture/deployment-modes/introduction">{`Deployment Modes`}</_Link>{` section if you’re interested in that aspect of the deployed cloud infrastructure.`}</p>
</Alert>
<Image src={servingFiles} title="Webiny Cloud Infrastructure - Admin Area - Serving Application Files" shadow={false} mdxType="Image" />
<_Heading level={2} id={"description"} nextElement={{
      "type": "paragraph"
    }}>Description</_Heading>
<p>{`The diagram shows how HTTP requests travel through the deployed cloud infrastructure and how files are returned back to the client. This happens repeatedly as the user opens and navigates through the `}<strong parentName="p">{`Admin Area`}</strong>{` React application. Note that, when talking about the API HTTP requests that the `}<strong parentName="p">{`Admin Area`}</strong>{` React application issues, those are still issued to the Amazon CloudFront distribution that’s deployed as part of the `}<_Link href="/docs/5.x/architecture/api/overview">{`API`}</_Link>{` project application.`}</p>
<p>{`The flow consists of the following three steps:`}</p>
<ol>
<li parentName="ol">
{`The HTTP request first reaches the Amazon CloudFront `}
<diagram-letter>
{`A`}
</diagram-letter>
{`.`}
</li>
<li parentName="ol">
{`The request is forwarded to the Amazon S3 bucket `}
<diagram-letter>
{`B`}
</diagram-letter>
{`.`}
</li>
<li parentName="ol">
{`Amazon CloudFront `}
<diagram-letter>
{`A`}
</diagram-letter>
{` receives the file from Amazon S3 `}
<diagram-letter>
{`B`}
</diagram-letter>
{`, caches it accordingly, and returns it back to the client.`}
</li>
</ol>
<_Heading level={2} id={"faq"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>FAQ</_Heading>
<_Heading level={3} id={"are-there-any-amazon-cloud-front-caching-rules-in-place"} nextElement={{
      "type": "paragraph"
    }}>Are There Any Amazon CloudFront Caching Rules in Place?</_Heading>
<p>{`All of the files that are served from the `}<inlineCode parentName="p">{`/static/*`}</inlineCode>{` path are cached for 30 days. The rest is cached for five minutes. If need be, this can be additionally adjusted.`}</p>
<_Heading level={3} id={"what-is-the-static-folder-anyways"} nextElement={{
      "type": "paragraph"
    }}>What Is the<code>static</code>Folder Anyways?</_Heading>
<p>{`The Admin Area React application is actually a `}<a parentName="p" {...{
        "href": "https://create-react-app.dev/"
      }}>{`create-react-app`}</a>{` application, which, upon making a production build, places all of the static files (JS, CSS, images, …) into this folder.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;