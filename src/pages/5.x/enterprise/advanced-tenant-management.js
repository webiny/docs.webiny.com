/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import cmsGroupAndModel from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/enterprise/assets/tenant-management/cms-group-and-model.png";
import apiMutation from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/enterprise/assets/tenant-management/api-mutation.png";
import companiesList from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/enterprise/assets/tenant-management/companies-list.png";
import companyEntryForm from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/enterprise/assets/tenant-management/company-entry-form.png";
import customTenantTHeme from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/enterprise/assets/tenant-management/custom-tenant-theme.png";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Advanced Tenant Management",
  "description": "Learn how to build a custom tenant management module using Webiny Headless CMS.",
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
  "title": "Goals",
  "slug": "goals",
  "children": []
}, {
  "title": "Tenant Content Model",
  "slug": "tenant-content-model",
  "children": []
}, {
  "title": "Create and Install a Company Tenant",
  "slug": "create-and-install-a-company-tenant",
  "children": []
}, {
  "title": "GraphQL Mutation to Create and Install a Tenant",
  "slug": "graph-ql-mutation-to-create-and-install-a-tenant",
  "children": []
}, {
  "title": "Table Column to Install and Access a Tenant",
  "slug": "table-column-to-install-and-access-a-tenant",
  "children": []
}, {
  "title": "Disable Company Publishing",
  "slug": "disable-company-publishing",
  "children": []
}, {
  "title": "Tenant Theming",
  "slug": "tenant-theming",
  "children": []
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
const CanIUseThis = makeShortcode("CanIUseThis");
const WhatYouWillLearn = makeShortcode("WhatYouWillLearn");
const Gallery = makeShortcode("Gallery");
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








<CanIUseThis enterprise={true} since={"5.40.0"} mdxType="CanIUseThis" />
<WhatYouWillLearn mdxType="WhatYouWillLearn">
<ul>
<li parentName="ul">{`how to manage tenants via a Headless CMS content model`}</li>
<li parentName="ul">{`how to programmatically install tenants`}</li>
<li parentName="ul">{`how to change Admin app theme per tenant at runtime`}</li>
</ul>
</WhatYouWillLearn>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`Out of the box, Webiny provides a very basic module to manage tenants, called Tenant Manager. We’ve talked about this module in the article on `}<_Link href="/docs/5.x/enterprise/multi-tenancy">{`Multi-Tenancy`}</_Link>{`. This module allows you to create tenants, tag them, and assign custom domains for website routing (assuming you’re using our Page Builder to build your website). This works well for managing of a small number of tenants. However, if you need to manage hundreds, or even thousands of tenants, that UI will quickly become unsuitable for the task.`}</p>
<p>{`Building a tenant management system to satisfy a wide variety of business use cases is difficult, because every business domain has its own definition of a tenant. In some projects, a tenant would be represented by a “Company”, in other projects, tenant would be a “Brand”, etc. Webiny allows you to use the tenancy API to closely integrate its tenants (used for data separation), with your business domain, and have a flawless tenant management experience, which follows your business rules.`}</p>
<_Heading level={2} id={"goals"} nextElement={{
      "type": "paragraph"
    }}>Goals</_Heading>
<p>{`In the next couple of sections, we’ll explain how you can build your own tenant manager, which perfectly fits your business and your business terminology, using Headless CMS and the programmatic API for multi-tenancy.`}</p>
<p>{`We’ll implement the following items:`}</p>
<ul>
<li parentName="ul">{`a content model that represents a tenant in the context of your business domain`}</li>
<li parentName="ul">{`a GraphQL mutation to execute Webiny tenant creation and installation`}</li>
<li parentName="ul">{`a custom table column to trigger the GraphQL mutation from the UI`}</li>
<li parentName="ul">{`apply custom tenant theme (colors and logo) to the Webiny Admin app`}</li>
</ul>
<Gallery mdxType="Gallery">
  <Image src={cmsGroupAndModel} title={"Content Model and Group via Plugin"} mdxType="Image" />
  <Image src={apiMutation} title={"GraphQL Mutation to Create and Install Tenants"} mdxType="Image" />
  <Image src={companiesList} title={"Company Entries"} mdxType="Image" />
  <Image src={companyEntryForm} title={"Company Entry Form"} mdxType="Image" />
  <Image src={customTenantTHeme} title={"Custom Tenant Theme"} mdxType="Image" />
