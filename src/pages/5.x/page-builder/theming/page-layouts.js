/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import staticPageTemplate from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/page-builder/theming/images/static-page-template.png";
import pageBuilderLayoutSelectCategory from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/page-builder/theming/images/page-builder-layout-select-category.png";
import pageBuilderLayoutPageSettings from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/page-builder/theming/images/page-builder-layout-select-page-settings.png";
import pageBuilderSettingsIcon from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/page-builder/theming/images/page-builder-settings-icon.png";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Page Layouts",
  "description": "Learn how to create and assign page layouts to pages created with Page Builder.",
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
  "title": "React Components and Plugins",
  "slug": "react-components-and-plugins",
  "children": [{
    "title": "Assigning Page Layouts to Pages",
    "slug": "assigning-page-layouts-to-pages",
    "children": [{
      "title": "1. Page Categories",
      "slug": "1-page-categories"
    }, {
      "title": "2. Page Settings",
      "slug": "2-page-settings"
    }]
  }]
}, {
  "title": "Introducing New Page Layouts",
  "slug": "introducing-new-page-layouts",
  "children": []
}, {
  "title": "Styling Page Layouts",
  "slug": "styling-page-layouts",
  "children": []
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







{/* Always include this section on top of the page. */}
<Alert type="success" title="What You’ll Learn" mdxType="Alert">
<ul>
<li parentName="ul">{`how to create page layouts`}</li>
<li parentName="ul">{`how to assign page layouts to pages created with Page Builder`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`All pages created with Page Builder’s page editor are rendered within a page layout.`}</p>
<p>{`For example, the `}<strong parentName="p">{`Static page`}</strong>{` layout, that’s by default included in every Webiny project, renders pages in a relatively standard `}<strong parentName="p">{`header`}</strong>{` → `}<strong parentName="p">{`content`}</strong>{` → `}<strong parentName="p">{`footer`}</strong>{` structure.`}</p>
<Image src={staticPageTemplate} title={"Static Page Layout"} shadow={false} mdxType="Image" />
<_Heading level={2} id={"react-components-and-plugins"} nextElement={{
      "type": "paragraph"
    }}>React Components and Plugins</_Heading>
<p>{`On the code level, page layouts consist of one or more React components. For example, if we were to take a look at the `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/v5.40.0/packages/cwp-template-aws/template/common/extensions/theme/src/layouts/pages/Static.tsx"
      }}><inlineCode parentName="a">{`Static.tsx`}</inlineCode></a>{` file, located in the `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/tree/v5.40.0/packages/cwp-template-aws/template/common/extensions/theme/src/layouts/pages"
      }}><inlineCode parentName="a">{`extensions/theme/src/layouts/pages`}</inlineCode></a>{` folder, we would see the following code:`}</p>
<Editor title="extensions/theme/src/layouts/pages/Static.tsx" lang="tsx" mdxType="Editor">
{`import React from "react";
import { Global, css } from "@emotion/react";
import styled from "@emotion/styled";
import { Header } from "./Static/Header";
import { Footer } from "./Static/Footer";

const globalStyles = css\`
  html {
    scroll-behavior: smooth;
  }

  @media screen and (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: smooth;
    }
  }
\`;

const Layout = styled.div\`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  footer {
    margin-top: auto;
  }
\`;

const Static = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout>
      <Global styles={globalStyles} />
      <Header />
      {/* We render the actual page content via the "children" prop. */}
      <main>{children}</main>
      <Footer />
    </Layout>
  );
};

export default Static;`}
</Editor>
<p>{`Essentially, the file exports a page layout React component, which renders the following:`}</p>
<ol>
<li parentName="ol">{`the actual page layout (notice extra components like `}<inlineCode parentName="li">{`Layout`}</inlineCode>{` and `}<inlineCode parentName="li">{`Header`}</inlineCode>{`)`}</li>
<li parentName="ol">{`the page content created via Page Builder’s page editor (passed via the `}<inlineCode parentName="li">{`children`}</inlineCode>{` prop)`}</li>
</ol>
<p>{`Depending on the requirements, page layouts can be simple or more complex. For example, the `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/v5.40.0/packages/cwp-template-aws/template/common/extensions/theme/src/layouts/pages/Static.tsx"
      }}><inlineCode parentName="a">{`Static.tsx`}</inlineCode></a>{` file also contains `}<inlineCode parentName="p">{`Header`}</inlineCode>{` and `}<inlineCode parentName="p">{`Footer`}</inlineCode>{` components, which are used to render the header and footer of the page layout.`}</p>
