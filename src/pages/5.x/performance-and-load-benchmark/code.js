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
  "title": "Code Benchmarking",
  "description": "Learn how to benchmark code",
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
  "title": "Overview",
  "slug": "overview",
  "children": []
}, {
  "title": "Measuring Code Execution",
  "slug": "measuring-code-execution",
  "children": [{
    "title": "Categorizing the Measurements",
    "slug": "categorizing-the-measurements",
    "children": []
  }]
}, {
  "title": "Enabling the Measurement",
  "slug": "enabling-the-measurement",
  "children": []
}, {
  "title": "The Measurement Results",
  "slug": "the-measurement-results",
  "children": []
}, {
  "title": "Customising the Measurement Results Output",
  "slug": "customising-the-measurement-results-output",
  "children": []
}, {
  "title": "Conclusion",
  "slug": "conclusion",
  "children": []
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



<Alert type="success" title="What you'll learn" mdxType="Alert">
<ul>
<li parentName="ul">{`what is the code benchmark`}</li>
<li parentName="ul">{`how to enable the code benchmark`}</li>
<li parentName="ul">{`how to output the code benchmark measurements`}</li>
</ul>
</Alert>
<Alert type="warning" title="Before continuing" mdxType="Alert">
<p>{`In order to follow this article, you must use Webiny version `}<strong parentName="p">{`5.35.0`}</strong>{` or greater.`}</p>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`With the `}<inlineCode parentName="p">{`5.35.0`}</inlineCode>{` version of Webiny, we have included the benchmarking tool for the code execution.
Basically, a piece of code is wrapped into the measurement method and, if benchmarking is enabled, it measures execution time and memory difference between the measurement starting and end points.`}</p>
<p>{`This is useful to figure out where are the bottlenecks in the Webiny’s and the users code.`}</p>
<_Heading level={2} id={"measuring-code-execution"} nextElement={{
      "type": "paragraph"
    }}>Measuring Code Execution</_Heading>
<p>{`As noted in the overview part of this article, the benchmark tool measures execution time and memory difference, from start to end of execution, of the piece of code wrapped in the measurement method.`}</p>
<p>{`The measurement method looks like this:`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`const result = await context.benchmark.measure("my code", async () => {
  const innerResult = await doSomething();

  const processedInnerResult = await process(innerResult);

  return output(processedInnerResult);
});
// do something with that result
passTheResult(result);`}
</Editor>
<p>{`The measurement is stored into an object with interface `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/7d9d7bbf0dbbc6bfed114d1835114b3512e33ffa/packages/api/src/types.ts#L7"
      }}>{`BenchmarkMeasurement`}</a>{`.
The properties are:`}</p>
<ul>
<li parentName="ul">{`name - identifier of the measurement (`}<inlineCode parentName="li">{`my code`}</inlineCode>{` in our example)`}</li>
<li parentName="ul">{`category - category of the measurement - default is `}<inlineCode parentName="li">{`webiny`}</inlineCode></li>
<li parentName="ul">{`start - the `}<inlineCode parentName="li">{`Date`}</inlineCode>{` object created when the measurement started`}</li>
<li parentName="ul">{`end - the `}<inlineCode parentName="li">{`Date`}</inlineCode>{` object created when the measurement ended`}</li>
<li parentName="ul">{`elapsed - difference, in milliseconds, from the end to start `}<inlineCode parentName="li">{`Date`}</inlineCode>{` values`}</li>
<li parentName="ul">{`memory - difference, in bytes, from the end to the start of the memory measurement (collected via the `}<inlineCode parentName="li">{`process.memoryUsage().heapUsed`}</inlineCode>{`)`}</li>
</ul>
<_Heading level={3} id={"categorizing-the-measurements"} nextElement={{
      "type": "paragraph"
    }}>Categorizing the Measurements</_Heading>
<p>{`You can set your own measurement category, as the default category is `}<inlineCode parentName="p">{`webiny`}</inlineCode>{`:`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`const result = await context.benchmark.measure(
  {
    name: "my code",
    category: "my category"
  },
  async () => {
    const innerResult = await doSomething();

    const processedInnerResult = await process(innerResult);

    return output(processedInnerResult);
  }
);
// do something with that result
passTheResult(result);`}
</Editor>
<p>{`By setting the category, you can filter the measurements easily later. You can write anything you like in both the `}<inlineCode parentName="p">{`category`}</inlineCode>{` and `}<inlineCode parentName="p">{`name`}</inlineCode>{` properties.`}</p>
<_Heading level={2} id={"enabling-the-measurement"} nextElement={{
      "type": "paragraph"
    }}>Enabling the Measurement</_Heading>
