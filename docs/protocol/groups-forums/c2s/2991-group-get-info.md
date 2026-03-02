---
title: group.get_info
sidebar_position: 37
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2991`
- **Header**: `GROUP_INFO`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Groups & Forums
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Request information about a group

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `groupId` | `int32` | required | Group identifier to query. |
| `newWindow` | `boolean` | required | Whether to open the info in a new window. |

## Behavior

### Sender
Sent when the player clicks on a group badge or opens a group info dialog.


### Receiver
The server responds with the full group information including name, description, badge code, member count, and the player's membership status. Confirmed in GLADIATOR.

## Notes

- No additional notes
