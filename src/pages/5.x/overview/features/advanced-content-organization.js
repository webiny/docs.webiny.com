/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image2 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/overview/features/assets/flp.png'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/overview/features/assets/aco.png'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import YouTube from "@/components/YouTube";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Advanced Content Organization",
  "description": "Learn how to organize your content in Webiny using folders.",
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
  "title": "About",
  "slug": "about",
  "children": []
}, {
  "title": "How to Use",
  "slug": "how-to-use",
  "children": []
}, {
  "title": "Search",
  "slug": "search",
  "children": []
}, {
  "title": "Bulk Actions",
  "slug": "bulk-actions",
  "children": []
}, {
  "title": "Security & Control",
  "slug": "security-and-control",
  "children": []
}, {
  "title": "Extensibility",
  "slug": "extensibility",
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
<li parentName="ul">{`How to organize content inside folders and sub-folders`}</li>
<li parentName="ul">{`How to search for content inside folders`}</li>
</ul>
</Alert>
<Image src={_Image1} alt={"Advanced Content Organization"} mdxType="Image" />
<_Heading level={2} id={"about"} nextElement={{
      "type": "paragraph"
    }}>About</_Heading>
<p>{`In this article, we’ll cover a feature called Advanced Content Organization (“ACO”). This feature allows you to organize your content inside folders and sub-folders. It also allows you to search for content inside those same folders.`}</p>
<p>{`The feature is available inside the `}<strong parentName="p">{`Page Builder`}</strong>{`, `}<strong parentName="p">{`Headless CMS`}</strong>{` and `}<strong parentName="p">{`File Manager`}</strong>{` applications.`}</p>
<_Heading level={2} id={"how-to-use"} nextElement={{
      "type": "paragraph"
    }}>How to Use</_Heading>
<p>{`Whenever you access any of the above-mentioned applications you’ll see an interface with folders on the left and a list of items and folders on the right. Inside that interface you can create folder and subfolders and then place your content, or assets in case of File Manager, inside those folders.`}</p>
<p>{`The goal is to help you organize your content in a way that makes sense to you and your editors. It’s also important to note that the organization of content inside ACO doesn’t necessarily mean you need to have the content organized the same way on your website. You can use the ACO to organize content around your publishing workflows and editorial teams, while on the website you can organize content around the user experience.`}</p>
<p>{`Here is a deeper dive into ACO inside our Page Builder application, but most of the things apply to the other applications as well.`}</p>
<YouTube id={"A1b7-D0rugE"} mdxType="YouTube" />
<_Heading level={2} id={"search"} nextElement={{
      "type": "paragraph"
    }}>Search</_Heading>
<p>{`ACO helps also when it comes to searching for your content. You’ll see a search bar on the top of the interface. When you search for something, the search will be performed only inside the folder you’re currently in. If you want to search for content inside all folders, you can click on the `}<strong parentName="p">{`Root`}</strong>{` folder button in the folder tree.`}</p>
<p>{`This way you can easily scope your search to a particular folder or subfolder and get better results faster.`}</p>
<_Heading level={2} id={"bulk-actions"} nextElement={{
      "type": "paragraph"
    }}>Bulk Actions</_Heading>
<p>{`ACO comes with several additional features, one of those features is the bulk action. If in the ACO interface, you select multiple items, you’ll see a new menu appear on the top of the interface. This menu allows you to perform bulk actions on the selected items. Actions like build publish, unpublish, delete and move to a folder are supported out of the box. In addition to that, there is also an API you can use to create custom bulk actions.`}</p>
<_Heading level={2} id={"security-and-control"} nextElement={{
      "type": "paragraph"
    }}>Security &amp; Control</_Heading>
<p>{`What would be the point of having folders if you couldn’t control who can access them? That’s why we’ve added a new permission called `}<strong parentName="p">{`Folder Level Permissions`}</strong>{`. This permission allows you to control who can access a particular folder. You have the option to allow access to a folder to all users, only to specific users or only to users belonging to a specific team.`}</p>
<Image src={_Image2} alt={"Advanced Content Organization - Folder level permissions"} mdxType="Image" />
<_Heading level={2} id={"extensibility"} nextElement={{
      "type": "paragraph"
    }}>Extensibility</_Heading>
<p>{`The ACO is at the core of our content management applications, it’s also extensible. You can create custom bulk actions, add custom basic actions, and remove any of the current actions that are there by default. You can also create custom folder actions and show or hide the columns.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;