/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { CanIUseThis } from "@/components/CanIUseThis";
import { WhatYouWillLearn } from "@/components/WhatYouWillLearn";
import customDashboard from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/admin-area/extending/assets/custom-dashboard.png";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Custom Dashboard",
  "description": "Learn how to replace the default Dashboard, and implement a custom one.",
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
  "title": "Replacing the Default Dashboard",
  "slug": "replacing-the-default-dashboard",
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





<CanIUseThis since={"5.40.0"} mdxType="CanIUseThis" />
<WhatYouWillLearn mdxType="WhatYouWillLearn">
<ul>
<li parentName="ul">{`how to replace the default Webiny dashboard`}</li>
</ul>
</WhatYouWillLearn>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`In this article, we show how we can replace the default dashboard in the Webiny Admin app. This is useful when we want to create a custom dashboard that better suits our needs.`}</p>
<_Heading level={2} id={"getting-started"} nextElement={{
      "type": "jsx"
    }}>Getting Started</_Heading>
<ExtensionsGettingStarted type={"admin"} name={"adminDashboard"} dependencies={"@webiny/app-serverless-cms"} fullExampleLink={"https://github.com/webiny/webiny-examples/tree/master/custom-dashboard"} mdxType="ExtensionsGettingStarted" />
<_Heading level={2} id={"replacing-the-default-dashboard"} nextElement={{
      "type": "paragraph"
    }}>Replacing the Default Dashboard</_Heading>
<p>{`To replace the dashboard, in the `}<inlineCode parentName="p">{`extensions/adminDashboard/src/index.tsx`}</inlineCode>{` file, we place the following code:`}</p>
<Editor title="extensions/adminDashboard/src/index.tsx" lang="tsx" mdxType="Editor">
{`import React from "react";
import { Dashboard, useSecurity } from "@webiny/app-serverless-cms";

// We create a new decorator called MyDashboard
const MyDashboard = Dashboard.createDecorator(() => {
  return function MyDashboard() {
    const { identity } = useSecurity();

    return (
      <div style={{ padding: 50, textAlign: "center" }}>
        <h3>Hi, {identity?.displayName}!</h3>
      </div>
    );
  };
});

export const Extension = () => (
  <>
    <MyDashboard />
  </>
);`}
</Editor>
<p>{`As we can see, we first define the `}<inlineCode parentName="p">{`MyDashboard`}</inlineCode>{` React component, which is actually the decorated version of the original `}<inlineCode parentName="p">{`Dashboard`}</inlineCode>{` component, imported from the `}<inlineCode parentName="p">{`@webiny/app-serverless-cms`}</inlineCode>{` package.`}</p>
<p>{`Note that, when we say decorated, we basically mean that the component has been wrapped with another component, which ultimately affects the functionality of the wrapped component, or, the decoratee.`}</p>
<p>{`In our case, we are replacing the default `}<inlineCode parentName="p">{`Dashboard`}</inlineCode>{` component that renders the default dashboard, with our own, which just renders a simple greeting message.`}</p>
<p>{`To retrieve the currently logged in Admin user, we’ve also used the `}<inlineCode parentName="p">{`useSecurity`}</inlineCode>{` React hook. As we can see, the hook lets us easily retrieve the currently logged-in identity, whose name we’re displaying on our custom dashboard.`}</p>
<Image src={customDashboard} alt="Custom Dashboard" mdxType="Image" />
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;