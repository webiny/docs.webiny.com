/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/admin-area/basics/assets/framework/AdminAppFramework.png'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "The Framework",
  "description": "Learn what makes the Admin app tick, and how plugins work.",
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
  "title": "The Plugins Component",
  "slug": "the-plugins-component",
  "children": []
}, {
  "title": "Naming Conventions",
  "slug": "naming-conventions",
  "children": []
}, {
  "title": "Conclusion",
  "slug": "conclusion",
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




<Alert type="info" title="Can I Use This?" mdxType="Alert">
<p>{`In order to follow this guide, you must use Webiny version `}<strong parentName="p">{`5.21.0`}</strong>{` or greater.`}</p>
</Alert>
<Alert type="success" title="What you'll learn" mdxType="Alert">
<ul>
<li parentName="ul">{`the moving parts of the Admin app framework`}</li>
<li parentName="ul">{`what is a plugin`}</li>
<li parentName="ul">{`how the Admin app is rendered`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`Admin app is powered by a simple React framework, which allows you to add new `}<a parentName="p" {...{
        "href": "https://reactjs.org/docs/context.html#contextprovider"
      }}>{`React Context providers`}</a>{`, compose existing UI components, register routes, and do all that using plain `}<a parentName="p" {...{
        "href": "https://reactjs.org/docs/react-component.html"
      }}>{`React components`}</a>{`, and widely used concepts, like `}<a parentName="p" {...{
        "href": "https://reactjs.org/docs/higher-order-components.html"
      }}>{`Higher Order Components`}</a>{` (hereinafter: HOCs), and `}<a parentName="p" {...{
        "href": "https://reactjs.org/docs/hooks-intro.html"
      }}>{`hooks`}</a>{`.`}</p>
<p>{`In the following sections, we cover 5 fundamental components which make everything work. These 5 components make up the low-level API, and in the vast majority of cases, these are the only components you’ll need to use to develop new plugins (besides your own custom components and views).`}</p>
<p>{`The following diagram shows all 5 components in action:`}</p>
<Image src={_Image1} alt={"Admin App Framework In Action"} mdxType="Image" />
<p>{`As you can see, what you mount, is not exactly what gets rendered. The `}<inlineCode parentName="p">{`Admin`}</inlineCode>{` component (the framework) takes care of rendering things `}<em parentName="p">{`where`}</em>{` and `}<em parentName="p">{`when`}</em>{` they need to be rendered, and also does various compositions and optimizations (caching) in the process.`}</p>
<p>{`A good example of that are the React Context providers (represented by the `}<inlineCode parentName="p">{`Provider`}</inlineCode>{` component in the diagram). Traditionally, when using Higher Order Components (HOCs), we end up with a deep hierarchy of nested components, which is hard to read, and even harder to maintain. In these cases, we usually resort to HOC composition, to flatten out the hierarchy, and produce a single component which is constructed of the individual HOCs wrapped around the previous one. We use the same technique to construct React Context providers.`}</p>
<_Heading level={2} id={"the-plugins-component"} nextElement={{
      "type": "paragraph"
    }}>The<code>Plugins</code>Component</_Heading>
<p>{`To explain why we need this component, let’s quickly describe what a `}<em parentName="p">{`plugin`}</em>{` is.`}</p>
<p>{`A plugin is a React component that can do things like adding a route, adding a menu, adding a file type renderer, etc. Plugins can also be composed into larger plugin components, to perform more complex tasks.`}</p>
<p>{`More often than not, a plugin component needs to access one or more React Contexts provided by various apps (Page Builder, File Manager, etc.), to do its job. To be able to do that, plugin components need to be rendered as children of all those React Context providers (if unsure, revisit the diagram in the `}<a parentName="p" {...{
        "href": "#overview"
      }}>{`Overview`}</a>{` section).`}</p>
<p>{`The purpose of the `}<inlineCode parentName="p">{`Plugins`}</inlineCode>{` component is to make sure that its children are rendered at the right place within the app component hierarchy. It helps you not to think about `}<em parentName="p">{`where`}</em>{` you mount your plugin components, so you’re more flexible with how you build your custom plugins.`}</p>
<Alert type="success" mdxType="Alert">
<p>{`You can mount as many Plugin elements as you need, anywhere in the app components hierarchy. The only important thing is that you `}<em parentName="p">{`do`}</em>{` mount it when you want to add one or more plugins to the app.`}</p>
</Alert>
<p>{`Here’s the simplest, most straightforward example of using the `}<inlineCode parentName="p">{`Plugins`}</inlineCode>{` component:`}</p>
<Editor title="Using <Plugins/> to Add Routes and Menus" lang="tsx" mdxType="Editor">
{`import React from "react";
import { Admin, Plugins, AddMenu, AddRoute, Layout } from "@webiny/app-serverless-cms";

// Mount everything as children of the <Admin> element.
export const App = () => {
  return (
    <Admin>
      <Plugins>
        <AddMenu id={"myApp"} label={"My App"}>
          <AddMenu id={"myApp.records"} label={"Records"} path={"/my-app/records"} />
        </AddMenu>
        <AddRoute path={"/my-app/records"}>
          <Layout title={"My App - Records"}>{/* Your UI goes here. */}</Layout>
        </AddRoute>
      </Plugins>
    </Admin>
  );
};`}
</Editor>
<p>{`The `}<inlineCode parentName="p">{`AddRoute`}</inlineCode>{` component is described in the dedicated `}<_Link href="/docs/5.x/admin-area/extending/custom-routes">{`Custom Routes`}</_Link>{` article.`}</p>
<p>{`The `}<inlineCode parentName="p">{`AddMenu`}</inlineCode>{` component is described in the dedicated `}<_Link href="/docs/5.x/admin-area/extending/customize-navigation">{`Customize Navigation`}</_Link>{` article.`}</p>
<p>{`Let’s see a more advanced example, and demonstrate a real-life example of menus, routes, and permissions:`}</p>
<Editor title="Extension Composition" lang="tsx" mdxType="Editor">
{`import React from "react";
import {
  Admin,
  Plugins,
  AddMenu,
  AddRoute,
  Layout,
  HasPermission
} from "@webiny/app-serverless-cms";

export const MyExtension = () => {
  return (
    <Plugins>
      {/* Only mount the top-level menu element if the user has the required permission. */}
      <HasPermission name={"myApp"}>
        <AddMenu id={"myApp"} label={"My App"}>
          {/* Only mount sub-menu element and the corresponding route, if the user has the required permission. */}
          <HasPermission name={"myApp.records"}>
            <AddMenu id={"myApp.records"} label={"Records"} path={"/my-app/records"} />
            <AddRoute path={"/my-app/records"}>
              <Layout title={"My App - Records"}>{/* Your UI goes here. */}</Layout>
            </AddRoute>
          </HasPermission>
        </AddMenu>
      </HasPermission>
    </Plugins>
  );
};

export const App = () => {
  return (
    <Admin>
      <MyExtension />
    </Admin>
  );
};`}
</Editor>
<Alert type={"info"} title={"Extensions"} mdxType="Alert">
<p>{`  We highly recommend using our `}<_Link href="/docs/5.x/core-development-concepts/basics/extensions">{`Extensions`}</_Link>{` to organize your code in a scalable and portable manner.`}</p>
</Alert>
<_Heading level={2} id={"naming-conventions"} nextElement={{
      "type": "paragraph"
    }}>Naming Conventions</_Heading>
<p>{`There are many components exported from the `}<inlineCode parentName="p">{`@webiny/app-serverless-cms`}</inlineCode>{` package. These naming conventions will help you find your way around, and quickly filter out components in your IDE.`}</p>
<ul>
<li parentName="ul">{`components that `}<em parentName="li">{`add`}</em>{` things to the system start with `}<inlineCode parentName="li">{`Add`}</inlineCode>{` prefix (e.g., `}<inlineCode parentName="li">{`AddMenu`}</inlineCode>{`)`}</li>
<li parentName="ul">{`presentation components end with `}<inlineCode parentName="li">{`Renderer`}</inlineCode>{` (e.g., `}<inlineCode parentName="li">{`MenuItemRenderer`}</inlineCode>{`)`}</li>
<li parentName="ul">{`hooks, by React convention, start with `}<inlineCode parentName="li">{`use`}</inlineCode>{` (e.g., `}<inlineCode parentName="li">{`useSecurity`}</inlineCode>{`)`}</li>
</ul>
<p>{`Almost always, renderer components go with a parent component that provides a React Context to the renderer. For example, a `}<inlineCode parentName="p">{`UserMenuItem`}</inlineCode>{` has a corresponding `}<inlineCode parentName="p">{`UserMenuItemRenderer`}</inlineCode>{` component. The renderer component doesn’t take any props; instead, it uses hooks to fetch the relevant data from React Context, provided by the `}<inlineCode parentName="p">{`UserMenuItem`}</inlineCode>{` component. This approach drastically reduces prop drilling, and makes it easier to decouple logic from presentation.`}</p>
<p>{`If you want to change the appearance (the renderer) of a certain component, always look for the `}<inlineCode parentName="p">{`Renderer`}</inlineCode>{` part of it, and decorate `}<em parentName="p">{`that`}</em>{` component.`}</p>
<_Heading level={2} id={"conclusion"} nextElement={{
      "type": "paragraph"
    }}>Conclusion</_Heading>
<p>{`These few simple components is what makes up the core of the Admin app. This provides strong and simple foundations to build upon. It’s easily composable, and gives the ability to lazy-load plugins, apply plugins conditionally, compose component renderers, and also compose these atomic components into larger extensions.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;