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
  "title": "Applications",
  "description": "Overview of Webiny's built-in applications and how they work together.",
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
  "title": "Core Applications",
  "slug": "core-applications",
  "children": [{
    "title": "Headless CMS",
    "slug": "headless-cms",
    "children": []
  }, {
    "title": "Website Builder",
    "slug": "website-builder",
    "children": []
  }, {
    "title": "File Manager",
    "slug": "file-manager",
    "children": []
  }, {
    "title": "Publishing Workflows",
    "slug": "publishing-workflows",
    "children": []
  }, {
    "title": "Admin",
    "slug": "admin",
    "children": []
  }]
}, {
  "title": "Application Architecture",
  "slug": "application-architecture",
  "children": [{
    "title": "Deployment Structure",
    "slug": "deployment-structure",
    "children": []
  }, {
    "title": "Data Flow",
    "slug": "data-flow",
    "children": []
  }, {
    "title": "Extension Points",
    "slug": "extension-points",
    "children": []
  }]
}, {
  "title": "Working With Applications",
  "slug": "working-with-applications",
  "children": [{
    "title": "Enabling/Disabling",
    "slug": "enabling-disabling",
    "children": []
  }, {
    "title": "Cross-Application Features",
    "slug": "cross-application-features",
    "children": []
  }]
}, {
  "title": "Custom Applications",
  "slug": "custom-applications",
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
  - What applications come with Webiny - How applications integrate with each other - The role of
  each application in the platform
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`Webiny includes several pre-built applications that work together to provide a complete content platform. Each application is built using the Webiny Framework and can be extended or customized through the extension system.`}</p>
<_Heading level={2} id={"core-applications"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Core Applications</_Heading>
<_Heading level={3} id={"headless-cms"} nextElement={{
      "type": "paragraph"
    }}>Headless CMS</_Heading>
<p>{`The foundation of Webiny’s content management capabilities. Provides:`}</p>
<ul>
<li parentName="ul"><strong parentName="li">{`GraphQL API`}</strong>{` - Query and mutate content programmatically`}</li>
<li parentName="ul"><strong parentName="li">{`Content Modeling`}</strong>{` - Define custom content types with fields and validations`}</li>
<li parentName="ul"><strong parentName="li">{`Versioning`}</strong>{` - Track content changes with revision history`}</li>
<li parentName="ul"><strong parentName="li">{`Localization`}</strong>{` - Multi-language content support`}</li>
<li parentName="ul"><strong parentName="li">{`Access Control`}</strong>{` - Fine-grained permissions per content model`}</li>
</ul>
<p>{`The Headless CMS serves as the data layer for other applications. Website Builder pages, File Manager metadata, and Publishing Workflows all store data through the CMS.`}</p>
<_Heading level={3} id={"website-builder"} nextElement={{
      "type": "paragraph"
    }}>Website Builder</_Heading>
<p>{`Visual page creation and management system featuring:`}</p>
<ul>
<li parentName="ul"><strong parentName="li">{`Drag-and-Drop Editor`}</strong>{` - Visual interface for non-technical users`}</li>
<li parentName="ul"><strong parentName="li">{`Component System`}</strong>{` - Extensible with custom page elements`}</li>
<li parentName="ul"><strong parentName="li">{`Theme Support`}</strong>{` - Consistent styling across pages`}</li>
<li parentName="ul"><strong parentName="li">{`External Rendering`}</strong>{` - Pages render via your frontend app (Next.js, Vue, etc.)`}</li>
<li parentName="ul"><strong parentName="li">{`Dynamic Content`}</strong>{` - Integrates with Headless CMS or external APIs`}</li>
</ul>
<p>{`Website Builder is unique in that it requires an external frontend application to render pages. Webiny provides a Next.js starter kit, but you can use any framework.`}</p>
<_Heading level={3} id={"file-manager"} nextElement={{
      "type": "paragraph"
    }}>File Manager</_Heading>
<p>{`Digital asset management system offering:`}</p>
<ul>
<li parentName="ul"><strong parentName="li">{`Multi-format Support`}</strong>{` - Images, videos, documents, and more`}</li>
<li parentName="ul"><strong parentName="li">{`Folder Organization`}</strong>{` - Hierarchical structure with subfolders`}</li>
<li parentName="ul"><strong parentName="li">{`Metadata Management`}</strong>{` - Custom tags for categorization`}</li>
<li parentName="ul"><strong parentName="li">{`Search Capabilities`}</strong>{` - Find assets by name, type, or metadata`}</li>
<li parentName="ul"><strong parentName="li">{`Scalable Storage`}</strong>{` - Handles petabytes of assets via S3`}</li>
</ul>
<p>{`File Manager integrates with other applications, providing asset selection in CMS rich text fields and Website Builder components.`}</p>
<_Heading level={3} id={"publishing-workflows"} nextElement={{
      "type": "paragraph"
    }}>Publishing Workflows</_Heading>
<p>{`Content approval and publishing pipeline with:`}</p>
<ul>
<li parentName="ul"><strong parentName="li">{`Custom Workflows`}</strong>{` - Define review stages for your process`}</li>
<li parentName="ul"><strong parentName="li">{`Role-based Approvals`}</strong>{` - Assign reviewers based on permissions`}</li>
<li parentName="ul"><strong parentName="li">{`Content Staging`}</strong>{` - Preview changes before publishing`}</li>
<li parentName="ul"><strong parentName="li">{`Audit Trail`}</strong>{` - Track all workflow actions`}</li>
<li parentName="ul"><strong parentName="li">{`Integration Points`}</strong>{` - Works with CMS and Website Builder content`}</li>
</ul>
<_Heading level={3} id={"admin"} nextElement={{
      "type": "paragraph"
    }}>Admin</_Heading>
<p>{`The unified control panel that:`}</p>
<ul>
<li parentName="ul"><strong parentName="li">{`Hosts All Applications`}</strong>{` - Single interface for all Webiny apps`}</li>
<li parentName="ul"><strong parentName="li">{`User Management`}</strong>{` - Create and manage user accounts`}</li>
<li parentName="ul"><strong parentName="li">{`Security Settings`}</strong>{` - Configure authentication and permissions`}</li>
<li parentName="ul"><strong parentName="li">{`System Configuration`}</strong>{` - Manage tenants, locales, and settings`}</li>
<li parentName="ul"><strong parentName="li">{`Extensible UI`}</strong>{` - Add custom menu items and pages`}</li>
</ul>
<p>{`Admin itself is a Webiny application, built with the same framework and extensible through the same patterns.`}</p>
<_Heading level={2} id={"application-architecture"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Application Architecture</_Heading>
<_Heading level={3} id={"deployment-structure"} nextElement={{
      "type": "paragraph"
    }}>Deployment Structure</_Heading>
<p>{`Webiny applications deploy across three main stacks:`}</p>
<ol>
<li parentName="ol"><strong parentName="li">{`Core`}</strong>{` - Shared infrastructure (Cognito, EventBridge, S3)`}</li>
<li parentName="ol"><strong parentName="li">{`API`}</strong>{` - Backend services (Lambda functions, DynamoDB tables)`}</li>
<li parentName="ol"><strong parentName="li">{`Admin`}</strong>{` - Frontend application (React SPA on CloudFront)`}</li>
</ol>
<_Heading level={3} id={"data-flow"} nextElement={{
      "type": "paragraph"
    }}>Data Flow</_Heading>
<p>{`Applications communicate through:`}</p>
<ul>
<li parentName="ul"><strong parentName="li">{`GraphQL API`}</strong>{` - Primary data interface`}</li>
<li parentName="ul"><strong parentName="li">{`Event System`}</strong>{` - Applications emit events others can consume`}</li>
<li parentName="ul"><strong parentName="li">{`Shared Storage`}</strong>{` - Common S3 buckets for assets`}</li>
<li parentName="ul"><strong parentName="li">{`Direct Integration`}</strong>{` - UI components from one app in another`}</li>
</ul>
<_Heading level={3} id={"extension-points"} nextElement={{
      "type": "paragraph"
    }}>Extension Points</_Heading>
<p>{`Each application provides:`}</p>
<ul>
<li parentName="ul"><strong parentName="li">{`API Extensions`}</strong>{` - Add GraphQL schemas and resolvers`}</li>
<li parentName="ul"><strong parentName="li">{`UI Extensions`}</strong>{` - Custom components and pages`}</li>
<li parentName="ul"><strong parentName="li">{`Event Handlers`}</strong>{` - React to application events`}</li>
<li parentName="ul"><strong parentName="li">{`Business Logic`}</strong>{` - Custom use cases and workflows`}</li>
</ul>
<_Heading level={2} id={"working-with-applications"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Working With Applications</_Heading>
<_Heading level={3} id={"enabling-disabling"} nextElement={{
      "type": "paragraph"
    }}>Enabling/Disabling</_Heading>
<p>{`Applications are configured in `}<inlineCode parentName="p">{`webiny.config.tsx`}</inlineCode>{`:`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`import { createAdminApp } from "@webiny/serverless-cms-admin";

export default {
  name: "admin",
  cli: {
    scaffold: {
      plugins: [
        "@webiny/cli-plugin-scaffold-admin-app-module",
        "@webiny/cli-plugin-scaffold-admin-app-template",
        "@webiny/cli-plugin-scaffold-admin-app-package"
      ]
    }
  },
  // Configure which applications to include
  plugins: [
    createAdminApp({
      apps: {
        cms: true, // Enable Headless CMS
        websiteBuilder: true, // Enable Website Builder
        fileManager: true, // Enable File Manager
        workflows: false // Disable Publishing Workflows
      }
    })
  ]
};`}
</Editor>
<_Heading level={3} id={"cross-application-features"} nextElement={{
      "type": "paragraph"
    }}>Cross-Application Features</_Heading>
<p>{`Applications share common functionality:`}</p>
<ul>
<li parentName="ul"><strong parentName="li">{`Multi-tenancy`}</strong>{` - Isolate data per tenant across all apps`}</li>
<li parentName="ul"><strong parentName="li">{`Localization`}</strong>{` - Consistent locale handling`}</li>
<li parentName="ul"><strong parentName="li">{`Security`}</strong>{` - Unified authentication and authorization`}</li>
<li parentName="ul"><strong parentName="li">{`Search`}</strong>{` - Elasticsearch integration for all content types`}</li>
<li parentName="ul"><strong parentName="li">{`Audit Logs`}</strong>{` - Track actions across applications`}</li>
</ul>
<_Heading level={2} id={"custom-applications"} nextElement={{
      "type": "paragraph"
    }}>Custom Applications</_Heading>
<p>{`You can build custom applications using the same patterns:`}</p>
<ul>
<li parentName="ul">{`Use the Webiny Framework for consistency`}</li>
<li parentName="ul">{`Integrate with existing applications via APIs`}</li>
<li parentName="ul">{`Add your app to the Admin menu`}</li>
<li parentName="ul">{`Leverage shared infrastructure and services`}</li>
</ul>
<p>{`See the Extensions documentation for detailed guidance on building custom applications.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;