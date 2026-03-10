/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { CanIUseThis } from "@/components/CanIUseThis";
import { Gallery } from "@/components/Image";
import { WhatYouWillLearn } from "@/components/WhatYouWillLearn";
import baseEditor from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/page-builder/extending/assets/editors-base-editor.png";
import pageEditor from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/page-builder/extending/assets/editors-page-editor.png";
import blockEditor from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/page-builder/extending/assets/editors-block-editor.png";
import dropdownMenuDots from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/page-builder/extending/assets/editors-page-editor-dropdown-dots.png";
import dropdownMenu from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/page-builder/extending/assets/editors-page-editor-dropdown-open.png";
import discoverElements from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/page-builder/extending/assets/editors-discover-elements.png";
import elementProperties from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/page-builder/extending/assets/editors-element-properties.png";
import editorFrame from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/page-builder/extending/assets/editors-custom-frame.png";
import undoRedo from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/page-builder/extending/assets/editors-undo-redo.png";
import customSidebar from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/page-builder/extending/assets/editors-custom-sidebar.png";
import customProperty from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/page-builder/extending/assets/editors-custom-property.gif";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Customize Editors",
  "description": "Learn how to customize page builder editors",
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
  "title": "Base Editor",
  "slug": "base-editor",
  "children": []
}, {
  "title": "Using the Code Examples",
  "slug": "using-the-code-examples",
  "children": []
}, {
  "title": "Discover UI Elements",
  "slug": "discover-ui-elements",
  "children": []
}, {
  "title": "Choosing an Editor to Customize",
  "slug": "choosing-an-editor-to-customize",
  "children": []
}, {
  "title": "TopBar",
  "slug": "top-bar",
  "children": [{
    "title": "Add an Element",
    "slug": "add-an-element",
    "children": []
  }, {
    "title": "Position an Element",
    "slug": "position-an-element",
    "children": []
  }, {
    "title": "Remove an Element",
    "slug": "remove-an-element",
    "children": []
  }, {
    "title": "Replace an Element",
    "slug": "replace-an-element",
    "children": []
  }, {
    "title": "Actions",
    "slug": "actions",
    "children": []
  }, {
    "title": "Dropdown Actions",
    "slug": "dropdown-actions",
    "children": []
  }]
}, {
  "title": "Element Properties",
  "slug": "element-properties",
  "children": [{
    "title": "Add a Property",
    "slug": "add-a-property",
    "children": []
  }, {
    "title": "Remove a Property",
    "slug": "remove-a-property",
    "children": []
  }, {
    "title": "Update an Element",
    "slug": "update-an-element",
    "children": []
  }]
}, {
  "title": "Editor Layout",
  "slug": "editor-layout",
  "children": [{
    "title": "Add a Custom Editor Frame",
    "slug": "add-a-custom-editor-frame",
    "children": []
  }, {
    "title": "Move Undo/Redo Buttons to the TopBar",
    "slug": "move-undo-redo-buttons-to-the-top-bar",
    "children": []
  }, {
    "title": "Customize the Sidebar",
    "slug": "customize-the-sidebar",
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

















<CanIUseThis since="5.40.0" mdxType="CanIUseThis" />
<WhatYouWillLearn mdxType="WhatYouWillLearn">
<ul>
<li parentName="ul">{`how editors work`}</li>
<li parentName="ul">{`how to add/remove/replace existing elements`}</li>
<li parentName="ul">{`how to customize element layouts`}</li>
</ul>
</WhatYouWillLearn>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`Webiny Page Builder app provides different editors for various purposes. There’s a Block Editor to build reusable content blocks, a Template Editor to build page templates, and a Page Editor to build pages using templates, blocks, or fully from scratch. These editors share the same underlying framework, which makes them customizable.`}</p>
<Gallery mdxType="Gallery">
  <Image src={pageEditor} title={"Page Editor"} mdxType="Image" />
  <Image src={blockEditor} title={"Block Editor"} mdxType="Image" />
</Gallery>
<_Heading level={2} id={"base-editor"} nextElement={{
      "type": "paragraph"
    }}>Base Editor</_Heading>
<p>{`All editors share the same base editor, with the core mechanics, plugins, and UI elements already in place. Individual editor configs add the specifics: variations of elements, settings, behavior.`}</p>
<p>{`Out of the box, the base editor has 4 top-level UI elements: `}<inlineCode parentName="p">{`TopBar`}</inlineCode>{`, `}<inlineCode parentName="p">{`Toolbar`}</inlineCode>{`, `}<inlineCode parentName="p">{`Content`}</inlineCode>{`, and `}<inlineCode parentName="p">{`Sidebar`}</inlineCode>{`. Furthermore, within these top-level elements, there are groups of child elements, which allow you to target specific positions when adding new elements. For example, the display mode selector (laptop, tablet, mobile) you see on the image below, belongs to the `}<inlineCode parentName="p">{`center`}</inlineCode>{` group of the `}<inlineCode parentName="p">{`TopBar`}</inlineCode>{` element. We’ll cover each top-level element in depth, in the following sections.`}</p>
<Image src={baseEditor} title={"Base Editor"} mdxType="Image" />
<_Heading level={2} id={"using-the-code-examples"} nextElement={{
      "type": "paragraph"
    }}>Using the Code Examples</_Heading>
<p>{`The following code examples follow our usual configuration pattern. You need to add the code from
the examples to your `}<inlineCode parentName="p">{`apps/admin/src/App.tsx`}</inlineCode>{`. Here’s an example:`}</p>
<Editor title="apps/admin/src/App.tsx" lang="diff-tsx" mdxType="Editor">
{`import React from "react";
import { Admin } from "@webiny/app-serverless-cms";
import { Cognito } from "@webiny/app-admin-users-cognito";
+ import { PageEditorConfig } from "@webiny/app-page-builder";
import "./App.scss";

export const App = () => {
    return (
      <Admin>
        <Cognito />
+       <PageEditorConfig>
+           {* Config components go here. *}
+       </PageEditorConfig>
      </Admin>
    );
};`}
</Editor>
<p>{`In the following sections, we’ll only be showing the code that is related to the configuration itself. The rest of the code shown above will be omitted.`}</p>
<_Heading level={2} id={"discover-ui-elements"} nextElement={{
      "type": "paragraph"
    }}>Discover UI Elements</_Heading>
<p>{`In the code examples, we’ll be referring to existing elements by their name. The most reliable way of discovering the element names and groups is by using your browser’s developer tools, and simply inspecting the element you’re interested in. Element groups are enclosed with a `}<inlineCode parentName="p">{`pb-editor-ui-elements`}</inlineCode>{` DOM element, and individual elements with a `}<inlineCode parentName="p">{`pb-editor-ui-element`}</inlineCode>{` DOM element. On these DOM elements, you’ll be able to find the `}<inlineCode parentName="p">{`data-group`}</inlineCode>{` and `}<inlineCode parentName="p">{`data-name`}</inlineCode>{` attributes. That’s what you’re looking for.`}</p>
<Image src={discoverElements} title="Discover Elements via Developer Tools" mdxType="Image" />
<_Heading level={2} id={"choosing-an-editor-to-customize"} nextElement={{
      "type": "paragraph"
    }}>Choosing an Editor to Customize</_Heading>
<p>{`When you want to customize an editor, first you need to know which editor you want to customize, as customizations are scoped to a specific editor. Once you know what editor you want to target, use the right config component:`}</p>
<Editor title="" lang="ts" mdxType="Editor">
{`// For Block Editor
import { BlockEditorConfig } from "@webiny/app-page-builder";

// For Template Editor
import { TemplateEditorConfig } from "@webiny/app-page-builder";

// For Page Editor
import { PageEditorConfig } from "@webiny/app-page-builder";`}
</Editor>
<p>{`In this article, we will focus on the Page Editor, as it’s usually the main editor developers want to customize. However, all the techniques and patterns shown the examples below apply to all editors.`}</p>
<_Heading level={2} id={"top-bar"} nextElement={{
      "type": "paragraph"
    }}>TopBar</_Heading>
<p>{`The top-level `}<inlineCode parentName="p">{`TopBar`}</inlineCode>{` element has 3 element groups: `}<inlineCode parentName="p">{`left`}</inlineCode>{`, `}<inlineCode parentName="p">{`center`}</inlineCode>{`, and `}<inlineCode parentName="p">{`actions`}</inlineCode>{`.`}</p>
<_Heading level={3} id={"add-an-element"} nextElement={{
      "type": "paragraph"
    }}>Add an Element</_Heading>
<p>{`To add a new element, use the `}<inlineCode parentName="p">{`Ui.TopBar.Element`}</inlineCode>{` config component, give it a `}<inlineCode parentName="p">{`name`}</inlineCode>{`, a `}<inlineCode parentName="p">{`group`}</inlineCode>{` it belongs to, and an `}<inlineCode parentName="p">{`element`}</inlineCode>{`, which is a React element.`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`const { Ui } = PageEditorConfig;

<PageEditorConfig>
  <Ui.TopBar.Element name={"demoElement"} group={"left"} element={<span>Demo Element</span>} />
</PageEditorConfig>;`}
</Editor>
<_Heading level={3} id={"position-an-element"} nextElement={{
      "type": "paragraph"
    }}>Position an Element</_Heading>
<p>{`To position a element before or after another element, use the `}<inlineCode parentName="p">{`before`}</inlineCode>{` or `}<inlineCode parentName="p">{`after`}</inlineCode>{` props to specify the name of the existing element.`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`const { Ui } = PageEditorConfig;

<PageEditorConfig>
  {/* Position a new element after the "buttonBack" element. */}
  <Ui.TopBar.Element
    name={"demoElement"}
    group={"left"}
    element={<span>Demo Element</span>}
    after={"buttonBack"}
  />
  {/* Change the position of an existing element. */}
  <Ui.TopBar.Element name={"buttonBack"} after={"title"} />
</PageEditorConfig>;`}
</Editor>
<_Heading level={3} id={"remove-an-element"} nextElement={{
      "type": "paragraph"
    }}>Remove an Element</_Heading>
<p>{`To remove an existing element, reference it by `}<inlineCode parentName="p">{`name`}</inlineCode>{`, and add a `}<inlineCode parentName="p">{`remove`}</inlineCode>{` prop.`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`const { Ui } = PageEditorConfig;

<PageEditorConfig>
  <Ui.TopBar.Element name={"buttonBack"} remove />
</PageEditorConfig>;`}
</Editor>
<_Heading level={3} id={"replace-an-element"} nextElement={{
      "type": "paragraph"
    }}>Replace an Element</_Heading>
<p>{`To replace an existing element, reference the existing element by name, and specify a different `}<inlineCode parentName="p">{`element`}</inlineCode>{` prop.`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`const { Ui } = PageEditorConfig;

<PageEditorConfig>
  <Ui.TopBar.Element name={"buttonBack"} element={<span>Back button</span>} />
</PageEditorConfig>;`}
</Editor>
<_Heading level={3} id={"actions"} nextElement={{
      "type": "paragraph"
    }}>Actions</_Heading>
<p>{`The `}<inlineCode parentName="p">{`actions`}</inlineCode>{` element group is one of the most commonly customized, so we provided several higher level components to make adding actions even easier, comparing to other generic elements.`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`const { Ui } = PageEditorConfig;

// Define a component that will handle your action logic.
const MySettings = () => {
  const doSomething = () => {
    alert("My Settings were clicked!");
  };

  return <button onClick={doSomething}>My Settings</button>;
};

<PageEditorConfig>
  <Ui.TopBar.Action name={"mySettings"} element={<MySettings />} />
</PageEditorConfig>;`}
</Editor>
<Alert type={"info"} title={"All the config props are supported!"} mdxType="Alert">
<p>{`Note that all the same props are supported on the `}<inlineCode parentName="p">{`TopBar.Action`}</inlineCode>{` config component: `}<inlineCode parentName="p">{`before`}</inlineCode>{`,
`}<inlineCode parentName="p">{`after`}</inlineCode>{`, and `}<inlineCode parentName="p">{`remove`}</inlineCode>{`.`}</p>
</Alert>
<_Heading level={3} id={"dropdown-actions"} nextElement={{
      "type": "paragraph"
    }}>Dropdown Actions</_Heading>
<p>{`For actions that you don’t use often, or don’t need to be visible in the `}<inlineCode parentName="p">{`TopBar`}</inlineCode>{`, you can use the built-in `}<inlineCode parentName="p">{`DropdownActions`}</inlineCode>{` menu.`}</p>
<Gallery mdxType="Gallery">
  <Image src={dropdownMenuDots} title="Secondary Actions" mdxType="Image" />
  <Image src={dropdownMenu} title="Secondary Actions Menu" mdxType="Image" />
</Gallery>
<p>{`To register a dropdown menu action, use the `}<inlineCode parentName="p">{`TopBar.DropdownAction`}</inlineCode>{` config component. We also provide a `}<inlineCode parentName="p">{`TopBar.DropdownAction.MenuItem`}</inlineCode>{` component to render the actual menu item.`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`// Import an icon to use in the menu item.
import { ReactComponent as EditIcon } from "@material-design-icons/svg/round/edit.svg";

const { Ui } = PageEditorConfig;

const MyDropdownAction = () => {
  const myAction = () => {
    alert("MyAction was clicked!");
  };

  return (
    <Ui.TopBar.DropdownAction.MenuItem label={"My Action"} onClick={myAction} icon={<EditIcon />} />
  );
};

<PageEditorConfig>
  <Ui.TopBar.DropdownAction name={"myDropdownAction"} element={<MyDropdownAction />} />
</PageEditorConfig>;`}
</Editor>
<_Heading level={2} id={"element-properties"} nextElement={{
      "type": "paragraph"
    }}>Element Properties</_Heading>
<p>{`Every content element, like paragraph, heading, image, button, etc., has its own set of properties that can be tweaked by the content creators. These properties are rendered within the top-level `}<inlineCode parentName="p">{`Sidebar`}</inlineCode>{` element, and are grouped into `}<inlineCode parentName="p">{`style`}</inlineCode>{` and `}<inlineCode parentName="p">{`element`}</inlineCode>{` groups, represented by `}<strong parentName="p">{`Style`}</strong>{` and `}<strong parentName="p">{`Element`}</strong>{` tabs, respectively.`}</p>
<Image src={elementProperties} title="Element Properties" mdxType="Image" />
<p>{`The plugins used to register these properties are `}<_Link href="/docs/5.x/page-builder/references/plugins#pb-editor-page-element-style-settings">{`pb-editor-page-element-style-settings`}</_Link>{` for the `}<inlineCode parentName="p">{`style`}</inlineCode>{` group, and `}<_Link href="/docs/5.x/page-builder/references/plugins#pb-editor-page-element-advanced-settings">{`pb-editor-page-element-advanced-settings`}</_Link>{` for the `}<inlineCode parentName="p">{`element`}</inlineCode>{` group.`}</p>
<p>{`To see the implementation of the built-in element property plugins, please `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/tree/next/packages/app-page-builder/src/editor/plugins/elementSettings"
      }}>{`refer to our Github`}</a>{`.`}</p>
<_Heading level={3} id={"add-a-property"} nextElement={{
      "type": "paragraph"
    }}>Add a Property</_Heading>
<p>{`To add a new property, use the `}<inlineCode parentName="p">{`ElementProperty`}</inlineCode>{` config component, give it a `}<inlineCode parentName="p">{`name`}</inlineCode>{`, a `}<inlineCode parentName="p">{`group`}</inlineCode>{` (use the constants defined on the `}<inlineCode parentName="p">{`ElementProperty`}</inlineCode>{` component), and an `}<inlineCode parentName="p">{`element`}</inlineCode>{` to render the property UI.`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`const { ElementProperty } = PageEditorConfig;

const MyProperty = () => {
  return <button>My Custom Property</button>;
};

<PageEditorConfig>
  <ElementProperty name={"myProperty"} group={ElementProperty.STYLE} element={<MyProperty />} />
</PageEditorConfig>;`}
</Editor>
<_Heading level={3} id={"remove-a-property"} nextElement={{
      "type": "paragraph"
    }}>Remove a Property</_Heading>
<p>{`To remove an element property, use the `}<inlineCode parentName="p">{`ElementProperty`}</inlineCode>{` config component, and add a `}<inlineCode parentName="p">{`remove`}</inlineCode>{` prop.`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`const { ElementProperty } = PageEditorConfig;

<PageEditorConfig>
  <ElementProperty name={"background"} remove />
</PageEditorConfig>;`}
</Editor>
<_Heading level={3} id={"update-an-element"} nextElement={{
      "type": "paragraph"
    }}>Update an Element</_Heading>
<p>{`To update an element via your custom element properties, use the `}<inlineCode parentName="p">{`useUpdateElement`}</inlineCode>{` hook. In this example,`}</p>
<Editor title="apps/admin/src/CustomProperty.tsx" lang="tsx" mdxType="Editor">
{`import React, { useCallback } from "react";
import styled from "@emotion/styled";
import { PageEditorConfig } from "@webiny/app-page-builder";
import { useActiveElement, useUpdateElement } from "@webiny/app-page-builder/editor";
import { ButtonPrimary } from "@webiny/ui/Button";

/* Sidebar content has no default styles, so we need to take care of styling ourselves. */
const StyledButton = styled(ButtonPrimary)\`
  margin: 16px;
\`;

export const SetButtonText = () => {
  const [activeElement] = useActiveElement();
  const updateElement = useUpdateElement();

  const setButtonText = useCallback(() => {
    if (!activeElement) {
      return;
    }

    /* Update the element by passing the full object you want to have in the page state. */
    updateElement({
      ...activeElement,
      data: {
        ...activeElement.data,
        buttonText: "Get in touch to get a free demo!"
      }
    });
  }, [activeElement]);

  /* Only render this property for "button" elements. */
  if (!activeElement || activeElement.type !== "button") {
    return null;
  }

  return <StyledButton onClick={setButtonText}>Update Text</StyledButton>;
};

const { ElementProperty } = PageEditorConfig;

<PageEditorConfig>
  <ElementProperty
    name={"setButtonText"}
    element={<SetButtonText />}
    group={ElementProperty.STYLE}
  />
</PageEditorConfig>;`}
</Editor>
<p>{`The result of this little plugin is shown in the video:`}</p>
<Image src={customProperty} title="Custom Property to Update Button Text" mdxType="Image" />
<_Heading level={2} id={"editor-layout"} nextElement={{
      "type": "paragraph"
    }}>Editor Layout</_Heading>
<p>{`The editor, and the top-level elements, each have their own `}<inlineCode parentName="p">{`Layout`}</inlineCode>{` component, which controls how that particular element is rendered. This means that you can change every element individually, but also change the entire editor layout.`}</p>
<Alert type="warning" title="A word of caution!" mdxType="Alert">
<p>{`Editor styles, element positioning, scrollable panels, drag&drop behavior, a lot of it depends
on various CSS positioning techniques and tricks. The top-level elements are mostly `}<inlineCode parentName="p">{`position: fixed`}</inlineCode>{`, and will require some fiddling with CSS.`}</p>
</Alert>
<p>{`For reference, here are some links to Github, where each of the Layout component implementation can be found:`}</p>
<ul>
<li parentName="ul"><a parentName="li" {...{
          "href": "https://github.com/webiny/webiny-js/blob/dev/packages/app-page-builder/src/editor/config/Layout.tsx"
        }}>{`Editor Layout`}</a></li>
<li parentName="ul"><a parentName="li" {...{
          "href": "https://github.com/webiny/webiny-js/blob/dev/packages/app-page-builder/src/editor/config/TopBar/Layout.tsx"
        }}>{`TopBar Layout`}</a></li>
<li parentName="ul"><a parentName="li" {...{
          "href": "https://github.com/webiny/webiny-js/blob/dev/packages/app-page-builder/src/editor/config/Toolbar/Layout.tsx"
        }}>{`Toolbar Layout`}</a></li>
<li parentName="ul"><a parentName="li" {...{
          "href": "https://github.com/webiny/webiny-js/blob/dev/packages/app-page-builder/src/editor/config/Content/Layout.tsx"
        }}>{`Content Layout`}</a></li>
<li parentName="ul"><a parentName="li" {...{
          "href": "https://github.com/webiny/webiny-js/blob/dev/packages/app-page-builder/src/editor/config/Sidebar/Layout.tsx"
        }}>{`Sidebar Layout`}</a></li>
</ul>
<_Heading level={3} id={"add-a-custom-editor-frame"} nextElement={{
      "type": "paragraph"
    }}>Add a Custom Editor Frame</_Heading>
<p>{`This example demonstrates how you can decorate the default editor layout and add custom panels. We’ll add a new panel above the default TopBar element, and also a new toolbar to the left of the existing Toolbar element.`}</p>
<Alert type="info" mdxType="Alert">You can copy the following code example in its entirety.</Alert>
<Editor title="apps/admin/src/EditorLayout.tsx" lang="tsx" mdxType="Editor">
{`import styled from "@emotion/styled";
import { PageEditorConfig } from "@webiny/app-page-builder";

const { Ui } = PageEditorConfig;

/**
 * Some constants to apply tweaks to CSS.
 */
const oldTopBar = 64;
const newTopBar = 64;
const newToolbar = 64;

/**
 * Create a styled component that will serve as a root for all default element tweaks.
 * All top-level editor elements have a "data-role" attribute to make it easy to target them via CSS selectors.
 */
const StyledEditor = styled.div\`
  [data-role="top-bar-layout"] {
    box-shadow: none;
    border: 1px solid #e9e9e9;
    top: \${newTopBar}px;
    width: calc(100vw - \${newToolbar}px);
    right: 0;
  }

  [data-role="toolbar-layout"] {
    top: calc(\${newTopBar}px + \${oldTopBar}px);
    height: calc(100vh - \${oldTopBar + newTopBar}px);
    left: \${newToolbar}px;
    border-left: 1px solid #e9e9e9;
  }

  [data-role="toolbar-drawers"] {
    top: calc(\${newTopBar}px + \${oldTopBar}px);
    /* This fixes the position of the drawer when it's opened. */
    aside.mdc-drawer--open {
      top: calc(\${newTopBar}px + \${oldTopBar}px);
      margin-left: calc(54px + \${newToolbar}px);
    }
  }

  [data-role="content-layout"] {
    top: calc(\${newTopBar}px + \${oldTopBar}px);
    left: \${newToolbar}px;
    width: calc(100vw - 415px - \${newToolbar}px);
    margin-top: 24px;
  }
  [data-role="sidebar-layout"] {
    top: calc(\${newTopBar}px + \${oldTopBar}px);
  }

  [data-role="content-breadcrumbs"] {
    left: calc(55px + \${newToolbar}px);
  }
\`;

const CustomTopBar = styled.div\`
  width: 100%;
  background-color: white;
  height: \${newTopBar}px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  border-right: 1px solid var(--mdc-theme-on-background);
\`;

const CustomToolbar = styled.div\`
  width: \${newToolbar}px;
  background-color: white;
  height: calc(100vh - \${newTopBar}px);
  position: fixed;
  top: \${newTopBar}px;
  left: 0;
  z-index: 20;
  border-bottom: 1px solid var(--mdc-theme-on-background);
\`;

export const EditorLayout = Ui.Layout.createDecorator(OriginalLayout => {
  return function Layout() {
    return (
      /* Wrap the original layout with the new styled component to apply CSS tweaks. */
      <StyledEditor>
        {/* Add a custom top bar element. */}
        <CustomTopBar />
        {/* Add a custom toolbar element. */}
        <CustomToolbar />
        {/* Render the original layout. */}
        <OriginalLayout />
      </StyledEditor>
    );
  };
});`}
</Editor>
<p>{`Enable this editor configuration in the `}<inlineCode parentName="p">{`apps/admin/src/App.tsx`}</inlineCode>{` as described in the `}<a parentName="p" {...{
        "href": "#using-the-code-examples"
      }}>{`Using the Code Examples`}</a>{` section. Simply mount your `}<inlineCode parentName="p">{`<EditorLayout />`}</inlineCode>{` as a child of `}<inlineCode parentName="p">{`<PageEditorConfig>`}</inlineCode>{`:`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`import { EditorLayout } from "./EditorLayout";

<PageEditorConfig>
  <EditorLayout />
</PageEditorConfig>;`}
</Editor>
<p>{`The result will look like this:`}</p>
<Image src={editorFrame} title="Custom Editor Frame" mdxType="Image" />
<_Heading level={3} id={"move-undo-redo-buttons-to-the-top-bar"} nextElement={{
      "type": "paragraph"
    }}>Move Undo/Redo Buttons to the TopBar</_Heading>
<p>{`By default, Undo and Redo actions are displayed in the `}<inlineCode parentName="p">{`Toolbar`}</inlineCode>{` element, with the action tooltip opening to the right. Simply moving them to the `}<inlineCode parentName="p">{`TopBar`}</inlineCode>{` will not change the direction of the tooltip. So in this next code example, we’ll demonstrate how you can reimplement these buttons yourself, position them in the `}<inlineCode parentName="p">{`TopBar`}</inlineCode>{`, and remove the default ones from the `}<inlineCode parentName="p">{`Toolbar`}</inlineCode>{`.`}</p>
<Alert type="info" mdxType="Alert">You can copy the following code example in its entirety.</Alert>
<Editor title="apps/admin/src/UndoRedo.tsx" lang="tsx" mdxType="Editor">
{`import React from "react";
import { ReactComponent as UndoIcon } from "@material-design-icons/svg/round/undo.svg";
import { ReactComponent as RedoIcon } from "@material-design-icons/svg/round/redo.svg";
import { useActiveElement, useEventActionHandler } from "@webiny/app-page-builder/editor";
import { IconButton } from "@webiny/ui/Button";
import { Tooltip } from "@webiny/ui/Tooltip";

const Undo = () => {
  /* Our editor already exposes an "undo" event which you can simply trigger via a hook. */
  const { undo } = useEventActionHandler();
  const [, setActiveElement] = useActiveElement();

  const onClick = () => {
    undo();
    setActiveElement(null);
  };

  return (
    <Tooltip placement={"bottom"} content={"Undo"}>
      <IconButton icon={<UndoIcon />} onClick={onClick} />
    </Tooltip>
  );
};

const Redo = () => {
  /* Our editor already exposes "redo" function which you can simply invoke. */
  const { redo } = useEventActionHandler();
  const [, setActiveElement] = useActiveElement();

  const onClick = () => {
    setActiveElement(null);
    redo();
  };
  return (
    <Tooltip placement={"bottom"} content={"Redo"}>
      <IconButton icon={<RedoIcon />} onClick={onClick} />
    </Tooltip>
  );
};

export const UndoRedo = () => {
  return (
    <>
      {/* Add your new elements to TopBar, and position them before the "Revisions" dropdown menu. */}
      <Ui.TopBar.Action name={"undo"} element={<Undo />} before={"dropdownMenuRevisions"} />
      <Ui.TopBar.Action name={"redo"} element={<Redo />} before={"dropdownMenuRevisions"} />
      {/* Remove the undo/redo buttons from the Toolbar. */}
      <Ui.Toolbar.Element name={"undo"} remove />
      <Ui.Toolbar.Element name={"redo"} remove />
    </>
  );
};`}
</Editor>
<p>{`And again, enable this configuration, just like you did in the previous section:`}</p>
<Editor title="apps/admin/src/App.tsx" lang="tsx" mdxType="Editor">
{`import { UndoRedo } from "./UndoRedo";

<PageEditorConfig>
  <UndoRedo />
</PageEditorConfig>;`}
</Editor>
<p>{`The result of this configuration will look like this:`}</p>
<Image src={undoRedo} title="Move Undo/Redo Buttons to TopBar" mdxType="Image" />
<_Heading level={3} id={"customize-the-sidebar"} nextElement={{
      "type": "paragraph"
    }}>Customize the Sidebar</_Heading>
<p>{`Out of the box, Webiny provides config components to add the most common things to the `}<inlineCode parentName="p">{`Sidebar`}</inlineCode>{`, like element actions, and element properties. The default `}<inlineCode parentName="p">{`Sidebar`}</inlineCode>{` is organized into two main groups: `}<inlineCode parentName="p">{`style`}</inlineCode>{` and `}<inlineCode parentName="p">{`element`}</inlineCode>{`, which group related element properties together. These groups are rendered using regular tabs.`}</p>
<p>{`However, you might want to completely change how the `}<inlineCode parentName="p">{`Sidebar`}</inlineCode>{` is rendered. This section demonstrates how you can easily move things around, change the `}<inlineCode parentName="p">{`Sidebar`}</inlineCode>{` layout, add custom groups, etc.`}</p>
<p>{`In this example we will:`}</p>
<ul>
<li parentName="ul">{`change the `}<inlineCode parentName="li">{`Sidebar`}</inlineCode>{` layout from tabs to accordion`}</li>
<li parentName="ul">{`render the `}<inlineCode parentName="li">{`style`}</inlineCode>{` and `}<inlineCode parentName="li">{`element`}</inlineCode>{` properties in one group, called “Element Properties”`}</li>
<li parentName="ul">{`add a new group for custom properties, or any other functionality you want to add, called “Custom Properties”`}</li>
<li parentName="ul">{`move the element actions from their default position in the “Element” tab, to the top of the `}<inlineCode parentName="li">{`Sidebar`}</inlineCode></li>
<li parentName="ul">{`remove the default “Click to Activate” widget, which is usually visible when no element is activated in the editor`}</li>
<li parentName="ul">{`add an “Element Data” accordion, only visible in development mode (while developing on localhost)`}</li>
</ul>
<Alert type="info" mdxType="Alert">You can copy the following code example in its entirety.</Alert>
<Editor title="apps/admin/src/CustomSidebar.tsx" lang="tsx" mdxType="Editor">
{`import React from "react";
import styled from "@emotion/styled";
import { ReactComponent as StarIcon } from "@material-design-icons/svg/round/star.svg";
import { ReactComponent as ScienceIcon } from "@material-design-icons/svg/round/science.svg";
import { ReactComponent as DebugIcon } from "@material-design-icons/svg/round/bug_report.svg";
import { PageEditorConfig } from "@webiny/app-page-builder";
import { useActiveElement } from "@webiny/app-page-builder/editor";
import { Accordion, AccordionItem } from "@webiny/ui/Accordion";
import { Elevation } from "@webiny/ui/Elevation";

const { Ui } = PageEditorConfig;

const StyledAccordionItem = styled(AccordionItem)\`
  .webiny-ui-accordion-item__content {
    padding: 0 !important;
  }
\`;

const StyledElevation = styled(Elevation)\`
  box-shadow: 1px 0px 5px 0px rgba(128, 128, 128, 1);
  position: fixed;
  right: 0;
  top: 65px;
  height: 100%;
  width: 300px;
  z-index: 1;
\`;

const Actions = styled.div\`
  display: flex;
  justify-content: center;
\`;

const CustomProperties = styled.div\`
  margin: 16px;
\`;

const ScrollableContainer = styled.div\`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 65px - 48px);
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 1px;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }
\`;

/* Decorate the default Sidebar layout and render a completely custom one. */
const SidebarWithAccordion = Ui.Sidebar.Layout.createDecorator(() => {
  return function Sidebar() {
    const [activeElement] = useActiveElement();

    /* Make accordions non-interactive, if no element is activated in the editor. */
    const isInteractive = !!activeElement;

    return (
      <StyledElevation z={1}>
        {/* When sidebar content overflows the viewport height, we want the sidebar to become scrollable. */}
        <ScrollableContainer>
          <Accordion>
            <Actions>
              {/* Render element actions. */}
              <Ui.Elements scope={"elementActions"} />
            </Actions>
            <StyledAccordionItem
              title={"Element Properties"}
              description={"Built-in element properties."}
              icon={<StarIcon />}
              interactive={isInteractive}
            >
              {/* Render \`style\` and \`element\` properties together. */}
              <Ui.Sidebar.Elements group={"style"} />
              <Ui.Sidebar.Elements group={"element"} />
            </StyledAccordionItem>
            <StyledAccordionItem
              title={"Custom Properties"}
              description={"Custom element properties."}
              icon={<ScienceIcon />}
              interactive={isInteractive}
            >
              <CustomProperties>Your custom element properties can go here!</CustomProperties>
            </StyledAccordionItem>

            {/* In development, print active element data for debugging purposes. */}
            {process.env.NODE_ENV === "development" ? (
              <StyledAccordionItem
                title={"Element Data"}
                description={"Element data for debugging."}
                icon={<DebugIcon />}
                interactive={isInteractive}
              >
                {activeElement ? <pre>{JSON.stringify(activeElement, null, 2)}</pre> : null}
              </StyledAccordionItem>
            ) : (
              <></>
            )}
          </Accordion>
        </ScrollableContainer>
      </StyledElevation>
    );
  };
});

export const CustomSidebar = () => {
  return (
    <>
      {/* Apply the Sidebar decorator. */}
      <SidebarWithAccordion />
      {/* Remove unwanted elements from the default UI. */}
      <Ui.Sidebar.Element name={"elementActions"} remove />
      <Ui.Sidebar.Element name={"elementInactive"} remove />
      <Ui.Sidebar.Element name={"styleInactive"} remove />
    </>
  );
};`}
</Editor>
<p>{`And again, enable the configuration:`}</p>
<Editor title="apps/admin/src/App.tsx" lang="tsx" mdxType="Editor">
{`import { CustomSidebar } from "./CustomSidebar";

<PageEditorConfig>
  <CustomSidebar />
</PageEditorConfig>;`}
</Editor>
<p>{`The result of this configuration will look like this:`}</p>
<Image src={customSidebar} title="Custom Sidebar" mdxType="Image" />
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;