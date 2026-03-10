/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { CanIUseThis } from "@/components/CanIUseThis";
import { WhatYouWillLearn } from "@/components/WhatYouWillLearn";
import editorWithPreview from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/extending/assets/cms-live-preview-editor.png";
import articleModel from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/extending/assets/cms-live-preview-model.png";
import articleContentField from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/extending/assets/cms-live-preview-dz-content.png";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Content Entry Live Preview",
  "description": "Learn how to implement a Live Preview component for Webiny Headless CMS.",
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
  "title": "Goals",
  "slug": "goals",
  "children": []
}, {
  "title": "Content Model",
  "slug": "content-model",
  "children": []
}, {
  "title": "Add the Preview Pane",
  "slug": "add-the-preview-pane",
  "children": []
}, {
  "title": "Listen for Data Changes",
  "slug": "listen-for-data-changes",
  "children": []
}, {
  "title": "Preview App",
  "slug": "preview-app",
  "children": []
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
const Alert = makeShortcode("Alert");
const Gallery = makeShortcode("Gallery");
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







<CanIUseThis since={"5.40.0"} mdxType="CanIUseThis" />
<WhatYouWillLearn mdxType="WhatYouWillLearn">
<ul>
<li parentName="ul">{`how to listen for changes on the Content Entry form`}</li>
<li parentName="ul">{`how to implement a Live Preview (visual feedback) for content creators`}</li>
</ul>
</WhatYouWillLearn>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`As a content creator, using a Headless CMS can be daunting, because you don’t get immediate feedback on what the content you’re creating will look like on your website. There’s a way to make this possible in the Headless CMS.`}</p>
<_Heading level={2} id={"goals"} nextElement={{
      "type": "jsx"
    }}>Goals</_Heading>
<Alert type="warning" title="Content Preview Only!" mdxType="Alert">
<p>{`The solution presented in this article only covers the editing experience in the Admin app. It
DOES NOT cover actual content rendering in your web application framework of choice. The goal of
this article is to show a generic way of implementing a Live Preview in the Admin app, which
reflects your frontend design and uses your frontend components to render content. Rendering and
serving of actual website pages is left to you.`}</p>
</Alert>
<p>{`The goal is to create a separate “preview” app (this can be a dedicated route in your existing website app, or a completely dedicated app) which is receiving changes from the Admin app as soon as changes are made to the data in the content entry editor. Whatever the frontend implementation, we’ll refer to it as a `}<strong parentName="p">{`Preview`}</strong>{` app from this point on in the article.`}</p>
<Alert type={"success"} title={"Framework Agnostic"} mdxType="Alert">
<p>{`The mechanics covered in this article are framework agnostic. The editor part of the process will be implemented in React, but the Preview app can be implemented in any JS framework. The provided Preview app implementation can easily be adapted to work in any JS framework, and the core functionality is written in plain Typescript to make it reusable.`}</p>
</Alert>
<p>{`The communication between the Admin and the Preview app is performed using the `}<a parentName="p" {...{
        "href": "https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage"
      }}>{`window.postMessage()`}</a>{` API. The preview app is embedded into the Admin app via an iframe.`}</p>
<p>{`We’ll limit the preview functionality to a single content model only, so that the preview iframe is only visible when creating content entries for the `}<strong parentName="p">{`Article`}</strong>{` content model.`}</p>
<Gallery mdxType="Gallery">
  <Image src={editorWithPreview} title={"Article Entry Editor with Preview"} mdxType="Image" />
  <Image src={articleModel} title={"Article Content Model"} mdxType="Image" />
</Gallery>
<Alert type="warning" title="Using the Source Code" mdxType="Alert">
<p>{`The full source code for this article is located in the `}<a parentName="p" {...{
          "href": "https://github.com/webiny/webiny-examples/tree/master/cms-live-preview/5.40.x"
        }}>{`Webiny Examples`}</a>{` repository. Instructions on setting up the demo source code in your own project are located in the `}<a parentName="p" {...{
          "href": "https://github.com/webiny/webiny-examples/tree/master/cms-live-preview/5.40.x/README.md"
        }}>{`README.md`}</a>{` file next to the source code.`}</p>
</Alert>
<Alert type="info" title={"Important!"} mdxType="Alert">
<p>{`In this article, we’ll be referring to `}<a parentName="p" {...{
          "href": "https://github.com/webiny/webiny-examples/tree/master/cms-live-preview/5.40.x"
        }}>{`the full source
code`}</a>{` hosted
in the Webiny Examples repository, and only describing the process and the outcomes.`}</p>
</Alert>
<_Heading level={2} id={"content-model"} nextElement={{
      "type": "paragraph"
    }}>Content Model</_Heading>
<p>{`To begin, we need to create an Article content model which represents a website article, which we want to create a Live Preview for. We’ve provided `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-examples/blob/master/cms-live-preview/5.40.x/article-model.json"
      }}>{`an export of the model`}</a>{` which you can simply `}<_Link href="/docs/5.x/user-guides/headless-cms/advanced/import-export-content-models#importing-content-models">{`import into your own project`}</_Link>{`.`}</p>
