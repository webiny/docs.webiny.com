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
  "title": "How we got here",
  "description": "The origin story of Webiny",
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
  "title": "The Beginnings - ~2006",
  "slug": "the-beginnings-2006",
  "children": []
}, {
  "title": "Web Agency - Est. 2009",
  "slug": "web-agency-est-2009",
  "children": []
}, {
  "title": "The Product Launch - 2018",
  "slug": "the-product-launch-2018",
  "children": []
}, {
  "title": "Pre-Seed - 2019",
  "slug": "pre-seed-2019",
  "children": []
}, {
  "title": "YCombinator / Seed Round - 2021",
  "slug": "y-combinator-seed-round-2021",
  "children": []
}, {
  "title": "Enterprise CMS - 2022",
  "slug": "enterprise-cms-2022",
  "children": []
}, {
  "title": "Serverless Open-Source DXP - 2024",
  "slug": "serverless-open-source-dxp-2024",
  "children": []
}, {
  "title": "Webiny - the Leading DXP in the Market - 2030",
  "slug": "webiny-the-leading-dxp-in-the-market-2030",
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


<_Heading level={2} id={"the-beginnings-2006"} nextElement={{
      "type": "paragraph"
    }}>The Beginnings - ~2006</_Heading>
<p>{`Pavel and Sven were attending the uni together and that’s where they met. Quickly they got involved in different side projects to earn some extra cash. PHP was the leading language of the time and both Pavel and Sven had way more hair on their heads than today.`}</p>
<p>{`A few years into the side gigs Sven decided to form a company and Pavel was the first employee. `}</p>
<_Heading level={2} id={"web-agency-est-2009"} nextElement={{
      "type": "paragraph"
    }}>Web Agency - Est. 2009</_Heading>
<p>{`Before Webiny became the product and company you know today, its beginning was quite different. In 2008 Webiny was born in London as a web agency whose core business was focusing on building websites and applications for customers around the world. `}</p>
<p>{`Ten years and many projects later, Pavel and Sven gathered knowledge about different CMS options on the market, and what worked and what didn’t. `}</p>
<_Heading level={2} id={"the-product-launch-2018"} nextElement={{
      "type": "paragraph"
    }}>The Product Launch - 2018</_Heading>
<p>{`Around 2017/18 Sven started to play around with serverless technologies, which were still in very early stages. That vision of serverless, in how we saw it then, and how we still see it today remained the same - `}<em parentName="p">{`serverless is the future of infrastructure`}</em>{`.`}</p>
<p>{`Many sleepless nights later, Webiny - Serverless CMS was born and launched on Product Hunt where it became the second most-voted product of the day, and a day later it ended up trending on hacker news. This was enough to open a new chapter. `}</p>
<_Heading level={2} id={"pre-seed-2019"} nextElement={{
      "type": "paragraph"
    }}>Pre-Seed - 2019</_Heading>
<p>{`With the initial traction, Webiny raised a pre-seed round from Episode 1, a London-based venture capital fund. With that round the team grew to 5 people and the product added lot more capabilities, especially around the framework which allowed us to build additional products like the Headless CMS and get even more traction. `}</p>
<_Heading level={2} id={"y-combinator-seed-round-2021"} nextElement={{
      "type": "paragraph"
    }}>YCombinator / Seed Round - 2021</_Heading>
<p>{`Webiny was selected to join the world’s leading business accelerator. The same place where companies like Airbnb, Dropbox, Stripe and many others started. On the back of the new growth and the YC demo day, Webiny raised a $3.5M investment round led by M12 - Microsoft Ventures, with participation from many other investors, including Samsung Next. `}</p>
<_Heading level={2} id={"enterprise-cms-2022"} nextElement={{
      "type": "paragraph"
    }}>Enterprise CMS - 2022</_Heading>
<p>{`In 2022 Webiny decided to focus on the CMS proposition targeting enterprise needs. We positioned our base value pillars focusing on our unique and defensible propositions like privacy, data ownership, open-source product customisability and more. This resonated extremely well with our target audience as on the other end they were forced into SaaS products that were taking away their data ownership and locking them into products that couldn’t be adopted to fit their needs. `}</p>
<_Heading level={2} id={"serverless-open-source-dxp-2024"} nextElement={{
      "type": "paragraph"
    }}>Serverless Open-Source DXP - 2024</_Heading>
<p>{`By working together with several of our enterprise customers and partners who are pushing the product to do more every day, Webiny has outgrown the “CMS” label. Webiny is becoming the world’s first open-source serverless DXP.`}</p>
<p>{`DXP is a product that caters for end to ends needs of large enterprises in terms of creating and distributing their content.  We’re talking about everything from email marketing, personalization, e-commerce and much more. `}</p>
<_Heading level={2} id={"webiny-the-leading-dxp-in-the-market-2030"} nextElement={{
      "type": "paragraph"
    }}>Webiny - the Leading DXP in the Market - 2030</_Heading>
<p>{`This part of our story is yet to be written, but we firmly believe our unique product proposition mixed with our strong customer-centric culture backed by our open-source community and a vast network of agency partners will enable us to build a product that can bring a long-needed change to the DXP market that’s currently controlled by a small handful of outdated solutions.  `}</p>
<p>{`P.S.`}</p>
<p>{`If you want to take part in our journey → `}<a parentName="p" {...{
        "href": "https://careers.webiny.com/"
      }}>{`check out our open roles`}</a>{`.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}





    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;