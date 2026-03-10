/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image4 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/enterprise/assets/theme-manager/tenant-pb-settings.png'
import _Image3 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/enterprise/assets/theme-manager/tenant-themes.png'
import _Image2 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/enterprise/assets/theme-manager/import-theme-manager-api.png'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/enterprise/assets/theme-manager/tenant-themes.png'
import { Heading as _Heading } from '@/components/Heading'
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Setup Theme Manager",
  "description": "Learn how to configure a Theme Manager in your Webiny project",
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
  "title": "Add New Dependencies",
  "slug": "add-new-dependencies",
  "children": []
}, {
  "title": "Import Theme Manager in the GraphQL API",
  "slug": "import-theme-manager-in-the-graph-ql-api",
  "children": []
}, {
  "title": "Import and Configure Theme Manager in the Admin App",
  "slug": "import-and-configure-theme-manager-in-the-admin-app",
  "children": []
}, {
  "title": "Import and Configure Theme Manager in the Website App",
  "slug": "import-and-configure-theme-manager-in-the-website-app",
  "children": []
}, {
  "title": "Adding More Themes",
  "slug": "adding-more-themes",
  "children": []
}, {
  "title": "Assigning Themes to Tenants",
  "slug": "assigning-themes-to-tenants",
  "children": []
}, {
  "title": "Activating a Theme Within the Page Builder",
  "slug": "activating-a-theme-within-the-page-builder",
  "children": []
}, {
  "title": "Conclusion",
  "slug": "conclusion",
  "children": []
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
const CanIUseThis = makeShortcode("CanIUseThis");
const WhatYouWillLearn = makeShortcode("WhatYouWillLearn");
const Image = makeShortcode("Image");
const Editor = makeShortcode("Editor");
const Alert = makeShortcode("Alert");
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






<CanIUseThis business since={"5.x"} mdxType="CanIUseThis" />
<WhatYouWillLearn mdxType="WhatYouWillLearn">
<ul>
<li parentName="ul">{`how to enable theme management in the existing Webiny project`}</li>
<li parentName="ul">{`how to assign themes to individual tenants`}</li>
</ul>
</WhatYouWillLearn>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`Theme Manager module makes it possible to assign website themes to individual tenants. Root tenant has access to all themes that are registered in the Admin app, and gets to decide which of those themes will be available to the sub-tenant.`}</p>
<Image src={_Image1} alt={"Assign Themes to an Individual Tenant"} mdxType="Image" />
<_Heading level={2} id={"add-new-dependencies"} nextElement={{
      "type": "paragraph"
    }}>Add New Dependencies</_Heading>
<p>{`As a first step, we add a couple of new packages to the project.`}</p>
<p>{`Add Theme Manager module dependency to the GraphQL API dependencies:`}</p>
<Editor title="" lang="shell" mdxType="Editor">
{`yarn workspace api-graphql add @webiny/api-theme-manager`}
</Editor>
<p>{`Add Theme Manager module dependency to the Admin app dependencies:`}</p>
<Editor title="" lang="shell" mdxType="Editor">
{`yarn workspace admin add @webiny/app-theme-manager`}
</Editor>
<p>{`Add Theme Manager module dependency to the Website app dependencies:`}</p>
<Editor title="" lang="shell" mdxType="Editor">
{`yarn workspace website add @webiny/app-theme-manager`}
</Editor>
<_Heading level={2} id={"import-theme-manager-in-the-graph-ql-api"} nextElement={{
      "type": "paragraph"
    }}>Import Theme Manager in the GraphQL API</_Heading>
<p>{`Open `}<inlineCode parentName="p">{`apps/api/graphql/src/index.ts`}</inlineCode>{`, and import the Theme Manager plugin:`}</p>
<Editor title="" lang="ts" mdxType="Editor">
{`import themeManager from "@webiny/api-theme-manager";`}
</Editor>
<p>{`Then, add the plugin to the Lambda handler, towards the end of the plugins list. This plugin is extending the Page Builder app, so it has to be registered `}<em parentName="p">{`after`}</em>{` the Page Builder. See an example in the image below:`}</p>
<Image src={_Image2} alt={"Enable Theme Manager Plugin in the GraphQL API."} mdxType="Image" />
<p>{`Since we’ve made changes to the `}<strong parentName="p">{`API`}</strong>{` project application (to Webiny’s GraphQL API), we need to deploy them. To do that, run the following command:`}</p>
<Editor title="" lang="shell" mdxType="Editor">
{`yarn webiny deploy api --env dev`}
</Editor>
<_Heading level={2} id={"import-and-configure-theme-manager-in-the-admin-app"} nextElement={{
      "type": "paragraph"
    }}>Import and Configure Theme Manager in the Admin App</_Heading>
