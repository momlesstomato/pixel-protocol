---
title: user.pets
sidebar_position: 30
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3522`
- **Header**: `USER_PETS`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Inventory
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver the player's pet inventory

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `totalFragments` | `int32` | required | Total number of fragments. |
| `fragmentNumber` | `int32` | required | Zero-based fragment index. |
| `pets` | `list&lt;object&gt;` | required | Pet entries each containing id (int32), name (string), figureData (object with typeId, paletteId, color, breedId, customParts), and level (int32). |

## Behavior

### Sender
Sent in response to a pet inventory request. Large pet inventories are fragmented.


### Receiver
The client accumulates all fragments and renders the pet list when complete.

## Notes

- No additional notes
