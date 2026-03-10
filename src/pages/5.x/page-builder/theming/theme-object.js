/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import themeColorsInEditor from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/page-builder/theming/images/theme-colors-in-editor.png";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Theme Object",
  "description": "Learn about the theme object and how it's used in the code.",
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
  "title": "Properties",
  "slug": "properties",
  "children": [{
    "title": "Breakpoints",
    "slug": "breakpoints",
    "children": []
  }, {
    "title": "Colors",
    "slug": "colors",
    "children": []
  }, {
    "title": "Typography",
    "slug": "typography",
    "children": []
  }, {
    "title": "Page Elements",
    "slug": "page-elements",
    "children": []
  }]
}, {
  "title": "Accessing the Theme Object",
  "slug": "accessing-the-theme-object",
  "children": [{
    "title": "Accessing Typography Variants",
    "slug": "accessing-typography-variants",
    "children": []
  }, {
    "title": "Custom Page Elements",
    "slug": "custom-page-elements",
    "children": []
  }]
}, {
  "title": "Responsive Styles",
  "slug": "responsive-styles",
  "children": []
}, {
  "title": "FAQ",
  "slug": "faq",
  "children": [{
    "title": "When Defining Custom Theme, Should I Create a Copy of the Theme or Can I Just Override the Values I Need?",
    "slug": "when-defining-custom-theme-should-i-create-a-copy-of-the-theme-or-can-i-just-override-the-values-i-need",
    "children": []
  }, {
    "title": "Is Having Multiple Themes Supported Out of the Box?",
    "slug": "is-having-multiple-themes-supported-out-of-the-box",
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




{/* Always include this section on top of the page. */}
<Alert type="success" title="What You’ll Learn" mdxType="Alert">
<ul>
<li parentName="ul">{`what are the different properties of the theme object`}</li>
<li parentName="ul">{`how to properly access the theme object in the code`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`The theme object defines different visual aspects of our website, for example the default set of colors, typography, breakpoints, and more.`}</p>
<p>{`Apart from being used in the code by different page elements, the theme object is also integrated with different editors that are available in the Page Builder’s application, like page or block editor.`}</p>
<p>{`For example, colors or different typography options defined in the theme object are automatically picked up by these editors, enabling users to select them while building content and ensuring everything stays visually consistent.`}</p>
<Image src={themeColorsInEditor} title={"Theme Colors Available In The Color Picker"} mdxType="Image" />
<p>{`By default, the theme object is exported from the `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/v5.40.0/packages/cwp-template-aws/template/common/extensions/theme/src/theme.ts"
      }}><inlineCode parentName="a">{`extensions/theme/src/theme.ts`}</inlineCode></a>{` file, and it looks like the following:`}</p>
<Editor title="extensions/theme/src/theme.ts" lang="ts" mdxType="Editor">
{`// Parts of code removed for brevity.
import { createTheme } from "@webiny/app-theme";
import { CSSObject } from "@emotion/react";

// Breakpoints (desktop, tablet, mobile).
export const breakpoints = {
  desktop: "@media (max-width: 4000px)",
  tablet: "@media (max-width: 991px)",
  "mobile-landscape": "@media (max-width: 767px)",
  "mobile-portrait": "@media (max-width: 478px)"
};

// Colors.
export const colors = {
  color1: "#fa5723", // Primary.
  color2: "#00ccb0", // Secondary.
  color3: "#0a0a0a", // Text primary.
  color4: "#616161", // Text secondary.
  color5: "#eaecec", // Background.
  color6: "#ffffff" // White background.
};

// Fonts.
export const fonts = {
  font1: "'IBM Plex Sans', sans-serif;", // Primary.
  font2: "'Lato', sans-serif;" // Secondary.
};

// Border radius.
export const borderRadius = 4;

// Typography.
// Code removed for brevity. Shown in the Typography section below.

// Buttons.
const buttons = (overrides: CSSObject) => ({
  // Code removed for brevity.
});

// Theme object.
const theme = createTheme({
  breakpoints,
  styles: {
    colors,
    typography,
    elements: {
      document: {
        a: { color: colors.color1 },
        b: { fontWeight: "bold" },
        i: { fontStyle: "italic" }
      },
      button: {
        default: buttons({ background: colors.color5, color: colors.color3 }),
        primary: buttons({ background: colors.color1, color: colors.color6 }),
        secondary: buttons({ background: colors.color2, color: colors.color6 }),
        outlinePrimary: buttons({
          border: \`2px solid \${colors.color1}\`,
          color: colors.color1
        }),
        outlineSecondary: buttons({
          border: \`2px solid \${colors.color2}\`,
          color: colors.color2
        }),
        simple: buttons({
          color: colors.color1,
          "&:hover": { transform: "translateY(-1px)" }
        })
      }
    }
  }
});

export default theme;`}
</Editor>
<p>{`In the following text, we cover all the different properties of which the theme object consists of.`}</p>
<_Heading level={2} id={"properties"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Properties</_Heading>
<_Heading level={3} id={"breakpoints"} nextElement={{
      "type": "paragraph"
    }}>Breakpoints</_Heading>
<p>{`Via the `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/v5.40.0/packages/cwp-template-aws/template/common/extensions/theme/src/theme.ts#L146"
      }}><inlineCode parentName="a">{`breakpoints`}</inlineCode></a>{` object, the theme object defines four available breakpoints:`}</p>
<ol>
<li parentName="ol">{`desktop`}</li>
<li parentName="ol">{`tablet`}</li>
<li parentName="ol">{`mobile (landscape orientation)`}</li>
<li parentName="ol">{`mobile (portrait orientation)`}</li>
</ol>
<p>{`Note that the property names of these breakpoints (`}<inlineCode parentName="p">{`desktop`}</inlineCode>{`, `}<inlineCode parentName="p">{`tablet`}</inlineCode>{`, `}<inlineCode parentName="p">{`mobile-landscape`}</inlineCode>{`, `}<inlineCode parentName="p">{`mobile-portrait`}</inlineCode>{`) should not be changed. But, the assigned media queries can be adjusted and new ones can be introduced, if need be.`}</p>
<_Heading level={3} id={"colors"} nextElement={{
      "type": "paragraph"
    }}>Colors</_Heading>
<p>{`Via the `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/v5.40.0/packages/cwp-template-aws/template/common/extensions/theme/src/theme.ts#L148"
      }}><inlineCode parentName="a">{`styles.colors`}</inlineCode></a>{` object, the theme object defines theme colors, where property names represent the IDs of colors and values respective color codes.`}</p>
<p>{`The IDs of colors don’t follow any naming convention. Upon introducing new colors, IDs like `}<inlineCode parentName="p">{`primaryColor`}</inlineCode>{` or `}<inlineCode parentName="p">{`myCustomColor`}</inlineCode>{` will work as well.`}</p>
<Alert type="warning" mdxType="Alert">
  Note that color IDs are used as references in pages created via the Page Builder's page editor.
  Meaning, changing them will cause existing pages (that are already relying on previous IDs) to
  break and not resolve the selected colors correctly.
</Alert>
<_Heading level={3} id={"typography"} nextElement={{
      "type": "paragraph"
    }}>Typography</_Heading>
<p>{`Via the `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/v5.40.0/packages/cwp-template-aws/template/common/extensions/theme/src/theme.ts#LL149C1-L149C1"
      }}><inlineCode parentName="a">{`styles.typography`}</inlineCode></a>{` object, the theme object defines theme typography. Unlike with breakpoints and colors, property names here represent the typography categories, and values array of different typography variants. For example, in the following code snippet, we can see six different heading variants being defined:`}</p>
