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
  "description": "Lexical editor components and hooks",
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
  "title": "Components",
  "slug": "components",
  "children": [{
    "title": "LexicalNode",
    "slug": "lexical-node",
    "children": []
  }]
}, {
  "title": "Hooks",
  "slug": "hooks",
  "children": [{
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
  }]
}, {
  "title": "Types",
  "slug": "types",
  "children": [{
    "title": "Klass",
    "slug": "klass",
    "children": []
  }]
}, {
  "title": "Other",
  "slug": "other",
  "children": [{
    "title": "getNodeFromSelection",
    "slug": "get-node-from-selection",
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
<li parentName="ul">{`What is exported from `}<inlineCode parentName="li">{`webiny/admin/lexical`}</inlineCode>{`?`}</li>
<li parentName="ul">{`How to import and use each exported item?`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`This page documents everything exported from `}<inlineCode parentName="p">{`webiny/admin/lexical`}</inlineCode>{`. Import any of the items below directly from this path in your Webiny extensions.`}</p>
<p><strong parentName="p">{`Components`}</strong></p>
<SymbolList symbols={[{
      name: "LexicalNode",
      anchor: "lexical-node"
    }]} mdxType="SymbolList" />
<p><strong parentName="p">{`Hooks`}</strong></p>
<SymbolList symbols={[{
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
      name: "useRichTextEditor",
      anchor: "use-rich-text-editor"
    }, {
      name: "useTextAlignmentAction",
      anchor: "use-text-alignment-action"
    }, {
      name: "useTypographyAction",
      anchor: "use-typography-action"
    }]} mdxType="SymbolList" />
<p><strong parentName="p">{`Types`}</strong></p>
<SymbolList symbols={[{
      name: "Klass",
      anchor: "klass"
    }]} mdxType="SymbolList" />
<p><strong parentName="p">{`Other`}</strong></p>
<SymbolList symbols={[{
      name: "getNodeFromSelection",
      anchor: "get-node-from-selection"
    }]} mdxType="SymbolList" />
<_Heading level={2} id={"components"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Components</_Heading>
<_Heading level={3} id={"lexical-node"} nextElement={{
      "type": "paragraph"
    }}><code>LexicalNode</code></_Heading>
<p><strong parentName="p">{`Type`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/lexical`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import type { LexicalNode } from "webiny/admin/lexical";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export declare class LexicalNode {
  ["constructor"]: KlassConstructor<typeof LexicalNode>;
  __type: string;
  __key: string;
  __parent: null | NodeKey;
  __prev: null | NodeKey;
  __next: null | NodeKey;
  __state?: NodeState<this>;
  static getType(): string;
  static clone(_data: unknown): LexicalNode;
  $config(): BaseStaticNodeConfig;
  config<Type extends string, Config extends StaticNodeConfigValue<this, Type>>(
    type: Type,
    config: Config
  ): StaticNodeConfigRecord<Type, Config>;
  afterCloneFrom(prevNode: this): void;
  static importDOM?: () => DOMConversionMap<any> | null;
  constructor(key?: NodeKey);
  getType(): string;
  isInline(): boolean;
  isAttached(): boolean;
  isSelected(selection?: null | BaseSelection): boolean;
  getKey(): NodeKey;
  getIndexWithinParent(): number;
  getParent<T extends ElementNode>(): T | null;
  getParentOrThrow<T extends ElementNode>(): T;
  getTopLevelElement(): ElementNode | DecoratorNode<unknown> | null;
  getTopLevelElementOrThrow(): ElementNode | DecoratorNode<unknown>;
  getParents(): Array<ElementNode>;
  getParentKeys(): Array<NodeKey>;
  getPreviousSibling<T extends LexicalNode>(): T | null;
  getPreviousSiblings<T extends LexicalNode>(): Array<T>;
  getNextSibling<T extends LexicalNode>(): T | null;
  getNextSiblings<T extends LexicalNode>(): Array<T>;
  getCommonAncestor<T extends ElementNode = ElementNode>(node: LexicalNode): T | null;
  is(object: LexicalNode | null | undefined): boolean;
  isBefore(targetNode: LexicalNode): boolean;
  isParentOf(targetNode: LexicalNode): boolean;
  getNodesBetween(targetNode: LexicalNode): Array<LexicalNode>;
  isDirty(): boolean;
  getLatest(): this;
  getWritable(): this;
  getTextContent(): string;
  getTextContentSize(): number;
  createDOM(_config: EditorConfig, _editor: LexicalEditor): HTMLElement;
  updateDOM(_prevNode: unknown, _dom: HTMLElement, _config: EditorConfig): boolean;
  exportDOM(editor: LexicalEditor): DOMExportOutput;
  exportJSON(): SerializedLexicalNode;
  static importJSON(_serializedNode: SerializedLexicalNode): LexicalNode;
  updateFromJSON(serializedNode: LexicalUpdateJSON<SerializedLexicalNode>): this;
  static transform(): ((node: LexicalNode) => void) | null;
  remove(preserveEmptyParent?: boolean): void;
  replace<N extends LexicalNode>(replaceWith: N, includeChildren?: boolean): N;
  insertAfter(nodeToInsert: LexicalNode, restoreSelection?: boolean): LexicalNode;
  insertBefore(nodeToInsert: LexicalNode, restoreSelection?: boolean): LexicalNode;
  isParentRequired(): boolean;
  createParentElementNode(): ElementNode;
  selectStart(): RangeSelection;
  selectEnd(): RangeSelection;
  selectPrevious(anchorOffset?: number, focusOffset?: number): RangeSelection;
  selectNext(anchorOffset?: number, focusOffset?: number): RangeSelection;
  markDirty(): void;
  reconcileObservedMutation(dom: HTMLElement, editor: LexicalEditor): void;
}`}
</Editor>
<_Heading level={2} id={"hooks"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Hooks</_Heading>
<_Heading level={3} id={"use-current-element"} nextElement={{
      "type": "paragraph"
    }}><code>useCurrentElement</code></_Heading>
<p><strong parentName="p">{`Function`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/lexical`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { useCurrentElement } from "webiny/admin/lexical";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export function useCurrentElement();`}
</Editor>
<_Heading level={3} id={"use-current-selection"} nextElement={{
      "type": "paragraph"
    }}><code>useCurrentSelection</code></_Heading>
<p><strong parentName="p">{`Function`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/lexical`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { useCurrentSelection } from "webiny/admin/lexical";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export function useCurrentSelection();`}
</Editor>
<_Heading level={3} id={"use-derive-value-from-selection"} nextElement={{
      "type": "paragraph"
    }}><code>useDeriveValueFromSelection</code></_Heading>
<p><strong parentName="p">{`Function`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/lexical`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { useDeriveValueFromSelection } from "webiny/admin/lexical";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export function useDeriveValueFromSelection<T>(generator: Generator<T>);`}
</Editor>
<_Heading level={3} id={"use-font-color-picker"} nextElement={{
      "type": "paragraph"
    }}><code>useFontColorPicker</code></_Heading>
<p><strong parentName="p">{`Function`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/lexical`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { useFontColorPicker } from "webiny/admin/lexical";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export function useFontColorPicker();`}
</Editor>
<_Heading level={3} id={"use-is-mounted"} nextElement={{
      "type": "paragraph"
    }}><code>useIsMounted</code></_Heading>
<p><strong parentName="p">{`Function`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/lexical`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { useIsMounted } from "webiny/admin/lexical";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export function useIsMounted();`}
</Editor>
<_Heading level={3} id={"use-rich-text-editor"} nextElement={{
      "type": "paragraph"
    }}><code>useRichTextEditor</code></_Heading>
<p><strong parentName="p">{`Function`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/lexical`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { useRichTextEditor } from "webiny/admin/lexical";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export function useRichTextEditor();`}
</Editor>
<_Heading level={3} id={"use-text-alignment-action"} nextElement={{
      "type": "paragraph"
    }}><code>useTextAlignmentAction</code></_Heading>
<p><strong parentName="p">{`Function`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/lexical`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { useTextAlignmentAction } from "webiny/admin/lexical";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export function useTextAlignmentAction();`}
</Editor>
<_Heading level={3} id={"use-typography-action"} nextElement={{
      "type": "paragraph"
    }}><code>useTypographyAction</code></_Heading>
<p><strong parentName="p">{`Function`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/lexical`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { useTypographyAction } from "webiny/admin/lexical";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export function useTypographyAction();`}
</Editor>
<_Heading level={2} id={"types"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Types</_Heading>
<_Heading level={3} id={"klass"} nextElement={{
      "type": "paragraph"
    }}><code>Klass</code></_Heading>
<p><strong parentName="p">{`Type`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/lexical`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import type { Klass } from "webiny/admin/lexical";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export type Klass<T extends LexicalNode> =
  InstanceType<T["constructor"]> extends T
    ? T["constructor"]
    : GenericConstructor<T> & T["constructor"];`}
</Editor>
<_Heading level={2} id={"other"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Other</_Heading>
<_Heading level={3} id={"get-node-from-selection"} nextElement={{
      "type": "paragraph"
    }}><code>getNodeFromSelection</code></_Heading>
<p><strong parentName="p">{`Function`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/lexical`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { getNodeFromSelection } from "webiny/admin/lexical";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export function getNodeFromSelection(selection: RangeSelection);`}
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