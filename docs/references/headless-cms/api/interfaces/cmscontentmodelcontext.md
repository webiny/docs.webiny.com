[Headless CMS API](../index) / CmsContentModelContext

# Interface: CmsContentModelContext

Content model in the context.

## Hierarchy

* **CmsContentModelContext**

## Table of contents

### Properties

- [create](cmscontentmodelcontext.md#create)
- [delete](cmscontentmodelcontext.md#delete)
- [get](cmscontentmodelcontext.md#get)
- [getManager](cmscontentmodelcontext.md#getmanager)
- [getManagers](cmscontentmodelcontext.md#getmanagers)
- [list](cmscontentmodelcontext.md#list)
- [noAuth](cmscontentmodelcontext.md#noauth)
- [update](cmscontentmodelcontext.md#update)

## Properties

### create

• **create**: (`data`: [*CmsContentModelCreateInput*](cmscontentmodelcreateinput.md)) => *Promise*<[*CmsContentModel*](cmscontentmodel.md)\>

Create a content model.

___

### delete

• **delete**: (`modelId`: *string*) => *Promise*<*void*\>

Delete content model. Should not allow deletion if there are entries connected to it.

___

### get

• **get**: (`modelId`: *string*) => *Promise*<[*CmsContentModel*](cmscontentmodel.md)\>

Get a single content model.

___

### getManager

• **getManager**: (`modelId`: *string*) => *Promise*<[*CmsContentModelManager*](cmscontentmodelmanager.md)\>

Get a instance of CmsContentModelManager for given content modelId.

**`see`** CmsContentModelManager

___

### getManagers

• **getManagers**: () => *Map*<*string*, [*CmsContentModelManager*](cmscontentmodelmanager.md)\>

Get all content model managers mapped by modelId.

**`see`** CmsContentModelManager

___

### list

• **list**: () => *Promise*<[*CmsContentModel*](cmscontentmodel.md)[]\>

Get all content models.

___

### noAuth

• **noAuth**: () => { `get`: (`modelId`: *string*) => *Promise*<[*CmsContentModel*](cmscontentmodel.md)\> ; `list`: () => *Promise*<[*CmsContentModel*](cmscontentmodel.md)[]\>  }

A function defining usage of a method without authenticating the user.

___

### update

• **update**: (`modelId`: *string*, `data`: [*CmsContentModelUpdateInput*](cmscontentmodelupdateinput.md)) => *Promise*<[*CmsContentModel*](cmscontentmodel.md)\>

Update content model.
