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
  "description": "Learn about Headless CMS lifecycle events, how they work and how to subscribe to a lifecycle event.",
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
    "title": "onSystemBeforeInstall",
    "slug": "on-system-before-install",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onSystemAfterInstall",
    "slug": "on-system-after-install",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onSystemInstallError",
    "slug": "on-system-install-error",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }]
}, {
  "title": "Groups",
  "slug": "groups",
  "children": [{
    "title": "onGroupBeforeCreate",
    "slug": "on-group-before-create",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onGroupAfterCreate",
    "slug": "on-group-after-create",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onGroupCreateError",
    "slug": "on-group-create-error",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onGroupBeforeUpdate",
    "slug": "on-group-before-update",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onGroupAfterUpdate",
    "slug": "on-group-after-update",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onGroupUpdateError",
    "slug": "on-group-update-error",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onGroupBeforeDelete",
    "slug": "on-group-before-delete",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onGroupAfterDelete",
    "slug": "on-group-after-delete",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onGroupDeleteError",
    "slug": "on-group-delete-error",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }]
}, {
  "title": "Model",
  "slug": "model",
  "children": [{
    "title": "onModelBeforeCreate",
    "slug": "on-model-before-create",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onModelAfterCreate",
    "slug": "on-model-after-create",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onModelCreateError",
    "slug": "on-model-create-error",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onModelBeforeCreateFrom",
    "slug": "on-model-before-create-from",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onModelAfterCreateFrom",
    "slug": "on-model-after-create-from",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onModelCreateFromError",
    "slug": "on-model-create-from-error",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onModelBeforeUpdate",
    "slug": "on-model-before-update",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onModelAfterUpdate",
    "slug": "on-model-after-update",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onModelUpdateError",
    "slug": "on-model-update-error",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onModelBeforeDelete",
    "slug": "on-model-before-delete",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onModelAfterDelete",
    "slug": "on-model-after-delete",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onModelDeleteError",
    "slug": "on-model-delete-error",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }]
}, {
  "title": "Entry",
  "slug": "entry",
  "children": [{
    "title": "onEntryBeforeCreate",
    "slug": "on-entry-before-create",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onEntryAfterCreate",
    "slug": "on-entry-after-create",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onEntryCreateError",
    "slug": "on-entry-create-error",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onEntryRevisionBeforeCreate",
    "slug": "on-entry-revision-before-create",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onEntryRevisionAfterCreate",
    "slug": "on-entry-revision-after-create",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onEntryCreateFromError",
    "slug": "on-entry-create-from-error",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onEntryBeforeUpdate",
    "slug": "on-entry-before-update",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onEntryAfterUpdate",
    "slug": "on-entry-after-update",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onEntryUpdateError",
    "slug": "on-entry-update-error",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onEntryBeforeDelete",
    "slug": "on-entry-before-delete",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onEntryAfterDelete",
    "slug": "on-entry-after-delete",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onEntryDeleteError",
    "slug": "on-entry-delete-error",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onEntryBeforeRestoreFromBin",
    "slug": "on-entry-before-restore-from-bin",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onEntryAfterRestoreFromBin",
    "slug": "on-entry-after-restore-from-bin",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onEntryRestoreFromBinError",
    "slug": "on-entry-restore-from-bin-error",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onEntryRevisionBeforeDelete",
    "slug": "on-entry-revision-before-delete",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onEntryRevisionAfterDelete",
    "slug": "on-entry-revision-after-delete",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onEntryRevisionDeleteError",
    "slug": "on-entry-revision-delete-error",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onEntryBeforePublish",
    "slug": "on-entry-before-publish",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onEntryAfterPublish",
    "slug": "on-entry-after-publish",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onEntryPublishError",
    "slug": "on-entry-publish-error",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onEntryBeforeUnpublish",
    "slug": "on-entry-before-unpublish",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onEntryAfterUnpublish",
    "slug": "on-entry-after-unpublish",
    "children": [{
      "title": "Event Arguments",
      "slug": "event-arguments"
    }, {
      "title": "How to Subscribe to This Event?",
      "slug": "how-to-subscribe-to-this-event"
    }]
  }, {
    "title": "onEntryUnpublishError",
    "slug": "on-entry-unpublish-error",
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
  "children": [{
    "title": "System Lifecycle Events",
    "slug": "system-lifecycle-events",
    "children": []
  }, {
    "title": "Group, Model and Entries Lifecycle Events",
    "slug": "group-model-and-entries-lifecycle-events",
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



<Alert type="danger" title="Deprecation of lifecycle events created before 5.x" mdxType="Alert">
  In the 5.x we changed the property names which define the lifecycle events in the Headless CMS.
  Old ones are still available, but are marked as deprecated. They will be removed in 5.35.0.
</Alert>
<Alert type="success" title="What you'll learn" mdxType="Alert">
<ul>
<li parentName="ul">{`what are lifecycle events`}</li>
<li parentName="ul">{`how lifecycle events work`}</li>
<li parentName="ul">{`how to subscribe to a lifecycle event`}</li>
</ul>
</Alert>
<Alert type="info" mdxType="Alert">
<p>{`Lifecycle events using publish/subscribe pattern replace the hook plugins starting from version 5.18.0.`}</p>
</Alert>
<_Heading level={2} id={"overview"} nextElement={{
      "type": "paragraph"
    }}>Overview</_Heading>
<p>{`In our Headless CMS we provide lifecycle events available for you to hook into.`}</p>
<p>{`With the lifecycle events you can hook into a number of different operations. For example, when using `}<a parentName="p" {...{
        "href": "https://github.com/webiny/webiny-js/blob/next/packages/api-headless-cms-ddb-es/src/index.ts#L111"
      }}>{`DynamoDB + Elasticsearch`}</a>{` as storage layer, we use the `}<inlineCode parentName="p">{`onSystemBeforeInstall`}</inlineCode>{` to insert the template for Elasticsearch index.`}</p>
<_Heading level={2} id={"system"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>System</_Heading>
<_Heading level={3} id={"on-system-before-install"} nextElement={{
      "type": "paragraph"
    }}>onSystemBeforeInstall</_Heading>
<p>{`This event is triggered before the installation of the Headless CMS and insertion of initial “Ungrouped” group.`}</p>
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
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`locale`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`current locale`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<CmsContext>(async context => {
  context.cms.onSystemBeforeInstall.subscribe(async ({ tenant }) => {
    await notifyAnotherSystemThatHeadlessCmsIsGettingInstalled({ tenant });
  });
});`}
</Editor>
<_Heading level={3} id={"on-system-after-install"} nextElement={{
      "type": "paragraph"
    }}>onSystemAfterInstall</_Heading>
<p>{`This event is triggered after the installation of the Headless CMS.`}</p>
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
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`locale`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`current locale`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<CmsContext>(async context => {
  context.cms.onSystemAfterInstall.subscribe(async ({ tenant }) => {
    await notifyAnotherSystemThatHeadlessCmsWasInstalled({ tenant });
  });
});`}
</Editor>
<_Heading level={3} id={"on-system-install-error"} nextElement={{
      "type": "paragraph"
    }}>onSystemInstallError</_Heading>
<p>{`This event is triggered on Headless CMS installation error.`}</p>
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
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`locale`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`current locale`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<CmsContext>(async context => {
  context.cms.onSystemInstallError.subscribe(async ({ tenant }) => {
    await notifyAnotherSystemThatHeadlessCmsWasNotInstalled({ tenant });
  });
});`}
</Editor>
<Alert type="info" mdxType="Alert">
<p>{`Please note that in between `}<inlineCode parentName="p">{`onSystemBeforeInstall`}</inlineCode>{` and `}<inlineCode parentName="p">{`onSystemAfterInstall`}</inlineCode>{` we create a default CmsGroup named “Ungrouped” and, because of that, there are events `}<inlineCode parentName="p">{`onGroupBeforeCreate`}</inlineCode>{` and `}<inlineCode parentName="p">{`onGroupAfterCreate`}</inlineCode>{` being run.`}</p>
</Alert>
<_Heading level={2} id={"groups"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Groups</_Heading>
<_Heading level={3} id={"on-group-before-create"} nextElement={{
      "type": "paragraph"
    }}>onGroupBeforeCreate</_Heading>
<p>{`This event is triggered before a new group is stored into the database.`}</p>
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
          }}>{`group`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Group object which is going to be stored`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<CmsContext>(async context => {
  context.cms.onGroupBeforeCreate.subscribe(async ({ group }) => {
    /**
     * For example, you do not want the group name to contain the character "a".
     * You can check for that character here and throw an error. Or remove it.
     */
    if (group.name.match(/a/) === null) {
      return;
    }
    group.name = group.name.replace(/a/g, "");
  });
});`}
</Editor>
<_Heading level={3} id={"on-group-after-create"} nextElement={{
      "type": "paragraph"
    }}>onGroupAfterCreate</_Heading>
<p>{`This event is triggered after a new group is stored into the database.`}</p>
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
          }}>{`group`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Group object which was stored`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<CmsContext>(async context => {
  context.cms.onGroupAfterCreate.subscribe(async ({ group }) => {
    /**
     * For example, notify another system that group was created.
     */
    await notifyAnotherSystemAboutGroupCreate({ group });
  });
});`}
</Editor>
<_Heading level={3} id={"on-group-create-error"} nextElement={{
      "type": "paragraph"
    }}>onGroupCreateError</_Heading>
<p>{`This event is triggered on group create error.`}</p>
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
          }}>{`group`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Group object which was going to be created`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`error`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Error object`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<CmsContext>(async context => {
  context.cms.onGroupCreateError.subscribe(async ({ group }) => {
    /**
     * For example, notify another system that group could not be created.
     */
    await notifyAnotherSystemAboutGroupCreateError({ group });
  });
});`}
</Editor>
<_Heading level={3} id={"on-group-before-update"} nextElement={{
      "type": "paragraph"
    }}>onGroupBeforeUpdate</_Heading>
<p>{`This event is triggered before a group is changed and stored into the database.`}</p>
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
          }}>{`Group object which is received from the database`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`group`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Group object which is going to be stored`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<CmsContext>(async context => {
  context.cms.onGroupBeforeUpdate.subscribe(async ({ original, group }) => {
    /**
     * For example, we are not allowing group slug to be changed.
     */
    if (original.slug === group.slug) {
      return;
    }
    throw new Error(\`Changing of group slug value is not allowed.\`);
  });
});`}
</Editor>
<_Heading level={3} id={"on-group-after-update"} nextElement={{
      "type": "paragraph"
    }}>onGroupAfterUpdate</_Heading>
<p>{`This event is triggered before a group is changed and stored into the database.`}</p>
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
          }}>{`Group object which is received from the database`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`group`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Group object which was stored`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<CmsContext>(async context => {
  context.cms.onGroupAfterUpdate.subscribe(async ({ original, group }) => {
    /**
     * For example, notify another system that group was updated.
     */
    await notifyAnotherSystemAboutGroupUpdate({ original, group });
  });
});`}
</Editor>
<_Heading level={3} id={"on-group-update-error"} nextElement={{
      "type": "paragraph"
    }}>onGroupUpdateError</_Heading>
