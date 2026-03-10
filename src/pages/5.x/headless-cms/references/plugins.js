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
  "description": "Headless CMS plugin references.",
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
    "title": "cms-content-form-renderer",
    "slug": "cms-content-form-renderer",
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
<_Heading level={3} id={"cms-content-form-renderer"} nextElement={{
      "type": "code",
      "lang": "ts",
      "meta": null
    }}><code>cms-content-form-renderer</code></_Heading>
<Editor title="" lang="ts" mdxType="Editor">
{`/**
 * Define a custom form layout renderer for a specific content model.
 */
export interface CmsContentFormRendererPlugin extends Plugin {
  /**
   * A plugin type.
   */
  type: "cms-content-form-renderer";
  /**
   * Content model ID that will use this renderer.
   */
  modelId: string;

  /**
   * A function that will render a custom form layout.
   */
  render(props: {
    /**
     * Content model that is being rendered.
     */
    contentModel: CmsEditorContentModel;
    /**
     * Content entry data handled by the Form element.
     */
    data: Record<string, any>;
    /**
     * A component to bind data to the Form.
     */
    Bind: BindComponent;
    /**
     * Content model fields to render.
     */
    fields: Record<string, React.ReactElement>;
  }): React.ReactNode;
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