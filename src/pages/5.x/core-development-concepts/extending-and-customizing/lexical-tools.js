/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Lexical Tools",
  "description": "Learn how to use Lexical tools to manipulate Lexical state.",
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
  "title": "HTML to Lexical",
  "slug": "html-to-lexical",
  "children": [{
    "title": "Browser Usage",
    "slug": "browser-usage",
    "children": []
  }, {
    "title": "Node.js Usage",
    "slug": "node-js-usage",
    "children": []
  }, {
    "title": "Convert DOM to Lexical State",
    "slug": "convert-dom-to-lexical-state",
    "children": []
  }, {
    "title": "Custom Nodes",
    "slug": "custom-nodes",
    "children": []
  }, {
    "title": "Custom Node Mapper",
    "slug": "custom-node-mapper",
    "children": []
  }]
}, {
  "title": "Lexical to HTML",
  "slug": "lexical-to-html",
  "children": [{
    "title": "Browser Usage",
    "slug": "browser-usage-1",
    "children": []
  }, {
    "title": "Node.js Usage",
    "slug": "node-js-usage-1",
    "children": []
  }, {
    "title": "Render to an HTML String",
    "slug": "render-to-an-html-string",
    "children": []
  }, {
    "title": "Render to an Array of Objects",
    "slug": "render-to-an-array-of-objects",
    "children": []
  }]
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
const CanIUseThis = makeShortcode("CanIUseThis");
const WhatYouWillLearn = makeShortcode("WhatYouWillLearn");
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


<CanIUseThis since={"5.38.0"} mdxType="CanIUseThis" />
<WhatYouWillLearn mdxType="WhatYouWillLearn">
<ul>
<li parentName="ul">{`how to parse HTML to Lexical state`}</li>
<li parentName="ul">{`how to convert Lexical state to HTML`}</li>
</ul>
</WhatYouWillLearn>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`Webiny uses the `}<a parentName="p" {...{
        "href": "https://lexical.dev/"
      }}>{`Lexical`}</a>{` text editor framework to power its Rich Text Editor components. It’s very powerful, and enables us to build a feature rich and extendable text editors. The downside is that the output of the editor is not HTML, as you would expect from a WYSIWYG editor.`}</p>
<p>{`To help you convert Lexical’s native state shape into HTML, and vice-versa, we’ve created a set of utilities, which reside in our `}<inlineCode parentName="p">{`@webiny/lexical-converter`}</inlineCode>{` package.`}</p>
<p>{`This article demonstrates how to use this utility package to convert your HTML or Lexical data into the desired form.`}</p>
<_Heading level={2} id={"html-to-lexical"} nextElement={{
      "type": "paragraph"
    }}>HTML to Lexical</_Heading>
<p>{`To parse HTML to a valid Lexical state, Lexical editor requires a DOM document. Every environment is different, so there’s an extra step you need to take before you use our tool, and that is converting your HTML to a DOM document.`}</p>
<p>{`Browsers have a native `}<a parentName="p" {...{
        "href": "https://developer.mozilla.org/en-US/docs/Web/API/DOMParser"
      }}>{`DOMParser`}</a>{` class you can just instantiate and parse your HTML.`}</p>
<p>{`Node.js is a bit more involved, because DOM is not a native thing for Node.js. You’ll need to use a library like `}<a parentName="p" {...{
        "href": "https://github.com/jsdom/jsdom"
      }}>{`JSDOM`}</a>{`, to parse your HTML to a DOM document.`}</p>
<_Heading level={3} id={"browser-usage"} nextElement={{
      "type": "paragraph"
    }}>Browser Usage</_Heading>
<p>{`In the browser environment, you can simply use the `}<inlineCode parentName="p">{`DOMParser`}</inlineCode>{` class.`}</p>
<Editor title="Parse HTML to a DOM document in the browser" lang="ts" mdxType="Editor">
{`const html = \`<p>My input HTML</p>\`;
const parser = new DOMParser();
const domDocument = parser.parseFromString(html, "text/html");`}
</Editor>
<_Heading level={3} id={"node-js-usage"} nextElement={{
      "type": "paragraph"
    }}>Node.js Usage</_Heading>
