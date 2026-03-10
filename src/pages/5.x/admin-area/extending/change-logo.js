/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import customLogoSame from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/admin-area/extending/assets/custom-logo-same.png";
import customLogo from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/admin-area/extending/assets/custom-logo.png";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Change Logo",
  "description": "Learn how to replace the default logo with your own.",
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
  "title": "Overview",
  "slug": "overview",
  "children": []
}, {
  "title": "Getting Started",
  "slug": "getting-started",
  "children": []
}, {
  "title": "Replace the Logo",
  "slug": "replace-the-logo",
  "children": []
}, {
  "title": "Using Different Logos",
  "slug": "using-different-logos",
  "children": []
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
const ExtensionsGettingStarted = makeShortcode("ExtensionsGettingStarted");
const Editor = makeShortcode("Editor");
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





<Alert type="info" title="Can I Use This?" mdxType="Alert">
<p>{`In order to follow this guide, you must use Webiny version `}<strong parentName="p">{`5.40.0`}</strong>{` or greater.`}</p>
</Alert>
<Alert type="success" title="What you'll learn" mdxType="Alert">
<ul>
<li parentName="ul">{`how to replace the default Webiny logo with your own React component`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`In this article, we cover how to replace the default Webiny logo that is shown in the Admin app’s header bar and the navigation drawer, with our own logo.`}</p>
<_Heading level={2} id={"getting-started"} nextElement={{
      "type": "jsx"
    }}>Getting Started</_Heading>
<ExtensionsGettingStarted type={"admin"} name={"adminLogo"} dependencies={"@webiny/app-serverless-cms"} fullExampleLink={"https://github.com/webiny/webiny-examples/tree/master/admin-logo"} fullExampleDownloadLink={"admin-logo"} mdxType="ExtensionsGettingStarted" />
<_Heading level={2} id={"replace-the-logo"} nextElement={{
      "type": "paragraph"
    }}>Replace the Logo</_Heading>
<p>{`To replace the logo, in the `}<inlineCode parentName="p">{`extensions/adminLogo/src/index.tsx`}</inlineCode>{` file, we place the following code:`}</p>
<Editor title="extensions/adminLogo/src/index.tsx" lang="tsx" mdxType="Editor">
{`import React from "react";
import { AddLogo } from "@webiny/app-serverless-cms";

import logoPng from "./logo.png";

export const Extension = () => {
  return (
    <>
      <AddLogo logo={<img src={logoPng} height={40} width={40} />} />
    </>
  );
};`}
</Editor>
<p>{`As we can see, to replace the logo, we’ve utilized the `}<inlineCode parentName="p">{`AddLogo`}</inlineCode>{` React component, which is provided by the `}<inlineCode parentName="p">{`@webiny/app-serverless-cms`}</inlineCode>{` package. The `}<inlineCode parentName="p">{`AddLogo`}</inlineCode>{` component accepts a `}<inlineCode parentName="p">{`logo`}</inlineCode>{` prop, which is a React component that will be rendered in place of the default Webiny logo.`}</p>
<p>{`For this example, we’ve used the `}<inlineCode parentName="p">{`logo.png`}</inlineCode>{` file, which is located in the same directory as the `}<inlineCode parentName="p">{`index.tsx`}</inlineCode>{` file. We can replace it with your own logo.`}</p>
<p>{`With this code in place, in the Admin app, the default Webiny logo will be replaced with the logo you’ve provided.`}</p>
<Image src={customLogoSame} alt="Different Logos In Header Bar and Navigation Drawer" mdxType="Image" />
<_Heading level={2} id={"using-different-logos"} nextElement={{
      "type": "paragraph"
    }}>Using Different Logos</_Heading>
<p>{`In some cases, you might want to provide different logos for the header bar and the navigation drawer, for example:`}</p>
<Image src={customLogo} alt="Different Logos In Header Bar and Navigation Drawer" mdxType="Image" />
<p>{`To achieve this, we can use the `}<inlineCode parentName="p">{`useTags`}</inlineCode>{` hook, which is also provided by the `}<inlineCode parentName="p">{`@webiny/app-serverless-cms`}</inlineCode>{` package:`}</p>
<Editor title="extensions/adminLogo/src/index.tsx" lang="tsx" mdxType="Editor">
{`import React from "react";
import { AddLogo, useTags } from "@webiny/app-serverless-cms";

// Import your logo image
import logoPng from "./logo.png";
import logoNavigationPng from "./logo-navigation.png";

const MyLogo = () => {
  // Fetch tags from context.
  const { location } = useTags();

  // "location" is a tag with a value of "navigation", if your
  // logo is currently being rendered inside the navigation drawer.
  if (location === "navigation") {
    return <img src={logoNavigationPng} height={50} width={100} />;
  }

  return <img src={logoPng} height={40} width={40} />;
};

export const Extension = () => (
  <>
    <AddLogo logo={<MyLogo />} />
  </>
);`}
</Editor>
<p>{`As we can see, this time, we’ve created a new `}<inlineCode parentName="p">{`MyLogo`}</inlineCode>{` component, which uses the `}<inlineCode parentName="p">{`useTags`}</inlineCode>{` hook to determine whether the logo is being rendered in the header bar or the navigation drawer. If the logo is being rendered in the navigation drawer, we return the `}<inlineCode parentName="p">{`logoNavigationPng`}</inlineCode>{` image; otherwise, we return the `}<inlineCode parentName="p">{`logoPng`}</inlineCode>{` image.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;