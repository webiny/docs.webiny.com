/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { SymbolList } from "@/components/SymbolList";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.64f62e.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "UI",
  "description": "Admin UI component library",
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
  "title": "Components",
  "slug": "components",
  "children": [{
    "title": "Accordion",
    "slug": "accordion",
    "children": []
  }, {
    "title": "Alert",
    "slug": "alert",
    "children": []
  }, {
    "title": "AutoComplete",
    "slug": "auto-complete",
    "children": []
  }, {
    "title": "Avatar",
    "slug": "avatar",
    "children": []
  }, {
    "title": "Button",
    "slug": "button",
    "children": []
  }, {
    "title": "Card",
    "slug": "card",
    "children": []
  }, {
    "title": "Checkbox",
    "slug": "checkbox",
    "children": []
  }, {
    "title": "CheckboxGroup",
    "slug": "checkbox-group",
    "children": []
  }, {
    "title": "CloneIcon",
    "slug": "clone-icon",
    "children": []
  }, {
    "title": "CodeEditor",
    "slug": "code-editor",
    "children": []
  }, {
    "title": "ColorPicker",
    "slug": "color-picker",
    "children": []
  }, {
    "title": "CopyButton",
    "slug": "copy-button",
    "children": []
  }, {
    "title": "CreateIcon",
    "slug": "create-icon",
    "children": []
  }, {
    "title": "DataList",
    "slug": "data-list",
    "children": []
  }, {
    "title": "DataListModal",
    "slug": "data-list-modal",
    "children": []
  }, {
    "title": "DataListWithSections",
    "slug": "data-list-with-sections",
    "children": []
  }, {
    "title": "DataTable",
    "slug": "data-table",
    "children": []
  }, {
    "title": "DelayedOnChange",
    "slug": "delayed-on-change",
    "children": []
  }, {
    "title": "DeleteIcon",
    "slug": "delete-icon",
    "children": []
  }, {
    "title": "Dialog",
    "slug": "dialog",
    "children": []
  }, {
    "title": "DownloadIcon",
    "slug": "download-icon",
    "children": []
  }, {
    "title": "Drawer",
    "slug": "drawer",
    "children": []
  }, {
    "title": "DropdownMenu",
    "slug": "dropdown-menu",
    "children": []
  }, {
    "title": "DynamicFieldset",
    "slug": "dynamic-fieldset",
    "children": []
  }, {
    "title": "EditIcon",
    "slug": "edit-icon",
    "children": []
  }, {
    "title": "FilePicker",
    "slug": "file-picker",
    "children": []
  }, {
    "title": "FilterIcon",
    "slug": "filter-icon",
    "children": []
  }, {
    "title": "Grid",
    "slug": "grid",
    "children": []
  }, {
    "title": "HeaderBar",
    "slug": "header-bar",
    "children": []
  }, {
    "title": "Heading",
    "slug": "heading",
    "children": []
  }, {
    "title": "Icon",
    "slug": "icon",
    "children": []
  }, {
    "title": "IconButton",
    "slug": "icon-button",
    "children": []
  }, {
    "title": "IconPicker",
    "slug": "icon-picker",
    "children": []
  }, {
    "title": "Image",
    "slug": "image",
    "children": []
  }, {
    "title": "Input",
    "slug": "input",
    "children": []
  }, {
    "title": "Label",
    "slug": "label",
    "children": []
  }, {
    "title": "Link",
    "slug": "link",
    "children": []
  }, {
    "title": "List",
    "slug": "list",
    "children": []
  }, {
    "title": "ListIcon",
    "slug": "list-icon",
    "children": []
  }, {
    "title": "Loader",
    "slug": "loader",
    "children": []
  }, {
    "title": "LoginIcon",
    "slug": "login-icon",
    "children": []
  }, {
    "title": "MultiAutoComplete",
    "slug": "multi-auto-complete",
    "children": []
  }, {
    "title": "MultiFilePicker",
    "slug": "multi-file-picker",
    "children": []
  }, {
    "title": "NextPageIcon",
    "slug": "next-page-icon",
    "children": []
  }, {
    "title": "OptionsIcon",
    "slug": "options-icon",
    "children": []
  }, {
    "title": "OverlayLoader",
    "slug": "overlay-loader",
    "children": []
  }, {
    "title": "Popover",
    "slug": "popover",
    "children": []
  }, {
    "title": "Portal",
    "slug": "portal",
    "children": []
  }, {
    "title": "PreviousPageIcon",
    "slug": "previous-page-icon",
    "children": []
  }, {
    "title": "ProgressBar",
    "slug": "progress-bar",
    "children": []
  }, {
    "title": "Radio",
    "slug": "radio",
    "children": []
  }, {
    "title": "RadioGroup",
    "slug": "radio-group",
    "children": []
  }, {
    "title": "RangeSlider",
    "slug": "range-slider",
    "children": []
  }, {
    "title": "RefreshIcon",
    "slug": "refresh-icon",
    "children": []
  }, {
    "title": "ScrollArea",
    "slug": "scroll-area",
    "children": []
  }, {
    "title": "Scrollbar",
    "slug": "scrollbar",
    "children": []
  }, {
    "title": "ScrollBar",
    "slug": "scroll-bar",
    "children": []
  }, {
    "title": "SegmentedControl",
    "slug": "segmented-control",
    "children": []
  }, {
    "title": "Select",
    "slug": "select",
    "children": []
  }, {
    "title": "Separator",
    "slug": "separator",
    "children": []
  }, {
    "title": "Sidebar",
    "slug": "sidebar",
    "children": []
  }, {
    "title": "SidebarProvider",
    "slug": "sidebar-provider",
    "children": []
  }, {
    "title": "Skeleton",
    "slug": "skeleton",
    "children": []
  }, {
    "title": "Slider",
    "slug": "slider",
    "children": []
  }, {
    "title": "SortIcon",
    "slug": "sort-icon",
    "children": []
  }, {
    "title": "SteppedProgress",
    "slug": "stepped-progress",
    "children": []
  }, {
    "title": "Switch",
    "slug": "switch",
    "children": []
  }, {
    "title": "Table",
    "slug": "table",
    "children": []
  }, {
    "title": "Tabs",
    "slug": "tabs",
    "children": []
  }, {
    "title": "Tag",
    "slug": "tag",
    "children": []
  }, {
    "title": "Tags",
    "slug": "tags",
    "children": []
  }, {
    "title": "Text",
    "slug": "text",
    "children": []
  }, {
    "title": "Textarea",
    "slug": "textarea",
    "children": []
  }, {
    "title": "TimeAgo",
    "slug": "time-ago",
    "children": []
  }, {
    "title": "Toast",
    "slug": "toast",
    "children": []
  }, {
    "title": "Tooltip",
    "slug": "tooltip",
    "children": []
  }, {
    "title": "Tree",
    "slug": "tree",
    "children": []
  }, {
    "title": "UploadIcon",
    "slug": "upload-icon",
    "children": []
  }, {
    "title": "Widget",
    "slug": "widget",
    "children": []
  }]
}, {
  "title": "Hooks",
  "slug": "hooks",
  "children": [{
    "title": "useDialogs",
    "slug": "use-dialogs",
    "children": []
  }, {
    "title": "useDisclosure",
    "slug": "use-disclosure",
    "children": []
  }, {
    "title": "useSidebar",
    "slug": "use-sidebar",
    "children": []
  }, {
    "title": "useToast",
    "slug": "use-toast",
    "children": []
  }]
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
<li parentName="ul">{`What is exported from `}<inlineCode parentName="li">{`webiny/admin/ui`}</inlineCode>{`?`}</li>
<li parentName="ul">{`How to import and use each exported item?`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`This page documents everything exported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode>{`. Import any of the items below directly from this path in your Webiny extensions.`}</p>
<p><strong parentName="p">{`Components`}</strong></p>
<SymbolList symbols={[{
      name: "Accordion",
      anchor: "accordion"
    }, {
      name: "Alert",
      anchor: "alert"
    }, {
      name: "AutoComplete",
      anchor: "auto-complete"
    }, {
      name: "Avatar",
      anchor: "avatar"
    }, {
      name: "Button",
      anchor: "button"
    }, {
      name: "Card",
      anchor: "card"
    }, {
      name: "Checkbox",
      anchor: "checkbox"
    }, {
      name: "CheckboxGroup",
      anchor: "checkbox-group"
    }, {
      name: "CloneIcon",
      anchor: "clone-icon"
    }, {
      name: "CodeEditor",
      anchor: "code-editor"
    }, {
      name: "ColorPicker",
      anchor: "color-picker"
    }, {
      name: "CopyButton",
      anchor: "copy-button"
    }, {
      name: "CreateIcon",
      anchor: "create-icon"
    }, {
      name: "DataList",
      anchor: "data-list"
    }, {
      name: "DataListModal",
      anchor: "data-list-modal"
    }, {
      name: "DataListWithSections",
      anchor: "data-list-with-sections"
    }, {
      name: "DataTable",
      anchor: "data-table"
    }, {
      name: "DelayedOnChange",
      anchor: "delayed-on-change"
    }, {
      name: "DeleteIcon",
      anchor: "delete-icon"
    }, {
      name: "Dialog",
      anchor: "dialog"
    }, {
      name: "DownloadIcon",
      anchor: "download-icon"
    }, {
      name: "Drawer",
      anchor: "drawer"
    }, {
      name: "DropdownMenu",
      anchor: "dropdown-menu"
    }, {
      name: "DynamicFieldset",
      anchor: "dynamic-fieldset"
    }, {
      name: "EditIcon",
      anchor: "edit-icon"
    }, {
      name: "FilePicker",
      anchor: "file-picker"
    }, {
      name: "FilterIcon",
      anchor: "filter-icon"
    }, {
      name: "Grid",
      anchor: "grid"
    }, {
      name: "HeaderBar",
      anchor: "header-bar"
    }, {
      name: "Heading",
      anchor: "heading"
    }, {
      name: "Icon",
      anchor: "icon"
    }, {
      name: "IconButton",
      anchor: "icon-button"
    }, {
      name: "IconPicker",
      anchor: "icon-picker"
    }, {
      name: "Image",
      anchor: "image"
    }, {
      name: "Input",
      anchor: "input"
    }, {
      name: "Label",
      anchor: "label"
    }, {
      name: "Link",
      anchor: "link"
    }, {
      name: "List",
      anchor: "list"
    }, {
      name: "ListIcon",
      anchor: "list-icon"
    }, {
      name: "Loader",
      anchor: "loader"
    }, {
      name: "LoginIcon",
      anchor: "login-icon"
    }, {
      name: "MultiAutoComplete",
      anchor: "multi-auto-complete"
    }, {
      name: "MultiFilePicker",
      anchor: "multi-file-picker"
    }, {
      name: "NextPageIcon",
      anchor: "next-page-icon"
    }, {
      name: "OptionsIcon",
      anchor: "options-icon"
    }, {
      name: "OverlayLoader",
      anchor: "overlay-loader"
    }, {
      name: "Popover",
      anchor: "popover"
    }, {
      name: "Portal",
      anchor: "portal"
    }, {
      name: "PreviousPageIcon",
      anchor: "previous-page-icon"
    }, {
      name: "ProgressBar",
      anchor: "progress-bar"
    }, {
      name: "Radio",
      anchor: "radio"
    }, {
      name: "RadioGroup",
      anchor: "radio-group"
    }, {
      name: "RangeSlider",
      anchor: "range-slider"
    }, {
      name: "RefreshIcon",
      anchor: "refresh-icon"
    }, {
      name: "ScrollArea",
      anchor: "scroll-area"
    }, {
      name: "Scrollbar",
      anchor: "scrollbar"
    }, {
      name: "ScrollBar",
      anchor: "scroll-bar"
    }, {
      name: "SegmentedControl",
      anchor: "segmented-control"
    }, {
      name: "Select",
      anchor: "select"
    }, {
      name: "Separator",
      anchor: "separator"
    }, {
      name: "Sidebar",
      anchor: "sidebar"
    }, {
      name: "SidebarProvider",
      anchor: "sidebar-provider"
    }, {
      name: "Skeleton",
      anchor: "skeleton"
    }, {
      name: "Slider",
      anchor: "slider"
    }, {
      name: "SortIcon",
      anchor: "sort-icon"
    }, {
      name: "SteppedProgress",
      anchor: "stepped-progress"
    }, {
      name: "Switch",
      anchor: "switch"
    }, {
      name: "Table",
      anchor: "table"
    }, {
      name: "Tabs",
      anchor: "tabs"
    }, {
      name: "Tag",
      anchor: "tag"
    }, {
      name: "Tags",
      anchor: "tags"
    }, {
      name: "Text",
      anchor: "text"
    }, {
      name: "Textarea",
      anchor: "textarea"
    }, {
      name: "TimeAgo",
      anchor: "time-ago"
    }, {
      name: "Toast",
      anchor: "toast"
    }, {
      name: "Tooltip",
      anchor: "tooltip"
    }, {
      name: "Tree",
      anchor: "tree"
    }, {
      name: "UploadIcon",
      anchor: "upload-icon"
    }, {
      name: "Widget",
      anchor: "widget"
    }]} mdxType="SymbolList" />
<p><strong parentName="p">{`Hooks`}</strong></p>
<SymbolList symbols={[{
      name: "useDialogs",
      anchor: "use-dialogs"
    }, {
      name: "useDisclosure",
      anchor: "use-disclosure"
    }, {
      name: "useSidebar",
      anchor: "use-sidebar"
    }, {
      name: "useToast",
      anchor: "use-toast"
    }]} mdxType="SymbolList" />
<_Heading level={2} id={"components"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Components</_Heading>
<_Heading level={3} id={"accordion"} nextElement={{
      "type": "paragraph"
    }}><code>Accordion</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { Accordion } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export const Accordion = withStaticProps(DecoratableAccordion, {
  Item: AccordionItem
});`}
</Editor>
<_Heading level={3} id={"alert"} nextElement={{
      "type": "paragraph"
    }}><code>Alert</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { Alert } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`const Alert = withStaticProps(makeDecoratable("AlertBase", AlertBase), {
  Action: AlertAction
});`}
</Editor>
<_Heading level={3} id={"auto-complete"} nextElement={{
      "type": "paragraph"
    }}><code>AutoComplete</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { AutoComplete } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`const AutoComplete = makeDecoratable("AutoComplete", DecoratableAutoComplete);`}
