[Headless CMS API](../index) / CmsContentModelUpdateInput

# Interface: CmsContentModelUpdateInput

A GraphQL args.data parameter received when updating content model.

## Hierarchy

* **CmsContentModelUpdateInput**

## Table of contents

### Properties

- [description](cmscontentmodelupdateinput#description)
- [fields](cmscontentmodelupdateinput#fields)
- [layout](cmscontentmodelupdateinput#layout)
- [name](cmscontentmodelupdateinput#name)
- [titleFieldId](cmscontentmodelupdateinput#titlefieldid)

## Properties

### description

• `Optional` **description**: *string*

A new description of the content model.

___

### fields

• **fields**: [*CmsContentModelFieldInput*](cmscontentmodelfieldinput)[]

A list of content model fields to define the entry values.

___

### layout

• **layout**: *string*[][]

Admin UI field layout

```ts
layout: [
     [field1id, field2id],
     [field3id]
]
```

___

### name

• `Optional` **name**: *string*

A new content model name.

___

### titleFieldId

• `Optional` **titleFieldId**: *string*

The field that is being displayed as entry title.
It is picked as first available text field. Or user can select own field.