<p>{`In the Node.js environment, first install a DOM library of choice. We’ll use JSDOM:`}</p>
<Editor title="Install JSDOM" lang="shell" mdxType="Editor">
{`// NPM
npm i jsdom

// Yarn
yarn add jsdom`}
</Editor>
<p>{`Then use it to parse your HTML, and get a DOM document:`}</p>
<Editor title="Parse HTML to a DOM document in Node.js" lang="ts" mdxType="Editor">
{`import JSDOM from "jsdom";

const html = \`<p>My input HTML</p>\`;
const { window } = new JSDOM(html);
const domDocument = window.document;`}
</Editor>
<_Heading level={3} id={"convert-dom-to-lexical-state"} nextElement={{
      "type": "paragraph"
    }}>Convert DOM to Lexical State</_Heading>
<p>{`Once you have your DOM document, you can convert it to Lexical state:`}</p>
<Editor title="Convert DOM to Lexical State" lang="ts" mdxType="Editor">
{`import { createHtmlToLexicalParser } from "@webiny/lexical-converter";

// Create a parser.
const parser = createHtmlToLexicalParser();

// Get a DOM document (as described in previous sections).
const document = getDomDocument();

// Parse DOM document to Lexical state.
const lexicalState = parser(document);`}
</Editor>
<_Heading level={3} id={"custom-nodes"} nextElement={{
      "type": "paragraph"
    }}>Custom Nodes</_Heading>
<p>{`You can configure your Lexical parser with `}<a parentName="p" {...{
        "href": "https://lexical.dev/docs/concepts/nodes#creating-custom-nodes"
      }}>{`custom Lexical nodes`}</a>{`. This will often be necessary if your HTML contains tags unknown to Webiny.`}</p>
<Editor title="Add Custom Nodes" lang="ts" mdxType="Editor">
{`import { createHtmlToLexicalParser } from "@webiny/lexical-converter";

// Create a parser with custom nodes.
const parser = createHtmlToLexicalParser({
  editorConfig: {
    nodes: [MyCustomNode]
  }
});

// Get a DOM document (as described in previous sections).
const document = getDomDocument();

// Parse DOM document to Lexical state.
const lexicalState = parser(document);`}
</Editor>
<_Heading level={3} id={"custom-node-mapper"} nextElement={{
      "type": "paragraph"
    }}>Custom Node Mapper</_Heading>
<p>{`You might also need to perform some actions on your node instance, after the DOM is parsed into a Lexical state. To process each parsed node, configure the parser with a `}<inlineCode parentName="p">{`nodeMapper`}</inlineCode>{` property:`}</p>
<Editor title="Add a Custom Node Mapper" lang="ts" mdxType="Editor">
{`import { LexicalNode } from "lexical";
import { createHtmlToLexicalParser } from "@webiny/lexical-converter";
import { $isHeadingNode } from "@webiny/lexical-nodes";

// This is a custom mapper that will pass some styling information to a matching node.
const addCustomThemeStyleToHeadings = (node: LexicalNode): LexicalNode => {
  // Use utilities provided by Webiny to check for built-in node types.
  if ($isHeadingNode(node)) {
    node.setThemeStyles([{ styleId: "my-default-id", type: "typography" }]);
  }

  return node;
};

// Create a parser with a custom node mapper.
const parser = createHtmlToLexicalParser({
  nodeMapper: addCustomThemeStyleToHeadings
});

// Get a DOM document (as described in previous sections).
const document = getDomDocument();

// Parse DOM document to Lexical state.
const lexicalState = parser(document);`}
</Editor>
<_Heading level={2} id={"lexical-to-html"} nextElement={{
      "type": "paragraph"
    }}>Lexical to HTML</_Heading>
