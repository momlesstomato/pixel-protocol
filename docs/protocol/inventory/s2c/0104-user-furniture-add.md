---
title: user.furniture_add
sidebar_position: 11
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `104`
- **Header**: `USER_FURNITURE_ADD`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Inventory
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Add or update a single item in the furniture inventory

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `item` | `object` | required | Single furniture item with the same structure as items in the furniture list. |

## Behavior

### Sender
Sent when the player receives a new furniture item or an existing item is updated.


### Receiver
The client adds or updates the item in the furniture grid without requiring a full inventory refresh.

## Notes

- No additional notes
