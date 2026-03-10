/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import trainingCourseYouTube from "/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/5.x/page-builder/essentials/assets/training-course/pb-training-course-youtube.png";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.79c9f1.json";

import _versions from "@/data/versions.ff7084.json";

const Layout = _Layout;
const pageData = {
  "title": "Page Builder - Training Course",
  "description": "A video course covering the main functionality of Webiny Page Builder.",
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
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
const ExternalLink = makeShortcode("ExternalLink");
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



<p>{`We created a `}<a parentName="p" {...{
        "href": "https://www.youtube.com/playlist?list=PL9HlKSQaEuXQdyCQDH_w7VQQcZbc67cPU"
      }}>{`video training course`}</a>{` for the Webiny Page Builder. This course covers the main functionality of Page Builder and in this course, you will learn how to leverage the powerful Page Builder features to create stunning web pages.`}</p>
<ExternalLink href={`https://www.youtube.com/playlist?list=PL9HlKSQaEuXQdyCQDH_w7VQQcZbc67cPU`} icon={false} mdxType="ExternalLink">
  <Image src={trainingCourseYouTube} title="Page Builder Training Course" canEnlarge={false} mdxType="Image" />
</ExternalLink>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;