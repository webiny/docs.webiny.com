/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { InstallWebinyBanner } from "@/components/landing-pages/InstallWebinyBanner";
import { Divider } from "@/components/landing-pages/Divider";
import { Section, SectionTitle, SectionRow, SectionBox } from "@/components/landing-pages/Section";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Webiny Page Builder",
  "description": "Learn about Webiny's Page Builder, an open-source no-code page builder running on top of AWS serverless infrastructure.",
  "type": "docs",
  "showPageHeader": true,
  "fullWidth": false,
  "version": "5.x"
};
const docsearch = {
  "type": "docs",
  "weight": 100,
  "versions": ["5.x"]
};
const navigation = _navigation;
const versions = _versions;
const tableOfContents = [];

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





<InstallWebinyBanner mdxType="InstallWebinyBanner" />
<p>{`Webiny Page Builder is a powerful no-code visual builder created to empower non-technical users such as marketing teams to create rich, interactive and dynamic experiences. `}</p>
<p>{`Although the Page Builder is created to be used by non-technical people, as an engineer you still have a lot of customization possibilities to extend and adapt that experience to both your users and content editors.  `}</p>
<p>{`Below you’ll find some key articles to get you started with customizing the page builder, and for additional learning make sure to check out the other articles in the sidebar. `}</p>
<Divider mdxType="Divider" />
<Section mdxType="Section">
  <SectionTitle title="Basics" subText="Learn the basics of Page Builder." categoryTitle="Basics" mdxType="SectionTitle" />
  <SectionRow mdxType="SectionRow">
    <SectionBox title="Theming" learnMoreLink="/docs/page-builder/theming/introduction" mdxType="SectionBox">
      <p>
        An overview of how theming works in Webiny's Page Builder application.
      </p>
    </SectionBox>
    <SectionBox title="Page Builder Video Course" learnMoreLink="https://www.youtube.com/playlist?list=PL9HlKSQaEuXQdyCQDH_w7VQQcZbc67cPU" mdxType="SectionBox">
      <p>
        Video course to help you master the core functionality of Page Builder.
      </p>
    </SectionBox>
  </SectionRow>
</Section>
<Section mdxType="Section">
  <SectionTitle title="Extensions" subText="Learn how to customize and extend the capabilities of the Page Builder app." categoryTitle="Extending" mdxType="SectionTitle" />
  <SectionRow mdxType="SectionRow">
    <SectionBox title="Create a Custom Page Element" learnMoreLink="/docs/page-builder/extending/create-a-page-element" mdxType="SectionBox">
      <p>
        Learn how to create a custom page element that can be rendered on pages created with Webiny's Page Builder app.
      </p>
    </SectionBox>
    <SectionBox title="Extend GraphQL API" learnMoreLink="/docs/page-builder/extending/extend-graphql-api" mdxType="SectionBox">
      <p>
        Learn how to extend the Page Builder-related GraphQL types and operations.
      </p>
    </SectionBox>
    <SectionBox title="Extend Page Settings" learnMoreLink="/docs/page-builder/extending/extend-page-settings" mdxType="SectionBox">
      <p>
        Learn how to extend page settings by introducing new fields to it.
      </p>
    </SectionBox>
  </SectionRow>
</Section>
<Section mdxType="Section">
  <SectionTitle title="Additional resources" subText="For more learning make sure to check out these articles." categoryTitle="Resources" mdxType="SectionTitle" />
  <SectionRow mdxType="SectionRow">
    <SectionBox title="Lexical Editor" learnMoreLink="/docs/page-builder/extending/lexical-editor" mdxType="SectionBox">
      <p>
        Learn how to configure the Lexical Editor in Page Builder.
      </p>
    </SectionBox>
    <SectionBox title="Lifecycle Events" learnMoreLink="/docs/page-builder/references/lifecycle-events" mdxType="SectionBox">
      <p>
        Learn about Page Builder lifecycle events, how they work and how to subscribe to a lifecycle event.
      </p>
    </SectionBox>
    <SectionBox title="Plugin References" learnMoreLink="/docs/page-builder/references/plugins" mdxType="SectionBox">
      <p>
        Page Builder plugin references.
      </p>
    </SectionBox>
  </SectionRow>
</Section>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;