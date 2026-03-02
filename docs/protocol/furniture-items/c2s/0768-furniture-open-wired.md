---
title: furniture.open_wired
sidebar_position: 19
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `768`
- **Header**: `WIRED_OPEN`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Furniture & Items
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Open a wired furniture item for editing

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `itemId` | `int32` | required | Room item ID of the wired furniture. |

## Behavior

### Sender
Sent when the room owner clicks on a wired trigger, condition, or action furniture item.


### Receiver
The server responds with the appropriate wired configuration packet (`furniture.wired_trigger` s2c 383, `furniture.wired_condition` s2c 1108, or `furniture.wired_action` s2c 1434). Confirmed in GLADIATOR.

## Notes

- No additional notes
