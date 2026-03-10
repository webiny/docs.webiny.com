/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import apiKeys from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/6.0.x/core-concepts/assets/api-keys.png";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.64f62e.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Webiny SDK",
  "description": "Programmatic interface to interact with Webiny from external applications.",
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
  "title": "When to Use the SDK",
  "slug": "when-to-use-the-sdk",
  "children": []
}, {
  "title": "Installation",
  "slug": "installation",
  "children": []
}, {
  "title": "What the SDK Provides",
  "slug": "what-the-sdk-provides",
  "children": []
}, {
  "title": "Authentication",
  "slug": "authentication",
  "children": []
}, {
  "title": "Core Concepts",
  "slug": "core-concepts",
  "children": [{
    "title": "Result Pattern",
    "slug": "result-pattern",
    "children": []
  }, {
    "title": "Fields Parameter",
    "slug": "fields-parameter",
    "children": []
  }, {
    "title": "TypeScript Generics",
    "slug": "type-script-generics",
    "children": []
  }]
}, {
  "title": "Error Handling",
  "slug": "error-handling",
  "children": []
}, {
  "title": "Best Practices",
  "slug": "best-practices",
  "children": [{
    "title": "Environment Variables",
    "slug": "environment-variables",
    "children": []
  }, {
    "title": "Singleton Instance",
    "slug": "singleton-instance",
    "children": []
  }, {
    "title": "Type Safety",
    "slug": "type-safety",
    "children": []
  }]
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
const Editor = makeShortcode("Editor");
const Image = makeShortcode("Image");
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
<li parentName="ul">{`What the Webiny SDK is and when to use it`}</li>
<li parentName="ul">{`How to install and initialize the SDK`}</li>
<li parentName="ul">{`Core concepts: Result pattern, fields parameter, TypeScript generics`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`The Webiny SDK (`}<inlineCode parentName="p">{`@webiny/sdk`}</inlineCode>{`) is a TypeScript library providing a programmatic interface to interact with your Webiny instance from external JavaScript or TypeScript applications like Next.js, Vue, SvelteKit, or Node.js scripts.`}</p>
<_Heading level={2} id={"when-to-use-the-sdk"} nextElement={{
      "type": "paragraph"
    }}>When to Use the SDK</_Heading>
<p>{`The SDK is for `}<strong parentName="p">{`external applications`}</strong>{` that need to read or write content from Webiny. This is different from:`}</p>
<ul>
<li parentName="ul"><strong parentName="li">{`Admin extensions`}</strong>{` - Building within the Webiny Admin UI`}</li>
<li parentName="ul"><strong parentName="li">{`API extensions`}</strong>{` - Adding backend logic via Lambda extensions`}</li>
</ul>
<p>{`Use the SDK when your frontend or backend application lives outside Webiny and needs to interact with Webiny’s content.`}</p>
<_Heading level={2} id={"installation"} nextElement={{
      "type": "paragraph"
    }}>Installation</_Heading>
<p>{`Install the package:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`npm install @webiny/sdk`}
</Editor>
<p>{`Initialize once with your API credentials:`}</p>
<Editor title="lib/webiny.ts" lang="typescript" mdxType="Editor">
{`import { Webiny } from "@webiny/sdk";

export const sdk = new Webiny({
  token: process.env.WEBINY_API_TOKEN!,
  endpoint: process.env.WEBINY_API_ENDPOINT!,
  tenant: process.env.WEBINY_API_TENANT || "root"
});`}
</Editor>
<Alert type="info" title="Finding Your API Endpoint" mdxType="Alert">
<p>{`Run `}<inlineCode parentName="p">{`yarn webiny info`}</inlineCode>{` in your Webiny project to find your API endpoint URL. Use the base domain (e.g., `}<inlineCode parentName="p">{`https://xxx.cloudfront.net`}</inlineCode>{`), not the full path.`}</p>
</Alert>
<_Heading level={2} id={"what-the-sdk-provides"} nextElement={{
      "type": "paragraph"
    }}>What the SDK Provides</_Heading>
<p>{`The SDK provides access to Webiny applications through namespaced modules:`}</p>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Module`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Webiny App`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Operations`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`sdk.cms`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`Headless CMS`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`List, get, create, update, publish, unpublish entries`}</td>
</tr>
</tbody>
</table>
<_Heading level={2} id={"authentication"} nextElement={{
      "type": "paragraph"
    }}>Authentication</_Heading>
<p>{`The SDK authenticates using an `}<strong parentName="p">{`API key token`}</strong>{` generated in the Webiny Admin application (Settings → API Keys). Without a valid token, all SDK calls are rejected.`}</p>
<Image src={apiKeys} alt="API Keys in Webiny Admin" mdxType="Image" />
<p>{`API keys have configurable permissions for each Webiny application (Headless CMS, File Manager, etc.).`}</p>
<_Heading level={2} id={"core-concepts"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Core Concepts</_Heading>
<_Heading level={3} id={"result-pattern"} nextElement={{
      "type": "paragraph"
    }}>Result Pattern</_Heading>
<p>{`Every SDK method returns a `}<strong parentName="p">{`Result object`}</strong>{` instead of throwing errors. Check success with `}<inlineCode parentName="p">{`isOk()`}</inlineCode>{`:`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`const result = await sdk.cms.listEntries({
  modelId: "product",
  fields: ["id"]
});

if (result.isOk()) {
  console.log(result.value.data);
} else {
  console.error(result.error.message);
}`}
</Editor>
<p>{`This makes error handling explicit—you can’t accidentally forget to handle failures.`}</p>
<_Heading level={3} id={"fields-parameter"} nextElement={{
      "type": "paragraph"
    }}>Fields Parameter</_Heading>
<p>{`The `}<inlineCode parentName="p">{`fields`}</inlineCode>{` parameter specifies which fields to return, keeping responses lean:`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`const result = await sdk.cms.listEntries({
  modelId: "product",
  fields: ["id", "values.name", "values.price"]
});`}
</Editor>
<p>{`When omitted, the SDK returns all fields. The `}<inlineCode parentName="p">{`depth`}</inlineCode>{` parameter (default: `}<inlineCode parentName="p">{`1`}</inlineCode>{`) controls how deeply reference fields are resolved.`}</p>
<_Heading level={3} id={"type-script-generics"} nextElement={{
      "type": "paragraph"
    }}>TypeScript Generics</_Heading>
<p>{`SDK methods accept generic type parameters for fully typed returns:`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import type { CmsEntryData } from "@webiny/sdk";

interface Product {
  name: string;
  price: number;
}

const result = await sdk.cms.listEntries<Product>({
  modelId: "product",
  fields: ["id", "values.name", "values.price"]
});

if (result.isOk()) {
  // result.value.data is typed as CmsEntryData<Product>[]
  const products = result.value.data;
}`}
</Editor>
<_Heading level={2} id={"error-handling"} nextElement={{
      "type": "paragraph"
    }}>Error Handling</_Heading>
<p>{`All SDK methods return Result objects. Always check for errors:`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`const result = await sdk.cms.listEntries({ modelId: "product" });

if (result.isOk()) {
  // Success path
  const entries = result.value.data;
} else {
  // Error path
  console.error("Error:", result.error.message);
  console.error("Code:", result.error.code);
}`}
</Editor>
<_Heading level={2} id={"best-practices"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Best Practices</_Heading>
<_Heading level={3} id={"environment-variables"} nextElement={{
      "type": "paragraph"
    }}>Environment Variables</_Heading>
<p>{`Store credentials in environment variables:`}</p>
<Editor title=".env" lang="bash" mdxType="Editor">
{`WEBINY_API_TOKEN=your-api-token
WEBINY_API_ENDPOINT=https://xxx.cloudfront.net
WEBINY_API_TENANT=root`}
</Editor>
<_Heading level={3} id={"singleton-instance"} nextElement={{
      "type": "paragraph"
    }}>Singleton Instance</_Heading>
<p>{`Create one SDK instance and reuse it:`}</p>
<Editor title="lib/webiny.ts" lang="typescript" mdxType="Editor">
{`import { Webiny } from "@webiny/sdk";

export const sdk = new Webiny({
  token: process.env.WEBINY_API_TOKEN!,
  endpoint: process.env.WEBINY_API_ENDPOINT!,
  tenant: process.env.WEBINY_API_TENANT || "root"
});`}
</Editor>
<p>{`Import this instance throughout your application.`}</p>
<_Heading level={3} id={"type-safety"} nextElement={{
      "type": "paragraph"
    }}>Type Safety</_Heading>
<p>{`Define interfaces for your content models:`}</p>
<Editor title="types/product.ts" lang="typescript" mdxType="Editor">
{`export interface Product {
  name: string;
  price: number;
  description: string;
  inStock: boolean;
}`}
</Editor>
<p>{`Use generics with SDK calls:`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`const result = await sdk.cms.listEntries<Product>({
  modelId: "product",
  fields: ["id", "values.name", "values.price"]
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