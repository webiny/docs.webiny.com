/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { CanIUseThis } from "@/components/CanIUseThis";
import { WhatYouWillLearn } from "@/components/WhatYouWillLearn";
import fmFilters from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/file-manager/extending/assets/fm-filters.png";
import fmToggleFilter from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/file-manager/extending/assets/fm-toggle-filter.gif";
import fmDropdownFilter from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/file-manager/extending/assets/fm-dropdown-filter.gif";
import fmPositioBefore from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/file-manager/extending/assets/fm-position-before.png";
import fmDiscoverFilters from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/file-manager/extending/assets/fm-discover-filters.png";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Customize File Filters",
  "description": "Learn how to add, replace, or remove filters in the File Manager.",
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
  "title": "Add a Filter",
  "slug": "add-a-filter",
  "children": [{
    "title": "Simple Filter",
    "slug": "simple-filter",
    "children": []
  }, {
    "title": "Advanced Filter",
    "slug": "advanced-filter",
    "children": []
  }]
}, {
  "title": "Discover Filters",
  "slug": "discover-filters",
  "children": []
}, {
  "title": "Position a Filter",
  "slug": "position-a-filter",
  "children": []
}, {
  "title": "Remove a Filter",
  "slug": "remove-a-filter",
  "children": []
}, {
  "title": "Replace a Filter",
  "slug": "replace-a-filter",
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










<CanIUseThis since={"5.x"} mdxType="CanIUseThis" />
<WhatYouWillLearn mdxType="WhatYouWillLearn">
<ul>
<li parentName="ul">{`how to add a custom filter to the File Manager`}</li>
<li parentName="ul">{`how to discover existing filter names`}</li>
<li parentName="ul">{`how to change the position of filters, remove, or replace an existing filter`}</li>
</ul>
</WhatYouWillLearn>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`By default, File Manager offers a single built-in filter, to help you quickly filter files based on their type (images, documents, videos). To customize filters, you need to use the `}<inlineCode parentName="p">{`FileManagerViewConfig`}</inlineCode>{` component. For this article, we will use the `}<inlineCode parentName="p">{`Filter`}</inlineCode>{` component, located in the `}<inlineCode parentName="p">{`Browser`}</inlineCode>{` namespace.`}</p>
<p>{`Browser is the main area of the File Manager, where users browse files, apply filters, perform searching, organize files into folders, upload new files, etc.`}</p>
<Image src={fmFilters} title="Browser and the built-in filter by type" mdxType="Image" />
<_Heading level={2} id={"add-a-filter"} nextElement={{
      "type": "paragraph"
    }}>Add a Filter</_Heading>
<p>{`To add a new filter, you need to use the `}<inlineCode parentName="p">{`FileManagerViewConfig`}</inlineCode>{` component and mount it within your `}<inlineCode parentName="p">{`Admin`}</inlineCode>{` app. Your filter is just a regular React element, so it can render anything.`}</p>
<Editor title="apps/admin/src/App.tsx" lang="diff-tsx" mdxType="Editor">
{`import React from "react";
import { Admin } from "@webiny/app-serverless-cms";
import { Cognito } from "@webiny/app-admin-users-cognito";
+ import { FileManagerViewConfig } from "@webiny/app-file-manager";
import "./App.scss";

+ // You can destructure child components to make the code more readable and easier to work with.
+ const { Browser } = FileManagerViewConfig;

+ const DemoFilter = () => {
+   return <span>Demo Filter</span>;
+ }

export const App = () => {
    return (
      <Admin>
        <Cognito />
+       <FileManagerViewConfig>
+         <Browser.Filter name={"new-filter"} element={<DemoFilter />} />
+       </FileManagerViewConfig>
      </Admin>
    );
};`}
</Editor>
<p>{`Next time you open your File Manager, and expand the filters bar, you’ll see your new element there. This is the whole process of registering a new filter element. In the following sections, we’ll focus on implementing actual filtering.`}</p>
<_Heading level={3} id={"simple-filter"} nextElement={{
      "type": "paragraph"
    }}>Simple Filter</_Heading>
<p>{`The following example shows how to implement a filter that toggles between “all files” and “large files”. For this example, we treat all files larger than 200KB as “large files”. Note that we are only showing the actual filter implementation. To see the filter registration
process, revisit the previous section.`}</p>
<Editor title="apps/admin/src/App.tsx" lang="tsx" mdxType="Editor">
{`import { useBind } from "@webiny/form";
import { ButtonSecondary } from "@webiny/ui/Button";

const DemoFilter = () => {
  const bind = useBind({
    name: "size_gt"
  });

  const toggleFilter = () => {
    bind.onChange(bind.value ? undefined : 204800);
  };

  return (
    <ButtonSecondary onClick={toggleFilter}>
      {bind.value ? "Show All Files" : "Show Large Files"}
    </ButtonSecondary>
  );
};`}
</Editor>
<p>{`Under the hood, filters are handled via a regular form component. This means that we can simply hook into the form to set new filter values. For that, we’re using the `}<inlineCode parentName="p">{`useBind`}</inlineCode>{` hook, and give it a name. This `}<inlineCode parentName="p">{`name`}</inlineCode>{` will become a key within the form data object, which will in turn be passed to the GraphQL query. To unset a filter, we simply set `}<inlineCode parentName="p">{`undefined`}</inlineCode>{`. On button click, we toggle between the 2 values, and also show a label that corresponds to the current state of the filter.`}</p>
<Image src={fmToggleFilter} title="Toggle Filter in Action" mdxType="Image" />
<_Heading level={3} id={"advanced-filter"} nextElement={{
      "type": "paragraph"
    }}>Advanced Filter</_Heading>
