---
title: furniture.user_song_disks_inventory
sidebar_position: 45
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2602`
- **Header**: `USER_SONG_DISKS_INVENTORY`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Furniture & Items
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: User song disks inventory

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field1` | `int32` | required | Field extracted from parser source. |
| `field2` | `int32` | required | Field extracted from parser source. |
| `field3` | `int32` | required | Field extracted from parser source. |

## Behavior

### Sender
The server sends this message to inform the client about user song disks inventory.


### Receiver
The client processes the received data and updates its state.

## Notes

- No additional notes
