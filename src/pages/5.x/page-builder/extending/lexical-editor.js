/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import headingElementLexicalEditor from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/page-builder/extending/assets/lexical-editor/heading-element-lexical-editor.png";
import paragraphElementLexicalEditor from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/page-builder/extending/assets/lexical-editor/paragraph-element-lexical-editor.png";
import discoverToolbarActions from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/page-builder/extending/assets/lexical-editor/discover-the-action-names.png";
import { WhatYouWillLearn } from "@/components/WhatYouWillLearn";
import { CanIUseThis } from "@/components/CanIUseThis";
import { Gallery } from "@/components/Image";
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Lexical Editor",
  "description": "Configure the Lexical Editor in Page Builder.",
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
  "title": "Heading Element",
  "slug": "heading-element",
  "children": [{
    "title": "Toolbar",
    "slug": "heading-toolbar",
    "children": [{
      "title": "Discover Actions",
      "slug": "discover-actions"
    }, {
      "title": "Add an Action",
      "slug": "heading-add-action"
    }, {
      "title": "Replace an Action",
      "slug": "heading-replace-action"
    }, {
      "title": "Remove an Action",
      "slug": "heading-remove-action"
    }, {
      "title": "Position an Action",
      "slug": "heading-position-action"
    }]
  }, {
    "title": "Plugins",
    "slug": "heading-plugins",
    "children": [{
      "title": "Add a Plugin",
      "slug": "heading-add-plugin"
    }, {
      "title": "Replace a Plugin",
      "slug": "heading-replace-plugin"
    }, {
      "title": "Remove a Plugin",
      "slug": "heading-remove-plugin"
    }, {
      "title": "Position a Plugin",
      "slug": "heading-position-plugin"
    }, {
      "title": "Built-in Plugins",
      "slug": "heading-built-in-plugins"
    }]
  }, {
    "title": "Nodes",
    "slug": "heading-nodes",
    "children": [{
      "title": "Add a Node",
      "slug": "heading-add-node"
    }, {
      "title": "Replace a Node",
      "slug": "heading-replace-node"
    }, {
      "title": "Remove a Node",
      "slug": "heading-remove-node"
    }, {
      "title": "Position a Node",
      "slug": "heading-position-node"
    }]
  }]
}, {
  "title": "Paragraph Element",
  "slug": "paragraph-element",
  "children": []
}, {
  "title": "Built-in Toolbar Actions",
  "slug": "built-in-toolbar-actions",
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









<CanIUseThis since={"5.x"} mdxType="CanIUseThis" />
<WhatYouWillLearn mdxType="WhatYouWillLearn">- how to customize the Lexical editor in Page Builder</WhatYouWillLearn>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`Webiny uses `}<a parentName="p" {...{
        "href": "https://lexical.dev/"
      }}>{`Lexical Editor`}</a>{` to allow users to create rich text content quickly. Lexical Editor is created by Meta, it’s open source, and very customizable. To learn more about how Lexical Editor works, check the `}<a parentName="p" {...{
        "href": "https://lexical.dev/docs/intro"
      }}>{`official docs`}</a>{`.`}</p>
<p>{`In this article, we’ll cover the Lexical Editor configuration for the Heading and Paragraph elements of the Page Builder page editor. The configuration includes toolbar actions, plugins, and Lexical nodes.`}</p>
<Gallery mdxType="Gallery">
  <Image title="Heading element" src={headingElementLexicalEditor} mdxType="Image" />
  <Image title="Paragraph element" src={paragraphElementLexicalEditor} mdxType="Image" />
</Gallery>
<_Heading level={2} id={"heading-element"} nextElement={{
      "type": "paragraph"
    }}>Heading Element</_Heading>
<p>{`Heading element is used for adding headings. It has its own actions, plugins and nodes, which are separated from the Paragraph element, and thus, have a separate namespace with configuration components.`}</p>
<_Heading level={3} id={"heading-toolbar"} nextElement={{
      "type": "paragraph"
    }}>Toolbar</_Heading>
<p>{`Page Builder uses a floating toolbar, which is only visible when you select some text in the editor. Webiny ships with a set of default actions, but you can add new actions, replace existing actions, or remove them completely.`}</p>
<_Heading level={4} id={"discover-actions"} nextElement={{
      "type": "paragraph"
    }}>Discover Actions</_Heading>