<Editor title="extensions/theme/src/theme.ts" lang="ts" mdxType="Editor">
{`// (...)

// Typography.
const headings = {
  fontFamily: fonts.font2,
  color: colors.color3,
  WebkitFontSmoothing: "antialiased"
};

const paragraphs = {
  fontFamily: fonts.font1,
  color: colors.color3,
  fontWeight: 400,
  lineHeight: 1.35,
  WebkitFontSmoothing: "antialiased"
};

export const typography = {
  // Six heading variants (levels of headings).
  headings: [
    {
      id: "heading1",
      name: "Heading 1",
      tag: "h1",
      styles: { ...headings, fontWeight: "bold", fontSize: 48 }
    },
    {
      id: "heading2",
      name: "Heading 2",
      tag: "h2",
      styles: { ...headings, fontSize: 36 }
    },
    {
      id: "heading3",
      name: "Heading 3",
      tag: "h3",
      styles: { ...headings, fontSize: 30 }
    },
    {
      id: "heading4",
      name: "Heading 4",
      tag: "h4",
      styles: { ...headings, fontSize: 24 }
    },
    {
      id: "heading5",
      name: "Heading 5",
      tag: "h5",
      styles: { ...headings, fontSize: 20 }
    },
    {
      id: "heading6",
      name: "Heading 6",
      tag: "h6",
      styles: { ...headings, fontSize: 18, lineHeight: "1.75rem" }
    }
  ]
  // Below we have three more typography categories: paragraphs, quotes, and lists.
};

// (...)`}
</Editor>
<p>{`Every typography variant consists of the following properties:`}</p>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Property`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`id`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`A unique ID of the typography variant. Like with colors, typography IDs don’t follow any naming convention. Upon introducing new typography, IDs like `}<inlineCode parentName="td">{`primaryTypography`}</inlineCode>{` or `}<inlineCode parentName="td">{`myCustomTypography`}</inlineCode>{` will work as well.`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`name`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`A human-readable name of the typography variant. Will be shown in different Page Builder editors like page or block editor.`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`tag`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`A HTML tag that will be used to render the typography variant.`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`styles`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`A CSS object that defines the visual appearance of the typography variant.`}</td>
</tr>
</tbody>
</table>
<Alert type="warning" mdxType="Alert">
  Note that typography variant IDs are used as references in pages created via the Page Builder's
  page editor. Meaning, changing them will cause existing pages (that are already relying on
  previous IDs) to break and not resolve the selected typography correctly.
</Alert>
<Alert type="info" mdxType="Alert">
<p>{`Note that, when accessing the theme object and different typography variants, to make it easier, we can leverage the
special `}<inlineCode parentName="p">{`stylesById`}</inlineCode>{` getter function. More on this below, in the `}<a parentName="p" {...{
          "href": "#accessing-the-theme-object"
        }}>{`Accessing the Theme