</Editor>
<_Heading level={3} id={"avatar"} nextElement={{
      "type": "paragraph"
    }}><code>Avatar</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { Avatar } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`const Avatar = withStaticProps(makeDecoratable("Avatar", AvatarBase), {
  Fallback: AvatarFallback,
  Image: AvatarImage
});`}
</Editor>
<_Heading level={3} id={"button"} nextElement={{
      "type": "paragraph"
    }}><code>Button</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { Button } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`const Button = makeDecoratable("Button", ButtonBase);`}
</Editor>
<_Heading level={3} id={"card"} nextElement={{
      "type": "paragraph"
    }}><code>Card</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { Card } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`const Card = withStaticProps(DecoratableCard, {
  ConfirmAction,
  CancelAction,
  Icon
});`}
</Editor>
<_Heading level={3} id={"checkbox"} nextElement={{
      "type": "paragraph"
    }}><code>Checkbox</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { Checkbox } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`const Checkbox = makeDecoratable("Checkbox", DecoratableCheckbox);`}
</Editor>
<_Heading level={3} id={"checkbox-group"} nextElement={{
      "type": "paragraph"
    }}><code>CheckboxGroup</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { CheckboxGroup } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`const CheckboxGroup = makeDecoratable("CheckboxGroup", DecoratableCheckboxGroup);`}
