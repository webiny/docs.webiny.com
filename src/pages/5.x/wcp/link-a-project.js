/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image8 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/wcp/assets/link-a-project/link-cicd-step1.png'
import _Image7 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/wcp/assets/link-a-project/link-personal-step4.png'
import _Image6 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/wcp/assets/link-a-project/link-personal-step3.png'
import _Image5 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/wcp/assets/link-a-project/link-personal-step2.png'
import _Image4 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/wcp/assets/link-a-project/link-personal-step1.png'
import _Image3 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/wcp/assets/link-a-project/invite-team-member-step3.png'
import _Image2 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/wcp/assets/link-a-project/invite-team-member-step2.png'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/wcp/assets/link-a-project/invite-team-member-step1.png'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Link a Project",
  "description": "Learn how to connect your Webiny CMS project to Webiny Control Panel",
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
  "title": "Prerequisites",
  "slug": "prerequisites",
  "children": []
}, {
  "title": "Why You Need to Link Your Webiny CMS to WCP?",
  "slug": "why-you-need-to-link-your-webiny-cms-to-wcp",
  "children": []
}, {
  "title": "How to Invite a User to Your WCP Project?",
  "slug": "how-to-invite-a-user-to-your-wcp-project",
  "children": []
}, {
  "title": "How to Link Your Project",
  "slug": "how-to-link-your-project",
  "children": [{
    "title": "Personal Development Environment",
    "slug": "personal-development-environment",
    "children": []
  }, {
    "title": "CI/CD Environment",
    "slug": "ci-cd-environment",
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











<Alert type="success" title="What you'll learn" mdxType="Alert">
<ul>
<li parentName="ul">{`why you need to link your project with WCP`}</li>
<li parentName="ul">{`steps to link your project with WCP`}</li>
</ul>
</Alert>
<_Heading level={2} id={"prerequisites"} nextElement={{
      "type": "paragraph"
    }}>Prerequisites</_Heading>
<p>{`For this guide you will need to have:`}</p>
<ul>
<li parentName="ul">{`A Webiny Control Panel account`}</li>
<li parentName="ul">{`A Webiny CMS instance`}</li>
</ul>
<_Heading level={2} id={"why-you-need-to-link-your-webiny-cms-to-wcp"} nextElement={{
      "type": "paragraph"
    }}>Why You Need to Link Your Webiny CMS to WCP?</_Heading>
<p>{`When you install Webiny CMS, by default, it’s managed as an Open-Source instance. To upgrade your instance to Webiny Business or Enterprise tier you will need to provide a license. The license is created inside Webiny Control Panel (“WCP”). When you create a project in WCP, the project automatically gets a license. You then need to link the WCP project to your Webiny CMS project, which automatically upgrades your Webiny CMS instance to the correct tier. It will also unlock features such as multi-tenancy and access to the additional add-ons. If you make any changes to your WCP project license, they will automatically reflect on your Webiny CMS side for the linked projects.`}</p>
<_Heading level={2} id={"how-to-invite-a-user-to-your-wcp-project"} nextElement={{
      "type": "paragraph"
    }}>How to Invite a User to Your WCP Project?</_Heading>
<p>{`Any developer working on your Webiny CMS project that requires to build and run Webiny CMS inside their personal development environment will need to have a WCP acount and be assigned to your WCP project.`}</p>
<p>{`To invite a team member to a WCP project, a user with `}<inlineCode parentName="p">{`owner`}</inlineCode>{` rights has to perform the following actions. Inside the WCP project navigate to the `}<strong parentName="p">{`Team Members`}</strong>{` tab:`}</p>
<Image src={_Image1} alt={"WCP - Invite team member - Step 1"} mdxType="Image" />
<p>{`Click the `}<inlineCode parentName="p">{`Invite team member`}</inlineCode>{` button and fill out the form:`}</p>
<Image src={_Image2} alt={"WCP - Invite team member - Step 2"} mdxType="Image" />
<p><strong parentName="p">{`Note`}</strong>{`: A user with a role of `}<inlineCode parentName="p">{`Member`}</inlineCode>{` can access the project, see the dashboard, and retrieve the license, but they can’t invite other members or change project settings, for that you need to assign the user a role of `}<inlineCode parentName="p">{`Owner`}</inlineCode>{`.`}</p>
<p>{`Once the form is submitted, the user will receive an invite. If needed, you can revoke the invite by pressing the `}<inlineCode parentName="p">{`Revoke`}</inlineCode>{` button.`}</p>
<Image src={_Image3} alt={"WCP - Invite team member - Step 3"} mdxType="Image" />
<p>{`The invited user now just follows a link in the invite to join your project. If the invited user doesn’t already have a WCP account, they will be asked to create one.`}</p>
<_Heading level={2} id={"how-to-link-your-project"} nextElement={{
      "type": "paragraph"
    }}>How to Link Your Project</_Heading>
<p>{`Depending if you’re a developer working on Webiny CMS project and you need to make some code changes and test them within your own personal development environment, or if you’re looking at retrieving a license inside a CI/CD environment, there are different steps you will need to take.`}</p>
<_Heading level={3} id={"personal-development-environment"} nextElement={{
      "type": "paragraph"
    }}>Personal Development Environment</_Heading>
<p>{`As a user with an access to a WCP project, open your terminal and navigate to your Webiny CMS project folder, inside the Webiny CMS project, run the following command:`}</p>
<Editor title="" lang="shell" mdxType="Editor">
{`yarn webiny login`}
</Editor>
<Alert type="info" title="Where's my Webiny CMS project folder?" mdxType="Alert">
<p>{`If you don’t have a Webiny CMS project, you will need to check out one from your teams version control. If you’re just creating a new project, you can follow the `}<_Link href="/docs/5.x/get-started/install-webiny">{`get started tutorial`}</_Link>{`.`}</p>
</Alert>
<p>{`This will bring up the WCP login page:`}</p>
<Image src={_Image4} alt={"WCP - Link project inside personal development environment - Step 1"} mdxType="Image" />
<p>{`Type in your username and password and you should see a success message in your browser:`}</p>
<Image src={_Image5} alt={"WCP - Link project inside personal development environment - Step 2"} mdxType="Image" />
<p>{`You can now return back to your terminal, and you’ll see another success message in there as well:`}</p>
<Image src={_Image6} alt={"WCP - Link project inside personal development environment - Step 3"} mdxType="Image" />
<p>{`At this point your Webiny CMS project is linked to WCP, now you just need to link it to a specific WCP Project so the license can be retrieved. To do that, run the following command which will display a list of all the WCP projects you have access to:`}</p>
<Editor title="" lang="shell" mdxType="Editor">
{`yarn webiny project link`}
</Editor>
<p>{`And all it’s left to do is to select a project from the list. `}<strong parentName="p">{`Note`}</strong>{`: if you have access to only one WCP project, the command will automatically link you to that one.`}</p>
<Image src={_Image7} alt={"WCP - Link project inside personal development environment - Step 4"} mdxType="Image" />
<p>{`Once you select your project, you are pretty much done, all you need to do, is to `}<_Link href="/docs/5.x/core-development-concepts/basics/project-deployment">{`deploy it`}</_Link>{`.`}</p>
<Alert type="info" title="Project already defined" mdxType="Alert">
<p>{`If the project owner previously linked the project, the `}<inlineCode parentName="p">{`id`}</inlineCode>{` of the project will already be present in the root `}<inlineCode parentName="p">{`webiny.project.ts`}</inlineCode>{` file, meaning other users don’t need to link the project themselves here. Once they’re logged in, they’re good to go.`}</p>
</Alert>
<_Heading level={3} id={"ci-cd-environment"} nextElement={{
      "type": "jsx"
    }}>CI/CD Environment</_Heading>
<Alert type={"info"} mdxType="Alert">
<p>{`Before proceeding with the following steps, make sure your Webiny project is linked and that your `}<inlineCode parentName="p">{`webiny.project.ts`}</inlineCode>{` configuration file contains the ID of your WCP project.`}</p>
<p>{`If you’ve successfully completed the steps outlined in the `}<a parentName="p" {...{
          "href": "#personal-development-environment"
        }}>{`previous section`}</a>{`, the ID should already be assigned. If not, the ID of your WCP project should be assigned manually, via the `}<inlineCode parentName="p">{`id`}</inlineCode>{` property. For example:`}</p>
<Editor title="" lang="diff-ts" mdxType="Editor">
{`// Import statements removed for brevity.

export default {
    // A WCP project ID uses the {orgId}/{projectId} structure.
+   id: "webiny-test/webiny-test-project", //
    template: "@webiny/cwp-template-aws@5.34.6-beta.1",
    name: "beta5346-1-es",
    cli: {
        // ...
    },
    appAliases: {
        core: "apps/core",
        api: "apps/api",
        admin: "apps/admin",
        website: "apps/website"
    }
};`}
</Editor>
<p>{`To retrieve the ID, within the WCP application, simply navigate to your project and copy/paste the ID from the URL.`}</p>
</Alert>
<p>{`Inside a CI/CD environment, linking a Webiny project with WCP is done via a CI/CD environment’s `}<strong parentName="p">{`API key`}</strong>{`.`}</p>
<p>{`To retrieve the API key, within the WCP application, navigate to your project and click on the `}<strong parentName="p">{`CI/CD Environments`}</strong>{` tab. In the CI/CD environments list, click on the `}<strong parentName="p">{`Copy API key`}</strong>{` button, next to the appropriate environment.`}</p>
<Image src={_Image8} alt={"WCP - Link project inside a CI/CD environment - Step 1"} mdxType="Image" />
<p>{`Once copied, the API key needs to be assigned to the `}<inlineCode parentName="p">{`WCP_PROJECT_ENVIRONMENT_API_KEY`}</inlineCode>{` environment variable, for example:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`WCP_PROJECT_ENVIRONMENT_API_KEY=732e4630-af5d-sample-key-22fc89e2dca9`}
</Editor>
<Alert type="warning" title="Don't share API keys between environments" mdxType="Alert">
<p>{`Each CI/CD environment must be using its own environment API key. Sharing keys between different environments will cause WCP to record your monitoring data incorrectly and certain environments might run into API call limits where they shouldn’t. Read more about the limits `}<_Link href="/docs/5.x/wcp/overview">{`here`}</_Link>{`.`}</p>
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