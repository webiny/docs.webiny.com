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
  "title": "Best Practices",
  "description": "Theme development and styling best practices.",
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
  "children": [{
    "title": "Use Theme Object When Styling",
    "slug": "use-theme-object-when-styling",
    "children": []
  }, {
    "title": "Access Theme Object via React Context",
    "slug": "access-theme-object-via-react-context",
    "children": []
  }, {
    "title": "Accessing Typography Variants",
    "slug": "accessing-typography-variants",
    "children": []
  }, {
    "title": "Use mq Utility Function for Easier Responsive Styling",
    "slug": "use-mq-utility-function-for-easier-responsive-styling",
    "children": []
  }, {
    "title": "Styling Custom Page Elements",
    "slug": "styling-custom-page-elements",
    "children": [{
      "title": "Using styles.elements Object to Style Custom Page Elements",
      "slug": "using-styles-elements-object-to-style-custom-page-elements"
    }]
  }, {
    "title": "Global Styles",
    "slug": "global-styles",
    "children": [{
      "title": "Global Document Styles",
      "slug": "global-document-styles"
    }]
  }]
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
<li parentName="ul">{`what are some of the best practices when it comes to theme and styling development`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Overview</_Heading>
<_Heading level={3} id={"use-theme-object-when-styling"} nextElement={{
      "type": "paragraph"
    }}>Use Theme Object When Styling</_Heading>
<p>{`When styling custom page layouts or page elements, visual elements like colors, typography and others should always be defined by relying on the theme object and the values it holds.`}</p>
<p>{`For example, instead of defining the background color for a page element with a hard-coded value, we should rely on the `}<inlineCode parentName="p">{`theme.styles.colors`}</inlineCode>{` object and the colors it holds. For example:`}</p>
<Editor title="" lang="diff-tsx" mdxType="Editor">
{`import * as React from "react";
import styled from "@emotion/styled";

const SomeDiv = styled.div\`
- background-color: #fff;
+ background-color: \${props => props.theme.styles.colors["color5"]};
  height: 100px;
\`;`}
</Editor>
<p>{`This way, we can easily change the color of the page element by simply changing the color value in the theme object.`}</p>
<p>{`This is even more important when it comes to multi-theme projects, where we can have multiple theme objects, each holding different values for the same visual elements. In this case, we can easily switch between themes, without having to change the styling code.`}</p>
<Alert type={"info"} mdxType="Alert">
<p>{`For a multi-theme setup, please take a look at the existing `}<_Link href="/docs/5.x/enterprise/theme-manager">{`Setup Theme Manager`}</_Link>{` article.`}</p>
</Alert>
<_Heading level={3} id={"access-theme-object-via-react-context"} nextElement={{
      "type": "paragraph"
    }}>Access Theme Object via React Context</_Heading>
<p>{`The theme object should always be accessed via React context. For example, when creating styled components:`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`import * as React from "react";
import styled from "@emotion/styled";

const SomeDiv = styled.div\`
  background-color: \${props => props.theme.styles.colors["color5"]};
  height: 100px;
\`;`}
</Editor>
<p>{`The theme object should not be accessed by directly importing the `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/v5.40.0/packages/cwp-template-aws/template/common/extensions/theme/src/theme.ts"
      }}><inlineCode parentName="a">{`extensions/theme/src/theme.ts`}</inlineCode></a>{` file. This can
lead to issues in multi-theme projects, where the theme object is not the same for all themes.`}</p>
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
<p>{`As we can see, the `}<inlineCode parentName="p">{`stylesById`}</inlineCode>{` getter function accepts a typography variant ID as an argument, and returns a CSS object that defines the visual appearance of the typography variant. This way, we can easily access different typography variants, without having to manually traverse the `}<_Link href="/docs/5.x/page-builder/theming/theme-object#typography"><inlineCode parentName="p">{`styles.typography`}</inlineCode></_Link>{` object.`}</p>
<_Heading level={3} id={"use-mq-utility-function-for-easier-responsive-styling"} nextElement={{
      "type": "paragraph"
    }}>Use<code>mq</code>Utility Function for Easier Responsive Styling</_Heading>
<p>{`One of the tools that is recommended in `}<a parentName="p" {...{
        "href": "https://emotion.sh/docs/introduction"
      }}>{`Emotion`}</a>{` library’s documentation portal is `}<a parentName="p" {...{
        "href": "https://github.com/emotion-js/facepaint"
      }}>{`Facepaint`}</a>{`. The library enables the developer to easily define CSS rules for multiple pre-defined breakpoints, for example:`}</p>
