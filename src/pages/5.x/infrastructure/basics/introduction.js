/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image2 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/infrastructure/basics/assets/introduction/dependent-applications.png'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/infrastructure/basics/assets/introduction/deploy-applications.png'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Introduction",
  "description": "Learn what are deployments and how they work with Webiny.",
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
  "title": "Deploying Project Applications - Not Projects",
  "slug": "deploying-project-applications-not-projects",
  "children": []
}, {
  "title": "Dependent Project Applications",
  "slug": "dependent-project-applications",
  "children": []
}, {
  "title": "FAQ",
  "slug": "faq",
  "children": [{
    "title": "What Does Webiny Use to Deploy Cloud Infrastructure?",
    "slug": "what-does-webiny-use-to-deploy-cloud-infrastructure",
    "children": []
  }, {
    "title": "Is There a Built-in Command That Destroys the Whole Project?",
    "slug": "is-there-a-built-in-command-that-destroys-the-whole-project",
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
<li parentName="ul">{`what does it mean to deploy a project application`}</li>
<li parentName="ul">{`what does it mean to deploy a Webiny project`}</li>
</ul>
</Alert>
<Alert type="warning" title="Just want to deploy?" mdxType="Alert">
<p>{`This key topics section provides general information on deployments, how they work in a Webiny project, what are environments, and other relevant topics. If you just want to learn how to deploy your project using `}<_Link href="/docs/5.x/core-development-concepts/basics/webiny-cli">{`Webiny CLI`}</_Link>{`, please visit the `}<_Link href="/docs/5.x/core-development-concepts/basics/project-deployment">{`Deploy your project`}</_Link>{` guide.`}</p>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`Project deployment is an important part of an application development lifecycle.`}</p>
<p>{`Essentially, deploying your project entails the deployment of necessary cloud infrastructure resources with the application code you wrote. It can be done from your machine directly, which is usually the case when developing, or from a remote environment, for example CI/CD systems, that, based on provided instructions, deploy your project automatically for you.`}</p>
<p>{`Whatever the case, Webiny makes it easy to both build and deploy your project, using the `}<_Link href="/docs/5.x/core-development-concepts/basics/webiny-cli">{`Webiny CLI`}</_Link>{` and `}<_Link href="/docs/5.x/infrastructure/pulumi-iac/iac-with-pulumi">{`Pulumi`}</_Link>{` as the default infrastructure as code and deployment solution. Additionally, without any special configuration, you can also easily deploy your project into multiple `}<_Link href="/docs/5.x/infrastructure/basics/environments">{`environments`}</_Link>{`.`}</p>
<Alert type="info" title="Cloud Infrastructure" mdxType="Alert">
<p>{`After a new Webiny project was set up, the next step is to deploy it. Learn what gets deployed into the cloud (your AWS account) and how it all works in the `}<_Link href="/docs/5.x/architecture/introduction">{`Cloud Infrastructure`}</_Link>{` key topics section.`}</p>
</Alert>
<_Heading level={2} id={"deploying-project-applications-not-projects"} nextElement={{
      "type": "paragraph"
    }}>Deploying Project Applications - Not Projects</_Heading>
<p>{`As explained in the `}<_Link href="/docs/5.x/core-development-concepts/project-organization/project-applications-and-packages">{`Project Applications and Packages`}</_Link>{` section, every Webiny project can consist of one or more project applications. Furthermore, every project application consists of `}<_Link href="/docs/5.x/core-development-concepts/project-organization/project-applications">{`application code and the necessary infrastructure`}</_Link>{` that’s needed in order to run it.`}</p>
<p>{`With that in mind, it’s important to note that when talking about deployments, we’re talking about `}<strong parentName="p">{`deploying project applications, not projects`}</strong>{`. Meaning, if your project consisted of three project applications, in order to deploy the project completely, you would need to execute three separate Webiny CLI commands.`}</p>
<Image src={_Image1} alt={"Deploying project applications, not projects."} mdxType="Image" />
<Alert type="info" mdxType="Alert">
<p>{`If you just want to learn how to deploy your project using `}<_Link href="/docs/5.x/core-development-concepts/basics/webiny-cli">{`Webiny CLI`}</_Link>{`, please visit the `}<_Link href="/docs/5.x/core-development-concepts/basics/project-deployment">{`Deploy your project`}</_Link>{` guide.`}</p>
</Alert>
<_Heading level={2} id={"dependent-project-applications"} nextElement={{
      "type": "paragraph"
    }}>Dependent Project Applications</_Heading>
<p>{`As stated in the section above, fully deploying a Webiny project entails deploying all of its project applications.`}</p>
<p>{`Although it might sound simple enough, one thing we still have to take into consideration are dependent applications. In the `}<_Link href="/docs/5.x/core-development-concepts/project-organization/project-applications-and-packages#package-and-project-application-dependencies">{`Project Applications and Packages`}</_Link>{` key topic, it’s shown that applications can be dependent on each other. For example, if we had two applications, where one represents an HTTP API, and the other a React application that relies on the API, that means the former needs to be deployed before the latter. We can’t deploy a React application and expect it to work if we don’t know the URL of the API to which it needs to talk to.`}</p>
<Image src={_Image2} alt={"Dependent project applications."} mdxType="Image" />
<p>{`So, as we can see, the order of deploying does matter.`}</p>
<p>{`This is the reason why, out of the box, Webiny does not provide any CLI commands for complete project deployment. The order is something Webiny cannot predict and it’s up to the developers to come up with a process for complete project deployment if need be.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`Still, to make it a bit easier for new users, every new Webiny project does include a helper `}<inlineCode parentName="p">{`yarn webiny deploy`}</inlineCode>{` command. This command deploys the three applications that are included in a Webiny project by default. To learn more, visit the `}<_Link href="/docs/5.x/core-development-concepts/basics/project-deployment">{`Deploy your project`}</_Link>{` guide.`}</p>
</Alert>
<_Heading level={2} id={"faq"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>FAQ</_Heading>
<_Heading level={3} id={"what-does-webiny-use-to-deploy-cloud-infrastructure"} nextElement={{
      "type": "paragraph"
    }}>What Does Webiny Use to Deploy Cloud Infrastructure?</_Heading>
<p>{`Webiny uses Pulumi, a modern infrastructure as code solution. Find out more in the following `}<_Link href="/docs/5.x/infrastructure/pulumi-iac/iac-with-pulumi">{`IaC with Pulumi`}</_Link>{` key topic.`}</p>
<_Heading level={3} id={"is-there-a-built-in-command-that-destroys-the-whole-project"} nextElement={{
      "type": "paragraph"
    }}>Is There a Built-in Command That Destroys the Whole Project?</_Heading>
<p>{`At the moment, there is not. To do that, run separate `}<inlineCode parentName="p">{`webiny destroy`}</inlineCode>{` commands on each project application. Please visit the `}<_Link href="/docs/5.x/core-development-concepts/basics/project-deployment">{`Deploy your project`}</_Link>{` guide to learn more.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;