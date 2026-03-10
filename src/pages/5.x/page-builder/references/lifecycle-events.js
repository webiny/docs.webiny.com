/* @jsxRuntime classic */
/* @jsx mdx */

import React from 'react'
import { mdx } from '@mdx-js/react'

import _Link from 'next/link'
import { Heading as _Heading } from '@/components/Heading'
import { Alert } from "@/components/Alert";
import { Layout as _Layout } from "@/layouts/DocumentationLayout"

import _navigation from "@/data/navigation.0a14da.json";

import _versions from "@/data/versions.778dba.json";

const Layout = _Layout;
const pageData = {
  "title": "Lifecycle Events",
  "description": "Learn about Page Builder lifecycle events, how they work and how to subscribe to a lifecycle event.",
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
  "title": "System",
  "slug": "system",
  "children": [{
    "title": "onBeforeInstall",
    "slug": "on-before-install",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onAfterInstall",
    "slug": "on-after-install",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }]
}, {
  "title": "Settings",
  "slug": "settings",
  "children": [{
    "title": "onBeforeSettingsUpdate",
    "slug": "on-before-settings-update",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onAfterSettingsUpdate",
    "slug": "on-after-settings-update",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }]
}, {
  "title": "Categories",
  "slug": "categories",
  "children": [{
    "title": "onBeforeCategoryCreate",
    "slug": "on-before-category-create",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onAfterCategoryCreate",
    "slug": "on-after-category-create",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onBeforeCategoryUpdate",
    "slug": "on-before-category-update",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onAfterCategoryUpdate",
    "slug": "on-after-category-update",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onBeforeCategoryDelete",
    "slug": "on-before-category-delete",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onAfterCategoryDelete",
    "slug": "on-after-category-delete",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }]
}, {
  "title": "Menus",
  "slug": "menus",
  "children": [{
    "title": "onBeforeMenuCreate",
    "slug": "on-before-menu-create",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onAfterMenuCreate",
    "slug": "on-after-menu-create",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onBeforeMenuUpdate",
    "slug": "on-before-menu-update",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onAfterMenuUpdate",
    "slug": "on-after-menu-update",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onBeforeMenuDelete",
    "slug": "on-before-menu-delete",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onAfterMenuDelete",
    "slug": "on-after-menu-delete",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }]
}, {
  "title": "Page Elements",
  "slug": "page-elements",
  "children": [{
    "title": "onBeforePageElementCreate",
    "slug": "on-before-page-element-create",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onAfterPageElementCreate",
    "slug": "on-after-page-element-create",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onBeforePageElementUpdate",
    "slug": "on-before-page-element-update",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onAfterPageElementUpdate",
    "slug": "on-after-page-element-update",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onBeforePageElementDelete",
    "slug": "on-before-page-element-delete",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onAfterPageElementDelete",
    "slug": "on-after-page-element-delete",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }]
}, {
  "title": "Pages",
  "slug": "pages",
  "children": [{
    "title": "onBeforePageCreate",
    "slug": "on-before-page-create",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onAfterPageCreate",
    "slug": "on-after-page-create",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onBeforePageCreateFrom",
    "slug": "on-before-page-create-from",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onAfterPageCreateFrom",
    "slug": "on-after-page-create-from",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onBeforePageUpdate",
    "slug": "on-before-page-update",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onAfterPageUpdate",
    "slug": "on-after-page-update",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onBeforePageDelete",
    "slug": "on-before-page-delete",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onAfterPageDelete",
    "slug": "on-after-page-delete",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onBeforePagePublish",
    "slug": "on-before-page-publish",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onAfterPagePublish",
    "slug": "on-after-page-publish",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onBeforePageUnpublish",
    "slug": "on-before-page-unpublish",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onAfterPageUnpublish",
    "slug": "on-after-page-unpublish",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onBeforePageRequestChanges",
    "slug": "on-before-page-request-changes",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onAfterPageRequestChanges",
    "slug": "on-after-page-request-changes",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onBeforePageRequestReview",
    "slug": "on-before-page-request-review",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onAfterPageRequestReview",
    "slug": "on-after-page-request-review",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }]
}, {
  "title": "Registering Lifecycle Event Subscriptions",
  "slug": "registering-lifecycle-event-subscriptions",
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



<Alert type="success" title="What you'll learn" mdxType="Alert">
<ul>
<li parentName="ul">{`what are lifecycle events`}</li>
<li parentName="ul">{`how lifecycle events work`}</li>
<li parentName="ul">{`how to subscribe to a lifecycle event`}</li>
</ul>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`In our Page Builder we provide lifecycle events available for you to hook into.
Lifecycle events are triggered before (`}<inlineCode parentName="p">{`onBefore`}</inlineCode>{` keyword) and after (`}<inlineCode parentName="p">{`onAfter`}</inlineCode>{` keyword) the data is stored into the database.`}</p>
<p>{`With `}<inlineCode parentName="p">{`onBefore`}</inlineCode>{` events you can change the data that is being stored into the database, so be careful with that.`}</p>
<p>{`With the lifecycle events you can hook into a number of different operations, for example:`}</p>
<ul>
<li parentName="ul">{`change the page data which is going to be stored`}</li>
<li parentName="ul">{`notify another system that new page was stored`}</li>
</ul>
<_Heading level={2} id={"system"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>System</_Heading>
<_Heading level={3} id={"on-before-install"} nextElement={{
      "type": "paragraph"
    }}>onBeforeInstall</_Heading>
<p>{`This event is triggered before the installation of the Page Builder and insertion of initial `}<inlineCode parentName="p">{`Welcome to Webiny`}</inlineCode>{` and `}<inlineCode parentName="p">{`Not Found`}</inlineCode>{` pages.`}</p>
<_Heading level={4} id={"event-arguments"} nextElement={{
      "type": "table",
      "align": [null, null]
    }}>Event Arguments</_Heading>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Property`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`tenant`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`ID of the current tenant`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<PbContext>(async context => {
  context.pageBuilder.onBeforeInstall.subscribe(async ({ tenant }) => {
    await notifyAnotherSystemThatPageBuilderIsGettingInstalled({ tenant });
  });
});`}
</Editor>
<_Heading level={3} id={"on-after-install"} nextElement={{
      "type": "paragraph"
    }}>onAfterInstall</_Heading>
