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
  "title": "Our values",
  "description": "What's the nature of our business, what do we stand for, and what are our values?",
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
  "title": "Why Do We Need Values?",
  "slug": "why-do-we-need-values",
  "children": []
}, {
  "title": "Our Values",
  "slug": "our-values",
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


<_Heading level={2} id={"why-do-we-need-values"} nextElement={{
      "type": "paragraph"
    }}>Why Do We Need Values?</_Heading>
<p>{`Simply put, `}<_Link href="/docs/handbook/company/why-webiny-exists">{`our purpose`}</_Link>{` is the end destination. Every decision we make has to go towards that goal. But in practice often you have a choice of multiple paths you can take to get there. To help us decide which path to take, we use our values as the guiding principles. They help us make decisions and take the right action.`}</p>
<_Heading level={2} id={"our-values"} nextElement={{
      "type": "list",
      "ordered": false,
      "start": null,
      "spread": false
    }}>Our Values</_Heading>
<ul>
<li parentName="ul"><strong parentName="li">{`Innovate, iterate and improve`}</strong>
<ul parentName="li">
<li parentName="ul">{`We are never satisfied with the status quo.`}</li>
<li parentName="ul">{`We are always looking for a better way of doing things.`}</li>
<li parentName="ul">{`We are not afraid to change.`}</li>
<li parentName="ul">{`Question everything, including best practices.`}</li>
</ul>
</li>
</ul>
<p>{`This is about striving for innovation, not settling for the status quo. If there is a better way of doing something, let’s try it out. If we are not happy with something, let’s change it. It’s not just innovation on the technical side, we’re bringing innovation to how we do sales, pricing, how we operate as a team, and how we support our customers and partners. All to do better and constantly evolve and grow. `}</p>
<ul>
<li parentName="ul"><strong parentName="li">{`We care`}</strong>
<ul parentName="li">
<li parentName="ul">{`About the individual, the customer, the employee, the partner, the user, everyone has their own and different needs.`}</li>
<li parentName="ul">{`About enabling individual experiences and unlocking creativity.`}</li>
<li parentName="ul">{`About our customer’s business and what truly matters to them. We adapt our practices to make each customer successful.`}</li>
</ul>
</li>
</ul>
<p>{`To care for others, we need to care for them as individuals. Every one of our customers is different, in terms of how they do their business, to how they wish to use our product. We care about this individually as it’s what makes them who they are. We respect it, and so should our product. This is why we created a product that’s so highly customizable, as this is the only way for customers to truly make it feel their own. We also go beyond the product, we care about how they conduct their business, what value their business creates for their end customers, and what their customers care about. All in the service to truly know our customers and to help them succeed. `}</p>
<ul>
<li parentName="ul"><strong parentName="li">{`Building the future together`}</strong>
<ul parentName="li">
<li parentName="ul">{`Co-creating a better Internet with customers, community and partners.`}</li>
<li parentName="ul">{`Collaboration is key, we can’t do it alone.`}</li>
<li parentName="ul">{`Knowledge sharing how we grow, both as individuals and as a company.`}</li>
</ul>
</li>
</ul>
<p>{`To fulfill our mission as a company, we can’t do it alone. Our customers, community and partners are a big part of it, we can only succeed by doing it together. We collaborate on our roadmap, feature design and feedback. We make sure everyone has a voice and that it’s respected.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}





    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;