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
  "title": "How To Customize Elasticsearch Index",
  "description": "Learn how to add customizations to the Elasticsearch Index.",
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
  "children": [{
    "title": "Where Do We Use the Elasticsearch Index?",
    "slug": "where-do-we-use-the-elasticsearch-index",
    "children": []
  }, {
    "title": "When Would You Use the Possibility to Change the Elasticsearch Index?",
    "slug": "when-would-you-use-the-possibility-to-change-the-elasticsearch-index",
    "children": []
  }]
}, {
  "title": "Available Plugins",
  "slug": "available-plugins",
  "children": [{
    "title": "File Manager",
    "slug": "file-manager",
    "children": []
  }, {
    "title": "Form Builder",
    "slug": "form-builder",
    "children": []
  }, {
    "title": "Headless CMS",
    "slug": "headless-cms",
    "children": []
  }, {
    "title": "Page Builder",
    "slug": "page-builder",
    "children": []
  }]
}, {
  "title": "How to Create Your Own Index Configuration?",
  "slug": "how-to-create-your-own-index-configuration",
  "children": [{
    "title": "Rules",
    "slug": "rules",
    "children": []
  }, {
    "title": "How Are the Index Names Created?",
    "slug": "how-are-the-index-names-created",
    "children": [{
      "title": "Overview",
      "slug": "overview-1"
    }, {
      "title": "File Manager",
      "slug": "file-manager-1"
    }, {
      "title": "Form Builder",
      "slug": "form-builder-1"
    }, {
      "title": "Headless CMS",
      "slug": "headless-cms-1"
    }, {
      "title": "Page Builder",
      "slug": "page-builder-1"
    }]
  }, {
    "title": "Examples",
    "slug": "examples",
    "children": []
  }, {
    "title": "Useful Links",
    "slug": "useful-links",
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



<Alert type="success" title="What you'll learn" mdxType="Alert">
<ul>
<li parentName="ul">{`how to customize Elasticsearch index for each application`}</li>
</ul>
</Alert>
<Alert type="danger" mdxType="Alert">This article requires advanced knowledge of the Elasticsearch.</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Overview</_Heading>
<_Heading level={3} id={"where-do-we-use-the-elasticsearch-index"} nextElement={{
      "type": "paragraph"
    }}>Where Do We Use the Elasticsearch Index?</_Heading>
<p>{`We use the Elasticsearch indexes for our File Manager, Form Builder, Headless CMS and Page Builder applications.`}</p>
<p>{`In File Manager, Form Builder and Page Builder applications we use one index per tenant and locale combination, if locale specific indexes are set.`}</p>
<p>{`In Headless CMS we use index for each tenant, locale and model combination because of the complexity of the data stored into Elasticsearch.`}</p>
<p>{`By the default, we have a basic setup for applications that use Elasticsearch:`}</p>
<ul>
<li parentName="ul"><a parentName="li" {...{
          "href": "https://github.com/webiny/webiny-js/blob/83fe117e7a7ec9f2d916850cf9fc5148a866442a/packages/api-elasticsearch/src/indexConfiguration/common.ts"
        }}>{`common dynamic mapping for our system fields`}</a></li>
<li parentName="ul"><a parentName="li" {...{
          "href": "https://github.com/webiny/webiny-js/blob/83fe117e7a7ec9f2d916850cf9fc5148a866442a/packages/api-elasticsearch/src/indexConfiguration/base.ts"
        }}>{`the base mapping configuration for all indexes`}</a></li>
</ul>
<p>{`Also, each of the applications has its own default plugin for the index:`}</p>
<ul>
<li parentName="ul">{`File Manager Files `}<a parentName="li" {...{
          "href": "https://github.com/webiny/webiny-js/blob/83fe117e7a7ec9f2d916850cf9fc5148a866442a/packages/api-file-manager-ddb-es/src/elasticsearch/indices/base.ts"
        }}>{`plugin`}</a></li>
<li parentName="ul">{`Form Builder Forms and Submissions `}<a parentName="li" {...{
          "href": "https://github.com/webiny/webiny-js/blob/83fe117e7a7ec9f2d916850cf9fc5148a866442a/packages/api-form-builder-so-ddb-es/src/elasticsearch/indices/base.ts"
        }}>{`plugin`}</a></li>
<li parentName="ul">{`Headless CMS Entries `}<a parentName="li" {...{
          "href": "https://github.com/webiny/webiny-js/blob/83fe117e7a7ec9f2d916850cf9fc5148a866442a/packages/api-headless-cms-ddb-es/src/elasticsearch/indices/base.ts"
        }}>{`plugin`}</a></li>
<li parentName="ul">{`Page Builder Pages `}<a parentName="li" {...{
          "href": "https://github.com/webiny/webiny-js/blob/83fe117e7a7ec9f2d916850cf9fc5148a866442a/packages/api-page-builder-so-ddb-es/src/elasticsearch/indices/base.ts"
        }}>{`plugin`}</a></li>
</ul>
<p>{`Each of those plugins define how the Elasticsearch index for that particular application will look like when it is created. The plugins use `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/83fe117e7a7ec9f2d916850cf9fc5148a866442a/packages/api-elasticsearch/src/indexConfiguration/base.ts"
      }}>{`the base mapping configuration`}</a>{`.`}</p>
<Alert type="info" mdxType="Alert">
  We do not store all the data into the Elasticsearch because there is no need for it (eg. Headless
  CMS Models and Groups).
</Alert>
<Alert type="warning" mdxType="Alert">
  Elasticsearch index is created when adding new locale, which also includes the initial
  installation of the system.
</Alert>
<_Heading level={3} id={"when-would-you-use-the-possibility-to-change-the-elasticsearch-index"} nextElement={{
      "type": "paragraph"
    }}>When Would You Use the Possibility to Change the Elasticsearch Index?</_Heading>
<p>{`Good example on when to change the default index configuration, or add a new one, is when you are using a locale which is not supported by our default template, for example: Japanese.`}</p>
<p>{`The Japanese Elasticsearch index configuration will look a lot different from our default one because of different text analyzers and mapping.`}</p>
<p>{`There is official `}<a parentName="p" {...{
        "href": "https://www.elastic.co/blog/how-to-implement-japanese-full-text-search-in-elasticsearch"
      }}>{`Elasticsearch blog`}</a>{` on how to implement Japanese full-text search.`}</p>
<Alert type="info" mdxType="Alert">
  The last added plugin is always used to create the index, assuming it is passing the `.canUse()`
  check on the plugin.
</Alert>
<_Heading level={2} id={"available-plugins"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Available Plugins</_Heading>
<_Heading level={3} id={"file-manager"} nextElement={{
      "type": "paragraph"
    }}>File Manager</_Heading>
<p>{`For the File Manager Files we have the `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/83fe117e7a7ec9f2d916850cf9fc5148a866442a/packages/api-file-manager-ddb-es/src/plugins/FileElasticsearchIndexPlugin.ts"
      }}>{`FileElasticsearchIndexPlugin`}</a>{`.`}</p>
<_Heading level={3} id={"form-builder"} nextElement={{
      "type": "paragraph"
    }}>Form Builder</_Heading>
<p>{`For the Form Builder Forms and Submissions we have the `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/83fe117e7a7ec9f2d916850cf9fc5148a866442a/packages/api-form-builder-so-ddb-es/src/plugins/FormElasticsearchIndexPlugin.ts"
      }}>{`FormElasticsearchIndexPlugin`}</a>{`.`}</p>
<_Heading level={3} id={"headless-cms"} nextElement={{
      "type": "paragraph"
    }}>Headless CMS</_Heading>
<p>{`For the Headless CMS Entries we have `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/83fe117e7a7ec9f2d916850cf9fc5148a866442a/packages/api-headless-cms-ddb-es/src/plugins/CmsEntryElasticsearchIndexPlugin.ts"
      }}>{`CmsEntryElasticsearchIndexPlugin`}</a>{`.`}</p>