</Editor>
<_Heading level={3} id={"clone-icon"} nextElement={{
      "type": "paragraph"
    }}><code>CloneIcon</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { CloneIcon } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export const CloneIcon = (props: IconButtonProps) => {
    return (
        <IconButton
            icon={<List.Item.Icon icon={<Clone />} label={"Clone"} />}
            variant={"ghost"}
            size={"sm"}
            {...props}
        />
    );
};`}
</Editor>
<_Heading level={3} id={"code-editor"} nextElement={{
      "type": "paragraph"
    }}><code>CodeEditor</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { CodeEditor } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`const CodeEditor = makeDecoratable("CodeEditor", DecoratableCodeEditor);`}
</Editor>
<_Heading level={3} id={"color-picker"} nextElement={{
      "type": "paragraph"
    }}><code>ColorPicker</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { ColorPicker } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`const ColorPicker = makeDecoratable("ColorPicker", DecoratableIconPicker);`}
</Editor>
<_Heading level={3} id={"copy-button"} nextElement={{
      "type": "paragraph"
    }}><code>CopyButton</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { CopyButton } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`const CopyButton = makeDecoratable("CopyButton", CopyButtonBase);`}
</Editor>
<_Heading level={3} id={"create-icon"} nextElement={{
      "type": "paragraph"
    }}><code>CreateIcon</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { CreateIcon } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export const CreateIcon = (props: IconButtonProps) => {
    return (
        <IconButton
            icon={<List.Item.Icon icon={<Edit />} label={"Create"} />}
            variant={"ghost"}
            size={"sm"}
            {...props}
        />
    );
};`}
</Editor>
<_Heading level={3} id={"data-list"} nextElement={{
      "type": "paragraph"
    }}><code>DataList</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { DataList } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export const DataList = <TData,>(propsInput: DataListProps<TData>) => {
    let render: React.ReactNode | null;

    const props = useMemo(() => {
        return {
            ...defaultDataListProps,
            ...propsInput
        };
    }, [propsInput]);

    if (props.loading) {
        render = props.loader;
    } else if (isEmpty(props.data)) {
        render = props.noData;
    } else {
`}
</Editor>
<_Heading level={3} id={"data-list-modal"} nextElement={{
      "type": "paragraph"
    }}><code>DataListModal</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { DataListModal } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`const DataListModal = withStaticProps(BaseDataListModal, {
  Trigger: DataListModalTrigger,
  Content: DataListModalContent
});`}
</Editor>
<_Heading level={3} id={"data-list-with-sections"} nextElement={{
      "type": "paragraph"
    }}><code>DataListWithSections</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { DataListWithSections } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export const DataListWithSections = <TData,>(propsInput: DataListProps<TData>) => {
    let render: React.ReactNode | null;

    const props = useMemo(() => {
        return {
            ...dataListWithSectionsDefaultProps,
            ...propsInput
        };
    }, [propsInput]);

    if (props.loading) {
        render = props.loader;
    } else if (isEmpty(props.data)) {
        render = prop`}
</Editor>
<_Heading level={3} id={"data-table"} nextElement={{
      "type": "paragraph"
    }}><code>DataTable</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { DataTable } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`const DataTable = makeDecoratable("DataTable", DecoratableDataTable);`}
