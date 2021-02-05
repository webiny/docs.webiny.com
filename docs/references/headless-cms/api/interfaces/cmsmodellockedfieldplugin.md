[Headless CMS API](../index) / CmsModelLockedFieldPlugin

# Interface: CmsModelLockedFieldPlugin

Check for content model locked field.
A custom plugin definable by the user.

## Hierarchy

* *Plugin*

  ↳ **CmsModelLockedFieldPlugin**

## Table of contents

### Properties

- [fieldType](cmsmodellockedfieldplugin#fieldtype)
- [init](cmsmodellockedfieldplugin#init)
- [name](cmsmodellockedfieldplugin#name)
- [type](cmsmodellockedfieldplugin#type)

### Methods

- [checkLockedField](cmsmodellockedfieldplugin#checklockedfield)
- [getLockedFieldData](cmsmodellockedfieldplugin#getlockedfielddata)

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

▸ `Optional`**checkLockedField**(`params`: { `field`: [*CmsContentModelField*](cmscontentmodelfield) ; `lockedField`: [*LockedField*](lockedfield)  }): *void*

A method to check if field really is locked.

#### Parameters:

Name | Type |
------ | ------ |
`params` | { `field`: [*CmsContentModelField*](cmscontentmodelfield) ; `lockedField`: [*LockedField*](lockedfield)  } |

**Returns:** *void*

___

### getLockedFieldData

▸ `Optional`**getLockedFieldData**(`params`: { `field`: [*CmsContentModelField*](cmscontentmodelfield)  }): *object*

A method to get the locked field data.

#### Parameters:

Name | Type |
------ | ------ |
`params` | { `field`: [*CmsContentModelField*](cmscontentmodelfield)  } |

**Returns:** *object*
