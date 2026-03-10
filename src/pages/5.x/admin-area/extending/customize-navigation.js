/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { CanIUseThis } from "@/components/CanIUseThis";
import { WhatYouWillLearn } from "@/components/WhatYouWillLearn";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Customize Navigation",
  "description": "Learn how to customize menu items in the main navigation of the Admin app.",
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
  "title": "Using the Code Examples",
  "slug": "using-the-code-examples",
  "children": []
}, {
  "title": "Add a New Menu and Menu Item",
  "slug": "add-a-new-menu-and-menu-item",
  "children": []
}, {
  "title": "Add a Footer Menu Item",
  "slug": "add-a-footer-menu-item",
  "children": []
}, {
  "title": "Hide Menu Items",
  "slug": "hide-menu-items",
  "children": []
}, {
  "title": "Additional Examples",
  "slug": "additional-examples",
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




<CanIUseThis since={"5.40.0"} mdxType="CanIUseThis" />
<WhatYouWillLearn mdxType="WhatYouWillLearn">
<ul>
<li parentName="ul">{`how to customize navigation menu items`}</li>
</ul>
</WhatYouWillLearn>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`Webiny navigation consists of a three-level menu, and a single-level menu footer. In the following sections we show how you can add new menus, menu items, and also intercept the definition of every existing menu item.`}</p>
<_Heading level={2} id={"using-the-code-examples"} nextElement={{
      "type": "paragraph"
    }}>Using the Code Examples</_Heading>
<p>{`The following code examples follow our usual configuration pattern. You need to add the code from
the examples to your `}<inlineCode parentName="p">{`apps/admin/src/App.tsx`}</inlineCode>{`. We highly recommend using our `}<_Link href="/docs/5.x/core-development-concepts/basics/extensions">{`Extensions`}</_Link>{` to organize your code in a scalable and portable manner.`}</p>
<_Heading level={2} id={"add-a-new-menu-and-menu-item"} nextElement={{
      "type": "paragraph"
    }}>Add a New Menu and Menu Item</_Heading>
<p>{`Let’s say you’re building a new app, and you want to add a new section to the existing `}<inlineCode parentName="p">{`Settings`}</inlineCode>{` menu. To achieve that, you need to reference the `}<inlineCode parentName="p">{`settings`}</inlineCode>{` menu by its name, and add child menu elements:`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`import { AddMenu, Plugins } from "@webiny/app-admin";

export const Extension = () => {
  return (
    <Plugins>
      <AddMenu name={"settings"}>
        <AddMenu name={"settings.myApp"} label={"My App"}>
          <AddMenu
            name={"settings.myApp.general"}
            label={"General"}
            path={"/settings/my-app/general"}
          />
        </AddMenu>
      </AddMenu>
    </Plugins>
  );
};`}
</Editor>
<p>{`Following this example, you can add completely new menus for your apps, or add menu items to existing menus.`}</p>
<_Heading level={2} id={"add-a-footer-menu-item"} nextElement={{
      "type": "paragraph"
    }}>Add a Footer Menu Item</_Heading>
<p>{`To add a menu item to the footer of the navigation, you need to tag it with a `}<inlineCode parentName="p">{`footer`}</inlineCode>{` tag. Optionally, you can pin it to the top or the bottom of the list by using the `}<inlineCode parentName="p">{`pin`}</inlineCode>{` prop.`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`import { AddMenu, Plugins } from "@webiny/app-admin";

export const Extension = () => {
  return (
    <Plugins>
      <AddMenu
        name={"apiPlayground"}
        label={"API Playground"}
        path={"/api-playground"}
        icon={<Icon />}
        tags={["footer"]}
      />
    </Plugins>
  );
};`}
</Editor>
<_Heading level={2} id={"hide-menu-items"} nextElement={{
      "type": "paragraph"
    }}>Hide Menu Items</_Heading>
<p>{`To hide menu items, we need to create a decorator for the `}<inlineCode parentName="p">{`AddMenu`}</inlineCode>{` component, which will allow us to intercept every `}<inlineCode parentName="p">{`<AddMenu>`}</inlineCode>{` element in the system, and decide what to do with it. This allows you not only to hide the menu, but also change labels, icons, etc.`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`import { AddMenu, Plugins } from "@webiny/app-admin";

const HideMenuItems = AddMenu.createDecorator(Original => {
  // Define menu names you want to hide.
  const skip = ["github", "documentation", "slack", "version"];

  return function AddMenu(props) {
    if (skip.includes(props.name)) {
      return null;
    }

    return <Original {...props} />;
  };
});

export const Extension = () => {
  return (
    <Plugins>
      <HideMenuItems />
    </Plugins>
  );
};`}
</Editor>
<_Heading level={2} id={"additional-examples"} nextElement={{
      "type": "list",
      "ordered": false,
      "start": null,
      "spread": false
    }}>Additional Examples</_Heading>
<ul>
<li parentName="ul"><a parentName="li" {...{
          "href": "https://github.com/webiny/webiny-examples/tree/master/hide-tenant-manager-menu-item"
        }}>{`Hiding Navigation Menu Items`}</a></li>
</ul>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;