<p>{`This event is triggered after the installation of the Page Builder and insertion of initial `}<inlineCode parentName="p">{`Welcome to Webiny`}</inlineCode>{` and `}<inlineCode parentName="p">{`Not Found`}</inlineCode>{` pages.`}</p>
<_Heading level={4} id={"event-arguments"} nextElement={{
      "type": "table",
      "align": [null, null]
    }}>Event Arguments</_Heading>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Property`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`tenant`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`ID of the current tenant`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<PbContext>(async context => {
  context.pageBuilder.onAfterInstall.subscribe(async ({ tenant }) => {
    await notifyAnotherSystemThatPageBuilderWasInstalled({ tenant });
  });
});`}
</Editor>
<_Heading level={2} id={"settings"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Settings</_Heading>
<_Heading level={3} id={"on-before-settings-update"} nextElement={{
      "type": "paragraph"
    }}>onBeforeSettingsUpdate</_Heading>
<p>{`This event is triggered before settings data is going to be stored.`}</p>
<_Heading level={4} id={"event-arguments"} nextElement={{
      "type": "table",
      "align": [null, null]
    }}>Event Arguments</_Heading>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Property`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`original`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Settings object which was received from the database`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`settings`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Settings object which was changed by user input`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`meta`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Metadata`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`meta.diff.pages`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Array which contains which pages were changed`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<PbContext>(async context => {
  context.pageBuilder.onBeforeSettingsUpdate.subscribe(async ({ meta }) => {
    await triggerPreparePrerenderingOfChangedPages({ pages: meta.diff.pages });
  });
});`}
</Editor>
<_Heading level={3} id={"on-after-settings-update"} nextElement={{
      "type": "paragraph"
    }}>onAfterSettingsUpdate</_Heading>
