/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { CanIUseThis } from "@/components/CanIUseThis";
import { Image } from "@/components/Image";
import { WhatYouWillLearn } from "@/components/WhatYouWillLearn";
import hcmsRteHtmlOutput from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/extending/assets/hcms-rte-html-output.png";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Create a Rich Text Content Renderer",
  "description": "Learn how to implement a custom rich text content renderer, or enhance the default one.",
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
  "title": "Create a Custom Renderer",
  "slug": "create-a-custom-renderer",
  "children": []
}, {
  "title": "Intercept Existing Renderer",
  "slug": "intercept-existing-renderer",
  "children": []
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
const Alert = makeShortcode("Alert");
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






<CanIUseThis since={"5.39.0"} mdxType="CanIUseThis" />
<WhatYouWillLearn mdxType="WhatYouWillLearn">
<ul>
<li parentName="ul">{`how to add a custom rich text content renderer`}</li>
</ul>
</WhatYouWillLearn>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`Headless CMS contains a rich text content field, which allows users to create content using a rich text editor. By default, Webiny uses the `}<a parentName="p" {...{
        "href": "https://lexical.dev/"
      }}>{`Lexical Editor`}</a>{`, but developers are able to implement whatever editor they want for their projects. This means that the data stored into the database can, and most likely will, be very different between various rich text editors.`}</p>
<p>{`The Headless CMS GraphQL schema exposes a `}<inlineCode parentName="p">{`format`}</inlineCode>{` parameter on rich text fields, to allow content consumers to request a specific format to be returned to them from the API. Out of the box, Webiny provides an HTML renderer for its default Lexical editor implementation. However, your project might use a different rich text editor, or you might want to support a different output format, for example, markdown.`}</p>
<Image src={hcmsRteHtmlOutput} alt="Headless CMS HTML Output" mdxType="Image" />
<p>{`To inspect the implementation of our built-in Lexical-to-HTML renderer, see the `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/v5.39.0/packages/api-headless-cms/src/htmlRenderer/createLexicalHTMLRenderer.ts"
      }}>{`source code on Github`}</a>{`.`}</p>
<Alert type="warning" title="Plugin Registration" mdxType="Alert">
<p>{`Code examples below demonstrate the creation of plugin instances which need to be registered in the `}<inlineCode parentName="p">{`apps/api/graphql/src/index.ts`}</inlineCode>{`. Simply import your plugins, and append them to the bottom of the plugins array in the handler definition.`}</p>
</Alert>
<_Heading level={2} id={"create-a-custom-renderer"} nextElement={{
      "type": "jsx"
    }}>Create a Custom Renderer</_Heading>
<Alert type="warning" title={"Create a plugin file"} mdxType="Alert">
<p>{`The code example is pointing to a file which doesn’t yet exist in your project. Create this file, or place the code into a different location of choice.`}</p>
</Alert>
<p>{`To create a custom renderer, create a plugin similar to the one shown in the code example below.`}</p>
<Editor title="apps/api/graphql/src/plugins/richTextRenderer.ts" lang="ts" mdxType="Editor">
{`import { createRichTextRenderer } from "@webiny/api-headless-cms";

export const myRichTextRenderer = () => {
  return createRichTextRenderer("html", contents => {
    // \`contents\` is the raw CMS field value that comes from the storage layer.

    // Lazy load your content renderer/converter, and run it.
    return import(/* webpackChunkName: "myHTMLRenderer" */ "./myHTMLRenderer").then(
      ({ myHTMLRenderer }) => {
        return myHTMLRenderer(contents);
      }
    );
  });
};`}
</Editor>
<p>{`This creates a renderer that is executed when the content consumer specifies `}<inlineCode parentName="p">{`html`}</inlineCode>{` as the output format of the rich text field in the GraphQL query. `}<inlineCode parentName="p">{`myHTMLRenderer`}</inlineCode>{` is a fictional function to demonstrate the use of the plugin. The implementation of the actual HTML (or any other format) rendering will depend on the rich text editor that you use in your project, and the format you’re rendering to.`}</p>
<p>{`You’ve probably noticed the use of the dynamic import, and the `}<inlineCode parentName="p">{`webpackChunkName`}</inlineCode>{` inline comment. We highly recommend you use code splitting to only load your renderer when it’s actually being used. This will reduce the size of the main code bundle that the Lambda function will have to process for common request processing. The `}<inlineCode parentName="p">{`webpackChunkName`}</inlineCode>{` is recommended for easier debugging, as this name will be used as the chunk name, when the code bundle is built.`}</p>
<_Heading level={2} id={"intercept-existing-renderer"} nextElement={{
      "type": "paragraph"
    }}>Intercept Existing Renderer</_Heading>
<p>{`Sometimes, you might want to let the default renderer do its job, but fine tune the output before returning it to the consumer. This way, you can build multiple plugins that form a chain of transformations. `}</p>
<p>{`When there are multiple plugins registered to handle the same format, a chain is created, where the last plugin registered will be the first one executed. You will be able to call the next plugin in the chain using the `}<inlineCode parentName="p">{`next`}</inlineCode>{` callback. This way you can completely intercept all previous plugins, and either skip them all together, or execute them at will.`}</p>
<Editor title="" lang="ts" mdxType="Editor">
{`import { createRichTextRenderer } from "@webiny/api-headless-cms";

createRichTextRenderer<string>({
  format: "html",
  async render(contents, next) {
    // Call the previous renderer!
    const html = await next(contents);

    // In case the previous renderer doesn't exist, or returns a falsy value, return a fallback HTML value.
    if (!html) {
      return "<span>Fallback output!</span>";
    }

    // Further process the HTML.
    return \`\${html}<br/><span>An additional comment!</span>\`;
  }
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