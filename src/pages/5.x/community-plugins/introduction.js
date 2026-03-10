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
  "title": "Community Plugins",
  "description": "Learn how to create or contribute to community plugins.",
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
  "title": "Contribute a New Plugin",
  "slug": "contribute-a-new-plugin",
  "children": [{
    "title": "1. Clone the Plugins Repository",
    "slug": "1-clone-the-plugins-repository",
    "children": []
  }, {
    "title": "2. Create a React Component Package",
    "slug": "2-create-a-react-component-package",
    "children": []
  }, {
    "title": "3. Plugin Implementation",
    "slug": "3-plugin-implementation",
    "children": []
  }, {
    "title": "4. Raise the Pull Request",
    "slug": "4-raise-the-pull-request",
    "children": []
  }]
}, {
  "title": "Contribute to Existing Plugins",
  "slug": "contribute-to-existing-plugins",
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
<li parentName="ul">{`What are community plugins`}</li>
<li parentName="ul">{`How to create or contribute to community plugins`}</li>
</ul>
</Alert>
<Alert type="info" title="Can I use this?" mdxType="Alert">
<p>{`In order to follow this guide, you must use Webiny version `}<strong parentName="p">{`5.20.0`}</strong>{` or greater.`}</p>
</Alert>
<_Heading level={2} id={"introduction"} nextElement={{
      "type": "paragraph"
    }}>Introduction</_Heading>
<p>{`Community plugins are 3rd party supported plugins for Webiny. These plugins are created and managed by the Webiny community.
Here is the `}<a parentName="p" {...{
        "href": "https://github.com/webiny-contrib/plugins"
      }}>{`repository`}</a>{` for community managed plugins.`}</p>
<_Heading level={2} id={"contribute-a-new-plugin"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Contribute a New Plugin</_Heading>
<_Heading level={3} id={"1-clone-the-plugins-repository"} nextElement={{
      "type": "paragraph"
    }}>1. Clone the Plugins Repository</_Heading>
<p>{`All the community-supported 3rd party plugins are maintained at the `}<a parentName="p" {...{
        "href": "https://github.com/webiny-contrib/plugins"
      }}>{`plugins repository`}</a>{`.`}<br parentName="p"></br>{`
`}{`Clone the plugins repository in the Webiny project root.`}</p>
<p><inlineCode parentName="p">{`git clone https://github.com/webiny-contrib/plugins`}</inlineCode></p>
<_Heading level={3} id={"2-create-a-react-component-package"} nextElement={{
      "type": "paragraph"
    }}>2. Create a React Component Package</_Heading>
<p>{`We will use the React Component Package scaffold to create the plugin. From your project root, simply run the `}<inlineCode parentName="p">{`yarn webiny scaffold`}</inlineCode>{` command:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`yarn webiny scaffold`}
</Editor>
<p>{`Then, from the list of all available scaffolds, select `}<strong parentName="p">{`React Component Package`}</strong>{` and follow the on-screen instructions.`}</p>
<ul>
<li parentName="ul">
<p parentName="li">{`Enter the name of the component (in pascal-case)`}<br parentName="p"></br>{`
`}{`e.g. `}<inlineCode parentName="p">{`IFrame`}</inlineCode></p>
</li>
<li parentName="ul">
<p parentName="li">{`Enter the package location (packages/iframe)`}<br parentName="p"></br>{`
`}{`Based on your plugin type, i.e. whether you are building a plugin for Page Builder or Headless CMS, select the respective directory, e.g. if you are creating an iframe plugin for Page Builder, the location will look something like this
`}<inlineCode parentName="p">{`plugins/pageBuilder/iframe`}</inlineCode></p>
</li>
<li parentName="ul">
<p parentName="li">{`Enter the package name (@custom-components/iframe)`}<br parentName="p"></br>{`
`}{`Please follow this pattern for package name `}<inlineCode parentName="p">{`@webiny-contrib/name-of-your-plugin`}</inlineCode><br parentName="p"></br>{`
`}{`e.g. `}<inlineCode parentName="p">{`@webiny-contrib/iframe`}</inlineCode></p>
</li>
</ul>
<_Heading level={3} id={"3-plugin-implementation"} nextElement={{
      "type": "paragraph"
    }}>3. Plugin Implementation</_Heading>
<p>{`To implement your plugin, based on the plugin you want to create, please refer to the following tutorials:`}</p>
<ul>
<li parentName="ul"><_Link href="/docs/5.x/page-builder/extending/create-a-page-element">{`Create a New Page Element for Page Builder`}</_Link></li>
<li parentName="ul"><_Link href="/docs/5.x/headless-cms/extending/custom-field-type">{`Create a Custom Field Plugin for Headless CMS`}</_Link></li>
</ul>
<Alert type="info" title="Important" mdxType="Alert">
<p>{`Please place your code under the `}<inlineCode parentName="p">{`src`}</inlineCode>{` directory e.g. `}<inlineCode parentName="p">{`plugins/pageBuilder/iframe/src`}</inlineCode>{`.`}</p>
</Alert>
<_Heading level={3} id={"4-raise-the-pull-request"} nextElement={{
      "type": "paragraph"
    }}>4. Raise the Pull Request</_Heading>
<p>{`Once the plugin is ready, please create a pull request to `}<a parentName="p" {...{
        "href": "https://github.com/webiny-contrib/plugins"
      }}>{`https://github.com/webiny-contrib/plugins`}</a>{` repository.
Webiny team will take care of publishing the community plugins to `}<inlineCode parentName="p">{`npm`}</inlineCode>{` at `}<a parentName="p" {...{
        "href": "https://www.npmjs.com/package/@webiny-contrib/"
      }}>{`@webiny-contrib`}</a>{`.`}</p>
<_Heading level={2} id={"contribute-to-existing-plugins"} nextElement={{
      "type": "paragraph"
    }}>Contribute to Existing Plugins</_Heading>
<p>{`You can find all the community managed plugins in `}<a parentName="p" {...{
        "href": "https://github.com/webiny-contrib/plugins"
      }}>{`this repository`}</a>{`, and every plugin has a contribution guide.`}<br parentName="p"></br>{`
`}{`Here is a process to set up and contribute to the `}<a parentName="p" {...{
        "href": "https://github.com/webiny-contrib/plugins/tree/main/headlessCMS/secretText#how-to-contribute-to-this-plugin"
      }}>{`secretText Headless CMS plugin`}</a>{`.
Please follow the respective contribution guide for contributing to the existing plugins.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`If you need additional help or information on community plugins contribution, feel free to contact us over `}<a parentName="p" {...{
          "href": "https://www.webiny.com/slack"
        }}>{`Slack`}</a>{`.`}</p>
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