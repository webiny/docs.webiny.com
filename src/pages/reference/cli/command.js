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
  "title": "Command",
  "description": "CLI command factory abstraction",
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
  "title": "CliCommandFactory",
  "slug": "cli-command-factory",
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
<ul>
<li parentName="ul">{`How to use the builder and factory APIs?`}</li>
<li parentName="ul">{`How to import and use each exported item?`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`This page documents everything exported from `}<inlineCode parentName="p">{`webiny/cli/command`}</inlineCode>{`. Import any of the items below directly from this path in your Webiny extensions.`}</p>
<SymbolList symbols={[{
      name: "CliCommandFactory",
      anchor: "cli-command-factory"
    }]} mdxType="SymbolList" />
<_Heading level={2} id={"cli-command-factory"} nextElement={{
      "type": "paragraph"
    }}><code>CliCommandFactory</code></_Heading>
<p><strong parentName="p">{`Abstraction`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/cli/command`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { CliCommandFactory } from "webiny/cli/command";`}
</Editor>
<p><strong parentName="p">{`Types:`}</strong></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`namespace CliCommandFactory {
  type Interface = ICliCommand<TCommandParams>;
  type ParamDefinition = ICliCommandParamDefinition<TCommandParams>;
  type OptionDefinition = ICliCommandOptionDefinition<TCommandParams>;
  type CommandDefinition = ICliCommandDefinition<TCommandParams>;
}`}
</Editor>
<p><strong parentName="p">{`Usage:`}</strong></p>
<Editor title="extensions/MyImpl.ts" lang="typescript" mdxType="Editor">
{`import { CliCommandFactory } from "webiny/cli/command";

class MyImpl implements MyUseCase.Interface {
  public constructor(private cliCommandFactory: CliCommandFactory.Interface) {}

  public async execute(/* ... */): Promise<void> {}
}

export default MyUseCase.createImplementation({
  implementation: MyImpl,
  dependencies: [CliCommandFactory]
});`}
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