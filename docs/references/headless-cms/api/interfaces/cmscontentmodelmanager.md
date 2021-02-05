[Headless CMS API](../index) / CmsContentModelManager

# Interface: CmsContentModelManager

A definition for content model manager to be used in the code.
The default one uses `CmsContentEntryContext` methods internally, but devs can change to what every they want.

**`see`** CmsContentEntryContext

## Hierarchy

* **CmsContentModelManager**

## Table of contents

### Methods

- [create](cmscontentmodelmanager#create)
- [delete](cmscontentmodelmanager#delete)
- [get](cmscontentmodelmanager#get)
- [getLatestByIds](cmscontentmodelmanager#getlatestbyids)
- [getPublishedByIds](cmscontentmodelmanager#getpublishedbyids)
- [list](cmscontentmodelmanager#list)
- [listLatest](cmscontentmodelmanager#listlatest)
- [listPublished](cmscontentmodelmanager#listpublished)
- [update](cmscontentmodelmanager#update)

## Methods

### create

▸ **create**(`data`: *Record*<*string*, *any*\>): *Promise*<[*CmsContentEntry*](cmscontententry)\>

Create a entry.

#### Parameters:

Name | Type |
------ | ------ |
`data` | *Record*<*string*, *any*\> |

**Returns:** *Promise*<[*CmsContentEntry*](cmscontententry)\>

___

### delete

▸ **delete**(`id`: *string*): *Promise*<*void*\>

Delete a entry.

#### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |

**Returns:** *Promise*<*void*\>

___

### get

▸ **get**(`args?`: [*CmsContentEntryGetArgs*](cmscontententrygetargs)): *Promise*<[*CmsContentEntry*](cmscontententry)\>

Get an entry filtered by given args. Will always get one.

#### Parameters:

Name | Type |
------ | ------ |
`args?` | [*CmsContentEntryGetArgs*](cmscontententrygetargs) |

**Returns:** *Promise*<[*CmsContentEntry*](cmscontententry)\>

___

### getLatestByIds

▸ **getLatestByIds**(`ids`: *string*[]): *Promise*<[*CmsContentEntry*](cmscontententry)[]\>

Get a list of latest entries by the ID list.

#### Parameters:

Name | Type |
------ | ------ |
`ids` | *string*[] |

**Returns:** *Promise*<[*CmsContentEntry*](cmscontententry)[]\>

___

### getPublishedByIds

▸ **getPublishedByIds**(`ids`: *string*[]): *Promise*<[*CmsContentEntry*](cmscontententry)[]\>

Get a list of published entries by the ID list.

#### Parameters:

Name | Type |
------ | ------ |
`ids` | *string*[] |

**Returns:** *Promise*<[*CmsContentEntry*](cmscontententry)[]\>

___

### list

▸ **list**(`args?`: [*CmsContentEntryListArgs*](cmscontententrylistargs), `options?`: [*CmsContentEntryListOptions*](cmscontententrylistoptions)): *Promise*<[[*CmsContentEntry*](cmscontententry)[], [*CmsContentEntryMeta*](cmscontententrymeta)]\>

List entries in this content model.

#### Parameters:

Name | Type |
------ | ------ |
`args?` | [*CmsContentEntryListArgs*](cmscontententrylistargs) |
`options?` | [*CmsContentEntryListOptions*](cmscontententrylistoptions) |

**Returns:** *Promise*<[[*CmsContentEntry*](cmscontententry)[], [*CmsContentEntryMeta*](cmscontententrymeta)]\>

___

### listLatest

▸ **listLatest**(`args?`: [*CmsContentEntryListArgs*](cmscontententrylistargs)): *Promise*<[[*CmsContentEntry*](cmscontententry)[], [*CmsContentEntryMeta*](cmscontententrymeta)]\>

List latest entries in the content model. Used for administration.

#### Parameters:

Name | Type |
------ | ------ |
`args?` | [*CmsContentEntryListArgs*](cmscontententrylistargs) |

**Returns:** *Promise*<[[*CmsContentEntry*](cmscontententry)[], [*CmsContentEntryMeta*](cmscontententrymeta)]\>

___

### listPublished

▸ **listPublished**(`args?`: [*CmsContentEntryListArgs*](cmscontententrylistargs)): *Promise*<[[*CmsContentEntry*](cmscontententry)[], [*CmsContentEntryMeta*](cmscontententrymeta)]\>

List only published entries in the content model.

#### Parameters:

Name | Type |
------ | ------ |
`args?` | [*CmsContentEntryListArgs*](cmscontententrylistargs) |

**Returns:** *Promise*<[[*CmsContentEntry*](cmscontententry)[], [*CmsContentEntryMeta*](cmscontententrymeta)]\>

___

### update

▸ **update**(`id`: *string*, `data`: *Record*<*string*, *any*\>): *Promise*<[*CmsContentEntry*](cmscontententry)\>

Update a entry.

#### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |
`data` | *Record*<*string*, *any*\> |

**Returns:** *Promise*<[*CmsContentEntry*](cmscontententry)\>
