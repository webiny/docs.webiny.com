/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/form-builder/theming/assets/webiny-theme-form-layout.gif'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Introduction",
  "description": "In this article, you'll learn about the Form Builder theme.",
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
  "title": "Registering a Theme",
  "slug": "registering-a-theme",
  "children": []
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




<Alert type="success" title="What You’ll Learn" mdxType="Alert">
<ul>
<li parentName="ul">{`what is a Form Builder theme`}</li>
<li parentName="ul">{`how a theme is used in Form Builder`}</li>
<li parentName="ul">{`how to register a Form Builder theme`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`In this section, you learn all about the Form Builder theme and its basic concepts. You get all the knowledge needed to create your own theme.`}</p>
<p>{`When you’re creating forms in the Form Builder, you have the option to preview forms right there inside the same interface.`}</p>
<p>{`How the form looks visually is controlled via the form layout that is selected for that form. This is defined inside the form settings as shown below:`}</p>
<Image src={_Image1} alt={"Webiny form builder preview"} mdxType="Image" />
<p>{`Similar to how the layouts for pages work, the form layouts control how that form renders. This includes all elements as inputs, dropdown, submit button, and the success message.`}</p>
<p>{`The default theme includes a single form layout which should fit most use-cases. If you wish to do any visual tweaks, it’s best to just modify the stylesheets.`}</p>
<p>{`For more advance case you might want to create a custom form layout. The best approach would be to copy the existing one and update the things you need to adapt. There are comments inside the default form layout that helps you find your way around.`}</p>
<_Heading level={2} id={"registering-a-theme"} nextElement={{
      "type": "paragraph"
    }}>Registering a Theme</_Heading>
<p>{`The default Form Builder theme is located at `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/next/apps/theme/formBuilder/index.ts"
      }}><inlineCode parentName="a">{`apps/theme/formBuilder/index.ts`}</inlineCode></a>{` with the following content:`}</p>
<Editor title="apps/theme/formBuilder/index.ts" lang="ts" mdxType="Editor">
{`import DefaultFormLayout from "./layouts/DefaultFormLayout";

export default [
  {
    name: "form-layout-default",
    type: "form-layout",
    layout: {
      name: "default",
      title: "Default layout",
      component: DefaultFormLayout
    }
  }
];`}
</Editor>
<p>{`The default theme comes with a single form layout. To learn more about form layouts proceed to the next page.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;