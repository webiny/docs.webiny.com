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
  "title": "Performance Tuning",
  "description": "How to tune Webiny Headless CMS performance for speed, reliability and scale.",
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
  "title": "Things to Consider",
  "slug": "things-to-consider",
  "children": [{
    "title": "Lambda Burst Capacity",
    "slug": "lambda-burst-capacity",
    "children": []
  }, {
    "title": "DynamoDB Stream",
    "slug": "dynamo-db-stream",
    "children": []
  }, {
    "title": "Elasticsearch Cluster",
    "slug": "elasticsearch-cluster",
    "children": [{
      "title": "Elasticsearch Cluster Size",
      "slug": "elasticsearch-cluster-size"
    }, {
      "title": "Updating Refresh Interval",
      "slug": "updating-refresh-interval"
    }, {
      "title": "Additional References",
      "slug": "additional-references"
    }]
  }]
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
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
<li parentName="ul">{`what are the main components that can be tuned`}</li>
<li parentName="ul">{`what things you should consider`}</li>
<li parentName="ul">{`best practices`}</li>
</ul>
</Alert>
<Alert type={"info"} mdxType="Alert">
<p>{`  Note that this article was written when Webiny was using Amazon Elasticsearch Service as its search engine of choice. And although with the 5.39.0 release Webiny started using Amazon OpenSearch Service, this article is still relevant as the configuration options outlined here are still applicable.`}</p>
</Alert>
<_Heading level={2} id={"about"} nextElement={{
      "type": "paragraph"
    }}>About</_Heading>
<p>{`Webiny, being built on top of a serverless infrastructure, takes the advantage of the auto-scale capabilities many of the serverless services provide out of the box, saving you time, and stress in having to manage this yourself. However, not all components scale well, and sometimes it’s the interaction between the components that might need adjustments. In this article we want to provide you with a list of things you should consider in advance before putting large workloads on top of Webiny, to ensure your users have a great experience.`}</p>
<_Heading level={2} id={"things-to-consider"} nextElement={{
      "type": "paragraph"
    }}>Things to Consider</_Heading>
<p>{`The main bottleneck we found when we stress-tested Webiny by inserting millions of records with thousands of user requests in parallel, is that it’s the communication between DynamoDB and the ElasticSearch cluster that should be tuned to match your traffic patterns. We say patterns because the tuning might differ if you’re focused more on read operations than write operations, as well as the record sizes and frequency, many small-record writes, vs many big-record writes.`}</p>
<p>{`In addition to the database side of things, the one additional item to consider is the burst capacity of Lambda functions - which is an AWS hard limit and cannot be changed.`}</p>
<p>{`In this article, we’ll focus on tuning the ElasticSearch cluster, the DynamoDB Stream configuration and the Lambda burst capacity. These are the only components you should tweak, while all others will handle and scale to your loads automatically.`}</p>
<_Heading level={3} id={"lambda-burst-capacity"} nextElement={{
      "type": "paragraph"
    }}>Lambda Burst Capacity</_Heading>
<p>{`It’s important to get yourself familiarized with how Lambda functions scale. There are two parts to how they scale, the first is the “burst capacity”. That’s the most important one as that one `}<strong parentName="p">{`cannot be changed`}</strong>{` and has a fixed value that depends on the AWS region where you deployed Webiny. The burst capacity determines the maximum amount of concurrent Lambda function executions for your initial period. That’s like your 0 to 60 speed.`}</p>
<p>{`The key here is to pick the right AWS region as the burst capacity differs drastically between some regions. Here’s the list of the current burst capacity values per AWS region:`}</p>
<ul>
<li parentName="ul"><strong parentName="li">{`3000`}</strong>{` – US West (Oregon), US East (N. Virginia), Europe (Ireland)`}</li>
<li parentName="ul"><strong parentName="li">{`1000`}</strong>{` – Asia Pacific (Tokyo), Europe (Frankfurt), US East (Ohio)`}</li>
<li parentName="ul"><strong parentName="li">{`500`}</strong>{` – Other Regions`}</li>
</ul>
<p>{`Once you are at the burst capacity, your functions will still scale in their concurrency, but at a slower pace, which is `}<strong parentName="p">{`500 additional instances each minute.`}</strong>{` This is why it’s important to pick a region with a higher burst capacity so that you have more room till you hit this 500 instances per minute threshold.`}</p>
<p>{`The last important factor to mention about scaling Lambda functions is that every AWS account gets a limit of 1,000 concurrent Lambda executions by default. This is counted across all of your Lambda functions inside a single AWS region. This limit can be increased by raising a request inside your `}<a parentName="p" {...{
        "href": "https://console.aws.amazon.com/servicequotas/home"
      }}>{`AWS Service Quotas Dashboard`}</a></p>
