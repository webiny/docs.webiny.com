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
  "title": "Managing Cloud Infrastructure State Files",
  "description": "Learn what are cloud infrastructure state files and how to properly store them.",
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
  "title": "Cloud Infrastructure State Files",
  "slug": "cloud-infrastructure-state-files",
  "children": []
}, {
  "title": "Managing Cloud Infrastructure State Files",
  "slug": "managing-cloud-infrastructure-state-files",
  "children": [{
    "title": "Commonly Used Backends",
    "slug": "commonly-used-backends",
    "children": [{
      "title": "Local File System",
      "slug": "local-file-system"
    }, {
      "title": "Amazon S3",
      "slug": "amazon-s3"
    }, {
      "title": "Pulumi Service",
      "slug": "pulumi-service"
    }]
  }]
}, {
  "title": "Using Different Backends",
  "slug": "using-different-backends",
  "children": [{
    "title": "Amazon S3",
    "slug": "amazon-s3",
    "children": []
  }, {
    "title": "Pulumi Service",
    "slug": "pulumi-service",
    "children": []
  }, {
    "title": "What to Use",
    "slug": "what-to-use",
    "children": []
  }, {
    "title": "Development / Short-Lived Environments",
    "slug": "development-short-lived-environments",
    "children": []
  }, {
    "title": "CI/CD / Long-Lived Environments",
    "slug": "ci-cd-long-lived-environments",
    "children": []
  }]
}, {
  "title": "FAQ",
  "slug": "faq",
  "children": [{
    "title": "Should I Use Different Amazon S3 Buckets for Different Shared Long-Lived Environments?",
    "slug": "should-i-use-different-amazon-s3-buckets-for-different-shared-long-lived-environments",
    "children": []
  }, {
    "title": "For Storing Cloud Infrastructure State of My Long-Lived Environments in Amazon S3 Buckets, Must I Create These on My Own, or Does This Happen Automatically in Some Way?",
    "slug": "for-storing-cloud-infrastructure-state-of-my-long-lived-environments-in-amazon-s3-buckets-must-i-create-these-on-my-own-or-does-this-happen-automatically-in-some-way",
    "children": []
  }, {
    "title": "For Development Purposes, Can I Check in the .pulumi Folder Into VCS?",
    "slug": "for-development-purposes-can-i-check-in-the-pulumi-folder-into-vcs",
    "children": []
  }, {
    "title": "What Happens if Multiple Pulumi Deployments Are Triggered at the Same Time?",
    "slug": "what-happens-if-multiple-pulumi-deployments-are-triggered-at-the-same-time",
    "children": []
  }, {
    "title": "How Do I Pass the WEBINY_PULUMI_BACKEND in My CI/CD?",
    "slug": "how-do-i-pass-the-webiny-pulumi-backend-in-my-ci-cd",
    "children": []
  }, {
    "title": "Is It Possible to Move My Locally Stored State Files Into an Amazon S3 Bucket and Continue Using It as My Backend?",
    "slug": "is-it-possible-to-move-my-locally-stored-state-files-into-an-amazon-s3-bucket-and-continue-using-it-as-my-backend",
    "children": []
  }, {
    "title": "Can State Files Contain Secrets or Passwords? How Are These Stored?",
    "slug": "can-state-files-contain-secrets-or-passwords-how-are-these-stored",
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



<Alert type="success" title="What you'll learn" mdxType="Alert">
<ul>
<li parentName="ul">{`what are cloud infrastructure state files`}</li>
<li parentName="ul">{`how to properly store cloud infrastructure state files using different Pulumi backends`}</li>
<li parentName="ul">{`which Pulumi backends to use in different contexts`}</li>
</ul>
</Alert>
<Alert type="info" mdxType="Alert">
<p>{`Get your CI/CD set up in no time with the built-in `}<_Link href="/docs/5.x/core-development-concepts/ci-cd/setup">{`CI/CD scaffold`}</_Link>{`.`}</p>
</Alert>
<_Heading level={2} id={"cloud-infrastructure-state-files"} nextElement={{
      "type": "paragraph"
    }}>Cloud Infrastructure State Files</_Heading>
<p>{`In order to bring your project into existence, you need to deploy your application code, along with the necessary cloud infrastructure, into a cloud provider of your choice (for example `}<a parentName="p" {...{
        "href": "https://aws.amazon.com/"
      }}>{`AWS`}</a>{`).`}</p>
<p>{`By default, for everything deployment-related, Webiny relies on Pulumi, a modern infrastructure as code (IaC) framework. Essentially, the framework enables us to define needed cloud infrastructure via code, and ultimately, deploy it into one or more separate environments.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`Read more about Pulumi, environments, and other deployment-related concepts in our `}<_Link href="/docs/5.x/infrastructure/basics/introduction">{`Deployment`}</_Link>{` key topics section.`}</p>
</Alert>
<p>{`One of the fundamental concepts of any IaC framework are cloud infrastructure state files. Every framework handles them differently, but in all cases, state files represent the state of all deployed cloud infrastructure resources. Things like which resources are currently deployed, which configuration params were used upon deploying them, and more, are just some of the information these state files contain.`}</p>
<p>{`It’s important to know that state files must not be lost or deleted, because otherwise, the connection between our IaC framework and the actual cloud infrastructure resources would also be lost. Meaning, we would lose the ability to update existing cloud infrastructure resources or even delete them (using the IaC framework).`}</p>
<Alert type="warning" title="CAUTION" mdxType="Alert">
<p>{`If it happens that we’ve lost our state files and we wanted to delete all of the deployed cloud infrastructure resources, we would have to do it manually, via the cloud provider’s user interface or using a CLI.`}</p>
</Alert>
<_Heading level={2} id={"managing-cloud-infrastructure-state-files"} nextElement={{
      "type": "paragraph"
    }}>Managing Cloud Infrastructure State Files</_Heading>
<p>{`Because of the fact that our cloud infrastructure state files must be preserved, we are often talking about `}<strong parentName="p">{`cloud infrastructure state management`}</strong>{`, or, in context of IaC frameworks and cloud infrastructure deployments, just `}<strong parentName="p">{`state management`}</strong>{`.`}</p>
<p>{`Fortunately, out of the box, Pulumi already offers a solution that solves the state management overhead for us. Using different `}<_Link href="/docs/5.x/infrastructure/pulumi-iac/iac-with-pulumi#different-backends">{`backends`}</_Link>{`, we are able to store our state files in different places, in a secure and reliable way.`}</p>
<_Heading level={3} id={"commonly-used-backends"} nextElement={{
      "type": "paragraph"
    }}>Commonly Used Backends</_Heading>
<p>{`The following are three backends that are commonly used with Webiny projects.`}</p>
<_Heading level={4} id={"local-file-system"} nextElement={{
      "type": "paragraph"
    }}>Local File System</_Heading>
<p>{`This is the default backend, with which, all of the state files are stored within your Webiny project, inside of a single `}<inlineCode parentName="p">{`.pulumi`}</inlineCode>{` folder, located in your project root. Note that this folder contains cloud infrastructure state files for all project applications you might have in your Webiny project.`}</p>
<Alert type="info" title="Project Applications" mdxType="Alert">
<p>{`Learn more about project applications and project organization in general, in the `}<_Link href="/docs/5.x/core-development-concepts/project-organization/project-applications-and-packages">{`Project Applications and Packages`}</_Link>{` key topic.`}</p>
</Alert>
<p>{`The following directory tree shows the `}<inlineCode parentName="p">{`.pulumi`}</inlineCode>{` folder which is being utilized by all three default project applications (`}<inlineCode parentName="p">{`api/.pulumi`}</inlineCode>{`, `}<inlineCode parentName="p">{`apps/admin/.pulumi`}</inlineCode>{`, `}<inlineCode parentName="p">{`apps/website/.pulumi`}</inlineCode>{`):`}</p>
<Editor title=".pulumi (folder located in your project root)" lang="text" mdxType="Editor">
{`.
├── apps
│   ├── core
│   │   ├── .pulumi
│   │   │   ├── backups
│   │   │   ├── history
│   │   │   └── stacks
│   ├── api
│   │   ├── .pulumi
│   │   │   ├── backups
│   │   │   ├── history
│   │   │   └── stacks
│   ├── admin
│   │   ├── .pulumi
│   │   │   ├── backups
│   │   │   ├── history
│   │   │   └── stacks
│   └── website
│       ├── .pulumi
│       │   ├── backups
│       │   ├── history
│       │   └── stacks
│  
└── (...)`}
</Editor>
<p>{`This backend can be a solid choice for local development purposes, where you typically don’t need to share the state files with other team members and are only relevant to you. Because of this, in every new Webiny project, by default, the `}<inlineCode parentName="p">{`.pulumi`}</inlineCode>{` folder isn’t checked into your version control.`}</p>
<_Heading level={4} id={"amazon-s3"} nextElement={{
      "type": "paragraph"
    }}>Amazon S3</_Heading>
<p>{`With this backend option, we can store our cloud infrastructure state files in a remote `}<a parentName="p" {...{
        "href": "https://aws.amazon.com/s3/"
      }}>{`Amazon S3`}</a>{` bucket.`}</p>
<p>{`This is useful when deploying our project into long-lived shared environments, like `}<inlineCode parentName="p">{`staging`}</inlineCode>{` or even `}<inlineCode parentName="p">{`prod`}</inlineCode>{` (production). Environments like these can certainly be considered as sensitive, so, it is critical that we have a single source of truth of our cloud infrastructure state and also, that the state files are stored in a reliable and secure way. We definitely want to avoid having multiple versions of our production cloud infrastructure state, or have our state files publicly exposed.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`Learn more about different types of environments in the `}<_Link href="/docs/5.x/core-development-concepts/ci-cd/environments">{`Environments`}</_Link>{` guide.`}</p>
</Alert>
<_Heading level={4} id={"pulumi-service"} nextElement={{
      "type": "paragraph"
    }}>Pulumi Service</_Heading>
<p>{`You can certainly use the Amazon S3 for storing cloud infrastructure state files, but if you need more, you can also explore the `}<a parentName="p" {...{
        "href": "https://www.pulumi.com/docs/intro/concepts/state/#deciding-on-a-backend"
      }}>{`Pulumi Service`}</a>{`.`}</p>
<p>{`It is a service that not only gives you the ability to store your cloud infrastructure state files in an easy, secure, and reliable way, but also offers a couple of other interesting features, like:`}</p>
<ul>
<li parentName="ul">{`concurrent state locking to prevent corrupting your infrastructure state in a team environment`}</li>
<li parentName="ul">{`full deployment history for auditing and rollback purposes`}</li>
<li parentName="ul">{`encrypted state in transit and at rest`}</li>
<li parentName="ul"><a parentName="li" {...{
          "href": "https://www.pulumi.com/docs/intro/concepts/state/#deciding-on-a-backend"
        }}>{`and more`}</a></li>
</ul>
<p>{`Of course, it does come with a price, so make sure to check their official `}<a parentName="p" {...{
        "href": "https://www.pulumi.com/pricing/"
      }}>{`pricing page`}</a>{` before making a decision on which backend you’re about to use.`}</p>
<_Heading level={2} id={"using-different-backends"} nextElement={{
      "type": "paragraph"
    }}>Using Different Backends</_Heading>
<p>{`As mentioned, Webiny will instruct the Pulumi framework to use the `}<_Link href="/docs/5.x/core-development-concepts/ci-cd/cloud-infrastructure-state-files#local-file-system">{`local file system`}</_Link>{` as the default backend. But, you can easily instruct it to use a different one, using the `}<inlineCode parentName="p">{`WEBINY_PULUMI_BACKEND`}</inlineCode>{` environment variable, which needs to be assigned upon running the `}<_Link href="/docs/5.x/core-development-concepts/basics/project-deployment"><inlineCode parentName="p">{`webiny deploy`}</inlineCode></_Link>{` command.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`Environment variables can be assigned in a couple of different ways. In local development, we recommend you assign them via the `}<a parentName="p" {...{
          "href": "https://github.com/webiny/webiny-js/blob/v5.15.0/packages/cwp-template-aws/template/example.env"
        }}><inlineCode parentName="a">{`.env`}</inlineCode></a>{` file, located in your project root. In CI/CD environments, you should use mechanisms recommended by your CI/CD provider.`}</p>
<p>{`Check out the `}<_Link href="/docs/5.x/core-development-concepts/basics/environment-variables">{`Environment Variables`}</_Link>{` how-to guide to learn more.`}</p>
</Alert>
<_Heading level={3} id={"amazon-s3"} nextElement={{
      "type": "paragraph"
    }}>Amazon S3</_Heading>
<p>{`If we wanted to use Amazon S3 as our backend of choice, we could assign the following environment variable:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`WEBINY_PULUMI_BACKEND=s3://my-s3-bucket/some-folder-maybe`}
</Editor>
<_Heading level={3} id={"pulumi-service"} nextElement={{
      "type": "paragraph"
    }}>Pulumi Service</_Heading>
<p>{`On the other hand, if we wanted to use the Pulumi Service, we could assign the following environment variables:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`WEBINY_PULUMI_BACKEND=https://api.pulumi.com
PULUMI_ACCESS_TOKEN=pul-xyzabc123`}
</Editor>
<p>{`Note that, when using the Pulumi Service, it’s recommended we remove the `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/v5.15.0/packages/cwp-template-aws/template/example.env#L6"
      }}><inlineCode parentName="a">{`PULUMI_SECRETS_PROVIDER`}</inlineCode></a>{` and `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/v5.15.0/packages/cwp-template-aws/template/example.env#L10"
      }}><inlineCode parentName="a">{`PULUMI_CONFIG_PASSPHRASE`}</inlineCode></a>{` environment variables. Essentially, these variable instruct Pulumi CLI which secrets provider we want to use, and since Pulumi Service has its own built-in one, we don’t need these anymore.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`By default, via the `}<a parentName="p" {...{
          "href": "https://github.com/webiny/webiny-js/blob/v5.15.0/packages/cwp-template-aws/template/example.env#L4-L10"
        }}><inlineCode parentName="a">{`.env`}</inlineCode></a>{` file located in your project root, the mentioned `}<a parentName="p" {...{
          "href": "https://github.com/webiny/webiny-js/blob/v5.15.0/packages/cwp-template-aws/template/example.env#L6"
        }}><inlineCode parentName="a">{`PULUMI_SECRETS_PROVIDER`}</inlineCode></a>{` and `}<a parentName="p" {...{
          "href": "https://github.com/webiny/webiny-js/blob/v5.15.0/packages/cwp-template-aws/template/example.env#L10"
        }}><inlineCode parentName="a">{`PULUMI_CONFIG_PASSPHRASE`}</inlineCode></a>{` environment variables are set to `}<inlineCode parentName="p">{`passphrase`}</inlineCode>{` and a random string, respectively.`}</p>
</Alert>
<Alert type="info" mdxType="Alert">
<p>{`Learn more about secrets and secrets providers in `}<a parentName="p" {...{
          "href": "https://www.pulumi.com/docs/intro/concepts/secrets/"
        }}>{`Pulumi’s official documentation`}</a>{`.`}</p>
</Alert>
<_Heading level={3} id={"what-to-use"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>What to Use</_Heading>
<_Heading level={3} id={"development-short-lived-environments"} nextElement={{
      "type": "paragraph"
    }}>Development / Short-Lived Environments</_Heading>
<p>{`For development purposes, we recommend using the default `}<_Link href="/docs/5.x/core-development-concepts/ci-cd/cloud-infrastructure-state-files#local-file-system">{`local file system`}</_Link>{` as your backend of choice. This is simply because the cloud infrastructure you deploy will most probably only be used by you, and the state files the deployment process produces don’t need to be shared with other developers or processes.`}</p>
<p>{`That being said, there might still be cases in which you’ll want to share the cloud infrastructure state files, for example with your team members or maybe you just want to continue developing on a different machine.`}</p>
<p>{`And while both can be achieved, note that sharing cloud infrastructure state files implies the same cloud (AWS) account is used on every machine on which the files end up. Which means that sharing them with multiple team members requires every member to use the same cloud account and this is something we usually wouldn’t recommend. Ideally, developers should have their own cloud account for development purposes.`}</p>
<Alert type="success" mdxType="Alert">
<p>{`For easier AWS account management, we recommend you checkout the `}<a parentName="p" {...{
          "href": "https://aws.amazon.com/organizations/"
        }}>{`AWS Organizations`}</a>{` service which makes it easier to manage multiple AWS accounts within your organization.`}</p>
</Alert>
<p>{`In case of the latter, where developers just wants to continue working from one of their other machines (using the same cloud account), sharing the cloud infrastructure state files can be achieved in a relatively straightforward way.`}</p>
<p>{`Simply copy and paste your `}<inlineCode parentName="p">{`.pulumi`}</inlineCode>{` folder to the other machine. Once you’ve done that, also note that all of the extra configuration arguments, that were passed to Pulumi via environment variables, should also be copied. Usually, here we’re referring to values that were specified in your root `}<inlineCode parentName="p">{`.env`}</inlineCode>{` file, where by default, the `}<inlineCode parentName="p">{`PULUMI_SECRETS_PROVIDER`}</inlineCode>{` and `}<inlineCode parentName="p">{`PULUMI_CONFIG_PASSPHRASE`}</inlineCode>{` values are set.`}</p>
<Alert type="warning" title="CAUTION" mdxType="Alert">
<p>{`Keep in mind that if you switched to another machine and later plan to return back to the initial one, you’ll need to repeat the explained steps.`}</p>
</Alert>
<_Heading level={3} id={"ci-cd-long-lived-environments"} nextElement={{
      "type": "paragraph"
    }}>CI/CD / Long-Lived Environments</_Heading>
<p>{`For CI/CD purposes, we recommend using one of the remote backend options - `}<a parentName="p" {...{
        "href": "#amazon-s3"
      }}>{`Amazon S3`}</a>{` or `}<a parentName="p" {...{
        "href": "#pulumi-service"
      }}>{`Pulumi Service`}</a>{`.`}</p>
<p>{`Note that in case of the former, since we recommend a separate cloud (AWS) account to be used with every long-lived environment, you will end up with a separate Amazon S3 bucket for each environment.`}</p>
<_Heading level={2} id={"faq"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>FAQ</_Heading>
<_Heading level={3} id={"should-i-use-different-amazon-s3-buckets-for-different-shared-long-lived-environments"} nextElement={{
      "type": "paragraph"
    }}>Should I Use Different Amazon S3 Buckets for Different Shared Long-Lived Environments?</_Heading>
<p>{`If you’re using a separate cloud (AWS) account for every long-lived environment, then the answer is yes and this is the approach we recommend you adapt.`}</p>
<_Heading level={3} id={"for-storing-cloud-infrastructure-state-of-my-long-lived-environments-in-amazon-s3-buckets-must-i-create-these-on-my-own-or-does-this-happen-automatically-in-some-way"} nextElement={{
      "type": "paragraph"
    }}>For Storing Cloud Infrastructure State of My Long-Lived Environments in Amazon S3 Buckets, Must I Create These on My Own, or Does This Happen Automatically in Some Way?</_Heading>
<p>{`If you decide to use Amazon S3 as a way to store your cloud infrastructure state files for your long-lived environments, then be aware that the actual buckets will need to be created manually. At the moment, this is not something Webiny does automatically for you (but we are thinking about it).`}</p>
<p>{`The most straightforward way to do it would be to open the `}<a parentName="p" {...{
        "href": "https://aws.amazon.com/console/"
      }}>{`AWS Management Console`}</a>{` for every separate AWS account you might have, and simply create the bucket from there.`}</p>
<Alert type="success" mdxType="Alert">
<p>{`Remember - we recommend having a separate cloud account for every long-lived environment you might have. Usually this means having three accounts: one for `}<inlineCode parentName="p">{`dev`}</inlineCode>{`, one for `}<inlineCode parentName="p">{`staging`}</inlineCode>{`, and one for `}<inlineCode parentName="p">{`prod`}</inlineCode>{` (production) environment. In case you missed it, check out the `}<_Link href="/docs/5.x/core-development-concepts/ci-cd/environments">{`Environments`}</_Link>{` guide to learn more about these.`}</p>
</Alert>
<_Heading level={3} id={"for-development-purposes-can-i-check-in-the-pulumi-folder-into-vcs"} nextElement={{
      "type": "paragraph"
    }}>For Development Purposes, Can I Check in the<code>.pulumi</code>Folder Into VCS?</_Heading>
<p>{`We don’t recommend doing it for of a couple reasons, mainly because this can quickly get messy, especially if multiple developers are working on the project.`}</p>
<p>{`Still, if you have a strong opinion on this, `}<a parentName="p" {...{
        "href": "https://www.webiny.com/slack"
      }}>{`let us know`}</a>{`, we’d like to hear your thoughts!`}</p>
<_Heading level={3} id={"what-happens-if-multiple-pulumi-deployments-are-triggered-at-the-same-time"} nextElement={{
      "type": "paragraph"
    }}>What Happens if Multiple Pulumi Deployments Are Triggered at the Same Time?</_Heading>
<p>{`No matter which Pulumi backend you end up choosing, if two or more Pulumi deployments are triggered simultaneously, only the first one will be performed. The rest will be rejected, with an appropriate error being returned in your terminal. The error should look similar to the following:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`error: the current deployment has 1 resource(s) with pending operations:
  * urn:pulumi:dev::website::aws:cloudfront/distribution:Distribution::delivery, interrupted while updating`}
</Editor>
<_Heading level={3} id={"how-do-i-pass-the-webiny-pulumi-backend-in-my-ci-cd"} nextElement={{
      "type": "paragraph"
    }}>How Do I Pass the<code>WEBINY_PULUMI_BACKEND</code>in My CI/CD?</_Heading>
<p>{`Different CI/CD providers offer different options when it comes to setting environment variables. For example, `}<a parentName="p" {...{
        "href": "https://github.com/features/actions"
      }}>{`GitHub Actions`}</a>{` enable this via `}<a parentName="p" {...{
        "href": "https://docs.github.com/en/actions/reference/encrypted-secrets"
      }}>{`repository secrets`}</a>{`. On the other hand, if using `}<a parentName="p" {...{
        "href": "https://aws.amazon.com/codebuild/"
      }}>{`AWS CodeBuild`}</a>{`, you can use the `}<a parentName="p" {...{
        "href": "https://aws.amazon.com/codepipeline/"
      }}>{`AWS CodePipeline`}</a>{` service.`}</p>
<p>{`Make sure to read the relevant documentation for best practices around how to properly set environment variables in your CI/CD provider.`}</p>
<_Heading level={3} id={"is-it-possible-to-move-my-locally-stored-state-files-into-an-amazon-s3-bucket-and-continue-using-it-as-my-backend"} nextElement={{
      "type": "paragraph"
    }}>Is It Possible to Move My Locally Stored State Files Into an Amazon S3 Bucket and Continue Using It as My Backend?</_Heading>
<p>{`Yes, it can be done by taking the following steps.`}</p>
<p>{`First, create a new Amazon S3 bucket. You can do this via the AWS console or any other way you prefer. Do note that the bucket has to be created in the same region where your Webiny project is deployed.`}</p>
<p>{`Once the bucket has been created, assign its URI to the `}<inlineCode parentName="p">{`WEBINY_PULUMI_BACKEND`}</inlineCode>{` environment variable, in your `}<inlineCode parentName="p">{`.env`}</inlineCode>{` file. For example:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`WEBINY_PULUMI_BACKEND=s3://my-project-state-files`}
</Editor>
<p>{`Finally, copy all of the folders and files located in your project root `}<inlineCode parentName="p">{`.pulumi`}</inlineCode>{` folder into the newly created bucket. Once copied, in your Amazon S3 bucket, you should end up with the following paths:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`/apps/core/.pulumi/...
/apps/api/.pulumi/...
/apps/admin/.pulumi/...
/apps/website/.pulumi/...`}
</Editor>
<p>{`In order to confirm everything works as expected, from your project root, simply run the `}<_Link href="/docs/5.x/core-development-concepts/basics/webiny-cli#yarn-webiny-info---env-env"><inlineCode parentName="p">{`webiny info`}</inlineCode></_Link>{` command. If everything was done correctly, it should display the correct information (GraphQL API URL, Headless CMS GraphQL API URLs, …).`}</p>
<_Heading level={3} id={"can-state-files-contain-secrets-or-passwords-how-are-these-stored"} nextElement={{
      "type": "paragraph"
    }}>Can State Files Contain Secrets or Passwords? How Are These Stored?</_Heading>
<p>{`If you’re passing secrets or passwords to cloud infrastructure resources in your cloud infrastructure (`}<_Link href="/docs/5.x/infrastructure/pulumi-iac/iac-with-pulumi">{`Pulumi`}</_Link>{`) code, for example an API token from an external service, then it’s recommended that you mark them as secret.`}</p>
<p>{`The easiest way to do this would be to use the `}<a parentName="p" {...{
        "href": "https://www.pulumi.com/docs/reference/pkg/nodejs/pulumi/pulumi/#secret"
      }}>{`pulumi.secret`}</a>{` method, for example:`}</p>
<Editor title="" lang="ts" mdxType="Editor">
{`pulumi.secret(process.env.MY_API_TOKEN);`}
</Editor>
<p>{`With this approach, values will still end up in your state files, but they will be encoded, which means nobody will be able to actually read them.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`Learn more about secrets in Pulumi’s official `}<a parentName="p" {...{
          "href": "https://www.pulumi.com/docs/intro/concepts/secrets/"
        }}>{`documentation page`}</a>{`.`}</p>
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