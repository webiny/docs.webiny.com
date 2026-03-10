/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { SymbolList } from "@/components/SymbolList";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.64f62e.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Extensions",
  "description": "Reference for all webiny/extensions exports — React components used in webiny.config.tsx to wire extensions into the project.",
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
  "title": "Api",
  "slug": "api",
  "children": [{
    "title": "Extension",
    "slug": "extension",
    "children": []
  }, {
    "title": "BuildParam",
    "slug": "build-param",
    "children": []
  }]
}, {
  "title": "Admin",
  "slug": "admin",
  "children": [{
    "title": "Extension",
    "slug": "extension-1",
    "children": []
  }, {
    "title": "BuildParam",
    "slug": "build-param-1",
    "children": []
  }]
}, {
  "title": "Cli",
  "slug": "cli",
  "children": [{
    "title": "Command",
    "slug": "command",
    "children": []
  }]
}, {
  "title": "Infra",
  "slug": "infra",
  "children": [{
    "title": "Vpc",
    "slug": "vpc",
    "children": [{
      "title": "useExistingVpc",
      "slug": "use-existing-vpc"
    }, {
      "title": "openSearchDomainVpcConfig",
      "slug": "open-search-domain-vpc-config"
    }, {
      "title": "lambdaFunctionsVpcConfig",
      "slug": "lambda-functions-vpc-config"
    }]
  }, {
    "title": "BlueGreenDeployments",
    "slug": "blue-green-deployments",
    "children": [{
      "title": "domains",
      "slug": "domains"
    }, {
      "title": "domains",
      "slug": "domains"
    }, {
      "title": "deployments",
      "slug": "deployments"
    }]
  }, {
    "title": "OpenSearch",
    "slug": "open-search",
    "children": []
  }, {
    "title": "PulumiResourceNamePrefix",
    "slug": "pulumi-resource-name-prefix",
    "children": []
  }, {
    "title": "ProductionEnvironments",
    "slug": "production-environments",
    "children": []
  }, {
    "title": "Aws.DefaultRegion",
    "slug": "aws-default-region",
    "children": []
  }, {
    "title": "Aws.Tags",
    "slug": "aws-tags",
    "children": []
  }, {
    "title": "Admin.BeforeBuild",
    "slug": "admin-before-build",
    "children": []
  }, {
    "title": "Admin.BeforeDeploy",
    "slug": "admin-before-deploy",
    "children": []
  }, {
    "title": "Admin.BeforeWatch",
    "slug": "admin-before-watch",
    "children": []
  }, {
    "title": "Admin.AfterBuild",
    "slug": "admin-after-build",
    "children": []
  }, {
    "title": "Admin.AfterDeploy",
    "slug": "admin-after-deploy",
    "children": []
  }, {
    "title": "Admin.Pulumi",
    "slug": "admin-pulumi",
    "children": []
  }, {
    "title": "Admin.CustomDomains",
    "slug": "admin-custom-domains",
    "children": []
  }, {
    "title": "Admin.StackOutputValue",
    "slug": "admin-stack-output-value",
    "children": []
  }, {
    "title": "Api.BeforeBuild",
    "slug": "api-before-build",
    "children": []
  }, {
    "title": "Api.BeforeDeploy",
    "slug": "api-before-deploy",
    "children": []
  }, {
    "title": "Api.BeforeWatch",
    "slug": "api-before-watch",
    "children": []
  }, {
    "title": "Api.AfterBuild",
    "slug": "api-after-build",
    "children": []
  }, {
    "title": "Api.AfterDeploy",
    "slug": "api-after-deploy",
    "children": []
  }, {
    "title": "Api.Pulumi",
    "slug": "api-pulumi",
    "children": []
  }, {
    "title": "Api.StackOutputValue",
    "slug": "api-stack-output-value",
    "children": []
  }, {
    "title": "Api.LambdaFunction",
    "slug": "api-lambda-function",
    "children": []
  }, {
    "title": "Core.BeforeBuild",
    "slug": "core-before-build",
    "children": []
  }, {
    "title": "Core.BeforeDeploy",
    "slug": "core-before-deploy",
    "children": []
  }, {
    "title": "Core.BeforeWatch",
    "slug": "core-before-watch",
    "children": []
  }, {
    "title": "Core.AfterBuild",
    "slug": "core-after-build",
    "children": []
  }, {
    "title": "Core.AfterDeploy",
    "slug": "core-after-deploy",
    "children": []
  }, {
    "title": "Core.Pulumi",
    "slug": "core-pulumi",
    "children": []
  }, {
    "title": "Core.StackOutputValue",
    "slug": "core-stack-output-value",
    "children": []
  }]
}, {
  "title": "Project",
  "slug": "project",
  "children": [{
    "title": "Id",
    "slug": "id",
    "children": []
  }, {
    "title": "Telemetry",
    "slug": "telemetry",
    "children": []
  }, {
    "title": "AutoInstall",
    "slug": "auto-install",
    "children": [{
      "title": "adminUser",
      "slug": "admin-user"
    }]
  }, {
    "title": "FeatureFlags",
    "slug": "feature-flags",
    "children": [{
      "title": "features",
      "slug": "features"
    }, {
      "title": "advancedAccessControlLayer",
      "slug": "advanced-access-control-layer"
    }, {
      "title": "advancedAccessControlLayer (option 2)",
      "slug": "advanced-access-control-layer-option-2"
    }, {
      "title": "fileManager",
      "slug": "file-manager"
    }]
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
<ul>
<li parentName="ul">{`What extension components are available in `}<inlineCode parentName="li">{`webiny/extensions`}</inlineCode>{`?`}</li>
<li parentName="ul">{`What parameters does each extension accept?`}</li>
<li parentName="ul">{`How to use each extension in your `}<inlineCode parentName="li">{`webiny.config.tsx`}</inlineCode>{`?`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`The `}<inlineCode parentName="p">{`webiny/extensions`}</inlineCode>{` package exports React components used inside `}<inlineCode parentName="p">{`webiny.config.tsx`}</inlineCode>{` to wire extensions into your Webiny project. Each component corresponds to a `}<inlineCode parentName="p">{`defineExtension()`}</inlineCode>{` call in the Webiny source and accepts typed props defined by its Zod schema.`}</p>
<p><strong parentName="p">{`Api`}</strong></p>
<SymbolList symbols={[{
      name: "Api.Extension",
      anchor: "api-extension"
    }, {
      name: "Api.BuildParam",
      anchor: "api-build-param"
    }]} mdxType="SymbolList" />
<p><strong parentName="p">{`Admin`}</strong></p>
<SymbolList symbols={[{
      name: "Admin.Extension",
      anchor: "admin-extension"
    }, {
      name: "Admin.BuildParam",
      anchor: "admin-build-param"
    }]} mdxType="SymbolList" />
<p><strong parentName="p">{`Cli`}</strong></p>
<SymbolList symbols={[{
      name: "Cli.Command",
      anchor: "cli-command"
    }]} mdxType="SymbolList" />
<p><strong parentName="p">{`Infra`}</strong></p>
<SymbolList symbols={[{
      name: "Infra.Vpc",
      anchor: "infra-vpc"
    }, {
      name: "Infra.BlueGreenDeployments",
      anchor: "infra-blue-green-deployments"
    }, {
      name: "Infra.OpenSearch",
      anchor: "infra-open-search"
    }, {
      name: "Infra.PulumiResourceNamePrefix",
      anchor: "infra-pulumi-resource-name-prefix"
    }, {
      name: "Infra.ProductionEnvironments",
      anchor: "infra-production-environments"
    }, {
      name: "Infra.Aws.DefaultRegion",
      anchor: "infra-aws-default-region"
    }, {
      name: "Infra.Aws.Tags",
      anchor: "infra-aws-tags"
    }, {
      name: "Infra.Admin.BeforeBuild",
      anchor: "infra-admin-before-build"
    }, {
      name: "Infra.Admin.BeforeDeploy",
      anchor: "infra-admin-before-deploy"
    }, {
      name: "Infra.Admin.BeforeWatch",
      anchor: "infra-admin-before-watch"
    }, {
      name: "Infra.Admin.AfterBuild",
      anchor: "infra-admin-after-build"
    }, {
      name: "Infra.Admin.AfterDeploy",
      anchor: "infra-admin-after-deploy"
    }, {
      name: "Infra.Admin.Pulumi",
      anchor: "infra-admin-pulumi"
    }, {
      name: "Infra.Admin.CustomDomains",
      anchor: "infra-admin-custom-domains"
    }, {
      name: "Infra.Admin.StackOutputValue",
      anchor: "infra-admin-stack-output-value"
    }, {
      name: "Infra.Api.BeforeBuild",
      anchor: "infra-api-before-build"
    }, {
      name: "Infra.Api.BeforeDeploy",
      anchor: "infra-api-before-deploy"
    }, {
      name: "Infra.Api.BeforeWatch",
      anchor: "infra-api-before-watch"
    }, {
      name: "Infra.Api.AfterBuild",
      anchor: "infra-api-after-build"
    }, {
      name: "Infra.Api.AfterDeploy",
      anchor: "infra-api-after-deploy"
    }, {
      name: "Infra.Api.Pulumi",
      anchor: "infra-api-pulumi"
    }, {
      name: "Infra.Api.StackOutputValue",
      anchor: "infra-api-stack-output-value"
    }, {
      name: "Infra.Api.LambdaFunction",
      anchor: "infra-api-lambda-function"
    }, {
      name: "Infra.Core.BeforeBuild",
      anchor: "infra-core-before-build"
    }, {
      name: "Infra.Core.BeforeDeploy",
      anchor: "infra-core-before-deploy"
    }, {
      name: "Infra.Core.BeforeWatch",
      anchor: "infra-core-before-watch"
    }, {
      name: "Infra.Core.AfterBuild",
      anchor: "infra-core-after-build"
    }, {
      name: "Infra.Core.AfterDeploy",
      anchor: "infra-core-after-deploy"
    }, {
      name: "Infra.Core.Pulumi",
      anchor: "infra-core-pulumi"
    }, {
      name: "Infra.Core.StackOutputValue",
      anchor: "infra-core-stack-output-value"
    }]} mdxType="SymbolList" />
<p><strong parentName="p">{`Project`}</strong></p>
<SymbolList symbols={[{
      name: "Project.Id",
      anchor: "project-id"
    }, {
      name: "Project.Telemetry",
      anchor: "project-telemetry"
    }, {
      name: "Project.AutoInstall",
      anchor: "project-auto-install"
    }, {
      name: "Project.FeatureFlags",
      anchor: "project-feature-flags"
    }]} mdxType="SymbolList" />
<_Heading level={2} id={"api"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Api</_Heading>
<_Heading level={3} id={"extension"} nextElement={{
      "type": "paragraph"
    }}><code>Extension</code></_Heading>
<p>{`Add any API extension.`}</p>
<p>{`Can be used `}<strong parentName="p">{`multiple times`}</strong>{`.`}</p>
<Editor title="webiny.config.tsx" lang="tsx" mdxType="Editor">
{`import { Api } from "webiny/extensions";

export const Extensions = () => <Api.Extension src="/extensions/my-extension.ts" />;`}
</Editor>
<p><strong parentName="p">{`Props`}</strong></p>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Prop`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Type`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Required`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`src`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`string`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`yes`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`—`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`exportName`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`string`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`no`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`—`}</td>
</tr>
</tbody>
</table>
<_Heading level={3} id={"build-param"} nextElement={{
      "type": "paragraph"
    }}><code>BuildParam</code></_Heading>
<p>{`Add build-time parameter to API app.`}</p>
<p>{`Can be used `}<strong parentName="p">{`multiple times`}</strong>{`.`}</p>
<Editor title="webiny.config.tsx" lang="tsx" mdxType="Editor">
{`import { Api } from "webiny/extensions";

export const Extensions = () => (
  <Api.BuildParam paramName="value" value={...} />
);`}
</Editor>
<p><strong parentName="p">{`Props`}</strong></p>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Prop`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Type`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Required`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`paramName`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`string`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`yes`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`—`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`value`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`union`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`yes`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`—`}</td>
</tr>
</tbody>
</table>
<_Heading level={2} id={"admin"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Admin</_Heading>
<_Heading level={3} id={"extension-1"} nextElement={{
      "type": "paragraph"
    }}><code>Extension</code></_Heading>
<p>{`Extend the Admin application with custom functionality.`}</p>
<p>{`Can be used `}<strong parentName="p">{`multiple times`}</strong>{`.`}</p>
<Editor title="webiny.config.tsx" lang="tsx" mdxType="Editor">
{`import { Admin } from "webiny/extensions";

export const Extensions = () => <Admin.Extension src="/extensions/my-extension.ts" />;`}
</Editor>
<p><strong parentName="p">{`Props`}</strong></p>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Prop`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Type`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Required`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`src`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`string`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`yes`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`—`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`exportName`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`string`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`no`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`—`}</td>
</tr>
</tbody>
</table>
<_Heading level={3} id={"build-param-1"} nextElement={{
      "type": "paragraph"
    }}><code>BuildParam</code></_Heading>
<p>{`Add build-time parameter to Admin app.`}</p>
<p>{`Can be used `}<strong parentName="p">{`multiple times`}</strong>{`.`}</p>
<Editor title="webiny.config.tsx" lang="tsx" mdxType="Editor">
{`import { Admin } from "webiny/extensions";

export const Extensions = () => (
  <Admin.BuildParam paramName="value" value={...} />
);`}
</Editor>
<p><strong parentName="p">{`Props`}</strong></p>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Prop`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Type`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Required`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`paramName`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`string`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`yes`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`—`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`value`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`union`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`yes`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`—`}</td>
</tr>
</tbody>
</table>
<_Heading level={2} id={"cli"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Cli</_Heading>
<_Heading level={3} id={"command"} nextElement={{
      "type": "paragraph"
    }}><code>Command</code></_Heading>
<p>{`An extension for defining CLI commands.`}</p>
<p>{`Can be used `}<strong parentName="p">{`multiple times`}</strong>{`.`}</p>
<Editor title="webiny.config.tsx" lang="tsx" mdxType="Editor">
{`import { Cli } from "webiny/extensions";

export const Extensions = () => <Cli.Command src="/extensions/my-extension.ts" />;`}
</Editor>
<p><strong parentName="p">{`Props`}</strong></p>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Prop`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Type`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Required`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`src`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`string`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`yes`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`—`}</td>
</tr>
</tbody>
</table>
<_Heading level={2} id={"infra"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Infra</_Heading>
<_Heading level={3} id={"vpc"} nextElement={{
      "type": "paragraph"
    }}><code>Vpc</code></_Heading>
<p>{`Apply VPC settings to AWS resources during deployment.`}</p>
<p>{`Can only be used `}<strong parentName="p">{`once`}</strong>{`.`}</p>
<Editor title="webiny.config.tsx" lang="tsx" mdxType="Editor">
{`import { Infra } from "webiny/extensions";

export const Extensions = () => <Infra.Vpc />;`}
</Editor>
<p><strong parentName="p">{`Props`}</strong></p>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Prop`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Type`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Required`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`enabled`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`boolean`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`no`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Whether to enable VPC.`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`useVpcEndpoints`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`boolean`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`no`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`—`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`useExistingVpc`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><a parentName="td" {...{
              "href": "#infra-vpc-use-existing-vpc"
            }}>{`object`}</a></td>
<td parentName="tr" {...{
            "align": null
          }}>{`no`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`—`}</td>
</tr>
</tbody>
</table>
<span id="infra-vpc-use-existing-vpc"></span>
<_Heading level={4} id={"use-existing-vpc"} nextElement={{
      "type": "table",
      "align": [null, null, null, null]
    }}><code>useExistingVpc</code></_Heading>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Field`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Type`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Required`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`openSearchDomainVpcConfig`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><a parentName="td" {...{
              "href": "#infra-vpc-use-existing-vpc-open-search-domain-vpc-config"
            }}>{`object`}</a></td>
<td parentName="tr" {...{
            "align": null
          }}>{`no`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`—`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`lambdaFunctionsVpcConfig`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><a parentName="td" {...{
              "href": "#infra-vpc-use-existing-vpc-lambda-functions-vpc-config"
            }}>{`object`}</a></td>
<td parentName="tr" {...{
            "align": null
          }}>{`yes`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`VPC configuration for Lambda functions.`}</td>
</tr>
</tbody>
</table>
<span id="infra-vpc-use-existing-vpc-open-search-domain-vpc-config"></span>
<_Heading level={4} id={"open-search-domain-vpc-config"} nextElement={{
      "type": "table",
      "align": [null, null, null, null]
    }}><code>openSearchDomainVpcConfig</code></_Heading>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Field`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Type`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Required`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`securityGroupIds`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`string[]`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`yes`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`The security group IDs for the OpenSearch domain.`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`subnetIds`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`string[]`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`yes`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`The subnet IDs for the OpenSearch domain.`}</td>
</tr>
</tbody>
</table>
<span id="infra-vpc-use-existing-vpc-lambda-functions-vpc-config"></span>
<_Heading level={4} id={"lambda-functions-vpc-config"} nextElement={{
      "type": "table",
      "align": [null, null, null, null]
    }}><code>lambdaFunctionsVpcConfig</code></_Heading>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Field`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Type`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Required`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`securityGroupIds`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`string[]`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`yes`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`The security group IDs for the Lambda functions.`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`subnetIds`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`string[]`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`yes`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`The subnet IDs for the Lambda functions.`}</td>
</tr>
</tbody>
</table>
<_Heading level={3} id={"blue-green-deployments"} nextElement={{
      "type": "paragraph"
    }}><code>BlueGreenDeployments</code></_Heading>
<p>{`Enable blue/green deployments for your Webiny project.`}</p>
<p>{`Can only be used `}<strong parentName="p">{`once`}</strong>{`.`}</p>
<Editor title="webiny.config.tsx" lang="tsx" mdxType="Editor">
{`import { Infra } from "webiny/extensions";

export const Extensions = () => (
  <Infra.BlueGreenDeployments domains={{}} deployments={...} />
);`}
</Editor>
<p><strong parentName="p">{`Props`}</strong></p>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Prop`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Type`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Required`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`enabled`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`boolean`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`no`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`—`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`domains`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><a parentName="td" {...{
              "href": "#infra-blue-green-deployments-domains"
            }}>{`object`}</a></td>
<td parentName="tr" {...{
            "align": null
          }}>{`yes`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`—`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`deployments`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><a parentName="td" {...{
              "href": "#infra-blue-green-deployments-deployments"
            }}>{`tuple`}</a></td>
<td parentName="tr" {...{
            "align": null
          }}>{`yes`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`—`}</td>
</tr>
</tbody>
</table>
<span id="infra-blue-green-deployments-domains"></span>
<_Heading level={4} id={"domains"} nextElement={{
      "type": "table",
      "align": [null, null, null, null, null]
    }}><code>domains</code></_Heading>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Field`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Type`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Required`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
<th parentName="tr" {...{
            "align": null
          }}></th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`acmCertificateArn`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`string`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`yes`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`—`}</td>
<td parentName="tr" {...{
            "align": null
          }}></td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`sslSupportMethod`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`\`“sni-only”`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`“vip”\``}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`yes`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`—`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`domains`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><a parentName="td" {...{
              "href": "#infra-blue-green-deployments-domains-domains"
            }}>{`object`}</a></td>
<td parentName="tr" {...{
            "align": null
          }}>{`yes`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`—`}</td>
<td parentName="tr" {...{
            "align": null
          }}></td>
</tr>
</tbody>
</table>
<span id="infra-blue-green-deployments-domains-domains"></span>
<_Heading level={4} id={"domains"} nextElement={{
      "type": "table",
      "align": [null, null, null, null]
    }}><code>domains</code></_Heading>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Field`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Type`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Required`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`api`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`string[]`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`yes`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`—`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`admin`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`string[]`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`yes`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`—`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`website`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`string[]`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`yes`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`—`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`preview`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`string[]`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`yes`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`—`}</td>
</tr>
</tbody>
</table>
<span id="infra-blue-green-deployments-deployments"></span>
<_Heading level={4} id={"deployments"} nextElement={{
      "type": "paragraph"
    }}><code>deployments</code></_Heading>
<p>{`A tuple: `}<inlineCode parentName="p">{`[`}</inlineCode>{`object`}<inlineCode parentName="p">{`, `}</inlineCode>{`object`}<inlineCode parentName="p">{`]`}</inlineCode></p>
<_Heading level={3} id={"open-search"} nextElement={{
      "type": "paragraph"
    }}><code>OpenSearch</code></_Heading>
<p>{`Enable and configure Opensearch integration with project-level setup.`}</p>
<p>{`Can only be used `}<strong parentName="p">{`once`}</strong>{`.`}</p>
<Editor title="webiny.config.tsx" lang="tsx" mdxType="Editor">
{`import { Infra } from "webiny/extensions";

export const Extensions = () => <Infra.OpenSearch />;`}
</Editor>
<p><strong parentName="p">{`Props`}</strong></p>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Prop`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Type`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Required`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`enabled`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`boolean`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`no`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Whether to enable OpenSearch.`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`domainName`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`string`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`no`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`The name of the Opensearch domain.`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`indexPrefix`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`string`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`no`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`A prefix to be added to all Opensearch indexes.`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`sharedIndexes`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`boolean`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`no`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Whether to use shared indexes across all environments (true) or separate indexes per environment (false).`}</td>
</tr>
</tbody>
</table>
<_Heading level={3} id={"pulumi-resource-name-prefix"} nextElement={{
      "type": "paragraph"
    }}><code>PulumiResourceNamePrefix</code></_Heading>
<p>{`Adjust the prefix for Pulumi resource names (default: “wby-”).`}</p>
<p>{`Can only be used `}<strong parentName="p">{`once`}</strong>{`.`}</p>
<Editor title="webiny.config.tsx" lang="tsx" mdxType="Editor">
{`import { Infra } from "webiny/extensions";

export const Extensions = () => <Infra.PulumiResourceNamePrefix prefix="value" />;`}
</Editor>
<p><strong parentName="p">{`Props`}</strong></p>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Prop`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Type`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Required`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`prefix`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`string`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`yes`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`—`}</td>
</tr>
</tbody>
</table>
<_Heading level={3} id={"production-environments"} nextElement={{
      "type": "paragraph"
    }}><code>ProductionEnvironments</code></_Heading>
<p>{`Provide names for environments that are considered production environments.`}</p>
<p>{`Can be used `}<strong parentName="p">{`multiple times`}</strong>{`.`}</p>
<Editor title="webiny.config.tsx" lang="tsx" mdxType="Editor">
{`import { Infra } from "webiny/extensions";

export const Extensions = () => <Infra.ProductionEnvironments environments={[]} />;`}
</Editor>
<p><strong parentName="p">{`Props`}</strong></p>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Prop`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Type`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Required`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`environments`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`array`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`yes`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`—`}</td>
</tr>
</tbody>
</table>
<_Heading level={3} id={"aws-default-region"} nextElement={{
      "type": "paragraph"
    }}><code>Aws.DefaultRegion</code></_Heading>
