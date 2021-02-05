[Headless CMS API](../index) / CmsContentModelContext

# Interface: CmsContentModelContext

Content model in the context.

## Hierarchy

* **CmsContentModelContext**

## Table of contents

### Properties

- [create](cmscontentmodelcontext#create)
- [delete](cmscontentmodelcontext#delete)
- [get](cmscontentmodelcontext#get)
- [getManager](cmscontentmodelcontext#getmanager)
- [getManagers](cmscontentmodelcontext#getmanagers)
- [list](cmscontentmodelcontext#list)
- [noAuth](cmscontentmodelcontext#noauth)
- [update](cmscontentmodelcontext#update)

## Properties

### create

• **create**: (`data`: [*CmsContentModelCreateInput*](cmscontentmodelcreateinput)) => *Promise*<[*CmsContentModel*](cmscontentmodel)\>

Create a content model.

___

### delete

• **delete**: (`modelId`: *string*) => *Promise*<*void*\>

Delete content model. Should not allow deletion if there are entries connected to it.

___

### get

• **get**: (`modelId`: *string*) => *Promise*<[*CmsContentModel*](cmscontentmodel)\>

Get a single content model.

___

### getManager

• **getManager**: (`modelId`: *string*) => *Promise*<[*CmsContentModelManager*](cmscontentmodelmanager)\>

Get a instance of CmsContentModelManager for given content modelId.

**`see`** CmsContentModelManager

___

### getManagers

• **getManagers**: () => *Map*<*string*, [*CmsContentModelManager*](cmscontentmodelmanager)\>

Get all content model managers mapped by modelId.

**`see`** CmsContentModelManager

___

### list

• **list**: () => *Promise*<[*CmsContentModel*](cmscontentmodel)[]\>

Get all content models.

___

### noAuth

• **noAuth**: () => { `get`: (`modelId`: *string*) => *Promise*<[*CmsContentModel*](cmscontentmodel)\> ; `list`: () => *Promise*<[*CmsContentModel*](cmscontentmodel)[]\>  }

A function defining usage of a method without authenticating the user.

___

### update

• **update**: (`modelId`: *string*, `data`: [*CmsContentModelUpdateInput*](cmscontentmodelupdateinput)) => *Promise*<[*CmsContentModel*](cmscontentmodel)\>

Update content model.