<p>{`This event is triggered on group update error.`}</p>
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
          }}>{`Group object received from the database`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`group`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Group object which was going to be updated`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`error`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Error object`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<CmsContext>(async context => {
  context.cms.onGroupUpdateError.subscribe(async ({ group }) => {
    /**
     * For example, notify another system that group could not be updated.
     */
    await notifyAnotherSystemAboutGroupUpdateError({ group });
  });
});`}
</Editor>
<_Heading level={3} id={"on-group-before-delete"} nextElement={{
      "type": "paragraph"
    }}>onGroupBeforeDelete</_Heading>
<p>{`This event is triggered before a group is deleted from the database.`}</p>
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
          }}>{`group`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Group object which is going to be deleted`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<CmsContext>(async context => {
  context.cms.onGroupBeforeDelete.subscribe(async ({ group }) => {
    /**
     * For example, we are not allowing group with slug "ungroupped" to be deleted.
     */
    if (group.slug !== "ungroupped") {
      return;
    }
    throw new Error(\`Deleting group with slug "ungroupped" is not allowed.\`);
  });
});`}
</Editor>
<_Heading level={3} id={"on-group-after-delete"} nextElement={{
      "type": "paragraph"
    }}>onGroupAfterDelete</_Heading>
<p>{`This event is triggered after a group is deleted from the database.`}</p>
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
          }}>{`group`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Group object which was deleted`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<CmsContext>(async context => {
  context.cms.onGroupAfterDelete.subscribe(async ({ group }) => {
    /**
     * For example, notify another system that group was deleted.
     */
    await notifyAnotherSystemAboutGroupDelete({ group });
  });
});`}
</Editor>
<_Heading level={3} id={"on-group-delete-error"} nextElement={{
      "type": "paragraph"
    }}>onGroupDeleteError</_Heading>
<p>{`This event is triggered on group delete error.`}</p>
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
          }}>{`group`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Group object which was going to be deleted`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`error`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Error object`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<CmsContext>(async context => {
  context.cms.onGroupDeleteError.subscribe(async ({ group }) => {
    /**
     * For example, notify another system that group could not be deleted.
     */
    await notifyAnotherSystemAboutGroupDeleteError({ group });
  });
});`}
</Editor>
<_Heading level={2} id={"model"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Model</_Heading>
<_Heading level={3} id={"on-model-before-create"} nextElement={{
      "type": "paragraph"
    }}>onModelBeforeCreate</_Heading>
<p>{`This event is triggered before a new model is stored into the database.`}</p>
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
          }}>{`Users raw input data`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`model`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Model object which is going to be stored`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<CmsContext>(async context => {
  context.cms.onModelBeforeCreate.subscribe(async ({ model }) => {
    /**
     * For example, you do not want the modelId to be any of the reserved IDs you might think of.
     */
    if (reservedIdList.include(model.modelId) === false) {
      return;
    }
    throw new Error(\`Model ID "\${model.modelId}" is reserved.\`);
  });
});`}
</Editor>
<_Heading level={3} id={"on-model-after-create"} nextElement={{
      "type": "paragraph"
    }}>onModelAfterCreate</_Heading>
<p>{`This event is triggered before a new model is stored into the database.`}</p>
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
          }}>{`Users raw input data`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`model`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Model object which is going to be stored`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<CmsContext>(async context => {
  context.cms.onModelAfterCreate.subscribe(async ({ model }) => {
    /**
     * For example, you want to notify another system about new model.
     */
    await notifyAnotherSystemAboutNewModel({ model });
  });
});`}
</Editor>
<_Heading level={3} id={"on-model-create-error"} nextElement={{
      "type": "paragraph"
    }}>onModelCreateError</_Heading>
<p>{`This event is triggered on model create error.`}</p>
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
          }}>{`Users raw input data`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`model`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Model object which was going to be created`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`error`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`thrown error`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<CmsContext>(async context => {
  context.cms.onModelCreateError.subscribe(async ({ model }) => {
    /**
     * For example, notify another system that model could not be created.
     */
    await notifyAnotherSystemAboutModelCreateError({ model });
  });
});`}
</Editor>
<_Heading level={3} id={"on-model-before-create-from"} nextElement={{
      "type": "paragraph"
    }}>onModelBeforeCreateFrom</_Heading>
<p>{`This event is triggered before a newly cloned model is stored into the database.`}</p>
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
          }}>{`Model object from which we are creating a new model`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`model`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Model object which is going to be stored`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<CmsContext>(async context => {
  context.cms.onModelBeforeCreateFrom.subscribe(async ({ original, model }) => {
    /**
     * For example, you want to clone only to another locale.
     */
    if (original.locale !== model.locale) {
      return;
    }
    throw new Error(\`Model "\${model.modelId}" cannot be cloned into same locale.\`);
  });
});`}
</Editor>
<_Heading level={3} id={"on-model-after-create-from"} nextElement={{
      "type": "paragraph"
    }}>onModelAfterCreateFrom</_Heading>