<_Heading level={3} id={"page-builder"} nextElement={{
      "type": "paragraph"
    }}>Page Builder</_Heading>
<p>{`For the Page Builder Pages we have the `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/83fe117e7a7ec9f2d916850cf9fc5148a866442a/packages/api-page-builder-so-ddb-es/src/plugins/definitions/PageElasticsearchIndexPlugin.ts"
      }}>{`PageElasticsearchIndexPlugin`}</a>{`.`}</p>
<_Heading level={2} id={"how-to-create-your-own-index-configuration"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>How to Create Your Own Index Configuration?</_Heading>
<_Heading level={3} id={"rules"} nextElement={{
      "type": "paragraph"
    }}>Rules</_Heading>
<p>{`There is a single rule that you will need to follow if you want to successfully create the index with your configuration:`}</p>
<p>{`The plugin you create will only get applied if the `}<inlineCode parentName="p">{`.canUse()`}</inlineCode>{` method is passing the check.`}</p>
<p>{`We intended it to be used to check if the index configuration can be applied given the locale that is set at the moment index is going to be created.`}</p>
<Alert type="info" mdxType="Alert">
  If you want the index configuration to be always applied, no matter the locale, just return `true`
  in the `.canUse()` method in the plugin.
</Alert>
<_Heading level={3} id={"how-are-the-index-names-created"} nextElement={{
      "type": "heading",
      "depth": 4
    }}>How Are the Index Names Created?</_Heading>
<_Heading level={4} id={"overview-1"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`Index name can contain dashes (-), underscores (`}{`_`}{`), numbers (0-9) and english letters (a-z). It is created by our configuration method, so you do not need to worry about that.`}</p>
<Alert type="warning" mdxType="Alert">
  Note that each tenant, locale and CMS model combination creates it's own index.
  
  Page Builder, Form Builder, and some other apps, always create a single index per tenant and locale combination.
</Alert>
<p>{`For example, creating an Article model in `}<inlineCode parentName="p">{`root`}</inlineCode>{` tenant, `}<inlineCode parentName="p">{`en-US`}</inlineCode>{` locale will create an index with the name: `}<inlineCode parentName="p">{`root-headless-cms-en-us-articles`}</inlineCode>{`.`}</p>
<p>{`Creating a same model in a different tenant, with a different locale, will create a different index. For example: `}<inlineCode parentName="p">{`another-tenant-headless-cms-de-de-articles`}</inlineCode>{`.`}</p>
<p>{`This way we ensure that data is completely separated between tenants, locales and models (or Page Builder/Form Builder/…).`}</p>
<h5>{`Shared Indexes`}</h5>
<p>{`Sometimes you might want to share the same index between multiple tenants, and that is possible via Shared Indexes.`}</p>
<p>{`When you turn this option on, the index name will be shared for each tenant and model combination. The language component still creates a different index for each locale.`}</p>
<p>{`For example, creating an Article model in the `}<inlineCode parentName="p">{`root`}</inlineCode>{` tenant, `}<inlineCode parentName="p">{`en-US`}</inlineCode>{` locale will create an index with the name: `}<inlineCode parentName="p">{`root-en-us-headless-cms-articles`}</inlineCode>{`.
If you create an Article model in the `}<inlineCode parentName="p">{`another-tenant`}</inlineCode>{` tenant, `}<inlineCode parentName="p">{`en-US`}</inlineCode>{` locale, the index will be the same: `}<inlineCode parentName="p">{`root-en-us-headless-cms-articles`}</inlineCode>{`.`}</p>
<p>{`Only if you create an Article model in another locale, the index name will be different: `}<inlineCode parentName="p">{`root-de-de-headless-cms-articles`}</inlineCode>{`.
This is due to the nature of the Elasticsearch/OpenSearch field mapping and configuration for different languages.`}</p>
<h6><strong parentName="h6">{`OpenSearch`}</strong></h6>
<p>{`To make the `}<inlineCode parentName="p">{`OpenSearch`}</inlineCode>{` share indexes, you need to add the following configuration to your `}<inlineCode parentName="p">{`webiny.project.ts`}</inlineCode>{` file:`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { createCoreApp } from "@webiny/serverless-cms-aws";

export default createCoreApp({
    pulumiResourceNamePrefix: "wby-",
    openSearch: {
        sharedIndexes: true
    }
});`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { createApiApp } from "@webiny/serverless-cms-aws";

export default createApiApp({
    pulumiResourceNamePrefix: "wby-",
    openSearch: {
        sharedIndexes: true
    }
});`}
</Editor>
<h6><strong parentName="h6">{`Elasticsearch`}</strong></h6>
<p>{`To make the `}<inlineCode parentName="p">{`Elasticesearch`}</inlineCode>{` share indexes, you need to add the following configuration to your `}<inlineCode parentName="p">{`webiny.project.ts`}</inlineCode>{` file:`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { createCoreApp } from "@webiny/serverless-cms-aws";

export default createCoreApp({
    pulumiResourceNamePrefix: "wby-",
    elasticSearch: {
        sharedIndexes: true
    }
});`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { createApiApp } from "@webiny/serverless-cms-aws";

export default createApiApp({
    pulumiResourceNamePrefix: "wby-",
    elasticSearch: {
        sharedIndexes: true
    }
});`}
</Editor>
<Alert type="danger" mdxType="Alert">
  You should `NOT` change the `sharedIndexes` configuration after the initial deployment. If you do, you will lose all the data.
</Alert>
<h5>{`Index Prefix`}</h5>
<p>{`Also, via the `}<inlineCode parentName="p">{`webiny.application.ts`}</inlineCode>{` configuration file, and, more specifically, via the `}<inlineCode parentName="p">{`indexPrefix`}</inlineCode>{` property in the `}<inlineCode parentName="p">{`elasticSearch`}</inlineCode>{` configuration section, it’s also possible to prefix all index names with a custom prefix. To learn more, check out the `}<_Link href="/docs/5.x/infrastructure/basics/modify-cloud-infrastructure#using-a-shared-amazon-open-search-service-domain">{`Using a Shared Amazon OpenSearch Service Domain`}</_Link>{` section.`}</p>
<p>{`Use case for this would be for when you have multiple environments on a single Elasticsearch instance. You can prefix each environment indexes with, for example, `}<inlineCode parentName="p">{`dev_`}</inlineCode>{`, `}<inlineCode parentName="p">{`prod_`}</inlineCode>{`, `}<inlineCode parentName="p">{`staging_`}</inlineCode>{`, `}<inlineCode parentName="p">{`test_`}</inlineCode>{`, etc…`}</p>
<_Heading level={4} id={"file-manager-1"} nextElement={{
      "type": "paragraph"
    }}>File Manager</_Heading>
<p>{`Index name for the File Manager Files is built out of the `}<inlineCode parentName="p">{`tenant id`}</inlineCode>{`, `}<inlineCode parentName="p">{`locale code`}</inlineCode>{` if enabled, and `}<inlineCode parentName="p">{`-file-manager`}</inlineCode>{` suffix.
If your tenant is a `}<inlineCode parentName="p">{`root`}</inlineCode>{` tenant, the index will look like `}<inlineCode parentName="p">{`root-file-manager`}</inlineCode>{`.
If your tenant is a `}<inlineCode parentName="p">{`root`}</inlineCode>{` tenant, and you have locale (`}<inlineCode parentName="p">{`en-US`}</inlineCode>{`) for index name enabled, the index will look like `}<inlineCode parentName="p">{`root-en-us-file-manager`}</inlineCode>{`.`}</p>
<p>{`You can see how the index name is created in `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/83fe117e7a7ec9f2d916850cf9fc5148a866442a/packages/api-file-manager-ddb-es/src/configurations.ts"
      }}>{`this`}</a>{` file.`}</p>