</Editor>
<_Heading level={3} id={"delayed-on-change"} nextElement={{
      "type": "paragraph"
    }}><code>DelayedOnChange</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { DelayedOnChange } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export const DelayedOnChange = <TValue = any>({
    children,
    ...other
}: DelayedOnChangeProps<TValue>) => {
    const firstMount = useRef(true);
    const { onChange, delay = 400, value: initialValue } = other;
    const [value, setValue] = useState<TValue | undefined>(initialValue);
    // Sync state and props
    useEffect(() => {
        // Do not update local state, if the incoming value`}
</Editor>
<_Heading level={3} id={"delete-icon"} nextElement={{
      "type": "paragraph"
    }}><code>DeleteIcon</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { DeleteIcon } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export const DeleteIcon = (props: IconButtonProps) => {
    return (
        <IconButton
            icon={<List.Item.Icon icon={<Delete />} label={"Delete"} />}
            variant={"ghost"}
            size={"sm"}
            {...props}
        />
    );
};`}
</Editor>
<_Heading level={3} id={"dialog"} nextElement={{
      "type": "paragraph"
    }}><code>Dialog</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { Dialog } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`const Dialog = withStaticProps(DecoratableDialog, {
  ConfirmAction,
  CancelAction,
  Icon,
  Close: DialogClose
});`}
</Editor>
<_Heading level={3} id={"download-icon"} nextElement={{
      "type": "paragraph"
    }}><code>DownloadIcon</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { DownloadIcon } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export const DownloadIcon = (props: IconButtonProps) => {
    return (
        <IconButton
            icon={<List.Item.Icon icon={<Download />} label={"Download"} />}
            variant={"ghost"}
            size={"sm"}
            {...props}
        />
    );
};`}
</Editor>
<_Heading level={3} id={"drawer"} nextElement={{
      "type": "paragraph"
    }}><code>Drawer</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { Drawer } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`const Drawer = withStaticProps(DecoratableDrawer, {
  ConfirmButton,
  CancelButton,
  Icon
});`}
</Editor>
<_Heading level={3} id={"dropdown-menu"} nextElement={{
      "type": "paragraph"
    }}><code>DropdownMenu</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { DropdownMenu } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`const DropdownMenu = withStaticProps(DecoratableDropdownMenu, {
  Separator: DropdownMenuSeparator,
  Label: DropdownMenuLabel,
  Group: DropdownMenuGroup,
  Item: DropdownMenuItem,
  Link: DropdownMenuLink,
  CheckboxItem: DropdownMenuCheckboxItem
});`}
</Editor>
<_Heading level={3} id={"dynamic-fieldset"} nextElement={{
      "type": "paragraph"
    }}><code>DynamicFieldset</code></_Heading>
