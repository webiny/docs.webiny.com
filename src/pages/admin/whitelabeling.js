/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { ExtensionsGettingStartedV6 } from "@/components/ExtensionsGettingStartedV6";
import whitelabeling from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/6.0.x/admin/assets/whitelabeling.png";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.64f62e.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Whitelabeling",
  "description": "Learn how to replace the default Webiny logo, title, and theme colors with your own branding.",
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
  "title": "Creating the Extension",
  "slug": "creating-the-extension",
  "children": []
}, {
  "title": "Registering the Extension",
  "slug": "registering-the-extension",
  "children": []
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





<Alert type="success" title="WHAT YOU'LL LEARN" mdxType="Alert">
<ul>
<li parentName="ul">{`how to replace the default Webiny logo in the Admin application`}</li>
<li parentName="ul">{`how to customize the application title`}</li>
<li parentName="ul">{`how to adjust the Admin color theme`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`The Admin application ships with Webiny’s default logo, title, and color theme. You can replace all of these through an Admin extension using the `}<inlineCode parentName="p">{`AdminConfig`}</inlineCode>{` API — no changes to core Webiny code required.`}</p>
<ExtensionsGettingStartedV6 type={"admin"} fullExampleDownloadLink={"whitelabeling"} mdxType="ExtensionsGettingStartedV6" />
<_Heading level={2} id={"creating-the-extension"} nextElement={{
      "type": "paragraph"
    }}>Creating the Extension</_Heading>
<p>{`Create a new file `}<inlineCode parentName="p">{`extensions/AdminBranding/AdminBranding.tsx`}</inlineCode>{`:`}</p>
<Editor title="extensions/AdminBranding/AdminBranding.tsx" lang="tsx" mdxType="Editor">
{`import React from "react";
import { AdminConfig } from "webiny/admin/configs";
import squareLogo from "./logo.png";
import horizontalLogo from "./logo.png";

const { Title, Logo, Theme } = AdminConfig;

const AdminBranding = () => {
  return (
    <AdminConfig.Public>
      <Title value={"ACME Corp"} />
      <Logo
        squareLogo={<img src={squareLogo} alt={"ACME Corp"} />}
        horizontalLogo={<img src={horizontalLogo} alt={"ACME Corp"} />}
      />
      <Theme.Color palette={"primary"} color={"blue"} />
    </AdminConfig.Public>
  );
};

export default AdminBranding;`}
</Editor>
<p>{`Place your logo image at `}<inlineCode parentName="p">{`extensions/AdminBranding/logo.png`}</inlineCode>{`. The `}<inlineCode parentName="p">{`AdminConfig.Public`}</inlineCode>{` wrapper makes the configuration available throughout the Admin app.`}</p>
<p>{`The three customization points are:`}</p>
<ul>
<li parentName="ul"><strong parentName="li"><inlineCode parentName="strong">{`Title`}</inlineCode></strong>{` — sets the application title shown in the browser tab and header`}</li>
<li parentName="ul"><strong parentName="li"><inlineCode parentName="strong">{`Logo`}</inlineCode></strong>{` — accepts two logo variants: `}<inlineCode parentName="li">{`squareLogo`}</inlineCode>{` (used in the sidebar) and `}<inlineCode parentName="li">{`horizontalLogo`}</inlineCode>{` (used on the login page)`}</li>
<li parentName="ul"><strong parentName="li"><inlineCode parentName="strong">{`Theme.Color`}</inlineCode></strong>{` — overrides theme palette entries; `}<inlineCode parentName="li">{`palette`}</inlineCode>{` is the color role (e.g., `}<inlineCode parentName="li">{`"primary"`}</inlineCode>{`, `}<inlineCode parentName="li">{`"neutral"`}</inlineCode>{`) and `}<inlineCode parentName="li">{`color`}</inlineCode>{` is any valid CSS color value`}</li>
</ul>
<_Heading level={2} id={"registering-the-extension"} nextElement={{
      "type": "paragraph"
    }}>Registering the Extension</_Heading>
<p>{`Add the extension to `}<inlineCode parentName="p">{`webiny.config.tsx`}</inlineCode>{`:`}</p>
<Editor title="webiny.config.tsx" lang="tsx" mdxType="Editor">
{`import React from "react";
import { Admin, Infra } from "webiny/extensions";
import { Cognito } from "@webiny/cognito";

export const Extensions = () => {
  return (
    <>
      <Infra.Aws.DefaultRegion name={"us-east-1"} />
      <Cognito />
      <Admin.Extension src={"/extensions/AdminBranding/AdminBranding.tsx"} />
    </>
  );
};`}
</Editor>
<p>{`With the extension registered, run the following command to see your changes in action:`}</p>
<Editor title="" lang="null" mdxType="Editor">
{`yarn webiny watch admin`}
</Editor>
<p>{`If everything went correctly, you should see your custom branding applied to the Admin application:`}</p>
<Image src={whitelabeling} alt="Admin application with custom branding applied" mdxType="Image" />
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;