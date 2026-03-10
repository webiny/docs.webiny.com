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
  "title": "Model",
  "description": "Reference for webiny/admin/cms/model",
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
  "title": "Hooks",
  "slug": "hooks",
  "children": [{
    "title": "useEffectiveRules",
    "slug": "use-effective-rules",
    "children": []
  }, {
    "title": "useFieldAccessControlRules",
    "slug": "use-field-access-control-rules",
    "children": []
  }]
}, {
  "title": "Types",
  "slug": "types",
  "children": [{
    "title": "CmsBaseLayoutDescriptor",
    "slug": "cms-base-layout-descriptor",
    "children": []
  }, {
    "title": "CmsLayoutDescriptor",
    "slug": "cms-layout-descriptor",
    "children": []
  }, {
    "title": "CmsLayoutDescriptorRendererPlugin",
    "slug": "cms-layout-descriptor-renderer-plugin",
    "children": []
  }, {
    "title": "CmsLayoutFieldTypePlugin",
    "slug": "cms-layout-field-type-plugin",
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
<li parentName="ul">{`What is exported from `}<inlineCode parentName="li">{`webiny/admin/cms/model`}</inlineCode>{`?`}</li>
<li parentName="ul">{`How to import and use each exported item?`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`This page documents everything exported from `}<inlineCode parentName="p">{`webiny/admin/cms/model`}</inlineCode>{`. Import any of the items below directly from this path in your Webiny extensions.`}</p>
<p><strong parentName="p">{`Hooks`}</strong></p>
<SymbolList symbols={[{
      name: "useEffectiveRules",
      anchor: "use-effective-rules"
    }, {
      name: "useFieldAccessControlRules",
      anchor: "use-field-access-control-rules"
    }]} mdxType="SymbolList" />
<p><strong parentName="p">{`Types`}</strong></p>
<SymbolList symbols={[{
      name: "CmsBaseLayoutDescriptor",
      anchor: "cms-base-layout-descriptor"
    }, {
      name: "CmsLayoutDescriptor",
      anchor: "cms-layout-descriptor"
    }, {
      name: "CmsLayoutDescriptorRendererPlugin",
      anchor: "cms-layout-descriptor-renderer-plugin"
    }, {
      name: "CmsLayoutFieldTypePlugin",
      anchor: "cms-layout-field-type-plugin"
    }]} mdxType="SymbolList" />
<_Heading level={2} id={"hooks"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Hooks</_Heading>
<_Heading level={3} id={"use-effective-rules"} nextElement={{
      "type": "paragraph"
    }}><code>useEffectiveRules</code></_Heading>
<p><strong parentName="p">{`Function`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/cms/model`}</inlineCode></p>
<p>{`Composes useParentRules and useFieldRules into a single hook
that returns the effective (intersected) rules.`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { useEffectiveRules } from "webiny/admin/cms/model";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export function useEffectiveRules(item: HasRules): EffectiveFieldRules;`}
</Editor>
<_Heading level={3} id={"use-field-access-control-rules"} nextElement={{
      "type": "paragraph"
    }}><code>useFieldAccessControlRules</code></_Heading>
<p><strong parentName="p">{`Function`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/cms/model`}</inlineCode></p>
<p>{`Hook that evaluates access control rules for the current identity.
Does not require `}<inlineCode parentName="p">{`bindParentName`}</inlineCode>{` — only identity-based permissions.`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { useFieldAccessControlRules } from "webiny/admin/cms/model";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export function useFieldAccessControlRules(
  item: HasRules
): Pick<EffectiveFieldRules, "canView" | "canEdit">;`}
</Editor>
<_Heading level={2} id={"types"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Types</_Heading>
<_Heading level={3} id={"cms-base-layout-descriptor"} nextElement={{
      "type": "paragraph"
    }}><code>CmsBaseLayoutDescriptor</code></_Heading>
<p><strong parentName="p">{`Type`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/cms/model`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import type { CmsBaseLayoutDescriptor } from "webiny/admin/cms/model";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export interface CmsBaseLayoutDescriptor {
  id: string;
  type: string;
  rules?: FieldRule[];
}`}
</Editor>
<_Heading level={3} id={"cms-layout-descriptor"} nextElement={{
      "type": "paragraph"
    }}><code>CmsLayoutDescriptor</code></_Heading>
<p><strong parentName="p">{`Type`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/cms/model`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import type { CmsLayoutDescriptor } from "webiny/admin/cms/model";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export type CmsLayoutDescriptor =
  | CmsSeparatorLayoutDescriptor
  | CmsAlertLayoutDescriptor
  | CmsTabLayoutDescriptor
  | CmsBaseLayoutDescriptor;`}
</Editor>
<_Heading level={3} id={"cms-layout-descriptor-renderer-plugin"} nextElement={{
      "type": "paragraph"
    }}><code>CmsLayoutDescriptorRendererPlugin</code></_Heading>
<p><strong parentName="p">{`Type`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/cms/model`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import type { CmsLayoutDescriptorRendererPlugin } from "webiny/admin/cms/model";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export interface CmsLayoutDescriptorRendererPlugin extends Plugin { ... }`}
</Editor>
<_Heading level={3} id={"cms-layout-field-type-plugin"} nextElement={{
      "type": "paragraph"
    }}><code>CmsLayoutFieldTypePlugin</code></_Heading>
<p><strong parentName="p">{`Type`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/cms/model`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import type { CmsLayoutFieldTypePlugin } from "webiny/admin/cms/model";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export interface CmsLayoutFieldTypePlugin extends Plugin { ... }`}
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