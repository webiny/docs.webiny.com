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
  "title": "Router",
  "description": "Router components and hooks",
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
    "title": "Route",
    "slug": "route",
    "children": []
  }]
}, {
  "title": "Hooks",
  "slug": "hooks",
  "children": [{
    "title": "useRoute",
    "slug": "use-route",
    "children": []
  }, {
    "title": "useRouter",
    "slug": "use-router",
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
<li parentName="ul">{`What is exported from `}<inlineCode parentName="li">{`webiny/admin/router`}</inlineCode>{`?`}</li>
<li parentName="ul">{`How to import and use each exported item?`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`This page documents everything exported from `}<inlineCode parentName="p">{`webiny/admin/router`}</inlineCode>{`. Import any of the items below directly from this path in your Webiny extensions.`}</p>
<p><strong parentName="p">{`Components`}</strong></p>
<SymbolList symbols={[{
      name: "Route",
      anchor: "route"
    }]} mdxType="SymbolList" />
<p><strong parentName="p">{`Hooks`}</strong></p>
<SymbolList symbols={[{
      name: "useRoute",
      anchor: "use-route"
    }, {
      name: "useRouter",
      anchor: "use-router"
    }]} mdxType="SymbolList" />
<_Heading level={2} id={"components"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Components</_Heading>
<_Heading level={3} id={"route"} nextElement={{
      "type": "paragraph"
    }}><code>Route</code></_Heading>
<p><strong parentName="p">{`Class`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/router`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { Route } from "webiny/admin/router";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export class Route<TParams extends RouteParamsDefinition | undefined = undefined> {
  private readonly route: RouteParams<TParams>;
  private readonly schema: TParams extends RouteParamsDefinition
    ? RouteParamsInfer<TParams>
    : undefined;
  constructor(route: RouteParams<TParams>);
  get name();
  get path();
  get params(): TParams extends RouteParamsDefinition ? RouteParamsInfer<TParams> : undefined;
  private coerceParams<T extends Record<string, z.ZodTypeAny>>(shape: T);
}`}
</Editor>
<_Heading level={2} id={"hooks"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Hooks</_Heading>
<_Heading level={3} id={"use-route"} nextElement={{
      "type": "paragraph"
    }}><code>useRoute</code></_Heading>
<p><strong parentName="p">{`Function`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/router`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { useRoute } from "webiny/admin/router";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export function useRoute<TParams extends RouteParamsDefinition | undefined = undefined>(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  route?: Route<TParams>
);`}
</Editor>
<_Heading level={3} id={"use-router"} nextElement={{
      "type": "paragraph"
    }}><code>useRouter</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/router`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { useRouter } from "webiny/admin/router";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export const useRouter = () => {
    const { presenter } = useFeature(RouterFeature);
    const container = useContainer();
    const registry = container.resolve(RouteElementRegistry);

    return {
        goToRoute: presenter.goToRoute.bind(presenter),
        getLink: presenter.getLink.bind(presenter),
        onRouteExit: presenter.onRouteExit.bind(presenter),
        setRoutes: (routes: Reac`}
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