<_Heading level={4} id={"form-builder-1"} nextElement={{
      "type": "paragraph"
    }}>Form Builder</_Heading>
<p>{`Index name for the Form Builder Forms and Submissions is built out of the `}<inlineCode parentName="p">{`tenant id`}</inlineCode>{`, `}<inlineCode parentName="p">{`locale code`}</inlineCode>{` if enabled, and `}<inlineCode parentName="p">{`-form-builder`}</inlineCode>{` suffix.
If your tenant is a `}<inlineCode parentName="p">{`root`}</inlineCode>{` tenant, the index will look like `}<inlineCode parentName="p">{`root-form-builder`}</inlineCode>{`.
If your tenant is a `}<inlineCode parentName="p">{`root`}</inlineCode>{` tenant, and you have locale (`}<inlineCode parentName="p">{`jp`}</inlineCode>{`) for index name enabled, the index will look like `}<inlineCode parentName="p">{`root-jp-form-builder`}</inlineCode>{`.`}</p>
<p>{`You can see how the index name is created in `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/83fe117e7a7ec9f2d916850cf9fc5148a866442a/packages/api-form-builder-so-ddb-es/src/configurations.ts"
      }}>{`this`}</a>{` file.`}</p>
<_Heading level={4} id={"headless-cms-1"} nextElement={{
      "type": "paragraph"
    }}>Headless CMS</_Heading>
