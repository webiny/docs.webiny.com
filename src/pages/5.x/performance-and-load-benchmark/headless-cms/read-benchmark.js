/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image6 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/performance-and-load-benchmark/headless-cms/assets/read-benchmark/cost-per-request.svg'
import _Image5 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/performance-and-load-benchmark/headless-cms/assets/read-benchmark/throughput-e.png'
import _Image4 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/performance-and-load-benchmark/headless-cms/assets/read-benchmark/throughput-d.png'
import _Image3 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/performance-and-load-benchmark/headless-cms/assets/read-benchmark/response-time-e.png'
import _Image2 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/performance-and-load-benchmark/headless-cms/assets/read-benchmark/response-time-d.png'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/performance-and-load-benchmark/headless-cms/assets/read-benchmark/summary.svg'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Read operation benchmark",
  "description": "Webiny Headless CMS performance read benchmark.",
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
  "children": [{
    "title": "What Does This Mean?",
    "slug": "what-does-this-mean",
    "children": []
  }, {
    "title": "What Is the Error Rate?",
    "slug": "what-is-the-error-rate",
    "children": []
  }]
}, {
  "title": "Benchmark Overview",
  "slug": "benchmark-overview",
  "children": [{
    "title": "Test Plan",
    "slug": "test-plan",
    "children": []
  }, {
    "title": "Request Flow",
    "slug": "request-flow",
    "children": []
  }]
}, {
  "title": "Report",
  "slug": "report",
  "children": [{
    "title": "Response Time",
    "slug": "response-time",
    "children": [{
      "title": "Test D",
      "slug": "test-d"
    }, {
      "title": "Test E",
      "slug": "test-e"
    }]
  }, {
    "title": "Throughput",
    "slug": "throughput",
    "children": [{
      "title": "Test D",
      "slug": "test-d"
    }, {
      "title": "Test E",
      "slug": "test-e"
    }]
  }]
}, {
  "title": "Why Is Read Sometimes Slower Than Write?",
  "slug": "why-is-read-sometimes-slower-than-write",
  "children": []
}, {
  "title": "Cost",
  "slug": "cost",
  "children": [{
    "title": "Total Cost",
    "slug": "total-cost",
    "children": []
  }, {
    "title": "Cost per 10k Requests",
    "slug": "cost-per-10k-requests",
    "children": []
  }, {
    "title": "CloudFront",
    "slug": "cloud-front",
    "children": []
  }, {
    "title": "API Gateway",
    "slug": "api-gateway",
    "children": []
  }, {
    "title": "Lambda",
    "slug": "lambda",
    "children": []
  }, {
    "title": "DynamoDB",
    "slug": "dynamo-db",
    "children": []
  }]
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
const Image = makeShortcode("Image");
const Editor = makeShortcode("Editor");
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
<li parentName="ul">{`performance of read operations on Webiny Headless CMS`}</li>
<li parentName="ul">{`optimization suggestions`}</li>
</ul>
</Alert>
<Alert type={"info"} mdxType="Alert">
<p>{`  Note that these benchmarks were performed when Webiny was using Amazon Elasticsearch Service as its search engine of choice. And although with the 5.39.0 release Webiny started using Amazon OpenSearch Service, this article is still relevant as the performance of the two services is very similar.`}</p>
</Alert>
<_Heading level={2} id={"results"} nextElement={{
      "type": "paragraph"
    }}>Results</_Heading>
<Image src={_Image1} alt={"image"} mdxType="Image" />
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Test`}</th>
<th parentName="tr" {...{
            "align": "right"
          }}>{`Records in database`}</th>
<th parentName="tr" {...{
            "align": "right"
          }}>{`Records requested`}</th>
<th parentName="tr" {...{
            "align": "right"
          }}>{`Avg. response time (ms)`}</th>
<th parentName="tr" {...{
            "align": "right"
          }}>{`p95 response time (ms)`}</th>
<th parentName="tr" {...{
            "align": "right"
          }}>{`Error rate (%)`}</th>
<th parentName="tr" {...{
            "align": "right"
          }}>{`Throughput (req/sec)`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Test A`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`77,197`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`103,489`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`304.32`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`403.00`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`1.65%`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`156.74`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Test B`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`759,679`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`332,303`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`948.87`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`1871.00`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`0.28%`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`486.96`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Test C`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`1,506,112`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`1,402,424`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`449.17`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`587.00`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`0.01%`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`2,123.35`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Test D`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`3,319,812`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`1,718,146`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`838.01`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`1035.00`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`1.23%`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`2,043.43`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Test E`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`3,343,666`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`2,964,663`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`484.37`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`1355.00`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`0.01%`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`3,510.60`}</td>
