/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Benchmark Overview",
  "description": "Webiny performance benchmark.",
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
const tableOfContents = [{
  "title": "About",
  "slug": "about",
  "children": []
}, {
  "title": "Benchmark Structure",
  "slug": "benchmark-structure",
  "children": []
}, {
  "title": "Execution",
  "slug": "execution",
  "children": []
}, {
  "title": "Cost Benchmark",
  "slug": "cost-benchmark",
  "children": []
}, {
  "title": "Scaling the Performance",
  "slug": "scaling-the-performance",
  "children": []
}, {
  "title": "Webiny vs Others",
  "slug": "webiny-vs-others",
  "children": []
}, {
  "title": "Replicate the Test",
  "slug": "replicate-the-test",
  "children": []
}];

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



<Alert type="success" title="What you’ll learn" mdxType="Alert">
<ul>
<li parentName="ul">{`what was tested`}</li>
<li parentName="ul">{`how the benchmark was done`}</li>
<li parentName="ul">{`how to replicate the results`}</li>
</ul>
</Alert>
<_Heading level={2} id={"about"} nextElement={{
      "type": "paragraph"
    }}>About</_Heading>
<p>{`With this performance benchmark we wanted to show how well Webiny can handle the load, what performance you can expect, what cost is associated with different flows as well as what are the factors to additionally scale Webiny beyond the numbers shown here.`}</p>
<_Heading level={2} id={"benchmark-structure"} nextElement={{
      "type": "paragraph"
    }}>Benchmark Structure</_Heading>
<p>{`Webiny has several apps and APIs. For this benchmark we decided to pick 3 actions we felt are most relevant:`}</p>
<ol>
<li parentName="ol">{`Call the Headless CMS Manage API and insert a new record (`}<_Link href="/docs/5.x/performance-and-load-benchmark/headless-cms/write-benchmark">{`view results`}</_Link>{`)`}</li>
<li parentName="ol">{`Call the Headless CMS Preview API and retrieve a record (`}<_Link href="/docs/5.x/performance-and-load-benchmark/headless-cms/read-benchmark">{`view results`}</_Link>{`)`}</li>
<li parentName="ol">{`Deliver a page created by the Page Builder (`}<_Link href="/docs/5.x/performance-and-load-benchmark/page-builder/deliver-a-page">{`view results`}</_Link>{`)`}</li>
</ol>
<p>{`The tests on the Headless CMS API provide a good reference on both how the Headless CMS scales and performs, but the same performance can be expected if you were to create a custom API endpoint on Webiny, not using the Headless CMS. The performance of the Preview API is expected to be identical to the Read API. We picked the Preview API because it was easier to setup the test since we didn’t need to publish records after we inserted them.`}</p>
<p>{`The Page Builder page delivery test is used to showcase how Webiny can serve a static page.`}</p>
<_Heading level={2} id={"execution"} nextElement={{
      "type": "paragraph"
    }}>Execution</_Heading>
<p>{`We deployed Webiny into an AWS region, in our case `}<inlineCode parentName="p">{`eu-west-2`}</inlineCode>{` (London). This is the basic vanilla Webiny setup you would get if you follow our `}<_Link href="/docs/5.x/get-started/install-webiny">{`install Webiny tutorial`}</_Link>{`. We ran all 3 tests using this setup. Afterwards we modified one of the infrastructure resources and repeated tests 1 and 2. All the details can be found in the test results.`}</p>
<p>{`To run the test we deployed an EC2 machine in the same region. This machine was used to generate the load for the test. The machine instance type we used was `}<inlineCode parentName="p">{`c5.18xlarge`}</inlineCode>{`. We used a fairly powerful instance as we needed to generate a lot of load for some of the tests and didn’t want to be CPU, memory or network bound.`}</p>
<p>{`The machine was a base Ubuntu instance with only Java and Apache JMeter installed.
The tests were executed using the Apache JMeter CLI. For each of the tests we are providing a `}<inlineCode parentName="p">{`jmx`}</inlineCode>{` file so you can run the same on your end.`}</p>
<_Heading level={2} id={"cost-benchmark"} nextElement={{
      "type": "paragraph"
    }}>Cost Benchmark</_Heading>
<p>{`Besides covering the performance aspect of this benchmark, we also wanted to focus on the cost. A lot of people have questions and concerns when it comes to estimating cost of serverless infrastructure. To help answer those questions when it comes to Webiny, you can use the numbers from this benchmark to help you estimate your potential cost.`}</p>
<_Heading level={2} id={"scaling-the-performance"} nextElement={{
      "type": "paragraph"
    }}>Scaling the Performance</_Heading>
<p>{`The numbers we presented in our tests are not the maximum that Webiny can reach. Many of the serverless services are designed to scale far beyond our reported numbers. To achieve this scale, a “real life” example is needed. Users need to be accessing the API and the website from different networks and locations. Unfortunately creating such a load test is very difficult and in our test we spread the load across several IPs but that’s far from enough to achieve real life production scale.`}</p>
<p>{`If you require a greater scale, we recommend you reach out to us via `}<a parentName="p" {...{
        "href": "https://www.webiny.com/slack"
      }}>{`slack`}</a>{` and we’ll be happy to help you out.`}</p>
<_Heading level={2} id={"webiny-vs-others"} nextElement={{
      "type": "paragraph"
    }}>Webiny vs Others</_Heading>
<p>{`Webiny’s numbers are not directly comparable to systems running on virtual machines or containers. Webiny’s architecture is fault tolerant in almost all of it’s parts out of the box. The only exception is Elasticsearch, which can be made highly available by deploying to multiple AZs.`}</p>
<p>{`Running on serverless services overall improves the reliability and security of your application and makes the infrastructure easier to maintain. So if you do plan to make comparisons, we recommend you take all appropriate aspects into account.`}</p>
<_Heading level={2} id={"replicate-the-test"} nextElement={{
      "type": "paragraph"
    }}>Replicate the Test</_Heading>
<p>{`All test files, reports from our run and instructions are available in this repository here: `}<a parentName="p" {...{
        "href": "http://github.com/webiny/benchmark"
      }}>{`http://github.com/webiny/benchmark`}</a>{`.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;