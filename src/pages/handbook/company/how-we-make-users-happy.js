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
  "title": "How we make users happy",
  "description": "What is it that we do that makes our users happy?",
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
  "title": "Fanatical Customer Support",
  "slug": "fanatical-customer-support",
  "children": []
}, {
  "title": "BYOSS - Bring Your Own Secret Sauce",
  "slug": "byoss-bring-your-own-secret-sauce",
  "children": []
}, {
  "title": "Strategic Alignment on the Roadmap",
  "slug": "strategic-alignment-on-the-roadmap",
  "children": []
}, {
  "title": "A Truly Composable Product",
  "slug": "a-truly-composable-product",
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


<_Heading level={2} id={"fanatical-customer-support"} nextElement={{
      "type": "paragraph"
    }}>Fanatical Customer Support</_Heading>
<p>{`A product is not whole without fanatical customer support, and when we say fanatical, we truly mean it. It’s been consistently the most praised thing from all of our customers. `}</p>
<p>{`Our support is provided by the core engineering team that built the product, so they know it inside out. The time to resolve a query and get you unblocked couldn’t be any shorter. But also by providing that feedback to the team that built the product and not some support engineer, the perception of the feedback is different, it’s more personal, and it is taken more seriously, and thus is acted upon faster.`}</p>
<_Heading level={2} id={"byoss-bring-your-own-secret-sauce"} nextElement={{
      "type": "paragraph"
    }}>BYOSS - Bring Your Own Secret Sauce</_Heading>
<p>{`Most products out there tell YOU the user how you need to use them. They dictate YOUR processes, pretending to know what makes YOU, YOU. Like they are the ones that built your business like they are the ones that know your market best. They make assumptions about your needs, your processes, your buyers and your customers. Well, we all know what’s said about assumptions.`}</p>
<p>{`We’re the opposite of that. We intentionally didn’t build a product that gets you 100% of the way. The reason is that we don’t know where YOUR way leads. Instead, we’ve built a product that gets you part of the way, and as part of our product, we’ve included all the needed tools for you to implement the rest. That rest is your secret sauce, it’s what makes YOU, YOU.`}</p>
<_Heading level={2} id={"strategic-alignment-on-the-roadmap"} nextElement={{
      "type": "paragraph"
    }}>Strategic Alignment on the Roadmap</_Heading>
<p>{`The customers that work with us are in for the long run. They are looking for a partner that will help them grow their business, and they are looking for a partner that will listen to their needs and act on them. We talk to our customers regularly, and we listen to their needs. We then align those needs with our product roadmap and make sure that we are building the right things for them. On average 90% of our roadmap items are direct requests from our customers. `}</p>
<p><strong parentName="p">{`Does that mean you’ll build custom features just for me?`}</strong></p>
<p>{`Not necessarily. We will only commit items to the roadmap that we believe will benefit the majority of our customers, we don’t do one-offs. But we will always make sure that we understand your needs and that we are building the right things for you.`}</p>
<p>{`In case we don’t commit your item to the roadmap, we will always provide you with a solution that will get you unblocked. Typically this means adding new extension points, hooks and lifecycle events, followed by a set of tutorials that will enable your team to implement the feature themselves. We’ll always have your back! `}</p>
<_Heading level={2} id={"a-truly-composable-product"} nextElement={{
      "type": "paragraph"
    }}>A Truly Composable Product</_Heading>
<p>{`There are many products on the market that use and practically abuse the word “composable” from the marketing side. You’ve got the legacy DXP platforms calling themselves composable, but the only composing you can do is within their product portfolio. `}</p>
<p>{`On the other end, you’ve got the newer SaaS options which are also trying to take the piece of the pie, while they are a single-purpose solution, and you have zero ability to extend it. You are limited to only a few options they provide to integrate with other tools. `}</p>
<p>{`Users don’t want that anymore. They want to be able to pick and choose the best tools for their needs, and they want to be able to integrate them in a way that makes sense for them. We have built our product with that in mind. We’ve built it to be truly composable. We’ve built it to be the glue that holds all your tools together. `}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}





    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;