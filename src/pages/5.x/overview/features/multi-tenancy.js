/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image2 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/overview/features/assets/multi-tenancy/tenant-links.png'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/overview/features/assets/multi-tenancy/webiny-multi-tenancy.jpg'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Multi-tenancy",
  "description": "Overview of how Webiny implements multi-tenancy.",
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
  "title": "What Is Multi-Tenancy?",
  "slug": "what-is-multi-tenancy",
  "children": []
}, {
  "title": "Multi-Tenancy in Webiny",
  "slug": "multi-tenancy-in-webiny",
  "children": []
}, {
  "title": "Tenancy and User Management",
  "slug": "tenancy-and-user-management",
  "children": [{
    "title": "Admin User Management",
    "slug": "admin-user-management",
    "children": []
  }, {
    "title": "Custom User Management",
    "slug": "custom-user-management",
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





<Alert type="success" title="WHAT YOU'LL LEARN" mdxType="Alert">
<ul>
<li parentName="ul">{`Overview of Webiny’s multi-tenancy feature`}</li>
</ul>
</Alert>
<Alert type="warning" title="BUSINESS AND ENTERPRISE EDITION ONLY" mdxType="Alert">
<p>{`This feature is only available in Webiny Business and Enterprise packages. The feature is not available in the Open Source edition.`}</p>
</Alert>
<p>{`Why have dozens of CMS installations to manage when you can have only one?`}</p>
<p>{`This is exactly what multi-tenancy is solving.`}</p>
<p>{`Multi-tenancy is a core feature of Webiny CMS. It allows you to have multiple instances of Webiny CMS with complete data separation between instances, but all are running from the same code-base. It’s a powerful cost-saving feature as it means there’s only one instance to manage, regardless of whether you have 10 or 100 websites.`}</p>
<p>{`Multi-tenancy applies whenever you need multiple Headless CMS projects or multiple Page Builder pages.`}</p>
<p>{`The multi-tenancy feature comes with a flat hierarchy of tenants out of the box. However, in the Webiny Enterprise edition, this hierarchy can be modified to have several levels of depth and inheritance between the tenants.`}</p>
<Image src={_Image1} alt={"Webiny CMS - Multi-tenancy"} mdxType="Image" />
<_Heading level={2} id={"what-is-multi-tenancy"} nextElement={{
      "type": "paragraph"
    }}>What Is Multi-Tenancy?</_Heading>
<p>{`Multi-tenancy is an architecture which allows you to serve multiple customers, called `}<inlineCode parentName="p">{`tenants`}</inlineCode>{`, using a single instance (deployment) of your software.`}</p>
<p>{`Think of a SaaS (Software as a Service) application you may be using: G-Suite, Contentful, even AWS itself. These are all good examples of multi-tenant systems. You have an account (which represents a single user, or an organization), you have your collaborators, and you share some kind of data. Different collaborators have different permissions on the data. All the users of these platforms share the same code base, and it’s running on the same hardware.`}</p>
<_Heading level={2} id={"multi-tenancy-in-webiny"} nextElement={{
      "type": "paragraph"
    }}>Multi-Tenancy in Webiny</_Heading>
<p>{`All Webiny apps are designed to support multi-tenancy. It is implemented as a very thin layer that sits at the very beginning of the API request lifecycle. Every HTTP request must specify a tenant it’s communicating with, using the `}<inlineCode parentName="p">{`X-Tenant`}</inlineCode>{` header. Once a request reaches the request handler, Webiny extracts the header and loads the tenant from the database.`}</p>
<p>{`From this point on, every storage operation (be it a database query, or a search engine query), uses the tenant ID to store and filter data specific to that particular tenant.`}</p>
<Alert type="info" title="What if I don't use multi-tenancy?" mdxType="Alert">
<p>{`Every Webiny project has tenancy baked in. Even if you don’t need multi-tenancy, there’s always a `}<inlineCode parentName="p">{`root`}</inlineCode>{` tenant behind the scenes, and all your data is stored in a multi-tenant manner. Your custom apps, however, don’t need to worry about it if you don’t plan to run them in a multi-tenant environment.`}</p>
</Alert>
<hr></hr>
<p>{`Although this is all tenancy does on a high level, we need to take a quick trip into a completely separate, but still relevant topic to get the complete picture of how tenancy works.`}</p>
<_Heading level={2} id={"tenancy-and-user-management"} nextElement={{
      "type": "paragraph"
    }}>Tenancy and User Management</_Heading>
<p>{`It’s important to note that `}<em parentName="p">{`tenants`}</em>{` and `}<em parentName="p">{`users`}</em>{` are two very different concepts. A `}<em parentName="p">{`tenant`}</em>{` can be anything: an organization, a project, a restaurant - anything that needs to have its data isolated. It very much depends on what you’re developing and the specifics of your project. A `}<em parentName="p">{`tenant`}</em>{` is a generic word that describes a unit with isolated data.`}</p>
<p>{`Tenants can have many `}<em parentName="p">{`users`}</em>{` assigned to them, and each user can have different permissions when accessing different tenants. Here’s a diagram that depicts this concept:`}</p>
<Image src={_Image2} alt={"Tenancy and Users"} mdxType="Image" />
<p>{`And why is all this important? Because when `}<em parentName="p">{`authorization`}</em>{` kicks in, we need to be able to provide permissions that an authenticated user has on the given tenant. This is all Webiny needs to work. A tenant ID and a set of permissions to be able to perform authorization and business logic checks.`}</p>
<_Heading level={3} id={"admin-user-management"} nextElement={{
      "type": "paragraph"
    }}>Admin User Management</_Heading>
<p>{`Out of the box, Webiny provides an implementation of user management for Admin Area users. The implementation contains the concept of users, personal access tokens, API keys and user groups. Each user is assigned to a user group, and during authorization it is able to load the permissions that are configured for that user group.`}</p>
<_Heading level={3} id={"custom-user-management"} nextElement={{
      "type": "paragraph"
    }}>Custom User Management</_Heading>
<p>{`How you manage permissions and links between users and tenants is completely up to you. Every project is very individual, and many things depend on project requirements so Webiny can’t provide a generic implementation that will work for everyone. Moreover, your app can run on a different database, while default Webiny setup runs on DynamoDB.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;