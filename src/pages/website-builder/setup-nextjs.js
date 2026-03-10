/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Image } from "@/components/Image";
import configureNextjsMenu from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/6.0.x/website-builder/assets/configure-nextjs-menu.png";
import configureNextjsDialog from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/6.0.x/website-builder/assets/configure-nextjs-dialog.png";
import apiKeyAutoCreated from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/6.0.x/website-builder/assets/api-key-auto-created.png";
import notFound from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/6.0.x/website-builder/assets/not-found.png";
import createPageDialog from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/6.0.x/website-builder/assets/create-page-dialog.png";
import heroEditor from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/6.0.x/website-builder/assets/hero-editor.png";
import heroRendered from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/6.0.x/website-builder/assets/hero-rendered.png";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.64f62e.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Setup Next.js Project",
  "description": "Set up the Website Builder Next.js starter kit and connect it to your Webiny project.",
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
  "title": "Prerequisites",
  "slug": "prerequisites",
  "children": []
}, {
  "title": "Installation",
  "slug": "installation",
  "children": [{
    "title": "Clone the Starter Kit",
    "slug": "clone-the-starter-kit",
    "children": []
  }, {
    "title": "Match Webiny Version",
    "slug": "match-webiny-version",
    "children": []
  }]
}, {
  "title": "Configuration",
  "slug": "configuration",
  "children": [{
    "title": "Get Credentials",
    "slug": "get-credentials",
    "children": [{
      "title": "API Key Is Auto-Created",
      "slug": "api-key-is-auto-created"
    }]
  }, {
    "title": "Set Environment Variables",
    "slug": "set-environment-variables",
    "children": []
  }]
}, {
  "title": "Start Development",
  "slug": "start-development",
  "children": []
}, {
  "title": "Create Your First Page",
  "slug": "create-your-first-page",
  "children": []
}, {
  "title": "Project Structure",
  "slug": "project-structure",
  "children": []
}, {
  "title": "Next Steps",
  "slug": "next-steps",
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
<li parentName="ul">{`How to install and configure the Next.js starter kit`}</li>
<li parentName="ul">{`How to connect your Next.js app to Webiny`}</li>
<li parentName="ul">{`How to create and render your first page`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`This guide walks through setting up the Website Builder Next.js starter kit and connecting it to your Webiny project. The starter kit provides pre-configured routing, SDK setup, and rendering so you can start building pages immediately.`}</p>
<p>{`For an explanation of how the Website Builder architecture works, see `}<_Link href="/docs/website-builder/how-it-works">{`How It Works`}</_Link>{`.`}</p>
<_Heading level={2} id={"prerequisites"} nextElement={{
      "type": "list",
      "ordered": false,
      "start": null,
      "spread": false
    }}>Prerequisites</_Heading>
<ul>
<li parentName="ul">{`Running Webiny project (Core and API applications deployed)`}</li>
<li parentName="ul">{`Node.js 20.9+ installed (Node.js 24+ still required if working with Webiny CLI)`}</li>
<li parentName="ul">{`Familiarity with Next.js App Router`}</li>
</ul>
<_Heading level={2} id={"installation"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Installation</_Heading>
<_Heading level={3} id={"clone-the-starter-kit"} nextElement={{
      "type": "paragraph"
    }}>Clone the Starter Kit</_Heading>
<p>{`The official Next.js starter kit provides pre-configured routing, SDK setup, and rendering:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`git clone https://github.com/webiny/website-builder-nextjs.git my-website
cd my-website
npm install`}
</Editor>
<_Heading level={3} id={"match-webiny-version"} nextElement={{
      "type": "paragraph"
    }}>Match Webiny Version</_Heading>
<p>{`Before installing dependencies, ensure the SDK versions in `}<inlineCode parentName="p">{`package.json`}</inlineCode>{` match your Webiny version. You can find your version by running `}<inlineCode parentName="p">{`webiny --version`}</inlineCode>{` in your Webiny project directory.`}</p>
<Editor title="package.json" lang="json" mdxType="Editor">
{`{
  "dependencies": {
    "@webiny/website-builder-nextjs": "~6.2.1",
    "@webiny/sdk": "~6.2.1"
  }
}`}
</Editor>
<p>{`The `}<inlineCode parentName="p">{`~`}</inlineCode>{` prefix allows safe patch updates.`}</p>
<_Heading level={2} id={"configuration"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Configuration</_Heading>
<_Heading level={3} id={"get-credentials"} nextElement={{
      "type": "paragraph"
    }}>Get Credentials</_Heading>
<p>{`To connect the starter kit to your Webiny project, you’ll need an API key, API host URL, and tenant ID. The easiest way to get these is through the `}<strong parentName="p">{`Configure Next.js`}</strong>{` shortcut in Webiny Admin — click `}<strong parentName="p">{`Support`}</strong>{` in the bottom-left corner and select `}<strong parentName="p">{`Configure Next.js`}</strong>{`.`}</p>
<Image src={configureNextjsMenu} alt="Webiny Admin sidebar with the Support menu open, showing the Configure Next.js option" mdxType="Image" />
<p>{`A dialog appears with the three environment variables already filled in and ready to copy:`}</p>
<Image src={configureNextjsDialog} alt="Configure Next.js dialog showing NEXT_PUBLIC_WEBSITE_BUILDER_API_KEY, API_HOST, and API_TENANT pre-filled" mdxType="Image" />
<p>{`Click the copy icon and paste the block directly into your `}<inlineCode parentName="p">{`.env`}</inlineCode>{` file in the next step.`}</p>
<Alert type="info" title="Non-Localhost Admin" mdxType="Alert">
<p>{`If your Admin is running on a non-localhost domain (i.e. a deployed CloudFront URL), the dialog will also include a `}<inlineCode parentName="p">{`NEXT_PUBLIC_WEBSITE_BUILDER_ADMIN_HOST`}</inlineCode>{` variable — make sure to copy that too.`}</p>
</Alert>
<_Heading level={4} id={"api-key-is-auto-created"} nextElement={{
      "type": "paragraph"
    }}>API Key Is Auto-Created</_Heading>
<p>{`Unlike the Headless CMS where you need to manually create an API key, the Website Builder API key is created automatically for the current tenant. You’ll find it under `}<strong parentName="p">{`Settings → Access Management → API Keys`}</strong>{` as “Website Builder”. It’s a read-only key, intentionally scoped that way since it’s meant to be used in external frontend apps like your Next.js project.`}</p>
<Image src={apiKeyAutoCreated} alt="API Keys page showing the auto-created Website Builder key" mdxType="Image" />
<_Heading level={3} id={"set-environment-variables"} nextElement={{
      "type": "paragraph"
    }}>Set Environment Variables</_Heading>
<p>{`Create a `}<inlineCode parentName="p">{`.env`}</inlineCode>{` file in your Next.js project root and paste the copied variables:`}</p>
<Editor title=".env" lang="dotenv" mdxType="Editor">
{`NEXT_PUBLIC_WEBSITE_BUILDER_API_KEY=your_api_key_here
NEXT_PUBLIC_WEBSITE_BUILDER_API_HOST=https://your-cloudfront-url.cloudfront.net
NEXT_PUBLIC_WEBSITE_BUILDER_API_TENANT=root`}
</Editor>
<p>{`All three variables use the `}<inlineCode parentName="p">{`NEXT_PUBLIC_`}</inlineCode>{` prefix because they’re accessed client-side during live editing.`}</p>
<_Heading level={2} id={"start-development"} nextElement={{
      "type": "paragraph"
    }}>Start Development</_Heading>
<p>{`Run the dev server:`}</p>
<Editor title="" lang="bash" mdxType="Editor">
{`npm run dev`}
</Editor>
<p>{`Open `}<a parentName="p" {...{
        "href": "http://localhost:3000"
      }}>{`http://localhost:3000`}</a>{`. You’ll see a “Page not found” message—this is expected since no pages exist yet.`}</p>
<Image src={notFound} alt="Browser showing the starter kit's 404 page with a Page not found message" mdxType="Image" />
<_Heading level={2} id={"create-your-first-page"} nextElement={{
      "type": "list",
      "ordered": true,
      "start": 1,
      "spread": false
    }}>Create Your First Page</_Heading>
<ol>
<li parentName="ol">{`Open Webiny Admin`}</li>
<li parentName="ol">{`Navigate to `}<strong parentName="li">{`Website Builder → Pages`}</strong></li>
<li parentName="ol">{`Click `}<strong parentName="li">{`New Page`}</strong></li>
<li parentName="ol">{`Set title to “Hello World” and path to `}<inlineCode parentName="li">{`/`}</inlineCode></li>
<li parentName="ol">{`Click `}<strong parentName="li">{`Create`}</strong></li>
</ol>
<Image src={createPageDialog} alt="Create a Page dialog with Title set to Hello World and Path set to /" mdxType="Image" />
<p>{`In the page editor:`}</p>
<ol>
<li parentName="ol">{`Find `}<strong parentName="li">{`Hero #1`}</strong>{` in the component palette (Custom group)`}</li>
<li parentName="ol">{`Drag it onto the canvas`}</li>
</ol>
<Image src={heroEditor} alt="Website Builder editor with the Hero #1 component on the canvas" mdxType="Image" />
<ol {...{
      "start": 3
    }}>
<li parentName="ol">{`Click `}<strong parentName="li">{`Publish`}</strong></li>
</ol>
<p>{`Refresh `}<a parentName="p" {...{
        "href": "http://localhost:3000"
      }}>{`http://localhost:3000`}</a>{`. The hero component now renders on your homepage.`}</p>
<Image src={heroRendered} alt="Browser showing the Hero #1 component rendered on the homepage" mdxType="Image" />
<_Heading level={2} id={"project-structure"} nextElement={{
      "type": "paragraph"
    }}>Project Structure</_Heading>
<p>{`The starter kit includes:`}</p>
<p><strong parentName="p"><inlineCode parentName="strong">{`src/app/[[...slug]]/page.tsx`}</inlineCode></strong></p>
<p>{`Catch-all route that renders all Website Builder pages.`}</p>
<p><strong parentName="p"><inlineCode parentName="strong">{`src/app/api/preview/`}</inlineCode></strong></p>
<p>{`Enables Next.js draft mode for unpublished page previews.`}</p>
<p><strong parentName="p"><inlineCode parentName="strong">{`src/contentSdk/`}</inlineCode></strong></p>
<p>{`SDK initialization and configuration.`}</p>
<p><strong parentName="p"><inlineCode parentName="strong">{`src/editorComponents/`}</inlineCode></strong></p>
<p>{`Component registration—add your custom components here.`}</p>
<p><strong parentName="p"><inlineCode parentName="strong">{`src/theme/`}</inlineCode></strong></p>
<p>{`Theme configuration (CSS variables, typography, colors).`}</p>
<_Heading level={2} id={"next-steps"} nextElement={{
      "type": "paragraph"
    }}>Next Steps</_Heading>
<p>{`With the starter kit running and your first page rendered, you’re ready to customize the theme and create custom components.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;