</tr>
</tbody>
</table>
<_Heading level={3} id={"what-does-this-mean"} nextElement={{
      "type": "paragraph"
    }}>What Does This Mean?</_Heading>
<p>{`Requests per second is a number that helps you calculate how many users you can actually serve. The other part of that calculation is to know how your users behave. How many calls to the read API they are doing in a set time period.`}</p>
<p>{`As an example say your average visitors stays on your site 5 minutes, and does around 10 calls to the read API. Based on the throughput (req/sec) and this user behavior you can exact the following estimated values for how many concurrent users you can serve within that period:`}</p>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Test`}</th>
<th parentName="tr" {...{
            "align": "right"
          }}>{`Throughput (req/sec)`}</th>
<th parentName="tr" {...{
            "align": "right"
          }}>{`Concurrency`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Test A`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`156.74`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`4,702`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Test B`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`486.96`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`14,608`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Test C`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`2,123.35`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`63,700`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Test D`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`2,043.43`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`61,302`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Test E`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`3,510.60`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`105,318`}</td>
</tr>
</tbody>
</table>
<p><strong parentName="p">{`Formula`}</strong>{`: (Throughput`}{`*`}{`60sec`}{`*`}{`5min)/10 calls per user = total number of concurrent users in a 5 minute period`}</p>
<p><strong parentName="p">{`Note:`}</strong>{` This is the formula for ideal conditions where user requests have an ideal spread of time between requests.`}</p>
<_Heading level={3} id={"what-is-the-error-rate"} nextElement={{
      "type": "paragraph"
    }}>What Is the Error Rate?</_Heading>
<p>{`It’s very hard to correctly estimate what is the exact number of req/sec a certain Elasticsearch instance can take. In our tests as long as the error rate was below 2% we marked the test as successful as it was giving us a fair estimate of how much load we can send to the API. Of course in production cases, if you’re constantly seeing errors, you would upgrade your instance.`}</p>
<hr></hr>
<_Heading level={2} id={"benchmark-overview"} nextElement={{
      "type": "paragraph"
    }}>Benchmark Overview</_Heading>
<p>{`In this benchmark we are doing a GraphQL query to the Headless CMS Preview API. The query is requesting an “Order” record by providing the `}<inlineCode parentName="p">{`OrderID`}</inlineCode>{` attribute. Note that `}<inlineCode parentName="p">{`OrderID`}</inlineCode>{` is a random attribute and not the built in `}<inlineCode parentName="p">{`id`}</inlineCode>{` attribute which is the primary key in the database. We wanted to test filtering on a sample attribute.`}</p>
<p>{`Here is the full query that is being issued:`}</p>
<Editor title="" lang="graphql" mdxType="Editor">
{`{
  listOrders(where:{orderId: \${OrderID}}){
    data{
      id
      orderDate
      totalPrice
      country{
        name
        region{
          id
          name
        }
      }
      itemType{
        name
      }
    }
  }
}`}
</Editor>
<p>{`The `}<inlineCode parentName="p">{`OrderID`}</inlineCode>{` variable is replaced on each request with a random value for which we know a record exists. Inside the test we provided a sample set of 100.000 random values and also we are not configuring any cache settings in the system.`}</p>
<p>{`From the query you can see we are requesting the top-level record, but also 2 referenced attributes (`}<inlineCode parentName="p">{`country`}</inlineCode>{` & `}<inlineCode parentName="p">{`itemType`}</inlineCode>{`) on the 2nd level and also a 3rd level nested attribute (`}<inlineCode parentName="p">{`region`}</inlineCode>{`). This query we believe is representative to what you would use in production scenarios.`}</p>
<_Heading level={3} id={"test-plan"} nextElement={{
      "type": "paragraph"
    }}>Test Plan</_Heading>