<p><strong parentName="p">{`References:`}</strong></p>
<ul>
<li parentName="ul"><a parentName="li" {...{
          "href": "https://docs.aws.amazon.com/lambda/latest/dg/lambda-concurrency.html"
        }}>{`https://docs.aws.amazon.com/lambda/latest/dg/lambda-concurrency.html`}</a></li>
<li parentName="ul"><a parentName="li" {...{
          "href": "https://docs.aws.amazon.com/lambda/latest/dg/burst-concurrency.html"
        }}>{`https://docs.aws.amazon.com/lambda/latest/dg/burst-concurrency.html`}</a></li>
<li parentName="ul"><a parentName="li" {...{
          "href": "https://aws.amazon.com/blogs/compute/understanding-aws-lambda-scaling-and-throughput/"
        }}>{`https://aws.amazon.com/blogs/compute/understanding-aws-lambda-scaling-and-throughput/`}</a></li>
<li parentName="ul"><a parentName="li" {...{
          "href": "https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html"
        }}>{`https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html`}</a></li>
</ul>
<_Heading level={3} id={"dynamo-db-stream"} nextElement={{
      "type": "paragraph"
    }}>DynamoDB Stream</_Heading>
<p>{`By default, in Webiny, all the API write requests only hit DynamoDB, regardless if you’re using the DynamoDB-only instance, or the one with ElasticSearch. This is because ElasticSearch doesn’t scale well when there’s a big spike in write requests. Using DynamoDB to shield the ElasticSearch cluster is a design decision that helps us scale Webiny to very large amounts of traffic.`}</p>
<p>{`The data records, once written inside DynamoDB, get copied to ElasticSearch in the background through a DynamoDB Stream. Essentially DynamoDB will trigger a Lambda function and give it several last records that were written to DynamoDB, and then that Lambda function does a bulk-write request to ElasticSearch.`}</p>
<p>{`This mechanism triggers with a delay, which is intentional. The delay is determined by configuring two parameters on DynamoDB Stream:`}</p>
<ul>
<li parentName="ul"><strong parentName="li">{`Batch size`}</strong>{` – The number of records to send to the function in each batch, up to 10,000. Lambda passes all of the records in the batch to the function in a single call, as long as the total size of the events doesn’t exceed the payload limit for synchronous invocation (6 MB).`}</li>
<li parentName="ul"><strong parentName="li">{`Batch window`}</strong>{` – Specify the maximum amount of time to gather records before invoking the function, in seconds.`}</li>
</ul>
<p>{`Whichever of the two parameters meets its condition first, will trigger the Stream and thus pass the data to the Lambda function which will sync it to ElasticSearch.`}</p>
<p>{`The thing to consider here is how fast you need to read these records after they’ve been written. If you have low amounts of reads, you might need to wait until the Batch window expires before the sync process kicks in. On the other side, if you have a small `}<inlineCode parentName="p">{`Batch size`}</inlineCode>{`, but a lot of writes, the sync process might kick in too many times and overwhelm your ElasticSearch cluster. Tweaking this will depend on your traffic patterns and requirements.`}</p>
<p>{`By default, Webiny configures `}<inlineCode parentName="p">{`Batch size`}</inlineCode>{` to 1,000 records and the `}<inlineCode parentName="p">{`Batch window`}</inlineCode>{` to 1 second. For most use cases this is enough. In case you wish to modify this, here’s an example code:`}</p>
<Editor title="apps/core/webiny.application.ts" lang="js" mdxType="Editor">
{`import * as aws from "@pulumi/aws";
import { createCoreApp } from "@webiny/serverless-cms-aws";
import { isResourceOfType } from "@webiny/pulumi";

// It's recommended our \`staging\` and \`production\` environments are  as similar
// as possible. That's why \`staging\` is also listed as a production environment.
const PRODUCTION_ENVIRONMENTS = ["staging", "prod"];

export default createCoreApp({
  elasticSearch: true,
  pulumi: app => {
    // Let's apply configuration changes only for production-like environments (\`staging\` and \`prod\`).
    const environment = app.params.run["env"];
    if (!PRODUCTION_ENVIRONMENTS.includes(environment)) {
      return;
    }

    app.onResource(resource => {
      // Adjust DynamoDB -> Amazon Elasticsearch stream.
      const isDynamoToElasticEventSourceMapping =
        isResourceOfType(resource, aws.lambda.EventSourceMapping) &&
        resource.name === "dynamo-to-elastic";

      if (isDynamoToElasticEventSourceMapping) {
        // Increase the batch size and batching window.
        resource.config.batchSize(500);
        resource.config.maximumBatchingWindowInSeconds(30);
        return;
      }
    });
  }
});`}
</Editor>
<p><strong parentName="p">{`References:`}</strong></p>
<ul>
<li parentName="ul"><a parentName="li" {...{
          "href": "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.html"
        }}>{`https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.html`}</a></li>
