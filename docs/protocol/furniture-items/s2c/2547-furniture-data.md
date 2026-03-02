---
title: furniture.data
sidebar_position: 44
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2547`
- **Header**: `FURNITURE_DATA`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Furniture & Items
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver interaction data for multiple furniture items

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `uniqueId` | `int32` | required | Unique request identifier. |
| `floorItemCount` | `int32` | required | Number of floor item data records. |
| `floorItems` | `object[]` | required | Array of floor item data records. Each contains: `itemId` (string), `dataType` (int32), `data` (typed state).<br/> |
| `wallItemCount` | `int32` | required | Number of wall item data records. |
| `wallItems` | `object[]` | required | Array of wall item data records. Each contains: `itemId` (string), `data` (string).<br/> |

## Behavior

### Sender
Sent to batch-deliver the extra data (state) for multiple floor and wall items simultaneously.


### Receiver
The client applies each item's extra data to update its visual state. Confirmed in GLADIATOR.

## Notes

- No additional notes
