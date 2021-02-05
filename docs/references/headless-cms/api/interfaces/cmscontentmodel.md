[Headless CMS API](../index) / CmsContentModel

# Interface: CmsContentModel

Content model defining an entry.

## Hierarchy

* **CmsContentModel**

## Table of contents

### Properties

- [createdBy](cmscontentmodel#createdby)
- [createdOn](cmscontentmodel#createdon)
- [description](cmscontentmodel#description)
- [fields](cmscontentmodel#fields)
- [group](cmscontentmodel#group)
- [layout](cmscontentmodel#layout)
- [lockedFields](cmscontentmodel#lockedfields)
- [modelId](cmscontentmodel#modelid)
- [name](cmscontentmodel#name)
- [savedOn](cmscontentmodel#savedon)
- [titleFieldId](cmscontentmodel#titlefieldid)

## Properties

### createdBy

• `Optional` **createdBy**: [*CreatedBy*](createdby)

CreatedBy object wrapper. Contains id, name and type of the user.

___

### createdOn

• **createdOn**: Date

Date created

___

### description

• `Optional` **description**: *string*

Description for the content model.

___

### fields

• **fields**: [*CmsContentModelField*](cmscontentmodelfield)[]

List of fields defining entry values.

___

### group

• **group**: { `id`: *string* ; `name`: *string*  }

Content model group reference object.

#### Type declaration:

Name | Type | Description |
------ | ------ | ------ |
`id` | *string* | Generated ID of the group   |
`name` | *string* | Name of the group   |

___

### layout

• **layout**: *string*[][]

Admin UI field layout

```ts
layout: [
     [field1id, field2id],
     [field3id]
]
```

___

### lockedFields

• **lockedFields**: [*LockedField*](lockedfield)[]

List of locked fields. Updated when entry is saved and a field has been used.

___

### modelId

• **modelId**: *string*

Unique ID for the content model. Created from name if not defined by user.

___

### name

• **name**: *string*

Name of the content model.

___

### savedOn

• **savedOn**: Date

Date saved. Changes on both save and create.

___

### titleFieldId

• **titleFieldId**: *string*

The field that is being displayed as entry title.
It is picked as first available text field. Or user can select own field.
