[Headless CMS API](../index) / ContentModelManagerPlugin

# Interface: ContentModelManagerPlugin

A plugin to load a CmsContentModelManager.

**`see`** CmsContentModelManager

## Hierarchy

* *Plugin*

  ↳ **ContentModelManagerPlugin**

## Table of contents

### Properties

- [init](contentmodelmanagerplugin#init)
- [modelId](contentmodelmanagerplugin#modelid)
- [name](contentmodelmanagerplugin#name)
- [type](contentmodelmanagerplugin#type)

### Methods

- [create](contentmodelmanagerplugin#create)

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

▸ **create**(`context`: [*CmsContext*](cmscontext), `model`: [*CmsContentModel*](cmscontentmodel)): *Promise*<[*CmsContentModelManager*](cmscontentmodelmanager)\>

Create a CmsContentModelManager for specific type - or new default one.
For reference in how is this plugin run check [contentModelManagerFactory](https://github.com/webiny/webiny-js/blob/f15676/packages/api-headless-cms/src/content/plugins/crud/contentModel/contentModelManagerFactory.ts)

#### Parameters:

Name | Type |
------ | ------ |
`context` | [*CmsContext*](cmscontext) |
`model` | [*CmsContentModel*](cmscontentmodel) |

**Returns:** *Promise*<[*CmsContentModelManager*](cmscontentmodelmanager)\>
