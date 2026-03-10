/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image2 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/ai/assets/smart-seo-open-ai/article-model.png'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/ai/assets/smart-seo-open-ai/ai-optimize-button.png'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import smartSEO from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/ai/assets/smart-seo-open-ai/smart-seo.mp4";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Smart SEO - OpenAI",
  "description": "Learn how to integrate OpenAI with Webiny to build a Smart SEO tool for Headless CMS. This tool automatically generates SEO titles, descriptions, and tags for your articles.",
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
  "title": "Getting Started",
  "slug": "getting-started",
  "children": []
}, {
  "title": "Set OpenAI API Key in Environment Variables",
  "slug": "set-open-ai-api-key-in-environment-variables",
  "children": []
}, {
  "title": "Deploy API Application",
  "slug": "deploy-api-application",
  "children": []
}, {
  "title": "Run the Project",
  "slug": "run-the-project",
  "children": []
}, {
  "title": "All Set!",
  "slug": "all-set",
  "children": []
}, {
  "title": "Code Walkthrough",
  "slug": "code-walkthrough",
  "children": [{
    "title": "Field Tracker, ContentEntry Form Decorator",
    "slug": "field-tracker-content-entry-form-decorator",
    "children": []
  }, {
    "title": "Extract HTML From RichTextHtml (Lexical Editor)",
    "slug": "extract-html-from-rich-text-html-lexical-editor",
    "children": []
  }, {
    "title": "Extend Headless CMS GraphQL API",
    "slug": "extend-headless-cms-graph-ql-api",
    "children": []
  }, {
    "title": "Smart SEO",
    "slug": "smart-seo",
    "children": []
  }, {
    "title": "Article Content Model",
    "slug": "article-content-model",
    "children": []
  }]
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
const Video = makeShortcode("Video");
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






<Alert type="info" title="Can I Use This?" mdxType="Alert">
<p>{`This feature is available since Webiny `}<strong parentName="p">{`v5.x`}</strong>{`.`}</p>
</Alert>
<Alert type="success" title="What you will learn" mdxType="Alert">
<ul>
<li parentName="ul">{`how to integrate OpenAI with Webiny`}</li>
<li parentName="ul">{`how to generate SEO titles, descriptions, and tags for your articles with OpenAI`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`Webiny is an AI model-agnostic platform. You can integrate it with different models and craft tailored AI-experiences. You control which model and what AI-powered capabilities your users and content editors can use.`}</p>
<p>{`In this tutorial, we will demonstrate how to integrate OpenAI with Webiny to build a Smart SEO tool for Headless CMS. This tool will automatically generate SEO titles and tags for your articles.`}</p>
<p>{`You’ll create the content for your blog or article, and based on this content, OpenAI will provide SEO titles and tags to enhance your article’s search visibility.`}</p>
<Video src={smartSEO} controls={true} mdxType="Video" />
<_Heading level={2} id={"getting-started"} nextElement={{
      "type": "paragraph"
    }}>Getting Started</_Heading>
<p>{`Run the following command to set up this extension in your project.`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`yarn webiny extension headless-cms/smart-seo-open-ai`}
</Editor>
<p>{`The Smart SEO extension code can be found in our `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-examples/tree/master/headless-cms/smart-seo-open-ai"
      }}>{`webiny-examples`}</a>{` repository.`}</p>
<_Heading level={2} id={"set-open-ai-api-key-in-environment-variables"} nextElement={{
      "type": "paragraph"
    }}>Set OpenAI API Key in Environment Variables</_Heading>
