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
  "title": "Overview",
  "description": "Learn the structures of Webiny Control Panel",
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
  "title": "Structure",
  "slug": "structure",
  "children": [{
    "title": "Project License",
    "slug": "project-license",
    "children": []
  }, {
    "title": "WCP Users",
    "slug": "wcp-users",
    "children": []
  }, {
    "title": "CI/CD Environments",
    "slug": "ci-cd-environments",
    "children": []
  }]
}, {
  "title": "Limits",
  "slug": "limits",
  "children": []
}, {
  "title": "⚠Upgrading From the Open-Source Edition",
  "slug": "upgrading-from-the-open-source-edition",
  "children": []
}, {
  "title": "FAQ",
  "slug": "faq",
  "children": []
}];

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
<p>{`Webiny Control Panel (WCP) is currently in beta.`}</p>
</Alert>
<Alert type="success" title="What you'll learn" mdxType="Alert">
<ul>
<li parentName="ul">{`how Webiny Control Panel project is structured`}</li>
<li parentName="ul">{`what are CI/CD environments`}</li>
<li parentName="ul">{`what are personal development environments`}</li>
<li parentName="ul">{`WCP users vs Webiny CMS users`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`Webiny Control Panel (“WCP”) is a SaaS cloud-hosted application that’s managed by Webiny and its goal is to increase the reliability of your self-hosted Webiny CMS project by providing tools for monitoring and observability. WCP is also responsible for managing your Webiny CMS license in case you wish to upgrade from Webiny Open-Source edition to Webiny Business or Webiny Enterprise tier.`}</p>
<Alert type="info" title="Webiny CMS Tiers" mdxType="Alert">
<p>{`To learn more about the different Webiny CMS tiers, please referrer to our `}<a parentName="p" {...{
          "href": "https://www.webiny.com/pricing/"
        }}>{`pricing page`}</a>{`.`}</p>
</Alert>
<_Heading level={2} id={"structure"} nextElement={{
      "type": "paragraph"
    }}>Structure</_Heading>
<p>{`It’s important to understand that WCP is a separate application to Webiny CMS. Webiny CMS is deployed by you on your own AWS cloud, while WCP is a cloud-hosted application managed by Webiny.`}</p>
<p>{`Inside WCP things follow the following hierarchy:`}</p>
<ul>
<li parentName="ul">{`Organization`}
<ul parentName="li">
<li parentName="ul">{`Project A`}
<ul parentName="li">
<li parentName="ul">{`License`}</li>
<li parentName="ul">{`WCP Users`}</li>
<li parentName="ul">{`CI/CD Environments`}</li>
</ul>
</li>
<li parentName="ul">{`Project …N`}</li>
</ul>
</li>
</ul>
<p>{`One organization can have many projects. Each project has a license. The license is what defines which add-ons and how many user seats a Webiny CMS instance can have. A project also has one or more WCP users, which are separate to your CMS users (more on this below). And there can be one or more CI/CD environments which are linked to the project.`}</p>
<Alert type="info" title="What's a Webiny CMS instance?" mdxType="Alert">
<p>{`A single Webiny CMS project can be deployed into multiple CI/CD environments, like `}<inlineCode parentName="p">{`production`}</inlineCode>{`, `}<inlineCode parentName="p">{`development`}</inlineCode>{`, and so on. Also, each individual developer working on the same project will have one or more of their own deployments. Each individual deployment is called a Webiny CMS instance. So, one Webiny CMS project has one or more instances.`}</p>
</Alert>
<_Heading level={3} id={"project-license"} nextElement={{
      "type": "paragraph"
    }}>Project License</_Heading>
<p>{`The project license defines which add-ons and how many Webiny CMS user seats you can have in your Webiny CMS instance.`}</p>
<p>{`A license is retrieved by `}<_Link href="/docs/5.x/wcp/link-a-project">{`linking your WCP project to your Webiny CMS instance`}</_Link>{`. Once the license is linked to a particular Webiny CMS instance, that instance will have the same limits on user seats and can access all the add-ons that license unlocks.`}</p>
<p>{`In practice, a project usually is deployed into many environments, the environment is `}<inlineCode parentName="p">{`production`}</inlineCode>{`, but often times there are additional environments like `}<inlineCode parentName="p">{`development`}</inlineCode>{`, `}<inlineCode parentName="p">{`qa`}</inlineCode>{`, `}<inlineCode parentName="p">{`staging`}</inlineCode>{` and so on. Each environment has it’s own Webiny CMS instance. Also, each developer working on a project will often times run a personal development environment with an instance of their own, or in some cases they might have multiple of these.`}</p>
<p>{`WCP allows you to link a single license to as many long-lived environments (`}<inlineCode parentName="p">{`production`}</inlineCode>{`, `}<inlineCode parentName="p">{`development`}</inlineCode>{`, …), which we call CI/CD environments, as you require. In addition to that, a WCP user, who is often times also a developer working on the project, they can have as many personal development environments as they need, and can link the same license. The license quotas are per-environment. For example, if you have a license with 10 user seats, and you have 5 personal development environments and 3 long-lived CI/CD environments, each of these Webiny CMS instance can have a maximum of 10 user seats individually.`}</p>
<_Heading level={3} id={"wcp-users"} nextElement={{
      "type": "paragraph"
    }}>WCP Users</_Heading>
