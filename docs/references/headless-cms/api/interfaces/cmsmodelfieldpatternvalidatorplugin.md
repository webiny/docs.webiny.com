[Headless CMS API](../index) / CmsModelFieldPatternValidatorPlugin

# Interface: CmsModelFieldPatternValidatorPlugin

A pattern validator for the content entry field value.

## Hierarchy

* *Plugin*

  ↳ **CmsModelFieldPatternValidatorPlugin**

## Table of contents

### Properties

- [init](cmsmodelfieldpatternvalidatorplugin#init)
- [name](cmsmodelfieldpatternvalidatorplugin#name)
- [pattern](cmsmodelfieldpatternvalidatorplugin#pattern)
- [type](cmsmodelfieldpatternvalidatorplugin#type)

## Properties

### init

• `Optional` **init**: () => *void*

___

### name

• `Optional` **name**: *string*

___

### pattern

• **pattern**: { `flags`: *string* ; `name`: *string* ; `regex`: *string*  }

A pattern object for the validator.

#### Type declaration:

Name | Type | Description |
------ | ------ | ------ |
`flags` | *string* | RegExp flags   |
`name` | *string* | name of the pattern.   |
`regex` | *string* | RegExp of the validator.   |

___

### type

• **type**: *cms-model-field-validator-pattern*

A plugin type
