/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Image } from "@/components/Image";
import editorColorPicker from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/6.0.x/website-builder/assets/editor-color-picker.png";
import greenThemeRendered from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/6.0.x/website-builder/assets/green-theme-rendered.png";
import editorDisplayHeading from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/6.0.x/website-builder/assets/editor-display-heading.png";
import editorMobileView from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/6.0.x/website-builder/assets/editor-mobile-view.png";
import editorClampSizeDiff from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/6.0.x/website-builder/assets/editor-clamp-size-diff.png";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.64f62e.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Configure Theme",
  "description": "Customize colors, typography, and responsive styling in the Website Builder theme system.",
  "type": "docs",
  "showPageHeader": true,
  "fullWidth": false,
  "version": "6.0.x"
};
const docsearch = {
  "type": "docs",
  "weight": 100,
  "versions": ["latest", "6.0.x"]
};
const navigation = _navigation;
const versions = _versions;
const tableOfContents = [{
  "title": "Overview",
  "slug": "overview",
  "children": []
}, {
  "title": "Theme Architecture",
  "slug": "theme-architecture",
  "children": []
}, {
  "title": "Theme CSS",
  "slug": "theme-css",
  "children": []
}, {
  "title": "Tailwind Bridge",
  "slug": "tailwind-bridge",
  "children": []
}, {
  "title": "Theme Registration",
  "slug": "theme-registration",
  "children": []
}, {
  "title": "Customizing Colors",
  "slug": "customizing-colors",
  "children": []
}, {
  "title": "Customizing Typography",
  "slug": "customizing-typography",
  "children": []
}, {
  "title": "Loading Custom Fonts",
  "slug": "loading-custom-fonts",
  "children": [{
    "title": "Matching Font Weights",
    "slug": "matching-font-weights",
    "children": []
  }]
}, {
  "title": "Responsive Styling",
  "slug": "responsive-styling",
  "children": [{
    "title": "Clamp() Sizing Differences",
    "slug": "clamp-sizing-differences",
    "children": []
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









<Alert type="success" title="WHAT YOU'LL LEARN" mdxType="Alert">
<ul>
<li parentName="ul">{`How the theme system connects `}<inlineCode parentName="li">{`theme.css`}</inlineCode>{`, `}<inlineCode parentName="li">{`theme.ts`}</inlineCode>{`, and the editor`}</li>
<li parentName="ul">{`How to customize colors and typography that editors can use`}</li>
<li parentName="ul">{`How to use CSS variables and `}<inlineCode parentName="li">{`clamp()`}</inlineCode>{` for responsive styling`}</li>
<li parentName="ul">{`How to load custom fonts across your app and the editor`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`The Website Builder theme defines the visual language that content editors work with—the colors they can pick, the typography styles they can apply, and how text scales responsively across devices. The theme is defined in your Next.js project and injected into both your app and the Admin editor so they share identical styling.`}</p>
<_Heading level={2} id={"theme-architecture"} nextElement={{
      "type": "paragraph"
    }}>Theme Architecture</_Heading>
<p>{`The theme system has three files that work together:`}</p>
<p><strong parentName="p"><inlineCode parentName="strong">{`theme.css`}</inlineCode></strong>{` — Defines CSS custom properties (variables) for colors and CSS classes for typography styles. This file is injected into both the Next.js app and the Admin editor iframe.`}</p>
<p><strong parentName="p"><inlineCode parentName="strong">{`theme.ts`}</inlineCode></strong>{` — Calls `}<inlineCode parentName="p">{`createTheme()`}</inlineCode>{` to build a typed theme object that tells the editor which colors and typography styles are available in its toolbar and color picker.`}</p>
<p><strong parentName="p"><inlineCode parentName="strong">{`tailwind.css`}</inlineCode></strong>{` — Bridges the Website Builder CSS variables to Tailwind’s color token system, enabling `}<inlineCode parentName="p">{`bg-primary`}</inlineCode>{`, `}<inlineCode parentName="p">{`text-primary`}</inlineCode>{`, etc. in your components.`}</p>
<p>{`A webpack plugin (`}<inlineCode parentName="p">{`injectThemeCss`}</inlineCode>{` in `}<inlineCode parentName="p">{`next.config.ts`}</inlineCode>{`) reads `}<inlineCode parentName="p">{`theme.css`}</inlineCode>{` at build time and makes its contents available to `}<inlineCode parentName="p">{`createTheme()`}</inlineCode>{` via the `}<inlineCode parentName="p">{`__THEME_CSS__`}</inlineCode>{` global.`}</p>
<_Heading level={2} id={"theme-css"} nextElement={{
      "type": "paragraph"
    }}>Theme CSS</_Heading>
<p>{`The `}<inlineCode parentName="p">{`theme.css`}</inlineCode>{` file defines all semantic color variables and typography classes:`}</p>
<Editor title="src/theme/theme.css" lang="css" mdxType="Editor">
{`@import "@webiny/website-builder-nextjs/lexical.css";

:root {
  --wb-theme-color-primary: #4632f5;
  --wb-theme-color-secondary: #00ccb0;
  --wb-theme-color-background: #ffffff;
  --wb-theme-color-surface: #f9f9f9;
  --wb-theme-color-text-base: #0a0a0a;
  --wb-theme-color-text-muted: #6b7280;
  --wb-theme-color-border: #e5e7eb;
  --wb-theme-color-success: #16a34a;
  --wb-theme-color-warning: #d97706;
  --wb-theme-color-error: #dc2626;
  --wb-theme-font-family: "Inter", sans-serif;
}

.wb-heading-1 {
  font-weight: 700;
  line-height: 1.2;
  font-size: clamp(2rem, 1.5rem + 1.5vw, 3rem); /* ~32px → 48px */
}

.wb-paragraph-1 {
  font-weight: 400;
  line-height: 1.6;
  font-size: clamp(0.95rem, 0.9rem + 0.25vw, 1rem);
}`}
</Editor>
<p>{`CSS variables use semantic names (`}<inlineCode parentName="p">{`--wb-theme-color-primary`}</inlineCode>{`, `}<inlineCode parentName="p">{`--wb-theme-color-text-base`}</inlineCode>{`). Typography classes use `}<inlineCode parentName="p">{`clamp()`}</inlineCode>{` for fluid responsive sizing without media queries.`}</p>
<_Heading level={2} id={"tailwind-bridge"} nextElement={{
      "type": "paragraph"
    }}>Tailwind Bridge</_Heading>
<p>{`The `}<inlineCode parentName="p">{`tailwind.css`}</inlineCode>{` file maps Website Builder CSS variables to Tailwind’s color tokens:`}</p>
<Editor title="src/theme/tailwind.css" lang="css" mdxType="Editor">
{`@import "tailwindcss";

@theme inline {
  --font-sans: InterVariable, sans-serif;
  --color-primary: var(--wb-theme-color-primary);
  --color-secondary: var(--wb-theme-color-secondary);
  --color-text-base: var(--wb-theme-color-text-base);
  --color-text-muted: var(--wb-theme-color-text-muted);
  /* ...and so on */
}`}
</Editor>
<p>{`This bridge enables `}<inlineCode parentName="p">{`bg-primary`}</inlineCode>{`, `}<inlineCode parentName="p">{`text-primary`}</inlineCode>{`, and other Tailwind utilities in your components. They resolve to the same values as the Website Builder theme variables, keeping the editor preview and live site in sync.`}</p>
<_Heading level={2} id={"theme-registration"} nextElement={{
      "type": "paragraph"
    }}>Theme Registration</_Heading>
<p>{`The `}<inlineCode parentName="p">{`theme.ts`}</inlineCode>{` file exports a theme object that the SDK uses to populate the editor’s color picker and typography toolbar:`}</p>
<Editor title="src/theme/theme.ts" lang="typescript" mdxType="Editor">
{`import { createTheme } from "@webiny/website-builder-nextjs";

declare const __THEME_CSS__: string;

export const css = __THEME_CSS__;

export const theme = createTheme({
  css,
  fonts: ["https://fonts.googleapis.com/css2?family=Inter&display=swap"],
  colors: [
    { id: "color-primary", label: "Primary", value: "var(--wb-theme-color-primary)" },
    { id: "color-secondary", label: "Secondary", value: "var(--wb-theme-color-secondary)" },
    { id: "color-background", label: "Background", value: "var(--wb-theme-color-background)" },
    { id: "color-surface", label: "Surface", value: "var(--wb-theme-color-surface)" },
    { id: "color-text-base", label: "Text", value: "var(--wb-theme-color-text-base)" },
    { id: "color-text-muted", label: "Text Muted", value: "var(--wb-theme-color-text-muted)" },
    { id: "color-border", label: "Border", value: "var(--wb-theme-color-border)" },
    { id: "color-success", label: "Success", value: "var(--wb-theme-color-success)" },
    { id: "color-warning", label: "Warning", value: "var(--wb-theme-color-warning)" },
    { id: "color-error", label: "Error", value: "var(--wb-theme-color-error)" }
  ],
  typography: {
    headings: [
      { id: "heading1", label: "Heading 1", tag: "h1", className: "wb-heading-1" },
      { id: "heading2", label: "Heading 2", tag: "h2", className: "wb-heading-2" },
      { id: "heading3", label: "Heading 3", tag: "h3", className: "wb-heading-3" }
    ],
    paragraphs: [{ id: "paragraph1", label: "Paragraph 1", tag: "p", className: "wb-paragraph-1" }],
    quotes: [{ id: "quote", label: "Quote", tag: "blockquote", className: "wb-blockquote-1" }],
    lists: [
      { id: "list1", label: "List 1", tag: "ul", className: "wb-unordered-list-1" },
      { id: "list2", label: "List 2", tag: "ol", className: "wb-ordered-list-1" }
    ]
  }
});`}
</Editor>
<p>{`The `}<inlineCode parentName="p">{`colors`}</inlineCode>{` array populates the editor’s color picker. Each entry has an `}<inlineCode parentName="p">{`id`}</inlineCode>{`, `}<inlineCode parentName="p">{`label`}</inlineCode>{`, and `}<inlineCode parentName="p">{`value`}</inlineCode>{` (typically a CSS variable reference). The `}<inlineCode parentName="p">{`typography`}</inlineCode>{` object covers headings, paragraphs, quotes, and lists—each entry maps a CSS class to an HTML tag and a label shown in the editor toolbar.`}</p>
<Image src={editorColorPicker} alt="The Website Builder editor showing the color picker open with all theme colors available for selection" mdxType="Image" />
<p>{`The exported `}<inlineCode parentName="p">{`theme`}</inlineCode>{` and `}<inlineCode parentName="p">{`css`}</inlineCode>{` are imported in `}<inlineCode parentName="p">{`initializeContentSdk`}</inlineCode>{` and passed to `}<inlineCode parentName="p">{`contentSdk.init()`}</inlineCode>{`.`}</p>
<_Heading level={2} id={"customizing-colors"} nextElement={{
      "type": "paragraph"
    }}>Customizing Colors</_Heading>
<p>{`For colors that editors can pick in the Admin, follow a two-step pattern: define the color variable in `}<inlineCode parentName="p">{`theme.css`}</inlineCode>{`, then register it in the `}<inlineCode parentName="p">{`colors`}</inlineCode>{` array in `}<inlineCode parentName="p">{`theme.ts`}</inlineCode>{`.`}</p>
<p>{`To change the primary color:`}</p>
<Editor title="src/theme/theme.css" lang="css" mdxType="Editor">
{`:root {
  --wb-theme-color-primary: #16a34a; /* changed to green */
  --wb-theme-color-secondary: #15803d;
  /* ...other colors */
}`}
</Editor>
<p>{`The change propagates automatically to rendered pages, Tailwind tokens, and the Admin editor color picker.`}</p>
<Image src={greenThemeRendered} alt="The Next.js page rendered with a green theme after changing the primary and secondary color variables in theme.css" mdxType="Image" />
<p>{`For colors that are not meant to be selectable by editors (border radius, shadows, component-specific colors), define them directly in your component CSS or Tailwind classes—`}<inlineCode parentName="p">{`theme.ts`}</inlineCode>{` is not involved.`}</p>
<_Heading level={2} id={"customizing-typography"} nextElement={{
      "type": "paragraph"
    }}>Customizing Typography</_Heading>
<p>{`To add or modify a typography style, update both `}<inlineCode parentName="p">{`theme.css`}</inlineCode>{` and `}<inlineCode parentName="p">{`theme.ts`}</inlineCode>{`:`}</p>
<Editor title="src/theme/theme.css" lang="css" mdxType="Editor">
{`.wb-heading-display {
  font-family: var(--wb-theme-font-family);
  font-weight: 900;
  font-size: clamp(3rem, 2rem + 3vw, 5rem);
  line-height: clamp(3rem, 2rem + 3vw, 5rem);
  letter-spacing: -2px;
  color: var(--wb-theme-color-primary);
}`}
</Editor>
<Editor title="src/theme/theme.ts" lang="typescript" mdxType="Editor">
{`headings: [
  { id: "heading1", label: "Heading 1", tag: "h1", className: "wb-heading-1" },
  { id: "headingDisplay", label: "Display", tag: "h1", className: "wb-heading-display" }
  // ...
];`}
</Editor>
<p>{`The editor will now show “Display” as an option in the typography toolbar.`}</p>
<Image src={editorDisplayHeading} alt="The Website Builder editor showing the custom Display heading style applied to text in the rich text editor" mdxType="Image" />
<_Heading level={2} id={"loading-custom-fonts"} nextElement={{
      "type": "paragraph"
    }}>Loading Custom Fonts</_Heading>
<p>{`To switch fonts (e.g., from Inter to Geist), update four files:`}</p>
<p><strong parentName="p"><inlineCode parentName="strong">{`src/app/layout.tsx`}</inlineCode></strong>{` — swap the font import and config:`}</p>
<Editor title="src/app/layout.tsx" lang="typescript" mdxType="Editor">
{`import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"]
});`}
</Editor>
<p><strong parentName="p"><inlineCode parentName="strong">{`src/theme/tailwind.css`}</inlineCode></strong>{` — update the `}<inlineCode parentName="p">{`--font-sans`}</inlineCode>{` token:`}</p>
<Editor title="src/theme/tailwind.css" lang="css" mdxType="Editor">
{`--font-sans: Geist, sans-serif;`}
</Editor>
<p><strong parentName="p"><inlineCode parentName="strong">{`src/theme/theme.css`}</inlineCode></strong>{` — update the CSS variable:`}</p>
<Editor title="src/theme/theme.css" lang="css" mdxType="Editor">
{`--wb-theme-font-family: "Geist", sans-serif;`}
</Editor>
<p><strong parentName="p"><inlineCode parentName="strong">{`src/theme/theme.ts`}</inlineCode></strong>{` — update the `}<inlineCode parentName="p">{`fonts`}</inlineCode>{` array so the editor iframe loads the font:`}</p>
<Editor title="src/theme/theme.ts" lang="typescript" mdxType="Editor">
{`fonts: ["https://fonts.googleapis.com/css2?family=Geist&display=swap"],`}
</Editor>
<p>{`The `}<inlineCode parentName="p">{`fonts`}</inlineCode>{` array injects the font into the editor iframe, ensuring the Admin preview matches the live site.`}</p>
<_Heading level={3} id={"matching-font-weights"} nextElement={{
      "type": "paragraph"
    }}>Matching Font Weights</_Heading>
<p>{`If you load multiple font weights in `}<inlineCode parentName="p">{`layout.tsx`}</inlineCode>{`, include the full weight range in the `}<inlineCode parentName="p">{`fonts`}</inlineCode>{` URL. For example:`}</p>
<Editor title="src/app/layout.tsx" lang="typescript" mdxType="Editor">
{`const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  // ...
});`}
</Editor>
<p>{`The `}<inlineCode parentName="p">{`fonts`}</inlineCode>{` array must include the same range:`}</p>
<Editor title="src/theme/theme.ts" lang="typescript" mdxType="Editor">
{`fonts: ["https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"],`}
</Editor>
<p>{`Mismatched weights will cause text to render incorrectly in the editor—bold text may appear regular weight, or vice versa.`}</p>
<_Heading level={2} id={"responsive-styling"} nextElement={{
      "type": "paragraph"
    }}>Responsive Styling</_Heading>
<p>{`Typography classes use `}<inlineCode parentName="p">{`clamp()`}</inlineCode>{` for fluid responsive sizing out of the box. No media queries are needed for text scaling, though you can add them if finer control is required.`}</p>
<p>{`For layout inside your custom components, use Tailwind’s responsive prefixes as normal:`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`export function Banner({ inputs: { headline, ctaLabel, ctaUrl } }: ComponentProps<BannerInputs>) {
  return (
    <div className="bg-primary py-8 px-4 text-center text-white md:py-16 md:px-12">
      <h2 className="text-2xl font-bold md:text-4xl">{headline}</h2>
      <a href={ctaUrl} className="mt-4 inline-block px-4 py-2 text-sm md:px-8 md:py-3 md:text-base">
        {ctaLabel}
      </a>
    </div>
  );
}`}
</Editor>
<p>{`The editor has built-in device controls (desktop, tablet, mobile) in the toolbar for previewing responsive layouts directly in the Admin.`}</p>
<Image src={editorMobileView} alt="The Website Builder editor with the mobile device control active, showing the page rendered at a narrow mobile viewport width" mdxType="Image" />
<_Heading level={3} id={"clamp-sizing-differences"} nextElement={{
      "type": "paragraph"
    }}>Clamp() Sizing Differences</_Heading>
<p>{`When using `}<inlineCode parentName="p">{`clamp()`}</inlineCode>{` or `}<inlineCode parentName="p">{`rem`}</inlineCode>{`-based font sizes, text may appear at different sizes on the editor canvas versus the rich text editor sidebar. This is expected—`}<inlineCode parentName="p">{`clamp()`}</inlineCode>{` scales with viewport width, and `}<inlineCode parentName="p">{`rem`}</inlineCode>{` is relative to the root font size, both of which differ between the full-page canvas and the narrower sidebar container.`}</p>
<Image src={editorClampSizeDiff} alt="The Website Builder editor showing a heading that appears at a different size on the canvas versus the rich text editor sidebar" mdxType="Image" />
<p>{`This is CSS behavior, not a bug. If pixel-perfect consistency between the canvas and rich text editor is required, use fixed `}<inlineCode parentName="p">{`px`}</inlineCode>{` values instead of `}<inlineCode parentName="p">{`clamp()`}</inlineCode>{` or `}<inlineCode parentName="p">{`rem`}</inlineCode>{`:`}</p>
<Editor title="" lang="css" mdxType="Editor">
{`/* consistent across canvas and sidebar */
font-size: 64px;
line-height: 64px;`}
</Editor>
<p>{`In practice, this is rarely an issue—what matters is how the page looks on the published site.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;