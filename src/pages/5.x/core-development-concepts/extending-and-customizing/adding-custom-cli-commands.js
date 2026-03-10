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
  "title": "Adding Custom CLI Commands",
  "description": "Learn how to add custom commands to the Webiny CLI.",
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
  "title": "Adding the Command",
  "slug": "adding-the-command",
  "children": []
}, {
  "title": "Overriding Existing Commands",
  "slug": "overriding-existing-commands",
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



<Alert type="success" title="What you'll learn" mdxType="Alert">
<ul>
<li parentName="ul">{`how to create a new Webiny CLI command`}</li>
<li parentName="ul">{`how to override existing commands`}</li>
</ul>
</Alert>
<_Heading level={2} id={"introduction"} nextElement={{
      "type": "paragraph"
    }}>Introduction</_Heading>
<p><_Link href="/docs/5.x/core-development-concepts/basics/webiny-cli">{`Webiny CLI`}</_Link>{` is pluggable by default, which means you can create new commands, or even override existing ones, simply by adding a new plugin, with its type property set to `}<inlineCode parentName="p">{`cli-command`}</inlineCode>{`.`}</p>
<p>{`This can be useful if you want to create one or more custom commands for your project, which the developers can use.`}</p>
<_Heading level={2} id={"adding-the-command"} nextElement={{
      "type": "paragraph"
    }}>Adding the Command</_Heading>
<p>{`For this tutorial, we’re going to create a new plugin directly in the `}<inlineCode parentName="p">{`webiny.project.js`}</inlineCode>{` file, located in your project root folder.`}</p>
<p>{`The content of this file might look something like the following:`}</p>
<Editor title="webiny.project.js" lang="js" mdxType="Editor">
{`module.exports = {
  template: "@webiny/cwp-template-aws@5.0.0",
  name: "my-project",
  cli: {
    plugins: [
      // Webiny CLI commands required from different packages.
      require("@webiny/cli-plugin-workspaces")(),
      require("@webiny/cli-plugin-deploy-pulumi")(),
      require("@webiny/api-page-builder/cli")(),
      require("@webiny/cwp-template-aws/cli")()
    ]
  }
};`}
</Editor>
<p>{`Notice the plugins required in the `}<inlineCode parentName="p">{`cli.plugins`}</inlineCode>{` array. This is where we are going to add our own, for example:`}</p>
<Editor title="webiny.project.js" lang="js" mdxType="Editor">
{`module.exports = {
  template: "@webiny/cwp-template-aws@5.0.0",
  name: "my-project",
  cli: {
    plugins: [
      // Webiny CLI commands required from different packages.
      require("@webiny/cli-plugin-workspaces")(),
      require("@webiny/cli-plugin-deploy-pulumi")(),
      require("@webiny/api-page-builder/cli")(),
      require("@webiny/cwp-template-aws/cli")(),
      // We added the new CLI command plugin here.
      {
        type: "cli-command",
        name: "cli-command-drink",
        // Here we create the command, using "yargs" library.
        create({ yargs, context }) {
          yargs.example("$0 drink water ");
          yargs.command(
            "drink <what>",
            \`Prints a message with the drink you've specified.\`,
            yargs => {
              yargs.positional("what", {
                describe: \`What do you want to drink?\`,
                type: "string",
                default: "nothing"
              });
            },
            // This is the function that'll be called when the command is executed.
            async args => {
              if (args.what === "coffee") {
                context.error("Please, no more coffee.");
                process.exit(1);
              }
              context.log("I want to drink:", args.what);
            }
          );
        }
      }
    ]
  }
};`}
</Editor>
<p>{`To test it out, in your terminal of choice, you can run the following commands:`}</p>
<Editor title="" lang="null" mdxType="Editor">
{`// Prints "webiny error: Please, no more coffee.'" and exits with exit code 1.
yarn webiny drink coffee

// Prints "webiny log: I want to drink: water" and exits with exit code 0.
yarn webiny drink water`}
</Editor>
<Alert type="info" title="Moving the Code To a Separate File" mdxType="Alert">
<p>{`Inserting new plugins directly into the `}<inlineCode parentName="p">{`webiny.project.js`}</inlineCode>{` works, but overtime, may become crowded. Feel free to move this code into a separate file, for example `}<inlineCode parentName="p">{`scripts/drinkCommand.js`}</inlineCode>{`, and use the `}<inlineCode parentName="p">{`webiny.project.js`}</inlineCode>{` just to call the necessary `}<inlineCode parentName="p">{`require`}</inlineCode>{` statements.`}</p>
</Alert>
<Alert type="info" mdxType="Alert">
<p>{`To define commands, we use the `}<inlineCode parentName="p">{`yargs`}</inlineCode>{` library, which is provided as one of the named arguments of the `}<inlineCode parentName="p">{`create`}</inlineCode>{` function. Be sure to check out the `}<a parentName="p" {...{
          "href": "http://yargs.js.org/"
        }}>{`official Yargs documentation`}</a>{` for more information.`}</p>
</Alert>
<_Heading level={2} id={"overriding-existing-commands"} nextElement={{
      "type": "paragraph"
    }}>Overriding Existing Commands</_Heading>
<p>{`We override existing commands by overriding already registered plugins, which is done by registering a new plugin with the `}<inlineCode parentName="p">{`name`}</inlineCode>{` property equal to the `}<inlineCode parentName="p">{`name`}</inlineCode>{` property of the plugin we want to override.`}</p>
<p>{`In the above shown code, we have the following import in the `}<inlineCode parentName="p">{`cli.plugins`}</inlineCode>{` array:`}</p>
<Editor title="" lang="null" mdxType="Editor">
{`require("@webiny/cli-plugin-deploy-pulumi")()`}
</Editor>
<p>{`This function call registers the `}<inlineCode parentName="p">{`cli-command-deployment`}</inlineCode>{` plugin, which sets up all of the necessary commands for deploying your project, using the `}<_Link href="/docs/5.x/infrastructure/pulumi-iac/iac-with-pulumi">{`default deployment solution - Pulumi`}</_Link>{`. If we wanted to override it, we’d simply register a plugin with the same `}<inlineCode parentName="p">{`cli-command-deployment`}</inlineCode>{` name again, and write our own commands in the `}<inlineCode parentName="p">{`create`}</inlineCode>{` function we’ve seen above.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`If you can access the plugin you’re overriding, you should also remove it. So, if we wanted to override the `}<inlineCode parentName="p">{`cli-command-deployment`}</inlineCode>{` plugin, we should also remove the `}<inlineCode parentName="p">{`require("@webiny/cli-plugin-deploy-pulumi")()`}</inlineCode>{` statement.`}</p>
</Alert>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;