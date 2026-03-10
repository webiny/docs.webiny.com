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
  "title": "Extensions",
  "description": "Understanding Webiny's extension system and how to use it.",
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
  "title": "What Extensions Do",
  "slug": "what-extensions-do",
  "children": []
}, {
  "title": "Extension Philosophy",
  "slug": "extension-philosophy",
  "children": []
}, {
  "title": "The webiny.config.tsx File",
  "slug": "the-webiny-config-tsx-file",
  "children": [{
    "title": "Basic Configuration",
    "slug": "basic-configuration",
    "children": []
  }, {
    "title": "Extended Configuration",
    "slug": "extended-configuration",
    "children": []
  }, {
    "title": "Configuration Types",
    "slug": "configuration-types",
    "children": []
  }]
}, {
  "title": "Types of Extensions",
  "slug": "types-of-extensions",
  "children": [{
    "title": "API Extensions",
    "slug": "api-extensions",
    "children": []
  }, {
    "title": "Admin Extensions",
    "slug": "admin-extensions",
    "children": []
  }, {
    "title": "Infrastructure Extensions",
    "slug": "infrastructure-extensions",
    "children": []
  }, {
    "title": "CLI Extensions",
    "slug": "cli-extensions",
    "children": []
  }]
}, {
  "title": "Environment-Specific Extensions",
  "slug": "environment-specific-extensions",
  "children": []
}, {
  "title": "Installing Pre-Built Extensions",
  "slug": "installing-pre-built-extensions",
  "children": []
}, {
  "title": "Extension Implementation",
  "slug": "extension-implementation",
  "children": [{
    "title": "File Location",
    "slug": "file-location",
    "children": []
  }, {
    "title": "Organization",
    "slug": "organization",
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
  - What extensions are and their purpose - Types of extensions available - How to register and
  configure extensions
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`Extensions are modular pieces of code that customize, enhance, or modify Webiny’s behavior. They are the primary way to extend Webiny to meet specific needs. Even core features like identity providers are implemented as extensions, making the system highly modular and customizable.`}</p>
<_Heading level={2} id={"what-extensions-do"} nextElement={{
      "type": "paragraph"
    }}>What Extensions Do</_Heading>
<p>{`Extensions allow you to:`}</p>
<ul>
<li parentName="ul">{`Add custom GraphQL schemas and resolvers`}</li>
<li parentName="ul">{`Customize Admin UI with themes and branding`}</li>
<li parentName="ul">{`Modify cloud infrastructure configuration`}</li>
<li parentName="ul">{`Hook into lifecycle events`}</li>
<li parentName="ul">{`Add custom business logic`}</li>
<li parentName="ul">{`Create custom CLI commands`}</li>
</ul>
<_Heading level={2} id={"extension-philosophy"} nextElement={{
      "type": "paragraph"
    }}>Extension Philosophy</_Heading>
<p>{`Webiny follows an opt-in customization approach:`}</p>
<blockquote>
<p parentName="blockquote">{`“Here’s what you need, extend when you want.”`}</p>
</blockquote>
<p>{`Webiny provides sensible defaults. You create extensions only for specific customizations you need. The platform handles everything else automatically.`}</p>
<_Heading level={2} id={"the-webiny-config-tsx-file"} nextElement={{
      "type": "paragraph"
    }}>The<code>webiny.config.tsx</code>File</_Heading>
<p>{`Extensions are registered in `}<inlineCode parentName="p">{`webiny.config.tsx`}</inlineCode>{`, the central configuration file for your project.`}</p>
<_Heading level={3} id={"basic-configuration"} nextElement={{
      "type": "paragraph"
    }}>Basic Configuration</_Heading>
<p>{`A minimal configuration:`}</p>
<Editor title="webiny.config.tsx" lang="tsx" mdxType="Editor">
{`import React from "react";
import { Infra } from "webiny/extensions";
import { Cognito } from "@webiny/cognito";

export const Extensions = () => {
  return (
    <>
      <Infra.Aws.DefaultRegion name={"us-east-1"} />
      <Cognito />
    </>
  );
};`}
</Editor>
<p>{`This sets AWS region and enables Cognito authentication.`}</p>
<_Heading level={3} id={"extended-configuration"} nextElement={{
      "type": "paragraph"
    }}>Extended Configuration</_Heading>
<p>{`As you add customizations:`}</p>
<Editor title="webiny.config.tsx" lang="tsx" mdxType="Editor">
{`import React from "react";
import { Api, Admin, Infra } from "webiny/extensions";
import { Cognito } from "@webiny/cognito";

export const Extensions = () => {
  return (
    <>
      {/* Infrastructure */}
      <Infra.Aws.DefaultRegion name={"us-east-1"} />
      <Infra.OpenSearch enabled={true} />
      <Infra.Aws.Tags tags={{ OWNER: "me", PROJECT: "my-project" }} />

      {/* Authentication */}
      <Cognito />

      {/* Custom extensions */}
      <Api.Extension src={"/extensions/MyApiExtension.ts"} />
      <Admin.Extension src={"/extensions/AdminBranding.tsx"} />
    </>
  );
};`}
</Editor>
<p>{`Configuration uses React components for type safety, auto-completion, and maintainability.`}</p>
<_Heading level={3} id={"configuration-types"} nextElement={{
      "type": "paragraph"
    }}>Configuration Types</_Heading>
<p><inlineCode parentName="p">{`webiny.config.tsx`}</inlineCode>{` typically includes:`}</p>
<ol>
<li parentName="ol"><strong parentName="li">{`Infrastructure`}</strong>{` - AWS region, tags, resource settings, OpenSearch`}</li>
<li parentName="ol"><strong parentName="li">{`Identity providers`}</strong>{` - Cognito, Auth0, Okta, custom authentication`}</li>
<li parentName="ol"><strong parentName="li">{`Extensions`}</strong>{` - References to custom code`}</li>
<li parentName="ol"><strong parentName="li">{`Environment-specific settings`}</strong>{` - Different configs per environment`}</li>
</ol>
<_Heading level={2} id={"types-of-extensions"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Types of Extensions</_Heading>
<_Heading level={3} id={"api-extensions"} nextElement={{
      "type": "paragraph"
    }}>API Extensions</_Heading>
<p>{`Customize the backend GraphQL API:`}</p>
<ul>
<li parentName="ul">{`Custom GraphQL schemas, queries, mutations`}</li>
<li parentName="ul">{`Lifecycle hooks`}</li>
<li parentName="ul">{`Custom resolvers and business logic`}</li>
<li parentName="ul">{`Security enhancements`}</li>
</ul>
<Editor title="webiny.config.tsx" lang="tsx" mdxType="Editor">
{`<Api.Extension src={"/extensions/MyApiExtension.ts"} />`}
</Editor>
<p>{`Example implementation:`}</p>
<Editor title="extensions/MyApiExtension.ts" lang="typescript" mdxType="Editor">
{`import { GraphQLSchemaFactory } from "webiny/api/graphql";
import { IdentityContext } from "webiny/api/security";

class Schema implements GraphQLSchemaFactory.Interface {
  constructor(private identityContext: IdentityContext.Interface) {}

  execute(): GraphQLSchemaFactory.Return {
    return [
      {
        typeDefs: /* GraphQL */ \`
          type Query {
            hello: String
          }
        \`,
        resolvers: {
          Query: {
            hello: () => {
              const identity = this.identityContext.getIdentity();
              return \`Hello, \${identity.displayName}!\`;
            }
          }
        }
      }
    ];
  }
}

export default GraphQLSchemaFactory.createImplementation({
  implementation: Schema,
  dependencies: [IdentityContext]
});`}
</Editor>
<Alert type="info" title="Dependency Injection" mdxType="Alert">
  API extensions use dependency injection. The DI container provides required dependencies, ensures
  type safety, and validates at compile time. This makes code maintainable and testable.
</Alert>
<_Heading level={3} id={"admin-extensions"} nextElement={{
      "type": "paragraph"
    }}>Admin Extensions</_Heading>
<p>{`Customize the Admin UI:`}</p>
<ul>
<li parentName="ul">{`White-label branding`}</li>
<li parentName="ul">{`Custom views and pages`}</li>
<li parentName="ul">{`Tenant-level theming`}</li>
<li parentName="ul">{`Custom components`}</li>
</ul>
<Editor title="webiny.config.tsx" lang="tsx" mdxType="Editor">
{`<Admin.Extension src={"/extensions/AdminBranding.tsx"} />`}
</Editor>
<p>{`Example implementation:`}</p>
<Editor title="extensions/AdminBranding.tsx" lang="tsx" mdxType="Editor">
{`import React from "react";
import { AdminConfig } from "webiny/admin/configs";
import logo from "./logo.png";

const { Logo } = AdminConfig;

const AdminLogo = () => {
  return (
    <AdminConfig.Public>
      <Logo
        squareLogo={<img src={logo} alt={"My Company"} />}
        horizontalLogo={<img src={logo} alt={"My Company"} />}
      />
    </AdminConfig.Public>
  );
};

export default AdminLogo;`}
</Editor>
<p>{`Admin extensions are regular React components. Use hooks, context, and React patterns you’re familiar with.`}</p>
<_Heading level={3} id={"infrastructure-extensions"} nextElement={{
      "type": "paragraph"
    }}>Infrastructure Extensions</_Heading>
<p>{`Modify AWS infrastructure using Pulumi:`}</p>
<ul>
<li parentName="ul">{`Custom resources (CloudWatch alarms, S3 buckets, Lambda functions)`}</li>
<li parentName="ul">{`Modify existing resources (memory, timeout, environment variables)`}</li>
<li parentName="ul">{`Conditional infrastructure per environment`}</li>
</ul>
<Editor title="webiny.config.tsx" lang="tsx" mdxType="Editor">
{`<Infra.Core.Pulumi src={"/extensions/MyInfraExtension.ts"} />`}
</Editor>
<_Heading level={3} id={"cli-extensions"} nextElement={{
      "type": "paragraph"
    }}>CLI Extensions</_Heading>
<p>{`Add custom commands to Webiny CLI:`}</p>
<ul>
<li parentName="ul">{`Deployment scripts`}</li>
<li parentName="ul">{`Data migrations`}</li>
<li parentName="ul">{`Code generators`}</li>
<li parentName="ul">{`Project-specific tooling`}</li>
</ul>
<Editor title="webiny.config.tsx" lang="tsx" mdxType="Editor">
{`<Cli.Command src={"/extensions/MyCustomCommand.ts"} />`}
</Editor>
<_Heading level={2} id={"environment-specific-extensions"} nextElement={{
      "type": "paragraph"
    }}>Environment-Specific Extensions</_Heading>
<p>{`Load extensions conditionally by environment:`}</p>
<Editor title="webiny.config.tsx" lang="tsx" mdxType="Editor">
{`<Infra.Env.Is env="prod">
  <Infra.Aws.Tags tags={{ ENV: "production" }} />
  <Infra.OpenSearch enabled={true} />
</Infra.Env.Is>

<Infra.Env.Is env={["dev", "staging"]}>
  <Infra.Aws.Tags tags={{ ENV: "non-production" }} />
  <Infra.OpenSearch enabled={false} />
</Infra.Env.Is>`}
</Editor>
<p>{`Useful for:`}</p>
<ul>
<li parentName="ul">{`Different infrastructure per environment`}</li>
<li parentName="ul">{`Development-only debugging tools`}</li>
<li parentName="ul">{`Production-only monitoring`}</li>
</ul>
<_Heading level={2} id={"installing-pre-built-extensions"} nextElement={{
      "type": "paragraph"
    }}>Installing Pre-Built Extensions</_Heading>
<p>{`Webiny provides official extensions at `}<a parentName="p" {...{
        "href": "https://github.com/webiny/extensions"
      }}>{`github.com/webiny/extensions`}</a>{`.`}</p>
<p>{`Install with:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`yarn webiny extension <extension-name>`}
</Editor>
<p>{`This command:`}</p>
<ol>
<li parentName="ol">{`Downloads extension code`}</li>
<li parentName="ol">{`Adds it to `}<inlineCode parentName="li">{`extensions/`}</inlineCode>{` folder`}</li>
<li parentName="ol">{`Updates `}<inlineCode parentName="li">{`webiny.config.tsx`}</inlineCode>{` to register it`}</li>
</ol>
<p>{`Installed extensions live in your project, so you can customize them as needed.`}</p>
<_Heading level={2} id={"extension-implementation"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Extension Implementation</_Heading>
<_Heading level={3} id={"file-location"} nextElement={{
      "type": "paragraph"
    }}>File Location</_Heading>
<p>{`Extension implementation code lives in the `}<inlineCode parentName="p">{`/extensions`}</inlineCode>{` folder. When you reference `}<inlineCode parentName="p">{`src={"/extensions/MyExtension.ts"}`}</inlineCode>{` in `}<inlineCode parentName="p">{`webiny.config.tsx`}</inlineCode>{`, Webiny loads that file at the appropriate time.`}</p>
<_Heading level={3} id={"organization"} nextElement={{
      "type": "paragraph"
    }}>Organization</_Heading>
<p>{`Organize extensions however you prefer:`}</p>
<Editor title="" lang="text" mdxType="Editor">
{`extensions/
├── MyApiExtension.ts
├── AdminBranding.tsx
├── MyInfraExtension.ts
└── ecommerce/
    ├── ProductApi.ts
    └── OrderDashboard.tsx`}
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