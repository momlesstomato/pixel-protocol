---
title: user.pet_added
sidebar_position: 21
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2101`
- **Header**: `USER_PET_ADD`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Inventory
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Add a pet to the inventory

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `pet` | `object` | required | Pet data containing id, name, figure data, and level. |
| `boughtAsGift` | `boolean` | required | Whether the pet was received as a gift. |

## Behavior

### Sender
Sent when a pet is picked up from a room or received as a gift.


### Receiver
The client adds the pet to the inventory pet list.

## Notes

- No additional notes
