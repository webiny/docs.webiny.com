[Headless CMS API](../index) / ElasticsearchQueryBuilderPlugin

# Interface: ElasticsearchQueryBuilderPlugin

A plugin definition to build Elasticsearch query

## Hierarchy

* *Plugin*

  ↳ **ElasticsearchQueryBuilderPlugin**

## Table of contents

### Properties

- [apply](elasticsearchquerybuilderplugin#apply)
- [init](elasticsearchquerybuilderplugin#init)
- [name](elasticsearchquerybuilderplugin#name)
- [operator](elasticsearchquerybuilderplugin#operator)
- [type](elasticsearchquerybuilderplugin#type)

## Properties

### apply

• **apply**: (`query`: [*ElasticsearchQuery*](elasticsearchquery), `args`: [*ElasticsearchQueryBuilderArgsPlugin*](elasticsearchquerybuilderargsplugin)) => *void*

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
