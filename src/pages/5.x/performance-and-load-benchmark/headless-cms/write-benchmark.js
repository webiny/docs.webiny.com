/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image6 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/performance-and-load-benchmark/headless-cms/assets/write-benchmark/cost-per-request.svg'
import _Image5 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/performance-and-load-benchmark/headless-cms/assets/write-benchmark/throughput-e.png'
import _Image4 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/performance-and-load-benchmark/headless-cms/assets/write-benchmark/throughput-d.png'
import _Image3 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/performance-and-load-benchmark/headless-cms/assets/write-benchmark/response-time-e.png'
import _Image2 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/performance-and-load-benchmark/headless-cms/assets/write-benchmark/response-time-d.png'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/performance-and-load-benchmark/headless-cms/assets/write-benchmark/summary.svg'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Write operation benchmark",
  "description": "Webiny Headless CMS performance write benchmark.",
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
  }]
}, {
  "title": "Benchmark Overview",
  "slug": "benchmark-overview",
  "children": [{
    "title": "Test Plan",
    "slug": "test-plan",
    "children": []
  }, {
    "title": "Load Structure",
    "slug": "load-structure",
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
    "title": "Response Times",
    "slug": "response-times",
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
  "title": "Optimization Suggestions",
  "slug": "optimization-suggestions",
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
<li parentName="ul">{`performance of write operations on Webiny Headless CMS`}</li>
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
          }}>{`Records inserted`}</th>
<th parentName="tr" {...{
            "align": "right"
          }}>{`Avg. response time (ms)`}</th>
<th parentName="tr" {...{
            "align": "right"
          }}>{`p95 response time (ms)`}</th>
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
          }}>{`408.05`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`619.95`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`116.88`}</td>
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
          }}>{`414.64`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`662.00`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`1,149.83`}</td>
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
          }}>{`418.21`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`656.00`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`2,279.87`}</td>
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
          }}>{`432.45`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`652.00`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`3,949.16`}</td>
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
          }}>{`429.27`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`661.00`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`3,977.34`}</td>
</tr>
</tbody>
</table>
<_Heading level={3} id={"what-does-this-mean"} nextElement={{
      "type": "paragraph"
    }}>What Does This Mean?</_Heading>
<p>{`Requests per second is a number that helps you calculate how many users you can actually serve. The other part of that calculation is to know how your users behave. How many calls to the read API they are doing in a set time period.`}</p>
<p>{`As an example say your average visitors stays on your site 5 minutes, and does around 10 calls to the write API. Based on the throughput (req/sec) and this user behavior you can exact the following estimated values for how many concurrent users you can serve within that period:`}</p>
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
          }}>{`116.88`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`3,506`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Test B`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`1,149.83`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`34,495`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Test C`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`2,279.87`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`68,396`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Test D`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`3,949.16`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`118,474`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Test E`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`3,977.34`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`119,320`}</td>
</tr>
</tbody>
</table>
<p><strong parentName="p">{`Formula`}</strong>{`: (Throughput`}{`*`}{`60sec`}{`*`}{`5min)/10 calls per user = total number of concurrent users in a 5 minute period.`}</p>
<p><strong parentName="p">{`Note:`}</strong>{` This is the formula for ideal conditions where user requests have an ideal spread of time between requests.`}</p>
<hr></hr>
<_Heading level={2} id={"benchmark-overview"} nextElement={{
      "type": "paragraph"
    }}>Benchmark Overview</_Heading>