<p>{`Open the `}<inlineCode parentName="p">{`.env`}</inlineCode>{` file in the root of your project and add the OpenAI API key to the `}<inlineCode parentName="p">{`WEBINY_API_OPEN_AI_API_KEY`}</inlineCode>{` environment variable as shown below:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`WEBINY_API_OPEN_AI_API_KEY=sk-proj-T2-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`}
</Editor>
<p>{`For detailed instructions on creating an OpenAI API key, refer to their `}<a parentName="p" {...{
        "href": "https://platform.openai.com/docs/quickstart#create-and-export-an-api-key"
      }}>{`official documentation`}</a>{`.`}</p>
<_Heading level={2} id={"deploy-api-application"} nextElement={{
      "type": "paragraph"
    }}>Deploy API Application</_Heading>
<p>{`In this example, we created an `}<strong parentName="p">{`Article - Smart SEO`}</strong>{` Content Model to demonstrate AI-powered capabilities. This content model is generated programmatically via code.
Additionally, we extended the Headless CMS GraphQL API to generate SEO data using the OpenAI API, which creates SEO titles, descriptions, and tags for articles.`}</p>
<p>{`Details on this are covered in the sections below. For now, let’s deploy the API application that will create the Article - Smart SEO Content Model and extend Headless CMS GraphQL API to generate SEO data using OpenAI.`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`yarn webiny deploy api --env ENVIRONMENT_NAME`}
</Editor>
<p>{`Alternatively, you can use the watch command, which continuously rebuild and redeploy your code. Learn more about it `}<_Link href="/docs/5.x/core-development-concepts/basics/watch-command">{`here`}</_Link>{`.`}</p>
<_Heading level={2} id={"run-the-project"} nextElement={{
      "type": "paragraph"
    }}>Run the Project</_Heading>
<p>{`After downloading the extension to your project, run the `}<_Link href="/docs/5.x/core-development-concepts/basics/watch-command">{`webiny watch`}</_Link>{` command to see the Smart SEO functionality in action.`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`yarn webiny watch admin --env ENVIRONMENT_NAME`}
</Editor>
<_Heading level={2} id={"all-set"} nextElement={{
      "type": "paragraph"
    }}>All Set!</_Heading>
<p>{`You’re now ready to generate SEO titles and tags for your articles using OpenAI. Simply navigate to the `}<strong parentName="p">{`Article - Smart SEO`}</strong>{` Model, create a new article, and click the “AI-Optimized SEO” button to generate SEO titles and tags effortlessly.`}</p>
<Video src={smartSEO} controls={true} mdxType="Video" />
<_Heading level={2} id={"code-walkthrough"} nextElement={{
      "type": "paragraph"
    }}>Code Walkthrough</_Heading>
<p>{`Let’s walk through the code to understand how the Smart SEO extension operates. We’ve created a new `}<_Link href="/docs/5.x/core-development-concepts/basics/extensions">{`extension`}</_Link>{` called `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-examples/tree/master/headless-cms/smart-seo-open-ai/5.41.x/extensions/smartSeoOpenAi"
      }}><inlineCode parentName="a">{`smart-seo-open-ai`}</inlineCode></a>{`, and we’ll review each plugin used in this extension one by one.`}</p>
<_Heading level={3} id={"field-tracker-content-entry-form-decorator"} nextElement={{
      "type": "paragraph"
    }}>Field Tracker, ContentEntry Form Decorator</_Heading>
<p>{`In this example, we have an `}<strong parentName="p">{`Article - Smart SEO`}</strong>{` Model with four fields: `}<strong parentName="p">{`Content`}</strong>{`, `}<strong parentName="p">{`SEO - Title`}</strong>{`, `}<strong parentName="p">{`SEO - Description`}</strong>{`, and `}<strong parentName="p">{`SEO - Meta Tags`}</strong>{`. We will track these fields. Once the Content field is populated, we will send it to OpenAI, which will generate SEO-friendly titles and tags for the article. The generated title and tags will then be set in the respective `}<strong parentName="p">{`Title`}</strong>{`, `}<strong parentName="p">{`Description`}</strong>{` and `}<strong parentName="p">{`Tags`}</strong>{` fields of the model.`}</p>
<p>{`The concept is straightforward: we aim to track fields of interest, such as text inputs or rich text fields. The challenge lies in not knowing the exact location of these fields. They could be nested within objects, repeatable objects, or dynamic zone templates, making their placement unpredictable. Hardcoding paths to these fields is not a feasible solution. So, we will create the `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-examples/blob/master/headless-cms/smart-seo-open-ai/5.41.x/extensions/smartSeoOpenAi/admin/src/FieldTracker.tsx"
      }}>{`Field Tracker`}</a>{`.`}</p>
<p><strong parentName="p">{`Field Tracker`}</strong>{` is a React context that tracks content model fields of interest. It enables you to extract data from these fields that can be sent data to OpenAI and update fields with the received response.`}</p>
<p>{`Here is the `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-examples/blob/master/headless-cms/smart-seo-open-ai/5.41.x/extensions/smartSeoOpenAi/admin/src/FieldTracker.tsx"
      }}>{`code for the Field Tracker`}</a>{`, here we `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-examples/blob/master/headless-cms/smart-seo-open-ai/5.41.x/extensions/smartSeoOpenAi/admin/src/DecorateContentEntryForm.tsx"
      }}>{`decorated the `}<inlineCode parentName="a">{`ContentEntryForm`}</inlineCode></a>{` with a FieldTracker component.`}</p>
<p>{`We’ve also `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-examples/blob/master/headless-cms/smart-seo-open-ai/5.41.x/extensions/smartSeoOpenAi/admin/src/DecorateContentEntryFormBind.tsx"
      }}>{`decorated the `}<inlineCode parentName="a">{`useBind`}</inlineCode>{` hook`}</a>{` to integrate field tracking specifically for models. In this example, we are tracking rich-text fields and SEO-specific fields (`}<strong parentName="p">{`seoTitle`}</strong>{`, `}<strong parentName="p">{`seoDescription`}</strong>{`, `}<strong parentName="p">{`seoMetaTags`}</strong>{`) in the `}<strong parentName="p">{`Article - Smart SEO`}</strong>{` model. This allows us to trigger dynamic updates and facilitate interactions with external services.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`  You can customize `}<a parentName="p" {...{
          "href": "https://github.com/webiny/webiny-examples/blob/master/headless-cms/smart-seo-open-ai/5.41.x/extensions/smartSeoOpenAi/admin/src/DecorateContentEntryFormBind.tsx"
        }}>{`this `}<inlineCode parentName="a">{`ContentEntryFormBind`}</inlineCode>{` decorator file`}</a>{` to track fields from other models or different field types, tailoring it to your specific use case.`}</p>