<p>{`To convert raw Lexical state to HTML, Lexical editor requires DOM `}<inlineCode parentName="p">{`document`}</inlineCode>{` to be present globally. In the browser, this means on the `}<inlineCode parentName="p">{`window`}</inlineCode>{` object (`}<inlineCode parentName="p">{`window.document`}</inlineCode>{`), and in Node.js, this means on the `}<inlineCode parentName="p">{`global`}</inlineCode>{` object (`}<inlineCode parentName="p">{`global.document`}</inlineCode>{`).`}</p>
<_Heading level={3} id={"browser-usage-1"} nextElement={{
      "type": "paragraph"
    }}>Browser Usage</_Heading>
<p>{`In the browser environment, DOM is present by definition, so no extra steps are necessary.`}</p>
<_Heading level={3} id={"node-js-usage-1"} nextElement={{
      "type": "paragraph"
    }}>Node.js Usage</_Heading>
<p>{`In the Node.js environment, first install a DOM library of choice. We’ll use JSDOM:`}</p>
<Editor title="Install JSDOM" lang="shell" mdxType="Editor">
{`// NPM
npm i jsdom

// Yarn
yarn add jsdom`}
</Editor>
<p>{`Then use it to set up the environment:`}</p>
<Editor title="Set up the necessary objects" lang="ts" mdxType="Editor">
{`const dom = new jsdom.JSDOM();
global.window = dom.window;
global.document = dom.window.document;
global.DocumentFragment = dom.window.DocumentFragment;`}
</Editor>
<p>{`To see a real-life example of this setup, have a look at our `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/v5.39.0/packages/api-headless-cms/src/htmlRenderer/LexicalRenderer.ts"
      }}>{`default Lexical to HTML implementation`}</a>{`.`}</p>
<p>{`Once DOM objects are configured, you can render your Lexical state to HTML. Webiny provides a Lexical transformer utility, which allows to render to various output formats.`}</p>
<_Heading level={3} id={"render-to-an-html-string"} nextElement={{
      "type": "paragraph"
    }}>Render to an HTML String</_Heading>
<p>{`To convert Lexical state to plain HTML string, use the `}<inlineCode parentName="p">{`toHtml`}</inlineCode>{` method. This will simply output everything as a `}<inlineCode parentName="p">{`string`}</inlineCode>{`.`}</p>
<Editor title="Convert Lexical state to an HTML string" lang="ts" mdxType="Editor">
{`import { createLexicalStateTransformer } from "@webiny/lexical-converter";

const transformer = createLexicalStateTransformer();
const html = transformer.toHtml(lexicalState);`}
</Editor>
<_Heading level={3} id={"render-to-an-array-of-objects"} nextElement={{
      "type": "paragraph"
    }}>Render to an Array of Objects</_Heading>
<p>{`To convert Lexical state to an array of objects, where each object represents a top-level block element, use the `}<inlineCode parentName="p">{`flatten`}</inlineCode>{` method. Each block will be converted to a standalone HTML string, and you will also get an instance of the Lexical Node object along with the block HTML.`}</p>
<Editor title="Convert Lexical state to an array of objects" lang="ts" mdxType="Editor">
{`import { createLexicalStateTransformer } from "@webiny/lexical-converter";

const transformer = createLexicalStateTransformer();
const output = transformer.flatten(lexicalState);`}
</Editor>
<p>{`The output of this method will look something like this:`}</p>
<Editor title="Pseudo-code demonstrating the output of the flatten method" lang="ts" mdxType="Editor">
{`const output = [
  {
    node: expect.any(HeadingNode),
    html: \`<h1 dir="ltr"><span style=\\"white-space: pre-wrap;\\">Heading</span></h1>\`
  },
  {
    node: expect.any(ParagraphNode),
    html: \`<p dir="ltr"><br></p>\`
  }
];`}
</Editor>
<p>{`To see various use cases for these methods, have a look at the `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/v5.39.0/packages/lexical-converter/__tests__/stateTransformer.test.ts"
      }}>{`test file`}</a>{`.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;