/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import pageRevisions from "/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/5.x/page-builder/essentials/assets/page-revisions/page-revisions.mp4";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.79c9f1.json";

import _versions from "@/data/versions.ff7084.json";

const Layout = _Layout;
const pageData = {
  "title": "Page Revisions",
  "description": "Learn how to publish a specific version of a page, and create a new version of a page by deriving from a previous revision.",
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
const tableOfContents = [{
  "title": "Step 1: Create a New Page",
  "slug": "step-1-create-a-new-page",
  "children": []
}, {
  "title": "Step 2: Make Multiple Revisions of a Page",
  "slug": "step-2-make-multiple-revisions-of-a-page",
  "children": []
}, {
  "title": "Step 3: Publish a Specific Revision of a Page",
  "slug": "step-3-publish-a-specific-revision-of-a-page",
  "children": []
}, {
  "title": "Step 4: Create a New Page Version From a Previous Revision",
  "slug": "step-4-create-a-new-page-version-from-a-previous-revision",
  "children": []
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
const Video = makeShortcode("Video");
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
<li parentName="ul">{`how to create multiple revisions of a page and publish a specific one`}</li>
<li parentName="ul">{`how to create a new page version from a previous revision`}</li>
</ul>
</Alert>
<p>{`In Webiny, each modification made in a page (in the Page Builder) that is published is stored as a separate revision. In this tutorial, we will learn how to create multiple revisions of a page and publish a specific revision. We will also learn how to create a new page version from a previous revision.`}</p>
<p>{`We will do this in 4 steps:`}</p>
<ul>
<li parentName="ul">{`Step 1: Create a new page`}</li>
<li parentName="ul">{`Step 2: Make multiple revisions of a page`}</li>
<li parentName="ul">{`Step 3: Publish a specific revision of a page`}</li>
<li parentName="ul">{`Step 4: Create a new page version from a previous revision`}</li>
</ul>
<Video src={pageRevisions} controls={true} mdxType="Video" />
<_Heading level={2} id={"step-1-create-a-new-page"} nextElement={{
      "type": "paragraph"
    }}>Step 1: Create a New Page</_Heading>
<p>{`If you are not familiar with how to create a page, please follow the `}<_Link href="/docs/5.x/user-guides/page-builder/essentials/create-page">{`Create Page`}</_Link>{` tutorial.`}</p>
<ol>
<li parentName="ol">
<p parentName="li">{`From the `}<strong parentName="p">{`Side Menu`}</strong>{`, click `}<strong parentName="p">{`Page Builder`}</strong>{` > `}<strong parentName="p">{`PAGES`}</strong>{` > `}<strong parentName="p">{`Pages`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Pages`}</strong>{` screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Add a new page in the `}<strong parentName="p">{`Static`}</strong>{` category.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Update the title of the page to `}<strong parentName="p">{`Page Revisions`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Add an empty block to the page.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Add a heading to the block and update its text to `}<strong parentName="p">{`Page Revisions`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Update the margin-bottom of the heading to `}<strong parentName="p">{`60px`}</strong>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Add a paragraph below the heading and update its text to:`}</p>
<p parentName="li"><strong parentName="p">{`In Webiny, multiple revisions of a page can be made.`}</strong></p>
</li>
<li parentName="ol">
<p parentName="li">{`Publish the page.`}</p>
</li>
</ol>
<_Heading level={2} id={"step-2-make-multiple-revisions-of-a-page"} nextElement={{
      "type": "list",
      "ordered": true,
      "start": 1,
      "spread": true
    }}>Step 2: Make Multiple Revisions of a Page</_Heading>
<ol>
<li parentName="ol">
<p parentName="li">{`On the `}<strong parentName="p">{`Pages`}</strong>{` screen, click the `}<strong parentName="p">{`Page Revisions`}</strong>{` list item in the list of pages.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`PAGE PREVIEW`}</strong>{` tab opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`PAGE PREVIEW`}</strong>{` tab, click the `}<strong parentName="p">{`EDIT`}</strong>{` icon (✏️).`}</p>
<p parentName="li">{`✔️ The page editor screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Update the paragraph text to:`}</p>
<p parentName="li"><strong parentName="p">{`In Webiny, multiple revisions of a page can be made.`}</strong></p>
<p parentName="li"><strong parentName="p">{`A previous revision of a page can also be published.`}</strong></p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`PUBLISH CHANGES`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Pages`}</strong>{` screen opens with the message “Your page was published successfully!“.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Now, following Steps 2 to 4, again update the paragraph text to:`}</p>
<p parentName="li"><strong parentName="p">{`In Webiny, multiple revisions of a page can be made.`}</strong></p>
<p parentName="li"><strong parentName="p">{`A previous revision of a page can also be published.`}</strong></p>
<p parentName="li"><strong parentName="p">{`And, a new version of a page can be made from a previous version.`}</strong></p>
</li>
<li parentName="ol">
<p parentName="li">{`Publish the changes.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Pages`}</strong>{` screen opens with the message “Your page was published successfully!“.`}</p>
</li>
</ol>
<_Heading level={2} id={"step-3-publish-a-specific-revision-of-a-page"} nextElement={{
      "type": "list",
      "ordered": true,
      "start": 1,
      "spread": true
    }}>Step 3: Publish a Specific Revision of a Page</_Heading>
<ol>
<li parentName="ol">
<p parentName="li">{`On the `}<strong parentName="p">{`Pages`}</strong>{` screen, click the `}<strong parentName="p">{`Page Revisions`}</strong>{` list item in the list of pages.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`PAGE PREVIEW`}</strong>{` tab opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click the `}<strong parentName="p">{`REVISIONS`}</strong>{` tab.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`PAGE PREVIEW`}</strong>{` tab opens.`}</p>
<p parentName="li"><strong parentName="p">{`Note`}</strong>{`: On the `}<strong parentName="p">{`REVISIONS`}</strong>{` tab, all the page’s revisions and their status are visible. A version can have one of the following status:`}</p>
<ul parentName="li">
<li parentName="ul"><strong parentName="li">{`Draft`}</strong>{`: A version of page that is not published yet but can be edited and published.`}</li>
<li parentName="ul"><strong parentName="li">{`Published`}</strong>{`: A version of page that is published and cannot be edited.`}</li>
<li parentName="ul"><strong parentName="li">{`Locked`}</strong>{`: A version of page that has been published at least once and now cannot be edited but published.`}</li>
</ul>
<p parentName="li">{`A publsihed version is locked and remains locked after getting unpublished.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`To publish the `}<strong parentName="p">{`Page Revisions #2`}</strong>{` revision, click the `}<strong parentName="p">{`kebab menu`}</strong>{` icon ( ⁝ ) on it.`}</p>
<p parentName="li">{`✔️ Menu opens with `}<strong parentName="p">{`New from current`}</strong>{`, `}<strong parentName="p">{`Publish`}</strong>{`, `}<strong parentName="p">{`Preview`}</strong>{`, and `}<strong parentName="p">{`Delete Revision`}</strong>{` options.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`Publish`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The message “Successfully published revision #2!” displays.`}</p>
</li>
</ol>
<_Heading level={2} id={"step-4-create-a-new-page-version-from-a-previous-revision"} nextElement={{
      "type": "list",
      "ordered": true,
      "start": 1,
      "spread": true
    }}>Step 4: Create a New Page Version From a Previous Revision</_Heading>
<ol>
<li parentName="ol">
<p parentName="li">{`Open the `}<strong parentName="p">{`REVISIONS`}</strong>{` tab of the `}<strong parentName="p">{`Page Revisions`}</strong>{` page.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`To create a new page version from the previous `}<strong parentName="p">{`Page Revisions #1`}</strong>{` revision, click the `}<strong parentName="p">{`kebab menu`}</strong>{` icon ( ⁝ ) on it.`}</p>
<p parentName="li">{`✔️ Menu opens with `}<strong parentName="p">{`New from current`}</strong>{`, `}<strong parentName="p">{`Publish`}</strong>{`, `}<strong parentName="p">{`Preview`}</strong>{`, and `}<strong parentName="p">{`Delete Revision`}</strong>{` options.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`New from current`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The page editor screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Update the paragraph text from `}<strong parentName="p">{`In Webiny, multiple revisions of a page can be made.`}</strong>{` to:`}</p>
<p parentName="li"><strong parentName="p">{`In Webiny, multiple revisions of a page can be made. A previous revision of a page can also be published. And, a new version of a page can be made from a previous revision.`}</strong></p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`PUBLISH CHANGES`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Pages`}</strong>{` screen opens with the message “Your page was published successfully!“.`}</p>
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