</Alert>
<_Heading level={3} id={"extract-html-from-rich-text-html-lexical-editor"} nextElement={{
      "type": "paragraph"
    }}>Extract HTML From RichTextHtml (Lexical Editor)</_Heading>
<p>{`Webiny leverages the `}<a parentName="p" {...{
        "href": "https://lexical.dev/"
      }}>{`Lexical text editor`}</a>{` for Rich Text Fields. However, for generating SEO-related information using OpenAI, we will send the HTML content (not the Lexical format). To achieve this, we need to extract the HTML content from the Rich Text field. For this purpose, we have created a `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-examples/blob/master/headless-cms/smart-seo-open-ai/5.41.x/extensions/smartSeoOpenAi/admin/src/extractFromRichText.ts"
      }}><inlineCode parentName="a">{`extractFromRichText`}</inlineCode>{` transformer`}</a>{` to handle the conversion.`}</p>
<_Heading level={3} id={"extend-headless-cms-graph-ql-api"} nextElement={{
      "type": "paragraph"
    }}>Extend Headless CMS GraphQL API</_Heading>
<p>{`In this example, we `}<_Link href="/docs/5.x/headless-cms/extending/extend-graphql-api">{`extended the Headless CMS GraphQL API`}</_Link>{` to generate SEO data using the OpenAI API. The `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-examples/blob/master/headless-cms/smart-seo-open-ai/5.41.x/extensions/smartSeoOpenAi/api/src/generateSeo.ts"
      }}><inlineCode parentName="a">{`generateSeo`}</inlineCode>{` plugin`}</a>{` integrates Webiny with OpenAI. We created a `}<inlineCode parentName="p">{`generateSeo`}</inlineCode>{` query for the same.`}</p>
<p>{`To prevent exposing our OpenAI API key to the public, we avoid calling the OpenAI API from the client side. Instead, we handle it server-side by creating this `}<inlineCode parentName="p">{`generateSeo`}</inlineCode>{` plugin that extends the Headless CMS GraphQL API for secure SEO data generation. This plugin sends content to OpenAI and retrieves SEO-related information.`}</p>
<_Heading level={3} id={"smart-seo"} nextElement={{
      "type": "paragraph"
    }}>Smart SEO</_Heading>
<p>{`The `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-examples/blob/master/headless-cms/smart-seo-open-ai/5.41.x/extensions/smartSeoOpenAi/admin/src/SmartSeo.tsx"
      }}><inlineCode parentName="a">{`SmartSeo.tsx`}</inlineCode>{` plugin`}</a>{` sends HTML content to the `}<inlineCode parentName="p">{`generateSeo`}</inlineCode>{` query (created by the `}<a parentName="p" {...{
        "href": "#extend-headless-cms-graph-ql-api"
      }}>{`generateSeo plugin`}</a>{` mentioned earlier) and retrieves SEO-related information. The retrieved data is then used to update the relevant fields in the content model.`}</p>