<p>{`In this benchmark we are doing a GraphQL mutation request to the Headless CMS manage API. The mutation is inserting a new “Order” record and upon successful save, returning back the `}<inlineCode parentName="p">{`id`}</inlineCode>{` of the new record.`}</p>
<p>{`Here is the full mutation that is being issued:`}</p>
<Editor title="" lang="graphql" mdxType="Editor">
{`mutation {
    createOrder(data:
      {
        orderId: \${OrderID}
        orderDate: "\${OrderDate}"
        shippingDate: "\${ShipDate}"
        unitsSold: \${UnitsSold}
        unitPrice: \${UnitPrice}
        totalPrice: \${TotalRevenue}
        country: {
          modelId: "country"
          entryId: "\${Country}"
        },
        itemType: {
          modelId: "itemType"
          entryId: "\${ItemType}"
        },
        salesChannel: {
          modelId: "salesChannel"
          entryId: "\${SalesChannel}"
        },
        orderPriority: {
          modelId: "orderPriority"
          entryId: "\${OrderPriority}"
        },
      }) {
      data {
        id
      }
      error {
        message
      }
    }
}`}
</Editor>
<p>{`The variables are replaced with real values during the test by Apache JMeter.`}</p>
<Alert type="info" title="Content model structure" mdxType="Alert">
<p>{`You can view the full content model structure and relations between different models on `}<a parentName="p" {...{
          "href": "https://raw.githubusercontent.com/webiny/benchmark/main/static/content-model-graph.png"
        }}>{`this link here`}</a>{`.`}</p>
</Alert>
<_Heading level={3} id={"test-plan"} nextElement={{
      "type": "paragraph"
    }}>Test Plan</_Heading>
<p>{`We performed 5 variations of this test. The reason is that Webiny uses Elasticsearch, which is the only non-serverless infrastructure piece that’s part of the architecture. Being non-serverless means we need to manually scale it. So we decided to run 5 different test variations. In each of variations we changed the load amount and the instance type.`}</p>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Test`}</th>
<th parentName="tr" {...{
            "align": "right"
          }}>{`Number of users`}</th>
<th parentName="tr" {...{
            "align": "center"
          }}>{`Ramp up time`}</th>
<th parentName="tr" {...{
            "align": "left"
          }}>{`Instance`}</th>
<th parentName="tr" {...{
            "align": "right"
          }}>{`Price per hour`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Test A`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`50`}</td>
<td parentName="tr" {...{
            "align": "center"
          }}>{`60 sec`}</td>
<td parentName="tr" {...{
            "align": "left"
          }}>{`t3.small.elasticsearch (single AZ)`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`1x $0.038`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Test B`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`500`}</td>
<td parentName="tr" {...{
            "align": "center"
          }}>{`60 sec`}</td>
<td parentName="tr" {...{
            "align": "left"
          }}>{`m5.large.elasticsearch (2 zones)`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`2x $0.164`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Test C`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`1000`}</td>
<td parentName="tr" {...{
            "align": "center"
          }}>{`60 sec`}</td>
<td parentName="tr" {...{
            "align": "left"
          }}>{`m5.3xlarge.elasticsearch (2 zones)`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`2x $0.655`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Test D`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`2000`}</td>
<td parentName="tr" {...{
            "align": "center"
          }}>{`5 min`}</td>
<td parentName="tr" {...{
            "align": "left"
          }}>{`r4.4xlarge.elasticsearch (2 zones)`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`2x $1.841`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Test E`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`2000`}</td>
<td parentName="tr" {...{
            "align": "center"
          }}>{`5 min`}</td>
<td parentName="tr" {...{
            "align": "left"
          }}>{`c5.18xlarge.elasticsearch (2 zones)`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`2x $5.363`}</td>
</tr>
</tbody>
</table>
<_Heading level={3} id={"load-structure"} nextElement={{
      "type": "paragraph"
    }}>Load Structure</_Heading>
<p>{`The test is configured by ramping up to the defined number of user threads within the defined period. After the ramp up we keep a steady state where the maximum amount of user threads are doing requests as fast as the system can handle for a period of 10 minutes. The reason the ramp up time differs between the first 3 tests and the last 2 is that `}<inlineCode parentName="p">{`eu-west-2`}</inlineCode>{` region as a burst limit of 500 concurrent lambda executions per 1 minute. Meaning to achieve 2500 user in the stead state, we need to ramp up for 5 minutes. For more details on how the burst limit works, visit this `}<a parentName="p" {...{
        "href": "https://docs.aws.amazon.com/lambda/latest/dg/invocation-scaling.html"
      }}>{`AWS resource page`}</a>{`.`}</p>
