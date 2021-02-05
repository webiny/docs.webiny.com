[Headless CMS API](../index) / CmsSettingsContext

# Interface: CmsSettingsContext

Settings crud in context.

## Hierarchy

* **CmsSettingsContext**

## Table of contents

### Properties

- [contentModelLastChange](cmssettingscontext#contentmodellastchange)
- [get](cmssettingscontext#get)
- [getContentModelLastChange](cmssettingscontext#getcontentmodellastchange)
- [install](cmssettingscontext#install)
- [noAuth](cmssettingscontext#noauth)
- [updateContentModelLastChange](cmssettingscontext#updatecontentmodellastchange)

## Properties

### contentModelLastChange

• **contentModelLastChange**: Date

Last content model change. Used to cache GraphQL schema.

___

### get

• **get**: () => *Promise*<[*CmsSettings*](cmssettings)\>

Gets settings model from the database.

___

### getContentModelLastChange

• **getContentModelLastChange**: () => Date

Get the datetime when content model last changed.

___

### install

• **install**: () => *Promise*<[*CmsSettings*](cmssettings)\>

Install the CMS.

___

### noAuth

• **noAuth**: () => { `get`: () => *Promise*<[*CmsSettings*](cmssettings)\>  }

A function defining usage of a method without authenticating the user.

___

### updateContentModelLastChange

• **updateContentModelLastChange**: () => *Promise*<[*CmsSettings*](cmssettings)\>

Updates settings model with a new date.
