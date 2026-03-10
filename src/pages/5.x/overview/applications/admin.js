/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/overview/applications/assets/webiny-admin.jpg'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Admin",
  "description": "Overview of Webiny Admin app, an extensible admin interface application.",
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
  "title": "Admin App Setup",
  "slug": "admin-app-setup",
  "children": []
}, {
  "title": "FAQ",
  "slug": "faq",
  "children": [{
    "title": "Can I Disable Individual Apps?",
    "slug": "can-i-disable-individual-apps",
    "children": []
  }, {
    "title": "What About the Old Plugins?",
    "slug": "what-about-the-old-plugins",
    "children": []
  }]
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
const Image = makeShortcode("Image");
const Editor = makeShortcode("Editor");
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
<li parentName="ul">{`Webiny Admin app overview`}</li>
</ul>
</Alert>
<Image src={_Image1} alt={"Webiny CMS - Admin"} mdxType="Image" />
<p>{`Webiny CMS is a unified product that consists of several apps. To access them, you use the Admin app. The Admin app not only contains ready-made apps, but also provides a framework for developers to extend their functionality, and develop custom ones.`}</p>
<p>{`The Admin app consists of numerous plugins you use to do different things, like changing the logo, adding or removing items from the main menu, adding new functionality to the existing UI.
Admin app also features a scaffold template to quickly create a fully functional CRUD (Create, Read, Update, Delete) app. Explore the Admin app in the left menu to find out more.`}</p>
<_Heading level={2} id={"admin-app-setup"} nextElement={{
      "type": "paragraph"
    }}>Admin App Setup</_Heading>
<p>{`If you inspect the files that make up the Admin app in your Webiny project (located in `}<inlineCode parentName="p">{`apps/admin`}</inlineCode>{` folder within your Webiny project), you’ll notice that it only has this small code snippet:`}</p>
<Editor title="apps/admin/src/App.tsx" lang="tsx" mdxType="Editor">
{`import React from "react";
import { Admin } from "@webiny/app-serverless-cms";
import { Cognito } from "@webiny/app-admin-users-cognito";
import "./App.scss";

export const App = () => {
  return (
    <Admin>
      <Cognito />
    </Admin>
  );
};`}
</Editor>
<p>{`The `}<inlineCode parentName="p">{`Admin`}</inlineCode>{` component provides the full setup of the Webiny CMS Admin app, and the `}<inlineCode parentName="p">{`@webiny/app-serverless-cms`}</inlineCode>{` package also exports various utilities and components you can use to extend the CMS.`}</p>
<p>{`In the code example above, you can see we’re also using a `}<inlineCode parentName="p">{`Cognito`}</inlineCode>{` component, which extends the CMS and provides AWS Cognito authentication capabilities, admin user management, etc. This is how you add new functionality to the CMS: you simply mount a React component, which internally uses other React components to add menus, routes, user menu items, etc. More on this in the next article.`}</p>
<_Heading level={2} id={"faq"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>FAQ</_Heading>
<_Heading level={3} id={"can-i-disable-individual-apps"} nextElement={{
      "type": "paragraph"
    }}>Can I Disable Individual Apps?</_Heading>
<p>{`Webiny CMS is a unified product. Think of it as a single product which solves a set of problems. Individual apps are often interconnected and rely on each other, so you can’t just disable one app and expect the whole thing to continue working. If you need to hide individual menu items, so they are not crowding your UI, get in touch with us on our `}<a parentName="p" {...{
        "href": "https://www.webiny.com/slack"
      }}>{`Community Slack`}</a>{`, and we’ll help you out.`}</p>
<_Heading level={3} id={"what-about-the-old-plugins"} nextElement={{
      "type": "paragraph"
    }}>What About the Old Plugins?</_Heading>
<p>{`If you’re familiar with the previous versions of Webiny, you’ll notice that we’re moving away from the global plugins registry to this new, React based, API. Old plugins still work, but over time, we’ll be migrating more and more of our apps to this new API (components). This is not only more natural in the context of React, but it also unlocks various features and allows us to use the full power of React when building our plugins.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;