<p>{`The measurements are not enabled by the default because, we are absolutely positive, nobody wants it to run all the time.
If you want to enable the measurements, you will need to create a plugin which enables it:`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { ContextPlugin } from "@webiny/handler-aws";

const plugin = new ContextPlugin(async context => {
  context.benchmark.enableOn(async () => {
    /**
     * You can check the request headers for x-benchmark.
     */
    if (context.request.headers["x-benchmark"] === "true") {
      return true;
    }
    /**
     * You can check the query parameters for enableBenchmark.
     */
    const query = context.request.query as Record<string, string> | undefined;
    if (query?.["enableBenchmark"] === "true") {
      return true;
    }
    /**
     * You can check the environment variable as well.
     */
    return process.env.BENCHMARK_ENABLE === "true";
  });
});

const handler = createHandler({
  plugins: [
    // the plugin which enables the benchmarking must always go to the top of the plugin list
    plugin
    // rest of the plugins
  ]
});`}
</Editor>
<p>{`In our example we give few possibilities to enable the benchmarking, but you can enable it however you like.`}</p>
<p>{`Although our example give a simple code to enable the benchmark via headers or query parameters, we would recommend to make it more complex.
You can use the `}<inlineCode parentName="p">{`context.security.getIdentity()`}</inlineCode>{` to check if a user is logged in and then enable the benchmark if correct headers are sent.`}</p>
<p>{`You can also check for some randomly generated string in the headers or query string.
Just make it a bit more complex than our example as you don’t want to allow everyone to enable the benchmarking.`}</p>
<_Heading level={2} id={"the-measurement-results"} nextElement={{
      "type": "paragraph"
    }}>The Measurement Results</_Heading>
<p>{`By the default we output the results into the console (it will be stored on Cloudwatch) in the end of the request.`}</p>
<p>{`As we use the `}<a parentName="p" {...{
        "href": "https://www.fastify.io/docs/latest/"
      }}>{`Fastify`}</a>{` as our request and response handler, and we output the measurements in the `}<inlineCode parentName="p">{`onResponse`}</inlineCode>{` hook and the `}<inlineCode parentName="p">{`onTimeout`}</inlineCode>{` hook.
If you want to know more about the Fastify hooks and lifecycles, there is quite extensive documentation about the Fastify `}<a parentName="p" {...{
        "href": "https://www.fastify.io/docs/latest/Reference/Lifecycle/"
      }}>{`lifecycles`}</a>{`, `}<a parentName="p" {...{
        "href": "https://www.fastify.io/docs/latest/Reference/Hooks/#onresponse"
      }}>{`onResponse`}</a>{` and `}<a parentName="p" {...{
        "href": "https://www.fastify.io/docs/latest/Reference/Hooks/#ontimeout"
      }}>{`onTimeout`}</a>{` hooks.`}</p>
<_Heading level={2} id={"customising-the-measurement-results-output"} nextElement={{
      "type": "paragraph"
    }}>Customising the Measurement Results Output</_Heading>
<p>{`You can customize the output of the measurement logs, for example: send them to a service of your own liking.`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { ContextPlugin } from "@webiny/handler-aws";

const plugin = new ContextPlugin(async context => {
  context.benchmark.onOutput(async ({ benchmark, stop }) => {
    const result = await sendToUserDefinedService(benchmark.measurements);
    if (!result) {
      console.log(\`Could not send benchmark results to a user defined service.\`);
    }
    /**
     * If you want to prevent the measurements to be sent to the Cloudwatch, you need to break the cycle.
     */
    return stop();
  });
});

const handler = createHandler({
  plugins: [
    // register the plugin in the end of the plugins array
    plugin
  ]
});`}
</Editor>
<p>{`You can add multiple plugins which attach some `}<inlineCode parentName="p">{`onOutput`}</inlineCode>{` method, and they will all be executed, from the last to the first added, if you do not break the cycle with the `}<inlineCode parentName="p">{`stop()`}</inlineCode>{`.`}</p>
<p>{`Also, remember that we have measurement categories, and if you have set the category to your measurement point, you can filter out unnecessary measurements when having a custom output.`}</p>
<_Heading level={2} id={"conclusion"} nextElement={{
      "type": "paragraph"
    }}>Conclusion</_Heading>
<p>{`The benchmark was initially intended as an internal tool to help us figure out how much of execution time is spent on some piece of code. We decided to attach it to the main `}<inlineCode parentName="p">{`context`}</inlineCode>{` object, and have it documented, because it could help our users to figure out if and why the execution of their code is slow.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;