<p>{`Set the default AWS region for the project.`}</p>
<p>{`Can only be used `}<strong parentName="p">{`once`}</strong>{`.`}</p>
<Editor title="webiny.config.tsx" lang="tsx" mdxType="Editor">
{`import { Infra } from "webiny/extensions";

export const Extensions = () => <Infra.Aws.DefaultRegion name="value" />;`}
</Editor>
<p><strong parentName="p">{`Props`}</strong></p>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Prop`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Type`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Required`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`name`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`string`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`yes`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`The AWS region name.`}</td>
</tr>
</tbody>
</table>
<_Heading level={3} id={"aws-tags"} nextElement={{
      "type": "paragraph"
    }}><code>Aws.Tags</code></_Heading>
<p>{`Apply tags to AWS resources during deployment.`}</p>
<p>{`Can be used `}<strong parentName="p">{`multiple times`}</strong>{`.`}</p>
<Editor title="webiny.config.tsx" lang="tsx" mdxType="Editor">
{`import { Infra } from "webiny/extensions";

export const Extensions = () => (
  <Infra.Aws.Tags tags={...} />
);`}
</Editor>
<p><strong parentName="p">{`Props`}</strong></p>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Prop`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Type`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Required`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`tags`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`record`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`yes`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`—`}</td>
</tr>
</tbody>
</table>
<_Heading level={3} id={"admin-before-build"} nextElement={{
      "type": "paragraph"
    }}><code>Admin.BeforeBuild</code></_Heading>