<p>{`This event is triggered after settings data was stored.`}</p>
<_Heading level={4} id={"event-arguments"} nextElement={{
      "type": "table",
      "align": [null, null]
    }}>Event Arguments</_Heading>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Property`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`original`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Settings object which was received from the database`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`settings`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Settings object which was changed by user input`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`meta`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Metadata`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`meta.diff.pages`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Array which contains calculated page changes`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<PbContext>(async context => {
  context.pageBuilder.onAfterSettingsUpdate.subscribe(async ({ original, settings, meta }) => {
    await storeSettingsToAnotherSystem({ original, settings });
    await triggerPrerenderingOfChangedPages({ pages: meta.diff.pages });
  });
});`}
</Editor>
<_Heading level={2} id={"categories"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Categories</_Heading>
<_Heading level={3} id={"on-before-category-create"} nextElement={{
      "type": "paragraph"
    }}>onBeforeCategoryCreate</_Heading>
<p>{`This event is triggered before new category is stored into the database.`}</p>
<_Heading level={4} id={"event-arguments"} nextElement={{
      "type": "table",
      "align": [null, null]
    }}>Event Arguments</_Heading>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Property`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`category`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Category object which is going to be stored`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<PbContext>(async context => {
  context.pageBuilder.onBeforeCategoryCreate.subscribe(async ({ category }) => {
    /**
     * For example, you do not want the category name to contain the character "a".
     * You can check for that character here and throw an error. Or remove it.
     */
    if (category.name.match(/a/) === null) {
      return;
    }
    category.name = category.name.replace(/a/g, "");
  });
});`}
</Editor>
<_Heading level={3} id={"on-after-category-create"} nextElement={{
      "type": "paragraph"
    }}>onAfterCategoryCreate</_Heading>
<p>{`This event is triggered after new category is stored into the database.`}</p>
<_Heading level={4} id={"event-arguments"} nextElement={{
      "type": "table",
      "align": [null, null]
    }}>Event Arguments</_Heading>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Property`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`category`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Category object which was stored`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<PbContext>(async context => {
  context.pageBuilder.onAfterCategoryCreate.subscribe(async ({ category }) => {
    await storeCategoryToAnotherSystem({ category });
  });
});`}
</Editor>
<_Heading level={3} id={"on-before-category-update"} nextElement={{
      "type": "paragraph"
    }}>onBeforeCategoryUpdate</_Heading>
<p>{`This event is triggered before existing category is updated and stored.`}</p>
<_Heading level={4} id={"event-arguments"} nextElement={{
      "type": "table",
      "align": [null, null]
    }}>Event Arguments</_Heading>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Property`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`original`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Category object which was received from the database`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`category`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Category object which is going to be stored`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<PbContext>(async context => {
  context.pageBuilder.onBeforeCategoryUpdate.subscribe(async ({ original, category }) => {
    /**
     * For example, you do not want to allow category slug changes.
     */
    if (original.slug === category.slug) {
      return;
    }
    throw new Error(\`You are not allowed to change the category slug.\`);
  });
});`}
</Editor>
<_Heading level={3} id={"on-after-category-update"} nextElement={{
      "type": "paragraph"
    }}>onAfterCategoryUpdate</_Heading>
<p>{`This event is triggered after existing category is updated and stored.`}</p>
<_Heading level={4} id={"event-arguments"} nextElement={{
      "type": "table",
      "align": [null, null]
    }}>Event Arguments</_Heading>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Property`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`original`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Category object which was received from the database`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`category`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Category object which was stored`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<PbContext>(async context => {
  context.pageBuilder.onAfterCategoryUpdate.subscribe(async ({ original, category }) => {
    await storeCategoryToAnotherSystem({ original, category });
  });
});`}
</Editor>
<_Heading level={3} id={"on-before-category-delete"} nextElement={{
      "type": "paragraph"
    }}>onBeforeCategoryDelete</_Heading>
