/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image14 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/infrastructure/aws/assets/configure-aws-credentials/access-key-step-4.png'
import _Image13 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/infrastructure/aws/assets/configure-aws-credentials/access-key-step-3.png'
import _Image12 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/infrastructure/aws/assets/configure-aws-credentials/access-key-step-2.png'
import _Image11 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/infrastructure/aws/assets/configure-aws-credentials/access-key-step-1.png'
import _Image10 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/infrastructure/aws/assets/configure-aws-credentials/aws-new-user-created-successfully.png'
import _Image9 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/infrastructure/aws/assets/configure-aws-credentials/aws-user-review.png'
import _Image8 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/infrastructure/aws/assets/configure-aws-credentials/aws-user-permissions.png'
import _Image7 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/infrastructure/aws/assets/configure-aws-credentials/aws-user-details.png'
import _Image6 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/infrastructure/aws/assets/configure-aws-credentials/aws-create-user.png'
import _Image5 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/infrastructure/aws/assets/configure-aws-credentials/aws-iam-users.png'
import _Image4 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/infrastructure/aws/assets/configure-aws-credentials/aws-iam-selection.png'
import _Image3 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/infrastructure/aws/assets/configure-aws-credentials/aws-register.png'
import _Image2 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/infrastructure/aws/assets/configure-aws-credentials/aws-login.png'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/infrastructure/aws/assets/configure-aws-credentials/aws-sign-in.png'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { ExternalLink } from "@/components/ExternalLink";
import YouTube from "@/components/YouTube";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Configure AWS Credentials",
  "description": "How to configure your AWS credentials for programmatic access",
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
  "title": "Step 1: Create Your AWS Account",
  "slug": "step-1-create-your-aws-account",
  "children": []
}, {
  "title": "Step 2: Create a User for Programmatic Access",
  "slug": "step-2-create-a-user-for-programmatic-access",
  "children": [{
    "title": "\"Deploy Webiny Project\" AWS CloudFormation Template",
    "slug": "deploy-webiny-project-aws-cloud-formation-template",
    "children": []
  }]
}, {
  "title": "Step 3: Configure the Programmatic Access",
  "slug": "step-3-configure-the-programmatic-access",
  "children": [{
    "title": "Unix Setup",
    "slug": "unix-setup",
    "children": []
  }, {
    "title": "Windows Setup",
    "slug": "windows-setup",
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
const Image = makeShortcode("Image");
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
<li parentName="ul">{`how to configure your AWS credentials for programmatic access`}</li>
<li parentName="ul">{`how to deploy Webiny in a more controlled and secure manner using our `}<strong parentName="li">{`Deploy Webiny Project`}</strong>{` AWS CloudFormation template`}</li>
</ul>
</Alert>
<p>{`This article guides you through configuring your AWS credentials for programmatic access. At the end of the tutorial, you will have your API keys and region configured to successfully deploy Webiny to your AWS cloud.`}</p>
<p>{`If you prefer the video version, check out our YouTube video below:`}</p>
<YouTube id="qmtDRmplMG4" mdxType="YouTube" />
<hr></hr>
<_Heading level={2} id={"step-1-create-your-aws-account"} nextElement={{
      "type": "jsx"
    }}>Step 1: Create Your AWS Account</_Heading>
<Alert type="info" title="Already have an account?" mdxType="Alert">
<p>{`In that case skip to `}<a parentName="p" {...{
          "href": "#step-2-create-a-user-for-programmatic-access"
        }}>{`step 2`}</a>{` to create your programmatic user.`}</p>
</Alert>
<p>{`To create your AWS account and set up your IAM credentials we should first navigate to the `}<a parentName="p" {...{
        "href": "https://aws.amazon.com/console/"
      }}>{`AWS Console page`}</a>{`:`}</p>
<Image src={_Image1} alt={"aws-sign-in"} mdxType="Image" />
<p>{`Next click on `}<inlineCode parentName="p">{`Create a new AWS account`}</inlineCode>{`:`}</p>
<Image src={_Image2} alt={"aws-login"} mdxType="Image" />
<p>{`Now input your credentials and create your account:`}</p>
<Image src={_Image3} alt={"aws-register"} mdxType="Image" />
<hr></hr>
<_Heading level={2} id={"step-2-create-a-user-for-programmatic-access"} nextElement={{
      "type": "paragraph"
    }}>Step 2: Create a User for Programmatic Access</_Heading>
<p>{`Once you’re registered, login and head to the AWS Management Console and select `}<strong parentName="p">{`IAM`}</strong>{` under `}<strong parentName="p">{`Security, Identity & Compliance`}</strong>{`:`}</p>
<Image src={_Image4} alt={"aws-iam-selection"} mdxType="Image" />
<p>{`Click on `}<strong parentName="p">{`IAM`}</strong>{` and select `}<strong parentName="p">{`Users`}</strong>{` under `}<strong parentName="p">{`Access Management`}</strong>{`:`}</p>
<Image src={_Image5} alt={"aws-iam-users"} mdxType="Image" />
<p>{`Click on `}<strong parentName="p">{`Create user`}</strong>{` to create the account with the IAM credentials:`}</p>
<Image src={_Image6} alt={"aws-create-user"} mdxType="Image" />
<p>{`Here you enter a multi-step process, and the first step is to create a `}<strong parentName="p">{`User name`}</strong>{` for the credentials.`}</p>
<Alert type="warning" title="Programmatic access" mdxType="Alert">
<p>{`Make sure to select the `}<strong parentName="p">{`Programmatic access`}</strong>{` checkbox before moving to the next step.`}</p>
</Alert>
<Image src={_Image7} alt={"aws-user-details"} mdxType="Image" />
<p>{`In the next step, you define the access level for the new user. Select `}<strong parentName="p">{`Attach existing Policies`}</strong>{` from the three options available. Then, choose the `}<strong parentName="p">{`AdministratorAccess`}</strong>{` policy by checking the checkbox next to it. When you’re ready, click the `}<strong parentName="p">{`Next`}</strong>{` button.`}</p>
<Alert type="warning" title="Need a more secure deployment option?" mdxType="Alert">
<p>{`In case your organization cannot use the `}<inlineCode parentName="p">{`AdministratorAccess`}</inlineCode>{` policy or you need to have a more strictly defined set of permissions,
please see the `}<a parentName="p" {...{
          "href": "#deploy-webiny-project-aws-cloud-formation-template"
        }}>{`“Deploy Webiny Project” AWS CloudFormation Template`}</a>{` section.`}</p>
</Alert>
<Image src={_Image8} alt={"aws-user-permissions"} mdxType="Image" />
<p>{`Once all the steps are complete, you’ll reach the `}<strong parentName="p">{`Review and create`}</strong>{` page, which should look similar to image below. If everything is correct, click the `}<strong parentName="p">{`Create user`}</strong>{` button.  `}</p>
<p>{`You can also add tags to new users. If you don’t want to add any tags to your new user, you can simply click the `}<strong parentName="p">{`Create user`}</strong>{` button.`}</p>
<Image src={_Image9} alt={"aws-user-review"} mdxType="Image" />
<p>{`Once the user is created, you will receive a success message: “User created successfully.” Now, we will proceed to create the `}<strong parentName="p">{`Access key`}</strong>{` for this new user.`}</p>
<Image src={_Image10} alt={"aws-new-user-created-successfully"} mdxType="Image" />
<p>{`Click on the newly created user from the Users home page. This will display the user details page. Next, click on the `}<strong parentName="p">{`Create access key`}</strong>{` link.`}</p>
<Image src={_Image11} alt={"access-key-creation"} mdxType="Image" />
<p>{`Select the `}<strong parentName="p">{`Command Line Interface (CLI)`}</strong>{` option, and check the `}<inlineCode parentName="p">{`I understand the above recommendation and want to proceed to create an access key`}</inlineCode>{` confirmation box at the end. Then, click the `}<strong parentName="p">{`Next`}</strong>{` button.`}</p>
<Image src={_Image12} alt={"access-key-use-case"} mdxType="Image" />
<p>{`The next step is optional, where you can set the description tag. Click the `}<strong parentName="p">{`Create access key`}</strong>{` button.`}</p>
<Image src={_Image13} alt={"set-description-tag"} mdxType="Image" />
<p>{`On successful creation of the Access key, you will see a message: `}<strong parentName="p">{`Access key created`}</strong>{`.`}<br parentName="p"></br>{`
`}{`This is the only time that the secret access key can be viewed or downloaded. You cannot recover it later. However, you can create a new access key any time. Copy this `}<em parentName="p">{`Access key`}</em>{` and `}<strong parentName="p">{`Secret access key`}</strong>{`.`}</p>
<Image src={_Image14} alt={"access-key-created-successfully"} mdxType="Image" />
<Alert type="warning" title="Save the credentials" mdxType="Alert">
<p>{`Once you navigate off this screen, you will not be able to see the credentials any more. If you lose them, you will need to delete the user and create a new one.`}</p>
</Alert>
<_Heading level={3} id={"deploy-webiny-project-aws-cloud-formation-template"} nextElement={{
      "type": "jsx"
    }}>&quot;Deploy Webiny Project&quot; AWS CloudFormation Template</_Heading>
<Alert type="info" mdxType="Alert">
<p>{`Please note that an IAM user with programmatic access is a prerequisite for this step.
If you don’t have one, please refer to the `}<_Link href="/docs/5.x/infrastructure/aws/configure-aws-credentials#step-2-create-a-user-for-programmatic-access">{`previous step`}</_Link>{`.`}</p>
</Alert>
<p>{`In order to deploy your Webiny project in a more controlled and secure manner, you can utilize our `}<strong parentName="p">{`Deploy Webiny Project`}</strong>{` AWS CloudFormation template. Via three IAM user groups, the template deploys necessary (`}<a parentName="p" {...{
        "href": "https://en.wikipedia.org/wiki/Principle_of_least_privilege"
      }}>{`least-privilege`}</a>{`) set of permissions into your AWS account, which also automatically get linked with a preexisting Amazon IAM user of your choosing (the user you plan to use upon running deployments).`}</p>
<p>{`To get started, simply click `}<a parentName="p" {...{
        "href": "https://console.aws.amazon.com/cloudformation/home?#/stacks/create/review?templateURL=https://webiny-public.s3.us-east-2.amazonaws.com/cloudformation/DEPLOY_WEBINY_PROJECT_CF_TEMPLATE.yaml&stackName=DeployWebinyProject"
      }}>{`here`}</a>{`.`}</p>
<Alert type={"info"} mdxType="Alert">
{`Before deploying the AWS CloudFormation template, you might want to inspect it. You can do that by
visiting our `}
<ExternalLink href={"https://github.com/webiny/webiny-js/blob/next/docs/DEPLOY_WEBINY_PROJECT_CF_TEMPLATE.yaml"} mdxType="ExternalLink">
{`
GitHub repository`}
</ExternalLink> or <ExternalLink href={"https://webiny-public.s3.us-east-2.amazonaws.com/cloudformation/DEPLOY_WEBINY_PROJECT_CF_TEMPLATE.yaml"} mdxType="ExternalLink">downloading the template from our S3 bucket</ExternalLink>.
  
</Alert>
<_Heading level={2} id={"step-3-configure-the-programmatic-access"} nextElement={{
      "type": "paragraph"
    }}>Step 3: Configure the Programmatic Access</_Heading>
<p>{`Now that you have the `}<strong parentName="p">{`Access key ID`}</strong>{` and `}<strong parentName="p">{`Secret access key`}</strong>{` it’s time to store them on your development machine.`}</p>
<_Heading level={3} id={"unix-setup"} nextElement={{
      "type": "paragraph"
    }}>Unix Setup</_Heading>
<p>{`If you’re on UNIX, create a folder named `}<inlineCode parentName="p">{`.aws`}</inlineCode>{` inside your user folder, that’s `}<inlineCode parentName="p">{`~/.aws`}</inlineCode>{`. Inside that folder place a file called `}<inlineCode parentName="p">{`credentials`}</inlineCode>{`. So the full path is `}<inlineCode parentName="p">{`~/.aws/credentials`}</inlineCode>{`.`}</p>
<_Heading level={3} id={"windows-setup"} nextElement={{
      "type": "paragraph"
    }}>Windows Setup</_Heading>
<p>{`On Windows machines, navigate to your user folder. That’s `}<inlineCode parentName="p">{`C:\\Users\\USERNAME\\`}</inlineCode>{` (replace `}<inlineCode parentName="p">{`USERNAME`}</inlineCode>{` with your actual username). Inside create a new folder named `}<inlineCode parentName="p">{`.aws`}</inlineCode>{`, and inside the `}<inlineCode parentName="p">{`.aws`}</inlineCode>{` folder create a file named `}<inlineCode parentName="p">{`credentials`}</inlineCode>{`. The full path should be like this: `}<inlineCode parentName="p">{`C:\\Users\\USERNAME\\.aws\\credentials`}</inlineCode>{`.`}</p>
<hr></hr>
<p>{`Now that we have our `}<inlineCode parentName="p">{`credentials`}</inlineCode>{` file, edit the file and populate it like so:`}</p>
<Editor title="" lang="plain" mdxType="Editor">
{`[default]
aws_access_key_id = PASTE_ACCESS_KEY_ID_HERE
aws_secret_access_key = PASTE_SECRET_ACCESS_KEY_HERE`}
</Editor>
<p>{`The word `}<inlineCode parentName="p">{`default`}</inlineCode>{` inside the square brackets is your profile name. If you don’t explicitly configure a profile name, the `}<inlineCode parentName="p">{`default`}</inlineCode>{` profile is used by AWS CLI and SDK.`}</p>
{/* ## Step 4: Configure the default region
 The last thing to configure is your default region. It's important to configure the region that is closest to your geographical location for optimal network latency. You can find which region is the most suitable for you using, for example, https://www.cloudping.info/.
 To see the region codes, visit https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints.
 If you don't want to bother with regions, use `us-east-1`.
 ---
 ### Unix setup
 Inside your `.aws` folder, the one we created in the previous step, create a file called `config`. So the full path is `~/.aws/config`.
 ### Windows setup
 Inside your `.aws` folder, the one we created in the previous step, create a file called `config`. The full path should be like this: `C:\Users\USERNAME\.aws\config`.
 ---
 Now that we have our `config` file, edit the file and populate it like so:
 ```plain
 [default]
 region = YOUR_AWS_REGION
 ```
 This means that for your `default` profile, that particular region is used. */}
<p>{`And that’s it! You now have your AWS credentials, your default region, and you’re ready to deploy Webiny.`}</p>
<Alert type="info" title="Using a Different AWS Profile Name?" mdxType="Alert">
<p>{`If you would like to use a different name for your AWS profile, you can do that too. Check out the `}<_Link href="/docs/5.x/infrastructure/aws/use-aws-profiles">{`Use AWS Profiles`}</_Link>{` how-to guide for more information.`}</p>
</Alert>
<_Heading level={2} id={"faq"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>FAQ</_Heading>
<_Heading level={3} id={"is-there-a-way-to-check-if-my-profile-was-set-properly"} nextElement={{
      "type": "paragraph"
    }}>Is There a Way to Check if My Profile Was Set Properly?</_Heading>
<p>{`If you have the `}<a parentName="p" {...{
        "href": "https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html"
      }}>{`AWS CLI`}</a>{` installed on your system, you can run the following command:`}</p>
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