<p><strong parentName="p">{`Class`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { DynamicFieldset } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`class DynamicFieldset extends React.Component<DynamicFieldsetProps> {
    static defaultProps: Partial<DynamicFieldsetProps> =;
    header: React.ReactNode = null;
    footer: React.ReactNode = null;
    rows: React.ReactNode = null;
    empty: React.ReactNode = null;
    actions =;
    removeData = (index: number) =>;
    addData = (index = -1) =>;
    renderHeader = (cb: () => React.ReactNode): React.ReactNode =>;
    renderFooter = (cb: () => React.ReactNode): React.ReactNode =>;
    renderRow = (cb: ChildrenRenderPropRowCallable): React.ReactNode =>;
    renderEmpty = (cb: () => React.ReactNode): React.ReactNode =>;
    public renderComponent(): React.ReactNode;
    public override render();
}`}
</Editor>
<_Heading level={3} id={"edit-icon"} nextElement={{
      "type": "paragraph"
    }}><code>EditIcon</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { EditIcon } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export const EditIcon = (props: IconButtonProps) => {
    return (
        <IconButton
            icon={<List.Item.Icon icon={<Edit />} label={"Edit"} />}
            variant={"ghost"}
            size={"sm"}
            {...props}
        />
    );
};`}
</Editor>
<_Heading level={3} id={"file-picker"} nextElement={{
      "type": "paragraph"
    }}><code>FilePicker</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { FilePicker } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`const FilePicker = withStaticProps(DecoratableFilePicker, {
  Preview: {
    Image: ImagePreview,
    RichItem: RichItemPreview,
    TextOnly: TextOnlyPreview
  }
});`}
</Editor>
<_Heading level={3} id={"filter-icon"} nextElement={{
      "type": "paragraph"
    }}><code>FilterIcon</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { FilterIcon } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export const FilterIcon = (props: IconButtonProps) => {
    return (
        <IconButton
            icon={<List.Item.Icon icon={<Filter />} label={"Filter"} />}
            variant={"ghost"}
            size={"sm"}
            {...props}
        />
    );
};`}
</Editor>
<_Heading level={3} id={"grid"} nextElement={{
      "type": "paragraph"
    }}><code>Grid</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { Grid } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`const Grid = withStaticProps(DecoratableGrid, { Column });`}
</Editor>
<_Heading level={3} id={"header-bar"} nextElement={{
      "type": "paragraph"
    }}><code>HeaderBar</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { HeaderBar } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`const HeaderBar = makeDecoratable("HeaderBar", HeaderBarBase);`}
</Editor>
<_Heading level={3} id={"heading"} nextElement={{
      "type": "paragraph"
    }}><code>Heading</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { Heading } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`const Heading = makeDecoratable("Heading", HeadingBase);`}
</Editor>
<_Heading level={3} id={"icon"} nextElement={{
      "type": "paragraph"
    }}><code>Icon</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { Icon } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`const Icon = makeDecoratable("Icon", IconBase);`}
</Editor>
<_Heading level={3} id={"icon-button"} nextElement={{
      "type": "paragraph"
    }}><code>IconButton</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { IconButton } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`const IconButton = makeDecoratable("IconButton", DecoratableIconButton);`}
</Editor>
<_Heading level={3} id={"icon-picker"} nextElement={{
      "type": "paragraph"
    }}><code>IconPicker</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { IconPicker } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`const IconPicker = makeDecoratable("IconPicker", DecoratableIconPicker);`}
</Editor>
<_Heading level={3} id={"image"} nextElement={{
      "type": "paragraph"
    }}><code>Image</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { Image } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`const Image = ({ ...rest }: ImageProps) => {
    const finalProps = { ...rest };
    const srcSet = finalProps.srcSet;
    if (srcSet && typeof srcSet === "object") {
        finalProps.srcSet = Object.keys(srcSet)
            .map(key => \`\${srcSet[key]} \${key}\`)
            .join(", ");
    }

    return <img {...finalProps} />;
};`}
</Editor>
<_Heading level={3} id={"input"} nextElement={{
      "type": "paragraph"
    }}><code>Input</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { Input } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`const Input = makeDecoratable("Input", DecoratableInput);`}
