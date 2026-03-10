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
  "title": "Editor",
  "description": "Content entry editor components and hooks",
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
    "title": "ContentEntryEditorConfig",
    "slug": "content-entry-editor-config",
    "children": []
  }]
}, {
  "title": "Hooks",
  "slug": "hooks",
  "children": [{
    "title": "useContentEntryEditor",
    "slug": "use-content-entry-editor",
    "children": []
  }, {
    "title": "useContentEntryForm",
    "slug": "use-content-entry-form",
    "children": []
  }, {
    "title": "useSingleEntryContentEntry",
    "slug": "use-single-entry-content-entry",
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
<li parentName="ul">{`What is exported from `}<inlineCode parentName="li">{`webiny/admin/cms/entry/editor`}</inlineCode>{`?`}</li>
<li parentName="ul">{`How to import and use each exported item?`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`This page documents everything exported from `}<inlineCode parentName="p">{`webiny/admin/cms/entry/editor`}</inlineCode>{`. Import any of the items below directly from this path in your Webiny extensions.`}</p>
<p><strong parentName="p">{`Components`}</strong></p>
<SymbolList symbols={[{
      name: "ContentEntryEditorConfig",
      anchor: "content-entry-editor-config"
    }]} mdxType="SymbolList" />
<p><strong parentName="p">{`Hooks`}</strong></p>
<SymbolList symbols={[{
      name: "useContentEntryEditor",
      anchor: "use-content-entry-editor"
    }, {
      name: "useContentEntryForm",
      anchor: "use-content-entry-form"
    }, {
      name: "useSingleEntryContentEntry",
      anchor: "use-single-entry-content-entry"
    }]} mdxType="SymbolList" />
<_Heading level={2} id={"components"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Components</_Heading>
<_Heading level={3} id={"content-entry-editor-config"} nextElement={{
      "type": "paragraph"
    }}><code>ContentEntryEditorConfig</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/cms/entry/editor`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { ContentEntryEditorConfig } from "webiny/admin/cms/entry/editor";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export const ContentEntryEditorConfig = Object.assign(base.Config, {
  Actions,
  FieldElement,
  Width,
  ValidationIndicators: ValidationIndicatorsConfig
});`}
</Editor>
<_Heading level={2} id={"hooks"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Hooks</_Heading>
<_Heading level={3} id={"use-content-entry-editor"} nextElement={{
      "type": "paragraph"
    }}><code>useContentEntryEditor</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/cms/entry/editor`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { useContentEntryEditor } from "webiny/admin/cms/entry/editor";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export const useContentEntry = makeDecoratable(() => {
  const context = useContext(ContentEntryContext);
  if (!context) {
    throw Error(\`useContentEntry() hook can only be used within the ContentEntryContext provider.\`);
  }
  return context;
});`}
</Editor>
<_Heading level={3} id={"use-content-entry-form"} nextElement={{
      "type": "paragraph"
    }}><code>useContentEntryForm</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/cms/entry/editor`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { useContentEntryForm } from "webiny/admin/cms/entry/editor";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export const useContentEntryForm = makeDecoratable(() => {
  const context = React.useContext(ContentEntryFormContext);
  if (!context) {
    throw new Error("ContentEntryFormProvider is missing in the component hierarchy!");
  }

  return context;
});`}
</Editor>
<_Heading level={3} id={"use-single-entry-content-entry"} nextElement={{
      "type": "paragraph"
    }}><code>useSingleEntryContentEntry</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/cms/entry/editor`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { useSingleEntryContentEntry } from "webiny/admin/cms/entry/editor";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export const useSingletonContentEntry = makeDecoratable(() => {
  const context = useContext(SingletonContentEntryContext);
  if (!context) {
    throw Error(
      \`useSingletonContentEntry() hook can only be used within the SingletonContentEntryContext provider.\`
    );
  }
  return context;
});`}
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