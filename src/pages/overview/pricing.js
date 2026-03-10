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
  "title": "Pricing Tiers",
  "description": "How is Webiny priced and what are the available options.",
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
  "title": "Webiny's Dual License Model",
  "slug": "webiny-s-dual-license-model",
  "children": []
}, {
  "title": "Webiny Pricing Tiers",
  "slug": "webiny-pricing-tiers",
  "children": []
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
<li parentName="ul">{`What is Webiny’s business model?`}</li>
<li parentName="ul">{`What is commercial open-source software?`}</li>
<li parentName="ul">{`What are the different Webiny pricing tiers?`}</li>
</ul>
</Alert>
<p>{`Webiny is an open-source project and at such, all our code is open to the public on our `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js"
      }}>{`GitHub repository`}</a>{`. However building an open-source project and a business, in the past have been two different things. But lately, they have come together into what’s today known as Commercial Open Source Software (COSS) and this is the model Webiny as a project has embraced.`}</p>
<Alert type="info" title="Want to learn more about COSS?" mdxType="Alert">
<p>{`Here’s is a great article on the topic of Commercial Open-Source:
`}<a parentName="p" {...{
          "href": "https://www.webiny.com/blog/what-is-commercial-open-source"
        }}>{`https://www.webiny.com/blog/what-is-commercial-open-source`}</a></p>
</Alert>
<_Heading level={2} id={"webiny-s-dual-license-model"} nextElement={{
      "type": "paragraph"
    }}>Webiny&#39;s Dual License Model</_Heading>
<p>{`Majority of Webiny’s code base (over 95%) is licensed under the MIT open-source license. As such, you are given the right to use that code for any type of use-cases, projects, be commercial or not. You’re allowed to make changes to the project and you can even resell it if you want to. We are a strong believer that open-source is the only way software will be written and distributed in the future and we are commited to such a cause ourselves.`}</p>
<p>{`However, as a fairly young company we need to ensure the long-term success of our project. Webiny is already a large project, and it’s growing. As such it requires a dedicated team working full time to maintain, build and fix things, alongside the contributions coming from the community. To ensure their long-term sustainability, many open-source projects add a commercial aspect to their project.`}</p>
{`This is usually done through either offering a cloud version, or a dual-license offering. Certain features might not be available under the free OSS license, but instead under a commercial license. Which might, or might not, be open-source. `}
<u>
<strong>{`It’s important to distiguish that open-source doesn’t mean “free”`}</strong>
</u>
{`. If only means the code is open for public to view, modify and enhance. Still to use the code, the user must adhear to the terms of the license.`}
<Alert type="info" title="Learn more about what it means to be open-source" mdxType="Alert">
<p>{`What is open-source? `}<a parentName="p" {...{
          "href": "https://opensource.com/resources/what-open-source"
        }}>{`https://opensource.com/resources/what-open-source`}</a></p>
</Alert>
<p>{`Alongside the MIT license, Webiny also has a commercial license that comes with a cost, which unlocks additional features and functionality within the system. The revenue we get from this license is directly reinvested into building more features, and making the platform better and enjoyable to use. This is how we are building a sustainable model around our business, and ensuring the long-term development of our project.`}</p>
<_Heading level={2} id={"webiny-pricing-tiers"} nextElement={{
      "type": "paragraph"
    }}>Webiny Pricing Tiers</_Heading>
<p>{`Webiny comes in these three pricing tiers:`}</p>
<ul>
<li parentName="ul"><strong parentName="li">{`Free`}</strong>
<ul parentName="li">
<li parentName="ul">{`for personal and hobby projects`}</li>
<li parentName="ul">{`has only basic security options`}</li>
<li parentName="ul">{`doesn’t support multi-tenancy`}</li>
<li parentName="ul">{`all code is licensed under the MIT open-source license`}</li>
<li parentName="ul">{`100% free to use without any restrictions`}</li>
</ul>
</li>
<li parentName="ul"><strong parentName="li">{`Business`}</strong>
<ul parentName="li">
<li parentName="ul">{`for small team projects`}</li>
<li parentName="ul">{`supports advanced roles and permissions`}</li>
<li parentName="ul">{`supports optional addons such as Publishing Workflow and Headless Pages`}</li>
<li parentName="ul">{`supports multi-tenancy`}</li>
<li parentName="ul">{`all the code is open-source, but it’s a mix of the MIT license and the Webiny’s commerical license, users are allowed to make modifications to the code regardless of the license`}</li>
<li parentName="ul">{`price starts at $9 user/month, first user is free`}</li>
</ul>
</li>
<li parentName="ul"><strong parentName="li">{`Enterprise`}</strong>
<ul parentName="li">
<li parentName="ul">{`for teams working on critical projects`}</li>
<li parentName="ul">{`comes with SSO and team management`}</li>
<li parentName="ul">{`includes SLA support and consultancy services`}</li>
<li parentName="ul">{`all the code is open-source, but it’s a mix of the MIT license and the Webiny’s commerical license, users are allowed to make modifications to the code regardless of the license`}</li>
<li parentName="ul">{`price starts at $3,499 / month`}</li>
</ul>
</li>
</ul>
<p>{`For more details on the pricing tier, please visit our `}<a parentName="p" {...{
        "href": "https://www.webiny.com/pricing"
      }}>{`pricing page`}</a>{`. For any additional questions, please email us at `}<a parentName="p" {...{
        "href": "mailto:sales@webiny.com"
      }}>{`sales@webiny.com`}</a>{`.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;