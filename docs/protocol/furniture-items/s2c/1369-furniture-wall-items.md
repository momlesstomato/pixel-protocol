---
title: furniture.wall_items
sidebar_position: 25
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1369`
- **Header**: `ITEM_WALL`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Furniture & Items
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver the full list of wall items in the room

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ownersCount` | `int32` | required | Number of owner name records. |
| `owners` | `object[]` | required | Array of owner records. Each contains: `ownerId` (int32), `ownerName` (string).<br/> |
| `itemCount` | `int32` | required | Number of wall item records. |
| `items` | `object[]` | required | Array of wall item records. Each contains: `itemId` (int32), `spriteId` (int32), `location` (string), `state` (string), `extra` (string), `ownerId` (int32).<br/> |

## Behavior

### Sender
Sent during room loading with all wall-mounted furniture items.


### Receiver
The client renders all wall furniture from the received list. Confirmed in GLADIATOR.

## Notes

- No additional notes
