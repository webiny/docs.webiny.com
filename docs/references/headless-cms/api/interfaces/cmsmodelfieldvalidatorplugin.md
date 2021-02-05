[Headless CMS API](../index) / CmsModelFieldValidatorPlugin

# Interface: CmsModelFieldValidatorPlugin

Definition for the field validator.

## Hierarchy

* *Plugin*

  ↳ **CmsModelFieldValidatorPlugin**

## Table of contents

### Properties

- [init](cmsmodelfieldvalidatorplugin#init)
- [name](cmsmodelfieldvalidatorplugin#name)
- [type](cmsmodelfieldvalidatorplugin#type)
- [validator](cmsmodelfieldvalidatorplugin#validator)

## Properties

### init

• `Optional` **init**: () => *void*

___

### name

• `Optional` **name**: *string*

___

### type

• **type**: *cms-model-field-validator*

A plugin type.

___

### validator

• **validator**: { `name`: *string* ; `validate`: (`params`: [*CmsModelFieldValidatorValidateArgs*](cmsmodelfieldvalidatorvalidateargs)) => *Promise*<*boolean*\>  }

Actual validator definition.

#### Type declaration:

Name | Type | Description |
------ | ------ | ------ |
`name` | *string* | Name of the validator.   |
`validate` | (`params`: [*CmsModelFieldValidatorValidateArgs*](cmsmodelfieldvalidatorvalidateargs)) => *Promise*<*boolean*\> | - |
