[Headless CMS API](../index) / ElasticsearchQueryBuilderPlugin

# Interface: ElasticsearchQueryBuilderPlugin

A plugin definition to build Elasticsearch query

## Hierarchy

* *Plugin*

  ↳ **ElasticsearchQueryBuilderPlugin**

## Table of contents

### Properties

- [apply](elasticsearchquerybuilderplugin.md#apply)
- [init](elasticsearchquerybuilderplugin.md#init)
- [name](elasticsearchquerybuilderplugin.md#name)
- [operator](elasticsearchquerybuilderplugin.md#operator)
- [type](elasticsearchquerybuilderplugin.md#type)

## Properties

### apply

• **apply**: (`query`: [*ElasticsearchQuery*](elasticsearchquery.md), `args`: [*ElasticsearchQueryBuilderArgsPlugin*](elasticsearchquerybuilderargsplugin.md)) => *void*

Method used to modify received query object.
Has access to whole query object so it can remove something added by other plugins.

___

### init

• `Optional` **init**: () => *void*

___

### name

• **name**: *string*

Name of the plugin. Name it for better debugging experience.

___

### operator

• **operator**: [*ElasticsearchQueryOperator*](../types/elasticsearchqueryoperator)

Target operator.

___

### type

• **type**: *elastic-search-query-builder*

A plugin type