<p>{`Also, for test D and E, we had to increase the lambda concurrency to 2500 by filing an AWS support ticket. Webiny can go above that number, but for that the AWS team needs to additionally raise the concurrency limit.
Finally to mention, the Elasticsearch instance in test D and E can take higher load than what our current lambda concurrency allowed for. (applies only to the write API)`}</p>
<_Heading level={3} id={"request-flow"} nextElement={{
      "type": "paragraph"
    }}>Request Flow</_Heading>
<p>{`Each write request has the following flow:`}</p>
<p>{`Client -> CloudFront -> ApiGateway -> Lambda -> DynamoDB -> (async stream) -> Lambda -> Elasticsearch`}</p>
<p>{`Webiny writes in Elasticsearch via a DynamoDB stream, which is an asynchronous process. We do this as Elasticsearch can be a performance bottleneck and with this approach we prevent it from lowering the overall throughput.`}</p>
<p>{`Although Elasticsearch is not part of the main request, the service can still be overwhelmed if there is a lot of data that needs to be synced from DynamoDB into Elasticsearch in a short period of time.`}</p>
<Alert type="info" title="About DynamoDB stream" mdxType="Alert">
<p>{`The stream details, such as `}<inlineCode parentName="p">{`batchSize`}</inlineCode>{` and `}<inlineCode parentName="p">{`maximumBatchingWindowInSeconds`}</inlineCode>{` can be adjusted inside `}<a parentName="p" {...{
          "href": "https://github.com/webiny/webiny-js/blob/next/api/pulumi/elasticSearch.ts#L95"
        }}><inlineCode parentName="a">{`api/pulumi/elasticSearch.ts`}</inlineCode></a>{`.`}</p>
<p>{`For additional info, check out the official `}<a parentName="p" {...{
          "href": "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.html"
        }}>{`AWS guide`}</a>{`.`}</p>
</Alert>
<p>{`Additional thing to mention is that every write request has 1 DynamoDB write in general as we tend to do bulk writes, but there is also at least 1 read operation that happens as well. That read operation is issued by the Webiny security module to verify if the current user, or token, has the right to perform this action.`}</p>
<hr></hr>
<_Heading level={2} id={"report"} nextElement={{
      "type": "jsx"
    }}>Report</_Heading>
<Alert type="info" mdxType="Alert">
<p>{`We only extracted the charts for the last 2 tests as most charts showed the same behavior. In case you want to see the full report with all the charts for all the tests, `}<a parentName="p" {...{
          "href": "https://github.com/webiny/benchmark/tree/main/benchmarks/results/hc-write-data"
        }}>{`click here`}</a>{`.`}</p>
</Alert>
<_Heading level={3} id={"response-times"} nextElement={{
      "type": "heading",
      "depth": 4
    }}>Response Times</_Heading>
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
<_Heading level={2} id={"optimization-suggestions"} nextElement={{
      "type": "paragraph"
    }}>Optimization Suggestions</_Heading>
<p>{`There are 3 key components that control your throughput and cost.`}</p>
<p><strong parentName="p">{`1. DynamoDB`}</strong></p>
<p>{`By default DynamoDB is configured with `}<inlineCode parentName="p">{`on demand`}</inlineCode>{` capacity. To lower your cost, once you have a good sense of your access patterns, we recommend you switch to `}<inlineCode parentName="p">{`provisioned capacity`}</inlineCode>{` mode. This mode will be cheaper to use if configured correctly.`}</p>
<p><strong parentName="p">{`2. Lambda concurrency`}</strong></p>
<p>{`By default your AWS account will have a soft limit of 1000 lambda concurrent executions. We recommend you increase this limit by filing a support request with AWS.`}</p>
<p>{`It’s also important to be aware of the burst capacity limits, for more info visit this `}<a parentName="p" {...{
        "href": "https://docs.aws.amazon.com/lambda/latest/dg/invocation-scaling.html"
      }}>{`AWS resource page`}</a>{`.`}</p>