<p>{`This event is triggered before category is deleted from the database.`}</p>
<_Heading level={4} id={"event-arguments"} nextElement={{
      "type": "table",
      "align": [null, null]
    }}>Event Arguments</_Heading>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Property`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`category`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Category object which is going to be deleted`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<PbContext>(async context => {
  context.pageBuilder.onBeforeCategoryDelete.subscribe(async ({ original, category }) => {
    /**
     * For example, we do not want to allow any category with a name which contains character "b" to be deleted.
     */
    if (category.name.match(/b/) === null) {
      return;
    }
    throw new Error(\`You are not allowed to delete a category with charcter "b" in its name.\`);
  });
});`}
</Editor>
<_Heading level={3} id={"on-after-category-delete"} nextElement={{
      "type": "paragraph"
    }}>onAfterCategoryDelete</_Heading>
<p>{`This event is triggered after category is deleted from the database.`}</p>
<_Heading level={4} id={"event-arguments"} nextElement={{
      "type": "table",
      "align": [null, null]
    }}>Event Arguments</_Heading>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Property`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`category`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Category object which was deleted`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<PbContext>(async context => {
  context.pageBuilder.onAfterCategoryDelete.subscribe(async ({ original, category }) => {
    await deleteCategoryFromAnotherSystem({ original, category });
  });
});`}
</Editor>
<_Heading level={2} id={"menus"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Menus</_Heading>
<_Heading level={3} id={"on-before-menu-create"} nextElement={{
      "type": "paragraph"
    }}>onBeforeMenuCreate</_Heading>
<p>{`This event is triggered before new menu is stored into the database.`}</p>
<_Heading level={4} id={"event-arguments"} nextElement={{
      "type": "table",
      "align": [null, null]
    }}>Event Arguments</_Heading>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Property`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`input`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Input received from user`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`menu`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Menu object which is going to be stored`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<PbContext>(async context => {
  context.pageBuilder.onBeforeMenuCreate.subscribe(async ({ menu }) => {
    /**
     * For example, do not allow empty menu description.
     */
    if (menu.description) {
      return;
    }
    throw new Error(\`Empty menu description is not allowed.\`);
  });
});`}
</Editor>
<_Heading level={3} id={"on-after-menu-create"} nextElement={{
      "type": "paragraph"
    }}>onAfterMenuCreate</_Heading>
<p>{`This event is triggered after new menu is stored into the database.`}</p>
<_Heading level={4} id={"event-arguments"} nextElement={{
      "type": "table",
      "align": [null, null]
    }}>Event Arguments</_Heading>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Property`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`input`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Input received from user`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`menu`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Menu object which was stored`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<PbContext>(async context => {
  context.pageBuilder.onAfterMenuCreate.subscribe(async ({ menu }) => {
    await notifyAnotherSystemAboutNewMenu({ menu });
  });
});`}
</Editor>
<_Heading level={3} id={"on-before-menu-update"} nextElement={{
      "type": "paragraph"
    }}>onBeforeMenuUpdate</_Heading>
<p>{`This event is triggered before existing menu is changed and stored.`}</p>
<_Heading level={4} id={"event-arguments"} nextElement={{
      "type": "table",
      "align": [null, null]
    }}>Event Arguments</_Heading>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Property`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`input`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Input received from user`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`original`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Menu object which was received from the database`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`menu`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Menu object which is going to be stored`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<PbContext>(async context => {
  context.pageBuilder.onBeforeMenuUpdate.subscribe(async ({ menu }) => {
    /**
     * For example, do not allow empty menu description.
     */
    if (menu.description) {
      return;
    }
    throw new Error(\`Empty menu description is not allowed.\`);
  });
});`}
</Editor>
<_Heading level={3} id={"on-after-menu-update"} nextElement={{
      "type": "paragraph"
    }}>onAfterMenuUpdate</_Heading>
<p>{`This event is triggered after existing menu is changed and stored.`}</p>
<_Heading level={4} id={"event-arguments"} nextElement={{
      "type": "table",
      "align": [null, null]
    }}>Event Arguments</_Heading>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Property`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`input`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Input received from user`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`original`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Menu object which was received from the database`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`menu`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Menu object which was stored`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<PbContext>(async context => {
  context.pageBuilder.onAfterMenuUpdate.subscribe(async ({ original, menu }) => {
    await notifyAnotherSystemAboutMenuUpdate({ original, menu });
  });
});`}
</Editor>
<_Heading level={3} id={"on-before-menu-delete"} nextElement={{
      "type": "paragraph"
    }}>onBeforeMenuDelete</_Heading>
<p>{`This event is triggered before existing menu is deleted from the database.`}</p>
<_Heading level={4} id={"event-arguments"} nextElement={{
      "type": "table",
      "align": [null, null]
    }}>Event Arguments</_Heading>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Property`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`menu`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Menu object which is going to be deleted`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<PbContext>(async context => {
  context.pageBuilder.onBeforeMenuDelete.subscribe(async ({ menu }) => {
    /**
     * For example, do not allow menu with non-empty description to be deleted.
     */
    if (!menu.description) {
      return;
    }
    throw new Error(\`Menu with non-empty description cannot be deleted.\`);
  });
});`}
</Editor>
<_Heading level={3} id={"on-after-menu-delete"} nextElement={{
      "type": "paragraph"
    }}>onAfterMenuDelete</_Heading>
<p>{`This event is triggered after existing menu is deleted from the database.`}</p>
<_Heading level={4} id={"event-arguments"} nextElement={{
      "type": "table",
      "align": [null, null]
    }}>Event Arguments</_Heading>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Property`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`menu`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Menu object which was deleted`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<PbContext>(async context => {
  context.pageBuilder.onAfterMenuDelete.subscribe(async ({ menu }) => {
    await notifyAnotherSystemAboutMenuDelete({ menu });
  });
});`}
</Editor>
<_Heading level={2} id={"page-elements"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Page Elements</_Heading>
<_Heading level={3} id={"on-before-page-element-create"} nextElement={{
      "type": "paragraph"
    }}>onBeforePageElementCreate</_Heading>
<p>{`This event is triggered before new page element is stored into the database.`}</p>
<_Heading level={4} id={"event-arguments"} nextElement={{
      "type": "table",
      "align": [null, null]
    }}>Event Arguments</_Heading>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Property`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`pageElement`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Page element object which is going to be stored`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<PbContext>(async context => {
  context.pageBuilder.onBeforePageElementCreate.subscribe(async ({ pageElement }) => {
    /**
     * For example, change the default generated ID to uuid v4
     */
    pageElement.id = uuidv4();
  });
});`}
</Editor>
<_Heading level={3} id={"on-after-page-element-create"} nextElement={{
      "type": "paragraph"
    }}>onAfterPageElementCreate</_Heading>
<p>{`This event is triggered after new page element is stored into the database.`}</p>
<_Heading level={4} id={"event-arguments"} nextElement={{
      "type": "table",
      "align": [null, null]
    }}>Event Arguments</_Heading>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Property`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`pageElement`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Page element object which is stored`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<PbContext>(async context => {
  context.pageBuilder.onAfterPageElementCreate.subscribe(async ({ pageElement }) => {
    await notifyAnotherSystemAboutNewPageElement({ pageElement });
  });
});`}
</Editor>
<_Heading level={3} id={"on-before-page-element-update"} nextElement={{
      "type": "paragraph"
    }}>onBeforePageElementUpdate</_Heading>
<p>{`This event is triggered before existing page element is changed and stored.`}</p>
<_Heading level={4} id={"event-arguments"} nextElement={{
      "type": "table",
      "align": [null, null]
    }}>Event Arguments</_Heading>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Property`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`original`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Page element object which was received from the database`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`pageElement`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Page element object which is going to be stored`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<PbContext>(async context => {
  context.pageBuilder.onBeforePageElementUpdate.subscribe(async ({ original, pageElement }) => {
    /**
     * For example, do not allow id to be changed
     */
    if (original.id === pageElement.id) {
      return;
    }
    throw new Error(\`You cannot change the ID of the page element.\`);
  });
});`}
</Editor>
<_Heading level={3} id={"on-after-page-element-update"} nextElement={{
      "type": "paragraph"
    }}>onAfterPageElementUpdate</_Heading>
<p>{`This event is triggered after existing page element is changed and stored.`}</p>
<_Heading level={4} id={"event-arguments"} nextElement={{
      "type": "table",
      "align": [null, null]
    }}>Event Arguments</_Heading>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Property`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`original`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Page element object which was received from the database`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`pageElement`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Page element object which is stored`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<PbContext>(async context => {
  context.pageBuilder.onAfterPageElementUpdate.subscribe(async ({ original, pageElement }) => {
    await notifyAnotherSystemAboutPageElementUpdate({ original, pageElement });
  });
});`}
</Editor>
<_Heading level={3} id={"on-before-page-element-delete"} nextElement={{
      "type": "paragraph"
    }}>onBeforePageElementDelete</_Heading>
<p>{`This event is triggered before page element is deleted from the database.`}</p>
<_Heading level={4} id={"event-arguments"} nextElement={{
      "type": "table",
      "align": [null, null]
    }}>Event Arguments</_Heading>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Property`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`pageElement`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Page element object which is going to be deleted`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<PbContext>(async context => {
  context.pageBuilder.onBeforePageElementDelete.subscribe(async ({ pageElement }) => {
    /**
     * For example, do not allow ANY page element to be deleted.
     */
    throw new Error(\`You cannot delete page element.\`);
  });
});`}
</Editor>
<_Heading level={3} id={"on-after-page-element-delete"} nextElement={{
      "type": "paragraph"
    }}>onAfterPageElementDelete</_Heading>
<p>{`This event is triggered after page element is deleted from the database.`}</p>
<_Heading level={4} id={"event-arguments"} nextElement={{
      "type": "table",
      "align": [null, null]
    }}>Event Arguments</_Heading>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Property`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`pageElement`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Page element object which was deleted`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<PbContext>(async context => {
  context.pageBuilder.onAfterPageElementDelete.subscribe(async ({ pageElement }) => {
    await notifyAnotherSystemAboutPageElementDelete({ pageElement });
  });
});`}
</Editor>
<_Heading level={2} id={"pages"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Pages</_Heading>
<_Heading level={3} id={"on-before-page-create"} nextElement={{
      "type": "paragraph"
    }}>onBeforePageCreate</_Heading>
<p>{`This event is triggered before a new page is stored into the database. This event is not triggered when creating a page from another page.`}</p>
<_Heading level={4} id={"event-arguments"} nextElement={{
      "type": "table",
      "align": [null, null]
    }}>Event Arguments</_Heading>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Property`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`page`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Page object which is going to be stored`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<PbContext>(async context => {
  context.pageBuilder.onBeforePageCreate.subscribe(async ({ page }) => {
    /**
     * For example, set default title.
     */
    page.title = \`Page created on \${new Date().toISOString()}\`;
  });
});`}
</Editor>
<_Heading level={3} id={"on-after-page-create"} nextElement={{
      "type": "paragraph"
    }}>onAfterPageCreate</_Heading>
<p>{`This event is triggered after new page is stored into the database.`}</p>
<_Heading level={4} id={"event-arguments"} nextElement={{
      "type": "table",
      "align": [null, null]
    }}>Event Arguments</_Heading>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Property`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`page`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Page object which was stored`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<PbContext>(async context => {
  context.pageBuilder.onAfterPageCreate.subscribe(async ({ page }) => {
    /**
     * For example, notify another system that a new page was created.
     */
    await notifyAnotherSystemAboutNewPage({ page });
  });
});`}
</Editor>
<_Heading level={3} id={"on-before-page-create-from"} nextElement={{
      "type": "paragraph"
    }}>onBeforePageCreateFrom</_Heading>
<p>{`This event is triggered before a new page, which is created from another page, is stored into the database.`}</p>
<_Heading level={4} id={"event-arguments"} nextElement={{
      "type": "table",
      "align": [null, null]
    }}>Event Arguments</_Heading>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Property`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`original`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Page object which is the base for a new page`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`page`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Page object which is going to be stored`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<PbContext>(async context => {
  context.pageBuilder.onBeforePageCreateFrom.subscribe(async ({ original, page }) => {
    /**
     * For example, change the title of the page so user knows it's a clone.
     */
    page.title = \`Page is a clone of \${original.title}\`;
  });
});`}
</Editor>
<_Heading level={3} id={"on-after-page-create-from"} nextElement={{
      "type": "paragraph"
    }}>onAfterPageCreateFrom</_Heading>
<p>{`This event is triggered after a new page, which is created from another page, is stored into the database.`}</p>
<_Heading level={4} id={"event-arguments"} nextElement={{
      "type": "table",
      "align": [null, null]
    }}>Event Arguments</_Heading>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Property`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`original`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Page object which is the base for a new page`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`page`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Page object which was stored`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<PbContext>(async context => {
  context.pageBuilder.onAfterPageCreateFrom.subscribe(async ({ original, page }) => {
    /**
     * For example, notify another system that a new page was created from the original one.
     */
    await notifyAnotherSystemAboutClonedPage({ original, page });
  });
});`}
</Editor>
<_Heading level={3} id={"on-before-page-update"} nextElement={{
      "type": "paragraph"
    }}>onBeforePageUpdate</_Heading>
<p>{`This event is triggered before a page is changed and stored into the database.`}</p>
<_Heading level={4} id={"event-arguments"} nextElement={{
      "type": "table",
      "align": [null, null]
    }}>Event Arguments</_Heading>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Property`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`original`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Page object which was received from the database`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`page`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Page object which is going to be stored`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<PbContext>(async context => {
  context.pageBuilder.onBeforePageUpdate.subscribe(async ({ original, page }) => {
    /**
     * For example, check if the page path is unique and if it's not, add some random string at the end of the path.
     */
    const unique = await yourCustomIsUniqueFunction(page);
    if (unique) {
      return;
    }
    page.path = \`\${page.path}-\${yourRandomStringGenerator()}\`;
  });
});`}
</Editor>
<_Heading level={3} id={"on-after-page-update"} nextElement={{
      "type": "paragraph"
    }}>onAfterPageUpdate</_Heading>
<p>{`This event is triggered after a page changed and stored into the database.`}</p>
<_Heading level={4} id={"event-arguments"} nextElement={{
      "type": "table",
      "align": [null, null]
    }}>Event Arguments</_Heading>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Property`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`original`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Page object which was received from the database`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`page`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Page object which was stored`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<PbContext>(async context => {
  context.pageBuilder.onAfterPageUpdate.subscribe(async ({ original, page }) => {
    /**
     * For example, notify another system that a page was changed and stored.
     */
    await notifyAnotherSystemAboutPageUpdate({ original, page });
  });
});`}
</Editor>
<_Heading level={3} id={"on-before-page-delete"} nextElement={{
      "type": "paragraph"
    }}>onBeforePageDelete</_Heading>
<p>{`This event is triggered before a page is deleted from the database.`}</p>
<_Heading level={4} id={"event-arguments"} nextElement={{
      "type": "table",
      "align": [null, null]
    }}>Event Arguments</_Heading>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Property`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`page`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Page object which is going to be deleted`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<PbContext>(async context => {
  context.pageBuilder.onBeforePageDelete.subscribe(async ({ page }) => {
    /**
     * For example, we do not allow a page which has "index" set as path to be deleted
     */
    if (page.path !== "index") {
      return;
    }
    throw new Error(\`Page with path "index" cannot be deleted.\`);
  });
});`}
</Editor>
<_Heading level={3} id={"on-after-page-delete"} nextElement={{
      "type": "paragraph"
    }}>onAfterPageDelete</_Heading>
<p>{`This event is triggered after a page is deleted from the database.`}</p>
<_Heading level={4} id={"event-arguments"} nextElement={{
      "type": "table",
      "align": [null, null]
    }}>Event Arguments</_Heading>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Property`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`page`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Page object which was deleted`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<PbContext>(async context => {
  context.pageBuilder.onAfterPageDelete.subscribe(async ({ page }) => {
    /**
     * For example, notify another system that a page was deleted.
     */
    await notifyAnotherSystemAboutPageDelete({ page });
  });
});`}
</Editor>
<_Heading level={3} id={"on-before-page-publish"} nextElement={{
      "type": "paragraph"
    }}>onBeforePagePublish</_Heading>
<p>{`This event is triggered before a page is changed and stored into the database as the published one.`}</p>
<_Heading level={4} id={"event-arguments"} nextElement={{
      "type": "table",
      "align": [null, null]
    }}>Event Arguments</_Heading>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Property`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`publishedPage`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Page object that is set as the published one in the database - published revision of page we are publishing`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`latestPage`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Page object of the last revision of the page we are publishing`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`page`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Page object which is going to be published`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<PbContext>(async context => {
  context.pageBuilder.onBeforePagePublish.subscribe(async ({ latestPage, page }) => {
    /**
     * For example, we do not allow a page which is not the latest one to be published.
     */
    if (latestPage.version > page.version) {
      throw new Error(\`Page you are trying to publish is not the latest revision of the page.\`);
    }
  });
});`}
</Editor>
<_Heading level={3} id={"on-after-page-publish"} nextElement={{
      "type": "paragraph"
    }}>onAfterPagePublish</_Heading>
<p>{`This event is triggered after a page is changed and stored into the database as the published one.`}</p>
<_Heading level={4} id={"event-arguments"} nextElement={{
      "type": "table",
      "align": [null, null]
    }}>Event Arguments</_Heading>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Property`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`publishedPage`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Page object that is set as the published one in the database - published revision of page we are publishing`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`latestPage`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Page object of the last revision of the page we are publishing`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`page`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Page object which was published`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<PbContext>(async context => {
  context.pageBuilder.onAfterPagePublish.subscribe(async ({ publishedPage, latestPage, page }) => {
    /**
     * For example, notify another system of a published page.
     */
    await notifyAnotherSystemAboutPublishedPage({ publishedPage, page });
  });
});`}
</Editor>
<_Heading level={3} id={"on-before-page-unpublish"} nextElement={{
      "type": "paragraph"
    }}>onBeforePageUnpublish</_Heading>
<p>{`This event is triggered before a page is changed and stored into the database.`}</p>
<_Heading level={4} id={"event-arguments"} nextElement={{
      "type": "table",
      "align": [null, null]
    }}>Event Arguments</_Heading>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Property`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`latestPage`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Page object of the last revision of the page we are unpublishing`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`page`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Page object which is going to be unpublished`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<PbContext>(async context => {
  context.pageBuilder.onBeforePageUnpublish.subscribe(async ({ latestPage, page }) => {
    /**
     * For example, we do not allow a page which is the latest one to be unpublished.
     */
    if (latestPage.version === page.version) {
      throw new Error(
        \`Page you are trying to unpublish is the latest revision of the page and it is not allowed to unpublish it.\`
      );
    }
  });
});`}
</Editor>
<_Heading level={3} id={"on-after-page-unpublish"} nextElement={{
      "type": "paragraph"
    }}>onAfterPageUnpublish</_Heading>
<p>{`This event is triggered after a page is changed and stored into the database.`}</p>
<_Heading level={4} id={"event-arguments"} nextElement={{
      "type": "table",
      "align": [null, null]
    }}>Event Arguments</_Heading>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Property`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`latestPage`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Page object of the last revision of the page we are unpublishing`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`page`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Page object which was unpublished`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<PbContext>(async context => {
  context.pageBuilder.onAfterPageUnpublish.subscribe(async ({ page }) => {
    /**
     * For example, notify another system that page was unpublished.
     */
    await notifyAnotherSystemAboutUnpublishedPage({ page });
  });
});`}
</Editor>
<_Heading level={3} id={"on-before-page-request-changes"} nextElement={{
      "type": "paragraph"
    }}>onBeforePageRequestChanges</_Heading>
<p>{`This event is triggered before a page is marked as Requested Changes status and stored into the database.`}</p>
<_Heading level={4} id={"event-arguments"} nextElement={{
      "type": "table",
      "align": [null, null]
    }}>Event Arguments</_Heading>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Property`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`latestPage`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Page object of the last revision of the page we are requesting changes on`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`page`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Page object which is going to be set into Requested Changes status`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<PbContext>(async context => {
  context.pageBuilder.onBeforePageRequestChanges.subscribe(async ({ page }) => {
    /**
     * For example, we will check another system if request changes can be done on this page.
     */
    const allowed = await canRequestChangesBeDone({ page });
    if (allowed) {
      return;
    }
    throw new Error(\`You cannot request changes on this page.\`);
  });
});`}
</Editor>
<_Heading level={3} id={"on-after-page-request-changes"} nextElement={{
      "type": "paragraph"
    }}>onAfterPageRequestChanges</_Heading>
<p>{`This event is triggered after a page is marked as Requested Changes status and stored into the database.`}</p>
<_Heading level={4} id={"event-arguments"} nextElement={{
      "type": "table",
      "align": [null, null]
    }}>Event Arguments</_Heading>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Property`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`latestPage`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Page object of the last revision of the page we are requesting changes on`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`page`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Page object which was set into Requested Changes status and stored`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<PbContext>(async context => {
  context.pageBuilder.onAfterPageRequestChanges.subscribe(async ({ page }) => {
    /**
     * For example, notify another system that a request changes was set on this page.
     */
    await notifyAnotherSystemAboutRequestChanges({ page });
  });
});`}
</Editor>
<_Heading level={3} id={"on-before-page-request-review"} nextElement={{
      "type": "paragraph"
    }}>onBeforePageRequestReview</_Heading>
<p>{`This event is triggered before a page is marked as Requested Review status and stored into the database.`}</p>
<_Heading level={4} id={"event-arguments"} nextElement={{
      "type": "table",
      "align": [null, null]
    }}>Event Arguments</_Heading>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Property`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`latestPage`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Page object of the last revision of the page we are requesting review on`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`page`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Page object which is going to be set into Requested Review status`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<PbContext>(async context => {
  context.pageBuilder.onBeforePageRequestReview.subscribe(async ({ page }) => {
    /**
     * For example, we will check another system if request review can be done on this page.
     */
    const allowed = await canRequestReviewBeDone({ page });
    if (allowed) {
      return;
    }
    throw new Error(\`You cannot request review on this page.\`);
  });
});`}
</Editor>
<_Heading level={3} id={"on-after-page-request-review"} nextElement={{
      "type": "paragraph"
    }}>onAfterPageRequestReview</_Heading>
<p>{`This event is triggered after a page is marked as Requested Review status and stored into the database.`}</p>
<_Heading level={4} id={"event-arguments"} nextElement={{
      "type": "table",
      "align": [null, null]
    }}>Event Arguments</_Heading>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Property`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`latestPage`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Page object of the last revision of the page we are requesting review on`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`page`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Page object which was set into Requested Review status and stored`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<PbContext>(async context => {
  context.pageBuilder.onAfterPageRequestReview.subscribe(async ({ page }) => {
    /**
     * For example, notify another system that a request review was set on this page.
     */
    await notifyAnotherSystemAboutRequestReview({ page });
  });
});`}
</Editor>
<Alert type="danger" mdxType="Alert">
<p>{`Please, be aware that you can change what ever you want on the object before it is stored into the database, so be careful with changing the data.`}</p>
</Alert>
<_Heading level={2} id={"registering-lifecycle-event-subscriptions"} nextElement={{
      "type": "paragraph"
    }}>Registering Lifecycle Event Subscriptions</_Heading>
<p>{`For the subscriptions (your code) to be run, you must register it in the `}<inlineCode parentName="p">{`createHandler`}</inlineCode>{` in the `}<inlineCode parentName="p">{`api/code/graphql/src/index.ts`}</inlineCode>{` file.`}</p>
<Editor title="api/code/graphql/src/index.ts" lang="typescript" mdxType="Editor">
{`const handler = createHandler({
  plugins: [
    // ... rest of plugins
    new ContextPlugin<PbContext>(async context => {
      context.pageBuilder.onBeforePageCreate.subscribe(async ({ page }) => {
        // do your magic here
      });
    })
  ]
});`}
</Editor>
<Alert type="warning" mdxType="Alert">
<p>{`Please, be aware that the order of subscribing matters, so if you want some event subscription to be executed before some other one, add it first.`}</p>
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