</Editor>
<_Heading level={3} id={"label"} nextElement={{
      "type": "paragraph"
    }}><code>Label</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { Label } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`const Label = makeDecoratable("Label", LabelBase);`}
</Editor>
<_Heading level={3} id={"link"} nextElement={{
      "type": "paragraph"
    }}><code>Link</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { Link } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export const Link = makeDecoratable("Link", LinkBase);`}
</Editor>
<_Heading level={3} id={"list"} nextElement={{
      "type": "paragraph"
    }}><code>List</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { List } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`const List = withStaticProps(makeDecoratable("List", DecoratableList), {
  Item: ListItem
});`}
</Editor>
<_Heading level={3} id={"list-icon"} nextElement={{
      "type": "paragraph"
    }}><code>ListIcon</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { ListIcon } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export const ListIcon = (props: IconButtonProps) => {
    return (
        <IconButton
            icon={<List.Item.Icon icon={<ListView />} label={"List"} />}
            variant={"ghost"}
            size={"sm"}
            {...props}
        />
    );
};`}
</Editor>
<_Heading level={3} id={"loader"} nextElement={{
      "type": "paragraph"
    }}><code>Loader</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { Loader } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`const Loader = makeDecoratable("Loader", DecoratableLoader);`}
</Editor>
<_Heading level={3} id={"login-icon"} nextElement={{
      "type": "paragraph"
    }}><code>LoginIcon</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { LoginIcon } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export const LoginIcon = (props: IconButtonProps) => {
    return (
        <IconButton
            icon={<List.Item.Icon icon={<Login />} label={"Login"} />}
            variant={"ghost"}
            size={"sm"}
            {...props}
        />
    );
};`}
</Editor>
<_Heading level={3} id={"multi-auto-complete"} nextElement={{
      "type": "paragraph"
    }}><code>MultiAutoComplete</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { MultiAutoComplete } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`const MultiAutoComplete = makeDecoratable("MultiAutoComplete", DecoratableMultiAutoComplete);`}
</Editor>
<_Heading level={3} id={"multi-file-picker"} nextElement={{
      "type": "paragraph"
    }}><code>MultiFilePicker</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { MultiFilePicker } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`const MultiFilePicker = withStaticProps(DecoratableMultiFilePicker, {
  Preview: {
    Image: ImagePreview,
    RichItem: RichItemPreview,
    TextOnly: TextOnlyPreview
  }
});`}
</Editor>
<_Heading level={3} id={"next-page-icon"} nextElement={{
      "type": "paragraph"
    }}><code>NextPageIcon</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { NextPageIcon } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export const NextPageIcon = (props: IconButtonProps) => {
    return (
        <IconButton
            icon={<List.Item.Icon icon={<NavigateAfter />} label={"Next Page"} />}
            variant={"ghost"}
            size={"sm"}
            {...props}
        />
    );
};`}
</Editor>
<_Heading level={3} id={"options-icon"} nextElement={{
      "type": "paragraph"
    }}><code>OptionsIcon</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { OptionsIcon } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export const OptionsIcon = (props: IconButtonProps) => {
    return (
        <IconButton
            icon={<List.Item.Icon icon={<Tune />} label={"Options"} />}
            variant={"ghost"}
            size={"sm"}
            {...props}
        />
    );
};`}
</Editor>
<_Heading level={3} id={"overlay-loader"} nextElement={{
      "type": "paragraph"
    }}><code>OverlayLoader</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { OverlayLoader } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`const OverlayLoader = makeDecoratable("OverlayLoader", DecoratableOverlayLoader);`}
</Editor>
<_Heading level={3} id={"popover"} nextElement={{
      "type": "paragraph"
    }}><code>Popover</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { Popover } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`const Popover = makeDecoratable("Popover", DecoratablePopover);`}
</Editor>
<_Heading level={3} id={"portal"} nextElement={{
      "type": "paragraph"
    }}><code>Portal</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { Portal } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`const Portal = PortalPrimitive.Root;`}
</Editor>
<_Heading level={3} id={"previous-page-icon"} nextElement={{
      "type": "paragraph"
    }}><code>PreviousPageIcon</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { PreviousPageIcon } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export const PreviousPageIcon = (props: IconButtonProps) => {
    return (
        <IconButton
            icon={<List.Item.Icon icon={<NavigateBefore />} label={"Previous Page"} />}
            variant={"ghost"}
            size={"sm"}
            {...props}
        />
    );
};`}
</Editor>
<_Heading level={3} id={"progress-bar"} nextElement={{
      "type": "paragraph"
    }}><code>ProgressBar</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { ProgressBar } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`const ProgressBar = makeDecoratable("ProgressBar", DecoratableProgressBar);`}
</Editor>
<_Heading level={3} id={"radio"} nextElement={{
      "type": "paragraph"
    }}><code>Radio</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { Radio } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`const Radio = makeDecoratable("Radio", DecoratableRadio);`}
</Editor>
<_Heading level={3} id={"radio-group"} nextElement={{
      "type": "paragraph"
    }}><code>RadioGroup</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { RadioGroup } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`const RadioGroup = makeDecoratable("RadioGroup", DecoratableRadioGroup);`}
