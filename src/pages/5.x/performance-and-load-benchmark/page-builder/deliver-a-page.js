/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image2 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/performance-and-load-benchmark/page-builder/assets/deliver-a-page/throughput.png'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/performance-and-load-benchmark/page-builder/assets/deliver-a-page/response-time.png'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Deliver a page benchmark",
  "description": "Webiny Page Builder performance benchmark.",
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
  "title": "Results",
  "slug": "results",
  "children": []
}, {
  "title": "Benchmark Overview",
  "slug": "benchmark-overview",
  "children": [{
    "title": "Load Structure",
    "slug": "load-structure",
    "children": []
  }, {
    "title": "Response Times",
    "slug": "response-times",
    "children": []
  }, {
    "title": "Throughput",
    "slug": "throughput",
    "children": []
  }]
}, {
  "title": "Cost",
  "slug": "cost",
  "children": []
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
const Image = makeShortcode("Image");
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
<li parentName="ul">{`the performance of Webiny Page Builder`}</li>
</ul>
</Alert>
<_Heading level={2} id={"results"} nextElement={{
      "type": "table",
      "align": [null, "right", "right"]
    }}>Results</_Heading>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Total requests`}</th>
<th parentName="tr" {...{
            "align": "right"
          }}>{`Avg. response time (ms)`}</th>
<th parentName="tr" {...{
            "align": "right"
          }}>{`Throughput (req/sec)`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`2,274,117`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`267`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`3,613`}</td>
</tr>
</tbody>
</table>
<Alert type="info" title="What this means?" mdxType="Alert">
<p>{`Requests per second is a number that helps you calculate how many users you can actually serve. The other part of that calculation is to know how your users behave. How fast they navigate between pages in this case.`}</p>
<p>{`As an example say your average visitors stays on your site 5 minutes, and visits around 10 pages. That’s 2 pages a minute. With a throughput of 3,613req/sec, you can handle 216,780 pages a minute, or 108,390 visitors in a minute.`}</p>
</Alert>
<_Heading level={2} id={"benchmark-overview"} nextElement={{
      "type": "paragraph"
    }}>Benchmark Overview</_Heading>
<p>{`In this test we are requesting the default homepage that comes with Webiny Page Builder. We’re fetching the HTML of that page. The linked assets like CSS, JS and images are not loaded. The payload size we are retrieving is 25.9kb compressed (or 778kb uncompressed).`}</p>
<_Heading level={3} id={"load-structure"} nextElement={{
      "type": "paragraph"
    }}>Load Structure</_Heading>
<p>{`We are sending 1,000 users to the website with a ramp up period of 25s, meaning each second 40 new users are coming to the page. After the ramp up period, for the next 10 minutes we are keeping the load of 1000 users constantly requesting the page. There is no caching on the “client” side happening.`}</p>
<_Heading level={3} id={"response-times"} nextElement={{
      "type": "paragraph"
    }}>Response Times</_Heading>
<Image src={_Image1} alt={"Page Builder benchmark - Response time"} mdxType="Image" />
<p>{`Average response time is 267ms, while 95% of all the requests were delivered with a response time not greater than 805ms (p95).`}</p>
<_Heading level={3} id={"throughput"} nextElement={{
      "type": "paragraph"
    }}>Throughput</_Heading>
<Image src={_Image2} alt={"Page Builder benchmark - Throughput"} mdxType="Image" />
<p>{`Average throughput was 3,613 req/sec, while at peak the system handled more than 6,500 req/sec. From the picture you can see that the pattern was more or less consistent, especially after the first 2 minutes have elapsed.`}</p>
<hr></hr>
<p><strong parentName="p">{`Important note`}</strong></p>
<p>{`Due to the nature of how Webiny works, when you publish a page in the Page Builder, Webiny triggers a prerendering service which creates a HTML snapshot of your page, together with a file that caches all the GraphQL queries that page issues. It’s a very similar mechanism to how most static page generators work like Gatsby, Jekyll and Hugo.`}</p>
<p>{`However Webiny differs in its workflow. In Page Builder when you press the publish button on a page, this generation of the HTML and GraphQL cache is created in the background by a dedicated Lambda function. There is no need to upload any files, or do rebuilds of your whole site locally. Incremental builds are automatically handled, so you also don’t worry about that. This whole process takes a few seconds after the page has been published.`}</p>
<p>{`The cached files are then saved on to an S3 bucket, which has a CloudFront CDN in front. When a client requests a page, it’s only a request to CloudFront and then to S3, if the page is not already cached. There are no Lambdas are involved in the delivery.`}</p>
<p>{`Because CloudFront is a CDN with many distributed edges, the throughput actually increases if your users are geographically distributed as the load is spread across multiple edges. By default a single CloudFront distribution can handle around 250,000 req/sec.`}</p>
<p>{`You might say we’re load testing a CDN in our case, that’s true, but this is how your Webiny instance will look in production and it’s a representative example.`}</p>
<hr></hr>
<_Heading level={2} id={"cost"} nextElement={{
      "type": "paragraph"
    }}>Cost</_Heading>
<p>{`Calculating the cost in this case is rather simple, due to the flow explained above. The costs that are occurring are the CloudFront hits and traffic. We’re ignoring S3 in this case, as only a few request landed there before the file was cached in CloudFront.`}</p>
<p>{`In our tests the cost factors are:`}</p>
{/* prettier-ignore */}
<ul>
<li parentName="ul"><strong parentName="li">{`Total number of hits`}</strong>{`: 2,274,117`}
{/* prettier-ignore */}
</li>
<li parentName="ul"><strong parentName="li">{`Total traffic`}</strong>{`: ~58.9GB (number of hits `}{`*`}{` 25.9kb payload size)`}</li>
</ul>
<p>{`Which brings us to:`}</p>
{/* prettier-ignore */}
<ul>
<li parentName="ul"><strong parentName="li">{`Hits cost`}</strong>{` = $2.73 ($0.0120 price per 10k HTTPS requests `}{`*`}{` 2,274,117)`}
{/* prettier-ignore */}
</li>
<li parentName="ul"><strong parentName="li">{`Traffic cost`}</strong>{` = $4.00 ($0.085 price per GB `}{`*`}{` 58.9 GB)`}</li>
</ul>
{/* prettier-ignore */}
<p><strong parentName="p">{`TOTAL COST`}</strong>{` = $6.73`}</p>
{/* prettier-ignore */}
<p><strong parentName="p">{`COST PER 10K HITS`}</strong>{` = $0.02959`}</p>
<hr></hr>
<p>{`You can download and check the full report here: `}<a parentName="p" {...{
        "href": "https://github.com/webiny/benchmark/tree/main/benchmarks/results/pb-page-delivery/report"
      }}>{`https://github.com/webiny/benchmark/tree/main/benchmarks/results/pb-page-delivery/report`}</a></p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;