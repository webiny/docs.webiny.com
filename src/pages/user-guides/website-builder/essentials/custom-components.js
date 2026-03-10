/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/6.0.x/website-builder/essentials/assets/custom-components/calloutbox-custom-component.png'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.9991ed.json";

import _versions from "@/data/versions.ff7084.json";

const Layout = _Layout;
const pageData = {
  "title": "Custom Components",
  "description": "Learn how to add custom components in the Next.js starter kit with Website Builder.",
  "type": "user-guides",
  "showPageHeader": true,
  "fullWidth": false,
  "version": "6.0.x"
};
const docsearch = {
  "type": "user-guides",
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
  "title": "Files to Inspect",
  "slug": "files-to-inspect",
  "children": []
}, {
  "title": "Step-by-Step: Create a New Custom Component",
  "slug": "step-by-step-create-a-new-custom-component",
  "children": [{
    "title": "Step 1: Add a React Component File",
    "slug": "step-1-add-a-react-component-file",
    "children": []
  }, {
    "title": "Step 2: Register the Component",
    "slug": "step-2-register-the-component",
    "children": []
  }, {
    "title": "Step 3: Ensure the Group Matches the One Registered",
    "slug": "step-3-ensure-the-group-matches-the-one-registered",
    "children": []
  }, {
    "title": "Step 4: Open the Editor to Verify the Component Appears in the Chosen Group and That It Is Functional.",
    "slug": "step-4-open-the-editor-to-verify-the-component-appears-in-the-chosen-group-and-that-it-is-functional",
    "children": []
  }]
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
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




<Alert type="success" title="WHAT YOU'LL LEARN" mdxType="Alert">
<ul>
<li parentName="ul">{`how to add custom components to your Website Builder`}</li>
</ul>
</Alert>
<p>{`In this tutorial, we explain how to create, register and use custom components in this Website Builder project.`}</p>
<ul>
<li parentName="ul">{`Step 1: Add a React component file`}</li>
<li parentName="ul">{`Step 2: Register the component`}</li>
<li parentName="ul">{`Step 3: Ensure the group matches the one registered`}</li>
<li parentName="ul">{`Step 4: Open the editor to verify the component appears in the chosen group`}</li>
</ul>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "list",
      "ordered": false,
      "start": null,
      "spread": false
    }}>Overview</_Heading>
<ul>
<li parentName="ul">{`Custom components live in the `}<inlineCode parentName="li">{`src/editorComponents`}</inlineCode>{` folder and are provided to the renderer via `}<inlineCode parentName="li">{`editorComponents`}</inlineCode>{` exported from `}<inlineCode parentName="li">{`src/editorComponents/index.tsx`}</inlineCode>{`.`}</li>
<li parentName="ul">{`The page renderer (`}<inlineCode parentName="li">{`src/components/DocumentRenderer.tsx`}</inlineCode>{`) passes `}<inlineCode parentName="li">{`editorComponents`}</inlineCode>{` to `}<inlineCode parentName="li">{`DocumentRenderer`}</inlineCode>{` from `}<inlineCode parentName="li">{`@webiny/website-builder-nextjs`}</inlineCode>{`.`}</li>
<li parentName="ul">{`Component groups (used in the editor UI) are registered in `}<inlineCode parentName="li">{`src/contentSdk/initializeContentSdk.ts`}</inlineCode>{` using `}<inlineCode parentName="li">{`registerComponentGroup`}</inlineCode>{`.`}</li>
</ul>
<_Heading level={2} id={"files-to-inspect"} nextElement={{
      "type": "list",
      "ordered": false,
      "start": null,
      "spread": false
    }}>Files to Inspect</_Heading>
