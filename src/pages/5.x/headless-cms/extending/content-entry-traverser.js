/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { CanIUseThis } from "@/components/CanIUseThis";
import { WhatYouWillLearn } from "@/components/WhatYouWillLearn";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Content Entry Traverser",
  "description": "Learn about the Content Entry Traverser, and how to dynamically extract values from content entries",
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
  "title": "Using a Traverser",
  "slug": "using-a-traverser",
  "children": []
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




<CanIUseThis since={"5.40.0"} mdxType="CanIUseThis" />
<WhatYouWillLearn mdxType="WhatYouWillLearn">
<ul>
<li parentName="ul">{`what is a Content Entry Traverser`}</li>
<li parentName="ul">{`how to extract values from any content entry`}</li>
</ul>
</WhatYouWillLearn>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`Content entry traverser is a utility which allows you to traverse a content entry, and run a callback for every available value. If you’ve ever used Abstract Syntax Trees (AST), then this should be very familiar. A traverser is created using a given content model. Using the content model definition, the traverser can then reliably visit every key/value pair in the give content entry, and give you its context: field definition, current key path within the entry, etc.`}</p>
<p>{`A tool like this is very handy when you need to process a content entry based on some criteria, extract some field values, apply asynchronous transformations (e.g., translations using an external system), and so on.`}</p>
<_Heading level={2} id={"using-a-traverser"} nextElement={{
      "type": "paragraph"
    }}>Using a Traverser</_Heading>
<p>{`Let’s imagine you want to extract `}<inlineCode parentName="p">{`text`}</inlineCode>{`, `}<inlineCode parentName="p">{`long-text`}</inlineCode>{`, and `}<inlineCode parentName="p">{`rich-text`}</inlineCode>{` field values from an `}<inlineCode parentName="p">{`article`}</inlineCode>{` content model, each time a content entry is saved:`}</p>
<Editor title="Extract values on each content entry update" lang="ts" mdxType="Editor">
{`createContextPlugin(context => {
  context.cms.onEntryAfterUpdate.subscribe(async ({ model, entry }) => {
    // We only want to process content entries of the "article" model.
    if (model.modelId !== "article") {
      return;
    }

    // Get a traverser for a desired content model.
    const traverser = await context.cms.getEntryTraverser(model.modelId);

    // Create a container for your extracted values.
    const output: Record<string, any> = {};

    // Whitelist filed types to process.
    const includeFieldTypes = ["text", "long-text", "rich-text"];

    // Traverse the content entry values.
    await traverser.traverse(entry.values, ({ field, value, path }) => {
      if (!includeFieldTypes.includes(field.type)) {
        return;
      }

      output[path] = value;
    });

    // Do something with the \`output\`!
  });
});`}
</Editor>
<p>{`What we did here is as follows:`}</p>
<ul>
<li parentName="ul">{`created a `}<inlineCode parentName="li">{`Context`}</inlineCode>{` plugin for the GraphQL API`}</li>
<li parentName="ul">{`subscribed to the `}<inlineCode parentName="li">{`onEntryAfterUpdate`}</inlineCode>{` lifecycle events`}</li>
<li parentName="ul">{`requested a traverser object for a specific content model`}</li>
<li parentName="ul">{`defined a list of field types we’re interested in`}</li>
<li parentName="ul">{`ran a traverser on the entry values which we received in the event payload`}</li>
<li parentName="ul">{`collect `}<inlineCode parentName="li">{`path`}</inlineCode>{` and `}<inlineCode parentName="li">{`value`}</inlineCode>{` of the fields we’re interested in`}</li>
</ul>
<p><inlineCode parentName="p">{`path`}</inlineCode>{` is an interesting property, because it does a lot of thinking for you. If you have a content model with nested objects, dynamic zones, maybe even arrays of objects, the `}<inlineCode parentName="p">{`path`}</inlineCode>{` will point to an exact depth and array index of the current value being visited.`}</p>
<p>{`Here’s an imaginary output you could get from a relatively complex content model:`}</p>
<Editor title="Example Data" lang="json" mdxType="Editor">
{`{
  "title": "Article #1",
  "description": "This is our first article.",
  "content.0.title": "Hero #1",
  "content.1.settings.title": "Title",
  "content.1.settings.seo.0.title": "title-0",
  "content.1.settings.seo.1.title": "title-1"
}`}
</Editor>
<p>{`Now you can further process the extracted data, send it to remote APIs, etc. The exact value path allows you to easily set the value back to its original position in the content entry, granted the entry doesn’t change in the meantime (in which case you might set your data to a wrong index).`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;