<li parentName="ul"><a parentName="li" {...{
          "href": "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.Lambda.html"
        }}>{`https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.Lambda.html`}</a></li>
<li parentName="ul"><a parentName="li" {...{
          "href": "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.Lambda.BestPracticesWithDynamoDB.html"
        }}>{`https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.Lambda.BestPracticesWithDynamoDB.html`}</a></li>
<li parentName="ul"><a parentName="li" {...{
          "href": "https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html#services-dynamodb-eventsourcemapping"
        }}>{`https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html#services-dynamodb-eventsourcemapping`}</a></li>
<li parentName="ul"><a parentName="li" {...{
          "href": "https://github.com/webiny/webiny-js/blob/next/packages/pulumi-aws/src/apps/core/CoreElasticSearch.ts#L65-L89"
        }}>{`https://github.com/webiny/webiny-js/blob/next/packages/pulumi-aws/src/apps/core/CoreElasticSearch.ts#L65-L89`}</a></li>
</ul>
<_Heading level={3} id={"elasticsearch-cluster"} nextElement={{
      "type": "paragraph"
    }}>Elasticsearch Cluster</_Heading>
<p>{`Finally, the last component to tune is the Elasticsearch cluster, which consists of two steps:`}</p>
<ol>
<li parentName="ol">{`correctly sizing the cluster`}</li>
<li parentName="ol">{`updating the index refresh interval`}</li>
</ol>
<p>{`In the following text, we cover these two topics in more detail.`}</p>
<_Heading level={4} id={"elasticsearch-cluster-size"} nextElement={{
      "type": "paragraph"
    }}>Elasticsearch Cluster Size</_Heading>
