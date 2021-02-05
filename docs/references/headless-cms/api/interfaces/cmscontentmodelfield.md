[Headless CMS API](../index) / CmsContentModelField

# Interface: CmsContentModelField

A definition for content model field. This type exists on the app side as well.

## Hierarchy

* **CmsContentModelField**

## Table of contents

### Properties

- [fieldId](cmscontentmodelfield#fieldid)
- [helpText](cmscontentmodelfield#helptext)
- [id](cmscontentmodelfield#id)
- [label](cmscontentmodelfield#label)
- [listValidation](cmscontentmodelfield#listvalidation)
- [multipleValues](cmscontentmodelfield#multiplevalues)
- [placeholderText](cmscontentmodelfield#placeholdertext)
- [predefinedValues](cmscontentmodelfield#predefinedvalues)
- [renderer](cmscontentmodelfield#renderer)
- [settings](cmscontentmodelfield#settings)
- [type](cmscontentmodelfield#type)
- [validation](cmscontentmodelfield#validation)

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

• **listValidation**: [*CmsContentModelFieldValidation*](cmscontentmodelfieldvalidation)[]

List of validations for the list of values, when a field is set to accept a list of values.
These validations will be applied to the entire list, and `validation` (see above) will be applied
to each individual value in the list.

**`default`** []

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

• **predefinedValues**: [*CmsContentModelFieldPredefinedValues*](cmscontentmodelfieldpredefinedvalues)

Are predefined values enabled? And list of them

___

### renderer

• **renderer**: CmsContentModelFieldRenderer

Field renderer. Blank if determined automatically.

___

### settings

• `Optional` **settings**: { [key: string]: *any*;  }

Any user defined settings.

**`default`** {}

___

### type

• **type**: *string*

A type of the field

___

### validation

• **validation**: [*CmsContentModelFieldValidation*](cmscontentmodelfieldvalidation)[]

List of validations for the field

**`default`** []
