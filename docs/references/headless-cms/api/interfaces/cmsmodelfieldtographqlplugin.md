[Headless CMS API](../index) / CmsModelFieldToGraphQLPlugin

# Interface: CmsModelFieldToGraphQLPlugin

## Hierarchy

* *Plugin*

  ↳ **CmsModelFieldToGraphQLPlugin**

## Table of contents

### Properties

- [fieldType](cmsmodelfieldtographqlplugin#fieldtype)
- [init](cmsmodelfieldtographqlplugin#init)
- [isSearchable](cmsmodelfieldtographqlplugin#issearchable)
- [isSortable](cmsmodelfieldtographqlplugin#issortable)
- [manage](cmsmodelfieldtographqlplugin#manage)
- [name](cmsmodelfieldtographqlplugin#name)
- [read](cmsmodelfieldtographqlplugin#read)
- [type](cmsmodelfieldtographqlplugin#type)

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

• **manage**: { `createInputField`: (`params`: { `field`: [*CmsContentModelField*](cmscontentmodelfield) ; `model`: [*CmsContentModel*](cmscontentmodel)  }) => *string* ; `createListFilters?`: (`params`: { `field`: [*CmsContentModelField*](cmscontentmodelfield) ; `model`: [*CmsContentModel*](cmscontentmodel)  }) => *string* ; `createResolver?`: (`params`: { `field`: [*CmsContentModelField*](cmscontentmodelfield) ; `model`: [*CmsContentModel*](cmscontentmodel) ; `models`: [*CmsContentModel*](cmscontentmodel)[]  }) => *GraphQLFieldResolver*<*any*, *Context*<*Record*<*string*, *any*\>, *Record*<*string*, *any*\>, *Record*<*string*, *any*\>, *Record*<*string*, *any*\>, *Record*<*string*, *any*\>, *Record*<*string*, *any*\>, *Record*<*string*, *any*\>, *Record*<*string*, *any*\>, *Record*<*string*, *any*\>, *Record*<*string*, *any*\>\>, *any*\> ; `createSchema?`: (`params`: { `model`: [*CmsContentModel*](cmscontentmodel) ; `models`: [*CmsContentModel*](cmscontentmodel)[]  }) => *GraphQLSchemaDefinition*<[*CmsContext*](cmscontext)\> ; `createTypeField`: (`params`: { `field`: [*CmsContentModelField*](cmscontentmodelfield) ; `model`: [*CmsContentModel*](cmscontentmodel)  }) => *string* \| [*CmsModelFieldDefinition*](cmsmodelfielddefinition)  }

#### Type declaration:

Name | Type |
------ | ------ |
`createInputField` | (`params`: { `field`: [*CmsContentModelField*](cmscontentmodelfield) ; `model`: [*CmsContentModel*](cmscontentmodel)  }) => *string* |
`createListFilters?` | (`params`: { `field`: [*CmsContentModelField*](cmscontentmodelfield) ; `model`: [*CmsContentModel*](cmscontentmodel)  }) => *string* |
`createResolver?` | (`params`: { `field`: [*CmsContentModelField*](cmscontentmodelfield) ; `model`: [*CmsContentModel*](cmscontentmodel) ; `models`: [*CmsContentModel*](cmscontentmodel)[]  }) => *GraphQLFieldResolver*<*any*, *Context*<*Record*<*string*, *any*\>, *Record*<*string*, *any*\>, *Record*<*string*, *any*\>, *Record*<*string*, *any*\>, *Record*<*string*, *any*\>, *Record*<*string*, *any*\>, *Record*<*string*, *any*\>, *Record*<*string*, *any*\>, *Record*<*string*, *any*\>, *Record*<*string*, *any*\>\>, *any*\> |
`createSchema?` | (`params`: { `model`: [*CmsContentModel*](cmscontentmodel) ; `models`: [*CmsContentModel*](cmscontentmodel)[]  }) => *GraphQLSchemaDefinition*<[*CmsContext*](cmscontext)\> |
`createTypeField` | (`params`: { `field`: [*CmsContentModelField*](cmscontentmodelfield) ; `model`: [*CmsContentModel*](cmscontentmodel)  }) => *string* \| [*CmsModelFieldDefinition*](cmsmodelfielddefinition) |

___

### name

• `Optional` **name**: *string*

___

### read

• **read**: { `createGetFilters?`: (`params`: { `field`: [*CmsContentModelField*](cmscontentmodelfield) ; `model`: [*CmsContentModel*](cmscontentmodel)  }) => *string* ; `createListFilters?`: (`params`: { `field`: [*CmsContentModelField*](cmscontentmodelfield) ; `model`: [*CmsContentModel*](cmscontentmodel)  }) => *string* ; `createResolver?`: (`params`: { `field`: [*CmsContentModelField*](cmscontentmodelfield) ; `model`: [*CmsContentModel*](cmscontentmodel) ; `models`: [*CmsContentModel*](cmscontentmodel)[]  }) => *GraphQLFieldResolver*<*any*, *Context*<*Record*<*string*, *any*\>, *Record*<*string*, *any*\>, *Record*<*string*, *any*\>, *Record*<*string*, *any*\>, *Record*<*string*, *any*\>, *Record*<*string*, *any*\>, *Record*<*string*, *any*\>, *Record*<*string*, *any*\>, *Record*<*string*, *any*\>, *Record*<*string*, *any*\>\>, *any*\> ; `createSchema?`: (`params`: { `model`: [*CmsContentModel*](cmscontentmodel) ; `models`: [*CmsContentModel*](cmscontentmodel)[]  }) => *GraphQLSchemaDefinition*<[*CmsContext*](cmscontext)\> ; `createTypeField`: (`params`: { `field`: [*CmsContentModelField*](cmscontentmodelfield) ; `model`: [*CmsContentModel*](cmscontentmodel)  }) => *string*  }

#### Type declaration:

Name | Type |
------ | ------ |
`createGetFilters?` | (`params`: { `field`: [*CmsContentModelField*](cmscontentmodelfield) ; `model`: [*CmsContentModel*](cmscontentmodel)  }) => *string* |
`createListFilters?` | (`params`: { `field`: [*CmsContentModelField*](cmscontentmodelfield) ; `model`: [*CmsContentModel*](cmscontentmodel)  }) => *string* |
`createResolver?` | (`params`: { `field`: [*CmsContentModelField*](cmscontentmodelfield) ; `model`: [*CmsContentModel*](cmscontentmodel) ; `models`: [*CmsContentModel*](cmscontentmodel)[]  }) => *GraphQLFieldResolver*<*any*, *Context*<*Record*<*string*, *any*\>, *Record*<*string*, *any*\>, *Record*<*string*, *any*\>, *Record*<*string*, *any*\>, *Record*<*string*, *any*\>, *Record*<*string*, *any*\>, *Record*<*string*, *any*\>, *Record*<*string*, *any*\>, *Record*<*string*, *any*\>, *Record*<*string*, *any*\>\>, *any*\> |
`createSchema?` | (`params`: { `model`: [*CmsContentModel*](cmscontentmodel) ; `models`: [*CmsContentModel*](cmscontentmodel)[]  }) => *GraphQLSchemaDefinition*<[*CmsContext*](cmscontext)\> |
`createTypeField` | (`params`: { `field`: [*CmsContentModelField*](cmscontentmodelfield) ; `model`: [*CmsContentModel*](cmscontentmodel)  }) => *string* |

___

### type

• **type**: *cms-model-field-to-graphql*

A plugin type
