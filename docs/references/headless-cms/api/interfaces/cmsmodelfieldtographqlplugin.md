[Webiny](../README.md) / [Exports](../modules.md) / CmsModelFieldToGraphQLPlugin

# Interface: CmsModelFieldToGraphQLPlugin

## Hierarchy

* *Plugin*

  ↳ **CmsModelFieldToGraphQLPlugin**

## Table of contents

### Properties

- [fieldType](cmsmodelfieldtographqlplugin.md#fieldtype)
- [init](cmsmodelfieldtographqlplugin.md#init)
- [isSearchable](cmsmodelfieldtographqlplugin.md#issearchable)
- [isSortable](cmsmodelfieldtographqlplugin.md#issortable)
- [manage](cmsmodelfieldtographqlplugin.md#manage)
- [name](cmsmodelfieldtographqlplugin.md#name)
- [read](cmsmodelfieldtographqlplugin.md#read)
- [type](cmsmodelfieldtographqlplugin.md#type)

## Properties

### fieldType

• **fieldType**: *string*

Field type name which must be exact as the one in `CmsEditorFieldTypePlugin` plugin.

```ts
fieldType: "myField"
```

___

### init

• `Optional` **init**: () => *void*

___

### isSearchable

• **isSearchable**: *boolean*

Is the field searchable via the GraphQL?

```ts
isSearchable: false
```

___

### isSortable

• **isSortable**: *boolean*

Is the field sortable via the GraphQL?

```ts
isSortable: true
```

___

### manage

• **manage**: { `createInputField`: (`params`: { `field`: [*CmsContentModelField*](cmscontentmodelfield.md) ; `model`: [*CmsContentModel*](cmscontentmodel.md)  }) => *string* ; `createListFilters?`: (`params`: { `field`: [*CmsContentModelField*](cmscontentmodelfield.md) ; `model`: [*CmsContentModel*](cmscontentmodel.md)  }) => *string* ; `createResolver?`: (`params`: { `field`: [*CmsContentModelField*](cmscontentmodelfield.md) ; `model`: [*CmsContentModel*](cmscontentmodel.md) ; `models`: [*CmsContentModel*](cmscontentmodel.md)[]  }) => *GraphQLFieldResolver*<*any*, *Context*<*Record*<*string*, *any*\>, *Record*<*string*, *any*\>, *Record*<*string*, *any*\>, *Record*<*string*, *any*\>, *Record*<*string*, *any*\>, *Record*<*string*, *any*\>, *Record*<*string*, *any*\>, *Record*<*string*, *any*\>, *Record*<*string*, *any*\>, *Record*<*string*, *any*\>\>, *any*\> ; `createSchema?`: (`params`: { `model`: [*CmsContentModel*](cmscontentmodel.md) ; `models`: [*CmsContentModel*](cmscontentmodel.md)[]  }) => *GraphQLSchemaDefinition*<[*CmsContext*](cmscontext.md)\> ; `createTypeField`: (`params`: { `field`: [*CmsContentModelField*](cmscontentmodelfield.md) ; `model`: [*CmsContentModel*](cmscontentmodel.md)  }) => *string* \| [*CmsModelFieldDefinition*](cmsmodelfielddefinition.md)  }

#### Type declaration:

Name | Type |
------ | ------ |
`createInputField` | (`params`: { `field`: [*CmsContentModelField*](cmscontentmodelfield.md) ; `model`: [*CmsContentModel*](cmscontentmodel.md)  }) => *string* |
`createListFilters?` | (`params`: { `field`: [*CmsContentModelField*](cmscontentmodelfield.md) ; `model`: [*CmsContentModel*](cmscontentmodel.md)  }) => *string* |
`createResolver?` | (`params`: { `field`: [*CmsContentModelField*](cmscontentmodelfield.md) ; `model`: [*CmsContentModel*](cmscontentmodel.md) ; `models`: [*CmsContentModel*](cmscontentmodel.md)[]  }) => *GraphQLFieldResolver*<*any*, *Context*<*Record*<*string*, *any*\>, *Record*<*string*, *any*\>, *Record*<*string*, *any*\>, *Record*<*string*, *any*\>, *Record*<*string*, *any*\>, *Record*<*string*, *any*\>, *Record*<*string*, *any*\>, *Record*<*string*, *any*\>, *Record*<*string*, *any*\>, *Record*<*string*, *any*\>\>, *any*\> |
`createSchema?` | (`params`: { `model`: [*CmsContentModel*](cmscontentmodel.md) ; `models`: [*CmsContentModel*](cmscontentmodel.md)[]  }) => *GraphQLSchemaDefinition*<[*CmsContext*](cmscontext.md)\> |
`createTypeField` | (`params`: { `field`: [*CmsContentModelField*](cmscontentmodelfield.md) ; `model`: [*CmsContentModel*](cmscontentmodel.md)  }) => *string* \| [*CmsModelFieldDefinition*](cmsmodelfielddefinition.md) |

___

### name

• `Optional` **name**: *string*

___

### read

• **read**: { `createGetFilters?`: (`params`: { `field`: [*CmsContentModelField*](cmscontentmodelfield.md) ; `model`: [*CmsContentModel*](cmscontentmodel.md)  }) => *string* ; `createListFilters?`: (`params`: { `field`: [*CmsContentModelField*](cmscontentmodelfield.md) ; `model`: [*CmsContentModel*](cmscontentmodel.md)  }) => *string* ; `createResolver?`: (`params`: { `field`: [*CmsContentModelField*](cmscontentmodelfield.md) ; `model`: [*CmsContentModel*](cmscontentmodel.md) ; `models`: [*CmsContentModel*](cmscontentmodel.md)[]  }) => *GraphQLFieldResolver*<*any*, *Context*<*Record*<*string*, *any*\>, *Record*<*string*, *any*\>, *Record*<*string*, *any*\>, *Record*<*string*, *any*\>, *Record*<*string*, *any*\>, *Record*<*string*, *any*\>, *Record*<*string*, *any*\>, *Record*<*string*, *any*\>, *Record*<*string*, *any*\>, *Record*<*string*, *any*\>\>, *any*\> ; `createSchema?`: (`params`: { `model`: [*CmsContentModel*](cmscontentmodel.md) ; `models`: [*CmsContentModel*](cmscontentmodel.md)[]  }) => *GraphQLSchemaDefinition*<[*CmsContext*](cmscontext.md)\> ; `createTypeField`: (`params`: { `field`: [*CmsContentModelField*](cmscontentmodelfield.md) ; `model`: [*CmsContentModel*](cmscontentmodel.md)  }) => *string*  }

#### Type declaration:

Name | Type |
------ | ------ |
`createGetFilters?` | (`params`: { `field`: [*CmsContentModelField*](cmscontentmodelfield.md) ; `model`: [*CmsContentModel*](cmscontentmodel.md)  }) => *string* |
`createListFilters?` | (`params`: { `field`: [*CmsContentModelField*](cmscontentmodelfield.md) ; `model`: [*CmsContentModel*](cmscontentmodel.md)  }) => *string* |
`createResolver?` | (`params`: { `field`: [*CmsContentModelField*](cmscontentmodelfield.md) ; `model`: [*CmsContentModel*](cmscontentmodel.md) ; `models`: [*CmsContentModel*](cmscontentmodel.md)[]  }) => *GraphQLFieldResolver*<*any*, *Context*<*Record*<*string*, *any*\>, *Record*<*string*, *any*\>, *Record*<*string*, *any*\>, *Record*<*string*, *any*\>, *Record*<*string*, *any*\>, *Record*<*string*, *any*\>, *Record*<*string*, *any*\>, *Record*<*string*, *any*\>, *Record*<*string*, *any*\>, *Record*<*string*, *any*\>\>, *any*\> |
`createSchema?` | (`params`: { `model`: [*CmsContentModel*](cmscontentmodel.md) ; `models`: [*CmsContentModel*](cmscontentmodel.md)[]  }) => *GraphQLSchemaDefinition*<[*CmsContext*](cmscontext.md)\> |
`createTypeField` | (`params`: { `field`: [*CmsContentModelField*](cmscontentmodelfield.md) ; `model`: [*CmsContentModel*](cmscontentmodel.md)  }) => *string* |

___

### type

• **type**: *cms-model-field-to-graphql*

A plugin type