</Editor>
<_Heading level={3} id={"range-slider"} nextElement={{
      "type": "paragraph"
    }}><code>RangeSlider</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { RangeSlider } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`const RangeSlider = makeDecoratable("RangeSlider", DecoratableRangeSlider);`}
</Editor>
<_Heading level={3} id={"refresh-icon"} nextElement={{
      "type": "paragraph"
    }}><code>RefreshIcon</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { RefreshIcon } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export const RefreshIcon = (props: IconButtonProps) => {
    return (
        <IconButton
            icon={<List.Item.Icon icon={<AutoRenew />} label={"Refresh"} />}
            variant={"ghost"}
            size={"sm"}
            {...props}
        />
    );
};`}
</Editor>
<_Heading level={3} id={"scroll-area"} nextElement={{
      "type": "paragraph"
    }}><code>ScrollArea</code></_Heading>
<p><strong parentName="p">{`Function`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { ScrollArea } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`function ScrollArea(`}
</Editor>
<_Heading level={3} id={"scrollbar"} nextElement={{
      "type": "paragraph"
    }}><code>Scrollbar</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { Scrollbar } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`const Scrollbar = (props: ScrollbarProps) => {
    return <Scrollbars {...props} />;
};`}
</Editor>
<_Heading level={3} id={"scroll-bar"} nextElement={{
      "type": "paragraph"
    }}><code>ScrollBar</code></_Heading>
<p><strong parentName="p">{`Function`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { ScrollBar } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`function ScrollBar(`}
</Editor>
<_Heading level={3} id={"segmented-control"} nextElement={{
      "type": "paragraph"
    }}><code>SegmentedControl</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { SegmentedControl } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`const SegmentedControl = makeDecoratable("SegmentedControl", DecoratableSegmentedControl);`}
</Editor>
<_Heading level={3} id={"select"} nextElement={{
      "type": "paragraph"
    }}><code>Select</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { Select } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`const Select = makeDecoratable("Select", DecoratableSelect);`}
</Editor>
<_Heading level={3} id={"separator"} nextElement={{
      "type": "paragraph"
    }}><code>Separator</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { Separator } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`const Separator = makeDecoratable("Separator", SeparatorBase);`}
</Editor>
<_Heading level={3} id={"sidebar"} nextElement={{
      "type": "paragraph"
    }}><code>Sidebar</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { Sidebar } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`const Sidebar = withStaticProps(DecoratableSidebar, {
  Item: SidebarMenuItem,
  Link: SidebarMenuLink,
  Group: SidebarMenuGroup,
  Icon: SidebarIcon
});`}
</Editor>
<_Heading level={3} id={"sidebar-provider"} nextElement={{
      "type": "paragraph"
    }}><code>SidebarProvider</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { SidebarProvider } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`const SidebarProvider = ({
    className,
    children,
    state: cachedState,
    onChangeState,
    ...props
}: SidebarProviderProps) => {
    const [sidebarState, setSidebarState] = React.useState<SidebarState>(() =>
        createInitialSidebarState(cachedState)
    );
    const [pinnedItemsData, setPinnedItemsData] = React.useState<Map<string, PinnedItemData>>(
        new Map()
    );

`}
</Editor>
<_Heading level={3} id={"skeleton"} nextElement={{
      "type": "paragraph"
    }}><code>Skeleton</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { Skeleton } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`const Skeleton = makeDecoratable("Skeleton", DecoratableSkeleton);`}
</Editor>
<_Heading level={3} id={"slider"} nextElement={{
      "type": "paragraph"
    }}><code>Slider</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { Slider } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`const Slider = makeDecoratable("Slider", DecoratableSlider);`}
</Editor>
<_Heading level={3} id={"sort-icon"} nextElement={{
      "type": "paragraph"
    }}><code>SortIcon</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { SortIcon } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export const SortIcon = (props: IconButtonProps) => {
    return (
        <IconButton
            icon={<List.Item.Icon icon={<Sort />} label={"Sort"} />}
            variant={"ghost"}
            size={"sm"}
            {...props}
        />
    );
};`}
</Editor>
<_Heading level={3} id={"stepped-progress"} nextElement={{
      "type": "paragraph"
    }}><code>SteppedProgress</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { SteppedProgress } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`const SteppedProgress = withStaticProps(BaseSteppedProgress, {
  Item: SteppedProgressItem
});`}
</Editor>
<_Heading level={3} id={"switch"} nextElement={{
      "type": "paragraph"
    }}><code>Switch</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { Switch } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`const Switch = makeDecoratable("Switch", DecoratableSwitch);`}
</Editor>
<_Heading level={3} id={"table"} nextElement={{
      "type": "paragraph"
    }}><code>Table</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { Table } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`const Table = withStaticProps(BaseTable, {
  Body,
  Caption,
  Cell,
  Direction,
  Footer,
  Head,
  Header,
  Resizer,
  Row
});`}
</Editor>
<_Heading level={3} id={"tabs"} nextElement={{
      "type": "paragraph"
    }}><code>Tabs</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { Tabs } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`const Tabs = withStaticProps(BaseTabs, {
  Tab
});`}
</Editor>
<_Heading level={3} id={"tag"} nextElement={{
      "type": "paragraph"
    }}><code>Tag</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { Tag } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`const Tag = makeDecoratable("Tag", DecoratableTag);`}
