/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import createNavigationMenu from "/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/5.x/page-builder/essentials/assets/navigation-menu/navigation-menu.mp4";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.79c9f1.json";

import _versions from "@/data/versions.ff7084.json";

const Layout = _Layout;
const pageData = {
  "title": "Create Navigation Menu",
  "description": "Learn how to create a navigation menu in Page Builder.",
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
  "title": "Step 1: Create Main Navigation Menu",
  "slug": "step-1-create-main-navigation-menu",
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
<li parentName="ul">{`how to create navigation menu`}</li>
</ul>
</Alert>
<p>{`In this tutorial, we will learn how to create a navigation menu in the Page Builder.`}</p>
<Video src={createNavigationMenu} controls={true} mdxType="Video" />
<_Heading level={2} id={"step-1-create-main-navigation-menu"} nextElement={{
      "type": "list",
      "ordered": true,
      "start": 1,
      "spread": true
    }}>Step 1: Create Main Navigation Menu</_Heading>
<ol>
<li parentName="ol">
<p parentName="li">{`From the `}<strong parentName="p">{`Side Menu`}</strong>{`, click `}<strong parentName="p">{`Page Builder`}</strong>{` > `}<strong parentName="p">{`PAGES`}</strong>{` > `}<strong parentName="p">{`Menus`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Menus`}</strong>{` screen opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`Main Menu`}</strong>{`.`}</p>
<p parentName="li">{`✔️ The `}<strong parentName="p">{`Main Menu`}</strong>{` screen opens.`}</p>
<p parentName="li"><strong parentName="p">{`Optional`}</strong>{`: To update the name of the main menu, update the text in the `}<strong parentName="p">{`name`}</strong>{` textbox.`}</p>
<p parentName="li"><strong parentName="p">{`Optional`}</strong>{`: To update the description about the main menu, update the text in the `}<strong parentName="p">{`description`}</strong>{` textbox.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`+ ADD MENU ITEM`}</strong>{`.`}</p>
<p parentName="li">{`✔️ A menu opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`Page`}</strong>{`.`}</p>
<p parentName="li">{`The `}<strong parentName="p">{`PAGE MENU ITEM`}</strong>{` form opens.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Page`}</strong>{` dropdown, select the title of page `}<em parentName="p">{`you want to include in the main navigation menu`}</em>{` (e.g. `}<strong parentName="p">{`The benefits of a Serverless CMS`}</strong>{`).`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`In the `}<strong parentName="p">{`Title`}</strong>{` textbox, type the title for the page `}<em parentName="p">{`you want to be displayed in the main navigation menu`}</em>{` (e.g. `}<strong parentName="p">{`Benefits`}</strong>{`).`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`SAVE MENU ITEM`}</strong>{`.`}</p>
<p parentName="li"><strong parentName="p">{`Optional`}</strong>{`: Repeat the steps 3 to 7 to add more page links to the menu.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Click `}<strong parentName="p">{`SAVE MENU`}</strong>{`.`}</p>
</li>
</ol>
<p>{`To view the menu, you can visit any published page of your website. The menu will be visible at the top of the page.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;