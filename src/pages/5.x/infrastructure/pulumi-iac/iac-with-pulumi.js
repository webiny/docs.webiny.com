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
  "title": "Infrastructure as Code with Pulumi",
  "description": "Learn what is Pulumi and how Webiny is utilizing it with your project applications.",
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
  "title": "Why Pulumi?",
  "slug": "why-pulumi",
  "children": []
}, {
  "title": "A Closer Look",
  "slug": "a-closer-look",
  "children": []
}, {
  "title": "State Files and Different Backends",
  "slug": "state-files-and-different-backends",
  "children": []
}, {
  "title": "FAQ",
  "slug": "faq",
  "children": [{
    "title": "Are You Using Pulumi's Automation API?",
    "slug": "are-you-using-pulumi-s-automation-api",
    "children": []
  }, {
    "title": "Is It Possible to Use a Different Infrastructure-as-Code Solution?",
    "slug": "is-it-possible-to-use-a-different-infrastructure-as-code-solution",
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



<Alert type="success" title="What you’ll learn" mdxType="Alert">
<ul>
<li parentName="ul">{`what is Pulumi`}</li>
<li parentName="ul">{`how is Webiny utilizing Pulumi with your project applications`}</li>
<li parentName="ul">{`what are state files`}</li>
<li parentName="ul">{`what are backends`}</li>
</ul>
</Alert>
<_Heading level={2} id={"why-pulumi"} nextElement={{
      "type": "paragraph"
    }}>Why Pulumi?</_Heading>
<p>{`For defining and deploying necessary cloud infrastructure Webiny relies on `}<a parentName="p" {...{
        "href": "https://www.pulumi.com/"
      }}>{`Pulumi`}</a>{`, a modern `}<a parentName="p" {...{
        "href": "https://docs.aws.amazon.com/whitepapers/latest/introduction-devops-aws/infrastructure-as-code.html"
      }}>{`infrastructure as code (IaC)`}</a>{` solution.`}</p>
<p>{`Webiny chose Pulumi as its default IaC solution for a couple of reasons:`}</p>
<ul>
<li parentName="ul">{`cloud infrastructure is defined via code (TypeScript)`}</li>
<li parentName="ul">{`it supports multiple cloud providers (AWS, Azure, Google Cloud Platform, …)`}</li>
<li parentName="ul">{`it provides multiple solutions for storing infrastructure state`}</li>
<li parentName="ul">{`a vibrant and rising community`}</li>
</ul>
<_Heading level={2} id={"a-closer-look"} nextElement={{
      "type": "paragraph"
    }}>A Closer Look</_Heading>
<p>{`Every Webiny project consists of four project applications:`}</p>
<ol>
<li parentName="ol"><strong parentName="li">{`Core`}</strong>{` (`}<a parentName="li" {...{
          "href": "https://github.com/webiny/webiny-js/blob/v5.40.0/packages/cwp-template-aws/template/ddb/apps/core/webiny.application.ts"
        }}><inlineCode parentName="a">{`apps/core/webiny.application.ts`}</inlineCode></a>{`)`}</li>
<li parentName="ol"><strong parentName="li">{`API`}</strong>{` (`}<a parentName="li" {...{
          "href": "https://github.com/webiny/webiny-js/blob/v5.40.0/packages/cwp-template-aws/template/ddb/apps/api/webiny.application.ts"
        }}><inlineCode parentName="a">{`apps/api/webiny.application.ts`}</inlineCode></a>{`)`}</li>
<li parentName="ol"><strong parentName="li">{`Admin`}</strong>{` (`}<a parentName="li" {...{
          "href": "https://github.com/webiny/webiny-js/blob/v5.40.0/packages/cwp-template-aws/template/common/apps/admin/webiny.application.ts"
        }}><inlineCode parentName="a">{`apps/admin/webiny.application.ts`}</inlineCode></a>{`)`}</li>
<li parentName="ol"><strong parentName="li">{`Website`}</strong>{` (`}<a parentName="li" {...{
          "href": "https://github.com/webiny/webiny-js/blob/v5.40.0/packages/cwp-template-aws/template/common/apps/website/webiny.application.ts"
        }}><inlineCode parentName="a">{`apps/website/webiny.application.ts`}</inlineCode></a>{`)`}</li>
</ol>
<p>{`In the background, all of these applications are standalone `}<a parentName="p" {...{
        "href": "https://www.pulumi.com/docs/intro/concepts/project/#projects"
      }}>{`Pulumi projects`}</a>{`, which essentially means two things.`}</p>
<ol>
<li parentName="ol">
<p parentName="li">{`every project application contains its own infrastructure-related code (`}<a parentName="p" {...{
            "href": "https://www.pulumi.com/docs/intro/concepts/programming-model/#programs"
          }}>{`Pulumi program`}</a>{`), configuration, meta, and `}<_Link href="/docs/5.x/infrastructure/pulumi-iac/iac-with-pulumi#state-files">{`state files`}</_Link></p>
</li>
<li parentName="ol">
<p parentName="li">{`upon fully deploying a Webiny project via the `}<_Link href="/docs/5.x/core-development-concepts/basics/project-deployment"><inlineCode parentName="p">{`webiny deploy`}</inlineCode></_Link>{` command, applications are deployed separately, one by one, in the same order as listed above`}</p>
</li>
</ol>
<Alert type="info" title="Cloud Infrastructure" mdxType="Alert">
<p>{`Read more about the cloud infrastructure resources that get deployed into your AWS account in our `}<_Link href="/docs/5.x/architecture/introduction">{`Cloud
Infrastructure`}</_Link>{` key topics section.`}</p>
</Alert>
<p>{`When it comes to the cloud infrastructure (Pulumi) code that defines all of the required resources, note that all of it is abstracted away from users and maintained internally by the Webiny team. This way, users do not have to worry about the cloud infrastructure code, and can focus on building their applications.`}</p>
<Alert type={"info"} mdxType="Alert">
<p>{`If you are interested in seeing the actual cloud infrastructure code, you can find it in our `}<a parentName="p" {...{
          "href": "https://github.com/webiny/webiny-js/tree/next/packages/pulumi-aws/src/apps"
        }}>{`GitHub
repository`}</a>{`.`}</p>
</Alert>
<p>{`Still, in some cases, users may need to modify the cloud infrastructure code. For example, when they want to add a new AWS resource, or modify an existing one. In such cases, users can do so by modifying the `}<inlineCode parentName="p">{`webiny.application.ts`}</inlineCode>{` files located in the root of each project application.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`  To learn more about how to modify the cloud infrastructure code, please refer to the `}<_Link href="/docs/5.x/infrastructure/basics/modify-cloud-infrastructure">{`Modify Cloud
Infrastructure`}</_Link>{` article.`}</p>
</Alert>
<_Heading level={2} id={"state-files-and-different-backends"} nextElement={{
      "type": "paragraph"
    }}>State Files and Different Backends</_Heading>
<p>{`Pulumi state files describe at what state your cloud infrastructure is currently at. For example, it contains a list of all deployed resources, various metadata, configuration, and so on. State files are stored per Pulumi program stack, and by default, they are stored in the `}<inlineCode parentName="p">{`.pulumi`}</inlineCode>{` folder, located in your project root.`}</p>
<Editor title="" lang="text" mdxType="Editor">
{`.pulumi
├── apps
│   ├── core
│   │   ├── .pulumi
│   │   │   ├── backups
│   │   │   ├── history
│   │   │   └── stacks
│   ├── api
│   │   ├── .pulumi
│   │   │   ├── backups
│   │   │   ├── history
│   │   │   └── stacks
│   ├── admin
│   │   ├── .pulumi
│   │   │   ├── backups
│   │   │   ├── history
│   │   │   └── stacks
│   └── website
│       ├── .pulumi
│       │   ├── backups
│       │   ├── history
│       │   └── stacks
│  
└── (...)`}
</Editor>
<p>{`Notice how in the `}<inlineCode parentName="p">{`.pulumi`}</inlineCode>{` folder, the state files are organized per project application:`}</p>
<ul>
<li parentName="ul"><inlineCode parentName="li">{`apps/core`}</inlineCode>{` - `}<strong parentName="li">{`Core`}</strong>{` project application’s cloud infrastructure state files`}</li>
<li parentName="ul"><inlineCode parentName="li">{`apps/api`}</inlineCode>{` - `}<strong parentName="li">{`API`}</strong>{` project application’s cloud infrastructure state files`}</li>
<li parentName="ul"><inlineCode parentName="li">{`apps/admin`}</inlineCode>{` - `}<strong parentName="li">{`Admin Area`}</strong>{` project application’s cloud infrastructure state files`}</li>
<li parentName="ul"><inlineCode parentName="li">{`apps/website`}</inlineCode>{` - `}<strong parentName="li">{`Website`}</strong>{` project application’s cloud infrastructure state files`}</li>
</ul>
<p>{`While in some cases, like local development, storing state files locally may work for you, in others, you may want to store these in a remote storage.`}</p>
<p>{`This is where the concept of `}<a parentName="p" {...{
        "href": "https://www.pulumi.com/docs/intro/concepts/state/#state-and-backends"
      }}>{`Pulumi backends`}</a>{` comes into play, which represent different storage services, that you can use for storing your state files.`}</p>
<p>{`For example, you can create a simple Amazon S3 bucket, and choose to store your files in it. You can also use the Pulumi Service, which, in addition to storing state files, also provides a couple of other cool features.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`Learn more about state files and how to store them `}<_Link href="/docs/5.x/core-development-concepts/ci-cd/cloud-infrastructure-state-files">{`Cloud Infrastructure State Files`}</_Link>{`
article.`}</p>
</Alert>
<_Heading level={2} id={"faq"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>FAQ</_Heading>
<_Heading level={3} id={"are-you-using-pulumi-s-automation-api"} nextElement={{
      "type": "paragraph"
    }}>Are You Using Pulumi&#39;s Automation API?</_Heading>
<p>{`Currently, Webiny is not using the `}<a parentName="p" {...{
        "href": "https://www.pulumi.com/blog/automation-api-workflow/"
      }}>{`Automation API`}</a>{`. It’s actually using its own `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/tree/v5/packages/pulumi-sdk"
      }}>{`Pulumi SDK`}</a>{` package, which is just a tiny wrapper over Pulumi CLI. Essentially, it enables programmatic use of the Pulumi CLI, which is similar to what the Automation API is also doing.`}</p>
<_Heading level={3} id={"is-it-possible-to-use-a-different-infrastructure-as-code-solution"} nextElement={{
      "type": "paragraph"
    }}>Is It Possible to Use a Different Infrastructure-as-Code Solution?</_Heading>
<p>{`Switching to a different infrastructure-as-code (IaC) solution would require a significant amount of work as it would involve rewriting almost all of the Webiny IaC code from scratch for a different IaC solution. `}<strong parentName="p">{`Therefore, we do not recommend it.`}</strong></p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;