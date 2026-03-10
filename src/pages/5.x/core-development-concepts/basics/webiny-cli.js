/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import webinyInfoCommand from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/core-development-concepts/basics/assets/webiny-info-command.png";
import webinyAboutCommand from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/core-development-concepts/basics/assets/webiny-about-command.png";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Webiny CLI",
  "description": "Learn what Webiny CLI is and how it can help you in your project development.",
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
  "title": "Commands",
  "slug": "commands",
  "children": [{
    "title": "Deployments",
    "slug": "deployments",
    "children": [{
      "title": "yarn webiny deploy --env ENV",
      "slug": "yarn-webiny-deploy-env-env"
    }, {
      "title": "yarn webiny deploy APP --env ENV",
      "slug": "yarn-webiny-deploy-app-env-env"
    }, {
      "title": "yarn webiny destroy APP --env ENV",
      "slug": "yarn-webiny-destroy-app-env-env"
    }, {
      "title": "yarn webiny pulumi APP --env ENV -- PULUMI_COMMAND",
      "slug": "yarn-webiny-pulumi-app-env-env-pulumi-command"
    }, {
      "title": "yarn webiny output APP --env ENV",
      "slug": "yarn-webiny-output-app-env-env"
    }]
  }, {
    "title": "Development",
    "slug": "development",
    "children": [{
      "title": "yarn webiny watch APP --env ENV",
      "slug": "yarn-webiny-watch-app-env-env"
    }, {
      "title": "yarn webiny build APP --env ENV",
      "slug": "yarn-webiny-build-app-env-env"
    }, {
      "title": "yarn webiny extension",
      "slug": "yarn-webiny-extension"
    }, {
      "title": "yarn webiny info --env ENV",
      "slug": "yarn-webiny-info-env-env"
    }, {
      "title": "yarn webiny about",
      "slug": "yarn-webiny-about"
    }]
  }, {
    "title": "Other",
    "slug": "other",
    "children": [{
      "title": "yarn webiny disable-telemetry",
      "slug": "yarn-webiny-disable-telemetry"
    }]
  }]
}, {
  "title": "FAQ",
  "slug": "faq",
  "children": [{
    "title": "Do I Need to Install Webiny CLI Manually?",
    "slug": "do-i-need-to-install-webiny-cli-manually",
    "children": []
  }, {
    "title": "Do I Need to Invoke the Webiny CLI With yarn?",
    "slug": "do-i-need-to-invoke-the-webiny-cli-with-yarn",
    "children": []
  }]
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
const Editor = makeShortcode("Editor");
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





<Alert type="success" title="What you'll learn" mdxType="Alert">
<ul>
<li parentName="ul">{`what is the Webiny CLI`}</li>
<li parentName="ul">{`what are the commonly used commands`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`Webiny CLI (command line interface) is the central tool that you’ll be using throughout the complete project development process, in your terminal of choice.`}</p>
<p>{`Out of the box, it offers a couple of commands that will let you perform essential tasks like deployments, development and production code builds, different scaffolding, and so on.`}</p>
<p>{`Additionally, the Webiny CLI is pluggable, meaning you can easily create your own custom commands, or even replace the existing ones. Please visit the `}<_Link href="/docs/5.x/core-development-concepts/extending-and-customizing/adding-custom-cli-commands">{`Adding Custom Commands`}</_Link>{` guide for more information.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`  For a full list of commands, in your terminal of choice, make sure to run:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`yarn webiny --help`}
</Editor>
</Alert>
<_Heading level={2} id={"commands"} nextElement={{
      "type": "paragraph"
    }}>Commands</_Heading>
<p>{`In the following sections, we cover the most commonly used commands that the Webiny CLI provides.`}</p>
<_Heading level={3} id={"deployments"} nextElement={{
      "type": "paragraph"
    }}>Deployments</_Heading>
<p>{`Here are the most commonly used deployments-related commands.`}</p>
<_Heading level={4} id={"yarn-webiny-deploy-env-env"} nextElement={{
      "type": "paragraph"
    }}><code>yarn webiny deploy --env ENV</code></_Heading>
<p>{`Fully deploys your Webiny project. By default, `}<inlineCode parentName="p">{`dev`}</inlineCode>{` will be used as the environment. You can specify a different environment using the `}<inlineCode parentName="p">{`--env`}</inlineCode>{` argument.`}</p>
<_Heading level={4} id={"yarn-webiny-deploy-app-env-env"} nextElement={{
      "type": "paragraph"
    }}><code>yarn webiny deploy APP --env ENV</code></_Heading>
<p>{`Deploys specified project application (instead of the whole project) into the specified environment. Note that when deploying a specific application, the `}<inlineCode parentName="p">{`--env`}</inlineCode>{` argument is required.`}</p>
<_Heading level={4} id={"yarn-webiny-destroy-app-env-env"} nextElement={{
      "type": "paragraph"
    }}><code>yarn webiny destroy APP --env ENV</code></_Heading>
<p>{`Destroys cloud infrastructure resources that were previously deployed as part of the specified project application, into a specified environment.`}</p>
<p>{`The `}<inlineCode parentName="p">{`--env`}</inlineCode>{` argument is required.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`  For more hands-on information on the above listed commands, please visit the `}<_Link href="/docs/5.x/core-development-concepts/basics/project-deployment">{`Deploy Your Project`}</_Link>{` and `}<_Link href="/docs/5.x/infrastructure/basics/destroy-cloud-infrastructure">{`Destroy Cloud Infrastructure`}</_Link>{` guides.`}</p>
</Alert>
<_Heading level={4} id={"yarn-webiny-pulumi-app-env-env-pulumi-command"} nextElement={{
      "type": "paragraph"
    }}><code>yarn webiny pulumi APP --env ENV -- PULUMI_COMMAND</code></_Heading>
<p>{`Provides a way to execute Pulumi specific commands directly via the Pulumi CLI.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`  For more information, please visit the `}<_Link href="/docs/5.x/infrastructure/pulumi-iac/execute-pulumi-commands">{`Execute Pulumi Commands`}</_Link>{` guide.`}</p>
</Alert>
<_Heading level={4} id={"yarn-webiny-output-app-env-env"} nextElement={{
      "type": "paragraph"
    }}><code>yarn webiny output APP --env ENV</code></_Heading>
<p>{`Returns Pulumi stack output for the specified project application and environment.`}</p>
<_Heading level={3} id={"development"} nextElement={{
      "type": "paragraph"
    }}>Development</_Heading>
<p>{`Here are the most commonly used development-related commands.`}</p>
<_Heading level={4} id={"yarn-webiny-watch-app-env-env"} nextElement={{
      "type": "paragraph"
    }}><code>yarn webiny watch APP --env ENV</code></_Heading>
<p>{`Starts local development session for the specified project application, in the specified environment.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`  For more information, please visit the `}<_Link href="/docs/5.x/core-development-concepts/basics/watch-command">{`Use Watch Command`}</_Link>{` guide.`}</p>
</Alert>
<_Heading level={4} id={"yarn-webiny-build-app-env-env"} nextElement={{
      "type": "paragraph"
    }}><code>yarn webiny build APP --env ENV</code></_Heading>
<p>{`Builds the specified project application, for the specified environment.`}</p>
<_Heading level={4} id={"yarn-webiny-extension"} nextElement={{
      "type": "paragraph"
    }}><code>yarn webiny extension</code></_Heading>
<p>{`Makes it easy to start developing new Webiny extensions. To learn more about extensions, please visit the `}<_Link href="/docs/5.x/core-development-concepts/basics/extensions">{`Extensions`}</_Link>{` article.`}</p>
<_Heading level={4} id={"yarn-webiny-info-env-env"} nextElement={{
      "type": "paragraph"
    }}><code>yarn webiny info --env ENV</code></_Heading>
<p>{`Returns useful project information, like AWS region and useful URLs.`}</p>
<Image src={webinyInfoCommand} title="Command output" mdxType="Image" />
<_Heading level={4} id={"yarn-webiny-about"} nextElement={{
      "type": "paragraph"
    }}><code>yarn webiny about</code></_Heading>
<p>{`Prints out information helpful for debugging purposes.`}</p>
<Image src={webinyAboutCommand} title="Command output" mdxType="Image" />
<_Heading level={3} id={"other"} nextElement={{
      "type": "paragraph"
    }}>Other</_Heading>
<p>{`Here are some other commonly used commands.`}</p>
<_Heading level={4} id={"yarn-webiny-disable-telemetry"} nextElement={{
      "type": "paragraph"
    }}><code>yarn webiny disable-telemetry</code></_Heading>
<p>{`Completely disables collection of anonymous usage information.`}</p>
<Alert type="warning" title="Telemetry" mdxType="Alert">
<p>{`  By default, Webiny collects anonymous usage information, which is exclusively used for improving the product and understanding usage patterns. Please take a look at our `}<a parentName="p" {...{
          "href": "https://www.webiny.com/telemetry/"
        }}>{`Telemetry`}</a>{` page for more information on this subject.`}</p>
</Alert>
<_Heading level={2} id={"faq"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>FAQ</_Heading>
<_Heading level={3} id={"do-i-need-to-install-webiny-cli-manually"} nextElement={{
      "type": "paragraph"
    }}>Do I Need to Install Webiny CLI Manually?</_Heading>
<p>{`No, Webiny CLI comes set up automatically with every new Webiny project.`}</p>
<_Heading level={3} id={"do-i-need-to-invoke-the-webiny-cli-with-yarn"} nextElement={{
      "type": "paragraph"
    }}>Do I Need to Invoke the Webiny CLI With<code>yarn</code>?</_Heading>
<p>{`For the highest chance that everything will work as expected, we recommend you do so. But do note that if you’re using some of the alternative terminals, like for example `}<a parentName="p" {...{
        "href": "https://ohmyz.sh/"
      }}>{`Zsh`}</a>{`, you might even get away without it.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;