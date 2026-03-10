/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.64f62e.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Multi-Tenancy",
  "description": "How Webiny enables managing multiple isolated projects from a single instance.",
  "type": "docs",
  "showPageHeader": true,
  "fullWidth": false,
  "version": "6.0.x"
};
const docsearch = {
  "type": "docs",
  "weight": 100,
  "versions": ["latest", "6.0.x"]
};
const navigation = _navigation;
const versions = _versions;
const tableOfContents = [{
  "title": "Overview",
  "slug": "overview",
  "children": []
}, {
  "title": "How It Works",
  "slug": "how-it-works",
  "children": [{
    "title": "Data Isolation",
    "slug": "data-isolation",
    "children": []
  }, {
    "title": "Default Hierarchy",
    "slug": "default-hierarchy",
    "children": []
  }, {
    "title": "User Access Patterns",
    "slug": "user-access-patterns",
    "children": []
  }]
}, {
  "title": "Implementation",
  "slug": "implementation",
  "children": [{
    "title": "Enabling Multi-Tenancy",
    "slug": "enabling-multi-tenancy",
    "children": []
  }, {
    "title": "Tenant Management API",
    "slug": "tenant-management-api",
    "children": []
  }, {
    "title": "Custom Hierarchies",
    "slug": "custom-hierarchies",
    "children": []
  }]
}, {
  "title": "Common Use Cases",
  "slug": "common-use-cases",
  "children": [{
    "title": "Digital Agencies",
    "slug": "digital-agencies",
    "children": []
  }, {
    "title": "Enterprise Brands",
    "slug": "enterprise-brands",
    "children": []
  }, {
    "title": "SaaS Platforms",
    "slug": "saa-s-platforms",
    "children": []
  }, {
    "title": "Educational Institutions",
    "slug": "educational-institutions",
    "children": []
  }]
}, {
  "title": "Advanced Features",
  "slug": "advanced-features",
  "children": [{
    "title": "Tenant Provisioning",
    "slug": "tenant-provisioning",
    "children": []
  }, {
    "title": "Access Control",
    "slug": "access-control",
    "children": []
  }, {
    "title": "Content Sharing",
    "slug": "content-sharing",
    "children": []
  }]
}, {
  "title": "Best Practices",
  "slug": "best-practices",
  "children": [{
    "title": "Tenant Naming",
    "slug": "tenant-naming",
    "children": []
  }, {
    "title": "Resource Limits",
    "slug": "resource-limits",
    "children": []
  }, {
    "title": "Monitoring",
    "slug": "monitoring",
    "children": []
  }, {
    "title": "Data Migration",
    "slug": "data-migration",
    "children": []
  }]
}, {
  "title": "Performance Considerations",
  "slug": "performance-considerations",
  "children": []
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



<Alert type="success" title="WHAT YOU'LL LEARN" mdxType="Alert">
  - What multi-tenancy is in Webiny - How tenant isolation works - Common multi-tenancy patterns and
  use cases
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`Multi-tenancy in Webiny allows a single instance to serve multiple tenants (clients/projects), each with completely isolated data and configuration. This architecture enables cost-effective management of multiple projects while maintaining strict data separation and security.`}</p>
<Alert type="warning" title="Business License Required" mdxType="Alert">
  Multi-tenancy features including custom hierarchies, granular access control, and automated
  provisioning require a Business or Enterprise license.
</Alert>
<_Heading level={2} id={"how-it-works"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>How It Works</_Heading>
<_Heading level={3} id={"data-isolation"} nextElement={{
      "type": "paragraph"
    }}>Data Isolation</_Heading>
<p>{`Each tenant in Webiny has:`}</p>
<ul>
<li parentName="ul"><strong parentName="li">{`Separate content models`}</strong>{` - No shared schemas between tenants`}</li>
<li parentName="ul"><strong parentName="li">{`Isolated content entries`}</strong>{` - Complete data separation`}</li>
<li parentName="ul"><strong parentName="li">{`Independent assets`}</strong>{` - File storage partitioned by tenant`}</li>
<li parentName="ul"><strong parentName="li">{`Tenant-specific settings`}</strong>{` - Individual configurations`}</li>
</ul>
<p>{`Unlike systems that simulate multi-tenancy with folders or prefixes, Webiny provides true isolation at the database level. Each tenant operates as if it has its own Webiny instance.`}</p>
<_Heading level={3} id={"default-hierarchy"} nextElement={{
      "type": "paragraph"
    }}>Default Hierarchy</_Heading>
<p>{`Webiny implements a two-level hierarchy by default:`}</p>
<Editor title="" lang="null" mdxType="Editor">
{`Root Tenant
├── Child Tenant A
├── Child Tenant B
└── Child Tenant C`}
</Editor>
<ul>
<li parentName="ul"><strong parentName="li">{`Root Tenant`}</strong>{` - Administrative level with oversight capabilities`}</li>
<li parentName="ul"><strong parentName="li">{`Child Tenants`}</strong>{` - Isolated operational tenants`}</li>
</ul>
<_Heading level={3} id={"user-access-patterns"} nextElement={{
      "type": "paragraph"
    }}>User Access Patterns</_Heading>
<p><strong parentName="p">{`Root Tenant Users:`}</strong></p>
<ul>
<li parentName="ul">{`Can access and manage child tenants`}</li>
<li parentName="ul">{`Switch between tenants via UI`}</li>
<li parentName="ul">{`Can be restricted to specific child tenants`}</li>
<li parentName="ul">{`Ideal for administrators and support staff`}</li>
</ul>
<p><strong parentName="p">{`Child Tenant Users:`}</strong></p>
<ul>
<li parentName="ul">{`Access only their own tenant’s data`}</li>
<li parentName="ul">{`No visibility into other tenants`}</li>
<li parentName="ul">{`Standard content management permissions apply`}</li>
</ul>
<_Heading level={2} id={"implementation"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Implementation</_Heading>
<_Heading level={3} id={"enabling-multi-tenancy"} nextElement={{
      "type": "paragraph"
    }}>Enabling Multi-Tenancy</_Heading>
<p>{`Configure in `}<inlineCode parentName="p">{`webiny.config.tsx`}</inlineCode>{`:`}</p>
<Editor title="webiny.config.tsx" lang="tsx" mdxType="Editor">
{`import { MultiTenancy } from "@webiny/multi-tenancy";

export const Extensions = () => {
  return (
    <>
      <MultiTenancy />
      {/* Other extensions */}
    </>
  );
};`}
</Editor>
<_Heading level={3} id={"tenant-management-api"} nextElement={{
      "type": "paragraph"
    }}>Tenant Management API</_Heading>
<p>{`Create and manage tenants programmatically:`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { TenantManager } from "webiny/api/tenancy";

// Create a new tenant
const tenant = await tenantManager.create({
  name: "Client ABC",
  tags: ["agency-client", "tier-premium"],
  settings: {
    locale: "en-US",
    timezone: "America/New_York"
  }
});

// List tenants
const tenants = await tenantManager.list({
  where: {
    tags: { $in: ["agency-client"] }
  }
});`}
</Editor>
<_Heading level={3} id={"custom-hierarchies"} nextElement={{
      "type": "paragraph"
    }}>Custom Hierarchies</_Heading>
<p>{`Extend beyond the default two-level structure:`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`// Example: Region > Country > Brand hierarchy
class CustomTenantHierarchy implements TenantHierarchy.Interface {
  async getParent(tenant: Tenant): Promise<Tenant | null> {
    // Custom parent resolution logic
  }

  async getChildren(tenant: Tenant): Promise<Tenant[]> {
    // Custom children resolution logic
  }
}`}
</Editor>
<_Heading level={2} id={"common-use-cases"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Common Use Cases</_Heading>
<_Heading level={3} id={"digital-agencies"} nextElement={{
      "type": "paragraph"
    }}>Digital Agencies</_Heading>
<p>{`Managing multiple client websites:`}</p>
<ul>
<li parentName="ul">{`Each client is a separate tenant`}</li>
<li parentName="ul">{`Agency staff access via root tenant`}</li>
<li parentName="ul">{`Client users access only their tenant`}</li>
<li parentName="ul">{`Shared templates and components`}</li>
</ul>
<_Heading level={3} id={"enterprise-brands"} nextElement={{
      "type": "paragraph"
    }}>Enterprise Brands</_Heading>
<p>{`Large organizations with multiple properties:`}</p>
<ul>
<li parentName="ul">{`Each brand/division as a tenant`}</li>
<li parentName="ul">{`Central marketing team oversight`}</li>
<li parentName="ul">{`Brand-specific content teams`}</li>
<li parentName="ul">{`Consistent governance across brands`}</li>
</ul>
<_Heading level={3} id={"saa-s-platforms"} nextElement={{
      "type": "paragraph"
    }}>SaaS Platforms</_Heading>
<p>{`Embedding CMS capabilities:`}</p>
<ul>
<li parentName="ul">{`Each customer gets a tenant`}</li>
<li parentName="ul">{`Automated provisioning via API`}</li>
<li parentName="ul">{`Tenant-based billing and limits`}</li>
<li parentName="ul">{`White-label customization per tenant`}</li>
</ul>
<_Heading level={3} id={"educational-institutions"} nextElement={{
      "type": "paragraph"
    }}>Educational Institutions</_Heading>
<p>{`Department or course management:`}</p>
<ul>
<li parentName="ul">{`Departments as tenants`}</li>
<li parentName="ul">{`Central IT administration`}</li>
<li parentName="ul">{`Department-specific content teams`}</li>
<li parentName="ul">{`Shared institutional resources`}</li>
</ul>
<_Heading level={2} id={"advanced-features"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Advanced Features</_Heading>
<_Heading level={3} id={"tenant-provisioning"} nextElement={{
      "type": "paragraph"
    }}>Tenant Provisioning</_Heading>
<p>{`Automate tenant creation:`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`// Hook into user registration
export const OnUserSignup = createEventHandler({
  event: "user.signup",
  async handler({ user }) {
    // Automatically create tenant for new user
    const tenant = await tenantManager.create({
      name: user.organization,
      owner: user.id
    });

    // Set up default content models
    await setupDefaultModels(tenant);

    // Configure permissions
    await assignUserToTenant(user, tenant);
  }
});`}
</Editor>
<_Heading level={3} id={"access-control"} nextElement={{
      "type": "paragraph"
    }}>Access Control</_Heading>
<p>{`Fine-grained tenant permissions:`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`// Restrict root users to specific tenants
const permission = {
  name: "tenant.access",
  tenants: ["tenant-1", "tenant-2"], // Whitelist specific tenants
  actions: ["read", "update"] // Allowed actions
};`}
</Editor>
<_Heading level={3} id={"content-sharing"} nextElement={{
      "type": "paragraph"
    }}>Content Sharing</_Heading>
<p>{`Share content between tenants:`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`// Mark content as shareable
const sharedContent = {
  tenant: "root",
  shared: true,
  allowedTenants: ["*"] // Or specific tenant IDs
};

// Access shared content from child tenant
const content = await cms.listEntries({
  model: "article",
  where: {
    OR: [{ tenant: currentTenant }, { shared: true }]
  }
});`}
</Editor>
<_Heading level={2} id={"best-practices"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Best Practices</_Heading>
<_Heading level={3} id={"tenant-naming"} nextElement={{
      "type": "paragraph"
    }}>Tenant Naming</_Heading>
<p>{`Use consistent naming conventions:`}</p>
<ul>
<li parentName="ul">{`Include identifiers: `}<inlineCode parentName="li">{`client-abc-prod`}</inlineCode></li>
<li parentName="ul">{`Add environment: `}<inlineCode parentName="li">{`client-abc-staging`}</inlineCode></li>
<li parentName="ul">{`Use tags for categorization`}</li>
</ul>
<_Heading level={3} id={"resource-limits"} nextElement={{
      "type": "paragraph"
    }}>Resource Limits</_Heading>
<p>{`Implement per-tenant limits:`}</p>
<ul>
<li parentName="ul">{`Storage quotas`}</li>
<li parentName="ul">{`API rate limiting`}</li>
<li parentName="ul">{`User count restrictions`}</li>
<li parentName="ul">{`Content entry limits`}</li>
</ul>
<_Heading level={3} id={"monitoring"} nextElement={{
      "type": "paragraph"
    }}>Monitoring</_Heading>
<p>{`Track tenant-specific metrics:`}</p>
<ul>
<li parentName="ul">{`API usage per tenant`}</li>
<li parentName="ul">{`Storage consumption`}</li>
<li parentName="ul">{`User activity`}</li>
<li parentName="ul">{`Performance metrics`}</li>
</ul>
<_Heading level={3} id={"data-migration"} nextElement={{
      "type": "paragraph"
    }}>Data Migration</_Heading>
<p>{`Plan for tenant lifecycle:`}</p>
<ul>
<li parentName="ul">{`Tenant cloning for staging`}</li>
<li parentName="ul">{`Data export capabilities`}</li>
<li parentName="ul">{`Tenant archival process`}</li>
<li parentName="ul">{`Cross-tenant migrations`}</li>
</ul>
<_Heading level={2} id={"performance-considerations"} nextElement={{
      "type": "paragraph"
    }}>Performance Considerations</_Heading>
<p>{`Multi-tenancy in Webiny is designed for scale:`}</p>
<ul>
<li parentName="ul"><strong parentName="li">{`Database partitioning`}</strong>{` - Tenant data physically separated`}</li>
<li parentName="ul"><strong parentName="li">{`Query optimization`}</strong>{` - Tenant ID in all queries`}</li>
<li parentName="ul"><strong parentName="li">{`Caching strategies`}</strong>{` - Per-tenant cache keys`}</li>
<li parentName="ul"><strong parentName="li">{`CDN configuration`}</strong>{` - Tenant-specific cache rules`}</li>
</ul>
<p>{`The architecture handles thousands of tenants without performance degradation, making it suitable for large-scale deployments.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;