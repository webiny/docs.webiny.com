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
  "title": "How we ensure quality",
  "description": "What measures do we take to guarantee the quality of our product",
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
  "title": "Satisfying Our Customers' Expectations",
  "slug": "satisfying-our-customers-expectations",
  "children": []
}, {
  "title": "Reliability & Performance",
  "slug": "reliability-and-performance",
  "children": []
}, {
  "title": "Security",
  "slug": "security",
  "children": []
}, {
  "title": "Framework as a Product",
  "slug": "framework-as-a-product",
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


<p>{`Because we primarily work with larger organizations, their needs around reliability and security are very high. The impact of downtime or a security breach comes to them at a much higher cost. Any performance degradation can cost them thousands of dollars per minute. We are aware of these and have taken measures to ensure our product meets those expectations.`}</p>
<_Heading level={2} id={"satisfying-our-customers-expectations"} nextElement={{
      "type": "paragraph"
    }}>Satisfying Our Customers&#39; Expectations</_Heading>
<p>{`It’s not enough to say “Our product is of high quality”, without being able to demonstrate what that means. Quality is not a thing, it is a result of doing the right thing, the right way. And when it comes to what that means, to us it means knowing what our customers expect from us and delivering on that. It also means that the product meets high standards of reliability and security. It means the product works as expected, and it means it works all the time in a performant way. We talk about those as `}<_Link href="/docs/handbook/company/why-webiny-exists#rooted-in-the-first-principles">{`our principles`}</_Link>{`, and we adhere to them.`}</p>
<p>{`Let’s take a deeper dive and see what this means in practice. `}</p>
<p>{`Firstly, `}<_Link href="/docs/handbook/company/deciding-what-features-to-build#customer-driven-roadmap">{`we work very closely with our customers`}</_Link>{` and this allows us to have a deep understanding of what their needs are from our product. This way we know exactly what new features to build and what existing features to improve. Our customers not only influence our roadmap but take an active role in helping us build the required features. It’s one of our `}<_Link href="/docs/handbook/company/our-values">{`core values`}</_Link>{` to work together with our customers in a transparent and open way.`}</p>
<p>{`We don’t focus on just the big things. Because we’re pretty much chatting with our customers and their engineering teams daily, we see the small things, the irks that annoy them, but not enough to call it a bug or to raise a feature request. We’ll fix those things for them too.`}</p>
<_Heading level={2} id={"reliability-and-performance"} nextElement={{
      "type": "paragraph"
    }}>Reliability &amp; Performance</_Heading>
<p>{`Reliability can often be a challenge with self-hosted products. This is mainly because it’s the customer’s internal team that needs to have a great understanding of the internals of the product to correctly size and configure the necessary infrastructure. Then there are the undetermined factors, such as peak traffic usage, often caused by flash crowds, attacks, etc. `}</p>
<p>{`To ensure Webiny stays reliable at all times and that it accounts for all the above-mentioned factors we’ve taken several measures which are embedded at the core of our product. A big part of why we’re able to achieve high levels of reliability and performance is the fact that we decided to build our platform on the foundation of serverless infrastructure. You can read in more detail about why we chose serverless, and the benefits we got from such a decision in the `}<_Link href="/docs/handbook/company/why-we-chose-serverless">{`Why We Choose Serverless Infrastructure`}</_Link>{` article. `}</p>
<_Heading level={2} id={"security"} nextElement={{
      "type": "paragraph"
    }}>Security</_Heading>
<p>{`When it comes to security, there is just no compromise. We documented our security posture in a separate article `}<_Link href="/docs/overview/features/security">{`here`}</_Link>{`. You’re never done with security, it’s a continuous process, and we’re constantly improving. We have a conscious stance on security, and we have many measurements in place to ensure we’re always on top of things. From acquiring SOC 2 compliance to using only hardened infrastructure and services to having tools that are constantly scanning our codebase for vulnerabilities, including also our 3rd party dependencies. `}</p>
<p>{`Security posture for us has 2 sides. One is the security of the infrastructure our product runs on, and the other is the security of the product itself, including the security features that enable our users to configure the product to their needs.`}</p>
<p>{`Infrastructure security is something we take very seriously. Many parts go into this, from how things are encrypted, to giving customers the ability to bring in their current security features, like private VPC’s, Lambda authorizers, and more. If you’re interested in learning more about this, please read our `}<_Link href="/docs/overview/features/security">{`Security`}</_Link>{` article.`}</p>
<p>{`When it comes to the security features of the application itself. We tick the regular boxes like having the ability to bring your own IdP, the ability to customize both the authentication and the authorization workflows, and more. We also support features like roles, API keys, and the ability to manage users inside teams. `}</p>
<p>{`We go further than that. We allow users to structure their content, be that headless CMS entries, Page Builder pages, or assets, into folders and then assign on a folder level who can access the items inside that folder. Files inside our File Manager can be marked as “private”, so even if you share a direct link with someone, they will not be able to access that file unless they are authorized to access it. `}</p>
<p>{`Our security posture and features keep evolving as our users push the product further and share even more complex use cases with us. `}</p>
<_Heading level={2} id={"framework-as-a-product"} nextElement={{
      "type": "paragraph"
    }}>Framework as a Product</_Heading>
<p>{`Customization is at the core of our product, it is one of our most important values. We have built a product that is made to be extended and customized in a maintainable way. This means customers get the product they want, not a product that they are willing to have as a set of compromises along the road. `}</p>
<p>{`Getting the balance right between what can be customized and to what extent is very hard. We have spent countless months designing and researching how to make this possible, for a product as powerful and complex as Webiny. We believe we have found that balance, but it’s not perfect and we’re constantly improving. `}</p>
<p>{`However, without this ability to adapt and customize the product, we would not be able to truly and fully satisfy the needs of our customers. We would be like many other products on the market that are good, but not great. And this just isn’t a compromise we are willing to make. `}</p>
<p>{`With Webiny you are guaranteed to be able to build a product that is truly yours, one that exactly fits your needs. We stand by that! Customization is not an afterthought for us, it’s embedded into every single part of the product, and it is the foundation of the product itself. This, we believe, is a key aspect of quality.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}





    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;