<p>{`When working with actions, you must know their names to be able to target them via code. The easiest way to discover existing actions is to use the React Dev Tools plugin for your browser, and inspect the toolbar action element. From there, you can look at the Fragment key value.`}</p>
<Image title="Discover Toolbar Actions" src={discoverToolbarActions} mdxType="Image" />
<p>{`We’ve also attached a table of known action names at the `}<a parentName="p" {...{
        "href": "#built-in-toolbar-actions"
      }}>{`bottom of the article`}</a>{`, for your convenience.`}</p>
<_Heading level={4} id={"heading-add-action"} nextElement={{
      "type": "paragraph"
    }}>Add an Action</_Heading>
<p>{`To add a new toolbar action, use the `}<inlineCode parentName="p">{`<Heading.ToolbarAction>`}</inlineCode>{` component and mount it within your Admin app.`}</p>
<Editor title="apps/admin/src/App.tsx" lang="jsx" mdxType="Editor">
{`import React from "react";
// ...
import { LexicalEditorConfig } from "@webiny/app-page-builder";
// Imports for the custom toolbar action
import { FORMAT_TEXT_COMMAND } from "lexical";
import { useRichTextEditor, useCurrentSelection } from "@webiny/lexical-editor";

const MyCustomBoldActon = () => {
  const { editor } = useRichTextEditor();
  const { rangeSelection } = useCurrentSelection();
  const isBoldSelected = rangeSelection ? rangeSelection.hasFormat("bold") : false;

  const handleClick = () => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold");
  };

  return (
    <button
      onClick={handleClick}
      className={"popup-item spaced " + (isBoldSelected ? "active" : "")}
      aria-label="Format text as bold"
    >
      <i className="format bold" />
    </button>
  );
};

// Access the Heading element.
const { ToolbarAction } = LexicalEditorConfig;

export const App = () => {
  return (
    <Admin>
      <Cognito />
      <LexicalEditorConfig>
        <ToolbarAction name={"myCustomBoldActon"} element={<MyCustomBoldActon />} />
      </LexicalEditorConfig>
    </Admin>
  );
};`}
</Editor>
<Alert type="info" title={"Important!"} mdxType="Alert">
  The code snippet above shows the full process of applying Lexical editor customizations to your
  project. The following sections of this article will only focus on the Lexical config components,
  and the registration code will be omitted for brevity.
</Alert>
<_Heading level={4} id={"heading-replace-action"} nextElement={{
      "type": "paragraph"
    }}>Replace an Action</_Heading>
<p>{`To replace an existing action with a new action element, reference the existing action by name, and pass a new element via the `}<inlineCode parentName="p">{`element`}</inlineCode>{` prop:`}</p>
<Editor title="apps/admin/src/App.tsx" lang="jsx" mdxType="Editor">
{`import { LexicalEditorConfig } from "@webiny/app-page-builder";

const { Heading } = LexicalEditorConfig;

<LexicalEditorConfig>
  <Heading.ToolbarAction name={"bold"} element={<MyCustomBoldActon />} />
</LexicalEditorConfig>;`}
</Editor>
<_Heading level={4} id={"heading-remove-action"} nextElement={{
      "type": "paragraph"
    }}>Remove an Action</_Heading>
<p>{`To remove an action, reference the existing action by name, and pass a `}<inlineCode parentName="p">{`remove`}</inlineCode>{` prop to the `}<inlineCode parentName="p">{`<Heading.ToolbarAction>`}</inlineCode>{` element:`}</p>
<Editor title="apps/admin/src/App.tsx" lang="jsx" mdxType="Editor">
{`import { LexicalEditorConfig } from "@webiny/app-page-builder";

const { Heading } = LexicalEditorConfig;

<LexicalEditorConfig>
  <Heading.ToolbarAction name={"fontSize"} remove />
</LexicalEditorConfig>;`}
</Editor>
<_Heading level={4} id={"heading-position-action"} nextElement={{
      "type": "paragraph"
    }}>Position an Action</_Heading>