<p>{`Add custom logic to be executed before the ADMIN build process.`}</p>
<p>{`Can be used `}<strong parentName="p">{`multiple times`}</strong>{`.`}</p>
<Editor title="webiny.config.tsx" lang="tsx" mdxType="Editor">
{`import { Infra } from "webiny/extensions";

export const Extensions = () => <Infra.Admin.BeforeBuild src="/extensions/my-extension.ts" />;`}
</Editor>
<p><strong parentName="p">{`Props`}</strong></p>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Prop`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Type`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Required`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`src`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`string`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`yes`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`—`}</td>
</tr>
</tbody>
</table>
<_Heading level={3} id={"admin-before-deploy"} nextElement={{
      "type": "paragraph"
    }}><code>Admin.BeforeDeploy</code></_Heading>
<p>{`Add custom logic to be executed before the ADMIN deployment process.`}</p>
<p>{`Can be used `}<strong parentName="p">{`multiple times`}</strong>{`.`}</p>
<Editor title="webiny.config.tsx" lang="tsx" mdxType="Editor">
{`import { Infra } from "webiny/extensions";

export const Extensions = () => <Infra.Admin.BeforeDeploy src="/extensions/my-extension.ts" />;`}
</Editor>
<p><strong parentName="p">{`Props`}</strong></p>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Prop`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Type`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Required`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`src`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`string`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`yes`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`—`}</td>
</tr>
</tbody>
</table>
<_Heading level={3} id={"admin-before-watch"} nextElement={{
      "type": "paragraph"
    }}><code>Admin.BeforeWatch</code></_Heading>
