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
  "title": "Content Modeling Best Practices",
  "description": "Learn best practices for content modeling in Headless CMS to create scalable, reusable, and efficient content structures.",
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
  "title": "Content Modeling Best Practices",
  "slug": "content-modeling-best-practices",
  "children": [{
    "title": "Identify and Define Content Types",
    "slug": "identify-and-define-content-types",
    "children": [{
      "title": "Comprehensive Content Assessment",
      "slug": "comprehensive-content-assessment"
    }, {
      "title": "Attribute Specification",
      "slug": "attribute-specification"
    }]
  }, {
    "title": "Design for Reusability",
    "slug": "design-for-reusability",
    "children": [{
      "title": "Component-Based Design & Establishing Content Relationships",
      "slug": "component-based-design-and-establishing-content-relationships"
    }]
  }, {
    "title": "Plan for Scalability",
    "slug": "plan-for-scalability",
    "children": [{
      "title": "Adaptable Models",
      "slug": "adaptable-models"
    }, {
      "title": "Content and Presentation Separation",
      "slug": "content-and-presentation-separation"
    }]
  }, {
    "title": "Optimize for Simplicity and Uniformity",
    "slug": "optimize-for-simplicity-and-uniformity",
    "children": [{
      "title": "Intuitive Naming Conventions",
      "slug": "intuitive-naming-conventions"
    }, {
      "title": "Standardized Templates",
      "slug": "standardized-templates"
    }]
  }, {
    "title": "Consider Localization and Internationalization",
    "slug": "consider-localization-and-internationalization",
    "children": [{
      "title": "Multilingual Support",
      "slug": "multilingual-support"
    }]
  }, {
    "title": "Develop a Multi-Channel Content Strategy",
    "slug": "develop-a-multi-channel-content-strategy",
    "children": [{
      "title": "Channel-Agnostic Content",
      "slug": "channel-agnostic-content"
    }, {
      "title": "Metadata Inclusion",
      "slug": "metadata-inclusion"
    }]
  }, {
    "title": "Adopt a Collaborative and Iterative Approach",
    "slug": "adopt-a-collaborative-and-iterative-approach",
    "children": [{
      "title": "Cross-Functional Collaboration",
      "slug": "cross-functional-collaboration"
    }, {
      "title": "Continuous Improvement",
      "slug": "continuous-improvement"
    }]
  }, {
    "title": "Documentation",
    "slug": "documentation",
    "children": []
  }]
}, {
  "title": "Content Modeling in Webiny",
  "slug": "content-modeling-in-webiny",
  "children": [{
    "title": "Searching With Reference Field and Objects - Considerations",
    "slug": "searching-with-reference-field-and-objects-considerations",
    "children": []
  }, {
    "title": "Dynamic Zone",
    "slug": "dynamic-zone",
    "children": []
  }]
}];

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



<Alert type="success" title="What you will learn" mdxType="Alert">
<ul>
<li parentName="ul">{`best practices for content modeling `}</li>
<li parentName="ul">{`create scalable, reusable, and efficient content structures`}</li>
<li parentName="ul">{`content modeling in Webiny`}</li>
</ul>
</Alert>
<_Heading level={2} id={"content-modeling-best-practices"} nextElement={{
      "type": "paragraph"
    }}>Content Modeling Best Practices</_Heading>
<p>{`Creating a well-structured content model is vital for leveraging the complete capabilities of a headless CMS like Webiny. By structuring your content properly, you can ensure scalability, reusability, and ease of management. This guide provides best practices for defining content types, designing for reusability, planning for scalability, and optimizing for simplicity. Whether you’re starting fresh or refining your existing setup, these strategies will help you build a robust and adaptable content model that meets your business needs.`}</p>
<_Heading level={3} id={"identify-and-define-content-types"} nextElement={{
      "type": "heading",
      "depth": 4
    }}>Identify and Define Content Types</_Heading>
<_Heading level={4} id={"comprehensive-content-assessment"} nextElement={{
      "type": "paragraph"
    }}>Comprehensive Content Assessment</_Heading>
<p>{`Begin by thoroughly analyzing the various types of content your organization needs. This encompasses primary content such as blog posts, product details, and user profiles, as well as auxiliary content like metadata, categories, and tags.`}</p>
<_Heading level={4} id={"attribute-specification"} nextElement={{
      "type": "paragraph"
    }}>Attribute Specification</_Heading>
<p>{`Once you identify the content, the next step is to clearly define the attributes for each content type. For example, a blog post may contain attributes such as title, slug, featured image, tags, category, and body. Each attribute can be of a different type. Webiny supports a wide range of attribute types; you can find more details `}<a parentName="p" {...{
        "href": "#content-modeling-in-webiny"
      }}>{`here`}</a>{`.`}</p>
