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
  "title": "Custom Providers",
  "description": "Learn how to add new React context providers in the Admin app.",
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
  "title": "Add a Context Provider",
  "slug": "add-a-context-provider",
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




<CanIUseThis since={"5.35.0"} mdxType="CanIUseThis" />
<WhatYouWillLearn mdxType="WhatYouWillLearn">
<ul>
<li parentName="ul">{`how to add new Admin app context providers`}</li>
</ul>
</WhatYouWillLearn>
<_Heading level={2} id={"add-a-context-provider"} nextElement={{
      "type": "paragraph"
    }}>Add a Context Provider</_Heading>
<p>{`To register a context provider, use the `}<inlineCode parentName="p">{`createProviderPlugin`}</inlineCode>{` utility.`}</p>
<Editor title="apps/admin/src/App.tsx" lang="diff-tsx" mdxType="Editor">
{`import React from "react";
+ import { Admin, createProviderPlugin } from "@webiny/app-serverless-cms";
import { Cognito } from "@webiny/app-admin-users-cognito";
import "./App.scss";

+ const MyProviderPlugin = createProviderPlugin(Component => {
+   return function MyProvider({ children }) {
+     return (
+       <MyContextProvider>
+         <Component>{children}</Component>
+       </MyContextProvider>
+     );
+   };
+ });

export const App = () => {
    return (
      <Admin>
        <Cognito />
+       <MyProviderPlugin />
      </Admin>
    );
};`}
</Editor>
<p>{`Providers can be used not only to register a global React context provider, but also to intercept the Admin app rendering and delay it until some condition is met.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;