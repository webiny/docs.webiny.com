/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import _Image5 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/page-builder/extending/assets/extend-page-settings/listPublishedPages.png'
import _Image4 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/page-builder/extending/assets/extend-page-settings/websitePassword.png'
import _Image3 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/page-builder/extending/assets/extend-page-settings/passwordField.png'
import _Image2 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/page-builder/extending/assets/extend-page-settings/schema.png'
import _Image1 from '/Users/svenalhamad/Dev/docs.webiny.com/docs/developer-docs/5.x/page-builder/extending/assets/extend-page-settings/settingsView.png'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Extend Page Settings",
  "description": "Learn how to extend page settings by introducing new fields to it.",
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
  "title": "Add a New Settings Field to GraphQL API",
  "slug": "add-a-new-settings-field-to-graph-ql-api",
  "children": []
}, {
  "title": "Add a Form Field to the UI",
  "slug": "add-a-form-field-to-the-ui",
  "children": []
}, {
  "title": "Add the New Query Selection in the Website Application",
  "slug": "add-the-new-query-selection-in-the-website-application",
  "children": []
}, {
  "title": "Handling DateTime Fields",
  "slug": "handling-date-time-fields",
  "children": []
}, {
  "title": "Add New Fields to listPublishedPages Query",
  "slug": "add-new-fields-to-list-published-pages-query",
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
<p>{`This feature is available since Webiny `}<strong parentName="p">{`v5.12.0`}</strong>{`.`}</p>
</Alert>
<Alert type="success" title="What you'll learn" mdxType="Alert">
<ul>
<li parentName="ul">{`how to hook into the page settings views`}</li>
<li parentName="ul">{`how to add new fields to the existing page settings views`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`Page settings UI within the Webiny Page Builder, by default, contains 3 major sections: `}<strong parentName="p">{`General settings`}</strong>{`, `}<strong parentName="p">{`Social media`}</strong>{`, and `}<strong parentName="p">{`SEO settings`}</strong>{`.`}</p>
<Image src={_Image1} alt={"Page Settings View"} mdxType="Image" />
<p>{`Adding a new field to the page settings involves the following steps:`}</p>
<ol>
<li parentName="ol">{`Extend the GraphQL API to be able to handle the new field.`}</li>
<li parentName="ol">{`Add a form field to the UI to represent the value from the GraphQL API.`}</li>
<li parentName="ol">{`Add the new field selection to the GraphQL query that is sent from the browser to the GraphQL API.`}</li>
</ol>
<p>{`In this example, we’ll add a `}<inlineCode parentName="p">{`password`}</inlineCode>{` field to the `}<inlineCode parentName="p">{`General Settings`}</inlineCode>{`.`}</p>
<_Heading level={2} id={"add-a-new-settings-field-to-graph-ql-api"} nextElement={{
      "type": "paragraph"
    }}>Add a New Settings Field to GraphQL API</_Heading>
<p>{`We need to extend the following GraphQL types: `}<inlineCode parentName="p">{`PbGeneralPageSettings`}</inlineCode>{` for queries, and `}<inlineCode parentName="p">{`PbGeneralPageSettingsInput`}</inlineCode>{` for mutations.`}</p>
<p>{`But GraphQL is just a router, and page settings have some strict validation rules, so extending a GraphQL type is not enough to push the data into the database. We need to manually grab the input value and assign it to the page settings data.`}</p>
<p>{`The following code takes care of all the things described above.
j`}</p>
<Editor title="apps/api/graphql/src/plugins/pageSettings.ts" lang="ts" mdxType="Editor">
{`import { GraphQLSchemaPlugin } from "@webiny/handler-graphql/plugins";
import { ContextPlugin } from "@webiny/handler";
import { PbContext, OnBeforePageUpdateTopicParams } from "@webiny/api-page-builder/types";

// Make sure to import the \`Context\` interface and pass it to the \`GraphQLSchemaPlugin\`
// plugin. Apart from making your application code type-safe, it will also make the
// interaction with the \`context\` object significantly easier.
import { Context } from "~/types";

// We need this interface for the event subscription below.
// It will enable you to have proper autocomplete on your new fields.
interface CustomEventParams extends OnBeforePageUpdateTopicParams {
  page: OnBeforePageUpdateTopicParams["page"] & {
    settings: {
      general: {
        password: string;
      };
    };
  };
}

export default [
  // Add \`password\` to the page settings types
  new GraphQLSchemaPlugin<Context>({
    typeDefs: /* GraphQL */ \`
      extend type PbGeneralPageSettings {
        password: String
      }

      extend input PbGeneralPageSettingsInput {
        password: String
      }
    \`
  }),
  // Subscribe to the page update event using the ContextPlugin.
  new ContextPlugin<PbContext>(({ pageBuilder }) => {
    // We are passing a custom event type to allow us to use the new \`password\` field.
    pageBuilder.onBeforePageUpdate.subscribe<CustomEventParams>(({ page, input }) => {
      // Explicitly assign the field value from GraphQL input to the data that is used to update the page.
      page.settings.general.password = input.settings.general.password;
    });
  })
];`}
</Editor>
<Alert type="info" mdxType="Alert">
<p>{`The code above can be placed in the `}<inlineCode parentName="p">{`api/graphql/src/plugins/pageSettings.ts`}</inlineCode>{` file, which doesn’t exist by default, so you will have to create it manually. Furthermore, once the file is created, make sure that it’s actually imported and registered in the `}<inlineCode parentName="p">{`api/graphql/src/index.ts`}</inlineCode>{` entrypoint file.`}</p>
</Alert>
<Editor title="apps/api/graphql/src/index.ts" lang="js" mdxType="Editor">
{`// ...

// my password field custom plugin
import passwordFieldPageSettingsPlugin from "./plugins/pageSettings";

export const handler = createHandler({
  plugins: [
    // ...
    // add this at the end of the plugins array list
    passwordFieldPageSettingsPlugin
  ],
  http: { debug }
});`}
</Editor>
<p>{`With this plugin, once you redeploy the API project application, your GraphQL schema will contain the new `}<inlineCode parentName="p">{`password`}</inlineCode>{` field:`}</p>
<Image src={_Image2} alt={"New Password Field in the Schema"} mdxType="Image" />
<Alert type="success" mdxType="Alert">
<p>{`Use the `}<_Link href="/docs/5.x/core-development-concepts/basics/watch-command"><inlineCode parentName="p">{`webiny watch`}</inlineCode></_Link>{` command to continuously deploy application code changes into the cloud and instantly see them in action. For quick (manual) testing, you can use the built-in `}<_Link href="/docs/5.x/admin-area/basics/api-playground">{`API Playground`}</_Link>{`.`}</p>
</Alert>
<_Heading level={2} id={"add-a-form-field-to-the-ui"} nextElement={{
      "type": "paragraph"
    }}>Add a Form Field to the UI</_Heading>
<p>{`The view class responsible for the general settings is the `}<inlineCode parentName="p">{`GeneralSettingsView`}</inlineCode>{` class. To modify it, we need to hook into it using the `}<inlineCode parentName="p">{`UIViewPlugin`}</inlineCode>{` plugin. We also need to add the new field to the `}<inlineCode parentName="p">{`PbGetPage`}</inlineCode>{` GraphQL query operation, which loads the page data.`}</p>
<Editor title="apps/admin/src/plugins/pageSettings.ts" lang="tsx" mdxType="Editor">
{`import { gql } from "graphql-tag";
import { AddQuerySelectionPlugin } from "@webiny/app/plugins/AddQuerySelectionPlugin";
import { UIViewPlugin } from "@webiny/app-admin/ui/UIView";
import { GeneralSettingsView } from "@webiny/app-page-builder/editor/ui/views/GeneralSettingsView";
import { InputElement } from "@webiny/app-admin/ui/elements/form/InputElement";

export default [
  // Add an input field for the password
  new UIViewPlugin(GeneralSettingsView, view => {
    view.addField(
      new InputElement("password", {
        name: "settings.general.password",
        label: "Password",
        description: "If set, the page will be protected by this password on the frontend."
      })
    );
  }),
  // Add a selection to outgoing \`GetPage\` GraphQL operation
  new AddQuerySelectionPlugin({
    operationName: "PbGetPage",
    selectionPath: "pageBuilder.getPage.data",
    addSelection: gql\`
      {
        settings {
          general {
            password
          }
        }
      }
    \`
  })
];`}
</Editor>
<p>{`And then, make sure to import your new UI plugin:`}</p>
<Editor title="apps/admin/src/plugins/pageBuilder/editorPlugins.tsx" lang="js" mdxType="Editor">
{`//...
import pageSettings from "./../pageSettings";

export default [
  // Page settings
  pageSettingsPlugins,
  pageSettings // your plugin
];`}
</Editor>
<p>{`After your application rebuilds, the new field will be rendered in the settings view. Using this technique, you can add as many fields as you need. You can also hook into other page settings views, using their corresponding classes: `}<inlineCode parentName="p">{`SocialSettingsView`}</inlineCode>{` and `}<inlineCode parentName="p">{`SEOSettingsView`}</inlineCode>{`.`}</p>
<Image src={_Image3} alt={"Password Field Added to the General Settings View"} mdxType="Image" />
<p>{`For the Admin Area, the work is done. You can now get and update the value of that new `}<inlineCode parentName="p">{`password`}</inlineCode>{` field.`}</p>
<_Heading level={2} id={"add-the-new-query-selection-in-the-website-application"} nextElement={{
      "type": "jsx"
    }}>Add the New Query Selection in the Website Application</_Heading>
<Alert type="info" mdxType="Alert">
<p>{`This step is optional. If you’re writing custom queries and are executing the GraphQL API calls yourself, you can skip this step.`}</p>
</Alert>
<p>{`Website application doesn’t know about the plugin we’ve added in the Admin Area application. If you want this new field to be automatically queried with the rest of the page data, you need to add a plugin, just like in the Admin Area app.`}</p>
<Editor title="apps/website/src/plugins/pageSettings.ts" lang="ts" mdxType="Editor">
{`import { gql } from "graphql-tag";
import { AddQuerySelectionPlugin } from "@webiny/app/plugins/AddQuerySelectionPlugin";

export default new AddQuerySelectionPlugin({
  operationName: "PbGetPublishedPage",
  selectionPath: "pageBuilder.getPublishedPage.data",
  addSelection: gql\`
    {
      settings {
        general {
          password
        }
      }
    }
  \`
});`}
</Editor>
<Alert type="info" mdxType="Alert">
<p>{`The code above can be placed in the `}<inlineCode parentName="p">{`apps/website/src/plugins/pageSettings.ts`}</inlineCode>{` file, which doesn’t exist by default, so you will have to create it manually. Furthermore, once the file is created, make sure that it’s actually imported and registered in the `}<inlineCode parentName="p">{`apps/website/src/plugins/index.ts`}</inlineCode>{` entrypoint file.`}</p>
</Alert>
<p>{`Once the application is rebuilt, the `}<inlineCode parentName="p">{`password`}</inlineCode>{` field will be included in all `}<inlineCode parentName="p">{`PbGetPublishedPage`}</inlineCode>{` GraphQL query operations:`}</p>
<Image src={_Image4} alt={"Password Is Now Returned from the API"} mdxType="Image" />
<_Heading level={2} id={"handling-date-time-fields"} nextElement={{
      "type": "paragraph"
    }}>Handling DateTime Fields</_Heading>
<p>{`GraphQL `}<inlineCode parentName="p">{`DateTime`}</inlineCode>{` type has a little peculiarity you should be aware of, to avoid unnecessary debugging.
When you add a `}<inlineCode parentName="p">{`DateTime`}</inlineCode>{` scalar to your GraphQL Schema, and perform a mutation, that `}<inlineCode parentName="p">{`DateTime`}</inlineCode>{` field will be converted to a `}<a parentName="p" {...{
        "href": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date"
      }}>{`Date`}</a>{` object during input validation (performed by GraphQL Schema), and it will be passed as such to the resolver.`}</p>
<p>{`It’s the default behaviour of the `}<inlineCode parentName="p">{`DateTime`}</inlineCode>{` scalar, from the `}<a parentName="p" {...{
        "href": "https://www.npmjs.com/package/graphql-scalars"
      }}>{`graphql-scalars`}</a>{` library, which Webiny uses.`}</p>
<p>{`The following example demonstrates how you should handle the `}<inlineCode parentName="p">{`DateTime`}</inlineCode>{` fields in your code, when storing those fields to the database:`}</p>
<Editor title="Storing DateTime Fields to the Database" lang="ts" mdxType="Editor">
{`new PagePlugin<CustomPage>({
  beforeUpdate({ inputData, updateData }) {
    // Convert the Date object to ISO string.
    const eventStartISO = inputData.settings.general.eventStart.toISOString();

    // Now you can safely assign the value which will be stored to the database.
    updateData.settings.general.eventStart = eventStartISO;
  }
});`}
</Editor>
<_Heading level={2} id={"add-new-fields-to-list-published-pages-query"} nextElement={{
      "type": "paragraph"
    }}>Add New Fields to<code>listPublishedPages</code>Query</_Heading>
<p>{`If you need to add your new fields to the output of the `}<inlineCode parentName="p">{`listPublishedPages`}</inlineCode>{` query, there are a couple of things to know about this query.`}</p>
<p>{`List operations are performed on Elasticsearch, and the data that comes back from the ES index goes directly into GraphQL resolvers. The data that is stored in the ES index only contains partial page data, relevant for searching.`}</p>
<p>{`When you add new fields to page settings, that data is `}<em parentName="p">{`not`}</em>{` stored to ES, unless you provide a plugin which will add that data to the index.`}</p>
<p>{`You also need to extend the `}<inlineCode parentName="p">{`PbPageListItem`}</inlineCode>{` GraphQL type, which is returned from `}<inlineCode parentName="p">{`listPublishedPages`}</inlineCode>{`, as it is different from the one used in `}<inlineCode parentName="p">{`getPublishedPage`}</inlineCode>{` query.`}</p>
<p>{`The following example shows how you can add the new `}<inlineCode parentName="p">{`password`}</inlineCode>{` field into the ES index, so that it becomes available in the `}<inlineCode parentName="p">{`listPublishedPages`}</inlineCode>{` query:`}</p>
<Editor title="Add Data To Elasticsearch Index and GraphQL Schema" lang="ts" mdxType="Editor">
{`import { GraphQLSchemaPlugin } from "@webiny/handler-graphql/plugins";
import { IndexPageDataPlugin } from "@webiny/api-page-builder/plugins/IndexPageDataPlugin";

// Make sure to import the \`Context\` interface and pass it to the \`GraphQLSchemaPlugin\`
// plugin. Apart from making your application code type-safe, it will also make the
// interaction with the \`context\` object significantly easier.
import { Context } from "~/types";

export default [
  new GraphQLSchemaPlugin<Context>({
    typeDefs: /* GraphQL */ \`
      extend type PbPageListItem {
        password: String
      }
    \`
  }),

  // Add the new \`password\` field to the data going into ES index.
  new IndexPageDataPlugin<PageWithPassword>(({ data, page }) => {
    // \`data\` represents the current page's data that will be stored in Elasticsearch.
    // You can store your custom data anywhere on the object. It doesn't need to follow the actual settings structure
    // of the original \`page\` object, as this data is for \`list\` operations only.
    data.password = page.settings.general.password;
  })
];`}
</Editor>
<p>{`With these plugins in place, you can now access the `}<inlineCode parentName="p">{`password`}</inlineCode>{` field on the `}<inlineCode parentName="p">{`listPublishedPages`}</inlineCode>{` query:`}</p>
<Image src={_Image5} alt={"Password Field in the listPublishedPages Query"} mdxType="Image" />
<Alert type="info" title="Important" mdxType="Alert">
<p>{`After these plugins are deployed, you need to `}<strong parentName="p">{`publish`}</strong>{` the page, to trigger ES index update. Only then your new data will be available for querying in the `}<inlineCode parentName="p">{`listPublishedPages`}</inlineCode>{` query.`}</p>
</Alert>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;