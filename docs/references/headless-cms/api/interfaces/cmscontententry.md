[Headless CMS API](../index) / CmsContentEntry

# Interface: CmsContentEntry

A content entry definition for and from the database.

## Hierarchy

* **CmsContentEntry**

  ↳ [*CmsContentIndexEntry*](cmscontentindexentry)

## Table of contents

### Properties

- [createdBy](cmscontententry#createdby)
- [createdOn](cmscontententry#createdon)
- [id](cmscontententry#id)
- [locale](cmscontententry#locale)
- [locked](cmscontententry#locked)
- [modelId](cmscontententry#modelid)
- [ownedBy](cmscontententry#ownedby)
- [publishedOn](cmscontententry#publishedon)
- [savedOn](cmscontententry#savedon)
- [status](cmscontententry#status)
- [values](cmscontententry#values)
- [version](cmscontententry#version)

## Properties

### createdBy

• **createdBy**: [*CreatedBy*](createdby)

CreatedBy object reference.

___

### createdOn

• **createdOn**: *string*

A string of Date.toISOString() type.
Populated on creation.

___

### id

• **id**: *string*

Generated ID of the entry.

___

### locale

• **locale**: *string*

A locale of the entry.

**`see`** I18NLocale.code

___

### locked

• **locked**: *boolean*

Is the entry locked?

___

### modelId

• **modelId**: *string*

Model ID of the definition for the entry.

**`see`** CmsContentModel

___

### ownedBy

• **ownedBy**: [*CreatedBy*](createdby)

OwnedBy object reference. Can be different from CreatedBy.

___

### publishedOn

• `Optional` **publishedOn**: *string*

A string of Date.toISOString() type - if published.
Populated when entry is published.

___

### savedOn

• **savedOn**: *string*

A string of Date.toISOString() type.
Populated every time entry is saved.

___

### status

• **status**: CmsContentEntryStatus

Status type of the entry.

___

### values

• **values**: *Record*<*string*, *any*\>

A mapped fieldId -> value object.

**`see`** CmsContentModelField

___

### version

• **version**: *number*

A revision version of the entry.
