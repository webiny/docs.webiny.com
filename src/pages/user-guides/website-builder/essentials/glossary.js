/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/6.0.x/website-builder/essentials/assets/glossary/status.png'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.9991ed.json";

import _versions from "@/data/versions.ff7084.json";

const Layout = _Layout;
const pageData = {
  "title": "Website Builder Glossary",
  "description": "Learn about the Website Builder terminologies.",
  "type": "user-guides",
  "showPageHeader": true,
  "fullWidth": false,
  "version": "6.0.x"
};
const docsearch = {
  "type": "user-guides",
  "weight": 100,
  "versions": ["latest", "6.0.x"]
};
const navigation = _navigation;
const versions = _versions;
const tableOfContents = [{
  "title": "Grid Element",
  "slug": "grid-element",
  "children": []
}, {
  "title": "Page Element",
  "slug": "page-element",
  "children": []
}, {
  "title": "Page Revision",
  "slug": "page-revision",
  "children": []
}, {
  "title": "Page Status",
  "slug": "page-status",
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
<li parentName="ul">{`Website Builder terminologies, and their meanings.`}</li>
</ul>
</Alert>
<_Heading level={2} id={"grid-element"} nextElement={{
      "type": "paragraph"
    }}>Grid Element</_Heading>
<p>{`The Grid element is the fundamental building block of a Page. When you create a page, the first thing to add is a grid block. It serves as the parent container for all the Page elements. `}</p>
<_Heading level={2} id={"page-element"} nextElement={{
      "type": "paragraph"
    }}>Page Element</_Heading>
<p>{`Website Builder application comes with a few ready-made page elements like Image, Rich Text, Fragment, etc. These are the building blocks of a Page.`}</p>
<_Heading level={2} id={"page-revision"} nextElement={{
      "type": "paragraph"
    }}>Page Revision</_Heading>
<p>{`Page Revisions are a snapshot in time of the page. A new Revision is created every time we have a Publish event, meaning if you are editing Draft of Revision 1, it will stay Revision 1 until you Publish the Page. Once the entry was published and you try editing it again, the system will automatically create Revision 2 for you so that Revision 1 will remain intact and published and Revision 2 will be the record you edit.`}</p>
<_Heading level={2} id={"page-status"} nextElement={{
      "type": "paragraph"
    }}>Page Status</_Heading>
<p>{`In Website Builder by default, we have three statuses: Draft, Published, and Unpublished. The statuses are self-explanatory, but keep in mind that in the Pages view, the Status that you see is the status of the latest revision.`}</p>
<Image src={_Image1} alt={"Page statuses"} mdxType="Image" />
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;