# Interface: CmsSettingsContext

Settings crud in context.

## Hierarchy

* **CmsSettingsContext**

## Table of contents

### Properties

- [contentModelLastChange](cmssettingscontext.md#contentmodellastchange)
- [get](cmssettingscontext.md#get)
- [getContentModelLastChange](cmssettingscontext.md#getcontentmodellastchange)
- [install](cmssettingscontext.md#install)
- [noAuth](cmssettingscontext.md#noauth)
- [updateContentModelLastChange](cmssettingscontext.md#updatecontentmodellastchange)

## Properties

### contentModelLastChange

• **contentModelLastChange**: Date

Last content model change. Used to cache GraphQL schema.

___

### get

• **get**: () => *Promise*<[*CmsSettings*](cmssettings.md)\>

Gets settings model from the database.

___

### getContentModelLastChange

• **getContentModelLastChange**: () => Date

Get the datetime when content model last changed.

___

### install

• **install**: () => *Promise*<[*CmsSettings*](cmssettings.md)\>

Install the CMS.

___

### noAuth

• **noAuth**: () => { `get`: () => *Promise*<[*CmsSettings*](cmssettings.md)\>  }

A function defining usage of a method without authenticating the user.

___

### updateContentModelLastChange

• **updateContentModelLastChange**: () => *Promise*<[*CmsSettings*](cmssettings.md)\>

Updates settings model with a new date.