</Gallery>
<Alert type="warning" title="Using the Source Code" mdxType="Alert">
<p>{`The full source code for this article is located in the `}<a parentName="p" {...{
          "href": "https://github.com/webiny/webiny-examples/tree/master/cms-tenant-management/5.40.x"
        }}>{`Webiny Examples`}</a>{` repository. Instructions on setting up the demo source code in your own project are located in the `}<a parentName="p" {...{
          "href": "https://github.com/webiny/webiny-examples/tree/master/cms-tenant-management/5.40.x/README.md"
        }}>{`README.md`}</a>{` file next to the source code.`}</p>
</Alert>
<Alert type="info" title={"Important!"} mdxType="Alert">
<p>{`In this article, we’ll be referring to `}<a parentName="p" {...{
          "href": "https://github.com/webiny/webiny-examples/tree/master/cms-tenant-management/5.40.x"
        }}>{`the full source
code`}</a>{` hosted
in the Webiny Examples repository, and only describing the process and the outcomes.`}</p>
</Alert>
<_Heading level={2} id={"tenant-content-model"} nextElement={{
      "type": "paragraph"
    }}>Tenant Content Model</_Heading>
<p>{`To begin, we need to `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-examples/blob/master/cms-tenant-management/5.40.x/extensions/api/src/companyModel.ts"
      }}>{`create a content model`}</a>{` which represents a business tenant in our system, which we’ll use to create the low-level tenants within Webiny. We’ve created a content model plugin via code, as described in the `}<_Link href="/docs/5.x/headless-cms/extending/content-models-via-code">{`Define Content Models via Code`}</_Link>{` article.`}</p>
<p>{`In our example, we named our model `}<em parentName="p">{`Company`}</em>{`, and created a few basic attributes: `}<inlineCode parentName="p">{`name`}</inlineCode>{`, `}<inlineCode parentName="p">{`description`}</inlineCode>{`, `}<inlineCode parentName="p">{`theme`}</inlineCode>{` (with `}<inlineCode parentName="p">{`primaryColor`}</inlineCode>{`, `}<inlineCode parentName="p">{`secondaryColor`}</inlineCode>{`, and `}<inlineCode parentName="p">{`logo`}</inlineCode>{` attributes), and a hidden boolean attribute called `}<inlineCode parentName="p">{`isInstalled`}</inlineCode>{`.`}</p>
<p>{`As you develop your system, you will most likely have many more attributes, but this should be enough to describe the concept and the mechanics involved.`}</p>
<p>{`When deployed, this content model will appear in the navigation menu under our `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-examples/blob/master/cms-tenant-management/5.40.x/extensions/api/src/contentModelGroup.ts"
      }}>{`custom content model group`}</a>{`, and we will be able to create new Company content entries:`}</p>
<Gallery mdxType="Gallery">
  <Image src={cmsGroupAndModel} title={"Content Model and Group"} mdxType="Image" />
  <Image src={companyEntryForm} title={"Company Entry Form"} mdxType="Image" />
</Gallery>
<_Heading level={2} id={"create-and-install-a-company-tenant"} nextElement={{
      "type": "paragraph"
    }}>Create and Install a Company Tenant</_Heading>
<p>{`Now that we have our Company model, we can implement our first use case: `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-examples/blob/master/cms-tenant-management/5.40.x/extensions/api/src/useCases/CreateAndInstallTenant.ts"
      }}>{`Create and Install Tenant`}</a>{`. This use case takes a company id, loads the content entry using the programmatic Headless CMS API, creates an internal Webiny tenant, and installs it. We create a tenant with the id of a Company content entry, to have a 1:1 connection between a Webiny tenant and your business entity.`}</p>
<p>{`This use case class encapsulates a business scenario, and you can run it from different parts of Webiny. Our goal is to be able to run this use case by issuing a GraphQL mutation, and so, we need to create a GraphQL schema plugin next.`}</p>
<_Heading level={2} id={"graph-ql-mutation-to-create-and-install-a-tenant"} nextElement={{
      "type": "paragraph"
    }}>GraphQL Mutation to Create and Install a Tenant</_Heading>
<p><a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-examples/blob/master/cms-tenant-management/5.40.x/extensions/api/src/installTenant.ts"
      }}>{`The following GraphQL schema plugin`}</a>{` exposes a mutation which takes a company id, and runs the `}<inlineCode parentName="p">{`CreateAndInstallTenant`}</inlineCode>{` use case.`}</p>
