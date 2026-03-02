---
title: furniture.floor_items
sidebar_position: 35
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1778`
- **Header**: `FURNITURE_FLOOR`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Furniture & Items
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver the full list of floor items in the room

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ownersCount` | `int32` | required | Number of owner name records in the header. |
| `owners` | `object[]` | required | Array of owner name records. Each contains: `ownerId` (int32), `ownerName` (string).<br/> |
| `itemCount` | `int32` | required | Number of floor item records. |
| `items` | `object[]` | required | Array of floor item records. Each contains: `itemId` (int32), `spriteId` (int32), `x` (int32), `y` (int32), `z` (string), `direction` (int32), `extra` (string), `objectData` (typed state), `ownerId` (int32).<br/> |

## Behavior

### Sender
Sent during room loading to provide the complete set of floor furniture items with their positions and states.


### Receiver
The client renders all floor furniture from the received list. Confirmed in GLADIATOR.

## Notes

- No additional notes