<_Heading level={3} id={"design-for-reusability"} nextElement={{
      "type": "heading",
      "depth": 4
    }}>Design for Reusability</_Heading>
<_Heading level={4} id={"component-based-design-and-establishing-content-relationships"} nextElement={{
      "type": "paragraph"
    }}>Component-Based Design &amp; Establishing Content Relationships</_Heading>
<p>{`Decompose your content into modular, reusable components. Instead of embedding categories directly within each blog post, create a separate category content type. This allows you to reference these categories across multiple blog posts, ensuring consistency and simplifying updates. In Webiny, you can use the `}<strong parentName="p">{`Reference`}</strong>{` field to define relationships between different content types.`}</p>
<_Heading level={3} id={"plan-for-scalability"} nextElement={{
      "type": "heading",
      "depth": 4
    }}>Plan for Scalability</_Heading>
<_Heading level={4} id={"adaptable-models"} nextElement={{
      "type": "paragraph"
    }}>Adaptable Models</_Heading>
<p>{`Create content models that can easily adapt to growing needs. Ensure that adding new fields or content types does not require extensive restructuring. This flexibility allows your CMS to evolve alongside your business.`}</p>
<_Heading level={4} id={"content-and-presentation-separation"} nextElement={{
      "type": "paragraph"
    }}>Content and Presentation Separation</_Heading>
<p>{`Structure your content independently of its presentation. This ensures that the same content can be delivered across multiple platforms (web, mobile, etc.) without modification.`}</p>
<_Heading level={3} id={"optimize-for-simplicity-and-uniformity"} nextElement={{
      "type": "heading",
      "depth": 4
    }}>Optimize for Simplicity and Uniformity</_Heading>
<_Heading level={4} id={"intuitive-naming-conventions"} nextElement={{
      "type": "paragraph"
    }}>Intuitive Naming Conventions</_Heading>
<p>{`Implement clear and intuitive naming conventions for content types and fields to improve usability and maintain consistency.`}</p>
<_Heading level={4} id={"standardized-templates"} nextElement={{
      "type": "paragraph"
    }}>Standardized Templates</_Heading>
<p>{`Develop standard templates for frequently used content types to streamline content creation and maintain uniformity. In Webiny, you can use the `}<a parentName="p" {...{
        "href": "#dynamic-zone"
      }}>{`Dynamic Zone`}</a>{` field to define templates for your content and validation rules for those templates.`}</p>
<_Heading level={3} id={"consider-localization-and-internationalization"} nextElement={{
      "type": "heading",
      "depth": 4
    }}>Consider Localization and Internationalization</_Heading>
<_Heading level={4} id={"multilingual-support"} nextElement={{
      "type": "paragraph"
    }}>Multilingual Support</_Heading>
<p>{`Design your data models to support multiple languages if your content will be available in different languages. Webiny offers content localization that allows you to adapt your content to different languages by creating multiple locales. You can learn more about content localization in Webiny `}<_Link href="/docs/5.x/user-guides/headless-cms/advanced/content-localization">{`here`}</_Link>{`.`}</p>
<_Heading level={3} id={"develop-a-multi-channel-content-strategy"} nextElement={{
      "type": "heading",
      "depth": 4
    }}>Develop a Multi-Channel Content Strategy</_Heading>
<_Heading level={4} id={"channel-agnostic-content"} nextElement={{
      "type": "paragraph"
    }}>Channel-Agnostic Content</_Heading>
<p>{`As mentioned earlier in the Plan for Scalability section, you should design your content model to be easily adaptable for various platforms, including websites, mobile apps, and social media.`}</p>
<_Heading level={4} id={"metadata-inclusion"} nextElement={{
      "type": "paragraph"
    }}>Metadata Inclusion</_Heading>
<p>{`Incorporate metadata fields in your content model, such as SEO titles, descriptions, and keywords, to enhance search engine optimization and content discoverability.`}</p>
<_Heading level={3} id={"adopt-a-collaborative-and-iterative-approach"} nextElement={{
      "type": "heading",
      "depth": 4
    }}>Adopt a Collaborative and Iterative Approach</_Heading>
<_Heading level={4} id={"cross-functional-collaboration"} nextElement={{
      "type": "paragraph"
    }}>Cross-Functional Collaboration</_Heading>
<p>{`Involve stakeholders from different departments, such as design, development, and marketing, in the content modeling process to ensure the model meets diverse requirements and is user-friendly.`}</p>
<_Heading level={4} id={"continuous-improvement"} nextElement={{
      "type": "paragraph"
    }}>Continuous Improvement</_Heading>
