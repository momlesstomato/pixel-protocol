---
title: catalog.gift_wrapping_config
sidebar_position: 18
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2234`
- **Header**: `GIFT_WRAPPER_CONFIG`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Catalog & Store
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver available gift wrapping options

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `isBoxed` | `boolean` | required | True if the catalog supports boxed gifts. |
| `defaultBoxId` | `int32` | required | Default gift box style identifier. |
| `boxCount` | `int32` | required | Number of box style options. |
| `boxes` | `int32[]` | required | Box style identifiers. |
| `ribbonCount` | `int32` | required | Number of ribbon style options. |
| `ribbons` | `int32[]` | required | Ribbon style identifiers. |
| `existingClubGiftCount` | `int32` | required | Number of available club gift wrappings. |
| `existingClubGifts` | `int32[]` | required | Club gift wrap identifiers. |

## Behavior

### Sender
Sent in response to `catalog.get_gift_wrapping_config` (c2s 418) with available wrapping paper, box, and ribbon options.


### Receiver
The client populates the gift wrapping selector. Confirmed in GLADIATOR.

## Notes

- No additional notes
