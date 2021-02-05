[Headless CMS API](../index) / CmsContentIndexEntry

# Interface: CmsContentIndexEntry

A definition of the entry that is being prepared for the Elasticsearch.

## Hierarchy

* [*CmsContentEntry*](cmscontententry)

  ↳ **CmsContentIndexEntry**

## Indexable

▪ [key: *string*]: *any*

Dev can add what ever keys they want and need. Just need to be careful not to break the entry.

## Table of contents

### Properties

- [createdBy](cmscontentindexentry#createdby)
- [createdOn](cmscontentindexentry#createdon)
- [id](cmscontentindexentry#id)
- [locale](cmscontentindexentry#locale)
- [locked](cmscontentindexentry#locked)
- [modelId](cmscontentindexentry#modelid)
- [ownedBy](cmscontentindexentry#ownedby)
- [publishedOn](cmscontentindexentry#publishedon)
- [rawValues](cmscontentindexentry#rawvalues)
- [savedOn](cmscontentindexentry#savedon)
- [status](cmscontentindexentry#status)
- [values](cmscontentindexentry#values)
- [version](cmscontentindexentry#version)

## Properties

### createdBy

• **createdBy**: [*CreatedBy*](createdby)

CreatedBy object reference.

Inherited from: [CmsContentEntry](cmscontententry).[createdBy](cmscontententry#createdby)

___

### createdOn

• **createdOn**: *string*

A string of Date.toISOString() type.
Populated on creation.

Inherited from: [CmsContentEntry](cmscontententry).[createdOn](cmscontententry#createdon)

___

### id

• **id**: *string*

Generated ID of the entry.

Inherited from: [CmsContentEntry](cmscontententry).[id](cmscontententry#id)

___

### locale

• **locale**: *string*

A locale of the entry.

**`see`** I18NLocale.code

Inherited from: [CmsContentEntry](cmscontententry).[locale](cmscontententry#locale)

___

### locked

• **locked**: *boolean*

Is the entry locked?

Inherited from: [CmsContentEntry](cmscontententry).[locked](cmscontententry#locked)

___

### modelId

• **modelId**: *string*

Model ID of the definition for the entry.

**`see`** CmsContentModel

Inherited from: [CmsContentEntry](cmscontententry).[modelId](cmscontententry#modelid)

___

### ownedBy

• **ownedBy**: [*CreatedBy*](createdby)

OwnedBy object reference. Can be different from CreatedBy.

Inherited from: [CmsContentEntry](cmscontententry).[ownedBy](cmscontententry#ownedby)

___

### publishedOn

• `Optional` **publishedOn**: *string*

A string of Date.toISOString() type - if published.
Populated when entry is published.

Inherited from: [CmsContentEntry](cmscontententry).[publishedOn](cmscontententry#publishedon)

___

### rawValues

• **rawValues**: *Record*<*string*, *any*\>

Values that are not going to be indexed.

___

### savedOn

• **savedOn**: *string*

A string of Date.toISOString() type.
Populated every time entry is saved.

Inherited from: [CmsContentEntry](cmscontententry).[savedOn](cmscontententry#savedon)

___

### status

• **status**: CmsContentEntryStatus

Status type of the entry.

Inherited from: [CmsContentEntry](cmscontententry).[status](cmscontententry#status)

___

### values

• **values**: *Record*<*string*, *any*\>

A mapped fieldId -> value object.

**`see`** CmsContentModelField

Inherited from: [CmsContentEntry](cmscontententry).[values](cmscontententry#values)

___

### version

• **version**: *number*

A revision version of the entry.

Inherited from: [CmsContentEntry](cmscontententry).[version](cmscontententry#version)
