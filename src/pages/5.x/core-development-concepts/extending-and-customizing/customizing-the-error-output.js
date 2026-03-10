/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Customizing the Error Output",
  "description": "Learn how to set a custom error handler to modify the error output",
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
  "title": "Introduction",
  "slug": "introduction",
  "children": []
}, {
  "title": "Creating the Modifier Plugin to Set a Custom Error Handler",
  "slug": "creating-the-modifier-plugin-to-set-a-custom-error-handler",
  "children": []
}, {
  "title": "Example: Create a Custom Handler via Class",
  "slug": "example-create-a-custom-handler-via-class",
  "children": []
}, {
  "title": "Example: Create a Custom Handler via Function",
  "slug": "example-create-a-custom-handler-via-function",
  "children": []
}, {
  "title": "Registering the Plugin",
  "slug": "registering-the-plugin",
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



<Alert type="success" title="What you'll learn" mdxType="Alert">
<ul>
<li parentName="ul">{`how to set a custom error handler`}</li>
<li parentName="ul">{`how to modify the error output`}</li>
</ul>
</Alert>
<_Heading level={2} id={"introduction"} nextElement={{
      "type": "paragraph"
    }}>Introduction</_Heading>
<p>{`In the `}<inlineCode parentName="p">{`5.x`}</inlineCode>{` version we added a possibility for users to modify our `}<inlineCode parentName="p">{`Fastify`}</inlineCode>{` handler instance, via the `}<inlineCode parentName="p">{`ModifyFastifyPlugin`}</inlineCode>{`. To find our more on how and why we use `}<inlineCode parentName="p">{`Fastify`}</inlineCode>{`, please read this `}<_Link href="/docs/5.x/core-development-concepts/basics/routes-and-events">{`article`}</_Link>{`.`}</p>
<p>{`With the given plugin user can change and add anything to the `}<inlineCode parentName="p">{`Fastify`}</inlineCode>{` instance, including the error handler.`}</p>
<p>{`We have our built-in error handler, but if it does not suit the user, they can change it.`}</p>
<_Heading level={2} id={"creating-the-modifier-plugin-to-set-a-custom-error-handler"} nextElement={{
      "type": "paragraph"
    }}>Creating the Modifier Plugin to Set a Custom Error Handler</_Heading>
<p>{`There is a plugin class, `}<inlineCode parentName="p">{`ModifyFastifyPlugin`}</inlineCode>{`, which user can construct, or they can use a function which in turn constructs the plugin from the `}<inlineCode parentName="p">{`ModifyFastifyPlugin`}</inlineCode>{` class.`}</p>
<_Heading level={2} id={"example-create-a-custom-handler-via-class"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>Example: Create a Custom Handler via Class</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { ModifyFastifyPlugin } from "@webiny/handler";

const plugin = new ModifyFastifyPlugin(instance => {
  instance.setErrorHandler(async (error, request, reply) => {
    return reply
      .status(500)
      .headers({
        "Cache-Control": "no-store"
      })
      .send({
        ...error,
        myCustomErrorClassHandler: true
      });
  });
});`}
</Editor>
<_Heading level={2} id={"example-create-a-custom-handler-via-function"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>Example: Create a Custom Handler via Function</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { createModifyFastifyPlugin } from "@webiny/handler";

const plugin = createModifyFastifyPlugin(instance => {
  instance.setErrorHandler(async (error, request, reply) => {
    return reply
      .status(500)
      .headers({
        "Cache-Control": "no-store"
      })
      .send({
        ...error,
        myCustomErrorFunctionHandler: true
      });
  });
});`}
</Editor>
<_Heading level={2} id={"registering-the-plugin"} nextElement={{
      "type": "paragraph"
    }}>Registering the Plugin</_Heading>
<p>{`In both cases of creating the Fastify modifier plugin, users need to register the plugin the same location.`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`export const handler = createHandler({
  plugins: [
    // ... register the plugin in the plugins array of the createHandler
    plugin
  ]
});`}
</Editor>
<Alert type="warning" mdxType="Alert">
<p>{`Users `}<strong parentName="p">{`MUST`}</strong>{` register the plugin only in the GraphQL (`}<inlineCode parentName="p">{`apps/api/graphql/src/index.ts`}</inlineCode>{`) Lambda handler.`}</p>
</Alert>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;