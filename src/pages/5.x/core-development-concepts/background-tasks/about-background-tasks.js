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
  "title": "About Background Tasks",
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
  "title": "Overview",
  "slug": "overview",
  "children": []
}, {
  "title": "AWS Services Used in the Background Tasks",
  "slug": "aws-services-used-in-the-background-tasks",
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





<CanIUseThis since={"5.39.0"} mdxType="CanIUseThis" />
<WhatYouWillLearn mdxType="WhatYouWillLearn">
<ul>
<li parentName="ul">{`what are Background Tasks`}</li>
</ul>
</WhatYouWillLearn>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`In the 5.39.0 version of Webiny we have introduced a Background Task feature.`}</p>
<p>{`This feature enables our users to run operations which take a long time to finish - more than available `}<inlineCode parentName="p">{`15 minutes`}</inlineCode>{` maximum run time of the AWS Lambda.`}</p>
<p>{`The Background Task run limit is `}<inlineCode parentName="p">{`1 year`}</inlineCode>{`, from the time when the task is triggered, which is the maximum execution time for the `}<inlineCode parentName="p">{`AWS Step Function`}</inlineCode>{`.`}</p>
<p>{`This functionality uses the `}<inlineCode parentName="p">{`AWS Event Bridge`}</inlineCode>{`, `}<inlineCode parentName="p">{`AWS Step Function`}</inlineCode>{` and `}<inlineCode parentName="p">{`AWS Lambda`}</inlineCode>{`.`}</p>
<_Heading level={2} id={"aws-services-used-in-the-background-tasks"} nextElement={{
      "type": "paragraph"
    }}>AWS Services Used in the Background Tasks</_Heading>
<p>{`To find out more about these services, please visit the following links:`}</p>
<ul>
<li parentName="ul"><a parentName="li" {...{
          "href": "https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-what-is.html"
        }}><inlineCode parentName="a">{`AWS Event Bridge`}</inlineCode></a></li>
<li parentName="ul"><a parentName="li" {...{
          "href": "https://docs.aws.amazon.com/step-functions/latest/dg/welcome.html"
        }}><inlineCode parentName="a">{`AWS Step Function`}</inlineCode></a></li>
<li parentName="ul"><a parentName="li" {...{
          "href": "https://docs.aws.amazon.com/lambda/latest/dg/welcome.html"
        }}><inlineCode parentName="a">{`AWS Lambda`}</inlineCode></a></li>
</ul>
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