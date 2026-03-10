/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import Link from "next/link";
import { Alert } from "@/components/Alert";
import { CanIUseThis } from "@/components/CanIUseThis";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "(Legacy) Render Rich Text Content",
  "description": "Learn how to render rich text content from Headless CMS.",
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
  "title": "Rendering Rich Text Content",
  "slug": "rendering-rich-text-content",
  "children": [{
    "title": "Installation",
    "slug": "installation",
    "children": []
  }, {
    "title": "Default Rendering",
    "slug": "default-rendering",
    "children": []
  }, {
    "title": "Adding Custom Renderers",
    "slug": "adding-custom-renderers",
    "children": []
  }]
}, {
  "title": "Styling the Output",
  "slug": "styling-the-output",
  "children": []
}, {
  "title": "HTML Sanitization",
  "slug": "html-sanitization",
  "children": [{
    "title": "Sanitization Configuration",
    "slug": "sanitization-configuration",
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





<Alert type="warning" mdxType="Alert">
  This document covers rendering of rich text content via the legacy Rich Text Editor, which was
  deprecated with the release of <Link href={"../../release-notes/5.x/changelog"} mdxType="Link">v5.x</Link>.
  For instructions on rendering of the new rich text content, please visit the&nbsp;
  <Link href={"./render-lexical-rich-text-content"} mdxType="Link">Render Rich Text Content</Link> article.
</Alert>
<Alert type="success" title="What you'll learn" mdxType="Alert">
<ul>
<li parentName="ul">{`how to render rich text content from Headless CMS in React`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`One of the commonly used field types in our Headless CMS is a `}<em parentName="p">{`rich text`}</em>{` field. This field uses `}<a parentName="p" {...{
        "href": "https://editorjs.io/"
      }}>{`https://editorjs.io/`}</a>{` with several additional Webiny plugins. The output data structure of editorjs is an `}<a parentName="p" {...{
        "href": "https://editorjs.io/saving-data#output-data-format"
      }}>{`array of objects`}</a>{`.`}</p>
<p>{`You can render this data as you want by traversing the array and implementing renderers for each block type, but more often than not, you just want to use a predefined React component and move on.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`To learn how to use Headless CMS GraphQL API, make sure to check out the `}<_Link href="/docs/5.x/headless-cms/basics/using-graphql-api">{`Using GraphQL API`}</_Link>{` key topic.`}</p>
</Alert>
<_Heading level={2} id={"rendering-rich-text-content"} nextElement={{
      "type": "paragraph"
    }}>Rendering Rich Text Content</_Heading>
<p>{`To render rich text content created with editorjs in your React app, Webiny provides a package `}<inlineCode parentName="p">{`@webiny/react-rich-text-renderer`}</inlineCode>{` with a React component to do just that.`}</p>
<_Heading level={3} id={"installation"} nextElement={{
      "type": "paragraph"
    }}>Installation</_Heading>
<p>{`In your React app, install the following dependency:`}</p>
<Editor title="" lang="null" mdxType="Editor">
{`npm install --save @webiny/react-rich-text-renderer`}
</Editor>
<p>{`Or if you prefer yarn:`}</p>
<Editor title="" lang="null" mdxType="Editor">
{`yarn add @webiny/react-rich-text-renderer`}
</Editor>
<_Heading level={3} id={"default-rendering"} nextElement={{
      "type": "paragraph"
    }}>Default Rendering</_Heading>
<p>{`Fetch your data from Headless CMS, then pass it to the component like this:`}</p>
<Editor title="myView.tsx" lang="tsx" mdxType="Editor">
{`import { RichTextRenderer } from "@webiny/react-rich-text-renderer";

// Load content from Headless CMS (here we show what your content might look like).
const content = [
  {
    type: "paragraph",
    data: {
      text: "A well written paragraph of text can bring so much joy!",
      textAlign: "left",
      className: ""
    }
  }
];

// Mount the component
<RichTextRenderer data={content} />;`}
</Editor>
<_Heading level={3} id={"adding-custom-renderers"} nextElement={{
      "type": "paragraph"
    }}>Adding Custom Renderers</_Heading>
<p>{`You can override the default renderers or add new renderers for your custom block types like this:`}</p>
<Editor title="myView.tsx" lang="tsx" mdxType="Editor">
{`import { RichTextRenderer, RichTextBlockRenderer } from "@webiny/react-rich-text-renderer";

const customRenderers: Record<string, RichTextBlockRenderer> = {
  // Override the default renderer for "delimiter" block
  delimiter: () => {
    return <div className={"my-custom-delimiter"} />;
  },
  // Add a renderer for "youtube" block
  youtube: block => {
    return <iframe width="560" height="315" src={block.data.url} title={block.data.title} />;
  }
};

const content = [
  // This block will use the default renderer
  {
    type: "paragraph",
    data: {
      text: "A well written paragraph of text can bring so much joy!",
      textAlign: "left",
      className: ""
    }
  },
  // This block will use the custom "delimiter" renderer
  {
    type: "delimiter"
  },
  // This block will use the new "youtube" renderer
  {
    type: "youtube",
    data: {
      url: "https://www.youtube.com/embed/gOGJKHXntiU",
      title: "Webiny Overview"
    }
  }
];

// Mount the component
<RichTextRenderer data={content} renderers={customRenderers} />;`}
</Editor>
<_Heading level={2} id={"styling-the-output"} nextElement={{
      "type": "paragraph"
    }}>Styling the Output</_Heading>
<p>{`Styles for default renderers are included in the package and you can import them into your app like this:`}</p>
<Editor title="" lang="scss" mdxType="Editor">
{`@import "~@webiny/react-rich-text-renderer/styles.scss";`}
</Editor>
<p>{`If you don’t want to use the default styles, skip this import and implement your own styling.`}</p>
<_Heading level={2} id={"html-sanitization"} nextElement={{
      "type": "jsx"
    }}>HTML Sanitization</_Heading>
<CanIUseThis title={"CAN I USE THIS?"} since={"5.37.2"} mdxType="CanIUseThis" />
<p>{`In order to minimize the possibility of `}<a parentName="p" {...{
        "href": "https://en.wikipedia.org/wiki/Cross-site_scripting"
      }}>{`cross-site scripting (XSS) attacks`}</a>{`, the HTML that’s returned by the rich text editor is sanitized, which is done with the help of the `}<a parentName="p" {...{
        "href": "https://www.npmjs.com/package/sanitize-html"
      }}>{`sanitize-html`}</a>{` library.`}</p>
<_Heading level={3} id={"sanitization-configuration"} nextElement={{
      "type": "paragraph"
    }}>Sanitization Configuration</_Heading>
<p>{`Use `}<inlineCode parentName="p">{`configureSanitization`}</inlineCode>{` function to set your global sanitization preference.
To provide sanitize configuration to specific component, use `}<inlineCode parentName="p">{`sanitizationConfig`}</inlineCode>{` prop.`}</p>
<Editor title="myView.tsx" lang="tsx" mdxType="Editor">
{`import { RichTextRenderer, configureSanitization } from "@webiny/react-rich-text-renderer";

const globalSanitizaionConfig = {
  allowedTags: ["b", "i", "em", "strong", "a"],
  allowedAttributes: {
    a: ["href"]
  },
  allowedIframeHostnames: ["www.youtube.com"]
};

// This is global configuration.
configureSanitization(globalSanitizaionConfig);

/*
 * Set sanitization configuration options for specific component.
 * Note: Provided configuration will override your global configuration options.
 * */
const sanitizationConfig = {
  // change the configuration only for this option.
  allowedIframeHostnames: ["www.webiny.com"]
};

<RichTextRenderer sanitizationConfig={sanitizationConfig} />;`}
</Editor>
<p>{`Please check `}<inlineCode parentName="p">{`sanitize-html`}</inlineCode>{` configuration options on their `}<a parentName="p" {...{
        "href": "https://github.com/apostrophecms/sanitize-html"
      }}>{`GitHub page`}</a>{`.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;