<p>{`Regularly review and update your content models based on user feedback and changing business needs to maintain an efficient content structure.`}</p>
<_Heading level={3} id={"documentation"} nextElement={{
      "type": "paragraph"
    }}>Documentation</_Heading>
<p>{`Maintain comprehensive documentation for your content models, including definitions for each content type, attributes, and relationships. This serves as a reference for your team and aids in onboarding new members.
By adhering to these best practices, you can build a versatile and scalable content model in Webiny Headless CMS, ensuring that your content remains well-structured, manageable, and adaptable to future needs.`}</p>
<_Heading level={2} id={"content-modeling-in-webiny"} nextElement={{
      "type": "paragraph"
    }}>Content Modeling in Webiny</_Heading>
<p>{`Webiny supports a wide range of content model field types that allow you to create a well-structured content model efficiently. Here are the field types supported in Webiny:`}</p>
<ul>
<li parentName="ul"><strong parentName="li">{`Input`}</strong>
<ul parentName="li">
<li parentName="ul">{`A single-line text input or a multi-entry input`}</li>
<li parentName="ul">{`Can also be a list of predefined values the user can select`}</li>
</ul>
</li>
<li parentName="ul"><strong parentName="li">{`Number`}</strong>
<ul parentName="li">
<li parentName="ul">{`An integer or a float`}</li>
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
<li parentName="ul">{`References another content model`}</li>
<li parentName="ul">{`Supports both single entries and multiple select`}</li>
</ul>
</li>
<li parentName="ul"><strong parentName="li">{`Object`}</strong>
<ul parentName="li">
<li parentName="ul">{`Nested object field`}</li>
<li parentName="ul">{`Inside this field, you can place multiple other fields such as text, file, and others`}</li>
<li parentName="ul">{`You can nest objects to as many depth levels as you need`}</li>
</ul>
</li>
<li parentName="ul"><strong parentName="li">{`Dynamic zone`}</strong>
<ul parentName="li">
<li parentName="ul">{`A Dynamic Zone is a field that can contain multiple other fields`}</li>
<li parentName="ul">{`The difference between a dynamic zone and an object is that a dynamic zone allows you to select which fields you want to use`}</li>
<li parentName="ul">{`This is useful when you have a content model that has a lot of fields, but you only want to use a few of them in a particular entry`}</li>
<li parentName="ul">{`You can also nest dynamic zones to as many depth levels as you need`}</li>
<li parentName="ul">{`See the Dynamic Zone in action: `}<a parentName="li" {...{
              "href": "https://www.youtube.com/watch?v=4hOScz42_Nw"
            }}>{`https://www.youtube.com/watch?v=8Z3Z3Y5Q5Zo`}</a></li>
</ul>
</li>
</ul>
<p>{`Besides the default built-in attributes, you can expand Webiny with custom plugins that introduce new fields.`}</p>
<_Heading level={3} id={"searching-with-reference-field-and-objects-considerations"} nextElement={{
      "type": "paragraph"
    }}>Searching With Reference Field and Objects - Considerations</_Heading>
<p>{`Using Reference Fields, you can only search using the ID or entry ID. For example, let’s say you have two models, Article and Category. Article model has a reference field Category, which refers to the Category model.
If you want to find all articles associated with a category named `}<inlineCode parentName="p">{`abc`}</inlineCode>{` in the Article model, you will first need to fetch the ID of the `}<inlineCode parentName="p">{`abc`}</inlineCode>{` category from the Category model. Then, you can query using this category ID or entry ID in the Article model to retrieve the articles belonging to this category.`}</p>
<p>{`Using Objects allows you to search and filter through the data because they are part of the entry itself, but they cannot be used as independent entities in other models.`}</p>
<p>{`When selecting your tools, e.g., Objects vs. Reference fields, it is important to be crystal clear on your use case. If in doubt please reach out to the team on community `}<a parentName="p" {...{
        "href": "https://www.webiny.com/slack"
      }}>{`Slack`}</a>{` with the specific requirement or user story.`}</p>
<_Heading level={3} id={"dynamic-zone"} nextElement={{
      "type": "paragraph"
    }}>Dynamic Zone</_Heading>
<p>{`As mentioned earlier, the Dynamic Zone field allows you to define templates for your content and validation rules for those templates. Then, while creating your content, you can decide which template you want to use from the predefined set of templates. This way you can define structure for your content writers, and have them use prebuilt content types. Please note that when querying content data, you cannot filter content based on the Dynamic Zone field in the model.`}</p>
<p>{`You can learn more about Dynamic Zone here: `}<a parentName="p" {...{
        "href": "https://www.youtube.com/watch?v=4hOScz42_Nw"
      }}>{`https://www.youtube.com/watch?v=4hOScz42_Nw`}</a></p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;