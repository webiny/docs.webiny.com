[Headless CMS API](../index) / CmsContentEntryContext

# Interface: CmsContentEntryContext

Content entry crud methods in the context.

## Hierarchy

* **CmsContentEntryContext**

## Table of contents

### Properties

- [create](cmscontententrycontext#create)
- [createRevisionFrom](cmscontententrycontext#createrevisionfrom)
- [deleteEntry](cmscontententrycontext#deleteentry)
- [deleteRevision](cmscontententrycontext#deleterevision)
- [get](cmscontententrycontext#get)
- [getByIds](cmscontententrycontext#getbyids)
- [getLatestByIds](cmscontententrycontext#getlatestbyids)
- [getPublishedByIds](cmscontententrycontext#getpublishedbyids)
- [list](cmscontententrycontext#list)
- [listLatest](cmscontententrycontext#listlatest)
- [listPublished](cmscontententrycontext#listpublished)
- [update](cmscontententrycontext#update)

### Methods

- [getEntryRevisions](cmscontententrycontext#getentryrevisions)
- [publish](cmscontententrycontext#publish)
- [requestChanges](cmscontententrycontext#requestchanges)
- [requestReview](cmscontententrycontext#requestreview)
- [unpublish](cmscontententrycontext#unpublish)

## Properties

### create

• **create**: (`model`: [*CmsContentModel*](cmscontentmodel), `data`: *Record*<*string*, *any*\>) => *Promise*<[*CmsContentEntry*](cmscontententry)\>

Create a new content entry.

___

### createRevisionFrom

• **createRevisionFrom**: (`model`: [*CmsContentModel*](cmscontentmodel), `id`: *string*, `data`: *Record*<*string*, *any*\>) => *Promise*<[*CmsContentEntry*](cmscontententry)\>

Create a new entry from already existing entry.

___

### deleteEntry

• **deleteEntry**: (`model`: [*CmsContentModel*](cmscontentmodel), `id`: *string*) => *Promise*<*void*\>

Delete entry with all its revisions.

___

### deleteRevision

• **deleteRevision**: (`model`: [*CmsContentModel*](cmscontentmodel), `id`: *string*) => *Promise*<*void*\>

Delete only a certain revision of the entry.

___

### get

• **get**: (`model`: [*CmsContentModel*](cmscontentmodel), `args?`: [*CmsContentEntryGetArgs*](cmscontententrygetargs)) => *Promise*<[*CmsContentEntry*](cmscontententry)\>

Get a single content entry for a model.

___

### getByIds

• **getByIds**: (`model`: [*CmsContentModel*](cmscontentmodel), `revisions`: *string*[]) => *Promise*<[*CmsContentEntry*](cmscontententry)[]\>

Get a list of entries for a model by a given ID (revision).

___

### getLatestByIds

• **getLatestByIds**: (`model`: [*CmsContentModel*](cmscontentmodel), `ids`: *string*[]) => *Promise*<[*CmsContentEntry*](cmscontententry)[]\>

List latest entries by IDs.

___

### getPublishedByIds

• **getPublishedByIds**: (`model`: [*CmsContentModel*](cmscontentmodel), `ids`: *string*[]) => *Promise*<[*CmsContentEntry*](cmscontententry)[]\>

List published entries by IDs.

___

### list

• **list**: (`model`: [*CmsContentModel*](cmscontentmodel), `args?`: [*CmsContentEntryListArgs*](cmscontententrylistargs), `options?`: [*CmsContentEntryListOptions*](cmscontententrylistoptions)) => *Promise*<[[*CmsContentEntry*](cmscontententry)[], [*CmsContentEntryMeta*](cmscontententrymeta)]\>

List entries for a model. Internal method used by get, listLatest and listPublished.

___

### listLatest

• **listLatest**: (`model`: [*CmsContentModel*](cmscontentmodel), `args?`: [*CmsContentEntryListArgs*](cmscontententrylistargs)) => *Promise*<[[*CmsContentEntry*](cmscontententry)[], [*CmsContentEntryMeta*](cmscontententrymeta)]\>

Lists latest entries. Used for manage API.

___

### listPublished

• **listPublished**: (`model`: [*CmsContentModel*](cmscontentmodel), `args?`: [*CmsContentEntryListArgs*](cmscontententrylistargs)) => *Promise*<[[*CmsContentEntry*](cmscontententry)[], [*CmsContentEntryMeta*](cmscontententrymeta)]\>

List published entries. Used for read API.

___

### update

• **update**: (`model`: [*CmsContentModel*](cmscontentmodel), `id`: *string*, `data?`: *Record*<*string*, *any*\>) => *Promise*<[*CmsContentEntry*](cmscontententry)\>

Update existing entry.

## Methods

### getEntryRevisions

▸ **getEntryRevisions**(`id`: *string*): *Promise*<[*CmsContentEntry*](cmscontententry)[]\>

Get all entry revisions.

#### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |

**Returns:** *Promise*<[*CmsContentEntry*](cmscontententry)[]\>

___

### publish

▸ **publish**(`model`: [*CmsContentModel*](cmscontentmodel), `id`: *string*): *Promise*<[*CmsContentEntry*](cmscontententry)\>

Publish entry.

#### Parameters:

Name | Type |
------ | ------ |
`model` | [*CmsContentModel*](cmscontentmodel) |
`id` | *string* |

**Returns:** *Promise*<[*CmsContentEntry*](cmscontententry)\>

___

### requestChanges

▸ **requestChanges**(`model`: [*CmsContentModel*](cmscontentmodel), `id`: *string*): *Promise*<[*CmsContentEntry*](cmscontententry)\>

Request changes for the entry.

#### Parameters:

Name | Type |
------ | ------ |
`model` | [*CmsContentModel*](cmscontentmodel) |
`id` | *string* |

**Returns:** *Promise*<[*CmsContentEntry*](cmscontententry)\>

___

### requestReview

▸ **requestReview**(`model`: [*CmsContentModel*](cmscontentmodel), `id`: *string*): *Promise*<[*CmsContentEntry*](cmscontententry)\>

Request a review for the entry.

#### Parameters:

Name | Type |
------ | ------ |
`model` | [*CmsContentModel*](cmscontentmodel) |
`id` | *string* |

**Returns:** *Promise*<[*CmsContentEntry*](cmscontententry)\>

___

### unpublish

▸ **unpublish**(`model`: [*CmsContentModel*](cmscontentmodel), `id`: *string*): *Promise*<[*CmsContentEntry*](cmscontententry)\>

Unpublish entry.

#### Parameters:

Name | Type |
------ | ------ |
`model` | [*CmsContentModel*](cmscontentmodel) |
`id` | *string* |

**Returns:** *Promise*<[*CmsContentEntry*](cmscontententry)\>