<p>{`Add custom logic to be executed before the Admin watch process.`}</p>
<p>{`Can be used `}<strong parentName="p">{`multiple times`}</strong>{`.`}</p>
<Editor title="webiny.config.tsx" lang="tsx" mdxType="Editor">
{`import { Infra } from "webiny/extensions";

export const Extensions = () => <Infra.Admin.BeforeWatch src="/extensions/my-extension.ts" />;`}
</Editor>
<p><strong parentName="p">{`Props`}</strong></p>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Prop`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Type`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Required`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`src`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`string`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`yes`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`—`}</td>
</tr>
</tbody>
</table>
<_Heading level={3} id={"admin-after-build"} nextElement={{
      "type": "paragraph"
    }}><code>Admin.AfterBuild</code></_Heading>
<p>{`Add custom logic to be executed after the ADMIN build process.`}</p>
<p>{`Can be used `}<strong parentName="p">{`multiple times`}</strong>{`.`}</p>
<Editor title="webiny.config.tsx" lang="tsx" mdxType="Editor">
{`import { Infra } from "webiny/extensions";

export const Extensions = () => <Infra.Admin.AfterBuild src="/extensions/my-extension.ts" />;`}
</Editor>
<p><strong parentName="p">{`Props`}</strong></p>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Prop`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Type`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Required`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`src`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`string`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`yes`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`—`}</td>
</tr>
</tbody>
</table>
<_Heading level={3} id={"admin-after-deploy"} nextElement={{
      "type": "paragraph"
    }}><code>Admin.AfterDeploy</code></_Heading>
