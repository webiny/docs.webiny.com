/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/architecture/api/assets/file-upload/fm-settings.png'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import fmUpload from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/architecture/api/assets/webiny_api_fm_upload.png";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "File Upload",
  "description": "Learn about the necessary cloud infrastructure resources on which the API project application relies on to upload files.",
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
    "title": "Who Can Upload Files?",
    "slug": "who-can-upload-files",
    "children": []
  }, {
    "title": "Is There a Way to Define a Maximum File Upload Size?",
    "slug": "is-there-a-way-to-define-a-maximum-file-upload-size",
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
<li parentName="ul">{`how file uploads are handled by the deployed cloud infrastructure and application code`}</li>
</ul>
</Alert>
<_Heading level={2} id={"diagram"} nextElement={{
      "type": "jsx"
    }}>Diagram</_Heading>
<Alert type="info" mdxType="Alert">
<p>{`For brevity, the diagram doesn’t include network-level cloud infrastructure resources, like region, VPC, availability zones, and so on. Check out the `}<_Link href="/docs/5.x/architecture/deployment-modes/introduction">{`Deployment Modes`}</_Link>{` section if you’re interested in that aspect of the deployed cloud infrastructure.`}</p>
</Alert>
<Alert type="info" mdxType="Alert">
<p>{`Note that the stateful resources like Amazon S3, Amazon Cognito, Amazon DynamoDB and Amazon OpenSearch are deployed as part of the `}<_Link href="/docs/5.x/architecture/core/overview">{`Core`}</_Link>{` project application. These are still included in the diagram, just so it’s more clear to the reader.`}</p>
</Alert>
<Image src={fmUpload} title="Webiny Cloud Infrastructure - API - File Upload" shadow={false} mdxType="Image" />
<_Heading level={2} id={"description"} nextElement={{
      "type": "paragraph"
    }}>Description</_Heading>
<p>{`The diagram shows what happens every time a client tries to upload a binary file.`}</p>
<p>{`To provide file upload functionality, the File Manager application relies on a method called `}<strong parentName="p">{`pre-signed POST payload`}</strong>{`. Once certain conditions are met, the method enables uploading files directly to an S3 bucket, which is significantly more efficient than having the file travel through multiple cloud infrastructure resources.`}</p>
<Alert type="info" title="Learn more" mdxType="Alert">
<p>{`If you want to learn more, feel free to check out `}<a parentName="p" {...{
          "href": "https://www.webiny.com/blog/upload-files-to-aws-s3-using-pre-signed-post-data-and-a-lambda-function-7a9fb06d56c1"
        }}>{`a blog post`}</a>{` we wrote on this exact subject and which explains the process in detail.`}</p>
</Alert>
<p>{`The flow consists of the following three steps:`}</p>
<ol>
<li parentName="ol">
{`The client issues a GraphQL HTTP request which instructs the GraphQL Handler `}
<diagram-letter>
{`C`}
</diagram-letter>
{` to generate the necessary pre-signed POST data.`}
</li>
<li parentName="ol">
{`Once the client receives the pre-signed POST data, in a new POST HTTP request, the data, and the actual file are uploaded to the S3 bucket `}
<diagram-letter>
{`G1`}
</diagram-letter>
{`.`}
</li>
<li parentName="ol">
{`Finally, another GraphQL request is issued, which instructs the GraphQL Handler `}
<diagram-letter>
{`C`}
</diagram-letter>
{` to store the file meta data. The data is stored both in Amazon DynamoDB `}
<diagram-letter>
{`E`}
</diagram-letter>
{` and Amazon OpenSearch Service `}
<diagram-letter>
{`F`}
</diagram-letter>
{`.`}
</li>
</ol>
<_Heading level={2} id={"faq"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>FAQ</_Heading>
<_Heading level={3} id={"who-can-upload-files"} nextElement={{
      "type": "paragraph"
    }}>Who Can Upload Files?</_Heading>
{`Only users with proper permissions can perform file uploads. Both authentication and authorization are performed in steps one and three, on the GraphQL Handler `}
<diagram-letter>
{`c`}
</diagram-letter>
{`.`}
<_Heading level={3} id={"is-there-a-way-to-define-a-maximum-file-upload-size"} nextElement={{
      "type": "paragraph"
    }}>Is There a Way to Define a Maximum File Upload Size?</_Heading>
<p>{`Yes, by going into the File Manager’s general settings section, and manually entering the appropriate values.`}</p>
<Image src={_Image1} alt={"File Manager Settings"} mdxType="Image" />
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;