<p>{`Index name for the Headless CMS Entries is built out of `}<inlineCode parentName="p">{`tenant id`}</inlineCode>{`, `}<inlineCode parentName="p">{`-headless-cms`}</inlineCode>{`, `}<inlineCode parentName="p">{`locale code`}</inlineCode>{` and `}<inlineCode parentName="p">{`model id`}</inlineCode>{`.
If your tenant is a `}<inlineCode parentName="p">{`root`}</inlineCode>{` tenant, locale is `}<inlineCode parentName="p">{`en-US`}</inlineCode>{` and model is `}<inlineCode parentName="p">{`Articles`}</inlineCode>{`, the index will look like `}<inlineCode parentName="p">{`root-headless-cms-en-us-articles`}</inlineCode>{`.`}</p>
<p>{`You can see how the index name is created in `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/83fe117e7a7ec9f2d916850cf9fc5148a866442a/packages/api-headless-cms-ddb-es/src/configurations.ts"
      }}>{`this`}</a>{` file.`}</p>
<_Heading level={4} id={"page-builder-1"} nextElement={{
      "type": "paragraph"
    }}>Page Builder</_Heading>
<p>{`Index name for the Page Builder Pages is built out of the `}<inlineCode parentName="p">{`tenant id`}</inlineCode>{`, `}<inlineCode parentName="p">{`locale code`}</inlineCode>{` if enabled, and `}<inlineCode parentName="p">{`-page-builder`}</inlineCode>{` suffix.
If your tenant is a `}<inlineCode parentName="p">{`root`}</inlineCode>{` tenant, the index will look like `}<inlineCode parentName="p">{`root-page-builder`}</inlineCode>{`.
If your tenant is a `}<inlineCode parentName="p">{`root`}</inlineCode>{` tenant, and you have locale (`}<inlineCode parentName="p">{`de-DE`}</inlineCode>{`) for index name enabled, the index will look like `}<inlineCode parentName="p">{`root-de-de-page-builder`}</inlineCode>{`.`}</p>
<p>{`You can see how the index name is created in `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/83fe117e7a7ec9f2d916850cf9fc5148a866442a/packages/api-page-builder-so-ddb-es/src/configurations.ts"
      }}>{`this`}</a>{` file.`}</p>