<p><strong parentName="p">{`3. Elasticsearch service`}</strong></p>
<p>{`This is the only service which is not fully serverless and needs to be manually scaled. The above numbers should help you determine how to size accordingly.`}</p>
<p>{`Additionally, adjusting the `}<inlineCode parentName="p">{`batchSize`}</inlineCode>{` and `}<inlineCode parentName="p">{`maximumBatchingWindowInSeconds`}</inlineCode>{` can also help, but this is determined by your access patterns.`}</p>
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
          }}>{/* prettier-ignore */}{`$0.08`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$0.08`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$0.26`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$0.58`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$0.01`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$1.01`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Test B`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$0.83`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$0.76`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$2.58`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$3.48`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$0.08`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$7.73`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Test C`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$1.65`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$1.51`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$5.20`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$6.56`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$0.33`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$15.25`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Test D`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$3.64`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$3.32`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$11.79`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$14.85`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$0.92`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$34.52`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Test E`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$3.75`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$3.34`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$11.78`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$13.24`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$2.68`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$34.79`}</td>
</tr>
</tbody>
</table>
<Alert type="info" mdxType="Alert">
<p>{`The cost of serverless components has been calculated based on their usage. The cost of Elasticsearch has been calculated for a 15min period, based on the hourly rate.`}</p>
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
          }}>{`Cost per 10k requests`}</th>
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
          }}>{/* prettier-ignore */}{`$0.13083`}</td>
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
          }}>{/* prettier-ignore */}{`$0.10175`}</td>
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
          }}>{/* prettier-ignore */}{`$0.10125`}</td>
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
          }}>{/* prettier-ignore */}{`$0.10398`}</td>
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
          }}>{/* prettier-ignore */}{`$0.10405`}</td>
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
          }}>{`77.3k`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`0.09`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$0.08`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Test B`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`760k`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`0.85`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$0.83`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Test C`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`1.51M`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`1.69`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$1.65`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Test D`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`3.32M`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`3.70`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$3.64`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Test E`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`3.34M`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`3.75`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$3.66`}</td>
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
          }}>{`77.3k`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$0.08`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Test B`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`760k`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$0.76`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Test C`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`1.51M`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$1.51`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Test C`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`3.32M`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$3.32`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Test C`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`3.34M`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$3.34`}</td>
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
          }}>{`80.2k`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`371`}</td>
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
          }}>{`762k`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`382`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$2.58`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Test C`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`1.51M`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`389`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$5.20`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Test D`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`3.32M`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`402`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$11.79`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Test E`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`3.34M`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`399`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$11.78`}</td>
</tr>
</tbody>
</table>
<Alert type="info" mdxType="Alert">
<p>{`Lambda costs also include the cost that’s occurred by the DynamoDB stream.
Webiny uses Lambda functions with 512MB of memory.`}</p>
</Alert>
<Alert type="info" mdxType="Alert">
<p>{`Notice how test E is cheaper by 1 cent from test D, it’s only 3ms difference in the execution time.`}</p>
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
          }}>{`163k`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`232k`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$0.58`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Test B`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`1.52M`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`2.28M`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$3.48`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Test C`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`3.39M`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`4.37M`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$6.56`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Test D`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`9.28M`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`9.82M`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$14.85`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`Test E`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`7.44M`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{`8.90M`}</td>
<td parentName="tr" {...{
            "align": "right"
          }}>{/* prettier-ignore */}{`$13.24`}</td>
</tr>
</tbody>
</table>
<Alert type="info" mdxType="Alert">
<p>{`Notice how test E is cheaper than test D. This is because we were able to fit a bit more records inside the DynamoDB batch window so the stream had less operations to execute.`}</p>
</Alert>
<hr></hr>
<p>{`You can download and check the full report here: `}<a parentName="p" {...{
        "href": "https://github.com/webiny/benchmark/tree/main/benchmarks/results/hc-write-data"
      }}>{`https://github.com/webiny/benchmark/tree/main/benchmarks/results/hc-write-data`}</a></p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;