<Editor title="" lang="ts" mdxType="Editor">
{`import { css } from "emotion";
import facepaint from "facepaint";

const mq = facepaint([
  "@media(min-width: 420px)",
  "@media(min-width: 920px)",
  "@media(min-width: 1120px)"
]);

const myClassName = css(
  mq({
    color: ["red", "green", "blue", "darkorchid"]
  })
);`}
</Editor>
<p>{`With this 5.40.0 release, this library is included in the `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/tree/dev/packages/app-page-builder-elements"
      }}><inlineCode parentName="a">{`@webiny/app-page-builder-elements`}</inlineCode></a>{` package, enabling users to immediately use it, without the need to install it first. Furthermore, by importing the `}<inlineCode parentName="p">{`mq`}</inlineCode>{` utility function, users can immediately start writing their per-breakpoint styles, because the function is already configured to follow the breakpoints defined in the `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/dev/packages/cwp-template-aws/template/common/extensions/theme/src/theme.ts"
      }}>{`theme`}</a>{`. For example:`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`import React from "react";
import { mq } from "@webiny/app-page-builder-elements";
import styled from "@emotion/styled";

// Basic usage.
export const HeroSection = styled("div")(() =>
  mq({ color: ["red", "green", "blue", "gray", "white"] })
);

// With theme being accessed via the \`theme\` argument:
export const HeroSectionWithTheme = styled("div")(
  {
    lineHeight: "125%",
    backgroundColor: "#fff",
    backgroundRepeat: "no-repeat"
  },
  ({ theme }) =>
    mq({
      color: [
        "red",
        theme.styles.colors.color1,
        theme.styles.colors.color2,
        theme.styles.colors.color3,
        theme.styles.colors.color4
      ]
    })
);`}
</Editor>
<Alert type={"info"} mdxType="Alert">
<p>{`Need to define responsive styles for theme-level styles, like typography or colors? Responsive styles can also be defined via the theme object.`}</p>
<p>{`For more information, please refer to the `}<_Link href="/docs/5.x/page-builder/theming/theme-object#responsive-styles">{`Responsive Styles`}</_Link>{` section.`}</p>
</Alert>
<_Heading level={3} id={"styling-custom-page-elements"} nextElement={{
      "type": "paragraph"
    }}>Styling Custom Page Elements</_Heading>
<p>{`Most often, styles for `}<_Link href="/docs/5.x/page-builder/extending/create-a-page-element">{`custom page elements`}</_Link>{` are introduced via one or more standalone `}<a parentName="p" {...{
        "href": "https://emotion.sh/docs/styled"
      }}>{`Emotion styled components`}</a>{`, included with the page element code.`}</p>
<_Heading level={4} id={"using-styles-elements-object-to-style-custom-page-elements"} nextElement={{
      "type": "paragraph"
    }}>Using<code>styles.elements</code>Object to Style Custom Page Elements</_Heading>
<p>{`On top of the guidelines outlined in the `}<a parentName="p" {...{
        "href": "#use-theme-object-when-styling"
      }}>{`Use Theme Object When Styling`}</a>{` section, in order to provide theme-specific styles for custom page elements, we can also leverage the theme object’s `}<_Link href="/docs/5.x/page-builder/theming/theme-object#page-elements"><inlineCode parentName="p">{`styles.elements`}</inlineCode></_Link>{` object.`}</p>
<p>{`The following example shows how we can provide different styles for an imaginary `}<inlineCode parentName="p">{`myCustomElement`}</inlineCode>{` custom page element for different themes.`}</p>
<Editor title="extensions/theme/theme-light.ts" lang="diff-ts" mdxType="Editor">
{`// (...)

// Theme object.
const theme = createTheme({
    breakpoints,
    styles: {
        colors,
        typography,
        elements: {
            document: {
                // (...)
            },
+           myCustomElement: {
+               background: colors.color1,
+               border: \`1px solid \${colors.color1}\`,
+               borderRadius: 4,
+               color: colors.color6,
+           }
            button: {
                // (...)
            }
        }
    }
});`}
</Editor>
<Editor title="extensions/theme/theme-dark.ts" lang="diff-ts" mdxType="Editor">
{`// (...)

// Theme object.
const theme = createTheme({
    breakpoints,
    styles: {
        colors,
        typography,
        elements: {
            document: {
                // (...)
            },
+           myCustomElement: {
+               background: colors.color2,
+               border: \`1px solid \${colors.color2}\`,
+               borderRadius: 14,
+               color: colors.color7,
+           }
            button: {
                // (...)
            }
        }
    }
});`}
</Editor>
<_Heading level={3} id={"global-styles"} nextElement={{
      "type": "paragraph"
    }}>Global Styles</_Heading>
