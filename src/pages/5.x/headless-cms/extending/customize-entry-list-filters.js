/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import hcmsFilters from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/extending/assets/hcms-filters.png";
import hcmsToggleFilter from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/extending/assets/hcms-toggle-filter.gif";
import hcmsDropdownFilter from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/extending/assets/hcms-dropdown-filter.gif";
import hcmsDiscoverFilters from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/extending/assets/hcms-discover-filters.png";
import hcmsPositionBefore from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/extending/assets/hcms-position-before.png";
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Customize Entry List Filters",
  "description": "Learn how to add, replace, or remove filters in the Entry List.",
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
  "title": "Discovering Filters",
  "slug": "discovering-filters",
  "children": []
}, {
  "title": "Positioning a Filter",
  "slug": "positioning-a-filter",
  "children": []
}, {
  "title": "Removing a Filter",
  "slug": "removing-a-filter",
  "children": []
}, {
  "title": "Replacing a Filter",
  "slug": "replacing-a-filter",
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








<Alert type="info" title="Can I Use This?" mdxType="Alert">
<p>{`This feature is available since Webiny `}<strong parentName="p">{`v5.x`}</strong>{`.`}</p>
</Alert>
<Alert type="success" title="What you'll learn" mdxType="Alert">
<ul>
<li parentName="ul">{`how to add a custom filter to the Entry List`}</li>
<li parentName="ul">{`how to discover existing filter names`}</li>
<li parentName="ul">{`how to change the position of filters, remove, or replace an existing filter`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`By default, Headless CMS offers a single built-in filter to help you quickly filter entries based on their status (draft, published, unpublished).`}</p>
<p>{`To work with filters, you need to use the `}<inlineCode parentName="p">{`ContentEntryListConfig`}</inlineCode>{` component. For this article, we will use the `}<inlineCode parentName="p">{`Filter`}</inlineCode>{` component, located in the `}<inlineCode parentName="p">{`Browser`}</inlineCode>{` namespace.`}</p>
<Editor title="apps/admin/src/App.tsx" lang="diff-tsx" mdxType="Editor">
{`import React from "react";
import { Admin } from "@webiny/app-serverless-cms";
import { Cognito } from "@webiny/app-admin-users-cognito";
+ import { ContentEntryListConfig } from "@webiny/app-headless-cms";
import "./App.scss";

+ // You can destructure child components to make the code more readable and easier to work with.
+ const { Browser } = ContentEntryListConfig;

export const App = () => {
    return (
      <Admin>
        <Cognito />
+       <ContentEntryListConfig>
+          <Browser.Filter name={"demo-filter"} element={<span>Demo Filter</span>} />
+       </ContentEntryListConfig>
      </Admin>
    );
};`}
</Editor>
<p>{`In the admin app, Browser is the main area of a Content Model Entry List, where users browse entries, apply filters, perform searching, organize entries into folders, create new entries, etc.`}</p>
<Image src={hcmsFilters} title="Browser and the built-in filter by status" mdxType="Image" />
<Alert type="info" title="Content entry setup" mdxType="Alert">
<p>{`The code examples below are based on a content model called `}<inlineCode parentName="p">{`Property`}</inlineCode>{` with the following fields:`}</p>
<ul>
<li parentName="ul"><inlineCode parentName="li">{`title`}</inlineCode>{` text input`}</li>
<li parentName="ul"><inlineCode parentName="li">{`price`}</inlineCode>{` number input`}</li>
</ul>
</Alert>
<_Heading level={2} id={"add-a-filter"} nextElement={{
      "type": "paragraph"
    }}>Add a Filter</_Heading>
<p>{`To add a new filter, you need a regular React element to pass to the `}<inlineCode parentName="p">{`Browser.Filter`}</inlineCode>{` component through the `}<inlineCode parentName="p">{`element`}</inlineCode>{` prop. You must also include the `}<inlineCode parentName="p">{`name`}</inlineCode>{` prop, which serves as a unique identifier, enabling further interactions, such as positioning, removing, and replacing.`}</p>
<Editor title="apps/admin/src/App.tsx" lang="tsx" mdxType="Editor">
{`import { ContentEntryListConfig } from "@webiny/app-headless-cms";

const { Browser } = ContentEntryListConfig;

const DemoFilter = () => {
  return <span>Demo Filter</span>;
};

/* Register your custom filter. */
<ContentEntryListConfig>
  <Browser.Filter name={"demo-filter"} element={<DemoFilter />} modelIds={["property"]} />
</ContentEntryListConfig>;`}
</Editor>
<p>{`By declaring the `}<inlineCode parentName="p">{`modelIds`}</inlineCode>{` prop, you can define in which Content Model Entry List you want to show your custom filter. If you exclude this prop, the filter will be registered for all models in the system.`}</p>
<p>{`In the example above, the next time you open your `}<inlineCode parentName="p">{`property`}</inlineCode>{` content model browser and expand the filters bar, you’ll see your new element there. This is the whole process of registering a new filter element. In the following sections, we’ll focus on implementing actual filtering.`}</p>
<_Heading level={3} id={"simple-filter"} nextElement={{
      "type": "paragraph"
    }}>Simple Filter</_Heading>
<p>{`Here’s an example of how to create a filter that displays only “Deluxe” properties. We consider a property to be “Deluxe” if its price is over 1 million.`}</p>
<Editor title="apps/admin/src/App.tsx" lang="tsx" mdxType="Editor">
{`import { ContentEntryListConfig } from "@webiny/app-headless-cms";
import { useBind } from "@webiny/form";
import { Switch } from "@webiny/ui/Switch";

const { Browser } = ContentEntryListConfig;

const DeluxeFilter = () => {
  const bind = useBind({
    name: "price_gt"
  });

  const toggleFilter = () => {
    bind.onChange(bind.value ? undefined : 1000000);
  };

  return <Switch {...bind} label={"Show deluxe properties only"} onChange={toggleFilter} />;
};

/* Register your custom filter. */
<ContentEntryListConfig>
  <Browser.Filter name={"deluxe"} element={<DeluxeFilter />} modelIds={["property"]} />
</ContentEntryListConfig>;`}
</Editor>
<p>{`Under the hood, filters are handled via a regular form component: this means we can hook into the form to set new filter values. We’re using the `}<inlineCode parentName="p">{`useBind`}</inlineCode>{` hook and give it a name. This `}<inlineCode parentName="p">{`name`}</inlineCode>{` will become a key within the form data object, which will be passed to the GraphQL query. To unset a filter, we set `}<inlineCode parentName="p">{`undefined`}</inlineCode>{`.`}</p>
<p>{`You can write any filtering logic based on `}<_Link href="/docs/5.x/headless-cms/basics/using-graphql-api-advanced-filtering">{`Headless CMS’s built-in GraphQL API filtering`}</_Link>{`.`}</p>
<Image src={hcmsToggleFilter} title="Toggle Filter in Action" mdxType="Image" />
<_Heading level={3} id={"advanced-filter"} nextElement={{
      "type": "paragraph"
    }}>Advanced Filter</_Heading>
<p>{`Sometimes, you need to implement filtering logic that is more complex than just setting a single value. The following example shows a filter in the form of a dropdown menu, where each option needs to use a different GraphQL query operator. `}<inlineCode parentName="p">{`> 500k`}</inlineCode>{` needs to use the `}<inlineCode parentName="p">{`price_gt`}</inlineCode>{` key, while `}<inlineCode parentName="p">{`< 500k`}</inlineCode>{` needs to use the `}<inlineCode parentName="p">{`price_lt`}</inlineCode>{` key. This cannot be achieved with simple form binding.`}</p>
<p>{`To correctly format our filters, we’ll use the `}<inlineCode parentName="p">{`Browser.FiltersToWhere`}</inlineCode>{` component to register our custom converter, allowing you to convert form data to a valid GraphQL query input. With this approach, you have full control over values that will be passed to the API when the user interacts with the filters UI.`}</p>
<Editor title="apps/admin/src/App.tsx" lang="tsx" mdxType="Editor">
{`import { ContentEntryListConfig } from "@webiny/app-headless-cms";
import { useBind } from "@webiny/form";
import { Select } from "@webiny/ui/Select";

const { Browser } = ContentEntryListConfig;

export const FilterByPrice = () => {
  const bind = useBind({
    name: "price",
    defaultValue: "all",
    beforeChange(value, cb) {
      cb(value === "all" ? undefined : value);
    }
  });

  const options = [
    { label: "All", value: "all" },
    { label: "> 500k", value: "gt:500000" },
    { label: "< 500k", value: "lt:500000" }
  ];

  return <Select {...bind} placeholder={"Filter by price"} options={options} size="medium" />;
};

const convertFilters = ({ price, ...rest }: any) => {
  if (!price) {
    return rest;
  }

  const [operator, value] = price.split(":");
  return { ...rest, [\`price_\${operator}\`]: parseInt(value) };
};

/* Register your custom filter and the filters converter. */
<ContentEntryListConfig>
  <Browser.Filter name={"price"} element={<FilterByPrice />} modelIds={["property"]} />
  <Browser.FiltersToWhere converter={convertFilters} modelIds={["property"]} />
</ContentEntryListConfig>;`}
</Editor>
<Image src={hcmsDropdownFilter} title="Dropdown Filter in Action" mdxType="Image" />
<Alert type={"info"} title={"Multiple Converters"} mdxType="Alert">
  You can add as many converters as you need. The output of the previous converter will be passed as
  an input to the next converter.
</Alert>
<_Heading level={2} id={"discovering-filters"} nextElement={{
      "type": "paragraph"
    }}>Discovering Filters</_Heading>
<p>{`This section demonstrates how you can discover the names of existing filters. This is important for further sections on positioning, removing, and replacing filters.`}</p>
<p>{`The easiest way to discover existing filters is to use your browser’s React Dev Tools plugins and look for the `}<inlineCode parentName="p">{`Filters`}</inlineCode>{` element. From there, you can either look for `}<inlineCode parentName="p">{`filters`}</inlineCode>{` props or look at the child elements and their keys:`}</p>
<Image src={hcmsDiscoverFilters} title="Discover Existing Filters" mdxType="Image" />
<_Heading level={2} id={"positioning-a-filter"} nextElement={{
      "type": "paragraph"
    }}>Positioning a Filter</_Heading>
<p>{`To position your custom filter before or after an existing filter, you can use the `}<inlineCode parentName="p">{`before`}</inlineCode>{` and `}<inlineCode parentName="p">{`after`}</inlineCode>{` props on the `}<inlineCode parentName="p">{`<Browser.Filter>`}</inlineCode>{` element:`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`<ContentEntryListConfig>
  <Browser.Filter name={"price"} element={<FilterByPrice />} before={"type"} />
</ContentEntryListConfig>`}
</Editor>
<Image src={hcmsPositionBefore} title="Position Your Filter Before Another Filter" mdxType="Image" />
<_Heading level={2} id={"removing-a-filter"} nextElement={{
      "type": "paragraph"
    }}>Removing a Filter</_Heading>
<p>{`Sometimes you might want to remove an existing filter. All you need to do is reference the filter by name and pass a `}<inlineCode parentName="p">{`remove`}</inlineCode>{` prop to the `}<inlineCode parentName="p">{`<Browser.Filter>`}</inlineCode>{` element:`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`<ContentEntryListConfig>
  <Browser.Filter name={"type"} remove />
</ContentEntryListConfig>`}
</Editor>
<_Heading level={2} id={"replacing-a-filter"} nextElement={{
      "type": "paragraph"
    }}>Replacing a Filter</_Heading>
<p>{`To replace an existing filter with a new filter element, you need to reference an existing filter by name and pass a new component via the `}<inlineCode parentName="p">{`element`}</inlineCode>{` prop:`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`<ContentEntryListConfig>
  <Browser.Filter name={"type"} element={<span>A new filter!</span>} />
</ContentEntryListConfig>`}
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