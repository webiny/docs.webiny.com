[Headless CMS API](../index) / CmsContext

# Interface: CmsContext

**`description`** This combines all contexts used in the CMS into a single one.

## Hierarchy

* *ContextInterface*

* *DbContext*

* *HttpContext*

* *I18NContext*

* *BaseI18NContentContext*

* *ElasticSearchClientContext*

* *TenancyContext*

  ↳ **CmsContext**

## Table of contents

### Properties

- [args](cmscontext#args)
- [cms](cmscontext#cms)
- [db](cmscontext#db)
- [elasticSearch](cmscontext#elasticsearch)
- [http](cmscontext#http)
- [i18n](cmscontext#i18n)
- [i18nContent](cmscontext#i18ncontent)
- [plugins](cmscontext#plugins)
- [security](cmscontext#security)

## Properties

### args

• **args**: HandlerArgs

___

### cms

• **cms**: BaseCmsValuesObject & CmsCrudContextObject

___

### db

• **db**: *Db*

___

### elasticSearch

• **elasticSearch**: *Client*

___

### http

• **http**: HttpObject

___

### i18n

• **i18n**: I18NContextObject

___

### i18nContent

• **i18nContent**: { `checkI18NContentPermission`: () => *void* ; `getLocale`: () => I18NLocale ; `hasI18NContentPermission`: () => *Promise*<*boolean*\> ; `locale`: I18NLocale  }

#### Type declaration:

Name | Type |
------ | ------ |
`checkI18NContentPermission` | () => *void* |
`getLocale` | () => I18NLocale |
`hasI18NContentPermission` | () => *Promise*<*boolean*\> |
`locale` | I18NLocale |

___

### plugins

• **plugins**: *PluginsContainer*

___

### security

• **security**: { `getIdentity`: () => SecurityIdentity ; `getPermission`: <TSecurityPermission\>(`name`: *string*) => *Promise*<TSecurityPermission\>  } & TenancyContextObject
