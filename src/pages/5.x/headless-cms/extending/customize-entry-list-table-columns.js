/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import hcmsCustomCellRenderer from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/extending/assets/hcms-custom-cell-renderer.png";
import hcmsDefaultTable from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/extending/assets/hcms-default-table.png";
import hcmsDiscoverColumn from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/extending/assets/hcms-discover-column.png";
import hcmsHideableColumn from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/extending/assets/hcms-hideable-column.gif";
import hcmsSimpleColumn from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/extending/assets/hcms-simple-column.png";
import hcmsSortableColumn from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/extending/assets/hcms-sortable-column.gif";
import hcmsVisibleColumn from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/headless-cms/extending/assets/hcms-visible-column.gif";
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Customize Entry List Table Columns",
  "description": "Learn how to add, replace, or remove columns in the Entry List Table.",
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
  "title": "Add a Column",
  "slug": "add-a-column",
  "children": [{
    "title": "Simple Column",
    "slug": "simple-column",
    "children": []
  }, {
    "title": "Custom Column Cell Rendering",
    "slug": "custom-column-cell-rendering",
    "children": []
  }, {
    "title": "Sortable Column",
    "slug": "sortable-column",
    "children": []
  }, {
    "title": "Custom Column Size",
    "slug": "custom-column-size",
    "children": []
  }, {
    "title": "Custom Column Visibility",
    "slug": "custom-column-visibility",
    "children": []
  }, {
    "title": "Custom Column Class Names",
    "slug": "custom-column-class-names",
    "children": []
  }]
}, {
  "title": "Discover Columns",
  "slug": "discover-columns",
  "children": []
}, {
  "title": "Position a Column",
  "slug": "position-a-column",
  "children": []
}, {
  "title": "Remove a Column",
  "slug": "remove-a-column",
  "children": []
}, {
  "title": "Replace a Column",
  "slug": "replace-a-column",
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
<p>{`This feature has been available since Webiny `}<strong parentName="p">{`v5.39.0`}</strong>{`.`}</p>
</Alert>
<Alert type="success" title="What you will learn" mdxType="Alert">
<ul>
<li parentName="ul">{`how to add a column`}</li>
<li parentName="ul">{`how to discover existing column names`}</li>
<li parentName="ul">{`how to change the position, remove, or replace a column`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`The Entry List Table is a UI component that displays entries for a specific CMS model. By default, the table shows pre-defined columns such as:`}</p>
<ul>
<li parentName="ul"><strong parentName="li">{`Name`}</strong>{`: presenting the `}<inlineCode parentName="li">{`title`}</inlineCode>{` field data`}</li>
<li parentName="ul"><strong parentName="li">{`Author`}</strong>{`: presenting the `}<inlineCode parentName="li">{`createdBy`}</inlineCode>{` field`}</li>
<li parentName="ul"><strong parentName="li">{`Created`}</strong>{`: presenting the `}<inlineCode parentName="li">{`createdOn`}</inlineCode>{` field`}</li>
<li parentName="ul"><strong parentName="li">{`Modified`}</strong>{`: presenting the `}<inlineCode parentName="li">{`savedOn`}</inlineCode>{` field`}</li>
<li parentName="ul"><strong parentName="li">{`Status`}</strong>{`: presenting the `}<inlineCode parentName="li">{`status`}</inlineCode>{` and `}<inlineCode parentName="li">{`version`}</inlineCode>{` fields`}</li>
</ul>
<Image src={hcmsDefaultTable} title="Default table columns" mdxType="Image" />
<_Heading level={2} id={"using-the-code-examples"} nextElement={{
      "type": "paragraph"
    }}>Using the Code Examples</_Heading>
<p>{`The following code examples follow our usual configuration pattern. You need to add the code from the examples to your `}<inlineCode parentName="p">{`apps/admin/src/App.tsx`}</inlineCode>{`. Here’s an example:`}</p>
<Editor title="apps/admin/src/App.tsx" lang="diff-tsx" mdxType="Editor">
{`import React from "react";
import { Admin } from "@webiny/app-serverless-cms";
import { Cognito } from "@webiny/app-admin-users-cognito";
+ import { ContentEntryListConfig } from "@webiny/app-headless-cms";
import "./App.scss";

+ // You can destructure config components to make the code more readable and easier to work with.
+ const { Browser } = ContentEntryListConfig;

export const App = () => {
    return (
      <Admin>
        <Cognito />
+       <ContentEntryListConfig>
+         {* Config components go here. *}
+       </ContentEntryListConfig>
      </Admin>
    );
};`}
</Editor>
<Alert type="info" title="Content entry setup" mdxType="Alert">
<p>{`The code examples below are based on a content model called `}<inlineCode parentName="p">{`Property`}</inlineCode>{` with the following fields:`}</p>
<ul>
<li parentName="ul"><inlineCode parentName="li">{`title`}</inlineCode>{` text input`}</li>
<li parentName="ul"><inlineCode parentName="li">{`price`}</inlineCode>{` number input`}</li>
<li parentName="ul"><inlineCode parentName="li">{`currency`}</inlineCode>{` text input with `}<a parentName="li" {...{
            "href": "https://en.wikipedia.org/wiki/ISO_4217#List_of_ISO_4217_currency_codes"
          }}>{`ISO 4217 currency codes`}</a>{` predefined values`}</li>
</ul>
</Alert>
<_Heading level={2} id={"add-a-column"} nextElement={{
      "type": "paragraph"
    }}>Add a Column</_Heading>
<p>{`To add a new column, use the `}<inlineCode parentName="p">{`Browser.Table.Column`}</inlineCode>{` component and mount it within your Admin app. This component will serve as the foundation for your columns.`}</p>
<_Heading level={3} id={"simple-column"} nextElement={{
      "type": "paragraph"
    }}>Simple Column</_Heading>
<p>{`Here is an example of creating a column to show the `}<inlineCode parentName="p">{`price`}</inlineCode>{` field data within the table.
The `}<inlineCode parentName="p">{`Browser.Table.Column`}</inlineCode>{` component receives the following mandatory props:`}</p>
<ul>
<li parentName="ul"><inlineCode parentName="li">{`name`}</inlineCode>{` used to target the field you want to show and serves as a unique identifier`}</li>
<li parentName="ul"><inlineCode parentName="li">{`header`}</inlineCode>{` used for formatting the column header`}</li>
</ul>
<Editor title="" lang="tsx" mdxType="Editor">
{`<ContentEntryListConfig>
  <Browser.Table.Column
    name={"price"}
    header={"Price"}
    modelIds={["property"]}
  />   
</ContentEntryListConfig> `}
</Editor>
<p>{`By declaring the `}<inlineCode parentName="p">{`modelIds`}</inlineCode>{` prop, you can define in which Content Model Entry List you want to show your column. If you exclude this prop, the column will be registered for all models in the system. For instance, in the given example, next time you open the `}<inlineCode parentName="p">{`property`}</inlineCode>{` content model, the newly defined column will be shown.`}</p>
<p>{`This is the whole process of registering a column.`}</p>
<Image src={hcmsSimpleColumn} title="Define a simple custom column" mdxType="Image" />
<_Heading level={3} id={"custom-column-cell-rendering"} nextElement={{
      "type": "paragraph"
    }}>Custom Column Cell Rendering</_Heading>
<p>{`Sometimes, you may want to modify how the data in a cell is displayed using a specific component. This allows you to have full control over how the information is presented.`}</p>
<p>{`For example, you could create a `}<inlineCode parentName="p">{`CellPrice`}</inlineCode>{` component that shows a simple dash for folder rows and displays the price value along with the selected currency for content entries.`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`export const CellPrice = () => {
  // You can destructure child methods to make the code more readable and easier to work with.
  const { useTableRow, isFolderRow } = ContentEntryListConfig.Browser.Table.Column;
  // useTableRow() allows you to access the entire data of the current row.
  const { row } = useTableRow();

  // isFolderRow() allows for custom rendering when the current row is a folder.
  if (isFolderRow(row)) {
    return <>{"-"}</>;
  }

  const currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: row.currency // Let's use the currency defined in the entry.
  });

  // Let's render the entry price.
  return <>{currency.format(row.price)}</>;
};`}
</Editor>
<p>{`Using the `}<inlineCode parentName="p">{`cell`}</inlineCode>{` prop, you can pass the custom component to the column definition.`}</p>
<Editor title="" lang="diff-tsx" mdxType="Editor">
{`  <ContentEntryListConfig>
    <Browser.Table.Column
      name={"price"}
      header={"Price"}
      modelIds={["property"]}
+     cell={<PriceCell />}
    />   
  </ContentEntryListConfig> `}
</Editor>
<Image src={hcmsCustomCellRenderer} title="Define a custom cell renderer" mdxType="Image" />
<_Heading level={3} id={"sortable-column"} nextElement={{
      "type": "paragraph"
    }}>Sortable Column</_Heading>
<p>{`You can enable sorting by setting the `}<inlineCode parentName="p">{`sortable`}</inlineCode>{` property, so users can sort the table by clicking on a column header. Make sure that the field you want to sort by is included in the available sorting options of the model.`}</p>
<Editor title="" lang="diff-tsx" mdxType="Editor">
{`  <ContentEntryListConfig>
    <Browser.Table.Column
      name={"price"}
      header={"Price"}
      modelIds={["property"]}
+     sortable={true}
    />   
  </ContentEntryListConfig> `}
</Editor>
<Image src={hcmsSortableColumn} title="Define a sortable column" mdxType="Image" />
<_Heading level={3} id={"custom-column-size"} nextElement={{
      "type": "paragraph"
    }}>Custom Column Size</_Heading>
<p>{`To set the initial size of a column, you can use the `}<inlineCode parentName="p">{`size`}</inlineCode>{` property. By default, the size is set to `}<inlineCode parentName="p">{`100`}</inlineCode>{`.`}</p>
<p>{`However, this is not a value in pixels but more of a proportion with the other columns within the table. If you want to double the size of a specific column, you can pass `}<inlineCode parentName="p">{`200`}</inlineCode>{` as the value.`}</p>
<p>{`In addition, you can allow or disallow users to adjust the column width according to their preferences by defining the `}<inlineCode parentName="p">{`resizable`}</inlineCode>{` prop.`}</p>
<Editor title="" lang="diff-tsx" mdxType="Editor">
{`  <ContentEntryListConfig>
    <Browser.Table.Column
      name={"price"}
      header={"Price"}
      modelIds={["property"]}
+     size={75}
+     resizable={false} // The column is not resizable by the user. 
    />   
  </ContentEntryListConfig> `}
</Editor>
<_Heading level={3} id={"custom-column-visibility"} nextElement={{
      "type": "paragraph"
    }}>Custom Column Visibility</_Heading>
<p>{`The `}<inlineCode parentName="p">{`visible`}</inlineCode>{` property in data tables is crucial for user experience. By default, the column is visible to users. But, it can be set to hide by default, which is useful when dealing with large datasets.`}</p>
<p>{`Users have the ability to show/hide columns by using the column settings menu.`}</p>
<Editor title="" lang="diff-tsx" mdxType="Editor">
{`  <ContentEntryListConfig>
    <Browser.Table.Column
      name={"price"}
      header={"Price"}
      modelIds={["property"]}
+     visible={false}
    />   
  </ContentEntryListConfig> `}
</Editor>
<Image src={hcmsVisibleColumn} title="Define column visibility" mdxType="Image" />
<p>{`In addition to controlling the initial visibility of columns, you can further enhance user customization with the `}<inlineCode parentName="p">{`hideable`}</inlineCode>{` feature.`}</p>
<p>{`When the `}<inlineCode parentName="p">{`hideable`}</inlineCode>{` property is set to false, users are restricted from dynamically toggling the visibility of the column. In this scenario, the column remains fixed and visible, adhering to the configuration set by developers.`}</p>
<Editor title="" lang="diff-tsx" mdxType="Editor">
{`  <ContentEntryListConfig>
    <Browser.Table.Column
      name={"price"}
      header={"Price"}
      modelIds={["property"]}
+     hideable={false}
    />   
  </ContentEntryListConfig> `}
</Editor>
<Image src={hcmsHideableColumn} title="Prevent users from toggling column visibility" mdxType="Image" />
<_Heading level={3} id={"custom-column-class-names"} nextElement={{
      "type": "paragraph"
    }}>Custom Column Class Names</_Heading>
<p>{`You can easily add custom CSS class names to columns using the `}<inlineCode parentName="p">{`className`}</inlineCode>{` property. The class names provided will be injected in both the column header and cell.`}</p>
<Editor title="" lang="diff-tsx" mdxType="Editor">
{`  <ContentEntryListConfig>
    <Browser.Table.Column
      name={"price"}
      header={"Price"}
      modelIds={["property"]}
+     className={"custom-price-className"}
    />   
  </ContentEntryListConfig> `}
</Editor>
<_Heading level={2} id={"discover-columns"} nextElement={{
      "type": "paragraph"
    }}>Discover Columns</_Heading>
<p>{`This section demonstrates how you can discover the names of existing columns. This is important for further sections on positioning, removing, and replacing columns.`}</p>
<p>{`The easiest way to discover existing columns is to use your browser’s React Dev Tools plugins and search for the `}<inlineCode parentName="p">{`BaseColumns`}</inlineCode>{`:`}</p>
<Image src={hcmsDiscoverColumn} title="Discover existing columns" mdxType="Image" />
<_Heading level={2} id={"position-a-column"} nextElement={{
      "type": "paragraph"
    }}>Position a Column</_Heading>
<p>{`To position your column before or after an existing column, you can use the `}<inlineCode parentName="p">{`before`}</inlineCode>{` and `}<inlineCode parentName="p">{`after`}</inlineCode>{` props on the `}<inlineCode parentName="p">{`<Browser.Table.Column>`}</inlineCode>{` element:`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`<ContentEntryListConfig>
  <Browser.Table.Column 
    name={"price"}
    header={"Price"} 
    before={"status"} 
  />
</ContentEntryListConfig>`}
</Editor>
<_Heading level={2} id={"remove-a-column"} nextElement={{
      "type": "paragraph"
    }}>Remove a Column</_Heading>
<p>{`Sometimes you might want to remove an existing column. All you need to do is reference the column by name and pass a `}<inlineCode parentName="p">{`remove`}</inlineCode>{` prop to the `}<inlineCode parentName="p">{`<Browser.Table.Column>`}</inlineCode>{` element:`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`<ContentEntryListConfig>
  <Browser.Table.Column name={"savedOn"} remove />
</ContentEntryListConfig>`}
</Editor>
<_Heading level={2} id={"replace-a-column"} nextElement={{
      "type": "paragraph"
    }}>Replace a Column</_Heading>
<p>{`To replace an existing column with a new cell renderer, you need to reference an existing column by name and pass a new component via the `}<inlineCode parentName="p">{`cell`}</inlineCode>{` prop:`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`<ContentEntryListConfig>
  <Browser.Table.Column 
    name={"status"} 
    header={"Custom Status"} 
    cell={<span>{"Custom Status Cell"}</span>} 
  />
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