---
title: forum.update_settings
sidebar_position: 33
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2214`
- **Header**: `UPDATE_FORUM_SETTINGS`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Groups & Forums
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Update the forum permission settings

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `groupId` | `int32` | required | Group identifier. |
| `readPermission` | `int32` | required | Who can read: 0=everyone, 1=members, 2=admins, 3=owner. |
| `postPermission` | `int32` | required | Who can post messages. |
| `threadPermission` | `int32` | required | Who can create threads. |
| `moderatePermission` | `int32` | required | Who can moderate. |

## Behavior

### Sender
Sent by a group admin to change who can read, post, create threads, and moderate the forum.


### Receiver
The server updates the forum permission levels. Confirmed in GLADIATOR.

## Notes

- No additional notes