<p>{`This event is triggered after a newly cloned model is stored into the database.`}</p>
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
          }}>{`Model object from which we are creating a new model`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`model`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Model object which was stored`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<CmsContext>(async context => {
  context.cms.onModelAfterCreateFrom.subscribe(async ({ original, model }) => {
    /**
     * For example, notify another system about cloned model.
     */
    await notifyAnotherSystemAboutClonedModel({ original, model });
  });
});`}
</Editor>
<_Heading level={3} id={"on-model-create-from-error"} nextElement={{
      "type": "paragraph"
    }}>onModelCreateFromError</_Heading>
<p>{`This event is triggered on model create from (clone) error.`}</p>
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
          }}>{`Users raw input data`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`original`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Model which is being cloned`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`model`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Model object which was going to be created`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`error`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`thrown error`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<CmsContext>(async context => {
  context.cms.onModelCreateFromError.subscribe(async ({ model }) => {
    /**
     * For example, notify another system that model could not be created from existing model.
     */
    await notifyAnotherSystemAboutModelCreateFromError({ model });
  });
});`}
</Editor>
<_Heading level={3} id={"on-model-before-update"} nextElement={{
      "type": "paragraph"
    }}>onModelBeforeUpdate</_Heading>
<p>{`This event is triggered before a model is changed and stored into the database.`}</p>
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
          }}>{`Model object from which we received from the database`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`model`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Model object which is going to be stored`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<CmsContext>(async context => {
  context.cms.onModelBeforeUpdate.subscribe(async ({ model }) => {
    /**
     * For example, you want to leave all fields unlocked on all the models (you should never do that, of course, but you can if you want to).
     */
    model.lockedFields = [];
  });
});`}
</Editor>
<_Heading level={3} id={"on-model-after-update"} nextElement={{
      "type": "paragraph"
    }}>onModelAfterUpdate</_Heading>
<p>{`This event is triggered after a model is changed and stored into the database.`}</p>
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
          }}>{`Model object from which we received from the database`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`model`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Model object which was stored`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<CmsContext>(async context => {
  context.cms.onModelAfterUpdate.subscribe(async ({ original, model }) => {
    /**
     * For example, you want to notify another system about model update.
     */
    await notifyAnotherSystemAboutModelUpdate({ original, model });
  });
});`}
</Editor>
<_Heading level={3} id={"on-model-update-error"} nextElement={{
      "type": "paragraph"
    }}>onModelUpdateError</_Heading>
<p>{`This event is triggered on model update error.`}</p>
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
          }}>{`Users raw input data`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`original`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Model which is being updated`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`model`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Model object which was going to be stored`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`error`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`thrown error`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<CmsContext>(async context => {
  context.cms.onModelUpdateError.subscribe(async ({ model }) => {
    /**
     * For example, notify another system that model could not be updated.
     */
    await notifyAnotherSystemAboutModelUpdateError({ model });
  });
});`}
</Editor>
<_Heading level={3} id={"on-model-before-delete"} nextElement={{
      "type": "paragraph"
    }}>onModelBeforeDelete</_Heading>
