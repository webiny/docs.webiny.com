# Interface: CmsModelLockedFieldPlugin

Check for content model locked field.
A custom plugin definable by the user.

## Hierarchy

* *Plugin*

  ↳ **CmsModelLockedFieldPlugin**

## Table of contents

### Properties

- [fieldType](cmsmodellockedfieldplugin.md#fieldtype)
- [init](cmsmodellockedfieldplugin.md#init)
- [name](cmsmodellockedfieldplugin.md#name)
- [type](cmsmodellockedfieldplugin.md#type)

### Methods

- [checkLockedField](cmsmodellockedfieldplugin.md#checklockedfield)
- [getLockedFieldData](cmsmodellockedfieldplugin.md#getlockedfielddata)

## Properties

### fieldType

• **fieldType**: *string*

A unique identifier of the field type (text, number, json, myField, ...).

___

### init

• `Optional` **init**: () => *void*

___

### name

• `Optional` **name**: *string*

___

### type

• **type**: *cms-model-locked-field*

A plugin type

## Methods

### checkLockedField

▸ `Optional`**checkLockedField**(`params`: { `field`: [*CmsContentModelField*](cmscontentmodelfield.md) ; `lockedField`: [*LockedField*](lockedfield.md)  }): *void*

A method to check if field really is locked.

#### Parameters:

Name | Type |
------ | ------ |
`params` | { `field`: [*CmsContentModelField*](cmscontentmodelfield.md) ; `lockedField`: [*LockedField*](lockedfield.md)  } |

**Returns:** *void*

___

### getLockedFieldData

▸ `Optional`**getLockedFieldData**(`params`: { `field`: [*CmsContentModelField*](cmscontentmodelfield.md)  }): *object*

A method to get the locked field data.

#### Parameters:

Name | Type |
------ | ------ |
`params` | { `field`: [*CmsContentModelField*](cmscontentmodelfield.md)  } |

**Returns:** *object*