<p>{`If you’ve noticed the AI-Optimized SEO button on the Content Entry form, it has been configured in this plugin using the `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-examples/blob/3c73e547b992e6d4b1ce67647ae056bbd05b43b3/headless-cms/smart-seo-open-ai/5.41.x/extensions/smartSeoOpenAi/admin/src/SmartSeo.tsx#L118"
      }}>{`ContentEntryEditorConfig`}</a>{`.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`  We display the `}<strong parentName="p">{`AI-OPTIMIZED SEO`}</strong>{` button on the Content Entry form for the content model with the ID `}<inlineCode parentName="p">{`article`}</inlineCode>{`.
You can easily customize it to include your `}<a parentName="p" {...{
          "href": "https://github.com/webiny/webiny-examples/blob/3c73e547b992e6d4b1ce67647ae056bbd05b43b3/headless-cms/smart-seo-open-ai/5.41.x/extensions/smartSeoOpenAi/admin/src/SmartSeo.tsx#L124"
        }}>{`content model IDs`}</a>{` to display this button on the respective content model entry forms.`}</p>
</Alert>
<Image src={_Image1} alt={"AI-optimized SEO Button"} mdxType="Image" />
<_Heading level={3} id={"article-content-model"} nextElement={{
      "type": "paragraph"
    }}>Article Content Model</_Heading>
<p>{`In this example, we created an `}<strong parentName="p">{`Article - Smart SEO`}</strong>{` Content Model with the ID `}<strong parentName="p">{`article-smart-seo`}</strong>{` to showcase AI capabilities.This content model is generated programmatically, and you can find the corresponding `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-examples/blob/master/headless-cms/smart-seo-open-ai/5.41.x/extensions/smartSeoOpenAi/api/src/Article.ts"
      }}>{`Content Model code here`}</a>{`.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`  Please note that the `}<strong parentName="p">{`article-smart-seo`}</strong>{` content ID is referenced in the code. Refer to the sections above for guidance on customizing the code to align with your content model.`}</p>
<p>{`  In your real project, you can remove this content model by either `}<a parentName="p" {...{
          "href": "https://github.com/webiny/webiny-examples/blob/master/headless-cms/smart-seo-open-ai/5.41.x/extensions/smartSeoOpenAi/api/src/Article.ts"
        }}>{`deleting the corresponding `}<inlineCode parentName="a">{`Article.ts`}</inlineCode>{` file`}</a>{` or commenting out the `}<a parentName="p" {...{
          "href": "https://github.com/webiny/webiny-examples/blob/3c73e547b992e6d4b1ce67647ae056bbd05b43b3/headless-cms/smart-seo-open-ai/5.41.x/extensions/smartSeoOpenAi/api/src/index.ts#L6"
        }}>{`Article import in the index file`}</a>{`.`}</p>
</Alert>
<p>{`For your reference, we created an `}<strong parentName="p">{`Article - Smart SEO`}</strong>{` content model with the following fields to manage and store articles:`}</p>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": "left"
          }}>{`Field`}</th>
<th parentName="tr" {...{
            "align": "left"
          }}>{`Field Type`}</th>
<th parentName="tr" {...{
            "align": "left"
          }}>{`Field ID`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": "left"
          }}>{`Content`}</td>
<td parentName="tr" {...{
            "align": "left"
          }}>{`Rich Text`}</td>
<td parentName="tr" {...{
            "align": "left"
          }}>{`content`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": "left"
          }}>{`SEO - Title`}</td>
<td parentName="tr" {...{
            "align": "left"
          }}>{`Long text`}</td>
<td parentName="tr" {...{
            "align": "left"
          }}>{`seoTitle`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": "left"
          }}>{`SEO - Description`}</td>
<td parentName="tr" {...{
            "align": "left"
          }}>{`Long text`}</td>
<td parentName="tr" {...{
            "align": "left"
          }}>{`seoDescription`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": "left"
          }}>{`SEO - Meta Tags`}</td>
<td parentName="tr" {...{
            "align": "left"
          }}>{`Object (with `}<strong parentName="td">{`Tag Name`}</strong>{` and `}<strong parentName="td">{`Tag Value`}</strong>{` Text Field)`}</td>
<td parentName="tr" {...{
            "align": "left"
          }}>{`seoMetaTags`}</td>
</tr>
</tbody>
</table>
<Image src={_Image2} alt={"Article"} mdxType="Image" />
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;