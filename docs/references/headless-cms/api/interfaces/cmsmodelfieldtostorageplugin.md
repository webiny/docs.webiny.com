[Headless CMS API](../index) / CmsModelFieldToStoragePlugin

# Interface: CmsModelFieldToStoragePlugin

A plugin defining transformation of field value to and from storage.

## Hierarchy

* *Plugin*

  ↳ **CmsModelFieldToStoragePlugin**

## Table of contents

### Properties

- [fieldType](cmsmodelfieldtostorageplugin#fieldtype)
- [init](cmsmodelfieldtostorageplugin#init)
- [name](cmsmodelfieldtostorageplugin#name)
- [type](cmsmodelfieldtostorageplugin#type)

### Methods

- [fromStorage](cmsmodelfieldtostorageplugin#fromstorage)
- [toStorage](cmsmodelfieldtostorageplugin#tostorage)

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

▸ **fromStorage**(`args`: [*CmsModelFieldToStoragePluginFromStorageArgs*](cmsmodelfieldtostoragepluginfromstorageargs)): *Promise*<*any*\>

A function that is ran when retrieving the data from the database. You either revert the action you did in the `toStorage` or handle it via some other way available to you.

```ts
fromStorage({value}) {
     return ungzip(value);
}
```

#### Parameters:

Name | Type |
------ | ------ |
`args` | [*CmsModelFieldToStoragePluginFromStorageArgs*](cmsmodelfieldtostoragepluginfromstorageargs) |

**Returns:** *Promise*<*any*\>

___

### toStorage

▸ **toStorage**(`args`: [*CmsModelFieldToStoragePluginToStorageArgs*](cmsmodelfieldtostorageplugintostorageargs)): *Promise*<*any*\>

A function that is ran when storing the data. You can do what ever transformations you need on input value and return a new value that is stored into the database.

```ts
toStorage({value}) {
     return gzip(value);
}
```

#### Parameters:

Name | Type |
------ | ------ |
`args` | [*CmsModelFieldToStoragePluginToStorageArgs*](cmsmodelfieldtostorageplugintostorageargs) |

**Returns:** *Promise*<*any*\>
