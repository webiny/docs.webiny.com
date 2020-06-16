---
id: webiny-cli-reference
title: Webiny Command-Line Interface (CLI) reference
sidebar_label: Webiny Command-Line Interface (CLI) reference
---


`webiny <command> [options]`

Use webiny command help for information on a specific command. The brief explanation for each command shows its parameters and their usage.

## Commands

### `run`

Run command defined in `webiny.config.js`

### `enable-tracking`

Enable tracking of Webiny stats

### `disable-tracking` 
Disable tracking of Webiny stats


### ```deploy <folder> [resources...]```
Deploy resources from `<folder>` (NOTE: run from project root)

### `webiny remove <folder>`
Remove resources from `<folder>` (NOTE: run from project root)


### `webiny scaffold` 
Generate boilerplate code  


## Options

### `--help` `[boolean]`
Show help 

### `--version` `[boolean]`
Show version number

## Examples

### `deploy api --env=dev` 
Deploys `api` folder in the `dev` environment.

### `remove api --env=dev`
Removes `api` folder from the `dev` environment.
