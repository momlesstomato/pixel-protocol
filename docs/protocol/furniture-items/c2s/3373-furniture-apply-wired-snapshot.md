---
title: furniture.apply_wired_snapshot
sidebar_position: 55
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3373`
- **Header**: `WIRED_APPLY_SNAPSHOT`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Furniture & Items
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Apply a wired configuration snapshot to multiple items

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `itemId` | `int32` | required | Source room item ID whose configuration is snapshotted. |

## Behavior

### Sender
Sent to copy and apply a saved wired configuration snapshot across multiple wired furniture items.


### Receiver
The server applies the snapshot to all target items. Confirmed in GLADIATOR.

## Notes

- No additional notes