<p>{`Now we need to enable the Theme Manager module in the Admin app. In your `}<inlineCode parentName="p">{`apps/admin/src/App.tsx`}</inlineCode>{`, add the following:`}</p>
<Editor title="apps/admin/src/App.tsx" lang="diff-tsx" mdxType="Editor">
{`import React from "react";
import { Admin } from "@webiny/app-serverless-cms";
import { Cognito } from "@webiny/app-admin-users-cognito";
+ import { ThemeManager } from "@webiny/app-theme-manager";
import "./App.scss";

+ const themes = [{
+   name: "default",
+   label: "Default Theme",
+   load: () => import(/* webpackChunkName: "theme" */ "theme").then(m => m.default)
+ }];

export const App = () => {
    return (
      <Admin>
        <Cognito />
+       <ThemeManager themes={themes} />
      </Admin>
    );
};`}
</Editor>
<p>{`What’s happening here is: we import the `}<inlineCode parentName="p">{`ThemeManager`}</inlineCode>{` component, and we pass it an array of theme objects. As you can see from the code, themes are lazy-loaded, using `}<a parentName="p" {...{
        "href": "https://webpack.js.org/guides/code-splitting/#dynamic-imports"
      }}>{`dynamic imports`}</a>{`. This will create separate chunks for every theme, so only the theme that is actually being used will be loaded in the browser.`}</p>
<p>{`The `}<inlineCode parentName="p">{`name`}</inlineCode>{` property will be used by Webiny, and will be stored to the database when you assign a certain theme to a tenant, and in the Page Builder settings. The `}<inlineCode parentName="p">{`label`}</inlineCode>{` property will be used in the Admin app UI, as a human-friendly theme descriptor.`}</p>
<_Heading level={2} id={"import-and-configure-theme-manager-in-the-website-app"} nextElement={{
      "type": "paragraph"
    }}>Import and Configure Theme Manager in the Website App</_Heading>
<p>{`Now we need to enable the Theme Loader module in the Website app. In your `}<inlineCode parentName="p">{`apps/website/src/App.tsx`}</inlineCode>{`, add the following:`}</p>
<Editor title="apps/website/src/App.tsx" lang="diff-tsx" mdxType="Editor">
{`import React from "react";
import { Website } from "@webiny/app-website";
+ import { createThemeLoader } from "@webiny/app-theme-manager";

+ const themes = [
+   {
+     name: "default",
+     load: () => import(/* webpackChunkName: "theme" */ "theme").then((m) => m.default),
+   }
+ ];

+ const ThemeLoader = createThemeLoader({ themes });

export const App = () => {
+    return <Website providers={[ThemeLoader]} />;
};`}
</Editor>
<p>{`Here, we’re using the `}<inlineCode parentName="p">{`createThemeLoader`}</inlineCode>{` factory to create a theme provider, and we’re passing it an array of themes like we did in the Admin app. On website render, `}<inlineCode parentName="p">{`ThemeLoader`}</inlineCode>{` will make sure that the correct theme is loaded for the particular tenant.`}</p>
<Alert type="warning" title={"Disable existing theme import!"} mdxType="Alert">
<p>{`With the above setup, your system is now ready to add more themes and switch between them. However, your original
theme is still statically imported in your plugins (in both Admin and Website apps).`}</p>
<p>{`To remove static imports, simply remove the `}<inlineCode parentName="p">{`theme`}</inlineCode>{` import statement and plugin registration from the following files:`}</p>
<ul>
<li parentName="ul"><inlineCode parentName="li">{`apps/admin/src/plugins/index.ts`}</inlineCode></li>
<li parentName="ul"><inlineCode parentName="li">{`apps/website/src/plugins/index.ts`}</inlineCode></li>
</ul>
</Alert>
<_Heading level={2} id={"adding-more-themes"} nextElement={{
      "type": "paragraph"
    }}>Adding More Themes</_Heading>
