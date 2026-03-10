/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Image } from "@/components/Image";
import bannerComponentEditor from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/6.0.x/website-builder/assets/banner-component-editor.png";
import bannerComponentRendered from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/6.0.x/website-builder/assets/banner-component-rendered.png";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.64f62e.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Create Custom Component",
  "description": "Build custom editor components with React and register them with the Website Builder SDK.",
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
  "title": "Prerequisites",
  "slug": "prerequisites",
  "children": []
}, {
  "title": "Component Anatomy",
  "slug": "component-anatomy",
  "children": []
}, {
  "title": "The editorComponents Array",
  "slug": "the-editor-components-array",
  "children": []
}, {
  "title": "Component Groups",
  "slug": "component-groups",
  "children": []
}, {
  "title": "Building a Custom Component",
  "slug": "building-a-custom-component",
  "children": [{
    "title": "Create the React Component",
    "slug": "create-the-react-component",
    "children": []
  }, {
    "title": "Register the Component",
    "slug": "register-the-component",
    "children": []
  }, {
    "title": "Test the Component",
    "slug": "test-the-component",
    "children": []
  }]
}, {
  "title": "Input Types",
  "slug": "input-types",
  "children": []
}, {
  "title": "Example: Select Input",
  "slug": "example-select-input",
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






<Alert type="success" title="WHAT YOU'LL LEARN" mdxType="Alert">
<ul>
<li parentName="ul">{`What editor components are and how they work`}</li>
<li parentName="ul">{`How to create a React component that receives editor inputs`}</li>
<li parentName="ul">{`How to register components with `}<inlineCode parentName="li">{`createComponent()`}</inlineCode>{` and input types`}</li>
<li parentName="ul">{`How to organize components into groups in the editor palette`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`Editor components are the building blocks that content editors use to compose pages in the Website Builder. An editor component combines a React component (your code, your styles) with a manifest that tells the editor what inputs to expose in the sidebar.`}</p>
<p>{`When editors drag a component onto the canvas, they’re interacting with your real React component—Webiny has no knowledge of your component’s implementation or styling.`}</p>
<_Heading level={2} id={"prerequisites"} nextElement={{
      "type": "list",
      "ordered": false,
      "start": null,
      "spread": false
    }}>Prerequisites</_Heading>
<ul>
<li parentName="ul">{`Running Next.js starter kit (see `}<_Link href="/docs/website-builder/setup-nextjs">{`Setup Next.js Project`}</_Link>{`)`}</li>
<li parentName="ul">{`Webiny Admin app accessible (locally via `}<inlineCode parentName="li">{`yarn webiny watch admin`}</inlineCode>{` or deployed CloudFront URL)`}</li>
</ul>
<_Heading level={2} id={"component-anatomy"} nextElement={{
      "type": "paragraph"
    }}>Component Anatomy</_Heading>
<p>{`An editor component has two parts:`}</p>
<p><strong parentName="p">{`The React component`}</strong>{` — Your regular React code that renders UI. It receives editor-configured values via an `}<inlineCode parentName="p">{`inputs`}</inlineCode>{` prop, typed with `}<inlineCode parentName="p">{`ComponentProps<YourInputs>`}</inlineCode>{` from the SDK.`}</p>
<p><strong parentName="p">{`The manifest`}</strong>{` — Metadata that tells the editor about the component: its name, label, group, and what inputs (configurable props) it exposes to the editor sidebar.`}</p>
<p>{`You combine both using `}<inlineCode parentName="p">{`createComponent()`}</inlineCode>{` from `}<inlineCode parentName="p">{`@webiny/website-builder-nextjs`}</inlineCode>{`, then add the result to the `}<inlineCode parentName="p">{`editorComponents`}</inlineCode>{` array that you pass to `}<inlineCode parentName="p">{`DocumentRenderer`}</inlineCode>{`.`}</p>
<_Heading level={2} id={"the-editor-components-array"} nextElement={{
      "type": "paragraph"
    }}>The editorComponents Array</_Heading>
<p>{`The starter kit includes an `}<inlineCode parentName="p">{`editorComponents`}</inlineCode>{` array in `}<inlineCode parentName="p">{`src/editorComponents/index.tsx`}</inlineCode>{`:`}</p>
<Editor title="src/editorComponents/index.tsx" lang="tsx" mdxType="Editor">
{`"use client";
import { createComponent } from "@webiny/website-builder-nextjs";
import { Hero1 } from "./Hero1";

export const editorComponents = [
  createComponent(Hero1, {
    name: "Webiny/Hero",
    label: "Hero #1",
    inputs: []
  })
];`}
</Editor>
<p>{`Key points:`}</p>
<ul>
<li parentName="ul">{`The file is marked `}<inlineCode parentName="li">{`"use client"`}</inlineCode>{` — component registrations must run on the client because the SDK communicates with the editor via the browser.`}</li>
<li parentName="ul"><inlineCode parentName="li">{`createComponent()`}</inlineCode>{` takes the React component as its first argument and the manifest as the second.`}</li>
<li parentName="ul"><inlineCode parentName="li">{`name`}</inlineCode>{` is a namespaced string — use a consistent convention like `}<inlineCode parentName="li">{`"YourNamespace/ComponentName"`}</inlineCode>{`. Component names are stored in page documents, so treat them as stable identifiers. Renaming a component breaks existing pages.`}</li>
<li parentName="ul"><inlineCode parentName="li">{`inputs`}</inlineCode>{` defines the configurable props that appear in the editor sidebar. An empty array means no inputs.`}</li>
<li parentName="ul"><inlineCode parentName="li">{`group`}</inlineCode>{` (optional) links the component to a named component group in the editor palette.`}</li>
</ul>
<_Heading level={2} id={"component-groups"} nextElement={{
      "type": "paragraph"
    }}>Component Groups</_Heading>
<p>{`Component groups organize the editor’s component palette into sections. They’re registered in `}<inlineCode parentName="p">{`src/contentSdk/groups.ts`}</inlineCode>{`:`}</p>
<Editor title="src/contentSdk/groups.ts" lang="typescript" mdxType="Editor">
{`import { registerComponentGroup, type ComponentManifest } from "@webiny/website-builder-nextjs";

export const registerComponentGroups = () => {
  registerComponentGroup({
    name: "basic",
    label: "Basic",
    description: "Components for simple content creation"
  });
  registerComponentGroup({
    name: "custom",
    label: "Custom",
    description: "Assorted custom components",
    filter: (component: ComponentManifest) => !component.group
  });
};`}
</Editor>
<p>{`The `}<inlineCode parentName="p">{`filter`}</inlineCode>{` option on the “custom” group is a catch-all: it collects any component that doesn’t have an explicit `}<inlineCode parentName="p">{`group`}</inlineCode>{` set in its manifest.`}</p>
<_Heading level={2} id={"building-a-custom-component"} nextElement={{
      "type": "paragraph"
    }}>Building a Custom Component</_Heading>
<p>{`Let’s build a `}<strong parentName="p">{`Banner`}</strong>{` component—a full-width colored strip with a headline and a call-to-action button link.`}</p>
<_Heading level={3} id={"create-the-react-component"} nextElement={{
      "type": "paragraph"
    }}>Create the React Component</_Heading>
<p>{`Create `}<inlineCode parentName="p">{`src/editorComponents/Banner.tsx`}</inlineCode>{`:`}</p>
<Editor title="src/editorComponents/Banner.tsx" lang="tsx" mdxType="Editor">
{`import React from "react";
import { ComponentProps } from "@webiny/website-builder-nextjs";

interface BannerInputs {
  headline: string;
  ctaLabel: string;
  ctaUrl: string;
}

export function Banner({ inputs: { headline, ctaLabel, ctaUrl } }: ComponentProps<BannerInputs>) {
  return (
    <div className="bg-primary py-12 px-6 text-center text-white">
      <h2 className="text-3xl font-bold mb-4">{headline}</h2>
      {ctaLabel && ctaUrl && (
        <a
          href={ctaUrl}
          className="inline-block bg-white text-primary font-semibold px-6 py-3 rounded-md hover:bg-white/80 transition-colors"
        >
          {ctaLabel}
        </a>
      )}
    </div>
  );
}`}
</Editor>
<p>{`Always type your component with `}<inlineCode parentName="p">{`ComponentProps<YourInputs>`}</inlineCode>{` from `}<inlineCode parentName="p">{`@webiny/website-builder-nextjs`}</inlineCode>{`. Without it, TypeScript won’t know the shape of the `}<inlineCode parentName="p">{`inputs`}</inlineCode>{` prop.`}</p>
<_Heading level={3} id={"register-the-component"} nextElement={{
      "type": "paragraph"
    }}>Register the Component</_Heading>
<p>{`Add the Banner to `}<inlineCode parentName="p">{`src/editorComponents/index.tsx`}</inlineCode>{`:`}</p>
<Editor title="src/editorComponents/index.tsx" lang="tsx" mdxType="Editor">
{`"use client";
import { createComponent, createTextInput } from "@webiny/website-builder-nextjs";
import { Hero1 } from "./Hero1";
import { Banner } from "./Banner";

export const editorComponents = [
  createComponent(Hero1, {
    name: "Webiny/Hero",
    label: "Hero #1",
    inputs: []
  }),
  createComponent(Banner, {
    name: "Custom/Banner",
    label: "Banner",
    inputs: [
      createTextInput({
        name: "headline",
        label: "Headline",
        description: "The main headline text displayed on the banner.",
        defaultValue: "Ready to get started?"
      }),
      createTextInput({
        name: "ctaLabel",
        label: "Button Label",
        description: "The text displayed on the call-to-action button.",
        defaultValue: "Get started"
      }),
      createTextInput({
        name: "ctaUrl",
        label: "Button URL",
        description: "The URL the button links to.",
        defaultValue: "/"
      })
    ]
  })
];`}
</Editor>
<_Heading level={3} id={"test-the-component"} nextElement={{
      "type": "list",
      "ordered": true,
      "start": 1,
      "spread": false
    }}>Test the Component</_Heading>
<ol>
<li parentName="ol">{`In the Admin sidebar, navigate to `}<strong parentName="li">{`Website Builder → Pages`}</strong></li>
<li parentName="ol">{`Open an existing page or create a new one`}</li>
<li parentName="ol">{`In the component palette, look for the `}<strong parentName="li">{`Custom`}</strong>{` group—your `}<strong parentName="li">{`Banner`}</strong>{` component should be there`}</li>
<li parentName="ol">{`Drag it onto the canvas`}</li>
<li parentName="ol">{`Click the component to select it—the right sidebar will show the inputs: Headline, Button Label, and Button URL`}</li>
</ol>
<Image src={bannerComponentEditor} alt="The Banner component selected in the editor showing the Headline, Button Label, and Button URL inputs filled in on the right sidebar" mdxType="Image" />
<ol {...{
      "start": 6
    }}>
<li parentName="ol">{`Fill in the inputs and click `}<strong parentName="li">{`Publish`}</strong></li>
<li parentName="ol">{`Visit your Next.js app and refresh the page to see the rendered banner`}</li>
</ol>
<Image src={bannerComponentRendered} alt="The published page showing the Hero #1 component above and the Banner component below it" mdxType="Image" />
<_Heading level={2} id={"input-types"} nextElement={{
      "type": "paragraph"
    }}>Input Types</_Heading>
<p>{`The SDK exports a factory function for each input type:`}</p>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Function`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Use case`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`createTextInput`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`Single-line text, URLs, labels`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`createLongTextInput`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`Multi-line text`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`createNumberInput`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`Numeric values`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`createBooleanInput`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`Toggle / checkbox`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`createColorInput`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`Color picker`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`createDateInput`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`Date / date-time picker`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`createSelectInput`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`Dropdown with predefined options`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`createRadioInput`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`Radio button group`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`createTagsInput`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`List of tags`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`createObjectInput`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`Nested object (group of sub-inputs)`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`createLexicalInput`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`Rich text (Lexical editor)`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`createFileInput`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`File / media picker`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`createSlotInput`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`Slot for nesting other components`}</td>
</tr>
</tbody>
</table>
<_Heading level={2} id={"example-select-input"} nextElement={{
      "type": "paragraph"
    }}>Example: Select Input</_Heading>
