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
  "title": "Why and when to use Webiny",
  "description": "Get to know the unique advantages Webiny offers and when to pick Webiny over alternatives.",
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
  "title": "Why Webiny",
  "slug": "why-webiny",
  "children": [{
    "title": "It's a Content Platform",
    "slug": "it-s-a-content-platform",
    "children": []
  }, {
    "title": "It's Enterprise-Scale Ready",
    "slug": "it-s-enterprise-scale-ready",
    "children": []
  }, {
    "title": "Self-Hosted and Open-Source",
    "slug": "self-hosted-and-open-source",
    "children": []
  }, {
    "title": "It's Five Applications in One",
    "slug": "it-s-five-applications-in-one",
    "children": []
  }, {
    "title": "It's Composable (Not in a Fluffy Marketing-Term Way)",
    "slug": "it-s-composable-not-in-a-fluffy-marketing-term-way",
    "children": []
  }, {
    "title": "It's About Organization and Efficiency",
    "slug": "it-s-about-organization-and-efficiency",
    "children": []
  }]
}, {
  "title": "When to Use Webiny",
  "slug": "when-to-use-webiny",
  "children": [{
    "title": "Large Websites and Applications",
    "slug": "large-websites-and-applications",
    "children": []
  }, {
    "title": "Global Multi-Site Brands",
    "slug": "global-multi-site-brands",
    "children": []
  }, {
    "title": "Data-Sensitive Applications",
    "slug": "data-sensitive-applications",
    "children": []
  }, {
    "title": "A Custom Application",
    "slug": "a-custom-application",
    "children": []
  }, {
    "title": "SaaS Solution (Multi-Tenanted Solutions)",
    "slug": "saa-s-solution-multi-tenanted-solutions",
    "children": []
  }, {
    "title": "Marketing Pages With Rich and Interactive Components",
    "slug": "marketing-pages-with-rich-and-interactive-components",
    "children": []
  }, {
    "title": "Applications With Integrations to 3rd Party Systems",
    "slug": "applications-with-integrations-to-3rd-party-systems",
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



<Alert type="success" title="WHAT YOU'LL LEARN" mdxType="Alert">
<ul>
<li parentName="ul">{`What makes Webiny unique`}</li>
<li parentName="ul">{`Use cases best suited for Webiny`}</li>
</ul>
</Alert>
<_Heading level={2} id={"why-webiny"} nextElement={{
      "type": "paragraph"
    }}>Why Webiny</_Heading>
<p>{`Several key elements make Webiny different from the other solutions on the market. Let’s explore some of the key differentiators before we go into the use cases that Webiny is best suited for. `}</p>
<_Heading level={3} id={"it-s-a-content-platform"} nextElement={{
      "type": "paragraph"
    }}>It&#39;s a Content Platform</_Heading>
<p>{`Webiny is not your typical CMS. We prefer to describe Webiny as a content platform. What’s the difference? A platform is a foundation that’s designed to be built upon and integrated with other systems. Webiny’s foundation provides all the capabilities you might need to manage your content, and its underlying development framework enables you to fully customize the content creation and management experience. `}</p>
<p>{`A traditional solution requires you to adapt to its way of working and allows you only to build experiences that the system was designed to support. Webiny is the opposite of that. Webiny adapts to you, and you control what experiences you want to create. `}</p>
<_Heading level={3} id={"it-s-enterprise-scale-ready"} nextElement={{
      "type": "paragraph"
    }}>It&#39;s Enterprise-Scale Ready</_Heading>
<p>{`Webiny is designed for enterprise workloads. This means millions of records, petabytes of assets, thousands of different projects, thousands of content editors, security integrations, compliance, multi-tenancy, and white-glove support, it’s all included, and it’s all fully customizable to your requirements. `}</p>
<p>{`Running on top of fault-tolerant serverless infrastructure also means the system will always be available and reliable regardless of the number of requests or users it is serving at any point in time. `}</p>
<_Heading level={3} id={"self-hosted-and-open-source"} nextElement={{
      "type": "paragraph"
    }}>Self-Hosted and Open-Source</_Heading>
<p>{`One of the key design principles of Webiny is to keep the customer in control. In control over the experiences, the data and the code. This is why Webiny is designed to be self-hosted and built on top of open-source principles. Customers keep their data within their own AWS account and have full access to the source code to modify and adapt the platform to their needs. `}</p>
<p>{`Another benefit of a self-hosted platform is that your infrastructure resources aren’t throttled or rate-limited, like in a SaaS environment. Typically a SaaS solution has to “protect” its customers so it doesn’t allow a single customer to take too much of internal resources. When self-hosting that is not the case. Webiny easily servers thousands of requests a second, while most SaaS solutions allow you to serve only a few dozen requests a second. `}</p>
<_Heading level={3} id={"it-s-five-applications-in-one"} nextElement={{
      "type": "paragraph"
    }}>It&#39;s Five Applications in One</_Heading>
<p>{`Webiny is not a single application, but a suite of five different applications which are: Headless CMS, Page Builder, Form Builder, File Manager and Advanced Publishing Workflows. Some applications can be used independently like the Headless CMS and Page Builder, some integrate on top of the existing applications like Form Builder, File Manager and Advanced Publishing Workflows. You can also replace some of the built-in applications with your application. A typical example is replacing File Manager, our DAM application, with your own. `}</p>
<_Heading level={3} id={"it-s-composable-not-in-a-fluffy-marketing-term-way"} nextElement={{
      "type": "paragraph"
    }}>It&#39;s Composable (Not in a Fluffy Marketing-Term Way)</_Heading>
<p>{`When most of the market says that their solution is “composable”, what they really mean is that you can buy multiple of their solutions and have all of them working seamlessly together. They are only composable within their own ecosystem. We don’t think this is what composable should truly mean. `}</p>
<p>{`Webiny is composable in the sense that you can bring into Webiny any 3rd party system and seamlessly integrate it. You can also remove from Webiny the built-in functionality and replace it with a different one. This is what composition means in Webiny. `}</p>
<_Heading level={3} id={"it-s-about-organization-and-efficiency"} nextElement={{
      "type": "paragraph"
    }}>It&#39;s About Organization and Efficiency</_Heading>
<p>{`The main content inside Webiny is managed through a module we call Advanced Content Control. This module helps you organize all your content (assets, pages, content entries, …) into folders and sub-folders, customize the viewing experience of the content, apply bulk actions on top of your content, have powerful search options and control, on a sub-folder level, which users can manage and view which content. `}</p>
<_Heading level={2} id={"when-to-use-webiny"} nextElement={{
      "type": "paragraph"
    }}>When to Use Webiny</_Heading>
<p>{`Webiny is very flexible and can suit a wide variety of use cases given it comes with several ready-made applications, however, there are a few use cases where Webiny is a better option than some alternatives, and there are some options where Webiny might not be the best pick. Below we’ll explore a few examples.`}</p>
<_Heading level={3} id={"large-websites-and-applications"} nextElement={{
      "type": "paragraph"
    }}>Large Websites and Applications</_Heading>
<p>{`Webiny thrives on projects with large workloads that have lots of data and assets. The underlying serverless infrastructure means Webiny can handle those types of workloads easily, but also due to the consumption cost model of this infrastructure type, Webiny will provide significant cost savings in the process. `}</p>
<_Heading level={3} id={"global-multi-site-brands"} nextElement={{
      "type": "paragraph"
    }}>Global Multi-Site Brands</_Heading>
<p>{`Webiny through its multi-tenancy feature and lifecycle events is well suited for such use cases as it enables things like content inheritance between tenants and on a single Webiny instance, you can run thousands of different tenants/projects/websites which can then share assets. Through its publishing workflow process and content organization Webiny helps your content editors be efficient in their work and reduce any potential errors when it comes to publishing content.`}</p>
<_Heading level={3} id={"data-sensitive-applications"} nextElement={{
      "type": "paragraph"
    }}>Data-Sensitive Applications</_Heading>
<p>{`Webiny being self-hosted means your data stays with you. Only you have access to it and have full control over where and how it’s stored. Solutions in market segments like insurance, finance, medical research, patient solutions, education, government and similar will benefit from using Webiny as it will be easier for them to get approval from the internal infosec teams and meet strict compliance requirements within their industry.`}</p>
<_Heading level={3} id={"a-custom-application"} nextElement={{
      "type": "paragraph"
    }}>A Custom Application</_Heading>
<p>{`Because Webiny is so customizable it’s a great foundation for projects where typical SaaS solutions are just too rigid. Not only can you customize existing Webiny apps, but you can also use the same platform to then build whole new applications on top. This will significantly reduce the time it takes for you to build your project, and you will also benefit from the highly scalable serverless infrastructure making your application scalable and reliable out of the box, plus you’ll have much less code to maintain overall. `}</p>
<_Heading level={3} id={"saa-s-solution-multi-tenanted-solutions"} nextElement={{
      "type": "paragraph"
    }}>SaaS Solution (Multi-Tenanted Solutions)</_Heading>
<p>{`The multi-tenancy feature at the core of Webiny is ideal for using Webiny as a foundation for your SaaS solution as through multi-tenancy you can sandbox the data between your customers. The thing is multi-tenancy is notoriously hard to execute right, on both the business logic layer, code layer and the infrastructure layer. They all have to work in unison. With Webiny you get all of that, plus a scalable infrastructure right out of the box, all you need to do is introduce the logic that defines your application and you’re good to go. `}</p>
<_Heading level={3} id={"marketing-pages-with-rich-and-interactive-components"} nextElement={{
      "type": "paragraph"
    }}>Marketing Pages With Rich and Interactive Components</_Heading>
<p>{`Both the Page Builder and the Headless CMS application can be used to create marketing pages. Developers can create custom components that are both interactive and dynamic which then non-technical content editors can easily use to create their content and enrich the experience for the end user. Another added benefit is that those components can expose configuration parameters. For example, it’s easy to create a product listing component that a user drags&drops into the Page Builder editor, and then picks how many products to list and from which categories. The products can come from an external 3rd party system, or directly from Webiny’s Headless CMS. This is just one of many options.`}</p>
<_Heading level={3} id={"applications-with-integrations-to-3rd-party-systems"} nextElement={{
      "type": "paragraph"
    }}>Applications With Integrations to 3rd Party Systems</_Heading>
<p>{`Data inside Webiny’s Headless CMS can be modeled using several of the built-in field types, like text, file, reference, object, nested field and similar. But you can also introduce custom fields that can fetch data from external systems, think of pulling the customer name directly from your CRM into Webiny, or you can also have custom fields with internal logic, say you want to create a field that is made as a combination of data from several other fields. You can also introduce custom validators and views to control how the content looks, and what information it can take. `}</p>
<Alert type="info" title="Other use cases?" mdxType="Alert">
<p>{`Any other use case you want to discuss? `}<_Link href="/forms/product-demo">{`Let’s have a chat.`}</_Link></p>
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