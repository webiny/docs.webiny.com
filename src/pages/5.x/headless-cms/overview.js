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
  "title": "Webiny Headless CMS",
  "description": "Learn about Webiny's Headless CMS, an open-source GraphQL-based Headless CMS running on top of AWS serverless infrastructure.",
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
<p>{`Webiny Headless CMS is one of the most scalable and most customizable open-source headless CMS on the market. As an engineer, you’ll have full control to tailor-make the experience you wish to have. This applies both to the publishing and editorial process for content editors, as well as how the content is presented within your application. `}</p>
<p>{`Below you’ll find a few core articles that we recommend every engineer to go through with regards to mastering the experience of using and customizing the Headless CMS app. For additional learning, make sure to check out the remaining articles in the navigation.`}</p>
<Divider mdxType="Divider" />
<Section mdxType="Section">
  <SectionTitle title="Using the GraphQL API" subText="Learn how to use the GraphQL API to perform basic actions such as retrieving and modifying content, but also how to do more advanced search queries." categoryTitle="Basics" mdxType="SectionTitle" />
  <SectionRow mdxType="SectionRow">
    <SectionBox title="GraphQL API Overview" learnMoreLink="/docs/5.x/headless-cms/basics/graphql-api" mdxType="SectionBox">
      <p>
        Learn what is the Headless CMS GraphQL API, what are its main characteristics, and how to access it.
      </p>
    </SectionBox>
    <SectionBox title="Using the GraphQL API" learnMoreLink="/docs/5.x/headless-cms/basics/using-graphql-api" mdxType="SectionBox">
      <p>
        Learn how to use the Headless CMS's built-in GraphQL API.
      </p>
    </SectionBox>
    <SectionBox title="Advanced Filtering via API" learnMoreLink="/docs/5.x/headless-cms/basics/using-graphql-api-advanced-filtering" mdxType="SectionBox">
      <p>
        Learn how to use the Headless CMS's built-in GraphQL API advanced filter.
      </p>
    </SectionBox>
  </SectionRow>
</Section>
<Section mdxType="Section">
  <SectionTitle title="Extensions" subText="Learn how to customize and extend the capabilities of the Headless CMS app." categoryTitle="Extending" mdxType="SectionTitle" />
  <SectionRow mdxType="SectionRow">
    <SectionBox title="Extend the GraphQL API" learnMoreLink="/docs/5.x/headless-cms/extending/extend-graphql-api" mdxType="SectionBox">
      <p>
        Learn how to extend the Headless CMS-related GraphQL types and operations.
      </p>
    </SectionBox>
    <SectionBox title="Define Content Models via Code" learnMoreLink="/docs/5.x/headless-cms/extending/content-models-via-code" mdxType="SectionBox">
      <p>
        Learn how to define content models and content model groups through code.
      </p>
    </SectionBox>
    <SectionBox title="Customize Entry List Table Columns" learnMoreLink="/docs/5.x/headless-cms/extending/customize-entry-list-table-columns" mdxType="SectionBox">
      <p>
        Learn how to add, replace, or remove columns in the Entry List Table.
      </p>
    </SectionBox>
  </SectionRow>
</Section>
<Section mdxType="Section">
  <SectionTitle title="Additional resources" subText="For more learning make sure to check out these articles." categoryTitle="Resources" mdxType="SectionTitle" />
  <SectionRow mdxType="SectionRow">
    <SectionBox title="Building a Frontend With NextJS" learnMoreLink="/docs/5.x/headless-cms/integrations/nextjs" mdxType="SectionBox">
      <p>
        Learn how to build a frontend for Webiny Headless CMS with NextJS
      </p>
    </SectionBox>
    <SectionBox title="Lifecycle Events" learnMoreLink="/docs/5.x/headless-cms/references/lifecycle-events" mdxType="SectionBox">
      <p>
        Learn about Headless CMS lifecycle events, how they work and how to subscribe to a lifecycle event.
      </p>
    </SectionBox>
    <SectionBox title="Date/Time and Identity Meta Fields" learnMoreLink="/docs/5.x/headless-cms/references/date-time-and-identity-meta-fields" mdxType="SectionBox">
      <p>
        Learn about the date/time and identity-related meta fields that are available for content entries.
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