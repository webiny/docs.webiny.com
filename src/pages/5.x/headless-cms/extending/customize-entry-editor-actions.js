/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import hcmsActions from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/extending/assets/hcms-actions.png";
import hcmsActionsButton from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/extending/assets/hcms-actions-button.gif";
import hcmsActionsButtonDiscovery from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/extending/assets/hcms-actions-button-discovery.png";
import hcmsActionsButtonBefore from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/extending/assets/hcms-actions-button-before.png";
import hcmsActionsMenuItem from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/extending/assets/hcms-actions-menu-item.gif";
import hcmsActionsMenuItemDiscovery from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/extending/assets/hcms-actions-menu-item-discovery.png";
import hcmsActionsMenuItemBefore from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/extending/assets/hcms-actions-menu-item-before.png";
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Customize Entry Editor Actions",
  "description": "Learn how to add, replace, or remove actions in the Entry Editor.",
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
  "title": "Button Actions",
  "slug": "button-actions",
  "children": [{
    "title": "Add a Button",
    "slug": "add-a-button",
    "children": []
  }, {
    "title": "Discovering Buttons",
    "slug": "discovering-buttons",
    "children": []
  }, {
    "title": "Positioning a Button",
    "slug": "positioning-a-button",
    "children": []
  }, {
    "title": "Removing a Button",
    "slug": "removing-a-button",
    "children": []
  }, {
    "title": "Replacing a Button",
    "slug": "replacing-a-button",
    "children": []
  }]
}, {
  "title": "Menu Item Actions",
  "slug": "menu-item-actions",
  "children": [{
    "title": "Add a Menu Item",
    "slug": "add-a-menu-item",
    "children": []
  }, {
    "title": "Discovering MenuItems",
    "slug": "discovering-menu-items",
    "children": []
  }, {
    "title": "Positioning a MenuItem",
    "slug": "positioning-a-menu-item",
    "children": []
  }, {
    "title": "Removing a MenuItem",
    "slug": "removing-a-menu-item",
    "children": []
  }, {
    "title": "Replacing a MenuItem",
    "slug": "replacing-a-menu-item",
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










<Alert type="info" title="Can I Use This?" mdxType="Alert">
<p>{`This feature is available since Webiny `}<strong parentName="p">{`v5.x`}</strong>{`.`}</p>
</Alert>
<Alert type="success" title="What you'll learn" mdxType="Alert">
<ul>
<li parentName="ul">{`how to add a custom action to the Entry Editor`}</li>
<li parentName="ul">{`how to discover existing action names`}</li>
<li parentName="ul">{`how to change the position of actions, remove, or replace an existing action`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`By default, Headless CMS offers built-in actions that handle entry saving, publishing and deletion. These are located at the top of the content entry form.`}</p>
<p>{`To customize actions, you need to use the `}<inlineCode parentName="p">{`ContentEntryEditorConfig`}</inlineCode>{` component. For this article, we will use `}<inlineCode parentName="p">{`ButtonAction`}</inlineCode>{` and `}<inlineCode parentName="p">{`MenuItemAction`}</inlineCode>{` components in the `}<inlineCode parentName="p">{`Actions`}</inlineCode>{` namespace.`}</p>
<p>{`As you can see, there are two types of actions:`}</p>
<ol>
<li parentName="ol"><inlineCode parentName="li">{`ButtonAction`}</inlineCode>{` listed as a button;`}</li>
<li parentName="ol"><inlineCode parentName="li">{`MenuItemAction`}</inlineCode>{` listed in the top right corner menu.`}</li>
</ol>
<Image src={hcmsActions} title="Overview built-in actions" mdxType="Image" />
<_Heading level={2} id={"button-actions"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Button Actions</_Heading>
<_Heading level={3} id={"add-a-button"} nextElement={{
      "type": "paragraph"
    }}>Add a Button</_Heading>
<p>{`To add a new button, use the `}<inlineCode parentName="p">{`ContentEntryEditorConfig`}</inlineCode>{` component and mount it within your `}<inlineCode parentName="p">{`Admin`}</inlineCode>{` app. Your button is just a regular React element, so it can render anything you want.`}</p>
<p>{`To help developers keep the UI consistent, you’ll find a handy `}<inlineCode parentName="p">{`useButtons`}</inlineCode>{` hook that exposes four button components:`}</p>
<ul>
<li parentName="ul"><inlineCode parentName="li">{`ButtonDefault`}</inlineCode></li>
<li parentName="ul"><inlineCode parentName="li">{`ButtonPrimary`}</inlineCode></li>
<li parentName="ul"><inlineCode parentName="li">{`ButtonSecondary`}</inlineCode></li>
<li parentName="ul"><inlineCode parentName="li">{`IconButton`}</inlineCode></li>
</ul>
<p>{`Use one of these components to render a button that inherits UI rules and guidelines from the Webiny core package.`}</p>
<Editor title="apps/admin/src/App.tsx" lang="diff-tsx" mdxType="Editor">
{`import React from "react";
import { Admin } from "@webiny/app-serverless-cms";
import { Cognito } from "@webiny/app-admin-users-cognito";
+ import { ContentEntryEditorConfig, useContentEntry } from "@webiny/app-headless-cms";
+ import { useSnackbar } from "@webiny/app-admin";
import "./App.scss";

+ // You can destructure child components to make the code more readable and easier to work with.
+ const { Actions } = ContentEntryEditorConfig;
+ const { useButtons } = Actions.ButtonAction;

+ const ButtonCopyJson = () => {
+   // useButtons() exposes the button components also used internally: use these to keep the UI consistent.
+   const { ButtonPrimary } = useButtons();
+   // useContentEntry() provides helpful details about the currently selected entry.
+   const { entry } = useContentEntry();
+   // showSnackbar allows to provide a feedback to users.
+   const { showSnackbar } = useSnackbar();
+
+   const copyJson = () => {
+       navigator.clipboard.writeText(JSON.stringify(entry, null, 2));
+       showSnackbar("JSON data copied to clipboard.");
+   };
+
+   return <ButtonPrimary onAction={copyJson}>Copy JSON data</ButtonPrimary>;
+ }

export const App = () => {
    return (
      <Admin>
        <Cognito />
+       <ContentEntryEditorConfig>
+         <Actions.ButtonAction
+           name={"copy-json"}
+           element={<ButtonCopyJson />}
+           modelIds={["car"]}
+         />
+       </ContentEntryEditorConfig>
      </Admin>
    );
};`}
</Editor>
<p>{`By declaring the `}<inlineCode parentName="p">{`modelIds`}</inlineCode>{` prop, you can define in which Content Model Entry Editor you want to show your custom button. If you exclude this prop, the button will be registered for all models in the system.`}</p>
<p>{`In the example above, you’ll see your new element the next time you open a `}<inlineCode parentName="p">{`car`}</inlineCode>{` Content Model Entry Editor. This is the whole process of registering a new button element.`}</p>
<Image src={hcmsActionsButton} title="Custom Button in Action" mdxType="Image" />
<_Heading level={3} id={"discovering-buttons"} nextElement={{
      "type": "paragraph"
    }}>Discovering Buttons</_Heading>
<p>{`This section demonstrates how you can discover the names of existing buttons. This is important for further sections on positioning, removing, and replacing buttons.`}</p>
<p>{`The easiest way to discover existing buttons is to use your browser’s React Dev Tools plugins and look for the `}<inlineCode parentName="p">{`Buttons`}</inlineCode>{` element. From there, you can either look for `}<inlineCode parentName="p">{`actions`}</inlineCode>{` props or look at the child elements and their keys:`}</p>
<Image src={hcmsActionsButtonDiscovery} title="Discover Existing Buttons" mdxType="Image" />
<_Heading level={3} id={"positioning-a-button"} nextElement={{
      "type": "paragraph"
    }}>Positioning a Button</_Heading>
<p>{`To position your custom button before or after an existing button, you can use the `}<inlineCode parentName="p">{`before`}</inlineCode>{` and `}<inlineCode parentName="p">{`after`}</inlineCode>{` props on the `}<inlineCode parentName="p">{`<ButtonAction>`}</inlineCode>{` element:`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`<ContentEntryEditorConfig>
  <Actions.ButtonAction name={"copy-json"} element={<ButtonCopyJson />} before={"save"} />
</ContentEntryEditorConfig>`}
</Editor>
<Image src={hcmsActionsButtonBefore} title="Position Your Button Before Another Button" mdxType="Image" />
<_Heading level={3} id={"removing-a-button"} nextElement={{
      "type": "paragraph"
    }}>Removing a Button</_Heading>
<p>{`You may want to remove an existing button. All you need to do is reference the button by name and pass a `}<inlineCode parentName="p">{`remove`}</inlineCode>{` prop to the `}<inlineCode parentName="p">{`<ButtonAction>`}</inlineCode>{` element:`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`<ContentEntryEditorConfig>
  <Actions.ButtonAction name={"save"} remove />
</ContentEntryEditorConfig>`}
</Editor>
<_Heading level={3} id={"replacing-a-button"} nextElement={{
      "type": "paragraph"
    }}>Replacing a Button</_Heading>
<p>{`To replace an existing button with a new button element, you need to reference the existing button by name and pass a new element via the `}<inlineCode parentName="p">{`element`}</inlineCode>{` prop:`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`<ContentEntryEditorConfig>
  <Actions.ButtonAction name={"save"} element={<button>A new button!</button>} />
</ContentEntryEditorConfig>`}
</Editor>
<_Heading level={2} id={"menu-item-actions"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Menu Item Actions</_Heading>
<_Heading level={3} id={"add-a-menu-item"} nextElement={{
      "type": "paragraph"
    }}>Add a Menu Item</_Heading>
<p>{`To add a new menu item, use the `}<inlineCode parentName="p">{`ContentEntryEditorConfig`}</inlineCode>{` component and mount it within your `}<inlineCode parentName="p">{`Admin`}</inlineCode>{` app. Your menu item is just a regular React element, so it can render anything you want.`}</p>
<p>{`To help developers keep the UI consistent, you’ll find a handy `}<inlineCode parentName="p">{`useOptionsMenuItem`}</inlineCode>{` hook that exposes the `}<inlineCode parentName="p">{`OptionsMenuItem`}</inlineCode>{` component, inheriting UI rules and guidelines from the Webiny core package.`}</p>
<Editor title="apps/admin/src/App.tsx" lang="diff-tsx" mdxType="Editor">
{`import React from "react";
import { Admin } from "@webiny/app-serverless-cms";
import { Cognito } from "@webiny/app-admin-users-cognito";
+ import { ReactComponent as CopyIcon } from "@material-design-icons/svg/filled/content_copy.svg";
+ import { ContentEntryEditorConfig, useContentEntry } from "@webiny/app-headless-cms";
import "./App.scss";

+ // You can destructure child components to make the code more readable and easier to work with.
+ const { Actions } = ContentEntryEditorConfig;
+ const { useOptionsMenuItem } = Actions.MenuItemAction;

+ const MenuItemCopyJson = () => {
+   // useOptionsMenuItem() exposes the menu item component, also used internally: use this to keep the UI consistent.
+   const { OptionsMenuItem } = useOptionsMenuItem();
+   // useContentEntry() provides helpful details about the currently selected entry.
+   const { entry } = useContentEntry();
+   // showSnackbar allows to provide a feedback to users.
+   const { showSnackbar } = useSnackbar();
+
+   const copyJson = () => {
+       navigator.clipboard.writeText(JSON.stringify(entry, null, 2));
+       showSnackbar("JSON data copied to clipboard.");
+   };
+
+   return (
+       <OptionsMenuItem
+           onAction={copyJson}
+           label={"Copy JSON data"}
+           icon={<CopyIcon />}
+       />
+   );
+ }

export const App = () => {
    return (
      <Admin>
       <Cognito />
+      <ContentEntryEditorConfig>
+        <Actions.MenuItemAction
+          name={"copy-json"}
+          element={<MenuItemCopyJson />}
+          modelIds={["car"]}
+        />
+      </ContentEntryEditorConfig>
      </Admin>
    );
};`}
</Editor>
<p>{`By declaring the `}<inlineCode parentName="p">{`modelIds`}</inlineCode>{` prop, you can define in which Content Model Entry Editor you want to show your custom menu item. If you exclude this prop, the menu item will be registered for all models in the system.`}</p>
<p>{`In the example above, you’ll see your new element the next time you open a `}<inlineCode parentName="p">{`car`}</inlineCode>{` Content Model Entry Editor. This is the whole process of registering a new menu item element.`}</p>
<Image src={hcmsActionsMenuItem} title="Custom Menu Item in Action" mdxType="Image" />
<_Heading level={3} id={"discovering-menu-items"} nextElement={{
      "type": "paragraph"
    }}>Discovering MenuItems</_Heading>
<p>{`This section demonstrates how you can discover the names of existing menu items. This is important for further sections on positioning, removing, and replacing menu items.`}</p>
<p>{`The easiest way to discover existing menu items is to use the React Dev Tools plugins for your browser, and look for the `}<inlineCode parentName="p">{`OptionsMenu`}</inlineCode>{` element. From there, you can either look for `}<inlineCode parentName="p">{`actions`}</inlineCode>{` props or look at the child elements and their keys:`}</p>
<Image src={hcmsActionsMenuItemDiscovery} title="Discover Existing Menu Items" mdxType="Image" />
<_Heading level={3} id={"positioning-a-menu-item"} nextElement={{
      "type": "paragraph"
    }}>Positioning a MenuItem</_Heading>
<p>{`To position your custom menu item before or after an existing menu item, you can use the `}<inlineCode parentName="p">{`before`}</inlineCode>{` and `}<inlineCode parentName="p">{`after`}</inlineCode>{` props on the `}<inlineCode parentName="p">{`<Action.MenuItemAction>`}</inlineCode>{` element:`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`<ContentEntryEditorConfig>
  <Actions.MenuItemAction name={"copy-json"} element={<MenuItemCopyJson />} before={"delete"} />
</ContentEntryEditorConfig>`}
</Editor>
<Image src={hcmsActionsMenuItemBefore} title="Position Your Menu Item Before Another Menu Item" mdxType="Image" />
<_Heading level={3} id={"removing-a-menu-item"} nextElement={{
      "type": "paragraph"
    }}>Removing a MenuItem</_Heading>
<p>{`You may want to remove an existing menu item. All you need to do is reference the menu item by name and pass a `}<inlineCode parentName="p">{`remove`}</inlineCode>{` prop to the `}<inlineCode parentName="p">{`<Action.MenuItemAction>`}</inlineCode>{` element:`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`<ContentEntryEditorConfig>
  <Actions.MenuItemAction name={"delete"} remove />
</ContentEntryEditorConfig>`}
</Editor>
<_Heading level={3} id={"replacing-a-menu-item"} nextElement={{
      "type": "paragraph"
    }}>Replacing a MenuItem</_Heading>
<p>{`To replace an existing menu item with a new menu item element, you need to reference the existing menu item by name and pass a new component via the `}<inlineCode parentName="p">{`element`}</inlineCode>{` prop:`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`<ContentEntryEditorConfig>
  <Actions.MenuItemAction name={"delete"} element={<span>A new menu item!</span>} />
</ContentEntryEditorConfig>`}
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