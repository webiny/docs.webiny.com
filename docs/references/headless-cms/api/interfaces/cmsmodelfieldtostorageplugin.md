[Headless CMS API](../index) / CmsModelFieldToStoragePlugin

# Interface: CmsModelFieldToStoragePlugin

A plugin defining transformation of field value to and from storage.

## Hierarchy

* *Plugin*

  ↳ **CmsModelFieldToStoragePlugin**

## Table of contents

### Properties

- [fieldType](cmsmodelfieldtostorageplugin.md#fieldtype)
- [init](cmsmodelfieldtostorageplugin.md#init)
- [name](cmsmodelfieldtostorageplugin.md#name)
- [type](cmsmodelfieldtostorageplugin.md#type)

### Methods

- [fromStorage](cmsmodelfieldtostorageplugin.md#fromstorage)
- [toStorage](cmsmodelfieldtostorageplugin.md#tostorage)

## Properties

### fieldType

• **fieldType**: *string*

A unique identifier of the field type (text, number, json, myField, ...).

```ts
fieldType: "myField"
```

___

### init

• `Optional` **init**: () => *void*

___

### name

• `Optional` **name**: *string*

___

### type

• **type**: *cms-model-field-to-storage*

A plugin type

## Methods

### fromStorage

▸ **fromStorage**(`args`: [*CmsModelFieldToStoragePluginFromStorageArgs*](cmsmodelfieldtostoragepluginfromstorageargs.md)): *Promise*<*any*\>

A function that is ran when retrieving the data from the database. You either revert the action you did in the `toStorage` or handle it via some other way available to you.

```ts
fromStorage({value}) {
     return ungzip(value);
}
```

#### Parameters:

Name | Type |
------ | ------ |
`args` | [*CmsModelFieldToStoragePluginFromStorageArgs*](cmsmodelfieldtostoragepluginfromstorageargs.md) |

**Returns:** *Promise*<*any*\>

___

### toStorage

▸ **toStorage**(`args`: [*CmsModelFieldToStoragePluginToStorageArgs*](cmsmodelfieldtostorageplugintostorageargs.md)): *Promise*<*any*\>

A function that is ran when storing the data. You can do what ever transformations you need on input value and return a new value that is stored into the database.

```ts
toStorage({value}) {
     return gzip(value);
}
```

#### Parameters:

Name | Type |
------ | ------ |
`args` | [*CmsModelFieldToStoragePluginToStorageArgs*](cmsmodelfieldtostorageplugintostorageargs.md) |

**Returns:** *Promise*<*any*\>
