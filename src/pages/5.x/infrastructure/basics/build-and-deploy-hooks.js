/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import deployPhases from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/infrastructure/basics/assets/build-and-deploy-hooks/webiny_deploy_phases.png";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Build and Deploy Hooks",
  "description": "Learn how to hook onto key lifecycle events of the \"webiny deploy\" commands.",
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
  "title": "Introduction",
  "slug": "introduction",
  "children": []
}, {
  "title": "Creating a Hook",
  "slug": "creating-a-hook",
  "children": []
}, {
  "title": "Watch Command Hooks",
  "slug": "watch-command-hooks",
  "children": []
}, {
  "title": "FAQ",
  "slug": "faq",
  "children": [{
    "title": "Can I Define My Plugin in a Separate File and Simply Import It in the webiny.project.ts File?",
    "slug": "can-i-define-my-plugin-in-a-separate-file-and-simply-import-it-in-the-webiny-project-ts-file",
    "children": []
  }]
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
const Image = makeShortcode("Image");
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




<Alert type="info" title="Can I Use This?" mdxType="Alert">
<p>{`Build-related hooks outlined in this guide are available since Webiny `}<strong parentName="p">{`v5.20.0`}</strong>{`, while deploy-related ones are available already since Webiny `}<strong parentName="p">{`v5.0.0`}</strong>{`.`}</p>
</Alert>
<Alert type="success" title="What you’ll learn" mdxType="Alert">
<ul>
<li parentName="ul">{`how to run custom code before and after build and deploy steps`}</li>
</ul>
</Alert>
<_Heading level={2} id={"introduction"} nextElement={{
      "type": "paragraph"
    }}>Introduction</_Heading>
<p>{`Internally, the `}<_Link href="/docs/5.x/core-development-concepts/basics/project-deployment"><inlineCode parentName="p">{`webiny deploy`}</inlineCode></_Link>{` command consists of two steps:`}</p>
<ol>
<li parentName="ol"><strong parentName="li">{`build`}</strong>{` - within this step, your application code gets compiled and is made ready for deployment`}</li>
<li parentName="ol"><strong parentName="li">{`deploy`}</strong>{` - within this step, the compiled code, along with the defined cloud infrastructure resources gets deployed`}</li>
</ol>
<Alert type="info" mdxType="Alert">
<p>{`To deploy necessary cloud infrastructure, by default, Webiny relies on Pulumi, a modern infrastructure as code framework. Find out more in the following `}<_Link href="/docs/5.x/infrastructure/pulumi-iac/iac-with-pulumi">{`IaC with Pulumi`}</_Link>{` key topic.`}</p>
</Alert>
<p>{`In some cases, it might be necessary to run some code before or after build or deployment. For example, you may want to add some additional logging or validation.`}</p>
<p>{`This is why the `}<_Link href="/docs/5.x/core-development-concepts/basics/project-deployment"><inlineCode parentName="p">{`webiny deploy`}</inlineCode></_Link>{` command enables hooking onto a couple of its key lifecycle events:`}</p>
<ol>
<li parentName="ol">{`pre-build`}</li>
<li parentName="ol">{`post-build`}</li>
<li parentName="ol">{`pre-deploy`}</li>
<li parentName="ol">{`post-deploy`}</li>
</ol>
<p>{`The following diagram shows in which order these lifecycle events are triggered:`}</p>
<Image src={deployPhases} title="webiny deploy Command's Lifecycle Events" shadow={false} mdxType="Image" />
<p>{`We can hook onto any of these events via a dedicated plugin type, which we cover in the following section.`}</p>
<_Heading level={2} id={"creating-a-hook"} nextElement={{
      "type": "paragraph"
    }}>Creating a Hook</_Heading>
<p>{`The following code demonstrates all of the plugin types we can use in order to hook onto the command’s key lifecycle events. We are defining them within the `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/next/packages/cwp-template-aws/template/common/webiny.project.ts#L23"
      }}><inlineCode parentName="a">{`cli.plugins`}</inlineCode></a>{` section of the object exported from the root `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/next/packages/cwp-template-aws/template/common/webiny.project.ts"
      }}><inlineCode parentName="a">{`webiny.project.ts`}</inlineCode></a>{` file.`}</p>
<Editor title="webiny.project.ts" lang="ts" mdxType="Editor">
{`// Some of the code is removed for brevity.

export default {
  name: "your-project",
  cli: {
    plugins: [
      // ... all other plugins go here
      {
        type: "hook-before-build",
        name: "my-custom-hook-before-build",
        async hook(args, context) {
          // Gets executed before the build (application code compilation) step.
        }
      },
      {
        type: "hook-after-build",
        name: "my-custom-hook-after-build",
        async hook(args, context) {
          // Gets executed after the build (application code compilation) step.
        }
      },
      {
        type: "hook-before-deploy",
        name: "my-custom-hook-before-deploy",
        async hook(args, context) {
          // Gets executed before the deployment of the compiled code
          // and other necessary cloud infrastructure resources.
        }
      },
      {
        type: "hook-after-deploy",
        name: "my-custom-hook-after-deploy",
        async hook(args, context) {
          // Gets executed after the deployment of the compiled code
          // and other necessary cloud infrastructure resources.
        }
      }
    ]
  }
};`}
</Editor>
<_Heading level={2} id={"watch-command-hooks"} nextElement={{
      "type": "paragraph"
    }}>Watch Command Hooks</_Heading>
<p>{`Except for the `}<_Link href="/docs/5.x/core-development-concepts/basics/project-deployment"><inlineCode parentName="p">{`webiny deploy`}</inlineCode></_Link>{` command, hooking onto key lifecycle events is also supported by the `}<_Link href="/docs/5.x/core-development-concepts/basics/watch-command"><inlineCode parentName="p">{`webiny watch`}</inlineCode></_Link>{` command.`}</p>
<p>{`At the moment, via the `}<inlineCode parentName="p">{`hook-before-watch`}</inlineCode>{` lifecycle event, we can perform additional steps once the command has been initialized, which is demonstrated by the following code:`}</p>
<Editor title="webiny.project.ts" lang="ts" mdxType="Editor">
{`// Some code is removed for brevity.

export default {
  name: "your-project",
  cli: {
    plugins: [
      // ... all other plugins go here
      {
        type: "hook-before-watch",
        name: "my-custom-hook-before-watch",
        async hook(args, context) {
          // Gets executed before the watch command starts.
        }
      }
    ]
  }
};`}
</Editor>
<_Heading level={2} id={"faq"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>FAQ</_Heading>
<_Heading level={3} id={"can-i-define-my-plugin-in-a-separate-file-and-simply-import-it-in-the-webiny-project-ts-file"} nextElement={{
      "type": "paragraph"
    }}>Can I Define My Plugin in a Separate File and Simply Import It in the<code>webiny.project.ts</code>File?</_Heading>
<p>{`Yes, you can and that’s probably the best way to do it because the `}<inlineCode parentName="p">{`webiny.project.ts`}</inlineCode>{` file will be easier to read.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;