/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/core-development-concepts/extending-and-customizing/assets/create-a-package-in-webiny-project/yarn-init.png'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "How to Create a Package in a Webiny Project",
  "description": "Learn how to share code by creating a package in a Webiny project",
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
  "title": "What We'll Build",
  "slug": "what-we-ll-build",
  "children": []
}, {
  "title": "Prerequisites",
  "slug": "prerequisites",
  "children": [{
    "title": "A Webiny Project",
    "slug": "a-webiny-project",
    "children": []
  }]
}, {
  "title": "Create a Package",
  "slug": "create-a-package",
  "children": [{
    "title": "The Workspaces List",
    "slug": "the-workspaces-list",
    "children": []
  }, {
    "title": "Initialize the Package",
    "slug": "initialize-the-package",
    "children": []
  }, {
    "title": "Create the Package Content",
    "slug": "create-the-package-content",
    "children": []
  }, {
    "title": "Source Code",
    "slug": "source-code",
    "children": []
  }, {
    "title": "package.json",
    "slug": "package-json",
    "children": [{
      "title": "dependencies",
      "slug": "dependencies"
    }, {
      "title": "devDependencies",
      "slug": "dev-dependencies"
    }, {
      "title": "scripts",
      "slug": "scripts"
    }, {
      "title": "publishConfig",
      "slug": "publish-config"
    }]
  }, {
    "title": ".babelrc.js",
    "slug": "babelrc-js",
    "children": []
  }, {
    "title": "tsconfig.build.json",
    "slug": "tsconfig-build-json",
    "children": []
  }, {
    "title": "tsconfig.json",
    "slug": "tsconfig-json",
    "children": []
  }, {
    "title": "README.md (Optional)",
    "slug": "readme-md-optional",
    "children": []
  }]
}, {
  "title": "Preparing the Package for Usage",
  "slug": "preparing-the-package-for-usage",
  "children": [{
    "title": "Install the Package",
    "slug": "install-the-package",
    "children": []
  }, {
    "title": "Build the Package",
    "slug": "build-the-package",
    "children": []
  }, {
    "title": "Using the Package in Apps",
    "slug": "using-the-package-in-apps",
    "children": []
  }]
}, {
  "title": "Conclusion",
  "slug": "conclusion",
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




<Alert type="success" title="What You’ll Learn" mdxType="Alert">
<ul>
<li parentName="ul">{`how to create a new package in a Webiny project`}</li>
<li parentName="ul">{`how to organize files in a Webiny project`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`We often need to share code between multiple packages in our project.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`Every Webiny project consists of packages and project applications, you can learn more about them in our `}<_Link href="/docs/5.x/core-development-concepts/project-organization/project-applications-and-packages">{`key topics`}</_Link>{` section.`}</p>
</Alert>
<p>{`Every Webiny project is organized as a `}<_Link href="/docs/5.x/core-development-concepts/project-organization/monorepo-organization">{`monorepo`}</_Link>{`.
In this tutorial, you will learn how to organize and share code between multiple packages in a Webiny project.
Let’s get started.`}</p>
<_Heading level={2} id={"what-we-ll-build"} nextElement={{
      "type": "paragraph"
    }}>What We&#39;ll Build</_Heading>
<p>{`In this tutorial, we’ll be building a package that contains a simple React component and see how we can share it between multiple packages.
The same principles apply to Node.js packages you would use in your API.`}</p>
<p>{`Here is the file structure of the package we’re about to build:`}</p>
<Editor title="" lang="null" mdxType="Editor">
{`// Some files are omitted for the sake of brevity.

├── apps
│   ├── core
│   ├── api
│   ├── admin
│   ├── theme
│   └── website
├── package.json
├── packages
|   |   // This is our new package
│   └── gretting
│       ├── src
│       │   └── index.tsx
│       ├── .babelrc.js
│       ├── README.md
│       ├── package.json
│       ├── tsconfig.build.json
│       └── tsconfig.json
└── yarn.lock`}
</Editor>
<_Heading level={2} id={"prerequisites"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Prerequisites</_Heading>
<_Heading level={3} id={"a-webiny-project"} nextElement={{
      "type": "paragraph"
    }}>A Webiny Project</_Heading>
<p>{`This tutorial assumes you have already created a new Webiny project to work on.
We recommend reading our `}<_Link href="/docs/5.x/get-started/install-webiny">{`install Webiny`}</_Link>{` tutorial which shows you how to do it.`}</p>
<_Heading level={2} id={"create-a-package"} nextElement={{
      "type": "paragraph"
    }}>Create a Package</_Heading>
<p>{`In this step, we create a new React package.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`The Yarn workspaces aim to make working with monorepos easy.
Learn more about `}<a parentName="p" {...{
          "href": "https://yarnpkg.com/features/workspaces"
        }}>{`workspaces`}</a>{` here.`}</p>
</Alert>
<_Heading level={3} id={"the-workspaces-list"} nextElement={{
      "type": "paragraph"
    }}>The Workspaces List</_Heading>
<p>{`Before we continue, let’s quickly cover the workspaces list, located in the `}<inlineCode parentName="p">{`package.json`}</inlineCode>{` file in the project root.`}</p>
<p>{`The content of the package looks as shown below:`}</p>
<Editor title="" lang="json" mdxType="Editor">
{`(...)
"workspaces": {
    "packages": [
      "apps/admin",
      "apps/website",
      "apps/theme",
      "apps/api/graphql",
      "apps/api/headlessCMS"
    ]
},
(...)`}
</Editor>
<p>{`As you can see from the example above, you can define exact workspace paths, or provide a wildcard to mark each subfolder as a workspace.`}</p>
<p>{`In this tutorial, we use the latter.`}</p>
<_Heading level={3} id={"initialize-the-package"} nextElement={{
      "type": "paragraph"
    }}>Initialize the Package</_Heading>
<p>{`Enough with the theory, let’s dive in and initialize the package.`}</p>
<p>{`First, create a folder called `}<inlineCode parentName="p">{`packages`}</inlineCode>{` inside the root of your project where we add our custom package.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`Packages are just regular NPM packages, or in other words, folders with their own package.json`}</p>
</Alert>
<p>{`Let’s create a folder called `}<inlineCode parentName="p">{`greeting`}</inlineCode>{` inside `}<inlineCode parentName="p">{`packages`}</inlineCode>{`.
Now that we’ve created our new folder, let’s initialize a new package in it.
For that, we need to create a `}<inlineCode parentName="p">{`package.json`}</inlineCode>{` file inside that folder.`}</p>
<p>{`You can add it manually or use the following command inside the newly created folder:`}</p>
<Editor title="" lang="null" mdxType="Editor">
{`yarn init`}
</Editor>
<p>{`Once we execute the above command, we will be presented with a couple of questions as shown below:`}</p>
<Image src={_Image1} alt={"yarn init"} mdxType="Image" />
<Alert type="info" mdxType="Alert">
<p>{`You can also run `}<inlineCode parentName="p">{`yarn init -y`}</inlineCode>{` to use sensible defaults.`}</p>
</Alert>
<p>{`Depending on your input, the generated `}<inlineCode parentName="p">{`package.json`}</inlineCode>{` file’s content may look similar to the following:`}</p>
<Editor title="" lang="json" mdxType="Editor">
{`{
  "name": "@examples/greeting",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "license": "MIT"
}`}
</Editor>
<Alert type="info" mdxType="Alert">
<p>{`The `}<inlineCode parentName="p">{`name`}</inlineCode>{` property defined in the package’s `}<inlineCode parentName="p">{`package.json`}</inlineCode>{` will be used to later import it.`}</p>
</Alert>
<_Heading level={3} id={"create-the-package-content"} nextElement={{
      "type": "paragraph"
    }}>Create the Package Content</_Heading>
<p>{`Now that we’ve initialized a new package, let’s start by adding a couple of files.`}</p>
<Editor title="" lang="json" mdxType="Editor">
{`├── packages
|   |   // This is our new package.
│   └── greeting
│       │ // All the source code for the React component will be in this folder.
│       ├── src
│       │   └── index.tsx
│       ├── // A configuration file for babel. More on that later.
│       ├── .babelrc.js
│       ├── // A text file about the package.
│       ├── README.md
│       ├── // This file holds various metadata relevant to the package.
│       ├── package.json
│       ├── // A configuration file of the TypeScript compiler (tsc) used when package is being built.
│       ├── tsconfig.build.json
│       └── // A configuration file for Typescript compiler used by your IDE.
│       └── tsconfig.json
└── yarn.lock
`}
</Editor>
<_Heading level={3} id={"source-code"} nextElement={{
      "type": "paragraph"
    }}>Source Code</_Heading>
<p>{`First, we write the source code for our example React component.
For that, create a `}<inlineCode parentName="p">{`src`}</inlineCode>{` folder inside `}<inlineCode parentName="p">{`packages/greeting`}</inlineCode>{` and then add the `}<inlineCode parentName="p">{`index.tsx`}</inlineCode>{` file inside it with the following code:`}</p>
<Editor title="packages/greeting/src/index.tsx" lang="tsx" mdxType="Editor">
{`import React from "react";

const WelcomeMessage = () => {
  return <h1>Welcome to Webiny</h1>;
};

export default WelcomeMessage;`}
</Editor>
<Alert type="info" mdxType="Alert">
<p>{`Here we’re creating a very simple React component. But, you can write whatever logic you need for your project.`}</p>
</Alert>
<p>{`Now that we have our desired code in place. We can move to the next step which is adding the required configuration files.`}</p>
<p>{`To build our package, we need to add the following configuration files:`}</p>
<ul>
<li parentName="ul"><a parentName="li" {...{
          "href": "#packagejson"
        }}><inlineCode parentName="a">{`package.json`}</inlineCode></a></li>
<li parentName="ul"><a parentName="li" {...{
          "href": "#babelrcjs"
        }}><inlineCode parentName="a">{`.babelrc.js`}</inlineCode></a></li>
<li parentName="ul"><a parentName="li" {...{
          "href": "#tsconfigbuildjson"
        }}><inlineCode parentName="a">{`tsconfig.build.json`}</inlineCode></a></li>
<li parentName="ul"><a parentName="li" {...{
          "href": "#tsconfigjson"
        }}><inlineCode parentName="a">{`tsconfig.json`}</inlineCode></a></li>
</ul>
<p>{`Let’s create them one by one.`}</p>
<_Heading level={3} id={"package-json"} nextElement={{
      "type": "paragraph"
    }}><code>package.json</code></_Heading>
<p>{`Let’s start with the `}<inlineCode parentName="p">{`package.json`}</inlineCode>{` file.`}</p>
<p>{`First, we need to add the following `}<inlineCode parentName="p">{`devDependencies`}</inlineCode>{` and `}<inlineCode parentName="p">{`dependencies`}</inlineCode>{` as shown below:`}</p>
<Editor title="packages/greeting/package.json" lang="json" mdxType="Editor">
{`{
  (...)
  "dependencies": {
    "react": "^16.14.0",
    "react-dom": "^16.14.0"
  },
   "devDependencies": {
    "@babel/cli": "^7.5.5",
    "@babel/core": "^7.5.5",
    "@babel/preset-env": "^7.5.5",
    "@babel/preset-react": "^7.0.0",
    "@babel/preset-typescript": "^7.8.3",
    "@svgr/webpack": "^4.3.2",
    "babel-plugin-named-asset-import": "^1.0.0-next.3e165448",
    "rimraf": "^3.0.2",
    "typescript": "^4.1.3"
  },
  (...)
}`}
</Editor>
<Alert type="info" mdxType="Alert">
<p>{`You can find out the full example code used in this tutorial in our `}<a parentName="p" {...{
          "href": "https://github.com/webiny/webiny-examples/tree/master/create-package-in-monorepo"
        }}>{`repo`}</a>{`.`}</p>
</Alert>
<p>{`Let’s quickly discuss all of them:`}</p>
<_Heading level={4} id={"dependencies"} nextElement={{
      "type": "paragraph"
    }}><code>dependencies</code></_Heading>
<p>{`This field defines other packages (dependencies) we will use in the code.`}</p>
<p>{`In our case we need the following:`}</p>
<ul>
<li parentName="ul"><a parentName="li" {...{
          "href": "https://www.npmjs.com/package/react"
        }}><inlineCode parentName="a">{`react`}</inlineCode></a>{`: React is a JavaScript library for creating user interfaces.`}</li>
<li parentName="ul"><a parentName="li" {...{
          "href": "https://www.npmjs.com/package/react-dom"
        }}><inlineCode parentName="a">{`react-dom`}</inlineCode></a>{`: Serves as the entry point to the DOM and server renderers for React.`}</li>
</ul>
<_Heading level={4} id={"dev-dependencies"} nextElement={{
      "type": "paragraph"
    }}><code>devDependencies</code></_Heading>
<p>{`This value is used to specify the packages that are only needed for local development and testing.`}</p>
<p>{`In our case we need the following:`}</p>
<ul>
<li parentName="ul"><a parentName="li" {...{
          "href": "https://www.npmjs.com/package/@babel/cli"
        }}><inlineCode parentName="a">{`@babel/cli`}</inlineCode></a>{`: Babel command line.`}</li>
<li parentName="ul"><a parentName="li" {...{
          "href": "https://www.npmjs.com/package/@babel/core"
        }}><inlineCode parentName="a">{`@babel/core`}</inlineCode></a>{`: Babel compiler core.`}</li>
<li parentName="ul"><a parentName="li" {...{
          "href": "https://www.npmjs.com/package/@babel/preset-env"
        }}><inlineCode parentName="a">{`@babel/preset-env`}</inlineCode></a>{`: Babel preset for each environment.`}</li>
<li parentName="ul"><a parentName="li" {...{
          "href": "https://www.npmjs.com/package/@babel/preset-react"
        }}><inlineCode parentName="a">{`@babel/preset-react`}</inlineCode></a>{`: Babel preset for all React plugins.`}</li>
<li parentName="ul"><a parentName="li" {...{
          "href": "https://www.npmjs.com/package/@babel/preset-typescript"
        }}><inlineCode parentName="a">{`@babel/preset-typescript`}</inlineCode></a>{`: Babel preset for TypeScript.`}</li>
<li parentName="ul"><a parentName="li" {...{
          "href": "https://www.npmjs.com/package/@svgr/webpack"
        }}><inlineCode parentName="a">{`@svgr/webpack`}</inlineCode></a>{`: `}<a parentName="li" {...{
          "href": "https://webpack.js.org/"
        }}>{`Webpack`}</a>{` loader for SVGR.`}</li>
<li parentName="ul"><a parentName="li" {...{
          "href": "https://www.npmjs.com/package/babel-plugin-named-asset-import"
        }}><inlineCode parentName="a">{`babel-plugin-named-asset-import`}</inlineCode></a>{`: Babel plugin for import named exports from non JS/CSS assets.`}</li>
<li parentName="ul"><a parentName="li" {...{
          "href": "https://www.npmjs.com/package/rimraf"
        }}><inlineCode parentName="a">{`rimraf`}</inlineCode></a>{`: A deep deletion module for Node.js (like `}<inlineCode parentName="li">{`rm -rf`}</inlineCode>{`).`}</li>
<li parentName="ul"><a parentName="li" {...{
          "href": "https://www.npmjs.com/package/typescript"
        }}><inlineCode parentName="a">{`typescript`}</inlineCode></a>{`: `}<a parentName="li" {...{
          "href": "https://www.typescriptlang.org/"
        }}>{`TypeScript`}</a>{` is a language for application-scale JavaScript.`}</li>
</ul>
<p>{`After that, we add the following scripts inside the `}<inlineCode parentName="p">{`package.json`}</inlineCode>{` file:`}</p>
<_Heading level={4} id={"scripts"} nextElement={{
      "type": "paragraph"
    }}><code>scripts</code></_Heading>
<p>{`The `}<a parentName="p" {...{
        "href": "https://docs.npmjs.com/cli/v7/using-npm/scripts"
      }}>{`“scripts”`}</a>{` property of your package.json file supports a number of built-in scripts
and their preset life cycle events as well as arbitrary scripts.`}</p>
<p>{`In our case we need the following:`}</p>
<ul>
<li parentName="ul"><a parentName="li" {...{
          "href": "https://github.com/webiny/webiny-examples/blob/master/create-package-in-monorepo/packages/iFrameElement/package.json#L37"
        }}><inlineCode parentName="a">{`build`}</inlineCode></a>{`:
it removes the content of the `}<inlineCode parentName="li">{`dist`}</inlineCode>{` folder and compiles the source code via `}<inlineCode parentName="li">{`babel`}</inlineCode>{` and runs the `}<inlineCode parentName="li">{`postbuild`}</inlineCode>{` command.`}</li>
<li parentName="ul"><a parentName="li" {...{
          "href": "https://github.com/webiny/webiny-examples/blob/master/create-package-in-monorepo/packages/iFrameElement/package.json#L38"
        }}><inlineCode parentName="a">{`watch`}</inlineCode></a>{`:
it runs the `}<inlineCode parentName="li">{`babel`}</inlineCode>{` compiler in `}<inlineCode parentName="li">{`watch`}</inlineCode>{` mode, which means the latest changes will compile automatically as source file content changes.`}</li>
<li parentName="ul"><a parentName="li" {...{
          "href": "https://github.com/webiny/webiny-examples/blob/master/create-package-in-monorepo/packages/iFrameElement/package.json#L39"
        }}><inlineCode parentName="a">{`postbuild`}</inlineCode></a>{`:
as the name suggests, it runs after the completion of the `}<inlineCode parentName="li">{`build`}</inlineCode>{` command.
We use it to copy the meta files like `}<inlineCode parentName="li">{`package.json`}</inlineCode>{`, `}<inlineCode parentName="li">{`README.md`}</inlineCode>{` into the `}<inlineCode parentName="li">{`dist`}</inlineCode>{` folder and compile typescript code.`}</li>
</ul>
<p>{`After adding `}<inlineCode parentName="p">{`script`}</inlineCode>{` the `}<inlineCode parentName="p">{`package.json`}</inlineCode>{` file look as shown below:`}</p>
<Editor title="packages/greeting/package.json" lang="json" mdxType="Editor">
{`{
  (...)
  "dependencies": {
    "react": "^16.14.0",
    "react-dom": "^16.14.0"
  },
   "devDependencies": {
    "@babel/cli": "^7.5.5",
    "@babel/core": "^7.5.5",
    "@babel/preset-env": "^7.5.5",
    "@babel/preset-react": "^7.0.0",
    "@babel/preset-typescript": "^7.8.3",
    "@svgr/webpack": "^4.3.2",
    "babel-plugin-named-asset-import": "^1.0.0-next.3e165448",
    "rimraf": "^3.0.2",
    "typescript": "^4.1.3"
  },
   "scripts": {
    "build": "rimraf ./dist '*.tsbuildinfo' && babel src -d dist --source-maps --copy-files --extensions \\".ts,.tsx\\" && yarn postbuild",
    "watch": "babel src -d dist --source-maps --copy-files --extensions \\".ts,.tsx\\" --watch",
    "postbuild": "cp package.json README.md dist/ && tsc -p tsconfig.build.json"
  }
  (...)
}`}
</Editor>
<_Heading level={4} id={"publish-config"} nextElement={{
      "type": "paragraph"
    }}><code>publishConfig</code></_Heading>
<p>{`And finally, we add `}<inlineCode parentName="p">{`publishConfig`}</inlineCode>{` which is a set of configuration values, usually used for package publishing purposes.
But, in our case, this is what enables us to import our newly created package from other packages in different project applications.
Webiny uses this to link your package in node_modules with the appropriate target folder, which will be `}<inlineCode parentName="p">{`dist`}</inlineCode>{` once the package is built.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`The proper linking of packages is established via the built-in `}<inlineCode parentName="p">{`link-workspaces`}</inlineCode>{` command, defined in your root `}<inlineCode parentName="p">{`package.json`}</inlineCode>{` file.`}</p>
{/* Learn more about linking workspaces in [xyz](#)... */}
</Alert>
<p>{`After adding `}<inlineCode parentName="p">{`publishConfig`}</inlineCode>{` the package.json file look as shown below:`}</p>
<Editor title="packages/greeting/package.json" lang="json" mdxType="Editor">
{`{
 (...)
 "dependencies": {
   "react": "^16.14.0",
   "react-dom": "^16.14.0"
 },
  "devDependencies": {
   "@babel/cli": "^7.5.5",
   "@babel/core": "^7.5.5",
   "@babel/preset-env": "^7.5.5",
   "@babel/preset-react": "^7.0.0",
   "@babel/preset-typescript": "^7.8.3",
   "@svgr/webpack": "^4.3.2",
   "babel-plugin-named-asset-import": "^1.0.0-next.3e165448",
   "rimraf": "^3.0.2",
   "typescript": "^4.1.3"
 },
   "publishConfig": {
   "access": "public",
   "directory": "dist"
 },
  "scripts": {
   "build": "rimraf ./dist '*.tsbuildinfo' && babel src -d dist --source-maps --copy-files --extensions \\".ts,.tsx\\" && yarn postbuild",
   "watch": "babel src -d dist --source-maps --copy-files --extensions \\".ts,.tsx\\" --watch",
   "postbuild": "cp package.json LICENSE README.md dist/ && tsc -p tsconfig.build.json"
 }
}`}
</Editor>
<Alert type="info" mdxType="Alert">
<p>{`Learn more about `}<a parentName="p" {...{
          "href": "https://docs.npmjs.com/cli/v7/configuring-npm/package-json#publishconfig"
        }}><inlineCode parentName="a">{`publishConfig`}</inlineCode></a>{`.`}</p>
</Alert>
<_Heading level={3} id={"babelrc-js"} nextElement={{
      "type": "paragraph"
    }}><code>.babelrc.js</code></_Heading>
<p>{`Now let’s take a look at the `}<inlineCode parentName="p">{`.babelrc.js`}</inlineCode>{` file which is a configuration file for a tool called `}<a parentName="p" {...{
        "href": "https://babeljs.io/"
      }}>{`babel`}</a>{`.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`Babel is a JavaScript compiler. We need it because:`}</p>
<ul>
<li parentName="ul">{`we’re writing the `}<inlineCode parentName="li">{`React`}</inlineCode>{` code in `}<inlineCode parentName="li">{`JSX`}</inlineCode>{` syntax which needs to be converted to `}<inlineCode parentName="li">{`JS`}</inlineCode></li>
<li parentName="ul">{`we’re also using the latest JavaScript features and syntax which are not supported in all browsers, and therefore, need to be converted`}</li>
</ul>
</Alert>
<p>{`In the `}<inlineCode parentName="p">{`.babelrc.js`}</inlineCode>{` we just export the `}<inlineCode parentName="p">{`.babel.react`}</inlineCode>{` configuration file which is defined in the project root.`}</p>
<Editor title="packages/greeting/.babelrc.js" lang="js" mdxType="Editor">
{`module.exports = require("../../.babel.react")({ path: __dirname });`}
</Editor>
<Alert type="info" mdxType="Alert">
<p>{`Every Webiny project comes with a `}<inlineCode parentName="p">{`.babel.react.js`}</inlineCode>{` and `}<inlineCode parentName="p">{`.babel.node.js`}</inlineCode>{`.
You don’t need to know all the configurations.
But, if you’re interested feel free to check the full configuration `}<a parentName="p" {...{
          "href": "https://github.com/webiny/webiny-examples/blob/master/create-package-in-monorepo/.babel.react.js"
        }}>{`file`}</a>{`.`}</p>
</Alert>
<_Heading level={3} id={"tsconfig-build-json"} nextElement={{
      "type": "paragraph"
    }}><code>tsconfig.build.json</code></_Heading>
<p>{`Every Webiny project prioritizes `}<a parentName="p" {...{
        "href": "https://www.typescriptlang.org/"
      }}>{`TypeScript`}</a>{`.`}</p>
<p>{`And it needs to be compiled and the `}<inlineCode parentName="p">{`tsconfig.build.json`}</inlineCode>{` file corresponds to the configuration file of the TypeScript compiler (tsc) used when package is being built.`}</p>
<Alert type="info" mdxType="Alert">
<p>{`Webiny uses TypeScript (v4). Only in a few cases, like for example configuration files, you will encounter pure JavaScript.`}</p>
</Alert>
<p>{`Let’s take a look at the content of this file:`}</p>
<Editor title="packages/greeting/tsconfig.build.json" lang="json" mdxType="Editor">
{`{
  "extends": "../../tsconfig.build.json",
  "include": ["./src"],
  "exclude": ["node_modules"],
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist",
    "declarationDir": "./dist"
  }
}`}
</Editor>
<Alert type="info" mdxType="Alert">
<p>{`The `}<inlineCode parentName="p">{`tsconfig.build.json`}</inlineCode>{` file specifies the root files and the compiler options required to compile the project.
Please check out the official docs to `}<a parentName="p" {...{
          "href": "https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#:~:text=a%20tsconfig.json-,Overview,required%20to%20compile%20the%20project."
        }}>{`learn more`}</a>{` about it.`}</p>
</Alert>
<_Heading level={3} id={"tsconfig-json"} nextElement={{
      "type": "paragraph"
    }}><code>tsconfig.json</code></_Heading>
<p>{`This is a configuration file for Typescript compiler used by your IDE.`}</p>
<p>{`Let’s take a look at the content of this file:`}</p>
<Editor title="packages/greeting/tsconfig.json" lang="json" mdxType="Editor">
{`{
  "extends": "../../tsconfig"
}`}
</Editor>
<p>{`Like the previous file, we’re just using the configuration defined in the
`}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-examples/blob/master/create-package-in-monorepo/tsconfig.json"
      }}>{`project root`}</a>{` here.`}</p>
<_Heading level={3} id={"readme-md-optional"} nextElement={{
      "type": "paragraph"
    }}><code>README.md</code>(Optional)</_Heading>
<p>{`A README is a text file that introduces and explains a project.
It contains information that is commonly required to understand what the project is about.`}</p>
<_Heading level={2} id={"preparing-the-package-for-usage"} nextElement={{
      "type": "paragraph"
    }}>Preparing the Package for Usage</_Heading>
<p>{`Now that we’ve created our package and added the required configuration files, it is time to use it.
To do that we need to take the following steps:`}</p>
<ul>
<li parentName="ul"><inlineCode parentName="li">{`install`}</inlineCode>{` the package`}</li>
<li parentName="ul"><inlineCode parentName="li">{`build`}</inlineCode>{` the package`}</li>
</ul>
<_Heading level={3} id={"install-the-package"} nextElement={{
      "type": "paragraph"
    }}>Install the Package</_Heading>
<p>{`Now that we have all the files in place, it is time to install and link the package.
Run the following command from the root of your project:`}</p>
<Editor title="" lang="null" mdxType="Editor">
{`yarn install`}
</Editor>
<p>{`Running this command will do two things:`}</p>
<ol>
<li parentName="ol">{`install the package dependencies.`}</li>
<li parentName="ol">{`link the package.`}</li>
</ol>
<Alert type="info" mdxType="Alert">
<p>{`The `}<inlineCode parentName="p">{`link`}</inlineCode>{` step is performed by the `}<a parentName="p" {...{
          "href": "https://github.com/webiny/webiny-examples/blob/master/create-package-in-monorepo/scripts/linkWorkspaces.js"
        }}><inlineCode parentName="a">{`link-workspaces`}</inlineCode></a>{` script
which runs via the `}<a parentName="p" {...{
          "href": "https://github.com/webiny/webiny-examples/blob/master/create-package-in-monorepo/package.json#L64"
        }}><inlineCode parentName="a">{`postinstall`}</inlineCode></a>{` hook.`}</p>
</Alert>
<_Heading level={3} id={"build-the-package"} nextElement={{
      "type": "paragraph"
    }}>Build the Package</_Heading>
<p>{`To use the package we need to `}<inlineCode parentName="p">{`build`}</inlineCode>{` it first.`}</p>
<p><strong parentName="p">{`“And how do we do that?”`}</strong>{` you may ask, remember we added the `}<inlineCode parentName="p">{`build`}</inlineCode>{` command under the `}<inlineCode parentName="p">{`scripts`}</inlineCode>{` key inside the `}<inlineCode parentName="p">{`package.json`}</inlineCode>{` file of the package.
Now it’s time we use it.`}</p>
<p>{`We can simply `}<inlineCode parentName="p">{`cd`}</inlineCode>{` into the package folder which is `}<inlineCode parentName="p">{`packages/greeting`}</inlineCode>{` and run:`}</p>
<Editor title="" lang="null" mdxType="Editor">
{`yarn build`}
</Editor>
<p>{`And it will work just fine. But, as your project grows and you add more packages, it becomes a chore to run the same command across multiple packages.`}</p>
<p>{`Webiny CLI provides the `}<inlineCode parentName="p">{`workspaces run`}</inlineCode>{` (or `}<inlineCode parentName="p">{`ws run`}</inlineCode>{` for short) command that enables you to run a single command across multiple workspaces at once.
The common use case where this might be needed is local development, where you want to watch for code changes on multiple packages, and rebuild them accordingly.`}</p>
<p>{`For example, to establish a watch session across multiple packages, located in a specific folder, you can run the following command:`}</p>
<Editor title="" lang="null" mdxType="Editor">
{`yarn webiny ws run watch --folder packages`}
</Editor>
<p>{`On the other hand, if you wanted to build all of the packages, again, located in a specific folder, you can run:`}</p>
<Editor title="" lang="null" mdxType="Editor">
{`yarn webiny ws run build --folder packages`}
</Editor>
<Alert type="info" mdxType="Alert">
<p>{`The `}<inlineCode parentName="p">{`ws run`}</inlineCode>{` command executes the command in question for every workspace present in the folder.
In our case, `}<inlineCode parentName="p">{`packages/greeting`}</inlineCode>{`.`}</p>
</Alert>
<_Heading level={3} id={"using-the-package-in-apps"} nextElement={{
      "type": "paragraph"
    }}>Using the Package in Apps</_Heading>
<p>{`After completing all these steps you can now simply import and use it as a regular npm package.
You can import and use this newly created package in any application or any other package inside the same Webiny project.`}</p>
<Editor title="" lang="ts" mdxType="Editor">
{`import WelcomeMessage from "@examples/greeting";`}
</Editor>
<_Heading level={2} id={"conclusion"} nextElement={{
      "type": "paragraph"
    }}>Conclusion</_Heading>
<p>{`Congratulations!`}</p>
<p>{`You’ve successfully created a new package in a Webiny project.
Monorepo organization makes it possible to structure different logical pieces of your project as multiple packages.`}</p>
<p>{`You can also check out a similar code example in our `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-examples/tree/master/create-package-in-monorepo"
      }}>{`repo`}</a>{`.
If you have further questions, feel free to `}<a parentName="p" {...{
        "href": "https://www.webiny.com/slack"
      }}>{`ask`}</a>{` for additional help.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;