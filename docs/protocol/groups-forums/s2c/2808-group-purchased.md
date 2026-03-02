---
title: group.purchased
sidebar_position: 31
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2808`
- **Header**: `GROUP_PURCHASED`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Groups & Forums
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Confirm that a group was created

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `roomId` | `int32` | required | Base room identifier. |
| `groupId` | `int32` | required | Newly created group identifier. |

## Behavior

### Sender
Sent after a successful group purchase.


### Receiver
The client opens the newly created group and may navigate to the base room.

## Notes

- No additional notes