<p>{`To add a color theme selector to the Banner component:`}</p>
<Editor title="src/editorComponents/index.tsx" lang="tsx" mdxType="Editor">
{`import {
  createComponent,
  createTextInput,
  createSelectInput
} from "@webiny/website-builder-nextjs";

createComponent(Banner, {
  name: "Custom/Banner",
  label: "Banner",
  inputs: [
    createTextInput({
      name: "headline",
      label: "Headline",
      description: "The main headline text displayed on the banner.",
      defaultValue: "Ready to get started?"
    }),
    createSelectInput({
      name: "colorTheme",
      label: "Color Theme",
      description: "Choose the banner color scheme.",
      defaultValue: "primary",
      options: [
        { value: "primary", label: "Primary" },
        { value: "secondary", label: "Secondary" },
        { value: "success", label: "Success" }
      ]
    }),
    createTextInput({
      name: "ctaLabel",
      label: "Button Label",
      description: "The text displayed on the call-to-action button.",
      defaultValue: "Get started"
    }),
    createTextInput({
      name: "ctaUrl",
      label: "Button URL",
      description: "The URL the button links to.",
      defaultValue: "/"
    })
  ]
});`}
</Editor>
<p>{`Update the Banner component to use the `}<inlineCode parentName="p">{`colorTheme`}</inlineCode>{` input:`}</p>
<Editor title="src/editorComponents/Banner.tsx" lang="tsx" mdxType="Editor">
{`interface BannerInputs {
  headline: string;
  colorTheme: "primary" | "secondary" | "success";
  ctaLabel: string;
  ctaUrl: string;
}

export function Banner({
  inputs: { headline, colorTheme, ctaLabel, ctaUrl }
}: ComponentProps<BannerInputs>) {
  const bgColorClass =
    colorTheme === "primary"
      ? "bg-primary"
      : colorTheme === "secondary"
        ? "bg-secondary"
        : "bg-success";

  return (
    <div className={\`\${bgColorClass} py-12 px-6 text-center text-white\`}>
      <h2 className="text-3xl font-bold mb-4">{headline}</h2>
      {ctaLabel && ctaUrl && (
        <a
          href={ctaUrl}
          className="inline-block bg-white text-primary font-semibold px-6 py-3 rounded-md hover:bg-white/80 transition-colors"
        >
          {ctaLabel}
        </a>
      )}
    </div>
  );
}`}
</Editor>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;