<p>{`The `}<inlineCode parentName="p">{`content`}</inlineCode>{` field of the Article content model is built using the `}<em parentName="p">{`Dynamic Zone`}</em>{` field type, which allows you to define templates that represent your frontend components (blocks of data), which the content creator can then use to write the content within the constraints of the content model.`}</p>
<Image src={articleContentField} title={"Article Content Using the Dynamic Zone Field"} mdxType="Image" />
<_Heading level={2} id={"add-the-preview-pane"} nextElement={{
      "type": "paragraph"
    }}>Add the Preview Pane</_Heading>
<p>{`To add our Preview pane to the content entry form, we’re `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-examples/blob/master/cms-live-preview/5.40.x/extensions/admin/src/AddPreviewPane.tsx"
      }}>{`decorating the ContentEntryForm component`}</a>{` and adding a new pane to the left of the original content entry form. We’re making sure this new pane is only rendered when we’re `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-examples/blob/master/cms-live-preview/5.40.x/extensions/admin/src/AddPreviewPane.tsx#L19-L23"
      }}>{`in the article content model context`}</a>{`.`}</p>
<p>{`In the source code, you’ll find a `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-examples/blob/master/cms-live-preview/5.40.x/extensions/admin/src/getPreviewUrl.ts"
      }}>{`getPreviewUrl`}</a>{` function, which you will most likely want to tweak, to point to your own route or app. How you manage these URLs is entirely up to you. Let this code serve as a starting point, and feel free to tweak it to your needs.`}</p>
<p>{`The preview pane renders an iframe, and there’s also an address bar you can use to edit the preview URL, and also reload the Preview app.`}</p>
<_Heading level={2} id={"listen-for-data-changes"} nextElement={{
      "type": "paragraph"
    }}>Listen for Data Changes</_Heading>
<p>{`To listen for changes on the content entry form, `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-examples/blob/master/cms-live-preview/5.40.x/extensions/admin/src/LivePreviewEditor.ts"
      }}>{`we decorate the useContentEntryForm hook`}</a>{`. This gives us access to the current `}<inlineCode parentName="p">{`entry`}</inlineCode>{` object, which we can then send to the Preview app for rendering.`}</p>
<p>{`In the source code, you’ll notice that there are 2 events that cause the entry to be sent to the Preview app:`}</p>
<ul>
<li parentName="ul">
<p parentName="li">{`when the Preview app is loaded in the iframe and reports to the parent (Admin) app`}</p>
</li>
<li parentName="ul">
<p parentName="li">{`when a user edits the content entry`}</p>
</li>
</ul>
<Alert type="info" title="Filter Window Messages" mdxType="Alert">
<p>{`When using the `}<inlineCode parentName="p">{`window.postMessage()`}</inlineCode>{` API, you’ll notice there’s `}<em parentName="p">{`a lot`}</em>{` of messages being sent back and forth. Not all of them are created by your code. Many of those are generated by dev tools plugins, webpack hot reload, etc. Make sure you `}<a parentName="p" {...{
          "href": "https://github.com/webiny/webiny-examples/blob/master/cms-live-preview/5.40.x/extensions/admin/src/useLivePreview.ts#L32-L34"
        }}>{`implement some kind of message filtering`}</a>{` to reduce the noise, especially when console logging.`}</p>
</Alert>
<p>{`With this, your Admin app is ready to render the Live Preview, and push changes for rendering.`}</p>
<_Heading level={2} id={"preview-app"} nextElement={{
      "type": "paragraph"
    }}>Preview App</_Heading>
<p>{`In this example, we’re using our default `}<inlineCode parentName="p">{`website`}</inlineCode>{` app to add the Live Preview functionality. The way we do it is by adding a `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-examples/blob/master/cms-live-preview/5.40.x/extensions/website/src/index.tsx"
      }}>{`custom route`}</a>{` which we’re referencing from our preview pane in the Admin app.`}</p>
<p>{`Once this route is loaded, the `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-examples/blob/master/cms-live-preview/5.40.x/extensions/website/src/LivePreview.ts"
      }}>{`LivePreview`}</a>{` object is instantiated, and the Preview app reports to the Admin app. It is now ready to receive content entry updates and render the content!`}</p>
<Alert type="success" title={"Live Preview Class"} mdxType="Alert">
<p>{`The `}<a parentName="p" {...{
          "href": "https://github.com/webiny/webiny-examples/blob/master/cms-live-preview/5.40.x/extensions/website/src/LivePreview.ts"
        }}>{`LivePreview`}</a>{` class is generic, and has no dependencies. You can freely use it in any JS frontend framework.`}</p>
</Alert>
<p>{`In the `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-examples/blob/master/cms-live-preview/5.40.x/extensions/website/src/Article/Article.tsx"
      }}>{`Article component`}</a>{`, you’ll find how the article data is rendered. The Article `}<inlineCode parentName="p">{`content`}</inlineCode>{` field is a simple array of objects you can iterate on and render the appropriate components. Using `}<a parentName="p" {...{
        "href": "https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates"
      }}>{`Typescript type predicates`}</a>{`you can also have proper code completion and type safety for all your Dynamic Zone templates, which you can then confidently map onto your content block components.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;