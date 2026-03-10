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
  "title": "Project Structure",
  "description": "Understanding the organization of a Webiny project.",
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
  "title": "Directory Structure",
  "slug": "directory-structure",
  "children": []
}, {
  "title": "Key Files",
  "slug": "key-files",
  "children": [{
    "title": "webiny.config.tsx",
    "slug": "webiny-config-tsx",
    "children": []
  }, {
    "title": "/extensions",
    "slug": "extensions",
    "children": []
  }, {
    "title": "package.json",
    "slug": "package-json",
    "children": []
  }, {
    "title": "/public",
    "slug": "public",
    "children": []
  }, {
    "title": "Configuration Files",
    "slug": "configuration-files",
    "children": []
  }]
}, {
  "title": "Project Organization",
  "slug": "project-organization",
  "children": [{
    "title": "Single Package",
    "slug": "single-package",
    "children": []
  }, {
    "title": "Extension-Based Architecture",
    "slug": "extension-based-architecture",
    "children": []
  }]
}, {
  "title": "Best Practices",
  "slug": "best-practices",
  "children": [{
    "title": "Extension Organization",
    "slug": "extension-organization",
    "children": []
  }, {
    "title": "Naming Conventions",
    "slug": "naming-conventions",
    "children": []
  }]
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
  - How Webiny projects are organized - The purpose of each file and folder - Where to place custom
  code
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`Webiny projects follow a clean, simple structure designed for clarity and maintainability. All configuration is centralized, custom code has a dedicated location, and the project uses standard JavaScript/TypeScript conventions.`}</p>
<_Heading level={2} id={"directory-structure"} nextElement={{
      "type": "code",
      "lang": "text",
      "meta": null
    }}>Directory Structure</_Heading>
