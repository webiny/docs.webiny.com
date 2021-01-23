# Interface: ContentModelManagerPlugin

A plugin to load a CmsContentModelManager.

**`see`** CmsContentModelManager

## Hierarchy

* *Plugin*

  ↳ **ContentModelManagerPlugin**

## Table of contents

### Properties

- [init](contentmodelmanagerplugin.md#init)
- [modelId](contentmodelmanagerplugin.md#modelid)
- [name](contentmodelmanagerplugin.md#name)
- [type](contentmodelmanagerplugin.md#type)

### Methods

- [create](contentmodelmanagerplugin.md#create)

## Properties

### init

• `Optional` **init**: () => *void*

___

### modelId

• `Optional` **modelId**: *string* \| *string*[]

Specific model CmsContentModelManager loader. Can target exact modelId(s).
Be aware that if you define multiple plugins without `modelId`, last one will run.

___

### name

• `Optional` **name**: *string*

___

### type

• **type**: *content-model-manager*

A plugin type.

## Methods

### create

▸ **create**<T\>(`context`: [*CmsContext*](cmscontext.md), `model`: [*CmsContentModel*](cmscontentmodel.md)): *Promise*<[*CmsContentModelManager*](cmscontentmodelmanager.md)\>

Create a CmsContentModelManager for specific type - or new default one.
For reference in how is this plugin run check [contentModelManagerFactory](https://github.com/webiny/webiny-js/blob/f15676/packages/api-headless-cms/src/content/plugins/crud/contentModel/contentModelManagerFactory.ts)

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`context` | [*CmsContext*](cmscontext.md) |
`model` | [*CmsContentModel*](cmscontentmodel.md) |

**Returns:** *Promise*<[*CmsContentModelManager*](cmscontentmodelmanager.md)\>
