[Headless CMS API](../index) / CmsModelFieldToElasticsearchPlugin

# Interface: CmsModelFieldToElasticsearchPlugin

A plugin defining transformation of entry for Elasticsearch.

## Hierarchy

* *Plugin*

  ↳ **CmsModelFieldToElasticsearchPlugin**

## Table of contents

### Properties

- [fieldType](cmsmodelfieldtoelasticsearchplugin#fieldtype)
- [init](cmsmodelfieldtoelasticsearchplugin#init)
- [name](cmsmodelfieldtoelasticsearchplugin#name)
- [type](cmsmodelfieldtoelasticsearchplugin#type)
- [unmappedType](cmsmodelfieldtoelasticsearchplugin#unmappedtype)

### Methods

- [fromIndex](cmsmodelfieldtoelasticsearchplugin#fromindex)
- [toIndex](cmsmodelfieldtoelasticsearchplugin#toindex)

## Properties

### fieldType

• **fieldType**: *string*

A unique identifier of the field type (text, number, json, myField, ...).

```ts
fieldType: "myField"
```

___

### init

• `Optional` **init**: () => *void*

___

### name

• `Optional` **name**: *string*

___

### type

• **type**: *cms-model-field-to-elastic-search*

A plugin type

___

### unmappedType

• `Optional` **unmappedType**: *string*

If you need to define a type when building an Elasticsearch query.
Check [dateTimeIndexing](https://github.com/webiny/webiny-js/blob/3074165701b8b45e5fc6ac2444caace7d04ada66/packages/api-headless-cms/src/content/plugins/es/indexing/dateTimeIndexing.ts) plugin for usage example.

```ts
unmappedType: "date"
```

## Methods

### fromIndex

▸ `Optional`**fromIndex**(`params`: CmsModelFieldToElasticsearchFromArgs): *Partial*<[*CmsContentIndexEntry*](cmscontentindexentry)\>

This is meant to revert a transformation done in the `toIndex` method. Again, you can transform any field but try to keep things separated. It returns `Partial<CmsContentIndexEntryType>`. Always return a top-level property of the entry since it is merged via spread operator.

```ts
fromIndex({entry, field}) {
    const value = entry.rawValues[field.fieldId];
    delete entry.rawValues[field.fieldId];
    return {
        values: {
            ...entry.values,
            [field.fieldId]: JSON.parse(value),
        },
        rawValues: entry.rawValues,
    };
}
```

#### Parameters:

Name | Type |
------ | ------ |
`params` | CmsModelFieldToElasticsearchFromArgs |

**Returns:** *Partial*<[*CmsContentIndexEntry*](cmscontentindexentry)\>

___

### toIndex

▸ `Optional`**toIndex**(`params`: CmsModelFieldToElasticsearchToArgs): *Partial*<[*CmsContentIndexEntry*](cmscontentindexentry)\>

This is meant to do some transformation of the entry, preferably only to fieldType it was defined for. Nothing is stopping you to do anything you want to other fields, but try to separate field transformations.
It returns `Partial<CmsContentIndexEntryType>`. Always return a top-level property of the entry since it is merged via spread operator.

```ts
toIndex({toIndexEntry, storageEntry, originalEntry, field}) {
   const value = toIndexEntry.values[field.fieldId];
   delete toIndexEntry.values[field.fieldId];
   return {
       values: toIndexEntry.values,
       rawValues: {
           ...toIndexEntry.rawValues,
           [field.fieldId]: JSON.stringify(value),
       },
   };
}
```

#### Parameters:

Name | Type |
------ | ------ |
`params` | CmsModelFieldToElasticsearchToArgs |

**Returns:** *Partial*<[*CmsContentIndexEntry*](cmscontentindexentry)\>
