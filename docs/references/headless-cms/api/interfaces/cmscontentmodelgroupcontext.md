[Headless CMS API](../index) / CmsContentModelGroupContext

# Interface: CmsContentModelGroupContext

Content model group in context.

## Hierarchy

* **CmsContentModelGroupContext**

## Table of contents

### Properties

- [create](cmscontentmodelgroupcontext.md#create)
- [delete](cmscontentmodelgroupcontext.md#delete)
- [get](cmscontentmodelgroupcontext.md#get)
- [list](cmscontentmodelgroupcontext.md#list)
- [noAuth](cmscontentmodelgroupcontext.md#noauth)
- [update](cmscontentmodelgroupcontext.md#update)

## Properties

### create

• **create**: (`data`: [*CmsContentModelGroupCreateInput*](cmscontentmodelgroupcreateinput.md)) => *Promise*<[*CmsContentModelGroup*](cmscontentmodelgroup.md)\>

Create a new content model group.

___

### delete

• **delete**: (`id`: *string*) => *Promise*<*boolean*\>

Delete content model group by given id.

___

### get

• **get**: (`id`: *string*) => *Promise*<[*CmsContentModelGroup*](cmscontentmodelgroup.md)\>

Gets content model group by given id.

___

### list

• **list**: (`args?`: [*CmsContentModelGroupListArgs*](cmscontentmodelgrouplistargs.md)) => *Promise*<[*CmsContentModelGroup*](cmscontentmodelgroup.md)[]\>

List all content model groups. Filterable via params.

___

### noAuth

• **noAuth**: () => { `get`: (`id`: *string*) => *Promise*<[*CmsContentModelGroup*](cmscontentmodelgroup.md)\> ; `list`: (`args?`: [*CmsContentModelGroupListArgs*](cmscontentmodelgrouplistargs.md)) => *Promise*<[*CmsContentModelGroup*](cmscontentmodelgroup.md)[]\>  }

A function defining usage of a method without authenticating the user.

___

### update

• **update**: (`id`: *string*, `data`: [*CmsContentModelGroupUpdateInput*](cmscontentmodelgroupupdateinput.md)) => *Promise*<[*CmsContentModelGroup*](cmscontentmodelgroup.md)\>

Update existing content model group.
