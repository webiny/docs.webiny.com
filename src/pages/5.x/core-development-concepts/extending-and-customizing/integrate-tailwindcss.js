/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/core-development-concepts/extending-and-customizing/assets/integrate-tailwindcss/tailwind-css-demo-website.png'
import { Heading as _Heading } from '@/components/Heading'
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Tailwind CSS",
  "description": "Learn how to integrate Tailwind CSS in your Webiny project.",
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
  "title": "Setting Up Tailwind CSS",
  "slug": "setting-up-tailwind-css",
  "children": [{
    "title": "Install Tailwind CSS via Yarn",
    "slug": "install-tailwind-css-via-yarn",
    "children": []
  }, {
    "title": "Add Tailwind CSS to Webpack Configuration",
    "slug": "add-tailwind-css-to-webpack-configuration",
    "children": []
  }, {
    "title": "Create Your Tailwind CSS Configuration File",
    "slug": "create-your-tailwind-css-configuration-file",
    "children": []
  }, {
    "title": "Include Tailwind CSS Utilities",
    "slug": "include-tailwind-css-utilities",
    "children": []
  }, {
    "title": "Quick Test",
    "slug": "quick-test",
    "children": []
  }]
}, {
  "title": "FAQ",
  "slug": "faq",
  "children": [{
    "title": "Can I Include Tailwind CSS Directives?",
    "slug": "can-i-include-tailwind-css-directives",
    "children": []
  }]
}];
const makeShortcode = name => function MDXDefaultShortcode(props) {
      console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
      return <div {...props}/>
    };
const WhatYouWillLearn = makeShortcode("WhatYouWillLearn");
const Editor = makeShortcode("Editor");
const Alert = makeShortcode("Alert");
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



<WhatYouWillLearn mdxType="WhatYouWillLearn">
<ul>
<li parentName="ul">{`how to integrate Tailwind CSS in your Webiny project`}</li>
</ul>
</WhatYouWillLearn>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p><a parentName="p" {...{
        "href": "https://tailwindcss.com/"
      }}>{`Tailwind CSS`}</a>{` is a popular utility-first CSS framework.
It allows us to quickly build user interfaces with the help of a plethora of built-in CSS classes and without ever leaving our HTML.`}</p>
<p>{`In this guide, we show how you can integrate Tailwind CSS into your Webiny project. Note that we’ll do it within the `}<strong parentName="p">{`Website`}</strong>{` React application, located in the `}<inlineCode parentName="p">{`apps/website`}</inlineCode>{` folder. If needed, the same can be done within the `}<strong parentName="p">{`Admin`}</strong>{` React application, located in the `}<inlineCode parentName="p">{`apps/admin`}</inlineCode>{` folder.`}</p>
<_Heading level={2} id={"setting-up-tailwind-css"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Setting Up Tailwind CSS</_Heading>
<_Heading level={3} id={"install-tailwind-css-via-yarn"} nextElement={{
      "type": "paragraph"
    }}>Install Tailwind CSS via Yarn</_Heading>
<p>{`For starters, we install `}<inlineCode parentName="p">{`tailwindcss`}</inlineCode>{` package and its peer-dependencies, by running the following command from the project root:`}</p>
<Editor title="" lang="null" mdxType="Editor">
{`yarn add -D tailwindcss postcss autoprefixer`}
</Editor>
<_Heading level={3} id={"add-tailwind-css-to-webpack-configuration"} nextElement={{
      "type": "paragraph"
    }}>Add Tailwind CSS to Webpack Configuration</_Heading>
<p>{`With all of the packages installed, we proceed by adding Tailwind CSS to PostCSS plugins inside the Webpack config:`}</p>
<Editor title="apps/website/webiny.config.ts" lang="js" mdxType="Editor">
{`import { createWebsiteAppConfig } from "@webiny/serverless-cms-aws";
// @ts-ignore \`traverseLoaders\` has no type declarations.
import { traverseLoaders } from "@webiny/project-utils/traverseLoaders";
import tailwindcss from "tailwindcss";

export default createWebsiteAppConfig(({ config }) => {
  /**
   * Add a webpack config modifier.
   */
  config.webpack(config => {
    /**
     * Traverse all loaders, find \`postcss-loader\`, and overwrite plugins.
     */
    traverseLoaders(config.module?.rules, (loader: any) => {
      /**
       * \`loader\` can also be a string, so check for \`.loader\` property.
       */
      if (loader.loader && loader.loader.includes("postcss-loader")) {
        loader.options.postcssOptions.plugins = [
          ...loader.options.postcssOptions.plugins(),
          tailwindcss()
        ];
      }
    });

    return config;
  });
});`}
</Editor>
<p>{`Note how we’ve used the `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/next/packages/project-utils/traverseLoaders.js"
      }}><inlineCode parentName="a">{`traverseLoaders`}</inlineCode></a>{` helper function, imported from the `}<inlineCode parentName="p">{`@webiny/project-utils`}</inlineCode>{` package.
The function enables us to traverse all the loaders defined in `}<inlineCode parentName="p">{`modules.rules`}</inlineCode>{` property of the Webpack config, and, upon doing that, modify it. In our case, we add Tailwind CSS plugins to the PostCSS loader (`}<inlineCode parentName="p">{`postcss-loader`}</inlineCode>{`).`}</p>
<_Heading level={3} id={"create-your-tailwind-css-configuration-file"} nextElement={{
      "type": "paragraph"
    }}>Create Your Tailwind CSS Configuration File</_Heading>