<p>{`WCP users are separate from your Webiny CMS users. You can have as many WCP users as you need, and they are free of charge. WCP users do not have access to your Webiny CMS instances. Webiny CMS instances have their own independent user pools.`}</p>
<p>{`A WCP user with an access to a specific WCP project can retrieve the license for that Webiny CMS project and use the license in their own personal development environment. Personal development environments are environments owned by individual developers working on the project. In order for the developers to work efficiently they need to have access to the same Webiny CMS add-ons as the production environment. By having them as part of the WCP project, they gain that access.`}</p>
<Alert type="info" title="Learn more" mdxType="Alert">
<p>{`To learn how to retrieve a license inside your own personal development environment, `}<_Link href="/docs/5.x/wcp/link-a-project#personal-development-environment">{`check this guide`}</_Link>{`.`}</p>
</Alert>
<_Heading level={3} id={"ci-cd-environments"} nextElement={{
      "type": "paragraph"
    }}>CI/CD Environments</_Heading>
<p>{`Similarly to WCP users who require access to the Webiny CMS license to do their work, deploying your Webiny CMS instance through a CI/CD pipeline into different long-lived environments, be that for testing or QA, that CI/CD pipeline requires access to all the add-ons the license unlocks.`}</p>
<p>{`Inside WCP project dashboard, you can create additional CI/CD environments and each will get its own `}<strong parentName="p">{`API key`}</strong>{`. Inside your CI/CD pipeline you will use that `}<strong parentName="p">{`API key`}</strong>{` to retrieve the license. The reason each CI/CD environment requires a separate `}<strong parentName="p">{`API key`}</strong>{` is that the analytics data that your Webiny CMS instance sends back to WCP is per-environment and you don’t want the `}<inlineCode parentName="p">{`production`}</inlineCode>{` data to be mixed with say data from the `}<inlineCode parentName="p">{`development`}</inlineCode>{` environment.`}</p>
<p>{`Same as for WCP users, you can have as many CI/CD environments as you need, and they don’t come with any extra cost.`}</p>
<p>{`Every WCP project you create will have a CI/CD environment called `}<inlineCode parentName="p">{`production`}</inlineCode>{` by default. You cannot delete this environment, and you need to use the `}<strong parentName="p">{`API key`}</strong>{` that comes with this environment in your true `}<inlineCode parentName="p">{`production`}</inlineCode>{` environment. You can only have one production environment per WCP project. See the limits section below for more details.`}</p>
<Alert type="info" title="Learn more" mdxType="Alert">
<p>{`To learn how to retrieve a license inside CI/CD environment, `}<_Link href="/docs/5.x/wcp/link-a-project#ci-cd-environment">{`check this guide`}</_Link>{`.`}</p>
</Alert>
<_Heading level={2} id={"limits"} nextElement={{
      "type": "paragraph"
    }}>Limits</_Heading>
<p>{`Both CI/CD and personal development environments have a limit on the number of user seats. The limit is set by your project’s license and it’s per-environment.`}</p>
<p>{`All environments, but with the exception of the `}<inlineCode parentName="p">{`production`}</inlineCode>{` CI/CD environment have a soft-limit on 5,000 API calls per day.
The `}<inlineCode parentName="p">{`production`}</inlineCode>{` CI/CD environment license has no limit on the number of API calls.`}</p>
<Alert type="info" title="Increasing the API call limit" mdxType="Alert">
<p>{`In case you require a higher API calls limit on non-production environments, please `}<a parentName="p" {...{
          "href": "mailto:support@webiny.com"
        }}>{`contact us`}</a>{`.`}</p>
</Alert>
<_Heading level={2} id={"upgrading-from-the-open-source-edition"} nextElement={{
      "type": "paragraph"
    }}>⚠Upgrading From the Open-Source Edition</_Heading>
<p>{`When you upgrade from the Open-Source edition to the Business tier, your project will automatically upgrade to a multi-tenancy setup. This upgrade will affect how your API works.`}</p>
<p>{`In the Open-Source edition you can access the API by pointing a request to the GraphQL endpoint and optionally providing an auth token.`}</p>
<p>{`However, in a multi-tenancy setup, you also need to provide a header that identifies which tenant you are accessing, otherwise the API will fail with an error. To correct this, you must send a `}<inlineCode parentName="p">{`x-tenant`}</inlineCode>{` header together with your GraphQL request. The value of `}<inlineCode parentName="p">{`x-tenant`}</inlineCode>{` header needs to be either `}<inlineCode parentName="p">{`root`}</inlineCode>{` to access the root tenant, or the tenant ID, which you can get from the Tenant Manager app in your admin area.`}</p>
<_Heading level={2} id={"faq"} nextElement={{
      "type": "paragraph"
    }}>FAQ</_Heading>
<p><strong parentName="p">{`What’s the difference between a user in WCP and a user in Webiny CMS?`}</strong></p>
<p>{`WCP is a separate application to your Webiny CMS instance. WCP users are free and are separate to the seat limit you have in your license. Only users inside your Webiny CMS instance are counted towards your user seat usage.`}</p>
<p><strong parentName="p">{`Do I need to have a WCP project if I want to use Webiny CMS?`}</strong></p>
<p>{`If you only need features from Webiny Open-Source edition, you don’t need to have a WCP project. However, if you wish to use features only available in Webiny Business or Webiny Enterprise tier, you will need to have a WCP account and a project.`}</p>
<Alert type="info" title="Webiny CMS Tiers" mdxType="Alert">
<p>{`To learn more about the different Webiny CMS tiers, please referrer to our `}<a parentName="p" {...{
          "href": "https://www.webiny.com/pricing/"
        }}>{`pricing page`}</a>{`.`}</p>
</Alert>
<p>{`For more questions, ping us on our `}<a parentName="p" {...{
        "href": "https://www.webiny.com/slack/"
      }}>{`community Slack`}</a>{`, or drop us an `}<a parentName="p" {...{
        "href": "mailto:support@webiny.com"
      }}>{`email`}</a>{`.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;