<_Heading level={3} id={"examples"} nextElement={{
      "type": "paragraph"
    }}>Examples</_Heading>
<p>{`Headless CMS index plugin `}<inlineCode parentName="p">{`CmsEntryElasticsearchIndexPlugin`}</inlineCode>{`, which disables mappings on a `}<inlineCode parentName="p">{`largeText`}</inlineCode>{` field in `}<inlineCode parentName="p">{`de`}</inlineCode>{` locale:`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { base as baseConfiguration } from "@webiny/api-elasticsearch/indexConfiguration/base";
import { CmsEntryElasticsearchIndexPlugin } from "@webiny/api-headless-cms-ddb-es/plugins/CmsEntryElasticsearchIndexPlugin";
const plugin = new CmsEntryElasticsearchIndexPlugin({
  body: {
    ...baseConfiguration,
    mappings: {
      ...baseConfiguration.mappings,
      properties: {
        ...baseConfiguration.mappings.properties,
        // we do not want to map a field with name "largeText"
        largeText: {
          enabled: false
        }
      }
    }
  },
  locales: ["de"]
});`}
</Editor>
<p>{`Page Builder index plugin `}<inlineCode parentName="p">{`PageElasticsearchIndexPlugin`}</inlineCode>{`, which disables indexing on a `}<inlineCode parentName="p">{`largeText`}</inlineCode>{` field on all locales.`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { base as baseConfiguration } from "@webiny/api-elasticsearch/indexConfiguration/base";
import { PageElasticsearchIndexPlugin } from "@webiny/api-page-builder-so-ddb-es/plugins/definitions/PageElasticsearchIndexPlugin";
const plugin = new PageElasticsearchIndexPlugin({
  order: 351,
  body: {
    ...baseConfiguration,
    mappings: {
      ...baseConfiguration.mappings,
      properties: {
        ...baseConfiguration.mappings.properties,
        // we do not want to index a field with name "largeText"
        largeText: {
          enabled: false
        }
      }
    }
  }
});`}
</Editor>
<_Heading level={3} id={"useful-links"} nextElement={{
      "type": "list",
      "ordered": false,
      "start": null,
      "spread": false
    }}>Useful Links</_Heading>
<ul>
<li parentName="ul"><a parentName="li" {...{
          "href": "https://www.elastic.co/guide/en/elasticsearch/reference/7.17/mapping.html"
        }}>{`Elasticsearch - Index Mapping`}</a></li>
<li parentName="ul"><a parentName="li" {...{
          "href": "https://www.elastic.co/guide/en/elasticsearch/reference/7.17/index-modules.html#index-modules-settings"
        }}>{`Elasticsearch - Index Settings`}</a></li>
</ul>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;