Object`}</a>{` section.`}</p>
</Alert>
<_Heading level={3} id={"page-elements"} nextElement={{
      "type": "paragraph"
    }}>Page Elements</_Heading>
<p>{`Respectively, the `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/v5.40.0/packages/cwp-template-aws/template/common/extensions/theme/src/theme.ts#L150"
      }}><inlineCode parentName="a">{`styles.elements`}</inlineCode></a>{` object enables defining and overriding styles for new and existing page elements. Like with colors and typography, property names represent the IDs of page elements, and values respective CSS rules that define them visually.`}</p>
<p>{`By default, the property contains styles for default `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/v5.40.0/packages/cwp-template-aws/template/common/extensions/theme/src/theme.ts#L151-L155"
      }}><inlineCode parentName="a">{`document`}</inlineCode></a>{` and `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/v5.40.0/packages/cwp-template-aws/template/common/extensions/theme/src/theme.ts#L163-L179"
      }}><inlineCode parentName="a">{`button`}</inlineCode></a>{` page elements, but note that styles for custom ones can be added here as well.`}</p>
<Alert type={"info"} mdxType="Alert">
  Although page elements can have their styles defined within one or more respective React
  components, in multi-theme projects, having all or just part of the element's styles defined here
  can make it easier to have different styles for different themes.
</Alert>
<Alert type={"info"} mdxType="Alert">
<p>{`To learn more about custom page elements, check out the existing `}<_Link href="/docs/5.x/page-builder/extending/create-a-page-element">{`Create a Custom Page Element`}</_Link>{`
article.`}</p>
</Alert>
<_Heading level={2} id={"accessing-the-theme-object"} nextElement={{
      "type": "paragraph"
    }}>Accessing the Theme Object</_Heading>
<p>{`While styling `}<_Link href="/docs/5.x/page-builder/theming/page-layouts">{`page layouts`}</_Link>{` or `}<_Link href="/docs/5.x/page-builder/extending/create-a-page-element">{`custom page elements`}</_Link>{`, the theme object can be accessed in order to use the styling rules defined in it. To access the theme object, we rely on Emotion’s suggested approach, which is through the React context.`}</p>
<p>{`The easiest way to access the theme object is via `}<a parentName="p" {...{
        "href": "https://emotion.sh/docs/styled"
      }}>{`styled components`}</a>{`, like in the following example:`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`import * as React from "react";