<p>{`This test is following the same plan and load structure as the `}<_Link href="/docs/5.x/performance-and-load-benchmark/headless-cms/write-benchmark#test-plan">{`Headless CMS write operation benchmark`}</_Link>{`.`}</p>
<_Heading level={3} id={"request-flow"} nextElement={{
      "type": "paragraph"
    }}>Request Flow</_Heading>
<p>{`Every API read request has the following flow:`}</p>
<p>{`Client -> CloudFront -> ApiGateway -> Lambda -> Elasticsearch`}</p>
<Alert type="info" mdxType="Alert">
<p>{`There is also a different flow, where the Lambda function goes to DynamoDB instead of Elasticsearch. This is only when the client is requesting a single object and is providing a primary key for that object.`}</p>
<p>{`All other requests go Elasticsearch as it provides better filtering, searching and sorting capabilities. We decided to test the Elasticsearch in our benchmark as it will be a more common one in production. In terms of the performance on the DynamoDB flow, it will be similar to what you see in the Headless CMS Write API benchmark.`}</p>
</Alert>
<hr></hr>
<_Heading level={2} id={"report"} nextElement={{
      "type": "jsx"
    }}>Report</_Heading>
<Alert type="info" mdxType="Alert">
<p>{`We only extracted the charts for the last 2 tests as most charts showed the same behavior. In case you want to see the full report with all the charts for all the tests, `}<a parentName="p" {...{
          "href": "https://github.com/webiny/benchmark/tree/main/benchmarks/results/hc-read-data"
        }}>{`click here`}</a>{`.`}</p>
</Alert>
<_Heading level={3} id={"response-time"} nextElement={{
      "type": "heading",
      "depth": 4
    }}>Response Time</_Heading>
<_Heading level={4} id={"test-d"} nextElement={{
      "type": "paragraph"
    }}>Test D</_Heading>
<Image src={_Image2} alt={"Headless CMS benchmark - Response time"} mdxType="Image" />
<p>{`The response time was mostly consistent, with the exception around the 14:21 mark. At that point the response times spiked for a few seconds but then leveled off to the previous performance and stayed stable for next 5 minutes, until the end of the test.`}</p>
<_Heading level={4} id={"test-e"} nextElement={{
      "type": "paragraph"
    }}>Test E</_Heading>
<Image src={_Image3} alt={"Headless CMS benchmark - Response time"} mdxType="Image" />
<_Heading level={3} id={"throughput"} nextElement={{
      "type": "heading",
      "depth": 4
    }}>Throughput</_Heading>
<_Heading level={4} id={"test-d"} nextElement={{
      "type": "paragraph"
    }}>Test D</_Heading>
<Image src={_Image4} alt={"Headless CMS benchmark - Throughput"} mdxType="Image" />
<_Heading level={4} id={"test-e"} nextElement={{
      "type": "paragraph"
    }}>Test E</_Heading>
<Image src={_Image5} alt={"Headless CMS benchmark - Throughput"} mdxType="Image" />
<p>{`In line to what we see in the response times, we see a drop in the throughput around the same time.`}</p>
<p>{`After investigating the CloudWatch metrics, we couldn’t find anything that would point to the fact that the drop in performance was to the AWS services. The response times on the CloudFront, API Gateway and Lambda functions haven’t changed. The only explanation we have is that it was a limit we hit either on the network or CPU on the load test machine.`}</p>
<hr></hr>
<_Heading level={2} id={"why-is-read-sometimes-slower-than-write"} nextElement={{
      "type": "paragraph"
    }}>Why Is Read Sometimes Slower Than Write?</_Heading>
