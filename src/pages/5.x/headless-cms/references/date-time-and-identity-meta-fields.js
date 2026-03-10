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
  "title": "Date/Time and Identity (On/By) Meta Fields",
  "description": "Learn about the date/time and identity-related meta fields that are available for content entries.",
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
  "title": "Introduction",
  "slug": "introduction",
  "children": []
}, {
  "title": "Revision-Level and Entry-Level Meta Fields",
  "slug": "revision-level-and-entry-level-meta-fields",
  "children": []
}, {
  "title": "Meta Fields",
  "slug": "meta-fields",
  "children": [{
    "title": "Revision-Level Meta Fields",
    "slug": "revision-level-meta-fields",
    "children": []
  }, {
    "title": "Entry-Level Meta Fields",
    "slug": "entry-level-meta-fields",
    "children": []
  }]
}, {
  "title": "FAQ",
  "slug": "faq",
  "children": [{
    "title": "What Is the Difference Between modified and saved Meta Fields?",
    "slug": "what-is-the-difference-between-modified-and-saved-meta-fields",
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



<Alert type="info" title="Can I use this?" mdxType="Alert">
<p>{`The new meta fields outlined in this article are available since `}<strong parentName="p">{`v5.39.0`}</strong>{`.`}</p>
</Alert>
<_Heading level={2} id={"introduction"} nextElement={{
      "type": "paragraph"
    }}>Introduction</_Heading>
<p>{`Apart from the fields that are defined in a content model by the user, all content entries also have a set of date/time and identity-related meta fields. A couple of examples:`}</p>
<ul>
<li parentName="ul"><inlineCode parentName="li">{`revisionCreatedOn`}</inlineCode>{` - the date/time when an entry revision was created`}</li>
<li parentName="ul"><inlineCode parentName="li">{`revisionFirstPublishedOn`}</inlineCode>{` - the date/time when an entry revision was first published`}</li>
<li parentName="ul"><inlineCode parentName="li">{`createdOn`}</inlineCode>{` - the date/time when an entry was created`}</li>
<li parentName="ul"><inlineCode parentName="li">{`lastPublishedOn`}</inlineCode>{` - the date/time when an entry was last published`}</li>
</ul>
<p>{`These meta fields are automatically populated by the system, and they can be used to display information about the entry, such as when it was created, modified, or published, and by whom.`}</p>
<p>{`Developers can use these fields when querying entries, for example via the `}<_Link href="/docs/5.x/headless-cms/basics/graphql-api">{`Headless CMS GraphQL API`}</_Link>{`:`}</p>
<Editor title="" lang="graphql" mdxType="Editor">
{`query {
  listVideos(where: { createdBy: "some-user-id" }, sort: [createdOn_DESC]) {
    data {
      id
      title
      description
      revisionCreatedBy {
        id
        type
        displayName
      }
      revisionCreatedOn
      createdBy {
        id
        type
        displayName
      }
      createdOn
    }
  }
}`}
</Editor>
<p>{`They can also use them in their custom JavaScript (TypeScript) code, for example, when hooking onto `}<_Link href="/docs/5.x/headless-cms/references/lifecycle-events">{`lifecycle events`}</_Link>{`:`}</p>
<Editor title="" lang="typescript" mdxType="Editor">
{`new ContextPlugin<CmsContext>(async context => {
  context.cms.onEntryAfterDelete.subscribe(async ({ entry }) => {
    console.log(\`Entry created by \${entry.createdBy.displayName} was deleted.\`);
    console.log(\`Note that entry was last published on \${entry.lastPublishedOn}.\`);
  });
});`}
</Editor>
<_Heading level={2} id={"revision-level-and-entry-level-meta-fields"} nextElement={{
      "type": "paragraph"
    }}>Revision-Level and Entry-Level Meta Fields</_Heading>
<p>{`The meta fields are available at two levels: revision-level and entry-level.`}</p>
<p>{`Revision-level fields include the `}<inlineCode parentName="p">{`revision`}</inlineCode>{` prefix in their names, and they contain information about the revision of an entry. For example, `}<inlineCode parentName="p">{`revisionCreatedOn`}</inlineCode>{` is the date/time when the revision was created, and `}<inlineCode parentName="p">{`revisionCreatedBy`}</inlineCode>{` is the identity of the user who created the revision.`}</p>
<p>{`On the other hand, entry-level fields do not contain the `}<inlineCode parentName="p">{`revision`}</inlineCode>{` prefix in their names, and they contain information about the entry itself. For example, `}<inlineCode parentName="p">{`createdOn`}</inlineCode>{` is the date/time when the entry was created, and `}<inlineCode parentName="p">{`createdBy`}</inlineCode>{` is the identity of the user who created the entry. These fields do not change when a revision is created, modified, or published, nor if new revisions are created, modified, or published.`}</p>
<_Heading level={2} id={"meta-fields"} nextElement={{
      "type": "paragraph"
    }}>Meta Fields</_Heading>
<p>{`The following table lists all the date/time and identity-related meta fields that are available for content entries.`}</p>
<_Heading level={3} id={"revision-level-meta-fields"} nextElement={{
      "type": "table",
      "align": [null, null, null]
    }}>Revision-Level Meta Fields</_Heading>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Field`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Can be `}<inlineCode parentName="th">{`null`}</inlineCode></th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`revisionCreatedOn`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`The date/time when an entry revision was created.`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`No`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`revisionModifiedOn`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`The date/time when an entry revision was last modified.`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Yes`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`revisionSavedOn`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`The date/time when an entry revision was last saved.`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`No`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`revisionFirstPublishedOn`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`The date/time when an entry revision was first published.`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Yes`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`revisionLastPublishedOn`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`The date/time when an entry revision was last published.`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Yes`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`revisionDeletedOn`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`The date/time when an entry revision was last deleted / moved to the trash bin.`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Yes`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`revisionRestoredOn`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`The date/time when an entry revision was last restored from the trash bin.`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Yes`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`revisionCreatedBy`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`The user who created an entry revision.`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`No`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`revisionModifiedBy`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`The user who last modified an entry revision.`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Yes`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`revisionSavedBy`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`The user who last saved an entry revision.`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`No`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`revisionFirstPublishedBy`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`The user who first published an entry revision.`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Yes`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`revisionLastPublishedBy`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`The user who last published an entry revision.`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Yes`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`revisionDeletedBy`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`The user who last deleted / moved to the trash bin an entry revision.`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Yes`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`revisionRestoredBy`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`The user who last restored an entry revision from the trash bin.`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Yes`}</td>
</tr>
</tbody>
</table>
<_Heading level={3} id={"entry-level-meta-fields"} nextElement={{
      "type": "table",
      "align": [null, null, null]
    }}>Entry-Level Meta Fields</_Heading>
<table>
<thead parentName="table">
<tr parentName="thead">
<th parentName="tr" {...{
            "align": null
          }}>{`Field`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Description`}</th>
<th parentName="tr" {...{
            "align": null
          }}>{`Can be `}<inlineCode parentName="th">{`null`}</inlineCode></th>
</tr>
</thead>
<tbody parentName="table">
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`createdOn`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`The date/time when an entry was created.`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`No`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`modifiedOn`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`The date/time when an entry was last modified.`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Yes`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`savedOn`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`The date/time when an entry was last saved.`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`No`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`firstPublishedOn`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`The date/time when an entry was first published.`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Yes`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`lastPublishedOn`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`The date/time when an entry was last published.`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Yes`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`deletedOn`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`The date/time when an entry was last deleted / moved to the trash bin.`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Yes`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`restoredOn`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`The date/time when an entry was last restored from the trash bin.`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Yes`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`createdBy`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`The user who created an entry.`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`No`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`modifiedBy`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`The user who last modified an entry.`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Yes`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`savedBy`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`The user who last saved an entry.`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`No`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`firstPublishedBy`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`The user who first published an entry.`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Yes`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`lastPublishedBy`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`The user who last published an entry.`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Yes`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`deletedBy`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`The user who last deleted / moved to the trash bin an entry.`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Yes`}</td>
</tr>
<tr parentName="tbody">
<td parentName="tr" {...{
            "align": null
          }}><inlineCode parentName="td">{`restoredBy`}</inlineCode></td>
<td parentName="tr" {...{
            "align": null
          }}>{`The user who last restored an entry from the trash bin.`}</td>
<td parentName="tr" {...{
            "align": null
          }}>{`Yes`}</td>
</tr>
</tbody>
</table>
<_Heading level={2} id={"faq"} nextElement={{
      "type": "heading",
      "depth": 3
    }}>FAQ</_Heading>
<_Heading level={3} id={"what-is-the-difference-between-modified-and-saved-meta-fields"} nextElement={{
      "type": "paragraph"
    }}>What Is the Difference Between<code>modified</code>and<code>saved</code>Meta Fields?</_Heading>
<p>{`The difference between `}<inlineCode parentName="p">{`modified`}</inlineCode>{` and `}<inlineCode parentName="p">{`saved`}</inlineCode>{` meta fields is that `}<inlineCode parentName="p">{`modified`}</inlineCode>{` fields can be `}<inlineCode parentName="p">{`null`}</inlineCode>{` if the entry has not been modified yet, while `}<inlineCode parentName="p">{`saved`}</inlineCode>{` is never `}<inlineCode parentName="p">{`null`}</inlineCode>{` because it is updated even when the entry is created.`}</p>
<p>{`So, if we were to create a new entry, the `}<inlineCode parentName="p">{`createdOn`}</inlineCode>{` and `}<inlineCode parentName="p">{`savedOn`}</inlineCode>{` fields would have the same value, but the `}<inlineCode parentName="p">{`modifiedOn`}</inlineCode>{` field would be `}<inlineCode parentName="p">{`null`}</inlineCode>{` because the entry has not been modified yet. Only after the first update, the `}<inlineCode parentName="p">{`modifiedOn`}</inlineCode>{` field would have a value different from `}<inlineCode parentName="p">{`null`}</inlineCode>{`. Actually, after the first update, the `}<inlineCode parentName="p">{`savedOn`}</inlineCode>{` and `}<inlineCode parentName="p">{`modifiedOn`}</inlineCode>{` will always have the same value.`}</p>
{/* ================== AUTO-GENERATED ================== */}
{/* Add page layout to use with React. */}



{/* Add page data export. It will be attached to "layoutProps" by mdx-loader. */}

{/* Add Algolia data. */}








    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
MDXContent.layoutProps = layoutProps;