import styled from "@emotion/styled";

const SomeDiv = styled.div\`
  background-color: \${props => props.theme.styles.colors["color5"]};
  height: 100px;
\`;`}
</Editor>
<p>{`As we can see, the `}<inlineCode parentName="p">{`theme`}</inlineCode>{` object is available via the `}<inlineCode parentName="p">{`props`}</inlineCode>{` argument of the styled component’s template literal function. This means that we can access any of the theme object’s properties, like `}<inlineCode parentName="p">{`styles.colors`}</inlineCode>{`, `}<inlineCode parentName="p">{`styles.typography`}</inlineCode>{` or `}<inlineCode parentName="p">{`styles.elements`}</inlineCode>{`.`}</p>
<Alert type="warning" mdxType="Alert">
<p>{`Note that the theme object should not be accessed by directly importing the `}<a parentName="p" {...{
          "href": "https://github.com/webiny/webiny-js/blob/v5.40.0/packages/cwp-template-aws/template/common/extensions/theme/src/theme.ts"
        }}><inlineCode parentName="a">{`extensions/theme/src/theme.ts`}</inlineCode></a>{` file. This can
lead to issues in multi-theme projects, where the theme object is not the same for all themes.`}</p>
</Alert>
<Alert type={"info"} mdxType="Alert">
<p>{`Multiple examples of accessing the theme object can be found in the `}<strong parentName="p">{`Static page`}</strong>{` page layout code that’s included by default in all new projects. The code is located in the `}<a parentName="p" {...{
          "href": "https://github.com/webiny/webiny-js/tree/v5.40.0/packages/cwp-template-aws/template/common/extensions/theme/src/layouts/pages"
        }}><inlineCode parentName="a">{`extensions/theme/src/layouts/pages`}</inlineCode></a>{` code folder.`}</p>
<p>{`More information on page layouts can be found in the following `}<_Link href="/docs/5.x/page-builder/theming/page-layouts">{`Page Layouts`}</_Link>{` article.`}</p>
</Alert>
<_Heading level={3} id={"accessing-typography-variants"} nextElement={{
      "type": "paragraph"
    }}>Accessing Typography Variants</_Heading>
<p>{`When accessing typography variants, we can leverage the special `}<inlineCode parentName="p">{`stylesById`}</inlineCode>{` getter function, like in the following example:`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`import * as React from "react";
import styled from "@emotion/styled";

const SomeDiv = styled.div\`
  \${props => props.theme.styles.typography.paragraphs.stylesById("paragraph1")};
  height: 100px;
  width: 200px;
\`;`}
</Editor>
<p>{`As we can see, the `}<inlineCode parentName="p">{`stylesById`}</inlineCode>{` getter function accepts a typography variant ID as an argument, and returns a CSS object that defines the visual appearance of the typography variant. This way, we can easily access different typography variants, without having to manually traverse the `}<inlineCode parentName="p">{`styles.typography`}</inlineCode>{` object.`}</p>
<_Heading level={3} id={"custom-page-elements"} nextElement={{
      "type": "paragraph"
    }}>Custom Page Elements</_Heading>
<p>{`If needed, theme object can also be accessed when creating `}<_Link href="/docs/5.x/page-builder/extending/create-a-page-element">{`custom page elements`}</_Link>{`, via the `}<inlineCode parentName="p">{`useRenderer`}</inlineCode>{` React hook. For example:`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`import React from "react";
import { createRenderer } from "~/createRenderer";
import { useRenderer } from "~/hooks/useRenderer";

export type CustomPageElementRenderer = ReturnType<typeof createCustomPageElement>;

export const createCustomPageElement = () => {
  return createRenderer(() => {
    // Accessing the theme object via the useRenderer hook.
    const { theme } = useRenderer();

    return (
      // Using color1 from the theme object.
      <div style={{ color: theme.styles.colors["color1"] }}>Custom page element.</div>
    );
  });
};`}
</Editor>
<Alert type={"info"} mdxType="Alert">
<p>{`Most often, styles for custom page elements are introduced via one or more standalone `}<a parentName="p" {...{
          "href": "https://emotion.sh/docs/styled"
        }}>{`Emotion styled components`}</a>{`.`}</p>
</Alert>
<_Heading level={2} id={"responsive-styles"} nextElement={{
      "type": "paragraph"
    }}>Responsive Styles</_Heading>
