[Headless CMS API](../index) / CmsContentModelHookPlugin

# Interface: CmsContentModelHookPlugin

A plugin type that defines lifecycle hooks for content model.

## Hierarchy

* *Plugin*

  ↳ **CmsContentModelHookPlugin**

## Table of contents

### Properties

- [afterCreate](cmscontentmodelhookplugin#aftercreate)
- [afterDelete](cmscontentmodelhookplugin#afterdelete)
- [afterUpdate](cmscontentmodelhookplugin#afterupdate)
- [beforeCreate](cmscontentmodelhookplugin#beforecreate)
- [beforeDelete](cmscontentmodelhookplugin#beforedelete)
- [beforeUpdate](cmscontentmodelhookplugin#beforeupdate)
- [init](cmscontentmodelhookplugin#init)
- [name](cmscontentmodelhookplugin#name)
- [type](cmscontentmodelhookplugin#type)

## Properties

### afterCreate

• `Optional` **afterCreate**: (`args`: CmsContentModelHookPluginArgs) => *void*

A hook triggered after the content model is created.

___

### afterDelete

• `Optional` **afterDelete**: (`args`: CmsContentModelHookPluginArgs) => *void*

A hook triggered after the content model is deleted.

___

### afterUpdate

• `Optional` **afterUpdate**: (`args`: CmsContentModelHookPluginArgs) => *void*

A hook triggered after the content model is updated.

___

### beforeCreate

• `Optional` **beforeCreate**: (`args`: CmsContentModelHookPluginArgs) => *void*

A hook triggered before the content model is created.

___

### beforeDelete

• `Optional` **beforeDelete**: (`args`: CmsContentModelHookPluginArgs) => *void*

A hook triggered before the content model is deleted.

___

### beforeUpdate

• `Optional` **beforeUpdate**: (`args`: CmsContentModelUpdateHookPluginArgs) => *void*

A hook triggered before the content model is updated.

___

### init

• `Optional` **init**: () => *void*

___

### name

• `Optional` **name**: *string*

___

### type

• **type**: *content-model-hook*