<ul>
<li parentName="ul"><inlineCode parentName="li">{`src/editorComponents/index.tsx`}</inlineCode>{` — the central list of editor components and input definitions`}</li>
<li parentName="ul"><inlineCode parentName="li">{`src/components/DocumentRenderer.tsx`}</inlineCode>{` — how components are provided to the renderer`}</li>
<li parentName="ul"><inlineCode parentName="li">{`src/contentSdk/initializeContentSdk.ts`}</inlineCode>{` — where component groups are registered`}</li>
</ul>
<_Heading level={2} id={"step-by-step-create-a-new-custom-component"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Step-by-Step: Create a New Custom Component</_Heading>
<_Heading level={3} id={"step-1-add-a-react-component-file"} nextElement={{
      "type": "paragraph"
    }}>Step 1: Add a React Component File</_Heading>
<p>{`Add a React component file under `}<inlineCode parentName="p">{`src/editorComponents`}</inlineCode>{` (or a subfolder). In this tutorial we will create `}<inlineCode parentName="p">{`CalloutBox`}</inlineCode>{` component.`}</p>
<ul>
<li parentName="ul">{`Prefer exporting a named component (e.g. `}<inlineCode parentName="li">{`export const CalloutBox = () => { ... }`}</inlineCode>{`).`}</li>
<li parentName="ul">{`Keep the component as a standard React functional component.`}</li>
</ul>
<p>{`Example minimal component:`}</p>
<Editor title="src/editorComponents/CalloutBox.tsx" lang="diff-tsx" mdxType="Editor">
{`"use client"
import type { ComponentProps } from "@webiny/website-builder-nextjs";

interface LineProps {
    text: string
    highlighted: boolean
    breakAfter?: boolean
}

type CalloutBoxProps = ComponentProps<{
    "line-1": string
    "line-2": string
    style: 'default' | "primary"
}>

export function CalloutBox({ inputs }: CalloutBoxProps) {

    const lines = [
        { text: inputs['line-1'], highlighted: true },
        { text: inputs['line-2'], highlighted: false },
    ];

    return (
        <div className={\`
            inline-block 
            p-4 md:p-8 lg:p-12 
            border
            -mb-px
            w-full 
            border-border bg-background 
        \`}>
            <h3 className={'max-w-5xl m-0 font-bold text-lg md:text-4xl lg:text-6xl/16 tracking-tighter text-balance'}>
            {lines.map((line, index) => {
                return (
                    <div
                        key={index}
                        className={\`
                         
                        \${line.highlighted ? 'text-foreground' : 'text-muted-foreground/60'}
                    \`}
                    >
                    {line.text}
                    </div>
                )
            })}
            </h3>
        </div>
    )
}`}
</Editor>
<_Heading level={3} id={"step-2-register-the-component"} nextElement={{
      "type": "paragraph"
    }}>Step 2: Register the Component</_Heading>
<p>{`Define editor inputs and register the component in `}<inlineCode parentName="p">{`src/editorComponents/index.tsx`}</inlineCode>{`.`}</p>
<ul>
<li parentName="ul">{`Use `}<inlineCode parentName="li">{`createComponent`}</inlineCode>{` from `}<inlineCode parentName="li">{`@webiny/website-builder-nextjs`}</inlineCode>{` to register the component with `}<inlineCode parentName="li">{`name`}</inlineCode>{`, `}<inlineCode parentName="li">{`label`}</inlineCode>{`, `}<inlineCode parentName="li">{`group`}</inlineCode>{` and `}<inlineCode parentName="li">{`inputs`}</inlineCode>{`.`}</li>
<li parentName="ul">{`Use input helpers such as `}<inlineCode parentName="li">{`createTextInput`}</inlineCode>{`, `}<inlineCode parentName="li">{`createLongTextInput`}</inlineCode>{`, `}<inlineCode parentName="li">{`createLexicalInput`}</inlineCode>{`, `}<inlineCode parentName="li">{`createFileInput`}</inlineCode>{`, `}<inlineCode parentName="li">{`createSelectInput`}</inlineCode>{`, `}<inlineCode parentName="li">{`createSlotInput`}</inlineCode>{`.`}</li>
</ul>
<p>{`Example registration snippet (add to `}<inlineCode parentName="p">{`src/editorComponents/index.tsx`}</inlineCode>{`):`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`import {
  createComponent,
  createTextInput,
  createLongTextInput
} from "@webiny/website-builder-nextjs";
import {CalloutBox} from "./CalloutBox";


		createComponent(CalloutBox, {
			name: "Webiny/CalloutBox",
			label: "Callout Box",
			group: "basic",
			inputs: [
				createLongTextInput({
					name: "line-1",
					label: "Line 1 Text",
					defaultValue: "Your Ultimate",
					required: true
				}),
				createLongTextInput({
					name: "line-2",
					label: "Line 2 Text",
					defaultValue: "Headless CMS",
					required: true
				})
			]
		}),`}
</Editor>
<p>{`Notes:`}</p>
<ul>
<li parentName="ul">{`The `}<inlineCode parentName="li">{`name`}</inlineCode>{` property defines the unique editor identifier (used by the editor to save/load the block).`}</li>
<li parentName="ul">{`The `}<inlineCode parentName="li">{`group`}</inlineCode>{` should match a component group registered in `}<inlineCode parentName="li">{`src/contentSdk/initializeContentSdk`}</inlineCode>{` (e.g., `}<inlineCode parentName="li">{`custom`}</inlineCode>{`, `}<inlineCode parentName="li">{`basic`}</inlineCode>{`).`}</li>
</ul>
<p><strong parentName="p">{`How inputs map to component props`}</strong></p>
<ul>
<li parentName="ul">{`When the editor renders the page, the `}<inlineCode parentName="li">{`DocumentRenderer`}</inlineCode>{` will render your component and pass the block data as props.`}</li>
<li parentName="ul">{`Typical convention: input names map to prop names. For example, `}<inlineCode parentName="li">{`title`}</inlineCode>{` becomes `}<inlineCode parentName="li">{`props.title`}</inlineCode>{` inside your component.`}</li>
<li parentName="ul">{`For slot inputs (`}<inlineCode parentName="li">{`createSlotInput`}</inlineCode>{`) the renderer will pass an array of nested blocks which you should render using `}<inlineCode parentName="li">{`children`}</inlineCode>{` or a dedicated renderer.`}</li>
</ul>
<_Heading level={3} id={"step-3-ensure-the-group-matches-the-one-registered"} nextElement={{
      "type": "list",
      "ordered": false,
      "start": null,
      "spread": false
    }}>Step 3: Ensure the Group Matches the One Registered</_Heading>
<ul>
<li parentName="ul">{`Component groups (editor categories) are registered in `}<inlineCode parentName="li">{`src/contentSdk/initializeContentSdk.ts`}</inlineCode>{` with `}<inlineCode parentName="li">{`registerComponentGroup`}</inlineCode>{`.`}</li>
<li parentName="ul">{`Pick an existing group (`}<inlineCode parentName="li">{`basic`}</inlineCode>{`, `}<inlineCode parentName="li">{`sample`}</inlineCode>{`) or add a new one in `}<inlineCode parentName="li">{`initializeContentSdk.ts`}</inlineCode>{`. `}</li>
</ul>
<p>{`In this tutorial, we used an existing group, but if you ned to create a new one, for example, a new `}<inlineCode parentName="p">{`Demo Group`}</inlineCode>{` add the following to `}<inlineCode parentName="p">{`initializeContentSdk.ts`}</inlineCode>{`:`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`registerComponentGroup({
  name: "demo",
  label: "Demo Group",
  description: "Demo components"
});`}
</Editor>
<p>{`Note: the order in which the Component groups show in the Website builder depends on the order in which they were added to the file above.`}</p>
<Alert type="success" title="Tips and best practices" mdxType="Alert">
<ul>
<li parentName="ul">{`Keep components presentation-focused; prefer receiving plain data from inputs rather than coupling to editor APIs inside the component.`}</li>
<li parentName="ul">{`For rich text, prefer `}<inlineCode parentName="li">{`createLexicalInput`}</inlineCode>{` where content is saved as Lexical nodes and will be rendered by `}<inlineCode parentName="li">{`DocumentRenderer`}</inlineCode>{`.`}</li>
<li parentName="ul">{`Use `}<inlineCode parentName="li">{`createSlotInput`}</inlineCode>{` to allow nesting arbitrary content inside your block.`}</li>
<li parentName="ul">{`Keep components SSR-friendly. Use client-only code (like browser-only libs) inside a child component or guarded by
dynamic import to avoid SSR issues.`}</li>
</ul>
</Alert>
<_Heading level={3} id={"step-4-open-the-editor-to-verify-the-component-appears-in-the-chosen-group-and-that-it-is-functional"} nextElement={{
      "type": "list",
      "ordered": false,
      "start": null,
      "spread": false
    }}>Step 4: Open the Editor to Verify the Component Appears in the Chosen Group and That It Is Functional.</_Heading>
<ul>
<li parentName="ul">{`Run the site and open a new Page in the editor to verify the component appears in the chosen group.`}</li>
<li parentName="ul">{`Drag and drop the new component in the Page to validate it is functional.`}</li>
</ul>
<Image src={_Image1} alt={"Callout Box Custom Component"} mdxType="Image" />
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;