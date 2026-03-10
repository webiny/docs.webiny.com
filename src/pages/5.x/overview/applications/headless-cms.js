/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/overview/applications/assets/webiny-headless-cms.jpg'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Headless CMS",
  "description": "A scalable GraphQL-based headless CMS built on top of serverless infrastructure.",
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
  "title": "Features",
  "slug": "features",
  "children": [{
    "title": "Content Modeling",
    "slug": "content-modeling",
    "children": []
  }, {
    "title": "Validators",
    "slug": "validators",
    "children": []
  }, {
    "title": "Security",
    "slug": "security",
    "children": []
  }, {
    "title": "Multi-Language",
    "slug": "multi-language",
    "children": []
  }, {
    "title": "Scale and Performance",
    "slug": "scale-and-performance",
    "children": []
  }]
}, {
  "title": "When to Consider Webiny’s Headless CMS",
  "slug": "when-to-consider-webiny-s-headless-cms",
  "children": []
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
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
<li parentName="ul">{`Features, capabilities and, common use-cases of Webiny’s Headless CMS.`}</li>
</ul>
</Alert>
<Image src={_Image1} alt={"Webiny CMS - Serverless Headless CMS"} mdxType="Image" />
<p>{`At the core of Webiny Headless CMS are three scalable GraphQL APIs. The `}<inlineCode parentName="p">{`read`}</inlineCode>{`, `}<inlineCode parentName="p">{`manage`}</inlineCode>{`, and `}<inlineCode parentName="p">{`preview`}</inlineCode>{`.
When it comes to defining content models, there are also three different approaches at your disposal:`}</p>
<ol>
<li parentName="ol">{`No-code approach using the UI editor`}</li>
<li parentName="ol">{`API approach using the `}<inlineCode parentName="li">{`manage`}</inlineCode>{` API`}</li>
<li parentName="ol">{`Code approach by defining the models directly through code
You can pick a single approach or use a combination, whichever works better for your use case.`}</li>
</ol>
<p>{`Use the Headless CMS to power backends for business applications, mobile apps and to manage data for a website, like blogs or eCommerce stores.`}</p>
<_Heading level={2} id={"features"} nextElement={{
      "type": "paragraph"
    }}>Features</_Heading>
<p>{`Headless CMS packs many features that make it a powerful tool to create a new API quickly. Let’s explore some of its main features.`}</p>
<_Heading level={3} id={"content-modeling"} nextElement={{
      "type": "paragraph"
    }}>Content Modeling</_Heading>
<p>{`Under the term “content model” we refer to an entity that consists of one or more attributes. A typical content model would be a blog post. That content model would contain attributes such as title, slug, featured image, tags, category, and a body.`}</p>
<p>{`Each attribute can be of a different type. The included types are:`}</p>
<ul>
<li parentName="ul"><strong parentName="li">{`Input`}</strong>
<ul parentName="li">
<li parentName="ul">{`a single-line text input or a multi-entry input`}</li>
<li parentName="ul">{`can also be a list of predefined values the user can select`}</li>
</ul>
</li>
<li parentName="ul"><strong parentName="li">{`Number`}</strong>
<ul parentName="li">
<li parentName="ul">{`A integer or a float`}</li>
</ul>
</li>
<li parentName="ul"><strong parentName="li">{`Text`}</strong>
<ul parentName="li">
<li parentName="ul">{`Multi-line text`}</li>
<li parentName="ul">{`Doesn’t support text formatting`}</li>
</ul>
</li>
<li parentName="ul"><strong parentName="li">{`Rich text`}</strong>
<ul parentName="li">
<li parentName="ul">{`A multi-line rich text field that supports text formatting and inline images`}</li>
</ul>
</li>
<li parentName="ul"><strong parentName="li">{`Boolean`}</strong>
<ul parentName="li">
<li parentName="ul">{`True or false toggle`}</li>
</ul>
</li>
<li parentName="ul"><strong parentName="li">{`File`}</strong>
<ul parentName="li">
<li parentName="ul">{`Used for inserting a single file, multiple files, a single image or an image gallery`}</li>
</ul>
</li>
<li parentName="ul"><strong parentName="li">{`Reference`}</strong>
<ul parentName="li">
<li parentName="ul">{`Referencing another content model`}</li>
<li parentName="ul">{`Supports both single entries and multiple select`}</li>
</ul>
</li>
<li parentName="ul"><strong parentName="li">{`Object`}</strong>
<ul parentName="li">
<li parentName="ul">{`Nested object field`}</li>
<li parentName="ul">{`Inside this field you can place multiple other fields such as text, file and others`}</li>
<li parentName="ul">{`You can nest objects to as many depth levels as you need`}</li>
</ul>
</li>
<li parentName="ul"><strong parentName="li">{`Dynamic zone`}</strong>
<ul parentName="li">
<li parentName="ul">{`A dynamic zone is a field that can contain multiple other fields`}</li>
<li parentName="ul">{`The difference between a dynamic zone and an object is that a dynamic zone allows you to select which fields you want to use`}</li>
<li parentName="ul">{`This is useful when you have a content model that has a lot of fields, but you only want to use a few of them in a particular entry`}</li>
<li parentName="ul">{`You can also nest dynamic zones to as many depth levels as you need`}</li>
<li parentName="ul">{`See Dynamic Zone in action: `}<a parentName="li" {...{
              "href": "https://www.youtube.com/watch?v=4hOScz42_Nw"
            }}>{`https://www.youtube.com/watch?v=8Z3Z3Y5Q5Zo`}</a></li>
</ul>
</li>
</ul>
<p>{`Besides the default built-in attributes, you can expand Webiny with custom plugins that introduce new fields.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`Checkout the tutorial on `}<_Link href="/docs/5.x/headless-cms/extending/custom-field-type">{`Creating a Webiny Headless CMS custom field plugin`}</_Link>{`.`}</p>
</Alert>
<_Heading level={3} id={"validators"} nextElement={{
      "type": "paragraph"
    }}>Validators</_Heading>
<p>{`On each of the attributes, you can attach one or more validators. They define which fields are required and what values, or patterns, of values a field can take. There is also the ability to attach a `}<inlineCode parentName="p">{`unique`}</inlineCode>{` field validator to specific fields.`}</p>
<p><strong parentName="p">{`GraphQL API endpoints`}</strong></p>
<p>{`The Headless CMS has 3 APIs which expand dynamically every time you create a new content model. Therefore, depending on what you want to do, you will use a different endpoint:`}</p>
<ul>
<li parentName="ul"><strong parentName="li"><inlineCode parentName="strong">{`Manage`}</inlineCode>{` API endpoint`}</strong>
<ul parentName="li">
<li parentName="ul">{`This is the primary endpoint; it allows you to create, delete, publish, unpublish and many other read and write operations.`}</li>
</ul>
</li>
<li parentName="ul"><strong parentName="li"><inlineCode parentName="strong">{`Read`}</inlineCode>{` API endpoint`}</strong>
<ul parentName="li">
<li parentName="ul">{`Only has queries to read data. It can only read data that is published.`}</li>
</ul>
</li>
<li parentName="ul"><strong parentName="li"><inlineCode parentName="strong">{`Preview`}</inlineCode>{` API endpoint`}</strong>
<ul parentName="li">
<li parentName="ul">{`Similarly to the Read API, with the exception that it returns the latest version of the content, regardless if the latest version is published or not.`}</li>
</ul>
</li>
</ul>
<p>{`You can explore the queries and mutations available under each of the APIs inside the Admin Panel by accessing the API Playground from the main menu.`}</p>
<_Heading level={3} id={"security"} nextElement={{
      "type": "paragraph"
    }}>Security</_Heading>
<p>{`From the security module in the main menu, you can control the access levels for both user groups as well as API tokens.`}</p>
<p>{`For the Headless CMS, the security implementation allows you to define access to the content. You can limit access to a particular content model or a content model group. Within that, you can control what operations are allowed. Is it ready-only access, or can the content be manipulated. And then which content is in the scope of that operation, is it only the content the user previously created himself, or all the content. This fine-grain control allows you to fully tweak the access levels to meet your business requirements.`}</p>
<p>{`When it comes to API tokens, you can also limit them to a particular endpoint alongside all the above-mentioned options.`}</p>
<_Heading level={3} id={"multi-language"} nextElement={{
      "type": "paragraph"
    }}>Multi-Language</_Heading>
<p>{`All apps inside Webiny are multi-language. The multi-language implementation is done in a way that each language is fully independent in terms of content and content models. This approach is the most flexible in terms of what you can do with it as each language can have a completely different content and structure. The tradeoff is that in some cases there will be some manual coding required say if you are reading an article in German and you want to switch to the same article in English. This switching logic and linking the German and English entry would be up to you to implement.`}</p>
<_Heading level={3} id={"scale-and-performance"} nextElement={{
      "type": "paragraph"
    }}>Scale and Performance</_Heading>
<p>{`There are 2 main operations that you can do on the Headless CMS which will define your scale factors. First is the write operation on the Manage API. These operations trigger a lambda function which then writes a record into DynamoDB. As you can imagine, this flow can easily handle thousands of requests per second. The data from DynamoDB is then written in batches into Elasticsearch service via a DynamoDB stream.`}</p>
<p>{`The second operation is the read operation, which comes when you interact with the Read or the Preview API. In this case, it’s a Lambda function that interacts with Elasticsearch, there is no DynamoDB.`}</p>
<Alert type="success" mdxType="Alert">
<p>{`The only time when Webiny uses DynamoDB to fetch items from the database is when you are requesting a particular item via the primary key.`}</p>
</Alert>
<p>{`The data inside the Elasticsearch service is stored so it can be quickly retrieved, no matter if there are filters and sorters applied. This includes also all the linked references. The scale factor here depends on the size of your Elasticsearch instance. This is the only “non-serverless” component Webiny uses so you need to think about sizing in advance.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`For an in-depth performance benchmark checkout the `}<_Link href="/docs/5.x/performance-and-load-benchmark/introduction">{`performance benchmark`}</_Link>{`.`}</p>
</Alert>
<_Heading level={2} id={"when-to-consider-webiny-s-headless-cms"} nextElement={{
      "type": "paragraph"
    }}>When to Consider Webiny’s Headless CMS</_Heading>
<p>{`Here are some key differentiators for when you should consider using Webiny’s Headless CMS:`}</p>
<ul>
<li parentName="ul"><strong parentName="li">{`Data ownership`}</strong>
<ul parentName="li">
<li parentName="ul">{`In both the open-source and the enterprise edition, Webiny is self-hosted. So if you need a highly scalable headless CMS solution, but don’t want to spend a lot of resources on managing and scaling infrastructure, Webiny is a great option.`}</li>
</ul>
</li>
<li parentName="ul"><strong parentName="li">{`Customizability`}</strong>
<ul parentName="li">
<li parentName="ul">{`Headless CMS can be fully tailor-made to your requirements. Being open-source you have full control over the code which you can modify to your needs.`}</li>
</ul>
</li>
<li parentName="ul"><strong parentName="li">{`Cost`}</strong>
<ul parentName="li">
<li parentName="ul">{`All of the infrastructure components Webiny uses, besides Elasticsearch, have consumption-based pricing, they scale automatically and require zero maintenance. Serverless in practice lowers infrastructure costs by 60-80% and maintenance costs by 60%.`}</li>
</ul>
</li>
<li parentName="ul"><strong parentName="li">{`Scalability`}</strong>
<ul parentName="li">
<li parentName="ul">{`With Webiny there is almost no need to reconfigure and redesign your infrastructure as your demand grows or shrinks. It’s a solution that you can use to start serving 100 users a day and the next day scale to handle over 10 million users a day or more.`}</li>
</ul>
</li>
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