<p>{`This event is triggered before a model is deleted from the database.`}</p>
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
          }}>{`model`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Model object which is going to be deleted`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<CmsContext>(async context => {
  context.cms.onModelBeforeDelete.subscribe(async ({ model }) => {
    /**
     * For example, you do not want to allow deletion of any model.
     */
    throw new Error("Models cannot be deleted!");
  });
});`}
</Editor>
<_Heading level={3} id={"on-model-after-delete"} nextElement={{
      "type": "paragraph"
    }}>onModelAfterDelete</_Heading>
<p>{`This event is triggered after a model is deleted from the database.`}</p>
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
          }}>{`model`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Model object which was deleted`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<CmsContext>(async context => {
  context.cms.onModelAfterDelete.subscribe(async ({ model }) => {
    /**
     * For example, you want to notify another system about deleted model.
     */
    await notifyAnotherSystemAboutDeletedModel({ model });
  });
});`}
</Editor>
<_Heading level={3} id={"on-model-delete-error"} nextElement={{
      "type": "paragraph"
    }}>onModelDeleteError</_Heading>
<p>{`This event is triggered on model delete error.`}</p>
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
          }}>{`Model`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Model object which was going to be deleted`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`error`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`thrown error`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<CmsContext>(async context => {
  context.cms.onModelDeleteError.subscribe(async ({ model }) => {
    /**
     * For example, notify another system that model could not be deleted.
     */
    await notifyAnotherSystemAboutModelDeleteError({ model });
  });
});`}
</Editor>
<_Heading level={2} id={"entry"} nextElement={{
      "type": "jsx"
    }}>Entry</_Heading>
