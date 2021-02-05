[Headless CMS API](../index) / CmsContentModelFieldInput

# Interface: CmsContentModelFieldInput

A definition for content model field received from the user.

Input type for `CmsContentModelField`.

**`see`** CmsContentModelField

## Hierarchy

* **CmsContentModelFieldInput**

## Table of contents

### Properties

- [fieldId](cmscontentmodelfieldinput#fieldid)
- [helpText](cmscontentmodelfieldinput#helptext)
- [id](cmscontentmodelfieldinput#id)
- [label](cmscontentmodelfieldinput#label)
- [listValidation](cmscontentmodelfieldinput#listvalidation)
- [multipleValues](cmscontentmodelfieldinput#multiplevalues)
- [placeholderText](cmscontentmodelfieldinput#placeholdertext)
- [predefinedValues](cmscontentmodelfieldinput#predefinedvalues)
- [renderer](cmscontentmodelfieldinput#renderer)
- [settings](cmscontentmodelfieldinput#settings)
- [type](cmscontentmodelfieldinput#type)
- [validation](cmscontentmodelfieldinput#validation)

## Properties

### fieldId

• **fieldId**: *string*

A unique ID for the field. Values will be mapped via this value.

___

### helpText

• `Optional` **helpText**: *string*

Text to display below the field to help user what to write in the field.

___

### id

• **id**: *string*

Generated ID.

___

### label

• **label**: *string*

Label for the field.

___

### listValidation

• **listValidation**: [*CmsContentModelFieldValidation*](cmscontentmodelfieldvalidation)[]

**`see`** CmsContentModelField.listValidation

___

### multipleValues

• `Optional` **multipleValues**: *boolean*

Are multiple values allowed?

___

### placeholderText

• `Optional` **placeholderText**: *string*

Text to display in the field.

___

### predefinedValues

• `Optional` **predefinedValues**: [*CmsContentModelFieldPredefinedValues*](cmscontentmodelfieldpredefinedvalues)

Predefined values options for the field. Check the reference for more information.

___

### renderer

• `Optional` **renderer**: CmsContentModelFieldRenderer

Renderer options for the field. Check the reference for more information.

___

### settings

• `Optional` **settings**: *Record*<*string*, *any*\>

User defined settings.

___

### type

• **type**: *string*

Type of the field. A plugin for the field must be defined.

**`see`** CmsModelFieldToGraphQLPlugin

___

### validation

• `Optional` **validation**: [*CmsContentModelFieldValidation*](cmscontentmodelfieldvalidation)[]

List of validations for the field.
