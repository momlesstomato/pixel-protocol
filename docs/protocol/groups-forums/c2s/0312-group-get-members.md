---
title: group.get_members
sidebar_position: 14
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `312`
- **Header**: `GROUP_MEMBERS`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Groups & Forums
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Request a paginated list of group members

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `groupId` | `int32` | required | Group identifier. |
| `pageIndex` | `int32` | required | Zero-based page number. |
| `query` | `string` | required | Optional search filter for member names. |
| `levelFilter` | `int32` | required | Member rank filter (0=all, 1=admins, 2=pending). |

## Behavior

### Sender
Sent when the player opens the members tab of a group dialog or pages through the member list.


### Receiver
The server responds with the requested page of members, including their rank, name, figure, and join date. Confirmed in GLADIATOR.

## Notes

- No additional notes
