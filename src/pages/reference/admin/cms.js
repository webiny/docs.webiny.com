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
  "title": "CMS",
  "description": "CMS admin hooks, types and utilities",
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
    "title": "Routes",
    "slug": "routes",
    "children": []
  }]
}, {
  "title": "Hooks",
  "slug": "hooks",
  "children": [{
    "title": "useLazyQuery",
    "slug": "use-lazy-query",
    "children": []
  }, {
    "title": "useModel",
    "slug": "use-model",
    "children": []
  }, {
    "title": "useMutation",
    "slug": "use-mutation",
    "children": []
  }, {
    "title": "usePermission",
    "slug": "use-permission",
    "children": []
  }, {
    "title": "useQuery",
    "slug": "use-query",
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
    "title": "CmsContentEntry",
    "slug": "cms-content-entry",
    "children": []
  }, {
    "title": "CmsIdentity",
    "slug": "cms-identity",
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
  }, {
    "title": "CmsModel",
    "slug": "cms-model",
    "children": []
  }, {
    "title": "CmsModelField",
    "slug": "cms-model-field",
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
<li parentName="ul">{`What is exported from `}<inlineCode parentName="li">{`webiny/admin/cms`}</inlineCode>{`?`}</li>
<li parentName="ul">{`How to import and use each exported item?`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`This page documents everything exported from `}<inlineCode parentName="p">{`webiny/admin/cms`}</inlineCode>{`. Import any of the items below directly from this path in your Webiny extensions.`}</p>
<p><strong parentName="p">{`Components`}</strong></p>
<SymbolList symbols={[{
      name: "Routes",
      anchor: "routes"
    }]} mdxType="SymbolList" />
<p><strong parentName="p">{`Hooks`}</strong></p>
<SymbolList symbols={[{
      name: "useLazyQuery",
      anchor: "use-lazy-query"
    }, {
      name: "useModel",
      anchor: "use-model"
    }, {
      name: "useMutation",
      anchor: "use-mutation"
    }, {
      name: "usePermission",
      anchor: "use-permission"
    }, {
      name: "useQuery",
      anchor: "use-query"
    }]} mdxType="SymbolList" />
<p><strong parentName="p">{`Types`}</strong></p>
<SymbolList symbols={[{
      name: "CmsBaseLayoutDescriptor",
      anchor: "cms-base-layout-descriptor"
    }, {
      name: "CmsContentEntry",
      anchor: "cms-content-entry"
    }, {
      name: "CmsIdentity",
      anchor: "cms-identity"
    }, {
      name: "CmsLayoutDescriptor",
      anchor: "cms-layout-descriptor"
    }, {
      name: "CmsLayoutDescriptorRendererPlugin",
      anchor: "cms-layout-descriptor-renderer-plugin"
    }, {
      name: "CmsLayoutFieldTypePlugin",
      anchor: "cms-layout-field-type-plugin"
    }, {
      name: "CmsModel",
      anchor: "cms-model"
    }, {
      name: "CmsModelField",
      anchor: "cms-model-field"
    }]} mdxType="SymbolList" />
<_Heading level={2} id={"components"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Components</_Heading>
<_Heading level={3} id={"routes"} nextElement={{
      "type": "paragraph"
    }}><code>Routes</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/cms`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { Routes } from "webiny/admin/cms";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export const Routes = {
    ContentModelGroups: {
        List: new Route({
            name: "Cms/ContentModelGroups/List",
            path: "/cms/content-model-groups",
            params: zod => {
                return {
                    id: zod.string().optional(),
                    new: zod.boolean().optional()
                };
            }
        })
    },

    ContentEntries: {
`}
</Editor>
<_Heading level={2} id={"hooks"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Hooks</_Heading>
<_Heading level={3} id={"use-lazy-query"} nextElement={{
      "type": "paragraph"
    }}><code>useLazyQuery</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/cms`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { useLazyQuery } from "webiny/admin/cms";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export const useLazyQuery = function <TData = any, TVariables = OperationVariables>(
  query: DocumentNode,
  options: LazyQueryHookOptions<TData, TVariables> = {}
): QueryTuple<TData, TVariables> {
  const { apolloClient } = useCms();

  return apolloUseLazyQuery<TData, TVariables>(query, {
    client: apolloClient,
    ...options
  });
};`}
</Editor>
<_Heading level={3} id={"use-model"} nextElement={{
      "type": "paragraph"
    }}><code>useModel</code></_Heading>
<p><strong parentName="p">{`Function`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/cms`}</inlineCode></p>
<p>{`Get model from the current context.`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { useModel } from "webiny/admin/cms";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export function useModel(): UseModelReturnType;`}
</Editor>
<_Heading level={3} id={"use-mutation"} nextElement={{
      "type": "paragraph"
    }}><code>useMutation</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/cms`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { useMutation } from "webiny/admin/cms";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export const useMutation = function <TData = any, TVariables = OperationVariables>(
  mutation: DocumentNode,
  options: MutationHookOptions<TData, TVariables> = {}
): MutationTuple<TData, TVariables> {
  const { apolloClient } = useCms();

  return apolloUseMutation<TData, TVariables>(mutation, {
    client: apolloClient,
    ...options
  });
};`}
</Editor>
<_Heading level={3} id={"use-permission"} nextElement={{
      "type": "paragraph"
    }}><code>usePermission</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/cms`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { usePermission } from "webiny/admin/cms";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export const usePermission = makeDecoratable(() => {
    const { identity } = useIdentity();

    const hasFullAccess = useMemo(() => !!identity.getPermission("cms.*"), [identity]);

    const canRead = useCallback(
        (permissionName: string): boolean => {
            if (hasFullAccess) {
                return true;
            }
            const permissions =
                identity.getP`}
</Editor>
<_Heading level={3} id={"use-query"} nextElement={{
      "type": "paragraph"
    }}><code>useQuery</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/cms`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { useQuery } from "webiny/admin/cms";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export const useQuery = function <TData = any, TVariables = OperationVariables>(
  query: DocumentNode,
  options: QueryHookOptions<TData, TVariables> = {}
): QueryResult<TData, TVariables> {
  const { apolloClient } = useCms();

  return apolloUseQuery<TData, TVariables>(query, {
    client: apolloClient,
    skip: !apolloClient,
    ...options
  });
};`}
</Editor>
<_Heading level={2} id={"types"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Types</_Heading>
<_Heading level={3} id={"cms-base-layout-descriptor"} nextElement={{
      "type": "paragraph"
    }}><code>CmsBaseLayoutDescriptor</code></_Heading>
<p><strong parentName="p">{`Type`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/cms`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import type { CmsBaseLayoutDescriptor } from "webiny/admin/cms";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export interface CmsBaseLayoutDescriptor {
  id: string;
  type: string;
  rules?: FieldRule[];
}`}
</Editor>
<_Heading level={3} id={"cms-content-entry"} nextElement={{
      "type": "paragraph"
    }}><code>CmsContentEntry</code></_Heading>
<p><strong parentName="p">{`Type`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/cms`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import type { CmsContentEntry } from "webiny/admin/cms";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export interface CmsContentEntry<TValues extends GenericRecord = GenericRecord> { ... }`}
</Editor>
<_Heading level={3} id={"cms-identity"} nextElement={{
      "type": "paragraph"
    }}><code>CmsIdentity</code></_Heading>
<p><strong parentName="p">{`Type`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/cms`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import type { CmsIdentity } from "webiny/admin/cms";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export interface CmsIdentity {
  id: string;
  displayName: string;
  type: string;
}`}
</Editor>
<_Heading level={3} id={"cms-layout-descriptor"} nextElement={{
      "type": "paragraph"
    }}><code>CmsLayoutDescriptor</code></_Heading>
<p><strong parentName="p">{`Type`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/cms`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import type { CmsLayoutDescriptor } from "webiny/admin/cms";`}
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
<p><strong parentName="p">{`Type`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/cms`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import type { CmsLayoutDescriptorRendererPlugin } from "webiny/admin/cms";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export interface CmsLayoutDescriptorRendererPlugin extends Plugin { ... }`}
</Editor>
<_Heading level={3} id={"cms-layout-field-type-plugin"} nextElement={{
      "type": "paragraph"
    }}><code>CmsLayoutFieldTypePlugin</code></_Heading>
<p><strong parentName="p">{`Type`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/cms`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import type { CmsLayoutFieldTypePlugin } from "webiny/admin/cms";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export interface CmsLayoutFieldTypePlugin extends Plugin { ... }`}
</Editor>
<_Heading level={3} id={"cms-model"} nextElement={{
      "type": "paragraph"
    }}><code>CmsModel</code></_Heading>
<p><strong parentName="p">{`Type`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/cms`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import type { CmsModel } from "webiny/admin/cms";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export interface CmsModel { ... }`}
</Editor>
<_Heading level={3} id={"cms-model-field"} nextElement={{
      "type": "paragraph"
    }}><code>CmsModelField</code></_Heading>
<p><strong parentName="p">{`Type`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/cms`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import type { CmsModelField } from "webiny/admin/cms";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export type CmsModelField<T = unknown> = T & { ... };`}
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