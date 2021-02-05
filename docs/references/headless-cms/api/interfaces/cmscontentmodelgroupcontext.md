[Headless CMS API](../index) / CmsContentModelGroupContext

# Interface: CmsContentModelGroupContext

Content model group in context.

## Hierarchy

* **CmsContentModelGroupContext**

## Table of contents

### Properties

- [create](cmscontentmodelgroupcontext#create)
- [delete](cmscontentmodelgroupcontext#delete)
- [get](cmscontentmodelgroupcontext#get)
- [list](cmscontentmodelgroupcontext#list)
- [noAuth](cmscontentmodelgroupcontext#noauth)
- [update](cmscontentmodelgroupcontext#update)

## Properties

### create

• **create**: (`data`: [*CmsContentModelGroupCreateInput*](cmscontentmodelgroupcreateinput)) => *Promise*<[*CmsContentModelGroup*](cmscontentmodelgroup)\>

Create a new content model group.

___

### delete

• **delete**: (`id`: *string*) => *Promise*<*boolean*\>

Delete content model group by given id.

___

### get

• **get**: (`id`: *string*) => *Promise*<[*CmsContentModelGroup*](cmscontentmodelgroup)\>

Gets content model group by given id.

___

### list

• **list**: (`args?`: [*CmsContentModelGroupListArgs*](cmscontentmodelgrouplistargs)) => *Promise*<[*CmsContentModelGroup*](cmscontentmodelgroup)[]\>

List all content model groups. Filterable via params.

___

### noAuth

• **noAuth**: () => { `get`: (`id`: *string*) => *Promise*<[*CmsContentModelGroup*](cmscontentmodelgroup)\> ; `list`: (`args?`: [*CmsContentModelGroupListArgs*](cmscontentmodelgrouplistargs)) => *Promise*<[*CmsContentModelGroup*](cmscontentmodelgroup)[]\>  }

A function defining usage of a method without authenticating the user.

___

### update

• **update**: (`id`: *string*, `data`: [*CmsContentModelGroupUpdateInput*](cmscontentmodelgroupupdateinput)) => *Promise*<[*CmsContentModelGroup*](cmscontentmodelgroup)\>

Update existing content model group.
