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
  "title": "Deciding what features to build",
  "description": "How do we prioritize the items on our roadmap",
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
  "title": "The Process",
  "slug": "the-process",
  "children": []
}, {
  "title": "Customer-Driven Roadmap",
  "slug": "customer-driven-roadmap",
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


<p>{`Webiny is a platform and it’s made up of multiple applications, where each has several features. At Webiny we also consider our development framework a part of that platform and we treat it in the same way as any other part of the product. Treating the development framework as a product ensures our focus and commitment to developer experience is always at the core of everything we do.`}</p>
<p>{`The process described below is how we go about building our roadmap and prioritizing features, regardless if we’re talking about a new application feature or a new DX feature inside the development framework. `}</p>
<_Heading level={2} id={"the-process"} nextElement={{
      "type": "paragraph"
    }}>The Process</_Heading>
<p>{`We run a structured process every quarter around how we go about building our roadmap. It all starts with customer interviews where we gather their feedback about the current state of things, the good and the bad (there’s no such thing as a perfect product). We then expand the conversation by learning about their upcoming projects and the potential challenges they might have in delivering them. Finally, we ask what other features the customers would like to see in Webiny. `}</p>
<p>{`From a typical conversation, we can extract a lot of information and translate those into potential features. By doing this across multiple of our customers we can start to see patterns and identify the most important features that we should build next. Note that we mainly deal with enterprise customers so we’re not talking about thousands of interviews, and it’s something that we’re able to scale as we grow.`}</p>
<p>{`Once we’ve identified certain patterns are can shape them into features, we might go back to those customers and again revalidate that the feature definition is correct, and we also ask them how important this feature is to them. For that, we use the `}<a parentName="p" {...{
        "href": "https://en.wikipedia.org/wiki/MoSCoW_method"
      }}>{`MoSCoW method`}</a>{`, where we ask the customer to rate the feature as Must have, Should have, Could have, or Won’t have. `}</p>
<p>{`Each of these ratings is then given a score. If multiple customers say that a certain feature is a Must Have, it will quickly climb up to the top of our priority list. Eventually, we’ll just sort all of the features by their score and this then becomes our priority list.`}</p>
<p>{`But of course, the list can sometimes have a lot more items than what we’re able to deliver in a quarter. To help us know where the cut-off line is, we move into the next stage of the process where we assess the effort and then we finally decide which features will move into the quarterly release.`}</p>
<_Heading level={2} id={"customer-driven-roadmap"} nextElement={{
      "type": "paragraph"
    }}>Customer-Driven Roadmap</_Heading>
<p>{`Things like agile, sprints, and how we plan things, it’s not the main point we want to demonstrate here. The main point is that we’re building a customer-driven roadmap. We’re not building features that we think are cool, we’re building features that our customers need. Those features help our customers deliver their projects faster and with less effort as part of that effort is already taken care of by our side. `}</p>
<p>{`Such an approach brings us very close to our customers. So close in fact that several customers now invite us to their planning sessions, they share their long-term plans with us, they plan the delivery of their projects together with us, and we become an extension of their team. It’s a very unique relationship and it’s something that we’re very proud of.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}





    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;