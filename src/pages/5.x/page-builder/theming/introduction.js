/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Introduction",
  "description": "An overview of how theming works in Webiny's Page Builder application.",
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
  "title": "How Styling Works",
  "slug": "how-styling-works",
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



{/* Always include this section on top of the page. */}
<Alert type="success" title="What You’ll Learn" mdxType="Alert">
<ul>
<li parentName="ul">{`what are the different parts that make up a theme`}</li>
<li parentName="ul">{`what plugins are used upon creating themes`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`By default, every Webiny project includes the default website theme which defines different visual aspects of your website, for example the default set of colors, typography, the default page layout, and more.`}</p>
<p>{`In a new Webiny project, if we were to open the `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/tree/v5.40.0/packages/cwp-template-aws/template/common/extensions/theme"
      }}><inlineCode parentName="a">{`extensions/theme`}</inlineCode></a>{` folder and in it the `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/tree/v5.40.0/packages/cwp-template-aws/template/common/extensions/theme/src/index.ts"
      }}><inlineCode parentName="a">{`extensions/theme/src/index.ts`}</inlineCode></a>{` file, we’d see the following:`}</p>
<Editor title="extensions/theme/src/index.ts" lang="ts" mdxType="Editor">
{`import { PbPageLayoutPlugin } from "@webiny/app-page-builder";
import { FbFormLayoutPlugin } from "@webiny/app-form-builder";
import { ThemePlugin } from "@webiny/app-website";

// The central theme object which defines different visual aspects of your website,
// for example the default set of colors, typography, breakpoints, and more.
import theme from "./theme";

// Default layouts used by Page Builder pages and Form Builder forms.
import StaticLayout from "./layouts/pages/Static";
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

  new FbFormLayoutPlugin({
    name: "default",
    title: "Default form layout",
    component: DefaultFormLayout
  })
];`}
</Editor>
<p>{`Respectively, via the `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/v5.40.0/packages/app-theme/src/index.ts#L4-L12"
      }}><inlineCode parentName="a">{`ThemePlugin`}</inlineCode></a>{`, `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/v5.40.0/packages/app-page-builder/src/plugins/PbPageLayoutPlugin.ts#L4-L12"
      }}><inlineCode parentName="a">{`PbPageLayoutPlugin`}</inlineCode></a>{`, and `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/v5.40.0/packages/app-form-builder/src/plugins/FbFormLayoutPlugin.ts#L4-L12"
      }}><inlineCode parentName="a">{`FbFormLayoutPlugin`}</inlineCode></a>{` plugins, the file achieves the following:`}</p>
<ol>
<li parentName="ol">{`registers the central theme object`}</li>
<li parentName="ol">{`registers the `}<strong parentName="li">{`Static page`}</strong>{` layout, to be used with pages created with the Page Builder application`}</li>
<li parentName="ol">{`registers the `}<strong parentName="li">{`Default form layout`}</strong>{` layout, to be used with forms created with the Form Builder application`}</li>
</ol>
<p>{`In the following sections, we cover the essential information and best practices related to the theme object and page layouts.`}</p>
<_Heading level={2} id={"how-styling-works"} nextElement={{
      "type": "paragraph"
    }}>How Styling Works</_Heading>
<p>{`Before we dive into the theme object and page layouts, it’s useful to know how styling works inside Webiny.`}</p>
<p>{`For styling, Webiny relies on `}<a parentName="p" {...{
        "href": "https://emotion.sh/docs/introduction"
      }}>{`Emotion`}</a>{` - a library that provides a set of tools for writing CSS styles with JavaScript. Emotion is a CSS-in-JS library, which means that it allows writing CSS styles directly inside JavaScript code.`}</p>
<p>{`As we’ll be able to see in the following sections, Emotion is used when defining the theme object and styling page layouts. It is also used upon creating and styling `}<_Link href="/docs/5.x/page-builder/extending/create-a-page-element">{`custom page elements`}</_Link>{`.`}</p>
<p>{`More information on all of this will be outlined in the next couple of sections.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;