<Alert type="info" mdxType="Alert">
<p>{`Note that `}<inlineCode parentName="p">{`storageEntry`}</inlineCode>{`, `}<inlineCode parentName="p">{`originalStorageEntry`}</inlineCode>{`, `}<inlineCode parentName="p">{`latestStorageEntry`}</inlineCode>{` and `}<inlineCode parentName="p">{`publishedStorageEntry`}</inlineCode>{` are objects derived from the `}<inlineCode parentName="p">{`entry`}</inlineCode>{` object which we want to store into the database.
Those new objects have `}<inlineCode parentName="p">{`StorageTransformPlugin`}</inlineCode>{` run on them to prepare them to be stored.`}</p>
</Alert>
<_Heading level={3} id={"on-entry-before-create"} nextElement={{
      "type": "paragraph"
    }}>onEntryBeforeCreate</_Heading>
<p>{`This event is triggered before an entry is stored into the database.`}</p>
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
          }}>{`Raw user input`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`entry`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Entry object which is going to be stored`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`model`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Model this entry belongs to`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<CmsContext>(async context => {
  context.cms.onEntryBeforeCreate.subscribe(async ({ model, entry }) => {
    /**
     * For example, your entry has a "slug" field, which must be unique. So we check if it is.
     */
    const manager = await context.cms.getModelManager(model);

    const existing = await manager.listLatest({
      where: {
        slug: entry.values.slug
      },
      limit: 1
    });
    if (existing.length === 0) {
      return;
    }
    throw new Error(\`Entry with slug "\${entry.values.slug}" already exists.\`);
  });
});`}
</Editor>
<_Heading level={3} id={"on-entry-after-create"} nextElement={{
      "type": "paragraph"
    }}>onEntryAfterCreate</_Heading>
<p>{`This event is triggered after an entry is stored into the database.`}</p>
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
          }}>{`Raw user input`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`entry`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Entry object which was stored`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`model`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Model this entry belongs to`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<CmsContext>(async context => {
  context.cms.onEntryAfterCreate.subscribe(async ({ model, entry }) => {
    /**
     * For example, notify another system about new entry.
     */
    await notifyAnotherSystemAboutNewEntry({ model, entry });
  });
});`}
</Editor>
<_Heading level={3} id={"on-entry-create-error"} nextElement={{
      "type": "paragraph"
    }}>onEntryCreateError</_Heading>
<p>{`This event is triggered on entry create error.`}</p>
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
          }}>{`Raw user input`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`entry`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Entry object which was going to be stored`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`model`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Model this entry belongs to`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`error`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`thrown error`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<CmsContext>(async context => {
  context.cms.onEntryCreateError.subscribe(async ({ model, entry, error }) => {
    /**
     * For example, notify another system about new entry.
     */
    await notifyAnotherSystemAboutCreateError({ model, entry, error });
  });
});`}
</Editor>
<_Heading level={3} id={"on-entry-revision-before-create"} nextElement={{
      "type": "paragraph"
    }}>onEntryRevisionBeforeCreate</_Heading>
<p>{`This event is triggered before a new entry is created from originating entry and is stored into the database.`}</p>
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
          }}>{`Raw user input`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`original`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Original entry which we received from the database`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`entry`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Entry object which is going to be stored`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`model`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Model this entry belongs to`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<CmsContext>(async context => {
  context.cms.onEntryRevisionBeforeCreate.subscribe(async ({ model, entry }) => {
    /**
     * For example, your entry has a "slug" field, which must be unique, but not within the entryId constraint.
     */
    const manager = await context.cms.getModelManager(model);

    const existing = await manager.listLatest({
      where: {
        entryId_not: entry.entryId,
        slug: entry.values.slug
      },
      limit: 1
    });
    if (existing.length === 0) {
      return;
    }
    throw new Error(\`Entry with slug "\${entry.values.slug}" already exists.\`);
  });
});`}
</Editor>
<_Heading level={3} id={"on-entry-revision-after-create"} nextElement={{
      "type": "paragraph"
    }}>onEntryRevisionAfterCreate</_Heading>
<p>{`This event is triggered after a new entry is created from originating entry and is stored into the database.`}</p>
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
          }}>{`Raw user input`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`original`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Original entry which we received from the database`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`storageEntry`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Entry object prepared to be stored into the database`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`entry`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Entry object which was stored`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`model`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Model this entry belongs to`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<CmsContext>(async context => {
  context.cms.onEntryRevisionAfterCreate.subscribe(async ({ model, entry }) => {
    /**
     * For example, notify another system about new entry.
     */
    await notifyAnotherSystemAboutNewEntryRevision({ model, entry });
  });
});`}
</Editor>
<_Heading level={3} id={"on-entry-create-from-error"} nextElement={{
      "type": "paragraph"
    }}>onEntryCreateFromError</_Heading>
<p>{`This event is triggered on entry create from error.`}</p>
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
          }}>{`Raw user input`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`original`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Original entry`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`entry`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Entry object which was going to be stored`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`model`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Model this entry belongs to`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`error`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`thrown error`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<CmsContext>(async context => {
  context.cms.onEntryCreateFromError.subscribe(async ({ model, entry, error }) => {
    /**
     * For example, notify another system about create from.
     */
    await notifyAnotherSystemAboutCreateFromError({ model, entry, error });
  });
});`}
</Editor>
<_Heading level={3} id={"on-entry-before-update"} nextElement={{
      "type": "paragraph"
    }}>onEntryBeforeUpdate</_Heading>
<p>{`This event is triggered before an entry is changed and stored into the database.`}</p>
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
          }}>{`Raw user input`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`original`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Original entry which we received from the database`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`entry`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Entry object which is going to be stored`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`model`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Model this entry belongs to`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<CmsContext>(async context => {
  context.cms.onEntryBeforeUpdate.subscribe(async ({ model, entry }) => {
    /**
     * For example, your entry has a "slug" field, which must be unique, but not within the entryId constraint.
     */
    const manager = await context.cms.getModelManager(model);

    const existing = await manager.listLatest({
      where: {
        entryId_not: entry.entryId,
        slug: entry.values.slug
      },
      limit: 1
    });
    if (existing.length === 0) {
      return;
    }
    throw new Error(\`Entry with slug "\${entry.values.slug}" already exists.\`);
  });
});`}
</Editor>
<_Heading level={3} id={"on-entry-after-update"} nextElement={{
      "type": "paragraph"
    }}>onEntryAfterUpdate</_Heading>
<p>{`This event is triggered after an entry is changed and stored into the database.`}</p>
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
          }}>{`Raw user input`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`original`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Original entry which we received from the database`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`storageEntry`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Entry object prepared to be stored into the database`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`entry`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Entry object which was stored`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`model`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Model this entry belongs to`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<CmsContext>(async context => {
  context.cms.onEntryAfterUpdate.subscribe(async ({ model, entry }) => {
    /**
     * For example, notify another system about updated entry.
     */
    await notifyAnotherSystemAboutEntryUpdate({ model, entry });
  });
});`}
</Editor>
<_Heading level={3} id={"on-entry-update-error"} nextElement={{
      "type": "paragraph"
    }}>onEntryUpdateError</_Heading>
<p>{`This event is triggered on entry update error.`}</p>
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
          }}>{`Raw user input`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`original`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Original entry`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`entry`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Entry object which was going to be stored`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`model`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Model this entry belongs to`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`error`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`thrown error`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<CmsContext>(async context => {
  context.cms.onEntryUpdateError.subscribe(async ({ model, entry, error }) => {
    /**
     * For example, notify another system about update error.
     */
    await notifyAnotherSystemAboutUpdateError({ model, entry, error });
  });
});`}
</Editor>
<_Heading level={3} id={"on-entry-before-delete"} nextElement={{
      "type": "paragraph"
    }}>onEntryBeforeDelete</_Heading>
<p>{`This event is triggered before all entry revisions are deleted from the database or moved to trash bin.`}</p>
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
          }}>{`entry`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Entry object which is going to be deleted or moved to trash bin`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`model`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Model this entry belongs to`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`permanent`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Has the entry been permanently deleted or merely moved to the trash bin?`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<CmsContext>(async context => {
  context.cms.onEntryBeforeDelete.subscribe(async ({ model, entry }) => {
   /**
     * For example, you do not allow entry with slug "index" to be deleted.
     */
    if (entry.values.slug !== "index") {
      return;
    }
    throw new Error(\`Cannot delete entry with slug "index". Not allowed!\`);
  });
});`}
</Editor>
<_Heading level={3} id={"on-entry-after-delete"} nextElement={{
      "type": "paragraph"
    }}>onEntryAfterDelete</_Heading>
<p>{`This event is triggered after all entry revisions are deleted from the database or moved to trash bin.`}</p>
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
          }}>{`entry`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Entry object which is going to be deleted or moved to trash bin`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`model`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Model this entry belongs to`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`permanent`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Has the entry been permanently deleted or merely moved to the trash bin?`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<CmsContext>(async context => {
  context.cms.onEntryAfterDelete.subscribe(async ({ model, entry }) => {
    /**
     * For example, notify another system about deleted entry.
     */
    await notifyAnotherSystemAboutDeletedEntry({ model, entry });
  });
});`}
</Editor>
<_Heading level={3} id={"on-entry-delete-error"} nextElement={{
      "type": "paragraph"
    }}>onEntryDeleteError</_Heading>
<p>{`This event is triggered on entry delete error.`}</p>
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
          }}>{`entry`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Entry object which was going to be deleted or moved to trash bin`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`model`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Model this entry belongs to`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`permanent`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Has the entry been permanently deleted or merely moved to the trash bin?`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`error`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`thrown error`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<CmsContext>(async context => {
  context.cms.onEntryDeleteError.subscribe(async ({ model, entry, error }) => {
    /**
     * For example, notify another system about delete error.
     */
    await notifyAnotherSystemAboutDeleteError({ model, entry, error });
  });
});`}
</Editor>
<_Heading level={3} id={"on-entry-before-restore-from-bin"} nextElement={{
      "type": "paragraph"
    }}>onEntryBeforeRestoreFromBin</_Heading>
<p>{`This event is triggered before all entry revisions are restored from the trash bin.`}</p>
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
          }}>{`entry`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Entry object which is going to be restored`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`model`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Model this entry belongs to`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<CmsContext>(async context => {
  context.cms.onEntryBeforeRestoreFromBin.subscribe(async ({ model, entry }) => {
   /**
     * For example, you do not allow entry with slug "index" to be restored.
     */
    if (entry.values.slug !== "index") {
      return;
    }
    throw new Error(\`Cannot restore entry with slug "index". Not allowed!\`);
  });
});`}
</Editor>
<_Heading level={3} id={"on-entry-after-restore-from-bin"} nextElement={{
      "type": "paragraph"
    }}>onEntryAfterRestoreFromBin</_Heading>
<p>{`This event is triggered after all entry revisions are restored from the trash bin.`}</p>
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
          }}>{`entry`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Entry object which is going to be restored`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`model`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Model this entry belongs to`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`storageEntry`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Entry object prepared to be stored into the database`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<CmsContext>(async context => {
  context.cms.onEntryAfterRestoreFromBin.subscribe(async ({ model, entry }) => {
    /**
     * For example, notify another system about restored entry.
     */
    await notifyAnotherSystemAboutRestoredEntry({ model, entry });
  });
});`}
</Editor>
<_Heading level={3} id={"on-entry-restore-from-bin-error"} nextElement={{
      "type": "paragraph"
    }}>onEntryRestoreFromBinError</_Heading>
<p>{`This event is triggered on entry restore error.`}</p>
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
          }}>{`entry`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Entry object which was going to be restored`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`model`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Model this entry belongs to`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`error`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`thrown error`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<CmsContext>(async context => {
  context.cms.onEntryRestoreFromBinError.subscribe(async ({ model, entry, error }) => {
    /**
     * For example, notify another system about restore error.
     */
    await notifyAnotherSystemAboutRestoreError({ model, entry, error });
  });
});`}
</Editor>
<_Heading level={3} id={"on-entry-revision-before-delete"} nextElement={{
      "type": "paragraph"
    }}>onEntryRevisionBeforeDelete</_Heading>
<p>{`This event is triggered before an entry revision is deleted from the database.`}</p>
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
          }}>{`entry`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Entry object which is going to be deleted`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`model`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Model this entry belongs to`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<CmsContext>(async context => {
  context.cms.onEntryRevisionBeforeDelete.subscribe(async ({ model, entry }) => {
    /**
     * For example, you do not allow entry with version 1 to be deleted.
     */
    if (entry.version > 1) {
      return;
    }
    throw new Error(\`Cannot delete entry version 1. Not allowed!\`);
  });
});`}
</Editor>
<_Heading level={3} id={"on-entry-revision-after-delete"} nextElement={{
      "type": "paragraph"
    }}>onEntryRevisionAfterDelete</_Heading>
<p>{`This event is triggered after an entry revision is deleted from the database.`}</p>
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
          }}>{`entry`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Entry object which is going to be deleted`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`model`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Model this entry belongs to`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<CmsContext>(async context => {
  context.cms.onEntryRevisionAfterDelete.subscribe(async ({ model, entry }) => {
    /**
     * For example, notify another system about deleted entry.
     */
    await notifyAnotherSystemAboutDeletedEntryRevision({ model, entry });
  });
});`}
</Editor>
<_Heading level={3} id={"on-entry-revision-delete-error"} nextElement={{
      "type": "paragraph"
    }}>onEntryRevisionDeleteError</_Heading>
<p>{`This event is triggered on entry delete error.`}</p>
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
          }}>{`entry`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Entry revision which was going to be deleted`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`model`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Model this entry belongs to`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`error`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`thrown error`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<CmsContext>(async context => {
  context.cms.onEntryRevisionDeleteError.subscribe(async ({ model, entry, error }) => {
    /**
     * For example, notify another system about revision delete error.
     */
    await notifyAnotherSystemAboutRevisionDeleteError({ model, entry, error });
  });
});`}
</Editor>
<_Heading level={3} id={"on-entry-before-publish"} nextElement={{
      "type": "paragraph"
    }}>onEntryBeforePublish</_Heading>
<p>{`This event is triggered before an entry is published.`}</p>
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
          }}>{`entry`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Entry object which is going to be published`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`model`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Model this entry belongs to`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<CmsContext>(async context => {
  context.cms.onEntryBeforePublish.subscribe(async ({ model, entry }) => {
    /**
     * For example, you do not allow entry with version 1 to be published.
     */
    if (entry.version > 1) {
      return;
    }
    throw new Error(\`Cannot publish entry version 1. Not allowed!\`);
  });
});`}
</Editor>
<_Heading level={3} id={"on-entry-after-publish"} nextElement={{
      "type": "paragraph"
    }}>onEntryAfterPublish</_Heading>
<p>{`This event is triggered after an entry is published.`}</p>
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
          }}>{`entry`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Entry object which is going to be published`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`model`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Model this entry belongs to`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<CmsContext>(async context => {
  context.cms.onEntryAfterPublish.subscribe(async ({ model, entry }) => {
    /**
     * For example, notify another system about published entry.
     */
    await notifyAnotherSystemAboutPublishedEntry({ model, entry });
  });
});`}
</Editor>
<_Heading level={3} id={"on-entry-publish-error"} nextElement={{
      "type": "paragraph"
    }}>onEntryPublishError</_Heading>
<p>{`This event is triggered on entry publishing error.`}</p>
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
          }}>{`entry`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Entry revision which was going to be published`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`model`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Model this entry belongs to`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`error`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`thrown error`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<CmsContext>(async context => {
  context.cms.onEntryPublishError.subscribe(async ({ model, entry, error }) => {
    /**
     * For example, notify another system about publishing error.
     */
    await notifyAnotherSystemAboutPublishError({ model, entry, error });
  });
});`}
</Editor>
<_Heading level={3} id={"on-entry-before-unpublish"} nextElement={{
      "type": "paragraph"
    }}>onEntryBeforeUnpublish</_Heading>
<p>{`This event is triggered before an entry is unpublished.`}</p>
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
          }}>{`entry`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Entry object which is going to be unpublished`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`model`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Model this entry belongs to`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<CmsContext>(async context => {
  context.cms.onEntryBeforeUnpublish.subscribe(async ({ model, entry }) => {
    /**
     * For example, you do not allow entry with version 1 to be unpublished.
     */
    if (entry.version > 1) {
      return;
    }
    throw new Error(\`Cannot unpublish entry version 1. Not allowed!\`);
  });
});`}
</Editor>
<_Heading level={3} id={"on-entry-after-unpublish"} nextElement={{
      "type": "paragraph"
    }}>onEntryAfterUnpublish</_Heading>
<p>{`This event is triggered after an entry is unpublished.`}</p>
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
          }}>{`entry`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Entry object which is going to be unpublished`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`model`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Model this entry belongs to`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<CmsContext>(async context => {
  context.cms.onEntryAfterUnpublish.subscribe(async ({ model, entry }) => {
    /**
     * For example, notify another system about unpublished entry.
     */
    await notifyAnotherSystemAboutUnpublishedEntry({ model, entry });
  });
});`}
</Editor>
<_Heading level={3} id={"on-entry-unpublish-error"} nextElement={{
      "type": "paragraph"
    }}>onEntryUnpublishError</_Heading>
<p>{`This event is triggered on entry unpublishing error.`}</p>
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
          }}>{`entry`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Entry revision which was going to be unpublished`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`model`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Model this entry belongs to`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}>{`error`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`thrown error`}</td>
</tr>
</tbody>
</table>
<_Heading level={4} id={"how-to-subscribe-to-this-event"} nextElement={{
      "type": "code",
      "lang": "typescript",
      "meta": null
    }}>How to Subscribe to This Event?</_Heading>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<CmsContext>(async context => {
  context.cms.onEntryUnpublishError.subscribe(async ({ model, entry, error }) => {
    /**
     * For example, notify another system about unpublishing error.
     */
    await notifyAnotherSystemAboutUnpublishError({ model, entry, error });
  });
});`}
</Editor>
<Alert type="danger" mdxType="Alert">
<p>{`Please, be aware that you can change what ever you want on the object before it is stored into the database, so be careful with changing the data.`}</p>
</Alert>
<_Heading level={2} id={"registering-lifecycle-event-subscriptions"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>Registering Lifecycle Event Subscriptions</_Heading>
<_Heading level={3} id={"system-lifecycle-events"} nextElement={{
      "type": "paragraph"
    }}>System Lifecycle Events</_Heading>
<p>{`For the subscriptions (your code) to be run, you must register it in the `}<inlineCode parentName="p">{`createHandler`}</inlineCode>{` in the `}<inlineCode parentName="p">{`api/code/graphql/src/index.ts`}</inlineCode>{` file.`}</p>
<Editor title="api/code/graphql/src/index.ts" lang="typescript" mdxType="Editor">
{`const handler = createHandler({
  plugins: [
    // ... rest of plugins
    new ContextPlugin<PbContext>(async context => {
      context.cms.onSystemBeforeInstall.subscribe(async ({ system }) => {
        // do your magic here
      });
    })
  ]
});`}
</Editor>
<_Heading level={3} id={"group-model-and-entries-lifecycle-events"} nextElement={{
      "type": "paragraph"
    }}>Group, Model and Entries Lifecycle Events</_Heading>
<p>{`For the subscriptions (your code) to be run, you must register it in the `}<inlineCode parentName="p">{`createHandler`}</inlineCode>{` in the `}<inlineCode parentName="p">{`api/code/headlessCMS/src/index.ts`}</inlineCode>{` file.`}</p>
<Editor title="api/code/headlessCMS/src/index.ts" lang="typescript" mdxType="Editor">
{`const handler = createHandler({
  plugins: [
    // ... rest of plugins
    new ContextPlugin<PbContext>(async context => {
      context.cms.onEntryBeforeCreate.subscribe(async ({ entry }) => {
        // do your magic here
      });
    })
  ]
});`}
</Editor>
<Alert type="warning" mdxType="Alert">
<p>{`Please be aware that the order of subscribing does matter: if you want some event subscription to be executed before some other one, add it first.`}</p>
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