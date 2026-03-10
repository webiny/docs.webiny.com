/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import ghActionsLogo from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/core-development-concepts/ci-cd/assets/ci-cd/gh_actions_logo.png";
import ghRepoSecrets from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/core-development-concepts/ci-cd/assets/ci-cd/gh_repo_secrets.png";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Set up CI/CD",
  "description": "Learn how to set up a CI/CD pipeline for your Webiny project.",
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
  "title": "Different CI/CD Providers",
  "slug": "different-ci-cd-providers",
  "children": [{
    "title": "GitHub Actions",
    "slug": "git-hub-actions",
    "children": [{
      "title": "What Actions Will the Scaffold Perform for Me?",
      "slug": "what-actions-will-the-scaffold-perform-for-me"
    }, {
      "title": "Next Steps",
      "slug": "next-steps"
    }]
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





<Alert type="info" title="Can I use this?" mdxType="Alert">
<p>{`This feature is available since `}<strong parentName="p">{`v5.7.0`}</strong>{`.`}</p>
</Alert>
<Alert type="success" title="What you'll learn" mdxType="Alert">
<ul>
<li parentName="ul">{`how to use the built-in scaffold to set up your CI/CD in no time`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`In order to set up your own CI/CD workflow faster (with all of the concepts, steps, and strategies explained in the `}<_Link href="/docs/5.x/core-development-concepts/ci-cd/introduction">{`CI/CD`}</_Link>{` key topics), we recommend you use the built-in CI/CD scaffold.`}</p>
<p>{`To use it, simply run the following command from your project root:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`yarn webiny scaffold`}
</Editor>
<p>{`Once the list of all available scaffolds is shown, select the `}<strong parentName="p">{`Set up CI/CD`}</strong>{` option and continue by answering the questions that follow.`}</p>
<_Heading level={2} id={"different-ci-cd-providers"} nextElement={{
      "type": "paragraph"
    }}>Different CI/CD Providers</_Heading>
<p>{`At the moment, the scaffold allows you to set up your CI/CD with `}<a parentName="p" {...{
        "href": "https://github.com/features/actions"
      }}>{`GitHub Actions`}</a>{` only. But in the future, we would certainly like to also bring support for more providers, depending on the interest from the community.`}</p>
<Alert type="success" mdxType="Alert">
<p>{`If you plan to use a different CI/CD provider, you can still create your workflows manually, by following all of the recommendations outlined in `}<_Link href="/docs/5.x/core-development-concepts/ci-cd/introduction">{`CI/CD key topics`}</_Link>{`. Also, if you think your provider should be supported out of the box, please `}<a parentName="p" {...{
          "href": "https://github.com/webiny/webiny-js/issues"
        }}>{`open an issue`}</a>{` or `}<a parentName="p" {...{
          "href": "https://www.webiny.com/slack"
        }}>{`contact us`}</a>{`.`}</p>
</Alert>
<_Heading level={3} id={"git-hub-actions"} nextElement={{
      "type": "jsx"
    }}>GitHub Actions</_Heading>
<Image src={ghActionsLogo} shadow={false} canEnlarge={false} mdxType="Image" />
<p><a parentName="p" {...{
        "href": "https://github.com/features/actions"
      }}>{`GitHub Actions`}</a>{` are often a good choice when it comes to setting up your own CI/CD, simply because of its tight integration with other existing GitHub concepts and resources.`}</p>
<Alert type="warning" title="CAUTION" mdxType="Alert">
<p>{`Upon running this scaffold, note that you will need to paste your GitHub account’s personal access token. You can choose to use an existing one, or even better, create a new one simply by clicking on the `}<a parentName="p" {...{
          "href": "https://github.com/settings/tokens/new?scopes=repo,workflow&description=webiny-cicd-token"
        }}>{`following link`}</a>{`.`}</p>
<p>{`Additionally, you may be prompted to enter your e-mail address, which will be used `}<strong parentName="p">{`only`}</strong>{` while the scaffold is committing initial GitHub Actions workflow files.`}</p>
</Alert>
<_Heading level={4} id={"what-actions-will-the-scaffold-perform-for-me"} nextElement={{
      "type": "paragraph"
    }}>What Actions Will the Scaffold Perform for Me?</_Heading>
<p>{`No matter whether you choose to set up your CI/CD within an existing GitHub code repository or create a new one, during the scaffolding process, the following actions will be taken on your behalf:`}</p>
<ol>
<li parentName="ol">{`push GitHub actions `}<a parentName="li" {...{
          "href": "https://github.com/webiny/webiny-js/tree/next/packages/cli-plugin-scaffold-ci/src/githubActions/files/workflows/.github/workflows"
        }}>{`workflows`}</a></li>
<li parentName="ol">{`if possible, create `}<a parentName="li" {...{
          "href": "https://docs.github.com/en/github/administering-a-repository/defining-the-mergeability-of-pull-requests/about-protected-branches"
        }}>{`protected`}</a>{` `}<inlineCode parentName="li">{`dev`}</inlineCode>{`, `}<inlineCode parentName="li">{`staging`}</inlineCode>{`, and `}<inlineCode parentName="li">{`prod`}</inlineCode>{` branches`}</li>
<li parentName="ol">{`set `}<inlineCode parentName="li">{`dev`}</inlineCode>{` as the `}<a parentName="li" {...{
          "href": "https://docs.github.com/en/github/administering-a-repository/managing-branches-in-your-repository/changing-the-default-branch"
        }}>{`default`}</a>{` branch`}</li>
</ol>
<Alert type="success" mdxType="Alert">
<p>{`The created workflow files follow workflows described in the `}<_Link href="/docs/5.x/core-development-concepts/ci-cd/introduction">{`CI/CD`}</_Link>{` key topics section. Before running them, you’re free to inspect and adjust them to your needs.`}</p>
</Alert>
<_Heading level={4} id={"next-steps"} nextElement={{
      "type": "paragraph"
    }}>Next Steps</_Heading>
<p>{`Once the scaffolding has finished, these are the steps we recommend you follow:`}</p>
<h5>{`1. Ensure `}<inlineCode parentName="h5">{`dev`}</inlineCode>{` Branch Contains the Latest Code`}</h5>
<p>{`While moving through the setup wizard, you get to choose whether you want to create a brand new GitHub code repository, or use an existing one.`}</p>
<p>{`In case of the former, note that, apart from the initial GitHub Actions workflows, the created code repository will be empty. In other words, during the scaffolding process, your project files are not automatically pushed into it.`}</p>
<p>{`In order to do that yourself, you can run the following commands:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`# Skip this command if your code repository was already initialized locally.
git init

# Connect your local code repository with the just created remote one.
git remote add origin git@github.com:{GITHUB_USER}/{GITHUB_REPO_NAME}.git

# Commit all project files and push them into the default "dev" branch.
git fetch && \\
git add -A && \\
git commit -m "chore: initial commit" && \\
git checkout dev && \\
git merge master --allow-unrelated-histories -m "merge: pull changes from master" && \\
git push -u origin dev`}
</Editor>
<p>{`In case of the latter, if you’ve picked an existing GitHub code repository, then most likely your project was already previously pushed into it, and no additional actions are needed.`}</p>
<h5>{`2. Delete Previous Default Branch (Optional)`}</h5>
<p>{`By default, for every new code repository, GitHub sets the `}<inlineCode parentName="p">{`main`}</inlineCode>{` (previously `}<inlineCode parentName="p">{`master`}</inlineCode>{`) branch as the default one. Since during the scaffolding process, the `}<inlineCode parentName="p">{`dev`}</inlineCode>{` branch was set as the new default, you can delete the previous one.`}</p>
<Alert type="warning" title="CAUTION" mdxType="Alert">
<p>{`When scaffolding inside of an existing repository, just double-check if the new `}<inlineCode parentName="p">{`dev`}</inlineCode>{` and previous default branch are in sync. We don’t want to accidentally end up with lost code commits.`}</p>
</Alert>
<h5>{`3. Set Up Repository Secrets`}</h5>
<p>{`Finally, go to your code GitHub repository settings and navigate to the `}<a parentName="p" {...{
        "href": "https://docs.github.com/en/actions/security-guides/encrypted-secrets"
      }}>{`Actions Secrets`}</a>{` section:`}</p>
<Image src={ghRepoSecrets} title="GitHub Actions Secrets" mdxType="Image" />
<p>{`This is where we’ll need to add all of the secrets that are used within the generated GitHub Actions workflows.`}</p>
<p>{`Note that, depending on the target branch, the workflows deploy your Webiny project into three separate `}<_Link href="/docs/5.x/infrastructure/basics/environments">{`environments`}</_Link>{`: `}<inlineCode parentName="p">{`dev`}</inlineCode>{`, `}<inlineCode parentName="p">{`staging`}</inlineCode>{`, and `}<inlineCode parentName="p">{`prod`}</inlineCode>{`. Because of this, note that every secret will need to defined three times (once for each environment).`}</p>
<p>{`For example, when defining the `}<inlineCode parentName="p">{`AWS_ACCESS_KEY_ID`}</inlineCode>{` environment variable, we’ll end up with the following three secrets:`}</p>
<ol>
<li parentName="ol"><inlineCode parentName="li">{`DEV_AWS_ACCESS_KEY_ID`}</inlineCode></li>
<li parentName="ol"><inlineCode parentName="li">{`STAGING_AWS_ACCESS_KEY_ID`}</inlineCode></li>
<li parentName="ol"><inlineCode parentName="li">{`PROD_AWS_ACCESS_KEY_ID`}</inlineCode></li>
</ol>
<p>{`This enables us to use different secrets for every environment we deploy into. For example, we can use a different AWS account for every environment.`}</p>
<p>{`The following is a list of all environment variables that need to be defined in order for the generated GitHub Actions workflows to work correctly.`}</p>
<h6>{`1. `}<inlineCode parentName="h6">{`AWS_ACCESS_KEY_ID`}</inlineCode>{`, `}<inlineCode parentName="h6">{`AWS_SECRET_ACCESS_KEY`}</inlineCode>{`, and `}<inlineCode parentName="h6">{`AWS_REGION`}</inlineCode></h6>
<p><inlineCode parentName="p">{`AWS_ACCESS_KEY_ID`}</inlineCode>{` and `}<inlineCode parentName="p">{`AWS_SECRET_ACCESS_KEY`}</inlineCode>{` represent credentials of an AWS account that will be used to deploy necessary cloud infrastructure resources, into the specific environment. Note that, as stated in the `}<_Link href="/docs/5.x/core-development-concepts/ci-cd/environments#cloud-aws-accounts">{`CI/CD`}</_Link>{` key topics, we recommend every environment (`}<inlineCode parentName="p">{`dev`}</inlineCode>{`, `}<inlineCode parentName="p">{`staging`}</inlineCode>{`, `}<inlineCode parentName="p">{`prod`}</inlineCode>{`) uses its own AWS account. So, these should be different for each environment.`}</p>
<Alert type="success" mdxType="Alert">
<p>{`Learn how to create AWS credentials in the `}<_Link href="/docs/5.x/infrastructure/aws/configure-aws-credentials">{`Configure AWS Credentials`}</_Link>{` guide.`}</p>
</Alert>
<p>{`With credentials, we also need to specify the `}<a parentName="p" {...{
        "href": "https://aws.amazon.com/about-aws/global-infrastructure/regions_az/"
      }}>{`AWS region`}</a>{` via the `}<inlineCode parentName="p">{`AWS_REGION`}</inlineCode>{` environment variable.`}</p>
<p>{`Ultimately, the following is the full list of secrets that need to be defined:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`# "dev" environment.
DEV_AWS_ACCESS_KEY_ID
DEV_AWS_SECRET_ACCESS_KEY
DEV_AWS_REGION

# "staging" environment.
STAGING_AWS_ACCESS_KEY_ID
STAGING_AWS_SECRET_ACCESS_KEY
STAGING_AWS_REGION

# "prod" environment.
PROD_AWS_ACCESS_KEY_ID
PROD_AWS_SECRET_ACCESS_KEY
PROD_AWS_REGION`}
</Editor>
<h6>{`2. `}<inlineCode parentName="h6">{`PULUMI_SECRETS_PROVIDER`}</inlineCode>{` and `}<inlineCode parentName="h6">{`PULUMI_CONFIG_PASSPHRASE`}</inlineCode></h6>
<p>{`Upon deploying cloud infrastructure resources with `}<_Link href="/docs/5.x/infrastructure/pulumi-iac/iac-with-pulumi">{`Pulumi`}</_Link>{`, we need to specify the secrets provider. As the name itself suggest, this feature enables us to store deployment-related secrets, for example API keys, connection credentials, and similar.`}</p>
<p>{`And although Webiny does not store nor rely on this feature by default, we still need to define the `}<inlineCode parentName="p">{`PULUMI_SECRETS_PROVIDER`}</inlineCode>{` and `}<inlineCode parentName="p">{`PULUMI_CONFIG_PASSPHRASE`}</inlineCode>{` environment variables. This is simply a requirement set by the Pulumi CLI.`}</p>
<Alert type="success" mdxType="Alert">
<p>{`To learn more about secrets and how Pulumi handles them, please visit the `}<a parentName="p" {...{
          "href": "https://www.pulumi.com/docs/intro/concepts/secrets/"
        }}>{`official documentation`}</a>{`.`}</p>
</Alert>
<p>{`We suggest you use “passphrase” as the value of the `}<inlineCode parentName="p">{`PULUMI_SECRETS_PROVIDER`}</inlineCode>{` secret, and, for the `}<inlineCode parentName="p">{`PULUMI_CONFIG_PASSPHRASE`}</inlineCode>{` secret, that you simply generate a random string as its value.`}</p>
<Alert type="danger" mdxType="Alert">
<p>{`Be careful not to lose the generated `}<inlineCode parentName="p">{`PULUMI_CONFIG_PASSPHRASE`}</inlineCode>{` secret value. Because if you do, you won’t be able to redeploy already deployed cloud infrastructure resources. You will have to do it from scratch, which means you could potentially lose sensitive data.`}</p>
</Alert>
<p>{`Ultimately, the following is the full list of secrets that need to be defined:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`# "dev" environment.
DEV_PULUMI_SECRETS_PROVIDER
DEV_PULUMI_CONFIG_PASSPHRASE

# "staging" environment.
STAGING_PULUMI_SECRETS_PROVIDER
STAGING_PULUMI_CONFIG_PASSPHRASE

# "prod" environment.
PROD_PULUMI_SECRETS_PROVIDER
PROD_PULUMI_CONFIG_PASSPHRASE`}
</Editor>
<h6>{`3. `}<inlineCode parentName="h6">{`WEBINY_PULUMI_BACKEND`}</inlineCode></h6>
<p>{`The last piece of the puzzle is the `}<inlineCode parentName="p">{`WEBINY_PULUMI_BACKEND`}</inlineCode>{` secret, which determines the `}<_Link href="/docs/5.x/core-development-concepts/ci-cd/cloud-infrastructure-state-files#using-different-backends">{`Pulumi backend`}</_Link>{` that we want to use in order to store our cloud infrastructure state files. At the moment, here we recommend you use one of the following two options.`}</p>
<p>{`Either you simply manually deploy an Amazon S3 bucket within the AWS account that’s about to be used to deploy your project into a specific environment, or alternatively, use the `}<_Link href="/docs/5.x/core-development-concepts/ci-cd/cloud-infrastructure-state-files#pulumi-service">{`Pulumi Service`}</_Link>{`. In case of the former, just set the S3 URI, for example `}<inlineCode parentName="p">{`s3://my-project-pulumi-state-files-dev`}</inlineCode>{`. In case of the latter, simply paste the Pulumi Service `}<a parentName="p" {...{
        "href": "https://app.pulumi.com/account/tokens"
      }}>{`Access Token`}</a>{`.`}</p>
<Alert type="success" mdxType="Alert">
<p>{`If you choose to use Amazon S3 as the backend and you are using multiple AWS Accounts `}<_Link href="/docs/5.x/core-development-concepts/ci-cd/environments#cloud-aws-accounts">{`as recommended`}</_Link>{`, note that you will end up with creating multiple buckets, one within each AWS account. Each Amazon S3 bucket will only store cloud infrastructure state files for a specific `}<_Link href="/docs/5.x/core-development-concepts/ci-cd/environments#shared-environments">{`shared environment`}</_Link>{`.`}</p>
</Alert>
<Alert type="info" mdxType="Alert">
<p>{`For more information on backends, we recommend you read the `}<_Link href="/docs/5.x/core-development-concepts/ci-cd/cloud-infrastructure-state-files#using-different-backends">{`Cloud Infrastructure State Files`}</_Link>{` key topic.`}</p>
</Alert>
<p>{`Ultimately, the following is the full list of secrets that need to be defined:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`# "dev" environment.
DEV_WEBINY_PULUMI_BACKEND

# "staging" environment.
STAGING_WEBINY_PULUMI_BACKEND

# "prod" environment.
PROD_WEBINY_PULUMI_BACKEND`}
</Editor>
<h5>{`4. Start Developing`}</h5>
<p>{`To start developing, based on the `}<_Link href="/docs/5.x/core-development-concepts/ci-cd/version-control#github-flow">{`GitHub Flow`}</_Link>{`, the first step of every developer would be to simply create a new branch from the default `}<inlineCode parentName="p">{`dev`}</inlineCode>{` branch. Once ready, we submit a pull request, again against the `}<inlineCode parentName="p">{`dev`}</inlineCode>{` branch.`}</p>
<Alert type="success" mdxType="Alert">
<p>{`Read more about the GitHub Flow in the `}<_Link href="/docs/5.x/core-development-concepts/ci-cd/version-control#github-flow">{`Version Control`}</_Link>{` key topic.`}</p>
</Alert>
<p>{`Note that, at this point, the `}<inlineCode parentName="p">{`staging`}</inlineCode>{` and `}<inlineCode parentName="p">{`prod`}</inlineCode>{` branches will still be empty, and no deployments will occur until you actually merge the `}<inlineCode parentName="p">{`dev`}</inlineCode>{` branch into `}<inlineCode parentName="p">{`staging`}</inlineCode>{`, and later the `}<inlineCode parentName="p">{`staging`}</inlineCode>{` branch into `}<inlineCode parentName="p">{`prod`}</inlineCode>{`. Still, if you want to deploy these too, simply do the merging immediately, without waiting for first code changes from developers to arrive.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;