<p>{`To position an existing or a new custom action, use `}<inlineCode parentName="p">{`before`}</inlineCode>{` or `}<inlineCode parentName="p">{`after`}</inlineCode>{` props on the `}<inlineCode parentName="p">{`<Heading.ToolbarAction>`}</inlineCode>{` element:`}</p>
<Editor title="apps/admin/src/App.tsx" lang="jsx" mdxType="Editor">
{`import { LexicalEditorConfig } from "@webiny/app-page-builder";

const { Heading } = LexicalEditorConfig;

<LexicalEditorConfig>
  {/* Position your action before the \`fontSize\` action */}
  <Heading.ToolbarAction
    name={"myCustomBoldActon"}
    element={<MyCustomBoldActon />}
    before={"fontSize"}
  />

  {/* Position the existing \`fontSize\` action after some other action. */}
  <Heading.ToolbarAction name={"fontSize"} after={"myCustomBoldActon"} />
</LexicalEditorConfig>;`}
</Editor>
<_Heading level={3} id={"heading-plugins"} nextElement={{
      "type": "paragraph"
    }}>Plugins</_Heading>
<p>{`Plugins allow you to hook into the Lexical editor state and develop custom functionality, show custom UI, etc. Please read the `}<a parentName="p" {...{
        "href": "https://lexical.dev/docs/react/plugins"
      }}>{`official docs`}</a>{` for more information about the Lexical plugins.`}</p>
<_Heading level={4} id={"heading-add-plugin"} nextElement={{
      "type": "paragraph"
    }}>Add a Plugin</_Heading>
<p>{`To add a new Lexical plugin, you need to use the `}<inlineCode parentName="p">{`<Heading.Plugin>`}</inlineCode>{` component and mount it within your Admin app.`}</p>
<Editor title="apps/admin/src/App.tsx" lang="jsx" mdxType="Editor">
{`import { LexicalEditorConfig } from "@webiny/app-page-builder";

const { Heading } = LexicalEditorConfig;

const MyPlugin = () => {
  /* Implement your plugin logic here. */
  return null;
};

<LexicalEditorConfig>
  <Heading.Plugin name={"myPlugin"} element={<MyPlugin />} />
</LexicalEditorConfig>;`}
</Editor>
<p>{`Please refer to the `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/tree/next/packages/lexical-editor/src/plugins"
      }}>{`@webiny/lexical-editor`}</a>{` package on our Github, for real life examples of plugins.`}</p>
<_Heading level={4} id={"heading-replace-plugin"} nextElement={{
      "type": "paragraph"
    }}>Replace a Plugin</_Heading>
<p>{`To replace an existing plugin with a new plugin, reference the existing plugin by name, and pass a new element via the `}<inlineCode parentName="p">{`element`}</inlineCode>{` prop:`}</p>
<Editor title="apps/admin/src/App.tsx" lang="jsx" mdxType="Editor">
{`import { LexicalEditorConfig } from "@webiny/app-page-builder";

const { Heading } = LexicalEditorConfig;

<LexicalEditorConfig>
  <Heading.Plugin name={"link"} element={<CustomFloatingLinkEditorPlugin />} />
</LexicalEditorConfig>;`}
</Editor>
<_Heading level={4} id={"heading-remove-plugin"} nextElement={{
      "type": "paragraph"
    }}>Remove a Plugin</_Heading>
<p>{`To remove a plugin, reference the existing plugin by name, and pass a `}<inlineCode parentName="p">{`remove`}</inlineCode>{` prop to the `}<inlineCode parentName="p">{`<Heading.Plugin>`}</inlineCode>{` element:`}</p>
<Editor title="apps/admin/src/App.tsx" lang="jsx" mdxType="Editor">
{`import { LexicalEditorConfig } from "@webiny/app-page-builder";

const { Heading } = LexicalEditorConfig;

<LexicalEditorConfig>
  <Heading.Plugin name={"link"} remove />
</LexicalEditorConfig>;`}
</Editor>
<_Heading level={4} id={"heading-position-plugin"} nextElement={{
      "type": "paragraph"
    }}>Position a Plugin</_Heading>
