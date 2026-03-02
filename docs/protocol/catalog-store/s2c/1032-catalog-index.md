---
title: catalog.index
sidebar_position: 14
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1032`
- **Header**: `CATALOG_PAGE_LIST`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Catalog & Store
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver the catalog page tree

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `root` | `object` | required | Root node of the catalog tree. Each node contains: `visible` (boolean), `icon` (int32), `pageId` (int32), `pageName` (string), `localization` (string), `offerIds` (int32[]), `children` (node[]).<br/> |
| `newAdditionsAvailable` | `boolean` | required | True if new catalog items have been added recently. |
| `catalogType` | `string` | required | The catalog mode string echoed from the request. |

## Behavior

### Sender
Sent in response to `catalog.get_index` (c2s 1195). Contains a recursive tree of all visible catalog pages.


### Receiver
The client renders the catalog navigation tree. Confirmed in GLADIATOR.

## Notes

- No additional notes
