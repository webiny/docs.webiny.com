[Webiny](../README.md) / [Exports](../modules.md) / CmsContentModelManager

# Interface: CmsContentModelManager

A definition for content model manager to be used in the code.
The default one uses `CmsContentEntryContext` methods internally, but devs can change to what every they want.

**`see`** CmsContentEntryContext

## Hierarchy

* **CmsContentModelManager**

## Table of contents

### Methods

- [create](cmscontentmodelmanager.md#create)
- [delete](cmscontentmodelmanager.md#delete)
- [get](cmscontentmodelmanager.md#get)
- [getLatestByIds](cmscontentmodelmanager.md#getlatestbyids)
- [getPublishedByIds](cmscontentmodelmanager.md#getpublishedbyids)
- [list](cmscontentmodelmanager.md#list)
- [listLatest](cmscontentmodelmanager.md#listlatest)
- [listPublished](cmscontentmodelmanager.md#listpublished)
- [update](cmscontentmodelmanager.md#update)

## Methods

### create

▸ **create**(`data`: *Record*<*string*, *any*\>): *Promise*<[*CmsContentEntry*](cmscontententry.md)\>

Create a entry.

#### Parameters:

Name | Type |
------ | ------ |
`data` | *Record*<*string*, *any*\> |

**Returns:** *Promise*<[*CmsContentEntry*](cmscontententry.md)\>

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

▸ **get**(`args?`: [*CmsContentEntryGetArgs*](cmscontententrygetargs.md)): *Promise*<[*CmsContentEntry*](cmscontententry.md)\>

Get an entry filtered by given args. Will always get one.

#### Parameters:

Name | Type |
------ | ------ |
`args?` | [*CmsContentEntryGetArgs*](cmscontententrygetargs.md) |

**Returns:** *Promise*<[*CmsContentEntry*](cmscontententry.md)\>

___

### getLatestByIds

▸ **getLatestByIds**(`ids`: *string*[]): *Promise*<[*CmsContentEntry*](cmscontententry.md)[]\>

Get a list of latest entries by the ID list.

#### Parameters:

Name | Type |
------ | ------ |
`ids` | *string*[] |

**Returns:** *Promise*<[*CmsContentEntry*](cmscontententry.md)[]\>

___

### getPublishedByIds

▸ **getPublishedByIds**(`ids`: *string*[]): *Promise*<[*CmsContentEntry*](cmscontententry.md)[]\>

Get a list of published entries by the ID list.

#### Parameters:

Name | Type |
------ | ------ |
`ids` | *string*[] |

**Returns:** *Promise*<[*CmsContentEntry*](cmscontententry.md)[]\>

___

### list

▸ **list**(`args?`: [*CmsContentEntryListArgs*](cmscontententrylistargs.md), `options?`: [*CmsContentEntryListOptions*](cmscontententrylistoptions.md)): *Promise*<[[*CmsContentEntry*](cmscontententry.md)[], [*CmsContentEntryMeta*](cmscontententrymeta.md)]\>

List entries in this content model.

#### Parameters:

Name | Type |
------ | ------ |
`args?` | [*CmsContentEntryListArgs*](cmscontententrylistargs.md) |
`options?` | [*CmsContentEntryListOptions*](cmscontententrylistoptions.md) |

**Returns:** *Promise*<[[*CmsContentEntry*](cmscontententry.md)[], [*CmsContentEntryMeta*](cmscontententrymeta.md)]\>

___

### listLatest

▸ **listLatest**(`args?`: [*CmsContentEntryListArgs*](cmscontententrylistargs.md)): *Promise*<[[*CmsContentEntry*](cmscontententry.md)[], [*CmsContentEntryMeta*](cmscontententrymeta.md)]\>

List latest entries in the content model. Used for administration.

#### Parameters:

Name | Type |
------ | ------ |
`args?` | [*CmsContentEntryListArgs*](cmscontententrylistargs.md) |

**Returns:** *Promise*<[[*CmsContentEntry*](cmscontententry.md)[], [*CmsContentEntryMeta*](cmscontententrymeta.md)]\>

___

### listPublished

▸ **listPublished**(`args?`: [*CmsContentEntryListArgs*](cmscontententrylistargs.md)): *Promise*<[[*CmsContentEntry*](cmscontententry.md)[], [*CmsContentEntryMeta*](cmscontententrymeta.md)]\>

List only published entries in the content model.

#### Parameters:

Name | Type |
------ | ------ |
`args?` | [*CmsContentEntryListArgs*](cmscontententrylistargs.md) |

**Returns:** *Promise*<[[*CmsContentEntry*](cmscontententry.md)[], [*CmsContentEntryMeta*](cmscontententrymeta.md)]\>

___

### update

▸ **update**(`id`: *string*, `data`: *Record*<*string*, *any*\>): *Promise*<[*CmsContentEntry*](cmscontententry.md)\>

Update a entry.

#### Parameters:

Name | Type |
------ | ------ |
`id` | *string* |
`data` | *Record*<*string*, *any*\> |

**Returns:** *Promise*<[*CmsContentEntry*](cmscontententry.md)\>
