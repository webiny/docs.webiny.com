/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import fmCustomCellRenderer from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/file-manager/extending/assets/fm-custom-cell-renderer.png";
import fmDefaultTable from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/file-manager/extending/assets/fm-default-table.png";
import fmDiscoverColumn from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/file-manager/extending/assets/fm-discover-column.png";
import fmHideableColumn from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/file-manager/extending/assets/fm-hideable-column.gif";
import fmSimpleColumn from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/file-manager/extending/assets/fm-simple-column.png";
import fmVisibleColumn from "/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/file-manager/extending/assets/fm-visible-column.gif";
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Customize File List Table Columns",
  "description": "Learn how to add, replace, or remove columns in the File List Table.",
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
<p>{`File Manager allows you to view files and folders in a table or grid format. The table displays predefined columns, such as:`}</p>
<ul>
<li parentName="ul"><strong parentName="li">{`Name`}</strong>{`: presenting the `}<inlineCode parentName="li">{`name`}</inlineCode>{` field`}</li>
<li parentName="ul"><strong parentName="li">{`Type`}</strong>{`: presenting the `}<inlineCode parentName="li">{`type`}</inlineCode>{` fields`}</li>
<li parentName="ul"><strong parentName="li">{`Size`}</strong>{`: presenting the `}<inlineCode parentName="li">{`size`}</inlineCode>{` fields`}</li>
<li parentName="ul"><strong parentName="li">{`Author`}</strong>{`: presenting the `}<inlineCode parentName="li">{`createdBy`}</inlineCode>{` field`}</li>
<li parentName="ul"><strong parentName="li">{`Created`}</strong>{`: presenting the `}<inlineCode parentName="li">{`createdOn`}</inlineCode>{` field`}</li>
<li parentName="ul"><strong parentName="li">{`Modified`}</strong>{`: presenting the `}<inlineCode parentName="li">{`savedOn`}</inlineCode>{` field`}</li>
</ul>
<Image src={fmDefaultTable} title="Default table columns" mdxType="Image" />
<_Heading level={2} id={"using-the-code-examples"} nextElement={{
      "type": "paragraph"
    }}>Using the Code Examples</_Heading>
<p>{`The following code examples follow our usual configuration pattern. You need to add the code from the examples to your `}<inlineCode parentName="p">{`apps/admin/src/App.tsx`}</inlineCode>{`. Here’s an example:`}</p>
<Editor title="apps/admin/src/App.tsx" lang="diff-tsx" mdxType="Editor">
{`import React from "react";
import { Admin } from "@webiny/app-serverless-cms";
import { Cognito } from "@webiny/app-admin-users-cognito";
+ import { FileManagerViewConfig } from "@webiny/app-file-manager";
import "./App.scss";

+ // You can destructure config components to make the code more readable and easier to work with.
+ const { Browser } = FileManagerViewConfig;

export const App = () => {
    return (
      <Admin>
        <Cognito />
+       <FileManagerViewConfig>
+         {* Config components go here. *}
+       </FileManagerViewConfig>
      </Admin>
    );
};`}
</Editor>
<Alert type="info" title="Custom field setup" mdxType="Alert">
<p>{`The following code examples are built using the `}<_Link href="/docs/5.x/file-manager/extending/customize-file-fields">{`custom file field`}</_Link>{` `}<inlineCode parentName="p">{`copyright`}</inlineCode>{`.`}</p>
</Alert>
<_Heading level={2} id={"add-a-column"} nextElement={{
      "type": "paragraph"
    }}>Add a Column</_Heading>
<p>{`To add a new column, use the `}<inlineCode parentName="p">{`Browser.Table.Column`}</inlineCode>{` component and mount it within your Admin app. This component will serve as the foundation for your columns.`}</p>
<_Heading level={3} id={"simple-column"} nextElement={{
      "type": "paragraph"
    }}>Simple Column</_Heading>