<p>{`For production instances, we highly recommend having a multi-zone deployment. By default, if you deploy Webiny with `}<inlineCode parentName="p">{`--env=prod`}</inlineCode>{` flag, Webiny will automatically create a cluster in 2 availability zones, where each zone has 1 instance that’s a type of `}<inlineCode parentName="p">{`t3.medium.search`}</inlineCode>{`, this should be suitable for small to medium size projects. For all other environments, we deploy a single `}<inlineCode parentName="p">{`t3.small.elasticsearch`}</inlineCode>{` instance, which is only suitable for development purposes and shouldn’t be used in production.`}</p>
<p>{`For any larger projects, we recommend you scale up your ElasticSearch cluster to something with more capacity. You can look at our `}<_Link href="/docs/5.x/performance-and-load-benchmark/headless-cms/write-benchmark">{`Headless CMS benchmark`}</_Link>{` where we compare several different cluster configurations to get a sense of what might best suit your needs.`}</p>
<p>{`To update your ElasticSearch cluster configuration, you can follow this example:`}</p>
<Editor title="apps/core/webiny.application.ts" lang="ts" mdxType="Editor">
{`import * as aws from "@pulumi/aws";
import { createCoreApp } from "@webiny/serverless-cms-aws";
import { isResourceOfType } from "@webiny/pulumi";

// It's recommended our \`staging\` and \`production\` environments are  as similar
// as possible. That's why \`staging\` is also listed as a production environment.
const PRODUCTION_ENVIRONMENTS = ["staging", "prod"];

export default createCoreApp({
  elasticSearch: true,
  pulumi: app => {
    // Let's apply configuration changes only for production-like environments (\`staging\` and \`prod\`).
    const environment = app.params.run["env"];
    if (!PRODUCTION_ENVIRONMENTS.includes(environment)) {
      return;
    }

    app.onResource(resource => {
      // Adjust Amazon Elasticsearch domain.
      const isElasticsearchDomain = isResourceOfType(resource, aws.elasticsearch.Domain);

      if (isElasticsearchDomain) {
        // Set the instance type and number of instances.
        resource.config.clusterConfig(() => {
          return {
            instanceType: "t3.small.elasticsearch",
            instanceCount: 2
          };
        });
      }
    });
  }
});`}
</Editor>
<_Heading level={4} id={"updating-refresh-interval"} nextElement={{
      "type": "paragraph"
    }}>Updating Refresh Interval</_Heading>
<p>{`The second part of tuning the ElasticSearch is tweaking certain configuration parameters of the service itself. At the moment, we recommend increasing the `}<a parentName="p" {...{
        "href": "https://www.elastic.co/guide/en/elasticsearch/reference/current/tune-for-indexing-speed.html#_unset_or_increase_the_refresh_interval"
      }}>{`refresh interval`}</a>{`, which is an operation that indexes the records and makes them available for searching.`}</p>
<p>{`By default, this action is triggered every second on all records that received one search request in the last 30 seconds. This action is very costly, especially if you have ongoing indexing activities running on your cluster and it will hurt your indexing speed. We recommend increasing this to `}<inlineCode parentName="p">{`30s`}</inlineCode>{` and then testing if you need to increase it more or decrease it. To make the change you need to modify `}<inlineCode parentName="p">{`index.refresh_interval`}</inlineCode>{` parameter.`}</p>
<p>{`Depending on the existence od the target index, the refresh interval can be modified in two ways.`}</p>
<h5><strong parentName="h5">{`Non-existing Indexes`}</strong></h5>
<p>{`The following approach can be used when indexes do not yet exist (i.e. they will be created as users start to use Webiny). Because it consists of a couple of plugins which live in your application code, it can be considered as a more convenient way of adjusting the refresh interval.`}</p>
<p>{`The following is a list of plugins we’ll need to utilize:`}</p>
<ol>
<li parentName="ol"><a parentName="li" {...{
          "href": "https://github.com/webiny/webiny-js/blob/v5.33.3/packages/api-file-manager-ddb-es/src/plugins/FileElasticsearchIndexPlugin.ts#L3"
        }}><inlineCode parentName="a">{`FileElasticsearchIndexPlugin`}</inlineCode></a></li>
<li parentName="ol"><a parentName="li" {...{
          "href": "https://github.com/webiny/webiny-js/blob/v5.33.3/packages/api-form-builder-so-ddb-es/src/plugins/FormElasticsearchIndexPlugin.ts#L3"
        }}><inlineCode parentName="a">{`FormElasticsearchIndexPlugin`}</inlineCode></a></li>
<li parentName="ol"><a parentName="li" {...{
          "href": "https://github.com/webiny/webiny-js/blob/v5.33.3/packages/api-page-builder-so-ddb-es/src/plugins/definitions/PageElasticsearchIndexPlugin.ts#L3"
        }}><inlineCode parentName="a">{`PageElasticsearchIndexPlugin`}</inlineCode></a></li>
