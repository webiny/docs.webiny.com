/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Layout as _Layout } from "@/layouts/HandbookLayout"

import _navigation from "@/data/navigation.d54d1e.json";

const Layout = _Layout;
const pageData = {
  "title": "How we make money",
  "description": "Learn about our business model and how we make money.",
  "type": "handbook",
  "showPageHeader": true,
  "fullWidth": false
};
const docsearch = {
  "type": "handbook",
  "weight": 100
};
const navigation = _navigation;
const tableOfContents = [{
  "title": "Our Business Model",
  "slug": "our-business-model",
  "children": []
}, {
  "title": "How We Do Sales",
  "slug": "how-we-do-sales",
  "children": []
}, {
  "title": "We Are Either the Best Solution for You, or We Walk Away",
  "slug": "we-are-either-the-best-solution-for-you-or-we-walk-away",
  "children": []
}, {
  "title": "Don't Let the Price Model Get in the Way",
  "slug": "don-t-let-the-price-model-get-in-the-way",
  "children": []
}];

const layoutProps = {
  Layout,
pageData,
docsearch,
navigation,
tableOfContents
};
const MDXLayout = "wrapper"
export default function MDXContent({
  components,
  ...props
}) {
  return <MDXLayout {...layoutProps} {...props} components={components} mdxType="MDXLayout">


<p>{`The first thing to get out of the way is that open source doesn’t mean “free” as in “I don’t need to pay for it”. It means “free” as in “I have the freedom to use it, study it, modify it, and redistribute it” (within the terms defined in its license).`}</p>
<blockquote>
<p parentName="blockquote">{`When we call software “free,” we mean that it respects the users’ essential freedoms: the freedom to run it, to study and change it, and to redistribute copies with or without changes. This is a matter of freedom, not price, so think of “free speech,” not “free beer.”`}</p>
<ul parentName="blockquote">
<li parentName="ul">{`by Richard Stallman (`}<a parentName="li" {...{
            "href": "https://www.gnu.org/philosophy/open-source-misses-the-point.en.html"
          }}>{`Why Open Source Misses the Point of Free Software`}</a>{`)`}</li>
</ul>
</blockquote>
<_Heading level={2} id={"our-business-model"} nextElement={{
      "type": "paragraph"
    }}>Our Business Model</_Heading>
<p>{`We are a for-profit company. We make money by selling licenses to our software. We also offer professional services to help our customers with their projects and we offer support to make sure that if there are issues, we’re there to help resolve them. `}</p>
<p>{`We have a dual-license model. This means that we offer our software under two different licenses: a commercial license and an open-source license. You can read more about our license model and pricing tiers `}<_Link href="/docs/overview/pricing#webiny-and-39-s-dual-license-model">{`here`}</_Link>{`.`}</p>
<_Heading level={2} id={"how-we-do-sales"} nextElement={{
      "type": "paragraph"
    }}>How We Do Sales</_Heading>
<p>{`We utilize many tactics to sell our software, combining both inbound and outbound sales. We have a sales team that reaches out to potential customers and we also have a marketing team that creates content to attract potential customers.`}</p>
<p>{`We love technical selling, so even if you start off talking business, we love to get in front of your engineering team and do hour-long technical deep dives, open the code, set up live coding demos and similar. We want to make sure that you understand our product and that it’s a good fit for your project.`}</p>
<_Heading level={2} id={"we-are-either-the-best-solution-for-you-or-we-walk-away"} nextElement={{
      "type": "paragraph"
    }}>We Are Either the Best Solution for You, or We Walk Away</_Heading>
<p>{`Our customers deeply care about at least four of the items from the list below: `}</p>
<ul>
<li parentName="ul">
<p parentName="li"><strong parentName="p">{` Ability to control and customize the product `}</strong>{` - We are an open-source platform and we come with a development framework. This means that you have full control over the product and you can customize it to your needs. `}</p>
</li>
<li parentName="ul">
<p parentName="li"><strong parentName="p">{` Data ownership and governance `}</strong>{` - We are purposely built to be a self-hosted solution. This means that you own your data and you can host it wherever you want.`}</p>
</li>
<li parentName="ul">
<p parentName="li"><strong parentName="p">{` Performance at scale `}</strong>{` - We are built on top of `}<a parentName="p" {...{
            "href": "https://aws.amazon.com/"
          }}>{`AWS`}</a>{` and we utilize many of its serverless services. This means that you can scale your application as much as you want without worrying about performance.`}</p>
</li>
<li parentName="ul">
<p parentName="li"><strong parentName="p">{` Cost efficiency `}</strong>{` - The cost model of serverless infrastructure is that you pay per usage. This means that you only pay for what you use, you never overpay or underpay. In practice, Webiny can lower your infrastructure costs by up to 80% compared to traditional hosting solutions. (`}<a parentName="p" {...{
            "href": "https://www.webiny.com/resources/benefits-of-a-serverless-cms"
          }}>{`read the whitepaper`}</a>{`)`}</p>
</li>
<li parentName="ul">
<p parentName="li"><strong parentName="p">{` Manage multiple projects/websites `}</strong>{` - Webiny is a platform that allows you to manage multiple projects from a single installation. This means that you can build multiple applications and manage them from a single admin interface significantly reducing your maintenance costs.`}</p>
</li>
<li parentName="ul">
<p parentName="li"><strong parentName="p">{` Developer experience `}</strong>{` - We are a developer-first company. This means that we put a lot of effort into making sure that our product is easy to use and that it provides a great developer experience.`}</p>
</li>
<li parentName="ul">
<p parentName="li"><strong parentName="p">{` Future-proof technology stack `}</strong>{` - We are built on top of `}<a parentName="p" {...{
            "href": "https://reactjs.org/"
          }}>{`React`}</a>{`, `}<a parentName="p" {...{
            "href": "https://graphql.org/"
          }}>{`GraphQL`}</a>{`, `}<a parentName="p" {...{
            "href": "https://nodejs.org/en/"
          }}>{`Node.js`}</a>{`, `}<a parentName="p" {...{
            "href": "https://www.typescriptlang.org/"
          }}>{`Typescript`}</a>{` and  `}<a parentName="p" {...{
            "href": "https://aws.amazon.com/serverless"
          }}>{`AWS Serverless`}</a>{`. This means that you are building your application on top of the most popular and future-proof technologies available today.`}</p>
</li>
<li parentName="ul">
<p parentName="li"><strong parentName="p">{` Environmentally friendly `}</strong>{` - Running your website on VMs is like having a car with its engine constantly running in an idle state. Just so you could drive it for the 2h of your daily commute. Webiny runs on serverless infrastructure. There’s no idle state, your machines are only running when they have something to do. The rest of the time they don’t idle, waste energy and pump out CO2. This means that you are not only saving money, but you are also helping the environment.`}</p>
</li>
</ul>
<p>{`In case you don’t feel these things are resonating strongly with you, we are probably not the best solution for you. And that’s okay. We are not trying to be everything to everyone. We are trying to be the best solution for a specific type of customer. You’ll often hear us recommending other solutions to our customers if we feel that they are a better fit for their project.`}</p>
<_Heading level={2} id={"don-t-let-the-price-model-get-in-the-way"} nextElement={{
      "type": "paragraph"
    }}>Don&#39;t Let the Price Model Get in the Way</_Heading>
<p>{`Our default pricing model for our enterprise tier is based on several factors, like how many users will be using the system to manage content, how many projects or websites will be built, which features are needed, etc. This works in most cases, but we also understand that some customers prefer a different pricing model. `}</p>
<p>{`Examples like customers having lots of external contributors or customers that deal with user-generated content, where the number of users is not known in advance, are cases where our default pricing model doesn’t work. In these cases, we are happy to work with you to find a pricing model that works for both parties.`}</p>
<p>{`We can do this because of our self-hosted nature. Our pricing model is not “baked” into our code as you find in most SaaS products. We can easily change it to fit your needs. Our goal is to price based on the value you’re getting out of the product. `}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}





    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;