/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { CanIUseThis } from "@/components/CanIUseThis";
import { WhatYouWillLearn } from "@/components/WhatYouWillLearn";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Custom Routes",
  "description": "Learn how to add new routes in the Admin app.",
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
  "title": "Add a Route",
  "slug": "add-a-route",
  "children": []
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
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




<CanIUseThis since={"5.29.0"} mdxType="CanIUseThis" />
<WhatYouWillLearn mdxType="WhatYouWillLearn">
<ul>
<li parentName="ul">{`how to add new Admin app routes`}</li>
</ul>
</WhatYouWillLearn>
<_Heading level={2} id={"add-a-route"} nextElement={{
      "type": "paragraph"
    }}>Add a Route</_Heading>
<p>{`The simplest route registration looks like this:`}</p>
<Editor title="apps/admin/src/App.tsx" lang="diff-tsx" mdxType="Editor">
{`import React from "react";
+import { Admin, Plugins, AddRoute, Layout } from "@webiny/app-serverless-cms";
import { Cognito } from "@webiny/app-admin-users-cognito";
import "./App.scss";

export const App = () => {
    return (
      <Admin>
        <Cognito />
+       <Plugins>
+         <AddRoute path={"/new-route"}>
+           <Layout>
+             <div>Hello from new route!</div>
+           </Layout>
+         </AddRoute>
+       </Plugins>
      </Admin>
    );
};`}
</Editor>
<p><inlineCode parentName="p">{`Plugins`}</inlineCode>{` element is necessary to make sure your route is registered after all the other application routes.`}</p>
<p><inlineCode parentName="p">{`Layout`}</inlineCode>{` component is the default Admin app layout, which contains header, navigation, etc. This allows you to control whether you want to use the Admin app layout or not. For example, a login screen doesn’t have a layout, and if you want to build such routes, you can skip adding the Layout container.`}</p>
<p><inlineCode parentName="p">{`AddRoute`}</inlineCode>{` component simply registers a route internally, but it doesn’t immediately render it. Rendering of routes is handled by Webiny, so think of this as a configuration, and Webiny will decide when the route will be rendered.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;