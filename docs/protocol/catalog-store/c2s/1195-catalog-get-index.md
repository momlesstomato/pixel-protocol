---
title: catalog.get_index
sidebar_position: 15
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1195`
- **Header**: `GET_CATALOG_INDEX`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Catalog & Store
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Request the catalog page tree

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `catalogType` | `string` | required | Catalog mode string, e.g. `NORMAL` or `BUILDERS_CLUB`. |

## Behavior

### Sender
Sent when the user opens the catalog to retrieve the full page hierarchy. The mode string selects the catalog variant.


### Receiver
The server responds with `catalog.index` (s2c 1032). Confirmed in GLADIATOR.

## Notes

- No additional notes
