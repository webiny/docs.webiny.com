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
  "title": "Execute Pulumi Commands",
  "description": "Learn how to execute Pulumi commands via Webiny CLI.",
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
  "title": "Introduction",
  "slug": "introduction",
  "children": []
}, {
  "title": "The pulumi Command",
  "slug": "the-pulumi-command",
  "children": []
}, {
  "title": "FAQ",
  "slug": "faq",
  "children": [{
    "title": "What Is the Package Webiny Is Using to Execute Pulumi Commands?",
    "slug": "what-is-the-package-webiny-is-using-to-execute-pulumi-commands",
    "children": []
  }, {
    "title": "Where Is the Pulumi CLI Downloaded?",
    "slug": "where-is-the-pulumi-cli-downloaded",
    "children": []
  }, {
    "title": "Which Should I Use, Webiny CLI or Pulumi CLI?",
    "slug": "which-should-i-use-webiny-cli-or-pulumi-cli",
    "children": []
  }]
}, {
  "title": "Troubleshooting",
  "slug": "troubleshooting",
  "children": [{
    "title": "I'm Receiving the --yes must be passed in to proceed when running in non-interactive mode Error",
    "slug": "i-m-receiving-the-yes-must-be-passed-in-to-proceed-when-running-in-non-interactive-mode-error",
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
<li parentName="ul">{`why you might want to execute Pulumi commands`}</li>
<li parentName="ul">{`how to execute Pulumi commands via Webiny CLI`}</li>
</ul>
</Alert>
<_Heading level={2} id={"introduction"} nextElement={{
      "type": "paragraph"
    }}>Introduction</_Heading>
<p>{`Out of the box, `}<_Link href="/docs/5.x/core-development-concepts/basics/webiny-cli">{`Webiny CLI`}</_Link>{` provides all of the essential commands that you might need in order to `}<_Link href="/docs/5.x/infrastructure/basics/preview-deployments">{`preview`}</_Link>{`, `}<_Link href="/docs/5.x/core-development-concepts/basics/project-deployment">{`deploy`}</_Link>{`, and `}<_Link href="/docs/5.x/infrastructure/basics/destroy-cloud-infrastructure">{`destroy`}</_Link>{` your project applications’ cloud infrastructure resources.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`To deploy necessary cloud infrastructure, by default, Webiny relies on Pulumi, a modern infrastructure as code framework. Find out more in the following `}<_Link href="/docs/5.x/infrastructure/pulumi-iac/iac-with-pulumi">{`IaC with Pulumi`}</_Link>{` key topic.`}</p>
</Alert>
<p>{`And while in most cases these commands are enough to get the job done, still, there is a chance that you might need to use other specific Pulumi commands, via the `}<a parentName="p" {...{
        "href": "https://www.pulumi.com/docs/reference/cli/"
      }}>{`Pulumi CLI`}</a>{`.`}</p>
<p>{`For example, in case of the `}<_Link href="/docs/5.x/core-development-concepts/basics/project-deployment#the-current-deployment-has-x-resource-s-with-pending-operations">{`pending operations`}</_Link>{` issue, you will most certainly want to execute the `}<a parentName="p" {...{
        "href": "https://www.pulumi.com/docs/reference/cli/pulumi_stack_export/"
      }}><inlineCode parentName="a">{`pulumi stack export`}</inlineCode></a>{` and `}<a parentName="p" {...{
        "href": "https://www.pulumi.com/docs/reference/cli/pulumi_import/"
      }}><inlineCode parentName="a">{`pulumi stack import`}</inlineCode></a>{` commands, in order to repair your cloud infrastructure `}<_Link href="/docs/5.x/infrastructure/pulumi-iac/iac-with-pulumi#state-files">{`state files`}</_Link>{`.`}</p>
<p>{`Unless you’ve installed the Pulumi CLI manually, trying to execute these in your terminal will result with an error, saying that the `}<inlineCode parentName="p">{`pulumi`}</inlineCode>{` command was not found. Basically, this happens because Webiny doesn’t install the Pulumi CLI globally on your system. It’s set up locally and separately for every Webiny project, by downloading necessary binaries into a temporary folder, located in your Webiny project.`}</p>
<p>{`Because of this, Webiny CLI provides the `}<inlineCode parentName="p">{`pulumi`}</inlineCode>{` command, which enables you to run any Pulumi command you might need. And not only that. Using Pulumi CLI through Webiny CLI will free you from setting some of the necessary environment variables and configuration params, because Webiny CLI handles these internally. For example, by specifying the environment via the `}<inlineCode parentName="p">{`--env`}</inlineCode>{` argument, the Webiny CLI will automatically select the right `}<a parentName="p" {...{
        "href": "https://www.pulumi.com/docs/intro/concepts/stack/"
      }}>{`Pulumi stack`}</a>{` for you. No need for extra commands that would otherwise be needed, if we were using the standalone Pulumi CLI.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`Pulumi’s `}<a parentName="p" {...{
          "href": "https://www.pulumi.com/docs/intro/concepts/programming-model/"
        }}>{`programming model`}</a>{` consists of three key concepts: Pulumi `}<a parentName="p" {...{
          "href": "https://www.pulumi.com/docs/intro/concepts/project/"
        }}>{`project`}</a>{`, `}<a parentName="p" {...{
          "href": "https://www.pulumi.com/docs/intro/concepts/programming-model/#programs"
        }}>{`program`}</a>{`, and `}<a parentName="p" {...{
          "href": "https://www.pulumi.com/docs/intro/concepts/stack/"
        }}>{`stack`}</a>{`.`}</p>
</Alert>
<_Heading level={2} id={"the-pulumi-command"} nextElement={{
      "type": "paragraph"
    }}>The<code>pulumi</code>Command</_Heading>
<p>{`Using the `}<inlineCode parentName="p">{`pulumi`}</inlineCode>{` command is as simple as follows:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`# Run the "stack export" command within the "api" project application,
# for the "dev" environment ("dev" Pulumi stack)
yarn webiny pulumi api --env dev -- stack export

# Run the "config set foo bar --secret" command within the "apps/admin" project
# application, for the "dev" environment ("dev" Pulumi stack)
yarn webiny pulumi apps/admin --env dev -- config set foo bar --secret

# Run the "refresh" command within the "apps/website" project application,
# for the "prod" environment ("prod" Pulumi stack)
yarn webiny pulumi apps/website --env prod -- refresh`}
</Editor>
<p>{`As we can see, upon executing the `}<inlineCode parentName="p">{`pulumi`}</inlineCode>{` command, we must provide three things:`}</p>
<ol>
<li parentName="ol">{`the project application folder (for example `}<inlineCode parentName="li">{`apps/website`}</inlineCode>{`)`}</li>
<li parentName="ol">{`the environment, via the `}<inlineCode parentName="li">{`--env`}</inlineCode>{` argument`}</li>
<li parentName="ol">{`the actual Pulumi command`}</li>
</ol>
<p>{`Note that the `}<inlineCode parentName="p">{`--`}</inlineCode>{`, used in shown examples, is not an error. The actual Pulumi command you want to execute must come after it, otherwise you will end up with unexpected results.`}</p>
<_Heading level={2} id={"faq"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>FAQ</_Heading>
<_Heading level={3} id={"what-is-the-package-webiny-is-using-to-execute-pulumi-commands"} nextElement={{
      "type": "paragraph"
    }}>What Is the Package Webiny Is Using to Execute Pulumi Commands?</_Heading>
<p>{`We are using our own `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/tree/next/packages/pulumi-sdk"
      }}>{`Pulumi SDK (@webiny/pulumi-sdk)`}</a>{`, which is, essentially, a small wrapper over the original Pulumi CLI, that allows us to use it programmatically, via JavaScript code.`}</p>
<_Heading level={3} id={"where-is-the-pulumi-cli-downloaded"} nextElement={{
      "type": "paragraph"
    }}>Where Is the Pulumi CLI Downloaded?</_Heading>
<p>{`Pulumi CLI is downloaded into the following folder in your Webiny project: `}<inlineCode parentName="p">{`node_modules/@webiny/pulumi-sdk/pulumi`}</inlineCode>{`.`}</p>
<_Heading level={3} id={"which-should-i-use-webiny-cli-or-pulumi-cli"} nextElement={{
      "type": "paragraph"
    }}>Which Should I Use, Webiny CLI or Pulumi CLI?</_Heading>
<p>{`Although both can be used to get the job done, we recommend you always rely on the Webiny CLI. This is because of the reasons mentioned in this guide:`}</p>
<ul>
<li parentName="ul">{`no need to install the Pulumi CLI manually`}</li>
<li parentName="ul">{`no need to set extra environment variables and configuration params`}</li>
<li parentName="ul">{`anything that can be achieved with the Pulumi CLI can also be achieved with Webiny CLI`}</li>
</ul>
<_Heading level={2} id={"troubleshooting"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Troubleshooting</_Heading>
<_Heading level={3} id={"i-m-receiving-the-yes-must-be-passed-in-to-proceed-when-running-in-non-interactive-mode-error"} nextElement={{
      "type": "paragraph"
    }}>I&#39;m Receiving the<code>--yes must be passed in to proceed when running in non-interactive mode</code>Error</_Heading>
<p>{`This error may sometimes pop up because `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/tree/next/packages/pulumi-sdk"
      }}>{`Webiny’s Pulumi SDK`}</a>{` package runs all Pulumi commands in a non-interactive mode. Because of this, sometimes you will need to pass the `}<inlineCode parentName="p">{`--yes`}</inlineCode>{` flag in order to confirm the execution of the Pulumi command you’re about to execute.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;