<p>{`Every Webiny project contains one theme, by default. You can find it in your project, by navigating to `}<inlineCode parentName="p">{`extensions/theme`}</inlineCode>{` folder.`}</p>
<p>{`The easiest way to add a new theme is to duplicate the existing `}<inlineCode parentName="p">{`theme`}</inlineCode>{` extension. Here’s how to do it, step by step:`}</p>
<ol>
<li parentName="ol">
<p parentName="li">{`Create a copy of the `}<inlineCode parentName="p">{`theme`}</inlineCode>{` folder, and name it `}<inlineCode parentName="p">{`theme-1`}</inlineCode>{`.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Edit its `}<inlineCode parentName="p">{`package.json`}</inlineCode>{` file (`}<inlineCode parentName="p">{`extensions/theme-1/package.json`}</inlineCode>{`), and change the `}<inlineCode parentName="p">{`name`}</inlineCode>{` property to `}<inlineCode parentName="p">{`theme-1`}</inlineCode>{`. This is very important, as this will be the name of the module you’ll be importing in your apps.`}</p>
</li>
<li parentName="ol">
<p parentName="li">{`Add this new workspace path to the project level `}<inlineCode parentName="p">{`package.json`}</inlineCode>{`, located at `}<inlineCode parentName="p">{`<project>/package.json`}</inlineCode>{`:`}</p>
</li>
</ol>
<Editor title="<project>/package.json" lang="diff-js" mdxType="Editor">
{`{
    "workspaces": {
      "packages": [
        "apps/admin",
        "apps/website",
        "extensions/theme",
+       "extensions/theme-1",
        "apps/api/graphql",
        "apps/api/headlessCMS"
      ]
    }
}`}
</Editor>
<p><strong parentName="p">{`4)`}</strong>{` Run `}<inlineCode parentName="p">{`yarn`}</inlineCode>{` to register the new workspace.`}</p>
<p><strong parentName="p">{`5)`}</strong>{` Add the new theme to `}<inlineCode parentName="p">{`admin`}</inlineCode>{` and `}<inlineCode parentName="p">{`website`}</inlineCode>{` dependencies:`}</p>
<Editor title="" lang="shell" mdxType="Editor">
{`yarn workspace admin add theme-1 && yarn workspace website add theme-1`}
</Editor>
<p>{`With this, you can now add your new theme in the Admin app, like so:`}</p>
<Editor title="apps/admin/src/App.tsx" lang="diff-tsx" mdxType="Editor">
{`import React from "react";
import { Admin } from "@webiny/app-serverless-cms";
import { Cognito } from "@webiny/app-admin-users-cognito";
import { ThemeManager } from "@webiny/app-theme-manager";
import "./App.scss";

const themes = [
    {
      name: "default",
      label: "Default Theme",
      load: () => import(/* webpackChunkName: "theme" */ "theme").then(m => m.default)
    },
+   {
+     name: "theme-1",
+     label: "Theme #1",
+     load: () => import(/* webpackChunkName: "theme-1" */ "theme-1").then(m => m.default)
+   }
];

export const App = () => {
    return (
      <Admin>
        <Cognito />
        <ThemeManager themes={themes} />
      </Admin>
    );
};`}
</Editor>
<p>{`And we also need to add the new theme in the Website app:`}</p>
<Editor title="apps/website/src/App.tsx" lang="diff-tsx" mdxType="Editor">
{`import React from "react";
import { Website } from "@webiny/app-website";
import { createThemeLoader } from "@webiny/app-theme-manager";

const themes = [
    {
      name: "default",
      load: () => import(/* webpackChunkName: "theme" */ "theme").then((m) => m.default)
    },
+   {
+     name: "theme-1",
+     load: () => import(/* webpackChunkName: "theme-1" */ "theme-1").then((m) => m.default)
+   }
];

const ThemeLoader = createThemeLoader({ themes });

export const App = () => {
    return <Website providers={[ThemeLoader]} />;
};`}
</Editor>
<p>{`Once the code changes are done, deploy your Admin and Website apps, by running:`}</p>
<Editor title="" lang="shell" mdxType="Editor">
{`yarn webiny deploy admin,website --env dev`}
</Editor>
<Alert type="info" mdxType="Alert">
<p>{`Every time you add a new theme, you need to deploy your Admin and Website apps.`}</p>
</Alert>
<_Heading level={2} id={"assigning-themes-to-tenants"} nextElement={{
      "type": "paragraph"
    }}>Assigning Themes to Tenants</_Heading>
<p>{`In the Tenant Manager, your themes will be visible in the tenant creation form. You can assign as many themes as you like to an individual tenant. Tenants will then be able to activate one of the assigned themes in their Page Builder settings.`}</p>
<Image src={_Image3} alt={"Assign Themes to an Individual Tenant"} mdxType="Image" />
<_Heading level={2} id={"activating-a-theme-within-the-page-builder"} nextElement={{
      "type": "paragraph"
    }}>Activating a Theme Within the Page Builder</_Heading>
<p>{`Tenant admin users need to activate a specific theme in `}<strong parentName="p">{`Settings -> Page Builder -> Website`}</strong>{`:`}</p>
<Image src={_Image4} alt={"Activate a Specific Theme"} mdxType="Image" />
<_Heading level={2} id={"conclusion"} nextElement={{
      "type": "paragraph"
    }}>Conclusion</_Heading>
<p>{`With the Theme Manager module, you can now assign themes to individual tenants, and let them choose which theme they want to use on their website. This is a powerful feature that allows you to create a multi-tenant system with different themes for each tenant.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;