<p>{`Here is an example of creating a column to show the `}<inlineCode parentName="p">{`copyright`}</inlineCode>{` field data within the table.
The `}<inlineCode parentName="p">{`Browser.Table.Column`}</inlineCode>{` component receives the following mandatory props:`}</p>
<ul>
<li parentName="ul"><inlineCode parentName="li">{`name`}</inlineCode>{` used to target the field you want to show and serves as a unique identifier`}</li>
<li parentName="ul"><inlineCode parentName="li">{`header`}</inlineCode>{` used for formatting the column header`}</li>
</ul>
<Editor title="" lang="tsx" mdxType="Editor">
{`<FileManagerViewConfig>
  <Browser.Table.Column
    name={"extensions.copyright"}
    header={"Copyright"}
  />   
</FileManagerViewConfig> `}
</Editor>
<p>{`This is the whole process of registering a column.`}</p>
<Image src={fmSimpleColumn} title="Define a simple custom column" mdxType="Image" />
<_Heading level={3} id={"custom-column-cell-rendering"} nextElement={{
      "type": "paragraph"
    }}>Custom Column Cell Rendering</_Heading>
<p>{`Sometimes, you may want to modify how the data in a cell is displayed using a specific component. This allows you to have full control over how the information is presented.`}</p>
<p>{`For example, you could create a `}<inlineCode parentName="p">{`CellCopyright`}</inlineCode>{` component that displays:`}</p>
<ul>
<li parentName="ul">{`a dash for folder rows`}</li>
<li parentName="ul">{`a dash in case the copyright is not set`}</li>
<li parentName="ul">{`the `}<inlineCode parentName="li">{`copyright`}</inlineCode>{` field value prepended by  the `}<inlineCode parentName="li">{`©`}</inlineCode>{` symbol `}</li>
</ul>
<Editor title="" lang="tsx" mdxType="Editor">
{`export const CellCopyright = () => {
  // You can destructure child methods to make the code more readable and easier to work with.
  const { useTableRow, isFolderRow } = FileManagerViewConfig.Browser.Table.Column;
  // useTableRow() allows you to access the entire data of the current row.
  const { row } = useTableRow();

  // isFolderRow() allows for custom rendering when the current row is a folder.
  if (isFolderRow(row)) {
    return <>{"-"}</>;
  }

  // If copyright is not set, let's render a dash
  if (!row?.extensions?.copyright) {
    return <>{"-"}</>;
  }

  // Let's render the file copyright.
  return <>© {row.extensions.copyright}</>;
};`}
</Editor>
<p>{`Using the `}<inlineCode parentName="p">{`cell`}</inlineCode>{` prop, you can pass the custom component to the column definition.`}</p>
<Editor title="" lang="diff-tsx" mdxType="Editor">
{`  <FileManagerViewConfig>
    <Browser.Table.Column
      name={"extensions.copyright"}
      header={"Copyright"}
+     cell={<CellCopyright />}
    />   
  </FileManagerViewConfig> `}
</Editor>
<Image src={fmCustomCellRenderer} title="Define a custom cell renderer" mdxType="Image" />
<_Heading level={3} id={"custom-column-size"} nextElement={{
      "type": "paragraph"
    }}>Custom Column Size</_Heading>
<p>{`To set the initial size of a column, you can use the `}<inlineCode parentName="p">{`size`}</inlineCode>{` property. By default, the size is set to `}<inlineCode parentName="p">{`100`}</inlineCode>{`.`}</p>
<p>{`However, this is not a value in pixels but more of a proportion with the other columns within the table. If you want to double the size of a specific column, you can pass `}<inlineCode parentName="p">{`200`}</inlineCode>{` as the value.`}</p>
<p>{`In addition, you can allow or disallow users to adjust the column width according to their preferences by defining the `}<inlineCode parentName="p">{`resizable`}</inlineCode>{` prop.`}</p>
<Editor title="" lang="diff-tsx" mdxType="Editor">
{`  <FileManagerViewConfig>
    <Browser.Table.Column
      name={"extensions.copyright"}
      header={"Copyright"}
+     size={75}
+     resizable={false} // The column is not resizable by the user. 
    />   
  </FileManagerViewConfig> `}
</Editor>
<_Heading level={3} id={"custom-column-visibility"} nextElement={{
      "type": "paragraph"
    }}>Custom Column Visibility</_Heading>