<p>{`To position an existing or a custom plugin, use `}<inlineCode parentName="p">{`before`}</inlineCode>{` or `}<inlineCode parentName="p">{`after`}</inlineCode>{` props on the `}<inlineCode parentName="p">{`<Heading.Plugin>`}</inlineCode>{` element:`}</p>
<Editor title="apps/admin/src/App.tsx" lang="jsx" mdxType="Editor">
{`import { LexicalEditorConfig } from "@webiny/app-page-builder";

const { Heading } = LexicalEditorConfig;

/* Add a new plugin after the \`fontSize\` plugin. */
<LexicalEditorConfig>
    <Heading.Plugin name={"newPlugin"} element={<NewPlugin />} after={"fontSize"} />
</LexicalEditorConfig>

/* Position the existing plugin before some other plugin. */
<LexicalEditorConfig>
    <Heading.Plugin name={"link"} before={"anotherPlugin"} />
</LexicalEditorConfig>`}
</Editor>
<_Heading level={4} id={"heading-built-in-plugins"} nextElement={{
      "type": "table",
      "align": [null, null, null]
    }}>Built-in Plugins</_Heading>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Component`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Name`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`FontColorPlugin`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`fontColor`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Apply font color to the text.`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`ListPlugin`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`list`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Format the bullet and numbered lists.`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`CodeHighlightPlugin`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`codeHighlight`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Format code highlight.`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`TypographyPlugin`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`typography`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Format and apply typography styles for the selected text block.`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`LinkPlugin`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`link`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Format text to link.`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`FloatingLinkEditorPlugin`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`floatingLinkEditor`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Manage the form and position of the floating pop-up window where the user can edit the links.`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`ImagesPlugin`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`images`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Insert and edit an image.`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`QuotePlugin`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`quote`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Format the selected text block to quote. This plugin will create quoteblock html tag.`}</td>
</tr>
</tbody>
</table>
<_Heading level={3} id={"heading-nodes"} nextElement={{
      "type": "paragraph"
    }}>Nodes</_Heading>
<p>{`Please read the `}<a parentName="p" {...{
        "href": "https://lexical.dev/docs/concepts/nodes"
      }}>{`official docs`}</a>{` to learn what nodes are and why they’re important.`}</p>
<_Heading level={4} id={"heading-add-node"} nextElement={{
      "type": "paragraph"
    }}>Add a Node</_Heading>
<p>{`To add a new Lexical node, use the `}<inlineCode parentName="p">{`<Heading.Node>`}</inlineCode>{` component and mount it within your Admin app.`}</p>
<Editor title="apps/admin/src/App.tsx" lang="jsx" mdxType="Editor">
{`import { TextNode, EditorConfig, SerializedTextNode, Spread } from "lexical";

type SerializedEmojiNode = Spread<{ className: string }, SerializedTextNode>;

class EmojiNode extends TextNode {
  __className: string;

  static getType(): string {
    return "emoji";
  }

  static clone(node: EmojiNode): EmojiNode {
    return new EmojiNode(node.__className, node.__text, node.__key);
  }

  constructor(className: string, text: string, key?: NodeKey) {
    super(text, key);
    this.__className = className;
  }

  createDOM(config: EditorConfig): HTMLElement {
    const dom = document.createElement("span");
    const inner = super.createDOM(config);
    dom.className = this.__className;
    inner.className = "emoji-inner";
    dom.appendChild(inner);
    return dom;
  }

  static importJSON(serializedNode: SerializedEmojiNode): EmojiNode {
    const node = $createEmojiNode(serializedNode.className, serializedNode.text);
    node.setFormat(serializedNode.format);
    node.setDetail(serializedNode.detail);
    node.setMode(serializedNode.mode);
    node.setStyle(serializedNode.style);
    return node;
  }
}

const { Heading } = LexicalEditorConfig;

<LexicalEditorConfig>
  <Heading.Node name={"emojiNode"} node={EmojiNode} />
</LexicalEditorConfig>;`}
</Editor>
<p>{`Please check the official `}<a parentName="p" {...{
        "href": "https://github.com/facebook/lexical/blob/main/packages/lexical-playground/src/nodes/EmojiNode.tsx"
      }}>{`Lexical documentation`}</a>{` for full example.`}</p>
<_Heading level={4} id={"heading-replace-node"} nextElement={{
      "type": "paragraph"
    }}>Replace a Node</_Heading>
