---
title: group.deactivated
sidebar_position: 34
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3129`
- **Header**: `GROUP_DEACTIVATE`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Groups & Forums
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Notify that a group was deactivated or deleted

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `groupId` | `int32` | required | Deactivated group identifier. |

## Behavior

### Sender
Sent to all users in the group's base room when the group is deleted.


### Receiver
The client removes group badges and associations from the room.

## Notes

- No additional notes