<p>{`Ultimately, all page layouts are registered via the `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/v5.40.0/packages/app-page-builder/src/plugins/PbPageLayoutPlugin.ts#L4-L12"
      }}><inlineCode parentName="a">{`PbPageLayoutPlugin`}</inlineCode></a>{`, plugin, which can be done within the `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/v5.40.0/packages/cwp-template-aws/template/common/extensions/theme/src/index.ts"
      }}><inlineCode parentName="a">{`extensions/theme/src/index.ts`}</inlineCode></a>{` entrypoint file:`}</p>
<Editor title="extensions/theme/src/index.ts" lang="diff-ts" mdxType="Editor">
{`import { PbPageLayoutPlugin } from "@webiny/app-page-builder";
import { FbFormLayoutPlugin } from "@webiny/app-form-builder";
import { ThemePlugin } from "@webiny/app-website";

// The central theme object which defines different visual aspects of your website,
// for example the default set of colors, typography, breakpoints, and more.
import theme from "./theme";

// Default layouts used by Page Builder pages and Form Builder forms.
+ import StaticLayout from "./layouts/pages/Static";
import DefaultFormLayout from "./layouts/forms/DefaultFormLayout";

// Ultimately, theme and layouts need to be registered via their respective plugins.
// To learn more, see: https://www.webiny.com/docs/page-builder/theming/introduction.
export default () => [
    new ThemePlugin(theme),

+   new PbPageLayoutPlugin({
+       name: "static",
+       title: "Static page",
+       component: StaticLayout
+   }),

    new FbFormLayoutPlugin({
        name: "default",
        title: "Default form layout",
        component: DefaultFormLayout
    })
];`}
</Editor>
<p>{`The plugin is what actually makes the page layout visible in the Page Builder application and, ultimately, enables users to assign the layout to one or more pages and have their content rendered within it.`}</p>
<p>{`More on this in the following section.`}</p>
<_Heading level={3} id={"assigning-page-layouts-to-pages"} nextElement={{
      "type": "paragraph"
    }}>Assigning Page Layouts to Pages</_Heading>
<p>{`Page layouts can be assigned to pages in two ways.`}</p>
<_Heading level={4} id={"1-page-categories"} nextElement={{
      "type": "paragraph"
    }}>1. Page Categories</_Heading>
<p>{`The first is by selecting a default page layout for a page category. For example, if we were to create a new `}<strong parentName="p">{`Blogs`}</strong>{` category, and we selected the `}<strong parentName="p">{`Static page`}</strong>{` layout in the `}<strong parentName="p">{`Layout`}</strong>{` field, all pages created in the `}<strong parentName="p">{`Blogs`}</strong>{` category would be rendered using the `}<strong parentName="p">{`Static page`}</strong>{` layout.`}</p>
<Image src={pageBuilderLayoutSelectCategory} title={"Theme Colors"} mdxType="Image" />
<p>{`Note that the layout can be changed at any time, and the change will be reflected on all existing pages that use the layout. Additionally, the layout can be changed for individual pages, which will override the default layout set via the category. This is covered in the next section.`}</p>
<_Heading level={4} id={"2-page-settings"} nextElement={{
      "type": "paragraph"
    }}>2. Page Settings</_Heading>
<p>{`Page layout can also be selected via page settings in the page editor. This enables us to override the default layout set via the category.`}</p>
<p>{`This is achieved by selecting the desired layout in the `}<strong parentName="p">{`Layout`}</strong>{` field, located in the `}<strong parentName="p">{`General Settings`}</strong>{` tab in the page settings area.`}</p>
<Image src={pageBuilderLayoutPageSettings} title={"Selecting Page Layout via Page Settings"} mdxType="Image" />
<Alert type={'info'} mdxType="Alert">
<p>{`Page settings can be accessed by clicking on the cogwheel icon, located in the top right corner of the page editor.`}</p>
<Image src={pageBuilderSettingsIcon} title={"Accessing Page Settings in the Page Editor"} mdxType="Image" />
</Alert>
<_Heading level={2} id={"introducing-new-page-layouts"} nextElement={{
      "type": "paragraph"
    }}>Introducing New Page Layouts</_Heading>
<p>{`If required, users can introduce additional page layouts into their project and use them with different pages. For example, let’s imagine we wanted to introduce a completely blank layout, that doesn’t render any header or footer.`}</p>
<p>{`Like with the `}<strong parentName="p">{`Static page`}</strong>{` layout, we would need to create a new page layout React component, and register it via the `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/v5.40.0/packages/app-page-builder/src/plugins/PbPageLayoutPlugin.ts#L4-L12"
      }}><inlineCode parentName="a">{`PbPageLayoutPlugin`}</inlineCode></a>{` plugin.`}</p>