<li parentName="ol"><a parentName="li" {...{
          "href": "https://github.com/webiny/webiny-js/blob/v5.33.3/packages/api-headless-cms-ddb-es/src/plugins/CmsEntryElasticsearchIndexPlugin.ts#L3"
        }}><inlineCode parentName="a">{`CmsEntryElasticsearchIndexPlugin`}</inlineCode></a></li>
</ol>
<p>{`We register these plugins via the default GraphQL API (`}<inlineCode parentName="p">{`apps/api/graphql`}</inlineCode>{`) and Headless CMS GraphQL API (`}<inlineCode parentName="p">{`apps/api/headlessCMS`}</inlineCode>{`) application code. The following examples demonstrate how we can do that.`}</p>
<h6><strong parentName="h6">{`Default GraphQL API (`}<inlineCode parentName="strong">{`apps/api/graphql`}</inlineCode>{`)`}</strong></h6>
<p>{`Within the default GraphQL API’s application code, we register the following three plugins.`}</p>
<Editor title="apps/api/graphql/src/plugins/fileElasticsearchIndexPlugin.ts" lang="ts" mdxType="Editor">
{`import { getBaseConfiguration } from "@webiny/api-elasticsearch";
import { FileElasticsearchIndexPlugin } from "@webiny/api-file-manager-ddb-es/plugins/FileElasticsearchIndexPlugin";

export const fileElasticsearchIndexPlugin = new FileElasticsearchIndexPlugin({
    body: getBaseConfiguration(config => {
        return {
            ...config,
            settings: {
                ...config.settings,
                index: {
                    ...config.settings?.index,
                    /**
                     * For more information, check out the following:
                     * https://www.elastic.co/guide/en/elasticsearch/reference/current/index-modules.html#index-refresh-interval-setting
                     * https://www.elastic.co/guide/en/elasticsearch/reference/current/indices-update-settings.html
                     */
                    refresh_interval: "30s"
                }
            }a
        };
    })
});`}
</Editor>
<Editor title="apps/api/graphql/src/plugins/formElasticsearchIndexPlugin.ts" lang="ts" mdxType="Editor">
{`import { getBaseConfiguration } from "@webiny/api-elasticsearch";
import { FormElasticsearchIndexPlugin } from "@webiny/api-form-builder-so-ddb-es/plugins/FormElasticsearchIndexPlugin";

export const formElasticsearchIndexPlugin = new FormElasticsearchIndexPlugin({
  body: getBaseConfiguration(config => {
    return {
      ...config,
      settings: {
        ...config.settings,
        index: {
          ...config.settings?.index,
          /**
           * For more information, check out the following:
           * https://www.elastic.co/guide/en/elasticsearch/reference/current/index-modules.html#index-refresh-interval-setting
           * https://www.elastic.co/guide/en/elasticsearch/reference/current/indices-update-settings.html
           */
          refresh_interval: "30s"
        }
      }
    };
  })
});`}
</Editor>
<Editor title="apps/api/graphql/src/plugins/pageElasticsearchIndexPlugin.ts" lang="ts" mdxType="Editor">
{`import { getBaseConfiguration } from "@webiny/api-elasticsearch";
import { PageElasticsearchIndexPlugin } from "@webiny/api-page-builder-so-ddb-es/plugins/definitions/PageElasticsearchIndexPlugin";

export const pageElasticsearchIndexPlugin = new PageElasticsearchIndexPlugin({
  body: getBaseConfiguration(config => {
    return {
      ...config,
      settings: {
        ...config.settings,
        index: {
          ...config.settings?.index,
          /**
           * For more information, check out the following:
           * https://www.elastic.co/guide/en/elasticsearch/reference/current/index-modules.html#index-refresh-interval-setting
           * https://www.elastic.co/guide/en/elasticsearch/reference/current/indices-update-settings.html
           */
          refresh_interval: "30s"
        }
      }
    };
  })
});`}
</Editor>
<p>{`Once we have these three plugins defined, we need to register them in the `}<inlineCode parentName="p">{`apps/api/graphql/src/index.ts`}</inlineCode>{` entrypoint file:`}</p>
<Editor title="" lang="diff-ts" mdxType="Editor">
{`// For brevity, irrelevant lines of code have been removed.
// (...)
import { fileElasticsearchIndexPlugin } from "~/plugins/fileElasticsearchIndexPlugin";
import { formElasticsearchIndexPlugin } from "~/plugins/formElasticsearchIndexPlugin";
import { pageElasticsearchIndexPlugin } from "~/plugins/pageElasticsearchIndexPlugin";

export const handler = createHandler({
    plugins: [
        // For brevity, irrelevant lines of code have been removed.
        // (...)
        fileManagerPlugins(),
        fileManagerDynamoDbElasticStorageOperation(),
        fileManagerS3(),
+       fileElasticsearchIndexPlugin,
        prerenderingServicePlugins({
            eventBus: String(process.env.EVENT_BUS)
        }),
        createPageBuilderContext({
            storageOperations: createPageBuilderStorageOperations({
                documentClient,
                elasticsearch: elasticsearchClient,
+               plugins: [createGzipCompression(), pageElasticsearchIndexPlugin]
            })
        }),
        createPageBuilderGraphQL(),
        pageBuilderPrerenderingPlugins(),
        pageBuilderImportExportPlugins({
            storageOperations: createPageBuilderImportExportStorageOperations({ documentClient })
        }),
        createFormBuilder({
            storageOperations: createFormBuilderStorageOperations({
                documentClient,
                elasticsearch: elasticsearchClient,
+               plugins: [formElasticsearchIndexPlugin]
            })
        }),
        createHeadlessCmsContext({
            storageOperations: createHeadlessCmsStorageOperations({
                documentClient,
                elasticsearch: elasticsearchClient,
                plugins: [createGzipCompression()]
            })
        }),
        createHeadlessCmsGraphQL(),
        createGzipCompression(),
        createApwGraphQL(),
        createApwPageBuilderContext({
            storageOperations: createApwSaStorageOperations({ documentClient })
        }),
        scaffoldsPlugins()
    ],
    http: { debug }
});
`}
</Editor>
<h6><strong parentName="h6">{`Headless CMS GraphQL API (`}<inlineCode parentName="strong">{`apps/api/headlessCMS`}</inlineCode>{`)`}</strong></h6>
<p>{`Within the Headless CMS GraphQL API’s application code, we register the following plugin.`}</p>
<Editor title="apps/api/headlessCMS/src/plugins/cmsEntryElasticsearchIndexPlugin.ts" lang="ts" mdxType="Editor">
{`import { getBaseConfiguration } from "@webiny/api-elasticsearch";
import { CmsEntryElasticsearchIndexPlugin } from "@webiny/api-headless-cms-ddb-es";

export const cmsEntryElasticsearchIndexPlugin = new CmsEntryElasticsearchIndexPlugin({
  body: getBaseConfiguration(config => {
    return {
      ...config,
      settings: {
        ...config.settings,
        index: {
          ...config.settings?.index,
          /**
           * For more information, check out the following:
           * https://www.elastic.co/guide/en/elasticsearch/reference/current/index-modules.html#index-refresh-interval-setting
           * https://www.elastic.co/guide/en/elasticsearch/reference/current/indices-update-settings.html
           */
          refresh_interval: "30s"
        }
      }
    };
  })
});`}
</Editor>
<p>{`Once we have this plugin defined, we need to register it in the `}<inlineCode parentName="p">{`apps/api/headlessCMS/src/index.ts`}</inlineCode>{` entrypoint file:`}</p>
<Editor title="apps/api/headlessCMS/src/index.ts" lang="diff-ts" mdxType="Editor">
{`// For brevity, irrelevant lines of code have been removed.
// (...)
import { cmsEntryElasticsearchIndexPlugin } from "~/plugins/cmsEntryElasticsearchIndexPlugin";

export const handler = createHandler({
    plugins: [
        createWcpContext(),
        logsPlugins(),
        dbPlugins({
            table: process.env.DB_TABLE,
            driver: new DynamoDbDriver({ documentClient })
        }),
        securityPlugins({ documentClient }),
        i18nPlugins(),
        i18nDynamoDbStorageOperations(),
        createHeadlessCmsContext({
            storageOperations: createHeadlessCmsStorageOperations({
                documentClient,
                elasticsearch,
+               plugins: [createGzipCompression(), cmsEntryElasticsearchIndexPlugin]
            })
        }),
        createHeadlessCmsGraphQL({ debug }),
        createApwGraphQL(),
        createApwHeadlessCmsContext({
            storageOperations: createApwSaStorageOperations({ documentClient })
        }),
        scaffoldsPlugins()
    ],
    http: { debug }
});
`}
</Editor>
<p>{`Once all the plugins have been defined and registered, the last step would be to redeploy your project.`}</p>
<p>{`Note that, in case the refresh interval needs to be changed on an existing index, you’ll need to follow the approach outlined in the following section.`}</p>
<h5><strong parentName="h5">{`Updating Existing Indexes`}</strong></h5>
<p>{`Existing indexes can be updated by issuing the following `}<inlineCode parentName="p">{`PUT`}</inlineCode>{` HTTP request to your Elasticsearch cluster’s remote REST API:`}</p>
<Editor title="" lang="null" mdxType="Editor">
{`PUT https://domain-name.region.es.amazonaws.com/source-index/_settings
{
	"settings": {
		"index.refresh_interval": "30s"
	}
}`}
</Editor>
<p>{`But note that, in almost all cases, executing the above will result in an authentication error, which is to be expected.`}</p>
<p>{`There are multiple ways you can access the mentioned REST API.`}</p>
<p>{`One easy and straightforward way is to levearge the `}<a parentName="p" {...{
        "href": "https://www.npmjs.com/package/aws-es-kibana"
      }}><inlineCode parentName="a">{`aws-es-kibana`}</inlineCode></a>{` NPM module. Essentially, the module enables us to connect to `}<a parentName="p" {...{
        "href": "https://www.elastic.co/kibana/"
      }}>{`Kibana`}</a>{`, a visual interface tool that allows us to access our data, different settings, and, most importantly, developer tools. Via these tools, we’re then able to issue the above shown HTTP request as an authenticated user.`}</p>
