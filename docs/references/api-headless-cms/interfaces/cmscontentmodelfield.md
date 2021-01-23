# Interface: CmsContentModelField

A definition for content model field. This type exists on the app side as well.

## Hierarchy

* **CmsContentModelField**

## Table of contents

### Properties

- [fieldId](cmscontentmodelfield.md#fieldid)
- [helpText](cmscontentmodelfield.md#helptext)
- [id](cmscontentmodelfield.md#id)
- [label](cmscontentmodelfield.md#label)
- [listValidation](cmscontentmodelfield.md#listvalidation)
- [multipleValues](cmscontentmodelfield.md#multiplevalues)
- [placeholderText](cmscontentmodelfield.md#placeholdertext)
- [predefinedValues](cmscontentmodelfield.md#predefinedvalues)
- [renderer](cmscontentmodelfield.md#renderer)
- [settings](cmscontentmodelfield.md#settings)
- [type](cmscontentmodelfield.md#type)
- [validation](cmscontentmodelfield.md#validation)

## Properties

### fieldId

• **fieldId**: *string*

A unique field ID for mapping values

___

### helpText

• **helpText**: *string*

Text below the field to clarify what is it meant to be in the field value

___

### id

• **id**: *string*

A generated ID for the model field

___

### label

• **label**: *string*

A label for the field

___

### listValidation

• **listValidation**: [*CmsContentModelFieldValidation*](cmscontentmodelfieldvalidation.md)[]

List of validations for the list of values, when a field is set to accept a list of values.
These validations will be applied to the entire list, and `validation` (see above) will be applied
to each individual value in the list.

___

### multipleValues

• **multipleValues**: *boolean*

Is this a multiple values field?

___

### placeholderText

• **placeholderText**: *string*

Text to be displayed in the field

___

### predefinedValues

• **predefinedValues**: [*CmsContentModelFieldPredefinedValues*](cmscontentmodelfieldpredefinedvalues.md)

Are predefined values enabled? And list of them

___

### renderer

• **renderer**: CmsContentModelFieldRenderer

Field renderer. Blank if determined automatically.

___

### settings

• `Optional` **settings**: { [key: string]: *any*;  }

Any user defined settings.

___

### type

• **type**: *string*

A type of the field

___

### validation

• **validation**: [*CmsContentModelFieldValidation*](cmscontentmodelfieldvalidation.md)[]

List of validations for the field
