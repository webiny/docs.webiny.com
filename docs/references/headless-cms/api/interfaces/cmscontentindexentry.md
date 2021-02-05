[Webiny](../README.md) / [Exports](../modules.md) / CmsContentIndexEntry

# Interface: CmsContentIndexEntry

A definition of the entry that is being prepared for the Elasticsearch.

## Hierarchy

* [*CmsContentEntry*](cmscontententry.md)

  ↳ **CmsContentIndexEntry**

## Indexable

▪ [key: *string*]: *any*

Dev can add what ever keys they want and need. Just need to be careful not to break the entry.

## Table of contents

### Properties

- [createdBy](cmscontentindexentry.md#createdby)
- [createdOn](cmscontentindexentry.md#createdon)
- [id](cmscontentindexentry.md#id)
- [locale](cmscontentindexentry.md#locale)
- [locked](cmscontentindexentry.md#locked)
- [modelId](cmscontentindexentry.md#modelid)
- [ownedBy](cmscontentindexentry.md#ownedby)
- [publishedOn](cmscontentindexentry.md#publishedon)
- [rawValues](cmscontentindexentry.md#rawvalues)
- [savedOn](cmscontentindexentry.md#savedon)
- [status](cmscontentindexentry.md#status)
- [values](cmscontentindexentry.md#values)
- [version](cmscontentindexentry.md#version)

## Properties

### createdBy

• **createdBy**: [*CreatedBy*](createdby.md)

CreatedBy object reference.

Inherited from: [CmsContentEntry](cmscontententry.md).[createdBy](cmscontententry.md#createdby)

___

### createdOn

• **createdOn**: *string*

A string of Date.toISOString() type.
Populated on creation.

Inherited from: [CmsContentEntry](cmscontententry.md).[createdOn](cmscontententry.md#createdon)

___

### id

• **id**: *string*

Generated ID of the entry.

Inherited from: [CmsContentEntry](cmscontententry.md).[id](cmscontententry.md#id)

___

### locale

• **locale**: *string*

A locale of the entry.

**`see`** I18NLocale.code

Inherited from: [CmsContentEntry](cmscontententry.md).[locale](cmscontententry.md#locale)

___

### locked

• **locked**: *boolean*

Is the entry locked?

Inherited from: [CmsContentEntry](cmscontententry.md).[locked](cmscontententry.md#locked)

___

### modelId

• **modelId**: *string*

Model ID of the definition for the entry.

**`see`** CmsContentModel

Inherited from: [CmsContentEntry](cmscontententry.md).[modelId](cmscontententry.md#modelid)

___

### ownedBy

• **ownedBy**: [*CreatedBy*](createdby.md)

OwnedBy object reference. Can be different from CreatedBy.

Inherited from: [CmsContentEntry](cmscontententry.md).[ownedBy](cmscontententry.md#ownedby)

___

### publishedOn

• `Optional` **publishedOn**: *string*

A string of Date.toISOString() type - if published.
Populated when entry is published.

Inherited from: [CmsContentEntry](cmscontententry.md).[publishedOn](cmscontententry.md#publishedon)

___

### rawValues

• **rawValues**: *Record*<*string*, *any*\>

Values that are not going to be indexed.

___

### savedOn

• **savedOn**: *string*

A string of Date.toISOString() type.
Populated every time entry is saved.

Inherited from: [CmsContentEntry](cmscontententry.md).[savedOn](cmscontententry.md#savedon)

___

### status

• **status**: CmsContentEntryStatus

Status type of the entry.

Inherited from: [CmsContentEntry](cmscontententry.md).[status](cmscontententry.md#status)

___

### values

• **values**: *Record*<*string*, *any*\>

A mapped fieldId -> value object.

**`see`** CmsContentModelField

Inherited from: [CmsContentEntry](cmscontententry.md).[values](cmscontententry.md#values)

___

### version

• **version**: *number*

A revision version of the entry.

Inherited from: [CmsContentEntry](cmscontententry.md).[version](cmscontententry.md#version)
