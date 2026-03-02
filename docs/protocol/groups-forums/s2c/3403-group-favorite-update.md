---
title: group.favorite_update
sidebar_position: 36
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3403`
- **Header**: `FAVORITE_GROUP_UDPATE`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Groups & Forums
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Notify that a player's favorite group changed

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `userId` | `int32` | required | User whose favorite group changed. |
| `groupId` | `int32` | required | New favorite group identifier (0 if cleared). |
| `groupStatus` | `int32` | required | Group status code. |
| `groupName` | `string` | required | Group display name. |

## Behavior

### Sender
Sent to room occupants when a player changes their favorite group.


### Receiver
The client updates the displayed favorite badge on the affected avatar.

## Notes

- No additional notes