<p>{`To replace your custom Lexical node with a new node, reference the existing node by name, and pass a new node class via the `}<inlineCode parentName="p">{`node`}</inlineCode>{` prop:`}</p>
<Editor title="apps/admin/src/App.tsx" lang="jsx" mdxType="Editor">
{`import { LexicalEditorConfig } from "@webiny/app-page-builder";

const { Heading } = LexicalEditorConfig;

<LexicalEditorConfig>
  <Heading.Node name={"emojiNode"} node={MyExtendedEmojiNode} />
</LexicalEditorConfig>;`}
</Editor>
<_Heading level={4} id={"heading-remove-node"} nextElement={{
      "type": "paragraph"
    }}>Remove a Node</_Heading>
<p>{`To remove a node, reference the existing node by name, and pass a `}<inlineCode parentName="p">{`remove`}</inlineCode>{` prop to the `}<inlineCode parentName="p">{`<Heading.Node>`}</inlineCode>{` element:`}</p>
<Editor title="apps/admin/src/App.tsx" lang="jsx" mdxType="Editor">
{`import { LexicalEditorConfig } from "@webiny/app-page-builder";

const { Heading } = LexicalEditorConfig;

<LexicalEditorConfig>
  <Heading.Node name={"emojiNode"} remove />
</LexicalEditorConfig>;`}
</Editor>
<_Heading level={4} id={"heading-position-node"} nextElement={{
      "type": "paragraph"
    }}>Position a Node</_Heading>
<p>{`To position your nodes, you can use `}<inlineCode parentName="p">{`before`}</inlineCode>{` and `}<inlineCode parentName="p">{`after`}</inlineCode>{` props on the `}<inlineCode parentName="p">{`<Heading.Node>`}</inlineCode>{` element:`}</p>
<Editor title="apps/admin/src/App.tsx" lang="jsx" mdxType="Editor">
{`import { LexicalEditorConfig } from "@webiny/app-page-builder";

const { Heading } = LexicalEditorConfig;

<LexicalEditorConfig>
  <Heading.Node name={"emojiNode"} node={EmojiNode} after={"newNode"} />
  <Heading.Node name={"newNode"} node={NewNode} before={"myExtendedEmojiNode"} />
</LexicalEditorConfig>;`}
</Editor>
<_Heading level={2} id={"paragraph-element"} nextElement={{
      "type": "paragraph"
    }}>Paragraph Element</_Heading>
<p>{`The Paragraph element is used for writing the main page content. The configuration API is identical to that of the Heading element. The only difference is that it has its own component namespace, so instead of `}<inlineCode parentName="p">{`LexicalEditorConfig.Heading`}</inlineCode>{`, you need to use the `}<inlineCode parentName="p">{`LexicalEditorConfig.Paragraph`}</inlineCode>{` namespace. Everything else is the same, so you can refer to the Heading element for the code samples and API descriptions.`}</p>
<_Heading level={2} id={"built-in-toolbar-actions"} nextElement={{
      "type": "table",
      "align": [null, null, null]
    }}>Built-in Toolbar Actions</_Heading>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Component`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Name`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`FontSizeAction`}</td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`fontSize`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`Set font size.`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`FontColorAction`}</td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`fontColor`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`Change the font color of the text.`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`TypographyAction`}</td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`typography`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`Apply typography styles specified in the theme for the particular selected block of text. For example paragraph, header, list, etc.`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`BoldAction`}</td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`boldAction`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`Set bold to the selected text.`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`ItalicAction`}</td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`italic`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`Set the italic style to the text.`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`UnderlineAction`}</td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`underline`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`Set underline style to the text.`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`CodeHighlightAction`}</td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`codeHighlight`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`Apply code highlight to the text.`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`NumberedListAction`}</td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`numberedList`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`Convert the header or paragraph text block into a numbered list.`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`BulletListAction`}</td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`bulletList`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`Convert the header or paragraph text block into a bullet list.`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`ImageAction`}</td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`image`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`Open File Manager where the user can select and insert one image at a time.`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`LinkAction`}</td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`link`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`Open a pop-up where the user can set the URL and convert the text to a link.`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`QuoteAction`}</td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`quote`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`Convert the selected text block to a quote.`}</td>
</tr>
</tbody>
</table>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;