<p>{`Sometimes, you need to implement filtering logic that is a bit more complex than just setting a single value. The following example shows a filter in form of a dropdown menu, where each option needs to use a different GraphQL query operator. `}<inlineCode parentName="p">{`> 200KB`}</inlineCode>{` needs to use the `}<inlineCode parentName="p">{`size_gt`}</inlineCode>{` key, while `}<inlineCode parentName="p">{`< 200KB`}</inlineCode>{` needs to use the `}<inlineCode parentName="p">{`size_lt`}</inlineCode>{` key. This cannot be achieved with simple form binding.`}</p>
<p>{`To correctly format our filters, we’ll use the `}<inlineCode parentName="p">{`Browser.FiltersToWhere`}</inlineCode>{` component to register our custom converter, which will allow you to convert form data to a valid GraphQL query input. With this approach, you have full control over values that will be passed to the API, when the user interacts with the filters UI.`}</p>
<Editor title="apps/admin/src/App.tsx" lang="tsx" mdxType="Editor">
{`import { useBind } from "@webiny/form";
import { Select } from "@webiny/ui/Select";

export const FilterBySize = () => {
  const bind = useBind({
    name: "size",
    defaultValue: "all",
    beforeChange(value, cb) {
      cb(value === "all" ? undefined : value);
    }
  });

  const options = [
    { label: "All", value: "all" },
    { label: "> 200KB", value: "gt:204800" },
    { label: "< 200KB", value: "lt:204800" }
  ];

  return <Select {...bind} placeholder={"Filter by size"} options={options} size="medium" />;
};

const convertFilters = ({ size, ...rest }: any) => {
  if (!size) {
    return rest;
  }

  const [operator, value] = size.split(":");
  return { ...rest, [\`size_\${operator}\`]: parseInt(value) };
};

/* Register your custom filter, and the filters converter. */
<FileManagerViewConfig>
  <Browser.Filter name={"size"} element={<FilterBySize />} />
  <Browser.FiltersToWhere converter={convertFilters} />
</FileManagerViewConfig>;`}
</Editor>
<Image src={fmDropdownFilter} title="Dropdown Filter in Action" mdxType="Image" />
<Alert type={"info"} title={"Multiple Converters"} mdxType="Alert">
  You can add as many converters as you need. The output of the previous converter will be passed as
  an input to the next converter.
</Alert>
<_Heading level={2} id={"discover-filters"} nextElement={{
      "type": "paragraph"
    }}>Discover Filters</_Heading>
<p>{`This section demonstrates how you can discover the names of existing filters. This is important for further sections on positioning, removing, and replacing filters.`}</p>
<p>{`The easiest way to discover existing filters is to use the React Dev Tools plugins for your browser, and look for the `}<inlineCode parentName="p">{`Filters`}</inlineCode>{` element. From there, you can either look for `}<inlineCode parentName="p">{`filters`}</inlineCode>{` props, or look at the child elements and their keys:`}</p>
<Image src={fmDiscoverFilters} title="Discover Existing Filters" mdxType="Image" />
<_Heading level={2} id={"position-a-filter"} nextElement={{
      "type": "paragraph"
    }}>Position a Filter</_Heading>
<p>{`To position your custom filter before or after an existing filter, you can use the `}<inlineCode parentName="p">{`before`}</inlineCode>{` and `}<inlineCode parentName="p">{`after`}</inlineCode>{` props on the `}<inlineCode parentName="p">{`<Filter>`}</inlineCode>{` element:`}</p>
<Editor title="apps/admin/src/App.tsx" lang="tsx" mdxType="Editor">
{`<FileManagerViewConfig>
  <Browser.Filter name={"size"} element={<FilterBySize />} before={"type"} />
</FileManagerViewConfig>`}
</Editor>
<Image src={fmPositioBefore} title="Position Your Filter Before Another Filter" mdxType="Image" />
<_Heading level={2} id={"remove-a-filter"} nextElement={{
      "type": "paragraph"
    }}>Remove a Filter</_Heading>
<p>{`Sometimes you might want to remove an existing filter. All you need to do is reference the filter by name, and pass a `}<inlineCode parentName="p">{`remove`}</inlineCode>{` prop to the `}<inlineCode parentName="p">{`<Filter>`}</inlineCode>{` element:`}</p>
<Editor title="apps/admin/src/App.tsx" lang="tsx" mdxType="Editor">
{`<FileManagerViewConfig>
  <Browser.Filter name={"type"} remove />
</FileManagerViewConfig>`}
</Editor>
<_Heading level={2} id={"replace-a-filter"} nextElement={{
      "type": "paragraph"
    }}>Replace a Filter</_Heading>
<p>{`To replace an existing filter with a new filter element, you need to reference the existing filter by name, and pass a new element via the `}<inlineCode parentName="p">{`element`}</inlineCode>{` prop:`}</p>
<Editor title="apps/admin/src/App.tsx" lang="tsx" mdxType="Editor">
{`<FileManagerViewConfig>
  <Browser.Filter name={"type"} element={<span>A new filter!</span>} />
</FileManagerViewConfig>`}
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