<p>{`For the component, the following would be all the code that’s required:`}</p>
<Editor title="extensions/theme/src/layouts/pages/Blank.tsx" lang="tsx" mdxType="Editor">
{`import React from "react";

const Blank = ({ children }: { children: React.ReactNode }) => {
  // Simply render the "children" prop, which contains the actual page content.
  return children;
};

export default Blank;`}
</Editor>
<p>{`And for the registration, we would need to add the following to the `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/v5.40.0/packages/cwp-template-aws/template/common/extensions/theme/src/index.ts#L18-L22"
      }}><inlineCode parentName="a">{`extensions/theme/src/index.ts`}</inlineCode></a>{` file:`}</p>
<Editor title="extensions/theme/src/index.ts" lang="diff-ts" mdxType="Editor">
{`import { PbPageLayoutPlugin } from "@webiny/app-page-builder";
import { FbFormLayoutPlugin } from "@webiny/app-form-builder";
import { ThemePlugin } from "@webiny/app-website";

// The central theme object which defines different visual aspects of your website,
// for example the default set of colors, typography, breakpoints, and more.
import theme from "./theme";

// Default layouts used by Page Builder pages and Form Builder forms.
import StaticLayout from "./layouts/pages/Static";
+ import BlankLayout from "./layouts/pages/Blank";
import DefaultFormLayout from "./layouts/forms/DefaultFormLayout";

// Ultimately, theme and layouts need to be registered via their respective plugins.
// To learn more, see: https://www.webiny.com/docs/page-builder/theming/introduction.
export default () => [
    new ThemePlugin(theme),

    new PbPageLayoutPlugin({
        name: "static",
        title: "Static page",
        component: StaticLayout
    }),

+   new PbPageLayoutPlugin({
+       name: "blank",
+       title: "Blank page",
+       component: StaticLayout
+   }),

    new FbFormLayoutPlugin({
        name: "default",
        title: "Default form layout",
        component: DefaultFormLayout
    })
];`}
</Editor>
<p>{`With the above code in place, we should be able to create pages and select the `}<strong parentName="p">{`Blank page`}</strong>{` layout to be used.`}</p>
<_Heading level={2} id={"styling-page-layouts"} nextElement={{
      "type": "paragraph"
    }}>Styling Page Layouts</_Heading>
<p>{`As mentioned in the `}<_Link href="/docs/5.x/page-builder/theming/introduction">{`Introduction`}</_Link>{` section, Webiny relies on Emotion for all of the styling needs. This includes styling of page layouts.`}</p>
<p>{`If we were to take another look at the `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/v5.40.0/packages/cwp-template-aws/template/common/extensions/theme/src/layouts/pages/Static.tsx"
      }}><inlineCode parentName="a">{`extensions/theme/src/layouts/pages/Static.tsx`}</inlineCode></a>{` file, we could notice the Emotion’s `}<a parentName="p" {...{
        "href": "https://emotion.sh/docs/globals"
      }}><inlineCode parentName="a">{`Global`}</inlineCode></a>{` component being used to inject global styles into the page. We could also notice the usage of the `}<a parentName="p" {...{
        "href": "https://emotion.sh/docs/styled"
      }}><inlineCode parentName="a">{`@emotion/styled`}</inlineCode></a>{` package, which enables us to create styled components. In this case, the `}<inlineCode parentName="p">{`Layout`}</inlineCode>{` component.`}</p>
<Editor title="extensions/theme/src/layouts/pages/Static.tsx" lang="diff-tsx" mdxType="Editor">
{`import React from "react";
import { Global, css } from "@emotion/react";
import styled from "@emotion/styled";
import { Header } from "./Static/Header";
import { Footer } from "./Static/Footer";

+ const globalStyles = css\`
+     html {
+         scroll-behavior: smooth;
+     }
+
+     @media screen and (prefers-reduced-motion: reduce) {
+         html {
+             scroll-behavior: smooth;
+         }
+     }
+ \`;

+ const Layout = styled.div\`
+     min-height: 100vh;
+     display: flex;
+     flex-direction: column;
+
+     footer {
+         margin-top: auto;
+     }
+ \`;

const Static = ({ children }: { children: React.ReactNode }) => {
    return (
        <Layout>
+           <Global styles={globalStyles} />
            <Header />
            {/* We render the actual page content via the "children" prop. */}
            <main>{children}</main>
            <Footer />
        </Layout>
    );
};

export default Static;`}
</Editor>
<Alert type={"info"} mdxType="Alert">
<p>{`The `}<inlineCode parentName="p">{`Header`}</inlineCode>{` and `}<inlineCode parentName="p">{`Footer`}</inlineCode>{` components that are being included in the layout are also styled using Emotion.`}</p>
</Alert>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;