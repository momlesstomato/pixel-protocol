---
title: pet.received
sidebar_position: 13
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1111`
- **Header**: `PET_RECEIVED`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Pets
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Notify that the player received a pet

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `boughtAsGift` | `boolean` | required | Whether the pet was received as a gift. |
| `pet` | `object` | required | Pet data containing id, name, figure data, and level. |

## Behavior

### Sender
Sent when a pet is purchased or received as a gift.


### Receiver
The client shows a notification and may open the inventory.

## Notes

- No additional notes
