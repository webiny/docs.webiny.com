/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { SymbolList } from "@/components/SymbolList";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.64f62e.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Lexical Editor",
  "description": "Website Builder Lexical editor config",
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
  "title": "Divider",
  "slug": "divider",
  "children": []
}, {
  "title": "DropDown",
  "slug": "drop-down",
  "children": []
}, {
  "title": "DropDownItem",
  "slug": "drop-down-item",
  "children": []
}, {
  "title": "getNodeFromSelection",
  "slug": "get-node-from-selection",
  "children": []
}, {
  "title": "Klass",
  "slug": "klass",
  "children": []
}, {
  "title": "LexicalHtmlRenderer",
  "slug": "lexical-html-renderer",
  "children": []
}, {
  "title": "LexicalNode",
  "slug": "lexical-node",
  "children": []
}, {
  "title": "useCurrentElement",
  "slug": "use-current-element",
  "children": []
}, {
  "title": "useCurrentSelection",
  "slug": "use-current-selection",
  "children": []
}, {
  "title": "useDeriveValueFromSelection",
  "slug": "use-derive-value-from-selection",
  "children": []
}, {
  "title": "useFontColorPicker",
  "slug": "use-font-color-picker",
  "children": []
}, {
  "title": "useIsMounted",
  "slug": "use-is-mounted",
  "children": []
}, {
  "title": "useLexicalEditorConfig",
  "slug": "use-lexical-editor-config",
  "children": []
}, {
  "title": "useRichTextEditor",
  "slug": "use-rich-text-editor",
  "children": []
}, {
  "title": "useTextAlignmentAction",
  "slug": "use-text-alignment-action",
  "children": []
}, {
  "title": "useTypographyAction",
  "slug": "use-typography-action",
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
<li parentName="ul">{`What is exported from `}<inlineCode parentName="li">{`webiny/admin/website-builder/lexical`}</inlineCode>{`?`}</li>
<li parentName="ul">{`How to import and use each exported item?`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`This page documents everything exported from `}<inlineCode parentName="p">{`webiny/admin/website-builder/lexical`}</inlineCode>{`. Import any of the items below directly from this path in your Webiny extensions.`}</p>
<SymbolList symbols={[{
      name: "Divider",
      anchor: "divider"
    }, {
      name: "DropDown",
      anchor: "drop-down"
    }, {
      name: "DropDownItem",
      anchor: "drop-down-item"
    }, {
      name: "getNodeFromSelection",
      anchor: "get-node-from-selection"
    }, {
      name: "Klass",
      anchor: "klass"
    }, {
      name: "LexicalHtmlRenderer",
      anchor: "lexical-html-renderer"
    }, {
      name: "LexicalNode",
      anchor: "lexical-node"
    }, {
      name: "useCurrentElement",
      anchor: "use-current-element"
    }, {
      name: "useCurrentSelection",
      anchor: "use-current-selection"
    }, {
      name: "useDeriveValueFromSelection",
      anchor: "use-derive-value-from-selection"
    }, {
      name: "useFontColorPicker",
      anchor: "use-font-color-picker"
    }, {
      name: "useIsMounted",
      anchor: "use-is-mounted"
    }, {
      name: "useLexicalEditorConfig",
      anchor: "use-lexical-editor-config"
    }, {
      name: "useRichTextEditor",
      anchor: "use-rich-text-editor"
    }, {
      name: "useTextAlignmentAction",
      anchor: "use-text-alignment-action"
    }, {
      name: "useTypographyAction",
      anchor: "use-typography-action"
    }]} mdxType="SymbolList" />
<_Heading level={2} id={"divider"} nextElement={{
      "type": "paragraph"
    }}><code>Divider</code></_Heading>
<p><strong parentName="p">{`Export`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/website-builder/lexical`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { Divider } from "webiny/admin/website-builder/lexical";`}
</Editor>
<_Heading level={2} id={"drop-down"} nextElement={{
      "type": "paragraph"
    }}><code>DropDown</code></_Heading>
<p><strong parentName="p">{`Export`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/website-builder/lexical`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { DropDown } from "webiny/admin/website-builder/lexical";`}
</Editor>
<_Heading level={2} id={"drop-down-item"} nextElement={{
      "type": "paragraph"
    }}><code>DropDownItem</code></_Heading>
<p><strong parentName="p">{`Export`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/website-builder/lexical`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { DropDownItem } from "webiny/admin/website-builder/lexical";`}
</Editor>
<_Heading level={2} id={"get-node-from-selection"} nextElement={{
      "type": "paragraph"
    }}><code>getNodeFromSelection</code></_Heading>
<p><strong parentName="p">{`Export`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/website-builder/lexical`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { getNodeFromSelection } from "webiny/admin/website-builder/lexical";`}
</Editor>
<_Heading level={2} id={"klass"} nextElement={{
      "type": "paragraph"
    }}><code>Klass</code></_Heading>
<p><strong parentName="p">{`Type`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/website-builder/lexical`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import type { Klass } from "webiny/admin/website-builder/lexical";`}
</Editor>
<_Heading level={2} id={"lexical-html-renderer"} nextElement={{
      "type": "paragraph"
    }}><code>LexicalHtmlRenderer</code></_Heading>
<p><strong parentName="p">{`Export`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/website-builder/lexical`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { LexicalHtmlRenderer } from "webiny/admin/website-builder/lexical";`}
</Editor>
<_Heading level={2} id={"lexical-node"} nextElement={{
      "type": "paragraph"
    }}><code>LexicalNode</code></_Heading>
<p><strong parentName="p">{`Type`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/website-builder/lexical`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import type { LexicalNode } from "webiny/admin/website-builder/lexical";`}
</Editor>
<_Heading level={2} id={"use-current-element"} nextElement={{
      "type": "paragraph"
    }}><code>useCurrentElement</code></_Heading>
<p><strong parentName="p">{`Export`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/website-builder/lexical`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { useCurrentElement } from "webiny/admin/website-builder/lexical";`}
</Editor>
<_Heading level={2} id={"use-current-selection"} nextElement={{
      "type": "paragraph"
    }}><code>useCurrentSelection</code></_Heading>
<p><strong parentName="p">{`Export`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/website-builder/lexical`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { useCurrentSelection } from "webiny/admin/website-builder/lexical";`}
</Editor>
<_Heading level={2} id={"use-derive-value-from-selection"} nextElement={{
      "type": "paragraph"
    }}><code>useDeriveValueFromSelection</code></_Heading>
<p><strong parentName="p">{`Export`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/website-builder/lexical`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { useDeriveValueFromSelection } from "webiny/admin/website-builder/lexical";`}
</Editor>
<_Heading level={2} id={"use-font-color-picker"} nextElement={{
      "type": "paragraph"
    }}><code>useFontColorPicker</code></_Heading>
<p><strong parentName="p">{`Export`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/website-builder/lexical`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { useFontColorPicker } from "webiny/admin/website-builder/lexical";`}
</Editor>
<_Heading level={2} id={"use-is-mounted"} nextElement={{
      "type": "paragraph"
    }}><code>useIsMounted</code></_Heading>
<p><strong parentName="p">{`Export`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/website-builder/lexical`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { useIsMounted } from "webiny/admin/website-builder/lexical";`}
</Editor>
<_Heading level={2} id={"use-lexical-editor-config"} nextElement={{
      "type": "paragraph"
    }}><code>useLexicalEditorConfig</code></_Heading>
<p><strong parentName="p">{`Export`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/website-builder/lexical`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { useLexicalEditorConfig } from "webiny/admin/website-builder/lexical";`}
</Editor>
<_Heading level={2} id={"use-rich-text-editor"} nextElement={{
      "type": "paragraph"
    }}><code>useRichTextEditor</code></_Heading>
<p><strong parentName="p">{`Export`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/website-builder/lexical`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { useRichTextEditor } from "webiny/admin/website-builder/lexical";`}
</Editor>
<_Heading level={2} id={"use-text-alignment-action"} nextElement={{
      "type": "paragraph"
    }}><code>useTextAlignmentAction</code></_Heading>
<p><strong parentName="p">{`Export`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/website-builder/lexical`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { useTextAlignmentAction } from "webiny/admin/website-builder/lexical";`}
</Editor>
<_Heading level={2} id={"use-typography-action"} nextElement={{
      "type": "paragraph"
    }}><code>useTypographyAction</code></_Heading>
<p><strong parentName="p">{`Export`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/website-builder/lexical`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { useTypographyAction } from "webiny/admin/website-builder/lexical";`}
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