<p>{`The `}<inlineCode parentName="p">{`visible`}</inlineCode>{` property in data tables is crucial for user experience. By default, the column is visible to users. But, it can be set to hide by default, which is useful when dealing with large datasets.`}</p>
<p>{`Users have the ability to show/hide columns by using the column settings menu.`}</p>
<Editor title="" lang="diff-tsx" mdxType="Editor">
{`  <FileManagerViewConfig>
    <Browser.Table.Column
     name={"extensions.copyright"}
      header={"Copyright"}
+     visible={false}
    />   
  </FileManagerViewConfig> `}
</Editor>
<Image src={fmVisibleColumn} title="Define column visibility" mdxType="Image" />
<p>{`In addition to controlling the initial visibility of columns, you can further enhance user customization with the `}<inlineCode parentName="p">{`hideable`}</inlineCode>{` feature.`}</p>
<p>{`When the `}<inlineCode parentName="p">{`hideable`}</inlineCode>{` property is set to false, users are restricted from dynamically toggling the visibility of the column. In this scenario, the column remains fixed and visible, adhering to the configuration set by developers.`}</p>
<Editor title="" lang="diff-tsx" mdxType="Editor">
{`  <FileManagerViewConfig>
    <Browser.Table.Column
      name={"price"}
      header={"Price"}
      modelIds={["property"]}
+     hideable={false}
    />   
  </FileManagerViewConfig> `}
</Editor>
<Image src={fmHideableColumn} title="Prevent users from toggling column visibility" mdxType="Image" />
<_Heading level={3} id={"custom-column-class-names"} nextElement={{
      "type": "paragraph"
    }}>Custom Column Class Names</_Heading>
<p>{`You can easily add custom CSS class names to columns using the `}<inlineCode parentName="p">{`className`}</inlineCode>{` property. The class names provided will be injected in both the column header and cell.`}</p>
<Editor title="" lang="diff-tsx" mdxType="Editor">
{`  <FileManagerViewConfig>
    <Browser.Table.Column
      name={"extensions.copyright"}
      header={"Copyright"}
+     className={"custom-copyright-className"}
    />   
  </FileManagerViewConfig> `}
</Editor>
<_Heading level={2} id={"discover-columns"} nextElement={{
      "type": "paragraph"
    }}>Discover Columns</_Heading>
<p>{`This section demonstrates how you can discover the names of existing columns. This is important for further sections on positioning, removing, and replacing columns.`}</p>
<p>{`The easiest way to discover existing columns is to use your browser’s React Dev Tools plugins and search for the `}<inlineCode parentName="p">{`BaseColumns`}</inlineCode>{`:`}</p>
<Image src={fmDiscoverColumn} title="Discover existing columns" mdxType="Image" />
<_Heading level={2} id={"position-a-column"} nextElement={{
      "type": "paragraph"
    }}>Position a Column</_Heading>
<p>{`To position your column before or after an existing column, you can use the `}<inlineCode parentName="p">{`before`}</inlineCode>{` and `}<inlineCode parentName="p">{`after`}</inlineCode>{` props on the `}<inlineCode parentName="p">{`<Browser.Table.Column>`}</inlineCode>{` element:`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`<FileManagerViewConfig>
  <Browser.Table.Column
    name={"extensions.copyright"}
    header={"Copyright"} 
    before={"createdBy"} 
  />
</FileManagerViewConfig>`}
</Editor>
<_Heading level={2} id={"remove-a-column"} nextElement={{
      "type": "paragraph"
    }}>Remove a Column</_Heading>
<p>{`Sometimes you might want to remove an existing column. All you need to do is reference the column by name and pass a `}<inlineCode parentName="p">{`remove`}</inlineCode>{` prop to the `}<inlineCode parentName="p">{`<Browser.Table.Column>`}</inlineCode>{` element:`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`<FileManagerViewConfig>
  <Browser.Table.Column name={"type"} remove />
</FileManagerViewConfig>`}
</Editor>
<_Heading level={2} id={"replace-a-column"} nextElement={{
      "type": "paragraph"
    }}>Replace a Column</_Heading>
<p>{`To replace an existing column with a new cell renderer, you need to reference an existing column by name and pass a new component via the `}<inlineCode parentName="p">{`cell`}</inlineCode>{` prop:`}</p>
<Editor title="" lang="tsx" mdxType="Editor">
{`<FileManagerViewConfig>
  <Browser.Table.Column 
    name={"type"} 
    header={"Custom Type"} 
    cell={<span>{"Custom Type Cell"}</span>} 
  />
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