/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/overview/applications/assets/webiny-file-manager.jpg'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "File Manager",
  "description": "A scaleable digital asset management application built on top of serverless infrastructure.",
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
  "children": [{
    "title": "Asset Organization",
    "slug": "asset-organization",
    "children": []
  }, {
    "title": "Scale",
    "slug": "scale",
    "children": []
  }, {
    "title": "Image Editor",
    "slug": "image-editor",
    "children": []
  }, {
    "title": "Image Delivery API",
    "slug": "image-delivery-api",
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




<Alert type="success" title="WHAT YOU'LL LEARN" mdxType="Alert">
<ul>
<li parentName="ul">{`File Manager features and use-cases`}</li>
</ul>
</Alert>
<Image src={_Image1} alt={"Webiny CMS - File Manager"} mdxType="Image" />
<p>{`File Manager is a powerful tool to manage all your digital assets, from documents to images. File Manager as an app is integrated across Webiny. Anywhere where a file input is needed, the File Manager app is what you use to upload and select files.`}</p>
<_Heading level={2} id={"features"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Features</_Heading>
<_Heading level={3} id={"asset-organization"} nextElement={{
      "type": "paragraph"
    }}>Asset Organization</_Heading>
<p>{`All assets can be organized in a multi-level folder structure and tagged with one or more tags. You can filter files by one tag, or multiple tags at once. There is also a search bar, for input-based search.`}</p>
<p>{`The file File Manager React component also has props you can use to limit the user’s selection. You can say “open File Manager, but only show images” and similarly. It provides a better UX to the user.`}</p>
<_Heading level={3} id={"scale"} nextElement={{
      "type": "paragraph"
    }}>Scale</_Heading>
<p>{`The search and filtering options are powered by Elasticsearch. All assets are stored inside an S3 bucket. This architecture allows your system to scale and easily handle large amounts of assets.`}</p>
<_Heading level={3} id={"image-editor"} nextElement={{
      "type": "paragraph"
    }}>Image Editor</_Heading>
<p>{`When it comes to images, there is a built-in image editor. Using the editor you can do basic manipulations like crop, flip, rotate and apply different filters.`}</p>
<_Heading level={3} id={"image-delivery-api"} nextElement={{
      "type": "paragraph"
    }}>Image Delivery API</_Heading>
<p>{`The image delivery API allows you to resize images by specifying the image dimension as part of the image path. The images are automatically cached on the CDN, and there is a DDoS protection behind the service.`}</p>
<p>{`Every image you upload to the File Manager is resized in `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/v5.22.0/packages/api-file-manager/src/handlers/transform/loaders/sanitizeImageTransformations.ts#L1"
      }}>{`several preset sizes`}</a>{`.`}<br parentName="p"></br>{`
`}{`When you request an image URL, you can add a query parameter `}<inlineCode parentName="p">{`width`}</inlineCode>{`, e.g. `}<inlineCode parentName="p">{`https:/cdn.com/files/image.png?width=640`}</inlineCode>{`, and you’ll get the image closest to that size. Having predefined sizes protects you from someone abusing your API by requesting absurd image sizes, but also saves your storage space by limiting the amount of different sizes that will be stored.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;