<p>{`As a next step, we need to generate our `}<inlineCode parentName="p">{`tailwind.config.js`}</inlineCode>{` config file, by running the following command from the project root:`}</p>
<Editor title="" lang="null" mdxType="Editor">
{`npx tailwindcss init`}
</Editor>
<p>{`Once the config has been created, we need to update its `}<inlineCode parentName="p">{`content`}</inlineCode>{` array to include paths to files we want Tailwind to process:`}</p>
<Editor title="tailwind.config.js" lang="js" mdxType="Editor">
{`/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./apps/theme/**/*.{scss,tsx}", "apps/website/{public,src}/*.{html,tsx}"],
  theme: {
    extend: {}
  },
  plugins: []
};`}
</Editor>
<Alert type="info" mdxType="Alert">
<p>{`We have created the `}<inlineCode parentName="p">{`tailwind.config.js`}</inlineCode>{` file in the root of Webiny project as the fastest way to have a centralized config for all things Tailwind. If needed, individual config files can be created for Website and Admin apps, in their respective folders.`}</p>
</Alert>
<Alert type="info" mdxType="Alert">
<p>{`Learn more about configuring Tailwind in the `}<a parentName="p" {...{
          "href": "https://tailwindcss.com/docs/configuration"
        }}>{`configuration documentation`}</a>{`.`}</p>
</Alert>
<_Heading level={3} id={"include-tailwind-css-utilities"} nextElement={{
      "type": "paragraph"
    }}>Include Tailwind CSS Utilities</_Heading>
<p>{`Finally, we need to include Tailwind CSS utilities in our existing styles, which can be done via the `}<inlineCode parentName="p">{`apps/website/src/App.scss`}</inlineCode>{` file:`}</p>
<Editor title="apps/website/src/App.scss" lang="scss" mdxType="Editor">
{`(...)

@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";`}
</Editor>
<_Heading level={3} id={"quick-test"} nextElement={{
      "type": "paragraph"
    }}>Quick Test</_Heading>
<p>{`With all of the above steps completed, Tailwind CSS is now ready to be used. We can now start our `}<strong parentName="p">{`Website`}</strong>{` app locally, by running:`}</p>
<Editor title="" lang="null" mdxType="Editor">
{`yarn webiny watch website --env dev`}
</Editor>
<p>{`As a quick test, let’s create a demo component, which will be part of the default static page layout that’s included with every Webiny project.`}</p>
<Editor title="extensions/theme/src/layouts/pages/Static/TailwindHeader.tsx" lang="tsx" mdxType="Editor">
{`import React from "react";

export const TailwindHeader = () => {
  return (
    <div className="mt-12 -mb-12 bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Ready to dive in?</span>
          <span className="block text-purple-600">Start your free trial today.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
            >
              Get started
            </a>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-purple-600 bg-white hover:bg-indigo-50"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};`}
</Editor>
<p>{`And now let’s add it to the layout:`}</p>
<Editor title="extensions/theme/src/layouts/pages/Static.tsx" lang="diff-tsx" mdxType="Editor">
{`import React from "react";
(...)
+ import { TailwindHeader } from "./Static/TailwindHeader";
(...)

const Static = ({ children }: { children: React.ReactNode }) => {
    return (
        <Layout>
            <Global styles={globalStyles} />
            <Header />
+           <TailwindHeader />
            <main>{children}</main>
            <Footer />
        </Layout>
    );
};

export default Static;`}
</Editor>
<p>{`If we did everything correctly, we should be able to see the new section we just created, at the top of the page:`}</p>
<Image src={_Image1} alt={"Website demo using tailwindcss"} mdxType="Image" />
<Alert type="warning" title={"Please note!"} mdxType="Alert">
  <strong>
    Webiny provides no guarantees in regards to issues that may occur after enabling Tailwind CSS.
  </strong>
  <br /> <br />
  This guide should get you started with Tailwind CSS, but any issues with styles, or similar
  irregularities that might occur after following this guide, are not something we'll be providing
  support for. If you find better ways to use Tailwind CSS with Webiny, we'd be thrilled to see your
  contribution to our repository.
</Alert>
<_Heading level={2} id={"faq"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>FAQ</_Heading>
<_Heading level={3} id={"can-i-include-tailwind-css-directives"} nextElement={{
      "type": "paragraph"
    }}>Can I Include Tailwind CSS Directives?</_Heading>
<p>{`Yes, you can include the directives directly in `}<inlineCode parentName="p">{`apps/website/src/App.scss`}</inlineCode>{`.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;