<p>{`Add custom logic to be executed after the ADMIN deployment process.`}</p>
<p>{`Can be used `}<strong parentName="p">{`multiple times`}</strong>{`.`}</p>
<Editor title="webiny.config.tsx" lang="tsx" mdxType="Editor">
{`import { Infra } from "webiny/extensions";

export const Extensions = () => <Infra.Admin.AfterDeploy src="/extensions/my-extension.ts" />;`}
</Editor>
<p><strong parentName="p">{`Props`}</strong></p>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Prop`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Type`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Required`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`src`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`string`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`yes`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`—`}</td>
</tr>
</tbody>
</table>
<_Heading level={3} id={"admin-pulumi"} nextElement={{
      "type": "paragraph"
    }}><code>Admin.Pulumi</code></_Heading>
<p>{`Modify Admin app’s cloud infrastructure using Pulumi.`}</p>
<p>{`Can be used `}<strong parentName="p">{`multiple times`}</strong>{`.`}</p>
<Editor title="webiny.config.tsx" lang="tsx" mdxType="Editor">
{`import { Infra } from "webiny/extensions";

export const Extensions = () => <Infra.Admin.Pulumi src="/extensions/my-extension.ts" />;`}
</Editor>
<p><strong parentName="p">{`Props`}</strong></p>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Prop`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Type`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Required`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`src`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`string`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`yes`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`—`}</td>
</tr>
</tbody>
</table>
<_Heading level={3} id={"admin-custom-domains"} nextElement={{
      "type": "paragraph"
    }}><code>Admin.CustomDomains</code></_Heading>
<p>{`Configure custom domains for the Admin app.`}</p>
<p>{`Can only be used `}<strong parentName="p">{`once`}</strong>{`.`}</p>
<Editor title="webiny.config.tsx" lang="tsx" mdxType="Editor">
{`import { Infra } from "webiny/extensions";

export const Extensions = () => <Infra.Admin.CustomDomains domains={[]} certificateArn="value" />;`}
</Editor>
<p><strong parentName="p">{`Props`}</strong></p>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Prop`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Type`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Required`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`domains`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`array`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`yes`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`List of custom domains.`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`sslMethod`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`enum`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`no`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`The method to use for SSL/TLS certificate validation.`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`certificateArn`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`string`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`yes`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`The ARN of the SSL/TLS certificate to use for the custom domains.`}</td>
</tr>
</tbody>
</table>
<_Heading level={3} id={"admin-stack-output-value"} nextElement={{
      "type": "paragraph"
    }}><code>Admin.StackOutputValue</code></_Heading>
<p>{`Add custom output values to the Admin stack.`}</p>
<p>{`Can be used `}<strong parentName="p">{`multiple times`}</strong>{`.`}</p>
<Editor title="webiny.config.tsx" lang="tsx" mdxType="Editor">
{`import { Infra } from "webiny/extensions";

