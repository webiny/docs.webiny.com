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
  "title": "Why Webiny exists",
  "description": "What's Webiny's mission and why we're building it?",
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
  "title": "Our Purpose",
  "slug": "our-purpose",
  "children": []
}, {
  "title": "Our Mission",
  "slug": "our-mission",
  "children": []
}, {
  "title": "Our Strategy",
  "slug": "our-strategy",
  "children": [{
    "title": "Open-Source as a Foundation",
    "slug": "open-source-as-a-foundation",
    "children": []
  }, {
    "title": "Developer Experience as a Priority / Ultra-Customizable",
    "slug": "developer-experience-as-a-priority-ultra-customizable",
    "children": []
  }, {
    "title": "Rooted in the First Principles",
    "slug": "rooted-in-the-first-principles",
    "children": []
  }, {
    "title": "Data Ownership as a Right",
    "slug": "data-ownership-as-a-right",
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


<_Heading level={2} id={"our-purpose"} nextElement={{
      "type": "paragraph"
    }}>Our Purpose</_Heading>
<p><strong parentName="p">{`To set a standard for how online experiences are made, ensuring builders and creators are empowered by the tools they use.`}</strong></p>
<p>{`The web is a messy place. Webiny started as a digital web agency where we’ve been building websites and applications for close to two decades. Things are not getting much better when it comes to the overall experience for both developers as well as content creators.`}</p>
<p>{`There’s a lack of a standard, there’s too much focus on the wrong things, like which library is better, which framework, which cloud, which UI, … and so on. No one is looking at the whole experience end to end, and that’s where things are falling apart. At the end of the day what developers want is not to need to suffer through their day fighting with the tools they use. They want to be able to focus on the things that matter, like building great experiences for their users.`}</p>
<p>{`On the other side, we have the content creators, the ones that use the tools that the developers produce. They are also in a tough spot. They need the tools to support them and not work against them. The tools must work, always, they must be fast and they must be secure. They must be able to create the experiences they want, not just the ones that the tools allow them to create.`}</p>
<p>{`By being in such a place, having a vertigo effect of the amount of frustrations we felt on both the developer as well as the content creator side, we decided to do something about it.`}</p>
<p>{`The purpose we aim to fulfill is one of allowing developers to focus on building great experiences without fighting the tools they use. And for content creators to enjoy their work by using the tools that enrich their creativity and not limit it. `}</p>
<_Heading level={2} id={"our-mission"} nextElement={{
      "type": "paragraph"
    }}>Our Mission</_Heading>
<p><strong parentName="p">{`Provide an open platform that empowers builders and creators to craft amazing online experiences. No matter the scale, always secure and reliable.`}</strong></p>
<p>{`To fulfill our purpose, our mission is an ambitious one. It’s not enough for us to provide just another library, another framework, an infrastructure solution, or a ready-made application. It won’t work. Many tried that approach before and failed. `}</p>
<p>{`We need to provide a platform. A platform that is open, that is ultra-customizable, that is rooted in the first principles, and that respects the data ownership of the users. A platform that contains many ready-made applications, but that are composable. A platform where you can customize every single part of it in a maintainable way. Operating on an infrastructure type that is most reliable, scalable, secure, performs well under large workloads and comes at a low cost. `}</p>
<p>{`Our mission is timeless, things like user experience, performance, security and reliability are not going to change. They are the first principles of building great online experiences. Our approach to how we achieve this mission will probably evolve, but it will always stay relevant.`}</p>
<_Heading level={2} id={"our-strategy"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Our Strategy</_Heading>
<_Heading level={3} id={"open-source-as-a-foundation"} nextElement={{
      "type": "paragraph"
    }}>Open-Source as a Foundation</_Heading>
<p>{`We believe that open-source is the best way to build software, and in the future, it will be the only way that we’ll build software. It allows us to build a better product, faster, and with the help of the community. It also allows us to build a product that is more secure, and more reliable.`}</p>
<p>{`Open-source for us doesn’t just mean a permissive license, but also a transparent development process. We want to build a product that is developed in the open, and that’s why we’re building Webiny in public.`}</p>
<p>{`By rooting our values around open source we give the developers back that sense of freedom to customize and use the product the way they want.`}</p>
<_Heading level={3} id={"developer-experience-as-a-priority-ultra-customizable"} nextElement={{
      "type": "paragraph"
    }}>Developer Experience as a Priority / Ultra-Customizable</_Heading>
<p>{`We believe that developer experience is the most important aspect of any software product. We want to build a product that developers love to use, and that’s why we’re building Webiny with developers in mind.`}</p>
<p>{`It’s one thing to have an open-source license and another thing to architect your product with open-source values in mind. Integration, customization and interoperability are all dependent on having a great developer experience and a product that can be molded to fit their needs.`}</p>
<p>{`When we build any new feature at Webiny, we don’t think about the feature as just a thing that needs to do a specific task, instead, we put great effort into also thinking about how someone might want to change the default behavior and build customizations on top of it, and then we build the required API, hooks, events and plugins so all of that becomes possible. And not just possible, it’s not an afterthought, it’s there from the start.`}</p>
<_Heading level={3} id={"rooted-in-the-first-principles"} nextElement={{
      "type": "paragraph"
    }}>Rooted in the First Principles</_Heading>
<p>{`Performance, security and reliability. These are the core principles we stand to uphold today and in the future. `}</p>
<p>{`It might sound obvious, but we’re hearing every day from users how many of the leading solutions in the market are not meeting this basic bar of what is crucial for them to have a good experience. `}</p>
<_Heading level={3} id={"data-ownership-as-a-right"} nextElement={{
      "type": "paragraph"
    }}>Data Ownership as a Right</_Heading>
<p>{`Saying we care about customer’s data, and doing something about it are very different things. `}</p>
<p>{`We differentiate by understanding the value of customer’s data. SaaS vendors put the same value on the data across all their customers. In their view, there is no difference if a customer uses their solution to keep track of how many socks they have in their warehouse, vs a customer using their solution to store patients’ medical information.`}</p>
<p>{`We believe there’s a big difference between the two and that our customers are the ones who are best equipped to manage their data most responsibly. One can only care for their own with the detail and precision that it requires. `}</p>
<p>{`Many of the SaaS solutions on the market are anti-freedom. They lock you in, they make it easy to check in, but you can’t check out. They don’t provide you with ways to export or move your content to another platform. Competition should be on who has a better product, not who can lock you in harder. If all products were forced to make it easy for you to migrate away from their platform, they would be forced to build a better product. With Webiny, you have direct access to all of your data. We want to compete on the quality of our product, not by locking you in. Our goal is to liberate your data from the dictators of the SaaS world.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}





    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;