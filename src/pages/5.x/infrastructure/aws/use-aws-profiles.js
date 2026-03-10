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
  "title": "Use AWS Profiles",
  "description": "How to deploy your Webiny project using different AWS profiles.",
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
  "title": "AWS Profiles",
  "slug": "aws-profiles",
  "children": []
}, {
  "title": "How to Use",
  "slug": "how-to-use",
  "children": [{
    "title": "Using .env File",
    "slug": "using-env-file",
    "children": []
  }, {
    "title": "Using Terminal",
    "slug": "using-terminal",
    "children": []
  }]
}, {
  "title": "FAQ",
  "slug": "faq",
  "children": [{
    "title": "Is There a Way to Check if My Profile Was Set Properly?",
    "slug": "is-there-a-way-to-check-if-my-profile-was-set-properly",
    "children": []
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
<li parentName="ul">{`how to deploy your Webiny project using different AWS profiles`}</li>
</ul>
</Alert>
<_Heading level={2} id={"aws-profiles"} nextElement={{
      "type": "paragraph"
    }}>AWS Profiles</_Heading>
<p>{`AWS profiles enable you to store multiple AWS credentials on your system, and then, when the time comes, to use specific credentials in order to perform a command against the AWS cloud.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`Read more about profiles and how to set them up in the official `}<a parentName="p" {...{
          "href": "https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html"
        }}>{`AWS documentation article`}</a>{`.`}</p>
</Alert>
<_Heading level={2} id={"how-to-use"} nextElement={{
      "type": "paragraph"
    }}>How to Use</_Heading>
<p>{`While executing deployment-related commands via the `}<_Link href="/docs/5.x/core-development-concepts/basics/webiny-cli">{`Webiny CLI`}</_Link>{`, for example `}<_Link href="/docs/5.x/core-development-concepts/basics/project-deployment"><inlineCode parentName="p">{`deploy`}</inlineCode></_Link>{` or `}<_Link href="/docs/5.x/infrastructure/basics/destroy-cloud-infrastructure"><inlineCode parentName="p">{`destroy`}</inlineCode></_Link>{`, if not specified, Webiny will always use the `}<inlineCode parentName="p">{`default`}</inlineCode>{` AWS profile.`}</p>
<p>{`A different profile can be specified via the `}<inlineCode parentName="p">{`AWS_PROFILE`}</inlineCode>{` environment variable, which you can set in a couple of ways.`}</p>
<_Heading level={3} id={"using-env-file"} nextElement={{
      "type": "paragraph"
    }}>Using<code>.env</code>File</_Heading>
<p>{`The easiest way to do it would be using the `}<inlineCode parentName="p">{`.env`}</inlineCode>{` file, located in your project root, for example:`}</p>
<Editor title=".env" lang="bash" mdxType="Editor">
{`AWS_PROFILE=my-profile`}
</Editor>
<p>{`The advantage of this approach is that you don’t need to set the `}<inlineCode parentName="p">{`AWS_PROFILE`}</inlineCode>{` via your terminal, but it always stays in the `}<inlineCode parentName="p">{`.env`}</inlineCode>{` file, which is automatically loaded when executing mentioned deployment-related commands.`}</p>
<_Heading level={3} id={"using-terminal"} nextElement={{
      "type": "paragraph"
    }}>Using Terminal</_Heading>
<p>{`Apart from setting it via the shown `}<inlineCode parentName="p">{`.env`}</inlineCode>{` file, the `}<inlineCode parentName="p">{`AWS_PROFILE`}</inlineCode>{` environment variable can also be set using a terminal of your choice, and a command that’s available on your operating system.`}</p>
<p>{`For example, on Linux or MacOS, you can use the `}<a parentName="p" {...{
        "href": "https://www.geeksforgeeks.org/export-command-in-linux-with-examples/"
      }}><inlineCode parentName="a">{`export`}</inlineCode></a>{` command:`}</p>
<Editor title="" lang="null" mdxType="Editor">
{`export AWS_PROFILE=my-profile`}
</Editor>
<p>{`On Windows, you can utilize the `}<a parentName="p" {...{
        "href": "https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/set_1"
      }}><inlineCode parentName="a">{`set`}</inlineCode></a>{` and `}<a parentName="p" {...{
        "href": "https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/setx"
      }}><inlineCode parentName="a">{`setx`}</inlineCode></a>{` commands, for example:`}</p>
<Editor title="" lang="null" mdxType="Editor">
{`setx AWS_PROFILE my-profile`}
</Editor>
<p>{`Once the `}<inlineCode parentName="p">{`AWS_PROFILE`}</inlineCode>{` has been properly set via one of the shown methods, you can proceed with the deployment of your Webiny project.`}</p>
<_Heading level={2} id={"faq"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>FAQ</_Heading>
<_Heading level={3} id={"is-there-a-way-to-check-if-my-profile-was-set-properly"} nextElement={{
      "type": "paragraph"
    }}>Is There a Way to Check if My Profile Was Set Properly?</_Heading>
<p>{`If you have the `}<a parentName="p" {...{
        "href": "https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html"
      }}>{`AWS CLI`}</a>{` installed on your system, in your terminal, you can run the following command:`}</p>
<Editor title="" lang="null" mdxType="Editor">
{`aws sts get-caller-identity`}
</Editor>
<p>{`This should give an output similar to the following:`}</p>
<Editor title="" lang="null" mdxType="Editor">
{`{
    "Account": "x",
    "UserId": "y",
    "Arn": "arn:aws:iam::x:user/z"
}`}
</Editor>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;