export const Extensions = () => <Infra.Admin.StackOutputValue key="value" />;`}
</Editor>
<p><strong parentName="p">{`Props`}</strong></p>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Prop`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Type`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Required`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`key`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`string`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`yes`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`The key for the output value`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`value`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`any`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`no`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`The value to output`}</td>
</tr>
</tbody>
</table>
<_Heading level={3} id={"api-before-build"} nextElement={{
      "type": "paragraph"
    }}><code>Api.BeforeBuild</code></_Heading>
<p>{`Add custom logic to be executed before the API build process.`}</p>
<p>{`Can be used `}<strong parentName="p">{`multiple times`}</strong>{`.`}</p>
<Editor title="webiny.config.tsx" lang="tsx" mdxType="Editor">
{`import { Infra } from "webiny/extensions";

export const Extensions = () => <Infra.Api.BeforeBuild src="/extensions/my-extension.ts" />;`}
</Editor>
<p><strong parentName="p">{`Props`}</strong></p>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Prop`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Type`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Required`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`src`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`string`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`yes`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`—`}</td>
</tr>
</tbody>
</table>
<_Heading level={3} id={"api-before-deploy"} nextElement={{
      "type": "paragraph"
    }}><code>Api.BeforeDeploy</code></_Heading>
<p>{`Add custom logic to be executed before the API deployment process.`}</p>
<p>{`Can be used `}<strong parentName="p">{`multiple times`}</strong>{`.`}</p>
<Editor title="webiny.config.tsx" lang="tsx" mdxType="Editor">
{`import { Infra } from "webiny/extensions";

export const Extensions = () => <Infra.Api.BeforeDeploy src="/extensions/my-extension.ts" />;`}
</Editor>
<p><strong parentName="p">{`Props`}</strong></p>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Prop`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Type`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Required`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`src`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`string`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`yes`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`—`}</td>
</tr>
</tbody>
</table>
<_Heading level={3} id={"api-before-watch"} nextElement={{
      "type": "paragraph"
    }}><code>Api.BeforeWatch</code></_Heading>
<p>{`Add custom logic to be executed before the API watch process.`}</p>
<p>{`Can be used `}<strong parentName="p">{`multiple times`}</strong>{`.`}</p>
<Editor title="webiny.config.tsx" lang="tsx" mdxType="Editor">
{`import { Infra } from "webiny/extensions";

export const Extensions = () => <Infra.Api.BeforeWatch src="/extensions/my-extension.ts" />;`}
</Editor>
<p><strong parentName="p">{`Props`}</strong></p>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Prop`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Type`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Required`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`src`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`string`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`yes`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`—`}</td>
</tr>
</tbody>
</table>
<_Heading level={3} id={"api-after-build"} nextElement={{
      "type": "paragraph"
    }}><code>Api.AfterBuild</code></_Heading>
<p>{`Add custom logic to be executed after the API build process.`}</p>
<p>{`Can be used `}<strong parentName="p">{`multiple times`}</strong>{`.`}</p>
<Editor title="webiny.config.tsx" lang="tsx" mdxType="Editor">
{`import { Infra } from "webiny/extensions";

export const Extensions = () => <Infra.Api.AfterBuild src="/extensions/my-extension.ts" />;`}
</Editor>
<p><strong parentName="p">{`Props`}</strong></p>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Prop`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Type`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Required`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`src`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`string`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`yes`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`—`}</td>
</tr>
</tbody>
</table>
<_Heading level={3} id={"api-after-deploy"} nextElement={{
      "type": "paragraph"
    }}><code>Api.AfterDeploy</code></_Heading>
<p>{`Add custom logic to be executed after the API deployment process.`}</p>
<p>{`Can be used `}<strong parentName="p">{`multiple times`}</strong>{`.`}</p>
<Editor title="webiny.config.tsx" lang="tsx" mdxType="Editor">
{`import { Infra } from "webiny/extensions";

export const Extensions = () => <Infra.Api.AfterDeploy src="/extensions/my-extension.ts" />;`}
</Editor>
<p><strong parentName="p">{`Props`}</strong></p>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Prop`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Type`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Required`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`src`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`string`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`yes`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`—`}</td>
</tr>
</tbody>
</table>
<_Heading level={3} id={"api-pulumi"} nextElement={{
      "type": "paragraph"
    }}><code>Api.Pulumi</code></_Heading>
<p>{`Modify Api app’s cloud infrastructure using Pulumi.`}</p>
<p>{`Can be used `}<strong parentName="p">{`multiple times`}</strong>{`.`}</p>
<Editor title="webiny.config.tsx" lang="tsx" mdxType="Editor">
{`import { Infra } from "webiny/extensions";

export const Extensions = () => <Infra.Api.Pulumi src="/extensions/my-extension.ts" />;`}
</Editor>
<p><strong parentName="p">{`Props`}</strong></p>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Prop`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Type`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Required`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`src`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`string`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`yes`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`—`}</td>
</tr>
</tbody>
</table>
<_Heading level={3} id={"api-stack-output-value"} nextElement={{
      "type": "paragraph"
    }}><code>Api.StackOutputValue</code></_Heading>
<p>{`Add custom output values to the Api stack.`}</p>
<p>{`Can be used `}<strong parentName="p">{`multiple times`}</strong>{`.`}</p>
<Editor title="webiny.config.tsx" lang="tsx" mdxType="Editor">
{`import { Infra } from "webiny/extensions";

export const Extensions = () => <Infra.Api.StackOutputValue key="value" />;`}
</Editor>
<p><strong parentName="p">{`Props`}</strong></p>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Prop`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Type`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Required`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`key`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`string`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`yes`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`The key for the output value`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`value`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`any`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`no`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`The value to output`}</td>
</tr>
</tbody>
</table>
<_Heading level={3} id={"api-lambda-function"} nextElement={{
      "type": "paragraph"
    }}><code>Api.LambdaFunction</code></_Heading>
<p>{`Add a custom Lambda function to the API app.`}</p>
<p>{`Can be used `}<strong parentName="p">{`multiple times`}</strong>{`.`}</p>
<Editor title="webiny.config.tsx" lang="tsx" mdxType="Editor">
{`import { Infra } from "webiny/extensions";

