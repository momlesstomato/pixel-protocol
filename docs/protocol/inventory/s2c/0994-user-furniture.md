---
title: user.furniture
sidebar_position: 16
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `994`
- **Header**: `USER_FURNITURE`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Inventory
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver a fragment of the player's furniture inventory

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `totalFragments` | `int32` | required | Total number of fragments in the full inventory response. |
| `fragmentNumber` | `int32` | required | Zero-based index of this fragment. |
| `items` | `list&lt;object&gt;` | required | Furniture items in this fragment, each containing itemId, furniType, spriteId, category, stuffData, trade/recycle flags, and expiration info. |

## Behavior

### Sender
Sent in response to a furniture inventory request. Large inventories are split across multiple fragments.


### Receiver
The client accumulates all fragments and renders the furniture grid when all fragments have been received.

## Notes

- No additional notes