<p>{`Sometimes we might need to insert global CSS rules like resets or font faces. There are a couple of ways to do this.`}</p>
<p>{`The easiest way is to use Emotion’s `}<a parentName="p" {...{
        "href": "https://emotion.sh/docs/globals"
      }}><inlineCode parentName="a">{`Global`}</inlineCode></a>{` component, within a page layout React component. An example of this can be found in `}<strong parentName="p">{`Static page`}</strong>{` page layout. From the `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/v5.40.0/packages/cwp-template-aws/template/common/extensions/theme/src/layouts/pages/Static.tsx"
      }}><inlineCode parentName="a">{`Static.tsx`}</inlineCode></a>{` file:`}</p>
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
<p>{`Note that, since the above global styles are added as part of the `}<strong parentName="p">{`Static page`}</strong>{` page layout, they will only be applied to the pages that use this layout. Furthermore, note that these styles will only be applied when the page is being rendered on the public website, and not in the page editor. This is because the page editor only renders the page content, and not the page layout.`}</p>
<p>{`To resolve the above two issues, we can also introduce global styles via the `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/v5.40.0/packages/cwp-template-aws/template/common/extensions/theme/global.scss"
      }}><inlineCode parentName="a">{`global.scss`}</inlineCode></a>{` file. By doing this, we’re ensuring:`}</p>
<ol>
<li parentName="ol">{`the styles are applied to all pages, regardless of the page layout used`}</li>
<li parentName="ol">{`the styles are applied in both the public website and the page editor`}</li>
</ol>
<Alert type={"info"} mdxType="Alert">
<p>{`Note that the global styles introduced via the `}<a parentName="p" {...{
          "href": "https://github.com/webiny/webiny-js/blob/v5.40.0/packages/cwp-template-aws/template/common/extensions/theme/global.scss"
        }}><inlineCode parentName="a">{`global.scss`}</inlineCode></a>{` file can also have a visual impact on the Admin application. If you’ll be using this approach, double check that the styles don’t affect the Admin application in unintended ways.`}</p>
</Alert>
<p>{`Alternatively, sometimes we may need to introduce global styles only on the page content (document) level. More on this in the following section.`}</p>
<_Heading level={4} id={"global-document-styles"} nextElement={{
      "type": "paragraph"
    }}>Global Document Styles</_Heading>
<p>{`Sometimes we may need to introduce global styles only on the page content (document) level. For example, by default, in the `}<inlineCode parentName="p">{`styles.elements.document`}</inlineCode>{` object, we have the following styles that define how `}<a parentName="p" {...{
        "href": "#"
      }}>{`links`}</a>{`, `}<strong parentName="p">{`bold`}</strong>{` and `}<em parentName="p">{`italic`}</em>{` text should look like:`}</p>
<Editor title="extensions/theme/src/theme.ts" lang="diff-ts" mdxType="Editor">
{`// (...)

// Theme object.
const theme = createTheme({
    breakpoints,
    styles: {
        colors,
        typography,
        elements: {
            document: {
+               a: { color: colors.color1 },
+               b: { fontWeight: "bold" },
+               i: { fontStyle: "italic" }
            },
            button: {
                // (...)
            }
        }
    }
});`}
</Editor>
<p>{`With this approach, we can target anything that’s rendered within the page content (document) area. The styles will be applied to all pages, regardless of the page layout used. Furthermore, the styles will be applied in both the public website and the page editor.`}</p>
<Alert type={"info"} mdxType="Alert">
<p>{`Pages created via Page Builder’s page editor consist of multiple page elements, structured in a parent-child hierarchy. The `}<strong parentName="p">{`document`}</strong>{` page element is always the top-most element in this hierarchy, similarly to how the `}<inlineCode parentName="p">{`<html>`}</inlineCode>{` element is the top-most element in the DOM.`}</p>
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