export const Extensions = () => <Infra.Api.LambdaFunction functionSrc="value" pulumiSrc="value" />;`}
</Editor>
<p><strong parentName="p">{`Props`}</strong></p>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Prop`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Type`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Required`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`functionSrc`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`string`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`yes`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`—`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`pulumiSrc`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`string`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`yes`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`—`}</td>
</tr>
</tbody>
</table>
<_Heading level={3} id={"core-before-build"} nextElement={{
      "type": "paragraph"
    }}><code>Core.BeforeBuild</code></_Heading>
<p>{`Add custom logic to be executed before the CORE build process.`}</p>
<p>{`Can be used `}<strong parentName="p">{`multiple times`}</strong>{`.`}</p>
<Editor title="webiny.config.tsx" lang="tsx" mdxType="Editor">
{`import { Infra } from "webiny/extensions";

export const Extensions = () => <Infra.Core.BeforeBuild src="/extensions/my-extension.ts" />;`}
</Editor>
<p><strong parentName="p">{`Props`}</strong></p>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Prop`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Type`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Required`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`src`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`string`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`yes`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`—`}</td>
</tr>
</tbody>
</table>
<_Heading level={3} id={"core-before-deploy"} nextElement={{
      "type": "paragraph"
    }}><code>Core.BeforeDeploy</code></_Heading>
<p>{`Add custom logic to be executed before the CORE deployment process.`}</p>
<p>{`Can be used `}<strong parentName="p">{`multiple times`}</strong>{`.`}</p>
<Editor title="webiny.config.tsx" lang="tsx" mdxType="Editor">
{`import { Infra } from "webiny/extensions";

export const Extensions = () => <Infra.Core.BeforeDeploy src="/extensions/my-extension.ts" />;`}
</Editor>
<p><strong parentName="p">{`Props`}</strong></p>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Prop`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Type`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Required`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`src`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`string`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`yes`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`—`}</td>
</tr>
</tbody>
</table>
<_Heading level={3} id={"core-before-watch"} nextElement={{
      "type": "paragraph"
    }}><code>Core.BeforeWatch</code></_Heading>
<p>{`Add custom logic to be executed before the CORE watch process.`}</p>
<p>{`Can be used `}<strong parentName="p">{`multiple times`}</strong>{`.`}</p>
<Editor title="webiny.config.tsx" lang="tsx" mdxType="Editor">
{`import { Infra } from "webiny/extensions";

export const Extensions = () => <Infra.Core.BeforeWatch src="/extensions/my-extension.ts" />;`}
</Editor>
<p><strong parentName="p">{`Props`}</strong></p>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Prop`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Type`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Required`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`src`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`string`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`yes`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`—`}</td>
</tr>
</tbody>
</table>
<_Heading level={3} id={"core-after-build"} nextElement={{
      "type": "paragraph"
    }}><code>Core.AfterBuild</code></_Heading>
<p>{`Add custom logic to be executed after the CORE build process.`}</p>
<p>{`Can be used `}<strong parentName="p">{`multiple times`}</strong>{`.`}</p>
<Editor title="webiny.config.tsx" lang="tsx" mdxType="Editor">
{`import { Infra } from "webiny/extensions";

export const Extensions = () => <Infra.Core.AfterBuild src="/extensions/my-extension.ts" />;`}
</Editor>
<p><strong parentName="p">{`Props`}</strong></p>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Prop`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Type`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Required`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`src`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`string`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`yes`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`—`}</td>
</tr>
</tbody>
</table>
<_Heading level={3} id={"core-after-deploy"} nextElement={{
      "type": "paragraph"
    }}><code>Core.AfterDeploy</code></_Heading>
<p>{`Add custom logic to be executed after the CORE deployment process.`}</p>
<p>{`Can be used `}<strong parentName="p">{`multiple times`}</strong>{`.`}</p>
<Editor title="webiny.config.tsx" lang="tsx" mdxType="Editor">
{`import { Infra } from "webiny/extensions";

export const Extensions = () => <Infra.Core.AfterDeploy src="/extensions/my-extension.ts" />;`}
</Editor>
<p><strong parentName="p">{`Props`}</strong></p>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Prop`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Type`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Required`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`src`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`string`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`yes`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`—`}</td>
</tr>
</tbody>
</table>
<_Heading level={3} id={"core-pulumi"} nextElement={{
      "type": "paragraph"
    }}><code>Core.Pulumi</code></_Heading>
<p>{`Modify Core app’s cloud infrastructure using Pulumi.`}</p>
<p>{`Can be used `}<strong parentName="p">{`multiple times`}</strong>{`.`}</p>
<Editor title="webiny.config.tsx" lang="tsx" mdxType="Editor">
{`import { Infra } from "webiny/extensions";

export const Extensions = () => <Infra.Core.Pulumi src="/extensions/my-extension.ts" />;`}
</Editor>
<p><strong parentName="p">{`Props`}</strong></p>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Prop`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Type`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Required`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`src`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`string`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`yes`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`—`}</td>
</tr>
</tbody>
</table>
<_Heading level={3} id={"core-stack-output-value"} nextElement={{
      "type": "paragraph"
    }}><code>Core.StackOutputValue</code></_Heading>
<p>{`Add custom output values to the Core stack.`}</p>
<p>{`Can be used `}<strong parentName="p">{`multiple times`}</strong>{`.`}</p>
<Editor title="webiny.config.tsx" lang="tsx" mdxType="Editor">
{`import { Infra } from "webiny/extensions";

export const Extensions = () => <Infra.Core.StackOutputValue key="value" />;`}
</Editor>
<p><strong parentName="p">{`Props`}</strong></p>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Prop`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Type`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Required`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`key`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`string`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`yes`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`The key for the output value`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`value`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`any`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`no`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`The value to output`}</td>
</tr>
</tbody>
</table>
<_Heading level={2} id={"project"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Project</_Heading>
<_Heading level={3} id={"id"} nextElement={{
      "type": "paragraph"
    }}><code>Id</code></_Heading>
<p>{`An extension for defining the project ID.`}</p>
<p>{`Can only be used `}<strong parentName="p">{`once`}</strong>{`.`}</p>
<Editor title="webiny.config.tsx" lang="tsx" mdxType="Editor">
{`import { Project } from "webiny/extensions";

