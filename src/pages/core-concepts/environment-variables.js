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
  "title": "Environment Variables",
  "description": "Managing environment variables in Webiny projects.",
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
  "title": "Application Prefixes",
  "slug": "application-prefixes",
  "children": []
}, {
  "title": "Usage",
  "slug": "usage",
  "children": [{
    "title": "Setting Variables",
    "slug": "setting-variables",
    "children": []
  }, {
    "title": "Accessing Variables",
    "slug": "accessing-variables",
    "children": []
  }]
}, {
  "title": "TypeScript Support",
  "slug": "type-script-support",
  "children": []
}, {
  "title": "Best Practices",
  "slug": "best-practices",
  "children": [{
    "title": "Security",
    "slug": "security",
    "children": []
  }, {
    "title": "Documentation",
    "slug": "documentation",
    "children": []
  }, {
    "title": "Variable Naming",
    "slug": "variable-naming",
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
  - How to use environment variables in Webiny - Application-specific variable prefixes - Best
  practices for sensitive data
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`Environment variables in Webiny are optional for most scenarios. When needed, they follow a prefix-based system that ensures variables are only available to the appropriate application. This prevents accidental exposure of sensitive data between applications.`}</p>
<_Heading level={2} id={"application-prefixes"} nextElement={{
      "type": "paragraph"
    }}>Application Prefixes</_Heading>
<p>{`Webiny uses prefixes to route variables to specific applications:`}</p>
<ul>
<li parentName="ul"><strong parentName="li"><inlineCode parentName="strong">{`WEBINY_ADMIN_`}</inlineCode></strong>{` - Variables for the Admin application`}</li>
<li parentName="ul"><strong parentName="li"><inlineCode parentName="strong">{`WEBINY_API_`}</inlineCode></strong>{` - Variables for the API application`}</li>
</ul>
<_Heading level={2} id={"usage"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Usage</_Heading>
<_Heading level={3} id={"setting-variables"} nextElement={{
      "type": "paragraph"
    }}>Setting Variables</_Heading>
<p>{`Create a `}<inlineCode parentName="p">{`.env`}</inlineCode>{` file in your project root:`}</p>
<Editor title=".env" lang="bash" mdxType="Editor">
{`# Admin application variables
WEBINY_ADMIN_ANALYTICS_ID=UA-123456789
WEBINY_ADMIN_CUSTOM_API_URL=https://api.example.com
WEBINY_ADMIN_FEATURE_FLAGS=dark-mode,beta-features

# API application variables
WEBINY_API_SMTP_HOST=smtp.sendgrid.net
WEBINY_API_SMTP_USER=apikey
WEBINY_API_SMTP_PASS=SG.xxxxx
WEBINY_API_EXTERNAL_SERVICE_KEY=sk_live_xxxxx`}
</Editor>
<_Heading level={3} id={"accessing-variables"} nextElement={{
      "type": "paragraph"
    }}>Accessing Variables</_Heading>
<p>{`In your extensions, access variables through `}<inlineCode parentName="p">{`process.env`}</inlineCode>{`:`}</p>
<Editor title="extensions/MyApiExtension.ts" lang="typescript" mdxType="Editor">
{`// API extension - only WEBINY_API_ variables available
const smtpConfig = {
  host: process.env.WEBINY_API_SMTP_HOST,
  user: process.env.WEBINY_API_SMTP_USER,
  pass: process.env.WEBINY_API_SMTP_PASS
};

// This would be undefined in API:
console.log(process.env.WEBINY_ADMIN_ANALYTICS_ID); // undefined`}
</Editor>
<Editor title="extensions/MyAdminExtension.tsx" lang="tsx" mdxType="Editor">
{`// Admin extension - only WEBINY_ADMIN_ variables available
const analyticsId = process.env.WEBINY_ADMIN_ANALYTICS_ID;

// This would be undefined in Admin:
console.log(process.env.WEBINY_API_SMTP_HOST); // undefined`}
</Editor>
<_Heading level={2} id={"type-script-support"} nextElement={{
      "type": "paragraph"
    }}>TypeScript Support</_Heading>
<p>{`Add type definitions for your environment variables:`}</p>
<Editor title="webiny-env.d.ts" lang="typescript" mdxType="Editor">
{`declare namespace NodeJS {
  interface ProcessEnv {
    // Admin variables
    WEBINY_ADMIN_ANALYTICS_ID?: string;
    WEBINY_ADMIN_CUSTOM_API_URL?: string;
    WEBINY_ADMIN_FEATURE_FLAGS?: string;

    // API variables
    WEBINY_API_SMTP_HOST?: string;
    WEBINY_API_SMTP_USER?: string;
    WEBINY_API_SMTP_PASS?: string;
    WEBINY_API_EXTERNAL_SERVICE_KEY?: string;
  }
}`}
</Editor>
<_Heading level={2} id={"best-practices"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Best Practices</_Heading>
<_Heading level={3} id={"security"} nextElement={{
      "type": "list",
      "ordered": true,
      "start": 1,
      "spread": false
    }}>Security</_Heading>
<ol>
<li parentName="ol"><strong parentName="li">{`Never commit `}<inlineCode parentName="strong">{`.env`}</inlineCode></strong>{` - Add to `}<inlineCode parentName="li">{`.gitignore`}</inlineCode></li>
<li parentName="ol"><strong parentName="li">{`Use prefixes`}</strong>{` - Isolate sensitive data by application`}</li>
<li parentName="ol"><strong parentName="li">{`Rotate secrets`}</strong>{` - Change production secrets regularly`}</li>
<li parentName="ol"><strong parentName="li">{`Minimal exposure`}</strong>{` - Only set variables that are needed`}</li>
</ol>
<_Heading level={3} id={"documentation"} nextElement={{
      "type": "paragraph"
    }}>Documentation</_Heading>
<p>{`Create `}<inlineCode parentName="p">{`.env.example`}</inlineCode>{` for team reference:`}</p>
<Editor title=".env.example" lang="bash" mdxType="Editor">
{`# Analytics Configuration (required)
WEBINY_ADMIN_ANALYTICS_ID=

# Email Service (optional)
WEBINY_API_SMTP_HOST=
WEBINY_API_SMTP_USER=
WEBINY_API_SMTP_PASS=

# External API (required for payments)
WEBINY_API_EXTERNAL_SERVICE_KEY=`}
</Editor>
<_Heading level={3} id={"variable-naming"} nextElement={{
      "type": "paragraph"
    }}>Variable Naming</_Heading>
<p>{`Follow consistent naming conventions:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`# Good - clear, prefixed, uppercase
WEBINY_API_STRIPE_SECRET_KEY=sk_live_xxx
WEBINY_ADMIN_GOOGLE_MAPS_API_KEY=xxx

# Bad - unclear, no prefix, mixed case
stripeKey=sk_live_xxx
Google_Maps_Key=xxx`}
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