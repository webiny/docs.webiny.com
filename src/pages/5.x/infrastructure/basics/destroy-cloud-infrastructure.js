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
  "title": "Destroy Cloud Infrastructure",
  "description": "Learn how to destroy the cloud infrastructure deployed for your project applications, using the Webiny CLI.",
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
  "title": "The destroy Command",
  "slug": "the-destroy-command",
  "children": []
}, {
  "title": "Debugging",
  "slug": "debugging",
  "children": []
}, {
  "title": "FAQ",
  "slug": "faq",
  "children": [{
    "title": "How Do I Destroy Cloud Infrastructure Resources Deployed Into the prod Environment? I'm Receiving a Warning About Protected Cloud Infrastructure Resources.",
    "slug": "how-do-i-destroy-cloud-infrastructure-resources-deployed-into-the-prod-environment-i-m-receiving-a-warning-about-protected-cloud-infrastructure-resources",
    "children": []
  }]
}, {
  "title": "Troubleshooting",
  "slug": "troubleshooting",
  "children": [{
    "title": "Upon Destroying My Webiny Project, I've Received a \"PreconditionFailed\" Error Message. What Can I Do?",
    "slug": "upon-destroying-my-webiny-project-i-ve-received-a-precondition-failed-error-message-what-can-i-do",
    "children": []
  }, {
    "title": "Destroying My Project Takes a Long Time to Finish.",
    "slug": "destroying-my-project-takes-a-long-time-to-finish",
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
<li parentName="ul">{`how to destroy cloud infrastructure previously deployed for project applications (possibly into multiple environments)`}</li>
</ul>
</Alert>
<_Heading level={2} id={"the-destroy-command"} nextElement={{
      "type": "paragraph"
    }}>The<code>destroy</code>Command</_Heading>
<p>{`This command lets you destroy cloud infrastructure previously deployed within a `}<_Link href="/docs/5.x/core-development-concepts/project-organization/project-applications-and-packages">{`project application`}</_Link>{`. `}{/* This can be handy if you want to avoid completely destroying all cloud infrastructure that was deployed by the default project applications, which is what the shown `destroy` command does. */}</p>
<p>{`As its first argument, the `}<inlineCode parentName="p">{`destroy`}</inlineCode>{` command receives the path to the project application folder. You also need to specify the environment into which the cloud infrastructure was previously deployed, which is specified via the `}<inlineCode parentName="p">{`--env`}</inlineCode>{` argument.`}</p>
{/* Note that, unlike with the `destroy` command, the `--env` argument is not optional and it needs to be provided explicitly. */}
<p>{`The following destroy commands destroy cloud infrastructure deployed for four project applications, all previously deployed into the `}<inlineCode parentName="p">{`dev`}</inlineCode>{` environment:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`yarn webiny destroy website --env dev
yarn webiny destroy admin --env dev
yarn webiny destroy api --env dev
yarn webiny destroy core --env dev`}
</Editor>
<p>{`To fully destroy your project, you can also run the command without specifying the project application folder:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`yarn webiny destroy --env dev --confirm-destroy-env dev`}
</Editor>
<p>{`Note that, upon doing this, the command will ask for a confirmation of the environment you wish to destroy, via the `}<inlineCode parentName="p">{`--confirm-destroy-env`}</inlineCode>{` flag.`}</p>
<_Heading level={2} id={"debugging"} nextElement={{
      "type": "paragraph"
    }}>Debugging</_Heading>
<p>{`If you run into an error while running the `}<inlineCode parentName="p">{`webiny destroy`}</inlineCode>{` command, to get additional information and logs about it, you can append the `}<inlineCode parentName="p">{`--debug`}</inlineCode>{` argument. For example:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`yarn webiny destroy api --env dev --debug`}
</Editor>
<p>{`This can significantly help in debugging underlying deployment (`}<_Link href="/docs/5.x/infrastructure/pulumi-iac/iac-with-pulumi">{`Pulumi`}</_Link>{`) errors, since without it, in some cases the returned error report doesn’t contain enough useful information. We’ve also seen cases in which the report would actually be misleading and even incorrect, making the debugging process much harder for the user.`}</p>
<_Heading level={2} id={"faq"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>FAQ</_Heading>
<_Heading level={3} id={"how-do-i-destroy-cloud-infrastructure-resources-deployed-into-the-prod-environment-i-m-receiving-a-warning-about-protected-cloud-infrastructure-resources"} nextElement={{
      "type": "paragraph"
    }}>How Do I Destroy Cloud Infrastructure Resources Deployed Into the<code>prod</code>Environment? I&#39;m Receiving a Warning About Protected Cloud Infrastructure Resources.</_Heading>
<p>{`When deploying into the `}<inlineCode parentName="p">{`prod`}</inlineCode>{` environment, some of the cloud infrastructure resources that Webiny deploys for you as part of the `}<_Link href="/docs/5.x/architecture/core/overview">{`Core project application`}</_Link>{` are marked as `}<a parentName="p" {...{
        "href": "https://www.pulumi.com/docs/intro/concepts/resources/#protect"
      }}>{`protected`}</a>{`.`}</p>
<blockquote>
<p parentName="blockquote">{`The `}<inlineCode parentName="p">{`protect`}</inlineCode>{` option marks a resource as protected. A protected resource cannot be deleted directly. Instead, you must first set `}<inlineCode parentName="p">{`protect: false`}</inlineCode>{` and run `}<inlineCode parentName="p">{`pulumi up`}</inlineCode>{`. Then you can delete the resource by removing the line of code or by running `}<inlineCode parentName="p">{`pulumi destroy`}</inlineCode>{`. The default is to inherit this value from the parent resource, and `}<inlineCode parentName="p">{`false`}</inlineCode>{` for resources without a parent.`}</p>
</blockquote>
<Alert type="info" mdxType="Alert">
<p>{`Within a Webiny project, note that the `}<inlineCode parentName="p">{`pulumi up`}</inlineCode>{` and `}<inlineCode parentName="p">{`pulumi destroy`}</inlineCode>{` commands are run via the `}<_Link href="/docs/5.x/core-development-concepts/basics/project-deployment"><inlineCode parentName="p">{`webiny deploy`}</inlineCode></_Link>{` and `}<_Link href="/docs/5.x/infrastructure/basics/destroy-cloud-infrastructure"><inlineCode parentName="p">{`webiny destroy`}</inlineCode></_Link>{` commands, respectively.`}</p>
</Alert>
<p>{`So, in order to destroy all cloud infrastructure resources deployed into the `}<inlineCode parentName="p">{`prod`}</inlineCode>{` environment, we need to first pass `}<inlineCode parentName="p">{`protect: false`}</inlineCode>{` upon calling the `}<inlineCode parentName="p">{`createCoreApp`}</inlineCode>{` function in `}<inlineCode parentName="p">{`apps/core/webiny.application.ts`}</inlineCode>{`:`}</p>
<Editor title="" lang="ts" mdxType="Editor">
{`import { createCoreApp } from "@webiny/serverless-cms-aws";

export default createCoreApp({
  protect: false
});`}
</Editor>
<p>{`Once that’s in place, run the `}<_Link href="/docs/5.x/core-development-concepts/basics/project-deployment"><inlineCode parentName="p">{`webiny deploy`}</inlineCode></_Link>{` command to apply changes, and finally, run the `}<_Link href="/docs/5.x/infrastructure/basics/destroy-cloud-infrastructure"><inlineCode parentName="p">{`webiny destroy`}</inlineCode></_Link>{` to destroy everything:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`# Removes the protection from mission-critical cloud infrastructure resources.
yarn webiny deploy core --env prod

# At this point, the protection has been removed. We can now run the destroy command.
yarn webiny destroy core --env prod`}
</Editor>
<p>{`Once that has been destroyed, you can proceed with destroying the rest of the project applications, which do not contain any protected cloud infrastructure resources.`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`yarn webiny destroy api --env prod
yarn webiny destroy admin --env prod
yarn webiny destroy website --env prod`}
</Editor>
<_Heading level={2} id={"troubleshooting"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Troubleshooting</_Heading>
<_Heading level={3} id={"upon-destroying-my-webiny-project-i-ve-received-a-precondition-failed-error-message-what-can-i-do"} nextElement={{
      "type": "paragraph"
    }}>Upon Destroying My Webiny Project, I&#39;ve Received a &quot;PreconditionFailed&quot; Error Message. What Can I Do?</_Heading>
<p>{`On multiple occasions, we’ve seen users receive the following error upon destroying their Webiny project:`}</p>
<Editor title="" lang="text" mdxType="Editor">
{`  pulumi:pulumi:Stack (website-dev):
    error: update failed

  aws:cloudfront:Distribution (delivery):
    error: deleting urn:pulumi:dev::website::aws:cloudfront/distribution:Distribution::delivery: 1 error occurred:
        * CloudFront Distribution {DISTRIBUTION_ID} cannot be deleted: PreconditionFailed: The request failed because it didn't meet the preconditions in one or more request-header fields.
        status code: 412, request id: {REQUEST_ID}`}
</Editor>
<p>{`As we can see, the error is related to deleting an Amazon Cloudfront distribution that’s deployed as part of the `}<strong parentName="p">{`Website`}</strong>{` project application.`}</p>
<p>{`As mentioned in `}<a parentName="p" {...{
        "href": "https://github.com/pulumi/pulumi-aws/issues/308#issuecomment-415928729"
      }}>{`this GitHub issue`}</a>{`, this error can happen because of the fact that many operations within AWS silently mutate Cloudfront distributions’ `}<a parentName="p" {...{
        "href": "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/RequestAndResponseBehaviorCustomOrigin.html"
      }}>{`ETAG`}</a>{`. This causes the subsequent update (delete) attempts to fail.`}</p>
<p>{`Ultimately, this issue can be resolved by refreshing your Pulumi state files, by running the following command:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`yarn webiny pulumi website --env dev -- refresh --skip-preview --yes`}
</Editor>
<_Heading level={3} id={"destroying-my-project-takes-a-long-time-to-finish"} nextElement={{
      "type": "paragraph"
    }}>Destroying My Project Takes a Long Time to Finish.</_Heading>
<p>{`We’re aware of this fact, and this is mainly because of the `}<a parentName="p" {...{
        "href": "https://aws.amazon.com/opensearch-service/"
      }}>{`Amazon OpenSearch Service`}</a>{`. While other cloud infrastructure resources get destroyed reasonably fast, this service can take anywhere from 15 to 30 minutes to destroy itself.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;