<p>{`The theme object allows users to define responsive styles for all of the above mentioned properties. Consider the following example:`}</p>
<Editor title="extensions/theme/src/theme.ts" lang="diff-ts" mdxType="Editor">
{`// ...

export const breakpoints = {
  desktop: "@media (max-width: 4000px)",
  tablet: "@media (max-width: 991px)",
  "mobile-landscape": "@media (max-width: 767px)",
  "mobile-portrait": "@media (max-width: 478px)"
};

// ...

// Typography.
const headings = {
  fontFamily: fonts.font2,
  color: colors.color3,
  WebkitFontSmoothing: "antialiased"
};

export const typography = {
  // Six heading variants (levels of headings).
  headings: [
    {
      id: "heading1",
      name: "Heading 1",
      tag: "h1",
      styles: {
+       // Note the use of breakpoint keys (defined at the top of
+       // this file, via the \`breakpoints\` constant).
+       desktop: { ...headings, fontWeight: "bold", fontSize: 48 },
+       tablet: { fontSize: 36 },
+       "mobile-landscape": { fontSize: 24 },
+       "mobile-portrait": { fontSize: 20 }
      }
    },
    // ...
  ]
  // ...
};

// ...`}
</Editor>
<p>{`In this example, we’ve defined responsive styles for the `}<inlineCode parentName="p">{`heading1`}</inlineCode>{` typography variant. This means its styles will be different depending on the device’s screen size. For `}<inlineCode parentName="p">{`desktop`}</inlineCode>{`, the font size will be `}<inlineCode parentName="p">{`48px`}</inlineCode>{`, for `}<inlineCode parentName="p">{`tablet`}</inlineCode>{` it will be `}<inlineCode parentName="p">{`36px`}</inlineCode>{`, for `}<inlineCode parentName="p">{`mobile-landscape`}</inlineCode>{` it will be `}<inlineCode parentName="p">{`24px`}</inlineCode>{`, and for `}<inlineCode parentName="p">{`mobile-portrait`}</inlineCode>{` it will be `}<inlineCode parentName="p">{`20px`}</inlineCode>{`.`}</p>
<p>{`Note the use of breakpoint names (like `}<inlineCode parentName="p">{`desktop`}</inlineCode>{`, `}<inlineCode parentName="p">{`tablet`}</inlineCode>{`, etc.) instead of breakpoint values (like `}<inlineCode parentName="p">{`@media (max-width: 4000px)`}</inlineCode>{`). This is because the theme object automatically converts breakpoint names to breakpoint values, based on the `}<inlineCode parentName="p">{`breakpoints`}</inlineCode>{` constant defined at the top of the `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/v5.40.0/packages/cwp-template-aws/template/common/extensions/theme/src/theme.ts#L5"
      }}><inlineCode parentName="a">{`extensions/theme/src/theme.ts`}</inlineCode></a>{` file (and assigned via the `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/next/packages/cwp-template-aws/template/common/extensions/theme/src/theme.ts#L147"
      }}><inlineCode parentName="a">{`breakpoints`}</inlineCode></a>{` property in the exported theme object).`}</p>
<_Heading level={2} id={"faq"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>FAQ</_Heading>
<_Heading level={3} id={"when-defining-custom-theme-should-i-create-a-copy-of-the-theme-or-can-i-just-override-the-values-i-need"} nextElement={{
      "type": "paragraph"
    }}>When Defining Custom Theme, Should I Create a Copy of the Theme or Can I Just Override the Values I Need?</_Heading>
<p>{`In general, it depends on your needs and personal preference. There’s nothing wrong with simply overriding the values you need.`}</p>
<_Heading level={3} id={"is-having-multiple-themes-supported-out-of-the-box"} nextElement={{
      "type": "paragraph"
    }}>Is Having Multiple Themes Supported Out of the Box?</_Heading>
<p>{`Out of the box, every Webiny project starts with a single theme (the one located in the `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/tree/v5.40.0/packages/cwp-template-aws/template/common/extensions/theme"
      }}><inlineCode parentName="a">{`extensions/theme`}</inlineCode></a>{` folder. For a multi-theme setup, please take a look at the `}<_Link href="/docs/5.x/enterprise/theme-manager">{`Setup Theme Manager`}</_Link>{` article.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;