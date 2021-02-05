[Webiny](../README.md) / [Exports](../modules.md) / CmsContentEntryContext

# Interface: CmsContentEntryContext

Content entry crud methods in the context.

## Hierarchy

* **CmsContentEntryContext**

## Table of contents

### Properties

- [create](cmscontententrycontext.md#create)
- [createRevisionFrom](cmscontententrycontext.md#createrevisionfrom)
- [deleteEntry](cmscontententrycontext.md#deleteentry)
- [deleteRevision](cmscontententrycontext.md#deleterevision)
- [get](cmscontententrycontext.md#get)
- [getByIds](cmscontententrycontext.md#getbyids)
- [getLatestByIds](cmscontententrycontext.md#getlatestbyids)
- [getPublishedByIds](cmscontententrycontext.md#getpublishedbyids)
- [list](cmscontententrycontext.md#list)
- [listLatest](cmscontententrycontext.md#listlatest)
- [listPublished](cmscontententrycontext.md#listpublished)
- [update](cmscontententrycontext.md#update)

### Methods

- [getEntryRevisions](cmscontententrycontext.md#getentryrevisions)
- [publish](cmscontententrycontext.md#publish)
- [requestChanges](cmscontententrycontext.md#requestchanges)
- [requestReview](cmscontententrycontext.md#requestreview)
- [unpublish](cmscontententrycontext.md#unpublish)

## Properties

### create

• **create**: (`model`: [*CmsContentModel*](cmscontentmodel.md), `data`: *Record*<*string*, *any*\>) => *Promise*<[*CmsContentEntry*](cmscontententry.md)\>

Create a new content entry.

___

### createRevisionFrom

• **createRevisionFrom**: (`model`: [*CmsContentModel*](cmscontentmodel.md), `id`: *string*, `data`: *Record*<*string*, *any*\>) => *Promise*<[*CmsContentEntry*](cmscontententry.md)\>

Create a new entry from already existing entry.

___

### deleteEntry

• **deleteEntry**: (`model`: [*CmsContentModel*](cmscontentmodel.md), `id`: *string*) => *Promise*<*void*\>

Delete entry with all its revisions.

___

### deleteRevision

• **deleteRevision**: (`model`: [*CmsContentModel*](cmscontentmodel.md), `id`: *string*) => *Promise*<*void*\>

Delete only a certain revision of the entry.

___

### get

• **get**: (`model`: [*CmsContentModel*](cmscontentmodel.md), `args?`: [*CmsContentEntryGetArgs*](cmscontententrygetargs.md)) => *Promise*<[*CmsContentEntry*](cmscontententry.md)\>

Get a single content entry for a model.

___

### getByIds

• **getByIds**: (`model`: [*CmsContentModel*](cmscontentmodel.md), `revisions`: *string*[]) => *Promise*<[*CmsContentEntry*](cmscontententry.md)[]\>

Get a list of entries for a model by a given ID (revision).

___

### getLatestByIds

• **getLatestByIds**: (`model`: [*CmsContentModel*](cmscontentmodel.md), `ids`: *string*[]) => *Promise*<[*CmsContentEntry*](cmscontententry.md)[]\>

List latest entries by IDs.

___

### getPublishedByIds

• **getPublishedByIds**: (`model`: [*CmsContentModel*](cmscontentmodel.md), `ids`: *string*[]) => *Promise*<[*CmsContentEntry*](cmscontententry.md)[]\>

List published entries by IDs.

___

### list

• **list**: (`model`: [*CmsContentModel*](cmscontentmodel.md), `args?`: [*CmsContentEntryListArgs*](cmscontententrylistargs.md), `options?`: [*CmsContentEntryListOptions*](cmscontententrylistoptions.md)) => *Promise*<[[*CmsContentEntry*](cmscontententry.md)[], [*CmsContentEntryMeta*](cmscontententrymeta.md)]\>

List entries for a model. Internal method used by get, listLatest and listPublished.

___

### listLatest

• **listLatest**: (`model`: [*CmsContentModel*](cmscontentmodel.md), `args?`: [*CmsContentEntryListArgs*](cmscontententrylistargs.md)) => *Promise*<[[*CmsContentEntry*](cmscontententry.md)[], [*CmsContentEntryMeta*](cmscontententrymeta.md)]\>

Lists latest entries. Used for manage API.

___

### listPublished

• **listPublished**: (`model`: [*CmsContentModel*](cmscontentmodel.md), `args?`: [*CmsContentEntryListArgs*](cmscontententrylistargs.md)) => *Promise*<[[*CmsContentEntry*](cmscontententry.md)[], [*CmsContentEntryMeta*](cmscontententrymeta.md)]\>

List published entries. Used for read API.

___

### update

• **update**: (`model`: [*CmsContentModel*](cmscontentmodel.md), `id`: *string*, `data?`: *Record*<*string*, *any*\>) => *Promise*<[*CmsContentEntry*](cmscontententry.md)\>

Update existing entry.

## Methods

### getEntryRevisions

▸ **getEntryRevisions**(`id`: *string*): *Promise*<[*CmsContentEntry*](cmscontententry.md)[]\>

Get all entry revisions.

#### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |

**Returns:** *Promise*<[*CmsContentEntry*](cmscontententry.md)[]\>

___

### publish

▸ **publish**(`model`: [*CmsContentModel*](cmscontentmodel.md), `id`: *string*): *Promise*<[*CmsContentEntry*](cmscontententry.md)\>

Publish entry.

#### Parameters:

Name | Type |
------ | ------ |
`model` | [*CmsContentModel*](cmscontentmodel.md) |
`id` | *string* |

**Returns:** *Promise*<[*CmsContentEntry*](cmscontententry.md)\>

___

### requestChanges

▸ **requestChanges**(`model`: [*CmsContentModel*](cmscontentmodel.md), `id`: *string*): *Promise*<[*CmsContentEntry*](cmscontententry.md)\>

Request changes for the entry.

#### Parameters:

Name | Type |
------ | ------ |
`model` | [*CmsContentModel*](cmscontentmodel.md) |
`id` | *string* |

**Returns:** *Promise*<[*CmsContentEntry*](cmscontententry.md)\>

___

### requestReview

▸ **requestReview**(`model`: [*CmsContentModel*](cmscontentmodel.md), `id`: *string*): *Promise*<[*CmsContentEntry*](cmscontententry.md)\>

Request a review for the entry.

#### Parameters:

Name | Type |
------ | ------ |
`model` | [*CmsContentModel*](cmscontentmodel.md) |
`id` | *string* |

**Returns:** *Promise*<[*CmsContentEntry*](cmscontententry.md)\>

___

### unpublish

▸ **unpublish**(`model`: [*CmsContentModel*](cmscontentmodel.md), `id`: *string*): *Promise*<[*CmsContentEntry*](cmscontententry.md)\>

Unpublish entry.

#### Parameters:

Name | Type |
------ | ------ |
`model` | [*CmsContentModel*](cmscontentmodel.md) |
`id` | *string* |

**Returns:** *Promise*<[*CmsContentEntry*](cmscontententry.md)\>