<Editor title="" lang="text" mdxType="Editor">
{`my-webiny-project/
├── extensions/          # Your custom extensions and code
│   └── README.md
├── node_modules/        # Dependencies
├── public/              # Public assets for Admin app
│   ├── favicon.ico
│   ├── global.css
│   ├── index.html
│   └── robots.txt
├── eslint.config.js     # ESLint configuration
├── package.json         # Project dependencies
├── tsconfig.json        # TypeScript configuration
├── webiny.config.tsx    # Main configuration file
├── webiny-env.d.ts      # TypeScript environment types
└── yarn.lock            # Locked dependencies`}
</Editor>
<_Heading level={2} id={"key-files"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Key Files</_Heading>
<_Heading level={3} id={"webiny-config-tsx"} nextElement={{
      "type": "paragraph"
    }}><code>webiny.config.tsx</code></_Heading>
<p>{`The central configuration file for your project. This is where you:`}</p>
<ul>
<li parentName="ul">{`Register extensions`}</li>
<li parentName="ul">{`Configure AWS infrastructure`}</li>
<li parentName="ul">{`Set up authentication providers`}</li>
<li parentName="ul">{`Define deployment settings`}</li>
</ul>
<Editor title="webiny.config.tsx" lang="tsx" mdxType="Editor">
{`import React from "react";
import { Infra } from "webiny/extensions";
import { Cognito } from "@webiny/cognito";

export const Extensions = () => {
  return (
    <>
      <Infra.Aws.DefaultRegion name={"us-east-1"} />
      <Cognito />
      {/* Your extensions go here */}
    </>
  );
};`}
</Editor>
<_Heading level={3} id={"extensions"} nextElement={{
      "type": "paragraph"
    }}><code>/extensions</code></_Heading>
<p>{`The workspace for all custom code. You can organize this folder however you like. There are four types of extensions you can create:`}</p>
<ol>
<li parentName="ol"><strong parentName="li">{`API Extensions`}</strong>{` - Add GraphQL schemas, custom business logic, lifecycle hooks`}</li>
<li parentName="ol"><strong parentName="li">{`Admin Extensions`}</strong>{` - Customize the Admin UI with themes, white-label branding, custom views`}</li>
<li parentName="ol"><strong parentName="li">{`Infrastructure Extensions`}</strong>{` - Modify Pulumi infrastructure code`}</li>
<li parentName="ol"><strong parentName="li">{`CLI Extensions`}</strong>{` - Create custom CLI commands for your workflows`}</li>
</ol>
<Alert type="info" title="Learn More About Extensions" mdxType="Alert">
<p>{`For detailed information about the extension system, how to create extensions, and examples, see
the `}<_Link href="/docs/build-with-ai/extensions">{`Extensions`}</_Link>{` documentation.`}</p>
</Alert>
<p>{`Example organization:`}</p>
<Editor title="" lang="text" mdxType="Editor">
{`extensions/
├── CustomGraphQLSchema.ts
├── CustomTheme.tsx
├── MyInfraExtension.ts
└── ecommerce/
    ├── ProductApi.ts
    └── OrderDashboard.tsx`}
</Editor>
<p>{`Reference extensions in `}<inlineCode parentName="p">{`webiny.config.tsx`}</inlineCode>{`:`}</p>
<Editor title="webiny.config.tsx" lang="tsx" mdxType="Editor">
{`import { Admin, Api } from "webiny/extensions";

// Point to files in the extensions folder
<Admin.Extension src={"/extensions/CustomTheme.tsx"} />
<Api.Extension src={"/extensions/ecommerce/ProductApi.ts"} />`}
</Editor>
<_Heading level={3} id={"package-json"} nextElement={{
      "type": "paragraph"
    }}><code>package.json</code></_Heading>
<p>{`Contains project dependencies with key Webiny packages:`}</p>
<Editor title="package.json" lang="json" mdxType="Editor">
{`{
  "type": "module",
  "dependencies": {
    "@webiny/cognito": "^6.0.0", // Authentication provider
    "webiny": "^6.0.0" // Core Webiny SDK
  },
  "devDependencies": {
    "@webiny/cli": "^6.0.0", // CLI tools
    "@types/node": "^20.0.0", // Node.js types
    "typescript": "^5.0.0" // TypeScript compiler
  }
}`}
</Editor>
<p><strong parentName="p">{`Key packages:`}</strong></p>
<ul>
<li parentName="ul"><inlineCode parentName="li">{`webiny`}</inlineCode>{` - Unified API for all Webiny functionality`}</li>
<li parentName="ul"><inlineCode parentName="li">{`@webiny/cognito`}</inlineCode>{` - Default authentication (replaceable)`}</li>
<li parentName="ul"><inlineCode parentName="li">{`@webiny/cli`}</inlineCode>{` - Development and deployment tools`}</li>
</ul>
<_Heading level={3} id={"public"} nextElement={{
      "type": "paragraph"
    }}><code>/public</code></_Heading>
<p>{`Static assets for the Admin application:`}</p>
<ul>
<li parentName="ul"><inlineCode parentName="li">{`favicon.ico`}</inlineCode>{` - Browser icon`}</li>
<li parentName="ul"><inlineCode parentName="li">{`global.css`}</inlineCode>{` - Global styles applied to Admin`}</li>
<li parentName="ul"><inlineCode parentName="li">{`index.html`}</inlineCode>{` - Admin app entry point`}</li>
<li parentName="ul"><inlineCode parentName="li">{`robots.txt`}</inlineCode>{` - SEO configuration`}</li>
</ul>
<p>{`Customize these files to brand your Admin interface.`}</p>
<_Heading level={3} id={"configuration-files"} nextElement={{
      "type": "paragraph"
    }}>Configuration Files</_Heading>
<p><inlineCode parentName="p">{`tsconfig.json`}</inlineCode></p>
<ul>
<li parentName="ul">{`TypeScript compiler configuration`}</li>
<li parentName="ul">{`Ensures type safety across all extensions`}</li>
<li parentName="ul">{`Pre-configured for Webiny patterns`}</li>
</ul>
<p><inlineCode parentName="p">{`eslint.config.js`}</inlineCode></p>
<ul>
<li parentName="ul">{`Code linting rules`}</li>
<li parentName="ul">{`Enforces consistent code style`}</li>
<li parentName="ul">{`Includes Webiny-specific rules`}</li>
</ul>
<p><inlineCode parentName="p">{`webiny-env.d.ts`}</inlineCode></p>
<ul>
<li parentName="ul">{`TypeScript type definitions`}</li>
<li parentName="ul">{`Environment-specific types`}</li>
<li parentName="ul">{`Auto-generated, don’t edit directly`}</li>
</ul>
<_Heading level={2} id={"project-organization"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Project Organization</_Heading>
<_Heading level={3} id={"single-package"} nextElement={{
      "type": "paragraph"
    }}>Single Package</_Heading>
<p>{`Webiny uses a single-package approach:`}</p>
<ul>
<li parentName="ul">{`One `}<inlineCode parentName="li">{`package.json`}</inlineCode>{` at the root`}</li>
<li parentName="ul">{`All dependencies managed centrally`}</li>
<li parentName="ul">{`No complex monorepo setup`}</li>
</ul>
<_Heading level={3} id={"extension-based-architecture"} nextElement={{
      "type": "paragraph"
    }}>Extension-Based Architecture</_Heading>
<p>{`All customization through extensions:`}</p>
<ul>
<li parentName="ul">{`Clear separation of custom vs. framework code`}</li>
<li parentName="ul">{`Extensions are portable and testable`}</li>
<li parentName="ul">{`Easy to understand what’s custom`}</li>
</ul>
<_Heading level={2} id={"best-practices"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Best Practices</_Heading>
<_Heading level={3} id={"extension-organization"} nextElement={{
      "type": "paragraph"
    }}>Extension Organization</_Heading>
<p>{`Group related functionality:`}</p>
<Editor title="" lang="text" mdxType="Editor">
{`extensions/
├── ecommerce/
│   ├── api/
│   │   ├── products.ts
│   │   └── orders.ts
│   └── admin/
│       ├── ProductList.tsx
│       └── OrderDashboard.tsx`}
</Editor>
<_Heading level={3} id={"naming-conventions"} nextElement={{
      "type": "list",
      "ordered": false,
      "start": null,
      "spread": false
    }}>Naming Conventions</_Heading>
<ul>
<li parentName="ul"><strong parentName="li">{`Extensions`}</strong>{` - PascalCase (e.g., `}<inlineCode parentName="li">{`ProductApi.ts`}</inlineCode>{`)`}</li>
<li parentName="ul"><strong parentName="li">{`Folders`}</strong>{` - `}<inlineCode parentName="li">{`camelCase`}</inlineCode>{` or `}<inlineCode parentName="li">{`kebab-case`}</inlineCode></li>
<li parentName="ul"><strong parentName="li">{`Config files`}</strong>{` - Match tool conventions`}</li>
</ul>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;