/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/core-development-concepts/basics/assets/project-deployment/list-aws-resources.png'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Project Deployment",
  "description": "Learn how to deploy your Webiny project and its project applications, using the Webiny CLI.",
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
  "title": "Before We Begin",
  "slug": "before-we-begin",
  "children": [{
    "title": "AWS Credentials",
    "slug": "aws-credentials",
    "children": []
  }, {
    "title": "Tagged Resources",
    "slug": "tagged-resources",
    "children": []
  }]
}, {
  "title": "The deploy Command",
  "slug": "the-deploy-command",
  "children": [{
    "title": "Deploying the Whole Project",
    "slug": "deploying-the-whole-project",
    "children": []
  }, {
    "title": "Environments",
    "slug": "environments",
    "children": []
  }, {
    "title": "Deploying a Project Application",
    "slug": "deploying-a-project-application",
    "children": []
  }]
}, {
  "title": "List Cloud Infrastructure Resources",
  "slug": "list-cloud-infrastructure-resources",
  "children": []
}, {
  "title": "Modify Cloud Infrastructure",
  "slug": "modify-cloud-infrastructure",
  "children": []
}, {
  "title": "Debugging",
  "slug": "debugging",
  "children": []
}, {
  "title": "Building the Application Code",
  "slug": "building-the-application-code",
  "children": []
}, {
  "title": "Troubleshooting",
  "slug": "troubleshooting",
  "children": [{
    "title": "Deploying My Project Takes a Long Time to Finish",
    "slug": "deploying-my-project-takes-a-long-time-to-finish",
    "children": []
  }, {
    "title": "SubscriptionRequiredException: The AWS Access Key Id Needs a Subscription for the Service",
    "slug": "subscription-required-exception-the-aws-access-key-id-needs-a-subscription-for-the-service",
    "children": []
  }, {
    "title": "The Current Deployment Has X Resource(s) With Pending Operations:",
    "slug": "the-current-deployment-has-x-resource-s-with-pending-operations",
    "children": [{
      "title": "One of the Previous Deployments Has Been Interrupted",
      "slug": "one-of-the-previous-deployments-has-been-interrupted"
    }, {
      "title": "Another Deployment Currently in Progress",
      "slug": "another-deployment-currently-in-progress"
    }]
  }, {
    "title": "Failed to Read Pulumi Credentials File. Please Re-Run pulumi login.",
    "slug": "failed-to-read-pulumi-credentials-file-please-re-run-pulumi-login",
    "children": []
  }]
}, {
  "title": "FAQ",
  "slug": "faq",
  "children": [{
    "title": "Can I Deploy Webiny on Personal Server or Platforms Like Docker or Digital Ocean?",
    "slug": "can-i-deploy-webiny-on-personal-server-or-platforms-like-docker-or-digital-ocean",
    "children": []
  }]
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
const Editor = makeShortcode("Editor");
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
<li parentName="ul">{`how to deploy your project into multiple environments`}</li>
<li parentName="ul">{`how to deploy a single project application into multiple environments`}</li>
</ul>
</Alert>
<_Heading level={2} id={"introduction"} nextElement={{
      "type": "paragraph"
    }}>Introduction</_Heading>
<p>{`Webiny makes it easy to deploy your project, using the `}<_Link href="/docs/5.x/core-development-concepts/basics/webiny-cli">{`Webiny CLI`}</_Link>{` and `}<_Link href="/docs/5.x/infrastructure/pulumi-iac/iac-with-pulumi">{`Pulumi`}</_Link>{` as the default infrastructure as code and deployment solution. You can also easily deploy your project into multiple `}<_Link href="/docs/5.x/infrastructure/basics/environments">{`environments`}</_Link>{`, which is covered in this guide as well.`}</p>
<_Heading level={2} id={"before-we-begin"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Before We Begin</_Heading>
<_Heading level={3} id={"aws-credentials"} nextElement={{
      "type": "paragraph"
    }}>AWS Credentials</_Heading>
<p>{`In order to deploy your Webiny project, you need to have AWS Credentials properly configured on your system. Furthermore, you can also deploy your project using a specific AWS profile.`}</p>
<p>{`To learn more about configuring your AWS credentials, please check out the `}<_Link href="/docs/5.x/infrastructure/aws/configure-aws-credentials">{`Configure AWS Credentials`}</_Link>{` guide. If you’re looking for information on how to use different AWS profiles, feel free to skip to the `}<_Link href="/docs/5.x/infrastructure/aws/use-aws-profiles">{`Use AWS Profiles`}</_Link>{` guide.`}</p>
<_Heading level={3} id={"tagged-resources"} nextElement={{
      "type": "paragraph"
    }}>Tagged Resources</_Heading>
<p>{`Note that, in order to more easily filter out the cloud infrastructure resources deployed by your Webiny project, most of the resources are tagged with the following tags:`}</p>
<ul>
<li parentName="ul"><inlineCode parentName="li">{`WbyProjectName`}</inlineCode>{` - the name of your project (declared in your `}<inlineCode parentName="li">{`webiny.project.js`}</inlineCode>{` file)`}</li>
<li parentName="ul"><inlineCode parentName="li">{`WbyEnvironment`}</inlineCode>{` - the environment of which the resource is part of`}</li>
</ul>
<_Heading level={2} id={"the-deploy-command"} nextElement={{
      "type": "paragraph"
    }}>The<code>deploy</code>Command</_Heading>
<p>{`The `}<inlineCode parentName="p">{`deploy`}</inlineCode>{` command can be used to completely deploy your project, or just a specific project application.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`As explained in the `}<_Link href="/docs/5.x/infrastructure/basics/introduction">{`introduction to deployment`}</_Link>{` key topic, doing a complete project deployment entails deploying all of its `}<_Link href="/docs/5.x/core-development-concepts/project-organization/project-applications-and-packages">{`project applications`}</_Link>{`.`}</p>
</Alert>
<_Heading level={3} id={"deploying-the-whole-project"} nextElement={{
      "type": "paragraph"
    }}>Deploying the Whole Project</_Heading>
<p>{`To completely deploy your project, simply run the following command in your terminal of choice:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`yarn webiny deploy`}
</Editor>
<p>{`This command deploys all of the four applications that are, by default, included in every Webiny project. It deploys them in the following order:`}</p>
<ol>
<li parentName="ol"><strong parentName="li">{`Core`}</strong>{` (`}<inlineCode parentName="li">{`./apps/core`}</inlineCode>{`) - defines core cloud infrastructure resources`}</li>
<li parentName="ol"><strong parentName="li">{`API`}</strong>{` (`}<inlineCode parentName="li">{`./apps/api`}</inlineCode>{`) - your project’s (GraphQL) HTTP API`}</li>
<li parentName="ol"><strong parentName="li">{`Admin`}</strong>{` (`}<inlineCode parentName="li">{`./apps/admin`}</inlineCode>{`) - your admin area`}</li>
<li parentName="ol"><strong parentName="li">{`Website`}</strong>{` (`}<inlineCode parentName="li">{`./apps/website`}</inlineCode>{`) - your public website`}</li>
</ol>
<Alert type="info" mdxType="Alert">
<p>{`Note that the first deployment can take up to 20 minutes! So even though it might look like nothing is happening in the terminal, please be patient and let the process finish. If something went wrong, an error will be shown, and the process will exit with an appropriate error code.`}</p>
</Alert>
<_Heading level={3} id={"environments"} nextElement={{
      "type": "paragraph"
    }}>Environments</_Heading>
<p>{`In general, when deploying projects or project applications, an `}<_Link href="/docs/5.x/infrastructure/basics/environments">{`environment`}</_Link>{` must be specified. The above shown `}<inlineCode parentName="p">{`deploy`}</inlineCode>{` command deploys your project into the `}<inlineCode parentName="p">{`dev`}</inlineCode>{` environment by default, but you can also specify a different environment with the `}<inlineCode parentName="p">{`--env`}</inlineCode>{` argument. For example, to deploy your project into the `}<inlineCode parentName="p">{`prod`}</inlineCode>{` environment, you can run the following command:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`yarn webiny deploy --env prod`}
</Editor>
<_Heading level={3} id={"deploying-a-project-application"} nextElement={{
      "type": "paragraph"
    }}>Deploying a Project Application</_Heading>
<p>{`To deploy a specific project application, located within your Webiny project, simply append the path to the folder in which the project application resides, for example:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`yarn webiny deploy core --env dev
yarn webiny deploy api --env dev
yarn webiny deploy admin --env dev
yarn webiny deploy website --env dev`}
</Editor>
<p>{`Note that when deploying a specific project application, the environment (`}<inlineCode parentName="p">{`--env`}</inlineCode>{`) parameter is not optional. It must always be provided.`}</p>
<p>{`Also, note that the four project applications depend on each other. `}<strong parentName="p">{`Website`}</strong>{` and `}<strong parentName="p">{`Admin`}</strong>{` depend on `}<strong parentName="p">{`API`}</strong>{`, and `}<strong parentName="p">{`API`}</strong>{` depends on the `}<strong parentName="p">{`Core`}</strong>{` project application. So, when performing a Webiny project deployment for the first time, if you choose to deploy project applications one by one, make sure to deploy them in the correct order, as shown in the list of commands above.`}</p>
<_Heading level={2} id={"list-cloud-infrastructure-resources"} nextElement={{
      "type": "paragraph"
    }}>List Cloud Infrastructure Resources</_Heading>
<p>{`To list all cloud infrastructure resources deployed as part of a particular project application, you can run the following command:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`yarn webiny pulumi {folder} --env {env} -- stack --show-ids`}
</Editor>
<p>{`For example, to list all cloud infrastructure resources deployed as part of the `}<strong parentName="p">{`API`}</strong>{` project
application, deployed into the `}<inlineCode parentName="p">{`dev`}</inlineCode>{` environment, you can run the following command:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`yarn webiny pulumi api --env dev -- stack --show-ids`}
</Editor>
<p>{`Running the above command should produce the following output:`}</p>
<Image src={_Image1} alt={"Previewing Stack command"} mdxType="Image" />
<p>{`Similarly, you can use the following commands to list all cloud infrastructure resources
deployed as part of the `}<strong parentName="p">{`Admin Area`}</strong>{` and `}<strong parentName="p">{`Website`}</strong>{` project applications, into the `}<inlineCode parentName="p">{`dev`}</inlineCode>{` environment:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`yarn webiny pulumi admin --env dev -- stack --show-ids
yarn webiny pulumi website --env dev -- stack --show-ids`}
</Editor>
<Alert type="info" mdxType="Alert">
<p>{`For more information on the `}<inlineCode parentName="p">{`webiny pulumi`}</inlineCode>{` command, please visit the `}<_Link href="/docs/5.x/infrastructure/pulumi-iac/execute-pulumi-commands">{`Execute Pulumi Commands`}</_Link>{` guide.`}</p>
</Alert>
<Alert type="success" mdxType="Alert">
<p>{`By default, every Webiny project consists of four project applications: `}<strong parentName="p">{`Core`}</strong>{` (`}<inlineCode parentName="p">{`apps/api`}</inlineCode>{`), `}<strong parentName="p">{`API`}</strong>{` (`}<inlineCode parentName="p">{`apps/api`}</inlineCode>{`), `}<strong parentName="p">{`Admin Area`}</strong>{` (`}<inlineCode parentName="p">{`apps/admin`}</inlineCode>{`), and `}<strong parentName="p">{`Website`}</strong>{` (`}<inlineCode parentName="p">{`apps/website`}</inlineCode>{`).
Read more about project organization in the `}<_Link href="/docs/5.x/core-development-concepts/project-organization/project-applications-and-packages">{`Project Organization`}</_Link>{` key topics section.`}</p>
</Alert>
<_Heading level={2} id={"modify-cloud-infrastructure"} nextElement={{
      "type": "paragraph"
    }}>Modify Cloud Infrastructure</_Heading>
<p>{`Although the cloud infrastructure resources that Webiny deploys are already configured in the best possible manner, there are still cases where some modifications might be needed. In some cases even, the deployed cloud infrastructure needs to be expanded by introducing additional resources into the mix.`}</p>
<p>{`To learn more, please check out the `}<_Link href="/docs/5.x/infrastructure/basics/modify-cloud-infrastructure">{`Modify Cloud Infrastructure`}</_Link>{` article.`}</p>
<_Heading level={2} id={"debugging"} nextElement={{
      "type": "paragraph"
    }}>Debugging</_Heading>
<p>{`If you run into an error while running the `}<inlineCode parentName="p">{`webiny deploy`}</inlineCode>{` command, to get additional information and logs about it, you can append the `}<inlineCode parentName="p">{`--debug`}</inlineCode>{` argument. For example:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`yarn webiny deploy api --env dev --debug`}
</Editor>
<p>{`This can significantly help in debugging underlying deployment (`}<_Link href="/docs/5.x/infrastructure/pulumi-iac/iac-with-pulumi">{`Pulumi`}</_Link>{`) errors, since without it, in some cases the returned error report doesn’t contain enough useful information. We’ve also seen cases in which the report would actually be misleading and even incorrect, making the debugging process much harder for the user.`}</p>
<_Heading level={2} id={"building-the-application-code"} nextElement={{
      "type": "paragraph"
    }}>Building the Application Code</_Heading>
<p>{`It’s worth mentioning that the deployment commands shown above also build your application code. They perform this task by just running the following `}<inlineCode parentName="p">{`workspaces run`}</inlineCode>{` command:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`yarn webiny workspaces run build --folder {STACK_FOLDER}`}
</Editor>
<p>{`The command first finds all packages that are located in the project application folder. Then, for every found package, it runs the `}<inlineCode parentName="p">{`build`}</inlineCode>{` command that’s specified in the `}<inlineCode parentName="p">{`webiny.config.ts`}</inlineCode>{` - a configuration file that every package possesses. If the `}<inlineCode parentName="p">{`build`}</inlineCode>{` command is defined, it gets executed, otherwise, the process just continues with the next package.`}</p>
<_Heading level={2} id={"troubleshooting"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Troubleshooting</_Heading>
<_Heading level={3} id={"deploying-my-project-takes-a-long-time-to-finish"} nextElement={{
      "type": "paragraph"
    }}>Deploying My Project Takes a Long Time to Finish</_Heading>
<p>{`We’re aware of this fact, and this is mainly because of the `}<a parentName="p" {...{
        "href": "https://aws.amazon.com/opensearch-service/"
      }}>{`Amazon OpenSearch Service`}</a>{`. While other cloud infrastructure resources get deployed reasonably fast, this service can take anywhere from 15 to 30 minutes to become ready.`}</p>
<_Heading level={3} id={"subscription-required-exception-the-aws-access-key-id-needs-a-subscription-for-the-service"} nextElement={{
      "type": "paragraph"
    }}>SubscriptionRequiredException: The AWS Access Key Id Needs a Subscription for the Service</_Heading>
<p>{`In some cases, upon deploying a new Webiny project, it’s possible for users to experience the following error being thrown in their terminal:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`SubscriptionRequiredException: The AWS Access Key Id needs a subscription for the service`}
</Editor>
<p>{`The following are some of the reasons why you might be receiving this error:`}</p>
<ol>
<li parentName="ol">{`you didn’t verify your phone number`}</li>
<li parentName="ol">{`you didn’t verify your payment method`}</li>
<li parentName="ol">{`you didn’t select a support subscription (free or other)`}</li>
<li parentName="ol">{`if you created a new AWS account, it wasn’t yet processed on the AWS side`}</li>
</ol>
<p>{`The account signup and verification process can be completed via `}<a parentName="p" {...{
        "href": "https://portal.aws.amazon.com/billing/signup?type=resubscribe#/resubscribed"
      }}>{`https://portal.aws.amazon.com/billing/signup?type=resubscribe#/resubscribed`}</a>{`.`}</p>
<_Heading level={3} id={"the-current-deployment-has-x-resource-s-with-pending-operations"} nextElement={{
      "type": "paragraph"
    }}>The Current Deployment Has X Resource(s) With Pending Operations:</_Heading>
<p>{`When deploying your project applications, you might have received an error similar to the following:`}</p>
<blockquote>
<p parentName="blockquote">{`error: the current deployment has 1 resource(s) with pending operations:`}</p>
<p parentName="blockquote">{`*`}{` urn:pulumi:dev::website::aws:s3/bucket:Bucket$aws:s3/bucketObject:BucketObject::go.js, interrupted while creating`}</p>
<p parentName="blockquote">{`These resources are in an unknown state because the Pulumi CLI was interrupted while
waiting for changes to these resources to complete. You should confirm whether or not the
operations listed completed successfully by checking the state of the appropriate provider.
For example, if you are using AWS, you can confirm using the AWS Console.`}</p>
<p parentName="blockquote">{`Once you have confirmed the status of the interrupted operations, you can repair your stack
using ‘pulumi stack export’ to export your stack to a file. For each operation that succeeded,
remove that operation from the “pending_operations” section of the file. Once this is complete,
use ‘pulumi stack import’ to import the repaired stack.`}</p>
</blockquote>
<p>{`This error can occur if one of the previous deployments of your `}<_Link href="/docs/5.x/core-development-concepts/project-organization/project-applications-and-packages">{`project application`}</_Link>{` has been `}<_Link href="/docs/5.x/core-development-concepts/basics/project-deployment#one-of-the-previous-deployments-has-been-interrupted">{`interrupted`}</_Link>{`, or another deployment is `}<_Link href="/docs/5.x/core-development-concepts/basics/project-deployment#another-deployment-currently-in-progress">{`currently in progress`}</_Link>{`.`}</p>
<_Heading level={4} id={"one-of-the-previous-deployments-has-been-interrupted"} nextElement={{
      "type": "paragraph"
    }}>One of the Previous Deployments Has Been Interrupted</_Heading>
<p>{`In case of the former, you’ll need to open your Pulumi state files, and find all of the resources whose deployment status is in `}<inlineCode parentName="p">{`pending_operations`}</inlineCode>{` state. If we’re talking about local development environment, those files are located in your `}<inlineCode parentName="p">{`.pulumi`}</inlineCode>{` files and can be manually edited. Otherwise, you’ll need to use the mentioned `}<a parentName="p" {...{
        "href": "https://www.pulumi.com/docs/reference/cli/pulumi_stack_export/"
      }}><inlineCode parentName="a">{`pulumi stack export`}</inlineCode></a>{` and `}<a parentName="p" {...{
        "href": "https://www.pulumi.com/docs/reference/cli/pulumi_import/"
      }}><inlineCode parentName="a">{`pulumi stack import`}</inlineCode></a>{` commands.`}</p>
<p>{`If you didn’t install the Pulumi CLI manually by yourself, which is usually the case for most Webiny users, you can execute the above commands via the `}<_Link href="/docs/5.x/infrastructure/pulumi-iac/execute-pulumi-commands"><inlineCode parentName="p">{`pulumi`}</inlineCode></_Link>{` command, for example:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`# Export state files for "apps/website" project application ("dev" environment).
yarn webiny pulumi website --env dev -- stack export

# Export state files for the "api" project application ("prod" environment).
yarn webiny pulumi api --env prod -- stack export`}
</Editor>
<Alert type="info" mdxType="Alert">
<p>{`Learn more about cloud infrastructure state files in the `}<_Link href="/docs/5.x/core-development-concepts/ci-cd/cloud-infrastructure-state-files">{`Cloud Infrastructure State Files`}</_Link>{` development workflows guide.`}</p>
</Alert>
<_Heading level={4} id={"another-deployment-currently-in-progress"} nextElement={{
      "type": "paragraph"
    }}>Another Deployment Currently in Progress</_Heading>
<p>{`In case of the latter, in which an active deployment currently exists, then you’ll just need to wait for the first one to finish, and redeploy your project application. Although not that often, this is more possible to happen in your CI/CD workflows.`}</p>
<_Heading level={3} id={"failed-to-read-pulumi-credentials-file-please-re-run-pulumi-login"} nextElement={{
      "type": "paragraph"
    }}>Failed to Read Pulumi Credentials File. Please Re-Run<code>pulumi login</code>.</_Heading>
<p>{`When deploying your project applications with the `}<_Link href="/docs/5.x/core-development-concepts/basics/project-deployment"><inlineCode parentName="p">{`webiny deploy`}</inlineCode></_Link>{` command, on a couple of occasions, we’ve seen users receive the following error:`}</p>
<blockquote>
<p parentName="blockquote">{`error: problem logging in: failed to read Pulumi credentials file. Please re-run `}<inlineCode parentName="p">{`pulumi login`}</inlineCode>{` to reset your credentials file: invalid character ‘\\x00’ looking for beginning of value`}</p>
</blockquote>
<p>{`After some investigation, we’ve seen this error can happen because of an error in the `}<inlineCode parentName="p">{`credentials.json`}</inlineCode>{` file, which is an internal Pulumi file that holds `}<a parentName="p" {...{
        "href": "https://www.pulumi.com/docs/intro/pulumi-service/"
      }}>{`Pulumi service-related`}</a>{` credentials.`}</p>
<p>{`If you’re not using Pulumi service, then, most likely, you can safely delete this file, and everything should start working again.`}</p>
<p>{`Depending on your operating system, the file can be found in the following paths.`}</p>
<p><strong parentName="p">{`Mac / Linux:`}</strong></p>
<Editor title="" lang="null" mdxType="Editor">
{`/Users/x/my-new-project/.webiny/pulumi-cli/darwin/pulumi/credentials.json`}
</Editor>
<p><strong parentName="p">{`Windows:`}</strong></p>
<Editor title="" lang="null" mdxType="Editor">
{`C:\\my-new-project\\.webiny\\pulumi-cli\\win32\\pulumi\\credentials.json`}
</Editor>
<_Heading level={2} id={"faq"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>FAQ</_Heading>
<_Heading level={3} id={"can-i-deploy-webiny-on-personal-server-or-platforms-like-docker-or-digital-ocean"} nextElement={{
      "type": "paragraph"
    }}>Can I Deploy Webiny on Personal Server or Platforms Like Docker or Digital Ocean?</_Heading>
<p>{`The short answer is no.  `}</p>
<p>{`Webiny cannot be deployed on a personal server or platforms like Docker or Digital Ocean because Webiny is a serverless application, meaning it doesn’t need a server for installation. Instead, it’s built on top of serverless infrastructure like AWS Lambda and DynamoDB to enable scalability and reliability.`}</p>
<p>{`When you create a Webiny project on your local machine, you then deploy it, which creates various serverless resources on AWS.`}</p>
<p>{`You can find more details about the development and deployment principles in this `}<_Link href="/docs/5.x/core-development-concepts/development/local-development">{`article`}</_Link>{`.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;