[Headless CMS API](../index) /  CmsContentModelHookPlugin

# Interface: CmsContentModelHookPlugin

A plugin type that defines lifecycle hooks for content model.

## Hierarchy

* *Plugin*

  ↳ **CmsContentModelHookPlugin**

## Table of contents

### Properties

- [afterCreate](cmscontentmodelhookplugin.md#aftercreate)
- [afterDelete](cmscontentmodelhookplugin.md#afterdelete)
- [afterUpdate](cmscontentmodelhookplugin.md#afterupdate)
- [beforeCreate](cmscontentmodelhookplugin.md#beforecreate)
- [beforeDelete](cmscontentmodelhookplugin.md#beforedelete)
- [beforeUpdate](cmscontentmodelhookplugin.md#beforeupdate)
- [init](cmscontentmodelhookplugin.md#init)
- [name](cmscontentmodelhookplugin.md#name)
- [type](cmscontentmodelhookplugin.md#type)

## Properties

### afterCreate

• `Optional` **afterCreate**: (`args`: [*CmsContentModelHookPluginArgs*](cmscontentmodelhookpluginargs.md)) => *void*

A hook triggered after the content model is created.

___

### afterDelete

• `Optional` **afterDelete**: (`args`: [*CmsContentModelHookPluginArgs*](cmscontentmodelhookpluginargs.md)) => *void*

A hook triggered after the content model is deleted.

___

### afterUpdate

• `Optional` **afterUpdate**: (`args`: [*CmsContentModelHookPluginArgs*](cmscontentmodelhookpluginargs.md)) => *void*

A hook triggered after the content model is updated.

___

### beforeCreate

• `Optional` **beforeCreate**: (`args`: [*CmsContentModelHookPluginArgs*](cmscontentmodelhookpluginargs.md)) => *void*

A hook triggered before the content model is created.

___

### beforeDelete

• `Optional` **beforeDelete**: (`args`: [*CmsContentModelHookPluginArgs*](cmscontentmodelhookpluginargs.md)) => *void*

A hook triggered before the content model is deleted.

___

### beforeUpdate

• `Optional` **beforeUpdate**: (`args`: [*CmsContentModelUpdateHookPluginArgs*](cmscontentmodelupdatehookpluginargs.md)) => *void*

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
