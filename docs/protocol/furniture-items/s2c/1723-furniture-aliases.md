---
title: furniture.aliases
sidebar_position: 33
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1723`
- **Header**: `FURNITURE_ALIASES`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Furniture & Items
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver furniture alias name mappings

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `int32` | required | Number of alias entries. |
| `aliases` | `object[]` | required | Array of alias records. Each contains: `originalName` (string), `aliasName` (string).<br/> |

## Behavior

### Sender
Sent during room loading with a mapping of furniture class names to their display alias names.


### Receiver
The client uses the alias map to display furniture names. Confirmed in GLADIATOR.

## Notes

- No additional notes
