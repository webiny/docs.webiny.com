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
  "title": "Who are we building Webiny for?",
  "description": "Who is our ideal customer? Who are we building Webiny for?",
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
  "title": "Our Ideal Customer Profile (\"ICP\")",
  "slug": "our-ideal-customer-profile-icp",
  "children": []
}, {
  "title": "Buyer Persona",
  "slug": "buyer-persona",
  "children": []
}, {
  "title": "User Persona",
  "slug": "user-persona",
  "children": []
}, {
  "title": "Developer Persona",
  "slug": "developer-persona",
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


<p>{`When building enterprise software, we need to have a clear picture of who our ideal customer is. This is important because it helps us make better decisions when it comes to prioritizing features, and it also helps us focus our efforts on the right things.`}</p>
<_Heading level={2} id={"our-ideal-customer-profile-icp"} nextElement={{
      "type": "paragraph"
    }}>Our Ideal Customer Profile (&quot;ICP&quot;)</_Heading>
<p>{`Our ideal customer is a company that is building a digital product. This can be a website, a web application, a mobile application, or any other type of digital product. They are usually a medium to large-sized company, and they have an internal team of developers who are responsible for building and maintaining their digital products.`}</p>
<p>{`As an organization, they are a tech-forward innovator and prioritize staying at the forefront of technological advancements. They are also a fast-growing company and are looking for ways to scale their operations and accelerate their growth. Finally, they prioritize transparency in their business practices and place a high value on trust and partnership in their vendor relationships. Things like open source, open data governance, and open communication are important to them.`}</p>
{`It’s also important to note that there are clear differences between the types of personas we’re serving within the ICP. We’ve got the `}
<ins>
{`buyer`}
</ins>
{` persona, the `}
<ins>
{`user`}
</ins>
{` persona and the `}
<ins>
{`developer`}
</ins>
{` persona. Let’s dive into each of these.`}
<_Heading level={2} id={"buyer-persona"} nextElement={{
      "type": "paragraph"
    }}>Buyer Persona</_Heading>
<p>{`The buyer persona is the person who is responsible for deciding to purchase Webiny. This is usually a CTO, a VP of Engineering, or a similar role. This person is usually not a developer, but they are technical enough to understand the value that Webiny brings to the table.`}</p>
<p>{`For us, that persona is an important one as we’re usually working closely with them to understand their long-term plans and goals, and how Webiny can help them achieve those goals. This in turn helps us make better decisions when it comes to prioritizing features and planning our roadmap. `}</p>
<p>{`The buyer persona cares about things like the total cost of ownership, driving the innovation within the business, the return on investment, and the long-term value that Webiny brings to their organization. They also care about things like the security and reliability of the platform, as well as the quality of the support they get from us.`}</p>
<_Heading level={2} id={"user-persona"} nextElement={{
      "type": "paragraph"
    }}>User Persona</_Heading>
<p>{`Users are the ones who use the platform daily to do their work. They are usually content editors, marketers, or similar roles. They are not very technical, and they don’t need to be. They are usually the ones who are most excited about Webiny because it helps them do their work faster and more efficiently.`}</p>
<p>{`With those users, we love to talk about their daily struggles and how Webiny can help overcome them. We also love to hear their feedback on how we can improve the platform to make their lives easier. They usually have a lot of great ideas, and we love to hear them out. Even a small improvement to the user experience can make a huge difference for them given the frequency of their interactions with the platform.`}</p>
<p>{`These users deeply care about things like the performance and reliability of the platform as the impact of those on their work is huge. They are also the ones who are most likely to recommend Webiny to their internal peers, so we want to make sure they are happy with the platform.`}</p>
<_Heading level={2} id={"developer-persona"} nextElement={{
      "type": "paragraph"
    }}>Developer Persona</_Heading>
<p>{`Developers are the ones who are responsible for building the applications that are powered by Webiny as well as customizing Webiny to fit their internal requirements. They are usually backend developers, frontend developers, or full-stack developers. This definition extends a bit as we tend to also include DevOps engineers and similar roles that are responsible for deploying and maintaining the infrastructure that Webiny runs on.`}</p>
<p>{`Developers tend to be the most active users in our community channels. They raise issues, ask questions, and provide feedback. Our goal is to ensure they have a great experience when it comes to configuring Webiny, making customizations on it, running project upgrades as well as operating it in production. `}</p>
<p>{`Developers care about things like the performance and reliability of the platform, as well as the quality of the documentation and the support they get from us. They also care about the extensibility of the platform, and how easy it is to customize it to fit their internal requirements.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}





    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;