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
  "title": "Why we chose serverless infrastructure",
  "description": "What are our reasons for using serverless infrastructure",
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
  "title": "FAQ",
  "slug": "faq",
  "children": [{
    "title": "What About Vendor Lock-In?",
    "slug": "what-about-vendor-lock-in",
    "children": []
  }, {
    "title": "Is It Just AWS, What About Other Cloud Providers?",
    "slug": "is-it-just-aws-what-about-other-cloud-providers",
    "children": []
  }, {
    "title": "What About the Cold Start Problem?",
    "slug": "what-about-the-cold-start-problem",
    "children": []
  }, {
    "title": "Where Can I Learn More About Serverless?",
    "slug": "where-can-i-learn-more-about-serverless",
    "children": []
  }]
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


<p>{`When we set out to build Webiny, one of our goals was to provide a great experience to the developers. To do that we knew we needed to control the product experience end-to-end, and with a self-hosted product like Webiny, that is not easily achievable. A big part of how a product performs is due to the infrastructure it runs on. How performant, scalable and secure that infrastructure is, is a part of it. But the other part is how costly is it to run and maintain on an ongoing basis. `}</p>
<p>{`We took a bet on serverless. With serverless we can use the best services in the world to build our product. Just imagine the engineering force you would need to have on your end if you wanted to build a fault-tolerant storage similar to AWS S3, or a computing unit that can scale from zero to a thousand instances in a few seconds, like AWS Lambda, or a database that can handle millions of queries per second, like DynamoDB. And did we mention that those services are fault-tolerant by design, that they are priced per usage and that they are maintained and secured by some of the best engineers in the world?`}</p>
<p>{`This is what we ship with Webiny to all our customers in a package that with a single command configures and deploys all those services automatically inside their own AWS cloud.`}</p>
<p>{`So when someone asks us why we chose serverless infrastructure, the answer is simple. We chose it because it allows us to focus on building the best product we can, and not worry about the infrastructure. It gives us and our customers the piece of mind that the infrastructure will always be secure, it will always be online, and it will always perform well at a cost that directly correlates with the usage.`}</p>
<_Heading level={2} id={"faq"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>FAQ</_Heading>
<_Heading level={3} id={"what-about-vendor-lock-in"} nextElement={{
      "type": "paragraph"
    }}>What About Vendor Lock-In?</_Heading>
<p>{`This is a conscious tradeoff we decided to make. We choose the best infrastructure at the cost of the vendor lock-in. In our opinion, the benefits of using serverless infrastructure outweigh the vendor lock-in.`}</p>
<p>{`At the same time, with Webiny you are not locked into our platform, which we believe is the more important question to ask yourself. With Webiny you always have direct access to all of your data and can move it to any other system at any time.`}</p>
<p>{`With serverless you will save a significant amount of your engineering and DevOps effort which can be used to build your product and grow your business instead of managing servers. `}</p>
<_Heading level={3} id={"is-it-just-aws-what-about-other-cloud-providers"} nextElement={{
      "type": "paragraph"
    }}>Is It Just AWS, What About Other Cloud Providers?</_Heading>
<p>{`We do want to support other cloud providers, but we are a small team and we need to focus on one cloud provider at a time. We chose AWS because it is the most mature and feature-rich cloud provider. We are planning to support other cloud providers in the future.`}</p>
<_Heading level={3} id={"what-about-the-cold-start-problem"} nextElement={{
      "type": "paragraph"
    }}>What About the Cold Start Problem?</_Heading>
<p>{`With the right architecture, you will not face this problem. Just try Webiny for yourself and see. Large enterprises use us and have never raised this problem.`}</p>
<_Heading level={3} id={"where-can-i-learn-more-about-serverless"} nextElement={{
      "type": "paragraph"
    }}>Where Can I Learn More About Serverless?</_Heading>
<p>{`Check out our `}<a parentName="p" {...{
        "href": "https://www.webiny.com/resources/benefits-of-a-serverless-cms"
      }}>{`whitepaper`}</a>{`.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}





    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;