/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image5 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/6.0.x/website-builder/essentials/assets/nextjs-starter-kit/multiple_resources_picker.png'
import _Image4 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/6.0.x/website-builder/essentials/assets/nextjs-starter-kit/single_resource_picker.png'
import _Image3 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/6.0.x/website-builder/essentials/assets/nextjs-starter-kit/wb-settings.png'
import _Image2 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/6.0.x/website-builder/essentials/assets/nextjs-starter-kit/test-page.png'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/user-guides/6.0.x/website-builder/essentials/assets/nextjs-starter-kit/env-file.png'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.9991ed.json";

import _versions from "@/data/versions.ff7084.json";

const Layout = _Layout;
const pageData = {
  "title": "Next.js Stater Kit",
  "description": "Learn how to integrate our Next.js starter kit with Website Builder.",
  "type": "user-guides",
  "showPageHeader": true,
  "fullWidth": false,
  "version": "6.0.x"
};
const docsearch = {
  "type": "user-guides",
  "weight": 100,
  "versions": ["latest", "6.0.x"]
};
const navigation = _navigation;
const versions = _versions;
const tableOfContents = [{
  "title": "What's Included in the Starter Kit",
  "slug": "what-s-included-in-the-starter-kit",
  "children": []
}, {
  "title": "Step 1: Clone the Repository",
  "slug": "step-1-clone-the-repository",
  "children": []
}, {
  "title": "Step 2: Switch to the Appropriate Branch",
  "slug": "step-2-switch-to-the-appropriate-branch",
  "children": []
}, {
  "title": "Step 3: Create and Populate Your .Env File",
  "slug": "step-3-create-and-populate-your-env-file",
  "children": []
}, {
  "title": "Step 4: Establish the Connection",
  "slug": "step-4-establish-the-connection",
  "children": []
}, {
  "title": "Step 5: Validate Connection",
  "slug": "step-5-validate-connection",
  "children": []
}, {
  "title": "Optional Information and Actions for Developers and Advanced Users",
  "slug": "optional-information-and-actions-for-developers-and-advanced-users",
  "children": [{
    "title": "Webiny Admin App Host URL",
    "slug": "webiny-admin-app-host-url",
    "children": []
  }, {
    "title": "Content SDK",
    "slug": "content-sdk",
    "children": []
  }, {
    "title": "Custom Components",
    "slug": "custom-components",
    "children": []
  }, {
    "title": "Cross-Origin Configuration",
    "slug": "cross-origin-configuration",
    "children": []
  }, {
    "title": "Sample Routes",
    "slug": "sample-routes",
    "children": []
  }]
}, {
  "title": "Website Builder SDK",
  "slug": "website-builder-sdk",
  "children": []
}, {
  "title": "Ecommerce Integrations and Component Inputs",
  "slug": "ecommerce-integrations-and-component-inputs",
  "children": [{
    "title": "Single Resource Picker",
    "slug": "single-resource-picker",
    "children": []
  }, {
    "title": "Multiple Resources Picker",
    "slug": "multiple-resources-picker",
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








<Alert type="success" title="WHAT YOU'LL LEARN" mdxType="Alert">
<ul>
<li parentName="ul">{`how to link your Website Builder with our Next.js starter kit`}</li>
</ul>
</Alert>
<p>{`Webiny’s Website Builder incorporates a drag-and-drop visual editor allows you to use custom front end of your choice. We recommend Next.js. To get our users up and running as quickly as possible we put together a sample Next.js project.`}</p>
<p>{`In this tutorial, we will learn how to link your Webiny project to the `}<a parentName="p" {...{
        "href": "https://github.com/webiny/website-builder-nextjs"
      }}>{`Next.js starter kit`}</a>{` `}</p>
<p>{`We will do this in a few simple steps:`}</p>
<ul>
<li parentName="ul">{`Step 1: Fork the Next.js starter kit repository`}</li>
<li parentName="ul">{`Step 2: Switch to the appropriate branch`}</li>
<li parentName="ul">{`Step 3: Create and populate your .env file`}</li>
<li parentName="ul">{`Step 4: Establish connection`}</li>
<li parentName="ul">{`Step 5: Validate connection`}</li>
<li parentName="ul">{`Optional information and actions`}</li>
</ul>
<_Heading level={2} id={"what-s-included-in-the-starter-kit"} nextElement={{
      "type": "list",
      "ordered": false,
      "start": null,
      "spread": false
    }}>What&#39;s Included in the Starter Kit</_Heading>
<ul>
<li parentName="ul">{`TypeScript`}</li>
<li parentName="ul">{`Tailwind CSS`}</li>
<li parentName="ul">{`Sample ecommerce API`}</li>
<li parentName="ul">{`Sample components`}</li>
<li parentName="ul">{`Sample component groups
This project uses `}<a parentName="li" {...{
          "href": "https://nextjs.org/docs/app"
        }}>{`Next.js App Router`}</a>{`!`}</li>
</ul>
<_Heading level={2} id={"step-1-clone-the-repository"} nextElement={{
      "type": "paragraph"
    }}>Step 1: Clone the Repository</_Heading>
<p>{`Use your tools of choice and clone the `}<a parentName="p" {...{
        "href": "https://github.com/webiny/website-builder-nextjs.git"
      }}>{`Next.js Startet kit repository`}</a></p>
<p>{`   ✔️ The project structure should be already visible in your editor.`}</p>
<_Heading level={2} id={"step-2-switch-to-the-appropriate-branch"} nextElement={{
      "type": "jsx"
    }}>Step 2: Switch to the Appropriate Branch</_Heading>
<Alert type="warning" title="Version Match" mdxType="Alert">
Pick the right branch for your Webiny project! If your Webiny project runs on the latest version, check out the latest branch from this  Next.js repo, for example for "Webiny v6.0.0" use the "v6.0.0" branch. If this is not available use the closest matching version and update `@webiny/website-builder-nextjs` in `package.json` in the Next.js project.
</Alert>
<_Heading level={2} id={"step-3-create-and-populate-your-env-file"} nextElement={{
      "type": "list",
      "ordered": true,
      "start": 1,
      "spread": false
    }}>Step 3: Create and Populate Your .Env File</_Heading>
<ol>
<li parentName="ol">{`Create a new file in your project root called `}<inlineCode parentName="li">{`.env`}</inlineCode></li>
</ol>
<Image src={_Image1} alt={"Example .env file with dummy data"} mdxType="Image" />
<ol {...{
      "start": 2
    }}>
<li parentName="ol">{`Add the correct variables from your Webiny project. `}</li>
</ol>
<p>{`A user can find them in the Webiny Admin app, click on the `}<strong parentName="p">{`Support`}</strong>{` link in the bottom left corner, and then select `}<strong parentName="p">{`Configure Next.js`}</strong>{`. This is a configuration specifically generated for Webiny Next.js starter kit. Simply copy the values in your `}<inlineCode parentName="p">{`.env`}</inlineCode>{` file in the Next.js starter kit and SAVE.`}</p>
<p>{`   ✔️ The following environment variables are saved in the `}<inlineCode parentName="p">{`.env`}</inlineCode>{` file:`}</p>
<Editor title=".env" lang="diff-tsx" mdxType="Editor">
{`NEXT_PUBLIC_WEBSITE_BUILDER_API_KEY: {YOUR_API_KEY}
NEXT_PUBLIC_WEBSITE_BUILDER_API_HOST: {YOUR_API_HOST}
NEXT_PUBLIC_WEBSITE_BUILDER_API_TENANT: {YOUR_API_TENANT}
# Optional, check "Cross-Origin Configuration" section below.
NEXT_PUBLIC_WEBSITE_BUILDER_ADMIN_HOST: {YOUR_ADMIN_HOST} `}
</Editor>
<ol {...{
      "start": 3
    }}>
<li parentName="ol">{`Ensure that in the `}<inlineCode parentName="li">{`package.json`}</inlineCode>{` the `}<inlineCode parentName="li">{`"@webiny/website-builder-nextjs":`}</inlineCode>{` has the right Webiny version against it, e.g. “6.0.0”`}</li>
</ol>
<_Heading level={2} id={"step-4-establish-the-connection"} nextElement={{
      "type": "paragraph"
    }}>Step 4: Establish the Connection</_Heading>
<p>{`In the Next.js project root, run:`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`yarn && yarn dev`}
</Editor>
<p>{`   ✔️ This will build your dependencies.`}</p>
<p>{`   ✔️ It establishes the connection between your Next.js app and the Webiny project thanks to your env variables.`}</p>
<p>{`   ✔️ It starts the Next.js in development mode on `}<inlineCode parentName="p">{`localhost:3000`}</inlineCode>{`. It enables hot reloading, detailed error overlays, and source maps for fast iteration on your project.`}</p>
<_Heading level={2} id={"step-5-validate-connection"} nextElement={{
      "type": "paragraph"
    }}>Step 5: Validate Connection</_Heading>
<p>{`In the Website builder, try creating a new page. If the default components and header load properly, then the connection is established properly.`}</p>
<Image src={_Image2} alt={"New Website Builder Page"} mdxType="Image" />
<p>{`Note: If there are any issues, ensure that there are no warnings in the Next.js project after the start of the dev mode. For example, if you are running something else on `}<inlineCode parentName="p">{`http://localhost:3000`}</inlineCode>{` the app will automatically use a different port. If this is the case you need to align your Website Builder settings to the same port.`}</p>
<Image src={_Image3} alt={"Website Builder Settings"} mdxType="Image" />
<_Heading level={2} id={"optional-information-and-actions-for-developers-and-advanced-users"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Optional Information and Actions for Developers and Advanced Users</_Heading>
<_Heading level={3} id={"webiny-admin-app-host-url"} nextElement={{
      "type": "paragraph"
    }}>Webiny Admin App Host URL</_Heading>
<p>{`If you’re using your Next.js project in an editor that is hosted on a domain different from your Next.js domain, you’ll have to whitelist the editor’s domain. You can do that via the `}<inlineCode parentName="p">{`NEXT_PUBLIC_WEBSITE_BUILDER_ADMIN_HOST`}</inlineCode>{` env var (see “Cross-Origin Configuration” section below).`}</p>
<p>{`A simple way to retrieve your Admin app host URL is to log in to your Webiny Admin app, and copy the URL from your browser’s address bar (for example: `}<a parentName="p" {...{
        "href": "https://dxhy1vkapexg1.cloudfront.net"
      }}>{`https://dxhy1vkapexg1.cloudfront.net`}</a>{`) or using the `}<strong parentName="p">{`Support`}</strong>{` link described above.`}</p>
<_Heading level={3} id={"content-sdk"} nextElement={{
      "type": "paragraph"
    }}>Content SDK</_Heading>
<p>{`Webiny Content SDK is located in `}<inlineCode parentName="p">{`src/contentSdk`}</inlineCode>{` folder. The `}<inlineCode parentName="p">{`initializeContentSdk.ts`}</inlineCode>{` file contains the SDK initialization, and editor component group registration. Customize your component groups here.`}</p>
<_Heading level={3} id={"custom-components"} nextElement={{
      "type": "paragraph"
    }}>Custom Components</_Heading>
<p>{`Custom components are passed directly to the `}<inlineCode parentName="p">{`DocumentRenderer`}</inlineCode>{` (see the example in `}<inlineCode parentName="p">{`./src/app/[[...slug]]/page.tsx`}</inlineCode>{`).
To create custom components, see examples in `}<inlineCode parentName="p">{`./src/editorComponents/index.tsx`}</inlineCode>{`. We also have amore detailed article here covering Custom Components.`}</p>
<_Heading level={3} id={"cross-origin-configuration"} nextElement={{
      "type": "paragraph"
    }}>Cross-Origin Configuration</_Heading>
<p>{`If you’re using your Next.js project in an editor that is hosted on a domain different from your Next.js domain, you’ll have to whitelist the editor’s domain.`}</p>
<p>{`Open `}<inlineCode parentName="p">{`next.config.ts`}</inlineCode>{`, and add your domain to the `}<inlineCode parentName="p">{`Content-Security-Policy`}</inlineCode>{` header. For example:`}</p>
<Editor title="" lang="null" mdxType="Editor">
{`{
    key: "Content-Security-Policy",
    value: "frame-ancestors http://localhost:3001 https://d3fak6u4cx01ke.cloudfront.net"
}`}
</Editor>
<_Heading level={3} id={"sample-routes"} nextElement={{
      "type": "list",
      "ordered": false,
      "start": null,
      "spread": true
    }}>Sample Routes</_Heading>
<ul>
<li parentName="ul">
<p parentName="li"><inlineCode parentName="p">{`src/app/[[...slug]]`}</inlineCode>{` - this directory contains an example of simple static page generation, using pages from the Webiny Website Builder`}</p>
</li>
<li parentName="ul">
<p parentName="li"><inlineCode parentName="p">{`src/app/product/[slug]`}</inlineCode>{` - this directory contains an example of Product Details Page (PDP) generation, using a combination of a remote ecommerce API, and optional editorial content.`}</p>
</li>
</ul>
<_Heading level={2} id={"website-builder-sdk"} nextElement={{
      "type": "paragraph"
    }}>Website Builder SDK</_Heading>
<p>{`When you initially clone this repo, `}<inlineCode parentName="p">{`@webiny/website-builder-nextjs`}</inlineCode>{` package in the `}<inlineCode parentName="p">{`package.json`}</inlineCode>{` will be set to `}<inlineCode parentName="p">{`*`}</inlineCode>{`. We recommend you set the version to whatever is the latest version at the time of cloning. Also, keep in mind that it’s preferable to keep this version in sync with your actual Webiny Admin app version, so the Editor SDK and the Contend SDK are on the same version.`}</p>
<Alert type="info" title="Tip for developers" mdxType="Alert">
Inspect the sample code for more inline comments!
</Alert>
<_Heading level={2} id={"ecommerce-integrations-and-component-inputs"} nextElement={{
      "type": "jsx"
    }}>Ecommerce Integrations and Component Inputs</_Heading>
<Alert type="info" title="Ecommerce Only" mdxType="Alert">
This section is closely connected to, and depends on, ecommerce integrations in your Webiny Admin app. If you don't have any ecommerce integrations, you can skip this part.
</Alert>
<p>{`Webiny Website Builder provides a way to integrate with your ecommerce platform of choice. Once an integration is enabled in Webiny Admin app, you get access to specialized component input renderers, which allow you to browse and select your ecommerce resources (products, categories, etc.) to assign them to your components in the editor.`}</p>
<p>{`To use a specific renderer in your component inputs definition, you need to follow a naming convention.
Here’s an example, which creates a “text” input, which contains a list of string values, and uses a renderer called `}<inlineCode parentName="p">{`SampleEcommerce/Product/List`}</inlineCode>{`.`}</p>
<_Heading level={3} id={"single-resource-picker"} nextElement={{
      "type": "code",
      "lang": null,
      "meta": null
    }}>Single Resource Picker</_Heading>
<Editor title="" lang="null" mdxType="Editor">
{`createTextInput({
    name: "productId",
    renderer: "SampleEcommerce/Product",
    label: "Product"
})`}
</Editor>
<Image src={_Image4} alt={"Single Resource Picker"} mdxType="Image" />
<_Heading level={3} id={"multiple-resources-picker"} nextElement={{
      "type": "code",
      "lang": null,
      "meta": null
    }}>Multiple Resources Picker</_Heading>
<Editor title="" lang="null" mdxType="Editor">
{`createTextInput({
    name: "productIds",
    list: true,
    renderer: "SampleEcommerce/Product/List",
    label: "Products"
})`}
</Editor>
<Image src={_Image5} alt={"Multiple Resources Picker"} mdxType="Image" />
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;