<p>{`As you probably noticed, the read operation is actually slower than the write operation, which might seem odd as write is the more operationally costly one.`}</p>
<p>{`The key here is in the architecture. The flow of the write operation looks like this:`}</p>
<p>{`Client -> CloudFront -> API Gateway -> Lambda -> DynamoDB -> (stream) -> Elasticsearch`}</p>
<p>{`While the read operation looks like so:`}</p>
<p>{`Client -> CloudFront -> API Gateway -> Lambda -> Elasticsearch`}</p>
<Alert type="warning" mdxType="Alert">
<p>{`There is still a DynamoDB request in the read, but it’s only used to retrieve and validate the user’s access token.`}</p>
</Alert>
<p>{`In the write operation we don’t talk to Elasticsearch synchronously, rather over an async stream. This means that Elasticsearch doesn’t slow down the main request.`}</p>
<p>{`In the read operation there is no DynamoDB, the read operations go and talk directly to Elasticsearch. The reason for this is that DynamoDB, although a very powerful and scalable database is very feature-limited when it comes to filtering, sorting and searching.`}</p>
<p>{`This usually is not a problem when you know your access patters as you can model your data accordingly. However with a headless CMS you cannot predict what models the users will build and how will they access their data. Because of that we couldn’t rely on DynamoDB as the primary database for the read operations.`}</p>
<p>{`To increase your throughput for the read operations you would need to scale your Elasticsearch cluster accordingly.`}</p>
<hr></hr>
<_Heading level={2} id={"cost"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Cost</_Heading>
<_Heading level={3} id={"total-cost"} nextElement={{
      "type": "table",
      "align": [null, "right", "right", "right", "right", "right", "right"]
    }}>Total Cost</_Heading>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Test`}</th>
<th parentName="tr" {...{
            "align": "right"
          }}>{`CloudFront`}</th>
<th parentName="tr" {...{
            "align": "right"
          }}>{`ApiGateway`}</th>
<th parentName="tr" {...{
            "align": "right"
          }}>{`Lambda`}</th>
<th parentName="tr" {...{
            "align": "right"
          }}>{`DynamoDB`}</th>
<th parentName="tr" {...{
            "align": "right"
          }}>{`Elasticsearch`}</th>
<th parentName="tr" {...{
            "align": "right"
          }}>{`Total`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Test A`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$0.10`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$0.10`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$0.26`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$0.33`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$0.01`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$0.80`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Test B`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$0.35`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$0.33`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$2.60`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$0.54`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$0.08`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$3.90`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Test C`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$1.47`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$1.40`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$5.17`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$1.40`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$0.33`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$9.77`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Test D`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$1.80`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$1.72`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$11.90`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$1.93`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$0.92`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$27.50`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Test E`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$3.11`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$2.96`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$11.77`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$3.57`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$2.68`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$24.09`}</td>
</tr>
</tbody>
</table>
<Alert type="info" mdxType="Alert">
<p>{`The cost of serverless components has been calculated based on their usage. The cost of Elasticsearch has been calculated for a 15min period, based on the hourly rate.`}</p>
</Alert>
<Alert type="info" mdxType="Alert">
<p>{`Notice how the test E is cheaper than test D, while E handled almost 3M requests during the test, versus test E that handled 1.72M. The only difference was in the Elasticsearch instance.`}</p>
</Alert>
<_Heading level={3} id={"cost-per-10k-requests"} nextElement={{
      "type": "paragraph"
    }}>Cost per 10k Requests</_Heading>
<Image src={_Image6} alt={"image"} mdxType="Image" />
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Test`}</th>
<th parentName="tr" {...{
            "align": "right"
          }}>{`Hits`}</th>
<th parentName="tr" {...{
            "align": "right"
          }}>{`Total cost`}</th>
<th parentName="tr" {...{
            "align": "right"
          }}>{`Cost per request`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Test A`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`77,197`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$1.01`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$0.000013083`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Test B`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`759,679`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$7.73`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$0.000010175`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Test C`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`1,506,112`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$15.25`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$0.000010125`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Test D`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`3,319,812`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$34.52`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$0.000010398`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Test E`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`3,343,666`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$34.79`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$0.000010405`}</td>