<Image src={apiMutation} title={"GraphQL Mutation to Create and Install Tenants"} mdxType="Image" />
<p>{`This is just one way of running a use case; you could achieve the same by implementing a custom REST route, or a background task, to install a company in a completely asynchronous manner.`}</p>
<Alert type="info" title="Seeding a Tenant" mdxType="Alert">
<p>{`Keep in mind that, if you plan to seed your new tenant with data, depending on the amount of data you’re seeding, you will most likely want to move that logic to a `}<_Link href="/docs/5.x/core-development-concepts/background-tasks/about-background-tasks">{`background task`}</_Link>{`, since it’s not limited by a 30 seconds API Gateway request timeout. Tenant creation and installation could still be executed as described in this example, but to seed a tenant, you would invoke an asynchronous background task.`}</p>
</Alert>
<_Heading level={2} id={"table-column-to-install-and-access-a-tenant"} nextElement={{
      "type": "paragraph"
    }}>Table Column to Install and Access a Tenant</_Heading>
<p>{`Now we need to `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-examples/blob/master/cms-tenant-management/5.40.x/extensions/admin/src/CompanyEntryList.tsx"
      }}>{`add a piece of UI`}</a>{`, in our example it will be a button, to trigger tenant installation. The table customization API is documented in the `}<_Link href="/docs/5.x/headless-cms/extending/customize-entry-list-table-columns">{`Customize Entry List Table Columns`}</_Link>{` article.`}</p>
<Image src={companiesList} title={"Company Entries"} mdxType="Image" />
<p>{`The “Tenant” column we’ve implemented has several purposes. It relies on our model’s `}<inlineCode parentName="p">{`isInstalled`}</inlineCode>{` attribute to determine whether the tenant has been created and installed. If the tenant hasn’t yet been created, it will render a “Install” button, otherwise, it will render a “Manage” button. Clicking the “Manage” button will switch the Admin app to that tenant.`}</p>
<_Heading level={2} id={"disable-company-publishing"} nextElement={{
      "type": "paragraph"
    }}>Disable Company Publishing</_Heading>
<p>{`In this demo, we `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-examples/blob/master/cms-tenant-management/5.40.x/extensions/admin/src/CompanyEntryList/HidePublishActions.tsx"
      }}>{`hide all actions related to content entry publishing`}</a>{`, as we don’t want the Company content entries to be published. We simply keep them in the `}<inlineCode parentName="p">{`draft`}</inlineCode>{` state. This makes it easier to update data programmatically, since you won’t have to deal with content revisions.`}</p>
<p>{`The way we do it is, we decorate the `}<inlineCode parentName="p">{`usePermission`}</inlineCode>{` hook, and we always return `}<inlineCode parentName="p">{`false`}</inlineCode>{` for `}<inlineCode parentName="p">{`canPublish()`}</inlineCode>{` permission check on the Company model. This, in turn, affects all the UI that uses permission checks.`}</p>
<Alert type="info" title={"Optional Customization"} mdxType="Alert">
<p>{`  This customization is optional. If you `}<em parentName="p">{`do`}</em>{` want to allow Companies to be published, you will have to make some changes on the API side of things. There are pros and cons to both approaches, so do reach out to us on our `}<a parentName="p" {...{
          "href": "https://www.webiny.com/slack"
        }}>{`community slack`}</a>{` and we can discuss the best way forward for your project.`}</p>
</Alert>
<_Heading level={2} id={"tenant-theming"} nextElement={{
      "type": "paragraph"
    }}>Tenant Theming</_Heading>
<p>{`Each Company is allowed to have its own brand attributes, like colors, logo, etc. The `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-examples/blob/master/cms-tenant-management/5.40.x/extensions/admin/src/ApplyCompanyTheme.tsx"
      }}>{`ApplyTenantTheme`}</a>{` component demonstrates how you can programmatically modify the Admin app theme, when a user is accessing the Admin app for a particular Company. `}</p>
<Image src={customTenantTHeme} title={"Custom Tenant Theme"} mdxType="Image" />
<p>{`In our demo, we’re only showing customization of colors and logo, but following this approach, you can customize pretty much anything related to the UI: navigation menu items, dashboard, columns, even functional plugins.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;