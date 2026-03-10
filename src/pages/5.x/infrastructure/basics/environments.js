/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/infrastructure/basics/assets/environments/environments.png'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Environments",
  "description": "Learn what are environments and how they work in a Webiny project.",
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
  "title": "What Are Environments?",
  "slug": "what-are-environments",
  "children": []
}, {
  "title": "Environments in a Webiny Project",
  "slug": "environments-in-a-webiny-project",
  "children": []
}, {
  "title": "FAQ",
  "slug": "faq",
  "children": [{
    "title": "How Many Different Environments Can a Project Have?",
    "slug": "how-many-different-environments-can-a-project-have",
    "children": []
  }, {
    "title": "Depending on the Environment, Can a Different Cloud Infrastructure Be Deployed?",
    "slug": "depending-on-the-environment-can-a-different-cloud-infrastructure-be-deployed",
    "children": []
  }, {
    "title": "Is It Reasonable to Have Different Cloud Infrastructure Deployed Based on the Environment?",
    "slug": "is-it-reasonable-to-have-different-cloud-infrastructure-deployed-based-on-the-environment",
    "children": []
  }]
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
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
<li parentName="ul">{`what are environments`}</li>
<li parentName="ul">{`how are environments handled in a Webiny project`}</li>
</ul>
</Alert>
<Alert type="warning" title="Just want to deploy?" mdxType="Alert">
<p>{`This article covers the general idea of environments and how they are embedded into a Webiny project. To learn how to deploy your project using `}<_Link href="/docs/5.x/core-development-concepts/basics/webiny-cli">{`Webiny CLI`}</_Link>{`, please visit the `}<_Link href="/docs/5.x/core-development-concepts/basics/project-deployment">{`Deploy your project`}</_Link>{` guide.`}</p>
</Alert>
<_Heading level={2} id={"what-are-environments"} nextElement={{
      "type": "paragraph"
    }}>What Are Environments?</_Heading>
<p>{`Your project can be deployed into multiple environments.`}</p>
<p>{`This means that you can have multiple “copies” of your project up and running at the same time, each having its own name and purpose.`}</p>
<p>{`Every project most certainly has an environment called `}<strong parentName="p">{`production`}</strong>{`. This is the environment that represents “the real thing” - the system that’s being used by real users. It’s in your best interest to ensure this system is always online and the code that makes it into this environment is well tested. In order to achieve this, you deploy your project to a number of pre-production environments.`}</p>
<p>{`For example, you might have multiple `}<strong parentName="p">{`development`}</strong>{` environments, to which developers can deploy their changes, ready to be tested by the rest of the team. Once the changes have been approved, an additional round of testing can be done in a `}<strong parentName="p">{`preview`}</strong>{`, or more commonly called, `}<strong parentName="p">{`staging`}</strong>{` environment. This is the environment that’s the closest to the `}<strong parentName="p">{`production`}</strong>{` environment in terms of the code, different configurations, cloud infrastructure, and so on.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`For best practices on how to organize your environments and other workflows, check out the `}<_Link href="/docs/5.x/core-development-concepts/ci-cd/workflows">{`Workflows`}</_Link>{` section.`}</p>
</Alert>
<_Heading level={2} id={"environments-in-a-webiny-project"} nextElement={{
      "type": "paragraph"
    }}>Environments in a Webiny Project</_Heading>
<p>{`Every project application can be deployed into several different environments. For example, we might have three applications in our project, and for each, we might want to have three different environments: `}<strong parentName="p">{`dev`}</strong>{`, `}<strong parentName="p">{`staging`}</strong>{`, and `}<strong parentName="p">{`production`}</strong>{`.`}</p>
<Image src={_Image1} alt={"Environments."} mdxType="Image" />
<p>{`Note that Webiny does `}<strong parentName="p">{`not`}</strong>{` sync environments across your project applications. Meaning, if you want to deploy your entire project into a specific environment, you need to deploy every application into it. So, in the case of the above project, you would need to deploy all three applications.`}</p>
<p>{`Fortunately, Webiny makes it easy to work with different environments, using the `}<_Link href="/docs/5.x/core-development-concepts/basics/webiny-cli">{`Webiny CLI`}</_Link>{` and `}<_Link href="/docs/5.x/infrastructure/pulumi-iac/iac-with-pulumi">{`Pulumi`}</_Link>{`. Be sure to check out the `}<_Link href="/docs/5.x/core-development-concepts/basics/project-deployment">{`Deploy your project`}</_Link>{` guide to learn how to deploy a Webiny project.`}</p>
<Alert type="danger" title="Watch out for extra costs" mdxType="Alert">
<p>{`Deploying multiple project environments into the same AWS account may incur additional cost. Check out the `}<_Link href="/docs/5.x/architecture/introduction">{`Cloud Infrastructure`}</_Link>{` section for more information.`}</p>
</Alert>
<_Heading level={2} id={"faq"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>FAQ</_Heading>
<_Heading level={3} id={"how-many-different-environments-can-a-project-have"} nextElement={{
      "type": "paragraph"
    }}>How Many Different Environments Can a Project Have?</_Heading>
<p>{`The answer is: as many as needed. There is no limit on the count of different environments you can deploy.`}</p>
<_Heading level={3} id={"depending-on-the-environment-can-a-different-cloud-infrastructure-be-deployed"} nextElement={{
      "type": "paragraph"
    }}>Depending on the Environment, Can a Different Cloud Infrastructure Be Deployed?</_Heading>
<p>{`This can be done. Since the cloud infrastructure is defined using code, nothing prevents you from using a couple of `}<inlineCode parentName="p">{`if`}</inlineCode>{` statements to determine which resources need to be deployed.`}</p>
<_Heading level={3} id={"is-it-reasonable-to-have-different-cloud-infrastructure-deployed-based-on-the-environment"} nextElement={{
      "type": "paragraph"
    }}>Is It Reasonable to Have Different Cloud Infrastructure Deployed Based on the Environment?</_Heading>
<p>{`In certain cases, this might be reasonable. For example, you can reduce development costs by not deploying custom VPCs (and related cloud infrastructure resources) for development environments. You only deploy the full set of cloud infrastructure resources into `}<strong parentName="p">{`staging`}</strong>{` and `}<strong parentName="p">{`production`}</strong>{` environments.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`Depending on the environment, the `}<strong parentName="p">{`API`}</strong>{` project application is deployed as two different sets of cloud infrastructure resources - development and production. Visit the `}<_Link href="/docs/5.x/architecture/deployment-modes/development">{`API Overview - Default VPC`}</_Link>{` key topic to learn more.`}</p>
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