</tr>
</tbody>
</table>
<_Heading level={3} id={"cloud-front"} nextElement={{
      "type": "table",
      "align": [null, "right", "right", "right"]
    }}>CloudFront</_Heading>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Test`}</th>
<th parentName="tr" {...{
            "align": "right"
          }}>{`Hits`}</th>
<th parentName="tr" {...{
            "align": "right"
          }}>{`Traffic (GB)`}</th>
<th parentName="tr" {...{
            "align": "right"
          }}>{`Cost`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Test A`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`103k`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`0.06`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$0.10`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Test B`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`332k`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`0.20`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$0.35`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Test C`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`1.4M`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`0.81`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$1.47`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Test D`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`1.72M`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`1`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$1.80`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Test E`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`2.96M`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`1.74`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$3.11`}</td>
</tr>
</tbody>
</table>
<_Heading level={3} id={"api-gateway"} nextElement={{
      "type": "table",
      "align": [null, "right", "right"]
    }}>API Gateway</_Heading>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Test`}</th>
<th parentName="tr" {...{
            "align": "right"
          }}>{`Hits`}</th>
<th parentName="tr" {...{
            "align": "right"
          }}>{`Cost`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Test A`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`103k`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$0.10`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Test B`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`332k`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$0.33`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Test C`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`1.4M`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$1.40`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Test D`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`1.72M`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$1.72`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Test D`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`2.96M`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$2.96`}</td>
</tr>
</tbody>
</table>
<_Heading level={3} id={"lambda"} nextElement={{
      "type": "table",
      "align": [null, "right", "right", "right"]
    }}>Lambda</_Heading>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Test`}</th>
<th parentName="tr" {...{
            "align": "right"
          }}>{`Requests`}</th>
<th parentName="tr" {...{
            "align": "right"
          }}>{`Avg. Duration (ms)`}</th>
<th parentName="tr" {...{
            "align": "right"
          }}>{`Cost`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Test A`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`103k`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`278`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$0.26`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Test B`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`332k`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`916`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$2.60`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Test C`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`1.4M`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`419`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$5.17`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Test D`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`1.72M`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`806`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$11.90`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Test E`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`2.96M`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`453`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$11.77`}</td>
</tr>
</tbody>
</table>
<Alert type="info" mdxType="Alert">
<p>{`Lambda costs also include the cost that’s occurred by the DynamoDB stream.
Webiny uses Lambda functions with 512MB of memory.`}</p>
</Alert>
<Alert type="info" mdxType="Alert">
<p>{`Notice the difference in lambda costs between tests C and D, versus the number of requests. This shows that you can technically save some costs by using a more expensive Elasticsearch instance, as it will improve the performance of your lambdas. Same thing is even more obvious between tests D and E.`}</p>
</Alert>
<_Heading level={3} id={"dynamo-db"} nextElement={{
      "type": "table",
      "align": [null, "right", "right", "right"]
    }}>DynamoDB</_Heading>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Test`}</th>
<th parentName="tr" {...{
            "align": "right"
          }}>{`Read ops`}</th>
<th parentName="tr" {...{
            "align": "right"
          }}>{`Write ops`}</th>
<th parentName="tr" {...{
            "align": "right"
          }}>{`Cost`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Test A`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`317k`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`0`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$0.33`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Test B`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`1.16M`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`0`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$0.54`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Test C`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`5.61M`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`0`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$1.40`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Test D`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`7.7M`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`0`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$1.93`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Test E`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`13.3M`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`0`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$3.57`}</td>
</tr>
</tbody>
</table>
<Alert type="info" mdxType="Alert">
<p>{`DynamoDB is only used to retrieve and validate the user’s access token.`}</p>
<p>{`The cost is calculated by estimating the database size to 1GB.`}</p>
</Alert>
<hr></hr>
<p>{`You can download and check the full report here: `}<a parentName="p" {...{
        "href": "https://github.com/webiny/benchmark/tree/main/benchmarks/results/hc-read-data"
      }}>{`https://github.com/webiny/benchmark/tree/main/benchmarks/results/hc-read-data`}</a></p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;