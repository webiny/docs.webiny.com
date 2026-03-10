/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/overview/applications/assets/webiny-page-builder.jpg'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Page Builder",
  "description": "No-code page builder. Build pages in minutes using a drag&drop interface.",
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
    "title": "Editor",
    "slug": "editor",
    "children": []
  }, {
    "title": "Build Static Pages",
    "slug": "build-static-pages",
    "children": []
  }, {
    "title": "Build Dynamic Pages (Headless CMS + Page Builder)",
    "slug": "build-dynamic-pages-headless-cms-page-builder",
    "children": []
  }, {
    "title": "Prerendering and Delivery",
    "slug": "prerendering-and-delivery",
    "children": []
  }, {
    "title": "Theme Support",
    "slug": "theme-support",
    "children": []
  }, {
    "title": "Customizable",
    "slug": "customizable",
    "children": []
  }]
}, {
  "title": "When to Consider Using the Page Builder",
  "slug": "when-to-consider-using-the-page-builder",
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
<li parentName="ul">{`Features and capabilities of Page Builder app`}</li>
</ul>
</Alert>
<Image src={_Image1} alt={"Webiny CMS - Page Builder"} mdxType="Image" />
<p>{`Page Builder is a powerful no-code editor for creating static and (coming soon) dynamic pages. The pages are made of elements that are React components and are also fully mobile responsive. Check out the main features below for more details.`}</p>
<_Heading level={2} id={"features"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Features</_Heading>
<_Heading level={3} id={"editor"} nextElement={{
      "type": "paragraph"
    }}>Editor</_Heading>
<p>{`Page Builder features a powerful no-code drag&drop editor. Using the editor you can build page layouts that are mobile responsive, interactive, and fully SEO optimized. Unlike some other editors which work with static HTML elements, Webiny’s Page Builder works with React components. You can easily create your own elements via plugins. Those elements can contain business logic, be interactive, do API calls, and pretty much anything else that you can code in React.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`Checkout this tutorial on how to create `}<_Link href="/docs/5.x/page-builder/extending/create-a-page-element">{`custom Page Builder elements`}</_Link>{`.`}</p>
</Alert>
<_Heading level={3} id={"build-static-pages"} nextElement={{
      "type": "paragraph"
    }}>Build Static Pages</_Heading>
<p>{`With the Page Builder, you can create both static pages as well as dynamic pages. Static pages are your typical landing pages, dashboards, and similar. Basically, any page that lives under a fixed URL. We call them “static” because of that fixed URL. The static pages can still contain dynamic React components.`}</p>
<_Heading level={3} id={"build-dynamic-pages-headless-cms-page-builder"} nextElement={{
      "type": "jsx"
    }}>Build Dynamic Pages (Headless CMS + Page Builder)</_Heading>
<Alert type="info" mdxType="Alert">
<p>{`This feature is still work in progress, it’s not yet available to be used.`}</p>
</Alert>
<p>{`When we talk about dynamic pages, those are pages with a dynamic URL. For example `}<inlineCode parentName="p">{`/blog/{slug}`}</inlineCode>{` . Page Builder replaces a tool like Gatsby, Hugo, Jekyll, or other static site generators. Using the same no-code editor you can build layouts and connect them to Webiny’s Headless CMS. Each time you publish a new record in the CMS, a Page Builder dynamic page is used to render this page on your site.`}</p>
<_Heading level={3} id={"prerendering-and-delivery"} nextElement={{
      "type": "paragraph"
    }}>Prerendering and Delivery</_Heading>
<p>{`All pages static and dynamic are prerendered and positioned as static assets to S3 from where they are delivered to users. Both the HTML as well as all the GraphQL queries are cached and saved as those static assets.`}</p>
<p>{`This type of architecture provides you with a scalable solution that can handle large traffic. It also has incremental builds natively supported, so no need for rebuilding and redeploying all pages when a new page is created.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`Checkout the Page Builder page delivery performance in the `}<_Link href="/docs/5.x/performance-and-load-benchmark/introduction">{`benchmark section`}</_Link>{`.`}</p>
</Alert>
<_Heading level={3} id={"theme-support"} nextElement={{
      "type": "paragraph"
    }}>Theme Support</_Heading>
<p>{`The Page Builder is shipped with a basic default theme that is used to render the pages you build with the editor. This theme is a starting point that you can take and modify to fit your desired brand style and visual requirements. We intentionally don’t ship several themes with Page Builder, it’s up to the developers to create those.`}</p>
<_Heading level={3} id={"customizable"} nextElement={{
      "type": "paragraph"
    }}>Customizable</_Heading>
<p>{`All elements of the Page Builder are fully customizable. You can hide built-in elements and categories, introduce new ones, adapt the default theme used to render the pages, and much more.`}</p>
<_Heading level={2} id={"when-to-consider-using-the-page-builder"} nextElement={{
      "type": "list",
      "ordered": true,
      "start": 1,
      "spread": false
    }}>When to Consider Using the Page Builder</_Heading>
<ol>
<li parentName="ol">{`When you have a project where the end customer is not as technical but wants the ability to build pages and layouts without any code.`}</li>
<li parentName="ol">{`When you have a need for a CMS like Squarespace, Wix, or Webflow, but you want it as part of a larger self-hosted solution that you can modify and customize.`}</li>
<li parentName="ol">{`When you want a more scalable alternative to existing static site generators.`}</li>
<li parentName="ol">{`When you want to save time in creating page layouts.`}</li>
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