<p>{`For more information, please consult the `}<a parentName="p" {...{
        "href": "https://www.elastic.co/guide/en/kibana/current/console-kibana.html"
      }}>{`related documentation`}</a>{`.`}</p>
<_Heading level={4} id={"additional-references"} nextElement={{
      "type": "list",
      "ordered": false,
      "start": null,
      "spread": false
    }}>Additional References</_Heading>
<ul>
<li parentName="ul"><a parentName="li" {...{
          "href": "https://github.com/webiny/webiny-js/blob/dev/packages/pulumi-aws/src/apps/core/CoreOpenSearch.ts#L48"
        }}>{`https://github.com/webiny/webiny-js/blob/dev/packages/pulumi-aws/src/apps/core/CoreOpenSearch.ts#L48`}</a></li>
<li parentName="ul"><a parentName="li" {...{
          "href": "https://aws.amazon.com/premiumsupport/knowledge-center/opensearch-indexing-performance/"
        }}>{`https://aws.amazon.com/premiumsupport/knowledge-center/opensearch-indexing-performance/`}</a></li>
<li parentName="ul"><a parentName="li" {...{
          "href": "https://www.elastic.co/guide/en/elasticsearch/reference/master/tune-for-indexing-speed.html"
        }}>{`https://www.elastic.co/guide/en/elasticsearch/reference/master/tune-for-indexing-speed.html`}</a></li>
<li parentName="ul"><a parentName="li" {...{
          "href": "https://docs.aws.amazon.com/opensearch-service/latest/developerguide/bp.html"
        }}>{`https://docs.aws.amazon.com/opensearch-service/latest/developerguide/bp.html`}</a></li>
</ul>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;