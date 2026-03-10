/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import {Alert} from "@/components/Alert";
import {CanIUseThis} from "@/components/CanIUseThis";
import {WhatYouWillLearn} from "@/components/WhatYouWillLearn";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "What to be careful about?",
  "description": "You will learn about Background Tasks, how to create new definitions, how to trigger them and how to handle the task run.",
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
  "title": "What to Be Careful About",
  "slug": "what-to-be-careful-about",
  "children": [{
    "title": "Lambda Timeout",
    "slug": "lambda-timeout",
    "children": []
  }, {
    "title": "Step Function Timeout",
    "slug": "step-function-timeout",
    "children": []
  }, {
    "title": "Step Function Execution Limit",
    "slug": "step-function-execution-limit",
    "children": []
  }, {
    "title": "Step Function State Change Limit",
    "slug": "step-function-state-change-limit",
    "children": []
  }]
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





<CanIUseThis since={"5.39.0"} mdxType="CanIUseThis" />
<WhatYouWillLearn mdxType="WhatYouWillLearn">
  
- what to be careful about
- limits of AWS Services
</WhatYouWillLearn>
<_Heading level={2} id={"what-to-be-careful-about"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>What to Be Careful About</_Heading>
<_Heading level={3} id={"lambda-timeout"} nextElement={{
      "type": "paragraph"
    }}>Lambda Timeout</_Heading>
<p>{`AWS Lambda can run up to 15 minutes. Webiny provides a mechanism for checking on how much time is there left before the Lambda times out, but it is up to the developer to use it. You can read about it `}<a parentName="p" {...{
        "href": "#the-is-close-to-timeout-method"
      }}>{`here`}</a>{`.`}</p>
<_Heading level={3} id={"step-function-timeout"} nextElement={{
      "type": "paragraph"
    }}>Step Function Timeout</_Heading>
<p>{`AWS Step Function can live up to 1 year. This is the maximum time for the Step Function, set by AWS, and it cannot be increased.`}</p>
<_Heading level={3} id={"step-function-execution-limit"} nextElement={{
      "type": "paragraph"
    }}>Step Function Execution Limit</_Heading>
<p>{`AWS Step Function has a hard limit of 25,000 state changes - executions. It cannot be increased.`}</p>
<_Heading level={3} id={"step-function-state-change-limit"} nextElement={{
      "type": "paragraph"
    }}>Step Function State Change Limit</_Heading>
<p>{`AWS Step Function does not provide a built-in mechanism to limit the number of state changes on each task run.`}</p>
<p>{`This means that a task can go into unwanted loop and execute up to 25,000 times, which is something that we want to avoid, or at least, control it.`}</p>
<p>{`What Webiny does to help with this is count the number of the Lambda handler executions, and if the number is greater than defined, it will end the task with an error.`}</p>
<p>{`Default limit: `}<inlineCode parentName="p">{`500`}</inlineCode>{`.`}</p>
<p>{`To change the limit, see `}<a parentName="p" {...{
        "href": "#advanced-definition"
      }}><inlineCode parentName="a">{`maxIterations`}</inlineCode></a>{` parameter when defining the Background Task.`}</p>
<Alert title="Resumable Background Tasks" type="warning" mdxType="Alert">
  Currently, Background Tasks are not using the Task Token, so they are not resumable. We will be
  working on the solution for this in the future.
</Alert>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;