</Editor>
<_Heading level={3} id={"tags"} nextElement={{
      "type": "paragraph"
    }}><code>Tags</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { Tags } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`const Tags = makeDecoratable("Tags", DecoratableTags);`}
</Editor>
<_Heading level={3} id={"text"} nextElement={{
      "type": "paragraph"
    }}><code>Text</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { Text } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`const Text = makeDecoratable("Text", TextBase);`}
</Editor>
<_Heading level={3} id={"textarea"} nextElement={{
      "type": "paragraph"
    }}><code>Textarea</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { Textarea } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`const Textarea = makeDecoratable("Textarea", DecoratableTextarea);`}
</Editor>
<_Heading level={3} id={"time-ago"} nextElement={{
      "type": "paragraph"
    }}><code>TimeAgo</code></_Heading>
<p><strong parentName="p">{`Class`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { TimeAgo } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export default class TimeAgo extends React.PureComponent<TimeAgoProps> {
    static defaultProps:;
    dom: HTMLTimeElement;
    componentDidMount(): void;
    componentDidUpdate(): void;
    renderTimeAgo(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}`}
</Editor>
<_Heading level={3} id={"toast"} nextElement={{
      "type": "paragraph"
    }}><code>Toast</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { Toast } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`const Toast = withStaticProps(makeDecoratable("Toast", DecoratableToast), {
    Title: ToastTitle,
    Description: ToastDescription,
    Actions: ToastActions,
    Provider: (props: ToasterProps) => (
        <Portal>
            <Toaster expand={true} duration={6000} position={"bottom-left"} {...props} />
        </Portal>
    )
});`}
</Editor>
<_Heading level={3} id={"tooltip"} nextElement={{
      "type": "paragraph"
    }}><code>Tooltip</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { Tooltip } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`const Tooltip = withStaticProps(makeDecoratable("Tooltip", DecoratableTooltip), {
  Provider: TooltipProvider
});`}
</Editor>
<_Heading level={3} id={"tree"} nextElement={{
      "type": "paragraph"
    }}><code>Tree</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { Tree } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`const Tree = withStaticProps(DecoratableTree, {
  Item
});`}
</Editor>
<_Heading level={3} id={"upload-icon"} nextElement={{
      "type": "paragraph"
    }}><code>UploadIcon</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { UploadIcon } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export const UploadIcon = (props: IconButtonProps) => {
    return (
        <IconButton
            icon={<List.Item.Icon icon={<Upload />} label={"Upload"} />}
            variant={"ghost"}
            size={"sm"}
            {...props}
        />
    );
};`}
</Editor>
<_Heading level={3} id={"widget"} nextElement={{
      "type": "paragraph"
    }}><code>Widget</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { Widget } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`const Widget = withStaticProps(DecoratableWidget, {
  Action: WidgetAction,
  Icon
});`}
</Editor>
<_Heading level={2} id={"hooks"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Hooks</_Heading>
<_Heading level={3} id={"use-dialogs"} nextElement={{
      "type": "paragraph"
    }}><code>useDialogs</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { useDialogs } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export const useDialogs = () => {
  const context = useContext(DialogsContext);

  if (!context) {
    throw new Error("useDialogs must be used within a DialogsContext.Provider");
  }

  return context;
};`}
</Editor>
<_Heading level={3} id={"use-disclosure"} nextElement={{
      "type": "paragraph"
    }}><code>useDisclosure</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { useDisclosure } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`export const useDisclosure = <TData = undefined>(isOpenDefault = false) => {
    const [isOpen, defaultSetIsOpen] = useState(isOpenDefault);
    const [data, setData] = useState<TData | null>(null);

    const setIsOpen = useCallback(
        (isOpen: boolean | ((prev: boolean) => boolean), data?: TData) => {
            defaultSetIsOpen(isOpen);
            if (typeof data !== "undefined") {
`}
</Editor>
<_Heading level={3} id={"use-sidebar"} nextElement={{
      "type": "paragraph"
    }}><code>useSidebar</code></_Heading>
<p><strong parentName="p">{`Function`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { useSidebar } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`function useSidebar();`}
</Editor>
<_Heading level={3} id={"use-toast"} nextElement={{
      "type": "paragraph"
    }}><code>useToast</code></_Heading>
<p><strong parentName="p">{`Constant`}</strong>{` — imported from `}<inlineCode parentName="p">{`webiny/admin/ui`}</inlineCode></p>
<Editor title="" lang="typescript" mdxType="Editor">
{`import { useToast } from "webiny/admin/ui";`}
</Editor>
<Editor title="" lang="typescript" mdxType="Editor">
{`const useToast = () => {
    const getTitle = React.useCallback((title: React.ReactElement<typeof ToastTitle> | string) => {
        return typeof title === "string" ? <ToastTitle text={title} /> : title;
    }, []);

    const getDescription = React.useCallback(
        (description: React.ReactElement<typeof ToastDescription> | string | undefined) => {
            return typeof description === "`}
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