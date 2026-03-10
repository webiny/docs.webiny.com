/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.64f62e.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "First Customization",
  "description": "Create your first content model via code and see the Webiny extension model in action.",
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
  "title": "Create the Content Model",
  "slug": "create-the-content-model",
  "children": []
}, {
  "title": "Register the Extension",
  "slug": "register-the-extension",
  "children": []
}, {
  "title": "Deploy and Verify",
  "slug": "deploy-and-verify",
  "children": []
}, {
  "title": "Using AI to Help",
  "slug": "using-ai-to-help",
  "children": []
}, {
  "title": "What's Next",
  "slug": "what-s-next",
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



<Alert type="success" title="WHAT YOU'LL LEARN" mdxType="Alert">
<ul>
<li parentName="ul">{`how to create a content model as a code extension using `}<inlineCode parentName="li">{`ModelFactory`}</inlineCode></li>
<li parentName="ul">{`how to register the extension in `}<inlineCode parentName="li">{`webiny.config.tsx`}</inlineCode></li>
<li parentName="ul">{`how to deploy and verify the model in the Admin panel`}</li>
<li parentName="ul">{`how AI can assist with Webiny customizations`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`In this guide you will define an “Article” content model entirely in code, register it as an extension, deploy it, and see it appear in the Headless CMS section of the Admin panel. This walkthrough demonstrates the core customization loop in Webiny: `}<strong parentName="p">{`write code → register → deploy → verify`}</strong>{`.`}</p>
<p>{`The Article model includes five fields that cover a range of field types — text with validation, unique constraints, rich text, predefined values, and file attachments — giving you a well-rounded first look at the `}<inlineCode parentName="p">{`ModelFactory`}</inlineCode>{` pattern.`}</p>
<_Heading level={2} id={"create-the-content-model"} nextElement={{
      "type": "paragraph"
    }}>Create the Content Model</_Heading>
<p>{`Create a new file at `}<inlineCode parentName="p">{`extensions/ArticleModel.ts`}</inlineCode>{` in your project:`}</p>
<Editor title="extensions/ArticleModel.ts" lang="typescript" mdxType="Editor">
{`import { ModelFactory } from "webiny/api/cms/model";

class ArticleModelImpl implements ModelFactory.Interface {
    async execute(builder: ModelFactory.Builder) {
        return [
            builder
                .public({
                    modelId: "article",
                    name: "Article",
                    group: "ungrouped"
                })
                .description("A simple article content model")
                .fields(fields => ({
                    title: fields
                        .text()
                        .renderer("textInput")
                        .label("Title")
                        .required("Title is required"),
                    slug: fields
                        .text()
                        .renderer("textInput")
                        .label("Slug")
                        .help("URL-friendly identifier for the article")
                        .required("Slug is required")
                        .unique(),
                    body: fields
                        .richText()
                        .renderer("lexicalTextInput")
                        .label("Body"),
                    category: fields
                        .text()
                        .renderer("radioButtons")
                        .label("Category")
                        .predefinedValues([
                            { label: "News", value: "news" },
                            { label: "Tutorial", value: "tutorial" },
                            { label: "Opinion", value: "opinion" }
                        ]),
                    featuredImage: fields
                        .file()
                        .renderer("fileInput")
                        .label("Featured Image")
                        .help("Upload a cover image for the article")
                }))
                .layout([
                    ["title", "slug"],
                    ["body"],
                    ["category", "featuredImage"]
                ])
                .titleFieldId("title")
                .singularApiName("Article")
                .pluralApiName("Articles")
        ];
    }
}

export default ModelFactory.createImplementation({
    implementation: ArticleModelImpl,
    dependencies: []
});`}
</Editor>
<p>{`Here is what each section does:`}</p>
<ul>
<li parentName="ul"><strong parentName="li"><inlineCode parentName="strong">{`.public()`}</inlineCode></strong>{` — defines the model’s internal ID, display name, and the group it belongs to in the Admin sidebar. A `}<inlineCode parentName="li">{`public`}</inlineCode>{` model is accessible through the Read API.`}</li>
<li parentName="ul"><strong parentName="li"><inlineCode parentName="strong">{`.fields()`}</inlineCode></strong>{` — declares each field using the fluent builder. Fields can have renderers (how they appear in the editor), labels, help text, and validators like `}<inlineCode parentName="li">{`required()`}</inlineCode>{`, `}<inlineCode parentName="li">{`unique()`}</inlineCode>{`, and `}<inlineCode parentName="li">{`predefinedValues()`}</inlineCode>{`.`}</li>
<li parentName="ul"><strong parentName="li"><inlineCode parentName="strong">{`.layout()`}</inlineCode></strong>{` — arranges fields into rows in the Admin editor. Each inner array is one row.`}</li>
<li parentName="ul"><strong parentName="li"><inlineCode parentName="strong">{`.titleFieldId()`}</inlineCode></strong>{` — specifies which field is used as the entry’s display title in content lists.`}</li>
<li parentName="ul"><strong parentName="li"><inlineCode parentName="strong">{`.singularApiName()`}</inlineCode>{` / `}<inlineCode parentName="strong">{`.pluralApiName()`}</inlineCode></strong>{` — controls the names used in the auto-generated GraphQL API (e.g., `}<inlineCode parentName="li">{`getArticle`}</inlineCode>{`, `}<inlineCode parentName="li">{`listArticles`}</inlineCode>{`).`}</li>
</ul>
<_Heading level={2} id={"register-the-extension"} nextElement={{
      "type": "paragraph"
    }}>Register the Extension</_Heading>
<p>{`Open `}<inlineCode parentName="p">{`webiny.config.tsx`}</inlineCode>{` and add the extension inside the `}<inlineCode parentName="p">{`Extensions`}</inlineCode>{` component:`}</p>
<Editor title="webiny.config.tsx" lang="tsx" mdxType="Editor">
{`import React from "react";
import { Api, Infra } from "webiny/extensions";
import { Cognito } from "@webiny/cognito";

export const Extensions = () => {
    return (
        <>
            <Infra.Aws.DefaultRegion name={"us-east-1"} />
            <Cognito />

            {/* Content models */}
            <Api.Extension src={"/extensions/ArticleModel.ts"} />
        </>
    );
};`}
</Editor>
<p>{`The `}<inlineCode parentName="p">{`<Api.Extension>`}</inlineCode>{` component tells Webiny to load your file as a backend extension. The `}<inlineCode parentName="p">{`src`}</inlineCode>{` path is relative to the project root.`}</p>
<_Heading level={2} id={"deploy-and-verify"} nextElement={{
      "type": "paragraph"
    }}>Deploy and Verify</_Heading>
<p>{`Since this is a backend extension, you only need to deploy the API application:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`yarn webiny deploy api`}
</Editor>
<Alert type="info" title="Why deploy api and not the full project?" mdxType="Alert">
<p>{`Webiny is made up of three applications: Core (infrastructure), API (backend), and Admin (frontend). When you add a content model, only the API needs to be redeployed. The Admin panel automatically picks up the new model from the API the next time you open it. This keeps deployments fast.`}</p>
</Alert>
<p>{`Once the deployment finishes, open the Admin panel and navigate to `}<strong parentName="p">{`Headless CMS`}</strong>{` in the sidebar. You will see the `}<strong parentName="p">{`Article`}</strong>{` model listed. Click on it, then click `}<strong parentName="p">{`New Entry`}</strong>{` to create a test article — fill in the title, slug, body, category, and upload a featured image.`}</p>
<p>{`Your first code-defined content model is now live and queryable through the GraphQL API.`}</p>
<_Heading level={2} id={"using-ai-to-help"} nextElement={{
      "type": "paragraph"
    }}>Using AI to Help</_Heading>
<p>{`With the MCP server connected from the previous step, your AI coding agent has access to the full `}<inlineCode parentName="p">{`content-models`}</inlineCode>{` skill — including all available field types, validators, renderers, and configuration options.`}</p>
<p>{`Try asking your agent something like:`}</p>
<blockquote>
<p parentName="blockquote">{`“Add a publishDate datetime field to the Article model in my Webiny project.”`}</p>
</blockquote>
<p>{`The agent will load the relevant skill, understand the `}<inlineCode parentName="p">{`ModelFactory`}</inlineCode>{` pattern, and generate the correct code change — including the field definition, validator, renderer, and layout update. Review the result, deploy, and verify.`}</p>
<p>{`This is the development workflow going forward: describe what you want, let AI generate the implementation, review it, and deploy.`}</p>
<_Heading level={2} id={"what-s-next"} nextElement={{
      "type": "paragraph"
    }}>What&#39;s Next</_Heading>
<p>{`You have seen how to create and deploy a customization. Next, learn the day-to-day workflow for developing locally without redeploying after every change.`}</p>
<p>{`Continue to `}<_Link href="/docs/get-started/local-development">{`Local Development`}</_Link>{`.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;