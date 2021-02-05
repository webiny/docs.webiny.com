[Headless CMS API](../index) / CmsContentEntryHookPlugin

# Interface: CmsContentEntryHookPlugin

A plugin type that defines lifecycle hooks for content entry.

## Hierarchy

* *Plugin*

  ↳ **CmsContentEntryHookPlugin**

## Table of contents

### Properties

- [afterCreate](cmscontententryhookplugin#aftercreate)
- [afterCreateRevisionFrom](cmscontententryhookplugin#aftercreaterevisionfrom)
- [afterDelete](cmscontententryhookplugin#afterdelete)
- [afterDeleteRevision](cmscontententryhookplugin#afterdeleterevision)
- [afterPublish](cmscontententryhookplugin#afterpublish)
- [afterRequestChanges](cmscontententryhookplugin#afterrequestchanges)
- [afterRequestReview](cmscontententryhookplugin#afterrequestreview)
- [afterUnpublish](cmscontententryhookplugin#afterunpublish)
- [afterUpdate](cmscontententryhookplugin#afterupdate)
- [beforeCreate](cmscontententryhookplugin#beforecreate)
- [beforeCreateRevisionFrom](cmscontententryhookplugin#beforecreaterevisionfrom)
- [beforeDelete](cmscontententryhookplugin#beforedelete)
- [beforeDeleteRevision](cmscontententryhookplugin#beforedeleterevision)
- [beforePublish](cmscontententryhookplugin#beforepublish)
- [beforeRequestChanges](cmscontententryhookplugin#beforerequestchanges)
- [beforeRequestReview](cmscontententryhookplugin#beforerequestreview)
- [beforeUnpublish](cmscontententryhookplugin#beforeunpublish)
- [beforeUpdate](cmscontententryhookplugin#beforeupdate)
- [init](cmscontententryhookplugin#init)
- [name](cmscontententryhookplugin#name)
- [type](cmscontententryhookplugin#type)

## Properties

### afterCreate

• `Optional` **afterCreate**: (`args`: CmsContentEntryHookPluginArgs) => *void*

A hook triggered after entry is stored to the database and Elasticsearch.

___

### afterCreateRevisionFrom

• `Optional` **afterCreateRevisionFrom**: (`args`: CmsContentEntryHookPluginArgs) => *void*

**`see`** CmsContentEntryHookPlugin.afterCreate

___

### afterDelete

• `Optional` **afterDelete**: (`args`: CmsContentEntryHookPluginArgs) => *void*

A hook triggered after deleting an entry from the database and Elasticsearch.

___

### afterDeleteRevision

• `Optional` **afterDeleteRevision**: (`args`: CmsContentEntryHookPluginArgs) => *void*

A hook triggered after deleting certain revision from the database and Elasticsearch.
In a case that deleted revision is only one, deleteEntry is called just to make sure that nothing is left in storage.

___

### afterPublish

• `Optional` **afterPublish**: (`args`: CmsContentEntryHookPluginArgs) => *void*

A hook triggered after publishing of an entry. Publish is stored in both database and Elasticsearch.

___

### afterRequestChanges

• `Optional` **afterRequestChanges**: (`args`: CmsContentEntryHookPluginArgs) => *void*

A hook triggered after requesting changes of an entry.

___

### afterRequestReview

• `Optional` **afterRequestReview**: (`args`: CmsContentEntryHookPluginArgs) => *void*

A hook triggered after requesting review of an entry.

___

### afterUnpublish

• `Optional` **afterUnpublish**: (`args`: CmsContentEntryHookPluginArgs) => *void*

A hook triggered after unpublishing of an entry. Publish is stored in both database and Elasticsearch.

___

### afterUpdate

• `Optional` **afterUpdate**: (`args`: CmsContentEntryHookPluginArgs) => *void*

A hook triggered after entry is updated in the database and Elasticsearch.

___

### beforeCreate

• `Optional` **beforeCreate**: (`args`: CmsContentEntryHookPluginArgs) => *void*

A hook triggered before entry is stored.
At this point, entry for storage and elastic search is already built so you cannot modify them.

___

### beforeCreateRevisionFrom

• `Optional` **beforeCreateRevisionFrom**: (`args`: CmsContentEntryHookPluginArgs) => *void*

**`see`** CmsContentEntryHookPlugin.beforeCreate

___

### beforeDelete

• `Optional` **beforeDelete**: (`args`: CmsContentEntryHookPluginArgs) => *void*

A hook triggered before deleting an entry with all its revisions.

___

### beforeDeleteRevision

• `Optional` **beforeDeleteRevision**: (`args`: CmsContentEntryHookPluginArgs) => *void*

A hook triggered before deleting a certain revision (id#revision).

___

### beforePublish

• `Optional` **beforePublish**: (`args`: CmsContentEntryHookPluginArgs) => *void*

A hook triggered before publishing of an entry.

___

### beforeRequestChanges

• `Optional` **beforeRequestChanges**: (`args`: CmsContentEntryHookPluginArgs) => *void*

A hook triggered before requesting changes of an entry.

___

### beforeRequestReview

• `Optional` **beforeRequestReview**: (`args`: CmsContentEntryHookPluginArgs) => *void*

A hook triggered before requesting review of an entry.

___

### beforeUnpublish

• `Optional` **beforeUnpublish**: (`args`: CmsContentEntryHookPluginArgs) => *void*

A hook triggered before unpublishing of an entry.

___

### beforeUpdate

• `Optional` **beforeUpdate**: (`args`: CmsContentEntryHookPluginArgs) => *void*

A hook triggered before entry is updated in the database.
It can be modified but we do not recommend it.

___

### init

• `Optional` **init**: () => *void*

___

### name

• `Optional` **name**: *string*

___

### type

• **type**: *content-entry-hook*