export const Extensions = () => <Project.Id id="value" />;`}
</Editor>
<p><strong parentName="p">{`Props`}</strong></p>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Prop`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Type`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Required`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`id`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`string`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`yes`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`—`}</td>
</tr>
</tbody>
</table>
<_Heading level={3} id={"telemetry"} nextElement={{
      "type": "paragraph"
    }}><code>Telemetry</code></_Heading>
<p>{`This extension allows you to enable or disable telemetry for the project.`}</p>
<p>{`Can only be used `}<strong parentName="p">{`once`}</strong>{`.`}</p>
<Editor title="webiny.config.tsx" lang="tsx" mdxType="Editor">
{`import { Project } from "webiny/extensions";

export const Extensions = () => <Project.Telemetry />;`}
</Editor>
<p><strong parentName="p">{`Props`}</strong></p>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Prop`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Type`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Required`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`enabled`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`boolean`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`no`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`—`}</td>
</tr>
</tbody>
</table>
<_Heading level={3} id={"auto-install"} nextElement={{
      "type": "paragraph"
    }}><code>AutoInstall</code></_Heading>
<p>{`Auto-install Webiny with admin user credentials on first deploy.`}</p>
<p>{`Can only be used `}<strong parentName="p">{`once`}</strong>{`.`}</p>
<Editor title="webiny.config.tsx" lang="tsx" mdxType="Editor">
{`import { Project } from "webiny/extensions";

export const Extensions = () => <Project.AutoInstall adminUser={{}} />;`}
</Editor>
<p><strong parentName="p">{`Props`}</strong></p>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Prop`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Type`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Required`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`adminUser`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><a parentName="td" {...{
              "href": "#project-auto-install-admin-user"
            }}>{`object`}</a></td>
<td parentName="tr" {...{
            "align": null
          }}>{`yes`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Admin user credentials for installation`}</td>
</tr>
</tbody>
</table>
<span id="project-auto-install-admin-user"></span>
<_Heading level={4} id={"admin-user"} nextElement={{
      "type": "table",
      "align": [null, null, null, null]
    }}><code>adminUser</code></_Heading>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Field`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Type`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Required`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`firstName`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`string`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`yes`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Admin user first name`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`lastName`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`string`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`yes`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Admin user last name`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`email`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`string`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`yes`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Admin user email`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`password`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`string`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`yes`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Admin user password (minimum 8 characters)`}</td>
</tr>
</tbody>
</table>
<_Heading level={3} id={"feature-flags"} nextElement={{
      "type": "paragraph"
    }}><code>FeatureFlags</code></_Heading>
<p>{`Enable or disable WCP features.`}</p>
<p>{`Can only be used `}<strong parentName="p">{`once`}</strong>{`.`}</p>
<Editor title="webiny.config.tsx" lang="tsx" mdxType="Editor">
{`import { Project } from "webiny/extensions";

export const Extensions = () => <Project.FeatureFlags features={{}} />;`}
</Editor>
<p><strong parentName="p">{`Props`}</strong></p>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Prop`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Type`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Required`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`features`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><a parentName="td" {...{
              "href": "#project-feature-flags-features"
            }}>{`object`}</a></td>
<td parentName="tr" {...{
            "align": null
          }}>{`yes`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`—`}</td>
</tr>
</tbody>
</table>
<span id="project-feature-flags-features"></span>
<_Heading level={4} id={"features"} nextElement={{
      "type": "table",
      "align": [null, null, null, null]
    }}><code>features</code></_Heading>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Field`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Type`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Required`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`multiTenancy`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`boolean`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`no`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`—`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`advancedPublishingWorkflow`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`boolean`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`no`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`—`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`advancedAccessControlLayer`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><a parentName="td" {...{
              "href": "#project-feature-flags-features-advanced-access-control-layer"
            }}>{`boolean `}{`|`}{` object`}</a></td>
<td parentName="tr" {...{
            "align": null
          }}>{`no`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`—`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`auditLogs`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`boolean`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`no`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`—`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`recordLocking`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`boolean`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`no`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`—`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`fileManager`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><a parentName="td" {...{
              "href": "#project-feature-flags-features-file-manager"
            }}>{`object`}</a></td>
<td parentName="tr" {...{
            "align": null
          }}>{`no`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`—`}</td>
</tr>
</tbody>
</table>
<span id="project-feature-flags-features-advanced-access-control-layer"></span>
<_Heading level={4} id={"advanced-access-control-layer"} nextElement={{
      "type": "paragraph"
    }}><code>advancedAccessControlLayer</code></_Heading>
<p>{`Accepts one of:`}</p>
<ul>
<li parentName="ul"><inlineCode parentName="li">{`boolean`}</inlineCode></li>
<li parentName="ul"><a parentName="li" {...{
          "href": "#project-feature-flags-features-advanced-access-control-layer-option-2"
        }}>{`object`}</a></li>
</ul>
<span id="project-feature-flags-features-advanced-access-control-layer-option-2"></span>
<_Heading level={4} id={"advanced-access-control-layer-option-2"} nextElement={{
      "type": "table",
      "align": [null, null, null, null]
    }}><code>advancedAccessControlLayer (option 2)</code></_Heading>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Field`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Type`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Required`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`teams`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`boolean`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`no`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`—`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`privateFiles`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`boolean`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`no`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`—`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`folderLevelPermissions`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`boolean`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`no`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`—`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`hcmsFieldPermissions`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`boolean`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`no`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`—`}</td>
</tr>
</tbody>
</table>
<span id="project-feature-flags-features-file-manager"></span>
<_Heading level={4} id={"file-manager"} nextElement={{
      "type": "table",
      "align": [null, null, null, null]
    }}><code>fileManager</code></_Heading>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Field`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Type`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Required`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`threatDetection`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`boolean`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`no`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`—`}</td>
</tr>
</tbody>
</table>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;