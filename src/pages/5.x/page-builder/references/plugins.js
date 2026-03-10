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
  "title": "Plugin References",
  "description": "Page Builder plugin references",
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
  "title": "Plugins",
  "slug": "plugins",
  "children": [{
    "title": "pb-editor-page-element",
    "slug": "pb-editor-page-element",
    "children": []
  }, {
    "title": "pb-render-page-element",
    "slug": "pb-render-page-element",
    "children": []
  }, {
    "title": "pb-editor-page-element-advanced-settings",
    "slug": "pb-editor-page-element-advanced-settings",
    "children": []
  }, {
    "title": "pb-editor-page-element-style-settings",
    "slug": "pb-editor-page-element-style-settings",
    "children": []
  }, {
    "title": "pb-theme",
    "slug": "pb-theme",
    "children": []
  }, {
    "title": "pb-page-layout",
    "slug": "pb-page-layout",
    "children": []
  }, {
    "title": "pb-page-element-button-click-handler",
    "slug": "pb-page-element-button-click-handler",
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


<_Heading level={2} id={"plugins"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Plugins</_Heading>
<_Heading level={3} id={"pb-editor-page-element"} nextElement={{
      "type": "code",
      "lang": "ts",
      "meta": null
    }}><code>pb-editor-page-element</code></_Heading>
<Editor title="" lang="ts" mdxType="Editor">
{`export type PbEditorPageElementPlugin = Plugin & {
  type: "pb-editor-page-element";
  elementType: string;
  toolbar?: {
    // Element title in the toolbar.
    title?: string | PbEditorPageElementTitle;
    // Element group this element belongs to.
    group?: string;
    // A function to render an element preview in the toolbar.
    preview?: ({ theme: PbTheme }) => ReactNode;
  };
  // Help link
  help?: string;
  // Whitelist elements that can accept this element (for drag&drop interaction)
  target?: string[];
  // Array of element settings plugin names.
  settings?: Array<string | Array<string | any>>;
  // A function to create an element data structure.
  create: (
    options: { [key: string]: any },
    parent?: PbEditorElement
  ) => Omit<PbEditorElement, "id">;
  // A function to render an element in the editor.
  render: (params: { theme?: PbTheme; element: PbEditorElement; isActive: boolean }) => ReactNode;
  // A function to check if an element can be deleted.
  canDelete?: (params: { element: PbEditorElement }) => boolean;
  // Executed when another element is dropped on the drop zones of current element.
  onReceived?: (params: {
    state?: EventActionHandlerCallableState;
    meta: EventActionHandlerMeta;
    source: PbEditorElement | DragObjectWithTypeWithTarget;
    target: PbEditorElement;
    position: number | null;
  }) => EventActionHandlerActionCallableResponse;
  // Executed when an immediate child element is deleted
  onChildDeleted?: (params: {
    element: PbEditorElement;
    child: PbEditorElement;
  }) => PbEditorElement | undefined;
  // Executed after element was created
  onCreate?: string;
  // Render element preview (used when creating element screenshots; not all elements have a simple DOM representation
  // so this callback is used to customize the look of the element in a PNG image)
  renderElementPreview?: (params: {
    element: PbEditorElement;
    width: number;
    height: number;
  }) => ReactElement;
};`}
</Editor>
<_Heading level={3} id={"pb-render-page-element"} nextElement={{
      "type": "code",
      "lang": "ts",
      "meta": null
    }}><code>pb-render-page-element</code></_Heading>
<Editor title="" lang="ts" mdxType="Editor">
{`export type PbRenderElementPlugin = Plugin & {
  type: "pb-render-page-element";
  // Name of the pb-element plugin this render plugin is handling.
  elementType: string;
  // A function to render an element in the actual page.
  render: (params: { theme: PbTheme; element: PbElement }) => React.ReactNode;
};`}
</Editor>
<_Heading level={3} id={"pb-editor-page-element-advanced-settings"} nextElement={{
      "type": "code",
      "lang": "ts",
      "meta": null
    }}><code>pb-editor-page-element-advanced-settings</code></_Heading>
<Editor title="" lang="ts" mdxType="Editor">
{`export type PbEditorPageElementAdvancedSettingsPlugin = Plugin & {
  type: "pb-editor-page-element-advanced-settings";
  elementType: string;
  // A function to render the element settings in the editor sidebar.
  render(params?: { Bind: BindComponent; data: any; submit: () => void }): ReactElement;
  onSave?: (data: FormData) => FormData;
};`}
</Editor>
<_Heading level={3} id={"pb-editor-page-element-style-settings"} nextElement={{
      "type": "code",
      "lang": "ts",
      "meta": null
    }}><code>pb-editor-page-element-style-settings</code></_Heading>
<Editor title="" lang="ts" mdxType="Editor">
{`export type PbEditorPageElementStyleSettingsPlugin = Plugin & {
  type: "pb-editor-page-element-style-settings";
  render(params: { options?: any }): ReactElement;
  elements?: boolean | string[];
};`}
</Editor>
<_Heading level={3} id={"pb-theme"} nextElement={{
      "type": "code",
      "lang": "ts",
      "meta": null
    }}><code>pb-theme</code></_Heading>
<Editor title="" lang="ts" mdxType="Editor">
{`export type PbTheme = {
  colors: { [key: string]: string };
  elements: { [key: string]: any };
  typography: {
    [key: string]: {
      label: string;
      component: string | React.ComponentType<any>;
      className: string;
    };
  };
};`}
</Editor>
<_Heading level={3} id={"pb-page-layout"} nextElement={{
      "type": "code",
      "lang": "ts",
      "meta": null
    }}><code>pb-page-layout</code></_Heading>
<Editor title="" lang="ts" mdxType="Editor">
{`export type PbPageLayoutPlugin = Plugin & {
  layout: PbPageLayout;
};`}
</Editor>
<_Heading level={3} id={"pb-page-element-button-click-handler"} nextElement={{
      "type": "code",
      "lang": "ts",
      "meta": null
    }}><code>pb-page-element-button-click-handler</code></_Heading>
<Editor title="" lang="ts" mdxType="Editor">
{`export type PbButtonElementClickHandlerVariable = {
  // Variable key, received by the custom handler.
  name: string;
  // Variable label, shown in button "Action" settings.
  label: string;
  // Variable default value.
  defaultValue: any;
};

export type PbButtonElementClickHandlerPlugin<TVariables = Record<string, any>> = Plugin & {
  type: "pb-page-element-button-click-handler";
  // Title shown in the Page Builder button configuration settings;
  title: string;
  // List of variables the user will be able to set via button "Action" settings.
  variables?: PbButtonElementClickHandlerVariable[];
  // Your custom button handler, receives the variables set by the user.
  handler: (params: { variables: TVariables }) => void | Promise<void>;
};`}
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